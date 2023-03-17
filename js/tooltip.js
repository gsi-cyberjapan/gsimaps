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
  "AREA" : "データがあるところに移動して表示", // 範囲ボタン
  "REMOVE" : "削除", // ゴミ箱
  "OPACITY" : "透過率を設定できます",
  "GRAYSCALE" : "灰色基調の地図になります",
  "MULTIPLY" : "下の地図が透けて見えるようになります",
  "SETTING" : "スタイル変更" 
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
  "MULTI" : "選択した複数の図形の面積の合計値を表示します",
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
  "HANREI" : "凡例を画像として保存します",
  "RESET" : "初期状態に戻します",
  "LOW" : "画面中央の標高より低い範囲を自動で着色します",
  "AUTO" : "表示範囲の最低標高と最高標高から自動で色分けします"
};


// コンテキストメニュー
CONFIG.TOOLTIP.CONTEXTMENU = {
  "BTN_HIDE" : "中心位置の標高を表示します",
  "BTN_MINI" : "中心位置の住所や標高を表示します",
  "BTN_SHOW" : "中心位置の情報を非表示にします"
};

/************************************************************************
 設定：文言
 ************************************************************************/
 GSITEXT = {};
 GSITEXT.GEOLOCATION = {};
 GSITEXT.GEOLOCATION.ERROR = {
   0: "原因不明のエラーにより、位置情報を取得できませんでした。",
   1: "位置情報の取得が許可されませんでした。",
   2: "電波状況が悪い為、位置情報を取得できませんでした。",
   3: "位置情報の取得処理がタイムアウトしました。",
   5: "ご利用中の端末では、現在位置を取得できません。"
 };
 
 // 表示ズームの案内
 GSITEXT.ANNAI = {};
 GSITEXT.ANNAI.MINMAX = 'この情報はズームmin～maxで表示されます。';
 GSITEXT.ANNAI.MSGTXT = 'なお、整備範囲が全国であるとは限りません。';
 GSITEXT.ANNAI.CHKLABEL = '以後、この案内を表示しない';
 
 // 計測
 GSITEXT.MEASURE = {};
 GSITEXT.MEASURE.DIALOG_TITLE = '計測';
 GSITEXT.MEASURE.DIALOG_DISTANCE_CAPTION = '距離';
 GSITEXT.MEASURE.DIALOG_AREA_CAPTION = '面積';
 GSITEXT.MEASURE.DIALOG_OBJECT_CAPTION = '選択図形';
 GSITEXT.MEASURE.DIALOG_MULTI_CAPTION = '複数選択';
 
 // 作図関連
 GSITEXT.SAKUZU = {};
 GSITEXT.SAKUZU.SAKUZUTITLE = '新規作図情報';
 GSITEXT.SAKUZU.LOAD_ERROR = 'ファイルが読み込めません。';
 GSITEXT.SAKUZU.LOAD_NOFILE = 'ファイルが選択されていません。';
 
 GSITEXT.SAKUZU.DIALOG_TITLE = '作図・ファイル';
 
 GSITEXT.SAKUZU.DIALOG_LIST_EDITBTN = '編集';
 GSITEXT.SAKUZU.DIALOG_LIST_REMOVEBTN = '削除';
 GSITEXT.SAKUZU.DIALOG_LIST_OPACITYBTN = '透過';
 GSITEXT.SAKUZU.DIALOG_LIST_VISIBLEICONLABELBTN = 'アイコンのラベルを表示';
 GSITEXT.SAKUZU.DIALOG_LIST_SELECTLABEL = 'ラベルとして表示する属性：';
 
 GSITEXT.SAKUZU.DIALOG_LOAD_COMMENT = '<strong>GeoJSON,KML,GeoTag付きJPEG,CSV,GeoTiff</strong>ファイルを選択してください<br>' +
   '<div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>' +
   '<div style="font-size:85%">※KMP(<a style="word-break:break-all;font-size:85%" href="https://maps.gsi.go.jp/help/pdf/14Mar2017_kmp.pdf" target="_blank">https://maps.gsi.go.jp/help/pdf/14Mar2017_kmp.pdf</a>)に則ってないファイルは保存時に属性が削除されることがあります。</div>';
 GSITEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい<br><div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>';
 GSITEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE9 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください';
 GSITEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION = 'パネル上の表示名';
 
 GSITEXT.SAKUZU.DIALOG_LOAD_OKBTN = '読込を開始';
 GSITEXT.SAKUZU.DIALOG_LOAD_CANCELBTN = '中　止';
 GSITEXT.SAKUZU.DIALOG_LOAD_NOFILE = 'ファイルが選択されていません。';
 GSITEXT.SAKUZU.DIALOG_LOAD_NOTEXT = 'テキストが入力されていません。';
 GSITEXT.SAKUZU.DIALOG_LOAD_ERROR = '読み込みに失敗しました。ファイルの形式をご確認ください。';
 
 GSITEXT.SAKUZU.DIALOG_SAVE_COMMENT = 'ファイル形式を選択して下さい';
 GSITEXT.SAKUZU.DIALOG_SAVE_COMMENT2 = '「TEXT」および「マーカー(円)」で作図した内容はGeoJSON形式でのみ保存可能です。';
 GSITEXT.SAKUZU.DIALOG_SAVE_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい';
 GSITEXT.SAKUZU.DIALOG_SAVE_OKBTN = '上記の内容で保存';
 GSITEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD = 'クリップボードにコピー';
 GSITEXT.SAKUZU.DIALOG_SAVE_CANCELBTN = '戻　る';
 
 GSITEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN = 'オブジェクトの削除';
 GSITEXT.SAKUZU.DIALOG_EDIT_POLYINNERBTN = '中抜きの追加・削除';
 GSITEXT.SAKUZU.DIALOG_EDIT_POLYINNER_MSG = '中抜きの追加・削除中です。<br>対象のポリゴン内に中抜きを作成、またはゴミ箱アイコンをクリックして削除して下さい。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POLYINNER_OKBTN = '現在の状態で中抜きを確定';
 GSITEXT.SAKUZU.DIALOG_EDIT_POLYINNER_CANCELBTN = 'キャンセル';
 
 GSITEXT.SAKUZU.DIALOG_EDIT_FINISHBTN = '確　定　';
 GSITEXT.SAKUZU.DIALOG_EDIT_OKBTN = '確　定';
 GSITEXT.SAKUZU.DIALOG_EDIT_OK2BTN = 'O　K';
 GSITEXT.SAKUZU.DIALOG_EDIT_OK3BTN = '編集確定';
 GSITEXT.SAKUZU.DIALOG_EDIT_CANCELBTN = '終　了';
 GSITEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN = 'キャンセル';
 GSITEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG = '編集を終了しますか？確定していない編集内容は破棄されます。';
 GSITEXT.SAKUZU.DIALOG_HIDECONFIRMMSG = '作図・ファイルパネルを閉じますか？確定していない編集内容は破棄されます。';
 GSITEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG = 'このオブジェクトを削除します。よろしいですか？';
 GSITEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG = 'このレイヤを削除します。よろしいですか？';
 GSITEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN = '自由文入力に切替';
 GSITEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN = 'テーブル入力に切替';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG = '表示するHTMLを入力して下さい。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_MSG = '表示するテキストを入力して下さい。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT = '例1:動物園　\n例2:<span style="background:#00FFFF; color:red; font-size:20pt;">図書館</span>';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_HINT = '例1:動物園';
 
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTEDIT_CREATEMESSAGE = 'これから地図上に置くマーカーの情報を入力してください。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTEDIT_EDITMESSAGE = '地図上に置いたマーカーの情報を入力してください。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTEDIT_EDIT2MESSAGE = '編集中のマーカーの情報を入力してください。';
 
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXTEDIT_CREATEMESSAGE = 'これから地図上に置くテキストの情報を入力してください。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXTEDIT_EDITMESSAGE = '地図上に置いたテキストの情報を入力してください。';
 GSITEXT.SAKUZU.DIALOG_EDIT_POINTTEXTEDIT_EDIT2MESSAGE = '編集中のテキストの情報を入力してください。';
 
 // 共有
 GSITEXT.SHARE = {};
 GSITEXT.SHARE.DIALOG_TITLE = '共有';
 GSITEXT.SHARE.DIALOG_LINK_TITLE = 'リンクを取得';
 GSITEXT.SHARE.DIALOG_BUILTIN_TITLE = 'ウェブサイトに埋め込む';
 GSITEXT.SHARE.DIALOG_SAVE_TITLE = '名前を付けて一時保存';
 
 GSITEXT.SHARE.DIALOG_LINK_MESSAGE = '次のURLをメール等で送付することで、現在表示されている地図を共有することができます。' + '<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
 GSITEXT.SHARE.DIALOG_BUILTIN_MESSAGE = '次のタグをHTMLファイルに加えることで、地理院地図をウェブサイトに埋め込むことができます。' + '<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
 GSITEXT.SHARE.DIALOG_SAVE_MESSAGE = '次のHTMLを[上記のHTMLを保存]>ボタンをクリックして保存して下さい。' + '<div style="font-size:85%;">※HTML は一時的なものとしてご利用ください。作図情報は、作図機能を使ってファイルに保存することをおすすめします。</div>';
 GSITEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 = '次のHTMLをテキストエディタで<strong>文字コードUTF-8</strong>で保存して下さい。';
 
 GSITEXT.SHARE.DIALOG_TEMPLATELOADERROR = '保存したHTMLファイルではこの機能を使うことはできません。';
 
 GSITEXT.SHARE.DIALOG_DOWNLOADBTN = '上記のHTMLを保存';
 GSITEXT.SHARE.DIALOG_COPYBTN = 'クリップボードにコピー';
 GSITEXT.SHARE.DIALOG_NOCOPYMSG = 'URLをコピーしてご利用下さい';
 
 // 共有
 GSITEXT.SHARE.QRCODE_DIALOG_TITLE = 'QRコード';
 GSITEXT.SHARE.MAIL_SUBJECT = '地理院地図';
 GSITEXT.SHARE.MAIL_BODY = "";
 
 // 3D範囲選択
 GSITEXT.THREEDAREA = {};
 GSITEXT.THREEDAREA.DIALOG_TITLE = '3D範囲を選択';
 GSITEXT.THREEDAREA.DIALOG_OKBTN = 'O　K';
 GSITEXT.THREEDAREA.DIALOG_CANCELBTN = '終　了';
 
 // 画像保存
 GSITEXT.MAPTOIMAGE = {};
 GSITEXT.MAPTOIMAGE.WINDOW_MSG = "ファイルを保存する準備が整いました";
 GSITEXT.MAPTOIMAGE.WINDOW_SAVEIMGBTN = '画像を保存';
 GSITEXT.MAPTOIMAGE.WINDOW_SAVEPGWBTN = 'ワールドファイルを保存';
 GSITEXT.MAPTOIMAGE.WINDOW_MSG2 = '※保存したファイルは、国土地理院コンテンツ利用規約に従ってご利用ください。<br>' +
   '<a href="https://maps.gsi.go.jp/help/use.html" target="_blank">地理院タイルのご利用について</a><br>' +
   '<a href="https://maps.gsi.go.jp/help/howtouse.html" class="worldfile-msg" target="_blank">ワールドファイルについて</a>';
 
 GSITEXT.EVAC = {};
 GSITEXT.EVAC.KIYAKU = '最新の状況などは当該市町村にご確認ください。';
 GSITEXT.EVAC.KIYAKULINK = '<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>　<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html#info2" target="blank">市町村別公開日・更新日一覧</a>';
 GSITEXT.EVAC.CONFIRMTOP = '地理院地図及び重ねるハザードマップに掲載されている指定緊急避難場所データ（以下、「本データ」といいます）を利用される場合は、<a href="https://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="blank">国土地理院コンテンツ利用規約</a>のほか、以下のご利用上の注意をご確認いただき、内容に同意された場合のみご利用ください。';
 GSITEXT.EVAC.ATTENTION = '【ご利用上の注意】';
 GSITEXT.EVAC.CONFIRMITEM1 = '本データは、災害対策基本法第49条の4に基づき市町村長が指定した指定緊急避難場所の情報を各市町村に提供いただき、当該市町村に確認の上、地図上に表示したものです。<span style="font-weight:bold; color:#ff0000;">最新かつ詳細の状況などは必ず当該市町村にご確認ください。</span>';
 GSITEXT.EVAC.CONFIRMITEM2 = '本データを、ダウンロードや印刷等を行い国土地理院サーバ外で利用される場合は、本データの更新にあわせて最新の情報をご利用ください（参照：<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html#info2" target="blank">市町村別公開日・更新日一覧</a>）。';
 GSITEXT.EVAC.CONFIRMITEM3 = '指定緊急避難場所は、災害種別ごとに指定されています。本データをダウンロードや印刷等を行い国土地理院サーバ外で利用される場合、指定された災害種別を利用者が正確に理解できるよう、十分にご留意ください。';
 GSITEXT.EVAC.ATTENTIONDATA = '【データについて】';
 GSITEXT.EVAC.DATAITEM1 = '<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>';
 GSITEXT.EVAC.DATAITEM2 = '<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho-help.html" target="blank">利用方法</a>';
 GSITEXT.EVAC.DATAITEM3 = '<a href="https://www.gsi.go.jp/bousaichiri/hinanbasho.html#info2" target="blank">市町村別公開日・更新日一覧</a>';
 GSITEXT.EVAC.DATAITEM5 = '<a href="https://geoinfo2.gsi.go.jp/contact/Inquiry2.aspx?pcode=1004&bcode=100411&mcode=10041101" target="blank">お問い合わせ</a>';
 
 GSITEXT.LINEEDITTIP = '<span style="font-size:11px;">※右クリックで直前の点を取り消すことができます。</span><br>';

 GSITEXT.PRINTERCOMMENT = '「用紙サイズ」で選択したサイズや向きで印刷するには、プリンターのプロパティで用紙サイズや向きを設定する必要があります。なお、地図はこのページでもスクロールできます。';
 