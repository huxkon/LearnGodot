$ErrorActionPreference = "Stop"
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$sourcePath = Join-Path $projectRoot "godot_learning_web_content/content.database.json"
$contentScriptPath = Join-Path $projectRoot "src/data/content.js"
$contentPrefix = "window.GODOT_LEARN_DATA = "

$sourceText = [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8)
$contentScript = [System.IO.File]::ReadAllText($contentScriptPath, [System.Text.Encoding]::UTF8)
if (-not $contentScript.StartsWith($contentPrefix) -or -not $contentScript.EndsWith(";")) {
    throw "src/data/content.js beklenen window.GODOT_LEARN_DATA formatında değil."
}
$embeddedJson = $contentScript.Substring($contentPrefix.Length, $contentScript.Length - $contentPrefix.Length - 1)
$database = $embeddedJson | ConvertFrom-Json
$termIds = @($database.terms.id)
$lessonIds = @($database.lessons.id)
$quizIds = @($database.quizzes.id)
$errors = [System.Collections.Generic.List[string]]::new()

if ($database.lessons.Count -ne 14) { $errors.Add("14 ders bekleniyordu; $($database.lessons.Count) bulundu.") }
if (@($termIds | Group-Object | Where-Object Count -gt 1).Count -gt 0) { $errors.Add("Tekrarlanan term ID bulundu.") }
if (@($lessonIds | Group-Object | Where-Object Count -gt 1).Count -gt 0) { $errors.Add("Tekrarlanan lesson ID bulundu.") }

foreach ($term in $database.terms) {
    foreach ($relatedId in $term.related_term_ids) {
        if ($relatedId -notin $termIds) { $errors.Add("$($term.id): eksik related term '$relatedId'.") }
    }
    foreach ($linkedLessonId in $term.lesson_ids) {
        if ($linkedLessonId -notin $lessonIds) { $errors.Add("$($term.id): eksik lesson '$linkedLessonId'.") }
    }
}

foreach ($lesson in $database.lessons) {
    foreach ($linkedTermId in @($lesson.core_term_ids) + @($lesson.recognize_term_ids)) {
        if ($linkedTermId -notin $termIds) { $errors.Add("$($lesson.id): eksik term '$linkedTermId'.") }
    }
    if ($lesson.quiz_id -notin $quizIds) { $errors.Add("$($lesson.id): eksik quiz '$($lesson.quiz_id)'.") }
}

$first50 = $database.learning_paths.paths | Where-Object id -eq "first-50"
if ($first50.term_ids.Count -ne 50) { $errors.Add("İlk 50 yolu 50 terim içermiyor.") }

if ($sourceText -cne $embeddedJson) { $errors.Add("content.js içindeki eğitim verisi kaynak content.database.json ile birebir aynı değil.") }

$requiredFiles = @(
    "index.html", "src/styles.css", "src/data/content.js", "src/data/lesson-01-guided.js", "src/js/app.js", "src/js/data.js",
    "src/js/storage.js", "src/js/router.js", "src/js/ui-copy.js", "src/js/views.js", "src/js/components.js"
)
foreach ($file in $requiredFiles) {
    if (-not (Test-Path -LiteralPath (Join-Path $projectRoot $file) -PathType Leaf)) { $errors.Add("Eksik uygulama dosyası: $file") }
}

$indexHtml = [System.IO.File]::ReadAllText((Join-Path $projectRoot "index.html"), [System.Text.Encoding]::UTF8)
if ($indexHtml -match 'type\s*=\s*["'']module["'']') { $errors.Add("index.html hâlâ ES module script kullanıyor.") }
if ($indexHtml -notmatch 'src/data/content\.js') { $errors.Add("index.html content.js verisini yüklemiyor.") }

$expectedScriptOrder = @(
    "src/data/content.js", "src/data/lesson-01-guided.js", "src/js/ui-copy.js", "src/js/data.js", "src/js/storage.js",
    "src/js/router.js", "src/js/components.js", "src/js/views.js", "src/js/app.js"
)
$actualScriptOrder = @([regex]::Matches($indexHtml, '<script\s+defer\s+src="([^"]+)"\s*></script>') | ForEach-Object { $_.Groups[1].Value })
if (($actualScriptOrder -join "|") -ne ($expectedScriptOrder -join "|")) { $errors.Add("Klasik script yükleme sırası beklenen mimariyle eşleşmiyor.") }

$moduleSyntax = Get-ChildItem (Join-Path $projectRoot "src/js") -Filter *.js | Select-String -Pattern '^\s*(import|export)\s' -CaseSensitive
if ($moduleSyntax) { $errors.Add("Klasik script dosyalarında import/export kalıntısı bulundu.") }
$fetchUsage = Get-ChildItem (Join-Path $projectRoot "src/js") -Filter *.js | Select-String -Pattern '\bfetch\s*\(' -CaseSensitive
if ($fetchUsage) { $errors.Add("Doğrudan file:// çalışmasını bozabilecek fetch kullanımı bulundu.") }

$lessonOne = $database.lessons | Where-Object id -eq "lesson-01"
$guideText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/data/lesson-01-guided.js"), [System.Text.Encoding]::UTF8)
foreach ($termId in @($lessonOne.core_term_ids) + @($lessonOne.recognize_term_ids)) {
    if (-not $guideText.Contains('"' + $termId + '"')) { $errors.Add("1. ders guided katmanında '$termId' bulunamadı.") }
}
foreach ($field in @("fast", "model", "why", "godot", "example", "mistake", "check")) {
    $fieldCount = ([regex]::Matches($guideText, "\b$field\s*:")).Count
    if ($fieldCount -lt $lessonOne.core_term_ids.Count) { $errors.Add("1. ders guided '$field' alanı sekiz core terimin tümünde yok.") }
}

$viewsText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/views.js"), [System.Text.Encoding]::UTF8)
$appText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/app.js"), [System.Text.Encoding]::UTF8)
foreach ($requiredToken in @("guidedTopicView", "inline-term", "reveal-guided-answer", "guided-next", "guided-complete-lesson")) {
    if (-not ($viewsText.Contains($requiredToken) -or $appText.Contains($requiredToken))) { $errors.Add("Guided akış bağlantısı eksik: $requiredToken") }
}

$dataLayerText = [System.IO.File]::ReadAllText((Join-Path $projectRoot "src/js/data.js"), [System.Text.Encoding]::UTF8)
if (-not $dataLayerText.Contains('"lesson-02"') -or -not $dataLayerText.Contains('"lesson-11"') -or -not $dataLayerText.Contains('"lesson-14"')) {
    $errors.Add("Scope/Loop için ders bağlamı ayrımları eksik.")
}

if ($errors.Count) {
    $errors | ForEach-Object { Write-Error $_ }
    exit 1
}

$questionCount = @($database.quizzes | ForEach-Object questions).Count
$coreCount = @($database.terms | Where-Object tier -eq "core").Count
$recognizeCount = @($database.terms | Where-Object tier -eq "recognize").Count
Write-Host "Doğrulama başarılı."
Write-Host "Terimler: $($database.terms.Count) ($coreCount temel, $recognizeCount tanı)"
Write-Host "Dersler: $($database.lessons.Count) | Sorular: $questionCount | İlk 50: $($first50.term_ids.Count)"
Write-Host "Tüm terim, ders, quiz ve related-term ilişkileri geçerli."
Write-Host "content.js kaynak JSON ile birebir aynı ve uygulama ES module kullanmıyor."
