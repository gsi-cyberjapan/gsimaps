$files = Get-ChildItem -Path "./layers_json/reinfolib_XKT*.json" | Where-Object { -not $_.Name.EndsWith("dictionary.json") }

# layers98.txtからタイトルマッピングを抽出する
$layersContent = Get-Content -Path "./layers_txt/layers98.txt" -Raw
$titleMapping = @{}

foreach ($file in $files) {
    $fileId = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    # layers98.txtから対応するタイトルを検索
    if ($layersContent -match "id`": `"$fileId`",\s+`"title`": `"([^`"]+)`"") {
        $title = $matches[1]
        $titleMapping[$fileId] = $title
    }
}

foreach ($file in $files) {
    $fileId = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    $xktCode = $fileId -replace "reinfolib_", ""
    
    if ($titleMapping.ContainsKey($fileId)) {
        $title = $titleMapping[$fileId]
        
        $content = Get-Content -Path $file.FullName -Raw
        
        # 現在のname値を取得
        if ($content -match "`"name`":\s*`"([^`"]+)`"") {
            $currentName = $matches[1]
            
            # nameを新しいタイトルに置換
            $content = $content -replace "`"name`":\s*`"$currentName`"", "`"name`": `"$title`""
            
            # sourcesキー名を変更
            if ($content -match "`"sources`":\s*{\s*`"([^`"]+)`"") {
                $currentSource = $matches[1]
                
                # sourcesの外側を更新
                $content = $content -replace "`"sources`":\s*{\s*`"$currentSource`"", "`"sources`": {`r`n    `"$xktCode`""
                
                # source参照箇所を更新
                $content = $content -replace "`"source`":\s*`"$currentSource`"", "`"source`": `"$xktCode`""
            }
            
            # 変更内容をファイルに書き戻す
            Set-Content -Path $file.FullName -Value $content
            Write-Host "Updated $($file.Name) - Title: $title, Source: $xktCode"
        }
    } else {
        Write-Host "Warning: Could not find title for $fileId in layers98.txt"
    }
}

Write-Host "All files processed."
