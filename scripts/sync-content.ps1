$ErrorActionPreference = "Stop"
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$sourcePath = Join-Path $projectRoot "godot_learning_web_content/content.database.json"
$targetPath = Join-Path $projectRoot "src/data/content.js"
$prefix = "window.GODOT_LEARN_DATA = "
$splitTargets = [ordered]@{
    meta = "meta.json"
    categories = "categories.json"
    terms = "terms.json"
    lessons = "lessons.json"
    quizzes = "quizzes.json"
    learning_paths = "learning_paths.json"
}
$noTrailingNewline = @("categories.json", "quizzes.json")

function Get-TopLevelJsonValue([string]$json, [string]$propertyName) {
    $marker = '"' + $propertyName + '"'
    $propertyIndex = -1
    $searchStart = 0
    while ($searchStart -lt $json.Length) {
        $candidate = $json.IndexOf($marker, $searchStart, [System.StringComparison]::Ordinal)
        if ($candidate -lt 0) { break }

        $candidateDepth = 0
        $candidateInString = $false
        $candidateEscaped = $false
        for ($scanIndex = 0; $scanIndex -lt $candidate; $scanIndex++) {
            $scanCharacter = $json[$scanIndex]
            if ($candidateInString) {
                if ($candidateEscaped) { $candidateEscaped = $false; continue }
                if ($scanCharacter -eq '\') { $candidateEscaped = $true; continue }
                if ($scanCharacter -eq '"') { $candidateInString = $false }
                continue
            }
            if ($scanCharacter -eq '"') { $candidateInString = $true; continue }
            if ($scanCharacter -eq '{' -or $scanCharacter -eq '[') { $candidateDepth++ }
            elseif ($scanCharacter -eq '}' -or $scanCharacter -eq ']') { $candidateDepth-- }
        }
        if ($candidateDepth -eq 1 -and -not $candidateInString) { $propertyIndex = $candidate; break }
        $searchStart = $candidate + $marker.Length
    }
    if ($propertyIndex -lt 0) { throw "Canonical source içinde '$propertyName' alanı bulunamadı." }

    $valueStart = $json.IndexOf(":", $propertyIndex + $marker.Length) + 1
    while ($valueStart -lt $json.Length -and [char]::IsWhiteSpace($json[$valueStart])) { $valueStart++ }
    if ($valueStart -ge $json.Length -or ($json[$valueStart] -ne '{' -and $json[$valueStart] -ne '[')) {
        throw "Canonical '$propertyName' alanı object veya array değil."
    }

    $depth = 0
    $inString = $false
    $escaped = $false
    for ($index = $valueStart; $index -lt $json.Length; $index++) {
        $character = $json[$index]
        if ($inString) {
            if ($escaped) { $escaped = $false; continue }
            if ($character -eq '\') { $escaped = $true; continue }
            if ($character -eq '"') { $inString = $false }
            continue
        }
        if ($character -eq '"') { $inString = $true; continue }
        if ($character -eq '{' -or $character -eq '[') { $depth++; continue }
        if ($character -eq '}' -or $character -eq ']') {
            $depth--
            if ($depth -eq 0) { return $json.Substring($valueStart, $index - $valueStart + 1) }
        }
    }
    throw "Canonical '$propertyName' alanı kapanmıyor."
}

function Format-JsonText([string]$json, [string]$newline) {
    $builder = [System.Text.StringBuilder]::new()
    $indent = 0
    $inString = $false
    $escaped = $false

    for ($index = 0; $index -lt $json.Length; $index++) {
        $character = $json[$index]
        if ($inString) {
            [void]$builder.Append($character)
            if ($escaped) { $escaped = $false; continue }
            if ($character -eq '\') { $escaped = $true; continue }
            if ($character -eq '"') { $inString = $false }
            continue
        }
        if ([char]::IsWhiteSpace($character)) { continue }
        if ($character -eq '"') {
            $inString = $true
            [void]$builder.Append($character)
            continue
        }
        if ($character -eq '{' -or $character -eq '[') {
            [void]$builder.Append($character)
            $lookAhead = $index + 1
            while ($lookAhead -lt $json.Length -and [char]::IsWhiteSpace($json[$lookAhead])) { $lookAhead++ }
            $emptyClose = if ($character -eq '{') { '}' } else { ']' }
            if ($lookAhead -lt $json.Length -and $json[$lookAhead] -eq $emptyClose) {
                [void]$builder.Append($emptyClose)
                $index = $lookAhead
            } else {
                $indent++
                [void]$builder.Append($newline).Append("  " * $indent)
            }
            continue
        }
        if ($character -eq '}' -or $character -eq ']') {
            $indent--
            [void]$builder.Append($newline).Append("  " * $indent).Append($character)
            continue
        }
        if ($character -eq ',') {
            [void]$builder.Append($character).Append($newline).Append("  " * $indent)
            continue
        }
        if ($character -eq ':') {
            [void]$builder.Append(": ")
            continue
        }
        [void]$builder.Append($character)
    }
    return $builder.ToString()
}

function Get-JsonArrayObjectItems([string]$json) {
    $items = [System.Collections.Generic.List[string]]::new()
    $depth = 0
    $itemStart = -1
    $inString = $false
    $escaped = $false
    for ($index = 0; $index -lt $json.Length; $index++) {
        $character = $json[$index]
        if ($inString) {
            if ($escaped) { $escaped = $false; continue }
            if ($character -eq '\') { $escaped = $true; continue }
            if ($character -eq '"') { $inString = $false }
            continue
        }
        if ($character -eq '"') { $inString = $true; continue }
        if ($character -eq '[') { $depth++; continue }
        if ($character -eq ']') { $depth--; continue }
        if ($character -eq '{') {
            if ($depth -eq 1 -and $itemStart -lt 0) { $itemStart = $index }
            $depth++
            continue
        }
        if ($character -eq '}') {
            $depth--
            if ($depth -eq 1 -and $itemStart -ge 0) {
                $items.Add($json.Substring($itemStart, $index - $itemStart + 1))
                $itemStart = -1
            }
        }
    }
    return @($items)
}

function Get-JsonShape([string]$json) {
    ($json | ConvertFrom-Json) | ConvertTo-Json -Compress -Depth 100
}

function Merge-TermSplitText([string]$existingText, [string]$canonicalValue, [string]$newline) {
    $existingById = @{}
    foreach ($itemText in @(Get-JsonArrayObjectItems $existingText)) {
        $item = $itemText | ConvertFrom-Json
        $existingById[$item.id] = $itemText
    }

    $outputItems = [System.Collections.Generic.List[string]]::new()
    foreach ($canonicalItemText in @(Get-JsonArrayObjectItems $canonicalValue)) {
        $canonicalItem = $canonicalItemText | ConvertFrom-Json
        $existingItemText = $existingById[$canonicalItem.id]
        if ($existingItemText -and (Get-JsonShape $existingItemText) -cne (Get-JsonShape $canonicalItemText)) {
            $existingItemText = $null
        }
        if ($existingItemText) {
            $outputItems.Add("  " + $existingItemText.Trim())
        } else {
            $formattedItem = Format-JsonText $canonicalItemText $newline
            $outputItems.Add([regex]::Replace($formattedItem, '(?m)^', '  '))
        }
    }
    return "[$newline" + ($outputItems -join ",$newline") + "$newline]"
}

$sourceText = [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8)
$wrappedContent = $prefix + $sourceText + ";"
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
[System.IO.File]::WriteAllText($targetPath, $wrappedContent, $utf8NoBom)

$newline = if ($sourceText.Contains("`r`n")) { "`r`n" } else { "`n" }
foreach ($entry in $splitTargets.GetEnumerator()) {
    $valueText = Get-TopLevelJsonValue $sourceText $entry.Key
    $splitPath = Join-Path (Split-Path $sourcePath) $entry.Value
    $existingText = if (Test-Path -LiteralPath $splitPath) { [System.IO.File]::ReadAllText($splitPath, [System.Text.Encoding]::UTF8) } else { "" }
    if ($existingText -and (Get-JsonShape $existingText) -ceq (Get-JsonShape $valueText)) { continue }
    $splitText = if ($entry.Key -eq "terms" -and $existingText) {
        Merge-TermSplitText $existingText $valueText $newline
    } else {
        Format-JsonText $valueText $newline
    }
    if ($entry.Value -notin $noTrailingNewline) { $splitText += $newline }
    [System.IO.File]::WriteAllText($splitPath, $splitText, $utf8NoBom)
}

Write-Host "content.js ve split JSON dosyaları content.database.json kaynağından güncellendi."
Write-Host "Kaynak karakter sayısı: $($sourceText.Length)"
