$port = 8000
$folderPath = Get-Location

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "HTTP服务器已启动，请访问 http://localhost:$port/"
Write-Host "按Ctrl+C停止服务器"

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $localPath = $request.Url.LocalPath
        if ($localPath -eq "/") {
            $localPath = "/index.html"
        }

        $filePath = Join-Path $folderPath $localPath.TrimStart("/")
        
        if (Test-Path $filePath -PathType Leaf) {
            $contentType = "text/html"
            
            if ($filePath -match '\.css$') { $contentType = "text/css" }
            elseif ($filePath -match '\.js$') { $contentType = "text/javascript" }
            elseif ($filePath -match '\.(jpg|jpeg)$') { $contentType = "image/jpeg" }
            elseif ($filePath -match '\.png$') { $contentType = "image/png" }
            elseif ($filePath -match '\.svg$') { $contentType = "image/svg+xml" }
            
            $fileContent = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $contentType
            $response.ContentLength64 = $fileContent.Length
            $response.OutputStream.Write($fileContent, 0, $fileContent.Length)
        }
        else {
            $response.StatusCode = 404
            $content = [System.Text.Encoding]::UTF8.GetBytes("404 - 文件未找到")
            $response.ContentLength64 = $content.Length
            $response.OutputStream.Write($content, 0, $content.Length)
        }
        
        $response.Close()
    }
}
finally {
    $listener.Stop()
}