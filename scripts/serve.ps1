param(
    [int]$Port = 4173
)

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot ".."))
$prefix = "http://127.0.0.1:$Port/"
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $Port)

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "text/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".svg"  = "image/svg+xml"
    ".png"  = "image/png"
    ".ico"  = "image/x-icon"
}

try {
    $listener.Start()
    Write-Host "Godot Atlası çalışıyor: $prefix"
    Write-Host "Durdurmak için Ctrl+C kullan."

    while ($true) {
        $client = $listener.AcceptTcpClient()
        try {
            $stream = $client.GetStream()
            $reader = [System.IO.StreamReader]::new($stream, [Text.Encoding]::UTF8, $false, 1024, $true)
            $requestLine = $reader.ReadLine()
            while ($null -ne ($headerLine = $reader.ReadLine()) -and $headerLine.Length -gt 0) { }

            $parts = $requestLine -split " "
            $method = if ($parts.Count -gt 0) { $parts[0] } else { "" }
            $rawTarget = if ($parts.Count -gt 1) { $parts[1].Split("?")[0] } else { "/" }
            $requestPath = [Uri]::UnescapeDataString($rawTarget.TrimStart("/"))
            if ([string]::IsNullOrWhiteSpace($requestPath)) { $requestPath = "index.html" }

            $candidate = [System.IO.Path]::GetFullPath((Join-Path $projectRoot $requestPath))
            $insideRoot = $candidate.StartsWith($projectRoot + [System.IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)
            $status = "200 OK"

            if ($method -notin @("GET", "HEAD")) {
                $status = "405 Method Not Allowed"
                $contentType = "text/plain; charset=utf-8"
                $body = [Text.Encoding]::UTF8.GetBytes("405 - Yalnızca GET ve HEAD desteklenir")
            } elseif (-not $insideRoot -or -not (Test-Path -LiteralPath $candidate -PathType Leaf)) {
                $status = "404 Not Found"
                $contentType = "text/plain; charset=utf-8"
                $body = [Text.Encoding]::UTF8.GetBytes("404 - Dosya bulunamadı")
            } else {
                $extension = [System.IO.Path]::GetExtension($candidate).ToLowerInvariant()
                $contentType = if ($mimeTypes.ContainsKey($extension)) { $mimeTypes[$extension] } else { "application/octet-stream" }
                $body = [System.IO.File]::ReadAllBytes($candidate)
            }

            $headers = "HTTP/1.1 $status`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
            $headerBytes = [Text.Encoding]::ASCII.GetBytes($headers)
            $stream.Write($headerBytes, 0, $headerBytes.Length)
            if ($method -ne "HEAD") { $stream.Write($body, 0, $body.Length) }
            $stream.Flush()
            $reader.Dispose()
            $stream.Dispose()
        } finally {
            $client.Close()
        }
    }
} finally {
    $listener.Stop()
}
