$ErrorActionPreference = "Stop"
Add-Type -AssemblyName System.Drawing

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$blue = [System.Drawing.ColorTranslator]::FromHtml("#3972e6")
$white = [System.Drawing.Color]::White

function New-RoundedSquarePath([single]$size) {
    $radius = $size * 18 / 64
    $diameter = $radius * 2
    $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
    $path.AddArc(0, 0, $diameter, $diameter, 180, 90)
    $path.AddArc($size - $diameter, 0, $diameter, $diameter, 270, 90)
    $path.AddArc($size - $diameter, $size - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc(0, $size - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()
    return $path
}

function Write-BrandPng([int]$size, [string]$path) {
    $bitmap = [System.Drawing.Bitmap]::new($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    try {
        $graphics.Clear([System.Drawing.Color]::Transparent)
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality

        $background = New-RoundedSquarePath $size
        $blueBrush = [System.Drawing.SolidBrush]::new($blue)
        try { $graphics.FillPath($blueBrush, $background) } finally { $blueBrush.Dispose(); $background.Dispose() }

        $scale = $size / 64
        $letter = [System.Drawing.Drawing2D.GraphicsPath]::new()
        $letter.AddPolygon([System.Drawing.PointF[]]@(
            [System.Drawing.PointF]::new(21 * $scale, 15 * $scale),
            [System.Drawing.PointF]::new(30 * $scale, 15 * $scale),
            [System.Drawing.PointF]::new(30 * $scale, 42 * $scale),
            [System.Drawing.PointF]::new(45 * $scale, 42 * $scale),
            [System.Drawing.PointF]::new(45 * $scale, 50 * $scale),
            [System.Drawing.PointF]::new(21 * $scale, 50 * $scale)
        ))
        $whiteBrush = [System.Drawing.SolidBrush]::new($white)
        try { $graphics.FillPath($whiteBrush, $letter) } finally { $whiteBrush.Dispose(); $letter.Dispose() }

        $bitmap.Save($path, [System.Drawing.Imaging.ImageFormat]::Png)
    } finally {
        $graphics.Dispose()
        $bitmap.Dispose()
    }
}

foreach ($size in @(16, 32, 48)) {
    Write-BrandPng $size (Join-Path $projectRoot "favicon-${size}x${size}.png")
}

$pngPath = Join-Path $projectRoot "favicon-32x32.png"
$iconPath = Join-Path $projectRoot "favicon.ico"
$pngBytes = [System.IO.File]::ReadAllBytes($pngPath)
$stream = [System.IO.File]::Create($iconPath)
$writer = [System.IO.BinaryWriter]::new($stream)
try {
    $writer.Write([uint16]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]1)
    $writer.Write([byte]32)
    $writer.Write([byte]32)
    $writer.Write([byte]0)
    $writer.Write([byte]0)
    $writer.Write([uint16]1)
    $writer.Write([uint16]32)
    $writer.Write([uint32]$pngBytes.Length)
    $writer.Write([uint32]22)
    $writer.Write($pngBytes)
} finally {
    $writer.Dispose()
    $stream.Dispose()
}

Write-Host "LearnGodot favicon varyantları canonical SVG geometrisinden üretildi."
