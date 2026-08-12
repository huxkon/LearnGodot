$ErrorActionPreference = "Stop"
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$sourceRoot = Join-Path $projectRoot "godot_learning_web_content"
$sourcePath = Join-Path $sourceRoot "content.database.json"
$contentScriptPath = Join-Path $projectRoot "src/data/content.js"
$contentPrefix = "window.GODOT_LEARN_DATA = "
$utf8 = [System.Text.Encoding]::UTF8
$errors = [System.Collections.Generic.List[string]]::new()

function Read-JsonFile([string]$path) {
    [System.IO.File]::ReadAllText($path, $utf8) | ConvertFrom-Json
}

function Json-Shape($value) {
    $value | ConvertTo-Json -Compress -Depth 100
}

function Get-RelativeLuminance([string]$hexColor) {
    $hex = $hexColor.TrimStart("#")
    if ($hex -notmatch '^[0-9a-fA-F]{6}$') { throw "Geçersiz hex renk: $hexColor" }
    $channels = @(0, 2, 4 | ForEach-Object {
        $value = [Convert]::ToInt32($hex.Substring($_, 2), 16) / 255
        if ($value -le 0.04045) { $value / 12.92 } else { [Math]::Pow(($value + 0.055) / 1.055, 2.4) }
    })
    return 0.2126 * $channels[0] + 0.7152 * $channels[1] + 0.0722 * $channels[2]
}

function Get-ContrastRatio([string]$foreground, [string]$background) {
    $foregroundLuminance = Get-RelativeLuminance $foreground
    $backgroundLuminance = Get-RelativeLuminance $background
    $lighter = [Math]::Max($foregroundLuminance, $backgroundLuminance)
    $darker = [Math]::Min($foregroundLuminance, $backgroundLuminance)
    return ($lighter + 0.05) / ($darker + 0.05)
}

function Get-CompositeHex([string]$foreground, [string]$background, [double]$alpha) {
    $foregroundHex = $foreground.TrimStart("#")
    $backgroundHex = $background.TrimStart("#")
    $channels = @(0, 2, 4 | ForEach-Object {
        $foregroundChannel = [Convert]::ToInt32($foregroundHex.Substring($_, 2), 16)
        $backgroundChannel = [Convert]::ToInt32($backgroundHex.Substring($_, 2), 16)
        [Math]::Round($foregroundChannel * $alpha + $backgroundChannel * (1 - $alpha))
    })
    return "#" + (($channels | ForEach-Object { [Convert]::ToString([int]$_, 16).PadLeft(2, "0") }) -join "")
}

function Get-CssThemeTokens([string]$cssText, [string]$selector) {
    $selectorPattern = if ($selector -eq ":root") { '(?m)^:root\s*\{(?<body>[\s\S]*?)^\}' } else { '(?m)^\[data-theme="dark"\]\s*\{(?<body>[\s\S]*?)^\}' }
    $match = [regex]::Match($cssText, $selectorPattern)
    if (-not $match.Success) { throw "CSS theme bloğu bulunamadı: $selector" }
    $tokens = @{}
    foreach ($tokenMatch in [regex]::Matches($match.Groups["body"].Value, '--(?<name>[a-z0-9-]+)\s*:\s*(?<value>#[0-9a-fA-F]{6})\s*;')) {
        $tokens[$tokenMatch.Groups["name"].Value] = $tokenMatch.Groups["value"].Value.ToLowerInvariant()
    }
    return $tokens
}

function Get-GuidedStringSyntaxIssue([string]$text) {
    $inString = $false
    $escaped = $false
    for ($index = 0; $index -lt $text.Length; $index++) {
        $character = $text[$index]
        if (-not $inString) {
            if ($character -eq '"') { $inString = $true }
            continue
        }
        if ($escaped) {
            $escaped = $false
            continue
        }
        if ($character -eq '\') {
            $escaped = $true
            continue
        }
        if ($character -eq "`r" -or $character -eq "`n") {
            return "satır sonuna kadar kapanmayan double-quoted string"
        }
        if ($character -ne '"') { continue }

        $inString = $false
        $nextIndex = $index + 1
        while ($nextIndex -lt $text.Length -and [char]::IsWhiteSpace($text[$nextIndex])) { $nextIndex++ }
        if ($nextIndex -lt $text.Length -and ($text[$nextIndex] -match '[A-Za-z_$]')) {
            return "string kapanışından sonra ayraçsız JavaScript token'ı"
        }
    }
    if ($inString) { return "dosya sonunda kapanmayan double-quoted string" }
    return $null
}

$guidedStringGuardProbe = 'godot: ["Input.is_action_pressed("move_left")"]'
if (-not (Get-GuidedStringSyntaxIssue $guidedStringGuardProbe)) {
    throw "Guided JavaScript string syntax guard kendi regression probe'unu yakalayamadı."
}

$sourceText = [System.IO.File]::ReadAllText($sourcePath, $utf8)
$database = $sourceText | ConvertFrom-Json
$contentScript = [System.IO.File]::ReadAllText($contentScriptPath, $utf8)
if (-not $contentScript.StartsWith($contentPrefix) -or -not $contentScript.EndsWith(";")) {
    throw "src/data/content.js beklenen window.GODOT_LEARN_DATA formatında değil."
}
$embeddedJson = $contentScript.Substring($contentPrefix.Length, $contentScript.Length - $contentPrefix.Length - 1)
if ($sourceText -cne $embeddedJson) { $errors.Add("content.js kaynak content.database.json ile birebir aynı değil.") }

