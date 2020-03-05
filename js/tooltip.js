CONFIG.TOOLTIP = {};

// 地図
CONFIG.TOOLTIP.TOP = {
  "TOP" : "初期表示に戻ります",
  "QUERY" : "地名や住所などで検索できます"
}

// 地図
CONFIG.TOOLTIP.MAP = {
  "ZOOMIN" : "拡大", // +ボタン
  "ZOOMOUT" : "縮小" // -ボタン
}

// 地図選択
CONFIG.TOOLTIP.SELECTMAP = {
  "RESET" : "標準地図だけ表示した状態に戻します",
  "UP" : "上へ",
  "DOWN" : "下へ",
  "INFORMATION" : "解説や凡例を表示します", // iマーク
  "AREA" : "データがあるところに移動", // 範囲ボタン
  "REMOVE" : "削除", // ゴミ箱
  "OPACITY" : "透過率を設定できます",
  "GRAYSCALE" : "灰色基調の地図になります",
  "MULTIPLY" : "下の地図が透けて見えるようになります"
};

// 共有・保存
CONFIG.TOOLTIP.SHARE = {
  "FACEBOOK" : "表示している地図をFacebookに投稿します", 
  "TWITTER" : "表示している地図をTwitterに投稿します", 
  "SAVEIMAGE" : "表示している地図を画像として保存します", 
  "QRCODE" : "表示している地図のQRコードを表示します",
  "SAVEHTML" : "表示している地図をHTMLとして保存します",
  "IFRAME" : "表示している地図を表示するiframeタグを発行します"
};

// 作図のツールチップ
CONFIG.TOOLTIP.SAKUZU = {
  "LOAD" : "ファイルからデータを読込",
  "SAVE" : "選択している情報をまとめてGISデータとして保存",
  "MARKER" : "点（アイコン）を追加",
  "CIRCLEMARKER" : "点（円形マーカー）を追加",
  "TEXT" : "テキストを追加",
  "LINE" : "線を追加",
  "POLYGON" : "面（多角形）を追加",
  "CIRCLE" : "面（円）を追加",
  "FREEHAND" : "フリーハンドで線を追加",

  "EDIT" : "編集",
  "REMOVE" : "削除",

  "LABEL_L" : "ラベル大",
  "LABEL_M" : "ラベル中",
  "LABEL_S" : "ラベル小",

  "LINE_GEODESIC" : "地球上の2点間の最短コースです。地理院地図上では曲線になります。",
  "LINE_STRAIGHT" : "経線に対して一定の角度を保って進むコースです。地理院地図上では直線になります。"
};

// 計測のツールチップ
CONFIG.TOOLTIP.MEASURE = {
  "DISTANCE" : "指定した地点を結ぶ線分の距離を計測できます",
  "AREA" : "指定した地点を囲む多角形の面積を計測できます",
  "FEATURE" : "選択した図形の距離または面積を計測します",
  "MULTI" : "選択した複数の図形の距離または面積の合計値を計測します",
  "SAVE" : "計測の際に作図した図形を保存できます"
};



// 断面図のツールチップ
CONFIG.TOOLTIP.DANMEN = {
  "FLAT" : "縦横比が1：1になります",
  "BASE_0" : "縦軸の下限値を0mにします",
  "BASE_LO" : "縦軸の下限値を指定した経路の最低標高にします",
  "RESET" : "縦横比、縦軸メモリを初期状態に戻します",
  "SAVE_IMAGE" : "グラフを画像として保存します",
  "SAVE_CSV" : "指定した経路を300等分した点の緯度、経度、標高、始点からの距離をCSV形式で保存します",
  "SAVE_GEOJSON" : "指定した経路をGeoJSON形式で保存します",
  "SAVE_KML" : "指定した経路をKML形式で保存します"
};


// ２画面表示
CONFIG.TOOLTIP.SPLITWINDOW = {
  "STOP" : "並べて比較を解除します",
  "SYNC" : "左右の地図が連動して移動します"
};

// 並べて比較
CONFIG.TOOLTIP.STACKWINDOW = {
  "STOP" : "重ねて比較を解除します",
  "MOVE" : "境界を移動できます"
};

// 3D
CONFIG.TOOLTIP.W3D = {
  "FIX_AREA" : "縮尺を変更しても、範囲は一定です",
  "FIX_SIZE" : "縮尺を変更すると、範囲は変わりますが、大きさ（ピクセル）は一定です"
};


// 自分で作る色別標高図
CONFIG.TOOLTIP.EDITRELIEF = {
  "AUTO" : "表示範囲の最低標高と最高標高から自動で色分けします"
};


// コンテキストメニュー
CONFIG.TOOLTIP.CONTEXTMENU = {
  "BTN_HIDE" : "中心位置の標高を表示します",
  "BTN_MINI" : "中心位置の住所や標高を表示します",
  "BTN_SHOW" : "中心位置の情報を非表示にします"
};