$files = Get-ChildItem -Path "c:\Users\ya_to\Documents\qchizu_git\qchizu\layers_json\reinfolib_XKT*.json" | Where-Object { -not $_.Name.EndsWith("dictionary.json") }

# layers98.txtからタイトルマッピングを抽出する
$layersContent = Get-Content -Path "c:\Users\ya_to\Documents\qchizu_git\qchizu\layers_txt\layers98.txt" -Raw
$titleMapping = @{}

foreach ($file in $files) {
    $fileId = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    # layers98.txtから対応するタイトルを検索
    if ($layersContent -match "`"id`":\s*`"$fileId`",\s*`"title`":\s*`"([^`"]+)`"") {
        $title = $matches[1]
        $titleMapping[$fileId] = $title
    }
}

foreach ($file in $files) {
    $fileContent = Get-Content -Path $file.FullName -Raw
    
    # ファイルが空でないかチェック
    if ($fileContent.Length -gt 0) {
        $fileId = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
        $xktCode = ($fileId -replace "reinfolib_", "")
        
        if ($titleMapping.ContainsKey($fileId)) {
            $title = $titleMapping[$fileId]
            
            # 現在のname値を取得
            if ($fileContent -match "`"name`":\s*`"([^`"]+)`"") {
                $currentName = $matches[1]
                
                # nameを新しいタイトルに置換
                $fileContent = $fileContent -replace "`"name`":\s*`"$currentName`"", "`"name`": `"$title`""
                
                # sourcesキー名を取得
                if ($fileContent -match "`"sources`":\s*{\s*`"([^`"]+)`"") {
                    $currentSource = $matches[1]
                    
                    # sourcesの外側を更新
                    $fileContent = $fileContent -replace "`"sources`":\s*{\s*`"$currentSource`"", "`"sources`": {`r`n    `"$xktCode`""
                    
                    # source参照箇所を更新
                    $fileContent = $fileContent -replace "`"source`":\s*`"$currentSource`"", "`"source`": `"$xktCode`""
                    
                    # 変更内容をファイルに書き戻す
                    Set-Content -Path $file.FullName -Value $fileContent
                    Write-Host "Updated $($file.Name) - Title: $title, Source: $xktCode, Old source: $currentSource"
                }
            }
        } else {
            Write-Host "Warning: Could not find title for $fileId in layers98.txt"
        }
    } else {
        Write-Host "Skipping empty file: $($file.Name)"
    }
}

Write-Host "All files processed."