# Split JSON dosyaları combined database ile yapısal olarak aynı kalmalıdır.
$splitSources = @{
    meta = "meta.json"
    categories = "categories.json"
    terms = "terms.json"
    lessons = "lessons.json"
    quizzes = "quizzes.json"
    learning_paths = "learning_paths.json"
}
foreach ($entry in $splitSources.GetEnumerator()) {
    $split = Read-JsonFile (Join-Path $sourceRoot $entry.Value)
    if ((Json-Shape $split) -cne (Json-Shape $database.($entry.Key))) {
        $errors.Add("$($entry.Value) combined content.database.json içindeki '$($entry.Key)' ile drift etmiş.")
    }
}

$termIds = @($database.terms.id)
$lessonIds = @($database.lessons.id)
$quizIds = @($database.quizzes.id)
$categoryIds = @($database.categories.id)
$termMap = @{}
$database.terms | ForEach-Object { $termMap[$_.id] = $_ }

$expectedCounts = @{ Terms = 346; Core = 128; Recognize = 218; Lessons = 14; Questions = 42; First50 = 50 }
if ($database.terms.Count -ne $expectedCounts.Terms) { $errors.Add("$($expectedCounts.Terms) term bekleniyordu; $($database.terms.Count) bulundu.") }
if ($database.lessons.Count -ne $expectedCounts.Lessons) { $errors.Add("$($expectedCounts.Lessons) ders bekleniyordu; $($database.lessons.Count) bulundu.") }
foreach ($set in @(
    @{ Name = "term"; Values = $termIds },
    @{ Name = "lesson"; Values = $lessonIds },
    @{ Name = "quiz"; Values = $quizIds },
    @{ Name = "category"; Values = $categoryIds }
)) {
    if (@($set.Values | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("Tekrarlanan $($set.Name) ID bulundu.") }
}

foreach ($term in $database.terms) {
    foreach ($relatedId in @($term.related_term_ids)) {
        if ($relatedId -notin $termIds) { $errors.Add("$($term.id): eksik related term '$relatedId'.") }
    }
    foreach ($linkedLessonId in @($term.lesson_ids)) {
        if ($linkedLessonId -notin $lessonIds) { $errors.Add("$($term.id): eksik lesson '$linkedLessonId'.") }
    }
    foreach ($categoryId in @($term.category_ids)) {
        if ($categoryId -notin $categoryIds) { $errors.Add("$($term.id): eksik category '$categoryId'.") }
    }
    if ($term.tier -eq "core") {
        if ($term.previous_core_term_id) {
            $previous = $termMap[$term.previous_core_term_id]
            if (-not $previous -or $previous.tier -ne "core") { $errors.Add("$($term.id): geçersiz previous core '$($term.previous_core_term_id)'.") }
            elseif ($previous.next_core_term_id -ne $term.id) { $errors.Add("$($term.id): previous/next zinciri karşılıklı değil.") }
        }
        if ($term.next_core_term_id) {
            $next = $termMap[$term.next_core_term_id]
            if (-not $next -or $next.tier -ne "core") { $errors.Add("$($term.id): geçersiz next core '$($term.next_core_term_id)'.") }
            elseif ($next.previous_core_term_id -ne $term.id) { $errors.Add("$($term.id): next/previous zinciri karşılıklı değil.") }
        }
    }
}

$forbiddenRelatedPairs = @(
    @{ Left = "rpc"; Right = "normal" },
    @{ Left = "rpc"; Right = "remote" },
    @{ Left = "repository"; Right = "control" },
    @{ Left = "backup"; Right = "control" },
    @{ Left = "ui-gui"; Right = "interface" },
    @{ Left = "audio-bus"; Right = "client-server" },
    @{ Left = "sfx-bgm"; Right = "client-server" },
    @{ Left = "sfx-bgm"; Right = "peer" },
    @{ Left = "spatial-audio"; Right = "packet" },
    @{ Left = "spatial-audio"; Right = "bandwidth" }
)
foreach ($pair in $forbiddenRelatedPairs) {
    if ($termMap[$pair.Left].related_term_ids -contains $pair.Right) { $errors.Add("Yanlış related-term bağlantısı sürüyor: $($pair.Left) -> $($pair.Right).") }
    if ($termMap[$pair.Right].related_term_ids -contains $pair.Left) { $errors.Add("Yanlış related-term bağlantısı sürüyor: $($pair.Right) -> $($pair.Left).") }
}

$tileTerm = $termMap["tile-tilemap"]
if (-not $tileTerm -or $tileTerm.tier -ne "core") { $errors.Add("Stable canonical ID 'tile-tilemap' core term olarak korunmadı.") }
if (-not $tileTerm.name.Contains("TileMapLayer") -or -not $tileTerm.definition.Contains("TileSet") -or -not $tileTerm.definition.Contains("deprecated")) {
    $errors.Add("tile-tilemap kullanıcı metni güncel Tile/TileSet/TileMapLayer ve deprecated TileMap ayrımını içermiyor.")
}

foreach ($lesson in $database.lessons) {
    $listedIds = @($lesson.core_term_ids) + @($lesson.recognize_term_ids)
    if (@($listedIds | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$($lesson.id): duplicate term listesi var.") }
    foreach ($termId in $lesson.core_term_ids) {
        $term = $termMap[$termId]
        if (-not $term) { $errors.Add("$($lesson.id): eksik core term '$termId'.") }
        elseif ($term.tier -ne "core" -or $lesson.id -notin $term.lesson_ids) { $errors.Add("$($lesson.id)/$termId core üyeliği karşılıklı değil.") }
    }
    foreach ($termId in $lesson.recognize_term_ids) {
        $term = $termMap[$termId]
        if (-not $term) { $errors.Add("$($lesson.id): eksik recognize term '$termId'.") }
        elseif ($term.tier -ne "recognize" -or $lesson.id -notin $term.lesson_ids) { $errors.Add("$($lesson.id)/$termId recognize üyeliği karşılıklı değil.") }
    }
    if ($lesson.quiz_id -notin $quizIds) { $errors.Add("$($lesson.id): eksik quiz '$($lesson.quiz_id)'.") }
}

$questionIds = @()
foreach ($quiz in $database.quizzes) {
    if ($quiz.lesson_id -notin $lessonIds) { $errors.Add("$($quiz.id): eksik lesson '$($quiz.lesson_id)'.") }
    else {
        $lesson = $database.lessons | Where-Object id -eq $quiz.lesson_id
        if ($lesson.quiz_id -ne $quiz.id) { $errors.Add("$($quiz.id): lesson/quiz bağlantısı karşılıklı değil.") }
    }
    $questionIds += @($quiz.questions.id)
}
if (@($questionIds | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("Tekrarlanan quiz question ID bulundu.") }

foreach ($path in $database.learning_paths.paths) {
    if (@($path.term_ids | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$($path.id): duplicate learning path term ID var.") }
    foreach ($termId in $path.term_ids) {
        if ($termId -notin $termIds) { $errors.Add("$($path.id): eksik term '$termId'.") }
    }
}
$first50 = $database.learning_paths.paths | Where-Object id -eq "first-50"
$coreCourse = $database.learning_paths.paths | Where-Object id -eq "core-course"
$fullGlossary = $database.learning_paths.paths | Where-Object id -eq "full-glossary"
$coreIds = @($database.terms | Where-Object tier -eq "core" | ForEach-Object id)
$courseCoreIds = @($database.lessons | Sort-Object number | ForEach-Object { $_.core_term_ids })
if ($first50.term_ids.Count -ne 50) { $errors.Add("İlk 50 yolu 50 terim içermiyor.") }
if ((@($coreCourse.term_ids) -join "|") -cne (@($courseCoreIds) -join "|")) { $errors.Add("core-course lesson core sırası ile birebir eşleşmiyor.") }
if ((@($fullGlossary.term_ids | Sort-Object) -join "|") -cne (@($termIds | Sort-Object) -join "|")) { $errors.Add("full-glossary bütün term kümesiyle eşleşmiyor.") }

$expectedLesson2Order = @(
    "variable", "constant", "data-type", "dynamic-vs-static-typing", "function-method", "parameter-vs-argument",
    "return-value", "scope", "conditional", "array-dictionary", "loop", "class-object-instance"
)
$lesson2 = $database.lessons | Where-Object id -eq "lesson-02"
if ((@($lesson2.core_term_ids) -join "|") -cne ($expectedLesson2Order -join "|")) { $errors.Add("Lesson 2 canonical core sırası beklenen pedagojik sırada değil.") }

for ($index = 0; $index -lt $courseCoreIds.Count; $index++) {
    $term = $termMap[$courseCoreIds[$index]]
    $expectedPrevious = if ($index -gt 0) { $courseCoreIds[$index - 1] } else { $null }
    $expectedNext = if ($index -lt $courseCoreIds.Count - 1) { $courseCoreIds[$index + 1] } else { $null }
    if ($term.previous_core_term_id -ne $expectedPrevious) { $errors.Add("$($term.id): previous core course sırasıyla eşleşmiyor; '$expectedPrevious' bekleniyordu.") }
    if ($term.next_core_term_id -ne $expectedNext) { $errors.Add("$($term.id): next core course sırasıyla eşleşmiyor; '$expectedNext' bekleniyordu.") }
}

$actualCoreCount = $coreIds.Count
$actualRecognizeCount = @($database.terms | Where-Object tier -eq "recognize").Count
$actualQuestionCount = @($database.quizzes | ForEach-Object questions).Count
if ($actualCoreCount -ne $expectedCounts.Core) { $errors.Add("$($expectedCounts.Core) core term bekleniyordu; $actualCoreCount bulundu.") }
if ($actualRecognizeCount -ne $expectedCounts.Recognize) { $errors.Add("$($expectedCounts.Recognize) recognize term bekleniyordu; $actualRecognizeCount bulundu.") }
if ($actualQuestionCount -ne $expectedCounts.Questions) { $errors.Add("$($expectedCounts.Questions) quiz sorusu bekleniyordu; $actualQuestionCount bulundu.") }
if ($first50.term_ids.Count -ne $expectedCounts.First50) { $errors.Add("First 50 yolu $($expectedCounts.First50) terim içermiyor.") }
if ($database.meta.counts.terms -ne $database.terms.Count) { $errors.Add("Metadata term count gerçek sayıyla eşleşmiyor.") }
if ($database.meta.counts.core_terms -ne $actualCoreCount) { $errors.Add("Metadata core count gerçek sayıyla eşleşmiyor.") }
if ($database.meta.counts.first_50_terms -ne $first50.term_ids.Count) { $errors.Add("Metadata İlk 50 count eşleşmiyor.") }

$requiredFiles = @(
    "index.html", "robots.txt", "sitemap.xml", "favicon.ico", "favicon-16x16.png", "favicon-32x32.png", "favicon-48x48.png",
    "assets/brand/learngodot-icon.svg", "docs/SEO.md", "src/styles.css", "src/data/content.js", "src/data/locale.js", "src/data/curriculum.js",
    "src/js/site-config.js",
    "src/js/app.js", "src/js/data.js", "src/js/storage.js", "src/js/router.js", "src/js/ui-copy.js", "src/js/views.js", "src/js/components.js"
)
foreach ($file in $requiredFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $projectRoot $file) -PathType Leaf)) { $errors.Add("Eksik uygulama dosyası: $file") }
}

$indexHtml = [System.IO.File]::ReadAllText((Join-Path $projectRoot "index.html"), $utf8)
if ($indexHtml -match 'type\s*=\s*["'']module["'']') { $errors.Add("index.html hâlâ ES module kullanıyor.") }
$productionUrl = "https://huxkon.github.io/LearnGodot/"
$expectedTitle = "T$([char]0x00FC)rk$([char]0x00E7)e Godot $([char]0x00D6)$([char]0x011F)ren | LearnGodot"
if (-not $indexHtml.Contains("<title>$expectedTitle</title>")) { $errors.Add("index.html SEO title değeri beklenen başlık değil.") }
if (([regex]::Matches($indexHtml, '<meta name="description" ')).Count -ne 1) { $errors.Add("index.html tek bir meta description içermeli.") }
if (-not $indexHtml.Contains("<link rel=`"canonical`" href=`"$productionUrl`" />")) { $errors.Add("index.html canonical URL production URL ile eşleşmiyor.") }
if ($indexHtml -match '(?i)noindex') { $errors.Add("index.html yanlışlıkla noindex içeriyor.") }
if (-not $indexHtml.Contains('<meta name="application-name" content="LearnGodot" />')) { $errors.Add("index.html application-name LearnGodot değil.") }
if ($indexHtml.Contains('data:image/svg+xml')) { $errors.Add("Eski data URI favicon kalıntısı bulundu.") }
foreach ($faviconFragment in @(
    '<link rel="icon" href="favicon.ico" sizes="any" />',
    '<link rel="icon" type="image/svg+xml" href="assets/brand/learngodot-icon.svg" />',
    '<link rel="icon" type="image/png" sizes="48x48" href="favicon-48x48.png" />',
    '<link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />',
    '<link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />'
)) {
    if (-not $indexHtml.Contains($faviconFragment)) { $errors.Add("Eksik canonical favicon bağlantısı: $faviconFragment") }
}
if (([regex]::Matches($indexHtml, '"@type"\s*:\s*"WebSite"')).Count -ne 1) { $errors.Add("Homepage tam bir adet WebSite JSON-LD içermeli.") }
foreach ($jsonLdFragment in @('"@context": "https://schema.org"', '"name": "LearnGodot"', '"url": "https://huxkon.github.io/LearnGodot/"', '"inLanguage": "tr"')) {
    if (-not $indexHtml.Contains($jsonLdFragment)) { $errors.Add("WebSite JSON-LD alanı eksik: $jsonLdFragment") }
}

$siteConfigText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/site-config.js"), $utf8)
foreach ($field in @("siteName", "baseUrl", "brandIconPath", "defaultLocale", "defaultTitle", "defaultDescription")) {
    if (-not $siteConfigText.Contains("${field}:")) { $errors.Add("Site config '$field' alanını içermiyor.") }
}
if (-not $siteConfigText.Contains("baseUrl: `"$productionUrl`"")) { $errors.Add("Site config production URL ile eşleşmiyor.") }
if (-not $siteConfigText.Contains('brandIconPath: "assets/brand/learngodot-icon.svg"')) { $errors.Add("Site config canonical brand icon yolunu taşımıyor.") }
$configuredTitle = [regex]::Match($siteConfigText, 'defaultTitle:\s*"([^"]+)"').Groups[1].Value
$configuredDescription = [regex]::Match($siteConfigText, 'defaultDescription:\s*"([^"]+)"').Groups[1].Value
if ($configuredTitle -cne $expectedTitle) { $errors.Add("Site config default title değeri beklenen SEO title değil.") }
if (-not $configuredDescription -or -not $indexHtml.Contains("<meta name=`"description`" content=`"$configuredDescription`" />")) { $errors.Add("Site config ve index.html meta description değerleri eşleşmiyor.") }
foreach ($socialFragment in @(
    '<meta property="og:type" content="website" />',
    '<meta property="og:site_name" content="LearnGodot" />',
    '<meta property="og:locale" content="tr_TR" />',
    '<meta name="twitter:card" content="summary" />'
)) {
    if (-not $indexHtml.Contains($socialFragment)) { $errors.Add("Eksik sosyal metadata: $socialFragment") }
}

$robotsText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "robots.txt"), $utf8)
if (-not $robotsText.Contains("Allow: /LearnGodot/")) { $errors.Add("robots.txt GitHub Pages proje yolunu crawl'a açmıyor.") }
if ($robotsText -match '(?im)^\s*Disallow\s*:\s*/LearnGodot') { $errors.Add("robots.txt public proje yolunu engelliyor.") }
if (-not $robotsText.Contains("Sitemap: ${productionUrl}sitemap.xml")) { $errors.Add("robots.txt sitemap URL değeri yanlış.") }

try {
    [xml]$sitemap = [System.IO.File]::ReadAllText((Join-Path $projectRoot "sitemap.xml"), $utf8)
    $sitemapUrls = @($sitemap.urlset.url | ForEach-Object { [string]$_.loc })
    if ($sitemapUrls.Count -ne 1 -or $sitemapUrls[0] -cne $productionUrl) { $errors.Add("sitemap.xml yalnız canonical homepage URL'sini içermeli.") }
    if (@($sitemapUrls | Where-Object { $_.Contains("#") }).Count) { $errors.Add("sitemap.xml hash URL içeriyor.") }
} catch {
    $errors.Add("sitemap.xml geçerli XML değil: $($_.Exception.Message)")
}

# Ürün markası yalnız kullanıcıya dönük/proje metadata alanlarında denetlenir; teknik Atlas terimleri kapsam dışıdır.
$brandFiles = @(
    "README.md", "index.html", "src/js/ui-copy.js", "src/js/app.js", "scripts/serve.ps1",
    "godot_learning_web_content/README.md", "godot_learning_web_content/meta.json"
)
foreach ($brandFile in $brandFiles) {
    $brandText = [System.IO.File]::ReadAllText((Join-Path $projectRoot $brandFile), $utf8)
    if ($brandText.Contains("Godot Atlası") -or $brandText.Contains("Godot + GDScript Öğrenme Platformu")) {
        $errors.Add("Stale ürün markası bulundu: $brandFile")
    }
}
if ($database.meta.project -ne "LearnGodot") { $errors.Add("Canonical metadata project adı LearnGodot değil.") }
$uiCopyText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/ui-copy.js"), $utf8)
if ($uiCopyText -notmatch 'appName:\s*"LearnGodot"') { $errors.Add("Reusable UI brand kaynağı LearnGodot değil.") }
$brandIconText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "assets/brand/learngodot-icon.svg"), $utf8)
if (-not $brandIconText.Contains('viewBox="0 0 64 64"') -or -not $brandIconText.Contains('fill="#3972e6"') -or -not $brandIconText.Contains('fill="#fff"')) { $errors.Add("Canonical LearnGodot SVG beklenen kare mavi/beyaz kimliği taşımıyor.") }

$legacyPromptText = [System.IO.File]::ReadAllText((Join-Path $sourceRoot "VIBE_CODING_PROMPT.md"), $utf8)
$legacyWarning = "LEGACY / HISTORICAL INITIAL PROMPT - DO NOT EXECUTE AS CURRENT PROJECT INSTRUCTIONS"
if (-not $legacyPromptText.StartsWith("> **$legacyWarning**")) { $errors.Add("Legacy prompt uyarısı dosyanın ilk satırında değil.") }
if (([regex]::Matches($legacyPromptText, [regex]::Escape($legacyWarning))).Count -ne 1) { $errors.Add("Legacy prompt uyarısı tekil değil.") }
$guidedFiles = @(Get-ChildItem (Join-Path $projectRoot "src/data") -Filter "lesson-*-guided.js" | Sort-Object Name)
$guideScriptPaths = @($guidedFiles | ForEach-Object { "src/data/$($_.Name)" })
$expectedGuidedNames = @(1..14 | ForEach-Object { "lesson-{0:D2}-guided.js" -f $_ })
if ((@($guidedFiles.Name) -join "|") -cne ($expectedGuidedNames -join "|")) { $errors.Add("Lesson 1-14 guided dosyaları eksiksiz ve sıralı keşfedilmedi.") }
$expectedScriptOrder = @("src/js/site-config.js", "src/data/content.js", "src/data/locale.js", "src/data/curriculum.js") + $guideScriptPaths + @(
    "src/js/ui-copy.js", "src/js/data.js", "src/js/storage.js", "src/js/router.js", "src/js/components.js", "src/js/views.js", "src/js/app.js"
)
$actualScriptOrder = @([regex]::Matches($indexHtml, '<script\s+defer\s+src="([^"]+)"\s*></script>') | ForEach-Object { $_.Groups[1].Value })
if (($actualScriptOrder -join "|") -ne ($expectedScriptOrder -join "|")) { $errors.Add("Klasik script yükleme sırası beklenen mimariyle eşleşmiyor.") }
$lesson14ScriptIndex = [array]::IndexOf($actualScriptOrder, "src/data/lesson-14-guided.js")
$uiCopyScriptIndex = [array]::IndexOf($actualScriptOrder, "src/js/ui-copy.js")
if ($lesson14ScriptIndex -lt 0 -or $uiCopyScriptIndex -lt 0 -or $lesson14ScriptIndex -ge $uiCopyScriptIndex) { $errors.Add("Lesson 14 guided script UI/runtime scriptlerinden önce yüklenmiyor.") }

$lesson7GuideText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/data/lesson-07-guided.js"), $utf8)
if (-not $lesson7GuideText.Contains('shortTitle: "Tile / TileMapLayer"') -or -not $lesson7GuideText.Contains("TileMap node'u deprecated")) {
    $errors.Add("Lesson 7 guided metni güncel TileMapLayer ve deprecated TileMap ayrımını içermiyor.")
}

$sourceReadmeText = [System.IO.File]::ReadAllText((Join-Path $sourceRoot "README.md"), $utf8)
$staleGuidedReadmeText = "Lesson 1$([char]0x2013)3 guided enrichment"
if ($sourceReadmeText.Contains($staleGuidedReadmeText)) { $errors.Add("Source README stale Lesson 1-3 guided bilgisini taşıyor.") }
$dynamicDiscoveryText = "dinamik ke$([char]0x015F)fedilir"
foreach ($readmeToken in @("lesson-*-guided.js", $dynamicDiscoveryText, "Memory Bank")) {
    if (-not $sourceReadmeText.Contains($readmeToken)) { $errors.Add("Source README guided discovery açıklaması eksik: $readmeToken") }
}

$curriculumText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/data/curriculum.js"), $utf8)
foreach ($lessonId in $lessonIds) {
    if (([regex]::Matches($curriculumText, '"' + [regex]::Escape($lessonId) + '"\s*:')).Count -ne 1) { $errors.Add("Curriculum metadata '$lessonId' kaydı tekil değil.") }
}
foreach ($field in @("lessonId", "displayTitle", "displayDescription", "section", "order", "technicalTopics")) {
    if (([regex]::Matches($curriculumText, "\b$field\s*:")).Count -lt $lessonIds.Count) { $errors.Add("Curriculum '$field' alanı 14 dersin tamamında yok.") }
}

foreach ($guideFile in $guidedFiles) {
    $guideText = [System.IO.File]::ReadAllText($guideFile.FullName, $utf8)
    $stringSyntaxIssue = Get-GuidedStringSyntaxIssue $guideText
    if ($stringSyntaxIssue) { $errors.Add("$($guideFile.Name): $stringSyntaxIssue bulundu.") }
    $lessonMatch = [regex]::Match($guideText, 'lessonId:\s*"([^"]+)"')
    if (-not $lessonMatch.Success) { $errors.Add("$($guideFile.Name): lessonId bulunamadı."); continue }
    $lessonId = $lessonMatch.Groups[1].Value
    $lesson = $database.lessons | Where-Object id -eq $lessonId
    if (-not $lesson) { $errors.Add("$($guideFile.Name): bilinmeyen lesson '$lessonId'."); continue }
    if ($guideFile.Name -cne "$lessonId-guided.js") { $errors.Add("$($guideFile.Name): dosya adı lessonId '$lessonId' ile eşleşmiyor.") }
    if (([regex]::Matches($guideText, 'window\.GODOT_LESSON_GUIDES\[guide\.lessonId\]\s*=\s*guide\s*;')).Count -ne 1) {
        $errors.Add("$($guideFile.Name): generic runtime guided registry kaydı tekil değil.")
    }

    $orderMatch = [regex]::Match($guideText, 'order:\s*\[(?<body>.*?)\],\s*\r?\n\s*topics:', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    $orderIds = @([regex]::Matches($orderMatch.Groups['body'].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
    if (@($orderIds | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$lessonId guided order duplicate topic içeriyor.") }
    if ((@($orderIds) -join "|") -cne (@($lesson.core_term_ids) -join "|")) { $errors.Add("$lessonId guided order source core_term_ids sırasıyla birebir eşleşmiyor.") }

    $topicsMatch = [regex]::Match($guideText, 'topics:\s*\{(?<body>.*?)\r?\n\s{4}\},\s*\r?\n\s{4}summary:', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    $topicKeys = @([regex]::Matches($topicsMatch.Groups['body'].Value, '(?m)^\s{6}(?:"(?<quoted>[^"]+)"|(?<bare>[A-Za-z0-9_-]+)):\s*\{') | ForEach-Object {
        if ($_.Groups['quoted'].Success) { $_.Groups['quoted'].Value } else { $_.Groups['bare'].Value }
    })
    if ((@($topicKeys) -join "|") -cne (@($orderIds) -join "|")) { $errors.Add("$lessonId guide.topics anahtarları guided order ile birebir ve aynı sırada eşleşmiyor.") }
    $prerequisiteBlocks = @([regex]::Matches($topicsMatch.Groups['body'].Value, 'prerequisites:\s*\[([^\]]*)\]'))
    foreach ($block in $prerequisiteBlocks) {
        $prerequisiteIds = @([regex]::Matches($block.Groups[1].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
        if (@($prerequisiteIds | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$lessonId topic prerequisites duplicate ID içeriyor.") }
        foreach ($prerequisiteId in $prerequisiteIds) {
            if ($prerequisiteId -notin $topicKeys) { $errors.Add("$lessonId prerequisite '$prerequisiteId' aynı guide içinde topic olarak bulunmuyor; guided renderer guide.topics lookup'ı yapamaz.") }
        }
    }

    $cardIds = @([regex]::Matches($guideText, 'id:\s*"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
    if ((@($cardIds | Sort-Object) -join "|") -cne (@($lesson.recognize_term_ids | Sort-Object) -join "|")) { $errors.Add("$lessonId recognize kart kapsamı source recognize kümesiyle eşleşmiyor.") }
    foreach ($termId in $lesson.recognize_term_ids) {
        if (@($cardIds | Where-Object { $_ -eq $termId }).Count -ne 1) { $errors.Add("$lessonId '$termId' recognize kartı tam bir kez bulunmalı.") }
    }
    foreach ($field in @("fast", "model", "why", "godot", "example", "mistake", "check")) {
        if (([regex]::Matches($guideText, "\b$field\s*:")).Count -lt $lesson.core_term_ids.Count) { $errors.Add("$lessonId '$field' alanı tüm core topiclerde yok.") }
    }
    if (-not $guideText.Contains("summary:")) { $errors.Add("$lessonId ilişki özeti içermiyor.") }

    $catalogMatch = [regex]::Match($guideText, 'quickTerms:\s*\{(?<body>.*?)\r?\n\s*\},\s*\r?\n\s*order:', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    $catalogIds = @([regex]::Matches($catalogMatch.Groups['body'].Value, '(?m)^\s{6}([a-z0-9_-]+):\s*\{') | ForEach-Object { $_.Groups[1].Value })
    $selectedBlocks = @([regex]::Matches($guideText, 'quickTermIds:\s*\[([^\]]*)\]'))
    $selectedIds = @($selectedBlocks | ForEach-Object { [regex]::Matches($_.Groups[1].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value } })
    foreach ($block in $selectedBlocks) {
        $ids = @([regex]::Matches($block.Groups[1].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
        if (@($ids | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$lessonId topic quickTermIds duplicate içeriyor.") }
    }
    foreach ($id in $selectedIds) { if ($id -notin $catalogIds) { $errors.Add("$lessonId seçili quick-term '$id' katalogda yok.") } }
    foreach ($id in $catalogIds) { if ($id -notin $selectedIds) { $errors.Add("$lessonId katalog quick-term '$id' hiçbir topicte seçilmemiş.") } }
    $markerIds = @([regex]::Matches($guideText, '\[\[([^|\]]+)\|[^\]]+\]\]') | ForEach-Object { $_.Groups[1].Value } | Select-Object -Unique)
    foreach ($id in $markerIds) { if ($id -notin $selectedIds) { $errors.Add("$lessonId inline quick marker '$id' explicit seçime bağlı değil.") } }
}

$sourceScripts = Get-ChildItem (Join-Path $projectRoot "src") -Recurse -Filter *.js
if ($sourceScripts | Select-String -Pattern '^\s*(import|export)\s' -CaseSensitive) { $errors.Add("Klasik scriptlerde import/export kalıntısı bulundu.") }
if ($sourceScripts | Select-String -Pattern '\bfetch\s*\(' -CaseSensitive) { $errors.Add("file:// çalışmasını bozabilecek fetch kullanımı bulundu.") }

$viewsText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/views.js"), $utf8)
$appText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/app.js"), $utf8)
$componentsText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/components.js"), $utf8)
$dataText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/data.js"), $utf8)
$uiCopyText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/ui-copy.js"), $utf8)
$routerText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/router.js"), $utf8)
$storageText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/storage.js"), $utf8)
$stylesText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/styles.css"), $utf8)
$lightTokens = Get-CssThemeTokens $stylesText ":root"
$darkTokens = Get-CssThemeTokens $stylesText "dark"
$contrastCases = @(
    @{ Name = "light faint/surface-2"; Foreground = $lightTokens["faint"]; Background = $lightTokens["surface-2"]; Minimum = 4.5 },
    @{ Name = "light faint/surface-3"; Foreground = $lightTokens["faint"]; Background = $lightTokens["surface-3"]; Minimum = 4.5 },
    @{ Name = "light muted/violet-soft"; Foreground = $lightTokens["muted"]; Background = $lightTokens["violet-soft"]; Minimum = 4.5 },
    @{ Name = "light violet/violet-soft"; Foreground = $lightTokens["violet"]; Background = $lightTokens["violet-soft"]; Minimum = 4.5 },
    @{ Name = "light amber/amber-soft"; Foreground = $lightTokens["amber"]; Background = $lightTokens["amber-soft"]; Minimum = 4.5 },
    @{ Name = "light primary text"; Foreground = "#ffffff"; Background = $lightTokens["accent-solid"]; Minimum = 4.5 },
    @{ Name = "light primary text hover"; Foreground = "#ffffff"; Background = $lightTokens["accent-solid-hover"]; Minimum = 4.5 },
    @{ Name = "light focus/bg"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["bg"]; Minimum = 3.0 },
    @{ Name = "light focus/surface"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["surface"]; Minimum = 3.0 },
    @{ Name = "light focus/surface-2"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["surface-2"]; Minimum = 3.0 },
    @{ Name = "light focus/surface-3"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["surface-3"]; Minimum = 3.0 },
    @{ Name = "light focus/primary"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["accent-solid"]; Minimum = 3.0 },
    @{ Name = "light focus/primary-hover"; Foreground = $lightTokens["focus-ring"]; Background = $lightTokens["accent-solid-hover"]; Minimum = 3.0 },
    @{ Name = "dark faint/surface-2"; Foreground = $darkTokens["faint"]; Background = $darkTokens["surface-2"]; Minimum = 4.5 },
    @{ Name = "dark faint/surface-3"; Foreground = $darkTokens["faint"]; Background = $darkTokens["surface-3"]; Minimum = 4.5 },
    @{ Name = "dark muted/violet-soft"; Foreground = $darkTokens["muted"]; Background = $darkTokens["violet-soft"]; Minimum = 4.5 },
    @{ Name = "dark violet/violet-soft"; Foreground = $darkTokens["violet"]; Background = $darkTokens["violet-soft"]; Minimum = 4.5 },
    @{ Name = "dark amber/amber-soft"; Foreground = $darkTokens["amber"]; Background = $darkTokens["amber-soft"]; Minimum = 4.5 },
    @{ Name = "dark primary text"; Foreground = "#ffffff"; Background = $darkTokens["accent-solid"]; Minimum = 4.5 },
    @{ Name = "dark primary text hover"; Foreground = "#ffffff"; Background = $darkTokens["accent-solid-hover"]; Minimum = 4.5 },
    @{ Name = "dark focus/bg"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["bg"]; Minimum = 3.0 },
    @{ Name = "dark focus/surface"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["surface"]; Minimum = 3.0 },
    @{ Name = "dark focus/surface-2"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["surface-2"]; Minimum = 3.0 },
    @{ Name = "dark focus/surface-3"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["surface-3"]; Minimum = 3.0 },
    @{ Name = "dark focus/primary"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["accent-solid"]; Minimum = 3.0 },
    @{ Name = "dark focus/primary-hover"; Foreground = $darkTokens["focus-ring"]; Background = $darkTokens["accent-solid-hover"]; Minimum = 3.0 }
)
foreach ($case in $contrastCases) {
    if (-not $case.Foreground -or -not $case.Background) {
        $errors.Add("Contrast token eksik: $($case.Name)")
        continue
    }
    $ratio = Get-ContrastRatio $case.Foreground $case.Background
    if ($ratio -lt $case.Minimum) { $errors.Add("Contrast yetersiz: $($case.Name) = $([Math]::Round($ratio, 3)):1") }
}
$guidedLabelMatch = [regex]::Match($stylesText, '\.guided-navigation\s+\.button\s*>\s*span\s*\{[^}]*opacity\s*:\s*(?<opacity>0?\.\d+)\s*;', [System.Text.RegularExpressions.RegexOptions]::Singleline)
if (-not $guidedLabelMatch.Success) {
    $errors.Add("Guided navigation üst etiket opacity değeri bulunamadı")
} else {
    $guidedLabelColor = Get-CompositeHex "#ffffff" $lightTokens["accent-solid"] ([double]::Parse($guidedLabelMatch.Groups["opacity"].Value, [System.Globalization.CultureInfo]::InvariantCulture))
    $guidedLabelRatio = Get-ContrastRatio $guidedLabelColor $lightTokens["accent-solid"]
    if ($guidedLabelRatio -lt 4.5) { $errors.Add("Guided primary üst etiket contrast yetersiz: $([Math]::Round($guidedLabelRatio, 3)):1") }
    $guidedHoverLabelColor = Get-CompositeHex "#ffffff" $lightTokens["accent-solid-hover"] ([double]::Parse($guidedLabelMatch.Groups["opacity"].Value, [System.Globalization.CultureInfo]::InvariantCulture))
    $guidedHoverLabelRatio = Get-ContrastRatio $guidedHoverLabelColor $lightTokens["accent-solid-hover"]
    if ($guidedHoverLabelRatio -lt 4.5) { $errors.Add("Guided primary hover üst etiket contrast yetersiz: $([Math]::Round($guidedHoverLabelRatio, 3)):1") }
}
foreach ($storageGuard in @("Array.isArray(value)", "isPlainObject", 'typeof value === "string"', "memoryFallback")) {
    if (-not $storageText.Contains($storageGuard)) { $errors.Add("Storage shape/access guard eksik: $storageGuard") }
}
$readFunctionMatch = [regex]::Match($storageText, 'function\s+read\s*\(\s*key\s*\)')
if (-not $readFunctionMatch.Success) {
    $errors.Add("Storage read function is missing")
} else {
    $readFunctionIndex = $readFunctionMatch.Index
    $fallbackReadIndex = $storageText.IndexOf("memoryFallback.has(key)", $readFunctionIndex)
    $persistentReadIndex = $storageText.IndexOf("localStorage.getItem(key)", $readFunctionIndex)
    if ($fallbackReadIndex -lt 0 -or $persistentReadIndex -lt 0 -or $fallbackReadIndex -gt $persistentReadIndex) {
        $errors.Add("Storage read must prefer the in-session fallback over persisted data")
    }
}
foreach ($token in @("guidedTopicView", "inline-term", "guided-next", "guided-complete-lesson", "guided-complete-from-landing", "canonicalTitle", "quickTermIds")) {
    if (-not ($viewsText.Contains($token) -or $appText.Contains($token))) { $errors.Add("Guided akış bağlantısı eksik: $token") }
}
if ($viewsText -notmatch 'const\s+lessonGuides\s*=\s*window\.GODOT_LESSON_GUIDES\s*\|\|\s*\{\}\s*;') { $errors.Add("Views runtime guided registry'yi generic olarak okumuyor.") }
if ($viewsText -notmatch 'if\s*\(lessonGuides\[id\]\)\s*return\s+guidedLessonLanding\(lesson\)\s*;') { $errors.Add("Lesson landing guided registry varlığına göre generic seçilmiyor.") }
if ($viewsText -notmatch 'case\s+"lesson-topic"\s*:\s*return\s+guidedTopicView\(route\.param,\s*route\.subparam\)\s*;') { $errors.Add("Guided topic route generic lesson/topic parametrelerini renderer'a aktarmıyor.") }
$guidedRuntimeText = $viewsText + "`n" + $routerText + "`n" + $storageText + "`n" + $appText
if ($guidedRuntimeText -match 'lesson-[0-9]{2}') { $errors.Add("Guided runtime entegrasyonu hard-coded lesson ID içeriyor.") }
if (-not $viewsText.Contains('class="inline-code"')) { $errors.Add("Guided inline-code renderer bağlantısı bulunamadı.") }
if ($dataText -notmatch 'lessons\.find\(\(lesson\)\s*=>\s*!completed\.has\(lesson\.id\)\)\s*\?\?\s*null') { $errors.Add("Tüm kurs tamamlandığında next course lesson null dönmüyor.") }
foreach ($token in @("completeTitle", "completeDescription", "goToReview", "browseGlossary")) {
    if (-not ($viewsText.Contains("COPY.dashboard.$token") -or $viewsText.Contains("COPY.actions.$token") -or $uiCopyText.Contains("${token}:"))) {
        $errors.Add("14/14 course completion UI bağlantısı eksik: $token")
    }
}
if ($appText.Contains("target.firstChild")) { $errors.Add("Quick-term modal başlığı inline surface label üzerinden okunuyor.") }
if (-not $componentsText.Contains('class="brand-mark" src="${escapeHtml(site.brandIconPath)}"')) { $errors.Add("Sidebar canonical brand icon config yolunu kullanmıyor.") }
if ($componentsText.Contains('<span class="brand-mark">') -or $indexHtml.Contains('<div class="brand-mark"')) { $errors.Add("CSS/metin ile çizilen eski brand-mark kalıntısı bulundu.") }
if (-not $indexHtml.Contains('<img class="brand-mark" src="assets/brand/learngodot-icon.svg"')) { $errors.Add("Başlangıç ekranı canonical brand icon'u kullanmıyor.") }
if ($indexHtml -match '<div\s+id="app"[^>]*aria-live') { $errors.Add("SPA root gereksiz aria-live taşıyor.") }
if ($componentsText -notmatch 'toast-region[^>]*aria-live="polite"') { $errors.Add("Toast için ayrı live region bulunamadı.") }
if (-not $viewsText.Contains('class="mini-check__answer" tabindex="-1"') -or -not $viewsText.Contains('class="quiz-answer" tabindex="-1"')) { $errors.Add("Guided ve quiz cevapları programatik focus hedefi değil.") }
if ($appText -notmatch 'answer\.hidden\s*=\s*false[\s\S]*answer\.focus\(') { $errors.Add("Cevap gösterildikten sonra görünür cevap alanına focus taşınmıyor.") }
foreach ($searchAria in @('role="combobox"', 'aria-controls="global-search-results"', 'id="global-search-results" role="listbox"', 'role="option"', 'aria-selected=')) {
    if (-not $componentsText.Contains($searchAria)) { $errors.Add("Search combobox/listbox ARIA bağlantısı eksik: $searchAria") }
}
if (-not $appText.Contains("aria-activedescendant") -or -not $appText.Contains('setAttribute("aria-expanded"')) { $errors.Add("Search aktif option ve expanded ARIA durumu runtime'da senkronlanmıyor.") }
if (-not $appText.Contains('toggleAttribute("inert"') -or -not $appText.Contains('setAttribute("aria-hidden"')) { $errors.Add("Mobil sidebar inert/aria-hidden durumu runtime'da senkronlanmıyor.") }

if ($errors.Count) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

Write-Host "Doğrulama başarılı."
Write-Host "Terimler: $($database.terms.Count) ($actualCoreCount temel, $actualRecognizeCount tanı)"
Write-Host "Dersler: $($database.lessons.Count) | Sorular: $actualQuestionCount | İlk 50: $($first50.term_ids.Count)"
Write-Host "Split/combined/runtime veri, ilişkiler, core zinciri ve $($guidedFiles.Count) guided lesson doğrulandı."
