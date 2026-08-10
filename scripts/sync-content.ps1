$ErrorActionPreference = "Stop"
$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$sourcePath = Join-Path $projectRoot "godot_learning_web_content/content.database.json"
$targetPath = Join-Path $projectRoot "src/data/content.js"
$prefix = "window.GODOT_LEARN_DATA = "

$sourceText = [System.IO.File]::ReadAllText($sourcePath, [System.Text.Encoding]::UTF8)
$wrappedContent = $prefix + $sourceText + ";"
[System.IO.File]::WriteAllText($targetPath, $wrappedContent, [System.Text.UTF8Encoding]::new($false))

Write-Host "content.js kaynak content.database.json dosyasından güncellendi."
Write-Host "Kaynak karakter sayısı: $($sourceText.Length)"
