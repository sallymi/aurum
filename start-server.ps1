$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://localhost:8080/')
$listener.Start()

Write-Host "HTTP服务器已启动，请访问 http://localhost:8080/"
Write-Host "按Ctrl+C停止服务器"

$currentPath = Get-Location

try {
    while ($listener.IsListening) {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $requestedFile = $request.Url.LocalPath
        if ($requestedFile -eq "/") {
            $requestedFile = "/index.html"
        }

        $filePath = Join-Path $currentPath $requestedFile.Substring(1)
        
        if (Test-Path $filePath -PathType Leaf) {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            # 设置内容类型
            $extension = [System.IO.Path]::GetExtension($filePath)
            switch ($extension) {
                ".html" { $response.ContentType = "text/html" }
                ".css" { $response.ContentType = "text/css" }
                ".js" { $response.ContentType = "text/javascript" }
                ".svg" { $response.ContentType = "image/svg+xml" }
                ".jpg" { $response.ContentType = "image/jpeg" }
                ".png" { $response.ContentType = "image/png" }
                default { $response.ContentType = "application/octet-stream" }
            }
            
            $output = $response.OutputStream
            $output.Write($content, 0, $content.Length)
            $output.Close()
        }
        else {
            $response.StatusCode = 404
            $response.Close()
        }
    }
}
finally {
    $listener.Stop()
}