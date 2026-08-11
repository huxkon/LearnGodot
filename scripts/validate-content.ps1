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
    "index.html", "src/styles.css", "src/data/content.js", "src/data/locale.js", "src/data/curriculum.js",
    "src/js/app.js", "src/js/data.js", "src/js/storage.js", "src/js/router.js", "src/js/ui-copy.js", "src/js/views.js", "src/js/components.js"
)
foreach ($file in $requiredFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $projectRoot $file) -PathType Leaf)) { $errors.Add("Eksik uygulama dosyası: $file") }
}

$indexHtml = [System.IO.File]::ReadAllText((Join-Path $projectRoot "index.html"), $utf8)
if ($indexHtml -match 'type\s*=\s*["'']module["'']') { $errors.Add("index.html hâlâ ES module kullanıyor.") }
if ($indexHtml -notmatch '<title>LearnGodot</title>') { $errors.Add("index.html başlangıç title değeri LearnGodot değil.") }

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

$legacyPromptText = [System.IO.File]::ReadAllText((Join-Path $sourceRoot "VIBE_CODING_PROMPT.md"), $utf8)
$legacyWarning = "LEGACY / HISTORICAL INITIAL PROMPT - DO NOT EXECUTE AS CURRENT PROJECT INSTRUCTIONS"
if (-not $legacyPromptText.StartsWith("> **$legacyWarning**")) { $errors.Add("Legacy prompt uyarısı dosyanın ilk satırında değil.") }
if (([regex]::Matches($legacyPromptText, [regex]::Escape($legacyWarning))).Count -ne 1) { $errors.Add("Legacy prompt uyarısı tekil değil.") }
$guidedFiles = @(Get-ChildItem (Join-Path $projectRoot "src/data") -Filter "lesson-*-guided.js" | Sort-Object Name)
$guideScriptPaths = @($guidedFiles | ForEach-Object { "src/data/$($_.Name)" })
$expectedScriptOrder = @("src/data/content.js", "src/data/locale.js", "src/data/curriculum.js") + $guideScriptPaths + @(
    "src/js/ui-copy.js", "src/js/data.js", "src/js/storage.js", "src/js/router.js", "src/js/components.js", "src/js/views.js", "src/js/app.js"
)
$actualScriptOrder = @([regex]::Matches($indexHtml, '<script\s+defer\s+src="([^"]+)"\s*></script>') | ForEach-Object { $_.Groups[1].Value })
if (($actualScriptOrder -join "|") -ne ($expectedScriptOrder -join "|")) { $errors.Add("Klasik script yükleme sırası beklenen mimariyle eşleşmiyor.") }

$curriculumText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/data/curriculum.js"), $utf8)
foreach ($lessonId in $lessonIds) {
    if (([regex]::Matches($curriculumText, '"' + [regex]::Escape($lessonId) + '"\s*:')).Count -ne 1) { $errors.Add("Curriculum metadata '$lessonId' kaydı tekil değil.") }
}
foreach ($field in @("lessonId", "displayTitle", "displayDescription", "section", "order", "technicalTopics")) {
    if (([regex]::Matches($curriculumText, "\b$field\s*:")).Count -lt $lessonIds.Count) { $errors.Add("Curriculum '$field' alanı 14 dersin tamamında yok.") }
}

foreach ($guideFile in $guidedFiles) {
    $guideText = [System.IO.File]::ReadAllText($guideFile.FullName, $utf8)
    $lessonMatch = [regex]::Match($guideText, 'lessonId:\s*"([^"]+)"')
    if (-not $lessonMatch.Success) { $errors.Add("$($guideFile.Name): lessonId bulunamadı."); continue }
    $lessonId = $lessonMatch.Groups[1].Value
    $lesson = $database.lessons | Where-Object id -eq $lessonId
    if (-not $lesson) { $errors.Add("$($guideFile.Name): bilinmeyen lesson '$lessonId'."); continue }

    $orderMatch = [regex]::Match($guideText, 'order:\s*\[(?<body>.*?)\],\s*\r?\n\s*topics:', [System.Text.RegularExpressions.RegexOptions]::Singleline)
    $orderIds = @([regex]::Matches($orderMatch.Groups['body'].Value, '"([^"]+)"') | ForEach-Object { $_.Groups[1].Value })
    if (@($orderIds | Group-Object | Where-Object Count -gt 1).Count) { $errors.Add("$lessonId guided order duplicate topic içeriyor.") }
    if ((@($orderIds) -join "|") -cne (@($lesson.core_term_ids) -join "|")) { $errors.Add("$lessonId guided order source core_term_ids sırasıyla birebir eşleşmiyor.") }

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
foreach ($token in @("guidedTopicView", "inline-term", "guided-next", "guided-complete-lesson", "guided-complete-from-landing", "canonicalTitle", "quickTermIds")) {
    if (-not ($viewsText.Contains($token) -or $appText.Contains($token))) { $errors.Add("Guided akış bağlantısı eksik: $token") }
}
if (-not $viewsText.Contains('class="inline-code"')) { $errors.Add("Guided inline-code renderer bağlantısı bulunamadı.") }
if ($dataText -notmatch 'lessons\.find\(\(lesson\)\s*=>\s*!completed\.has\(lesson\.id\)\)\s*\?\?\s*null') { $errors.Add("Tüm kurs tamamlandığında next course lesson null dönmüyor.") }
foreach ($token in @("completeTitle", "completeDescription", "goToReview", "browseGlossary")) {
    if (-not ($viewsText.Contains("COPY.dashboard.$token") -or $viewsText.Contains("COPY.actions.$token") -or $uiCopyText.Contains("${token}:"))) {
        $errors.Add("14/14 course completion UI bağlantısı eksik: $token")
    }
}
if ($appText.Contains("target.firstChild")) { $errors.Add("Quick-term modal başlığı inline surface label üzerinden okunuyor.") }
if ($indexHtml -match '<div\s+id="app"[^>]*aria-live') { $errors.Add("SPA root gereksiz aria-live taşıyor.") }
if ($componentsText -notmatch 'toast-region[^>]*aria-live="polite"') { $errors.Add("Toast için ayrı live region bulunamadı.") }

if ($errors.Count) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

Write-Host "Doğrulama başarılı."
Write-Host "Terimler: $($database.terms.Count) ($actualCoreCount temel, $actualRecognizeCount tanı)"
Write-Host "Dersler: $($database.lessons.Count) | Sorular: $actualQuestionCount | İlk 50: $($first50.term_ids.Count)"
Write-Host "Split/combined/runtime veri, ilişkiler, core zinciri ve $($guidedFiles.Count) guided lesson doğrulandı."
