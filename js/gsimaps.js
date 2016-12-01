/************************************************************************
 設定
 ************************************************************************/
var GSI = {
	 ClientMode  : {}
	,Modal       : {}
	,Draw        : {}
	,Edit        : {}
	,Control     : {}
	,Utils       : {
		Browser  : {}
	 }
	,GLOBALS     : {}
	,TEXT        : {}
};

var CONFIG = {};

// 地理院地図用 layersファイル指定。
// (CONFIG.layers = null;に変更すると、同階層のlayers.txtを読込)
CONFIG.layerBase          = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseDefaultID = "std";
CONFIG.layerBaseFolder    = "ベースマップ";
CONFIG.layerBaseFolderSYS = "GSI.MAP.BASE";
CONFIG.layers = [
	'./layers_txt/layers_20161021tottori.txt',
	'./layers_txt/layers_20160830typhoon10.txt',
	'./layers_txt/layers_20160820typhoon11_9.txt',
	'./layers_txt/layers_20160414kumamoto.txt',
	'./layers_txt/layers1.txt',
	'./layers_txt/layers2.txt',
	'./layers_txt/layers3.txt',
	'./layers_txt/layers4.txt',
	'./layers_txt/layers5.txt',
	'./layers_txt/layers_experimental.txt'
];

//キャッシュ（Layers.txt）
CONFIG.LOADLAYERSTXTCACHE = true;

//キャッシュ（ココタイル）
CONFIG.LOADCOCOTILECACHE = true;

// トップメッセージ
CONFIG.TOPMESSAGE = null;
// 閉じた時のID != 現在のID または EXPIRES時間過ぎた場合にお知らせ復活
/*CONFIG.TOPMESSAGE = {
	MESSAGE : '<a href="http://maps.gsi.go.jp/help/howtouse/150108abstract.pdf"  TARGET="_blank">主な機能概要</a>',
	DETAILS : '',
	ID : '20150216', // 文字列を指定この値に変更あった場合はお知らせが復活
	EXPIRES : -1 //-1  // クッキーの有効期限( hour )
};*/

// 初期位置
CONFIG.DEFAULT = { CENTER : [35.3622222, 138.7313889],ZOOM : 5};

// レイヤータイプリスト
CONFIG.LAYERTYPELIST = {
	"kml"           : { caption : "KML", isTile: false },
	"tile"          : { caption : "タイル", isTile: true, isTileImage : true },
	"geojson"       : { caption : "GeoJSON", isTile: false },
	"topojson"      : { caption : "TopoJSON", isTile: false },
	"geojson_tile"  : { caption : "GeoJSONタイル", isTile: true },
	"topojson_tile" : { caption : "TopoJSONタイル", isTile: true },
	"tms"           : { caption : "TMS", isTile: true, isTileImage : true }
};

// ココタイルONOFFのデフォルト値
CONFIG.COCOTILEVISIBLE = false;

//ココタイルURL設定
// 複数設定例
// CONFIG.COCOTILEURL = ['http://cyberjapandata-t1.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://cyberjapandata-t2.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://cyberjapandata-t3.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv']
CONFIG.COCOTILEURL = ['https://cyberjapandata-t1.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t2.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t3.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://insarmap.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv'];

// アクセスカウンターを表示するかどうか
CONFIG.USEACCESSCOUNTER = true;

// リストにレイヤーのタイプを表示するかどうか（デバッグ用）
CONFIG.VISIBLELAYERTYPE  = false;

// IE10,11のグレースケールを利用するか
//CONFIG.USEIE1011GRAYSCALE = true;
CONFIG.USEIE10GRAYSCALE = false;
CONFIG.USEIE11GRAYSCALE = true;

// 検索結果クリック時のズームレベル
CONFIG.SEARCHRESULTCLICKZOOM = 15;

// 検索結果のマーカー表示件数(-1で全て)
CONFIG.SEARCHRESULTMAXMARKERNUM = -1;

// 緯度経度グリッドスタイル
CONFIG.LATLNGGRIDSTYLE = {
	color : "#1D417A",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3]
};
CONFIG.LATLNGGRIDLABELCLASSNAME = 'latlnggrid_label';

// レイヤーツリーの階層を記憶
CONFIG.LAYERTREEDIALOGKEEPCURRENT = false;

// UTMグリッドスタイル
CONFIG.UTMGRIDSTYLE = {
	color : "#FF0000",
	weight : 2,
	opacity: 1,
	fill: false,
	fillOpacity:1,
	dashArray : [3,3],
	visible : false
};
CONFIG.UTMGRIDLABELCLASSNAME = 'utmgrid_label';
CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER = true; 

// 磁北線の数
CONFIG.JIHOKULINECOUNT = 3;

// 磁北線のスタイル
CONFIG.JIHOKULINESTYLE = {
	"color":' #ff0000',
	"weight": 1,
	"opacity": 0.8,
	"fill" : false,
	"fillOpacity":1,
	"clickable" : false
};

// 磁北線が表示される閾値（ZLがこの値以上で表示される）
CONFIG.JIHOKULINEAVAILABLEZOOM = 11;

// 印刷用紙サイズ
CONFIG.PAPERSIZE = {
	"A4_portrait" : {w:650,h:900},  //A4縦
	"A4_landscape" : {w:950,h:550}, //A4横
	"A3_portrait" : {w:950,h:1350},  //A3縦
	"A3_landscape" : {w:1400,h:900}  //A3横
};

// アクセスカウンタ設定
CONFIG.ACCESSCOUNTERRETRY = 0; // 再試行回数 0で再試行しない。

// ダイアログ表示等エフェクト
CONFIG.EFFECTS = {
	// メニュー表示エフェクト
	MENU : {
		ROOT : {
			animation : "slide",
			option : {"easing": "linear"},
			speed : "fast"
		},
		OTHER : {
			animation : "scale",
			option : {"direction": "both","easing": "linear"},
			speed : "fast"
		}
	},
	// ダイアログ表示エフェクト
	DIALOG : {
		animation : "puff",
		option : {"percent": 10},
		speed : "fast"
	}

};

// パラメータ用
CONFIG.PARAMETERNAMES = {
	CENTERCROSS : 'centercross',
	JIHOKULINE  : 'jihokuline',
	LATLNGGRID  : 'latlnggrid',
	UTMGRID     : 'utmgrid',
	MINIMAP     : 'minimap',
    FOOTER      : 'footer',
	COCOTILE    : 'cocotile',
	CLICKMOVE   : 'clickmove',
	HIGHQUALITY : 'highquality',
	CONTEXTMENUOVERLAP : 'contextmenuoverlap'
};

CONFIG.QUERYPARAMETER = {};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CENTERCROSS ]= {
	prefix : 'c',
	settingName : 'centerCross'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.JIHOKULINE ] = {
	prefix : 'j',
	settingName : 'jihokuLine'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.LATLNGGRID ] = {
	prefix : 'l',
	settingName : 'latLngGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.UTMGRID ] = {
	prefix : 'u',
	settingName : 'utmGrid'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.MINIMAP ] = {
	prefix : 'm',
	settingName : 'miniMap'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.FOOTER ] = {
	prefix : 'f',
	settingName : 'footer'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.COCOTILE ] = {
	prefix : 't',
	settingName : 'cocoTile'
};

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CLICKMOVE ] = {
	prefix : 'v',
	settingName : 'clickMove'
};

CONFIG.HIDDENCONTROLPARAMETER = {
	INFOMENU : 'i',
	FUNCMENU : 'f',
	HEADER : 'h',
	CONTEXTMENU : 'c',
	BASEMAPSELECTOR : 'b',
	ALL : 'all'
};

CONFIG.DIALOGPARAMETER = {
	VIEWLISTDIALOG : 'v',
	LAYERTREEDIALOG : 'l'
};

// GeoJSON 独自パラメータ
CONFIG.GEOJSONSPECIALKEYS ={
	"_markerType": true,

	"_iconUrl": true,
	"_iconSize": true,
	"_iconAnchor": true,
	"_html": true,
	"_radius": true,

	"_className": true,
	"_stroke": true,
	"_radius": true,

	"_dashArray": true,
	"_lineCap": true,
	"_lineJoin": true,
	"_clickable": true,

	"_color": true,
	"_opacity": true,
	"_weight": true,
	"_fill": true,
	"_fillColor": true,
	"_fillOpacity": true,
	"_weight": true

};

// ダブルクリック判定の時間
CONFIG.DBLCLICKINTERVAL = 300; // ミリ秒

// 右ダブルクリック判定ミリ秒
CONFIG.RIGHTDBLCLICKINTERVAL = 500;

// 背景地図
CONFIG.BASETILES = [];

// 標高
/*
CONFIG.DEM     = new Array(1);
CONFIG.DEM[0] = { type : "PNG", url : "./[@]/tile.gsi/{z}/{x}/{y}.png"                   , z :  9, fixed : 1, src : "標高ＰＮＧ" };
*/
CONFIG.DEM = new Array(3);
CONFIG.DEM[0] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
CONFIG.DEM[1] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
CONFIG.DEM[2] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};

//for IE9
var vs = window.navigator.appVersion.toLowerCase();
var ua = window.navigator.userAgent.toLowerCase();
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
  CONFIG.DEM[0] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
  CONFIG.DEM[1] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
  CONFIG.DEM[2] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};
}

// サーバーサイドAPI
CONFIG.SERVERAPI = {};

// アクセスカウンター
CONFIG.SERVERAPI.ACCESSCOUNTER = 'https://mcounter.gsi.go.jp/CounterJson.php?id=001';

CONFIG.SERVERAPI.GETADDR = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
CONFIG.SERVERAPI.CHIMEI_SEARCH="https://msearch.gsi.go.jp/address-search/AddressSearch";

//for IE9
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
  CONFIG.SERVERAPI.ACCESSCOUNTER = 'http://mcounter.gsi.go.jp/CounterJson.php?id=001';

  CONFIG.SERVERAPI.GETADDR = "http://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
  CONFIG.SERVERAPI.CHIMEI_SEARCH="http://msearch.gsi.go.jp/address-search/AddressSearch";
}

/************************************************************************
 設定：メニュー：ヘルプ
 ************************************************************************/
CONFIG.HELPMENU = [
 {'Moji':'ヘルプ',                 'Img':'./image/help/help_icon.png',    'Link':'http://maps.gsi.go.jp/help/'},
 {'Moji':'データのご利用について', 'Img':'./image/help/use_icon.png',    'Link':'http://maps.gsi.go.jp/help/use.html'},
 {'Moji':'Twitter',                'Img':'./image/help/twitter.png',      'Link':'https://twitter.com/gsi_cyberjapan'},
 {'Moji':'GitHub',                 'Img':'./image/help/github.png',       'Link':'https://github.com/gsi-cyberjapan'},
 {'Moji':'パートナーネットワーク', 'Img':'./image/help/partner_icon.png', 'Link':'http://maps.gsi.go.jp/pn/'},
 {'Moji':'国土地理院トップ',       'Img':'./image/help/gsi_top.png',      'Link':'http://www.gsi.go.jp/'}
];

/************************************************************************
 設定：メニュー：情報
 ************************************************************************/
CONFIG.MAPMENU = {
	title : '情報'
};

/************************************************************************
 設定：メニュー：機能
 ************************************************************************/
CONFIG.FUNCMENU = {
	title : '機能',
	children : [
		{
			title : '設定',
			arrow : true,
			childrenWidth:230,
			children : [
				{
					id : CONFIG.PARAMETERNAMES.CENTERCROSS,
					title : '中心十字線',
					typeA : 'check',
					defaultCheck : true
				},
				{
					id : CONFIG.PARAMETERNAMES.LATLNGGRID,
					title : '緯経度グリッド',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.UTMGRID,
					title : 'UTMグリッド',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.JIHOKULINE,
					title : '磁北線' + '<span class="mini_comment">（ズーム11以上）</span>',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.MINIMAP,
					title : '広域図',
					typeA : 'check',
					defaultCheck : false
				},
				{
					id : CONFIG.PARAMETERNAMES.CLICKMOVE,
					title : 'クリックで移動',
					typeA : 'check',
					defaultCheck : false
				}
			]
		},
		{
			title : 'ツール',
			arrow : true,
			childrenWidth:150,
			children : [
				{
					id : 'sakuzu',
					title : '作図・ファイル',
					arrow : true
				},
				{
					id : 'measure',
					title : '計測',
					arrow : true
				},
				{
					id : 'gps',
					title : '現在位置',
					arrow : true,
					checkCondition : function() { return GSI.GeoLocation.can; }
				},
				{
					id : 'ucode',
					title : '場所情報コード',
					arrow : true,
					href : 'ucodehref'//'http://ucopendb.gsi.go.jp/ucode_app/logical_code/ucode_disp.php?lat={y}&lng={x}&zoom={z}'
				},				
				{
					title : '共有',
					arrow : true,
					childrenWidth:200,
					children : [
						{
							id : 'share_link',
							title : 'リンクを取得',
							arrow : true
						},
						{
							id : 'share_builtin',
							title : 'サイトに埋込',
							arrow : true
						},
						{
							id : 'share_file',
							title : '名前を付けて一時保存',
							arrow : true
						}
					]
				},
				{
					id : 'print',
					title : '印刷',
					arrow : true
				},
				{
					title : '他のウェブ地図',
					arrow : true,
					childrenWidth:160,
					children : [
						{
							title : 'Mapion',
							href : 'mapion'//'http://www.mapion.co.jp/m/{y}_{x}_{z}/?wgs=1'
						},
						{
							title : 'いつもNAVI',
							href : 'itsumonavi'//'http://www.its-mo.com/map/top_z/{y2}_{x2}_{z}/'
						}
					]
				}
			]
		},
		{
			title : '3D',
			arrow : true,
			href : 'gsi3d'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
		},
		{
			title : 'Globe<span style="font-size: 12px;">(試験公開)</span>',
			arrow : true,
			href : 'gsiglobe'//'http://maps.gsi.go.jp/globe/index_globe.html'
		}
	]
};

/************************************************************************
 設定：グリッド（ズームレベル対応）
 ************************************************************************/
// 緯度経度グリッド
CONFIG.LATLNGGRID = {
	CONDITION : [
		{ zoom : 2,  grid : 3600 * 40},
		{ zoom : 3,  grid : 3600 * 40},
		{ zoom : 4,  grid : 3600 * 20},
		{ zoom : 5,  grid : 3600 * 10},
		{ zoom : 6,  grid : 3600 * 5},
		{ zoom : 7,  grid : 3600 * 3},
		{ zoom : 8,  grid : 3600 * 2},
		{ zoom : 9,  grid : 3600 },
		{ zoom : 10, grid : 60 * 30 },
		{ zoom : 11, grid : 60 * 20 },
		{ zoom : 12, grid : 60 * 10 },
		{ zoom : 13, grid : 60 * 3 },
		{ zoom : 14, grid : 60 * 2 },
		{ zoom : 15, grid : 60 },
		{ zoom : 16, grid : 30 },
		{ zoom : 17, grid : 20 },
		{ zoom : 18, grid : 10 },
		{ zoom : 99, grid : 10 }
	]
};

// UTMグリッド
CONFIG.UTMGRID = {
	CONDITION : [
		{ zoom : 7, grid : 'a'},          //  7以下 広域
		{ zoom : 10, grid : 100 * 1000 }, // 10以下 100km
		{ zoom : 11, grid : 20  * 1000 },
		{ zoom : 12, grid : 10  * 1000 },
		{ zoom : 13, grid : 5  * 1000 },
		{ zoom : 14, grid : 3  * 1000 },
		{ zoom : 15, grid : 1  * 1000 },
		{ zoom : 16, grid : 500 },
		{ zoom : 17, grid : 250 },
		{ zoom : 18, grid : 100 },
		{ zoom : 99, grid : 100 }
	]
};

/************************************************************************
 設定：文言
 ************************************************************************/
// アクセスカウンタ
GSI.TEXT.ACCESSCOUNTER = {};
GSI.TEXT.ACCESSCOUNTER.TOOLTIP = "アクセス数";

// 計測
GSI.TEXT.MEASURE = {};
GSI.TEXT.MEASURE.DIALOG_TITLE = '計測';
GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION = '距離';
GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION = '面積';
GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION = '選択図形';

// 作図関連
GSI.TEXT.SAKUZU = {};
GSI.TEXT.SAKUZU.SAKUZUTITLE = '新規作図情報';
GSI.TEXT.SAKUZU.LOAD_ERROR = 'ファイルが読み込めません。';
GSI.TEXT.SAKUZU.LOAD_NOFILE = 'ファイルが選択されていません。';

GSI.TEXT.SAKUZU.DIALOG_TITLE = '作図・ファイル';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD = 'ファイルから読み込み';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE = '選択している情報をまとめて保存';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER = 'マーカー（アイコン）を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLEMARKER = 'マーカー（円）を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER = 'テキストを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE = '線を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY = 'ポリゴンを追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE = '円を追加';
GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND = 'フリーハンドで線を追加';

GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN = '編集';
GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN = '削除';

GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください';
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい' ;
GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION = 'パネル上の表示名' ;

GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN = '読込を開始';
GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN = '中　止';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE = 'ファイルが選択されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT = 'テキストが入力されていません。';
GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR = '読み込みに失敗しました。ファイルの形式をご確認ください。';

GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT = 'ファイル形式を選択して下さい';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2= '「TEXT」および「マーカー(円)」で作図した内容はGeoJSON形式でのみ保存可能です。';
GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい' ;
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN = '上記の内容で保存';
GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD = 'クリップボードにコピー';
GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN = '戻　る';

GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN = 'オブジェクトの削除';
GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN = '確　定';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN = '終　了';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG = '編集を終了しますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG = '作図・ファイルパネルを閉じますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG = 'このオブジェクトを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG = 'このレイヤを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN = '自由文入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN = 'テーブル入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG = '表示するHTMLを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT = '例1:動物園　\n例2:<span style="background:#00FFFF; color:red; font-size:20pt;">図書館</span>';

// 共有
GSI.TEXT.SHARE = {};
GSI.TEXT.SHARE.DIALOG_TITLE = '共有';
GSI.TEXT.SHARE.DIALOG_LINK_TITLE = 'リンクを取得';
GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE = 'ウェブサイトに埋め込む';
GSI.TEXT.SHARE.DIALOG_SAVE_TITLE = '名前を付けて一時保存';

GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE = '次のURLをメール等で送付することで、現在表示されている地図を共有することができます。'+'<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE = '次のタグをHTMLファイルに加えることで、地理院地図をウェブサイトに埋め込むことができます。'+'<div style="font-size:85%;">※作図結果は反映されません。作図結果は、作図・ファイル機能を使ってファイルに保存して共有することをおすすめいたします。</div>';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE = '次のHTMLを[上記のHTMLを保存]>ボタンをクリックして保存して下さい。'+'<div style="font-size:85%;">※HTML は一時的なものとしてご利用ください。作図情報は、作図機能を使ってファイルに保存することをおすすめします。</div>';
GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 = '次のHTMLをテキストエディタで<strong>文字コードUTF-8</strong>で保存して下さい。' ;

GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR = '大変申し訳ありません。しばらく経ってからご利用下さい' ;

GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN = '上記のHTMLを保存';
GSI.TEXT.SHARE.DIALOG_COPYBTN = 'クリップボードにコピー';
GSI.TEXT.SHARE.DIALOG_NOCOPYMSG = 'URLをコピーしてご利用下さい';

/************************************************************************
 設定：旧地理院地図より
 ************************************************************************/
GSI.MUNI_ARRAY = {};
GSI.MUNI_ARRAY["1100"] = '1,北海道,1100,札幌市';
GSI.MUNI_ARRAY["1101"] = '1,北海道,1101,札幌市　中央区';
GSI.MUNI_ARRAY["1102"] = '1,北海道,1102,札幌市　北区';
GSI.MUNI_ARRAY["1103"] = '1,北海道,1103,札幌市　東区';
GSI.MUNI_ARRAY["1104"] = '1,北海道,1104,札幌市　白石区';
GSI.MUNI_ARRAY["1105"] = '1,北海道,1105,札幌市　豊平区';
GSI.MUNI_ARRAY["1106"] = '1,北海道,1106,札幌市　南区';
GSI.MUNI_ARRAY["1107"] = '1,北海道,1107,札幌市　西区';
GSI.MUNI_ARRAY["1108"] = '1,北海道,1108,札幌市　厚別区';
GSI.MUNI_ARRAY["1109"] = '1,北海道,1109,札幌市　手稲区';
GSI.MUNI_ARRAY["1110"] = '1,北海道,1110,札幌市　清田区';
GSI.MUNI_ARRAY["1202"] = '1,北海道,1202,函館市';
GSI.MUNI_ARRAY["1203"] = '1,北海道,1203,小樽市';
GSI.MUNI_ARRAY["1204"] = '1,北海道,1204,旭川市';
GSI.MUNI_ARRAY["1205"] = '1,北海道,1205,室蘭市';
GSI.MUNI_ARRAY["1206"] = '1,北海道,1206,釧路市';
GSI.MUNI_ARRAY["1207"] = '1,北海道,1207,帯広市';
GSI.MUNI_ARRAY["1208"] = '1,北海道,1208,北見市';
GSI.MUNI_ARRAY["1209"] = '1,北海道,1209,夕張市';
GSI.MUNI_ARRAY["1210"] = '1,北海道,1210,岩見沢市';
GSI.MUNI_ARRAY["1211"] = '1,北海道,1211,網走市';
GSI.MUNI_ARRAY["1212"] = '1,北海道,1212,留萌市';
GSI.MUNI_ARRAY["1213"] = '1,北海道,1213,苫小牧市';
GSI.MUNI_ARRAY["1214"] = '1,北海道,1214,稚内市';
GSI.MUNI_ARRAY["1215"] = '1,北海道,1215,美唄市';
GSI.MUNI_ARRAY["1216"] = '1,北海道,1216,芦別市';
GSI.MUNI_ARRAY["1217"] = '1,北海道,1217,江別市';
GSI.MUNI_ARRAY["1218"] = '1,北海道,1218,赤平市';
GSI.MUNI_ARRAY["1219"] = '1,北海道,1219,紋別市';
GSI.MUNI_ARRAY["1220"] = '1,北海道,1220,士別市';
GSI.MUNI_ARRAY["1221"] = '1,北海道,1221,名寄市';
GSI.MUNI_ARRAY["1222"] = '1,北海道,1222,三笠市';
GSI.MUNI_ARRAY["1223"] = '1,北海道,1223,根室市';
GSI.MUNI_ARRAY["1224"] = '1,北海道,1224,千歳市';
GSI.MUNI_ARRAY["1225"] = '1,北海道,1225,滝川市';
GSI.MUNI_ARRAY["1226"] = '1,北海道,1226,砂川市';
GSI.MUNI_ARRAY["1227"] = '1,北海道,1227,歌志内市';
GSI.MUNI_ARRAY["1228"] = '1,北海道,1228,深川市';
GSI.MUNI_ARRAY["1229"] = '1,北海道,1229,富良野市';
GSI.MUNI_ARRAY["1230"] = '1,北海道,1230,登別市';
GSI.MUNI_ARRAY["1231"] = '1,北海道,1231,恵庭市';
GSI.MUNI_ARRAY["1233"] = '1,北海道,1233,伊達市';
GSI.MUNI_ARRAY["1234"] = '1,北海道,1234,北広島市';
GSI.MUNI_ARRAY["1235"] = '1,北海道,1235,石狩市';
GSI.MUNI_ARRAY["1236"] = '1,北海道,1236,北斗市';
GSI.MUNI_ARRAY["1303"] = '1,北海道,1303,当別町';
GSI.MUNI_ARRAY["1304"] = '1,北海道,1304,新篠津村';
GSI.MUNI_ARRAY["1331"] = '1,北海道,1331,松前町';
GSI.MUNI_ARRAY["1332"] = '1,北海道,1332,福島町';
GSI.MUNI_ARRAY["1333"] = '1,北海道,1333,知内町';
GSI.MUNI_ARRAY["1334"] = '1,北海道,1334,木古内町';
GSI.MUNI_ARRAY["1337"] = '1,北海道,1337,七飯町';
GSI.MUNI_ARRAY["1343"] = '1,北海道,1343,鹿部町';
GSI.MUNI_ARRAY["1345"] = '1,北海道,1345,森町';
GSI.MUNI_ARRAY["1346"] = '1,北海道,1346,八雲町';
GSI.MUNI_ARRAY["1347"] = '1,北海道,1347,長万部町';
GSI.MUNI_ARRAY["1361"] = '1,北海道,1361,江差町';
GSI.MUNI_ARRAY["1362"] = '1,北海道,1362,上ノ国町';
GSI.MUNI_ARRAY["1363"] = '1,北海道,1363,厚沢部町';
GSI.MUNI_ARRAY["1364"] = '1,北海道,1364,乙部町';
GSI.MUNI_ARRAY["1367"] = '1,北海道,1367,奥尻町';
GSI.MUNI_ARRAY["1370"] = '1,北海道,1370,今金町';
GSI.MUNI_ARRAY["1371"] = '1,北海道,1371,せたな町';
GSI.MUNI_ARRAY["1391"] = '1,北海道,1391,島牧村';
GSI.MUNI_ARRAY["1392"] = '1,北海道,1392,寿都町';
GSI.MUNI_ARRAY["1393"] = '1,北海道,1393,黒松内町';
GSI.MUNI_ARRAY["1394"] = '1,北海道,1394,蘭越町';
GSI.MUNI_ARRAY["1395"] = '1,北海道,1395,ニセコ町';
GSI.MUNI_ARRAY["1396"] = '1,北海道,1396,真狩村';
GSI.MUNI_ARRAY["1397"] = '1,北海道,1397,留寿都村';
GSI.MUNI_ARRAY["1398"] = '1,北海道,1398,喜茂別町';
GSI.MUNI_ARRAY["1399"] = '1,北海道,1399,京極町';
GSI.MUNI_ARRAY["1400"] = '1,北海道,1400,倶知安町';
GSI.MUNI_ARRAY["1401"] = '1,北海道,1401,共和町';
GSI.MUNI_ARRAY["1402"] = '1,北海道,1402,岩内町';
GSI.MUNI_ARRAY["1403"] = '1,北海道,1403,泊村';
GSI.MUNI_ARRAY["1404"] = '1,北海道,1404,神恵内村';
GSI.MUNI_ARRAY["1405"] = '1,北海道,1405,積丹町';
GSI.MUNI_ARRAY["1406"] = '1,北海道,1406,古平町';
GSI.MUNI_ARRAY["1407"] = '1,北海道,1407,仁木町';
GSI.MUNI_ARRAY["1408"] = '1,北海道,1408,余市町';
GSI.MUNI_ARRAY["1409"] = '1,北海道,1409,赤井川村';
GSI.MUNI_ARRAY["1423"] = '1,北海道,1423,南幌町';
GSI.MUNI_ARRAY["1424"] = '1,北海道,1424,奈井江町';
GSI.MUNI_ARRAY["1425"] = '1,北海道,1425,上砂川町';
GSI.MUNI_ARRAY["1427"] = '1,北海道,1427,由仁町';
GSI.MUNI_ARRAY["1428"] = '1,北海道,1428,長沼町';
GSI.MUNI_ARRAY["1429"] = '1,北海道,1429,栗山町';
GSI.MUNI_ARRAY["1430"] = '1,北海道,1430,月形町';
GSI.MUNI_ARRAY["1431"] = '1,北海道,1431,浦臼町';
GSI.MUNI_ARRAY["1432"] = '1,北海道,1432,新十津川町';
GSI.MUNI_ARRAY["1433"] = '1,北海道,1433,妹背牛町';
GSI.MUNI_ARRAY["1434"] = '1,北海道,1434,秩父別町';
GSI.MUNI_ARRAY["1436"] = '1,北海道,1436,雨竜町';
GSI.MUNI_ARRAY["1437"] = '1,北海道,1437,北竜町';
GSI.MUNI_ARRAY["1438"] = '1,北海道,1438,沼田町';
GSI.MUNI_ARRAY["1452"] = '1,北海道,1452,鷹栖町';
GSI.MUNI_ARRAY["1453"] = '1,北海道,1453,東神楽町';
GSI.MUNI_ARRAY["1454"] = '1,北海道,1454,当麻町';
GSI.MUNI_ARRAY["1455"] = '1,北海道,1455,比布町';
GSI.MUNI_ARRAY["1456"] = '1,北海道,1456,愛別町';
GSI.MUNI_ARRAY["1457"] = '1,北海道,1457,上川町';
GSI.MUNI_ARRAY["1458"] = '1,北海道,1458,東川町';
GSI.MUNI_ARRAY["1459"] = '1,北海道,1459,美瑛町';
GSI.MUNI_ARRAY["1460"] = '1,北海道,1460,上富良野町';
GSI.MUNI_ARRAY["1461"] = '1,北海道,1461,中富良野町';
GSI.MUNI_ARRAY["1462"] = '1,北海道,1462,南富良野町';
GSI.MUNI_ARRAY["1463"] = '1,北海道,1463,占冠村';
GSI.MUNI_ARRAY["1464"] = '1,北海道,1464,和寒町';
GSI.MUNI_ARRAY["1465"] = '1,北海道,1465,剣淵町';
GSI.MUNI_ARRAY["1468"] = '1,北海道,1468,下川町';
GSI.MUNI_ARRAY["1469"] = '1,北海道,1469,美深町';
GSI.MUNI_ARRAY["1470"] = '1,北海道,1470,音威子府村';
GSI.MUNI_ARRAY["1471"] = '1,北海道,1471,中川町';
GSI.MUNI_ARRAY["1472"] = '1,北海道,1472,幌加内町';
GSI.MUNI_ARRAY["1481"] = '1,北海道,1481,増毛町';
GSI.MUNI_ARRAY["1482"] = '1,北海道,1482,小平町';
GSI.MUNI_ARRAY["1483"] = '1,北海道,1483,苫前町';
GSI.MUNI_ARRAY["1484"] = '1,北海道,1484,羽幌町';
GSI.MUNI_ARRAY["1485"] = '1,北海道,1485,初山別村';
GSI.MUNI_ARRAY["1486"] = '1,北海道,1486,遠別町';
GSI.MUNI_ARRAY["1487"] = '1,北海道,1487,天塩町';
GSI.MUNI_ARRAY["1511"] = '1,北海道,1511,猿払村';
GSI.MUNI_ARRAY["1512"] = '1,北海道,1512,浜頓別町';
GSI.MUNI_ARRAY["1513"] = '1,北海道,1513,中頓別町';
GSI.MUNI_ARRAY["1514"] = '1,北海道,1514,枝幸町';
GSI.MUNI_ARRAY["1516"] = '1,北海道,1516,豊富町';
GSI.MUNI_ARRAY["1517"] = '1,北海道,1517,礼文町';
GSI.MUNI_ARRAY["1518"] = '1,北海道,1518,利尻町';
GSI.MUNI_ARRAY["1519"] = '1,北海道,1519,利尻富士町';
GSI.MUNI_ARRAY["1520"] = '1,北海道,1520,幌延町';
GSI.MUNI_ARRAY["1543"] = '1,北海道,1543,美幌町';
GSI.MUNI_ARRAY["1544"] = '1,北海道,1544,津別町';
GSI.MUNI_ARRAY["1545"] = '1,北海道,1545,斜里町';
GSI.MUNI_ARRAY["1546"] = '1,北海道,1546,清里町';
GSI.MUNI_ARRAY["1547"] = '1,北海道,1547,小清水町';
GSI.MUNI_ARRAY["1549"] = '1,北海道,1549,訓子府町';
GSI.MUNI_ARRAY["1550"] = '1,北海道,1550,置戸町';
GSI.MUNI_ARRAY["1552"] = '1,北海道,1552,佐呂間町';
GSI.MUNI_ARRAY["1555"] = '1,北海道,1555,遠軽町';
GSI.MUNI_ARRAY["1559"] = '1,北海道,1559,湧別町';
GSI.MUNI_ARRAY["1560"] = '1,北海道,1560,滝上町';
GSI.MUNI_ARRAY["1561"] = '1,北海道,1561,興部町';
GSI.MUNI_ARRAY["1562"] = '1,北海道,1562,西興部村';
GSI.MUNI_ARRAY["1563"] = '1,北海道,1563,雄武町';
GSI.MUNI_ARRAY["1564"] = '1,北海道,1564,大空町';
GSI.MUNI_ARRAY["1571"] = '1,北海道,1571,豊浦町';
GSI.MUNI_ARRAY["1575"] = '1,北海道,1575,壮瞥町';
GSI.MUNI_ARRAY["1578"] = '1,北海道,1578,白老町';
GSI.MUNI_ARRAY["1581"] = '1,北海道,1581,厚真町';
GSI.MUNI_ARRAY["1584"] = '1,北海道,1584,洞爺湖町';
GSI.MUNI_ARRAY["1585"] = '1,北海道,1585,安平町';
GSI.MUNI_ARRAY["1586"] = '1,北海道,1586,むかわ町';
GSI.MUNI_ARRAY["1601"] = '1,北海道,1601,日高町';
GSI.MUNI_ARRAY["1602"] = '1,北海道,1602,平取町';
GSI.MUNI_ARRAY["1604"] = '1,北海道,1604,新冠町';
GSI.MUNI_ARRAY["1607"] = '1,北海道,1607,浦河町';
GSI.MUNI_ARRAY["1608"] = '1,北海道,1608,様似町';
GSI.MUNI_ARRAY["1609"] = '1,北海道,1609,えりも町';
GSI.MUNI_ARRAY["1610"] = '1,北海道,1610,新ひだか町';
GSI.MUNI_ARRAY["1631"] = '1,北海道,1631,音更町';
GSI.MUNI_ARRAY["1632"] = '1,北海道,1632,士幌町';
GSI.MUNI_ARRAY["1633"] = '1,北海道,1633,上士幌町';
GSI.MUNI_ARRAY["1634"] = '1,北海道,1634,鹿追町';
GSI.MUNI_ARRAY["1635"] = '1,北海道,1635,新得町';
GSI.MUNI_ARRAY["1636"] = '1,北海道,1636,清水町';
GSI.MUNI_ARRAY["1637"] = '1,北海道,1637,芽室町';
GSI.MUNI_ARRAY["1638"] = '1,北海道,1638,中札内村';
GSI.MUNI_ARRAY["1639"] = '1,北海道,1639,更別村';
GSI.MUNI_ARRAY["1641"] = '1,北海道,1641,大樹町';
GSI.MUNI_ARRAY["1642"] = '1,北海道,1642,広尾町';
GSI.MUNI_ARRAY["1643"] = '1,北海道,1643,幕別町';
GSI.MUNI_ARRAY["1644"] = '1,北海道,1644,池田町';
GSI.MUNI_ARRAY["1645"] = '1,北海道,1645,豊頃町';
GSI.MUNI_ARRAY["1646"] = '1,北海道,1646,本別町';
GSI.MUNI_ARRAY["1647"] = '1,北海道,1647,足寄町';
GSI.MUNI_ARRAY["1648"] = '1,北海道,1648,陸別町';
GSI.MUNI_ARRAY["1649"] = '1,北海道,1649,浦幌町';
GSI.MUNI_ARRAY["1661"] = '1,北海道,1661,釧路町';
GSI.MUNI_ARRAY["1662"] = '1,北海道,1662,厚岸町';
GSI.MUNI_ARRAY["1663"] = '1,北海道,1663,浜中町';
GSI.MUNI_ARRAY["1664"] = '1,北海道,1664,標茶町';
GSI.MUNI_ARRAY["1665"] = '1,北海道,1665,弟子屈町';
GSI.MUNI_ARRAY["1667"] = '1,北海道,1667,鶴居村';
GSI.MUNI_ARRAY["1668"] = '1,北海道,1668,白糠町';
GSI.MUNI_ARRAY["1691"] = '1,北海道,1691,別海町';
GSI.MUNI_ARRAY["1692"] = '1,北海道,1692,中標津町';
GSI.MUNI_ARRAY["1693"] = '1,北海道,1693,標津町';
GSI.MUNI_ARRAY["1694"] = '1,北海道,1694,羅臼町';
GSI.MUNI_ARRAY["1695"] = '1,北海道,1695,色丹村';
GSI.MUNI_ARRAY["1696"] = '1,北海道,1696,泊村';
GSI.MUNI_ARRAY["1697"] = '1,北海道,1697,留夜別村';
GSI.MUNI_ARRAY["1698"] = '1,北海道,1698,留別村';
GSI.MUNI_ARRAY["1699"] = '1,北海道,1699,紗那村';
GSI.MUNI_ARRAY["1700"] = '1,北海道,1700,蘂取村';
GSI.MUNI_ARRAY["2201"] = '2,青森県,2201,青森市';
GSI.MUNI_ARRAY["2202"] = '2,青森県,2202,弘前市';
GSI.MUNI_ARRAY["2203"] = '2,青森県,2203,八戸市';
GSI.MUNI_ARRAY["2204"] = '2,青森県,2204,黒石市';
GSI.MUNI_ARRAY["2205"] = '2,青森県,2205,五所川原市';
GSI.MUNI_ARRAY["2206"] = '2,青森県,2206,十和田市';
GSI.MUNI_ARRAY["2207"] = '2,青森県,2207,三沢市';
GSI.MUNI_ARRAY["2208"] = '2,青森県,2208,むつ市';
GSI.MUNI_ARRAY["2209"] = '2,青森県,2209,つがる市';
GSI.MUNI_ARRAY["2210"] = '2,青森県,2210,平川市';
GSI.MUNI_ARRAY["2301"] = '2,青森県,2301,平内町';
GSI.MUNI_ARRAY["2303"] = '2,青森県,2303,今別町';
GSI.MUNI_ARRAY["2304"] = '2,青森県,2304,蓬田村';
GSI.MUNI_ARRAY["2307"] = '2,青森県,2307,外ヶ浜町';
GSI.MUNI_ARRAY["2321"] = '2,青森県,2321,鰺ヶ沢町';
GSI.MUNI_ARRAY["2323"] = '2,青森県,2323,深浦町';
GSI.MUNI_ARRAY["2343"] = '2,青森県,2343,西目屋村';
GSI.MUNI_ARRAY["2361"] = '2,青森県,2361,藤崎町';
GSI.MUNI_ARRAY["2362"] = '2,青森県,2362,大鰐町';
GSI.MUNI_ARRAY["2367"] = '2,青森県,2367,田舎館村';
GSI.MUNI_ARRAY["2381"] = '2,青森県,2381,板柳町';
GSI.MUNI_ARRAY["2384"] = '2,青森県,2384,鶴田町';
GSI.MUNI_ARRAY["2387"] = '2,青森県,2387,中泊町';
GSI.MUNI_ARRAY["2401"] = '2,青森県,2401,野辺地町';
GSI.MUNI_ARRAY["2402"] = '2,青森県,2402,七戸町';
GSI.MUNI_ARRAY["2405"] = '2,青森県,2405,六戸町';
GSI.MUNI_ARRAY["2406"] = '2,青森県,2406,横浜町';
GSI.MUNI_ARRAY["2408"] = '2,青森県,2408,東北町';
GSI.MUNI_ARRAY["2411"] = '2,青森県,2411,六ヶ所村';
GSI.MUNI_ARRAY["2412"] = '2,青森県,2412,おいらせ町';
GSI.MUNI_ARRAY["2423"] = '2,青森県,2423,大間町';
GSI.MUNI_ARRAY["2424"] = '2,青森県,2424,東通村';
GSI.MUNI_ARRAY["2425"] = '2,青森県,2425,風間浦村';
GSI.MUNI_ARRAY["2426"] = '2,青森県,2426,佐井村';
GSI.MUNI_ARRAY["2441"] = '2,青森県,2441,三戸町';
GSI.MUNI_ARRAY["2442"] = '2,青森県,2442,五戸町';
GSI.MUNI_ARRAY["2443"] = '2,青森県,2443,田子町';
GSI.MUNI_ARRAY["2445"] = '2,青森県,2445,南部町';
GSI.MUNI_ARRAY["2446"] = '2,青森県,2446,階上町';
GSI.MUNI_ARRAY["2450"] = '2,青森県,2450,新郷村';
GSI.MUNI_ARRAY["3201"] = '3,岩手県,3201,盛岡市';
GSI.MUNI_ARRAY["3202"] = '3,岩手県,3202,宮古市';
GSI.MUNI_ARRAY["3203"] = '3,岩手県,3203,大船渡市';
GSI.MUNI_ARRAY["3205"] = '3,岩手県,3205,花巻市';
GSI.MUNI_ARRAY["3206"] = '3,岩手県,3206,北上市';
GSI.MUNI_ARRAY["3207"] = '3,岩手県,3207,久慈市';
GSI.MUNI_ARRAY["3208"] = '3,岩手県,3208,遠野市';
GSI.MUNI_ARRAY["3209"] = '3,岩手県,3209,一関市';
GSI.MUNI_ARRAY["3210"] = '3,岩手県,3210,陸前高田市';
GSI.MUNI_ARRAY["3211"] = '3,岩手県,3211,釜石市';
GSI.MUNI_ARRAY["3213"] = '3,岩手県,3213,二戸市';
GSI.MUNI_ARRAY["3214"] = '3,岩手県,3214,八幡平市';
GSI.MUNI_ARRAY["3215"] = '3,岩手県,3215,奥州市';
GSI.MUNI_ARRAY["3216"] = '3,岩手県,3216,滝沢市';
GSI.MUNI_ARRAY["3301"] = '3,岩手県,3301,雫石町';
GSI.MUNI_ARRAY["3302"] = '3,岩手県,3302,葛巻町';
GSI.MUNI_ARRAY["3303"] = '3,岩手県,3303,岩手町';
GSI.MUNI_ARRAY["3321"] = '3,岩手県,3321,紫波町';
GSI.MUNI_ARRAY["3322"] = '3,岩手県,3322,矢巾町';
GSI.MUNI_ARRAY["3366"] = '3,岩手県,3366,西和賀町';
GSI.MUNI_ARRAY["3381"] = '3,岩手県,3381,金ケ崎町';
GSI.MUNI_ARRAY["3402"] = '3,岩手県,3402,平泉町';
GSI.MUNI_ARRAY["3441"] = '3,岩手県,3441,住田町';
GSI.MUNI_ARRAY["3461"] = '3,岩手県,3461,大槌町';
GSI.MUNI_ARRAY["3482"] = '3,岩手県,3482,山田町';
GSI.MUNI_ARRAY["3483"] = '3,岩手県,3483,岩泉町';
GSI.MUNI_ARRAY["3484"] = '3,岩手県,3484,田野畑村';
GSI.MUNI_ARRAY["3485"] = '3,岩手県,3485,普代村';
GSI.MUNI_ARRAY["3501"] = '3,岩手県,3501,軽米町';
GSI.MUNI_ARRAY["3503"] = '3,岩手県,3503,野田村';
GSI.MUNI_ARRAY["3506"] = '3,岩手県,3506,九戸村';
GSI.MUNI_ARRAY["3507"] = '3,岩手県,3507,洋野町';
GSI.MUNI_ARRAY["3524"] = '3,岩手県,3524,一戸町';
GSI.MUNI_ARRAY["4100"] = '4,宮城県,4100,仙台市';
GSI.MUNI_ARRAY["4101"] = '4,宮城県,4101,仙台市　青葉区';
GSI.MUNI_ARRAY["4102"] = '4,宮城県,4102,仙台市　宮城野区';
GSI.MUNI_ARRAY["4103"] = '4,宮城県,4103,仙台市　若林区';
GSI.MUNI_ARRAY["4104"] = '4,宮城県,4104,仙台市　太白区';
GSI.MUNI_ARRAY["4105"] = '4,宮城県,4105,仙台市　泉区';
GSI.MUNI_ARRAY["4202"] = '4,宮城県,4202,石巻市';
GSI.MUNI_ARRAY["4203"] = '4,宮城県,4203,塩竈市';
GSI.MUNI_ARRAY["4205"] = '4,宮城県,4205,気仙沼市';
GSI.MUNI_ARRAY["4206"] = '4,宮城県,4206,白石市';
GSI.MUNI_ARRAY["4207"] = '4,宮城県,4207,名取市';
GSI.MUNI_ARRAY["4208"] = '4,宮城県,4208,角田市';
GSI.MUNI_ARRAY["4209"] = '4,宮城県,4209,多賀城市';
GSI.MUNI_ARRAY["4211"] = '4,宮城県,4211,岩沼市';
GSI.MUNI_ARRAY["4212"] = '4,宮城県,4212,登米市';
GSI.MUNI_ARRAY["4213"] = '4,宮城県,4213,栗原市';
GSI.MUNI_ARRAY["4214"] = '4,宮城県,4214,東松島市';
GSI.MUNI_ARRAY["4215"] = '4,宮城県,4215,大崎市';
GSI.MUNI_ARRAY["4216"] = '4,宮城県,4216,富谷市';
GSI.MUNI_ARRAY["4301"] = '4,宮城県,4301,蔵王町';
GSI.MUNI_ARRAY["4302"] = '4,宮城県,4302,七ケ宿町';
GSI.MUNI_ARRAY["4321"] = '4,宮城県,4321,大河原町';
GSI.MUNI_ARRAY["4322"] = '4,宮城県,4322,村田町';
GSI.MUNI_ARRAY["4323"] = '4,宮城県,4323,柴田町';
GSI.MUNI_ARRAY["4324"] = '4,宮城県,4324,川崎町';
GSI.MUNI_ARRAY["4341"] = '4,宮城県,4341,丸森町';
GSI.MUNI_ARRAY["4361"] = '4,宮城県,4361,亘理町';
GSI.MUNI_ARRAY["4362"] = '4,宮城県,4362,山元町';
GSI.MUNI_ARRAY["4401"] = '4,宮城県,4401,松島町';
GSI.MUNI_ARRAY["4404"] = '4,宮城県,4404,七ヶ浜町';
GSI.MUNI_ARRAY["4406"] = '4,宮城県,4406,利府町';
GSI.MUNI_ARRAY["4421"] = '4,宮城県,4421,大和町';
GSI.MUNI_ARRAY["4422"] = '4,宮城県,4422,大郷町';
GSI.MUNI_ARRAY["4423"] = '4,宮城県,4423,富谷市';
GSI.MUNI_ARRAY["4424"] = '4,宮城県,4424,大衡村';
GSI.MUNI_ARRAY["4444"] = '4,宮城県,4444,色麻町';
GSI.MUNI_ARRAY["4445"] = '4,宮城県,4445,加美町';
GSI.MUNI_ARRAY["4501"] = '4,宮城県,4501,涌谷町';
GSI.MUNI_ARRAY["4505"] = '4,宮城県,4505,美里町';
GSI.MUNI_ARRAY["4581"] = '4,宮城県,4581,女川町';
GSI.MUNI_ARRAY["4606"] = '4,宮城県,4606,南三陸町';
GSI.MUNI_ARRAY["5201"] = '5,秋田県,5201,秋田市';
GSI.MUNI_ARRAY["5202"] = '5,秋田県,5202,能代市';
GSI.MUNI_ARRAY["5203"] = '5,秋田県,5203,横手市';
GSI.MUNI_ARRAY["5204"] = '5,秋田県,5204,大館市';
GSI.MUNI_ARRAY["5206"] = '5,秋田県,5206,男鹿市';
GSI.MUNI_ARRAY["5207"] = '5,秋田県,5207,湯沢市';
GSI.MUNI_ARRAY["5209"] = '5,秋田県,5209,鹿角市';
GSI.MUNI_ARRAY["5210"] = '5,秋田県,5210,由利本荘市';
GSI.MUNI_ARRAY["5211"] = '5,秋田県,5211,潟上市';
GSI.MUNI_ARRAY["5212"] = '5,秋田県,5212,大仙市';
GSI.MUNI_ARRAY["5213"] = '5,秋田県,5213,北秋田市';
GSI.MUNI_ARRAY["5214"] = '5,秋田県,5214,にかほ市';
GSI.MUNI_ARRAY["5215"] = '5,秋田県,5215,仙北市';
GSI.MUNI_ARRAY["5303"] = '5,秋田県,5303,小坂町';
GSI.MUNI_ARRAY["5327"] = '5,秋田県,5327,上小阿仁村';
GSI.MUNI_ARRAY["5346"] = '5,秋田県,5346,藤里町';
GSI.MUNI_ARRAY["5348"] = '5,秋田県,5348,三種町';
GSI.MUNI_ARRAY["5349"] = '5,秋田県,5349,八峰町';
GSI.MUNI_ARRAY["5361"] = '5,秋田県,5361,五城目町';
GSI.MUNI_ARRAY["5363"] = '5,秋田県,5363,八郎潟町';
GSI.MUNI_ARRAY["5366"] = '5,秋田県,5366,井川町';
GSI.MUNI_ARRAY["5368"] = '5,秋田県,5368,大潟村';
GSI.MUNI_ARRAY["5434"] = '5,秋田県,5434,美郷町';
GSI.MUNI_ARRAY["5463"] = '5,秋田県,5463,羽後町';
GSI.MUNI_ARRAY["5464"] = '5,秋田県,5464,東成瀬村';
GSI.MUNI_ARRAY["6201"] = '6,山形県,6201,山形市';
GSI.MUNI_ARRAY["6202"] = '6,山形県,6202,米沢市';
GSI.MUNI_ARRAY["6203"] = '6,山形県,6203,鶴岡市';
GSI.MUNI_ARRAY["6204"] = '6,山形県,6204,酒田市';
GSI.MUNI_ARRAY["6205"] = '6,山形県,6205,新庄市';
GSI.MUNI_ARRAY["6206"] = '6,山形県,6206,寒河江市';
GSI.MUNI_ARRAY["6207"] = '6,山形県,6207,上山市';
GSI.MUNI_ARRAY["6208"] = '6,山形県,6208,村山市';
GSI.MUNI_ARRAY["6209"] = '6,山形県,6209,長井市';
GSI.MUNI_ARRAY["6210"] = '6,山形県,6210,天童市';
GSI.MUNI_ARRAY["6211"] = '6,山形県,6211,東根市';
GSI.MUNI_ARRAY["6212"] = '6,山形県,6212,尾花沢市';
GSI.MUNI_ARRAY["6213"] = '6,山形県,6213,南陽市';
GSI.MUNI_ARRAY["6301"] = '6,山形県,6301,山辺町';
GSI.MUNI_ARRAY["6302"] = '6,山形県,6302,中山町';
GSI.MUNI_ARRAY["6321"] = '6,山形県,6321,河北町';
GSI.MUNI_ARRAY["6322"] = '6,山形県,6322,西川町';
GSI.MUNI_ARRAY["6323"] = '6,山形県,6323,朝日町';
GSI.MUNI_ARRAY["6324"] = '6,山形県,6324,大江町';
GSI.MUNI_ARRAY["6341"] = '6,山形県,6341,大石田町';
GSI.MUNI_ARRAY["6361"] = '6,山形県,6361,金山町';
GSI.MUNI_ARRAY["6362"] = '6,山形県,6362,最上町';
GSI.MUNI_ARRAY["6363"] = '6,山形県,6363,舟形町';
GSI.MUNI_ARRAY["6364"] = '6,山形県,6364,真室川町';
GSI.MUNI_ARRAY["6365"] = '6,山形県,6365,大蔵村';
GSI.MUNI_ARRAY["6366"] = '6,山形県,6366,鮭川村';
GSI.MUNI_ARRAY["6367"] = '6,山形県,6367,戸沢村';
GSI.MUNI_ARRAY["6381"] = '6,山形県,6381,高畠町';
GSI.MUNI_ARRAY["6382"] = '6,山形県,6382,川西町';
GSI.MUNI_ARRAY["6401"] = '6,山形県,6401,小国町';
GSI.MUNI_ARRAY["6402"] = '6,山形県,6402,白鷹町';
GSI.MUNI_ARRAY["6403"] = '6,山形県,6403,飯豊町';
GSI.MUNI_ARRAY["6426"] = '6,山形県,6426,三川町';
GSI.MUNI_ARRAY["6428"] = '6,山形県,6428,庄内町';
GSI.MUNI_ARRAY["6461"] = '6,山形県,6461,遊佐町';
GSI.MUNI_ARRAY["7201"] = '7,福島県,7201,福島市';
GSI.MUNI_ARRAY["7202"] = '7,福島県,7202,会津若松市';
GSI.MUNI_ARRAY["7203"] = '7,福島県,7203,郡山市';
GSI.MUNI_ARRAY["7204"] = '7,福島県,7204,いわき市';
GSI.MUNI_ARRAY["7205"] = '7,福島県,7205,白河市';
GSI.MUNI_ARRAY["7207"] = '7,福島県,7207,須賀川市';
GSI.MUNI_ARRAY["7208"] = '7,福島県,7208,喜多方市';
GSI.MUNI_ARRAY["7209"] = '7,福島県,7209,相馬市';
GSI.MUNI_ARRAY["7210"] = '7,福島県,7210,二本松市';
GSI.MUNI_ARRAY["7211"] = '7,福島県,7211,田村市';
GSI.MUNI_ARRAY["7212"] = '7,福島県,7212,南相馬市';
GSI.MUNI_ARRAY["7213"] = '7,福島県,7213,伊達市';
GSI.MUNI_ARRAY["7214"] = '7,福島県,7214,本宮市';
GSI.MUNI_ARRAY["7301"] = '7,福島県,7301,桑折町';
GSI.MUNI_ARRAY["7303"] = '7,福島県,7303,国見町';
GSI.MUNI_ARRAY["7308"] = '7,福島県,7308,川俣町';
GSI.MUNI_ARRAY["7322"] = '7,福島県,7322,大玉村';
GSI.MUNI_ARRAY["7342"] = '7,福島県,7342,鏡石町';
GSI.MUNI_ARRAY["7344"] = '7,福島県,7344,天栄村';
GSI.MUNI_ARRAY["7362"] = '7,福島県,7362,下郷町';
GSI.MUNI_ARRAY["7364"] = '7,福島県,7364,檜枝岐村';
GSI.MUNI_ARRAY["7367"] = '7,福島県,7367,只見町';
GSI.MUNI_ARRAY["7368"] = '7,福島県,7368,南会津町';
GSI.MUNI_ARRAY["7402"] = '7,福島県,7402,北塩原村';
GSI.MUNI_ARRAY["7405"] = '7,福島県,7405,西会津町';
GSI.MUNI_ARRAY["7407"] = '7,福島県,7407,磐梯町';
GSI.MUNI_ARRAY["7408"] = '7,福島県,7408,猪苗代町';
GSI.MUNI_ARRAY["7421"] = '7,福島県,7421,会津坂下町';
GSI.MUNI_ARRAY["7422"] = '7,福島県,7422,湯川村';
GSI.MUNI_ARRAY["7423"] = '7,福島県,7423,柳津町';
GSI.MUNI_ARRAY["7444"] = '7,福島県,7444,三島町';
GSI.MUNI_ARRAY["7445"] = '7,福島県,7445,金山町';
GSI.MUNI_ARRAY["7446"] = '7,福島県,7446,昭和村';
GSI.MUNI_ARRAY["7447"] = '7,福島県,7447,会津美里町';
GSI.MUNI_ARRAY["7461"] = '7,福島県,7461,西郷村';
GSI.MUNI_ARRAY["7464"] = '7,福島県,7464,泉崎村';
GSI.MUNI_ARRAY["7465"] = '7,福島県,7465,中島村';
GSI.MUNI_ARRAY["7466"] = '7,福島県,7466,矢吹町';
GSI.MUNI_ARRAY["7481"] = '7,福島県,7481,棚倉町';
GSI.MUNI_ARRAY["7482"] = '7,福島県,7482,矢祭町';
GSI.MUNI_ARRAY["7483"] = '7,福島県,7483,塙町';
GSI.MUNI_ARRAY["7484"] = '7,福島県,7484,鮫川村';
GSI.MUNI_ARRAY["7501"] = '7,福島県,7501,石川町';
GSI.MUNI_ARRAY["7502"] = '7,福島県,7502,玉川村';
GSI.MUNI_ARRAY["7503"] = '7,福島県,7503,平田村';
GSI.MUNI_ARRAY["7504"] = '7,福島県,7504,浅川町';
GSI.MUNI_ARRAY["7505"] = '7,福島県,7505,古殿町';
GSI.MUNI_ARRAY["7521"] = '7,福島県,7521,三春町';
GSI.MUNI_ARRAY["7522"] = '7,福島県,7522,小野町';
GSI.MUNI_ARRAY["7541"] = '7,福島県,7541,広野町';
GSI.MUNI_ARRAY["7542"] = '7,福島県,7542,楢葉町';
GSI.MUNI_ARRAY["7543"] = '7,福島県,7543,富岡町';
GSI.MUNI_ARRAY["7544"] = '7,福島県,7544,川内村';
GSI.MUNI_ARRAY["7545"] = '7,福島県,7545,大熊町';
GSI.MUNI_ARRAY["7546"] = '7,福島県,7546,双葉町';
GSI.MUNI_ARRAY["7547"] = '7,福島県,7547,浪江町';
GSI.MUNI_ARRAY["7548"] = '7,福島県,7548,葛尾村';
GSI.MUNI_ARRAY["7561"] = '7,福島県,7561,新地町';
GSI.MUNI_ARRAY["7564"] = '7,福島県,7564,飯舘村';
GSI.MUNI_ARRAY["8201"] = '8,茨城県,8201,水戸市';
GSI.MUNI_ARRAY["8202"] = '8,茨城県,8202,日立市';
GSI.MUNI_ARRAY["8203"] = '8,茨城県,8203,土浦市';
GSI.MUNI_ARRAY["8204"] = '8,茨城県,8204,古河市';
GSI.MUNI_ARRAY["8205"] = '8,茨城県,8205,石岡市';
GSI.MUNI_ARRAY["8207"] = '8,茨城県,8207,結城市';
GSI.MUNI_ARRAY["8208"] = '8,茨城県,8208,龍ケ崎市';
GSI.MUNI_ARRAY["8210"] = '8,茨城県,8210,下妻市';
GSI.MUNI_ARRAY["8211"] = '8,茨城県,8211,常総市';
GSI.MUNI_ARRAY["8212"] = '8,茨城県,8212,常陸太田市';
GSI.MUNI_ARRAY["8214"] = '8,茨城県,8214,高萩市';
GSI.MUNI_ARRAY["8215"] = '8,茨城県,8215,北茨城市';
GSI.MUNI_ARRAY["8216"] = '8,茨城県,8216,笠間市';
GSI.MUNI_ARRAY["8217"] = '8,茨城県,8217,取手市';
GSI.MUNI_ARRAY["8219"] = '8,茨城県,8219,牛久市';
GSI.MUNI_ARRAY["8220"] = '8,茨城県,8220,つくば市';
GSI.MUNI_ARRAY["8221"] = '8,茨城県,8221,ひたちなか市';
GSI.MUNI_ARRAY["8222"] = '8,茨城県,8222,鹿嶋市';
GSI.MUNI_ARRAY["8223"] = '8,茨城県,8223,潮来市';
GSI.MUNI_ARRAY["8224"] = '8,茨城県,8224,守谷市';
GSI.MUNI_ARRAY["8225"] = '8,茨城県,8225,常陸大宮市';
GSI.MUNI_ARRAY["8226"] = '8,茨城県,8226,那珂市';
GSI.MUNI_ARRAY["8227"] = '8,茨城県,8227,筑西市';
GSI.MUNI_ARRAY["8228"] = '8,茨城県,8228,坂東市';
GSI.MUNI_ARRAY["8229"] = '8,茨城県,8229,稲敷市';
GSI.MUNI_ARRAY["8230"] = '8,茨城県,8230,かすみがうら市';
GSI.MUNI_ARRAY["8231"] = '8,茨城県,8231,桜川市';
GSI.MUNI_ARRAY["8232"] = '8,茨城県,8232,神栖市';
GSI.MUNI_ARRAY["8233"] = '8,茨城県,8233,行方市';
GSI.MUNI_ARRAY["8234"] = '8,茨城県,8234,鉾田市';
GSI.MUNI_ARRAY["8235"] = '8,茨城県,8235,つくばみらい市';
GSI.MUNI_ARRAY["8236"] = '8,茨城県,8236,小美玉市';
GSI.MUNI_ARRAY["8302"] = '8,茨城県,8302,茨城町';
GSI.MUNI_ARRAY["8309"] = '8,茨城県,8309,大洗町';
GSI.MUNI_ARRAY["8310"] = '8,茨城県,8310,城里町';
GSI.MUNI_ARRAY["8341"] = '8,茨城県,8341,東海村';
GSI.MUNI_ARRAY["8364"] = '8,茨城県,8364,大子町';
GSI.MUNI_ARRAY["8442"] = '8,茨城県,8442,美浦村';
GSI.MUNI_ARRAY["8443"] = '8,茨城県,8443,阿見町';
GSI.MUNI_ARRAY["8447"] = '8,茨城県,8447,河内町';
GSI.MUNI_ARRAY["8521"] = '8,茨城県,8521,八千代町';
GSI.MUNI_ARRAY["8542"] = '8,茨城県,8542,五霞町';
GSI.MUNI_ARRAY["8546"] = '8,茨城県,8546,境町';
GSI.MUNI_ARRAY["8564"] = '8,茨城県,8564,利根町';
GSI.MUNI_ARRAY["9201"] = '9,栃木県,9201,宇都宮市';
GSI.MUNI_ARRAY["9202"] = '9,栃木県,9202,足利市';
GSI.MUNI_ARRAY["9203"] = '9,栃木県,9203,栃木市';
GSI.MUNI_ARRAY["9204"] = '9,栃木県,9204,佐野市';
GSI.MUNI_ARRAY["9205"] = '9,栃木県,9205,鹿沼市';
GSI.MUNI_ARRAY["9206"] = '9,栃木県,9206,日光市';
GSI.MUNI_ARRAY["9208"] = '9,栃木県,9208,小山市';
GSI.MUNI_ARRAY["9209"] = '9,栃木県,9209,真岡市';
GSI.MUNI_ARRAY["9210"] = '9,栃木県,9210,大田原市';
GSI.MUNI_ARRAY["9211"] = '9,栃木県,9211,矢板市';
GSI.MUNI_ARRAY["9213"] = '9,栃木県,9213,那須塩原市';
GSI.MUNI_ARRAY["9214"] = '9,栃木県,9214,さくら市';
GSI.MUNI_ARRAY["9215"] = '9,栃木県,9215,那須烏山市';
GSI.MUNI_ARRAY["9216"] = '9,栃木県,9216,下野市';
GSI.MUNI_ARRAY["9301"] = '9,栃木県,9301,上三川町';
GSI.MUNI_ARRAY["9342"] = '9,栃木県,9342,益子町';
GSI.MUNI_ARRAY["9343"] = '9,栃木県,9343,茂木町';
GSI.MUNI_ARRAY["9344"] = '9,栃木県,9344,市貝町';
GSI.MUNI_ARRAY["9345"] = '9,栃木県,9345,芳賀町';
GSI.MUNI_ARRAY["9361"] = '9,栃木県,9361,壬生町';
GSI.MUNI_ARRAY["9364"] = '9,栃木県,9364,野木町';
GSI.MUNI_ARRAY["9384"] = '9,栃木県,9384,塩谷町';
GSI.MUNI_ARRAY["9386"] = '9,栃木県,9386,高根沢町';
GSI.MUNI_ARRAY["9407"] = '9,栃木県,9407,那須町';
GSI.MUNI_ARRAY["9411"] = '9,栃木県,9411,那珂川町';
GSI.MUNI_ARRAY["10201"] = '10,群馬県,10201,前橋市';
GSI.MUNI_ARRAY["10202"] = '10,群馬県,10202,高崎市';
GSI.MUNI_ARRAY["10203"] = '10,群馬県,10203,桐生市';
GSI.MUNI_ARRAY["10204"] = '10,群馬県,10204,伊勢崎市';
GSI.MUNI_ARRAY["10205"] = '10,群馬県,10205,太田市';
GSI.MUNI_ARRAY["10206"] = '10,群馬県,10206,沼田市';
GSI.MUNI_ARRAY["10207"] = '10,群馬県,10207,館林市';
GSI.MUNI_ARRAY["10208"] = '10,群馬県,10208,渋川市';
GSI.MUNI_ARRAY["10209"] = '10,群馬県,10209,藤岡市';
GSI.MUNI_ARRAY["10210"] = '10,群馬県,10210,富岡市';
GSI.MUNI_ARRAY["10211"] = '10,群馬県,10211,安中市';
GSI.MUNI_ARRAY["10212"] = '10,群馬県,10212,みどり市';
GSI.MUNI_ARRAY["10344"] = '10,群馬県,10344,榛東村';
GSI.MUNI_ARRAY["10345"] = '10,群馬県,10345,吉岡町';
GSI.MUNI_ARRAY["10366"] = '10,群馬県,10366,上野村';
GSI.MUNI_ARRAY["10367"] = '10,群馬県,10367,神流町';
GSI.MUNI_ARRAY["10382"] = '10,群馬県,10382,下仁田町';
GSI.MUNI_ARRAY["10383"] = '10,群馬県,10383,南牧村';
GSI.MUNI_ARRAY["10384"] = '10,群馬県,10384,甘楽町';
GSI.MUNI_ARRAY["10421"] = '10,群馬県,10421,中之条町';
GSI.MUNI_ARRAY["10424"] = '10,群馬県,10424,長野原町';
GSI.MUNI_ARRAY["10425"] = '10,群馬県,10425,嬬恋村';
GSI.MUNI_ARRAY["10426"] = '10,群馬県,10426,草津町';
GSI.MUNI_ARRAY["10428"] = '10,群馬県,10428,高山村';
GSI.MUNI_ARRAY["10429"] = '10,群馬県,10429,東吾妻町';
GSI.MUNI_ARRAY["10443"] = '10,群馬県,10443,片品村';
GSI.MUNI_ARRAY["10444"] = '10,群馬県,10444,川場村';
GSI.MUNI_ARRAY["10448"] = '10,群馬県,10448,昭和村';
GSI.MUNI_ARRAY["10449"] = '10,群馬県,10449,みなかみ町';
GSI.MUNI_ARRAY["10464"] = '10,群馬県,10464,玉村町';
GSI.MUNI_ARRAY["10521"] = '10,群馬県,10521,板倉町';
GSI.MUNI_ARRAY["10522"] = '10,群馬県,10522,明和町';
GSI.MUNI_ARRAY["10523"] = '10,群馬県,10523,千代田町';
GSI.MUNI_ARRAY["10524"] = '10,群馬県,10524,大泉町';
GSI.MUNI_ARRAY["10525"] = '10,群馬県,10525,邑楽町';
GSI.MUNI_ARRAY["11100"] = '11,埼玉県,11100,さいたま市';
GSI.MUNI_ARRAY["11101"] = '11,埼玉県,11101,さいたま市　西区';
GSI.MUNI_ARRAY["11102"] = '11,埼玉県,11102,さいたま市　北区';
GSI.MUNI_ARRAY["11103"] = '11,埼玉県,11103,さいたま市　大宮区';
GSI.MUNI_ARRAY["11104"] = '11,埼玉県,11104,さいたま市　見沼区';
GSI.MUNI_ARRAY["11105"] = '11,埼玉県,11105,さいたま市　中央区';
GSI.MUNI_ARRAY["11106"] = '11,埼玉県,11106,さいたま市　桜区';
GSI.MUNI_ARRAY["11107"] = '11,埼玉県,11107,さいたま市　浦和区';
GSI.MUNI_ARRAY["11108"] = '11,埼玉県,11108,さいたま市　南区';
GSI.MUNI_ARRAY["11109"] = '11,埼玉県,11109,さいたま市　緑区';
GSI.MUNI_ARRAY["11110"] = '11,埼玉県,11110,さいたま市　岩槻区';
GSI.MUNI_ARRAY["11201"] = '11,埼玉県,11201,川越市';
GSI.MUNI_ARRAY["11202"] = '11,埼玉県,11202,熊谷市';
GSI.MUNI_ARRAY["11203"] = '11,埼玉県,11203,川口市';
GSI.MUNI_ARRAY["11206"] = '11,埼玉県,11206,行田市';
GSI.MUNI_ARRAY["11207"] = '11,埼玉県,11207,秩父市';
GSI.MUNI_ARRAY["11208"] = '11,埼玉県,11208,所沢市';
GSI.MUNI_ARRAY["11209"] = '11,埼玉県,11209,飯能市';
GSI.MUNI_ARRAY["11210"] = '11,埼玉県,11210,加須市';
GSI.MUNI_ARRAY["11211"] = '11,埼玉県,11211,本庄市';
GSI.MUNI_ARRAY["11212"] = '11,埼玉県,11212,東松山市';
GSI.MUNI_ARRAY["11214"] = '11,埼玉県,11214,春日部市';
GSI.MUNI_ARRAY["11215"] = '11,埼玉県,11215,狭山市';
GSI.MUNI_ARRAY["11216"] = '11,埼玉県,11216,羽生市';
GSI.MUNI_ARRAY["11217"] = '11,埼玉県,11217,鴻巣市';
GSI.MUNI_ARRAY["11218"] = '11,埼玉県,11218,深谷市';
GSI.MUNI_ARRAY["11219"] = '11,埼玉県,11219,上尾市';
GSI.MUNI_ARRAY["11221"] = '11,埼玉県,11221,草加市';
GSI.MUNI_ARRAY["11222"] = '11,埼玉県,11222,越谷市';
GSI.MUNI_ARRAY["11223"] = '11,埼玉県,11223,蕨市';
GSI.MUNI_ARRAY["11224"] = '11,埼玉県,11224,戸田市';
GSI.MUNI_ARRAY["11225"] = '11,埼玉県,11225,入間市';
GSI.MUNI_ARRAY["11227"] = '11,埼玉県,11227,朝霞市';
GSI.MUNI_ARRAY["11228"] = '11,埼玉県,11228,志木市';
GSI.MUNI_ARRAY["11229"] = '11,埼玉県,11229,和光市';
GSI.MUNI_ARRAY["11230"] = '11,埼玉県,11230,新座市';
GSI.MUNI_ARRAY["11231"] = '11,埼玉県,11231,桶川市';
GSI.MUNI_ARRAY["11232"] = '11,埼玉県,11232,久喜市';
GSI.MUNI_ARRAY["11233"] = '11,埼玉県,11233,北本市';
GSI.MUNI_ARRAY["11234"] = '11,埼玉県,11234,八潮市';
GSI.MUNI_ARRAY["11235"] = '11,埼玉県,11235,富士見市';
GSI.MUNI_ARRAY["11237"] = '11,埼玉県,11237,三郷市';
GSI.MUNI_ARRAY["11238"] = '11,埼玉県,11238,蓮田市';
GSI.MUNI_ARRAY["11239"] = '11,埼玉県,11239,坂戸市';
GSI.MUNI_ARRAY["11240"] = '11,埼玉県,11240,幸手市';
GSI.MUNI_ARRAY["11241"] = '11,埼玉県,11241,鶴ヶ島市';
GSI.MUNI_ARRAY["11242"] = '11,埼玉県,11242,日高市';
GSI.MUNI_ARRAY["11243"] = '11,埼玉県,11243,吉川市';
GSI.MUNI_ARRAY["11245"] = '11,埼玉県,11245,ふじみ野市';
GSI.MUNI_ARRAY["11301"] = '11,埼玉県,11301,伊奈町';
GSI.MUNI_ARRAY["11324"] = '11,埼玉県,11324,三芳町';
GSI.MUNI_ARRAY["11326"] = '11,埼玉県,11326,毛呂山町';
GSI.MUNI_ARRAY["11327"] = '11,埼玉県,11327,越生町';
GSI.MUNI_ARRAY["11341"] = '11,埼玉県,11341,滑川町';
GSI.MUNI_ARRAY["11342"] = '11,埼玉県,11342,嵐山町';
GSI.MUNI_ARRAY["11343"] = '11,埼玉県,11343,小川町';
GSI.MUNI_ARRAY["11346"] = '11,埼玉県,11346,川島町';
GSI.MUNI_ARRAY["11347"] = '11,埼玉県,11347,吉見町';
GSI.MUNI_ARRAY["11348"] = '11,埼玉県,11348,鳩山町';
GSI.MUNI_ARRAY["11349"] = '11,埼玉県,11349,ときがわ町';
GSI.MUNI_ARRAY["11361"] = '11,埼玉県,11361,横瀬町';
GSI.MUNI_ARRAY["11362"] = '11,埼玉県,11362,皆野町';
GSI.MUNI_ARRAY["11363"] = '11,埼玉県,11363,長瀞町';
GSI.MUNI_ARRAY["11365"] = '11,埼玉県,11365,小鹿野町';
GSI.MUNI_ARRAY["11369"] = '11,埼玉県,11369,東秩父村';
GSI.MUNI_ARRAY["11381"] = '11,埼玉県,11381,美里町';
GSI.MUNI_ARRAY["11383"] = '11,埼玉県,11383,神川町';
GSI.MUNI_ARRAY["11385"] = '11,埼玉県,11385,上里町';
GSI.MUNI_ARRAY["11408"] = '11,埼玉県,11408,寄居町';
GSI.MUNI_ARRAY["11442"] = '11,埼玉県,11442,宮代町';
GSI.MUNI_ARRAY["11246"] = '11,埼玉県,11246,白岡市';
GSI.MUNI_ARRAY["11464"] = '11,埼玉県,11464,杉戸町';
GSI.MUNI_ARRAY["11465"] = '11,埼玉県,11465,松伏町';
GSI.MUNI_ARRAY["12100"] = '12,千葉県,12100,千葉市';
GSI.MUNI_ARRAY["12101"] = '12,千葉県,12101,千葉市　中央区';
GSI.MUNI_ARRAY["12102"] = '12,千葉県,12102,千葉市　花見川区';
GSI.MUNI_ARRAY["12103"] = '12,千葉県,12103,千葉市　稲毛区';
GSI.MUNI_ARRAY["12104"] = '12,千葉県,12104,千葉市　若葉区';
GSI.MUNI_ARRAY["12105"] = '12,千葉県,12105,千葉市　緑区';
GSI.MUNI_ARRAY["12106"] = '12,千葉県,12106,千葉市　美浜区';
GSI.MUNI_ARRAY["12202"] = '12,千葉県,12202,銚子市';
GSI.MUNI_ARRAY["12203"] = '12,千葉県,12203,市川市';
GSI.MUNI_ARRAY["12204"] = '12,千葉県,12204,船橋市';
GSI.MUNI_ARRAY["12205"] = '12,千葉県,12205,館山市';
GSI.MUNI_ARRAY["12206"] = '12,千葉県,12206,木更津市';
GSI.MUNI_ARRAY["12207"] = '12,千葉県,12207,松戸市';
GSI.MUNI_ARRAY["12208"] = '12,千葉県,12208,野田市';
GSI.MUNI_ARRAY["12210"] = '12,千葉県,12210,茂原市';
GSI.MUNI_ARRAY["12211"] = '12,千葉県,12211,成田市';
GSI.MUNI_ARRAY["12212"] = '12,千葉県,12212,佐倉市';
GSI.MUNI_ARRAY["12213"] = '12,千葉県,12213,東金市';
GSI.MUNI_ARRAY["12215"] = '12,千葉県,12215,旭市';
GSI.MUNI_ARRAY["12216"] = '12,千葉県,12216,習志野市';
GSI.MUNI_ARRAY["12217"] = '12,千葉県,12217,柏市';
GSI.MUNI_ARRAY["12218"] = '12,千葉県,12218,勝浦市';
GSI.MUNI_ARRAY["12219"] = '12,千葉県,12219,市原市';
GSI.MUNI_ARRAY["12220"] = '12,千葉県,12220,流山市';
GSI.MUNI_ARRAY["12221"] = '12,千葉県,12221,八千代市';
GSI.MUNI_ARRAY["12222"] = '12,千葉県,12222,我孫子市';
GSI.MUNI_ARRAY["12223"] = '12,千葉県,12223,鴨川市';
GSI.MUNI_ARRAY["12224"] = '12,千葉県,12224,鎌ケ谷市';
GSI.MUNI_ARRAY["12225"] = '12,千葉県,12225,君津市';
GSI.MUNI_ARRAY["12226"] = '12,千葉県,12226,富津市';
GSI.MUNI_ARRAY["12227"] = '12,千葉県,12227,浦安市';
GSI.MUNI_ARRAY["12228"] = '12,千葉県,12228,四街道市';
GSI.MUNI_ARRAY["12229"] = '12,千葉県,12229,袖ケ浦市';
GSI.MUNI_ARRAY["12230"] = '12,千葉県,12230,八街市';
GSI.MUNI_ARRAY["12231"] = '12,千葉県,12231,印西市';
GSI.MUNI_ARRAY["12232"] = '12,千葉県,12232,白井市';
GSI.MUNI_ARRAY["12233"] = '12,千葉県,12233,富里市';
GSI.MUNI_ARRAY["12234"] = '12,千葉県,12234,南房総市';
GSI.MUNI_ARRAY["12235"] = '12,千葉県,12235,匝瑳市';
GSI.MUNI_ARRAY["12236"] = '12,千葉県,12236,香取市';
GSI.MUNI_ARRAY["12237"] = '12,千葉県,12237,山武市';
GSI.MUNI_ARRAY["12238"] = '12,千葉県,12238,いすみ市';
GSI.MUNI_ARRAY["12322"] = '12,千葉県,12322,酒々井町';
GSI.MUNI_ARRAY["12329"] = '12,千葉県,12329,栄町';
GSI.MUNI_ARRAY["12342"] = '12,千葉県,12342,神崎町';
GSI.MUNI_ARRAY["12347"] = '12,千葉県,12347,多古町';
GSI.MUNI_ARRAY["12349"] = '12,千葉県,12349,東庄町';
GSI.MUNI_ARRAY["12239"] = '12,千葉県,12239,大網白里市';
GSI.MUNI_ARRAY["12403"] = '12,千葉県,12403,九十九里町';
GSI.MUNI_ARRAY["12409"] = '12,千葉県,12409,芝山町';
GSI.MUNI_ARRAY["12410"] = '12,千葉県,12410,横芝光町';
GSI.MUNI_ARRAY["12421"] = '12,千葉県,12421,一宮町';
GSI.MUNI_ARRAY["12422"] = '12,千葉県,12422,睦沢町';
GSI.MUNI_ARRAY["12423"] = '12,千葉県,12423,長生村';
GSI.MUNI_ARRAY["12424"] = '12,千葉県,12424,白子町';
GSI.MUNI_ARRAY["12426"] = '12,千葉県,12426,長柄町';
GSI.MUNI_ARRAY["12427"] = '12,千葉県,12427,長南町';
GSI.MUNI_ARRAY["12441"] = '12,千葉県,12441,大多喜町';
GSI.MUNI_ARRAY["12443"] = '12,千葉県,12443,御宿町';
GSI.MUNI_ARRAY["12463"] = '12,千葉県,12463,鋸南町';
GSI.MUNI_ARRAY["13101"] = '13,東京都,13101,千代田区';
GSI.MUNI_ARRAY["13102"] = '13,東京都,13102,中央区';
GSI.MUNI_ARRAY["13103"] = '13,東京都,13103,港区';
GSI.MUNI_ARRAY["13104"] = '13,東京都,13104,新宿区';
GSI.MUNI_ARRAY["13105"] = '13,東京都,13105,文京区';
GSI.MUNI_ARRAY["13106"] = '13,東京都,13106,台東区';
GSI.MUNI_ARRAY["13107"] = '13,東京都,13107,墨田区';
GSI.MUNI_ARRAY["13108"] = '13,東京都,13108,江東区';
GSI.MUNI_ARRAY["13109"] = '13,東京都,13109,品川区';
GSI.MUNI_ARRAY["13110"] = '13,東京都,13110,目黒区';
GSI.MUNI_ARRAY["13111"] = '13,東京都,13111,大田区';
GSI.MUNI_ARRAY["13112"] = '13,東京都,13112,世田谷区';
GSI.MUNI_ARRAY["13113"] = '13,東京都,13113,渋谷区';
GSI.MUNI_ARRAY["13114"] = '13,東京都,13114,中野区';
GSI.MUNI_ARRAY["13115"] = '13,東京都,13115,杉並区';
GSI.MUNI_ARRAY["13116"] = '13,東京都,13116,豊島区';
GSI.MUNI_ARRAY["13117"] = '13,東京都,13117,北区';
GSI.MUNI_ARRAY["13118"] = '13,東京都,13118,荒川区';
GSI.MUNI_ARRAY["13119"] = '13,東京都,13119,板橋区';
GSI.MUNI_ARRAY["13120"] = '13,東京都,13120,練馬区';
GSI.MUNI_ARRAY["13121"] = '13,東京都,13121,足立区';
GSI.MUNI_ARRAY["13122"] = '13,東京都,13122,葛飾区';
GSI.MUNI_ARRAY["13123"] = '13,東京都,13123,江戸川区';
GSI.MUNI_ARRAY["13201"] = '13,東京都,13201,八王子市';
GSI.MUNI_ARRAY["13202"] = '13,東京都,13202,立川市';
GSI.MUNI_ARRAY["13203"] = '13,東京都,13203,武蔵野市';
GSI.MUNI_ARRAY["13204"] = '13,東京都,13204,三鷹市';
GSI.MUNI_ARRAY["13205"] = '13,東京都,13205,青梅市';
GSI.MUNI_ARRAY["13206"] = '13,東京都,13206,府中市';
GSI.MUNI_ARRAY["13207"] = '13,東京都,13207,昭島市';
GSI.MUNI_ARRAY["13208"] = '13,東京都,13208,調布市';
GSI.MUNI_ARRAY["13209"] = '13,東京都,13209,町田市';
GSI.MUNI_ARRAY["13210"] = '13,東京都,13210,小金井市';
GSI.MUNI_ARRAY["13211"] = '13,東京都,13211,小平市';
GSI.MUNI_ARRAY["13212"] = '13,東京都,13212,日野市';
GSI.MUNI_ARRAY["13213"] = '13,東京都,13213,東村山市';
GSI.MUNI_ARRAY["13214"] = '13,東京都,13214,国分寺市';
GSI.MUNI_ARRAY["13215"] = '13,東京都,13215,国立市';
GSI.MUNI_ARRAY["13218"] = '13,東京都,13218,福生市';
GSI.MUNI_ARRAY["13219"] = '13,東京都,13219,狛江市';
GSI.MUNI_ARRAY["13220"] = '13,東京都,13220,東大和市';
GSI.MUNI_ARRAY["13221"] = '13,東京都,13221,清瀬市';
GSI.MUNI_ARRAY["13222"] = '13,東京都,13222,東久留米市';
GSI.MUNI_ARRAY["13223"] = '13,東京都,13223,武蔵村山市';
GSI.MUNI_ARRAY["13224"] = '13,東京都,13224,多摩市';
GSI.MUNI_ARRAY["13225"] = '13,東京都,13225,稲城市';
GSI.MUNI_ARRAY["13227"] = '13,東京都,13227,羽村市';
GSI.MUNI_ARRAY["13228"] = '13,東京都,13228,あきる野市';
GSI.MUNI_ARRAY["13229"] = '13,東京都,13229,西東京市';
GSI.MUNI_ARRAY["13303"] = '13,東京都,13303,瑞穂町';
GSI.MUNI_ARRAY["13305"] = '13,東京都,13305,日の出町';
GSI.MUNI_ARRAY["13307"] = '13,東京都,13307,檜原村';
GSI.MUNI_ARRAY["13308"] = '13,東京都,13308,奥多摩町';
GSI.MUNI_ARRAY["13361"] = '13,東京都,13361,大島町';
GSI.MUNI_ARRAY["13362"] = '13,東京都,13362,利島村';
GSI.MUNI_ARRAY["13363"] = '13,東京都,13363,新島村';
GSI.MUNI_ARRAY["13364"] = '13,東京都,13364,神津島村';
GSI.MUNI_ARRAY["13381"] = '13,東京都,13381,三宅村';
GSI.MUNI_ARRAY["13382"] = '13,東京都,13382,御蔵島村';
GSI.MUNI_ARRAY["13401"] = '13,東京都,13401,八丈町';
GSI.MUNI_ARRAY["13402"] = '13,東京都,13402,青ヶ島村';
GSI.MUNI_ARRAY["13421"] = '13,東京都,13421,小笠原村';
GSI.MUNI_ARRAY["14100"] = '14,神奈川県,14100,横浜市';
GSI.MUNI_ARRAY["14101"] = '14,神奈川県,14101,横浜市　鶴見区';
GSI.MUNI_ARRAY["14102"] = '14,神奈川県,14102,横浜市　神奈川区';
GSI.MUNI_ARRAY["14103"] = '14,神奈川県,14103,横浜市　西区';
GSI.MUNI_ARRAY["14104"] = '14,神奈川県,14104,横浜市　中区';
GSI.MUNI_ARRAY["14105"] = '14,神奈川県,14105,横浜市　南区';
GSI.MUNI_ARRAY["14106"] = '14,神奈川県,14106,横浜市　保土ケ谷区';
GSI.MUNI_ARRAY["14107"] = '14,神奈川県,14107,横浜市　磯子区';
GSI.MUNI_ARRAY["14108"] = '14,神奈川県,14108,横浜市　金沢区';
GSI.MUNI_ARRAY["14109"] = '14,神奈川県,14109,横浜市　港北区';
GSI.MUNI_ARRAY["14110"] = '14,神奈川県,14110,横浜市　戸塚区';
GSI.MUNI_ARRAY["14111"] = '14,神奈川県,14111,横浜市　港南区';
GSI.MUNI_ARRAY["14112"] = '14,神奈川県,14112,横浜市　旭区';
GSI.MUNI_ARRAY["14113"] = '14,神奈川県,14113,横浜市　緑区';
GSI.MUNI_ARRAY["14114"] = '14,神奈川県,14114,横浜市　瀬谷区';
GSI.MUNI_ARRAY["14115"] = '14,神奈川県,14115,横浜市　栄区';
GSI.MUNI_ARRAY["14116"] = '14,神奈川県,14116,横浜市　泉区';
GSI.MUNI_ARRAY["14117"] = '14,神奈川県,14117,横浜市　青葉区';
GSI.MUNI_ARRAY["14118"] = '14,神奈川県,14118,横浜市　都筑区';
GSI.MUNI_ARRAY["14130"] = '14,神奈川県,14130,川崎市';
GSI.MUNI_ARRAY["14131"] = '14,神奈川県,14131,川崎市　川崎区';
GSI.MUNI_ARRAY["14132"] = '14,神奈川県,14132,川崎市　幸区';
GSI.MUNI_ARRAY["14133"] = '14,神奈川県,14133,川崎市　中原区';
GSI.MUNI_ARRAY["14134"] = '14,神奈川県,14134,川崎市　高津区';
GSI.MUNI_ARRAY["14135"] = '14,神奈川県,14135,川崎市　多摩区';
GSI.MUNI_ARRAY["14136"] = '14,神奈川県,14136,川崎市　宮前区';
GSI.MUNI_ARRAY["14137"] = '14,神奈川県,14137,川崎市　麻生区';
GSI.MUNI_ARRAY["14150"] = '14,神奈川県,14150,相模原市';
GSI.MUNI_ARRAY["14151"] = '14,神奈川県,14151,相模原市　緑区';
GSI.MUNI_ARRAY["14152"] = '14,神奈川県,14152,相模原市　中央区';
GSI.MUNI_ARRAY["14153"] = '14,神奈川県,14153,相模原市　南区';
GSI.MUNI_ARRAY["14201"] = '14,神奈川県,14201,横須賀市';
GSI.MUNI_ARRAY["14203"] = '14,神奈川県,14203,平塚市';
GSI.MUNI_ARRAY["14204"] = '14,神奈川県,14204,鎌倉市';
GSI.MUNI_ARRAY["14205"] = '14,神奈川県,14205,藤沢市';
GSI.MUNI_ARRAY["14206"] = '14,神奈川県,14206,小田原市';
GSI.MUNI_ARRAY["14207"] = '14,神奈川県,14207,茅ヶ崎市';
GSI.MUNI_ARRAY["14208"] = '14,神奈川県,14208,逗子市';
GSI.MUNI_ARRAY["14210"] = '14,神奈川県,14210,三浦市';
GSI.MUNI_ARRAY["14211"] = '14,神奈川県,14211,秦野市';
GSI.MUNI_ARRAY["14212"] = '14,神奈川県,14212,厚木市';
GSI.MUNI_ARRAY["14213"] = '14,神奈川県,14213,大和市';
GSI.MUNI_ARRAY["14214"] = '14,神奈川県,14214,伊勢原市';
GSI.MUNI_ARRAY["14215"] = '14,神奈川県,14215,海老名市';
GSI.MUNI_ARRAY["14216"] = '14,神奈川県,14216,座間市';
GSI.MUNI_ARRAY["14217"] = '14,神奈川県,14217,南足柄市';
GSI.MUNI_ARRAY["14218"] = '14,神奈川県,14218,綾瀬市';
GSI.MUNI_ARRAY["14301"] = '14,神奈川県,14301,葉山町';
GSI.MUNI_ARRAY["14321"] = '14,神奈川県,14321,寒川町';
GSI.MUNI_ARRAY["14341"] = '14,神奈川県,14341,大磯町';
GSI.MUNI_ARRAY["14342"] = '14,神奈川県,14342,二宮町';
GSI.MUNI_ARRAY["14361"] = '14,神奈川県,14361,中井町';
GSI.MUNI_ARRAY["14362"] = '14,神奈川県,14362,大井町';
GSI.MUNI_ARRAY["14363"] = '14,神奈川県,14363,松田町';
GSI.MUNI_ARRAY["14364"] = '14,神奈川県,14364,山北町';
GSI.MUNI_ARRAY["14366"] = '14,神奈川県,14366,開成町';
GSI.MUNI_ARRAY["14382"] = '14,神奈川県,14382,箱根町';
GSI.MUNI_ARRAY["14383"] = '14,神奈川県,14383,真鶴町';
GSI.MUNI_ARRAY["14384"] = '14,神奈川県,14384,湯河原町';
GSI.MUNI_ARRAY["14401"] = '14,神奈川県,14401,愛川町';
GSI.MUNI_ARRAY["14402"] = '14,神奈川県,14402,清川村';
GSI.MUNI_ARRAY["15100"] = '15,新潟県,15100,新潟市';
GSI.MUNI_ARRAY["15101"] = '15,新潟県,15101,新潟市　北区';
GSI.MUNI_ARRAY["15102"] = '15,新潟県,15102,新潟市　東区';
GSI.MUNI_ARRAY["15103"] = '15,新潟県,15103,新潟市　中央区';
GSI.MUNI_ARRAY["15104"] = '15,新潟県,15104,新潟市　江南区';
GSI.MUNI_ARRAY["15105"] = '15,新潟県,15105,新潟市　秋葉区';
GSI.MUNI_ARRAY["15106"] = '15,新潟県,15106,新潟市　南区';
GSI.MUNI_ARRAY["15107"] = '15,新潟県,15107,新潟市　西区';
GSI.MUNI_ARRAY["15108"] = '15,新潟県,15108,新潟市　西蒲区';
GSI.MUNI_ARRAY["15202"] = '15,新潟県,15202,長岡市';
GSI.MUNI_ARRAY["15204"] = '15,新潟県,15204,三条市';
GSI.MUNI_ARRAY["15205"] = '15,新潟県,15205,柏崎市';
GSI.MUNI_ARRAY["15206"] = '15,新潟県,15206,新発田市';
GSI.MUNI_ARRAY["15208"] = '15,新潟県,15208,小千谷市';
GSI.MUNI_ARRAY["15209"] = '15,新潟県,15209,加茂市';
GSI.MUNI_ARRAY["15210"] = '15,新潟県,15210,十日町市';
GSI.MUNI_ARRAY["15211"] = '15,新潟県,15211,見附市';
GSI.MUNI_ARRAY["15212"] = '15,新潟県,15212,村上市';
GSI.MUNI_ARRAY["15213"] = '15,新潟県,15213,燕市';
GSI.MUNI_ARRAY["15216"] = '15,新潟県,15216,糸魚川市';
GSI.MUNI_ARRAY["15217"] = '15,新潟県,15217,妙高市';
GSI.MUNI_ARRAY["15218"] = '15,新潟県,15218,五泉市';
GSI.MUNI_ARRAY["15222"] = '15,新潟県,15222,上越市';
GSI.MUNI_ARRAY["15223"] = '15,新潟県,15223,阿賀野市';
GSI.MUNI_ARRAY["15224"] = '15,新潟県,15224,佐渡市';
GSI.MUNI_ARRAY["15225"] = '15,新潟県,15225,魚沼市';
GSI.MUNI_ARRAY["15226"] = '15,新潟県,15226,南魚沼市';
GSI.MUNI_ARRAY["15227"] = '15,新潟県,15227,胎内市';
GSI.MUNI_ARRAY["15307"] = '15,新潟県,15307,聖籠町';
GSI.MUNI_ARRAY["15342"] = '15,新潟県,15342,弥彦村';
GSI.MUNI_ARRAY["15361"] = '15,新潟県,15361,田上町';
GSI.MUNI_ARRAY["15385"] = '15,新潟県,15385,阿賀町';
GSI.MUNI_ARRAY["15405"] = '15,新潟県,15405,出雲崎町';
GSI.MUNI_ARRAY["15461"] = '15,新潟県,15461,湯沢町';
GSI.MUNI_ARRAY["15482"] = '15,新潟県,15482,津南町';
GSI.MUNI_ARRAY["15504"] = '15,新潟県,15504,刈羽村';
GSI.MUNI_ARRAY["15581"] = '15,新潟県,15581,関川村';
GSI.MUNI_ARRAY["15586"] = '15,新潟県,15586,粟島浦村';
GSI.MUNI_ARRAY["16201"] = '16,富山県,16201,富山市';
GSI.MUNI_ARRAY["16202"] = '16,富山県,16202,高岡市';
GSI.MUNI_ARRAY["16204"] = '16,富山県,16204,魚津市';
GSI.MUNI_ARRAY["16205"] = '16,富山県,16205,氷見市';
GSI.MUNI_ARRAY["16206"] = '16,富山県,16206,滑川市';
GSI.MUNI_ARRAY["16207"] = '16,富山県,16207,黒部市';
GSI.MUNI_ARRAY["16208"] = '16,富山県,16208,砺波市';
GSI.MUNI_ARRAY["16209"] = '16,富山県,16209,小矢部市';
GSI.MUNI_ARRAY["16210"] = '16,富山県,16210,南砺市';
GSI.MUNI_ARRAY["16211"] = '16,富山県,16211,射水市';
GSI.MUNI_ARRAY["16321"] = '16,富山県,16321,舟橋村';
GSI.MUNI_ARRAY["16322"] = '16,富山県,16322,上市町';
GSI.MUNI_ARRAY["16323"] = '16,富山県,16323,立山町';
GSI.MUNI_ARRAY["16342"] = '16,富山県,16342,入善町';
GSI.MUNI_ARRAY["16343"] = '16,富山県,16343,朝日町';
GSI.MUNI_ARRAY["17201"] = '17,石川県,17201,金沢市';
GSI.MUNI_ARRAY["17202"] = '17,石川県,17202,七尾市';
GSI.MUNI_ARRAY["17203"] = '17,石川県,17203,小松市';
GSI.MUNI_ARRAY["17204"] = '17,石川県,17204,輪島市';
GSI.MUNI_ARRAY["17205"] = '17,石川県,17205,珠洲市';
GSI.MUNI_ARRAY["17206"] = '17,石川県,17206,加賀市';
GSI.MUNI_ARRAY["17207"] = '17,石川県,17207,羽咋市';
GSI.MUNI_ARRAY["17209"] = '17,石川県,17209,かほく市';
GSI.MUNI_ARRAY["17210"] = '17,石川県,17210,白山市';
GSI.MUNI_ARRAY["17211"] = '17,石川県,17211,能美市';
GSI.MUNI_ARRAY["17212"] = '17,石川県,17212,野々市市';
GSI.MUNI_ARRAY["17324"] = '17,石川県,17324,川北町';
GSI.MUNI_ARRAY["17361"] = '17,石川県,17361,津幡町';
GSI.MUNI_ARRAY["17365"] = '17,石川県,17365,内灘町';
GSI.MUNI_ARRAY["17384"] = '17,石川県,17384,志賀町';
GSI.MUNI_ARRAY["17386"] = '17,石川県,17386,宝達志水町';
GSI.MUNI_ARRAY["17407"] = '17,石川県,17407,中能登町';
GSI.MUNI_ARRAY["17461"] = '17,石川県,17461,穴水町';
GSI.MUNI_ARRAY["17463"] = '17,石川県,17463,能登町';
GSI.MUNI_ARRAY["18201"] = '18,福井県,18201,福井市';
GSI.MUNI_ARRAY["18202"] = '18,福井県,18202,敦賀市';
GSI.MUNI_ARRAY["18204"] = '18,福井県,18204,小浜市';
GSI.MUNI_ARRAY["18205"] = '18,福井県,18205,大野市';
GSI.MUNI_ARRAY["18206"] = '18,福井県,18206,勝山市';
GSI.MUNI_ARRAY["18207"] = '18,福井県,18207,鯖江市';
GSI.MUNI_ARRAY["18208"] = '18,福井県,18208,あわら市';
GSI.MUNI_ARRAY["18209"] = '18,福井県,18209,越前市';
GSI.MUNI_ARRAY["18210"] = '18,福井県,18210,坂井市';
GSI.MUNI_ARRAY["18322"] = '18,福井県,18322,永平寺町';
GSI.MUNI_ARRAY["18382"] = '18,福井県,18382,池田町';
GSI.MUNI_ARRAY["18404"] = '18,福井県,18404,南越前町';
GSI.MUNI_ARRAY["18423"] = '18,福井県,18423,越前町';
GSI.MUNI_ARRAY["18442"] = '18,福井県,18442,美浜町';
GSI.MUNI_ARRAY["18481"] = '18,福井県,18481,高浜町';
GSI.MUNI_ARRAY["18483"] = '18,福井県,18483,おおい町';
GSI.MUNI_ARRAY["18501"] = '18,福井県,18501,若狭町';
GSI.MUNI_ARRAY["19201"] = '19,山梨県,19201,甲府市';
GSI.MUNI_ARRAY["19202"] = '19,山梨県,19202,富士吉田市';
GSI.MUNI_ARRAY["19204"] = '19,山梨県,19204,都留市';
GSI.MUNI_ARRAY["19205"] = '19,山梨県,19205,山梨市';
GSI.MUNI_ARRAY["19206"] = '19,山梨県,19206,大月市';
GSI.MUNI_ARRAY["19207"] = '19,山梨県,19207,韮崎市';
GSI.MUNI_ARRAY["19208"] = '19,山梨県,19208,南アルプス市';
GSI.MUNI_ARRAY["19209"] = '19,山梨県,19209,北杜市';
GSI.MUNI_ARRAY["19210"] = '19,山梨県,19210,甲斐市';
GSI.MUNI_ARRAY["19211"] = '19,山梨県,19211,笛吹市';
GSI.MUNI_ARRAY["19212"] = '19,山梨県,19212,上野原市';
GSI.MUNI_ARRAY["19213"] = '19,山梨県,19213,甲州市';
GSI.MUNI_ARRAY["19214"] = '19,山梨県,19214,中央市';
GSI.MUNI_ARRAY["19346"] = '19,山梨県,19346,市川三郷町';
GSI.MUNI_ARRAY["19364"] = '19,山梨県,19364,早川町';
GSI.MUNI_ARRAY["19365"] = '19,山梨県,19365,身延町';
GSI.MUNI_ARRAY["19366"] = '19,山梨県,19366,南部町';
GSI.MUNI_ARRAY["19368"] = '19,山梨県,19368,富士川町';
GSI.MUNI_ARRAY["19384"] = '19,山梨県,19384,昭和町';
GSI.MUNI_ARRAY["19422"] = '19,山梨県,19422,道志村';
GSI.MUNI_ARRAY["19423"] = '19,山梨県,19423,西桂町';
GSI.MUNI_ARRAY["19424"] = '19,山梨県,19424,忍野村';
GSI.MUNI_ARRAY["19425"] = '19,山梨県,19425,山中湖村';
GSI.MUNI_ARRAY["19429"] = '19,山梨県,19429,鳴沢村';
GSI.MUNI_ARRAY["19430"] = '19,山梨県,19430,富士河口湖町';
GSI.MUNI_ARRAY["19442"] = '19,山梨県,19442,小菅村';
GSI.MUNI_ARRAY["19443"] = '19,山梨県,19443,丹波山村';
GSI.MUNI_ARRAY["20201"] = '20,長野県,20201,長野市';
GSI.MUNI_ARRAY["20202"] = '20,長野県,20202,松本市';
GSI.MUNI_ARRAY["20203"] = '20,長野県,20203,上田市';
GSI.MUNI_ARRAY["20204"] = '20,長野県,20204,岡谷市';
GSI.MUNI_ARRAY["20205"] = '20,長野県,20205,飯田市';
GSI.MUNI_ARRAY["20206"] = '20,長野県,20206,諏訪市';
GSI.MUNI_ARRAY["20207"] = '20,長野県,20207,須坂市';
GSI.MUNI_ARRAY["20208"] = '20,長野県,20208,小諸市';
GSI.MUNI_ARRAY["20209"] = '20,長野県,20209,伊那市';
GSI.MUNI_ARRAY["20210"] = '20,長野県,20210,駒ヶ根市';
GSI.MUNI_ARRAY["20211"] = '20,長野県,20211,中野市';
GSI.MUNI_ARRAY["20212"] = '20,長野県,20212,大町市';
GSI.MUNI_ARRAY["20213"] = '20,長野県,20213,飯山市';
GSI.MUNI_ARRAY["20214"] = '20,長野県,20214,茅野市';
GSI.MUNI_ARRAY["20215"] = '20,長野県,20215,塩尻市';
GSI.MUNI_ARRAY["20217"] = '20,長野県,20217,佐久市';
GSI.MUNI_ARRAY["20218"] = '20,長野県,20218,千曲市';
GSI.MUNI_ARRAY["20219"] = '20,長野県,20219,東御市';
GSI.MUNI_ARRAY["20220"] = '20,長野県,20220,安曇野市';
GSI.MUNI_ARRAY["20303"] = '20,長野県,20303,小海町';
GSI.MUNI_ARRAY["20304"] = '20,長野県,20304,川上村';
GSI.MUNI_ARRAY["20305"] = '20,長野県,20305,南牧村';
GSI.MUNI_ARRAY["20306"] = '20,長野県,20306,南相木村';
GSI.MUNI_ARRAY["20307"] = '20,長野県,20307,北相木村';
GSI.MUNI_ARRAY["20309"] = '20,長野県,20309,佐久穂町';
GSI.MUNI_ARRAY["20321"] = '20,長野県,20321,軽井沢町';
GSI.MUNI_ARRAY["20323"] = '20,長野県,20323,御代田町';
GSI.MUNI_ARRAY["20324"] = '20,長野県,20324,立科町';
GSI.MUNI_ARRAY["20349"] = '20,長野県,20349,青木村';
GSI.MUNI_ARRAY["20350"] = '20,長野県,20350,長和町';
GSI.MUNI_ARRAY["20361"] = '20,長野県,20361,下諏訪町';
GSI.MUNI_ARRAY["20362"] = '20,長野県,20362,富士見町';
GSI.MUNI_ARRAY["20363"] = '20,長野県,20363,原村';
GSI.MUNI_ARRAY["20382"] = '20,長野県,20382,辰野町';
GSI.MUNI_ARRAY["20383"] = '20,長野県,20383,箕輪町';
GSI.MUNI_ARRAY["20384"] = '20,長野県,20384,飯島町';
GSI.MUNI_ARRAY["20385"] = '20,長野県,20385,南箕輪村';
GSI.MUNI_ARRAY["20386"] = '20,長野県,20386,中川村';
GSI.MUNI_ARRAY["20388"] = '20,長野県,20388,宮田村';
GSI.MUNI_ARRAY["20402"] = '20,長野県,20402,松川町';
GSI.MUNI_ARRAY["20403"] = '20,長野県,20403,高森町';
GSI.MUNI_ARRAY["20404"] = '20,長野県,20404,阿南町';
GSI.MUNI_ARRAY["20407"] = '20,長野県,20407,阿智村';
GSI.MUNI_ARRAY["20409"] = '20,長野県,20409,平谷村';
GSI.MUNI_ARRAY["20410"] = '20,長野県,20410,根羽村';
GSI.MUNI_ARRAY["20411"] = '20,長野県,20411,下條村';
GSI.MUNI_ARRAY["20412"] = '20,長野県,20412,売木村';
GSI.MUNI_ARRAY["20413"] = '20,長野県,20413,天龍村';
GSI.MUNI_ARRAY["20414"] = '20,長野県,20414,泰阜村';
GSI.MUNI_ARRAY["20415"] = '20,長野県,20415,喬木村';
GSI.MUNI_ARRAY["20416"] = '20,長野県,20416,豊丘村';
GSI.MUNI_ARRAY["20417"] = '20,長野県,20417,大鹿村';
GSI.MUNI_ARRAY["20422"] = '20,長野県,20422,上松町';
GSI.MUNI_ARRAY["20423"] = '20,長野県,20423,南木曽町';
GSI.MUNI_ARRAY["20425"] = '20,長野県,20425,木祖村';
GSI.MUNI_ARRAY["20429"] = '20,長野県,20429,王滝村';
GSI.MUNI_ARRAY["20430"] = '20,長野県,20430,大桑村';
GSI.MUNI_ARRAY["20432"] = '20,長野県,20432,木曽町';
GSI.MUNI_ARRAY["20446"] = '20,長野県,20446,麻績村';
GSI.MUNI_ARRAY["20448"] = '20,長野県,20448,生坂村';
GSI.MUNI_ARRAY["20450"] = '20,長野県,20450,山形村';
GSI.MUNI_ARRAY["20451"] = '20,長野県,20451,朝日村';
GSI.MUNI_ARRAY["20452"] = '20,長野県,20452,筑北村';
GSI.MUNI_ARRAY["20481"] = '20,長野県,20481,池田町';
GSI.MUNI_ARRAY["20482"] = '20,長野県,20482,松川村';
GSI.MUNI_ARRAY["20485"] = '20,長野県,20485,白馬村';
GSI.MUNI_ARRAY["20486"] = '20,長野県,20486,小谷村';
GSI.MUNI_ARRAY["20521"] = '20,長野県,20521,坂城町';
GSI.MUNI_ARRAY["20541"] = '20,長野県,20541,小布施町';
GSI.MUNI_ARRAY["20543"] = '20,長野県,20543,高山村';
GSI.MUNI_ARRAY["20561"] = '20,長野県,20561,山ノ内町';
GSI.MUNI_ARRAY["20562"] = '20,長野県,20562,木島平村';
GSI.MUNI_ARRAY["20563"] = '20,長野県,20563,野沢温泉村';
GSI.MUNI_ARRAY["20583"] = '20,長野県,20583,信濃町';
GSI.MUNI_ARRAY["20588"] = '20,長野県,20588,小川村';
GSI.MUNI_ARRAY["20590"] = '20,長野県,20590,飯綱町';
GSI.MUNI_ARRAY["20602"] = '20,長野県,20602,栄村';
GSI.MUNI_ARRAY["21201"] = '21,岐阜県,21201,岐阜市';
GSI.MUNI_ARRAY["21202"] = '21,岐阜県,21202,大垣市';
GSI.MUNI_ARRAY["21203"] = '21,岐阜県,21203,高山市';
GSI.MUNI_ARRAY["21204"] = '21,岐阜県,21204,多治見市';
GSI.MUNI_ARRAY["21205"] = '21,岐阜県,21205,関市';
GSI.MUNI_ARRAY["21206"] = '21,岐阜県,21206,中津川市';
GSI.MUNI_ARRAY["21207"] = '21,岐阜県,21207,美濃市';
GSI.MUNI_ARRAY["21208"] = '21,岐阜県,21208,瑞浪市';
GSI.MUNI_ARRAY["21209"] = '21,岐阜県,21209,羽島市';
GSI.MUNI_ARRAY["21210"] = '21,岐阜県,21210,恵那市';
GSI.MUNI_ARRAY["21211"] = '21,岐阜県,21211,美濃加茂市';
GSI.MUNI_ARRAY["21212"] = '21,岐阜県,21212,土岐市';
GSI.MUNI_ARRAY["21213"] = '21,岐阜県,21213,各務原市';
GSI.MUNI_ARRAY["21214"] = '21,岐阜県,21214,可児市';
GSI.MUNI_ARRAY["21215"] = '21,岐阜県,21215,山県市';
GSI.MUNI_ARRAY["21216"] = '21,岐阜県,21216,瑞穂市';
GSI.MUNI_ARRAY["21217"] = '21,岐阜県,21217,飛騨市';
GSI.MUNI_ARRAY["21218"] = '21,岐阜県,21218,本巣市';
GSI.MUNI_ARRAY["21219"] = '21,岐阜県,21219,郡上市';
GSI.MUNI_ARRAY["21220"] = '21,岐阜県,21220,下呂市';
GSI.MUNI_ARRAY["21221"] = '21,岐阜県,21221,海津市';
GSI.MUNI_ARRAY["21302"] = '21,岐阜県,21302,岐南町';
GSI.MUNI_ARRAY["21303"] = '21,岐阜県,21303,笠松町';
GSI.MUNI_ARRAY["21341"] = '21,岐阜県,21341,養老町';
GSI.MUNI_ARRAY["21361"] = '21,岐阜県,21361,垂井町';
GSI.MUNI_ARRAY["21362"] = '21,岐阜県,21362,関ケ原町';
GSI.MUNI_ARRAY["21381"] = '21,岐阜県,21381,神戸町';
GSI.MUNI_ARRAY["21382"] = '21,岐阜県,21382,輪之内町';
GSI.MUNI_ARRAY["21383"] = '21,岐阜県,21383,安八町';
GSI.MUNI_ARRAY["21401"] = '21,岐阜県,21401,揖斐川町';
GSI.MUNI_ARRAY["21403"] = '21,岐阜県,21403,大野町';
GSI.MUNI_ARRAY["21404"] = '21,岐阜県,21404,池田町';
GSI.MUNI_ARRAY["21421"] = '21,岐阜県,21421,北方町';
GSI.MUNI_ARRAY["21501"] = '21,岐阜県,21501,坂祝町';
GSI.MUNI_ARRAY["21502"] = '21,岐阜県,21502,富加町';
GSI.MUNI_ARRAY["21503"] = '21,岐阜県,21503,川辺町';
GSI.MUNI_ARRAY["21504"] = '21,岐阜県,21504,七宗町';
GSI.MUNI_ARRAY["21505"] = '21,岐阜県,21505,八百津町';
GSI.MUNI_ARRAY["21506"] = '21,岐阜県,21506,白川町';
GSI.MUNI_ARRAY["21507"] = '21,岐阜県,21507,東白川村';
GSI.MUNI_ARRAY["21521"] = '21,岐阜県,21521,御嵩町';
GSI.MUNI_ARRAY["21604"] = '21,岐阜県,21604,白川村';
GSI.MUNI_ARRAY["22100"] = '22,静岡県,22100,静岡市';
GSI.MUNI_ARRAY["22101"] = '22,静岡県,22101,静岡市　葵区';
GSI.MUNI_ARRAY["22102"] = '22,静岡県,22102,静岡市　駿河区';
GSI.MUNI_ARRAY["22103"] = '22,静岡県,22103,静岡市　清水区';
GSI.MUNI_ARRAY["22130"] = '22,静岡県,22130,浜松市';
GSI.MUNI_ARRAY["22131"] = '22,静岡県,22131,浜松市　中区';
GSI.MUNI_ARRAY["22132"] = '22,静岡県,22132,浜松市　東区';
GSI.MUNI_ARRAY["22133"] = '22,静岡県,22133,浜松市　西区';
GSI.MUNI_ARRAY["22134"] = '22,静岡県,22134,浜松市　南区';
GSI.MUNI_ARRAY["22135"] = '22,静岡県,22135,浜松市　北区';
GSI.MUNI_ARRAY["22136"] = '22,静岡県,22136,浜松市　浜北区';
GSI.MUNI_ARRAY["22137"] = '22,静岡県,22137,浜松市　天竜区';
GSI.MUNI_ARRAY["22203"] = '22,静岡県,22203,沼津市';
GSI.MUNI_ARRAY["22205"] = '22,静岡県,22205,熱海市';
GSI.MUNI_ARRAY["22206"] = '22,静岡県,22206,三島市';
GSI.MUNI_ARRAY["22207"] = '22,静岡県,22207,富士宮市';
GSI.MUNI_ARRAY["22208"] = '22,静岡県,22208,伊東市';
GSI.MUNI_ARRAY["22209"] = '22,静岡県,22209,島田市';
GSI.MUNI_ARRAY["22210"] = '22,静岡県,22210,富士市';
GSI.MUNI_ARRAY["22211"] = '22,静岡県,22211,磐田市';
GSI.MUNI_ARRAY["22212"] = '22,静岡県,22212,焼津市';
GSI.MUNI_ARRAY["22213"] = '22,静岡県,22213,掛川市';
GSI.MUNI_ARRAY["22214"] = '22,静岡県,22214,藤枝市';
GSI.MUNI_ARRAY["22215"] = '22,静岡県,22215,御殿場市';
GSI.MUNI_ARRAY["22216"] = '22,静岡県,22216,袋井市';
GSI.MUNI_ARRAY["22219"] = '22,静岡県,22219,下田市';
GSI.MUNI_ARRAY["22220"] = '22,静岡県,22220,裾野市';
GSI.MUNI_ARRAY["22221"] = '22,静岡県,22221,湖西市';
GSI.MUNI_ARRAY["22222"] = '22,静岡県,22222,伊豆市';
GSI.MUNI_ARRAY["22223"] = '22,静岡県,22223,御前崎市';
GSI.MUNI_ARRAY["22224"] = '22,静岡県,22224,菊川市';
GSI.MUNI_ARRAY["22225"] = '22,静岡県,22225,伊豆の国市';
GSI.MUNI_ARRAY["22226"] = '22,静岡県,22226,牧之原市';
GSI.MUNI_ARRAY["22301"] = '22,静岡県,22301,東伊豆町';
GSI.MUNI_ARRAY["22302"] = '22,静岡県,22302,河津町';
GSI.MUNI_ARRAY["22304"] = '22,静岡県,22304,南伊豆町';
GSI.MUNI_ARRAY["22305"] = '22,静岡県,22305,松崎町';
GSI.MUNI_ARRAY["22306"] = '22,静岡県,22306,西伊豆町';
GSI.MUNI_ARRAY["22325"] = '22,静岡県,22325,函南町';
GSI.MUNI_ARRAY["22341"] = '22,静岡県,22341,清水町';
GSI.MUNI_ARRAY["22342"] = '22,静岡県,22342,長泉町';
GSI.MUNI_ARRAY["22344"] = '22,静岡県,22344,小山町';
GSI.MUNI_ARRAY["22424"] = '22,静岡県,22424,吉田町';
GSI.MUNI_ARRAY["22429"] = '22,静岡県,22429,川根本町';
GSI.MUNI_ARRAY["22461"] = '22,静岡県,22461,森町';
GSI.MUNI_ARRAY["23100"] = '23,愛知県,23100,名古屋市';
GSI.MUNI_ARRAY["23101"] = '23,愛知県,23101,名古屋市　千種区';
GSI.MUNI_ARRAY["23102"] = '23,愛知県,23102,名古屋市　東区';
GSI.MUNI_ARRAY["23103"] = '23,愛知県,23103,名古屋市　北区';
GSI.MUNI_ARRAY["23104"] = '23,愛知県,23104,名古屋市　西区';
GSI.MUNI_ARRAY["23105"] = '23,愛知県,23105,名古屋市　中村区';
GSI.MUNI_ARRAY["23106"] = '23,愛知県,23106,名古屋市　中区';
GSI.MUNI_ARRAY["23107"] = '23,愛知県,23107,名古屋市　昭和区';
GSI.MUNI_ARRAY["23108"] = '23,愛知県,23108,名古屋市　瑞穂区';
GSI.MUNI_ARRAY["23109"] = '23,愛知県,23109,名古屋市　熱田区';
GSI.MUNI_ARRAY["23110"] = '23,愛知県,23110,名古屋市　中川区';
GSI.MUNI_ARRAY["23111"] = '23,愛知県,23111,名古屋市　港区';
GSI.MUNI_ARRAY["23112"] = '23,愛知県,23112,名古屋市　南区';
GSI.MUNI_ARRAY["23113"] = '23,愛知県,23113,名古屋市　守山区';
GSI.MUNI_ARRAY["23114"] = '23,愛知県,23114,名古屋市　緑区';
GSI.MUNI_ARRAY["23115"] = '23,愛知県,23115,名古屋市　名東区';
GSI.MUNI_ARRAY["23116"] = '23,愛知県,23116,名古屋市　天白区';
GSI.MUNI_ARRAY["23201"] = '23,愛知県,23201,豊橋市';
GSI.MUNI_ARRAY["23202"] = '23,愛知県,23202,岡崎市';
GSI.MUNI_ARRAY["23203"] = '23,愛知県,23203,一宮市';
GSI.MUNI_ARRAY["23204"] = '23,愛知県,23204,瀬戸市';
GSI.MUNI_ARRAY["23205"] = '23,愛知県,23205,半田市';
GSI.MUNI_ARRAY["23206"] = '23,愛知県,23206,春日井市';
GSI.MUNI_ARRAY["23207"] = '23,愛知県,23207,豊川市';
GSI.MUNI_ARRAY["23208"] = '23,愛知県,23208,津島市';
GSI.MUNI_ARRAY["23209"] = '23,愛知県,23209,碧南市';
GSI.MUNI_ARRAY["23210"] = '23,愛知県,23210,刈谷市';
GSI.MUNI_ARRAY["23211"] = '23,愛知県,23211,豊田市';
GSI.MUNI_ARRAY["23212"] = '23,愛知県,23212,安城市';
GSI.MUNI_ARRAY["23213"] = '23,愛知県,23213,西尾市';
GSI.MUNI_ARRAY["23214"] = '23,愛知県,23214,蒲郡市';
GSI.MUNI_ARRAY["23215"] = '23,愛知県,23215,犬山市';
GSI.MUNI_ARRAY["23216"] = '23,愛知県,23216,常滑市';
GSI.MUNI_ARRAY["23217"] = '23,愛知県,23217,江南市';
GSI.MUNI_ARRAY["23219"] = '23,愛知県,23219,小牧市';
GSI.MUNI_ARRAY["23220"] = '23,愛知県,23220,稲沢市';
GSI.MUNI_ARRAY["23221"] = '23,愛知県,23221,新城市';
GSI.MUNI_ARRAY["23222"] = '23,愛知県,23222,東海市';
GSI.MUNI_ARRAY["23223"] = '23,愛知県,23223,大府市';
GSI.MUNI_ARRAY["23224"] = '23,愛知県,23224,知多市';
GSI.MUNI_ARRAY["23225"] = '23,愛知県,23225,知立市';
GSI.MUNI_ARRAY["23226"] = '23,愛知県,23226,尾張旭市';
GSI.MUNI_ARRAY["23227"] = '23,愛知県,23227,高浜市';
GSI.MUNI_ARRAY["23228"] = '23,愛知県,23228,岩倉市';
GSI.MUNI_ARRAY["23229"] = '23,愛知県,23229,豊明市';
GSI.MUNI_ARRAY["23230"] = '23,愛知県,23230,日進市';
GSI.MUNI_ARRAY["23231"] = '23,愛知県,23231,田原市';
GSI.MUNI_ARRAY["23232"] = '23,愛知県,23232,愛西市';
GSI.MUNI_ARRAY["23233"] = '23,愛知県,23233,清須市';
GSI.MUNI_ARRAY["23234"] = '23,愛知県,23234,北名古屋市';
GSI.MUNI_ARRAY["23235"] = '23,愛知県,23235,弥富市';
GSI.MUNI_ARRAY["23236"] = '23,愛知県,23236,みよし市';
GSI.MUNI_ARRAY["23237"] = '23,愛知県,23237,あま市';
GSI.MUNI_ARRAY["23238"] = '23,愛知県,23238,長久手市';
GSI.MUNI_ARRAY["23302"] = '23,愛知県,23302,東郷町';
GSI.MUNI_ARRAY["23342"] = '23,愛知県,23342,豊山町';
GSI.MUNI_ARRAY["23361"] = '23,愛知県,23361,大口町';
GSI.MUNI_ARRAY["23362"] = '23,愛知県,23362,扶桑町';
GSI.MUNI_ARRAY["23424"] = '23,愛知県,23424,大治町';
GSI.MUNI_ARRAY["23425"] = '23,愛知県,23425,蟹江町';
GSI.MUNI_ARRAY["23427"] = '23,愛知県,23427,飛島村';
GSI.MUNI_ARRAY["23441"] = '23,愛知県,23441,阿久比町';
GSI.MUNI_ARRAY["23442"] = '23,愛知県,23442,東浦町';
GSI.MUNI_ARRAY["23445"] = '23,愛知県,23445,南知多町';
GSI.MUNI_ARRAY["23446"] = '23,愛知県,23446,美浜町';
GSI.MUNI_ARRAY["23447"] = '23,愛知県,23447,武豊町';
GSI.MUNI_ARRAY["23501"] = '23,愛知県,23501,幸田町';
GSI.MUNI_ARRAY["23561"] = '23,愛知県,23561,設楽町';
GSI.MUNI_ARRAY["23562"] = '23,愛知県,23562,東栄町';
GSI.MUNI_ARRAY["23563"] = '23,愛知県,23563,豊根村';
GSI.MUNI_ARRAY["24201"] = '24,三重県,24201,津市';
GSI.MUNI_ARRAY["24202"] = '24,三重県,24202,四日市市';
GSI.MUNI_ARRAY["24203"] = '24,三重県,24203,伊勢市';
GSI.MUNI_ARRAY["24204"] = '24,三重県,24204,松阪市';
GSI.MUNI_ARRAY["24205"] = '24,三重県,24205,桑名市';
GSI.MUNI_ARRAY["24207"] = '24,三重県,24207,鈴鹿市';
GSI.MUNI_ARRAY["24208"] = '24,三重県,24208,名張市';
GSI.MUNI_ARRAY["24209"] = '24,三重県,24209,尾鷲市';
GSI.MUNI_ARRAY["24210"] = '24,三重県,24210,亀山市';
GSI.MUNI_ARRAY["24211"] = '24,三重県,24211,鳥羽市';
GSI.MUNI_ARRAY["24212"] = '24,三重県,24212,熊野市';
GSI.MUNI_ARRAY["24214"] = '24,三重県,24214,いなべ市';
GSI.MUNI_ARRAY["24215"] = '24,三重県,24215,志摩市';
GSI.MUNI_ARRAY["24216"] = '24,三重県,24216,伊賀市';
GSI.MUNI_ARRAY["24303"] = '24,三重県,24303,木曽岬町';
GSI.MUNI_ARRAY["24324"] = '24,三重県,24324,東員町';
GSI.MUNI_ARRAY["24341"] = '24,三重県,24341,菰野町';
GSI.MUNI_ARRAY["24343"] = '24,三重県,24343,朝日町';
GSI.MUNI_ARRAY["24344"] = '24,三重県,24344,川越町';
GSI.MUNI_ARRAY["24441"] = '24,三重県,24441,多気町';
GSI.MUNI_ARRAY["24442"] = '24,三重県,24442,明和町';
GSI.MUNI_ARRAY["24443"] = '24,三重県,24443,大台町';
GSI.MUNI_ARRAY["24461"] = '24,三重県,24461,玉城町';
GSI.MUNI_ARRAY["24470"] = '24,三重県,24470,度会町';
GSI.MUNI_ARRAY["24471"] = '24,三重県,24471,大紀町';
GSI.MUNI_ARRAY["24472"] = '24,三重県,24472,南伊勢町';
GSI.MUNI_ARRAY["24543"] = '24,三重県,24543,紀北町';
GSI.MUNI_ARRAY["24561"] = '24,三重県,24561,御浜町';
GSI.MUNI_ARRAY["24562"] = '24,三重県,24562,紀宝町';
GSI.MUNI_ARRAY["25201"] = '25,滋賀県,25201,大津市';
GSI.MUNI_ARRAY["25202"] = '25,滋賀県,25202,彦根市';
GSI.MUNI_ARRAY["25203"] = '25,滋賀県,25203,長浜市';
GSI.MUNI_ARRAY["25204"] = '25,滋賀県,25204,近江八幡市';
GSI.MUNI_ARRAY["25206"] = '25,滋賀県,25206,草津市';
GSI.MUNI_ARRAY["25207"] = '25,滋賀県,25207,守山市';
GSI.MUNI_ARRAY["25208"] = '25,滋賀県,25208,栗東市';
GSI.MUNI_ARRAY["25209"] = '25,滋賀県,25209,甲賀市';
GSI.MUNI_ARRAY["25210"] = '25,滋賀県,25210,野洲市';
GSI.MUNI_ARRAY["25211"] = '25,滋賀県,25211,湖南市';
GSI.MUNI_ARRAY["25212"] = '25,滋賀県,25212,高島市';
GSI.MUNI_ARRAY["25213"] = '25,滋賀県,25213,東近江市';
GSI.MUNI_ARRAY["25214"] = '25,滋賀県,25214,米原市';
GSI.MUNI_ARRAY["25383"] = '25,滋賀県,25383,日野町';
GSI.MUNI_ARRAY["25384"] = '25,滋賀県,25384,竜王町';
GSI.MUNI_ARRAY["25425"] = '25,滋賀県,25425,愛荘町';
GSI.MUNI_ARRAY["25441"] = '25,滋賀県,25441,豊郷町';
GSI.MUNI_ARRAY["25442"] = '25,滋賀県,25442,甲良町';
GSI.MUNI_ARRAY["25443"] = '25,滋賀県,25443,多賀町';
GSI.MUNI_ARRAY["26100"] = '26,京都府,26100,京都市';
GSI.MUNI_ARRAY["26101"] = '26,京都府,26101,京都市　北区';
GSI.MUNI_ARRAY["26102"] = '26,京都府,26102,京都市　上京区';
GSI.MUNI_ARRAY["26103"] = '26,京都府,26103,京都市　左京区';
GSI.MUNI_ARRAY["26104"] = '26,京都府,26104,京都市　中京区';
GSI.MUNI_ARRAY["26105"] = '26,京都府,26105,京都市　東山区';
GSI.MUNI_ARRAY["26106"] = '26,京都府,26106,京都市　下京区';
GSI.MUNI_ARRAY["26107"] = '26,京都府,26107,京都市　南区';
GSI.MUNI_ARRAY["26108"] = '26,京都府,26108,京都市　右京区';
GSI.MUNI_ARRAY["26109"] = '26,京都府,26109,京都市　伏見区';
GSI.MUNI_ARRAY["26110"] = '26,京都府,26110,京都市　山科区';
GSI.MUNI_ARRAY["26111"] = '26,京都府,26111,京都市　西京区';
GSI.MUNI_ARRAY["26201"] = '26,京都府,26201,福知山市';
GSI.MUNI_ARRAY["26202"] = '26,京都府,26202,舞鶴市';
GSI.MUNI_ARRAY["26203"] = '26,京都府,26203,綾部市';
GSI.MUNI_ARRAY["26204"] = '26,京都府,26204,宇治市';
GSI.MUNI_ARRAY["26205"] = '26,京都府,26205,宮津市';
GSI.MUNI_ARRAY["26206"] = '26,京都府,26206,亀岡市';
GSI.MUNI_ARRAY["26207"] = '26,京都府,26207,城陽市';
GSI.MUNI_ARRAY["26208"] = '26,京都府,26208,向日市';
GSI.MUNI_ARRAY["26209"] = '26,京都府,26209,長岡京市';
GSI.MUNI_ARRAY["26210"] = '26,京都府,26210,八幡市';
GSI.MUNI_ARRAY["26211"] = '26,京都府,26211,京田辺市';
GSI.MUNI_ARRAY["26212"] = '26,京都府,26212,京丹後市';
GSI.MUNI_ARRAY["26213"] = '26,京都府,26213,南丹市';
GSI.MUNI_ARRAY["26214"] = '26,京都府,26214,木津川市';
GSI.MUNI_ARRAY["26303"] = '26,京都府,26303,大山崎町';
GSI.MUNI_ARRAY["26322"] = '26,京都府,26322,久御山町';
GSI.MUNI_ARRAY["26343"] = '26,京都府,26343,井手町';
GSI.MUNI_ARRAY["26344"] = '26,京都府,26344,宇治田原町';
GSI.MUNI_ARRAY["26364"] = '26,京都府,26364,笠置町';
GSI.MUNI_ARRAY["26365"] = '26,京都府,26365,和束町';
GSI.MUNI_ARRAY["26366"] = '26,京都府,26366,精華町';
GSI.MUNI_ARRAY["26367"] = '26,京都府,26367,南山城村';
GSI.MUNI_ARRAY["26407"] = '26,京都府,26407,京丹波町';
GSI.MUNI_ARRAY["26463"] = '26,京都府,26463,伊根町';
GSI.MUNI_ARRAY["26465"] = '26,京都府,26465,与謝野町';
GSI.MUNI_ARRAY["27100"] = '27,大阪府,27100,大阪市';
GSI.MUNI_ARRAY["27102"] = '27,大阪府,27102,大阪市　都島区';
GSI.MUNI_ARRAY["27103"] = '27,大阪府,27103,大阪市　福島区';
GSI.MUNI_ARRAY["27104"] = '27,大阪府,27104,大阪市　此花区';
GSI.MUNI_ARRAY["27106"] = '27,大阪府,27106,大阪市　西区';
GSI.MUNI_ARRAY["27107"] = '27,大阪府,27107,大阪市　港区';
GSI.MUNI_ARRAY["27108"] = '27,大阪府,27108,大阪市　大正区';
GSI.MUNI_ARRAY["27109"] = '27,大阪府,27109,大阪市　天王寺区';
GSI.MUNI_ARRAY["27111"] = '27,大阪府,27111,大阪市　浪速区';
GSI.MUNI_ARRAY["27113"] = '27,大阪府,27113,大阪市　西淀川区';
GSI.MUNI_ARRAY["27114"] = '27,大阪府,27114,大阪市　東淀川区';
GSI.MUNI_ARRAY["27115"] = '27,大阪府,27115,大阪市　東成区';
GSI.MUNI_ARRAY["27116"] = '27,大阪府,27116,大阪市　生野区';
GSI.MUNI_ARRAY["27117"] = '27,大阪府,27117,大阪市　旭区';
GSI.MUNI_ARRAY["27118"] = '27,大阪府,27118,大阪市　城東区';
GSI.MUNI_ARRAY["27119"] = '27,大阪府,27119,大阪市　阿倍野区';
GSI.MUNI_ARRAY["27120"] = '27,大阪府,27120,大阪市　住吉区';
GSI.MUNI_ARRAY["27121"] = '27,大阪府,27121,大阪市　東住吉区';
GSI.MUNI_ARRAY["27122"] = '27,大阪府,27122,大阪市　西成区';
GSI.MUNI_ARRAY["27123"] = '27,大阪府,27123,大阪市　淀川区';
GSI.MUNI_ARRAY["27124"] = '27,大阪府,27124,大阪市　鶴見区';
GSI.MUNI_ARRAY["27125"] = '27,大阪府,27125,大阪市　住之江区';
GSI.MUNI_ARRAY["27126"] = '27,大阪府,27126,大阪市　平野区';
GSI.MUNI_ARRAY["27127"] = '27,大阪府,27127,大阪市　北区';
GSI.MUNI_ARRAY["27128"] = '27,大阪府,27128,大阪市　中央区';
GSI.MUNI_ARRAY["27140"] = '27,大阪府,27140,堺市';
GSI.MUNI_ARRAY["27141"] = '27,大阪府,27141,堺市　堺区';
GSI.MUNI_ARRAY["27142"] = '27,大阪府,27142,堺市　中区';
GSI.MUNI_ARRAY["27143"] = '27,大阪府,27143,堺市　東区';
GSI.MUNI_ARRAY["27144"] = '27,大阪府,27144,堺市　西区';
GSI.MUNI_ARRAY["27145"] = '27,大阪府,27145,堺市　南区';
GSI.MUNI_ARRAY["27146"] = '27,大阪府,27146,堺市　北区';
GSI.MUNI_ARRAY["27147"] = '27,大阪府,27147,堺市　美原区';
GSI.MUNI_ARRAY["27202"] = '27,大阪府,27202,岸和田市';
GSI.MUNI_ARRAY["27203"] = '27,大阪府,27203,豊中市';
GSI.MUNI_ARRAY["27204"] = '27,大阪府,27204,池田市';
GSI.MUNI_ARRAY["27205"] = '27,大阪府,27205,吹田市';
GSI.MUNI_ARRAY["27206"] = '27,大阪府,27206,泉大津市';
GSI.MUNI_ARRAY["27207"] = '27,大阪府,27207,高槻市';
GSI.MUNI_ARRAY["27208"] = '27,大阪府,27208,貝塚市';
GSI.MUNI_ARRAY["27209"] = '27,大阪府,27209,守口市';
GSI.MUNI_ARRAY["27210"] = '27,大阪府,27210,枚方市';
GSI.MUNI_ARRAY["27211"] = '27,大阪府,27211,茨木市';
GSI.MUNI_ARRAY["27212"] = '27,大阪府,27212,八尾市';
GSI.MUNI_ARRAY["27213"] = '27,大阪府,27213,泉佐野市';
GSI.MUNI_ARRAY["27214"] = '27,大阪府,27214,富田林市';
GSI.MUNI_ARRAY["27215"] = '27,大阪府,27215,寝屋川市';
GSI.MUNI_ARRAY["27216"] = '27,大阪府,27216,河内長野市';
GSI.MUNI_ARRAY["27217"] = '27,大阪府,27217,松原市';
GSI.MUNI_ARRAY["27218"] = '27,大阪府,27218,大東市';
GSI.MUNI_ARRAY["27219"] = '27,大阪府,27219,和泉市';
GSI.MUNI_ARRAY["27220"] = '27,大阪府,27220,箕面市';
GSI.MUNI_ARRAY["27221"] = '27,大阪府,27221,柏原市';
GSI.MUNI_ARRAY["27222"] = '27,大阪府,27222,羽曳野市';
GSI.MUNI_ARRAY["27223"] = '27,大阪府,27223,門真市';
GSI.MUNI_ARRAY["27224"] = '27,大阪府,27224,摂津市';
GSI.MUNI_ARRAY["27225"] = '27,大阪府,27225,高石市';
GSI.MUNI_ARRAY["27226"] = '27,大阪府,27226,藤井寺市';
GSI.MUNI_ARRAY["27227"] = '27,大阪府,27227,東大阪市';
GSI.MUNI_ARRAY["27228"] = '27,大阪府,27228,泉南市';
GSI.MUNI_ARRAY["27229"] = '27,大阪府,27229,四條畷市';
GSI.MUNI_ARRAY["27230"] = '27,大阪府,27230,交野市';
GSI.MUNI_ARRAY["27231"] = '27,大阪府,27231,大阪狭山市';
GSI.MUNI_ARRAY["27232"] = '27,大阪府,27232,阪南市';
GSI.MUNI_ARRAY["27301"] = '27,大阪府,27301,島本町';
GSI.MUNI_ARRAY["27321"] = '27,大阪府,27321,豊能町';
GSI.MUNI_ARRAY["27322"] = '27,大阪府,27322,能勢町';
GSI.MUNI_ARRAY["27341"] = '27,大阪府,27341,忠岡町';
GSI.MUNI_ARRAY["27361"] = '27,大阪府,27361,熊取町';
GSI.MUNI_ARRAY["27362"] = '27,大阪府,27362,田尻町';
GSI.MUNI_ARRAY["27366"] = '27,大阪府,27366,岬町';
GSI.MUNI_ARRAY["27381"] = '27,大阪府,27381,太子町';
GSI.MUNI_ARRAY["27382"] = '27,大阪府,27382,河南町';
GSI.MUNI_ARRAY["27383"] = '27,大阪府,27383,千早赤阪村';
GSI.MUNI_ARRAY["28100"] = '28,兵庫県,28100,神戸市';
GSI.MUNI_ARRAY["28101"] = '28,兵庫県,28101,神戸市　東灘区';
GSI.MUNI_ARRAY["28102"] = '28,兵庫県,28102,神戸市　灘区';
GSI.MUNI_ARRAY["28105"] = '28,兵庫県,28105,神戸市　兵庫区';
GSI.MUNI_ARRAY["28106"] = '28,兵庫県,28106,神戸市　長田区';
GSI.MUNI_ARRAY["28107"] = '28,兵庫県,28107,神戸市　須磨区';
GSI.MUNI_ARRAY["28108"] = '28,兵庫県,28108,神戸市　垂水区';
GSI.MUNI_ARRAY["28109"] = '28,兵庫県,28109,神戸市　北区';
GSI.MUNI_ARRAY["28110"] = '28,兵庫県,28110,神戸市　中央区';
GSI.MUNI_ARRAY["28111"] = '28,兵庫県,28111,神戸市　西区';
GSI.MUNI_ARRAY["28201"] = '28,兵庫県,28201,姫路市';
GSI.MUNI_ARRAY["28202"] = '28,兵庫県,28202,尼崎市';
GSI.MUNI_ARRAY["28203"] = '28,兵庫県,28203,明石市';
GSI.MUNI_ARRAY["28204"] = '28,兵庫県,28204,西宮市';
GSI.MUNI_ARRAY["28205"] = '28,兵庫県,28205,洲本市';
GSI.MUNI_ARRAY["28206"] = '28,兵庫県,28206,芦屋市';
GSI.MUNI_ARRAY["28207"] = '28,兵庫県,28207,伊丹市';
GSI.MUNI_ARRAY["28208"] = '28,兵庫県,28208,相生市';
GSI.MUNI_ARRAY["28209"] = '28,兵庫県,28209,豊岡市';
GSI.MUNI_ARRAY["28210"] = '28,兵庫県,28210,加古川市';
GSI.MUNI_ARRAY["28212"] = '28,兵庫県,28212,赤穂市';
GSI.MUNI_ARRAY["28213"] = '28,兵庫県,28213,西脇市';
GSI.MUNI_ARRAY["28214"] = '28,兵庫県,28214,宝塚市';
GSI.MUNI_ARRAY["28215"] = '28,兵庫県,28215,三木市';
GSI.MUNI_ARRAY["28216"] = '28,兵庫県,28216,高砂市';
GSI.MUNI_ARRAY["28217"] = '28,兵庫県,28217,川西市';
GSI.MUNI_ARRAY["28218"] = '28,兵庫県,28218,小野市';
GSI.MUNI_ARRAY["28219"] = '28,兵庫県,28219,三田市';
GSI.MUNI_ARRAY["28220"] = '28,兵庫県,28220,加西市';
GSI.MUNI_ARRAY["28221"] = '28,兵庫県,28221,篠山市';
GSI.MUNI_ARRAY["28222"] = '28,兵庫県,28222,養父市';
GSI.MUNI_ARRAY["28223"] = '28,兵庫県,28223,丹波市';
GSI.MUNI_ARRAY["28224"] = '28,兵庫県,28224,南あわじ市';
GSI.MUNI_ARRAY["28225"] = '28,兵庫県,28225,朝来市';
GSI.MUNI_ARRAY["28226"] = '28,兵庫県,28226,淡路市';
GSI.MUNI_ARRAY["28227"] = '28,兵庫県,28227,宍粟市';
GSI.MUNI_ARRAY["28228"] = '28,兵庫県,28228,加東市';
GSI.MUNI_ARRAY["28229"] = '28,兵庫県,28229,たつの市';
GSI.MUNI_ARRAY["28301"] = '28,兵庫県,28301,猪名川町';
GSI.MUNI_ARRAY["28365"] = '28,兵庫県,28365,多可町';
GSI.MUNI_ARRAY["28381"] = '28,兵庫県,28381,稲美町';
GSI.MUNI_ARRAY["28382"] = '28,兵庫県,28382,播磨町';
GSI.MUNI_ARRAY["28442"] = '28,兵庫県,28442,市川町';
GSI.MUNI_ARRAY["28443"] = '28,兵庫県,28443,福崎町';
GSI.MUNI_ARRAY["28446"] = '28,兵庫県,28446,神河町';
GSI.MUNI_ARRAY["28464"] = '28,兵庫県,28464,太子町';
GSI.MUNI_ARRAY["28481"] = '28,兵庫県,28481,上郡町';
GSI.MUNI_ARRAY["28501"] = '28,兵庫県,28501,佐用町';
GSI.MUNI_ARRAY["28585"] = '28,兵庫県,28585,香美町';
GSI.MUNI_ARRAY["28586"] = '28,兵庫県,28586,新温泉町';
GSI.MUNI_ARRAY["29201"] = '29,奈良県,29201,奈良市';
GSI.MUNI_ARRAY["29202"] = '29,奈良県,29202,大和高田市';
GSI.MUNI_ARRAY["29203"] = '29,奈良県,29203,大和郡山市';
GSI.MUNI_ARRAY["29204"] = '29,奈良県,29204,天理市';
GSI.MUNI_ARRAY["29205"] = '29,奈良県,29205,橿原市';
GSI.MUNI_ARRAY["29206"] = '29,奈良県,29206,桜井市';
GSI.MUNI_ARRAY["29207"] = '29,奈良県,29207,五條市';
GSI.MUNI_ARRAY["29208"] = '29,奈良県,29208,御所市';
GSI.MUNI_ARRAY["29209"] = '29,奈良県,29209,生駒市';
GSI.MUNI_ARRAY["29210"] = '29,奈良県,29210,香芝市';
GSI.MUNI_ARRAY["29211"] = '29,奈良県,29211,葛城市';
GSI.MUNI_ARRAY["29212"] = '29,奈良県,29212,宇陀市';
GSI.MUNI_ARRAY["29322"] = '29,奈良県,29322,山添村';
GSI.MUNI_ARRAY["29342"] = '29,奈良県,29342,平群町';
GSI.MUNI_ARRAY["29343"] = '29,奈良県,29343,三郷町';
GSI.MUNI_ARRAY["29344"] = '29,奈良県,29344,斑鳩町';
GSI.MUNI_ARRAY["29345"] = '29,奈良県,29345,安堵町';
GSI.MUNI_ARRAY["29361"] = '29,奈良県,29361,川西町';
GSI.MUNI_ARRAY["29362"] = '29,奈良県,29362,三宅町';
GSI.MUNI_ARRAY["29363"] = '29,奈良県,29363,田原本町';
GSI.MUNI_ARRAY["29385"] = '29,奈良県,29385,曽爾村';
GSI.MUNI_ARRAY["29386"] = '29,奈良県,29386,御杖村';
GSI.MUNI_ARRAY["29401"] = '29,奈良県,29401,高取町';
GSI.MUNI_ARRAY["29402"] = '29,奈良県,29402,明日香村';
GSI.MUNI_ARRAY["29424"] = '29,奈良県,29424,上牧町';
GSI.MUNI_ARRAY["29425"] = '29,奈良県,29425,王寺町';
GSI.MUNI_ARRAY["29426"] = '29,奈良県,29426,広陵町';
GSI.MUNI_ARRAY["29427"] = '29,奈良県,29427,河合町';
GSI.MUNI_ARRAY["29441"] = '29,奈良県,29441,吉野町';
GSI.MUNI_ARRAY["29442"] = '29,奈良県,29442,大淀町';
GSI.MUNI_ARRAY["29443"] = '29,奈良県,29443,下市町';
GSI.MUNI_ARRAY["29444"] = '29,奈良県,29444,黒滝村';
GSI.MUNI_ARRAY["29446"] = '29,奈良県,29446,天川村';
GSI.MUNI_ARRAY["29447"] = '29,奈良県,29447,野迫川村';
GSI.MUNI_ARRAY["29449"] = '29,奈良県,29449,十津川村';
GSI.MUNI_ARRAY["29450"] = '29,奈良県,29450,下北山村';
GSI.MUNI_ARRAY["29451"] = '29,奈良県,29451,上北山村';
GSI.MUNI_ARRAY["29452"] = '29,奈良県,29452,川上村';
GSI.MUNI_ARRAY["29453"] = '29,奈良県,29453,東吉野村';
GSI.MUNI_ARRAY["30201"] = '30,和歌山県,30201,和歌山市';
GSI.MUNI_ARRAY["30202"] = '30,和歌山県,30202,海南市';
GSI.MUNI_ARRAY["30203"] = '30,和歌山県,30203,橋本市';
GSI.MUNI_ARRAY["30204"] = '30,和歌山県,30204,有田市';
GSI.MUNI_ARRAY["30205"] = '30,和歌山県,30205,御坊市';
GSI.MUNI_ARRAY["30206"] = '30,和歌山県,30206,田辺市';
GSI.MUNI_ARRAY["30207"] = '30,和歌山県,30207,新宮市';
GSI.MUNI_ARRAY["30208"] = '30,和歌山県,30208,紀の川市';
GSI.MUNI_ARRAY["30209"] = '30,和歌山県,30209,岩出市';
GSI.MUNI_ARRAY["30304"] = '30,和歌山県,30304,紀美野町';
GSI.MUNI_ARRAY["30341"] = '30,和歌山県,30341,かつらぎ町';
GSI.MUNI_ARRAY["30343"] = '30,和歌山県,30343,九度山町';
GSI.MUNI_ARRAY["30344"] = '30,和歌山県,30344,高野町';
GSI.MUNI_ARRAY["30361"] = '30,和歌山県,30361,湯浅町';
GSI.MUNI_ARRAY["30362"] = '30,和歌山県,30362,広川町';
GSI.MUNI_ARRAY["30366"] = '30,和歌山県,30366,有田川町';
GSI.MUNI_ARRAY["30381"] = '30,和歌山県,30381,美浜町';
GSI.MUNI_ARRAY["30382"] = '30,和歌山県,30382,日高町';
GSI.MUNI_ARRAY["30383"] = '30,和歌山県,30383,由良町';
GSI.MUNI_ARRAY["30390"] = '30,和歌山県,30390,印南町';
GSI.MUNI_ARRAY["30391"] = '30,和歌山県,30391,みなべ町';
GSI.MUNI_ARRAY["30392"] = '30,和歌山県,30392,日高川町';
GSI.MUNI_ARRAY["30401"] = '30,和歌山県,30401,白浜町';
GSI.MUNI_ARRAY["30404"] = '30,和歌山県,30404,上富田町';
GSI.MUNI_ARRAY["30406"] = '30,和歌山県,30406,すさみ町';
GSI.MUNI_ARRAY["30421"] = '30,和歌山県,30421,那智勝浦町';
GSI.MUNI_ARRAY["30422"] = '30,和歌山県,30422,太地町';
GSI.MUNI_ARRAY["30424"] = '30,和歌山県,30424,古座川町';
GSI.MUNI_ARRAY["30427"] = '30,和歌山県,30427,北山村';
GSI.MUNI_ARRAY["30428"] = '30,和歌山県,30428,串本町';
GSI.MUNI_ARRAY["31201"] = '31,鳥取県,31201,鳥取市';
GSI.MUNI_ARRAY["31202"] = '31,鳥取県,31202,米子市';
GSI.MUNI_ARRAY["31203"] = '31,鳥取県,31203,倉吉市';
GSI.MUNI_ARRAY["31204"] = '31,鳥取県,31204,境港市';
GSI.MUNI_ARRAY["31302"] = '31,鳥取県,31302,岩美町';
GSI.MUNI_ARRAY["31325"] = '31,鳥取県,31325,若桜町';
GSI.MUNI_ARRAY["31328"] = '31,鳥取県,31328,智頭町';
GSI.MUNI_ARRAY["31329"] = '31,鳥取県,31329,八頭町';
GSI.MUNI_ARRAY["31364"] = '31,鳥取県,31364,三朝町';
GSI.MUNI_ARRAY["31370"] = '31,鳥取県,31370,湯梨浜町';
GSI.MUNI_ARRAY["31371"] = '31,鳥取県,31371,琴浦町';
GSI.MUNI_ARRAY["31372"] = '31,鳥取県,31372,北栄町';
GSI.MUNI_ARRAY["31384"] = '31,鳥取県,31384,日吉津村';
GSI.MUNI_ARRAY["31386"] = '31,鳥取県,31386,大山町';
GSI.MUNI_ARRAY["31389"] = '31,鳥取県,31389,南部町';
GSI.MUNI_ARRAY["31390"] = '31,鳥取県,31390,伯耆町';
GSI.MUNI_ARRAY["31401"] = '31,鳥取県,31401,日南町';
GSI.MUNI_ARRAY["31402"] = '31,鳥取県,31402,日野町';
GSI.MUNI_ARRAY["31403"] = '31,鳥取県,31403,江府町';
GSI.MUNI_ARRAY["32201"] = '32,島根県,32201,松江市';
GSI.MUNI_ARRAY["32202"] = '32,島根県,32202,浜田市';
GSI.MUNI_ARRAY["32203"] = '32,島根県,32203,出雲市';
GSI.MUNI_ARRAY["32204"] = '32,島根県,32204,益田市';
GSI.MUNI_ARRAY["32205"] = '32,島根県,32205,大田市';
GSI.MUNI_ARRAY["32206"] = '32,島根県,32206,安来市';
GSI.MUNI_ARRAY["32207"] = '32,島根県,32207,江津市';
GSI.MUNI_ARRAY["32209"] = '32,島根県,32209,雲南市';
GSI.MUNI_ARRAY["32343"] = '32,島根県,32343,奥出雲町';
GSI.MUNI_ARRAY["32386"] = '32,島根県,32386,飯南町';
GSI.MUNI_ARRAY["32441"] = '32,島根県,32441,川本町';
GSI.MUNI_ARRAY["32448"] = '32,島根県,32448,美郷町';
GSI.MUNI_ARRAY["32449"] = '32,島根県,32449,邑南町';
GSI.MUNI_ARRAY["32501"] = '32,島根県,32501,津和野町';
GSI.MUNI_ARRAY["32505"] = '32,島根県,32505,吉賀町';
GSI.MUNI_ARRAY["32525"] = '32,島根県,32525,海士町';
GSI.MUNI_ARRAY["32526"] = '32,島根県,32526,西ノ島町';
GSI.MUNI_ARRAY["32527"] = '32,島根県,32527,知夫村';
GSI.MUNI_ARRAY["32528"] = '32,島根県,32528,隠岐の島町';
GSI.MUNI_ARRAY["33100"] = '33,岡山県,33100,岡山市';
GSI.MUNI_ARRAY["33101"] = '33,岡山県,33101,岡山市　北区';
GSI.MUNI_ARRAY["33102"] = '33,岡山県,33102,岡山市　中区';
GSI.MUNI_ARRAY["33103"] = '33,岡山県,33103,岡山市　東区';
GSI.MUNI_ARRAY["33104"] = '33,岡山県,33104,岡山市　南区';
GSI.MUNI_ARRAY["33202"] = '33,岡山県,33202,倉敷市';
GSI.MUNI_ARRAY["33203"] = '33,岡山県,33203,津山市';
GSI.MUNI_ARRAY["33204"] = '33,岡山県,33204,玉野市';
GSI.MUNI_ARRAY["33205"] = '33,岡山県,33205,笠岡市';
GSI.MUNI_ARRAY["33207"] = '33,岡山県,33207,井原市';
GSI.MUNI_ARRAY["33208"] = '33,岡山県,33208,総社市';
GSI.MUNI_ARRAY["33209"] = '33,岡山県,33209,高梁市';
GSI.MUNI_ARRAY["33210"] = '33,岡山県,33210,新見市';
GSI.MUNI_ARRAY["33211"] = '33,岡山県,33211,備前市';
GSI.MUNI_ARRAY["33212"] = '33,岡山県,33212,瀬戸内市';
GSI.MUNI_ARRAY["33213"] = '33,岡山県,33213,赤磐市';
GSI.MUNI_ARRAY["33214"] = '33,岡山県,33214,真庭市';
GSI.MUNI_ARRAY["33215"] = '33,岡山県,33215,美作市';
GSI.MUNI_ARRAY["33216"] = '33,岡山県,33216,浅口市';
GSI.MUNI_ARRAY["33346"] = '33,岡山県,33346,和気町';
GSI.MUNI_ARRAY["33423"] = '33,岡山県,33423,早島町';
GSI.MUNI_ARRAY["33445"] = '33,岡山県,33445,里庄町';
GSI.MUNI_ARRAY["33461"] = '33,岡山県,33461,矢掛町';
GSI.MUNI_ARRAY["33586"] = '33,岡山県,33586,新庄村';
GSI.MUNI_ARRAY["33606"] = '33,岡山県,33606,鏡野町';
GSI.MUNI_ARRAY["33622"] = '33,岡山県,33622,勝央町';
GSI.MUNI_ARRAY["33623"] = '33,岡山県,33623,奈義町';
GSI.MUNI_ARRAY["33643"] = '33,岡山県,33643,西粟倉村';
GSI.MUNI_ARRAY["33663"] = '33,岡山県,33663,久米南町';
GSI.MUNI_ARRAY["33666"] = '33,岡山県,33666,美咲町';
GSI.MUNI_ARRAY["33681"] = '33,岡山県,33681,吉備中央町';
GSI.MUNI_ARRAY["34100"] = '34,広島県,34100,広島市';
GSI.MUNI_ARRAY["34101"] = '34,広島県,34101,広島市　中区';
GSI.MUNI_ARRAY["34102"] = '34,広島県,34102,広島市　東区';
GSI.MUNI_ARRAY["34103"] = '34,広島県,34103,広島市　南区';
GSI.MUNI_ARRAY["34104"] = '34,広島県,34104,広島市　西区';
GSI.MUNI_ARRAY["34105"] = '34,広島県,34105,広島市　安佐南区';
GSI.MUNI_ARRAY["34106"] = '34,広島県,34106,広島市　安佐北区';
GSI.MUNI_ARRAY["34107"] = '34,広島県,34107,広島市　安芸区';
GSI.MUNI_ARRAY["34108"] = '34,広島県,34108,広島市　佐伯区';
GSI.MUNI_ARRAY["34202"] = '34,広島県,34202,呉市';
GSI.MUNI_ARRAY["34203"] = '34,広島県,34203,竹原市';
GSI.MUNI_ARRAY["34204"] = '34,広島県,34204,三原市';
GSI.MUNI_ARRAY["34205"] = '34,広島県,34205,尾道市';
GSI.MUNI_ARRAY["34207"] = '34,広島県,34207,福山市';
GSI.MUNI_ARRAY["34208"] = '34,広島県,34208,府中市';
GSI.MUNI_ARRAY["34209"] = '34,広島県,34209,三次市';
GSI.MUNI_ARRAY["34210"] = '34,広島県,34210,庄原市';
GSI.MUNI_ARRAY["34211"] = '34,広島県,34211,大竹市';
GSI.MUNI_ARRAY["34212"] = '34,広島県,34212,東広島市';
GSI.MUNI_ARRAY["34213"] = '34,広島県,34213,廿日市市';
GSI.MUNI_ARRAY["34214"] = '34,広島県,34214,安芸高田市';
GSI.MUNI_ARRAY["34215"] = '34,広島県,34215,江田島市';
GSI.MUNI_ARRAY["34302"] = '34,広島県,34302,府中町';
GSI.MUNI_ARRAY["34304"] = '34,広島県,34304,海田町';
GSI.MUNI_ARRAY["34307"] = '34,広島県,34307,熊野町';
GSI.MUNI_ARRAY["34309"] = '34,広島県,34309,坂町';
GSI.MUNI_ARRAY["34368"] = '34,広島県,34368,安芸太田町';
GSI.MUNI_ARRAY["34369"] = '34,広島県,34369,北広島町';
GSI.MUNI_ARRAY["34431"] = '34,広島県,34431,大崎上島町';
GSI.MUNI_ARRAY["34462"] = '34,広島県,34462,世羅町';
GSI.MUNI_ARRAY["34545"] = '34,広島県,34545,神石高原町';
GSI.MUNI_ARRAY["35201"] = '35,山口県,35201,下関市';
GSI.MUNI_ARRAY["35202"] = '35,山口県,35202,宇部市';
GSI.MUNI_ARRAY["35203"] = '35,山口県,35203,山口市';
GSI.MUNI_ARRAY["35204"] = '35,山口県,35204,萩市';
GSI.MUNI_ARRAY["35206"] = '35,山口県,35206,防府市';
GSI.MUNI_ARRAY["35207"] = '35,山口県,35207,下松市';
GSI.MUNI_ARRAY["35208"] = '35,山口県,35208,岩国市';
GSI.MUNI_ARRAY["35210"] = '35,山口県,35210,光市';
GSI.MUNI_ARRAY["35211"] = '35,山口県,35211,長門市';
GSI.MUNI_ARRAY["35212"] = '35,山口県,35212,柳井市';
GSI.MUNI_ARRAY["35213"] = '35,山口県,35213,美祢市';
GSI.MUNI_ARRAY["35215"] = '35,山口県,35215,周南市';
GSI.MUNI_ARRAY["35216"] = '35,山口県,35216,山陽小野田市';
GSI.MUNI_ARRAY["35305"] = '35,山口県,35305,周防大島町';
GSI.MUNI_ARRAY["35321"] = '35,山口県,35321,和木町';
GSI.MUNI_ARRAY["35341"] = '35,山口県,35341,上関町';
GSI.MUNI_ARRAY["35343"] = '35,山口県,35343,田布施町';
GSI.MUNI_ARRAY["35344"] = '35,山口県,35344,平生町';
GSI.MUNI_ARRAY["35502"] = '35,山口県,35502,阿武町';
GSI.MUNI_ARRAY["36201"] = '36,徳島県,36201,徳島市';
GSI.MUNI_ARRAY["36202"] = '36,徳島県,36202,鳴門市';
GSI.MUNI_ARRAY["36203"] = '36,徳島県,36203,小松島市';
GSI.MUNI_ARRAY["36204"] = '36,徳島県,36204,阿南市';
GSI.MUNI_ARRAY["36205"] = '36,徳島県,36205,吉野川市';
GSI.MUNI_ARRAY["36206"] = '36,徳島県,36206,阿波市';
GSI.MUNI_ARRAY["36207"] = '36,徳島県,36207,美馬市';
GSI.MUNI_ARRAY["36208"] = '36,徳島県,36208,三好市';
GSI.MUNI_ARRAY["36301"] = '36,徳島県,36301,勝浦町';
GSI.MUNI_ARRAY["36302"] = '36,徳島県,36302,上勝町';
GSI.MUNI_ARRAY["36321"] = '36,徳島県,36321,佐那河内村';
GSI.MUNI_ARRAY["36341"] = '36,徳島県,36341,石井町';
GSI.MUNI_ARRAY["36342"] = '36,徳島県,36342,神山町';
GSI.MUNI_ARRAY["36368"] = '36,徳島県,36368,那賀町';
GSI.MUNI_ARRAY["36383"] = '36,徳島県,36383,牟岐町';
GSI.MUNI_ARRAY["36387"] = '36,徳島県,36387,美波町';
GSI.MUNI_ARRAY["36388"] = '36,徳島県,36388,海陽町';
GSI.MUNI_ARRAY["36401"] = '36,徳島県,36401,松茂町';
GSI.MUNI_ARRAY["36402"] = '36,徳島県,36402,北島町';
GSI.MUNI_ARRAY["36403"] = '36,徳島県,36403,藍住町';
GSI.MUNI_ARRAY["36404"] = '36,徳島県,36404,板野町';
GSI.MUNI_ARRAY["36405"] = '36,徳島県,36405,上板町';
GSI.MUNI_ARRAY["36468"] = '36,徳島県,36468,つるぎ町';
GSI.MUNI_ARRAY["36489"] = '36,徳島県,36489,東みよし町';
GSI.MUNI_ARRAY["37201"] = '37,香川県,37201,高松市';
GSI.MUNI_ARRAY["37202"] = '37,香川県,37202,丸亀市';
GSI.MUNI_ARRAY["37203"] = '37,香川県,37203,坂出市';
GSI.MUNI_ARRAY["37204"] = '37,香川県,37204,善通寺市';
GSI.MUNI_ARRAY["37205"] = '37,香川県,37205,観音寺市';
GSI.MUNI_ARRAY["37206"] = '37,香川県,37206,さぬき市';
GSI.MUNI_ARRAY["37207"] = '37,香川県,37207,東かがわ市';
GSI.MUNI_ARRAY["37208"] = '37,香川県,37208,三豊市';
GSI.MUNI_ARRAY["37322"] = '37,香川県,37322,土庄町';
GSI.MUNI_ARRAY["37324"] = '37,香川県,37324,小豆島町';
GSI.MUNI_ARRAY["37341"] = '37,香川県,37341,三木町';
GSI.MUNI_ARRAY["37364"] = '37,香川県,37364,直島町';
GSI.MUNI_ARRAY["37386"] = '37,香川県,37386,宇多津町';
GSI.MUNI_ARRAY["37387"] = '37,香川県,37387,綾川町';
GSI.MUNI_ARRAY["37403"] = '37,香川県,37403,琴平町';
GSI.MUNI_ARRAY["37404"] = '37,香川県,37404,多度津町';
GSI.MUNI_ARRAY["37406"] = '37,香川県,37406,まんのう町';
GSI.MUNI_ARRAY["38201"] = '38,愛媛県,38201,松山市';
GSI.MUNI_ARRAY["38202"] = '38,愛媛県,38202,今治市';
GSI.MUNI_ARRAY["38203"] = '38,愛媛県,38203,宇和島市';
GSI.MUNI_ARRAY["38204"] = '38,愛媛県,38204,八幡浜市';
GSI.MUNI_ARRAY["38205"] = '38,愛媛県,38205,新居浜市';
GSI.MUNI_ARRAY["38206"] = '38,愛媛県,38206,西条市';
GSI.MUNI_ARRAY["38207"] = '38,愛媛県,38207,大洲市';
GSI.MUNI_ARRAY["38210"] = '38,愛媛県,38210,伊予市';
GSI.MUNI_ARRAY["38213"] = '38,愛媛県,38213,四国中央市';
GSI.MUNI_ARRAY["38214"] = '38,愛媛県,38214,西予市';
GSI.MUNI_ARRAY["38215"] = '38,愛媛県,38215,東温市';
GSI.MUNI_ARRAY["38356"] = '38,愛媛県,38356,上島町';
GSI.MUNI_ARRAY["38386"] = '38,愛媛県,38386,久万高原町';
GSI.MUNI_ARRAY["38401"] = '38,愛媛県,38401,松前町';
GSI.MUNI_ARRAY["38402"] = '38,愛媛県,38402,砥部町';
GSI.MUNI_ARRAY["38422"] = '38,愛媛県,38422,内子町';
GSI.MUNI_ARRAY["38442"] = '38,愛媛県,38442,伊方町';
GSI.MUNI_ARRAY["38484"] = '38,愛媛県,38484,松野町';
GSI.MUNI_ARRAY["38488"] = '38,愛媛県,38488,鬼北町';
GSI.MUNI_ARRAY["38506"] = '38,愛媛県,38506,愛南町';
GSI.MUNI_ARRAY["39201"] = '39,高知県,39201,高知市';
GSI.MUNI_ARRAY["39202"] = '39,高知県,39202,室戸市';
GSI.MUNI_ARRAY["39203"] = '39,高知県,39203,安芸市';
GSI.MUNI_ARRAY["39204"] = '39,高知県,39204,南国市';
GSI.MUNI_ARRAY["39205"] = '39,高知県,39205,土佐市';
GSI.MUNI_ARRAY["39206"] = '39,高知県,39206,須崎市';
GSI.MUNI_ARRAY["39208"] = '39,高知県,39208,宿毛市';
GSI.MUNI_ARRAY["39209"] = '39,高知県,39209,土佐清水市';
GSI.MUNI_ARRAY["39210"] = '39,高知県,39210,四万十市';
GSI.MUNI_ARRAY["39211"] = '39,高知県,39211,香南市';
GSI.MUNI_ARRAY["39212"] = '39,高知県,39212,香美市';
GSI.MUNI_ARRAY["39301"] = '39,高知県,39301,東洋町';
GSI.MUNI_ARRAY["39302"] = '39,高知県,39302,奈半利町';
GSI.MUNI_ARRAY["39303"] = '39,高知県,39303,田野町';
GSI.MUNI_ARRAY["39304"] = '39,高知県,39304,安田町';
GSI.MUNI_ARRAY["39305"] = '39,高知県,39305,北川村';
GSI.MUNI_ARRAY["39306"] = '39,高知県,39306,馬路村';
GSI.MUNI_ARRAY["39307"] = '39,高知県,39307,芸西村';
GSI.MUNI_ARRAY["39341"] = '39,高知県,39341,本山町';
GSI.MUNI_ARRAY["39344"] = '39,高知県,39344,大豊町';
GSI.MUNI_ARRAY["39363"] = '39,高知県,39363,土佐町';
GSI.MUNI_ARRAY["39364"] = '39,高知県,39364,大川村';
GSI.MUNI_ARRAY["39386"] = '39,高知県,39386,いの町';
GSI.MUNI_ARRAY["39387"] = '39,高知県,39387,仁淀川町';
GSI.MUNI_ARRAY["39401"] = '39,高知県,39401,中土佐町';
GSI.MUNI_ARRAY["39402"] = '39,高知県,39402,佐川町';
GSI.MUNI_ARRAY["39403"] = '39,高知県,39403,越知町';
GSI.MUNI_ARRAY["39405"] = '39,高知県,39405,梼原町';
GSI.MUNI_ARRAY["39410"] = '39,高知県,39410,日高村';
GSI.MUNI_ARRAY["39411"] = '39,高知県,39411,津野町';
GSI.MUNI_ARRAY["39412"] = '39,高知県,39412,四万十町';
GSI.MUNI_ARRAY["39424"] = '39,高知県,39424,大月町';
GSI.MUNI_ARRAY["39427"] = '39,高知県,39427,三原村';
GSI.MUNI_ARRAY["39428"] = '39,高知県,39428,黒潮町';
GSI.MUNI_ARRAY["40100"] = '40,福岡県,40100,北九州市';
GSI.MUNI_ARRAY["40101"] = '40,福岡県,40101,北九州市　門司区';
GSI.MUNI_ARRAY["40103"] = '40,福岡県,40103,北九州市　若松区';
GSI.MUNI_ARRAY["40105"] = '40,福岡県,40105,北九州市　戸畑区';
GSI.MUNI_ARRAY["40106"] = '40,福岡県,40106,北九州市　小倉北区';
GSI.MUNI_ARRAY["40107"] = '40,福岡県,40107,北九州市　小倉南区';
GSI.MUNI_ARRAY["40108"] = '40,福岡県,40108,北九州市　八幡東区';
GSI.MUNI_ARRAY["40109"] = '40,福岡県,40109,北九州市　八幡西区';
GSI.MUNI_ARRAY["40130"] = '40,福岡県,40130,福岡市';
GSI.MUNI_ARRAY["40131"] = '40,福岡県,40131,福岡市　東区';
GSI.MUNI_ARRAY["40132"] = '40,福岡県,40132,福岡市　博多区';
GSI.MUNI_ARRAY["40133"] = '40,福岡県,40133,福岡市　中央区';
GSI.MUNI_ARRAY["40134"] = '40,福岡県,40134,福岡市　南区';
GSI.MUNI_ARRAY["40135"] = '40,福岡県,40135,福岡市　西区';
GSI.MUNI_ARRAY["40136"] = '40,福岡県,40136,福岡市　城南区';
GSI.MUNI_ARRAY["40137"] = '40,福岡県,40137,福岡市　早良区';
GSI.MUNI_ARRAY["40202"] = '40,福岡県,40202,大牟田市';
GSI.MUNI_ARRAY["40203"] = '40,福岡県,40203,久留米市';
GSI.MUNI_ARRAY["40204"] = '40,福岡県,40204,直方市';
GSI.MUNI_ARRAY["40205"] = '40,福岡県,40205,飯塚市';
GSI.MUNI_ARRAY["40206"] = '40,福岡県,40206,田川市';
GSI.MUNI_ARRAY["40207"] = '40,福岡県,40207,柳川市';
GSI.MUNI_ARRAY["40210"] = '40,福岡県,40210,八女市';
GSI.MUNI_ARRAY["40211"] = '40,福岡県,40211,筑後市';
GSI.MUNI_ARRAY["40212"] = '40,福岡県,40212,大川市';
GSI.MUNI_ARRAY["40213"] = '40,福岡県,40213,行橋市';
GSI.MUNI_ARRAY["40214"] = '40,福岡県,40214,豊前市';
GSI.MUNI_ARRAY["40215"] = '40,福岡県,40215,中間市';
GSI.MUNI_ARRAY["40216"] = '40,福岡県,40216,小郡市';
GSI.MUNI_ARRAY["40217"] = '40,福岡県,40217,筑紫野市';
GSI.MUNI_ARRAY["40218"] = '40,福岡県,40218,春日市';
GSI.MUNI_ARRAY["40219"] = '40,福岡県,40219,大野城市';
GSI.MUNI_ARRAY["40220"] = '40,福岡県,40220,宗像市';
GSI.MUNI_ARRAY["40221"] = '40,福岡県,40221,太宰府市';
GSI.MUNI_ARRAY["40223"] = '40,福岡県,40223,古賀市';
GSI.MUNI_ARRAY["40224"] = '40,福岡県,40224,福津市';
GSI.MUNI_ARRAY["40225"] = '40,福岡県,40225,うきは市';
GSI.MUNI_ARRAY["40226"] = '40,福岡県,40226,宮若市';
GSI.MUNI_ARRAY["40227"] = '40,福岡県,40227,嘉麻市';
GSI.MUNI_ARRAY["40228"] = '40,福岡県,40228,朝倉市';
GSI.MUNI_ARRAY["40229"] = '40,福岡県,40229,みやま市';
GSI.MUNI_ARRAY["40230"] = '40,福岡県,40230,糸島市';
GSI.MUNI_ARRAY["40305"] = '40,福岡県,40305,那珂川町';
GSI.MUNI_ARRAY["40341"] = '40,福岡県,40341,宇美町';
GSI.MUNI_ARRAY["40342"] = '40,福岡県,40342,篠栗町';
GSI.MUNI_ARRAY["40343"] = '40,福岡県,40343,志免町';
GSI.MUNI_ARRAY["40344"] = '40,福岡県,40344,須恵町';
GSI.MUNI_ARRAY["40345"] = '40,福岡県,40345,新宮町';
GSI.MUNI_ARRAY["40348"] = '40,福岡県,40348,久山町';
GSI.MUNI_ARRAY["40349"] = '40,福岡県,40349,粕屋町';
GSI.MUNI_ARRAY["40381"] = '40,福岡県,40381,芦屋町';
GSI.MUNI_ARRAY["40382"] = '40,福岡県,40382,水巻町';
GSI.MUNI_ARRAY["40383"] = '40,福岡県,40383,岡垣町';
GSI.MUNI_ARRAY["40384"] = '40,福岡県,40384,遠賀町';
GSI.MUNI_ARRAY["40401"] = '40,福岡県,40401,小竹町';
GSI.MUNI_ARRAY["40402"] = '40,福岡県,40402,鞍手町';
GSI.MUNI_ARRAY["40421"] = '40,福岡県,40421,桂川町';
GSI.MUNI_ARRAY["40447"] = '40,福岡県,40447,筑前町';
GSI.MUNI_ARRAY["40448"] = '40,福岡県,40448,東峰村';
GSI.MUNI_ARRAY["40503"] = '40,福岡県,40503,大刀洗町';
GSI.MUNI_ARRAY["40522"] = '40,福岡県,40522,大木町';
GSI.MUNI_ARRAY["40544"] = '40,福岡県,40544,広川町';
GSI.MUNI_ARRAY["40601"] = '40,福岡県,40601,香春町';
GSI.MUNI_ARRAY["40602"] = '40,福岡県,40602,添田町';
GSI.MUNI_ARRAY["40604"] = '40,福岡県,40604,糸田町';
GSI.MUNI_ARRAY["40605"] = '40,福岡県,40605,川崎町';
GSI.MUNI_ARRAY["40608"] = '40,福岡県,40608,大任町';
GSI.MUNI_ARRAY["40609"] = '40,福岡県,40609,赤村';
GSI.MUNI_ARRAY["40610"] = '40,福岡県,40610,福智町';
GSI.MUNI_ARRAY["40621"] = '40,福岡県,40621,苅田町';
GSI.MUNI_ARRAY["40625"] = '40,福岡県,40625,みやこ町';
GSI.MUNI_ARRAY["40642"] = '40,福岡県,40642,吉富町';
GSI.MUNI_ARRAY["40646"] = '40,福岡県,40646,上毛町';
GSI.MUNI_ARRAY["40647"] = '40,福岡県,40647,築上町';
GSI.MUNI_ARRAY["41201"] = '41,佐賀県,41201,佐賀市';
GSI.MUNI_ARRAY["41202"] = '41,佐賀県,41202,唐津市';
GSI.MUNI_ARRAY["41203"] = '41,佐賀県,41203,鳥栖市';
GSI.MUNI_ARRAY["41204"] = '41,佐賀県,41204,多久市';
GSI.MUNI_ARRAY["41205"] = '41,佐賀県,41205,伊万里市';
GSI.MUNI_ARRAY["41206"] = '41,佐賀県,41206,武雄市';
GSI.MUNI_ARRAY["41207"] = '41,佐賀県,41207,鹿島市';
GSI.MUNI_ARRAY["41208"] = '41,佐賀県,41208,小城市';
GSI.MUNI_ARRAY["41209"] = '41,佐賀県,41209,嬉野市';
GSI.MUNI_ARRAY["41210"] = '41,佐賀県,41210,神埼市';
GSI.MUNI_ARRAY["41327"] = '41,佐賀県,41327,吉野ヶ里町';
GSI.MUNI_ARRAY["41341"] = '41,佐賀県,41341,基山町';
GSI.MUNI_ARRAY["41345"] = '41,佐賀県,41345,上峰町';
GSI.MUNI_ARRAY["41346"] = '41,佐賀県,41346,みやき町';
GSI.MUNI_ARRAY["41387"] = '41,佐賀県,41387,玄海町';
GSI.MUNI_ARRAY["41401"] = '41,佐賀県,41401,有田町';
GSI.MUNI_ARRAY["41423"] = '41,佐賀県,41423,大町町';
GSI.MUNI_ARRAY["41424"] = '41,佐賀県,41424,江北町';
GSI.MUNI_ARRAY["41425"] = '41,佐賀県,41425,白石町';
GSI.MUNI_ARRAY["41441"] = '41,佐賀県,41441,太良町';
GSI.MUNI_ARRAY["42201"] = '42,長崎県,42201,長崎市';
GSI.MUNI_ARRAY["42202"] = '42,長崎県,42202,佐世保市';
GSI.MUNI_ARRAY["42203"] = '42,長崎県,42203,島原市';
GSI.MUNI_ARRAY["42204"] = '42,長崎県,42204,諫早市';
GSI.MUNI_ARRAY["42205"] = '42,長崎県,42205,大村市';
GSI.MUNI_ARRAY["42207"] = '42,長崎県,42207,平戸市';
GSI.MUNI_ARRAY["42208"] = '42,長崎県,42208,松浦市';
GSI.MUNI_ARRAY["42209"] = '42,長崎県,42209,対馬市';
GSI.MUNI_ARRAY["42210"] = '42,長崎県,42210,壱岐市';
GSI.MUNI_ARRAY["42211"] = '42,長崎県,42211,五島市';
GSI.MUNI_ARRAY["42212"] = '42,長崎県,42212,西海市';
GSI.MUNI_ARRAY["42213"] = '42,長崎県,42213,雲仙市';
GSI.MUNI_ARRAY["42214"] = '42,長崎県,42214,南島原市';
GSI.MUNI_ARRAY["42307"] = '42,長崎県,42307,長与町';
GSI.MUNI_ARRAY["42308"] = '42,長崎県,42308,時津町';
GSI.MUNI_ARRAY["42321"] = '42,長崎県,42321,東彼杵町';
GSI.MUNI_ARRAY["42322"] = '42,長崎県,42322,川棚町';
GSI.MUNI_ARRAY["42323"] = '42,長崎県,42323,波佐見町';
GSI.MUNI_ARRAY["42383"] = '42,長崎県,42383,小値賀町';
GSI.MUNI_ARRAY["42391"] = '42,長崎県,42391,佐々町';
GSI.MUNI_ARRAY["42411"] = '42,長崎県,42411,新上五島町';
GSI.MUNI_ARRAY["43100"] = '43,熊本県,43100,熊本市';
GSI.MUNI_ARRAY["43101"] = '43,熊本県,43101,熊本市　中央区';
GSI.MUNI_ARRAY["43102"] = '43,熊本県,43102,熊本市　東区';
GSI.MUNI_ARRAY["43103"] = '43,熊本県,43103,熊本市　西区';
GSI.MUNI_ARRAY["43104"] = '43,熊本県,43104,熊本市　南区';
GSI.MUNI_ARRAY["43105"] = '43,熊本県,43105,熊本市　北区';
GSI.MUNI_ARRAY["43202"] = '43,熊本県,43202,八代市';
GSI.MUNI_ARRAY["43203"] = '43,熊本県,43203,人吉市';
GSI.MUNI_ARRAY["43204"] = '43,熊本県,43204,荒尾市';
GSI.MUNI_ARRAY["43205"] = '43,熊本県,43205,水俣市';
GSI.MUNI_ARRAY["43206"] = '43,熊本県,43206,玉名市';
GSI.MUNI_ARRAY["43208"] = '43,熊本県,43208,山鹿市';
GSI.MUNI_ARRAY["43210"] = '43,熊本県,43210,菊池市';
GSI.MUNI_ARRAY["43211"] = '43,熊本県,43211,宇土市';
GSI.MUNI_ARRAY["43212"] = '43,熊本県,43212,上天草市';
GSI.MUNI_ARRAY["43213"] = '43,熊本県,43213,宇城市';
GSI.MUNI_ARRAY["43214"] = '43,熊本県,43214,阿蘇市';
GSI.MUNI_ARRAY["43215"] = '43,熊本県,43215,天草市';
GSI.MUNI_ARRAY["43216"] = '43,熊本県,43216,合志市';
GSI.MUNI_ARRAY["43348"] = '43,熊本県,43348,美里町';
GSI.MUNI_ARRAY["43364"] = '43,熊本県,43364,玉東町';
GSI.MUNI_ARRAY["43367"] = '43,熊本県,43367,南関町';
GSI.MUNI_ARRAY["43368"] = '43,熊本県,43368,長洲町';
GSI.MUNI_ARRAY["43369"] = '43,熊本県,43369,和水町';
GSI.MUNI_ARRAY["43403"] = '43,熊本県,43403,大津町';
GSI.MUNI_ARRAY["43404"] = '43,熊本県,43404,菊陽町';
GSI.MUNI_ARRAY["43423"] = '43,熊本県,43423,南小国町';
GSI.MUNI_ARRAY["43424"] = '43,熊本県,43424,小国町';
GSI.MUNI_ARRAY["43425"] = '43,熊本県,43425,産山村';
GSI.MUNI_ARRAY["43428"] = '43,熊本県,43428,高森町';
GSI.MUNI_ARRAY["43432"] = '43,熊本県,43432,西原村';
GSI.MUNI_ARRAY["43433"] = '43,熊本県,43433,南阿蘇村';
GSI.MUNI_ARRAY["43441"] = '43,熊本県,43441,御船町';
GSI.MUNI_ARRAY["43442"] = '43,熊本県,43442,嘉島町';
GSI.MUNI_ARRAY["43443"] = '43,熊本県,43443,益城町';
GSI.MUNI_ARRAY["43444"] = '43,熊本県,43444,甲佐町';
GSI.MUNI_ARRAY["43447"] = '43,熊本県,43447,山都町';
GSI.MUNI_ARRAY["43468"] = '43,熊本県,43468,氷川町';
GSI.MUNI_ARRAY["43482"] = '43,熊本県,43482,芦北町';
GSI.MUNI_ARRAY["43484"] = '43,熊本県,43484,津奈木町';
GSI.MUNI_ARRAY["43501"] = '43,熊本県,43501,錦町';
GSI.MUNI_ARRAY["43505"] = '43,熊本県,43505,多良木町';
GSI.MUNI_ARRAY["43506"] = '43,熊本県,43506,湯前町';
GSI.MUNI_ARRAY["43507"] = '43,熊本県,43507,水上村';
GSI.MUNI_ARRAY["43510"] = '43,熊本県,43510,相良村';
GSI.MUNI_ARRAY["43511"] = '43,熊本県,43511,五木村';
GSI.MUNI_ARRAY["43512"] = '43,熊本県,43512,山江村';
GSI.MUNI_ARRAY["43513"] = '43,熊本県,43513,球磨村';
GSI.MUNI_ARRAY["43514"] = '43,熊本県,43514,あさぎり町';
GSI.MUNI_ARRAY["43531"] = '43,熊本県,43531,苓北町';
GSI.MUNI_ARRAY["44201"] = '44,大分県,44201,大分市';
GSI.MUNI_ARRAY["44202"] = '44,大分県,44202,別府市';
GSI.MUNI_ARRAY["44203"] = '44,大分県,44203,中津市';
GSI.MUNI_ARRAY["44204"] = '44,大分県,44204,日田市';
GSI.MUNI_ARRAY["44205"] = '44,大分県,44205,佐伯市';
GSI.MUNI_ARRAY["44206"] = '44,大分県,44206,臼杵市';
GSI.MUNI_ARRAY["44207"] = '44,大分県,44207,津久見市';
GSI.MUNI_ARRAY["44208"] = '44,大分県,44208,竹田市';
GSI.MUNI_ARRAY["44209"] = '44,大分県,44209,豊後高田市';
GSI.MUNI_ARRAY["44210"] = '44,大分県,44210,杵築市';
GSI.MUNI_ARRAY["44211"] = '44,大分県,44211,宇佐市';
GSI.MUNI_ARRAY["44212"] = '44,大分県,44212,豊後大野市';
GSI.MUNI_ARRAY["44213"] = '44,大分県,44213,由布市';
GSI.MUNI_ARRAY["44214"] = '44,大分県,44214,国東市';
GSI.MUNI_ARRAY["44322"] = '44,大分県,44322,姫島村';
GSI.MUNI_ARRAY["44341"] = '44,大分県,44341,日出町';
GSI.MUNI_ARRAY["44461"] = '44,大分県,44461,九重町';
GSI.MUNI_ARRAY["44462"] = '44,大分県,44462,玖珠町';
GSI.MUNI_ARRAY["45201"] = '45,宮崎県,45201,宮崎市';
GSI.MUNI_ARRAY["45202"] = '45,宮崎県,45202,都城市';
GSI.MUNI_ARRAY["45203"] = '45,宮崎県,45203,延岡市';
GSI.MUNI_ARRAY["45204"] = '45,宮崎県,45204,日南市';
GSI.MUNI_ARRAY["45205"] = '45,宮崎県,45205,小林市';
GSI.MUNI_ARRAY["45206"] = '45,宮崎県,45206,日向市';
GSI.MUNI_ARRAY["45207"] = '45,宮崎県,45207,串間市';
GSI.MUNI_ARRAY["45208"] = '45,宮崎県,45208,西都市';
GSI.MUNI_ARRAY["45209"] = '45,宮崎県,45209,えびの市';
GSI.MUNI_ARRAY["45341"] = '45,宮崎県,45341,三股町';
GSI.MUNI_ARRAY["45361"] = '45,宮崎県,45361,高原町';
GSI.MUNI_ARRAY["45382"] = '45,宮崎県,45382,国富町';
GSI.MUNI_ARRAY["45383"] = '45,宮崎県,45383,綾町';
GSI.MUNI_ARRAY["45401"] = '45,宮崎県,45401,高鍋町';
GSI.MUNI_ARRAY["45402"] = '45,宮崎県,45402,新富町';
GSI.MUNI_ARRAY["45403"] = '45,宮崎県,45403,西米良村';
GSI.MUNI_ARRAY["45404"] = '45,宮崎県,45404,木城町';
GSI.MUNI_ARRAY["45405"] = '45,宮崎県,45405,川南町';
GSI.MUNI_ARRAY["45406"] = '45,宮崎県,45406,都農町';
GSI.MUNI_ARRAY["45421"] = '45,宮崎県,45421,門川町';
GSI.MUNI_ARRAY["45429"] = '45,宮崎県,45429,諸塚村';
GSI.MUNI_ARRAY["45430"] = '45,宮崎県,45430,椎葉村';
GSI.MUNI_ARRAY["45431"] = '45,宮崎県,45431,美郷町';
GSI.MUNI_ARRAY["45441"] = '45,宮崎県,45441,高千穂町';
GSI.MUNI_ARRAY["45442"] = '45,宮崎県,45442,日之影町';
GSI.MUNI_ARRAY["45443"] = '45,宮崎県,45443,五ヶ瀬町';
GSI.MUNI_ARRAY["46201"] = '46,鹿児島県,46201,鹿児島市';
GSI.MUNI_ARRAY["46203"] = '46,鹿児島県,46203,鹿屋市';
GSI.MUNI_ARRAY["46204"] = '46,鹿児島県,46204,枕崎市';
GSI.MUNI_ARRAY["46206"] = '46,鹿児島県,46206,阿久根市';
GSI.MUNI_ARRAY["46208"] = '46,鹿児島県,46208,出水市';
GSI.MUNI_ARRAY["46210"] = '46,鹿児島県,46210,指宿市';
GSI.MUNI_ARRAY["46213"] = '46,鹿児島県,46213,西之表市';
GSI.MUNI_ARRAY["46214"] = '46,鹿児島県,46214,垂水市';
GSI.MUNI_ARRAY["46215"] = '46,鹿児島県,46215,薩摩川内市';
GSI.MUNI_ARRAY["46216"] = '46,鹿児島県,46216,日置市';
GSI.MUNI_ARRAY["46217"] = '46,鹿児島県,46217,曽於市';
GSI.MUNI_ARRAY["46218"] = '46,鹿児島県,46218,霧島市';
GSI.MUNI_ARRAY["46219"] = '46,鹿児島県,46219,いちき串木野市';
GSI.MUNI_ARRAY["46220"] = '46,鹿児島県,46220,南さつま市';
GSI.MUNI_ARRAY["46221"] = '46,鹿児島県,46221,志布志市';
GSI.MUNI_ARRAY["46222"] = '46,鹿児島県,46222,奄美市';
GSI.MUNI_ARRAY["46223"] = '46,鹿児島県,46223,南九州市';
GSI.MUNI_ARRAY["46224"] = '46,鹿児島県,46224,伊佐市';
GSI.MUNI_ARRAY["46225"] = '46,鹿児島県,46225,姶良市';
GSI.MUNI_ARRAY["46303"] = '46,鹿児島県,46303,三島村';
GSI.MUNI_ARRAY["46304"] = '46,鹿児島県,46304,十島村';
GSI.MUNI_ARRAY["46392"] = '46,鹿児島県,46392,さつま町';
GSI.MUNI_ARRAY["46404"] = '46,鹿児島県,46404,長島町';
GSI.MUNI_ARRAY["46452"] = '46,鹿児島県,46452,湧水町';
GSI.MUNI_ARRAY["46468"] = '46,鹿児島県,46468,大崎町';
GSI.MUNI_ARRAY["46482"] = '46,鹿児島県,46482,東串良町';
GSI.MUNI_ARRAY["46490"] = '46,鹿児島県,46490,錦江町';
GSI.MUNI_ARRAY["46491"] = '46,鹿児島県,46491,南大隅町';
GSI.MUNI_ARRAY["46492"] = '46,鹿児島県,46492,肝付町';
GSI.MUNI_ARRAY["46501"] = '46,鹿児島県,46501,中種子町';
GSI.MUNI_ARRAY["46502"] = '46,鹿児島県,46502,南種子町';
GSI.MUNI_ARRAY["46505"] = '46,鹿児島県,46505,屋久島町';
GSI.MUNI_ARRAY["46523"] = '46,鹿児島県,46523,大和村';
GSI.MUNI_ARRAY["46524"] = '46,鹿児島県,46524,宇検村';
GSI.MUNI_ARRAY["46525"] = '46,鹿児島県,46525,瀬戸内町';
GSI.MUNI_ARRAY["46527"] = '46,鹿児島県,46527,龍郷町';
GSI.MUNI_ARRAY["46529"] = '46,鹿児島県,46529,喜界町';
GSI.MUNI_ARRAY["46530"] = '46,鹿児島県,46530,徳之島町';
GSI.MUNI_ARRAY["46531"] = '46,鹿児島県,46531,天城町';
GSI.MUNI_ARRAY["46532"] = '46,鹿児島県,46532,伊仙町';
GSI.MUNI_ARRAY["46533"] = '46,鹿児島県,46533,和泊町';
GSI.MUNI_ARRAY["46534"] = '46,鹿児島県,46534,知名町';
GSI.MUNI_ARRAY["46535"] = '46,鹿児島県,46535,与論町';
GSI.MUNI_ARRAY["47201"] = '47,沖縄県,47201,那覇市';
GSI.MUNI_ARRAY["47205"] = '47,沖縄県,47205,宜野湾市';
GSI.MUNI_ARRAY["47207"] = '47,沖縄県,47207,石垣市';
GSI.MUNI_ARRAY["47208"] = '47,沖縄県,47208,浦添市';
GSI.MUNI_ARRAY["47209"] = '47,沖縄県,47209,名護市';
GSI.MUNI_ARRAY["47210"] = '47,沖縄県,47210,糸満市';
GSI.MUNI_ARRAY["47211"] = '47,沖縄県,47211,沖縄市';
GSI.MUNI_ARRAY["47212"] = '47,沖縄県,47212,豊見城市';
GSI.MUNI_ARRAY["47213"] = '47,沖縄県,47213,うるま市';
GSI.MUNI_ARRAY["47214"] = '47,沖縄県,47214,宮古島市';
GSI.MUNI_ARRAY["47215"] = '47,沖縄県,47215,南城市';
GSI.MUNI_ARRAY["47301"] = '47,沖縄県,47301,国頭村';
GSI.MUNI_ARRAY["47302"] = '47,沖縄県,47302,大宜味村';
GSI.MUNI_ARRAY["47303"] = '47,沖縄県,47303,東村';
GSI.MUNI_ARRAY["47306"] = '47,沖縄県,47306,今帰仁村';
GSI.MUNI_ARRAY["47308"] = '47,沖縄県,47308,本部町';
GSI.MUNI_ARRAY["47311"] = '47,沖縄県,47311,恩納村';
GSI.MUNI_ARRAY["47313"] = '47,沖縄県,47313,宜野座村';
GSI.MUNI_ARRAY["47314"] = '47,沖縄県,47314,金武町';
GSI.MUNI_ARRAY["47315"] = '47,沖縄県,47315,伊江村';
GSI.MUNI_ARRAY["47324"] = '47,沖縄県,47324,読谷村';
GSI.MUNI_ARRAY["47325"] = '47,沖縄県,47325,嘉手納町';
GSI.MUNI_ARRAY["47326"] = '47,沖縄県,47326,北谷町';
GSI.MUNI_ARRAY["47327"] = '47,沖縄県,47327,北中城村';
GSI.MUNI_ARRAY["47328"] = '47,沖縄県,47328,中城村';
GSI.MUNI_ARRAY["47329"] = '47,沖縄県,47329,西原町';
GSI.MUNI_ARRAY["47348"] = '47,沖縄県,47348,与那原町';
GSI.MUNI_ARRAY["47350"] = '47,沖縄県,47350,南風原町';
GSI.MUNI_ARRAY["47353"] = '47,沖縄県,47353,渡嘉敷村';
GSI.MUNI_ARRAY["47354"] = '47,沖縄県,47354,座間味村';
GSI.MUNI_ARRAY["47355"] = '47,沖縄県,47355,粟国村';
GSI.MUNI_ARRAY["47356"] = '47,沖縄県,47356,渡名喜村';
GSI.MUNI_ARRAY["47357"] = '47,沖縄県,47357,南大東村';
GSI.MUNI_ARRAY["47358"] = '47,沖縄県,47358,北大東村';
GSI.MUNI_ARRAY["47359"] = '47,沖縄県,47359,伊平屋村';
GSI.MUNI_ARRAY["47360"] = '47,沖縄県,47360,伊是名村';
GSI.MUNI_ARRAY["47361"] = '47,沖縄県,47361,久米島町';
GSI.MUNI_ARRAY["47362"] = '47,沖縄県,47362,八重瀬町';
GSI.MUNI_ARRAY["47375"] = '47,沖縄県,47375,多良間村';
GSI.MUNI_ARRAY["47381"] = '47,沖縄県,47381,竹富町';
GSI.MUNI_ARRAY["47382"] = '47,沖縄県,47382,与那国町';

/************************************************************************
 設定：作図
 ************************************************************************/
CONFIG.SAKUZU = {

	SYMBOL : {
		URL: "http://cyberjapandata.gsi.go.jp/portal/sys/v4/symbols/",
		FILES:[
			'001.png', '002.png', '003.png', '004.png', '005.png', '006.png', '007.png', '008.png', '009.png', '010.png',
			'011.png', '012.png', '013.png', '014.png', '015.png', '016.png', '017.png', '018.png', '019.png', '020.png',
			'021.png', '022.png', '023.png', '024.png', '025.png', '026.png', '027.png', '028.png', '029.png', '030.png',
			'031.png', '032.png', '033.png', '034.png', '035.png', '036.png', '037.png', '038.png', '039.png', '040.png',
			'041.png', '042.png', '043.png', '044.png', '045.png', '046.png', '047.png', '048.png', '049.png', '050.png',
			'051.png', '052.png', '053.png', '054.png', '055.png', '056.png', '057.png', '058.png', '059.png', '060.png',
			'061.png', '062.png', '063.png', '064.png', '065.png', '066.png', '067.png', '068.png', '069.png', '070.png',
			'071.png', '072.png', '073.png', '074.png', '075.png', '076.png', '077.png', '078.png', '079.png', '080.png',
			'081.png', '082.png', '083.png', '084.png', '085.png', '086.png', '087.png', '088.png', '089.png', '090.png',
			'091.png', '092.png', '093.png', '094.png', '095.png', '096.png', '097.png', '098.png', '099.png', '100.png',
			'101.png', '102.png', '103.png', '104.png', '105.png', '106.png', '107.png', '108.png', '109.png', '110.png',
			'111.png', '112.png', '113.png', '114.png', '115.png', '116.png', '117.png', '118.png', '119.png', '120.png',
			'121.png', '122.png', '123.png', '124.png', '125.png', '126.png', '127.png', '128.png', '129.png', '130.png',
			'131.png', '132.png', '133.png', '134.png', '135.png', '136.png', '137.png', '138.png', '139.png', '140.png',
			'141.png', '142.png', '143.png', '144.png', '145.png', '146.png', '147.png', '148.png', '149.png', '150.png',
			'151.png', '152.png', '153.png', '154.png', '155.png', '156.png', '157.png', '158.png', '159.png', '160.png',
			'161.png', '162.png', '163.png', '164.png', '165.png', '166.png', '167.png', '168.png', '169.png', '170.png',
			'171.png', '180.png',
			'181.png', '182.png', '183.png', '184.png', '185.png', '186.png', '187.png', '188.png',            '200.png',
			'201.png', '202.png', '203.png', '204.png', '205.png', '206.png', '207.png', '208.png', '209.png', '210.png',
			'211.png', '212.png', '213.png', '214.png', '215.png', '216.png', '217.png',                       '300.png',
			'364.png', '301.png', '302.png', '303.png', '304.png', '305.png', '306.png', '307.png', '365.png',
			'308.png', '309.png', '310.png', '311.png', '312.png', '313.png', '363.png',
			                                 '314.png', '315.png', '316.png', '317.png', '318.png', '319.png', '320.png',
			'321.png', '322.png', '323.png', '324.png', '325.png', '326.png', '327.png', '328.png', '329.png', '330.png',
			'331.png', '332.png', '333.png', '334.png', '335.png', '336.png', '337.png', '338.png', '339.png', '340.png',
			'341.png', '342.png', '343.png', '344.png', '345.png', '346.png', '347.png', '348.png', '349.png', '350.png',
			'351.png', '352.png', '353.png', '354.png', '355.png', '356.png', '357.png', '358.png', '359.png', '360.png',
			'361.png', '362.png', '436.png', '437.png', '438.png', '445.png', '446.png', '447.png', '449.png',
			'457.png', '458.png', '459.png', '460.png', '461.png', '462.png', '463.png', '464.png', '465.png', '466.png',
			'476.png', '700.png',
			'701.png', '702.png', '703.png', '704.png', '705.png', '706.png', '707.png', '708.png', '709.png', '710.png',
			'dot.png',
			'1101.png', '1102.png', '1103.png', '1104.png', '1105.png', '1106.png', '1107.png', '1108.png'
		],
		ICONSIZE : [20,20],
		ICONANCHOR : [10,10],
		DEFAULTICON : '080.png',
		INIT_DEFAULTICON : '080.png',
		ICON_SCALE : 1,
		INIT_ICON_SCALE : 1
	}
};


/************************************************************************
 jQuery
  メソッド補完、追加
 ************************************************************************/
jQuery.extend({
	stringify : function stringify(obj) {
		var t = typeof (obj);
		if (t != "object" || obj === null) {
			// simple data type
			if (t == "string") obj = '"' + obj + '"';
			return String(obj);
		} else {
			// recurse array or object
			var json = [], arr = (obj && obj.constructor == Array);

			for (var n in obj) {
				var v = obj[n];
				t = typeof(v);
				if (obj.hasOwnProperty(n)) {
					if (t == "string") v = '"' + v + '"'; else if (t == "object" && v !== null) v = jQuery.stringify(v);
					json.push((arr ? "" : '"' + n + '":') + String(v));
				}
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
});

try
{
	window.console = window.console || {log:function(){}};
}catch(e){}

try
{
window.JSON || ( window.JSON = {
	parse : function( src )
	{
		return $.parseJSON( src );
	},

	stringify : function(obj)
	{
		return $.stringify( obj );
	}
});

}
catch(e)
{}

// ie8 array のmap, filterメソッド追加
try
{
(function(fn){
    if (!fn.map) fn.map=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined)r[i]=f(this[i]);return r;}
    if (!fn.filter) fn.filter=function(f){var r=[];for(var i=0;i<this.length;i++)if(this[i]!==undefined&&f(this[i]))r[i]=this[i];return r;}
})(Array.prototype);
}
catch(e)
{}

// leafletのsetOpacityがIE8で利かないためjQueryに任せる
L.DomUtil.setOpacity = function(el,opacity)
{
	$(el).css({opacity:opacity} );
};

// JQuery.ajax IE11の場合XMLHttpRequestを使用させるため
if ( window.ActiveXObject !== undefined && !window.XDomainRequest )
{
	jQuery.ajaxSettings.xhr = function () {
		try {
			return new window.XMLHttpRequest();
		} catch( e ) {}
	};
}

/************************************************************************
 Proj4js
 ************************************************************************/
Proj4js.defs["EPSG:3097"] = "+proj=utm +zone=51 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone51
Proj4js.defs["EPSG:3098"] = "+proj=utm +zone=52 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone52
Proj4js.defs["EPSG:3099"] = "+proj=utm +zone=53 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone53
Proj4js.defs["EPSG:3100"] = "+proj=utm +zone=54 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone54
Proj4js.defs["EPSG:3101"] = "+proj=utm +zone=55 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";		    //UTM Zone55
Proj4js.defs["SR-ORG:1235"] = "+proj=utm +zone=56 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs";	    //UTM Zone56
Proj4js.defs['EPSG:4301'] = "+proj=longlat +ellps=bessel +towgs84=-146.336,506.832,680.254,0,0,0,0 +no_defs";	//日本測地系（経緯度座標）

/************************************************************************
 GSI.Draw
 L.FeatureGroup
 L.Polygon
 L.Draw.Circle
 L.Draw.Polyline
 L.Draw.Polygon
 L.Draw.SimpleShape
 ************************************************************************/
L.FeatureGroup.include({
	closePopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].closePopup();
		}
		return this;
	},
	unbindPopup : function()
	{
		for (var id in this._layers) {
			this._layers[id].unbindPopup();
		}
		return this;
	}
} );

GSI.Draw.convertRadius = function(radius, latlng, unit)
{
	var result = {
		radius : radius.toFixed(1),
        latlng : latlng,
		unit   : unit
	};
    if(unit == "m"){
	    if ( result.radius > 1000 )
	    {
		    result.radius = (radius  / 1000).toFixed(4);
		    result.unit   = 'km';
	    }
    }
    if(unit == "px"){
        result.radius = Math.floor(result.radius);
    }
	return result;

};

GSI.PixelRectangle = L.Polygon.extend({
	initialize: function (center, width, height, anchorX, anchorY, options) {
		//this._boundsToLatLngs(center,width, height)
		this._center = center;
		this._width = width;
		this._height = height;
		this._anchorX = anchorX;
		this._anchorY = anchorY;

		L.Polygon.prototype.initialize.call(this, [this._center,this._center,this._center], options);
	},
	onZoomEnd : function()
	{
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY ) );
	},
	onAdd : function(map)
	{
		L.Polygon.prototype.onAdd.call(this, map);
		this.setLatLngs( this._boundsToLatLngs( this._center, this._width, this._height, this._anchorX , this._anchorY  ) );

		this._onZoomEnd = L.bind( this.onZoomEnd, this );
		map.on( 'zoomend', this._onZoomEnd );
	},
	onRemove : function(map)
	{
		map.off( 'zoomend', this._onZoomEnd );

		L.Polygon.prototype.onRemove.call(this, map);
	},
	_boundsToLatLngs: function (center, width, height, anchorX , anchorY ) {

		var centerPoint = this._map.latLngToContainerPoint( center );

		var left = centerPoint.x - anchorX;
		var top = centerPoint.y - anchorY;

		var right = centerPoint.x + ( width- anchorX );
		var bottom = centerPoint.y + ( height- anchorY );

		var southWest = this._map.containerPointToLatLng( L.point( left, bottom ) );
		var northEast = this._map.containerPointToLatLng( L.point( right, top ) );

		latLngBounds = L.latLngBounds(southWest, northEast );
		return [
			latLngBounds.getSouthWest(),
			latLngBounds.getNorthWest(),
			latLngBounds.getNorthEast(),
			latLngBounds.getSouthEast()
		];
	}
});

GSI.Draw.Circle = L.Draw.Circle.extend( {

	_onMouseMove: function (e)
	{
		var latlng = e.latlng,
			showRadius = this.options.showRadius,
			useMetric = this.options.metric,
			radius;

		this._tooltip.updatePosition(latlng);
		if (this._isDrawing) {
			this._drawShape(latlng);

			// Get the new radius (rounded to 1 dp)
			radius = this._shape.getRadius().toFixed(1);

			this._tooltip.updateContent({
				text: this._endLabelText,
				subtext: showRadius ? '半径: ' + L.GeometryUtil.readableDistance(radius, useMetric) : ''
			});
		}

		if (this._isDrawing)
		{
			this.fire( "change",GSI.Draw.convertRadius(this._shape.getRadius(), latlng, "m") );
		}
	}
} );

GSI.Draw.CircleMarker = L.Draw.Circle.extend( {
	_onMouseMove: function (e)
	{
		var latlng = e.latlng,
			showRadius = this.options.showRadius,
			useMetric = this.options.metric,
			radius;

		this._tooltip.updatePosition(latlng);
		if (this._isDrawing) {
			this._drawShape(latlng);

			// Get the new radius (rounded to 1 dp)
			radius = this._shape.getRadius().toFixed(1);

			this._tooltip.updateContent({
				text: this._endLabelText,
				subtext: showRadius ? '半径: ' + GSI.Utils.ConverUnit(GSI.GLOBALS.map, this._shape, radius, "m", "px") + 'px': ''
			});
		}

		if (this._isDrawing)
		{
			this.fire( "change",GSI.Draw.convertRadius(GSI.Utils.ConverUnit(GSI.GLOBALS.map, this._shape, radius, "m", "px"), latlng, "px") );
		}
	}
} );

GSI.Draw.Polyline = L.Draw.Polyline.extend( {

	initialize: function (map, options) {
		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.touch = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		
		L.Draw.Polyline.prototype.initialize.call(this, map, options);
	},
	_vertexChanged : function(latlng, added)
	{
		this._currentLatLng = latlng;

		L.Draw.Polyline.prototype._vertexChanged.call(this,latlng,added);

		var currentLatLng = this._currentLatLng,
			previousLatLng = this._markers[this._markers.length - 1].getLatLng(),
			distance;

		distance = this._measurementRunningTotal + currentLatLng.distanceTo(previousLatLng);
		var distanceStr = '0 m';
		if (distance > 1000) {
			distanceStr = (distance  / 1000).toFixed(3) + ' km';
		} else {
			distanceStr = Math.ceil(distance) + ' m';
		}
		this.fire( 'measurechange', { distance : distanceStr } );
	}
} );

GSI.Draw.Polygon = L.Draw.Polygon.extend( {

	initialize: function (map, options) {

		if ( GSI.Utils.Browser.isSmartMobile )
		{
			options.icon = new L.DivIcon({
				iconSize: new L.Point(24, 24),
				className: 'leaflet-div-icon leaflet-editing-icon gsi_draw_icon'
			});
		}
		L.Draw.Polygon.prototype.initialize.call(this, map, options);
	},
	_vertexChanged : function(latlng, added)
	{
		L.Draw.Polygon.prototype._vertexChanged.call(this,latlng,added);
		this.fire( 'measurechange', {
			distance : this._area2MeasurementString( L.GeometryUtil.geodesicArea(this._poly.getLatLngs() ) )
		} );
	},
	_area2MeasurementString : function( area )
	{
		var result = '0 m&sup2;';
		if ( area )
		{
			if ( area < 1000000 )
			{
				result = Math.ceil(area ) + ' m&sup2;';
			}
			else
			{
				result = ( area / 1000000 ).toFixed(3) + ' km&sup2;';
			}
		}

		return result;
	},
	_getMeasurementString: function () {
		var area = this._area;

		if (!area) {
			return null;
		}

		return this._area2MeasurementString(area);
	},
	_updateFinishHandler: function () {
		var markerCount = this._markers.length;

		// The first marker should have a click handler to close the polygon
		if (markerCount === 1) {
			this._markers[0].on('click', this._finishShape, this);
		}

		// Add and update the double click handler
		if (markerCount > 2) {
			this._markers[markerCount - 1].on('click', this._finishShape, this);
			// Only need to remove handler if has been added before
			if (markerCount > 3) {
				this._markers[markerCount - 2].off('click', this._finishShape, this);
			}
		}
	}
} );

GSI.Draw.FreehandPolyline = L.Draw.SimpleShape.extend({

	initialize: function (map, options) {
		this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end;
		this._initialLabelText = "マウスダウンで線の描画開始";

		L.Draw.SimpleShape.prototype.initialize.call(this, map, options);
	},
	_drawShape: function (latlng) {
		if (!this._shape) {
			this._shape = new L.Polyline([], this.options.shapeOptions);
			this._map.addLayer(this._shape);
		}
		else
		{
			this._shape.addLatLng(latlng);
		}
	},
	_fireCreatedEvent: function () {
		var plyline = new L.Polyline(this._shape.getLatLngs(), this.options.shapeOptions);
		L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, plyline);
	}
} );

/************************************************************************
 GSI.Links
 ************************************************************************/
GSI.Links ={};

GSI.Links.getURL = function( id, center, z, bounds){
	if ( id == "gsi3d" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&pxsize=2048";
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	else if ( id == 'gsiglobe' )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図Globeに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		return 'http://maps.gsi.go.jp/globe/index_globe.html';
	}
	else if ( id == 'mapion' )
	{
		var zoomLevel = z;
		if(z <= 6) {zoomLevel = 6;}
		return 'http://www.mapion.co.jp/m2/' + center.lat + ',' + center.lng + ',' + zoomLevel;
	}
	else if ( id == 'itsumonavi' )
	{
		var zoomLevel = 18;
		var japanP = GSI.Utils.world2Japan(center);
		var y = Math.round(japanP.y * 3600 * 1000);
		var x = Math.round(japanP.x * 3600 * 1000);

		if(z <= 5)			{zoomLevel = 1;}
		else if(z <= 6)		{zoomLevel = 2;}
		else if(z <= 7)		{zoomLevel = 3;}
		else if(z <= 8)		{zoomLevel = 4;}
		else if(z <= 9)		{zoomLevel = 6;}
		else if(z <= 10)	{zoomLevel = 7;}
		else if(z <= 11)	{zoomLevel = 8;}
		else if(z <= 12)	{zoomLevel = 9;}
		else if(z <= 13)	{zoomLevel = 10;}
		else if(z <= 14)	{zoomLevel = 11;}
		else if(z <= 15)	{zoomLevel = 13;}
		else if(z <= 16)	{zoomLevel = 14;}
		else if(z <= 17)	{zoomLevel = 16;}
		else				{zoomLevel = 18;}

		return "http://www.its-mo.com/z-" + y +"-" + x + "-" + zoomLevel + ".htm";
	}
	else if ( id == 'ucodehref' )
	{
		return 'http://ucopendb.gsi.go.jp/ucode_app/logical_code/ucode_disp.php?lat=' + center.lat +'&lng=' + center.lng + '&zoom=' + z;
	}
	else
	{
		return id;
	}
};


/************************************************************************
 GSI.showTopMassage
 ************************************************************************/
GSI.showTopMassage = function(){
    var message = ( CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.DETAILS ? CONFIG.TOPMESSAGE.DETAILS : '現在情報はありません' );
	GSI.Modal.Message.show( message, { className: "gsi_modal_topmessage", width:500, closeBtnVisible :true } );
};

/************************************************************************
 GSI.Utils
 ************************************************************************/
GSI.Utils.encodeHTML = function( src)
{
	src = src.replace( /&/g , '&amp;' );
	src = src.replace( /</g , '&lt;' );
	src = src.replace( />/g , '&gt;' );
	return src;
};

GSI.Utils.getInternetExplorerVersion = function (){
	var rv = -1;
	if (navigator.appName == 'Microsoft Internet Explorer'){
		var ua = navigator.userAgent;
		var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	else if (navigator.appName == 'Netscape'){
		var ua = navigator.userAgent;
		var re  = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
		if (re.exec(ua) != null)
		rv = parseFloat( RegExp.$1 );
	}
	return rv;
};

GSI.Utils.Browser = {};
GSI.Utils.Browser.userAgent = window.navigator.userAgent.toLowerCase();

if (typeof document.documentElement.style.maxHeight != "undefined") {

	var ieVersion= GSI.Utils.getInternetExplorerVersion();

	if (ieVersion < 1 ){
	// IE 以外
	}else {
	// IE8 以降
		GSI.Utils.Browser.ie = true;
		GSI.Utils.Browser.version = ieVersion;
	}
} else {
	// IE 6.0 以下

	GSI.Utils.Browser.ie = true;
	GSI.Utils.Browser.version = 6;
}

GSI.Utils.Browser.isiPhone = GSI.Utils.Browser.userAgent.indexOf('iphone') >= 0;
GSI.Utils.Browser.isiPod = GSI.Utils.Browser.userAgent.indexOf('ipod') >= 0;
GSI.Utils.Browser.isiPad = GSI.Utils.Browser.userAgent.indexOf('ipad') >= 0;
GSI.Utils.Browser.isiOS = (GSI.Utils.Browser.isiPhone || GSI.Utils.Browser.isiPod || GSI.Utils.Browser.isiPad);
GSI.Utils.Browser.isAndroid = GSI.Utils.Browser.userAgent.indexOf('android') >= 0;
GSI.Utils.Browser.isSmartMobile = ( GSI.Utils.Browser.isiOS || GSI.Utils.Browser.isAndroid );
GSI.Utils.Browser.isChrome = GSI.Utils.Browser.userAgent.indexOf('chrome') != -1;

GSI.Utils.hasFileAPI =( window.File && window.FileReader && window.FileList && window.Blob );

GSI.Utils.Browser.TouchDevice = function(){
    var f = false;
    if(GSI.Utils.Browser.isiPhone     ||
       GSI.Utils.Browser.isiPod       ||
       GSI.Utils.Browser.isiPad       ||
       GSI.Utils.Browser.isiOS        ||
       GSI.Utils.Browser.isAndroid    ||
       GSI.Utils.Browser.isSmartMobile
    ){
        f = true;
    }
    return f;
};

GSI.Utils.getCurrentID = function() {
	var id = 1;
	if ( !GSI.Utils._currentID )
	{
		GSI.Utils._currentID = 1;
	}
	id = GSI.Utils._currentID;
	GSI.Utils._currentID++;
	return id;
};

GSI.Utils.isLocalUrl = function(url) {

	if ( ( GSI.ClientMode .baseUrl && GSI.ClientMode .baseUrl != '' ) || url.match(/(http|https):\/\/.+/) )
	{
		return false;
	}
	else
	{
		return true;
	}
};

GSI.Utils.flashPlayerVersion = null;

GSI.Utils.canUseFlashPlayer = function()
{
	if ( GSI.Utils.flashPlayerVersion == null )
	{
		GSI.Utils.flashPlayerVersion = GSI.Utils.getFlashPlayerVersion();

	}
	return ( GSI.Utils.flashPlayerVersion > 0 );
};

GSI.Utils.getFlashPlayerVersion = function()
{
	var result = 0;
	if(navigator.plugins && navigator.mimeTypes['application/x-shockwave-flash']){
		var plugin = navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin;
		if(plugin){
			result = parseInt(plugin.description.match(/\d+\.\d+/));
		}
	} else {
		try{
			var flashOCX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/([0-9]+)/);
			if(flashOCX){
				result = parseInt(flashOCX[0]);
			}
		}catch(e){}
	}
	if(result <= 6){
		result = 0;
	}
	return result;
};

GSI.Utils.getCurrentPath = function()
{
	var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
	var port = _location.port;
	var pathName = _location.pathname;

	if ( pathName.length <= 0 || pathName.charAt( 0 ) != '/' )
		pathName = '/' + pathName;

	return _location.protocol + '//' +
		( _location.host ? _location.host: _location.hostname ) +
		pathName;

};

GSI.Utils.getTimeStampString = function() {
	var now = new Date();

	var year = now.getFullYear(); // 年
	var month = now.getMonth() + 1; // 月
	var day = now.getDate(); // 日
	var hour = now.getHours(); // 時
	var min = now.getMinutes(); // 分
	var sec = now.getSeconds(); // 秒
	var msec = now.getMilliseconds(); // ミリ秒
	var result =
		year + '' +
		( '00' + month ).slice(-2)  +
		( '00' + day ).slice(-2) +
		( '00' + hour ).slice(-2) +
		( '00' + min ).slice(-2) +
		( '00' + sec ).slice(-2) +
		msec ;
	return result;
};

GSI.Utils.getScreenSize = function() {
	return {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
};

GSI.Utils.world2Japan = function(latLng){
	var worldLonLat = new Proj4js.Proj('EPSG:4326');
	var japanLonLat = new Proj4js.Proj('EPSG:4301');
	var worldP = new Proj4js.Point(latLng.lng,latLng.lat);
	var japanP = Proj4js.transform(worldLonLat,japanLonLat,worldP);
	return {x:japanP.x, y:japanP.y}
};


GSI.Utils.latLngToDMS = function(latLng) {
	
	var latLng = { lat : latLng.lat, lng : latLng.lng};
	var latMinus = ( latLng.lat < 0 ? -1 : 1 );
	var lngMinus = ( latLng.lng < 0 ? -1 : 1 );
	
	latLng.lat = Math.abs( latLng.lat);
	latLng.lng = Math.abs( latLng.lng);
	
	var latD = Math.floor(latLng.lat);
	var latM = Math.floor( ( latLng.lat - latD ) * 60 );
	var latS = (latLng.lat-latD-(latM/60))*3600;

	if(latS==60){latS=0; latM=latM+1;};
	if(latM==60){latM=0; latD=latD+1;};

	var lngD = Math.floor(latLng.lng);
	var lngM = Math.floor( ( latLng.lng - lngD ) * 60 );
	var lngS = (latLng.lng-lngD-(lngM/60))*3600;

	if(lngS==60){lngS=0; lngM=lngM+1;};
	if(lngM==60){lngM=0; lngD=lngD+1;};

	return {
		lat : {
			d : latD, m:latM, s: latS
		},
		lng : {
			d : lngD, m:lngM, s: lngS
		}
	};
};

// 磁北線を表示できる範囲内かどうかを返す
GSI.Utils.isVaridVariation = function(latLng)
{
	//経度：122度～154度
	//緯度：20度～46度
	return !( latLng.lat < 20 || latLng.lat > 46 || latLng.lng <122 || latLng.lng >154 );
}

// 指定緯度経度の偏角を算出し、角度を返す
GSI.Utils.getVariation = function(latLng)
{
	var px = latLng.lng;
	var py = latLng.lat;

	//経緯度座標(10進数)を小数点以下6桁に丸める
	px = px * 1000000;
	px = parseInt(px);
	px = px / 1000000;
	py = py * 1000000;
	py = parseInt(py);
	py = py / 1000000;

	//西偏角計算
	var KEE = px - 138;
	var KNN = py - 37;
	var KKK = (7+40.585/60) + (19.003/60) * KNN - (6.265 / 60) * KEE + (0.009 / 60) * KNN * KNN + (0.024 / 60) * KNN * KEE - (0.591 / 60) * KEE * KEE;

	return KKK;
};

GSI.Utils.ConverUnit = function(map, shape, radius, unit_src, unit_to)
{
    if(unit_src == "px" && unit_to == "m" ){
        var r_radius = radius;
        var r_latlng = shape.getLatLng();
        var p        = map.latLngToContainerPoint(r_latlng);
        var p_to_x   = p.x;
        var p_to_y   = p.y;
        p_to_x += r_radius;

        var r_latlng_to = map.containerPointToLatLng( L.point( p_to_x, p_to_y ) );
        var r           = r_latlng.distanceTo(r_latlng_to);

        radius = r;
    }

    if(unit_src == "m"  && unit_to == "px"){ 
        var r_latlng = shape.getBounds();
        var n_p = map.latLngToContainerPoint(r_latlng._northEast);
        var s_p = map.latLngToContainerPoint(r_latlng._southWest);

        var r   = Math.floor((n_p.x - s_p.x) * 0.5);

        radius = r;
    }
    return radius;
};

GSI.Utils.Cookie = L.Class.extend( {
	
	_config : {
		defaults : {}
	},
	initialize : function () {},
	_encode : function(s)
	{
		return this._config.raw ? s : encodeURIComponent(s);
	},
	_decode : function (s) 
	{
		return this._config.raw ? s : decodeURIComponent(s);
	},
	_stringifyCookieValue : function(value) 
	{
		return this._encode(this._config.json ? JSON.stringify(value) : String(value));
	},
	_parseCookieValue : function (s)
	{
		if (s.indexOf('"') === 0) {
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			var pluses = /\+/g;
			s = decodeURIComponent(s.replace(pluses, ' '));
			return this._config.json ? JSON.parse(s) : s;
		} catch(e) {}
	},
	_read : function(s, converter) 
	{
		//var value = this._config.raw ? s : this._parseCookieValue(s);
		return this._config.raw ? s : this._parseCookieValue(s);
	},
	get : function( key )
	{
		var result = key ? undefined : {};
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) 
		{
			var parts = cookies[i].split('=');
			var name = this._decode(parts.shift());
			var cookie = parts.join('=');
			if (key && key === name) {
				result = this._read(cookie);
				break;
			}

			if (!key && (cookie = this._read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	},
	set : function(key, value, options)
	{
		options = $.extend({}, this._config.defaults, options);

		if (typeof options.expires === 'number') {
			var hours = options.expires, t = options.expires = new Date();
			t.setTime(+t + hours * 1000 * 60 * 60 );// 
		}

		return (document.cookie = [
			this._encode(key), '=', this._stringifyCookieValue(value),
			options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
			options.path    ? '; path=' + options.path : '',
			options.domain  ? '; domain=' + options.domain : '',
			options.secure  ? '; secure' : ''
		].join(''));
	

	},
	remove : function (key, options)
	{
		if (this.get(key) === undefined) 
		{
			return false;
		}

		this.set(key, '', $.extend({}, options, { expires: -1 }));
		return !this.get(key);
	}
} );

GSI.Utils.sendSelectedLayer = function(id){
    $.ajax({
        type : "GET",
        data : id,
        url : "./layers_txt/anchor.txt",
        datatype : "text",
        cache : false,
    });
};
GSI.Utils.get2ndMesh = function( lat, lon ){

	//1st mesh code
	var lat1 = Math.floor( ( lat * 60 ) / 40 );
	var lat2 = ( lat * 60 ) % 40;

	var lon1 = Math.floor( lon - 100 );
	var lon2 = lon - 100 - lon1;

	//2nd mesh code
	var m2lat = Math.floor( lat2 / 5 );
	var m2lon = Math.floor( ( lon2 * 60 )  / 7.5);

	return "" + lat1 + lon1 + m2lat + m2lon; 
};
/************************************************************************
 GSI.UTM
 ************************************************************************/
GSI.UTM = {};

GSI.UTM.Utils = {

	PROJ_WORLD : new Proj4js.Proj('EPSG:4326'),
	lng2Zone : function( lng )
	{
		return Math.floor(lng/6) + 31;
	},
	zone2Lng : function( zone )
	{
		return ( zone - 31 ) * 6;
	},
	getUTMDefName : function( zone)
	{
		var defName = '';

		if ( !zone ) return defName;
		switch( zone + '' )
		{
			case '51':
				defName = 'EPSG:3097';
				break;
			case '52':
				defName = 'EPSG:3098';
				break;
			case '53':
				defName = 'EPSG:3099';
				break;
			case '54':
				defName = 'EPSG:3100';
				break;
			case '55':
				defName = 'EPSG:3101';
				break;
			case '56':
				defName = 'SR-ORG:1235';
				break;
		}
		return defName;
	},
	getUTMMark : function ( lat )
	{
		var mark ='';
		if(lat >= 16 && lat < 24) {
			mark = "Q";
		} else if(lat >= 24 && lat < 32) {
			mark = "R";
		} else if(lat >= 32 && lat < 40) {
			mark = "S";
		} else if(lat >= 40 && lat < 48) {
			mark = "T";
		} else if(lat >= 48 && lat < 56) {
			mark = "U";
		}
		return mark;
	},
	_parseUSNGText : function (s)
	{
		var result = {};
		var j = 0;
		var k;
		var usngStr = [];
		var usngStr_temp = []

		usngStr_temp = s.toUpperCase()

		var regexp = /%20/g
		usngStr = usngStr_temp.replace(regexp,"")
		regexp = / /g
		usngStr = usngStr_temp.replace(regexp,"")

		if (usngStr.length < 7) {
		  return null;
		}

		result.zone = usngStr.charAt(j++)*10 + usngStr.charAt(j++)*1;
		result.mylet = usngStr.charAt(j++)
		result.sq1 = usngStr.charAt(j++)
		result.sq2 = usngStr.charAt(j++)

		result.precision = (usngStr.length-j) / 2;
		result.east='';
		result.north='';
		for (var k=0; k<result.precision; k++)
		{
		   result.east += usngStr.charAt(j++)
		}

		if (usngStr[j] == " ") { j++ }
		for (var k=0; k<result.precision; k++)
		{
		   result.north += usngStr.charAt(j++)
		}
		
		return result;
	},
	_USNGtoUTM : function (zone,mylet,sq1,sq2,east,north)
	{ 
		var result = {};
		
		//Starts (southern edge) of N-S zones in millons of meters
		var zoneBase = [1.1,2.0,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,   0, 0.8, 1.7, 2.6, 3.5, 4.4, 5.3, 6.2, 7.0, 7.9];

		var segBase = [0,2,2,2,4,4,6,6,8,8,   0,0,0,2,2,4,4,6,6,6];  //Starts of 2 million meter segments, indexed by zone 
		
		// convert easting to UTM
		var eSqrs="ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(sq1);          
		var appxEast=1+eSqrs%8; 

		// convert northing to UTM
		var letNorth = "CDEFGHJKLMNPQRSTUVWX".indexOf(mylet);
		if (zone%2)  //odd number zone
		var nSqrs="ABCDEFGHJKLMNPQRSTUV".indexOf(sq2) 
		else        // even number zone
		var nSqrs="FGHJKLMNPQRSTUVABCDE".indexOf(sq2); 

		var zoneStart = zoneBase[letNorth];
		var appxNorth = Number(segBase[letNorth])+nSqrs/10;
		if ( appxNorth < zoneStart)
		   appxNorth += 2; 	  

		result.N=appxNorth*1000000+Number(north)*Math.pow(10,5-north.length);
		result.E=appxEast*100000+Number(east)*Math.pow(10,5-east.length)
		result.zone=zone;
		result.letter=mylet;

		return result;
	},
	_UTMtoLL : function (UTMNorthing, UTMEasting, UTMZoneNumber, ret)
	{
		var EASTING_OFFSET  = 500000.0;   // (meters)
		var NORTHING_OFFSET = 10000000.0; // (meters)
		var k0 = 0.9996;
		var EQUATORIAL_RADIUS    = 6378137.0; // GRS80 ellipsoid (meters)
		var ECC_SQUARED = 0.006694380023;
		var ECC_PRIME_SQUARED = ECC_SQUARED / (1 - ECC_SQUARED);
		var E1 = (1 - Math.sqrt(1 - ECC_SQUARED)) / (1 + Math.sqrt(1 - ECC_SQUARED));
		var RAD_2_DEG   = 180.0 / Math.PI;
		
		// remove 500,000 meter offset for longitude
		var xUTM = parseFloat(UTMEasting) - EASTING_OFFSET; 
		var yUTM = parseFloat(UTMNorthing);
		var zoneNumber = parseInt(UTMZoneNumber);

		// origin longitude for the zone (+3 puts origin in zone center) 
		var lonOrigin = (zoneNumber - 1) * 6 - 180 + 3; 

		// M is the "true distance along the central meridian from the Equator to phi
		// (latitude)
		var M = yUTM / k0;
		var mu = M / ( EQUATORIAL_RADIUS * (1 - ECC_SQUARED / 4 - 3 * ECC_SQUARED * 
		              ECC_SQUARED / 64 - 5 * ECC_SQUARED * ECC_SQUARED * ECC_SQUARED / 256 ));

		// phi1 is the "footprint latitude" or the latitude at the central meridian which
		// has the same y coordinate as that of the point (phi (lat), lambda (lon) ).
		var phi1Rad = mu + (3 * E1 / 2 - 27 * E1 * E1 * E1 / 32 ) * Math.sin( 2 * mu) 
		             + ( 21 * E1 * E1 / 16 - 55 * E1 * E1 * E1 * E1 / 32) * Math.sin( 4 * mu)
		             + (151 * E1 * E1 * E1 / 96) * Math.sin(6 * mu);
		var phi1 = phi1Rad * RAD_2_DEG;

		// Terms used in the conversion equations
		var N1 = EQUATORIAL_RADIUS / Math.sqrt( 1 - ECC_SQUARED * Math.sin(phi1Rad) * 
		          Math.sin(phi1Rad));
		var T1 = Math.tan(phi1Rad) * Math.tan(phi1Rad);
		var C1 = ECC_PRIME_SQUARED * Math.cos(phi1Rad) * Math.cos(phi1Rad);
		var R1 = EQUATORIAL_RADIUS * (1 - ECC_SQUARED) / Math.pow(1 - ECC_SQUARED * 
		            Math.sin(phi1Rad) * Math.sin(phi1Rad), 1.5);
		var D = xUTM / (N1 * k0);

		// Calculate latitude, in decimal degrees
		var lat = phi1Rad - ( N1 * Math.tan(phi1Rad) / R1) * (D * D / 2 - (5 + 3 * T1 + 10
		    * C1 - 4 * C1 * C1 - 9 * ECC_PRIME_SQUARED) * D * D * D * D / 24 + (61 + 90 * 
		      T1 + 298 * C1 + 45 * T1 * T1 - 252 * ECC_PRIME_SQUARED - 3 * C1 * C1) * D * D *
		      D * D * D * D / 720);
		lat = lat * RAD_2_DEG;

		// Calculate longitude, in decimal degrees
		var lng = (D - (1 + 2 * T1 + C1) * D * D * D / 6 + (5 - 2 * C1 + 28 * T1 - 3 * 
		        C1 * C1 + 8 * ECC_PRIME_SQUARED + 24 * T1 * T1) * D * D * D * D * D / 120) /
		        Math.cos(phi1Rad);

		lng = lonOrigin + lng * RAD_2_DEG;
		return L.latLng(lat, lng);
	},
	point2LatLng : function( s )
	{
		var latLng = null;
		try
		{
			var usngp = this._parseUSNGText(s,usngp);
			if ( !usngp ) return null;
			var coords = this._USNGtoUTM(usngp.zone,usngp.mylet,usngp.sq1,usngp.sq2,usngp.east,usngp.north) 
			
			if (usngp.mylet < 'N') 
			{
				coords.N -= NORTHING_OFFSET
			}

			latLng = this._UTMtoLL(coords.N, coords.E, usngp.zone)
		}
		catch( e )
		{
			latLng = null;
		}
		return latLng;
	},
	latlng2PointName : function(lat, lng)
	{
		var zone = GSI.UTM.Utils.lng2Zone( lng );
		var defName = GSI.UTM.Utils.getUTMDefName( zone );

		if ( defName == '' ) return '';

		var projUTM = new Proj4js.Proj(defName);
		var latLngPoint = new Proj4js.Point( lng,lat );
		var utmPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,latLngPoint);

		return GSI.UTM.Utils.getUTMPointName(
			zone,
			GSI.UTM.Utils.getUTMMark( lat ),
			utmPoint.x,
			utmPoint.y,
			4
		);
	},
	getUTMPointName : function( zone, mark, x, y, num, hideNumber)
	{

		var x10mNumber = '';
		var y10mNumber = '';
		if ( !hideNumber && x && y )
		{
			var zero = '';
			for ( var i=0; i<num; i++ )
			{
				zero += '0';
			}

			x10mNumber = zero + Math.round( x /10 );
			x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
			y10mNumber = zero + Math.round( y /10 );
			y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
		}
		
		var letters = GSI.UTM.Utils.findGridLetters(zone, Math.round( y /10 ) * 10, Math.round( x /10 ) * 10);
		return zone + mark + letters + x10mNumber + y10mNumber;
	},
	findSet : function(zoneNum)
	{
		zoneNum = parseInt(zoneNum);
		zoneNum = zoneNum % 6;
		switch (zoneNum) {

		case 0:
			return 6;
			break;

		case 1:
			return 1;
			break;

		case 2:
			return 2;
			break;

		case 3:
			return 3;
			break;

		case 4:
			return 4;
			break;

		case 5:
			return 5;
			break;

		default:
			return -1;
			break;
		}
	},
	BLOCK_SIZE : 100000,
	GRIDSQUARE_SET_ROW_SIZE : 20,
	GRIDSQUARE_SET_COL_SIZE : 8,

	findGridLetters : function (zoneNum, northing, easting)
	{
		zoneNum  = parseInt(zoneNum);
		northing = parseFloat(northing);
		easting  = parseFloat(easting);
		row = 1;

		// northing coordinate to single-meter precision
		north_1m = Math.round(northing);

		// Get the row position for the square identifier that contains the point
		while (north_1m >= GSI.UTM.Utils.BLOCK_SIZE) {
			north_1m = north_1m - GSI.UTM.Utils.BLOCK_SIZE;
			row++;
		}

		// cycle repeats (wraps) after 20 rows
		row = row % GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE;
		col = 0;

		// easting coordinate to single-meter precision
		east_1m = Math.round(easting);

		// Get the column position for the square identifier that contains the point
		while (east_1m >= GSI.UTM.Utils.BLOCK_SIZE){
			east_1m = east_1m - GSI.UTM.Utils.BLOCK_SIZE;
			col++;
		}

		// cycle repeats (wraps) after 8 columns
		col = col % GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE;

		return GSI.UTM.Utils.lettersHelper(GSI.UTM.Utils.findSet(zoneNum), row, col);
	},
	lettersHelper : function (set, row, col)
	{
		// handle case of last row
		if (row == 0) {
			row = GSI.UTM.Utils.GRIDSQUARE_SET_ROW_SIZE - 1;
		}
		else {
			row--;
		}

		if (col == 0) {
			col = GSI.UTM.Utils.GRIDSQUARE_SET_COL_SIZE - 1;
		}
		else {
			col--;
		}

		switch(set) {

		case 1:
			l1="ABCDEFGH";              // column ids
			l2="ABCDEFGHJKLMNPQRSTUV";  // row ids
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 2:
			l1="JKLMNPQR";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 3:
			l1="STUVWXYZ";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 4:
			l1="ABCDEFGH";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 5:
			l1="JKLMNPQR";
			l2="ABCDEFGHJKLMNPQRSTUV";
			return l1.charAt(col) + l2.charAt(row);
			break;

		case 6:
			l1="STUVWXYZ";
			l2="FGHJKLMNPQRSTUVABCDE";
			return l1.charAt(col) + l2.charAt(row);
			break;
		}
	}
};


GSI.UTM.Grid = L.Class.extend( {

	options : {
		lineStyle : {
			color : "#FF0000",
			weight : 2,
			color2 : "#FF0000",
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3],
			visible : false,
			clickable : false
		},
		zoneLineStyle : {
			color : "#FF0000",
			weight : 2,
			color2 : "#FF0000",
			opacity: 1,
			fillOpacity:1,
			dashArray : null,
			visible : false,
			clickable : false
		},
		labelClassName : 'utmgrid_label',
		visible : false
	},
	_lines : [],
	_labels : [],
	_zoneLines : [],
	_zoneLabels : [],
	initialize : function (map, options )
	{
		this._map = map;
		this._onMoveEnd = L.bind( this.onMoveEnd, this );

		options = L.setOptions(this, options);
		options.lineStyle.clickable = false;
		if ( this.options.visible )
		{
			this.options.visible = false;
			this.setVisible( true );//this.refresh();
		}
	},
	onMoveEnd : function()
	{
		this.refresh();
	},
	refresh : function()
	{
		if ( !this.options.visible )
		{
			this.clear();
			return;
		}
		
		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
		{
			this.clear();
		}
		
		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();

		for( var i=0;i< this.options.condition.length; i++ )
		{
			var c = this.options.condition[i];
			if ( zoom <= c.zoom )
			{
				if ( c.grid == 'a')
				{
            		this._clearLayerArr(this._lines, 0);
            		this._clearLayerArr(this._labels, 0);
					this.drawZoneGrid( bounds );
				}
				else
				{
					this.drawGrid( bounds, zoom, c.grid);
					this.drawZoneGrid( bounds, true, this.options.zoneLineStyle );
				}
				try
				{
					if ( this._layer  ) this._layer.bringToBack();
				}
				catch( ex ){}
				break;
			}
		}
	},
	drawGrid : function( bounds, zoom, meter )
	{
		// グリッド
		var startZone = GSI.UTM.Utils.lng2Zone( bounds.getWest() );
		var projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( startZone ));
		var startLatLngPoint = new Proj4js.Point(bounds.getWest(),bounds.getSouth());
		var startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

		startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
		startUTMPoint.x -= meter;

		startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
		startUTMPoint.y -= meter;

		// x軸ループ
		var utmX = startUTMPoint.x;
		var zone = startZone;
		var lineStyle = $.extend( true, {} , this.options.lineStyle );
		var xExit = false;

		var gridPoints = [];
		var gridPoints2 = [];

		var lineIndex = 0;
		var labelIndex = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		while( true )
		{
			var currentZoneLng = GSI.UTM.Utils.zone2Lng( zone );
			var nextZoneLng = GSI.UTM.Utils.zone2Lng( zone + 1 );

			var isNextZone = true;
			var xExit2 = true;

			// y軸ループ
			var latlngs = [];
			var labelLatlngs = [];
			var utmYs = [];
			var utmY = startUTMPoint.y;
			var yIndex = 0;
			var yIndex2 = 0;

			var x10mNumber = '';
			if ( meter <100 * 1000 )
			{
				x10mNumber = utmX;
			}
			
			var lastMark = '';
			
			while( true )
			{
				var utmPoint =new Proj4js.Point(utmX,utmY);
				var latLngPoint = Proj4js.transform(projUTM, GSI.UTM.Utils.PROJ_WORLD,utmPoint);
				var mark = GSI.UTM.Utils.getUTMMark( latLngPoint.y );
				
				if ( lastMark != '' && lastMark != mark )
				{
					
					var latLng = L.latLng( 24 + Math.floor( (latLngPoint.y - 24 ) / 8 ) * 8, latLngPoint.x);
					
					var changeUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,new Proj4js.Point(latLng.lng,latLng.lat ) );
					
				    utmYs.push( changeUTMPoint.y );
				    if ( CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER ) latLng._hideMeter = true
					labelLatlngs.push( latLng );
					
					if ( !gridPoints2[ yIndex2 ] ) gridPoints2[ yIndex2 ] = [];
					gridPoints2[ yIndex2 ].push( latLng );
					
					yIndex2++;
				}
				
				lastMark = mark;

				var latLng = L.latLng(latLngPoint.y, latLngPoint.x);

				utmYs.push( utmY );
				latlngs.push( latLng );
				labelLatlngs.push( latLng );
				
				if ( !gridPoints[ yIndex ] ) gridPoints[ yIndex ] = [];
				gridPoints[ yIndex ].push( latLng );

				if ( latLngPoint.x < nextZoneLng ) isNextZone = false;
				if ( latLngPoint.x <= bounds.getEast() ) xExit2 = false;

				yIndex++;
				utmY += meter;
				if ( latLngPoint.y > bounds.getNorth() ) break;
			}

			if ( latlngs.length > 0  )
			{
				if ( this._lines.length <= lineIndex )
				{
					var polyline = L.polyline(latlngs, lineStyle);
					polyline._noMeasure = true;
					layer.addLayer( polyline );
					this._lines.push( polyline );
				}
				else
				{
					var polyline = this._lines[lineIndex];
					polyline.setLatLngs( latlngs );
				}
				lineIndex++;
			}

			if ( isNextZone )
			{
				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{
					if( !gridPoints[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;
				}
				
				for ( var i=0; i<gridPoints2.length; i++ )
				{
					if( !gridPoints2[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints2[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints2[i] );
					}
					lineIndex++;
				}
				
				gridPoints = [];
				gridPoints2 = [];
				zone++;
				projUTM = new Proj4js.Proj(GSI.UTM.Utils.getUTMDefName( zone ));

				startLatLngPoint = new Proj4js.Point(GSI.UTM.Utils.zone2Lng( zone ),bounds.getSouth());
				startUTMPoint = Proj4js.transform(GSI.UTM.Utils.PROJ_WORLD,projUTM,startLatLngPoint);

				startUTMPoint.x = Math.floor( startUTMPoint.x / meter ) * meter;
				startUTMPoint.x -= meter;

				startUTMPoint.y = Math.floor( startUTMPoint.y / meter ) * meter;
				startUTMPoint.y -= meter;
				utmX = startUTMPoint.x;
			}
			else
			{
				// ラベル表示
				for ( var i=0; i<labelLatlngs.length; i++ )
				{
					var latlng = labelLatlngs[i];
					var utmY = utmYs[i];
					var mark = GSI.UTM.Utils.getUTMMark( latlng.lat ); // 2015-07-19
					if ( this._labels.length <= labelIndex )
					{
						var label = new L.Label({
								zoomAnimation : true,
								noHide : true,
								offset: [8, -24],
								className: this.options.labelClassName,
								clickable : false
							});
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
						label.setLatLng( latlng);
						layer.addLayer( label );
						this._labels.push( label );
					}
					else
					{
						var label = this._labels[labelIndex];
						label.setContent(  GSI.UTM.Utils.getUTMPointName( zone, mark, utmX, utmY, 4, ( latlng._hideMeter || meter >=100000 ) ) );
						label.setLatLng( latlng );
					}
					labelIndex++;
				}
			}
			if ( xExit )
			{
				// 横線
				for ( var i=0; i<gridPoints.length; i++ )
				{
					if( !gridPoints[i] ) continue;
					
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
						
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints[i] );
					}
					lineIndex++;
				}
				
				for ( var i=0; i<gridPoints2.length; i++ )
				{
					if( !gridPoints2[i] ) continue;
					if ( this._lines.length <= lineIndex )
					{
						var polyline = L.polyline(gridPoints2[i], lineStyle);
						polyline._noMeasure = true;
						layer.addLayer( polyline );
						this._lines.push( polyline );
					}
					else
					{
						var polyline = this._lines[lineIndex];
						polyline.setLatLngs( gridPoints2[i] );
					}
					lineIndex++;
				}
				
				gridPoints = [];
				gridPoints2 = [];
				break;
			}

			utmX += meter;
			xExit = xExit2;
		}

		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._lines, lineIndex);
		this._clearLayerArr(this._labels, labelIndex);

	},
	drawZoneGrid : function(bounds, nolabel, style)
	{
		// 小縮尺用グリッド
		var startX = Math.floor( bounds.getWest() / 6 ) * 6;
		var startY = Math.floor( bounds.getSouth() / 8 ) * 8;

		var endX = ( Math.floor( bounds.getEast() / 6 ) + 1 ) * 6;
		var endY = ( Math.floor( bounds.getNorth() / 8 ) + 1 ) * 8;

		var lineStyle = $.extend( true, {} ,( style ? style : this.options.lineStyle ) );
		
		var lineIndex = 0;
		var labelIndex = 0;

		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure= true;

		for ( var y = startY; y<=endY; y += 8 )
		{
			var mark = GSI.UTM.Utils.getUTMMark( y );

			if ( y < 16 ) continue;
			if (y >= 57 ) break;

			var latlngs = [];
			for ( var x = startX; x<=endX; x+=6 )
			{
				if ( !nolabel )
				{
    				var zone = Math.floor(x/6) + 31;
    				var nextZone = Math.floor((x+6)/6) + 31;

    				if ( zone < 51 ) continue;
    				if (  zone > 57 ) break;

    				if ( y+8 <= endY && y +8 < 57 && x+6 <= endX && nextZone <=57 )
    				{
    					if ( this._zoneLabels.length <= labelIndex )
    					{
    						var label = new L.Label({
    								zoomAnimation : true,
    								noHide : true,
    								offset: [8, -24],
    								className: this.options.labelClassName

    							});
    						label.setContent( zone + mark);
    						label.setLatLng( { 'lng' : x, 'lat' : y} );
    						layer.addLayer( label );
    						this._zoneLabels.push( label );
    					}
    					else
    					{
    						var label = this._zoneLabels[labelIndex];
    						label.setContent( zone + mark);
    						label.setLatLng( { 'lng' : x, 'lat' : y} );
    					}
    					labelIndex ++;
    				}
    			}
				latlngs.push( L.latLng(y, x) );
			}

			if ( this._zoneLines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );
				this._zoneLines.push( polyline );
			}
			else
			{
				var polyline = this._zoneLines[lineIndex];
				polyline.setStyle( lineStyle );
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;
		}

		for ( var x = startX; x<=endX; x+=6 )
		{
			var zone = Math.floor(x/6) + 31;
			if ( zone < 51 || zone > 57 ) continue;

			var latlngs = [];

			for ( var y = startY; y<=endY; y += 8 )
			{
				if ( y < 16 || y >= 57 ) continue;

				latlngs.push( L.latLng(y, x) );
			}
			if ( this._zoneLines.length <= lineIndex )
			{
				var polyline = L.polyline(latlngs, lineStyle);
				polyline._noMeasure = true;
				layer.addLayer( polyline );

				this._zoneLines.push( polyline );
			}
			else
			{
				var polyline = this._zoneLines[lineIndex];
				polyline.setStyle( lineStyle );
				polyline.setLatLngs( latlngs );
			}
			lineIndex++;
		}


		if (!this._layer )
		{
			this._layer  = layer;
			this._map.addLayer( this._layer );
		}

		this._clearLayerArr(this._zoneLines, lineIndex);
		this._clearLayerArr(this._zoneLabels, labelIndex);
	},
	_clearLayerArr : function( arr, idx )
	{
		if ( this._layer )
		{
			for ( var i=idx; i<arr.length; i++ )
			{
				this._layer.removeLayer( arr[i] );
			}
		}
		if ( arr.length > idx )
		{
			arr.splice(idx);
		}
	},
	clear : function()
	{
		if ( this._layer )
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}

		this._lines = [];
		this._labels = [];
		this._zoneLines = [];
		this._zoneLabels = [];
	},
	setVisible : function( visible )
	{
		if ( visible )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	},
	getVisible : function()
	{
		return this.options.visible;
	},
	show : function()
	{
		if ( !this.options.visible )
		{
			this.options.visible = true;
			this._map.on('moveend', this._onMoveEnd);
			this.refresh();
		}
	},
	hide : function()
	{
		if ( this.options.visible )
		{
			this.options.visible = false;
			this._map.off('moveend', this._onMoveEnd);
			this.refresh();
		}
	}
} );

GSI.CenterCross = L.Class.extend( {

	marker : null,
	options : {
		visible : true
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this.map = map;
		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},
	refresh : function()
	{
		if ( this.options.visible )
		{
			var pos = this.map.getCenter();
			if ( !this.marker )
			{
				var icon = L.icon({
					iconUrl: 'image/map/crosshairs.png',
					iconSize:     [32, 32],
					iconAnchor:   [16, 16]
				});

				this.marker = new GSI.CenterCrossMarker(pos, {
					icon: icon,
					clickable:
					false,draggable: false,
					keyboard: false,
					opacity: 0.8,
					zIndexOffset : 0
				});
				this.marker.addTo(this.map);
			}
			else
			{
				this.marker.setLatLng( pos );
			}
		}
		else if ( this.marker )
		{
			this.map.removeLayer( this.marker );
			this.marker = null;
		}
	},
	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this.map.on('move', this._refresh );
		}
		else
		{
			this.map.off('move', this._refresh );
		}
		this.refresh();
	},
	getVisible : function()
	{
		return this.options.visible;
	}
} );


/************************************************************************
 L.Class
 - GSI.COCOTileLayer
 ************************************************************************/
GSI.COCOTileLayer = L.Class.extend({
	includes: L.Mixin.Events,
	visible : true,
	options: {
		minZoom: 0,
		maxZoom: 18,
		tileSize: 256,
		errorTileUrl: '',
		zoomOffset: 0,
		refreshInterval: 1000,
		unloadInvisibleTiles: L.Browser.mobile,
		updateWhenIdle: L.Browser.mobile
	},
	initialize: function (map, url, options) {
		this.map = map;
		options = L.setOptions(this, options);
		this.visible = options.visible;
		// detecting retina displays, adjusting tileSize and zoom levels
		if (options.detectRetina && L.Browser.retina && options.maxZoom > 0) {

			options.tileSize = Math.floor(options.tileSize / 2);
			options.zoomOffset++;

			if (options.minZoom > 0) {
				options.minZoom--;
			}
			this.options.maxZoom--;
		}

		if (options.bounds) {
			options.bounds = L.latLngBounds(options.bounds);
		}

		this._url = url;
		if ( options.visible )
		{
			this.addTo( this.map );
		}
	},
	onAdd: function (map) {
		this._map = map;

		this._reset();
		this._update();

		map.on({
			'viewreset': this._reset,
			'moveend': this._moveend,
			'movestart': this._movestart
		}, this);
	},
	addTo: function (map) {
		this.visible = true;
		map.addLayer(this);
		return this;
	},
	getVisible : function()
	{
		return this.visible;
	},
	setVisible : function( on)
	{
		if ( on )
		{
			this.addTo( this.map );
		}
		else if ( this._map )
		{
			this.visible = false;
			this.map .removeLayer( this );
			this.fire('hide', null );
		}
	},
	refresh : function()
	{
		if ( this.visible )
		{
			this._reset();
			this._update();
		}
	},
	onRemove: function (map) {
		map.off({
			'viewreset': this._reset,
			'moveend': this._update,
			'movestart': this._movestart
		}, this);

		this._map = null;
	},
	_reset: function (e) {

		if ( this._tiles )
		{
			for ( var id in this._tiles )
			{
				var tile = this._tiles[ id ];
				if ( tile.ajax )
				{
					tile.ajax.abort();
					tile.ajax = null;
				}
			}
		}

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		this._haveTiles = {};
		this._tiles = {};
		this._tilesToLoad = 0;
	},
	_moveend : function() {
		if (!this._map) { return; }

        this._reset();
		this.refreshTimerId =  setTimeout(
			L.Util.bind( this._timerRefresh, this ),
			this.options.refreshInterval );

	},
	_movestart : function() {
		this._reset();
	},
	_timerRefresh : function() {
		this._update();
	},
	_update : function() {

		if ( this.refreshTimerId )
		{
			clearTimeout( this.refreshTimerId );
			this.refreshTimerId = null;
		}

		if (!this._map) { return; }

		var map = this._map,
		    bounds = this.map.getPixelBounds(),
		    zoom = this.map.getZoom(),
		    tileSize = this._getTileSize();

		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			return;
		}

		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());

		this._addTilesFromCenterOut(tileBounds);

	},
	_getTileSize: function () {
		var map = this._map,
		    zoom = this.map.getZoom() + this.options.zoomOffset,
		    zoomN = this.options.maxNativeZoom,
		    tileSize = this.options.tileSize;

		if (zoomN && zoom > zoomN) {
			tileSize = Math.round(this.map.getZoomScale(zoom) / this.map.getZoomScale(zoomN) * tileSize);
		}

		return tileSize;
	},
	_tileShouldBeLoaded: function (tilePoint) {
		if ((tilePoint.x + ':' + tilePoint.y) in this._tiles) {
			return false; // already loaded
		}

		var options = this.options;

		if (!options.continuousWorld) {
			var limit = this._getWrapTileNum();

			// don't load if exceeds world bounds
			if ((options.noWrap && (tilePoint.x < 0 || tilePoint.x >= limit.x)) ||
				tilePoint.y < 0 || tilePoint.y >= limit.y) { return false; }
		}

		if (options.bounds) {
			var tileSize = options.tileSize,
			    nwPoint = tilePoint.multiplyBy(tileSize),
			    sePoint = nwPoint.add([tileSize, tileSize]),
			    nw = this._map.unproject(nwPoint),
			    se = this._map.unproject(sePoint);

			// TODO temporary hack, will be removed after refactoring projections
			// https://github.com/Leaflet/Leaflet/issues/1618
			if (!options.continuousWorld && !options.noWrap) {
				nw = nw.wrap();
				se = se.wrap();
			}

			if (!options.bounds.intersects([nw, se])) { return false; }
		}
		return true;
	},
	_addTilesFromCenterOut: function (bounds) {
		var queue = [],
		    center = bounds.getCenter();

		var j, i, point;

		for (j = bounds.min.y; j <= bounds.max.y; j++) {
			for (i = bounds.min.x; i <= bounds.max.x; i++) {
				point = new L.Point(i, j);

				if (this._tileShouldBeLoaded(point)) {
					queue.push(point);
				}
			}
		}

		var tilesToLoad = queue.length;

		if (tilesToLoad === 0) { return; }

		queue.sort(function (a, b) {
			return a.distanceTo(center) - b.distanceTo(center);
		});

		this._tilesToLoad += tilesToLoad;

		for (i = 0; i < tilesToLoad; i++) {
			this._addTile(queue[i]);
		}

		this.fire('loadstart', null );
	},
	_getTilePos: function (tilePoint) {
		var origin = this._map.getPixelOrigin(),
		    tileSize = this._getTileSize();

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},
	_addTile: function (tilePoint) {
		var tilePos = this._getTilePos(tilePoint);

		var tile = {};//this._getTile();
		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
		this._loadTile(tile, tilePoint);
	},
	_resetTile: function (/*tile*/) {},
	_adjustTilePoint: function (tilePoint) {

		var limit = this._getWrapTileNum();

		if (!this.options.continuousWorld && !this.options.noWrap) {
			tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
		}

		if (this.options.tms) {
			tilePoint.y = limit.y - tilePoint.y - 1;
		}

		tilePoint.z = this._getZoomForUrl();
	},
	_getZoomForUrl: function () {

		var options = this.options,
		    zoom = this._map.getZoom();

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;
		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},
	_getWrapTileNum: function () {
		var crs = this._map.options.crs,
		    size = crs.getSize(this._map.getZoom());
		return size.divideBy(this._getTileSize())._floor();
	},
	getTileUrl: function (url, tilePoint) {
		return L.Util.template(url, L.extend({
			z: tilePoint.z,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},
	_loadTile: function (tile, tilePoint) {
		this._adjustTilePoint(tilePoint);
        
        this._loadTileAjax(this._url.concat(), tile, tilePoint);
	},
	_loadTileAjax: function (url, tile, tilePoint){
        if(url.length != 0){
		    tile.src = this.getTileUrl(url[0], tilePoint);
		    tile.ajax = $.ajax({
			    url: tile.src,
			    cache: CONFIG.LOADCOCOTILECACHE,
			    crossDomain : true,
			    success : L.Util.bind( this._tileLoaded  , this, url, tile, tilePoint),
			  //error   : L.Util.bind( this._tileLoaded_Error  , this, url, tile, tilePoint),
                complete: L.Util.bind( this._tileLoaded_Complete, this, url, tile, tilePoint)
		    });
        }
	},
	_tileLoaded : function(url, tile, tilePoint){
		if ( tile.ajax )
		{
			var lines = tile.ajax.responseText.split( "\n" );
			if ( lines.length > 0 )
			{

				var line = lines[ 0 ];
				var ids = line.split( ',' );

				for ( var i=0; i< ids.length; i ++ )
				{
					var tileId = ids[ i ];
					this._haveTiles[ tileId ] = true;
				}
			}
		}
	},
	_tileLoaded_Complete : function(url, tile, tilePoint){
		if ( tile.ajax )
		{
            var ret = false;
            if(url.length > 0){
                url.shift();
                if(url.length > 0){
                    this._loadTileAjax(url, tile, tilePoint);
                    ret = true;
                }
            }

            if(!ret){
			    tile.ajax = null;
            }
        }

        tile.loaded = true;
        var n = 0;
		for ( var id in this._tiles )
		{
            n++;
			var tile = this._tiles[ id ];
			if ( tile.ajax || !tile.loaded )
			{
				return;
			}
		}

		if ( this.options.onLoad ) this.options.onLoad( this._haveTiles );

        if(this.refreshTimerId_load){
            clearTimeout(this.refreshTimerId_load);
            this.refreshTimerId_load = null;
        }

        if(n == 0){
            return;
        }

        var that = this;
		this.refreshTimerId_load =  setTimeout(
            function(){
                that.refreshTimerId_load = null;
		        that.fire('load', { tileIds : that._haveTiles } );
            }
        , 100 );

    }
} );

/************************************************************************
 L.Class
 - GSI.Dialog
 ************************************************************************/
GSI.Dialog = L.Class.extend( {
	options : {
		containerClass : 'gsi_dialog',
		headerClass : 'gsi_dialog_header',
		contentClass : 'gsi_dialog_content',
		effect : null,
		top : 0,
		left : 0,
		width : 300,
		resizable : ""
	},
	_userResized : false,
	initialize : function( options )
	{
		options = L.setOptions(this, options);

		if ( !GSI.Dialog._dialogManager )GSI.Dialog._dialogManager = new GSI.DialogManager();

		GSI.Dialog._dialogManager.append( this );
		this.create();

		if ( options.visible )
			this.show();
	},
	isResizable : function()
	{
		return ( this.options.resizable && this.options.resizable != '' ? true : false );
	},
	createHeader : function()
	{
		return $('<span>').html('　　　　　　　' );
	},
	createContent : function()
	{
		return $( '<div>' ).html('　　　　　　　');
	},
	create : function()
	{
		if ( this.container ) return;
		this.container = $( '<div>' ).addClass( this.options.containerClass );
		this.headerFrame = $( '<div>' ).addClass( this.options.headerClass );
		this.contentFrame = $( '<div>' ).addClass( this.options.contentClass );

		this.closeBtn = $( '<a>' ).html( '×' ).attr({'href':'javascript:void(0);'}).addClass( 'closebtn' );

		this.headerTitle = $( '<div>' ).addClass( 'title' );
		this.headerFrame.append(this.headerTitle );
		this.headerFrame.append( this.closeBtn );
		this.headerTitle.append(this.createHeader() );

		this.contentFrame.append( this.createContent());

		this.container.append( this.headerFrame );
		this.container.append( this.contentFrame );

		$( document.body).append( this.container );

		this.container.draggable({
			delay : 100,
			scroll: false,
			handle : this.headerFrame,
			stop : L.bind( function() { GSI.Dialog._dialogManager.adjust( this ); }, this )
		})
		.on( 'mousedown', L.bind( this.onClick, this ) )
		.on( 'touchstart', L.bind( this.onClick, this ) );

		if ( this.options.width )
		{
			this.container.css( {width:this.options.width } );
		}
		this.closeBtn.click( L.bind( function(){ this.hide(true);}, this ) );
		this.container.hide();

		var left = this.options.left;
		if ( left == 'center' )
		{
			var screenSize = GSI.Utils.getScreenSize();
			left = Math.floor( (screenSize.w/2)-( this.options.width / 2 ) );
		}

		this.container .css( {
			left : left + 'px' ,
			top : this.options.top + 'px',
			width : this.options.width + 'px',
			"min-width" : "80px",
			height: 'auto'
		} );

		if ( this.isResizable() )
		{
			this.container.resizable({
				resize : L.bind( function() {
					this._onResize();
					this._userResized = true;
				},this ),
				handles: this.options.resizable
			});
		}
	},
	css : function( css )
	{
		if ( this.container ) this.container.css( css );
	},
	_onResize : function() {},
	addClass : function( className )
	{
		if ( this.container ) this.container.addClass( className );
	},
	removeClass : function( className )
	{
		if ( this.container ) this.container.removeClass( className );
	},
	show : function()
	{
		if ( !this.container ) this.create();

		GSI.Dialog._dialogManager.appendVisibleList( this );
		if ( this.options.effect )
		{
			this.container.show(this.options.effect.animation, this.options.effect.option,this.options.effect.speed,
				L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this )
				);
		}
		else
		{
			this.container.show(L.bind( function() { if ( this.afterShow ) this.afterShow(); }, this ));
		}
	},
	hide : function()
	{
		GSI.Dialog._dialogManager.removeVisibleList( this );

		if ( this.options.effect )
		{
			this.container.hide(this.options.effect.animation, this.options.effect.option,this.options.effect.speed);
		}
		else
		{
			this.container.hide();
		}
	},
	setMaxScrollHeight : function( maxHeight ) {},
	getVisible : function()
	{
		return( this.container && this.container.is(':visible') ? true : false );
	},
	onClick : function ()
	{
		GSI.Dialog._dialogManager.activate( this );
	}
} );

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.LayerTreeDialog
 ************************************************************************/
GSI.LayerTreeDialog = GSI.Dialog.extend( {

	options : {
		title : '情報リスト'
	},
	initialize : function(mapLayerList,cocoTileLayer, options)
	{
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

        this._current_id = this.path = this.options.currentPath;

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
	},
	createHeader : function()
	{
		this._titleFrame = $( '<div>' );
		this._titleTextFrame = $( '<div>' ).append( $('<span>').html(this.options.title ) );
		this._titleFrame.append( this._titleTextFrame);//.append(this._titleControlFrame);
		return this._titleFrame;
	},
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 11;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},
	createContent : function()
	{
		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();
		this.listFrame = $( '<div>' ).addClass( 'layertreedialog_ul_frame' );

		this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '読み込み中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );
		this._contentFrame.append( this._controlFrame );
		this._contentFrame.append( this.listFrame );

		return this._contentFrame;
	},
	_createControl : function()
	{
		var frame = $( '<div>' ).addClass( 'layertreedialog_control_frame' );

		this.onOffSwitch = new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );

		var onoffFrame = $( '<div>' );
		var label = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':this.onOffSwitch.getId()}).html( '表示範囲に絞込み' );

		this.onOffSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, this.onOffSwitch ) );

		onoffFrame.append( this.onOffSwitch.getElement() );
		onoffFrame.append( label );

		this._showAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全選択'   ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非選択' ).addClass( 'normalbutton showallbutton' );

		frame.append( this._hideAllButton );
		frame.append( this._showAllButton );
		frame.append( onoffFrame );

		this._showAllButton.click( L.bind( this._onShowAllClick, this ) );
		this._hideAllButton.click( L.bind( this._onHideAllClick, this ) );

		return frame;
	},
	onCocoTileCheckChange : function(onOffSwitch)
	{
        this.onOffSwitch.checked(onOffSwitch.checked());
        this._onCocoTileCheckChangeProc(onOffSwitch);
	},
	_onCocoTileCheckChange : function(onOffSwitch)
	{
        GSI.GLOBALS.viewListDialog.onCocoTileCheckChange(onOffSwitch);
		this._onCocoTileCheckChangeProc(onOffSwitch);
	},
	_onCocoTileCheckChangeProc : function(onOffSwitch)
	{
        if(onOffSwitch.checked()){
            if(!this._initializeList_ID_Mode_cocoTileLayer){
                var path = "";
                this._CurrentData_SRC    = new Array();
                this._CurrentData_SRC_ID = "";

                this._initializeList_ID_Mode = "cocoTileLayer";
                this._initializeList_IDProc_Data(this.tree, path);
                this._CurrentData_SRC_ID  = path;
                this._initializeList_IDProc_DataSrc();

                this._initializeList_ID_Mode_cocoTileLayer = true;
            }
            else{
		        this.cocoTileLayer.setVisible( onOffSwitch.checked() );
            }
        }
        else{
		    this.cocoTileLayer.setVisible( onOffSwitch.checked() );
        }
    },
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}

		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
			this.contentFrame.css( { 'height' : 'auto'} );
			this.container.css( { 'height' : 'auto'} );
		}
	},
	setTree : function( tree )
	{
		this.tree = tree;
		this.current = null;
		this.initializeList();
	},
	setTree_Init : function( tree, visibleLayers, visibleLayersHash)
	{

        this.visibleLayers     = visibleLayers;
        this.visibleLayersHash = visibleLayersHash;

        if(this.getVisible()){
            this.options.currentPath = this.path;
        }
        else{
            this.options.currentPath = null;
        }

        this.setTree(tree);
    },
	show : function()
	{
        this.initializeList();

		GSI.Dialog.prototype.show.call(this);
	},
	hide : function()
	{
		this._hideItemTooltip();
		if ( !CONFIG.LAYERTREEDIALOGKEEPCURRENT )
		{
			this.current = null;
			this.initializeList();
		}

		GSI.Dialog.prototype.hide.call(this);
	},
	onCOCOTileLoad : function(e)
	{
		if ( !this.tree ) return;

		this._initializeList( this.current ? this.current.entries : this.tree, true );
	},
	onCOCOTileHide : function(e )
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : this.tree, true );
	},
	initializeList : function()
	{
		if ( !this.contentFrame ) return;

		this._hideItemTooltip();

		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'layertreedialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}
		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();

		if ( this.options.currentPath )
		{
            this._initializeList_CurrentPath( this.options.currentPath );
		}
        else{
            this._initializeListProc();
        }

		if ( this.current && this.current.toggleall )
		{
			this._showAllButton.show();
			this._hideAllButton.show();
		}
		else
		{
			this._showAllButton.hide();
			this._hideAllButton.hide();
		}
	},
	_initializeList : function( list, liRefresh )
	{

		this._hideItemTooltip();

		if ( !list || list.length <= 0  )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( 'データがありません' );
			this.listContainer.append( li );
			return;
		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );

		var showAllButtonEnable = false;
		var hideAllButtonEnable = false;

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ).empty() : $( '<li>' )  );
			var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			a.data( { 'data' : item } );

			if ( item.entries || item.src)
			{
				this._makeFolder(li, a, item );
			}
			else
			{
				this._makeLayer(li, a, item );
			}

			li.append( a );
			this.listContainer.append( li );

			if ( (item.entries) || (this.cocoTileLayer.getVisible() && item.cocotile && !item.hasTile ) ) continue;

			if ( item._visibleInfo ) hideAllButtonEnable = true;
			else showAllButtonEnable = true;
		}

		if ( showAllButtonEnable )
		{
			this._showAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._showAllButton.addClass( 'disabled' );
		}

		if ( hideAllButtonEnable )
		{
			this._hideAllButton.removeClass( 'disabled' );
		}
		else
		{
			this._hideAllButton.addClass( 'disabled' );
		}
	},
	_initializeListProc : function()
	{
        if(this.visibleLayers && this.visibleLayers.length > 0){
            var fAppend = true;
		    for(var i = 0; i < this.visibleLayers.length; i++){
			    var l = this.visibleLayers[i];
                if(!l.info){
                    fAppend = false;
                    this._initializeList_VisibleLayers(l.id);
                }
            }

            if(fAppend){
		        for(var i = 0; i < this.visibleLayers.length; i++){
			        var l = this.visibleLayers[i];
                    if(l.info != null){
			            this.mapLayerList.append(l.info, true, l.hidden);
                    }
                }
                this.visibleLayers.length = 0;

                this._initializeListProc();
            }
        }
        else{
		    this.refreshTitle();
		    this._initializeList( this.current ? this.current.entries : this.tree );
		    if ( this._userResized ) this._onResize();
        }
    },
    _initializeList_VisibleLayers : function(id){
       var f = true;
       if(!this._VisibleLayers){
           this._VisibleLayers = new Array();
        }
        else{
           for(var n = 0; n < this._VisibleLayers.length; n++){
                if(this._VisibleLayers[n] == id){
                    f = false;
                    break;
                }
           }
        }
        if(f){
            this._VisibleLayers.push(id);
            this._initializeList_VisibleLayersReq(id);
        }
    },
    _initializeList_VisibleLayersReq : function(id){
        if(!this._CurrentData_SRC || this._CurrentData_SRC.length == 0){
            if(this._VisibleLayers.length > 0){
                this._VisibleLayers.shift();

                this.listContainer.empty();

                this._initializeList_ID_Mode    = "visible";
                this._initializeList_ID_Mode_ID = id;
                this._initializeList_ID(id);
            }
        }

        var that = this;
        if(this._VisibleLayers.length != 0){
            setTimeout(
                function(){
                    that._initializeList_VisibleLayersReq(that._VisibleLayers[0]);
                }
            , 100);
        }
    },
	_initializeList_CurrentPath : function(id)
	{
        this._initializeList_ID_Mode    = "current";
        this._initializeList_ID_Mode_ID = id;
        this._initializeList_ID(id);
    },
	_initializeList_ID : function(path)
	{
        if(!this.tree){
            return null;
        }

		var current = null;
		if ( !path || path == '' ) return null;

        this._CurrentData_SRC    = new Array();
        this._CurrentData_SRC_ID = "";

        current = this._initializeList_IDProc_Data(this.tree, path);
        if(current == null && this._CurrentData_SRC.length > 0){
            this._CurrentData_SRC_ID  = path;
            this._initializeList_IDProc_DataSrc();
        }
        else{
            this._initializeList_IDProc(current);
        }

		return current;
	},
	_initializeList_IDProc : function(current)
	{
        var fInit = true;
        if(this._initializeList_ID_Mode == "visible"){
            if(current == null){            
		        for(var i = 0; i < this.visibleLayers.length; i++){
			        var l = this.visibleLayers[i];
                    if(l.id == this._initializeList_ID_Mode_ID){
                        this.visibleLayers.splice(i, 1);
                        break;
                    }
                }
            }
        }
        if(this._initializeList_ID_Mode == "current"){
		    this.current             = current;
		    this.options.currentPath = null;
        }
        if(this._initializeList_ID_Mode == "cocoTileLayer"){
            this.cocoTileLayer.setVisible( true );
            fInit = false;
        }

        this._initializeList_ID_Mode = "";

        if(fInit){
            this._initializeListProc();
        }
    },
    _initializeList_IDProc_Data : function(tree, id)
    {
        var current = null;
        _DEV_DBG_HashLsPath = true;
        for(var i = 0; i < tree.length; i++){
            if(tree[i].src    && !tree[i].entries){
                if(!tree[i].src_ && tree[i].src.indexOf('./') == 0){
                    var path = tree[i].src_url.substring(0, tree[i].src_url.lastIndexOf('/'));
                    tree[i].src_ = true;
                    tree[i].src  = path + "/" + tree[i].src.substr(2);
                }
                this._CurrentData_SRC.push(tree[i]);
            }
            else if(tree[i].entries){
                current = this._initializeList_IDProc_Data(tree[i].entries, id);
                if(current != null){
                    break;
                }
            }
            else{
                if(tree[i].id == id){
                    if(tree[i].parent){
                        current = tree[i].parent;

                        this._CurrentData_SRC.length = 0;
                    }
                    else{
                        current = null;
                    }
                    break;
                }
            }
            
        }

        return current;
    },
    _initializeList_IDProc_DataSrc : function()
    {
        if(this._CurrentData_SRC.length > 0){
		    this.ajax      = $.ajax({
			    type     : "GET",
			    url      : this._CurrentData_SRC[0].src,
			    dataType : "text",
			    cache    : true,
			    success  : L.bind(this._initializeList_IDProc_DataSrc_Success, this),
			    error    : L.bind(this._initializeList_IDProc_DataSrc_Error  , this)
		    });
        }
        else{
            this._initializeList_IDProc(null);
        }
    },
	_initializeList_IDProc_DataSrc_Success : function(data)
	{
        if(this._CurrentData_SRC.length > 0){
    		var json = JSON.parse(data);
            if(json.layers){
                for(var i = 0; i < json.layers.length; i++){
                    json.layers[i].parent  = this._CurrentData_SRC[0];
                    json.layers[i].src_url = this._CurrentData_SRC[0].src_url;
                }
            }
            this._CurrentData_SRC[0].entries = json.layers;

            GSI.GLOBALS.layersJSON._initializeTree(this._CurrentData_SRC[0].entries, this._CurrentData_SRC[0]);

            current = this._initializeList_IDProc_Data(this._CurrentData_SRC[0].entries, this._CurrentData_SRC_ID);
            if(current == null){
                this._initializeList_IDProc_DataSrc_Error();
            }
            else{
                this._initializeList_IDProc(current);
            }
        }
    },
	_initializeList_IDProc_DataSrc_Error : function()
	{
        this._CurrentData_SRC.shift();
        this._initializeList_IDProc_DataSrc();
	},
	getCurrentPath : function()
	{
        var id = "";
        if(this._current_id){
            id = this._current_id;
        }

        return id;
	},
	setCurrentPath : function(path){
        this.options.currentPath = path;

    	this.setTree(this.tree);
    },
	refreshTitle : function()
	{
		this._titleTextFrame.empty();

		var num = 0;
		var target = this.current;
		while ( target )
		{
			if ( num > 0 )
			{
				var a = $( '<a>' ).html( target.title ).attr( { 'href' : 'javascript:void(0);' } );
				var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
				this._titleTextFrame.prepend( span );
				a.click(
					L.bind( this.onFolderClick, this, a )
				).data( { 'data' : target } );
				this._titleTextFrame.prepend( a );
			}
			else
			{
				var span= $( '<span>' ).html( target.title );
				this._titleTextFrame.prepend(span );
			}

			num++;
			target = target.parent;
		}

		if ( num > 0 )
		{
			var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
			this._titleTextFrame.prepend( span );
			var a = $( '<a>' ).html( this.options.title ).attr( { 'href' : 'javascript:void(0);' } );
			a.click(
				L.bind( this.onFolderClick, this, a )
			).data( { 'data' : null } );
			this._titleTextFrame.prepend( a );
		}
		else
		{
			var span = $( '<span>' ).html( this.options.title ); //.attr( { 'href' : 'javascript:void(0);' } );
			this._titleTextFrame.prepend( span );
		}
	},
	_makeFolder : function(li, a, item)
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
        if(item.title_sys && item.title_sys == CONFIG.layerBaseFolderSYS){
            cocoVisible = false;
        }

		var entriesCount = -1;
        if ( item.entries ){
            entriesCount = item.entries.length;
        }
		var isVisible = true;
		if ( cocoVisible )
		{
			var getCOCOTileVisibleCount = function(entries, isTop)
			{
				var counter = 0;
				var currentCounter = 0;

                if(entries){
				    for ( var i=0; i<entries.length; i++ )
				    {
					    var entry = entries[i];
					    if ( entry.entries )
					    {
						    var entriesCount = getCOCOTileVisibleCount( entry.entries, false );
						    counter += entriesCount.total;

						    if ( isTop && entriesCount.total > 0 )
						    {
							    currentCounter++;
						    }
					    }
					    else
					    {
						    if ( !entry.cocotile || entry.hasTile  )
						    {
							    currentCounter++;
							    counter++;
						    }
					    }
				    }
                }

				return { current: currentCounter, total: counter };
			};

			var count = getCOCOTileVisibleCount( item.entries, true );
			entriesCount = count.current;
			if ( count.total <= 0 ) isVisible = false;
		}

		// 子要素あり
		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var num = $( '<div>' ).addClass( 'num' ).append( $('<span>').html(entriesCount));
        if(entriesCount >= 0){
            a.addClass( 'folder' ).append( title ).click( L.bind( this.onFolderClick, this, a) );
        }
        else{
            a.addClass( 'folder' ).append( title ).click( L.bind( this.onFolderClick, this, a) );
        }

		if ( !isVisible )
		{
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}
	},
	_onLayerMouseEnter : function( a, item )
	{
		if ( !this._toolTipViewCounter )
		{
			this._toolTipViewCounter = 0;
		}
		this._toolTipViewCounter++;

		this._showItemTooltip( a, item );
	},
	_onLayerMouseLeave : function( a, item )
	{
		this._hideItemTooltip( a, item );
	},
	_makeToolTip : function( item )
	{
		var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}
		if ( legend )
			infoFrame.append( legend );        

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}
		if ( description )
			infoFrame.append( description );

		return infoFrame;
	},
	_showItemTooltip : function( a, item )
	{
		if ( item  )
		{
			if ( !this._curItem )
			{
				this._curItem = item;
			}
			else
			{
				if ( ( this._toolTipViewCounter % 2) == 0)
				{
					if ( this._curItem == item )
					{
						this._curItem = undefined;
						this._toolTipViewCounter = 0;
						return;
					}
					else
					{
						this._toolTipViewCounter--;
					}
				}
				this._curItem = item;
			}
		
			if ( !this._itemTooltip )
			{
				this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
				$( document.body ).append( this._itemTooltip );
			}

			var offset = a.offset();

			var screenSize = GSI.Utils.getScreenSize();
			var left = offset.left + parseInt( a.outerWidth(true) );
			var top = offset.top;

			if ( left > screenSize.w * 0.6 )
			{
				left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
				top = offset.top + a.outerHeight(true);
			}

			this._itemTooltip.css({
				left : left + 'px',
				top  : top + 'px'
			}).empty().append( this._makeToolTip( item ) );
			this._itemTooltip.stop().hide().fadeIn( 'normal' );

			if ( this._hideToolTipHandler )
			{
				$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
				$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
				this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
				this._hideToolTipHandler  = null;
			}

			this._hideToolTipHandler  = L.bind( function(event)
			{
				if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;

				var parents = $( event.target ).parents();

				for (var i=0; i<parents.length; i++ )
				{
					if ( parents[i] == this._itemTooltip[0] ) return;
				}

				this._hideItemTooltip();
				
				if ( event.type == "scroll" )
				{
					this._toolTipViewCounter = 0;
				}
			}, this );

			$( document.body ).bind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).bind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.bind( 'scroll', this._hideToolTipHandler );

		}
		else
		{
			this._hideItemTooltip();
		}
	},
	_hideItemTooltip : function( a, item )
	{
		if ( this._hideToolTipHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
			this._hideToolTipHandler  = null;
		}
		if ( this._itemTooltip )
		{
			this._itemTooltip.stop().hide();
		}
	},
	_makeLayer : function( li, a, item )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

		var target = this.current;

		var title = $( '<div>' ).addClass( 'title' ).html( item.title);
		var icon = item.iconUrl;
        if(icon){
		    title.css(
			    {
				    "background" : "url(" + icon + ") no-repeat 8px 50%",
				    "background-size" : "16px 16px"
			    }
		    );
        }
		if ( item._visibleInfo )
		{
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		a.addClass( 'item' ).append( title );

        // 詳細
		var descriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'description_btn' ).html("ｉ");
		li.append( descriptionBtn );
		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		if ( CONFIG.VISIBLELAYERTYPE )
		{
			var info = $( '<div>' ).addClass( 'info' );
			if ( item.cocotile )
			{
				var span = $( '<span>' ).addClass( 'cocotile' ).html('ココタイル' );
				info.append( span );
			}

			var typeTitle = CONFIG.LAYERTYPELIST[ item.layerType ];
			if ( !typeTitle ) typeTitle = { caption : item.layerType };
			var span = $( '<span>' ).html(typeTitle.caption ).addClass( 'layertype' );
			info.append( span );

			li.append( info );
		}
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
			a.removeClass( 'view' );
			a.addClass( 'nococotile' );
			li.addClass( 'nococotile' );
		}
		else
		{
			a.removeClass( 'nococotile' );
			li.removeClass( 'nococotile' );
		}

		a.click( L.bind( this.onItemClick, this, a) );
	},
	_onShowAllClick : function()
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;

		var showList = [];

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if (cocoVisible && item.cocotile && !item.hasTile ) continue;

			showList.push( item );
		}

		if ( showList.length > 0 )
			this.mapLayerList.appendList( showList );
	},
	_onHideAllClick : function()
	{
		var list = ( this.current ? this.current.entries : this.tree );
		if ( !list || list.length <= 0  ) return;

		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			if ( item.entries ) continue;
			if ( this.mapLayerList.exists( item ) )
			{
				this.mapLayerList.remove( item );
			}
		}
	},
	onFolderClick : function( a )
	{
		var item = a.data( 'data' );

        var f = true;
        if(item){
            if(item.src){
                if(!item.entries){
                    item.parent = this.current;
                    if(!item.src_ && item.src.indexOf('./') == 0){
                        var path = item.src_url.substring(0, item.src_url.lastIndexOf('/'));
                        item.src_ = true;
                        item.src  = path + "/" + item.src.substr(2);
                    }
                    this.ajax_item = item;
				    this.ajax      = $.ajax({
					    type     : "GET",
					    url      : item.src,
					    dataType : "text",
					    cache    : true,
					    success  : L.bind(this._onFolderClickLoad     , this),
					    error    : L.bind(this._onFolderClickLoadError, this)
				    });

                    f = false;
                }
            }
        }

        if(f){
            this.onFolderClick_Proc(item);
        }
	},
	onFolderClick_Proc : function( item )
	{
		    this.current = item;
		    this.listContainer.fadeOut( 'fast',
			    L.bind( function() {
				    this.listContainer.fadeIn('fast');
				    this.initializeList();
			    }, this )
		    );
    },
	_onFolderClickLoad : function(data)
	{
        var item = this.ajax_item;
        if(item){
    		var json = JSON.parse(data);
            if (json.layers){
                for(var i = 0; i < json.layers.length; i++){
                    json.layers[i].src_url = item.src_url;
                }
            }

            item.entries = json.layers;

            GSI.GLOBALS.layersJSON._initializeTree(item.entries, item);

            this.onFolderClick_Proc(item);
        }
    },
	_onFolderClickLoadError : function()
	{
		alert( 'レイヤー設定ファイルが読み込めませんでした。' );
	},
	onItemClick : function( a )
	{
		var target = this.current;
		var item = a.data( 'data' );

        this._current_id = item.id;

        if(target.title_sys && target.title_sys == CONFIG.layerBaseFolderSYS){
            var f = false;
            if(this.mapLayerList.exists(item)){
                f = true;
            }

            this._onHideAllClick();
            if(f){
                GSI.GLOBALS.map.removeLayer(GSI.GLOBALS.baseLayer);
            }
            else{
                GSI.GLOBALS.map.addLayer(GSI.GLOBALS.baseLayer);
                this.mapLayerList.append(item);
			    GSI.Utils.sendSelectedLayer(this._current_id);
            }
        }
        else{
		    if(!this.mapLayerList.exists(item))
		    { 
		    	this.mapLayerList.append(item);
    		    GSI.Utils.sendSelectedLayer(this._current_id);

		    }
		    else                               { this.mapLayerList.remove(item); }
        }
	},
	onMapLayerListChange : function()
	{
		this._initializeList( this.current ? this.current.entries : this.tree, true );
		this._toolTipViewCounter = 0;
	}
});

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.HelpDialog (ヘルプダイアログ管理)
 ************************************************************************/
GSI.HelpDialog = GSI.Dialog.extend( {
	options : {
		title: '<span id="title_help_dialog">？</span>メニュー（リンク）',
		width: '200px'
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	show : function ()
	{
		GSI.Dialog.prototype.show.call(this);
	},
	hide : function ()
	{
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this.frame = $( '<div>' ).attr( {
			'style': 'padding:5px'
		} );
		
		for (var i = 0; i < CONFIG.HELPMENU.length; i++) {
			// リンク
			this.LinkFrame = $( '<div>' ).attr( {
				'style': 'height:20px; vertical-align:middle'
			} );
			this.LinkFrameHr = $( '<hr>' );
			this.Link = $( '<a>' ).attr( {
				'href'	: CONFIG.HELPMENU[i].Link,
				'target': '_blank',
				'style'	: 'color:#000; text-decoration:none'
			} );
			
			this.LinkImg = $( '<img>' ).attr( {
				'src'	: CONFIG.HELPMENU[i].Img,
				'border': '0',
				'width'	: '24px',
				'height': '24px',
				'style'	: 'vertical-align:middle',
				'alt'	: CONFIG.HELPMENU[i].Moji
			} );
			
			this.LinkMoji = $( '<span>' ).attr( {
				'style': 'line-height:20px; position:relative; top:2px; left:5px'
			} ).html( CONFIG.HELPMENU[i].Moji );
			this.LinkFrame.append( this.LinkImg).append( this.LinkMoji );
			this.Link.append( this.LinkFrame );
			if(i < CONFIG.HELPMENU.length -1 ){
				this.frame.append( this.Link ).append( this.LinkFrameHr );
			}else{
				this.frame.append( this.Link );
			}
		}
		return this.frame;
	}
});


/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.MeasureDialog (計測ダイアログ管理)
 ************************************************************************/
GSI.MeasureDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.MEASURE.DIALOG_TITLE,
		width : "200px"
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	onMeasureChange : function(e)
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		this.distance.html( e.distance );
	},
	onMeasureTypeChange : function()
	{
		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}

		this.stopMeasure();
		this.startMeasure();
	},
	onMeasurePathCreated : function(event)
	{
		this.measureLayer = event.layer;
		this.map.addLayer( event.layer );

		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}

		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}

		this.startMeasure();
	},
	startMeasure : function()
	{
		if ( this.drawingItems )  return;

		this.mapMouse.setClickMoveEnable( false );
		this.drawingItems = L.featureGroup().addTo(this.map);

		if ( this.distanceRadio.is(":checked") )
		{
			this.startDistanceMeasure();
		}
		else if ( this.areaRadio.is(":checked") )
		{
			this.startAreaMeasure();
		}
		else if ( this.featureRadio.is(":checked") )
		{
			this.startFeatureMeasure();
		}
	},
	startDistanceMeasure : function()
	{
		if ( this.polyLin ) return;
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点を2回クリックして終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this.polyLine =  new GSI.Draw.Polyline(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				weight: 2,
				opacity: 1,
				fill: false,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showLength : true
		});

		this.polyLine.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polyLine.enable();
	},
	startAreaMeasure : function()
	{
		if ( this.polygon ) return;
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this.polygon =  new GSI.Draw.Polygon(this.map,{
			shapeOptions: {
				stroke: true,
				color: '#ee3333',
				fillColor : '#ee3333',
				fillOpacity : 0.4,
				weight: 2,
				opacity: 1,
				fill: true,
				clickable: true,
				dashArray : [3,3]
			},
			edit: { featureGroup: this.drawingItems },
			showArea : true,
			allowIntersection : false

		});

		this.polygon.on( 'measurechange',
			L.bind( this.onMeasureChange, this )
		);
		this.polygon.enable();
	},
	onLayerClick : function(layer, e)
	{
		var latLngs = layer.getLatLngs();
		var distance = 0;
		var area = 0;
		var isPolygon = false;
		var geometryType = '';

		try
		{
			geometryType = layer.toGeoJSON().geometry.type;
			isPolygon = ( geometryType == "Polygon" );
		}
		catch( e ) {}

		if ( geometryType == "MultiPolygon" ) return;

		if ( isPolygon )
		{
			// 面積
			area = L.GeometryUtil.geodesicArea(latLngs);

			var areaStr = '';

			if (area >= 1000000) {
				areaStr = (area  / 1000000).toFixed(3) + 'km&sup2;';
			} else {
				areaStr = Math.ceil(area) + 'm&sup2;';
			}

			this.distance.html( '面積:'+ areaStr );
		}
		else
		{
			//距離
			for ( var i=1; i<latLngs.length; i++ )
			{
				distance += latLngs[i-1].distanceTo(latLngs[i]);
			}

			var distanceStr = '';

			if (distance > 1000) {
				distanceStr = (distance  / 1000).toFixed(3) + 'km';
			} else {
				distanceStr = Math.ceil(distance) + 'm';
			}

			this.distance.html( '距離:' + distanceStr);
		}
		return true;
	},
	startFeatureMeasure : function()
	{
		this.measureLayer = L.featureGroup();
		this.rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:0.5,dashArray : [3,3]};

		this.map.eachLayer(
			L.bind( function(layer){

				// ポリゴン、ライン(layer._layersはマルチポリゴン判定)以外は無視
				if ( !layer.getBounds || !layer.getLatLngs || layer._layers || layer._noMeasure ) return;

				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
					layer.off( 'touchend', layer._measureClickHandler );
				}
				layer._measureClickHandler = L.bind( this.onLayerClick, this, layer );

				layer.on( 'click', layer._measureClickHandler );
				this.measureLayer.addLayer( L.rectangle(layer.getBounds(), this.rectStyle) );

			}, this )
		);
		//drawingItems;
		this.map.addLayer( this.measureLayer );
	},
	stopMeasure : function()
	{
		this.map.eachLayer(
			L.bind( function(layer){
				if ( layer._measureClickHandler )
				{
					layer.off( 'click', layer._measureClickHandler );
				}
			}, this )
		);

		if ( this.measureLayer )
		{
			this.map.removeLayer( this.measureLayer );
			this.measureLayer = null;
		}
		this.mapMouse.setClickMoveEnable( true );
		this.distance.html( '------' );
		if ( this.polyLine )
		{
			this.polyLine.disable();
			this.polyLine = null;
		}

		if ( this.polygon )
		{
			this.polygon.disable();
			this.polygon = null;
		}

		if ( this.drawingItems )
		{
			this.map.removeLayer( this.drawingItems );
			this.drawingItems = null;
		}
	},
	show : function ()
	{
		if ( !this._onMeasurePathCreated )
		{
			this._onMeasurePathCreated = L.bind( this.onMeasurePathCreated, this );
			this.map.on('draw:created', this._onMeasurePathCreated );
		}
		this.startMeasure();
		GSI.Dialog.prototype.show.call(this);
	},
	hide : function ()
	{
		if ( this._onMeasurePathCreated )
		{
			this.map.off('draw:created', this._onMeasurePathCreated );
			this._onMeasurePathCreated = null;
		}

		this.stopMeasure();
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this.frame = $( '<div>' );
		this.radioFrame = $( '<div>' );

		// 距離
		this.distanceRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_distance',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : true
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.distanceLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_distance' } ).append( this.distanceRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_DISTANCE_CAPTION ) );

		// 面積
		this.areaRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_area',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.areaLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_area' } ).append( this.areaRadio )
		.append( $( '<span>' ).html(GSI.TEXT.MEASURE.DIALOG_AREA_CAPTION) );

		// 図形
		this.featureRadio = $( '<input>' ).attr( {
			'id' : 'GSI_MeasureDialog_feature',
			'type' : 'radio',
			'name' : 'measure',
			'checked' : false
		} ).click( L.bind( this.onMeasureTypeChange, this ) );
		this.featureLabel = $( '<label>' ).attr( { 'for' : 'GSI_MeasureDialog_feature' } ).append( this.featureRadio )
		.append( $( '<span>' ).html( GSI.TEXT.MEASURE.DIALOG_OBJECT_CAPTION ) );

		this.radioFrame.addClass( 'gsi_measuredialog_radiofrane' )
			.append( this.distanceLabel )
			.append( this.areaLabel )
			.append( this.featureLabel );

		// 結果
		this.distance = $( '<div>' ).html( '------' ).addClass( 'gsi_measuredialog_result' );

		this.frame.append( this.radioFrame ).append( this.distance );

		return this.frame;
	}
});



/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.SakuzuDialog (作図ダイアログ管理)
 ************************************************************************/
GSI.SakuzuDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.SAKUZU.DIALOG_TITLE
	},
	initialize : function(map, sakuzuList, options)
	{
		this._map = map;
		this._sakuzuList = sakuzuList;

		this._sakuzuList.on( 'change', L.bind( function(){ this._refreshList(); }, this ) );
		this._sakuzuList.on( 'load', L.bind( this._onFileLoad, this ) );
		this._sakuzuList.on( 'startedit', L.bind( this._onStartEdit, this ) );
		this._sakuzuList.on( 'circlechange', L.bind( this._onCircleChange, this ) );
		this._sakuzuList.on( 'visiblechange', L.bind( this._onVisibleChange, this ) );
		this._sakuzuList.on( 'ready', L.bind( this._onSakuzuItemReady, this ) );

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	setMaxScrollHeight : function( maxHeight ){},
	createHeader : function()
	{
		this._title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this._title );
	},
	createContent : function()
	{
		this._sakuzuFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_frame' );
		return this._sakuzuFrame;
	},
	_createTopPanel : function()
	{
		// 初期画面
		if ( this._topPanel ) return;

		this._topPanel = $( '<div>' );

		this._topPanelToolBar = this._createTopPanelToolbar();
		this._topPanelList = this._createTopPanelList();
		this._topPanel.append( this._topPanelToolBar );
		this._topPanel.append( this._topPanelList );

		this._sakuzuFrame.append( this._topPanel );
	},
	_createTopPanelToolbar : function()
	{
		var frame =  $( "<div>" ).addClass( 'gsi_sakuzu_dialog_modeselect' );
		var btn = null;

		// ファイル
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_fileopen.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_LOAD}).css( { 'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, "file_load") );
		frame.append( btn );

		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_filesave.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_SAVE}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, "file_save") );
		frame.append( btn );

		frame.append( $('<img>').addClass( 'sep' ).attr({ 'src' : 'image/sakuzu/toolbar_sep.png'}).css(
			{ 'margin-left':'4px',  'margin-right':'5px', 'width':'2px', 'height': '26px'} ) );

		// ポイント
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_mark.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT) );
		frame.append( btn );

		// ポイント（マーカー）
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_markc.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLEMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT_CIRCLE) );
		frame.append( btn );

		// 線
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_line.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDLINE }).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.LINESTRING) );
		frame.append( btn );

		// ポリゴン
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_polygon.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDPOLY}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POLYGON) );
		frame.append( btn );

		// 円
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_circle.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDCIRCLE }).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.CIRCLE) );
		frame.append( btn );

		// ポイント(テキスト)
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_text.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDDIVMARKER}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.POINT_TEXT) );
		frame.append( btn );

		// フリーハンド
		btn = $( '<a>' ).attr({"href":"javascript:void(0);"}).append(
			$('<img>').attr({'src': 'image/sakuzu/icon_freehand.png','title' : GSI.TEXT.SAKUZU.DIALOG_TOOLTIP_ADDFREEHAND}).css( {'width' : '24px', 'height' : '24px' } )
		 ).click( L.bind( this._toolBtnClick, this, GSI.SakuzuListItem.FREEHAND) );
		frame.append( btn );

		frame.append( $('<div>').css( { clear:'both'} ) );

		return frame;
	},
	_createTopPanelList : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_list' );
		this._listTable = $( '<table>' ).css( { 'width' : '100%'} );
		this._listTBody = $( '<tbody>' );

		this._refreshList(true);
		this._listTable.append( this._listTBody );
		frame.append( this._listTable );

		return frame;
	},
	_onVisibleChange : function( event )
	{
		this._refreshList();
	},
	_refreshList : function()
	{
		this._listTBody.empty();

		this._sakuzuList.eachItems( L.bind( function( item ) {
			item._viewData = {};

			var tr = $( '<tr>' );
			var td = null;
			var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

			// 表示チェック
			var checkBox = $( '<input>' ).attr( { 'id': id, 'type' : 'checkbox', 'checked' : item.getVisible() } ).addClass( 'normalcheck' );
			checkBox.click( L.bind( function(checkBox,item){
				item.setVisible( checkBox.is( ':checked' ) );
			}, this, checkBox, item ) );

			item._viewData.checkbox = checkBox;

			var label = $( '<label>' ).attr( {'for': id} ).html( item.getTitle() );
			// 名称
			var title = $( '<div>' ).append( checkBox ).append( label )
				.css( { "word-break": "break-all"} )
				.addClass('folder');

			// レイヤー数
			var layerCount = item.getLayerCount();
			var num = $( '<span>' ).addClass( 'num' ).html( layerCount );

			td = $( '<td>' ).append( title ).css( { 'width' : '100%', "word-break": "break-all"} );
			tr.append( td );

			// ボタン類
			td = $( '<td>' ).css({"text-align":"right"}).append( num );
			tr.append( td );

			var buttonClassName = 'normalbutton sakuzubutton' + ( layerCount <= 0 ? ' disabled' : '' );
			var editBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_EDITBTN ).addClass(buttonClassName);
			td = $( '<td>' ).append( editBtn );
			tr.append( td );

			var clearBtn = $( '<a>' ).attr( {"href":"javascript:void(0);"} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_REMOVEBTN ).addClass(buttonClassName);
			td = $( '<td>' ).append( clearBtn );
			tr.append( td );
			this._listTBody.append( tr );

			editBtn.click( L.bind( this._onEditSakuzuItemClick, this, item ) );
			clearBtn.click( L.bind( this._clearLayer, this, item ) );
		}, this ) );
	},
	_clearLayer : function( item )
	{
		if ( item.getLayerCount() > 0 )
		{
			if ( !confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG ) ) return;
		}
		
		item.remove();
	},
	_toolBtnClick : function( btnId )
	{
		if ( btnId == 'file_load' )
		{
			this._showFileLoadPanel();
		}
		else if ( btnId == 'file_save' )
		{
			this._showFileSavePanel();
		}
		else
		{
			this._showEditPanel( btnId );
		}
	},
	_createFileLoadPanel : function()
	{
		// ファイル読込パネル
		if ( this._fileLoadPanel ) return;
		this._fileLoadPanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileloadpanel' ).hide();

		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_fileload' );

		if ( !GSI.Utils.hasFileAPI )
		{
			frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8) );
			var fileNameFrame = $( '<div>' );

			this._fileLoadNameInput = $( '<input>' ).attr( {'type':'text'} );
			this._fileLoadTextarea = $( '<textarea>' ).attr( {'wrap':'off'} );

			fileNameFrame.append( $('<span>').html( GSI.TEXT.SAKUZU.DIALOG_LOAD_FILENAMECAPTION ) );
			fileNameFrame.append( this._fileLoadNameInput );
			frame.append( fileNameFrame );
			frame.append( this._fileLoadTextarea );
		}
		else
		{
			frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT ) );
			this._fileLoadInput = $('<input>').attr( { type:"file"} );

			frame.append( this._fileLoadInput );
		}

		this._fileLoadPanel.append( frame );

		// OKCancel
		this._fileLoadOkCancelFrame = this._createFileLoadOkCancel();
		this._fileLoadPanel.append( this._fileLoadOkCancelFrame  );

		this._sakuzuFrame.append( this._fileLoadPanel );
	},

	_createFileLoadOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
		var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_OKBTN ).addClass( 'normalbutton' );
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_CANCELBTN ).addClass( 'normalbutton' );

		okBtn.click( L.bind( this._onFileLoadOkClick, this ) );
		cancelBtn.click( L.bind( this._onFileLoadCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_onFileLoadOkClick : function()
	{
		if ( this._fileLoadInput )
		{
			var files = this._fileLoadInput.prop( 'files' );
			if( !files ) files = this._fileLoadInput.attr( 'files' );

			if ( files && files.length > 0 )
			{
				this._sakuzuList.loadFromFile( files );
			}
			else
			{
				alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOFILE );
			}
		}
		else
		{
			var text = $.trim( this._fileLoadTextarea.val() );
			if ( text != '' )
			{
				var fileName = $.trim( this._fileLoadNameInput.val() );

				this._sakuzuList.loadFromText( text, fileName && fileName != '' ? fileName : null );
			}
			else
			{
				alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_NOTEXT );
			}
		}
	},
	_onFileLoad : function( event )
	{
		if ( event.error )
		{
			alert( GSI.TEXT.SAKUZU.DIALOG_LOAD_ERROR );
		}
		else
		{
			if ( this._fileLoadTextarea )
			{
				this._fileLoadTextarea.focus();
				this._fileLoadTextarea.val('');
				this._fileLoadNameInput.val( '' );
			}
			this._showTopPanel( this._fileLoadPanel );
		}
	},
	_onFileLoadCancelClick : function()
	{
		this._showTopPanel( this._fileLoadPanel );
	},
	_createFileSavePanel : function()
	{
		// ファイル保存パネル
		if ( this._fileSavePanel ) return;
		this._fileSavePanel = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesavepanel' ).hide();

		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filesave' );

		frame.append( $('<div>').addClass( 'message' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT) );
		frame.append( $('<div>').addClass( 'message2' ).html(GSI.TEXT.SAKUZU.DIALOG_SAVE_COMMENT2) );

		var selectFrame = $( '<div>' ).addClass( 'selectframe' );
		var id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;

		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"kml"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'KML形式' );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		id = 'GSI_SakuzuDialog_check' + GSI.Utils.getCurrentID() ;
		var radio = $( '<input>' ).attr( { id: id, type:"radio", name:"gsi_sakuzu_dialog_savetype", value:"geojson"} ).addClass( 'normalcheck' );
		var label = $( '<label>' ).attr( {'for': id} ).html( 'GeoJSON形式' );
		selectFrame.append( radio );
		selectFrame.append( label );

		radio.click( L.bind( this._onSaveTypeChange, this, radio ) );

		frame.append( selectFrame );

		this._fileSaveTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).css( { 'readonly': 'readonly' } );
		frame.append( this._fileSaveTextarea );

		this._fileSavePanel.append( frame );

		// OKCancel
		this._fileSaveOkCancelFrame = this._createFileSaveOkCancel();
		this._fileSavePanel.append( this._fileSaveOkCancelFrame  );

		this._sakuzuFrame.append( this._fileSavePanel );
	},
	_createFileSaveOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
		var okBtn = '';
		if (!GSI.Utils.hasFileAPI)
		{
			okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN_CLIPBOARD ).css( {width:"150px"} ).addClass( 'normalbutton' );
			this._fileSaveOkBtn = okBtn;
			this._initializeFileSaveCopy();
		}
		else
		{
			okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_OKBTN).css( {width:"140px"} ).addClass( 'normalbutton' );
			this._fileSaveOkBtn = okBtn;
			this._fileSaveOkBtn.click( L.bind( this._onFileSaveOkClick, this ) );
		}
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_SAVE_CANCELBTN ).css( {width:"70px"} ).addClass( 'normalbutton' );

		cancelBtn.click( L.bind( this._onFileSaveCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_initializeFileSaveCopy : function()
	{
		if ( !this._zeroClipboard  )
		{
			this._zeroClipboard = new ZeroClipboard(this._fileSaveOkBtn[0] );//.attr({ id: 'fe_text' })[0]);

			this._zeroClipboard.on( 'ready', L.bind( function() {

				this._zeroClipboard.on( 'beforecopy', L.bind( function() {
					this._zeroClipboard.setText(this._fileSaveTextarea.val());
					alert( 'クリップボードにコピーしました' );
				},this ) );

				this._zeroClipboard.on( 'aftercopy', L.bind( function() {
				},this ) );
			},this ));
		}
	},
	_onSaveTypeChange : function(radio)
	{
		this._fileSaveTextarea.focus();
		switch( radio.val() )
		{
			case 'kml':
				this._fileSaveTextarea.val( this._sakuzuList.toKML() );
				break;

			case 'geojson':
				this._fileSaveTextarea.val( this._sakuzuList.toGeoJSON() );
				break;
		}

		if ( this._fileSaveTextarea.val() != '' )
		{
			this._fileSaveOkBtn.removeClass( 'disabled' );
		}
		else
		{
			this._fileSaveOkBtn.addClass( 'disabled' );
		}
	},
	_onFileSaveOkClick : function()
	{
		if ( this._fileSaveTextarea.val() == '' ) return false;

		var ext = ".kml";
		var contentType = "application/vnd.google-earth.kml+xml";

		if ( this._fileSavePanel.find( "input[name=gsi_sakuzu_dialog_savetype]:checked" ).val() == 'geojson' )
		{
			ext = ".geojson";
			contentType = "application/json";
		}

		var fileName = 'gsi' + GSI.Utils.getTimeStampString() + ext;
		var blob = new Blob([this._fileSaveTextarea.val()], { "type" : contentType});

		if ( window.navigator.msSaveOrOpenBlob )
		{
			window.navigator.msSaveOrOpenBlob( blob, fileName );
		}
		else
		{
			window.URL = window.URL || window.webkitURL;
			this._fileSaveOkBtn.attr( {
					"download" :fileName,
					"href" : window.URL.createObjectURL(blob),
					"target" : "_blank"
				});
		}

		this._showTopPanel( this._fileSavePanel );
	},
	_onFileSaveCancelClick : function()
	{
		this._showTopPanel( this._fileSavePanel );
	},
	_createEditPanel :function()
	{
		// 編集パネル
		if ( this._editPanel ) return;

		this._editPanel = $( '<div>' ).hide();
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_edit' );

		// ポイント編集
		this._pointEditFrame = this._createPointEditFrame();
		frame.append( this._pointEditFrame  );

		// 線編集
		this._lineEditFrame = this._createLineEditFrame();
		frame.append( this._lineEditFrame  );

		// 塗りつぶし編集
		this._fillEditFrame = this._createFillEditFrame();
		frame.append( this._fillEditFrame  );

		// 円編集
		this._circleEditFrame = this._createCircleEditFrame();
		frame.append( this._circleEditFrame  );

		// 情報編集
		this._infoEditFrame = this._createInfoEditFrame();
		frame.append( this._infoEditFrame  );

		this._editRemoveBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVEBTN  ).addClass( 'removebtn' ).click( L.bind( this.onEditRemoveClick, this ) );

		this._editRemoveBtnFrame = $( '<div>' ).addClass( "gsi_sakuzu_dialog_edit_removeframe" ).append( this._editRemoveBtn );
		frame.append( this._editRemoveBtnFrame );
		this._editPanel.append( frame );

		// OKCancel
		this._editOkCancelFrame = this._createEditOkCancel();
		this._editPanel.append( this._editOkCancelFrame  );

		this._sakuzuFrame.append( this._editPanel );
	},
	_createEditOkCancel : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );

		var okBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).addClass( 'normalbutton' );
		var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN  ).addClass( 'normalbutton' );

		this._editOkBtn = okBtn;
		okBtn.click( L.bind( this._onEditOkClick, this ) );
		cancelBtn.click( L.bind( this.onEditCancelClick, this ) );

		frame.append( okBtn ).append( cancelBtn );

		return frame;
	},
	_makeEditInfo : function()
	{
		var result = {
			title : this._titleInput.val(),
			description : null,
			table: null
		};

		if ( this._infoFreeWordTextarea.is( ':visible' ) )
		{
			result.description = this._infoFreeWordTextarea.val();
		}
		else
		{
			result.table = [];
			var keyTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
			var valueTextAreaList = this._infoTableTbody.find( "textarea[name=info_table_value]" );

			for ( var i=0;i<keyTextAreaList.length; i++ )
			{
				var item ={
					key : $( keyTextAreaList[i]).val(),
					value : $( valueTextAreaList[i]).val()
				};
				if ( item.key != '' )
					result.table.push( item);
			}
		}
		return result;
	},
	_onEditOkClick :function() {
		this._clearPointEditTextareaCheckTimer();

		if ( this._editingTarget && !this._editingTarget.isReady() ) return;

		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			this._editingTarget.setEditingInfo(this._makeEditInfo());

			editMode = this._editingTarget.editMode;
			this._editingTarget.editFinish();
			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._editingTarget = null;
			}
		}

		if ( editMode != GSI.SakuzuListItem.EDIT )
		{
			this._editPanel.fadeOut( 'normal',
				L.bind(
				function()
				{
					this._startCreate( this._currentCreateId );
					this._editPanel.fadeIn( 'normal' );
				},
				this )
			);
		}
		else
		{
			this._showSelectEditTargetPanel( null, this._editPanel );
		}
	},
	onEditCancelClick :function() {
		this._clearPointEditTextareaCheckTimer();

		if ( this._editingTarget && this._editingTarget.isReady() )
		{
			if ( this._editingTarget.editMode != GSI.SakuzuListItem.EDIT )
			{
				if ( !window.confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG) ) return;
			}
		}

		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			editMode = this._editingTarget.editMode;
			this._editingTarget.editCancel();
			if ( editMode != GSI.SakuzuListItem.EDIT )
			{
				this._editingTarget = null;
			}
		}
		GSI.GLOBALS.sakuzuList._defaultIcon.url = CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON;
		GSI.GLOBALS.sakuzuList._defaultIcon._iconScale = CONFIG.SAKUZU.SYMBOL.ICON_SCALE;

		if ( editMode != GSI.SakuzuListItem.EDIT )
		{
			this._showTopPanel( this._editPanel );
		}
		else
		{
			this._showSelectEditTargetPanel( null, this._editPanel );
		}
	},
	onEditRemoveClick :function() {
		var editMode = GSI.SakuzuListItem.NONE;
		if ( this._editingTarget )
		{
			editMode = this._editingTarget.editMode;
			if ( editMode == GSI.SakuzuListItem.EDIT )
			{
				if ( !confirm( GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG ) ) return;

				this._editingTarget.removeEditObject();
				this._showSelectEditTargetPanel( null, this._editPanel );
			}
		}
	},
	_createPointEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit' );

		this._pointEditMarkerFrame = $( '<div>' );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );

		this._pointIconImage = $( '<img>');

		var tr = $( '<tr>' );
		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( 'アイコン:' ) );
		tr.append( $( '<td>' ).append( this._pointIconImage ) );
		tr.append( $( '<td>' ).css( {'white-space':'nowrap'} ).html( '&nbsp;&nbsp;拡大率:' ) );

		this._pointIconSizeSelect = $( '<select>' );
		this._pointIconSizeSelect.append( $( '<option>' ).html("0.5").val("0.5" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("1.0").val("1.0" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("1.5").val("1.5" ) );
		this._pointIconSizeSelect.append( $( '<option>' ).html("2.0").val("2.0" ) );

		this._pointIconSizeSelect[0].selectedIndex = 1;
		this._pointIconSizeSelect.on( 'change',  L.bind( this._onPointIconSizeChange, this ) );

		tr.append( $( '<td>' ).append( this._pointIconSizeSelect ) );

		tbody.append( tr );
		table.append( tbody );

		this._pointEditMarkerFrame .append( table );
		frame.append( this._pointEditMarkerFrame  );

		this._pointEditTextFrame  = $( '<div>' );
		this._pointEditTextFrame .append( $( '<div>' ).addClass( "gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG ));

		this._pointEditTextArea = $( '<textarea>' )
			.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT} )
			.addClass( 'gsi_sakuzu_dialog_pointedit_textarea' );
		this._pointEditTextFrame .append( this._pointEditTextArea);
		frame.append( this._pointEditTextFrame  );

		this._pointEditTextArea
			.on( 'focus', L.bind( function(){
				if ( !this._pointEditTextareaCheckTimer )
				{
					this._pointEditTextareaCheckTimer = setInterval(
						L.bind( function() {
							this._onPointIconHTMLChange();
						}, this )
					, 100);
				}
			}, this ) )
			.on( 'blur', L.bind( function(){
				this._clearPointEditTextareaCheckTimer();
				this._onPointIconHTMLChange();
			}, this ) );

		var iconList = [];

		for ( var i=0; i<CONFIG.SAKUZU.SYMBOL.FILES.length; i++ )
		{
			iconList.push( {
				url : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.FILES[i],
				size : CONFIG.SAKUZU.SYMBOL.ICONSIZE,
				anchor : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
			} );
		}

		this._pointIconSelector = new GSI.IconSelector( this._pointIconImage, iconList );
		this._pointIconSelector.on( 'select', L.bind( this._onPointIconSelect, this ) );

		return frame;
	},
	_clearPointEditTextareaCheckTimer : function()
	{
		if ( this._pointEditTextareaCheckTimer )
		{
			clearTimeout( this._pointEditTextareaCheckTimer );
			this._pointEditTextareaCheckTimer = null;
		}
	},
	_refreshEditingIcon : function( selectedIcon )
	{
		var iconScale = parseFloat( this._pointIconSizeSelect.val() );
		var iconSize = null;
		var iconAnchor = null;

		if ( selectedIcon )
		{
			iconSize = [
				Math.floor( selectedIcon.size[0] * iconScale ),
				Math.floor( selectedIcon.size[1] * iconScale )
			];
			iconAnchor = [
				Math.floor( selectedIcon.anchor[0] * iconScale ),
				Math.floor( selectedIcon.anchor[1] * iconScale )
			];
		}

		var iconInfo = {
			iconUrl : ( selectedIcon ? selectedIcon.url : null ),
			iconSize : iconSize,
			iconAnchor : iconAnchor,
			_iconScale: iconScale
		};
		this._refreshEditing( { _iconInfo: iconInfo });
		if( iconInfo.iconUrl != null )
		{
			GSI.GLOBALS.sakuzuList._defaultIcon.url = iconInfo.iconUrl;
			GSI.GLOBALS.sakuzuList._defaultIcon._iconScale = iconInfo._iconScale;

			var nPos = iconInfo.iconUrl.lastIndexOf( "/" );
			if( nPos != -1 )
			{
				var sFileName = iconInfo.iconUrl.substr( nPos + 1 );
				CONFIG.SAKUZU.SYMBOL.DEFAULTICON = sFileName;
			}
		}
	},
	_refreshEditingIconHTML : function( html )
	{
		this._refreshEditing( { _iconInfo: { html : html } });
	},
	_onPointIconHTMLChange : function()
	{
		this._refreshEditingIconHTML( this._pointEditTextArea.val() );
	},
	_onPointIconSizeChange : function()
	{
		var selectedIcon = this._pointIconSelector.selectedIcon;
		CONFIG.SAKUZU.SYMBOL.ICON_SCALE = parseFloat( this._pointIconSizeSelect.val() );
		this._refreshEditingIcon( selectedIcon );
	},
	_onPointIconSelect : function(event)
	{
		this._refreshEditingIcon( event.selectedIcon );
	},
	_createLineEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_lineedit' );
		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );
		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );

		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '線幅:' ) );

		this._lineWeightSelect = $( '<select>' );
		this._lineWeightSelect.append ( $('<option>').html("1px").val("1") );
		this._lineWeightSelect.append ( $('<option>').html("3px").val("3") );
		this._lineWeightSelect.append ( $('<option>').html("5px").val("5") );
		this._lineWeightSelect.append ( $('<option>').html("10px").val("10") );
		this._lineWeightSelect.append ( $('<option>').html("15px").val("15") );
		this._lineWeightSelect.append ( $('<option>').html("25px").val("25") );
		this._lineWeightSelect.change( L.bind( function(){
			this._refreshEditing( { weight:this._lineWeightSelect.val() });
		}, this ) );

		tr.append( $( '<td>' ).append( this._lineWeightSelect ) );
		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '&nbsp;&nbsp;線色:' ) );

		var id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;

		this._lineColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this._lineColorSelector.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			onChangeColor: L.bind( function( color ){
				this._lineColorSelector.css({ 'background' : color });
				this._refreshEditing( { color:color });
			}, this )
		});

		tr.append( $( '<td>' ).append( this._lineColorSelector  ) );

		tbody.append(tr );
		table.append( tbody );
		editFrame.append( table );

		// 透明度
		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );

		this._lineOpacityTextArea = $( '<div>' ).css({"white-space":"nowrap"});
		this._lineOpacityTextArea.text('線の透過率:0%');
		tr2.append( $( '<td>' ).css( { 'width':'120px' }).append( this._lineOpacityTextArea ) );

		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );

		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this._lineOpacitySlider.slider( 'value' );
			var opacityPercentage = opacity;
			this._lineOpacityTextArea.text('線の透過率:'+opacityPercentage+'%');
			opacity = 1 - ( opacity / 100 );
			this._refreshEditing( { opacity:opacity });
		}, this );

		this._lineOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);

		td2.append( this._lineOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );

		frame.append( editFrame );

		return frame;
	},
	_createFillEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_filledit' );
		var editFrame = $( '<div>' ).css( { 'vertical-align' : 'middle'} );
		var table = $( '<table>' );
		var tr = $( '<tr>' );
		var id = 'GSI_SakuzuDialog_fillColor_' + GSI.Utils.getCurrentID() ;

		tr.append( $( '<td>' ).css({"white-space":"nowrap"}).html( '塗潰し色:' ) );
		this._fillColorSelector = $( '<div>' ).attr({id:id}).css( {"background":'#000'} ).html( '　　' ).addClass( 'color_select' );
		this._fillColorSelector.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			onChangeColor: L.bind( function( color ){
				this._fillColorSelector.css({ 'background' : color });
				this._refreshEditing( { fillColor:color });
			}, this )
		});
		tr.append( $( '<td>' ).append(this._fillColorSelector) );

		table.append(tr );
		editFrame.append( table );

		// 透明度
		var table2 = $( '<table>' );
		var tbody2 = $( '<tbody>' );
		var tr2 = $( '<tr>' );

		this._fillOpacityTextArea = $( '<div>' ).css({"white-space":"nowrap"});
		this._fillOpacityTextArea.text('塗潰しの透過率:0%');
		tr2.append( $( '<td>' ).css( { 'width':'150px' }).append( this._fillOpacityTextArea ) );

		var td2 = $( '<td>' ).css( { 'width':'150px',"padding":"4px 0 4px 8px"} );

		var sliderChangeHandler = L.bind( function(opacitySlider) {
			opacity = this._fillOpacitySlider.slider( 'value' );
			var opacityPercentage = opacity;
			this._fillOpacityTextArea.text('塗潰しの透過率:'+opacityPercentage+'%');
			opacity = 1 - ( opacity / 100 );
			this._refreshEditing( { fillOpacity:opacity });
		}, this );

		this._fillOpacitySlider = $( '<div>' ).slider(
			{
				range: "min",min: 0,max: 100, value: 0,
				"slide" : sliderChangeHandler,
				"change" : sliderChangeHandler,
				"stop" : sliderChangeHandler
			}
		);

		td2.append( this._fillOpacitySlider );
		tr2.append ( td2 );

		tbody2.append(tr2 );
		table2.append(tbody2 );

		editFrame.append( table2 );

		frame.append( editFrame );

		return frame;
	},
	_createCircleEditFrame : function()
	{
		var frame = $( '<div>' );
		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		var td = null;

		td = $( '<td>' ).html('半径:').css( { "white-space":"nowrap"} );
		tr.append( td );

		td = $( '<td>' );
		this._circleRadiusInput = $( '<input>' ).attr( { 'type':'text' } ).addClass( 'circle_input');
		this._circleRadiusChangeHandler = L.bind( this._onCircleRadiusChange,this);
		this._circleRadiusInput.on( "keyup", this._circleRadiusChangeHandler );
		this._circleRadiusInput.on( "blur", this._circleRadiusChangeHandler );

		td.append( this._circleRadiusInput );
		tr.append( td );

		td = $( '<td>' );
		this._circleRadiusUnitSelect = $( '<select>' );
        this._circleRadiusUnitSelect.append ( $('<option>').html("px").val("px") );
    	this._circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
	    this._circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

		this._circleRadiusUnitChangeHandler = L.bind( this._onCircleRadiusUnitChange,this);
		this._circleRadiusUnitSelect.on( "change", this._circleRadiusUnitChangeHandler);

		td.append( this._circleRadiusUnitSelect );
		tr.append( td );

		tbody.append( tr);
		table.append( tbody );
		frame.append( table );

		return frame;
	},
	_onCircleChange : function( event )
	{
        var vLatLng = event.latlng;
        var vRadius = event.radius;
        var vUnit   = event.unit;

        if(this.id == GSI.SakuzuListItem.POINT_CIRCLE){
            this._circleRadiusInput.val(parseInt(vRadius, 10));
        }
        else{
		    this._circleRadiusInput.val(vRadius);
		    this._circleRadiusUnitSelect.val(vUnit);
		    this._onCircleRadiusChange();
        }
	},
	_onCircleRadiusUnitChange : function()
	{
		var radius = this._circleRadiusInput.val();
		if( this._circleRadiusUnitSelect.val() == 'km' )
		{
			radius /= 1000;
            radius = radius.toFixed(4);
		}
		else
		{
			radius *= 1000;
			radius = radius.toFixed(1);
		}
		
		this._circleRadiusInput.val(radius);
		radius = parseFloat( radius );
		this._circleRadiusInput.val( radius );
	},
	_onCircleRadiusChange : function()
	{
		var radius = this._circleRadiusInput.val();

		if(radius.match(/^[0-9]+\.[0-9]+$/) || radius.match(/^[0-9]+$/))
		{
			radius = parseFloat( radius );
			if( this._circleRadiusUnitSelect.val() == 'km' )
			{
				radius *= 1000;
			}
			
            radius = radius.toFixed(1);
			this._refreshEditing( { radius: parseFloat(radius) });
		}
	},
	_createInfoEditFrame : function()
	{
		var frame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_infoedit' );
		var table = $( '<table>' ).css( { width:'100%'} );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );

		tr.append( $( '<td>' ).css( { 'white-space':'nowrap'} ).html('名称:') );
		var td = $( '<td>' );

		this._titleInput = $( '<input>' ).addClass( 'inputtext').attr({'type':'text', 'placeholder':'(例:A図書館)'}).css( { width:'200px'} );
		td.append( this._titleInput );
		tr.append( td );

		tbody.append(tr );
		table.append( tbody );
		frame.append( table );

		// 情報
		this._toggleInfoBtn = $( '<a>' ).html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN).attr( { 'href' : 'javascript:void(0);' } ).addClass( 'toggleinfobtn' )
			.click( L.bind( function(){

			if ( this._infoFreeWordTextarea.is( ':visible' ) )
			{
				this._infoFreeWordTextarea.fadeOut( 'fast', L.bind( function(){
					this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
					this._infoTable.fadeIn('fast');
				}, this ) );
			}
			else
			{
				this._infoTable.fadeOut( 'fast', L.bind( function(){
					this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
					var description =  this._infoTableToFreeWordText();
					this._infoFreeWordTextarea.focus();
					if ( description != '' ) this._infoFreeWordTextarea.val(description );
					this._infoFreeWordTextarea.fadeIn('fast');
				}, this ) );
			}

		}, this ) );

		frame.append( this._toggleInfoBtn );

		this._infoTable = $( '<table>' ).attr({border:0}).css( { width:'100%'} );
		var tbody = $( '<tbody>' );

		this._infoTableTbody = tbody;
		this._infoTable.append( tbody );

		frame.append( this._infoTable );

		this._infoFreeWordTextarea = $( '<textarea>' ).attr( {'wrap':'off'} ).addClass( 'inputtextarea').css( { height:'100px','width' : '100%', "margin-top": "2px" } ).hide();
		frame.append( this._infoFreeWordTextarea );

		return frame;
	},
	_createSelectEditTargetPanel : function(item)
	{
		if ( !this._selectEditTargetPanel )
		{
			this._selectEditTargetPanel = $( '<div>' ).addClass('gsi_sakuzu_dialog_selecttarget_panel').hide();

			var title = $( '<div>' ).addClass('title');
			var message = $( '<div>' ).html( '編集するオブジェクトを選択してください').addClass('message');
			var btnFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_okcancel' );
			var cancelBtn = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).html( '編集終了' ).addClass( 'normalbutton' );

			cancelBtn.click( L.bind( this._onSelectEditTargetCancelClick, this ) );
			btnFrame.append( cancelBtn );
			this._selectEditTargetPanel.append( title );
			this._selectEditTargetPanel.append( message );
			this._selectEditTargetPanel.append( btnFrame );

			this._sakuzuFrame.append( this._selectEditTargetPanel );
		}
		this._selectEditTargetPanel.find( '.title' ).html( item.getTitle() );
	},
	_onSelectEditTargetCancelClick : function()
	{
		if ( this._editingTarget )
		{
			this._editingTarget.editSelectFinish();
			this._editingTarget = null;
		}

		this._showTopPanel(this._selectEditTargetPanel);
	},
	setTitle : function(title)
	{
		this._title .html( title );
	},
	hide : function ()
	{
		if ( this._editingTarget )
		{
			if( !confirm(GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG) ) return;
			this._editingTarget.editSelectFinish();
			this._editingTarget = null;
		}
		this._clearPointEditTextareaCheckTimer();

		GSI.Dialog.prototype.hide.call(this);
	},
	show : function ()
	{
		if ( this._selectEditTargetPanel ) this._selectEditTargetPanel.hide();
		if ( this._fileLoadPanel ) this._fileLoadPanel.hide();
		if ( this._fileSavePanel ) this._fileSavePanel.hide();
		if ( this._editPanel ) this._editPanel.hide();

		this._showTopPanel();
		GSI.Dialog.prototype.show.call(this);
	},
	_showTopPanel : function( beforePanel )
	{
		this._createTopPanel();

		this.container .css( { height: 'auto'} );
		if ( beforePanel )
		{
			beforePanel.fadeOut( 'normal', L.bind( function() {
				this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
				this._topPanel.fadeIn( 'fast' );
			}, this ) );
		}
		else
		{
			this.setTitle( GSI.TEXT.SAKUZU.DIALOG_TITLE );
			this._topPanel.show();
		}
	},
	_onEditSakuzuItemClick : function( item )
	{
		this._showSelectEditTargetPanel(item);
	},
	_showSelectEditTargetPanel : function( item, beforePanel )
	{
		this._createSelectEditTargetPanel(item ? item : this._editingTarget);

		if ( !beforePanel ) beforePanel = this._topPanel;

		this.container .css( { height: 'auto'} );
		beforePanel.fadeOut( 'normal', L.bind( function(item) {

			if ( item ) this._startSelectEditTarget(item);
			this._selectEditTargetPanel.fadeIn( 'normal' );

		}, this, item ) );
	},
	_initEditFrame : function( id )
	{
        this.id = id;
		this._pointEditFrame[ id== GSI.SakuzuListItem.POINT || id== GSI.SakuzuListItem.POINT_TEXT || id == GSI.SakuzuListItem.MULTIPOINT ? 'show' : 'hide' ]();
		this._lineEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.LINESTRING || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE || id== GSI.SakuzuListItem.FREEHAND ? 'show' : 'hide' ]();
		this._fillEditFrame[ id == GSI.SakuzuListItem.MULTILINESTRING || id == GSI.SakuzuListItem.MULTIPOLYGON || id== GSI.SakuzuListItem.POLYGON || id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE ? 'show' : 'hide' ]();
		this._circleEditFrame[ id== GSI.SakuzuListItem.CIRCLE || id== GSI.SakuzuListItem.POINT_CIRCLE ? 'show' : 'hide' ]();
	},
	_showEditPanel : function( id )
	{
        this.id = id;
		this._createEditPanel();
		this._initEditFrame(id);
		this._infoEditFrame.show();

		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function(id) {

			this._startCreate(id);
			this._editPanel.fadeIn( 'normal' );

		}, this, id ) );
	},
	_startSelectEditTarget : function( item )
	{
		this._editingTarget = item;
		this._editingTarget.startSelectTarget();
	},
	_onStartEdit : function( event )
	{
		if ( this._editingTarget )
		{
			this._createEditPanel();
			this._initEditFrame(event.itemType);
			this._infoEditFrame.show();

			this.container .css( { height: 'auto'} );
			this._selectEditTargetPanel.fadeOut( 'normal', L.bind( function(event) {

				this._startEdit(event.itemType, event.layer);
				this._editPanel.fadeIn( 'normal' );

			}, this, event ) );
		}
	},
	_setControlStyle : function( style )
	{
		if ( !style ) return;

		// ポイント
		if ( style.icon )
		{
			if ( style.icon.options.html || style.icon.options.html == '' )
			{
				this._pointEditTextArea.val( style.icon.options.html );
				this._pointEditMarkerFrame.hide();
				this._pointEditTextFrame.show();
			}
			else
			{
				this._pointIconImage.attr( { src: style.icon.options.iconUrl } );
				this._pointIconSelector.setSelectedIcon(  style.icon.options.iconUrl );
				this._pointIconSizeSelect.val( parseFloat( style.icon.options._iconScale ).toFixed(1) );
				this._pointEditTextFrame.hide();
				this._pointEditMarkerFrame.show();
			}
		}

		// 線
		if ( style.color )
		{
			this._lineWeightSelect.val( style.weight );
			this._lineColorSelector.css( { background:style.color } );//.ColorPickerSetColor(style.color);
			var opacity = style.opacity;
			opacity = Math.round( ( 1-opacity ) * 100 );
			this._lineOpacitySlider.slider( "value", opacity );
		}

		// 塗りつぶし
		if ( style.fillColor )
		{
			this._fillColorSelector.css( { background:style.fillColor } );//.ColorPickerSetColor(style.fillColor);
			var opacity = style.fillOpacity;
			opacity = Math.round( ( 1-opacity ) * 100 );
			this._fillOpacitySlider.slider( "value", opacity );
		}
		
        this._circleRadiusUnitSelect.children('option').remove();

		// 円
        if(this.id == GSI.SakuzuListItem.POINT_CIRCLE){
            this._circleRadiusUnitSelect.append ( $('<option>').html("px").val("px") );
            this._circleRadiusUnitSelect.val("px");

            if ( this._editingTarget.editMode == GSI.SakuzuListItem.EDIT ){
                this._circleRadiusInput.val(style.radius);
            }
            else{
                this._circleRadiusInput.val("");
            }
        }
        else{
    	    this._circleRadiusUnitSelect.append ( $('<option>').html("m").val("m") );
	        this._circleRadiusUnitSelect.append ( $('<option>').html("km").val("km") );

		    if ( style.radius || style.radius == 0 )
		    {
                try
                {
    			    if ( style.radius  > 1000 )
    			    {
                        this._circleRadiusInput.val( ( style.radius / 1000 ).toFixed(4) );
                        this._circleRadiusUnitSelect.val('km');
                    }
                    else
                    {
                    
                        this._circleRadiusInput.val( style.radius.toFixed(1) );
                        this._circleRadiusUnitSelect.val('m');
                    }
                }
                catch( e ){}
            }
            else
            {
                this._circleRadiusInput.val( '' );
                this._circleRadiusUnitSelect.val('m');
            }
        }
	},
	_createEditInfoTableLine : function( no, key, value )
	{
		tr = $( '<tr>' );
		td = $( '<td>' ).css( { 'width' : '30%', 'vertical-align':'middle' } );

		var nameTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.attr( { name: 'info_table_key', 'placeholder':'(例:営業時間)', rows:1} )
			.css( { 'display':'block','width' : '100%' } ).val( key ? key : '' );
		td.append( nameTextarea );
		tr.append( td );
		td = $( '<td>' );

		var valueTextarea = $( '<textarea>' ).addClass( 'inputtextarea')
			.css({'display':'block',width:"100%"})
			.attr( { name: 'info_table_value', 'placeholder':'(例:10時～18時)',rows:1} ).val( value ? value : '' );
		td.append( valueTextarea );
		tr.append( td );
			
		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );

		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この行を削除" src="image/sakuzu/icon_remove.png">' )
			.click( L.bind(
				function(tr){
					var no = 0;
					var trList = this._infoTableTbody.find( 'tr' );
					for ( var i=0; i<trList.length; i++ )
					{
						if ( trList[i] == tr[0] )
						{
							no = i;
							break;
						}
					}
					if ( no == 1 && trList.length <= 2 )
					{
						tr.find( 'textarea' ).val("" );
					}
					else
					{
						tr.fadeOut( 'fast', function(){
							$(this).remove();
						} );
					}
				},
			this, tr ) );

		td.append( btn );
		tr.append( td );

		td = $( '<td>' ).css( { width:"24px","text-align":"center"} );
		var btn = $( '<a>' ).attr( { 'href' : 'javascript:void(0);'} ).addClass( "btn" )
			.html( '<img title="この下に行を追加" src="image/sakuzu/icon_enter.png">' )
			.click( L.bind(
				function(tr){

					var insertTr = this._createEditInfoTableLine( 0, "","" );
					insertTr.hide();
					insertTr.insertAfter( tr );
					insertTr.fadeIn( 'fast' );
				},
			this, tr ) );
		td.append( btn );
		tr.append( td );

		return tr;
	},
	_infoTableToFreeWordText : function()
	{
		var keyList = this._infoTableTbody.find( "textarea[name=info_table_key]" );
		var valueList = this._infoTableTbody.find( "textarea[name=info_table_value]" );

		var trHtml = '';
		for ( var i=0; i<keyList.length; i++ )
		{
			var key = $( keyList[i] ).val();
			var value = $( valueList[i] ).val();

			if ( key != '' && value != '' )
			{
				trHtml += '<tr><td>' + GSI.Utils.encodeHTML(key) + '</td><td>' + GSI.Utils.encodeHTML(value) + '</td></tr>' + '\n';
			}
		}

		if ( trHtml != '' )
		{
			return '<table>\n' + trHtml + '</table>';
		}
		else
		{
			return '';
		}
	},
	_initEditInfo : function( info )
	{
		if ( info && info.title )
			this._titleInput.val(info.title);
		else
			this._titleInput.val( '' );

		if ( info && info.description )
			this._infoFreeWordTextarea.val(info.description);
		else
			this._infoFreeWordTextarea.val( '' );

		this._infoTableTbody.empty();

		if ( info && info.description && info.description != '' )
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN );
			this._infoTable.hide();
			this._infoFreeWordTextarea.show();
		}
		else
		{
			this._toggleInfoBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN );
			this._infoFreeWordTextarea.hide();
			this._infoTable.show();
		}
		// ヘッダ
		var tr = $( '<tr>' );
		var td = $( '<td>' ).css( { 'width' : '30%', 'white-space':'nowrap'} ).html( '項目名' );
		tr.append( td );
		td = $( '<td>' ).attr( { "colspan":"3"} ).html( '値' );
		tr.append( td );
		this._infoTableTbody.append(tr );

		if ( !info || !info.table || info.table.length <= 0 )
		{
			var tr = this._createEditInfoTableLine(0);
			this._infoTableTbody.append( tr );
			return;
		}

		for ( var i=0; i<info.table.length; i++ )
		{
			var item = info.table[i];

			var tr = this._createEditInfoTableLine(i,item.key, item.value);
			this._infoTableTbody.append( tr );
		}
	},
	_onSakuzuItemReady : function()
	{
		this._editOkBtn.removeClass('disabled' );
	},
	_startEdit : function(itemType, layer)
	{
		this._editRemoveBtnFrame.show(); //removeClass('disabled' );
		this._editOkBtn.removeClass('disabled' );
		this._editingTarget.startEdit(itemType, layer);
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},
	_startCreate : function( id )
	{
		this._editOkBtn.addClass('disabled' );
		this._editRemoveBtnFrame.hide(); //.addClass('disabled' );

		this._editingTarget =this._sakuzuList.getSakuzuItem();
		this._editingTarget.startCreate(id);
		this._currentCreateId = id;
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},
	_refreshEditing : function( style )
	{
		this._editingTarget.setEditingStyle(style);
	},
	_showFileLoadPanel : function()
	{
		this._createFileLoadPanel();

		this.container .css( { height: 'auto'} );
		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileLoadPanel.fadeIn( 'normal' );

		}, this ) );
	},
	_showFileSavePanel : function()
	{
		this._createFileSavePanel();

		this._fileSaveOkBtn.addClass( 'disabled' );
		this._fileSavePanel.find( 'input' ).attr( {checked:false} ).prop( {checked:false} );
		this._fileSaveTextarea.focus();
		this._fileSaveTextarea.val( '' );
		this._fileSaveOkBtn.removeAttr( "download").attr({ "href" : 'javascript:void(0);' });

		this.container .css( { height: 'auto'} );

		this._topPanel.fadeOut( 'normal', L.bind( function() {

			this._fileSavePanel.fadeIn( 'normal' );

		}, this ) );
	}
} );

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.SearchResultDialog
 ************************************************************************/
GSI.SearchResultDialog = GSI.Dialog.extend( {
	options : {
		title : '検索',
		maxMarkerNum:30
	},
	initialize : function(map,options)
	{
		this.map = map;
		GSI.Dialog.prototype.initialize.call(this, options);
	},
	setTitle : function( title )
	{
		var subTitle = $( '<a>' ).html( "協力:東大CSIS" ).addClass( 'searchresultdialog_subtitle' )
			.css( {'font-size':'7pt'} ).attr('href', 'http://newspat.csis.u-tokyo.ac.jp/geocode/')
			.attr('target', '_blank');

		this.title.html( title ).append( subTitle );
	},
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this.selectFrame.outerHeight( true ) - 8;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	hide : function ()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		GSI.Dialog.prototype.hide.call(this);
	},
	createContent : function()
	{
		this.frame = $( '<div>' );
		var selectFrame = $( '<div>' ).addClass( "searchresultdialog_select_frame" );
		this.selectFrame = selectFrame;

		this.kenSelect = $( '<select>' ).css( {'width': '48%'} );
		selectFrame.append( this.kenSelect  );
		this.shiSelect = $( '<select>' ).css( {'width': '48%', 'margin-left' : '4px'} );
		selectFrame.append( this.shiSelect );

		this.initializeKenSelect();

		this.kenSelect.change( L.bind( this.onKenChange, this) );
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
		this.shiSelect.change( L.bind( this.onShiChange, this) );

		selectFrame.append( this.kenSelect ).append( this.shiSelect );

		this.frame.append( selectFrame );

		this.listFrame = $( '<div>' ).addClass( 'searchresultdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'searchresultdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '中' );
		this.listContainer.append( li );
		this.listFrame.append( this.listContainer );

		this.frame.append( this.listFrame );

		return this.frame;
	},
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
	},
	initializeKenSelect : function()
	{
		var select = this.kenSelect;
		select.empty();
		select.append( $('<option>').html("都道府県").val("," ) );

		var kenCode = '';
		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 4 )
			{
				if ( kenCode != muni[0] )
				{
					var option = $('<option>').html(muni[1]).val(muni[0] + ',' + muni[1]);

					select.append( option );
					kenCode = muni[0];
				}
			}
		}
	},
	onKenChange : function()
	{
		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];
		var selectedKenName = selectedKen[1];

		var select =this.shiSelect;
		select.empty();
		select.append( $('<option>').html("市区町村").val("," ) );

		for( var key in GSI.MUNI_ARRAY )
		{
			var muni = GSI.MUNI_ARRAY[ key ].split( ',' );

			if ( muni.length == 4 )
			{
				if ( selectedKenCode == muni[0] )
				{
					var option = $('<option>').html(muni[3]).val(muni[2] + ',' + muni[3]);

					select.append( option );
				}
			}
		}
		this.showResult();
	},
	onShiChange : function()
	{
		this.showResult();
	},
	setChimeisResult : function( result )
	{
		if (result)
		{
			for(var i = result.length - 1; i >= 0; i--)
			{
				if (result[i].geometry.coordinates[0] <= 0)
				{
					if (result[i].geometry.coordinates[1] <= 0)
					{
						result.splice(i, 1);
					}
				}
			}
		}
		this.chimeiResult = result;
		this.showResult();
	},
	clear : function()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );
		this.setTitle( '検索中' );
		this.addressResult = [];
		this.chimeiResult = [];
		var ul = this.listContainer;
		ul.empty();
		var li = $( '<li>' ).addClass( 'nodata' ).html( '検索中' );
		this.listContainer.append( li );

		this.kenSelect[0].selectedIndex = 0;
		this.shiSelect.empty();
		this.shiSelect.append( $('<option>').html("市区町村").val("," ) );
	},
	makeItem : function( item, index, subTitle )
	{
		var a = $( '<a>' ).attr( { 'href' : 'javascript:void(0);' } );
		var title = item.properties.title;
		
		var div = $( '<div>' ).html( title ).addClass('title');
		a.append( div );

		if ( subTitle && subTitle != '' )
		{
			div = $( '<div>' ).html( subTitle ).addClass('muni');
			a.append( div );
		}

		a.click( L.bind( this.onResultClick, this, item) );
		a.mouseenter( L.bind( this.onResultMouseover, this, item) );
		a.mouseleave( L.bind( this.onResultMouseout, this, item) );
		a.css( { "padding-left": '32px'} );
		if ( this.options.maxMarkerNum < 0 || this.markerNum < this.options.maxMarkerNum )
		{
			var latitude = item.geometry.coordinates[1];
			var longitude = item.geometry.coordinates[0];
			if ( latitude && longitude )
			{
				a.css(
					{
						"background" : "url(image/mapicon/search_result.png) no-repeat 0px 50%"
					}
				);

				if ( !this._resultIcon )
				{
					this._resultIcon= L.icon({
						iconUrl: 'image/mapicon/search_result.png',
					iconSize: [24, 24],
					iconAnchor: [3, 22]
					});
				}
				item._isActive = false;
				item._marker = L.marker([latitude,longitude],{
						title : title,
						icon : this._resultIcon
					});
				item._marker.bindPopup(
					title + "<br>" +
					( subTitle && subTitle != '' ? subTitle + '<br>' : '' ) +
					latitude + "," + longitude,
					{
						maxWidth:5000
					}
					);
				this.markerList.addLayer(item._marker);
				this.markerNum++;
			}
		}
		return a;
	},
	showResult : function()
	{
		if ( this.markerList ) this.map.removeLayer( this.markerList );

		this.markerList = L.layerGroup();

		var selectedKen = this.kenSelect.val().split( ',');
		var selectedKenCode = selectedKen[0];

		var selectedSi = this.shiSelect.val().split( ',');
		var selectedSiCode = selectedSi[0];

		var ul = this.listContainer;
		ul.empty();
		var viewNum = 0;
		this.markerNum = 0;
		var results = [this.addressResult,this.chimeiResult];
		var that = this;
		var num = 0;
		$.each(results,function() {
			num += this.length;
			$.each(this,function() {
				var record = this;
				var addressCode = "";
				if (record.properties.addressCode) {
					addressCode = parseInt(record.properties.addressCode,10)+"";
				}
				if (selectedKenCode != '' && addressCode.substring(0,addressCode.length-3) != selectedKenCode) return;
				if (selectedSiCode != '' && selectedSiCode != addressCode) return;
				var li = $( '<li>' );
				var muniNm = "";
				if (addressCode) {
					var addressData = GSI.MUNI_ARRAY[addressCode];
					if (addressData) {
						addressData = addressData.split(",");
						muniNm = (addressData[1]+addressData[3]).replace("　","");
					}
					var a = that.makeItem( record, viewNum, muniNm );
					li.append( a );
					ul.append( li );
				} else {
					var a = that.makeItem( record, viewNum, "    " );
					li.append( a );
					ul.append( li );
					// 緯度経度からリバースジオコーダ機能を呼び出して地名を取得
					$.ajax({
						url : CONFIG.SERVERAPI.GETADDR,
						dataType : "json",
						data : {
							lon : record.geometry.coordinates[0],
							lat : record.geometry.coordinates[1]
						},
						success : function(data2){
							// リバースジオコーダの結果を画面に表示
							if (data2.results){
								var addressCode = parseInt(data2.results.muniCd);
								record.properties.addressCode = addressCode;
								var addressData = GSI.MUNI_ARRAY[addressCode];
								if (addressData) {
									addressData = addressData.split(",");
									muniNm = (addressData[1]+addressData[3]).replace("　","");
									li.find("div.muni").html(muniNm);
								}
							}
						}
					});
				}
				viewNum++;
			});
		});
		this.setTitle( '検索結果:' + num + '件中' + viewNum + '件表示' );
		this.markerList.addTo( this.map );
	},
	onResultClick : function(resultItem)
	{
		this._setActiveItem( null );
		this._setActiveItem( resultItem );

		var latitude = resultItem.geometry.coordinates[1];
		var longitude = resultItem.geometry.coordinates[0];
		if ( longitude && resultItem )
		{
			this.map.setView( [latitude, longitude ],CONFIG.SEARCHRESULTCLICKZOOM );
		}

	},
	_setActiveItem : function( item )
	{
		if ( !item )
		{
			if ( this._activeItem )
			{
				this._activeItem._isActive = false;
				if ( this._activeItem._marker )
				{
					this.markerList.addLayer(this._activeItem._marker);
				}
				if ( this._resultActiveMarker )
				{
					this.markerList.removeLayer(this._resultActiveMarker);
				}
				this._activeItem._isActive = false;
				this._activeItem = null;
			}
			return;
		}

		if ( item != this._activeItem )
		{
			if ( item._marker )
			{
				this.markerList.removeLayer(item._marker);
			}

			var latitude = item.geometry.coordinates[1];
			var longitude = item.geometry.coordinates[0];
			if ( !this._resultActiveMarker )
			{
				var icon = L.icon({
					iconUrl: 'image/mapicon/search_result_active.png',
					iconSize: [32, 32],
					iconAnchor: [5, 29]
				});

				this._resultActiveMarker = L.marker([latitude, longitude],{
						icon : icon,
						zIndexOffset : 1000
					});

			}
			else
			{
				this._resultActiveMarker.setLatLng( [latitude, longitude] );
			}

			this.markerList.addLayer(this._resultActiveMarker);
			this._activeItem = item;
			this._activeItem._isActive = true;
		}
	},
	onResultMouseover : function(resultItem)
	{
		this._setActiveItem( resultItem );
	},
	onResultMouseout : function(resultItem)
	{
		if ( resultItem._isActive  )
		{
			resultItem._isActive = false;
			if ( resultItem._marker )
			{
				this.markerList.addLayer(resultItem._marker);
			}
			if ( this._resultActiveMarker )
			{
				this.markerList.removeLayer(this._resultActiveMarker);
			}
		}
	}
});

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.ShareDialog（共有ダイアログ管理）
 ************************************************************************/
GSI.ShareDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.SHARE.DIALOG_TITLE
	},
	initialize : function(map, pageStateManager, layersJSON, sakuzuList, options)
	{
		this.map = map;
		this.pageStateManager = pageStateManager;
		this.layersJSON = layersJSON;
		this.sakuzuList = sakuzuList;

		GSI.Dialog.prototype.initialize.call(this, options);
	},
	show : function (mode)
	{
		this._mode = mode;
		this._createTextareaContent(true);
		this._createSettingContent();
		this._initializeSetting(mode);

		switch( mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this.title.html( GSI.TEXT.SHARE.DIALOG_LINK_TITLE  );
                this._settingButton.hide();
				this._downloadButton.hide();
				this._copyButton.hide();
				this._setMessage( GSI.TEXT.SHARE.DIALOG_LINK_MESSAGE );
				this._initializeLinkMode();
				break;
			case GSI.ShareDialog.MODE.BUILTIN:
				this.title.html( GSI.TEXT.SHARE.DIALOG_BUILTIN_TITLE );
                this._settingButton.show();
				this._downloadButton.hide();
				this._copyButton.show();
				this._setMessage( GSI.TEXT.SHARE.DIALOG_BUILTIN_MESSAGE );
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this.title.html( GSI.TEXT.SHARE.DIALOG_SAVE_TITLE );
				if (!GSI.Utils.hasFileAPI)
				{
					this._downloadButton.hide();
					this._copyButton.show();
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE_IE8 );
				}
				else
				{
					this._setMessage( GSI.TEXT.SHARE.DIALOG_SAVE_MESSAGE);
					if ( this._zeroClipboard  ) this._zeroClipboard.destroy();
					this._zeroClipboard = null;12
					this._copyButton.hide();
					this._downloadButton.show();
				}

				this._initializeFileMode();
				break;
		}
		this._settingFrame.hide();

		GSI.Dialog.prototype.show.call(this);
	},
	_setCheckdState : function( elem, checked )
	{
		elem.attr( {'checked':checked} );
		elem.prop( {'checked':checked} );
	},
	_initializeSetting : function(mode)
	{
		this._setCheckdState( this._positionShareCheck, true );
		this._setCheckdState( this._basemapCheck, true );
		this._setCheckdState( this._layerpCheck, true );

		this._setCheckdState( this._visibleHeaderCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleInfoMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleFuncMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );
		this._setCheckdState( this._visibleContextMenuCheck, ( mode != GSI.ShareDialog.MODE.BUILTIN ) );

		this._setCheckdState( this._visibleViewListDlgCheck, false );
		this._setCheckdState( this._visibleLayerTreeDlgCheck, false );
		this._setCheckdState( this._showCurrentFolderCheck, false );

		this._setCheckdState( this._centerCrossCheck, this.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS) );
		this._setCheckdState( this._latLngGridCheck, false );
		this._setCheckdState( this._utmGridCheck, false );
		this._setCheckdState( this._jihokuLineCheck, false );
	},
	_initializeLinkMode : function()
	{
		this._textarea.val(location.href);
	},
	_initializeBuiltInMode : function()
	{
		var url = this.getUrl('');
		var w = 500;
		var h= 400;

		var html = '<iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0"' +
			' width="' + w + '"' +
			' height="' + h + '"' +
			' src="' + url + '"' +
			'></iframe>';
		this._textarea.val( html );
	},
	_initializeFileMode : function()
	{
		var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
		if ( !this._htmlTemplate || this._htmlTemplate == '' )
		{
            var url = _location.pathname.replace(/index.html/i, "");
            if(!_location.pathname.lastIndexOf("/") ==  _location.pathname.length -1){
                url += "/";
            }
            url += "index_client.html";

			this._ajax = $.ajax({
				type: "GET",
				dataType:"text",
				url : url,
				success:  L.Util.bind( this._onHtmlTemplateLoad, this ),
				error : L.Util.bind( this._onHtmlTemplateLoadError, this )
			});
		}
		else
		{
			this._refreshShareFile();
		}
	},
	_refreshShareFile : function()
	{
        var javascript = '';
		var html = this._htmlTemplate;

		if ( this.sakuzuList )
		{
			var list = this.sakuzuList.getGeoJSONList();

			javascript += 'GSI.ClientMode.sakuzuList = ' + JSON.stringify( list ) + ';' + '\n';
		}

        var _location = ( GSI.ClientMode .location ? GSI.ClientMode .location : location );
        
        var url      = _location.protocol + "//" + _location.host;
        var url_     = this._makeQueryString();
        if(url_.indexOf("?") == 0){
            url_ = "&" + url_.substring(1, url_.length);
        }
        var url_site = _location.pathname + "?postmessage=1" +url_;

        html       = html      .replace('/*url*/'     , url     );
        html       = html      .replace('/*url_site*/', url_site);
        html       = html      .replace(/GSI.ClientMode/g, 'ClientMode');
        javascript = javascript.replace(/GSI.ClientMode/g, 'ClientMode');
        
		html = html.replace( '/*INSERT-SCRIPT*/', javascript );
		this._textarea.focus();
		this._textarea.val( html );
	},
	_onDownLoadClick : function()
	{
		var fileName = 'gsi' + GSI.Utils.getTimeStampString() + '.html';
		var blob = new Blob([this._textarea.val()], { "type" : "text/html" });

		if ( window.navigator.msSaveOrOpenBlob )
		{
			window.navigator.msSaveOrOpenBlob( blob, fileName );
		}
		else
		{
			window.URL = window.URL || window.webkitURL;
			this._downloadButton.attr( {
					"download" :fileName,
					"href" : window.URL.createObjectURL(blob)
				});
		}
	},
	_onHtmlTemplateLoad : function(html)
	{
		this._htmlTemplate = html.replace( '\r\n', '\n' );
		this._htmlTemplate = this._htmlTemplate.replace( '\r', '\n' );

		this._htmlTemplate = html;
		this._refreshShareFile();
	},
	_onHtmlTemplateLoadError : function()
	{
		alert(GSI.TEXT.SHARE.DIALOG_TEMPLATELOADERROR);
		this.hide();
	},
	_onSettingChange : function()
	{
		switch( this._mode )
		{
			case GSI.ShareDialog.MODE.LINK:
				this._initializeLinkMode();
				break;
			case GSI.ShareDialog.MODE.BUILTIN:
				this._initializeBuiltInMode();
				break;

			case GSI.ShareDialog.MODE.FILE:
				this._refreshShareFile();
				break;
		}
	},
	_makeQueryString : function(additionalParam)
	{
		var queryString = '';
		if ( this._positionShareCheck.is( ':checked' ) )
		{
			queryString = this.pageStateManager.getPositionQueryString();
            if(queryString != ""){
                queryString += "/";
            }
		}
        else{
            queryString += "#//";
        }

        var fBase        = false;
        var fBassLS_Trim = false;
        var base = this.pageStateManager.getBaseLayerQueryString();
        if(base != ''){
            fBase   = true;
        }
		if ( this._basemapCheck.is( ':checked' ) )
		{
            if( base != '' )
            {
			    queryString += ( queryString != '' ? '&' : '#' ) + base;
            }
		}
        else{
            if(fBase){
                fBassLS_Trim = true;
            }
        }

		var ls = this.pageStateManager.getLayersQueryString();
        var disp = this.pageStateManager.getTileViewSetting();
		if ( this._layerpCheck.is( ':checked' ) )
		{
			if ( ls != '' )
			{
                if(fBassLS_Trim){
                    var ls_ary = ls.split("%7C");
                    ls = "";
                    for(var n_ls_ary = 1; n_ls_ary < ls_ary.length; n_ls_ary++){
                        if(ls != ""){
                            ls += "%7C";
                        }
                        ls += ls_ary[n_ls_ary];
                    }
                    if(ls != ""){
                        ls = "ls=" + ls;
                    }
                }
                if ( ls != '' ){
				    queryString += ( queryString != '' ? '&' : '#' ) + ls;
                }
			}
			
			if ( disp != '' )
			{
                if(fBassLS_Trim){
                    var disp_trim = "";
                    for(var n_disp = 6; n_disp < disp.length; n_disp++){
                        disp_trim += disp.charAt(n_disp);
                    }
                    disp = "";
                    if(disp_trim != ""){
                        disp = "disp=" + disp_trim;
                    }
                }
                if ( disp != '' ){
				    queryString += ( queryString != '' ? '&' : '#' ) + disp;
                }
			}
		}
        else{
            if ( this._basemapCheck.is( ':checked' ) ){
                if( base != '' ){
			        if ( ls != '' )
			        {
                        var ls_ary = ls.split("%7C");
                        ls = "";
                        if(ls_ary.length > 1){
                            ls += ls_ary[0];
                        }
                        if(ls != ""){
                            ls = "ls=" + ls;
                        }
                    }
                    if ( ls != '' ){
				        queryString += ( queryString != '' ? '&' : '#' ) + ls;
                    }
			
			        if ( disp != '' )
			        {
                        var disp_trim = "";
                        if(disp.length >= 6){
                            disp_trim = disp.charAt(5);
                        }
                        disp = "";
                        if(disp_trim != ""){
                            disp = "disp=" + disp_trim;
                        }
                    }
                    if ( disp != '' ){
				        queryString += ( queryString != '' ? '&' : '#' ) + disp;
                    }
                }
            }
        }

        if ( this._showCurrentFolderCheck.is( ':checked' ) )
        {
            var lcd = this.pageStateManager.getCurrentPathQueryString();
            if(lcd != '')
            {
			    queryString += ( queryString != '' ? '&' : '#' ) + lcd;
            }
        }

		var hcList = [];
		if ( !this._visibleHeaderCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.HEADER );

		if ( !this._visibleInfoMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.INFOMENU );

		if ( !this._visibleFuncMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU );

		if ( !this._visibleContextMenuCheck.is( ':checked' ) )
			hcList.push( CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU );

		var skips = {};
		skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
		skips[ CONFIG.PARAMETERNAMES.COCOTILE] = true;
		skips[ CONFIG.PARAMETERNAMES.MINIMAP] = true;

		var visibles = {};
		visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = this._centerCrossCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE] = this._jihokuLineCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID] = this._latLngGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.UTMGRID] = this._utmGridCheck.is( ':checked' );
        visibles[ CONFIG.PARAMETERNAMES.FOOTER ] = GSI.GLOBALS.footer.isVisible();

		var visibleDialogs = {};
		visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG] = this._visibleViewListDlgCheck.is( ':checked' );
		visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = this._visibleLayerTreeDlgCheck.is( ':checked' );
        
		var queryParams = this.pageStateManager.getQueryParams( {
			hcList : hcList,
			vsInfo : {
				skips : skips,
				visibles : visibles
			},
			visibleDialogs : visibleDialogs
		} );

        var queryArgs = "";
		for ( var key in queryParams )
		{
            if(key == "hc"){
			    queryArgs += ( queryString != '' ? '?' : '' ) + key + '=' + queryParams[key];
            }
            else{
                queryString += ( queryString != '' ? '&' : '#' ) + key + '=' + queryParams[key];
            }
		}

		if ( additionalParam && additionalParam != '' )
		{
			queryString += ( queryString != '' ? '&' : '#' ) + additionalParam;
		}

		return queryArgs + queryString;
	},
	getUrl :function(additionalParam)
	{
		var url         = GSI.Utils.getCurrentPath();
        var queryString = this._makeQueryString();
        return url + queryString;
	},
	afterShow : function()
	{
		this._initializeCopy();
	},
	_initializeCopy : function()
	{
		if ( !this._zeroClipboard  )
		{
			this._zeroClipboard = new ZeroClipboard(this._copyButton[0] );//.attr({ id: 'fe_text' })[0]);

			this._zeroClipboard.on( 'ready', L.bind( function() {

				this._zeroClipboard.on( 'beforecopy', L.bind( function() {
					this._zeroClipboard.setText(this._textarea.val());
					alert( 'クリップボードにコピーしました' );
				},this ) );

				this._zeroClipboard.on( 'aftercopy', L.bind( function() {
				},this ) );
			},this ));
		}
	},
	hide : function ()
	{
		GSI.Dialog.prototype.hide.call(this);
	},
	_setMessage : function(msg)
	{
		this._messageFrame.empty();

		var img = $( '<img>' ).attr( {'src': 'image/system/info.png'} );
		this._messageFrame.append(img).append( $('<div>').html(msg) );
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	createContent : function()
	{
		this._frame = $( '<div>' ).addClass( 'gsi_sharedialog_frame' );

		this._messageFrame = $( '<div>' ).addClass( 'messageframe' );
		this._textareaFrame = $( '<div>' ).addClass( 'textareaframe' );

		this._contentFrame = $( '<div>' );
		this._settingFrame = $( '<div>' ).addClass( 'settingframe' );

		this._frame.append( this._messageFrame );
		this._frame.append( this._textareaFrame );
		this._frame.append( this._contentFrame );
		this._frame.append( this._settingFrame );

		return this._frame;
	},
	_createTextareaContent : function(visible)
	{
		if ( this._textareaContent )
		{
			if ( visible ) this._textareaContent.show();
			else this._textareaContent.hide();
			return;
		}
		var frame = $( '<div>' ).addClass( 'textareacontent' );

		var textareaFrame = $( '<div>' );
		this._textarea = $( '<textarea>' ).attr( {rows:4, readonly:"readonly", 'wrap':'off'} ).click( function(){ this.select();} );
		this._textarea.focus();
		this._textarea.val( '' );
		textareaFrame.append( this._textarea );

		this._downloadButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
				.html(GSI.TEXT.SHARE.DIALOG_DOWNLOADBTN).click( L.bind( this._onDownLoadClick,this ) );

		if ( !GSI.Utils.canUseFlashPlayer() )
		{
			this._copyButton = $( '<span>' ).css( {'float':'right'} ) .html( GSI.TEXT.SHARE.DIALOG_NOCOPYMSG );
		}
		else
		{
			this._copyButton = $( '<a>' ).attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'right'} )
				.html( GSI.TEXT.SHARE.DIALOG_COPYBTN );
		}

		frame.append( textareaFrame );

		this._settingButton = $( '<a>').attr( {'href':'javascript:void(0);'} ).addClass( "normalbutton").css( {'float':'left'} )
			.html( '詳細設定' )
			.click( L.bind( function() { this._settingFrame.slideToggle('fast'); }, this ) );

		var buttonFrame = $( '<div>' ).addClass( 'buttonframe' );

		buttonFrame.append( this._copyButton );
		buttonFrame.append( this._downloadButton );
		buttonFrame.append( this._settingButton );
		buttonFrame.append( $('<div>').css({clear:'both'} ) );
		frame.append( buttonFrame );

		this._textareaFrame.append( frame );
		this._textareaContent = frame;
	},
	_createShareBuiltInContent : function()
	{
		if ( this._shareBuiltInContent ) return;
	},
	_createShareFileContent : function()
	{
		if ( this._shareFileContent ) return;
	},
	_createSettingContent : function()
	{
		if ( this._settingContent ) return

		this._settingContent = $( '<div>' ).addClass( 'settingcontent' );
		this._settingContent.append( $( '<h3>' ).html( '基本設定' ) );

		var __createItem = function( $this, title )
		{
			var li = $('<li>');
			var id = 'GSI_ShareDialog_check' + GSI.Utils.getCurrentID() ;
			var check = $( '<input>' ).attr( {'type':'checkbox', 'id': id } ).addClass( 'normalcheck' );
			li.append( check );
			var label = $( '<label>' ).attr( {'for': id} );
			label.html( title );
			li.append( label );
			check.click( L.bind( $this._onSettingChange,$this) );
			return { li: li, checkbox: check };
		};

		var ul = $( '<ul>' );
		var item = null;

		// 緯度経度
		item = __createItem( this,'表示中の中心位置とズームを共有' );
		ul.append( item.li );
		this._positionShareCheck = item.checkbox;

		// 背景地図
		item = __createItem( this,'表示中の背景地図を共有' );
		ul.append( item.li );
		this._basemapCheck = item.checkbox;

		// レイヤー
		item = __createItem( this,'表示中のレイヤーを共有' );
		ul.append( item.li );
		this._layerpCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '機能設定' ) );

		ul = $( '<ul>' );

		// 検索とお知らせバーを表示
		item = __createItem( this,'検索とお知らせを表示' );
		ul.append( item.li );
		this._visibleHeaderCheck = item.checkbox;

		// 情報ボタンを表示
		item = __createItem( this,'情報ボタンを表示' );
		ul.append( item.li );
		this._visibleInfoMenuCheck = item.checkbox;

		// 機能ボタンを表示
		item = __createItem( this,'機能ボタンを表示' );
		ul.append( item.li );
		this._visibleFuncMenuCheck = item.checkbox;

		// コンテキストメニューを表示
		item = __createItem( this,'コンテキストメニューを表示' );
		ul.append( item.li );
		this._visibleContextMenuCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '選択中の情報設定' ) );

		ul = $( '<ul>' );

		// 選択中の情報
		item = __createItem( this,'選択中の情報を開く' );
		ul.append( item.li );
		this._visibleViewListDlgCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '情報リスト設定' ) );

		ul = $( '<ul>' );

		// 情報リスト
		item = __createItem( this,'情報リストを開く' );
		ul.append( item.li );
		this._visibleLayerTreeDlgCheck = item.checkbox;

		// 表示階層を共有
		item = __createItem( this,'表示中のフォルダを開いた状態で表示' );
		ul.append( item.li );
		this._showCurrentFolderCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingContent.append( $( '<h3>' ).html( '表示設定' ) );

		ul = $( '<ul>' );

		// 中心十字線
		item = __createItem( this,'中心十字線を表示' );
		ul.append( item.li );
		this._centerCrossCheck = item.checkbox;

		// 緯度経度グリッド
		item = __createItem( this,'緯度経度グリッドを表示' );
		ul.append( item.li );
		this._latLngGridCheck = item.checkbox;

		// UTMグリッド
		item = __createItem( this,'UTMグリッドを表示' );
		ul.append( item.li );
		this._utmGridCheck = item.checkbox;

		// 磁北線
		item = __createItem( this,'磁北線を表示' );
		ul.append( item.li );
		this._jihokuLineCheck = item.checkbox;

		this._settingContent.append( ul );

		this._settingFrame.append( this._settingContent );
	}
} );

GSI.ShareDialog.MODE = {
	LINK : "link",
	BUILTIN : "builtin",
	FILE : "file"
};

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.ViewListDialog（表示中ダイアログ管理）
 ************************************************************************/
GSI.ViewListDialog = GSI.Dialog.extend( {

	options : {
		title : '選択中の情報'
	},
	initialize : function(map, mapLayerList, cocoTileLayer, options)
	{
		this.map = map;
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
	},
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 10;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
	},
	createHeader : function()
	{
		return $('<span>').html(this.options.title );
	},
	createContent : function()
	{
		this._contentFrame = $('<div>');
		this._controlFrame = this._createControl();

		this.listFrame = $( '<div>' ).addClass( 'viewlistdialog_ul_frame' );
		this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );

		var li = $( '<li>' ).addClass( 'nodata' ).html( '選択中の情報はありません' );
		this.listContainer.append( li );

		this.listFrame.append( this.listContainer );

		this._contentFrame.append( this._controlFrame );
		this._contentFrame.append( this.listFrame );

		return this._contentFrame;
	},
	_createControl : function()
	{
		var frame = $( '<div>' ).css( { 'height': '25px' } ).addClass( 'viewlistdialog_control_frame' );

        this._ButtonTxtAdd = $("<a>").css({"position":"absolute",'left':'5px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("<img src='./image/system/add.png' style='position:relative;left:-2px;top:3px;' />情報追加/ベースマップ切替");
        this._RbtnTxtAdd = $("<a>").css({"position":"absolute",'right':'4px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("リセット");
		
		var frameRange            = $( '<div>' ).css({ 'position':'absolute','right':'5px','bottom':'5px','opacity':'1'});
        /*
        this._ButtonRangeSwitch   = new GSI.OnOffSwitch( {className:'onoff', checked:this.cocoTileLayer.getVisible(), title: ""} );
		var frameRangeSwitchLabel = $( '<label>' ).css({"padding-left":"5px"}).attr({'for':this._ButtonRangeSwitch.getId()}).html( '表示範囲に絞込み' );
		this._ButtonRangeSwitch.on( 'change' , L.bind( this._onCocoTileCheckChange, this, this._ButtonRangeSwitch ) );

		frameRange.append( this._ButtonRangeSwitch.getElement() );
		frameRange.append( frameRangeSwitchLabel );
        */

        /*
		this._showAllButton   = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全表示'   ).addClass( 'normalbutton showallbutton' );
		this._hideAllButton   = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全非表示' ).addClass( 'normalbutton showallbutton' );
		this._removeAllButton = $( '<a>' ).attr( { href:'javascript:void(0);'} ).html( '全削除'   ).addClass( 'normalbutton showallbutton' );
        */

        frame.append( this._ButtonTxtAdd );
        frame.append( this._RbtnTxtAdd );

		frame.append( frameRange );
        /*
		frame.append( this._removeAllButton );
		frame.append( this._hideAllButton   );
		frame.append( this._showAllButton   );
        */
		var dummy = $('<div>').html( '&nbsp;' ).css( { "font-size": '9.5pt' } );
		frame.append(dummy );

		this._ButtonTxtAdd.click( L.bind( this._onAddClick, this ) );
		this._RbtnTxtAdd.click( L.bind( this._onResetClick, this ) );

        /*
		this._showAllButton  .click( L.bind( this._onShowAllClick  , this ) );
		this._hideAllButton  .click( L.bind( this._onHideAllClick  , this ) );
		this._removeAllButton.click( L.bind( this._onRemoveAllClick, this ) );
        */

		return frame;
	},
	_onAddClick : function()
	{
        GSI.GLOBALS.layerTreeDialog.show();
    },
    _onResetClick : function()
    {
		this._resetTiles();
    },
    onCocoTileCheckChange  : function(onOffSwitch)
	{
        if(this._ButtonRangeSwitch){
            this._ButtonRangeSwitch.checked(onOffSwitch.checked());
        }
    },
	_onCocoTileCheckChange : function(onOffSwitch)
	{
        GSI.GLOBALS.layerTreeDialog.onCocoTileCheckChange(onOffSwitch);
    },
	_onShowAllClick : function()
	{
		this._showAll( this.mapLayerList.getList() );
		this._showAll( this.mapLayerList.getTileList() );
	},
	_onHideAllClick : function()
	{
		this._hideAll( this.mapLayerList.getList() );
		this._hideAll( this.mapLayerList.getTileList() );
	},
	_onRemoveAllClick : function()
	{
		this._removeAll();
	},
	_resetTiles : function()
	{
		GSI.GLOBALS.baseLayer.setActiveIndex(0);
		var std = GSI.GLOBALS.baseLayer.baseLayerList[0];
		
		this._removeAll();
		this.mapLayerList.append( std );
		
		if ( !GSI.GLOBALS.map.hasLayer(GSI.GLOBALS.baseLayer) )
		{
			GSI.GLOBALS.map.addLayer(GSI.GLOBALS.baseLayer);
		}
	},
	_showAll : function( list )
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( true );
				//item._visibleInfo.layer.setOpacity( item._visibleInfo.opacity );
				item._visibleInfo._isHidden = false;
				this.map.addLayer( item._visibleInfo.layer );
			}
		}
	},
	_hideAll : function(list)
	{
		for ( var i=0;i<list.length; i++ )
		{
			var item = list[i];
			if ( !item._visibleInfo._isHidden  )
			{
				item._onOffSwitch.checked( false );
				
				item._visibleInfo._isHidden = true;
				this.map.removeLayer( item._visibleInfo.layer );
			}
		}
	},
	_removeAll : function()
	{
		this.mapLayerList.clear();
	},
	setMaxScrollHeight : function( maxHeight )
	{
		if ( this.listFrame )
		{
			this.listFrame.css( { 'max-height' : maxHeight + 'px'} );
		}
		if ( this._contentFrame )
		{
			this._contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.contentFrame )
		{
			this.contentFrame.css( { 'height' : 'auto'} );
		}
		if ( this.container )
		{
			this.container.css( { 'height' : 'auto'} );
		}
	},
	show : function()
	{
		GSI.Dialog.prototype.show.call(this);
	},
	initializeList : function()
	{
		if ( !this.contentFrame ) return;

		if ( !this.listContainer )
		{
			this.listContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.empty().append( this.listContainer );
		}

		if ( !this.tileListContainer )
		{
			this.tileListContainer = $( '<ul>' ).addClass( 'viewlistdialog_ul' );
			this.listFrame.append( this.tileListContainer );
			this.tileListContainer .sortable( {
				cursor : 'move',
				update : L.bind( this.onSortChange, this ),
				handle : ".item_frame",
				cancel : ".item_frame_fixed",
				scroll : false
			});
	   		this.tileListContainer .disableSelection();
		}

		this.contentFrame.scrollTop( 0 );
		this.listContainer.empty();
		this.tileListContainer.empty();

		this._initializeList();
		if ( this._userResized ) this._onResize();
	},
	onSortChange : function( event, ui )
	{
		var liList = this.tileListContainer.find( 'li' );
		var list = [];
        var f = true;
		for  ( var i=0; i<liList.length; i++ )
		{
			var item = $(liList[i]).data( 'data' );
            if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
                if(i != liList.length -1){
                    f = false;
                    this.tileListContainer.sortable("cancel");
                    break;
                }
            }
    		if ( item ) list.push( item );
		}

        if(f){
		    this.mapLayerList.refreshTileList(list);
        }
	},
	onCOCOTileLoad : function(e)
	{
		this._initializeList( true );
	},
	onCOCOTileHide : function(e )
	{
		this._initializeList( true );
	},
	makePankzu : function( target )
	{
		target = target.parent;
		var result = '';
		while( target )
		{
			result = target.title + (result == '' ?'': '&gt;') + result;
			target = target.parent;
		}

		return result;
	},
	_updateLayer : function( li, item, isTile )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            li.find("a").removeClass("view");
            li.find("a").addClass("nococotile");
		}
		else
		{
            if(item._visibleInfo._isHidden){
                li.find("a").removeClass("view");
            }
            else{
                li.find("a").addClass("view");
            }
            li.find("a").removeClass("nococotile");
		}
	},
	_makeLayer : function( li, a, item, isTile )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

        var vClass = 'item_frame';
        var vClassTitle = 'title';
        var fBaseMap = false;
        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            vClass   = 'item_frame_fixed';
            vClassTitle = 'title_base';
            fBaseMap = true;
        }
        a.addClass( vClass );

		var frame = $( '<div>' );
		if ( isTile ) frame.addClass( 'tille' );
		li.data( { 'data' : item } );

        a.append( frame );
        
		// タイトル
		var title = $( '<div>' ).addClass( vClassTitle );
		var icon = item.iconUrl;
        if(icon){
		    title.css(
			    {
				    "background" : "url(" + icon + ") no-repeat 4px 50%",
				    "background-size" : "16px 16px"
			    }
		    );
        }

		// パンくず
		var pankuzu = $( '<div>' ).addClass( 'pankuzu' ).html( this.makePankzu( item ) );
		title.html( item.title );

        var viewMark = $( '<span>' );
		if (! item._visibleInfo._isHidden )
		{
			viewMark.addClass( 'viewmark' ).html( '表示' );
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		frame.append( viewMark ).append( pankuzu ).append( title );
		a.addClass( 'item' ).append( title );

		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            a.removeClass( 'view' );
			a.addClass( 'nococotile' );
		}

        // グレースケール
        if(fBaseMap){
		    if (
			    ( !GSI.Utils.Browser.ie && !GSI.Utils.Browser.isAndroid )
			    ||
			    ( GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version < 10 || ( CONFIG.USEIE10GRAYSCALE && GSI.Utils.Browser.version == 10 ) || ( CONFIG.USEIE11GRAYSCALE && GSI.Utils.Browser.version >= 11 ) ) )
		     )
		    {
                var grayScale_Label = $( '<span>' ).addClass( 'grayscale_label' ).html( 'グレースケール' );
		        li.append( grayScale_Label );

                var grayScale = new GSI.OnOffSwitch( {className:'onoff', checked:(GSI.GLOBALS.baseLayer.getGrayScale())} );
		        var grayScaleElement = grayScale.getElement();
                grayScaleElement.addClass("grayscale");
		        grayScale.on( 'change', L.bind( this._gray_scale, this, a, grayScale ) );

		        li.append( grayScaleElement);
            }
        }
        // 透過
        var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
		var opacityPercentage = Math.round( 100 - ( opacity * 100 ) );
        var opacity = $( '<span>' ).addClass( 'opacity' ).html( '透過'+opacityPercentage+'%' );
		li.append( opacity );

		var opacityUpBtn = $( '<span>' ).addClass( 'opacity_up_btn' ).html( "<img src='./image/system/opacityUp.png' class=\"btn\" oncontextmenu=\"return false;\" />");
		li.append( opacityUpBtn );
        if(GSI.Utils.Browser.TouchDevice()){
		    opacityUpBtn.unbind( 'mousedown' ).bind( 'touchstart', L.bind( this._opacity_start, this, a, opacity, '+' ) );
		    opacityUpBtn.unbind( 'mouseup'   ).bind( 'touchend ' , L.bind( this._opacity_stop , this, a, opacity, '+' ) );
        }
        else{
		    opacityUpBtn.unbind( 'mousedown' ).bind( 'mousedown' , L.bind( this._opacity_start, this, a, opacity, '+' ) );
		    opacityUpBtn.unbind( 'mouseup'   ).bind( 'mouseup'   , L.bind( this._opacity_stop , this, a, opacity, '+' ) );
        }

		var opacityDnBtn = $( '<span>' ).addClass( 'opacity_dn_btn' ).html( "<img src='./image/system/opacityDn.png' class=\"btn\" oncontextmenu=\"return false;\" />");
		li.append( opacityDnBtn );
        if(GSI.Utils.Browser.TouchDevice()){
		    opacityDnBtn.unbind( 'mousedown' ).bind( 'touchstart', L.bind( this._opacity_start, this, a, opacity, '-' ) );
		    opacityDnBtn.unbind( 'mouseup'   ).bind( 'touchend ' , L.bind( this._opacity_stop , this, a, opacity, '-' ) );
        }
        else{
		    opacityDnBtn.unbind( 'mousedown' ).bind( 'mousedown' , L.bind( this._opacity_start, this, a, opacity, '-' ) );
		    opacityDnBtn.unbind( 'mouseup'   ).bind( 'mouseup'   , L.bind( this._opacity_stop , this, a, opacity, '-' ) );
        }

        // 詳細
		var descriptionBtn = $( '<span>' ).addClass( 'description_btn').html("ｉ");
		li.append( descriptionBtn );
		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		// 閉じる
		var closeBtn = $( '<div>' ).addClass( 'closebtn' )
		li.append(closeBtn );
    	closeBtn.unbind( 'click' ).bind( 'click', L.bind( this.onRemoveClick, this, li ) );

		a.click( L.bind( this.onItemClick, this, li, a, viewMark) );
	},
	Refresh : function(visibleLayers)
	{
        this._removeAll();

		for ( var i=0; i<visibleLayers.length; i++ )
		{
			var l = visibleLayers[i];
			if(l && l.info){
				GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden);
			}
		}

        this._initializeList(true);
    },
	_initializeList : function( liRefresh )
	{
        this._hideItemTooltip();

		var list     = this.mapLayerList.getList();
		var tileList = this.mapLayerList.getTileList();

		if ( list.length <= 0 && tileList.length <= 0 )
		{
			this.listContainer.empty();
			var li = $( '<li>' ).addClass( 'nodata' ).html( '選択中の情報はありません' );
			this.listContainer.append( li );
		}

		var liList = ( liRefresh ? this.listContainer.children( 'li' ) : null );
		var ul = this.listContainer;
		this._initializeListOne( list, liList, ul, liRefresh );

		if ( this.tileListContainer )
		{
			liList = ( liRefresh ? this.tileListContainer.children( 'li' ) : null );
			ul = this.tileListContainer;
			this._initializeListOne( tileList, liList, ul, liRefresh, true );
			this.tileListContainer.sortable("refresh");
		}
	},
	_initializeListOne : function( list,liList, ul, liRefresh, isTile )
	{
		for ( var i= 0; i<list.length; i++ )
		{
			var item = list[i];
			var li = ( liRefresh ? $( liList[i] ) : $( '<li>' ) );

			if ( liRefresh )
			{
				this._updateLayer( li, item, isTile );
			}
			else
			{
			    var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			    a.data( { 'data' : item } );
				this._makeLayer(li, a, item, isTile );
			    li.append( a );
			}

			if ( !liRefresh ) ul.append( li );
		}
	},
	onItemClick : function(li, a, viewMark)
	{
		var item = a.data( 'data' );
        var item_layer = item._visibleInfo.layer;

        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            item_layer = GSI.GLOBALS.baseLayer;
        }

        if(item._visibleInfo._isHidden)
        {
			item._visibleInfo._isHidden = false;
			this.map.addLayer( item_layer );

            viewMark.addClass( 'viewmark' ).html( '表示' );

            a.addClass( 'view' );

		}
		else
		{
			item._visibleInfo._isHidden = true;
			this.map.removeLayer( item_layer );

            viewMark.removeClass( 'viewmark' ).html( ' ' );
            a.removeClass( 'view' );
        }

		var cocoVisible = this.cocoTileLayer.getVisible();
		if (cocoVisible && item.cocotile && !item.hasTile )
		{
            a.removeClass("view");
            a.addClass("nococotile");
        }
	},
	onMapLayerListChange : function()
	{
		this.initializeList();
	},
	onRemoveClick : function(li)
	{
		var item = li.data( 'data' );
        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            this.map.removeLayer(GSI.GLOBALS.baseLayer);

        }
		li.fadeOut( 'fast', L.bind( function(li) {
			this.mapLayerList.remove( item );
			li.remove();
			if ( this._userResized ) this._onResize();
		}, this, li ) );
	},
	_onLayerMouseEnter : function( a, item )
	{
		if ( !this._toolTipViewCounter )
		{
			this._toolTipViewCounter = 0;
		}
		this._toolTipViewCounter++;

		this._showItemTooltip( a, item );
	},
	_onLayerMouseLeave : function( a, item )
	{
		this._hideItemTooltip( a, item );
	},
	_makeToolTip : function( item )
	{
		var infoFrame = $( '<div>' ).addClass( 'layerinfo' ).css({"max-width":"350px"} );

		var legend = null;
		var description = null;

		if ( item.legendUrl && item.legendUrl != '')
		{
			legend =$( '<a>' ).html( '凡例を表示' ).addClass( 'legend' ).attr( { 'href' : item.legendUrl, 'target' : '_blank' } );
		}
		if ( legend )
			infoFrame.append( legend );

		if ( item.html )
		{
			description =$( '<div>' ).addClass( 'description' ).html( item.html );
		}
		if ( description )
			infoFrame.append( description );

		return infoFrame;
	},
	_showItemTooltip : function( a, item )
	{
		if ( item  )
		{
			if ( !this._curItem )
			{
				this._curItem = item;
			}
			else
			{
				{
					if ( this._curItem == item )
					{
						this._curItem = undefined;
						this._toolTipViewCounter = 0;
						return;
					}
					else
					{
						this._toolTipViewCounter--;
					}
				}
				this._curItem = item;
			}
		
			if ( !this._itemTooltip )
			{
				this._itemTooltip = $( '<div>' ).addClass( 'gsi_layertreedialog_itemtooltip' ).hide();
				$( document.body ).append( this._itemTooltip );
			}

			var offset = a.offset();

			var screenSize = GSI.Utils.getScreenSize();
			var left = offset.left + parseInt( a.outerWidth(true) );
			var top = offset.top;

			if ( left > screenSize.w * 0.6 )
			{
				left = offset.left + parseInt( a.outerWidth(true) * 0.3 );
				top = offset.top + a.outerHeight(true);
			}

			this._itemTooltip.css({
				left : left + 'px',
				top  : top + 'px'
			}).empty().append( this._makeToolTip( item ) );
			this._itemTooltip.stop().hide().fadeIn( 'normal' );

			if ( this._hideToolTipHandler )
			{
				$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
				$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
				this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
				this._hideToolTipHandler  = null;
			}

			this._hideToolTipHandler  = L.bind( function(event)
			{
				if ( !this._itemTooltip || event.target == this._itemTooltip[0] ) return;

				var parents = $( event.target ).parents();

				for (var i=0; i<parents.length; i++ )
				{
					if ( parents[i] == this._itemTooltip[0] ) return;
				}

                var fToopTop = false;
                if($(event.target).is(".switch") || $(event.target).is(".inner") || $(event.target).is(".btn")){
                    fToopTop = true;
                }

                if(!fToopTop){
                    if(!$(event.target).is(".description_btn")){
                        this._curItem = undefined;
                    }
				    this._hideItemTooltip();
                }
				
				if ( event.type == "scroll" )
				{
					this._toolTipViewCounter = 0;
				}
			}, this );

			$( document.body ).bind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).bind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.bind( 'scroll', this._hideToolTipHandler );

		}
		else
		{
			this._hideItemTooltip();
		}
	},
	_hideItemTooltip : function( a, item )
	{
		if ( this._hideToolTipHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideToolTipHandler );
			$( document.body ).unbind( 'touchstart', this._hideToolTipHandler );
			this.listFrame.unbind( 'scroll', this._hideToolTipHandler );
			this._hideToolTipHandler  = null;
		}
		if ( this._itemTooltip )
		{
			this._itemTooltip.stop().hide();
            this._toolTipViewCounter = 0;
		}
	},
    _opacity : function(a, opacity, c)
    {
        var v = parseInt(opacity.text().replace("透過", "").replace("%", ""), 10);
        if(c == "++"){
            v++;
        }
        else if(c == "+"){
            var v2 = Math.floor(v * 0.1);
            var v1 = v - (v2 * 5);
            v = (v2 + 1) * 5 + v1;
        }
        else if(c == "--"){
            v--;
        }
        else if(c == "-"){
            var v2 = Math.floor(v * 0.1);
            var v1 = v - (v2 * 5);
            v = (v2 - 1) * 5 + v1;
        }
        
        else{
            v++;
        }
        if     (v <   0){ v =   0; }
        else if(v > 100){ v = 100; }

		var vPercentage = Math.floor(v);
		opacity.text('透過'+vPercentage+'%');
		v = (100 - v) / 100;

		var item = a.data( 'data' );
        if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            GSI.GLOBALS.baseLayer.setOpacity(v);
            item._visibleInfo.opacity = v;
        }
        else{
    		item._visibleInfo.layer.setOpacity( v );
	    	item._visibleInfo.opacity = v;
        }
    },
    _opacity_start : function(a, opacity, c)
    {
        this.eDownMS   = 250;
        this.eDownTime = new Date().getTime()

        if(this._opacity_tm ){ clearTimeout (this._opacity_tm ); }
        if(this._opacity_tmi){ clearInterval(this._opacity_tmi); }

        this._opacity_tm  = null;
        this._opacity_tmi = null;

        var func = this;
        this._opacity_tm = setTimeout(
            function(){
                func._opacity_tmi = setInterval(
                    function(){
                        func._opacity(a, opacity, c + c);
                    }
                , 20
                );
            }
        , this.eDownMS);
    },
    _opacity_stop : function(a, opacity, c)
    {
        if(this._opacity_tm  != null){ clearTimeout (this._opacity_tm ); }
        if(this._opacity_tmi != null){ clearInterval(this._opacity_tmi); }

        var eUpTime = new Date().getTime();
        if (eUpTime - this.eDownTime < this.eDownMS) {
            this._opacity(a, opacity, c);
        }

        this.eDownTime = null;
    },
	_gray_scale : function(a, sw )
	{
		var item = a.data( 'data' );
        if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            item._visibleInfo.grayscale = sw.checked();

            GSI.GLOBALS.baseLayer.setGrayScale(sw.checked());
        }
	},
});

GSI.OpacitySlider = L.Class.extend( {

	includes: L.Mixin.Events,
	options : { value : 1 },
	element : null,
	initialize : function (options)
	{
		options = L.setOptions(this, options);
		this.opacity = options.value;
		this.element = $( '<div>' ).addClass( 'gsi_opacity_slider' );

		this.bg = $( '<div>' ).addClass( 'gsi_opacity_slider_bg' );
		this.element.append( this.bg );

		this.btn = $( '<div>' ).addClass( 'gsi_opacity_slider_btn' ) . draggable( {
			containment: this.element,
			scroll: false,
			drag : L.bind( function(  event, ui)
			{
				var w = this.element.outerWidth(false) - 24;
				this.opacity = 1 - ui.position.left / w;

				this.fire( 'change', this.opacity );
			}, this )
		} );
		this.element.append( this.btn );
	},
	refresh : function( opacity )
	{
		this.opacity = opacity;
		var w = this.element.outerWidth(false) - 24;
		var left  = Math.floor( w * (1-this.opacity) );
		this.btn.css( {left:left} );
	},
	getElement : function(){ return this.element; },
	getOpacity : function() {
		return this.opacity;
	}
} );

/************************************************************************
 L.Class
 - GSI.DialogManager
 ************************************************************************/
GSI.DialogManager = L.Class.extend( {
	dialogList : [],
	visibleList : [],
	initialize : function() {},
	append : function( dlg )
	{
		this.dialogList.push( dlg );
	},
	appendVisibleList : function( dlg )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				this.visibleList.splice( i,1 );
				break;
			}
		}

		this.adjust( dlg );
		this.visibleList.push( dlg );
		this.refreshZIndex();

		if ( !this._onWindowResize )
		{
			this._onWindowResize = L.bind( this.onWindowResize, this );
			$( window ).on( 'resize', this._onWindowResize );
		}
	},
	removeVisibleList : function( dlg )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				this.visibleList.splice( i,1 );
				break;
			}
		}
		this.refreshZIndex();

		if ( this.visibleList.length <= 0 )
		{
			if ( this._onWindowResize )
			{
				$( window ).off( 'resize', this._onWindowResize );
				this._onWindowResize = null;
			}
		}
	},
	activate : function( dlg )
	{
		this.appendVisibleList( dlg );
	},
	refreshZIndex : function()
	{
		var zIndex = 10000;
		var dlgIndex = -1;
		var idx = 1;

		for ( var i=0; i<this.visibleList.length-1; i++ )
		{
			var opacity = 0.6 + ( 0.4 / this.visibleList.length * idx );
			this.visibleList[i].css({'z-index':zIndex, opacity: opacity} );
			this.visibleList[i].addClass( "deactive");

			zIndex++;
			idx++;
		}

		if ( this.visibleList.length > 0 )
		{
			this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.95} );
			this.visibleList[i].removeClass( "deactive");
		}
	},
	adjust : function( d, windowSize )
	{
		if ( !windowSize ) windowSize = GSI.Utils.getScreenSize();

		var visible = d.container.is( ':visible' );
		if (  !visible )
		{
			d.container.css( { 'visibility' : 'hidden' } );
			d.container.show();
		}

		var offset = d.container.offset();
		var width = d.container.outerWidth(true);
		var height = d.container.outerHeight(true);
		var left = null;
		var top = null;

		// width
		if ( !d.isResizable() )
		{
			if ( windowSize.h > windowSize.w )
			{
				var newWidth = Math.floor( windowSize.w * 0.9 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{
					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
			else
			{
				var newWidth = Math.floor( windowSize.w * 0.6 );
				if ( d.options.width > newWidth )
				{
					d.container.css( { "max-width" : newWidth } );
					width = newWidth;
				}
				else
				{
					d.container.css( { "max-width" : d.options.width } );
					width =d.options.width;
				}
			}
		}

		// height
		if ( !d._userResized )
		{
			if ( windowSize.h > windowSize.w )
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.4 )  );
			}
			else
			{
				d.setMaxScrollHeight( Math.floor( windowSize.h * 0.65 ) );
			}
		}

		//left
		if ( offset.left > windowSize.w - ( width / 2 ) )
		{
			left = (windowSize.w - ( width / 2 )) ;
		}

		if ( offset.left <= -( width / 2 ) )
		{
			left =  -Math.floor( width / 2 );
			d.container.css( {left: -Math.floor( width / 2 ) + 'px'} );
		}

		if ( left != null )
		{
			d.container.css( {left: left + 'px'} );
		}

		//top
		if ( offset.top > windowSize.h - ( height / 2 ) )
		{
			top = (windowSize.h - ( height / 2 )) ;
		}

		if ( offset.top < 0 )
		{
			top = 0;
		}

		if ( top != null )
		{
			d.container.css( {top: top + 'px'} );
		}

		if ( !visible )
		{
			d.container.hide();
			d.container.css( { 'visibility' : 'visible' } );
		}
	},
	onWindowResize : function()
	{
		var windowSize = GSI.Utils.getScreenSize();
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			this.adjust( d,windowSize );
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.Edit.Marker
 ************************************************************************/
GSI.Edit.Marker = L.Class.extend( {
	includes: L.Mixin.Events,
	options :{},
	initialize : function( marker, options )
	{
		this.marker = marker;

		if ( this.marker ) this._map = this.marker._map;
		options = L.setOptions(this, options);
	},
	setOptions : function(options)
	{
		if ( !this.marker ) return;

		if ( options.icon )
			this.marker.setIcon( options.icon );
	},
	enable : function()
	{
		if ( !this.marker ) return;

		this.marker.dragging.enable();
	},
	disable : function()
	{
		if ( !this.marker ) return;
		this.marker.dragging.disable();
	}
} );

/************************************************************************
 L.Class
 - GSI.Footer
 ************************************************************************/
GSI.Footer = L.Class.extend( {
	options : {
		visible : true,
	},
	overlap : false,
	initialize : function (map,bottomLeftSpacer, bottomRightSpacer, mapSelector, btnSelector, footerSelector, upImage, downImage, options )
	{
		L.setOptions(this, options);
		if ( !options.visible )
		{
			$( btnSelector ).hide();
			$( footerSelector ).hide();
			return;
		}

		this.overlap = options.overlap;
		this.map = map;
		this.bottomLeftSpacer = bottomLeftSpacer;
		this.bottomRightSpacer = bottomRightSpacer;
		this.mapSelector = mapSelector;
		this.btnSelector = btnSelector;
		this.footerSelector = footerSelector;
		this.upImage = upImage;
		this.downImage = downImage;
		$( this.btnSelector).click( L.bind(this.onBtnClick,this) );

		this._onMapMove = L.bind(this.onMapMove, this);
		this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
		this._onMapMoveEnd = L.bind(this.onMapMoveEnd, this);

		$(window).resize( L.bind( this.onWindowResize, this ) );
		this.onWindowResize();

		$(this.btnSelector).css( { 'visibility' : 'visible'} ).show();
	},
	isVisible : function()
	{
		return $(this.footerSelector).is(':visible');
	},
	onWindowResize : function()
	{
		this.refreshSize();
	},
	setOverlap : function( on )
	{
		this.overlap = on;
		this.refreshSize();
	},
	getOverlap : function()
	{
		return this.overlap;
	},
    setVisible : function(sw){
        if(this.isVisible() != sw){
            this.onBtnClick();
        }
    },
	refreshSize : function()
	{
		var windowSize = GSI.Utils.getScreenSize();

		if ( windowSize.w < windowSize.h )
		{
			$( '.mini_comment' ).addClass( 'landscape' );
		}
		else
		{
			$( '.mini_comment' ).removeClass( 'landscape' );
		}

		var btn = $( this.btnSelector);
		var footerHeight =(  $(this.footerSelector).is(':visible') ? $( this.footerSelector ).outerHeight( true ) : 0 );

		btn.css( {
				left : Math.round( ( windowSize.w/2 ) - ( btn.outerWidth(true) / 2 ) ) + 'px',
				bottom : footerHeight + 'px'
			}
		);
		return;

		if (  !this.overlap  || !$(this.footerSelector).is(':visible') )
		{
			this.bottomLeftSpacer.setHeight( 0 );
			this.bottomRightSpacer.setHeight( 0 );
		}
		else
		{
			this.bottomLeftSpacer.setHeight( footerHeight );
			this.bottomRightSpacer.setHeight( footerHeight );
		}

		if ( !$(this.footerSelector).is(':visible') ) return;

		if(!this.overlap) $(this.mapSelector ).stop().css( {'bottom' : footerHeight + 'px'} );

		this.map.invalidateSize(true);
	},
	onBtnClick : function ()
	{
		var footerHeight = $( this.footerSelector ).outerHeight( true );

		if ( $(this.footerSelector).is(':visible') )
		{
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.upImage } );

			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : '0px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : '0px'},300 );
			}
			$(this.footerSelector ).stop().animate( {'bottom' : (-footerHeight )  + 'px'},300,
				 L.bind(function() {
				 	$("#footer" ).hide(); if ( !this.overlap ) this.map.invalidateSize();
				 	if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( 0 );
						this.bottomRightSpacer.setHeight( 0 );
					}
				 }, this )
			);

			this.map.off('movestart', this._onMapMoveStart );
			this.map.off('moveend', this._onMapMoveEnd );
		}
		else
		{
			this.onMapMove();
			this.onMapMoveEnd();
			$( this.btnSelector).find( "img" ).attr( { 'src' : this.downImage } );
			if ( this.overlap )
			{
				$(this.mapSelector ).stop().css( {'bottom' : '0px'} );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				this.map.invalidateSize();
			}
			else
			{
				$(this.mapSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
				$(this.btnSelector ).stop().animate( {'bottom' : footerHeight + 'px'},300 );
			}
			$(this.footerSelector ).css( {'bottom': (-footerHeight ) + 'px' } ).show().stop().animate( {'bottom' : 0 + 'px'},300,
				L.bind(function() {
					if ( !this.overlap ) this.map.invalidateSize();
					if ( this.overlap )
				 	{
						this.bottomLeftSpacer.setHeight( footerHeight );
						this.bottomRightSpacer.setHeight( footerHeight );
					}
				} , this )
			);

			this.map.on('movestart', this._onMapMoveStart );
			this.map.on('moveend', this._onMapMoveEnd );
		}
	},
	onMapMoveStart : function()
	{
		this.clear();
	},
	onMapMove : function()
	{
		var center = this.map.getCenter().wrap();
		var dms = GSI.Utils.latLngToDMS( center );

		$( '#latlng_60' ).html(
			(center.lat < 0 ? '-' : '') + dms.lat.d + '度' + dms.lat.m + '分' + ( Math.round( dms.lat.s * 100 ) / 100 ).toFixed(2)  + '秒'
			+ '&nbsp;'  +
			(center.lng < 0 ? '-' : '') + dms.lng.d + '度' + dms.lng.m + '分' + ( Math.round( dms.lng.s * 100 ) / 100 ).toFixed(2)  + '秒'
			);
		
		$( '#latlng_10' ).html(
			( Math.round( center.lat * 1000000 ) / 1000000 ).toFixed(6)
			+ ','
			+ ( Math.round( center.lng * 1000000 ) / 1000000 ).toFixed(6)
			);

		var utmPoint = GSI.UTM.Utils.latlng2PointName( center.lat, center.lng );
		$( '#utm_point' ).html( utmPoint == '' ? '---' : utmPoint);

		$( '#current_zoom' ).html(
			this.map.getZoom()
			);

		this.refreshSize();
	},
	onMapMoveEnd : function()
	{
		this.onMapMove();
		var center = this.map.getCenter().wrap();
		this.refresh(center.lng,center.lat);


	},
	clear : function()
	{
		$("#address").empty();
		$("#address").append("---");
		$("#elevation").empty();
		$("#elevation").append("---");
		$("#elevationSrc").empty();

		this.refreshSize();
		if ( this.ajaxAddress )
		{
			try
			{
				this.ajaxAddress.abort();
			}
			catch( e ){}

			this.ajaxAddress = null;
		}

		if ( this.ajaxElevation )
		{
			try
			{
				this.ajaxElevation.abort();
			}
			catch( e ){}
			this.ajaxElevation = null;
		}
	},
	refresh : function(lon, lat){

		this.clear();
		this.refreshTimerId  = setTimeout( L.Util.bind( this.execRefresh, this, lon, lat ), 800 );
	},
	getAddressResult : function(json)
	{
		if (json.results){
			var address = "";
			var addObj = json.results;
			var addressData = GSI.MUNI_ARRAY[parseInt(addObj.muniCd,10)+""];
			if (addressData) {
				addressData = addressData.split(",");
				var muniNm = (addressData[1]+addressData[3]).replace("　","");
				address += muniNm;
			}
			if (addObj.lv01Nm) address += addObj.lv01Nm;

			$("#address").empty();
			$("#address").append(address ? address : "---");
			this.refreshSize();
		}
	},
	getElevationRusult : function (data, dataSrc)
	{
		var outPutHeight = data;
		var outPutHeightSrc = "（" + "データソース：" + this.vDemAltSRC + "）";

		$( "#elevation" ).html( outPutHeight );
		$( "#elevationSrc" ).html( outPutHeightSrc );
		this.refreshSize();
	},
	execRefresh : function (lon, lat)
	{
		this.ajaxAddress = $.ajax({
			type: "GET",
			url:CONFIG.SERVERAPI.GETADDR,
			data: {
				"lon" : lon,
				"lat" : lat
			},
			dataType: "json",
			timeout: 30000,
			success: L.Util.bind( this.getAddressResult, this ),
			error : function(){}
		});

        if(this.vDemAltReq){
            for(var n = 0; n < this.vDemAltReq.length; n++){
                this.vDemAltReq[n].abort();
            }
        }

        this.vDemAlt      = "---";
        this.vDemAltSRC   = "---";
        this.vDemAltTypeN = 0;
        this.vDemAltReq   = new Array();

        var lon = lon * .017453292519943295; // DEG → RAD : lon = (lon / 180) * Math.PI;
        var lat = lat * .017453292519943295; // DEG → RAD : lat = (lat / 180) * Math.PI;
	    var R	= 128 / Math.PI;
	    this.vDemAltTileX = R * (lon + Math.PI);
	    this.vDemAltTileY = (-1) * R / 2 * Math.log((1 + Math.sin(lat)) / (1 - Math.sin(lat))) + 128;

        this.execRefreshAlt();
	},
	execRefreshAlt : function ()
	{
        if(this.vDemAltTypeN < CONFIG.DEM.length){
            var vType = CONFIG.DEM[this.vDemAltTypeN].type; if(!(vType == "TXT" || vType == "PNG")){ vType = "TXT"; }
            var vURL  = CONFIG.DEM[this.vDemAltTypeN].url;
            var vZ    = CONFIG.DEM[this.vDemAltTypeN].z;
            var vX    = this.vDemAltTileX;
            var vY    = this.vDemAltTileY;

            var vX_px     = vX * Math.pow(2, vZ);
            var vY_px     = vY * Math.pow(2, vZ);
            var vX_Tile   = Math.floor(vX_px / 256);
            var vY_Tile	  = Math.floor(vY_px / 256);
            this.vX_TilePX = Math.floor(vX_px) % 256;
            this.vY_TilePX = Math.floor(vY_px) % 256;

            var _vDemURL = vURL.replace("{z}", vZ).replace("{x}", vX_Tile).replace("{y}", vY_Tile);
            this._url = _vDemURL;
            if(vType == "TXT"){
		        this.ajaxElevation = $.ajax({
			          type     : "GET"
			        , url      : _vDemURL
                    , dataType : "text"
                  //, cache    : false
			        , success  : L.Util.bind( this.execRefreshAltTxt  , this )
                    , error    : L.Util.bind( this.execRefreshAltError, this )
		        });
                this.vDemAltReq.push(this.ajaxElevation);
            }
            else if(vType == "PNG"){
                this.DemPng             = new Image();
                this.DemPng.crossOrigin = "anonymous";
                this.DemPng.onload      = L.Util.bind( this.execRefreshAltPng  , this );
                this.DemPng.onerror     = L.Util.bind( this.execRefreshAltError, this );
                this.DemPng.src         = _vDemURL;

            }
        }
        else{
            this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        }
    },
    execRefreshAltTxt : function (vDem)
	{
        if(this.vDemAltTypeN == -1){
            return;
        }

        var f = false;
        vDem = vDem.replace(/\r/g, "");
        var vDemData = vDem.split("\n");
        if(vDemData.length >= this.vY_TilePX){
            var vDemDataY = vDemData[this.vY_TilePX];
            var vDemDataX = vDemDataY.split(",");
            if(vDemDataX.length >= this.vX_TilePX){
                var vDemDataAlt = vDemDataX[this.vX_TilePX];
                if(vDemDataAlt != "e"){
                    this.vDemAlt    = parseFloat(vDemDataAlt).toFixed(CONFIG.DEM[this.vDemAltTypeN].fixed) + "m";
                    this.vDemAltSRC = CONFIG.DEM[this.vDemAltTypeN].src;
                    f = true;
                    this.vDemAltTypeN = -1;
                }
            }
        }

        this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        if(!f){
            this.vDemAltTypeN++;
            this.execRefreshAlt();
        }
    },
    execRefreshAltPng : function (vDem)
	{
        var f = false;
        var oCanvasTile        = document.createElement("canvas");
            oCanvasTile.width  = this.DemPng.width;
            oCanvasTile.height = this.DemPng.height;  
        var oCanvasTileContext = oCanvasTile.getContext("2d");
        oCanvasTileContext.drawImage(this.DemPng, 0, 0);
        if(oCanvasTile.height >= this.vY_TilePX){
            if(oCanvasTile.width >= this.vX_TilePX){
                var data = oCanvasTileContext.getImageData(this.vX_TilePX, this.vY_TilePX, 1, 1).data;
                if(data.length >= 3){
                    var r = data[0];
                    var g = data[1];
                    var b = data[2];
                    var x = r * 256 * 256 + g * 256 + b;
                    var h = (x < Math.pow(2, 23)) ? x : x - Math.pow(2, 24);
                    if( h !== -Math.pow( 2, 23)){
                        this.vDemAlt    = parseFloat(h).toFixed(CONFIG.DEM[this.vDemAltTypeN].fixed) + "m";
                        this.vDemAltSRC = CONFIG.DEM[this.vDemAltTypeN].src;
                        f = true;
                    }
                }
            }
        }
        oCanvasTileContext = null;
        oCanvasTile        = null;

        this.getElevationRusult(this.vDemAlt, this.vDemAltSRC);
        if(!f){
            this.vDemAltTypeN++;
            this.execRefreshAlt();
        }
    },
    execRefreshAltError : function ()
	{
        this.vDemAltTypeN++;
        this.execRefreshAlt();
    }
} );



/************************************************************************
 L.Class
 - GSI.GeoLocation（位置情報取得）
 ************************************************************************/
GSI.GeoLocation = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {},

	initialize : function (map)
	{
		this.map = map;
	},
	getLocation : function()
	{
		if ( GSI.GeoLocation.can )
		{
			if ( this.watchId ) return false;
			this.watchCounter = 0;
			this.watchId = navigator.geolocation.watchPosition(
				L.bind(function(loc) {
					if ( loc.coords.accuracy < 100 || this.watchCounter >= 0)
					{
						var lat = loc.coords.latitude;
						var lng = loc.coords.longitude;
						var z = this.map.getZoom();
						if ( z < 15 )
						{
							z = CONFIG.SEARCHRESULTCLICKZOOM;
						}
						this.map.setView( [lat, lng], z );
						// クリア
						navigator.geolocation.clearWatch(this.watchId);
						this.watchId = null;
					}
					this.watchCounter++;
				}, this ),
				L.bind(this.locationError,this),
				{ enableHighAccuracy: true, timeout: 60000, maximumAge: 0 }
			);

			return true;
		}
		else return false;

	}
} );

GSI.GeoLocation.can = ( navigator.geolocation && typeof navigator.geolocation.getCurrentPosition == 'function' ? true : false );

/************************************************************************
 L.Class
 - GSI.HashOptions
 ************************************************************************/
GSI.HashOptions = L.Class.extend( {
    initialize : function (map)
    {
        this.map = map;

		this._onMapMoveStart = L.bind(this.onMapMoveStart, this);
		this._onMapMoveEnd   = L.bind(this.onMapMoveEnd  , this);

		this.map.on('movestart', this._onMapMoveStart);
		this.map.on('moveend'  , this._onMapMoveEnd  );

        this.vLD                = 3000;
        this.oTM                = null;
        this.vTM                = 1500;
        this.nTM                = 0;
        this.vHash              = "";
        this.vHashOptions       = "";
        this.eHashChange        = false;
        this.eHashChangeOptions = "";

        this.Init();
    },
    Init : function(){
        this.oTM                = null;
        this.vHash              = "";
        this.vHashOptions       = "";
        this.eHashChange        = false;
        this.eHashChangeOptions = "";

        if(this.vTM >= 1000){
            this.HashCreate();
        }
        this.Hash();
    },
	onMapMoveStart : function()
	{
        clearInterval(this.oTM);
        this.oTM   = null;
	},
	onMapMoveEnd : function()
	{
        if(this.oTM != null){
            clearInterval(this.oTM);
        }

        this.oTM   = null;
        this.Hash();
    },
    Callback : function(t, o, hash){
        if(t == "moveend"){
            hash += o.vHashOptions;
            o.vHash = hash;
        }
        else if(t == "hashchange"){
            o.HashSetProc(hash);
        }

        return hash;
    },
    Hash : function()
    {
        if(this.oTM == null){
            var that = this;
            this.oTM = setInterval(
                function(){
                    that.nTM += that.vTM;
                    if(that.nTM > that.vLD){
                        that.nTM = that.vLD;
                    }
                    that.HashCreate();
                }
            , this.vTM);
        }
    },
    HashCreate : function(){
        var hash          = location.hash;
        var hash_location = "";
        var hash_options  = this.HashCreateProc();

        if(hash.indexOf("/&") == -1){
            hash_location     = GSI.GLOBALS.hash.formatHash(this.map);

            this.vHash        = "";
            this.vHashOptions = "";
        }
        else{
            var hash_ary = hash.split("/&");
            hash_location =        hash_ary[0];
        }

        hash = hash_location + hash_options;
        if(!this.eHashChange && this.vHash != hash){
            location.replace(hash);
            this.vHash        = hash;
            this.vHashOptions = hash_options;
        }

        this.eHashChange = false;
    },
    HashCreateProc : function(){
        var v    = "";
        var hash = "";

        if(this.eHashChange){
            hash = this.eHashChangeOptions;
        }
        else{
            hash += "/";

            // 基本設定：表示中の背景地図を共有
            // base=
            v = GSI.GLOBALS.pageStateManager.getBaseLayerQueryString();
            if(v != ""){
                hash += "&" + v;
            }

            // 基本設定：表示中のレイヤーを共有
            // ls=
            v = GSI.GLOBALS.pageStateManager.getLayersQueryString();
            if(v != ""){
                hash += "&" + v;
            }

            // 選択中の情報設定
            // disp=
            v = GSI.GLOBALS.pageStateManager.getTileViewSetting();
            if(v != ""){
                hash += "&" + v;
            }

            // 情報リスト設定：表示階層を共有
            // lcd=
            v = GSI.GLOBALS.pageStateManager.getCurrentPathQueryString();
            if(v != ""){
                hash += "&" + v;
            }

		    var hcList = [];

		    var skips = {};
		    skips[ CONFIG.PARAMETERNAMES.CLICKMOVE] = true;
		    skips[ CONFIG.PARAMETERNAMES.COCOTILE ] = true;
		    skips[ CONFIG.PARAMETERNAMES.MINIMAP  ] = true;

		    var visibles = {};
		    visibles[ CONFIG.PARAMETERNAMES.CENTERCROSS] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.CENTERCROSS); // 表示設定：中心十字線        vs=c[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.JIHOKULINE ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.JIHOKULINE ); // 表示設定：緯度経度グリッド  vs=l[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.LATLNGGRID ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.LATLNGGRID ); // 表示設定：UTMグリッド       vs=u[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.UTMGRID    ] = GSI.GLOBALS.pageStateManager.getViewSettingVisible(CONFIG.PARAMETERNAMES.UTMGRID    ); // 表示設定：磁北線            vs=j[0/1]
		    visibles[ CONFIG.PARAMETERNAMES.FOOTER     ] = GSI.GLOBALS.footer.isVisible();
		    var visibleDialogs = {};
		    visibleDialogs[ CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG ] = GSI.GLOBALS.viewListDialog .getVisible(); // 情報リスト設定：情報リスト d=l
		    visibleDialogs[ CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG] = GSI.GLOBALS.layerTreeDialog.getVisible(); // 情報リスト設定：選択中の情報   d=v

		    var queryParams = GSI.GLOBALS.pageStateManager.getQueryParams(
            {
			      hcList : hcList
			    , vsInfo : {
				    skips    : skips,
				    visibles : visibles
			    }
			    , visibleDialogs : visibleDialogs
		    });

		    for( var key in queryParams)
		    {
                v = queryParams[key];
                if(v != ""){
                    hash += "&" + key + '=' + queryParams[key];
                }
		    }

            if(this.nTM < this.vLD){
                var vHash = location.hash.split("/&");
                if(vHash.length > 1){
                    if(    vHash[1].indexOf("base=") != -1
                        || vHash[1].indexOf("ls="  ) != -1
                        || vHash[1].indexOf("disp=") != -1
                        || vHash[1].indexOf("lcd=" ) != -1
                    ){
                        if(!(   this.vHash.indexOf("base=") != -1
                             || this.vHash.indexOf("ls="  ) != -1
                             || this.vHash.indexOf("disp=") != -1
                             || this.vHash.indexOf("lcd=" ) != -1
                            )
                        ){
                            hash = "/&" + vHash[1];
                        }
                    }
                }
            }
        }

        return hash;
    },
    HashSetProc : function(hash){
        var n = hash.indexOf("/&");
        if(n >= 1){
            var options = hash.substr(n);
            if(this.vHashOptions != options){
                this.eHashChange = true;
                this.eHashChangeOptions = options;

                GSI.GLOBALS.queryParams.initialize_proc(options);

                // 基本設定：表示中の背景地図を共有
                // base=
                var base = GSI.GLOBALS.queryParams.getBaseMap();
                GSI.GLOBALS.baseLayer.setActiveId(base);
                // base_grayscale=
                GSI.GLOBALS.baseLayer.setGrayScale(GSI.GLOBALS.queryParams.getBaseMapGrayScale());

                // 基本設定：表示中のレイヤーを共有
                // ls=
                //  +
                // 選択中の情報設定
                // disp=
                var layers = GSI.GLOBALS.queryParams.getLayers();
                var bfind = false;
                var vl = GSI.GLOBALS.pageStateManager.getLayersQueryString();
                var idx = vl.indexOf( "ls=" );
                if ( idx >= 0 )
                {
                	vl = vl.substring( idx + 3 ).split( "%7C" );
                }
                if ( layers && ( vl && vl.length > 0 ) )
                {
                	
	                for( var i =0; i < layers.length; i++ )
	                {
	                	for( var j=0; j < vl.length; j++ )
	                	{
	                		if ( layers[i].id == vl[j] )
	                		{
	                			bfind = true;
	                			break;
	                		}
	                		
	                	}
	                	if ( bfind == false )
	                	{
		                    GSI.Utils.sendSelectedLayer( layers[i].id );
		                }
	                	bfind = false;
	                }
                }
                else if ( layers )
                {
                    for( i = 0; i < layers.length; i++ )
                    {
                        GSI.Utils.sendSelectedLayer( layers[i].id );
                    }
                }
                GSI.GLOBALS.layersJSON.initialize_layers_data(layers);
                GSI.GLOBALS.viewListDialog.Refresh(GSI.GLOBALS.layersJSON.visibleLayers);

                var viewSetting = GSI.GLOBALS.queryParams.getViewSetting();
                // 表示設定：中心十字線           vs=c[0/1]
                GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CENTERCROSS].obj.setVisible(viewSetting.centerCross);
                // 表示設定：磁北線               vs=j[0/1]
                GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ].obj.setVisible(viewSetting.jihokuLine );
                // 表示設定：緯度経度グリッド     vs=l[0/1]
                GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ].obj.setVisible(viewSetting.latLngGrid    );
                // 表示設定：UTMグリッド          vs=u[0/1]
                GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID    ].obj.setVisible(viewSetting.utmGrid );
                // 表示設定：コンテキストメニュー vs=f[0/1]
                GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.FOOTER     ].obj.setVisible(viewSetting.footer     );

                // 情報リスト設定：選択中の情報   d=v
                if(GSI.GLOBALS.queryParams.getViewListDialogVisible()){
                    GSI.GLOBALS.viewListDialog.show();
                }
                else{
                    GSI.GLOBALS.viewListDialog.hide();
                }

                // 情報リスト設定：情報リスト d=v
                if(GSI.GLOBALS.queryParams.getLayerTreeDialogVisible()){
                    GSI.GLOBALS.layerTreeDialog.show();
                }
                else{
                    GSI.GLOBALS.layerTreeDialog.hide();
                }

            }

        }
    }
} );

/************************************************************************
 L.Class
 - GSI.Header
 ************************************************************************/
GSI.Header = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		visible : true
	},
	topMessageVisible : false,
	header : null,
	initialize : function (map, options )
	{
		options = L.setOptions(this, options);
		if ( !options.visible )
		{
			$( "#header" ).hide();
			$( "#topmessage" ).hide();
			this.topMessageVisible = false;
		}
		else
		{
			this.header = $( "#header" );
			this.logoImage = $( "#logoimage" );
			this.topMessage = $( "#topmessage" );

			// お知らせ表示
			if ( this._isVisibleStart() ) //options.message && options.message != '' )
			{
				this.topMessage.empty() .append( $("<div>").addClass('message').html( options.message ) );
				var closeBtn = $( '<a>' ).addClass( 'closebtn' ).attr( {'href': 'javascript:void(0);'} ).html( '×' );

				this.topMessage.append( closeBtn );

				closeBtn.click( L.bind( this.onCloseClick, this ) );

				this.topMessageVisible = true;
			}
			else
			{
				$( "#topmessage" ).hide();
				this.header.addClass( 'border_bottom' );
				this.topMessageVisible = false;
			}
		}
		this.map = map;
	},
	_isVisibleStart : function()
	{
		if ( this.options.message && this.options.message != '' )
		{
			if ( this.options.expires > 0 )
			{
				try
				{
					var cookie = new GSI.Utils.Cookie();
					var isHidden = cookie.get( 'topmessage_hidden' );
					var id = cookie.get( 'topmessage_id' );
					// id change
					if ( isHidden == '1' && ( id == this.options.id ) ) return false;
				}
				catch( e ){}
			}
			else
			{
				try
				{
					cookie.remove( 'topmessage_hidden' );
					cookie.remove( 'topmessage_id' );
				}
				catch( e ){}
			}
			return true;
		}
		else
		{
			return false;
		}
	},
	hideTopMessage : function()
	{
		this.topMessage .hide();
		this.header.addClass( 'border_bottom' );
		this.topMessageVisible=false;
		
		try
		{
			if ( this.options.expires > 0 )
			{
				var cookie = new GSI.Utils.Cookie();
				cookie.set( 'topmessage_hidden', '1', { expires: this.options.expires } );
				if ( this.options.id )
					cookie.set( 'topmessage_id', this.options.id, { expires: this.options.expires } );
				else
					cookie.remove( 'topmessage_id' );
			}
			else
			{
				cookie.remove( 'topmessage_hidden' );
				cookie.remove( 'topmessage_id' );
			}
		}
		catch( e ){}
	},
	onCloseClick : function()
	{
		this.topMessage.animate(
			{
				height: "hide"
			},
			{
				duration: 80, easing: "linear",
				complete: L.bind( function(){this.hideTopMessage();this.fire( 'topmessagechange' );}, this ),
				step: L.bind( function(){this.fire( 'topmessagechange' );}, this )
			}
		);
	},
	getHeight : function()
	{
		if ( !this.options.visible ) return 0;

		return this.header.outerHeight(true) + ( this.topMessageVisible ? this.topMessage.outerHeight( true ) : 0 );
	},
	refresh : function(screenSize)
	{
		if ( !this.options.visible ) return;

		var removeClassName = 'logo_l';
		var addClassName = 'logo_s';
		var imageUrl = 'image/logo_s.png';

		if ( screenSize.w >= 600 )
		{
			removeClassName = 'logo_s';
			addClassName = 'logo_l';
			imageUrl = 'image/logo_l.png';
		}

		this.header .removeClass( removeClassName );
		this.header .addClass( addClassName );
		if ( this.currentImageUrl != imageUrl )
		{
			this.logoImage.attr( { src:imageUrl} );
			this.currentImageUrl = imageUrl;
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.IconSelector
 ************************************************************************/
GSI.IconSelector = L.Class.extend( {
	includes: L.Mixin.Events,
	iconList : [],
	options :{
		cols : 10
	},
	initialize : function( image, iconList, options )
	{
		this.image = image;
		this.image.css( { cursor:'pointer'} );
		this.iconList = ( iconList ? iconList : [] );

		options = L.setOptions(this, options);

		this.image.click( L.bind( this.onClick, this ) );
	},
	onClick : function()
	{
		this.show();
	},
	onSelect : function( iconInfo )
	{
		this.image.attr( {src:iconInfo.url} );
		this.selectedIcon = iconInfo;
		this.fire( 'select', { selectedIcon : iconInfo } );
		this.hide();
	},
	setSelectedIcon : function( iconUrl )
	{
		this.selectedIcon = null;
		for ( var i=0; i<this.iconList.length; i++ )
		{
			if ( this.iconList[i].url == iconUrl )
			{
				this.selectedIcon = this.iconList[i];
				break;
			}
		}
	},
	create : function()
	{
		if ( this.container )return;

		this.container = $( '<div>' ).addClass( 'gsi_iconselector' ).hide();

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = null;
		var colNo = 0;

		for ( var i=0; i<this.iconList.length; i++ )
		{
			var iconInfo = this.iconList[i];
			colNo = i % this.options.cols;

			if ( colNo == 0 )
			{
				tr = $( '<tr>' );
				tbody.append( tr );
			}

			var td = $( '<td>' );
			var a = $( '<a>' ).attr( { href: 'javascript:void(0);'} ).click( L.bind( this.onSelect, this, iconInfo ) );
			var image = $( '<img>' ).attr( {src:iconInfo.url} );
			if ( iconInfo.size )
			{
				image.css({
					width : iconInfo.size[0],
					height : iconInfo.size[1]
				});
			}

			a.append( image );
			td.append( a );
			tr.append( td );
		}

		if ( tr )
		{
			for ( var i = colNo; i < this.options.cols; i++ )
			{
				var td = $( '<td>' ).html( '<br>' );
				tr.append( td );
			}
		}

		table.append( tbody);
		this.container.append( table );
		this.container.css('overflow', 'scroll').css('height', '500px');

		$( document.body ).append( this.container );
	},
	show : function()
	{
		if ( !this.container ) this.create();

		var windowSize = GSI.Utils.getScreenSize();
		var offset = this.image.offset();
		var containerSize = { w:0, h:0 };
		if ( !this.container.is( ':visible' ) )
		{
			this.container.css( { "visibility": "hidden"} );
			this.container.show();
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
			this.container.hide();
			this.container.css( {"visibility": "visible"} );
		}
		else
		{
			containerSize.w = this.container.outerWidth(true);
			containerSize.h = this.container.outerHeight(true);
		}

		var pos = {
			left:offset.left - Math.floor( containerSize.w / 2 ),
			top:offset.top + this.image.outerHeight(true )
		};

		if ( pos.top + containerSize.h > windowSize.h ) pos.top = windowSize.h - containerSize.h;
		if ( pos.left + containerSize.w > windowSize.w ) pos.left = windowSize.w - containerSize.w;

		this.container.css( {
			left : pos.left + 'px',
			top : pos.top + 'px'
		} );

		this.container.slideDown('fast');

		if ( !this._onScreenMouseDown )
		{
			this._onScreenMouseDown = L.bind( this.onScreenMouseDown, this );
			$( document.body ).on( 'mousedown', this._onScreenMouseDown );
		}
	},
	hide : function()
	{
		if ( this._onScreenMouseDown )
		{
			$( document.body ).off( 'mousedown', this._onScreenMouseDown );
			this._onScreenMouseDown = null;
		}

		if ( !this.container ) return;
		this.container.slideUp('fast');
	},
	onScreenMouseDown : function( event )
	{
		if ( !this.container ) return;
		if ( this.container[0] == event.target ) return;

		var target = $( event.target );
		var parents = target.parents();

		for ( var i=0; i<parents.length; i++ )
		{
			if ( parents[i] == this.container[0] )
			{
				return;
			}
		}

		this.hide();
	}
} );


/************************************************************************
 L.Class
 - GSI.JihokuLine（磁北線）
 ************************************************************************/
GSI.JihokuLine = L.Class.extend( {
	options : {
		visible : false,
		num : 5,
		lineStyle : {
			"color": "#ff0000",
			"weight": 2,
			"opacity": 1,
			"fill" : false,
			"fillOpacity":1,
			"clickable" : false
		},
		labelClassName : 'jihoku_label'
	},
	initialize : function (map,options)
	{
		options = L.setOptions(this, options);
		this._map = map;

		this._refresh = L.bind(this.refresh, this);

		this.setVisible(this.options.visible);
	},
	getVariation : function ()
	{
		//円周率
		var pi = Math.PI;
		var center = this._map.getCenter();
		return GSI.Utils.getVariation(center) * pi / 180;	// 角度をラジアンに変換
	},
	clear : function()
	{
		if (this._layer)
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}
		this._lines = null;
		this._label = null;
	},
	refresh : function()
	{
		var center = this._map.getCenter();
		//非表示 or 下記範囲外
		//経度：122度～154度
		//緯度：20度～46度
		if (
			( !this.options.visible )
			||
			!GSI.Utils.isVaridVariation(center)
			)
		{
			this.clear();
			return ;
		}

		// ズームレベルが設定を下回る場合、表示しない
		if (this._map.getZoom() < CONFIG.JIHOKULINEAVAILABLEZOOM ) {
			this.clear();
			return ;
		}

		var mc = GSI.Utils.get2ndMesh(center.lat, center.lng);

		var count = this.options.num;
		//var variation = GSI.Utils.getVariation(center);
		if (!GSI.MeshDeclination[mc])
		{
			this.clear();
			return;
		}
		var variation = GSI.MeshDeclination[mc];
		var idx1 = variation.indexOf(",");
		var nVariation = parseFloat(variation.substring(0, idx1));
		var sVariation = variation.substring(idx1+1);
		
		//円周率
		var pi = Math.PI;
		var center = this._map.getCenter();
		var rad = nVariation * pi / 180;	// 角度をラジアンに変換
		
		// 地図中央の経度
		var centerLng = this._map.getCenter().lng;
		var bounds = this._map.getBounds();

		// 表示されている領域の高さ
		var mapHeight = Math.abs(bounds.getSouth() - bounds.getNorth());
		// 表示されている領域の幅
		var mapWidth = Math.abs(bounds.getEast() - bounds.getWest());

		if ( !this._lines ) this._lines = [];
		var layer = ( this._layer ? this._layer : L.featureGroup() );
		layer._noMeasure = true;

		var lineStyle = this.options.lineStyle;

		for(var i = 0; i < count; i++)
		{
			var latLngArr = null;
			
			if ( Math.tan( rad) >= 0 )
			{
				latLngArr =[ 
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) ), 
					L.latLng(bounds.getSouth(), bounds.getWest()  + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) 
				]; 
			} else {
				latLngArr =[ 
					L.latLng(bounds.getNorth(), bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1) + mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)), L.latLng(bounds.getSouth(), 
					bounds.getWest() + (mapWidth - mapHeight * Math.tan(rad) / Math.cos(center.lat * pi / 180)) * i / (count - 1)) 
				];
			}

			if ( this._lines.length -1 < i )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				layer.addLayer( line );

				this._lines.push( line );
			}
			else
			{
				this._lines[i].setLatLngs(latLngArr);
			}
		}

		var KKK_NUM = sVariation;
		
		if (!this._label) {

			// ラベル表示
			var label = new L.Label({
				zoomAnimation : true,
				noHide : true,
				offset: [0, -34],
				className: this.options.labelClassName,
				clickable : false
			});

			label.setContent('<div unselectable="on">' + KKK_NUM + '</div>');
			label.setLatLng(this._map.getCenter());
			this._label = label;
			layer.addLayer(label);
		}
		else {
			this._label.setContent('<div unselectable="on">' + KKK_NUM + '</div>');
			this._label.setLatLng(this._map.getCenter());
		}

		if ( !this._layer )
		{
			this._layer = layer;
			this._map.addLayer( this._layer );
		}
		if ( this._layer  ) this._layer.bringToBack();
	},
	setVisible : function( on )
	{
		this.options.visible = on;
		if ( this.options.visible )
		{
			this._map.on('move', this._refresh );
		}
		else
		{
			this._map.off('move', this._refresh );
		}
		this.refresh();
	},
	getVisible : function()
	{
		return this.options.visible;
	}
} );

/************************************************************************
 L.Class
 - GSI.LatLngGrid（緯度経度グリッド）
 ************************************************************************/
GSI.LatLngGrid = L.Class.extend( {
	options : {
		lineStyle : {
			color : "#1D417A",
			weight : 2,
			opacity: 1,
			fillOpacity:1,
			dashArray : [3,3]
		},
		labelClassName : 'latlnggrid_label'
	},
	visible : false,
	initialize: function(map, options) {
		this._layer = null;
		this._map = map;

		options = L.setOptions(this, options);

		options.lineStyle.clickable = false;

		this._refresh = L.bind(this.refresh, this);
		this._visible = options.visible;
		this.setVisible(this._visible);
	},
	clear : function()
	{
		if ( this._layer )
		{
			this._map.removeLayer( this._layer );
			this._layer = null;
		}
		this._lines = null;
		this._labels = null;
	},
	refresh : function()
	{
		if ( !this._visible )
		{
			this.clear();
			return ;
		}
		
		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
		{
			this.clear();
		}
		var bounds = this._map.getBounds();
		var zoom = this._map.getZoom();
		var distance = 3600 * 5;

		for( var i=0;i< this.options.condition.length; i++ )
		{
			var c = this.options.condition[i];
			if ( zoom <= c.zoom )
			{
				distance = c.grid;
				break;
			}
		}

		var south = bounds.getSouth();
		var north = bounds.getNorth();
		var west = bounds.getWest();
		var east = bounds.getEast();

		if ( south < -90 ) south = -90;
		if ( north >= 90 ) north = 90;

		if ( west < -180 ) west = -180;
		if ( west > 180 ) west = 180;

		if ( east < -180 ) east = -180;
		if ( east > 180 ) east = 180;

		var startLat = Math.floor( Math.floor( Math.floor( south * distance ) / distance ) * 3600 );
		startLat = Math.floor( Math.floor( south * 3600 ) / distance ) * distance;

		var endLat = Math.floor( north * 3600 );

		var startLng = Math.floor( Math.floor( Math.floor( west * distance ) / distance ) * 3600 );
		startLng = Math.floor( Math.floor( west * 3600 ) / distance ) * distance;
		var endLng = Math.floor(east * 3600 );

		var lineStyle = this.options.lineStyle;

		if ( !this._lines ) this._lines = [];
		if ( !this._labels ) this._labels = [];

		var lineNo = 0;
		var labelNo = 0;
		var layer = ( this._layer ? this._layer : L.featureGroup() );

		layer._noMeasure = true;

		for ( var y = startLat; y<endLat+distance; y+=distance )
		{
			var lat = y / 3600.0;

			if ( lat < -80 || lat > 80 ) continue;
			var latLngArr =[
				L.latLng(lat, west),
				L.latLng(lat, east)
			];

			if ( lineNo >= this._lines.length )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				this._lines.push( line );
				layer.addLayer( line );
			}
			else
			{
				this._lines[lineNo].setLatLngs( latLngArr );
			}
			lineNo++;

			// ラベル表示
			for ( var x = startLng; x<endLng+distance; x+=distance )
			{
				var lng = x / 3600.0;

				if ( lng < -180 || lng > 180 ) continue;

				var dms = GSI.Utils.latLngToDMS( { 'lng' : lng, 'lat' : lat} );
				dms.lat.s = Math.round( dms.lat.s );
				dms.lng.s = Math.round( dms.lng.s );

				if ( dms.lat.s == 60 ){ dms.lat.s = 0; dms.lat.m ++; }
				if ( dms.lng.s == 60 ){ dms.lng.s = 0; dms.lng.m ++; }
				if ( dms.lat.m == 60 ){ dms.lat.m = 0; dms.lat.d ++; }
				if ( dms.lng.m == 60 ){ dms.lng.m = 0; dms.lng.d ++; }

				var content =
					'<div unselectable = "on">' + (lat < 0 ? '-' : '') + dms.lat.d + '°' +  dms.lat.m + ' ′' + Math.round( dms.lat.s) + ' ″' + '</div>'
					+
					'<div unselectable = "on">' + (lng < 0 ? '-' : '') + dms.lng.d + '°' + dms.lng.m + '′' + Math.round( dms.lng.s )  + ' ″' + '</div>';
				var latLng = { 'lng' : lng, 'lat' : lat};

				var label = null;

				if ( labelNo >= this._labels.length )
				{
					label = new L.Label({
						zoomAnimation : true,
						noHide : true,
						offset: [8, -34],
						className: this.options.labelClassName,
						clickable : false
					});
					label.setContent( content );
					label.setLatLng( latLng );
					this._labels.push( label );
					layer.addLayer( label );
				}
				else
				{
					label = this._labels[labelNo];
					label.setContent( content );
					label.setLatLng( latLng );
				}
				labelNo++;
			}
		}

		for ( var x = startLng; x<endLng+distance; x+=distance )
		{
			var lng = x / 3600.0;
			if ( lng < -180 || lng > 180 ) continue;

			var latLngArr =[
				L.latLng(north, lng),
				L.latLng(south, lng)
			];

			if ( lineNo >= this._lines.length )
			{
				var line = L.polyline(latLngArr,lineStyle );
				line._noMeasure = true;
				this._lines.push( line );
				layer.addLayer( line );
			}
			else
			{
				this._lines[lineNo].setLatLngs( latLngArr );
			}
			lineNo++;
		}

		if ( !this._layer )
		{
			this._layer = layer;
			this._map.addLayer( this._layer );
		}

		// 不要なライン、ラベルの削除
		this._clearLayerArr( this._lines, lineNo );
		this._clearLayerArr( this._labels, labelNo );
		
		if ( this._layer  ) this._layer.bringToBack();
	},
	_clearLayerArr : function( arr, idx )
	{
		if ( this._layer )
		{
			for ( var i= idx; i< arr.length; i++ )
			{
				this._layer.removeLayer( arr[i] );
			}
		}
		if ( arr.length > idx )
		{
			arr.splice(idx);
		}
	},
	setVisible : function( on )
	{
		this._visible = on;
		if ( this._visible )
		{
			this._map.on('moveend', this._refresh );
			this.refresh();
		}
		else
		{
			this._map.off('moveend', this._refresh );
			this.clear();
		}
	},
	getVisible : function()
	{
		return this._visible;
	}
});

/************************************************************************
 L.Class
 - GSI.LayerOpacitySetter（各レイヤーへの不透明度設定）
 ************************************************************************/
GSI.LayerOpacitySetter = L.Class.extend({
	opacity : 1,
	getOpacity : function()
	{
		return this.opacity;
	},
	setOpacity : function(layer,opacity)
	{
		this.opacity = opacity;
		this._setLayerOpacity( layer );
	},
	_setLayerOpacity : function( layer )
	{
		if ( !layer ) return;

		if ( layer.setOpacity )
		{
			layer.setOpacity( this.opacity );
		}
		else if ( layer._icon )
		{
			$( layer._icon ).css( {opacity:this.opacity} );
		}
		else if ( layer._container )
		{
			$( layer._container ).css( {opacity:this.opacity} );
		}

		if ( layer.eachLayer )
		{
			layer.eachLayer( L.bind( this._setLayerOpacity, this) );
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.LayersJSON（layers.txt読み込み）
 ************************************************************************/
GSI.LayersJSON = L.Class.extend( {
	includes: L.Mixin.Events,
	ajax : null,
	layers : [],
	visibleLayers: [],
	visibleLayersHash : {},
	currentFileIndex : -1,
	options : {
		files : [ "layers.txt" ]
	},
	initialize : function (options)
	{
        this._load_base   = false;
        this._loadingData = null;
        this._data        = [];

		options = L.setOptions(this, options);

		if ( options.layers )
		{
			this.options.layers = $.extend( true, [], options.layers );

			this._loadingData= [];
			for ( var i=0; i<this.options.layers.length; i++ )
			{
				this._loadingData.push( {
					url    : this.options.layers[i],
                    load   : false,
					layers : []
				} );
			}
		}

        // After loadBase()
        //this.initialize_layers(this.options.visibleLayers);
	},
    initialize_layers : function(layers)
    {
        this.visibleLayers     = [];
        this.visibleLayersHash = [];

		if ( !layers ){
            this.options.visibleLayers = [];
        }
        else{
            this.options.visibleLayers = layers;
        }

        var fBaseMap = false;
		for ( var i=0; i<this.options.visibleLayers.length; i++ )
		{
			var layerData = this.options.visibleLayers[i];
            var fBaseMapItem = false;
            for(var iBaseMap = 0; iBaseMap < CONFIG.BASETILES.length; iBaseMap++){
                if(layerData.id == CONFIG.BASETILES[iBaseMap].id){
                    fBaseMapItem = true;
                    break;
                }
            }

            if(fBaseMapItem){
                if(fBaseMap){
                    continue;
                }
                fBaseMap = true;
            }

			var info = {
				id : layerData.id,
				idx : this.visibleLayers.length,
				initialOpacity : layerData.opacity,
				hidden : layerData.hidden
			};

            if(!(layerData.id in this.visibleLayersHash)){
			    this.visibleLayers.push( info );
			    this.visibleLayersHash[ layerData.id ] = info;
            }
		}
    },
    initialize_layers_data : function(layers)
    {
        this.initialize_layers(layers);
        this._initializeData( this._data, null );

    },
    loadBase : function(){
        var load = this._load_base;
        this._load_base = true;
        return load;
    },
	setHasTileList : function( tileIdList )
	{
		this.hasTileList = tileIdList;
		this.refreshHasState();
	},
	refreshHasState : function()
	{
		if ( !this.hasTileList || !this.layers ) return;
		for ( var i=0; i<this.layers.length; i++ )
		{
			var info = this.layers[i];
			info.hasTile = ( this.hasTileList[ info.id ] == true  || !info.cocotile );
		}

	},
    add : function(layers){
        if(layers){
            if(this._loadingData == null){
                this._loadingData     = [];
    			this.currentFileIndex = -1;
            }
		    for (var i = 0; i < layers.length; i++){
				this._loadingData.push( {
					url    : layers[i],
                    load   : false,
					layers : []
				} );
            }

            if(this.currentFileIndex == -1){
			    this._loadNext();
            }
        }
    },
	load : function()
	{
		if ( this.ajax )
		{
			try
			{
				this.ajax.abort();
			}
			catch( e ) {}
			this.ajax = null;
		}

		if ( this._loadingData )
		{
			this.currentFileIndex = -1;
			this._loadNext();
		}
		else
		{
			this.ajax = $.ajax({
				type: "GET",
				url: "layers.txt",
				dataType: "text",
				cache:false,
				success : L.bind(this._onLoad, this),
				error : L.bind(this._onLoadError, this)
			});
		}
	},
	_loadNext : function()
	{
		this.currentFileIndex++;

		if ( this.currentFileIndex >= this._loadingData.length )
		{
			for ( var i=0; i<this._loadingData.length; i++ )
			{
				// concatは？
				for ( var j=0; j<this._loadingData[i].layers.length; j++ )
                {
					this._data.push( this._loadingData[i].layers[j] );
				}
			}

			this._loadingData = null;

            var _data = this._data.concat();
            this._initializeTreeCopy(_data, null);
			this._original = $.extend(true, [], _data);

			this.layers = [];

			this._initializeData( this._data, null );

			this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers, visibleLayersHash: this.visibleLayersHash } );

			return;
		}

		var url = this._loadingData[ this.currentFileIndex ].url;

		this.ajax = $.ajax({
			type: "GET",
			url: url,
			dataType: "text",
			cache: CONFIG.LOADLAYERSTXTCACHE,
			success : L.bind(this._onLoad, this),
			error : L.bind(this._onLoadError, this)
		});
	},
	_onLoad : function(data, n)
	{
		var json = JSON.parse(data);
        if(!this._load_base){
            var json_base = JSON.parse("{ \"layers\": [ { \"type\": \"LayerGroup\", \"title\": \"" + CONFIG.layerBaseFolder + "\", \"title_sys\": \"" + CONFIG.layerBaseFolderSYS + "\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] } ] }");
                json_base.layers[0].entries = json.layers.concat();
                json      = json_base;
        }

        if ( json.layers ){
            this._onLoad_SRC_URL(json.layers, this._loadingData[ this.currentFileIndex ].url);
        }

		if ( this._loadingData )
		{
            this._loadingData[ this.currentFileIndex ].load   = true;
			this._loadingData[ this.currentFileIndex ].layers = json.layers;
			this._loadNext();
		}
		else
		{
			if ( json.layers )
			{
				this._data = json.layers;
				this._original = $.extend(true, [], this._data);
				this.layers = [];

				this._initializeData( this._data, null );

				this.fire( "load", { tree: this.tree, visibleLayers : this.visibleLayers, visibleLayersHash: this.visibleLayersHash } );
			}
			else{
                this._onLoadError();
            }
			return;
		}
	},
	_onLoad_SRC_URL : function(data, url)
	{
        for(var i = 0; i < data.length; i++){
            if(data[i].type == "LayerGroup"){
                data[i].src_url = url;

                if(data[i].entries){
                    this._onLoad_SRC_URL(data[i].entries, url);
                }
            }
        }

    },
	getBase : function()
    {
        return this._data[0].entries;
    },
	getOriginal : function()
	{
		return this._original;
	},
	_onFileLoad : function(e)
	{

		this._data = JSON.parse(e.text);
		this._original = $.extend(true, [], this._data);
		this.layers = [];

		this._initializeData( this._data, null );
		this.fire( "load", { tree: this._data, visibleLayers : this.visibleLayers, visibleLayersHash: this.visibleLayersHash } );
	},
	_initializeData : function( data, parent )
	{
		if ( !data ) return;
		this._initializeTree( data, parent );
		this.tree = data;
	},
	_url2LayerType : function( url )
	{
		if ( !url ) return "";
		url = $.trim( url );

		if ( url.match( /\{tms\}/ ) )
		{
			return "tms";
		}

		if ( url.match( /photoprot\.php/ ) )
		{
			return "kml";
		}

		var ext = "";
		var layerType = "";
		var matchResult = url.match( /.*\.([^.]+$)/ );
		// 拡張子
		if (  matchResult ) ext = matchResult[1]

		// kml
		if ( ext == "kml" )
		{
			layerType = "kml";
			return layerType;
		}

		// タイルかどうか
		if ( url.match( /(\{x\})/ ) )
		{
			switch( ext )
			{
				case "geojson":
					layerType = "geojson_tile";
					break;
				case "topojson":
					layerType = "topojson_tile";
					break;
				default:
					layerType = "tile";
					break;
			}
		}
		else
		{
			switch( ext )
			{
				case "geojson":
				case "topojson":
				case "kml":
					layerType = ext;
					break;
			}
		}

		return layerType;
	},
	_getFolderId : function(lv)
	{
		if ( !this._currentFolderIdList ) this._currentFolderIdList = {};

		if ( !this._currentFolderIdList[ '' + lv ] )
			this._currentFolderIdList[ '' + lv ]  = 1;

		var result = this._currentFolderIdList[ '' + lv ] ;

		this._currentFolderIdList[ '' + lv ] ++;

		return result;
	},
	_initializeTree : function( tree, parent )
	{
		if ( !tree ) return;
		var folderCount = 0;
		for ( var i=0; i<tree.length; i++ )
		{
			if ( tree[i].type == "Layer" )
			{
				var info = tree[i];
				info.layerType = this._url2LayerType( info.url );
				if ( info.cocotile  )
				{
					if (  this.hasTileList ){
						info.hasTile = ( this.hasTileList[ info.id ] == true );
                    }
				}

				if ( this.visibleLayersHash[ info.id ] )
				{
					var layerInfo = this.visibleLayersHash[ info.id ];
					info.initialOpacity =layerInfo.initialOpacity;
					this.visibleLayersHash[ info.id ].info = info;
				}
				this.layers.push( info );
			}
			else
			{
				if ( !tree[ i ] .id )
				{
					tree[ i ] .id = ( parent ? parent.id + '_' + folderCount : 'f' + folderCount );
					folderCount ++;
				}
			}
			tree[i].parent = parent;
			this._initializeTree( tree[i].entries, tree[i]);
		}
	},
	_initializeTreeCopy : function( tree, parent )
    {
		if ( !tree ) return;
		var folderCount = 0;
		for ( var i=0; i<tree.length; i++ ){
			tree[i].parent = null;

			this._initializeTreeCopy( tree[i].entries, tree[i]);
        }
    },
	_onLoadError : function()
	{
		if ( this._loadingData )
			this._loadNext();
		else
			alert( 'レイヤー設定ファイルが読み込めませんでした。' );
	},
	_onFileLoadErrorRetry : function()
	{
		this.reader = new FileReader();
		this.reader.onload = L.bind( this._onFileLoad, this);
		this.reader.onerror = L.bind( this._onLoadErrorExit, this);
		this.reader.readAsText("./layer.txt");
	},
	_onLoadErrorExit : function() {}
} );



/************************************************************************
 L.Class
 - GSI.MapLayerList（表示レイヤー管理）
 ************************************************************************/
GSI.MapLayerList = L.Class.extend( {
	includes: L.Mixin.Events,
	tileList : [],
	list : [],
	initialize : function (map,options)
	{
		this.map = map;
		options = L.setOptions(this, options);
	},
	appendKML : function( info )
	{
		if ( this.exists( info ) ) return;
		this.map.addLayer(info._visibleInfo.layer,true);
		this.list.unshift( info );
		this._initZIndex( this.list );
	},
	appendList : function( infoList, isHide )
	{

		for ( var i=0; i<infoList.length; i++ )
		{
			this.append( infoList[i], true, isHide );
		}
	},
	append : function( info, noFinishMove, isHide ,Confirm_FLAG)
	{
		if ( this.exists( info ) ) return;
		if ( info.id=="kokuarea" )
		{
			if(Confirm_FLAG == null){
				var KARI=this;
				jConfirm("航空法第１３２条で規定する無人航空機の飛行禁止空域のうち、航空法施行規則第２３６条第１号に掲げる空域（空港等の周辺空域）の投影面下となる場所を表示します。<br>なお、この情報には誤差が含まれている場合がありますので、境界付近等正確な空域については空港等の管理者に確認願います。<br>詳細については、<a target='_blank' href='http://www.mlit.go.jp/koku/koku_tk10_000003.html'>国土交通省ホームページ</a>で確認してください。", '留意事項', function(r) {
					if(r) {
						KARI.append(info, noFinishMove, isHide ,1);
					}
				});
				return;
			}
		}
		info._visibleInfo = {};
		info._visibleInfo.opacity = ( info.initialOpacity ? info.initialOpacity : 1.0 );
		info.initialOpacity = null;
		
		if ( info.layerType=="tile" )
		{
            var fBaseMap = false;
            if(info.parent && info.parent != null && info.parent.title_sys == CONFIG.layerBaseFolderSYS){
                fBaseMap = true;
            }

			var options = {
				errorTileUrl : '',
			};
			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
			if ( info.attribution ) options.attribution =info.attribution;
			
			info._visibleInfo.layer = new GSI.TileLayer(info.url,options);
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else{
                if(fBaseMap){
                    GSI.GLOBALS.baseLayer.setActiveId(info.id);
                }
                else{
				    this.map.addLayer(info._visibleInfo.layer,true);
                }
            }

            if(fBaseMap){
                this.tileList.push( info );
            }
            else{
			    this.tileList.unshift( info );
            }
			this._initZIndex( this.tileList );
		}
		else if ( info.layerType=="kml" )
		{
			var options = {async: true, "_map": this.map};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;
            if ( info.errorTileUrl ) options.errorTileUrl =info.errorTileUrl;
			info._visibleInfo .layer = new GSI.KML(info.url, options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "KML"  ) );
			info._visibleInfo .layer.on("loaded", L.bind( this.onLayerLoad, this, info._visibleInfo.layer  ) );
			info._visibleInfo .layer .load();

			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);

			this.list.unshift( info );
			this._initZIndexOffset( this.list, 10000 );
		}
		else if ( info.layerType=="geojson" )
		{
		// GeoJSON
			var options = {};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "GeoJSON"  ) );
			info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
			info._visibleInfo .layer .load();
			
			if ( isHide)
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer);
			
			this.list.unshift( info );
			this._initZIndexOffset( this.list, 10000 );

		}
		else if ( info.layerType=="geojson_tile" )
		{
		// タイルGeoJSON
			var options = { clipTiles : true};
			var options2 = {};

			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
			{
				options.minZoom= info.minZoom;
				options._minZoom= info.minZoom;
			}
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
			{
				options.maxZoom =info.maxZoom;
				options._maxZoom =info.maxZoom;
			}

			if ( info.maxNativeZoom  && info.maxNativeZoom!="" )
			{
				options.maxNativeZoom =info.maxNativeZoom;
				options._maxNativeZoom =info.maxNativeZoom;
			}

			if ( info.attribution )
			{
				options.attribution =info.attribution;
				options._attribution =info.attribution;
			}

			info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);

			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);

			this.list.unshift( info );
			this._initZIndexOffset( this.list, 10000 );
		}
		else if ( info.layerType=="topojson_tile" )
		{
		// タイルTopoJSON
			var options = { clipTiles : true, isTopoJSON: true};
			var options2 = {};

			if ( info.subdomains &&info.subdomains!="" )
			{
				options.subdomains= info.subdomains;
			}
			if ( ( info.minZoom == 0 || info.minZoom) && info.minZoom!="" )
			{
				options.minZoom= info.minZoom;
				options._minZoom= info.minZoom;
			}
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom!="" )
			{
				options.maxZoom =info.maxZoom;
				options._maxZoom =info.maxZoom;
			}

			if ( ( info.maxNativeZoom ) && info.maxNativeZoom!="" )
			{
				options.maxNativeZoom =info.maxNativeZoom;
				options._maxNativeZoom =info.maxNativeZoom;
			}

			if ( info.attribution )
			{
				options.attribution =info.attribution;
				options._attribution =info.attribution;
			}

			info._visibleInfo.layer = new GSI.GeoJSONTileLayer(info.url,options, options2);
			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.list.unshift( info );
			this._initZIndexOffset( this.list, 10000 );
		}
		else if ( info.layerType=="topojson" )
		{
		// TopoJSON
			var options = {layerType:'topojson'};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo .layer = new GSI.GeoJSON(info.url,options);
			info._visibleInfo .layer._noFinishMove = noFinishMove;
			info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "TopoJSON"  ) );
			info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
			info._visibleInfo .layer .load();
			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer);

			this.list.unshift( info );
			this._initZIndexOffset( this.list, 10000 );
		}
		else if ( info.layerType=="tms" )
		{
		// TMS
			var options = {};

			if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
			if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
			if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
			if ( info.attribution ) options.attribution =info.attribution;

			info._visibleInfo.layer = new GSI.GSITMSLayer(info.url,options);
			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.tileList.unshift( info );
			this._initZIndex( this.tileList );
		}
		
		if( info._visibleInfo.layer )
		{
            if(info.parent && info.parent != null && info.parent.title_sys == CONFIG.layerBaseFolderSYS){
                GSI.GLOBALS.baseLayer.setOpacity(info._visibleInfo.opacity);
            }
            else{
			    if ( info._visibleInfo.layer.setOpacity )
			    {
				    info._visibleInfo.layer.setOpacity( info._visibleInfo.opacity );
			    }
			    else
			    {
				    var opacitySetter = new GSI.LayerOpacitySetter();
				    opacitySetter.setOpacity( info._visibleInfo.layer, info._visibleInfo.opacity   );
			    }
            }
		}
		
		this.fire('change');
	},
	_showLoading : function(title)
	{
		if ( !this._showLoadingInc || this._showLoadingInc == 0 )
		{
			this._showLoadingInc = 0;
			GSI.Modal.LoadingMessage.show( 'ファイルを読み込んでいます...' );
		}
		this._showLoadingInc++;
	},
	_hideLoading : function()
	{
		this._showLoadingInc--;
		if ( this._showLoadingInc <= 0 )
			GSI.Modal.LoadingMessage.hide();
	},
	onLayerLoadStart : function(layer, title)
	{
		this._showLoading(title);
	},
	onLayerLoad : function(layer)
	{
		if ( !layer._noFinishMove && layer.getBounds )
		{
			try
			{
				this.map.fitBounds( layer.getBounds() );
			}
			catch( e ){}
		}
		this._hideLoading();
	},
	_initZIndexOffset : function( list, offset )
	{
		var zIndex = 0;
		
		for ( var i=list.length-1; i>= 0; i-- )
		{
			var info = list[i];
			if ( info._visibleInfo.layer )
			{
				if ( info._visibleInfo.layer.setMarkerZIndex )
				{
					info._visibleInfo.layer.setMarkerZIndex( zIndex );
					zIndex+= offset;
				}
			}
		}
	},
	_initZIndex : function( list )
	{
		var zIndex = 100;
		for ( var i=list.length-1; i>= 0; i-- )
		{
			var info = list[i];
			if ( info._visibleInfo.layer )
			{
				if ( info._visibleInfo.layer.setZIndex )
				{
					info._visibleInfo.layer.setZIndex( zIndex );
					zIndex++;
				}
			}
		}
	},
	refreshTileList : function( list )
	{
		this.tileList = list;
		this._initZIndex(this.tileList);
	},
	exists : function( info )
	{
		if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
		{
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i] == info )
				{
					return true;
				}
			}
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info )
				{
					return true;
				}
			}
		}

		return false;
	},
	remove : function( info )
	{
		if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
		{
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i] == info )
				{
					this.tileList.splice(i, 1);
					break;
				}
			}
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info )
				{
					this.list.splice(i, 1);
					break;
				}
			}
		}

		this.map.removeLayer( info._visibleInfo.layer );
		info._visibleInfo = null;
		this.fire('change');
	},
	clear : function()
	{
		for ( var i=0; i<this.list.length; i++ )
		{
			var info = this.list[i];
			this.map.removeLayer( info._visibleInfo.layer );
			info._visibleInfo = null;
		}
		this.list =[];

		for ( var i=0; i<this.tileList.length; i++ )
		{
			var info = this.tileList[i];
			this.map.removeLayer( info._visibleInfo.layer );
			info._visibleInfo = null;
		}
		this.tileList =[];

		this.fire('change');
	},
	getTileList : function()
	{
		return this.tileList;
	},
	getList : function()
	{
		return this.list;
	}
} );

/************************************************************************
 L.Class
 - GSI.MapMenu（地図、機能メニュー）
 ************************************************************************/
GSI.MapMenuList = [];

GSI.MapMenu = L.Class.extend( {
	options : {
		position : "left",
		zIndex : 15000,
		visible : true,
		getCheckState : function( defaultState) { return defaultState; }
	},
	idCounter : 0,
	rootItem : {},

	initialize : function (map, treeConfig, options )
	{
		options = L.setOptions(this, options);
		if (!options.visible ) return;

		this.map = map;
		GSI.MapMenuList.push( this );

		this.initializeTree( treeConfig );
		map.on( 'mousedown', L.bind( function(){this.hide();}, this ) );
		$( map.getContainer() ).on( 'touchstart', L.bind( function(){this.hide();}, this ) );

		$( window ).resize( L.bind( function(){this.hide(true);}, this ) );
	},
	initializeTree : function(treeConfig)
	{
		// トップボタン生成
		var elem = $( '<a>' )
			.attr( { 'href' : 'javascript:void(0);'} )
			.html( treeConfig.title )
			.addClass( 'menu_btn' )
			.click( L.bind( this.onItemClick, this ) );
		var a = new GSI.Control.Button( elem[0], {position:'top' + this.options.position} );
		a.addTo( this.map );

		this.rootItem = {
			elem : elem,
			children : [],
			depth : 0
		};

		elem.data( { 'data' : this.rootItem } );

		this.initializeTreeItems( this.rootItem, treeConfig, 1);
	},
	initializeTreeItems : function( parent, treeConfig, depth  )
	{
		if ( treeConfig.children && treeConfig.children.length > 0  )
		{
			var ul = $( '<ul>' )
				.addClass( 'menu_item_frame' )
				.css( {'z-index' : this.options.zIndex  + depth   } )
				.hide();

			if ( treeConfig.childrenWidth )
			{
				ul.css( {width: treeConfig.childrenWidth+ 'px'} );
			}

			for ( var i=0; i<treeConfig.children.length; i++ )
			{

				var childConfig = treeConfig.children[i];
				if( !childConfig ) continue;
				if ( childConfig.checkCondition && !childConfig.checkCondition() ) continue;
				var li = $( '<li>' );
				var item = {};

				if ( childConfig.typeA && childConfig.typeA == 'check' )
				{
					// チェック
					var checkFrame = $( '<div>' );
					var checkState = this.options.getCheckState(childConfig.id,childConfig.defaultCheck);
					var onOffSwitch  =new GSI.OnOffSwitch( {className:'onoff', checked:checkState, title: childConfig.title} );

					li.append(
						$( '<dl>' ).append(
							$( '<dt>' ).html( '<label for="' + onOffSwitch.getId() + '">' + childConfig.title + '</label>' ).css( { 'line-height':'24px', 'margin' : '0px', 'clear':'left', 'float' : 'left', 'width' : '73%' } )
						).append (
							$( '<dd>' ).append( onOffSwitch.getElement() ).css( { 'margin' : '0px', 'margin-left' : '73%' } )
						).css( { 'margin' : '0px'} )
					).css( { "padding-top":'10px', "padding-bottom":'10px' } );

					item = {
						id : childConfig.id
					};

					onOffSwitch.getCheckBox().data( { 'data' : item } );
					onOffSwitch.on( 'change', L.bind( this.onCheckBoxClick, this, onOffSwitch.getCheckBox() ) );
				}
				else
				{
					// 通常
					var a = $( '<a>' )
						.attr( { 'href' : 'javascript:void(0);'} )
						.html( childConfig.title )
						.click( L.bind( this.onItemClick, this ) );

					if ( childConfig.arrow )
					{
						a.addClass( "arrow" );
						a.addClass( this.options.position );
					}
					else if ( childConfig.right )
					{
						a.addClass( "right" );
					}

					item = {
						elem : a,
						id : childConfig.id,
						children : [],
						depth : depth,
						parent :parent,
						href : childConfig.href
					};

					a.data( { 'data' : item } );
					parent.children.push( item );
					li.append( a );
				}
				ul.append( li );
				parent.childrenFrame = ul;

				this.initializeTreeItems( item, childConfig,depth + 1 );
			}

			$( document.body).append( ul );
		}
	},
	hideChildren : function(info, noEffect)
	{
		if ( info.childrenFrame )
		{
			if ( noEffect )
			{
				info.childrenFrame.hide();
			}
			else
			{
				if ( info.depth <= 0  )
				{
					this.showChildFrame( info.childrenFrame, true, {"direction": "up"}, true );
				}
				else
				{
					this.showChildFrame( info.childrenFrame, false, {"origin": ["top", "right"]}, true );
				}
			}
		}

		if (info.children)
		{
			for ( var i=0; i<info.children.length; i++ )
			{
				this.hideChildren( info.children[i],noEffect );

			}
		}
	},
	_fireOnShow : function()
	{
		for ( var i = 0; i<GSI.MapMenuList.length; i++ )
		{
			if ( this != GSI.MapMenuList[i] ) GSI.MapMenuList[i].hide();
		}
	},

	showChildFrame : function(elem, isRoot, option, isHide)
	{
		var effect = ( isRoot  ? this.options.rootEffect : this.options.otherEffect );
		if ( effect )
		{
			if ( !effect.option ) effect.option = {};

			if ( option )
			{
				for( var key in option )
				{
					effect.option[ key ] = option[key];
				}
			}

			if ( !isHide )
			{
				elem.show(effect.animation, effect.option, effect.speed);
				this._fireOnShow();
			}
			else
				elem.hide(effect.animation, effect.option, effect.speed);
		}
		else
		{
			if ( !isHide )
			{
				info.childrenFrame.show();
				this._fireOnShow();
			}
			else
				info.childrenFrame.hide();
		}
	},
	onItemClick : function( event )
	{
		var target =  event.currentTarget;
		var info = $( target ).data( 'data' );
		var windowSize = GSI.Utils.getScreenSize();

		if ( info.parent )
		{
			if ( info.parent.children )
			{
				for ( var i=0;i<info.parent.children.length;i++ )
					this.hideChildren( info.parent.children[i] );
			}
		}
		if ( info && info.childrenFrame )
		{
			if ( info.childrenFrame.is( ':visible' ) )
			{
				this.hideChildren( info );
			}
			else
			{
				var pos = $(target).offset();
				if ( info.depth >= 1 )
				{
					pos.top += Math.floor( $(target).outerHeight(true ) / 2 );
				}
				else
				{
					pos.top += Math.floor( $(target).outerHeight(true )+2 );
				}

				info.childrenFrame.css( { 'visibility' : 'hidden' } ).show();
				var frameHeight = info.childrenFrame.outerHeight(true );
				var frameWidth = info.childrenFrame.outerWidth(true );
				info.childrenFrame.css( { 'visibility' : 'visible' } ).hide();

				if ( pos.top + frameHeight > windowSize.h )
				{
					pos.top -= ( pos.top + frameHeight - windowSize.h );
					if ( pos.top < 0 ) pos.top = 0;
				}

				if ( this.options.position == "left" )
				{
					if ( pos.top + frameHeight > windowSize.h )
					{
						pos.top -= ( pos.top + frameHeight - windowSize.h );
						if ( pos.top < 0 ) pos.top = 0;
					}

					if ( info.depth >= 1 )
					{
						pos.left+= Math.floor( $(target).outerWidth(true ) -30 );
					}
					info.childrenFrame
						.css({
							left : pos.left + 'px',
							top  : pos.top + 'px'
						} );

					if ( info.depth <= 0  )
					{
						this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
					}
					else
					{
						this.showChildFrame( info.childrenFrame, false, { origin : ["top", "left"] } );
					}
				}
				else
				{
					if ( info.depth >= 1 )
					{
						pos.left -= frameWidth - 30;
					}
					else
					{
						pos.left += Math.floor( $(target).outerWidth(true ));
						pos.left -= frameWidth;
					}
					if ( pos.left < 0 ) pos.left = 0;

					info.childrenFrame
					.css({
						left : pos.left + 'px',
						top  : pos.top + 'px'
					} );

					if ( info.depth <= 0  )
					{
						this.showChildFrame( info.childrenFrame, true, {direction:'up'} );
					}
					else
					{
						this.showChildFrame( info.childrenFrame, false, { origin : ["top", "right"] } );
					}
				}
			}
		}
		else if ( info )
		{
			if ( info.href && info.href != '' )
			{
				this.openLink( info.href );
			}
			if ( this.options.onMenuItemClick )
			{
				this.options.onMenuItemClick(info.id);
			}
			this.hide();
		}
	},
	hide : function(noEffect)
	{
		this.hideChildren( this.rootItem, noEffect );
	},
	onCheckBoxClick : function(target, event )
	{
		var info = target.data( 'data' );
		if ( this.options.onCheckItemClick )
		{
			this.options.onCheckItemClick( info.id, target.is(':checked') );
		}
	},
	openLink : function( url )
	{
		var linkUrl = GSI.Links.getURL( url, this.map.getCenter().wrap(), this.map.getZoom(), this.map.getBounds());

		if ( linkUrl )
		{
			window.open( linkUrl );
			$(this.topSelector + ' span').removeClass('selected');
			$(this.topSelector + ' ul').hide();
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.MapMouse（地図上のマウス操作制御）
 ************************************************************************/
GSI.MapMouse = L.Class.extend( {
	clickMoveVisible : false,
	clickMoveEnable : true,
	rightClickTime : null,

	options : {
		dblClickInterval : 500,
		rightDblClickInterval : 500
	},
	initialize : function (map, options )
	{
		this.map = map;
		map.on('contextmenu',function(){});

		this.setClickMoveVisible( this.clickMoveVisible, true );

		map.on('mousedown',L.bind( this.onMouseDown, this ) );
		map.on('zoomend',L.bind( this.onZoomEnd, this ) );
		map.on('dblclick',L.bind( this.onMapDblClick, this ) );

		L.setOptions(this, options);
		
		this.map.doubleClickZoom.enable();
	},
	onZoomEnd : function(e)
	{
		if ( this.map.getZoom() >= 18 )
		{
			this.map.doubleClickZoom.disable();
		}
		else
		{
			this.map.doubleClickZoom.enable();
		}
	},
	_rightDblClickZoomOut : function(latlng)
	{
		var zoom = this.map.getZoom();
		if ( zoom >= 1 )
		{
			this.map.setZoomAround( latlng, zoom - 1);
		}
	},
	onMouseDown : function(e)
	{
		if ( e.originalEvent.which == 3 )
		{
			if ( this.rightClickTime== null )
			{
				// 一回目
				var date = new Date();
				this.rightClickTime = date.getTime();
				this._startRightClickTimer( e.latlng );
			}
			else
			{
				var date = new Date();
				//ダブルクリック判定
				if ( date < this.rightClickTime + this.options.rightDblClickInterval )
				{
					this._rightDblClickZoomOut( e.latlng );
					this.rightClickTime = null;
				}
				else
				{
					this.rightClickTime = null;
				}
			}
		}
		else
		{
			this.rightClickTime = null;
		}
	},
	onMapClick : function(e)
	{
		if ( this.clickMoveVisible )
		{
			this._startClickTimer( e.latlng );
			
		}
	},
	_move : function(latlng)
	{
		this.map.panTo( latlng );
	},
	_clearClickTimer : function()
	{
		if ( this._clickTimerId  )
		{
			clearTimeout( this._clickTimerId  );
			this._clickTimerId  = null;
		}
	},
	_startClickTimer : function(latlng)
	{
		this._clearClickTimer ();
		this._clickTimerId = setTimeout( L.bind( this._move, this, latlng ), this.options.dblClickInterval );
	},
	onMapDblClick : function( e)
	{
		if ( !this._clickTimerId  ) return;
		
		this._clearClickTimer ();
		var zoom = this.map.getZoom();
		if ( zoom < 18 )
		{
			this.map.setZoomAround( e.latlng, zoom + 1);
		}
	},
	setClickMoveVisible : function( visible, init )
	{
		this.clickMoveVisible = visible;
		this.refresh();
	},
	getClickMoveVisible : function()
	{
		return this.clickMoveVisible;

	},
	refresh : function()
	{
		if ( this.clickMoveVisible && this.clickMoveEnable )
		{
			if ( !this._onMapClick )
			{
				this._onMapClick= L.bind( this.onMapClick, this );
				this.map.on( 'click', this._onMapClick );
			}
		}
		else
		{
			if ( this._onMapClick )
			{
				this.map.off( 'click', this._onMapClick );
				this._onMapClick = null;
			}
		}
	},
	getClickMoveVisible : function( visible )
	{
		return this.clickMoveVisible;
	},
	setClickMoveEnable : function( enable )
	{
		this.clickMoveEnable = enable;
		this.refresh();
	},
	_startRightClickTimer : function(latlng)
	{
		this._clearRightClickTimer ();
		this._RightClickTimerId = setTimeout( L.bind( this._zoom_Out, this, latlng ), this.options.dblClickInterval );
	},
	_clearRightClickTimer : function()
	{
		if ( this._RightClickTimerId  )
		{
			clearTimeout( this._RightClickTimerId  );
			this._RightClickTimerId  = null;
		}
	},
	_zoom_Out : function(latlng)
	{
		if ( this.rightClickTime != null )
		{
			this._move(latlng);
			var visible = GSI.GLOBALS.footer.isVisible();
			if (visible == false) {
				GSI.GLOBALS.footer.onBtnClick();
			}
		}
		this.rightClickTime	=	null;
	}
} );

/************************************************************************
 L.Class
 - GSI.MiniMap
 ************************************************************************/
GSI.MiniMap = L.Class.extend( {
	initialize : function( map, options )
	{
		this.map = map;
	},
	setVisible : function( visible )
	{
		if ( visible )
		{
			this.show();
		}
		else
		{
			this.hide();
		}
	},
	getVisible : function()
	{
		return ( this.miniMap  ? true : false );
	},
	show: function()
	{
		if ( !this.miniMap )
		{
			var baseLayer = L.tileLayer('http://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png' );
			this.miniMap = new L.Control.MiniMap(baseLayer, { toggleDisplay: false }).addTo(this.map);
		}
	},
	hide : function()
	{
		if ( this.miniMap  )
		{
			this.map.removeControl( this.miniMap );
			this.miniMap = null;
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.Modal.BaseClass
 ************************************************************************/
GSI.Modal.instance=null;
GSI.Modal.instanceList=[];
GSI.Modal.blind = null;
GSI.Modal.zIndexOffset = 50000;

GSI.Modal.BaseClass = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		closeBtnVisible : true,
		blindClose : true
	},
	container : null,
	initialize : function (options)
	{
		options = L.setOptions(this, options);
	},
	show : function(options)
	{

		GSI.Modal.instanceList.push( this );

		options = L.setOptions(this, options);
		this.createBlind();

		if ( !this.container )
		{
			this.container = this.createContainer();
			$(document.body).append( this.container );
		}
		else this.contentFrame.empty();

		if ( options && options.width )
		{
			this.contentFrame.css( { width:options.width + 'px' } );
		}
		else
		{
			this.contentFrame.css( { width:'auto' } );
		}

		if ( this.getContent )
			this.contentFrame.append( this.getContent() );

		this.adjustWindow();

		if ( !GSI.Modal.blind.is( ':visible' ))
			GSI.Modal.blind.show( "fade", {"direction": "both","easing": "linear"}, "fast" );

		this.container.show("fade", {"direction": "both","easing": "linear"}, "fast" );

		if ( !this._onWindowResize )
		{
			this._onWindowResize = L.bind( this.onWindowResize, this );
			$( window ).on( "resize", this._onWindowResize );
		}
	},
	onWindowResize : function()
	{
		this.adjustWindow();
	},
	adjustWindow : function()
	{
		var windowSize = GSI.Utils.getScreenSize();
		var isVisible = this.container.is( ':visible' );

		if ( !isVisible )
		{
			this.container.css( { "visibility": "hidden" } ).show();
		}
		this.contentFrame.css( {
			"max-width" : windowSize.w - 50 + 'px',
			"max-height" : windowSize.h - 50 + 'px'
		} );

		var w = this.container.outerWidth(true);
		var h = this.container.outerHeight(true);
		this.container.css( {
			left : Math.floor( (windowSize.w/2) - (w/2) ) + 'px',
			top : Math.floor( (windowSize.h/2) - (h/2) ) + 'px'
		} );

		if ( !isVisible )
		{
			this.container.hide().css( { "visibility": "visible" } );
		}
	},
	createContainer : function()
	{
		var container = $( '<div>' ).hide().addClass( this.options.className ? this.options.className : 'gsi_modal_base' ).css( {"z-index":GSI.Modal.zIndexOffset+1+GSI.Modal.instanceList.length, position: "absolute"} );

		this.contentFrame = $('<div>').addClass( 'gsi_modal_base_content' );
		container.append( this.contentFrame );

		if ( this.options.closeBtnVisible )
		{
			this.closeButton = $( '<a>' )
				.addClass( 'gsi_modal_base_closebtn' )
				.attr( { 'href' : 'javascript:void(0);'} ).html( '×' ).click(
					L.bind( function() {
						this.hide();
					},this )
				);
			container.append( this.closeButton );
		}

		return container;
	},
	hide : function( noRemoveBlind )
	{
		if ( this._onWindowResize )
		{
			$( window ).off( "resize", this._onWindowResize );
			delete this._onWindowResize;
			this._onWindowResize = null;
		}

		for ( var i=0; i<GSI.Modal.instanceList.length; i++ )
		{
			if ( GSI.Modal.instanceList[i] == this )
			{
				GSI.Modal.instanceList.splice( i, 1 );
				break;
			}
		}

		if ( this.container ) this.container.remove();
		if ( this.closeButton ) this.closeButton.remove();

		delete this.closeButton;
		delete this.container;
		this.closeButton = null;
		this.container = null;

		if ( GSI.Modal.instanceList.length <= 0 )
			this.removeBlind();
	},
	getBlindClose:function() {
		return this.options.blindClose;

	},
	createBlind : function()
	{
		if ( GSI.Modal.blind ) return;

		GSI.Modal.blind = $( '<div>' )
			.css( {
				opacity : 0.3,
				background:"#666",
				position:"absolute",
				left:'0px',
				top:'0px',
				width:'100%',
				height:'100%',
				"z-index" : GSI.Modal.zIndexOffset,
				display:"none",
				cursor:"pointer"
			} )
			.click( function() {
			} );

		$( document.body ).append( GSI.Modal.blind );
	},
	removeBlind : function()
	{
		if ( GSI.Modal.blind ) GSI.Modal.blind.remove();
		delete GSI.Modal.blind;
		GSI.Modal.blind = null;
	}

} );

/************************************************************************
 L.Class
 - GSI.Modal.BaseClass
   - GSI.Modal.Dialog
 ************************************************************************/
GSI.Modal.Dialog = GSI.Modal.BaseClass.extend( {
	options : {
		positiveButtonText : '決定',
		nagativeButtonText : '中止',
		blindClose : false,
		closeBtnVisible : false,
		className : 'gsi_modal_dialog'
	},
	show : function( options )
	{
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},
	getContent : function()
	{
		this.dialogFrame = $( '<div>' ).addClass( 'gsi_modal_dialog_frame' );
		this.dialogContent = $( '<div>' ).addClass('gsi_modal_dialog_content');
		this.buttonFrame = $( '<div>' ).addClass('gsi_modal_dialog_btn_frame');

		this.positiveButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
			.html( this.options.positiveButtonText ).click( L.bind( this.onPositiveButtonClick, this ) );
		this.negativeButton = $( '<a>' ).attr( { "href":"javascript:void(0);"} )
			.html( this.options.nagativeButtonText ).click( L.bind( this.onNegativeButtonClick, this ) );

		this.buttonFrame.append( this.positiveButton).append( this.negativeButton );

		this.dialogFrame .append( this.dialogContent );
		this.dialogFrame .append( this.buttonFrame );

		return this.dialogFrame ;
	},
	onPositiveButtonClick : function()
	{
		this.hide();
		this.fire( 'positive' );
	},
	onNegativeButtonClick : function()
	{
		this.hide();
		this.fire( 'negative' );
	}
} );

/************************************************************************
 L.Class
 - GSI.Modal.BaseClass
   - GSI.Modal.Dialog
     - GSI.Modal.FileSelectDialog（ファイル選択ダイアログ）
 ************************************************************************/
GSI.Modal.FileSelectDialog = GSI.Modal.Dialog.extend( {
	options : {
		title : "ファイルを選択して下さい"
	},
	getContent : function()
	{
		var frame = $( '<div>' );
		var titleFrame = $( '<div>' ).addClass('gsi_modal_fileselect_dlg_title').html( this.options.title );

		var tabFrame = null;

		tabFrame  =$( '<div>' ).addClass('gsi_modal_fileselect_dlg_title');
		frame.append( tabFrame );
		tabFrame.append( $( '<span>' ).addClass('title').html(this.options.title ) );

		if ( GSI.Utils.hasFileAPI )
		{
			this.switcher =new GSI.OnOffSwitch();
			this.switcher.on( 'change', L.bind( function() {
				if ( this.switcher.checked() )
				{
					if ( !this.fileFrame.is( ':visible' ) )
					{
						this.sourceFrame.fadeOut( 'fast', L.bind( function() {
							this.fileFrame.fadeIn('fast');
						}, this ) );
					}
				}
				else
				{
					if ( !this.sourceFrame.is( ':visible' ) )
					{
						this.fileFrame.fadeOut( 'fast', L.bind( function() {
							this.sourceFrame.fadeIn('fast');
						}, this ) );
					}
				}
			},this ) );

			tabFrame.append( this.switcher.getElement().css({"float":"right"}));

			this.fileFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" );
			this.fileInput = $( '<input>' ).attr( { 'type':'file'} );//.css( { "margin": "14px 4px 14px 4px" } );

			this.fileMessage = $( '<div>' ).addClass( 'message' ).html( 'ファイルを選択後「<strong>決定</strong>」ボタンをクリックして下さい' );
			this.fileFrame.append( this.fileMessage  );
			this.fileFrame.append( this.fileInput );
			frame.append( this.fileFrame );
		}

		this.sourceFrame =$('<div>').addClass( "gsi_modal_fileselect_dlg_inputframe" ).hide();
		this.sourceTextArea = $( '<textarea>' );

		if ( !GSI.Utils.hasFileAPI )
		{
			this.sourceFrame.show();
		}

		this.sourceMessage = $( '<div>' ).addClass( 'message' ).html( 'ソースを入力後「<strong>決定</strong>」ボタンをクリックして下さい' );
		this.sourceFrame.append( this.sourceMessage  );
		this.sourceFrame.append( this.sourceTextArea );

		frame.append( this.sourceFrame );

		var dialogFrame = GSI.Modal.Dialog.prototype.getContent.call( this);

		this.dialogContent.append( frame );

		return dialogFrame ;
	},
	_onFileLoad : function()
	{
		this.hide();
		this.fire( 'positive',{ text : this.reader.result } );
	},
	_onLoadErrorExit : function()
	{
		alert( 'ファイルの読込に失敗しました' );
	},
	onPositiveButtonClick : function()
	{
		var txt = "";
		if ( this.fileFrame && this.fileFrame.is( ':visible' ) )
		{
			var files = this.fileInput.attr( 'files' );
			if (!files) files = this.fileInput.prop( 'files' );

			if ( files && files.length > 0 )
			{
				this.reader = new FileReader();
				this.reader.onload = L.bind( this._onFileLoad, this);
				this.reader.onerror = L.bind( this._onLoadErrorExit, this);
				this.reader.readAsText(files[0]);
			}
			else
			{
				alert( 'ファイルが選択されていません' );
			}
		}
		else
		{
			txt = this.sourceTextArea.val();
			if ( $.trim( txt ) != "" )
			{
				this.hide();
				this.fire( 'positive',{ text : txt } );
			}
			else
			{
				alert( 'ソースが入力されていません' );
			}
		}
	},
	onNegativeButtonClick : function()
	{
		this.hide();
		this.fire( 'negative' );
	}
} );

/************************************************************************
 L.Class
 - GSI.Modal.BaseClass
   - GSI.Modal.LoadingMessage（ローディングメッセージ）
 ************************************************************************/
GSI.Modal.LoadingMessage = GSI.Modal.BaseClass.extend( {
	options : {
		blindClose : false,
		closeBtnVisible : false,
		className : 'gsi_modal_loadingmessage_frame'
	},
	show : function( message, options )
	{
		this.message = message;
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},
	getContent : function()
	{
		return $( '<div>' ).addClass( 'gsi_modal_loadingmessage' ).html( this.message );

	}
} );
GSI.Modal.LoadingMessage.instance = null;

GSI.Modal.LoadingMessage.show = function(message,options) {

	if ( !GSI.Modal.LoadingMessage.instance )
		GSI.Modal.LoadingMessage.instance = new GSI.Modal.LoadingMessage(options);
	GSI.Modal.LoadingMessage.instance.show( message,options );
};

GSI.Modal.LoadingMessage.hide = function() {
	if ( GSI.Modal.LoadingMessage.instance )  GSI.Modal.LoadingMessage.instance.hide();
};

/************************************************************************
 L.Class
 - GSI.Modal.BaseClass
   - GSI.Modal.Message
 ************************************************************************/
GSI.Modal.Message = GSI.Modal.BaseClass.extend( {

	show : function( message, options )
	{
		this.message = message;
		GSI.Modal.BaseClass.prototype.show.call( this, options );
	},
	getContent : function()
	{
		return $( '<div>' ).html( this.message );

	}
} );

GSI.Modal.Message.instance = null;

GSI.Modal.Message.show = function(message,options) {

	if ( !GSI.Modal.Message.instance )
		GSI.Modal.Message.instance = new GSI.Modal.Message(options);
	GSI.Modal.Message.instance.show( message,options );
};


GSI.Modal.Message.hide = function() {
	if ( GSI.Modal.Message.instance )  GSI.Modal.Message.instance.hide();
};

/************************************************************************
 L.Class
 - GSI.OnOffSwitch
 ************************************************************************/
GSI.OnOffSwitch = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		className : "filetext",
		checked:true
	},
	classNames : {
		"onoff":"gsi_onoffswitch",
		"filetext":"gsi_onoffswitch_file_text",
		"visible":"gsi_onoffswitch_visible",
		"visibleall":"gsi_onoffswitch_visible_all",
		"usecocotile":"gsi_onoffswitch_usecocotile"

	},
	initialize : function (options)
	{
		options = L.setOptions(this, options);

		this._create();
	},
	getElement : function()
	{
		return this.frame;
	},
	getCheckBox : function()
	{
		return this.input;
	},
	getId : function()
	{
		return this.id;
	},
	_create : function()
	{
		var id = 'GSI_OnOffSwitch_' + GSI.Utils.getCurrentID();
		this.id = id;

		this.frame = $("<span>").addClass( this.classNames[ this.options.className ] );
		this.input = $( '<input>' ).attr( {
				'type' : 'checkbox',
				'id' : id
			} ).addClass( 'checkbox' );
		this.frame.append(this.input);
		if ( this.options.checked )
		{
			this.input.attr({"checked": true} );
		}

		var label = $( '<label>' ).addClass( 'label' ).attr( {
				'for' : id
			} );

		var span = $( '<span>' ).addClass( 'inner' );
		label.append( span );

		span = $( '<span>' ).addClass( 'switch' );
		label.append( span );

		this.frame.append( label );

		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
		{
			this._initCheckBoxIE8();
			this.frame.click( L.bind( this.onFrameClick, this  ) );
		}
		else
		{
			this.input.click( L.bind( function(){this.fire( 'change' );}, this  ) );
		}
	},
	_initCheckBoxIE8 : function()
	{
		if ( this.input.is( ":checked" ) )
		{
			this.frame.find( '.label,.inner' ).addClass("on_label_inner");
			this.frame.find( '.label,.switch' ).addClass("on_label_switch");
		}
		else
		{
			this.frame.find( '.label,.inner' ).removeClass("on_label_inner");
			this.frame.find( '.label,.switch' ).removeClass("on_label_switch");
		}
	},
	onFrameClick : function()
	{
		this.input.attr({"checked": !this.input.is( ":checked" )} );
		this._initCheckBoxIE8();
		this.fire( 'change' );
	},
	checked : function( value)
	{
		if ( value == true )
		{
			this.input.attr( {"checked": true} );
			this.input.prop( {"checked": true} );
		}
		else if ( value == false )
		{
			this.input.attr( {"checked": false} );
			this.input.prop( {"checked": false} );
		}
		
		if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8 )
		{
			this._initCheckBoxIE8();
		}
		
		return this.input.is( ':checked' );
	}
});

/************************************************************************
 L.Class
 - GSI.PagePrinter
 ************************************************************************/
GSI.PagePrinter = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {},

	initialize : function(map,baseLayer, mapLayerList, sakuzuList, options )
	{
		this._originalMap = map;
		this._originalBaseLayer = baseLayer;
		this._mapLayerList = mapLayerList;
		this._sakuzuList = sakuzuList;

		options = L.setOptions(this, options);
	},
	show : function(sakuzuDialog)
	{
		this._sakuzuDialog = sakuzuDialog;

		if ( !this._container ) this._create();

		this._initialize();
	},
	hide : function()
	{
		
		$( document.body ).css( {"overflow":"hidden", "height": "100%"} );
		$( "html" ).css( {"overflow":"hidden", "height": "100%"} );
			
		var children = $( document.body ).children();
		for ( var i=0; i<children.length; i++ )
		{
			if ( this._container && children[i] != this._container[0] )
			{
				var child = $( children[i] );
				if ( child.data( '_before_print_visible' ) )
					child.show();
			}
		}
		var tileList = this._mapLayerList.getTileList();

		for ( var i=tileList.length-1; i>=0; i-- )
		{
			if ( tileList[i]._printInfo._visible )
			{
				this._map.removeLayer( tileList[i]._visibleInfo.layer );
                if(tileList[i].parent && tileList[i].parent.title_sys != CONFIG.layerBaseFolderSYS){
				    this._originalMap.addLayer ( tileList[i]._visibleInfo.layer );
                }
			}
			tileList[i]._printInfo = null;
		}

		var list = this._mapLayerList.getList();
		for ( var i=list.length-1; i>=0; i-- )
		{
			if ( list[i]._printInfo._visible )
			{
				this._map.removeLayer( list[i]._visibleInfo.layer );
				this._originalMap.addLayer ( list[i]._visibleInfo.layer );
			}
			list[i]._printInfo = null;
		}

		// 作図
		if ( this._sakuzuList )
		{
			this._sakuzuList.eachItems( L.bind(
				function(item){
					if ( !item.getVisible() ) return;

					this._map.removeLayer ( item._layer );
					this._originalMap.addLayer( item._layer );
				},
			this ) );
		}
		
		this._originalMap.invalidateSize(false);
		this._container.fadeOut('fast', L.bind( function(){

			this._map.remove();
			this._map = null;
		}, this ) );

	},
	_initialize : function()
	{

		var paperSizeArr = this._paperSizeSelect.val().split( ',' );
		var paperSizeVal = paperSizeArr[0];
		var hq = ( paperSizeArr.length >= 2 && paperSizeArr[1] == 'hq' ? true: false );
		var paperSize = this.printSize2MapSize( paperSizeVal );

		this._mapContainer.css( { width:paperSize.w + 'px', height: paperSize.h + 'px' } );

		this._map = L.map(this._mapContainer[0],
		{
			zoomsliderControl: false,
			zoomControl: false,
			attributionControl : false
		});
		L.control.scale({imperial:false}).addTo(this._map);

        var fBase = false;
		this._map.setView( this._originalMap.getCenter(), this._originalMap.getZoom() );

		// タイル
		var tileList = this._mapLayerList.getTileList();
		for ( var i=tileList.length-1; i>=0; i-- )
		{
			tileList[i]._printInfo = {};
			var visible = ( tileList[i]._visibleInfo._isHidden ? false : true );

			this._originalMap.removeLayer ( tileList[i]._visibleInfo.layer );

			if ( visible )
			{
				tileList[i]._printInfo._visible = true;
                if(tileList[i].parent && tileList[i].parent.title_sys == CONFIG.layerBaseFolderSYS){
                    fBase = true;
                }
                else{
    				this._map.addLayer( tileList[i]._visibleInfo.layer );
                }
			}
		}
        this._baseLayer = null;
        if(fBase){
		    this._baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, this._originalBaseLayer.getActiveId());

			this._baseLayer.isGrayScale = this._originalBaseLayer.isGrayScale
			this._baseLayer.options.opacity = this._originalBaseLayer.options.opacity;
			
		    this._baseLayer.setHighQuality( hq );
		    this._baseLayer.addTo(this._map);
        }

		// ファイル
		var list = this._mapLayerList.getList();

		for ( var i=list.length-1; i>=0; i-- )
		{
			list[i]._printInfo = {};
			var visible = ( list[i]._visibleInfo._isHidden ? false : true );

			this._originalMap.removeLayer ( list[i]._visibleInfo.layer );

			if ( visible )
			{
				list[i]._printInfo._visible = true;
				this._map.addLayer( list[i]._visibleInfo.layer );
			}
		}

		// 作図
		if ( this._sakuzuList )
		{
			this._sakuzuList.eachItems( L.bind(
				function(item){
					if ( !item.getVisible() ) return;

					this._originalMap.removeLayer ( item._layer );
					this._map.addLayer( item._layer );
				},
			this ) );
		}

		// latLngGrid
		if ( this.options.latLngGrid.getVisible() )
		{
			new GSI.LatLngGrid( this._map, {
				condition: CONFIG.LATLNGGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.LATLNGGRIDSTYLE,
				labelClassName:CONFIG.LATLNGGRIDLABELCLASSNAME
			} );
		}

		// utmGrid
		if ( this.options.utmGrid.getVisible() )
		{
			new GSI.UTM.Grid( this._map, {
				condition: CONFIG.UTMGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.UTMGRIDSTYLE,
				labelClassName:CONFIG.UTMGRIDLABELCLASSNAME
			} );
		}

		// jihokuLine
		if ( this.options.jihokuLine.getVisible() )
		{
			new GSI.JihokuLine( this._map,{
				visible: true,
				num: CONFIG.JIHOKULINECOUNT,
				lineStyle: CONFIG.JIHOKULINESTYLE
			} );
		}

		this._container.fadeIn('fast', L.bind( function(){
			
			$( document.body ).css( {"overflow":"auto", "height": "auto"} );
			$( "html" ).css( {"overflow":"auto", "height": "auto"} );
			
			var children = $( document.body ).children();
			for ( var i=0; i<children.length; i++ )
			{
				if ( children[i] != this._container[0] )
				{
					var child = $( children[i] );
					
					if ( child.is(":visible") )
					{
						child.data( { '_before_print_visible':true } ) ;
						$( children[i] ).hide();
					}
					else
					{
						child.data( { '_before_print_visible':false } ) ;
						
					}
				
				}
			}
			
			this._map.invalidateSize(false);
		}, this ) );
	},
	_paperSizeChage : function()
	{
		var paperSizeArr = this._paperSizeSelect.val().split( ',' );

		var paperSizeVal = paperSizeArr[0];
		var hq = ( paperSizeArr.length >= 2 && paperSizeArr[1] == 'hq' ? true: false );
        if(this._baseLayer != null){
		    this._baseLayer.setHighQuality( hq );
        }
		var paperSize = this.printSize2MapSize( paperSizeVal );
		
		this._mapContainer.css( { width:paperSize.w + 'px', height: paperSize.h + 'px' } );
		this._map.invalidateSize(true);
		
		$(window).resize();
		
	},
	_qualityChange : function()
	{
        if(this._baseLayer != null){
		    this._baseLayer.setHighQuality( this._qualityCheck.is( ':checked' )  );
        }
	},

	_create : function()
	{
		this._container = $( '<div>' ).addClass( 'gsi_pageprinter' );//.click( L.bind( function(){this.hide();},this) );		
		
		this._headerContainer = $( '<div>' ).addClass( 'header_container' );
		this._mapContainer = $( '<div>' ).addClass( 'map_container' );

		var table = $( '<table>' );
		var tbody = $( '<tbody>' );
		var tr = $( '<tr>' );
		var td = null;

		// タイトル
		td = $( '<td>' );
		td.append( $( '<img>' ).attr( { 'src':'image/print/title.png'} ) ).css( { 'text-align':'left'} );
		tr.append( td );

		// サイズ選択
		td = $( '<td>' ).css( {width:"240px"} );
		this._paperSizeSelect = $( '<select>' ).addClass( 'no_print' );
		this._paperSizeSelect.append( $('<option>').html("A4縦(標準)").val("A4_portrait" ) );
		this._paperSizeSelect.append( $('<option>').html("A4縦(高画質)").val("A4_portrait,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A4横(標準)").val("A4_landscape" ) );
		this._paperSizeSelect.append( $('<option>').html("A4横(高画質)").val("A4_landscape,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A3縦(標準)").val("A3_portrait" ) );
		this._paperSizeSelect.append( $('<option>').html("A3縦(高画質)").val("A3_portrait,hq" ) );
		this._paperSizeSelect.append( $('<option>').html("A3横(標準)").val("A3_landscape" ) );
		this._paperSizeSelect.append( $('<option>').html("A3横(高画質)").val("A3_landscape,hq" ) );
		this._paperSizeSelect[0].selectedIndex = 0;
		this._paperSizeSelect.change( L.bind( this._paperSizeChage, this ) );
		td.append( $( '<span>' ).html( '用紙サイズ：' ).addClass( 'no_print' ));
		td.append( this._paperSizeSelect );
		tr.append( td );

		// 印刷ボタン
		td = $( '<td>' ).css( {width:"64px"} );
		var printBtn  = $( '<button>' ).html( '印刷' ).addClass( 'no_print' ).click( L.bind( this.print, this ) );
		td.append( printBtn );
		tr.append( td );

		// 戻るボタン
		td = $( '<td>' ).css( {width:"120px"} );
		var backBtn  = $( '<button>' ).css({'white-space':'nowrap'}).html( '元の画面に戻る' ).addClass( 'no_print' ).click( L.bind( this.hide, this ) );
		td.append( backBtn );
		tr.append( td );

		tbody.append( tr );
		table.append( tbody );

		this._headerContainer.append( table );
		this._container.append( this._headerContainer );
		this._container.append( this._mapContainer );

		this._container.hide();
		
		$( document.body) .append( this._container );
	},
	printSize2MapSize : function(size)
	{
		return CONFIG.PAPERSIZE[ size ];
	},
	print : function()
	{
		window.print();
	}
} );

/************************************************************************
 L.Class
 - GSI.PageStateManager
 ************************************************************************/
GSI.PageStateManager = L.Class.extend( {

	initialize : function ( map, baseLayer, onOffObjects, mapLayerList, layerTreeDialog )
	{
		this._map = map;
		this._onOffObjects = onOffObjects;
		this._baseLayer = baseLayer;
		this._mapLayerList= mapLayerList;
		this._layerTreeDialog= layerTreeDialog;
	},
	getPositionQueryString : function()
	{
		var center = this._map.getCenter().wrap();
		var zoom = this._map.getZoom();

		return "#" + zoom + "/" + ( Math.round( center.lat * 1000000 ) / 1000000 ) + '/' + ( Math.round( center.lng * 1000000 ) / 1000000 );
	},
	getCurrentPathQueryString : function()
	{
		var path = this._layerTreeDialog.getCurrentPath();
        return ( path && path != '' ? 'lcd=' + encodeURIComponent( path ) : '' );
	},
	getBaseLayerQueryString : function()
	{
        var ret = "";

        var f = false;
		var tileIdList = this._mapLayerList.getTileList();
		for ( var i=tileIdList.length-1; i>=0; i-- )
		{
            if(tileIdList[i]._visibleInfo && !tileIdList[i]._visibleInfo._isHidden){
                if(tileIdList[i].id == this._baseLayer.getActiveId()){
                    f = true;
                    break;
                }
            }
		}

        if(f){
            ret = "base=" + encodeURIComponent( this._baseLayer.getActiveId() );
        }

		return ret;
	},
	getLayersQueryString : function( options )
	{
		if ( !options )options = {};

        var fGrayScale = true;
        if(options.visibleOnly){
            fGrayScale = false;
        }

		var result           = '';
        var result_grayscale = '';
		var tileIdList = [];
		if ( !options.noTile )
		{
			var tileList = this._mapLayerList.getTileList();

			for ( var i=0; i<tileList.length; i++ )
				tileIdList.push( tileList[i] );
		}

		for ( var i=tileIdList.length-1; i>=0; i-- )
		{
            var fList = true;
            if(options.visibleOnly){
                fList = false;
                if(tileIdList[i]._visibleInfo && !tileIdList[i]._visibleInfo._isHidden){
                    fList = true;
                    
                    if(i==tileIdList.length-1){
                        fGrayScale = true;
                    }
                }
            }

            if(fList){
                flist = true;
			    var opacity   = ( tileIdList[i]._visibleInfo && tileIdList[i]._visibleInfo.opacity   ? tileIdList[i]._visibleInfo.opacity   : 1);
	            result += ( result !='' ? '|' : '' ) +tileIdList[i].id + ( opacity != 1 ? ',' + opacity : '');
            }
		}

		var idList = [];
		if ( !options.noList )
		{
			var list = this._mapLayerList.getList();
			for ( var i=0; i<list.length; i++ )
				idList.push( list[i] );
		}
		for ( var i=idList.length-1; i>=0; i-- )
		{
            var fList = true;
            if(options.visibleOnly){
                fList = false;
                if(idList[i]._visibleInfo && !idList[i]._visibleInfo._isHidden){
                    fList = true;
                }
            }

            if(fList){
			    var opacity = ( idList[i]._visibleInfo && idList[i]._visibleInfo.opacity ? idList[i]._visibleInfo.opacity : 1 );
			    result += ( result !='' ? '|' : '' ) +idList[i].id + ( opacity != 1 ? ',' + opacity : '');
            }
		}

        if(fGrayScale){
            if(GSI.GLOBALS.baseLayer.getGrayScale()){
                result_grayscale = "base_grayscale=1";
            }
        }

		if ( result != ''  || result_grayscale)
		{
            if(result_grayscale != ""){
                if(result != ""){
                    result_grayscale += "&";
                }
            }

			return result_grayscale + "ls=" + encodeURIComponent( result );
		}
		else
		{
			return "";
		}
	},
	getViewSettingVisible : function( key )
	{
		var target = this._onOffObjects[key];
		if ( !target ) return false;
		return target.obj[target.getter]();
	},

	getQueryParams : function( options )
	{
		if ( !options ) options = {};
		var result = {};

		// hc
		if ( !options.hcList) options.hcList = [];
		var hiddenControl = options.hcList.join('');

		if ( hiddenControl != '' ) result.hc = hiddenControl;

		// vs
		if ( !options.vsInfo ) options.vsInfo = {};
		if ( !options.vsInfo.skips ) options.vsInfo.skips = {};
		if ( !options.vsInfo.visibles ) options.vsInfo.visibles = {};

		var vsInfo = options.vsInfo;
		var viewSetting = '';

		for ( var key in CONFIG.QUERYPARAMETER )
		{
			var target = this._onOffObjects[key];
			var param = CONFIG.QUERYPARAMETER[ key ];

			if ( !param || !target || vsInfo.skips[key] ) continue;
			if ( vsInfo.visibles[key] == true || vsInfo.visibles[key] == false )
			{
				viewSetting += param.prefix + ( vsInfo.visibles[key] ? '1' : '0' );
			}
			else
			{
                if(key == CONFIG.PARAMETERNAMES.FOOTER){
                    if(target.obj.isVisible()){
                        viewSetting += param.prefix + '1';
                    }
                    else{
                        viewSetting += param.prefix + '0';
                    }
                    viewSetting += param.prefix + '0';
                }
                else{
				    if ( target.obj[target.getter]() )
				    {
					    viewSetting += param.prefix + '1';
				    }
				    else
				    {
					    viewSetting += param.prefix + '0';
				    }
                }
			}
		}

		if ( viewSetting != '' )
		{
			result.vs = viewSetting;
		}

		// d
		var visibleDialogSetting = '';

		if ( !options.visibleDialogs) options.visibleDialogs = {};
		for ( var key in options.visibleDialogs )
		{
			if ( options.visibleDialogs[ key ] )
			{
				visibleDialogSetting += key;
			}
		}

		if ( visibleDialogSetting != '' )
		{
			result.d = visibleDialogSetting;
		}

		return result;
	},
	getTileViewSetting : function( options ) {
		if ( !options )options = {};
		var result = '';

		var tileIdList = [];
		if ( !options.noTile )
		{
			var tileList = this._mapLayerList.getTileList();

			for ( var i=0; i<tileList.length; i++ )
				tileIdList.push( tileList[i] );
		}

		for ( var i=tileIdList.length-1; i>=0; i-- )
		{
			result += ( tileIdList[i]._visibleInfo && tileIdList[i]._visibleInfo._isHidden ? '0' : '1' );
		}

		var idList = [];
		if ( !options.noList )
		{
			var list = this._mapLayerList.getList();

			for ( var i=0; i<list.length; i++ )
				idList.push( list[i] );
		}
		for ( var i=idList.length-1; i>=0; i-- )
		{
			result += ( idList[i]._visibleInfo && idList[i]._visibleInfo._isHidden ? '0' : '1' );
		}

		if ( result != '' )
		{
			return "disp=" + result;
		}
		else
		{
			return "";
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.QueryParams

　GETパラメータ||ハッシュll 10進経度,10進経度
	z    ズームレベル
	base ベース
	hc   隠す機能
	vs   表示設定の値
	ls   表示するレイヤー
	skz  作図レイヤー
************************************************************************/
GSI.QueryParams = L.Class.extend( {

	_controlSetting : {
		infoMenu:{visible:true},
		funcMenu:{visible:true},
		header:{visible:true},
		contextMenu:{visible:true},
		baseMapSelector:{visible:true}
	},
	_viewSetting : {
		centerCross : true,
		latLngGrid : false,
		utmGrid : false,
		jihokuLine : false,
		miniMap : false
	},
	_layers : [],
	_viewListDialogVisible : false,
	_layerTreeDialogVisible : false,
	initialize : function(options)
	{
        var queryStrings = ( options && options.queryString ? options.queryString : window.location.search );
        var vHashLocation = location.hash;
        var vHashOptions  = "";
        var vHash         = vHashLocation.split("/&");
        if(vHash.length == 2){
            vHashLocation = vHash[0];
            vHashOptions  = vHash[1];
        }
        queryStrings += vHashOptions;

        this._f_queryLocation = queryStrings;
        this._f_queryOptions  = vHashOptions;
        this._f_queryStrings  = queryStrings + vHashLocation;

        this.initialize_proc(queryStrings);
    }
	,initialize_proc : function(queryStrings)
	{
        this._baseMap     = "";
        this._baseMapDisp = true;

		this.params = this._parse(queryStrings);
		try{ this._initPosition(); }catch(e){}
		try{ this._initBaseMap(); }catch(e){}
		try{ this._initControlSetting(); }catch(e){}
		try{ this._initViewSetting(); }catch(e){}
		try{ this._initLayerList(); }catch(e){}
		try{ this._initDialogSettings(); }catch(e){}
	},
    getInit : function(){
        var args = this._parse(window.location.search);

        var ret = true;
        if ( args["postmessage"] && args["postmessage"] == "1"){
            ret = false;
        }

        return ret;
    },
	getPosition : function( defaultPosition )
	{
		return ( this._position ? this._position  : defaultPosition );
	},
	getZoom : function( defaultZoom )
	{
		return ( this._zoom ? this._zoom  : defaultZoom );
	},
	getBaseMap : function()
	{
        this._initBaseMapExist();
        var ret = "";
        if(this._baseMap){
            ret = this._baseMap;
        }
		return ret;
	},
	getBaseMapDisp : function()
	{
        var ret = this._baseMapDisp;

        return ret;
    },
	getBaseMapGrayScale : function()
	{
		return this._baseMapGrayScale;
	},        
	getLayers : function()
	{
		return this._layers;
	},
	getViewListDialogVisible : function()
	{
		return this._viewListDialogVisible;
	},
	getLayerTreeDialogVisible : function()
	{
		return this._layerTreeDialogVisible;
	},
	getCurrentPath : function()
	{
        var cd = "";
        if(this.params["lcd"]){
            cd = this.params["lcd"];
        }

        return cd;
	},
	getControlSetting : function( )
	{
		return this._controlSetting;
	},
	getViewSetting : function( )
	{
		return this._viewSetting;
	},
	_initPosition : function()
	{
		if ( this.params["ll"] )
		{
			var latLng = this.params["ll"].split( ',' );

			if ( latLng.length == 2 )
			{
				if (
					( latLng[0].match(/^-?[0-9]+\.[0-9]+$/) || latLng[0].match(/^-?[0-9]+$/) )
					&&
					( latLng[1].match(/^-?[0-9]+\.[0-9]+$/) || latLng[1].match(/^-?[0-9]+$/) )
				)
				{
					this._position = [
						parseFloat( latLng[0] ),
						parseFloat( latLng[1] )
					];
				}
			}
		}

		// ズーム
		if ( this.params["z"] && this.params["z"].match(/^[0-9]+$/) )
			this._zoom = parseInt( this.params["z"] );
		if ( this._zoom && ( this._zoom < 1 || this._zoom > 18 ) )
		{
			this._zoom = null;
		}
	},
	_initBaseMap : function()
	{
        if(this._baseMap){
            this._baseMap = "";
        }

        var fBaseMap = true;
        if(this._f_queryStrings == "" || (this._f_queryOptions.lastIndexOf("base") == -1 && this._f_queryOptions.lastIndexOf("=") == -1)){
            fBaseMap = false;
        }

        this._baseMapGrayScale = false;

		if ( this.params["base"] )
		{
			this._baseMap = this.params["base"];
            if(this._baseMap != ""){
                fBaseMap = true;
            }
		}

        if(!fBaseMap){
            this.params["base"] = CONFIG.layerBaseDefaultID;
            this._initBaseMap();
        }
        if(this.params["base_grayscale"]){
            if(this.params["base_grayscale"] == "1"){
                this._baseMapGrayScale = true;
            }
        }

        this._initBaseMapExist();
	},
	_initBaseMapExist : function()
	{
        if(this._baseMap != ""){
            var fBaseMapExists = true;
            if(this._f_queryStrings != ""){
                if(CONFIG.BASETILES.length > 0){
                    fBaseMapExists = false;
                    for(n = 0; n < CONFIG.BASETILES.length; n++){
                        if(CONFIG.BASETILES[n].id == this._baseMap){
                            fBaseMapExists = true;
                            break;
                        }
                    }
                }
            }
            if(!fBaseMapExists){
                this._baseMap = "";
            }
        }
    },
	_initLayerList : function()
	{
        var fBaseMap = true;
        var vParams  = "";

        if(!this._baseMap){
            fBaseMap = false;
        }

		this._layers = [];
		if ( this.params["ls"] )
		{
            vParams = this.params["ls"];

			var disp = this.params["disp"];
			
			var layers = this.params["ls"].split( '|' );
            
			for ( var i=0; i<layers.length; i++ )
			{
				if ( $.trim( layers[i] ) == '' ) continue;
				var parts  = layers[i].split( ',' );
				var $hdn = false;

				if ( disp && disp.length > i)
				{
					if ( disp.charAt(i) == '0' )
					{
						$hdn = true;
					}
					else
					{
						$hdn = false;
					}
				}
				else
				{
					$hdn = false;
				}

                var vID = parts[ 0 ];
                if(CONFIG.BASETILES.length == 0){
                }
                else{
                    for(n = 0; n < CONFIG.BASETILES.length; n++){
                        if(CONFIG.BASETILES[n].id == parts[ 0 ]){
                            vID = this._baseMap;
                            break;
                        }
                    }
                }

                if(!this._baseMap){
                    if(i == 0){
                        this._baseMap = vID;
                    }
                }

                if(vID == this._baseMap){
                    fBaseMap = false;
                    this._baseMap = vID;
                    this._baseMapDisp = !$hdn;
                }

				var layerData = {
					id      :vID,
					opacity : 1,
					hidden  : $hdn
				};

				if ( parts.length >= 2 )
				{
					var opacity = parts[1];
					if (!isNaN(opacity))
					{
						opacity = parseFloat( opacity );
						if ( opacity >= 0.0 && opacity <= 1.0 )
							layerData.opacity = opacity;
					}
				}
				this._layers.push( layerData );
			}
		}

        if(fBaseMap && this._baseMap != ""){
            this.params["ls"] = this._baseMap;
            if(vParams != ""){
                this.params["ls"] += '|' + vParams;
            }
            this._initLayerList();
        }

        this._initBaseMapExist();
	},
	_initControlSetting : function()
	{
		if ( this.params["hc"] )
		{
			var ctrl = this.params["hc"];
			if ( ctrl.toLowerCase() == CONFIG.HIDDENCONTROLPARAMETER.ALL )
			{
				this._controlSetting = {
					infoMenu:{visible:false},
					funcMenu:{visible:false},
					header:{visible:false},
					contextMenu:{visible:false},
					baseMapSelector:{visible:false}
				};
			}
			else
			{
				for( var i=0; i<ctrl.length; i++ )
				{
					switch( ctrl.charAt( i ).toLowerCase() )
					{
						case CONFIG.HIDDENCONTROLPARAMETER.INFOMENU:
							// 情報メニュー
							this._controlSetting.infoMenu.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.FUNCMENU:
							// 機能メニュー
							this._controlSetting.funcMenu.visible = false;
							break;
						case CONFIG.HIDDENCONTROLPARAMETER.HEADER:
							// ヘッダー
							this._controlSetting.header.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.CONTEXTMENU:
							// コンテキストメニュー
							this._controlSetting.contextMenu.visible = false;
							break;

						case CONFIG.HIDDENCONTROLPARAMETER.BASEMAPSELECTOR:
							// ベースマップセレクター
							this._controlSetting.baseMapSelector.visible = false;
							break;
					}
				}
			}
		}
	},
	_initViewSetting : function()
	{
		if ( this.params["vs"] )
		{
			var vs = this.params["vs"];

			for ( var i=0; i<vs.length; i+=2 )
			{
				if ( vs.length -1 == i ) break;
				var key = vs.charAt(i);
				var value = vs.charAt(i+1);

				for( var qpKey in CONFIG.QUERYPARAMETER )
				{
					if (CONFIG.QUERYPARAMETER[ qpKey ].prefix == key )
					{
						this._viewSetting[CONFIG.QUERYPARAMETER[ qpKey ].settingName]  = ( value == "1" );
						break;
					}
				}
			}
		}
	},
	_initDialogSettings : function()
	{
        this._viewListDialogVisible  = false;
        this._layerTreeDialogVisible = false;

		if ( this.params["d"] )
		{
			var d = this.params["d"];

			for ( var i=0; i<d.length; i++ )
			{
				var id = d.charAt(i);
				switch( id )
				{
					case CONFIG.DIALOGPARAMETER.VIEWLISTDIALOG:
						this._viewListDialogVisible = true;
						break;

					case CONFIG.DIALOGPARAMETER.LAYERTREEDIALOG:
						this._layerTreeDialogVisible = true;
						break;

				}
			}
		}
	},
	_parse : function( queryString, separator )
	{
		var result = {};
		if( 1 < queryString.length )
		{
			var query = ( queryString.charAt(0) == '?' ? queryString.substring( 1 ) : queryString );

			var parameters = query.split( '&' );

			for( var i = 0; i < parameters.length; i++ )
			{
                try{
				    var element = parameters[ i ].split( '=' );

				    var paramName = decodeURIComponent( element[ 0 ] );
				    var paramValue = decodeURIComponent( element[ 1 ] );
    				result[ paramName ] = paramValue;
                }
                catch(e){

                }
			}
		}
		return result;
	}
} );

/************************************************************************
 L.Class
 - GSI.SakuzuList（作図リスト管理）
 ************************************************************************/
GSI.SakuzuListItem = L.Class.extend( {
	includes: L.Mixin.Events,
	_title : '',
	_fileName : '',
	_layer : null,
	initialize : function( owner, dataType, title, fileName, layer, visible)
	{
		this.editMode = GSI.SakuzuListItem.NONE;
		this._owner = owner;
		this._dataType = dataType;
		this._title = title;
		this._fileName = fileName;
		this._layer = layer;
		this._visible = visible;
		if ( !this._layer ) this._layer = L.featureGroup();

		if ( visible ) this._owner._map.addLayer( this._layer );
	},
	getVisible : function()
	{
		return this._visible;
	},
	setVisible : function( visible)
	{
		if ( this._visible  != visible )
		{
			this._visible = visible;
			if ( this._layer )
			{
				if  ( this._visible )
					this._owner._map.addLayer( this._layer );
				else
					this._owner._map.removeLayer( this._layer );
			}

			this._owner.fire( 'visiblechange' );
		}

	},
	getTitle : function()
	{
		return this._title;
	},
	getFileName : function()
	{
		return this._fileName;
	},
	_getLayerCount : function(layer)
	{
		if ( !layer ) return 0;
		if ( !layer.getLayers ) return 1;
		var layers = layer.getLayers();

		var result = 0;
		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];
			var layerType = this._getType( layer );

			if ( layerType != GSI.SakuzuListItem.FEATURES )
				result++;
			else
			{
				result += this._getLayerCount( layer );
			}
		}

		return result;
	},
	getLayerCount : function()
	{
		return this._getLayerCount( this._layer );
	},
	remove : function()
	{
		this._owner.remove( this );
	},
	removeAllLayers : function()
	{
		if ( this._layer )
		{
			this._owner._map.removeLayer( this._layer );
			delete this._layer;
			this._layer = null;
		}
		this._layer = L.featureGroup();
		this._owner._map.addLayer( this._layer );
	},
	destroy : function()
	{
		if ( this._layer )
		{
			this._owner._map.removeLayer( this._layer );
			delete this._layer;
			this._layer = null;
		}
	},
	getEditingStyle : function()
	{
		var style = null;

		if ( this._editingEditingLayer )
		{
			style = this._editingEditingLayer.options;
			if ( this._editingEditingLayer.getLayers )
			{
				var layers = this._editingEditingLayer.getLayers();

				if ( layers.length > 0 )
				{
					style = layers[0].options;
				}
			}
		}
		else if ( this._editingPathList && this._editingPathList.length > 0)
		{
			style =this._editingPathList[0].options.shapeOptions;

			style = ( style ? style : this._editingPathList[0].options );
		}

		if ( style )
		{
			if ( this._editingType == GSI.SakuzuListItem.POLYGON
				|| this._editingType == GSI.SakuzuListItem.CIRCLE
				|| this._editingType == GSI.SakuzuListItem.MULTIPOLYGON
				|| this._editingType == GSI.SakuzuListItem.MULTICIRCLE  )
			{
				if ( !style.fillColor ) style.fillColor = style.color;
				if (( style.fillOpacity === null ) || ( style.fillOpacity === undefined ) || ( style.fillOpacity === "" ))
				{
					style.fillOpacity = style.opacity;
				}
			}
		}
		return style;
	},
	getEditingInfo : function()
	{
		return this._editingEditingLayerInfo;
	},
	setEditingInfo : function(info)
	{
		this._editingEditingLayerInfo  = info;
	},
	setEditingStyle : function(style)
	{
		var radius = style.radius;
		var currentStyle = this.getEditingStyle();
		var icon = null;
		var iconInfo = style._iconInfo;

		if ( iconInfo )
		{
			delete style["_iconInfo"];
			if ( iconInfo.html || iconInfo.html == '' )
			{
				var currentIconOptions = $.extend( true, {}, currentStyle.icon.options );
				if ( currentIconOptions.html == iconInfo.html ) return;
				currentIconOptions.html = iconInfo.html;
				icon = GSI.divIcon( currentIconOptions);
			}
			else
			{
				var currentIconUrl = "";
				var currentIconScale = 1;
				var currentIconSize = [20,20];
				var currentIconAnchor = [10,10];

				if ( currentStyle.icon )
				{
					currentIconUrl = currentStyle.icon.options.iconUrl;
					currentIconScale = currentStyle.icon.options._iconScale;
					currentIconSize = currentStyle.icon.options.iconSize;
					currentIconAnchor = currentStyle.icon.options.iconAnchor;

					if ( !currentIconScale ) currentIconScale = 1;
				}

				var iconScale = ( iconInfo._iconScale ? iconInfo._iconScale : currentIconScale );

				if ( currentIconSize )
				{
					currentIconSize[0] = Math.floor( parseFloat( currentIconSize[0] ) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
					currentIconSize[1] = Math.floor( parseFloat( currentIconSize[1]) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
				}

				if ( currentIconAnchor )
				{
					currentIconAnchor[0] = Math.floor( parseFloat( currentIconAnchor[0] ) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
					currentIconAnchor[1] = Math.floor( parseFloat( currentIconAnchor[1]) * ( 1.0 / parseFloat( currentIconScale ) ) * parseFloat( iconScale) );
				}

				var iconSize = ( iconInfo.iconSize ? iconInfo.iconSize : currentIconSize );
				var iconAnchor = ( iconInfo.iconAnchor ? iconInfo.iconAnchor : currentIconAnchor );

				icon = L.icon( {
					iconUrl: ( iconInfo.iconUrl ? iconInfo.iconUrl : currentIconUrl ),
					iconSize: iconSize,
					iconAnchor : iconAnchor,
					_iconScale : iconScale
				} );
			}
		}

		if ( this._editingEditingLayer )
		{
			var oldStyle = this._editingEditingLayer.options;
			var newStyle = jQuery.extend(true, oldStyle, style);

			// marker
			if ( this._editingEditingLayer.setIcon && icon )
			{
				this._editingEditingLayer.setIcon( icon );
			}

			// 円
            if(radius){
                if(this._editingType == GSI.SakuzuListItem.POINT_CIRCLE){
                    this._editingEditingLayer._radius_px = radius;

                    var o        = this._editingEditingLayer;
                    var vLatLng  = o.getLatLng();
                    radius  = GSI.Utils.ConverUnit(GSI.GLOBALS.map, o, radius, "px", "m");
                }
            }
			if ( this._editingEditingLayer.setRadius && radius){ this._editingEditingLayer.setRadius( radius ); }
			if ( this._editingEditingLayer._mRadius  && radius){ this._editingEditingLayer._mRadius = radius;   }
			
            if(radius){
                if(this._editingType == GSI.SakuzuListItem.POINT_CIRCLE){
                    if(this._editingPathList.length >= 1){
                        this._editingPathList[0].onZoomEnd();
                    }
                }
            }

			// その他
			if ( this._editingEditingLayer.setStyle )
			{
				this._editingEditingLayer.setStyle( newStyle );
			}
		}

		if ( this._editingPathList && this._editingPathList.length > 0)
		{
			for ( var i=0; i<this._editingPathList.length; i++ )
			{
				// marker
				if ( icon )
				{
					this._editingPathList[i].setOptions( {icon:icon} );
					if ( this._editingPathList[i]._marker && this._editingPathList[i]._marker.setIcon )
						this._editingPathList[i]._marker.setIcon ( icon );
				}

				// 円
				if ( this._editingPathList[i].setRadius && radius ) this._editingPathList[i].setRadius( radius );

				// その他
				var newStyle = jQuery.extend(true, this._editingPathList[i].options.shapeOptions, style);
				var shape = this._editingPathList[i]._shape;
				if ( !shape ) shape = this._editingPathList[i]._poly;
				if ( !shape ) shape = this._editingPathList[i]._area;

				if ( shape && shape.setStyle )
				{
					shape.setStyle( newStyle );
				}
				if ( this._editingPathList.setOptions )
					this._editingPathList.setOptions( {shapeOptions: newStyle} );

			}
		}
	},
	startCreate : function( id )
	{
		this.setVisible( true );
		this.editCancel();
		this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.CREATE;

		this._editingType = id;

		if ( !this._editingFreatureGroup )
		{
			this._editingFreatureGroup = L.featureGroup();
 			this._owner._map.addLayer( this._editingFreatureGroup );
 		}

 		if ( !this._pathCreatedEventHandler )
		{
			this._pathCreatedEventHandler = L.bind( this._onPathCreated, this );
			this._owner._map.on('draw:created', this._pathCreatedEventHandler );
		}

		this._editingEditingLayerInfo = {
			title : null,
			description : null,
			table : null
		};

		switch( id )
		{
			case GSI.SakuzuListItem.POINT:
				this._startEditPoint();
				break;
			case GSI.SakuzuListItem.POINT_CIRCLE:
				this._startEditPointCircle();
				break;
			case GSI.SakuzuListItem.POINT_TEXT:
				this._startEditPointText();
				break;
			case GSI.SakuzuListItem.LINESTRING:
				this._startEditLineString();
				break;
			case GSI.SakuzuListItem.POLYGON:
				this._startEditPolygon();
				break;
			case GSI.SakuzuListItem.CIRCLE:
				this._startEditCircle();
				break;
			case GSI.SakuzuListItem.FREEHAND:
				this._startEditFreehand();
				break;
		}
	},
	startEdit : function( id, layer )
	{
		this.setVisible( true );
		this.editCancel();
		this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.EDIT;

		this._editingType = id;
		
		if ( !this._editingFreatureGroup )
		{
			this._editingFreatureGroup = L.featureGroup();
			this._owner._map.addLayer( this._editingFreatureGroup );
		}
		if ( !layer._information )
		{
			layer._information = this._getLayerInfo( layer );
		}
		this._editingEditingLayerInfo = $.extend( true, {}, layer._information ? layer._information : {} );
		
		this._editingOriginalLayer = layer;
		
		( layer._parent ? layer._parent : this._layer ).removeLayer( layer );
		this._editingEditingLayer = this._cloneLayer( this._editingType, layer );
        this._editingEditingLayerSRC = $.extend(true, {}, this._editingEditingLayer);

		this._editingFreatureGroup.addLayer( this._editingEditingLayer );

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		this._startPathEdit();
	},
	_cloneLatLngs : function( src )
	{
		var result  = [];
		
		for ( var i=0; i<src.length; i++ )
		{
			if ( src[i].lat )
			{
				result.push( L.latLng( src[i].lat, src[i].lng ) );
			}
		}
		
		return result;
	},
	_cloneLayer : function( layerType, layer )
	{
        var result = null;
		switch( layerType )
		{
			case GSI.SakuzuListItem.POINT:
				var iconOptions =$.extend( true, {}, layer.options.icon.options );

				var icon = new L.Icon( iconOptions );
				result = L.marker(layer.getLatLng(), {icon: icon, draggable:false});
				break;

			case GSI.SakuzuListItem.POINT_TEXT:
				var iconOptions =$.extend( true, {}, layer.options.icon.options );
				var icon = new GSI.DivIcon( iconOptions );
				result = L.marker(layer.getLatLng(), {icon: icon, draggable:false});
				break;

			case GSI.SakuzuListItem.POLYGON:
				result =L.polygon( this._cloneLatLngs(layer.getLatLngs()), layer.options );
				result.feature = layer.feature;
				break;

			case GSI.SakuzuListItem.LINESTRING:
				result =L.polyline( this._cloneLatLngs( layer.getLatLngs() ), layer.options );
				result.feature = layer.feature;
				break;

            case GSI.SakuzuListItem.POINT_CIRCLE:
			case GSI.SakuzuListItem.CIRCLE:
                var latlng = layer.getLatLng();
                var radius = layer.getRadius();
                var radius_px = null;
                if(layerType == GSI.SakuzuListItem.POINT_CIRCLE){
                    radius_px = radius;
                    radius = GSI.Utils.ConverUnit(GSI.GLOBALS.map, layer, radius_px, "px", "m");
                }
				result = L.circle(latlng, radius, layer.options );
                if(radius_px != null){
                    result._radius_px = radius_px;
                }
				break;

			case GSI.SakuzuListItem.MULTILINESTRING:
			case GSI.SakuzuListItem.MULTIPOINT:
			case GSI.SakuzuListItem.MULTIPOLYGON:
				result = L.featureGroup();
				result.feature = layer.feature;
				var layers = layer.getLayers();
				for( var i=0; i<layers.length; i++ )
				{
					var childLayerType = this._getType( layers[i] );
					var childLayer = this._cloneLayer( childLayerType, layers[i] );
					if ( childLayer )
					{
						childLayer._information = null;
						result.addLayer(childLayer );
					}
				}
				break;
		}

		if ( result )
		{
			result._information = layer._information;
		}
		return result;
	},
	_getType : function( layer )
	{
		var itemType = '';

		if ( layer.getRadius )
		{
			// 円
			itemType = GSI.SakuzuListItem.CIRCLE;

            /*
            Circle:setLabelNoHide
            Circle:getLabel
            Circle:_onMarkerAdd
            Circle:_addLabelRevealHandlers
            Circle:_removeLabelRevealHandlers
            Circle:_showLabel
            Circle:_hideLabel
            */
            if((layer.feature && layer.feature.propertiesl && layer.feature.properties._markerType == "CircleMarker") || (layer.getLabel && layer._showLabel)){
                itemType = GSI.SakuzuListItem.POINT_CIRCLE;
            }
		}
		else
		{
			if ( layer.getLayers )
			{
				itemType = GSI.SakuzuListItem.FEATURES;
				if ( layer.feature &&  layer.feature.geometry && layer.feature.geometry.type )
				{
					switch( layer.feature.geometry.type )
					{
						case "MultiPolygon":
							itemType = GSI.SakuzuListItem.MULTIPOLYGON;
							break;

						case "MultiLineString":
							itemType = GSI.SakuzuListItem.MULTILINESTRING;
							break;

						case "MultiPoint":
							itemType = GSI.SakuzuListItem.MULTIPOINT;
							break;
					}
				}
			}
			else
			{
				var geoJSON = layer.toGeoJSON();
				switch( geoJSON.geometry.type )
				{
					case "Point":
						// DivIcon判定
						if ( layer.options.icon.options.html || layer.options.icon.options.html == '' )
						{
							itemType = GSI.SakuzuListItem.POINT_TEXT;
						}
						else
						{
							itemType = GSI.SakuzuListItem.POINT;
						}
						break;

					case "Polygon":
						itemType = GSI.SakuzuListItem.POLYGON;
						break;
					case "LineString":
						itemType = GSI.SakuzuListItem.LINESTRING;
						break;
				}
			}
		}
		return itemType;
	},
	_onLayerClick : function( layer)
	{
		var itemType = this._getType(layer);
		if ( itemType != '' )
		{
			this._owner.fire( 'startedit' ,{ itemType:itemType, layer:layer} );
		}
	},
	_getLayers : function( layer, list, parent )
	{
		if ( !layer ) return;

		var layerType = this._getType( layer );

		if ( layerType != GSI.SakuzuListItem.FEATURES )
		{
			layer._parent = parent;
			list.push( layer );
		}
		else
		{
			var layers = layer.getLayers();
			for ( var i=0;i<layers.length; i++ )
				this._getLayers( layers[i], list,layer );
		}
	},
	startSelectTarget : function()
	{
		this.setVisible( true );
		this._owner._mapMouse.setClickMoveEnable( false );

		if ( !this._layer ) return;

		// 選択用rectangle
		if ( !this._editingBoundsRects )
		{
			this._editingBoundsRects = L.featureGroup().addTo( this._owner._map );
		}

		var f_fitBounds = false;
		var layers = [];
		this._getLayers( this._layer, layers );

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];
            layer.id = (i + 1);

			// ポップアップストップ
			if ( layer.closePopup )layer.closePopup();
			if ( layer.unbindPopup )layer.unbindPopup();

			// 編集
			if ( layer._clickEditHandler )
			{
				layer.off('click', layer._clickEditHandler);
				delete layer._clickEditHandler;
				layer._clickEditHandler = null;
			}

			layer._clickEditHandler = L.bind( this._onLayerClick, this, layer );

			layer.on( 'click', layer._clickEditHandler );

			var rect = null;
			var rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:1,dashArray : [3,3]};

			if ( layer.getRadius )
			{
				var latlng = layer._latlng;
				var radius = layer.getRadius();
                /*
                Circle:setLabelNoHide
                Circle:getLabel
                Circle:_onMarkerAdd
                Circle:_addLabelRevealHandlers
                Circle:_removeLabelRevealHandlers
                Circle:_showLabel
                Circle:_hideLabel
                */
                if((layer.feature && layer.feature.propertiesl && layer.feature.properties._markerType == "CircleMarker") || (layer.getLabel && layer._showLabel)){
                    rect = new GSI.PixelRectangle( layer.getLatLng(), radius * 2, radius * 2, radius, radius, rectStyle );

                    radius = GSI.Utils.ConverUnit(GSI.GLOBALS.map, layer, radius, "px", "m");

                    //f_fitBounds = false;
                }
                else{
				    var latRadius = ( radius / 40075017 * 360 );
				    var lngRadius = ( latRadius / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat) );

				    rect = L.rectangle(
					    new L.LatLngBounds(
						    [latlng.lat - latRadius, latlng.lng - lngRadius],
						    [latlng.lat + latRadius, latlng.lng + lngRadius]),
					    rectStyle );
                }
			}
			else if ( layer.getBounds )
			{
				rect = L.rectangle(layer.getBounds(), rectStyle);
			}
			else
			{
				if ( layer.getLatLng )
				{
					var w = 50;
					var h = 50;
					var anchorX = 25;
					var anchorY = 25;
					if ( layer.options.icon && layer.options.icon.options.iconUrl && layer.options.icon.options.iconSize )
					{
						w = layer.options.icon.options.iconSize[0] + 8;
						h = layer.options.icon.options.iconSize[1] + 8;
					}
					else if ( layer._icon )
					{
						w = $( layer._icon ).outerWidth( false ) + 8;
						h = $( layer._icon ).outerHeight( false ) + 8;
					}

					if ( layer.options.icon && layer.options.icon.options.iconAnchor )
					{
						anchorX = layer.options.icon.options.iconAnchor[0] + 4;
						anchorY = layer.options.icon.options.iconAnchor[1] + 4;
					}
					else if ( layer.options.icon && ( layer.options.icon.options.html || layer.options.icon.options.html !='' ) )
					{
						anchorX = 4;
						anchorY = 4;
					}
					else
					{
						anchorX = Math.round( w / 2 );
						anchorY = Math.round( h / 2 );
					}
					rect = new GSI.PixelRectangle( layer.getLatLng(), w, h, anchorX, anchorY, rectStyle );
				}
			}

            layer._boundRect = rect;
			if ( rect ){
                rect.id = layer.id;                
                this._editingBoundsRects.addLayer( rect );
            }
		}
		if ( this._editingBoundsRects.getBounds )
		{
			try
			{
                if(f_fitBounds){
				    this._owner._map.fitBounds( this._editingBoundsRects.getBounds() );
                }
			}
			catch( e ) {}
		}
	},
	_refreshEditingBoundsRects : function()
	{
		// 選択用rectangle
		if ( !this._editingBoundsRects )
		{
			this._editingBoundsRects = L.featureGroup().addTo( this._owner._map );
		}
		else
		{
			this._editingBoundsRects.clearLayers();
		}

		var layers = [];
		this._getLayers( this._layer, layers );

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];
            layer.id = (i + 1);

			var rect = null;
			var rectStyle = {color: "#ff3333", weight: 2, fill:false, opacity:1,dashArray : [3,3]};

			if ( layer.getRadius )
			{
				var latlng = layer._latlng;
				var radius = layer.getRadius();
                /*
                Circle:setLabelNoHide
                Circle:getLabel
                Circle:_onMarkerAdd
                Circle:_addLabelRevealHandlers
                Circle:_removeLabelRevealHandlers
                Circle:_showLabel
                Circle:_hideLabel
                */
                if((layer.feature && layer.feature.propertiesl && layer.feature.properties._markerType == "CircleMarker") || (layer.getLabel && layer._showLabel)){
                    rect = new GSI.PixelRectangle( layer.getLatLng(), radius * 2, radius * 2, radius, radius, rectStyle );

                    radius = GSI.Utils.ConverUnit(GSI.GLOBALS.map, layer, radius, "px", "m");
                }
                else{
				    var latRadius = ( radius / 40075017 * 360 );
				    var lngRadius = ( latRadius / Math.cos(L.LatLng.DEG_TO_RAD * latlng.lat) );

				    rect = L.rectangle(
					    new L.LatLngBounds(
						    [latlng.lat - latRadius, latlng.lng - lngRadius],
						    [latlng.lat + latRadius, latlng.lng + lngRadius]),
					    rectStyle );
                }
			}
			else if ( layer.getBounds )
			{
				rect = L.rectangle(layer.getBounds(), rectStyle);
			}
			else
			{
				if ( layer.getLatLng )
				{
					var w = 50;
					var h = 50;
					var anchorX = 25;
					var anchorY = 25;

					if ( layer.options.icon && layer.options.icon.options.iconUrl && layer.options.icon.options.iconSize )
					{
						w = layer.options.icon.options.iconSize[0] + 8;
						h = layer.options.icon.options.iconSize[1] + 8;
					}
					else if ( layer._icon )
					{
						w = $( layer._icon ).outerWidth( true ) + 8;
						h = $( layer._icon ).outerHeight( true ) + 8;
					}

					if ( layer.options.icon && layer.options.icon.options.iconAnchor )
					{
						anchorX = layer.options.icon.options.iconAnchor[0] + 4;
						anchorY = layer.options.icon.options.iconAnchor[1] + 4;
					}
					else if ( layer.options.icon && ( layer.options.icon.options.html || layer.options.icon.options.html !='' ) )
					{
						anchorX = 4;
						anchorY = 4;
					}
					else
					{
						anchorX = Math.round( w / 2 );
						anchorY = Math.round( h / 2 );
					}

					rect = new GSI.PixelRectangle( layer.getLatLng(), w, h, anchorX, anchorY, rectStyle );
				}
			}
			layer._boundRect = rect;
			if ( rect ){
                rect.id = layer.id;                
                this._editingBoundsRects.addLayer( rect );
            }
		}
	},
	_startEditPoint : function()
	{
		// ポイント編集開始
		L.drawLocal.draw.handlers.marker.tooltip.start = 'マーカーを置くポイントをクリック';

		this._editingPathList = [];

		var myiconScale = CONFIG.SAKUZU.SYMBOL.ICON_SCALE;
		var myiconSize = this._owner._defaultIcon.size;
		var __myIconSize = [
			Math.floor( this._owner._defaultIcon.size[0] * myiconScale ),
			Math.floor( this._owner._defaultIcon.size[1] * myiconScale )
		];
		var myiconAnchor = this._owner._defaultIcon.anchor;
		var __myiconAnchor = [
			Math.floor( this._owner._defaultIcon.anchor[0] * myiconScale ),
			Math.floor( this._owner._defaultIcon.anchor[1] * myiconScale )
		];

		this._owner._defaultIcon.url = CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON;
		this._owner._defaultIcon._iconScale = CONFIG.SAKUZU.SYMBOL.ICON_SCALE;

		var path =  new  L.Draw.Marker(this._owner._map,{
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : false,
			icon : L.icon( {
				iconUrl: this._owner._defaultIcon.url,
				iconSize: __myIconSize,
				iconAnchor: __myiconAnchor,
				_iconScale : CONFIG.SAKUZU.SYMBOL.ICON_SCALE } )
		});

		path.enable();

		this._editingPathList.push( path );
	},
	_startEditPointCircle : function()
	{
		L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';
		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			fillColor : '#ff0000',
			weight : 3,
			opacity : 0.5,
			fillOpacity : 0.5,
			stroke: true,
			fill: true,
			clickable: true
		};

		var path = new GSI.Draw.CircleMarker(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.on( 'change', L.bind( this._onCircleChange, this ) );
		path.enable();

		this._editingPathList.push( path );
    },
	_startEditPointText : function()
	{
		// ポイント(テキスト)編集開始
		L.drawLocal.draw.handlers.marker.tooltip.start = 'テキストを置くポイントをクリック';

		this._editingPathList = [];

		var path =  new  L.Draw.Marker(this._owner._map,{
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : false,
			icon : GSI.divIcon({
					className: 'gsi-div-icon',
					html : ''
				} )
		});

		path.enable();

		this._editingPathList.push( path );
	},
	_startEditLineString : function()
	{
		// ライン編集開始
		L.drawLocal.draw.handlers.polyline.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polyline.tooltip.cont = '次の位置を選択(最終点を2回クリックして終了)';
		L.drawLocal.draw.handlers.polyline.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			weight : 3,
			stroke: true,
			fill: false,
			clickable: true
		};

		var path = new GSI.Draw.Polyline(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.enable();

		this._editingPathList.push( path );

	},
	_startEditPolygon : function()
	{
		// ポリゴン編集開始
		L.drawLocal.draw.handlers.polygon.tooltip.start = '開始位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.cont = '次の位置を選択';
		L.drawLocal.draw.handlers.polygon.tooltip.end = '次の位置を選択(最終点を2回クリックして終了)';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			fillColor : '#ff0000',
			weight : 3,
			opacity : 0.5,
			fillOpacity : 0.5,
			stroke: true,
			fill: true,
			clickable: true
		};

		var path = new GSI.Draw.Polygon(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showArea : true,
			allowIntersection : false
		});
		path.enable();

		this._editingPathList.push( path );
	},
	_startEditCircle : function()
	{
		L.drawLocal.draw.handlers.circle.tooltip.start = '中心位置をクリックしドラッグしてください';
		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			fillColor : '#ff0000',
			weight : 3,
			opacity : 0.5,
			fillOpacity : 0.5,
			stroke: true,
			fill: true,
			clickable: true
		};

		var path = new GSI.Draw.Circle(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.on( 'change', L.bind( this._onCircleChange, this ) );
		path.enable();

		this._editingPathList.push( path );
	},
	_startEditFreehand : function()
	{
		L.drawLocal.draw.handlers.simpleshape.tooltip.end = 'マウスボタンを離して終了';

		this._editingPathList = [];

		// デフォルト
		var shapeOptions = {
			color : '#000000',
			weight : 3,
			opacity : 0.5,
			stroke: true,
			fill: false,
			clickable: true
		};

		var path = new GSI.Draw.FreehandPolyline(this._owner._map,{
			shapeOptions : shapeOptions,
			edit: { featureGroup: this._editingFreatureGroup },
			showLength : true
		});
		path.enable();

		this._editingPathList.push( path );
	},
	_onCircleChange : function(event)
	{
        if(this._editingType == GSI.SakuzuListItem.POINT_CIRCLE){
            this._editingEditingLayer_radius_px = event.radius;
            if(this._editingEditingLayer){
                this._editingEditingLayer._radius_px = this._editingEditingLayer_radius_px;
            }
        }
		this._owner.fire( 'circlechange', event );
	},
	_onPathCreated : function(event)
	{
		this._editingEditingLayer = event.layer;
        if(this._editingType == GSI.SakuzuListItem.POINT_CIRCLE){
            this._editingEditingLayer._radius_px = this._editingEditingLayer_radius_px;
        }
		this._editingFreatureGroup.addLayer(event.layer);

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		this._startPathEdit();

		this._owner.fire( 'ready' );
	},
	isReady : function()
	{
		return ( this._editingEditingLayer ? true : false );
	},
	_startPathEdit : function(targetLayer )
	{
		var clearPathList = false;
		var layerType = null;
		if ( !targetLayer )
		{
			layerType = this._editingType;
			clearPathList = true;
			targetLayer = this._editingEditingLayer;
		}
		else
		{
			layerType = this._getType( targetLayer );
		}

		switch( layerType )
		{
			case GSI.SakuzuListItem.POINT:
			case GSI.SakuzuListItem.POINT_TEXT:
				var path = new GSI.Edit.Marker( targetLayer, { edit: { featureGroup: this._editingFreatureGroup } } );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;

			case GSI.SakuzuListItem.FREEHAND:
			case GSI.SakuzuListItem.LINESTRING:
			case GSI.SakuzuListItem.POLYGON:
				var path = new GSI.Edit.Poly( targetLayer, { isPolygon : ( layerType == GSI.SakuzuListItem.POLYGON ), edit: { featureGroup: this._editingFreatureGroup } } );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;

			case GSI.SakuzuListItem.POINT_CIRCLE:
			case GSI.SakuzuListItem.CIRCLE:
                var path = null;
                if(layerType == GSI.SakuzuListItem.CIRCLE      ){ path = new GSI.Edit.Circle      ( targetLayer, { edit: { featureGroup: this._editingFreatureGroup } } ); }
                if(layerType == GSI.SakuzuListItem.POINT_CIRCLE){ path = new GSI.Edit.CircleMarker( targetLayer, { edit: { featureGroup: this._editingFreatureGroup }, map : this._owner._map } ); }
				path.on( 'change', L.bind( this._onCircleChange, this ) );
				path.enable();
				if ( clearPathList )this._editingPathList = [];
				this._editingPathList.push( path );
				break;

			case GSI.SakuzuListItem.MULTIPOINT:
			case GSI.SakuzuListItem.MULTILINESTRING:
			case GSI.SakuzuListItem.MULTIPOLYGON:
				var layers = targetLayer.getLayers();
				if ( clearPathList )this._editingPathList = [];
				for ( var i=0; i<layers.length; i++ )
				{
					this._startPathEdit( layers[i] );
				}
				break;
		}
	},
	editFinish : function()
	{
        this.editFinish_CircleMarker();

		if (this.editMode == GSI.SakuzuListItem.NONE ) return;
		
		this._editingEditingLayer._parent = ( this._editingOriginalLayer  ?this._editingOriginalLayer._parent : null );
		this._destroyEditPathList();
	 	this._editingFreatureGroup.removeLayer( this._editingEditingLayer );
		( this._editingEditingLayer._parent ? this._editingEditingLayer._parent : this._layer ).addLayer( this._editingEditingLayer );
		
		if ( this._editingOriginalLayer && this._editingOriginalLayer._clickEditHandler )
 		{
			this._editingOriginalLayer.off( 'click', this._editingOriginalLayer._clickEditHandler );
			this._editingEditingLayer._clickEditHandler = L.bind( this._onLayerClick, this, this._editingEditingLayer );
			this._editingEditingLayer.on( 'click', this._editingEditingLayer._clickEditHandler );
		}

		if ( this._editingEditingLayer )
		{
 			this._editingEditingLayer._information = this._editingEditingLayerInfo;
			this._bindPopup( this._editingEditingLayer );
 		}
 		this._destroyEditObjects();
 		if ( this.editMode == GSI.SakuzuListItem.EDIT  )
 		{
			this._refreshEditingBoundsRects();

			this._owner._mapMouse.setClickMoveEnable( false );
		}
		this.editMode = GSI.SakuzuListItem.NONE;
		this._owner.fire( 'change' );
	},
    editFinish_CircleMarker : function()
    {
        if(this._editingType == GSI.SakuzuListItem.POINT_CIRCLE){
            var o       = this._editingEditingLayer;
            var vLatLng = o.getLatLng();
            var vRadius = o._radius_px;
            if(!vRadius){
                vRadius = GSI.Utils.ConverUnit(GSI.GLOBALS.map, o, o.getRadius(), "m", "px");
            }

            var vOptions = o.options;
            var oMarker  = new L.circleMarker(vLatLng, vOptions);
            oMarker.setRadius(vRadius);

            this._editingEditingLayer = oMarker;
        }
    },
	_bindPopup : function( layer )
	{
		if ( layer )
		{
			if ( !layer._information )
			{
				layer._information = this._getLayerInfo( layer );
			}
		
 			var title = layer._information.title;
 			var description = layer._information.description;

 			if ( !description || description == '' )
 				description = this._infoTable2Description( layer._information.table );

 			var popupContent = '';
 			if ( title && title != '' )
 			{
				popupContent = '<h2>' + GSI.Utils.encodeHTML(title)  + '</h2>';
			}

			if ( description && description != '' )
 			{
				popupContent += description;
			}

 			if ( popupContent != '' ) layer.bindPopup(popupContent,
					{
						maxWidth:5000
					} );
 		}
	},
	editSelectFinish : function()
	{
		this.editCancel();
		if ( this._layer )
		{
			var layers = this._layer.getLayers();
			for ( var i=0; i<layers.length; i++ )
			{
				this._bindPopup( layers[i]);
			}
			
		}
		this._bindPopup();
		this._destroyEditSelectObjects();
	},
	editCancel : function()
	{
		if (this.editMode == GSI.SakuzuListItem.NONE ) return;
		var aaa = null;
		if ( this._editingOriginalLayer )
 		{
			( this._editingOriginalLayer._parent ? this._editingOriginalLayer._parent : this._layer ).addLayer( this._editingOriginalLayer );
			this._editingOriginalLayer = null;
		}
		
 		this._destroyEditObjects();

 		if ( this.editMode == GSI.SakuzuListItem.EDIT  )
			this._owner._mapMouse.setClickMoveEnable( false );

		this.editMode = GSI.SakuzuListItem.NONE;
	},
	removeEditObject : function()
	{
		if ( this._editingBoundsRects )
		{
			if ( this._editingOriginalLayer && this._editingOriginalLayer._boundRect )
				this._editingBoundsRects.removeLayer( this._editingOriginalLayer._boundRect );
			if ( this._editingEditingLayer && this._editingEditingLayer._boundRect )
				this._editingBoundsRects.removeLayer( this._editingEditingLayer._boundRect );
		}
		this._editingOriginalLayer = null;
		this.editCancel();

		this._owner.fire( 'change' );
	},
	_destroyEditEventHandler : function()
	{
		if ( this._pathCreatedEventHandler )
		{
			this._owner._map.off('draw:created', this._pathCreatedEventHandler );
			delete this._pathCreatedEventHandler;
			this._pathCreatedEventHandler = null;
		}
	},
	_destroyEditPathList : function()
	{
		if ( this._editingPathList )
		{
			for ( var i=0; i<this._editingPathList.length; i++ )
			{
				try
				{
					var path = this._editingPathList[i];
					path.disable();
					delete path;
					path = null;
	 				delete this._editingPathList[i];
	 				this._editingPathList[i] = null;
	 			}
	 			catch( e ){}
			}

			delete this._editingPathList;
			this._editingPathList = null;
		}
	},
	_destroyEditObjects : function()
	{
		this._editingEditingLayerInfo = null;

		this._owner._mapMouse.setClickMoveEnable( true );

		this._destroyEditEventHandler();
		this._destroyEditPathList();

		if ( this._editingFreatureGroup )
		{
			try
			{
	 			this._owner._map.removeLayer( this._editingFreatureGroup );
	 			delete this._editingFreatureGroup;
 			}
 			catch( e ){}
 			this._editingFreatureGroup = null;
 		}

 		if ( this._editingOriginalLayer )
 		{
			( this._editingOriginalLayer._parent ? this._editingOriginalLayer._parent : this._layer ).removeLayer( this._editingOriginalLayer );
 			this._editingOriginalLayer = null;
		}

 		if ( this._editingEditingLayer )
 		{
			delete this._editingEditingLayer;
			this._editingEditingLayer = null;
		}
	},
	_destroyEditSelectObjects : function()
	{
		this._owner._mapMouse.setClickMoveEnable( true );

		if ( this._editingBoundsRects )
		{
			this._owner._map.removeLayer( this._editingBoundsRects );
			delete this._editingBoundsRects;
			this._editingBoundsRects = null;
		}

		var layers = this._layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];

			// 編集
			if ( layer._clickEditHandler )
			{
				layer.off('click', layer._clickEditHandler);
				delete layer._clickEditHandler;
				layer._clickEditHandler = null;
			}
		}
	},
	_infoTable2Description : function( table )
	{
		if ( !table ) return '';

		var trHtml = '';
		for ( var i=0; i<table.length; i++ )
		{
			var key = table[i].key;
			var value = table[i].value;

			if ( key && key != '' )
			{
				if ( !value || value == '' )
				{
					value= '';
				}
				
				trHtml += '<tr><td>' + GSI.Utils.encodeHTML(key) + '</td><td>' + value + '</td></tr>' + '\n';
			}
		}

		if ( trHtml != '' )
		{
			return '<table>\n' + trHtml + '</table>';
		}
		else
		{
			return '';
		}
	},
	_getLayerInfo : function( layer, convertToDescription )
	{
		var result = $.extend( true, {}, layer._information ? layer._information : {} );

		if (  !layer._information )
		{
			if ( layer.feature && layer.feature.properties )
			{
				for ( var key in layer.feature.properties )
				{
					if ( key != '' && CONFIG.GEOJSONSPECIALKEYS[key]  ) continue;

					var value = layer.feature.properties[ key];

					if ( (typeof value != "string" ) && ( typeof value != "number"  ) ) continue;

					if ( key == 'name' )
					{
						result.title = value;
					}
					else if ( key == 'description' )
					{
						result.description = value;
					}
					else
					{
						if ( !result.table ) result.table = [];
						result.table.push( { key:key,value:''+value} );
					}
				}
			}
			else
			{
				return result;
			}
		}
		if ( convertToDescription && !result.description || result.description == '' )
		{
			result.description = this._infoTable2Description( result.table );
		}

		return result;
	},
	toKML : function(styleList)
	{
		// KML生成
		var data = '';
		var layers = this._layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];
			var itemType = this._getType(layer2);
			var layerData = null;

			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
					layerData = this._makeKMLPoint( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case  GSI.SakuzuListItem.POLYGON:
				case  GSI.SakuzuListItem.CIRCLE:
					layerData = this._makeKMLPolygon( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case GSI.SakuzuListItem.LINESTRING:
					layerData = this._makeKMLLine( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					break;
				case GSI.SakuzuListItem.FEATURES:
					layerData = this._makeKMLFeatures( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTILINESTRING:
					layerData = this._makeKMLMultiLine( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTIPOLYGON:
					layerData = this._makeKMLMultiPolygon( layer2, styleList );
					break;
				case GSI.SakuzuListItem.MULTIPOINT:
					layerData = this._makeKMLMultiPoint( layer2, styleList );
					break;
			}

			if ( layerData )
			{
				data += layerData.data;
			}
		}

		var styles = '';

		if ( data != '' )
		{
			for ( var styleId in styleList )
			{
				styles += styleList[ styleId ].text;
			}
		}

		return styles + data;
	},
	_color2kmlColor : function( color, opacity )
	{
		if ( color && color!='' && color.charAt(0) == '#' )
		{
			color = color.slice(1);

			if ( color.length == 3 )
			{
				color = color.slice( -1 ) + color.slice( 1,-1 ) + color.slice( 0,1 );
			}
			else if ( color.length == 6 )
			{
				color = color.slice( -2 ) + color.slice( 2,-2 ) + color.slice( 0,2 );
			}
		}
		else
		{
			color='000000';
		}
		opacity = ( '' +  opacity.toString(16) );
		if ( opacity.length == 1 ) opacity = '0' + opacity;

		color = opacity + '' + color;
		return color;
	},
	_getKMLStyleId : function( itemType, styleList, layer )
	{
		//#yellowLineGreenPoly
		var styleId ='';

		switch( itemType )
		{
			case GSI.SakuzuListItem.POINT:
				var iconUrl = layer.options.icon.options.iconUrl;
				var iconSize = layer.options.icon.options.iconSize;
				var iconAnchor = layer.options.icon.options.iconAnchor;
				var iconScale = layer.options.icon.options._iconScale;

				if ( !iconScale ) iconScale = 1;
				var hotSpot = {
					x : Math.round( ( iconAnchor[0] / iconSize[0] ) * 10 ) / 10,
					y : Math.round( ( iconAnchor[1] / iconSize[1] ) * 10 ) / 10,
				};
				styleId = this._findKMLStyle( styleList, itemType, {
					iconUrl : iconUrl,
					iconScale: iconScale,
					hotSpot: hotSpot.x + ',' + hotSpot.y
				} );

				if ( !styleId )
				{
					styleId = 'PolyStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <IconStyle>\n' +
						'  <Icon>\n' +
						'  <href>' + iconUrl + '</href>\n' +
						'  </Icon>\n' +
						'  <scale>' + iconScale + '</scale>\n';

					if ( hotSpot.x != 0.5 || hotSpot.y != 0.5 )
					{
						text +=
							'  <hotSpot x="' + hotSpot.x + '" y="' + hotSpot.y + '" xunits="fraction" yunits="fraction" />\n';
					}
					text +=
						'  </IconStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							iconUrl : iconUrl,
							iconScale: iconScale,
							hotSpot: hotSpot.x + ',' + hotSpot.y
						}
					};
				}

				break;

			case  GSI.SakuzuListItem.POLYGON:
			case  GSI.SakuzuListItem.CIRCLE:

				var color = layer.options.color;
				var opacity = Math.floor( ( layer.options.opacity || layer.options.opacity == 0 ? layer.options.opacity : 1 ) * 255 );
				var weight = layer.options.weight;
				var fillColor = layer.options.fillColor;

				if ( !fillColor ) fillColor = color;
				var fillOpacity = Math.floor( ( layer.options.fillOpacity || layer.options.fillOpacity == 0 ? layer.options.fillOpacity : 1 ) * 255 );
				color = this._color2kmlColor( color, opacity );
				fillColor = this._color2kmlColor( fillColor, fillOpacity );

				styleId = this._findKMLStyle( styleList, itemType, {
					color : color,
					weight: weight,
					fillColor: fillColor
				} );

				if ( !styleId )
				{
					styleId = 'PolyStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <LineStyle>\n' +
						'  <color>' + color + '</color>\n' +
						'  <width>' + weight + '</width>\n' +
						'  </LineStyle>\n' +
						'  <PolyStyle>\n' +
						'  <color>' + fillColor + '</color>\n' +
						'  </PolyStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							color : color,
							weight: weight,
							fillColor: fillColor
						}
					};
				}
				break;

			case GSI.SakuzuListItem.LINESTRING:
				var color = layer.options.color;
				var opacity = Math.floor( ( layer.options.opacity || layer.options.opacity == 0 ? layer.options.opacity : 1 ) * 255 );
				var weight = layer.options.weight;
				color = this._color2kmlColor( color, opacity );

				if ( opacity.length == 1 ) opacity = '0' + opacity;

				styleId = this._findKMLStyle( styleList, itemType, {
					color : color,
					weight: weight
				} );

				if ( !styleId )
				{
					styleId = 'LineStyle' + this._owner.getStyleId();

					var text=
						'<Style id="' + styleId + '">\n' +
						'  <LineStyle>\n' +
						'  <color>' + color + '</color>\n' +
						'  <width>' + weight + '</width>\n' +
						'  </LineStyle>\n' +
						'</Style>\n';
					styleList [ styleId ] = {
						type : itemType,
						text : text,
						style : {
							color : color,
							weight: weight
						}
					};
				}
				break;
		}

		return styleId;
	},
	_findKMLStyle : function( styleList, itemType, style )
	{
		var id = null;
		for ( var key in styleList )
		{
			var styleData = styleList[ key ];

			if ( styleData.type = itemType )
			{
				var hit = true;
				for ( var key2 in style )
				{
					if ( styleData.style[key2] != style[key2] )
					{
						hit = false;
						break;
					}
				}

				if ( hit )
				{
					id = key;
					break;
				}

			}
		}

		return id;
	},
	_makeKMLFeatures : function( layer, styleList )
	{
		var result = {
			data : ''
		};
		var layers = layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];
			var itemType = this._getType(layer2);
			var layerData = null;

			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
					layerData = this._makeKMLPoint( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case  GSI.SakuzuListItem.POLYGON:
				case  GSI.SakuzuListItem.CIRCLE:
					layerData = this._makeKMLPolygon( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case GSI.SakuzuListItem.LINESTRING:
					layerData = this._makeKMLLine( layer2, this._getKMLStyleId( itemType, styleList, layer2 ) );
					if ( layerData ) result.data += layerData.data;
					break;
				case GSI.SakuzuListItem.FEATURES:
				case GSI.SakuzuListItem.MULTILINESTRING:
				case GSI.SakuzuListItem.MULTIPOLYGON:
				case GSI.SakuzuListItem.MULTIPOINT:
					layerData = this._makeKMLFeatures( layer2, styleList );
					if ( layerData )
					{
						result.data += layerData.data;
						result.data = '<Folder>\n'  + data + '</Folder>\n';
					}
					break;
			}
		}
		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},
	_makeKMLMultiPolygon : function ( layer, styleList )
	{
		var info = this._getLayerInfo( layer, false );
		var result = {
			data : ''
		};
		var layerId = '';
		var layers = layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];

			var itemType = this._getType(layer2);
			var layerData = null;
			if ( itemType == GSI.SakuzuListItem.POLYGON )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLPolygon( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},
	_makeKMLMultiLine : function ( layer, styleList )
	{
		var info = this._getLayerInfo( layer, false );
		var result = {
			data : ''
		};
		var layerId = '';
		var layers = layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];
			var itemType = this._getType(layer2);
			var layerData = null;

			if ( itemType == GSI.SakuzuListItem.LINESTRING )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLLine( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},
	_makeKMLMultiPoint : function ( layer, styleList )
	{
		var info = this._getLayerInfo( layer, false );
		var result = {
			data : ''
		};
		var layerId = '';
		var layers = layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer2 = layers[i];
			var itemType = this._getType(layer2);
			var layerData = null;

			if ( itemType == GSI.SakuzuListItem.POINT )
			{
				if ( layerId == '' )
					layerId = this._getKMLStyleId( itemType, styleList, layer2 );
				layerData = this._makeKMLPoint( layer2, layerId, info );
				if ( layerData ) result.data += layerData.data;
			}
		}

		if ( result.data != '' )
		{
			result.data = '<Folder>\n'  +result. data + '</Folder>\n';
		}

		return result;
	},
	_makeKMLPoint : function( layer, styleId, info )
	{
		var latLng = layer.getLatLng();

		if ( !info ) info = this._getLayerInfo( layer, false );

		var title = info.title;
		var description = info.description;
		var table = info.table;

		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}

		var result = {
			data : ''
		};

		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';

		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<Point>\n' +
			'<coordinates>';

			result.data += latLng.lng + "," + latLng.lat; // + "\n";

			result.data +=
			'</coordinates>\n' +
			'</Point>\n' +
			'</Placemark>\n';
		return result;
	},
	_makeKMLPolygon : function( layer, styleId, info )
	{
		var latLngs = null;

		if ( layer.getRadius )
		{
			// 円→ポリゴン
			latLngs = [];
			var numSides = 80;
			var degreeStep = 360 / numSides;
			var center = layer.getLatLng();
			var latRadius = layer._getLatRadius();
			var lngRadius = layer._getLngRadius();

			for(var i = 0; i < numSides; i++)
			{
				var rad = (degreeStep * i) * Math.PI / 180;

				var x = center.lng + (Math.sin(rad) * lngRadius);
				var y = center.lat + (Math.cos(rad) * latRadius);
				latLngs.push(L.latLng(y, x));
			}
		}
		else
		{
			latLngs = layer.getLatLngs();
		}

		if ( !info ) info = this._getLayerInfo( layer, false );
		var title = info.title;
		var description = info.description;
		var table = info.table;
		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}

		var result = {
			style : '',
			data : ''
		};

		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';

		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<Polygon>' + '\n' +
			'<outerBoundaryIs>' + '\n' +
			'<LinearRing>' + '\n' +
			'<coordinates>';

		for ( var i= 0; i<latLngs.length; i++ )
		{
			result.data += ( i > 0 ? ' ' : '' ) + latLngs[i].lng + "," + latLngs[i].lat;
		}
		// close polygon
		if ( latLngs.length > 0 )
		{
			result.data += ' ' + latLngs[0].lng + "," + latLngs[0].lat;
		}
			
		result.data += '</coordinates>\n' +
		'</LinearRing>' + '\n' +
		'</outerBoundaryIs>' + '\n' +
		'</Polygon>\n' +
		'</Placemark>\n';

		return result;
	},
	_makeKMLLine : function(layer, styleId, info)
	{
		var latLngs = layer.getLatLngs();

		if ( !info ) info = this._getLayerInfo( layer, false );

		var title = info.title;
		var description = info.description;
		var table = info.table;
		if ( description )
		{
			description = description.replace( /[\n\r]/g, '' );
		}
		else if ( table && table.length > 0 )
		{
			description = this._infoTable2Description( table );
			description = description.replace( /[\n\r]/g, '' );
			table = JSON.stringify(table);
		}
		var result = {
			style : '',
			data : ''
		};

		result.data = '<Placemark>\n';

		if (title && title != '' )
			result.data += '<name>' + GSI.Utils.encodeHTML( title ) + '</name>' + '\n';

		if (description && description != '' )
			result.data +='<description><![CDATA[ ' + description + ' ]]></description>' + '\n';

		result.data +=
			'<styleUrl>#' + styleId + '</styleUrl>' + '\n' +
			'<LineString>' + '\n' +
			'<coordinates>';

		for ( var i= 0; i<latLngs.length; i++ )
		{
			result.data += ( i > 0 ? ' ' : '' ) + latLngs[i].lng + "," + latLngs[i].lat;
			
		}
		result.data += '</coordinates>\n' +
		'</LineString>\n' +
		'</Placemark>\n';

		return result;
	},
	toGeoJSON : function()
	{
		// GeoJSON生成
		var features = [];
		var layers = this._layer.getLayers();

		for ( var i=0; i<layers.length; i++ )
		{
			var layer = layers[i];
			var itemType = this._getType(layer);
			var geoJSONData = null;

			switch( itemType )
			{
				case GSI.SakuzuListItem.POINT:
				case GSI.SakuzuListItem.POINT_TEXT:
				case GSI.SakuzuListItem.MULTIPOINT:
					geoJSONData = this._makeGeoJSONPoint( layer);
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.POLYGON:
				case GSI.SakuzuListItem.MULTIPOLYGON:
					geoJSONData = this._makeGeoJSONPolygon( layer);
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.LINESTRING:
				case GSI.SakuzuListItem.MULTILINESTRING:
					geoJSONData = this._makeGeoJSONLine( layer );
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.CIRCLE:
                case GSI.SakuzuListItem.POINT_CIRCLE:
					geoJSONData = this._makeGeoJSONCircle( layer);
                    if(itemType == GSI.SakuzuListItem.POINT_CIRCLE){
                        geoJSONData.properties["_markerType"] = "CircleMarker";
                    }
					if ( geoJSONData ) features.push( geoJSONData );
					break;

				case GSI.SakuzuListItem.FEATURES:
					this._makeGeoJSONFeatures( layer, features );
					break;
			}
		}

		return features;
	},
	_makeGeoJSONFeatures : function( layer, features )
	{
		try
		{
			var layers = layer.getLayers();

			for ( var i=0; i<layers.length; i++ )
			{
				var layer2 = layers[i];
				var itemType = this._getType(layer2);
				var geoJSONData = null;

				switch( itemType )
				{
					case GSI.SakuzuListItem.POINT:
					case GSI.SakuzuListItem.POINT_TEXT:
						geoJSONData = this._makeGeoJSONPoint( layer2);
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case  GSI.SakuzuListItem.CIRCLE:
                    case  GSI.SakuzuListItem.POINT_CIRCLE:
						geoJSONData = this._makeGeoJSONCircle( layer2);
                        if(itemType == GSI.SakuzuListItem.POINT_CIRCLE){
                            geoJSONData.properties["_markerType"] = "CircleMarker";
                        }
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case  GSI.SakuzuListItem.POLYGON:
						geoJSONData = this._makeGeoJSONPolygon( layer2);
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case GSI.SakuzuListItem.LINESTRING:
						geoJSONData = this._makeGeoJSONLine( layer2 );
						if ( geoJSONData ) features.push( geoJSONData );
						break;
					case GSI.SakuzuListItem.FEATURES:
						this._makeGeoJSONFeatures( layer, features );
						break;
				}
			}
		}
		catch(e){}
	},
	_layerInfo2Properties : function( info )
	{
		if ( !info ) return {};
		var result = {};
		
		if ( info.title && info.title != '' )
			result[ 'name' ] = info.title;
		if ( info.description && info.description != '' )
		{
			result[ 'description' ] = info.description;
		}
		else if ( info.table )
		{
			for ( var i=0; i<info.table.length; i++ )
			{
				result[ info.table[i].key ] = info.table[i].value;
			}
		}

		return result;
	},
	_makeGeoJSONLine : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		var color = options.color;
		var opacity = ( options.opacity || options.opacity == 0  ? options.opacity : 1 );
		var weight = options.weight;

		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = parseInt(weight);
		
		if ( layer.feature &&  layer.feature.properties )
		{
			for ( var key in layer.feature.properties )
			{
				if ( CONFIG.GEOJSONSPECIALKEYS[ key ] )
				{
					key = key.slice(1);
					if ( !result.properties["_"+key] )
						result.properties["_"+key] = options[ key ];
				}
			}
			
		}
		return result;
	},
	_makeGeoJSONCircle : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}
		var color = options.color;
		var opacity = ( options.opacity || options.opacity == 0 ? options.opacity : 1 );
		var weight = options.weight;

		var fillColor = options.fillColor;
		var fillOpacity = ( options.fillOpacity || options.fillOpacity == 0 ? options.fillOpacity : 1 );

		result.properties[ "_markerType"] = "Circle";
		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = parseInt(weight);
		result.properties[ "_fillColor"] = fillColor;
		result.properties[ "_fillOpacity"] = fillOpacity;
		result.properties[ "_radius"] = parseFloat( parseFloat(layer.getRadius() ).toFixed( 1 ) );
		
		if ( layer.feature &&  layer.feature.properties )
		{
			for ( var key in layer.feature.properties )
			{
				if ( CONFIG.GEOJSONSPECIALKEYS[ key ] )
				{
					key = key.slice(1);
					if ( !result.properties["_"+key] )
					{
						result.properties["_"+key] = options[ key ];
					}
				}
			}
		}
		
		return result;
	},
	_makeGeoJSONPoint : function( layer )
	{
		var result = layer.toGeoJSON();
		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		var iconUrl = options.icon.options.iconUrl;
		var iconSize = options.icon.options.iconSize;
		var iconAnchor = options.icon.options.iconAnchor;
		var html = options.icon.options.html;
		if ( options.icon.options.className == 'gsi-div-icon' )
		{
			result.properties[ "_markerType"] = "DivIcon";
			result.properties[ "_html"] =( html || html != '' ? html : '　');
		}
		else
		{
			result.properties[ "_markerType"] = "Icon";
			result.properties[ "_iconUrl"] = iconUrl;
		}
		result.properties[ "_iconSize"] = iconSize;
		result.properties[ "_iconAnchor"] = iconAnchor;

		if ( ! result.properties[ "_iconSize"]  ) delete result.properties[ "_iconSize"] ;

		if ( ! result.properties[ "_iconAnchor"]  ) delete result.properties[ "_iconAnchor"] ;
		
		if ( layer.feature &&  layer.feature.properties )
		{
			for ( var key in layer.feature.properties )
			{
				if ( CONFIG.GEOJSONSPECIALKEYS[ key ] )
				{
					key = key.slice(1);
					if ( !result.properties["_"+key] )
					{
						result.properties["_"+key] = options.icon.options[ key ];
					}
				}
			}
		}
		
		return result;
	},
	_makeGeoJSONPolygon : function( layer )
	{
		var result = layer.toGeoJSON();

		result.properties = this._layerInfo2Properties( this._getLayerInfo( layer ) );

		var options = layer.options;
		if ( !options && layer.getLayers )
		{
			var layers = layer.getLayers();
			if ( layers.length > 0 )
			{
				options = layers[0].options;
			}
		}

		if ( !options ) options = {};

		var color = options.color;
		var opacity = ( options.opacity || options.opacity == 0 ? options.opacity : 1 );
		var weight = options.weight;
		var fillColor = options.fillColor;
		var fillOpacity = ( options.fillOpacity || options.fillOpacity == 0 ? options.fillOpacity : 1 );

		if ( !fillColor ) fillColor = color;

		result.properties[ "_color"] = color;
		result.properties[ "_opacity"] = opacity;
		result.properties[ "_weight"] = parseInt(weight);
		result.properties[ "_fillColor"] = fillColor;
		result.properties[ "_fillOpacity"] = fillOpacity;
		
		if ( layer.feature &&  layer.feature.properties )
		{
			for ( var key in layer.feature.properties )
			{
				if ( CONFIG.GEOJSONSPECIALKEYS[ key ] )
				{
					key = key.slice(1);
					if ( !result.properties["_"+key] )
						result.properties["_"+key] = options[ key ];
				}
			}
		}
		
		return result;
	}
} );

GSI.SakuzuListItem.GEOJSON = 1;
GSI.SakuzuListItem.KML = 2;

GSI.SakuzuListItem.NONE = 0;
GSI.SakuzuListItem.CREATE = 1;
GSI.SakuzuListItem.EDIT = 2;

GSI.SakuzuListItem.POINT = "point";
GSI.SakuzuListItem.POINT_CIRCLE = "point_circle";
GSI.SakuzuListItem.POINT_TEXT = "point_text";
GSI.SakuzuListItem.LINESTRING = "line";
GSI.SakuzuListItem.POLYGON = "polygon";
GSI.SakuzuListItem.CIRCLE = "circle";
GSI.SakuzuListItem.FREEHAND = "freehand";
GSI.SakuzuListItem.FEATURES = "features";

GSI.SakuzuListItem.MULTIPOINT = "multipoint";
GSI.SakuzuListItem.MULTILINESTRING = "multiline";
GSI.SakuzuListItem.MULTIPOLYGON = "multipolygon";


GSI.SakuzuList = L.Class.extend( {

	includes: L.Mixin.Events,
	_list : [],
	initialize : function(map,mapMouse,defaultIcon, options)
	{
		this._map = map;
		this._mapMouse = mapMouse;
		// ↓値をコピー
		this._defaultIcon  = $.extend( true, {}, defaultIcon );
		// 作図データ
		if ( options.defaultList && options.defaultList.length > 0 )
		{
			for ( var i=0; i<options.defaultList.length; i++ )
			{
				var fileName = ( i==0 ? GSI.TEXT.SAKUZU.SAKUZUTITLE : options.defaultList[i].fileName );
				var noExt = ( i==0 );

				var geoJSON = {
					"type": "FeatureCollection",
					"features": options.defaultList[i].features
				};
				var item = this._loadJSON( fileName, geoJSON, options.defaultList[i], noExt );
				
				if ( i==0 && !item )
				{
					this._list.push( new GSI.SakuzuListItem( this, null, GSI.TEXT.SAKUZU.SAKUZUTITLE, '', null, true ) );
				}
				if ( !options.defaultList[i].visible )
				{
					item.setVisible( false );
				}
			}
		}
		else
		{
			this._list.push( new GSI.SakuzuListItem( this, null, GSI.TEXT.SAKUZU.SAKUZUTITLE, '', null, true ) );
		}
	},
	getSakuzuItem : function()
	{
		return this._list[0];
	},
	eachItems : function(fnc)
	{
		for ( var i=0; i<this._list.length; i++ )
		{
			fnc( this._list[i] );
		}
	},
	getLength: function()
	{
		return this._list.length;
	},
	get : function( idx )
	{
		return this._list[idx];
	},
	remove : function( obj )
	{
		for ( var i=0; i<this._list.length; i++ )
		{
			if ( this._list[ i ] == obj )
			{
				this.removeByIndex( i );
				break;
			}
		}
	},
	removeByIndex : function( idx )
	{
		if ( idx == 0 )
		{
			this._list[idx].removeAllLayers();
		}
		else
		{
			this._list[idx].destroy();
			this._list.splice(idx, 1);
		}

		this.fire( 'change' );
	},
	loadFromFile : function( files )
	{
		if ( files && files.length > 0 )
		{
			this._fileReader = new FileReader();
			this._fileReader.onload = L.bind( this._onFileLoad, this , files[0].name);
			this._fileReader.onerror = function() { alert( GSI.TEXT.SAKUZU.LOAD_ERROR ); };
			this._fileReader.readAsText(files[0]);
		}
		else
		{
			alert( GSI.TEXT.SAKUZU.LOAD_NOFILE );
		}
	},
	loadFromText : function( text, fileName )
	{
		var item = null;
		try
		{
			var json = JSON.parse( text);
			item = this._loadJSON( fileName, json );
		}
		catch( e )
		{
			try
			{
				item = this._loadKML( fileName, text );
			}
			catch( e ){}
		}

		try
		{
			if ( item && item._layer && item._layer.getBounds ) this._map.fitBounds( item._layer.getBounds() );
		}
		catch( e ){}

		this.fire( 'load', { error : ( item ? false : true ) } );
		this.fire( 'change' );
	},
	_onFileLoad : function( fileName )
	{
		var item = null;
		try
		{
			var json = JSON.parse( this._fileReader.result);

			item = this._loadJSON( fileName, json );
		}
		catch( e )
		{
			try
			{
				item = this._loadKML( fileName );
			}
			catch( e ){}
		}

		try
		{
			if ( item && item._layer && item._layer.getBounds ) this._map.fitBounds( item._layer.getBounds() );
		}
		catch( e ){}

		this.fire( 'load', { error : ( item ? false : true ) } );
		this.fire( 'change' );
	},
	_loadJSON : function( fileName, json, noExt )
	{
		var layer = new GSI.GeoJSON(null);
		layer.addData( json );
		if ( !fileName )
		{
			fileName = "file-" + this._list.length + ".geojson";
		}
		else if ( !noExt && !fileName.match( /\./ ) )
		{
			fileName += '.geojson';
		}

		if ( layer.getLayers().length > 0 )
		{
			var item = new GSI.SakuzuListItem(
				this, GSI.SakuzuListItem.GEOJSON, fileName, fileName, layer, true );
			this._list.push( item );
			return item;
		}

		else return null;
	},
	_loadKML : function(fileName, text )
	{
		var xmlDoc = null;
		if (window.ActiveXObject)
		{
			xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
			xmlDoc.async = false;
			xmlDoc.loadXML( text ? text : this._fileReader.result);
		}
		else if (window.DOMParser)
		{
			xmlDoc = new DOMParser().parseFromString(
			   text ? text : this._fileReader.result,
			  "application/xml"
			  );
		}
		var layer = new GSI.KML(null, {async: true});

		layer._addKML( xmlDoc, {} );

		if ( !fileName )
		{
			fileName = "file-" + this._list.length + ".kml";
		}
		else if ( !fileName.match( /\./ ) )
		{
			fileName += '.kml';
		}

		if ( layer.getLayers().length > 0 )
		{
			var item = new GSI.SakuzuListItem(
				this, GSI.SakuzuListItem.KML, fileName, fileName, layer, true );

			this._list.push( item );
			return item;
		}
		else return null;

	},
	_styleId : 1,
	getStyleId : function()
	{
		var result = this._styleId;
		this._styleId++;

		return result;
	},
	toKML : function()
	{
		this._styleId = 1;

		var styleList = {};
		var result = '';

		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			if ( item.getVisible() )
			{
				result += item.toKML(styleList);
			}
		}
		if ( result != '' )
		{
			result =
				'<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
				'<kml xmlns="http://www.opengis.net/kml/2.2">' + "\n" +
				'<Document>\n' +
				result +
				'</Document>\n' +
				'</kml>';
		}
		return result;
	},
	getGeoJSONList: function()
	{
		this._styleId = 1;
		var result = [];

		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			var resultItem = {
				fileName : item.getFileName(),
				visible : item.getVisible(),
				features : item.toGeoJSON()
			};
			result.push( resultItem );
		}

		return result;
	},
	toGeoJSON : function()
	{
		this._styleId = 1;
		var result = {
			"type": "FeatureCollection",
			"features": []
		};
		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			if ( item.getVisible() )
			{
				var features = item.toGeoJSON();

				for ( var j=0; j<features.length; j++ )
				{
					result.features.push(  features[j] );
				}
			}
		}

		return JSON.stringify( result, null, "  " );
	},
    getData : function(){
        var result = [];
		for ( var i=0; i<this._list.length; i++ )
		{
			var item = this._list[i];
			if ( item.getVisible() )
			{
				var features = item.toGeoJSON();
				for ( var j=0; j<features.length; j++ )
				{
					result.push(  features[j] );
				}
            }
        }

        return result;
    }
} );

/************************************************************************
 L.Class
 - GSI.Searcher（検索）
 ************************************************************************/
GSI.Searcher = L.Class.extend( {
	QUERY_NONE : 9,
	QUERY_LATLNG : 2,
	QUERY_LATLNG2 : 3,
	QUERY_UTMPOINT : 5,
	QUERY_QUERY : 4,
	QUERY_EXCHANGE : 7,
	QUERY_LATLNGNE : 8,

	options : {
	},
	initialize : function (map, dialog, formSelector, querySelector, resultSelector, options )
	{
		this.map = map;
		this.dialog = dialog;
		this.formSelector = formSelector;
		this.querySelector = querySelector;
		$( this.querySelector ).ahPlaceholder ( {
				placeholderAttr : 'placeholder',
				likeApple : true
			} );
		$( this.formSelector ).submit( L.bind( this.onSubmit, this ) );
		$( '#magnifyimage' ).click( L.bind( this.onSubmit, this ) );
		L.setOptions(this, options);
	},

	onSubmit : function(event)
	{
		event.preventDefault();

		var query = $( this.querySelector ).val();
		if ( $.trim(query) == '' ) return;

		var qType = this.checkQuery(query);

		if ( qType == this.QUERY_QUERY )
		{
			this.searchStart( query );
		}
		else
		{
			this.clearSearch();
			this.dialog.hide();
			if ( qType == this.QUERY_LATLNG  || qType == this.QUERY_LATLNG2)
			{
				var latLng = ( qType == this.QUERY_LATLNG ? this.parseLatLngText( query ) : this.parseLatLngText2( query ) );

				if ( latLng[0] < 0 || latLng[0] > 90 || latLng[1] < 0 || latLng[1] > 180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.map.setView( latLng, CONFIG.SEARCHRESULTCLICKZOOM, {reset:true} );
				}
			}
			else if ( qType == this.QUERY_UTMPOINT )
			{
				var latLng = GSI.UTM.Utils.point2LatLng( query );

				if ( latLng )
				{
					this.map.setView( latLng, CONFIG.SEARCHRESULTCLICKZOOM, {reset:true} );
				}
				else
				{
					alert( 'UTMポイントを正しく入力して下さい' );
				}
			}
			else if ( qType == this.QUERY_EXCHANGE )
			{
				var latLng = this.parseLatLngText3( query );
				
				if (!latLng)
				{
					alert( '緯度経度を正しく入力して下さい\n');
				}
				else if ( latLng[0] < 0 || latLng[0] > 90 || latLng[1] < 0 || latLng[1] > 180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.map.setView( latLng, CONFIG.SEARCHRESULTCLICKZOOM, {reset:true} );
				}
			}
			else if ( qType == this.QUERY_LATLNGNE )
			{
				var latLng = this.parseLatLngText4( query );

				if (!latLng)
				{
					alert( '緯度経度を正しく入力して下さい\n');
				}
				else if ( latLng[0] < 0 || latLng[0] > 90 || latLng[1] < 0 || latLng[1] > 180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.map.setView( latLng, CONFIG.SEARCHRESULTCLICKZOOM, {reset:true} );
				}
			}
		}

		this.query = query;

		return false;
	},
	clearSearch : function()
	{
		if ( this.chimeiAjax )
		{
			try{ this.chimeiAjax.abort(); } catch(e){}
			this.chimeiAjax = null;
		}
		this.dialog.clear();
	},
	searchStart : function( q )
	{

		this.clearSearch();
		this.dialog.show();

		this.chimeiAjax = this.searchChimei( q, "","" );
	},
	setChimeiRusult : function(json)
	{
		this.dialog.setChimeisResult( json );
	},
	searchChimei : function (q, pref, muni)
	{
		var constraint = '';
		var url = CONFIG.SERVERAPI.CHIMEI_SEARCH;
		var parameter = { "q" : q };

		return $.ajax({
			type: "GET",
			url:url,
			data: parameter,
			dataType: "json",
			timeout: 30000,
			success: L.bind( this.setChimeiRusult, this ),
			error:function(){
			}
		});
	},
	checkQuery : function( q )
	{
		q = $.trim(q);
		q = q.replace( ',', ' ' );

		if (q == '')
		{
			return this.QUERY_NONE;
		}
		else if ( q.length == 13
			&& q.substring(0, 2).match(/^[0-9]+$/)
			&& q.substring(2, 4).match(/^[A-Z]+$/)
			&& q.substring(5, 13).match(/^[0-9]+$/) )
		{
			return this.QUERY_UTMPOINT;
		}
		else if( q.match(/^[0-9]+(\.[0-9]+)*[\s,]+[0-9]+(\.[0-9]+)*$/)  )
		{
			return this.QUERY_LATLNG;
		}
		else if ( q.match(/^[0-9]+度[\s]+[0-9]+度$/)
			||
			 q.match(/^[0-9]+度[0-9]+分[\s]+[0-9]+度[0-9]+分$/)
			||
			 q.match(/^[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒[\s]+[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒$/)
		)
		{
			return this.QUERY_LATLNG2;
		}
		else
		{
			if ( ( q.match(/^(?:N|北緯)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(?:E|東経)*([0-9]{1,3}(?:\.[0-9]+)*)/) )
				||
				( q.match(/^(?:E|東経)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(?:N|北緯)*([0-9]{1,3}(?:\.[0-9]+)*)/) ) )
			{
				//NE表記
				return this.QUERY_LATLNGNE;
			}
			else if ( ( q.match(/^(?:N|北緯)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(?:E|東経)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/) )
			 		|| 
			 		( q.match(/^(?:E|東経)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(?:N|北緯)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/) ) )
			{
				//°′″表記
				return this.QUERY_EXCHANGE;
			}
			else
			{
				return this.QUERY_QUERY;
			}
		}
	},
	parseLatLngText2 : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );

		var matchArr =  s.match( /^([0-9]+)度[\s]+([0-9]+)度$/ );

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] );
			var lng = parseInt( matchArr[2] );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分[\s]+([0-9]+)度([0-9]+)分$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 );
			var lng = parseInt( matchArr[3] ) + ( parseFloat( matchArr[4] ) / 60.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分([0-9]+)秒[\s]+([0-9]+)度([0-9]+)分([0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 ) + ( parseFloat( matchArr[3] ) / 3600.0 );
			var lng = parseInt( matchArr[4] ) + ( parseFloat( matchArr[5] ) / 60.0 ) + ( parseFloat( matchArr[6] ) / 3600.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒[\s]+([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 ) + ( parseFloat( matchArr[3] ) / 3600.0 );
			var lng = parseInt( matchArr[4] ) + ( parseFloat( matchArr[5] ) / 60.0 ) + ( parseFloat( matchArr[6] ) / 3600.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}

		matchArr = s.match(/^([0-9]+)度([0-9]+)分([0-9]+(?:\.[0-9]+)*)秒[\s]+([0-9]+)度([0-9]+)分([0-9]+(?:\.[0-9]+)*)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( matchArr[1] ) + ( parseFloat( matchArr[2] ) / 60.0 ) + ( parseFloat( matchArr[3] ) / 3600.0 );
			var lng = parseInt( matchArr[4] ) + ( parseFloat( matchArr[5] ) / 60.0 ) + ( parseFloat( matchArr[6] ) / 3600.0 );
			return [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
		}


		return null;
	},
	parseLatLngText3 : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );
		
		var matchArr =  s.match(/^(N|北緯)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(E|東経)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/);
		var revflg = false;
		
		if (!matchArr)
		{
			matchArr =  s.match(/^(E|東経)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(N|北緯)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/);
			revflg = true;
		}
		var lath,latm,lats,lonh,lonm,lons;
		if (matchArr && matchArr.length == 9)
		{
			lath = parseInt(matchArr[2]);
			lonh = parseInt(matchArr[6]);
			
			latm = matchArr[3] ? parseFloat(matchArr[3]) / 60 : 0;
			lonm = matchArr[7] ? parseFloat(matchArr[7]) / 60 : 0;

			lats = matchArr[4] ? parseFloat(matchArr[4]) / 3600 : 0;
			lons = matchArr[8] ? parseFloat(matchArr[8]) / 3600 : 0;
			
			var la = lath + latm + lats;
			var lo = lonh + lonm + lons;
			
			if ((revflg) || (!matchArr[1] && !matchArr[5] && ( la > lo )))
			{
				var t = la;
				la = lo;
				lo = t;
			}
			return [la, lo];
		}
		return null;
		
	},
	parseLatLngText4 : function( s )
	{
		s = $.trim(s);

		var matchArr = s.match(/^(N|北緯)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(E|東経)*([0-9]{1,3}(?:\.[0-9]+)*)/)
		var revflg = false;
		
		if (!matchArr)
		{
			matchArr = s.match(/^(E|東経)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(N|北緯)*([0-9]{1,3}(?:\.[0-9]+)*)/)
			revflg = true;
		}

		var lat, lon;
		try{
		
			if (matchArr && matchArr.length == 5)
			{
				lat = parseFloat( matchArr[2] );
				lon = parseFloat( matchArr[4] );
				
				if ( (revflg) || (!matchArr[1] && !matchArr[3] && lat > lon) )
				{
					var t = lat;
					lat = lon;
					lon = t;
				}
				return [lat, lon];
			}
			
			return null;
		}
		catch( e )
		{
			return null;
		}
		
	},
	parseLatLngText : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );

		var latLng = s.split( ' ' );

		if ( latLng.length < 2 ) return null;

		try
		{
			var lat = parseFloat( latLng[0] );
			var lng = parseFloat( latLng[1] );
			result = [ lat< lng ? lat: lng, lat< lng ? lng: lat ];
			
			return result;
		}
		catch( e )
		{
			return null;
		}
	}
} );

/************************************************************************
 L.Control
 - GSI.Control.AccessCounter
 ************************************************************************/
GSI.Control.AccessCounter = L.Control.extend({
	options: {
		position: 'bottomleft',
		url : '',
		refreshInterval : 0
	},
	retryCounter : 0,
	counter : null,
	initialize: function (options)
	{
		L.setOptions(this, options);
	},
	onAdd: function (map)
	{
    	this._map = map;
		this._container = L.DomUtil.create('div', 'gsi_control_accesscounter');
		if ( this.options.url != '' )
		{
			this._update();
			this._load();
		}
		$( this._container ).attr( {title:GSI.TEXT.ACCESSCOUNTER.TOOLTIP} ).tooltip( {
			position : { my: "right bottom", at: "right top", collision: "flipfit" },
			tooltipClass : "gsi_control_accesscounter_tooltip"
		} );

		return this._container;
	},
	onRemove: function (map) {
	},
	_load : function()
	{
		if( this.options.url == '' ) return;

		this.ajax = $.ajax({
			type: "GET",
			dataType:"text",
			url : this.options.url,
			success:  L.Util.bind( this._onLoad, this ),
			error:  L.Util.bind( this._onLoadError, this )
		});
	},
	_onLoad : function(result)
	{
		try
		{
			var data = null;
			if ( !result ) return;
			if ( result.data )
			{
				data = result.data;
			}
			else data = result;
			this.counter = JSON.parse( data );

			if ( this._container ) this._update();

			this._next();
		}
		catch( e )
		{
			this._onLoadError();
		}
	},
	_next : function()
	{
		if ( this.options.refreshInterval > 0 )
		{
			if ( this._timerId )
			{
				clearTimeout( this._timerId );
				this._timerId = null;
			}

			this._timerId = setTimeout( L.bind(this._load,this), this.options.refreshInterval);
		}
	},
	_retry : function()
	{
		if ( this._timerId )
		{
			clearTimeout( this._timerId );
			this._timerId = null;
		}

		this.retryCounter++;
		this._load();
	},
	_onLoadError : function()
	{
		if ( this._timerId )
		{
			clearTimeout( this._timerId );
			this._timerId = null;
		}

		if ( this.retryCounter < CONFIG.ACCESSCOUNTERRETRY )
		{
			// 10秒後にリトライ
			this._timerId = setTimeout( L.bind(this._retry,this), 10000);
		}
	},
	_update : function()
	{
		var today = new Date();
		var yesterday = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
		var todayCaption = ( '00' + ( today.getMonth() + 1 ) ).slice(-2) + '/' +( '00' + today.getDate() ).slice(-2);
		var yesterdayCaption = ( '00' + ( yesterday.getMonth() + 1 ) ).slice(-2) + '/' + ( '00' + yesterday.getDate() ).slice(-2);

		if (!this._map) return;
		if ( this.counter )
		{
			$(this._container).css({margin:0}).html(
				todayCaption + '&nbsp;' + this.counter.today + '、' +
				yesterdayCaption +'&nbsp;' + this.counter.yesterday + '、' +
				'総計&nbsp;' +  ( this.counter.total + '' ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
			);
		}
		else
		{
			$(this._container).css({margin:0}).html(
				todayCaption + '&nbsp;--、' +
				yesterdayCaption +'&nbsp;--、' +
				'総計&nbsp;------'
			);
		}
	}
} );


/************************************************************************
 L.Control
 - GSI.Control.Button
 ************************************************************************/
GSI.Control.Button = L.Control.extend({
  options: {
    position: 'topleft',
    maxWidth: "300px"
  },
  initialize: function (elem,options) {
    this._button = {};
    this.elem = elem;
    this.options.position = options.position;
    this.setButton(options);
  },
  onAdd: function (map) {
    this._map = map;
    var container = L.DomUtil.create('div', '');

    this._container = container;

    this._update();
    return this._container;
  },
  onRemove: function (map) {
  },
  setButton: function (options) {
    var button = {
      'text': options.text,
      'onClick': options.onClick,
      'class': options.className
    };

    this._button = button;
    this._update();
  },
  destroy: function () {
  	this._button = {};
  	this._update();
  },
  _update: function () {
    if (!this._map) {
      return;
    }

    this._container.innerHTML = '';
    this._makeButton(this._button);

  },
  _makeButton: function (button) {
    var newButton = this.elem;
    this.elem.style.color = '#fff';
    $(this._container).append( newButton );
    L.DomEvent
      .addListener(newButton, 'click', L.DomEvent.stop);
    L.DomEvent.disableClickPropagation(newButton);
    return newButton;

  }
});

/************************************************************************
 L.Control
 - GSI.Control.Spacer
 ************************************************************************/
GSI.Control.Spacer = L.Control.extend({
	options: {
		position: 'bottomleft'
	},
	counter : null,
	initialize: function (options)
	{
		L.setOptions(this, options);
	},
	setHeight: function(height)
	{
		$(this._container).css( {height:height + "px"} );
	},
	onAdd: function (map)
	{
    	this._map = map;
		this._container = L.DomUtil.create('div');
		$(this._container).css( { margin:0,padding:0, heght:0, width:0 } );
		return this._container;
	},
	onRemove: function (map) {
	}
} );

/************************************************************************
 L.DivIcon
 - GSI.DivIcon
 ************************************************************************/
GSI.DivIcon = L.DivIcon.extend( {
	options: {
		iconSize: null,
		className: 'gsi-div-icon',
		html: false
	},
	createIcon: function (oldIcon) {

		var div = L.DivIcon.prototype.createIcon.call(this, oldIcon);
		//div.style.visibility = 'hidden';
		return div;
	}
} );

GSI.divIcon = function (options) {
	return new GSI.DivIcon(options);
};

/************************************************************************
 L.Edit.Circle
 - GSI.Edit.Circle
 - GSI.Edit.CircleMarker
 ************************************************************************/
GSI.Edit.Circle = L.Edit.Circle.extend( {
	includes: L.Mixin.Events,

	_resize : function(latlng)
	{
		L.Edit.Circle.prototype._resize.call(this,latlng);

		var result = GSI.Draw.convertRadius( this._shape.getRadius(), latlng, "m" );

		this.fire( "change", result );
	}
} );

GSI.Edit.CircleMarker = L.Edit.Circle.extend( {
	includes: L.Mixin.Events,

    initialize: function (layer, options) {
        L.Edit.Circle.prototype.initialize.call(this, layer, options);

        this.map        = options.map;
        this.layer      = layer;

		this._onZoomEnd = L.bind( this.onZoomEnd, this );
        this.map.on( 'zoomend', this._onZoomEnd );
    },
	_resize : function(latlng)
	{
		L.Edit.Circle.prototype._resize.call(this,latlng);

		var result = GSI.Draw.convertRadius( GSI.Utils.ConverUnit(this.map, this._shape, this._shape.getRadius(), "m", "px"), latlng, "px" );

		this.fire( "change", result );
	},
    _move : function(latlng)
    {
		L.Edit.Circle.prototype._move.call(this,latlng);

        var vRadius = GSI.Utils.ConverUnit(this.map, this._shape, this._shape._radius_px, "px", "m");
        this._shape.setRadius(vRadius);
    },
    disable : function()
    {
        L.Edit.Circle.prototype.disable.call(this);
        this.map.off( 'zoomend', this._onZoomEnd );
    },
	onZoomEnd : function()
	{
        var vRadius = GSI.Utils.ConverUnit(this.map, this._shape, this._shape._radius_px, "px", "m");

        this._shape.setRadius(vRadius);
        for(var i=0,l=this._resizeMarkers.length;i<l;i++){
            this._unbindMarker(this._resizeMarkers[i]);
            this._map.removeLayer(this._resizeMarkers[i]);
        }
        this._unbindMarker(this._moveMarker);
        this._map.removeLayer(this._moveMarker);

        this._moveMarker    = null;
        this._resizeMarkers =null;

        this._createMoveMarker();
        this._createResizeMarker();
	}
} );

/************************************************************************
 L.Edit.Poly
 - GSI.Edit.Poly
 ************************************************************************/
GSI.Edit.Poly = L.Edit.Poly.extend( {
	updateMarkers: function () {
		this._moveMarker = null;
		L.Edit.Poly.prototype.updateMarkers.call(this);
	},
	updateMarkers2: function () {
		if ( this._markerGroup )
		{
			var layers = this._markerGroup.getLayers();
			for ( var i=0; i<layers.length; i++ )
			{
				if ( layers[i] != this._moveMarker )
					this._markerGroup.removeLayer( layers[i] );
			}
		}
		this._initMarkers();
	},
	_initMarkers: function ()
	{
		L.Edit.Poly.prototype._initMarkers.call(this);

		if ( this._moveMarker ) return;
		var bounds = this._poly.getBounds();
		var latlng = null;

		latlng = bounds.getCenter();
		var marker = new L.Marker.Touch(latlng, {
			draggable: true,
			icon: L.icon(
			{
				iconUrl: 'image/sakuzu/icon_move.png',
				iconSize: [24, 24],
				iconAnchor: [32, 32]
			} )
		});

		marker._origLatLng = latlng;

		marker
			.on('drag', this._onCenterMarkerDrag, this)
			.on('dragend', this._fireEdit, this)
			.on('touchmove', this._onCenterMarkerDrag, this)
			.on('touchend', this._fireEdit, this);
		this._moveMarker = marker;
		this._markerGroup.addLayer(marker);
	},
	_onMarkerContextMenu : function(e) {
		L.DomEvent.preventDefault(e);

		if ( e.target._isMiddleMarker ) return;

		var latlngs = this._poly._latlngs;
		if (
			( this.options.isPolygon && latlngs.length <= 3 )
			||
			( !this.options.isPolygon && latlngs.length <= 2 )
		) return;

		latlngs.splice(e.target._index, 1);

		this._poly.setLatLngs(latlngs);
		this.updateMarkers();
	},
	_createMarker: function (latlng, index) {
		// Extending L.Marker in TouchEvents.js to include touch.
		var marker = new L.Marker.Touch(latlng, {
			draggable: true,
			icon: this.options.icon
		});

		marker._origLatLng = latlng;
		marker._index = index;

		marker
			.on('contextmenu', this._onMarkerContextMenu, this)
			.on('drag', this._onMarkerDrag, this)
			.on('dragend', this._fireEdit, this)
			.on('touchmove', this._onTouchMove, this)
			.on('touchend', this._fireEdit, this);

		this._markerGroup.addLayer(marker);

		return marker;
	},
	_removeMarker: function (marker) {
		var i = marker._index;

		this._markerGroup.removeLayer(marker);
		this._markers.splice(i, 1);
		this._poly.spliceLatLngs(i, 1);
		this._updateIndexes(i, -1);

		marker
			.off('contextmenu', this._onMarkerContextMenu, this)
			.off('drag', this._onMarkerDrag, this)
			.off('dragend', this._fireEdit, this)
			.off('touchmove', this._onMarkerDrag, this)
			.off('touchend', this._fireEdit, this)
			.off('click', this._onMarkerClick, this);
	},
	_onCenterMarkerDrag: function (e) {
		var marker = e.target;
		var latlngs = this._poly._latlngs;
		var latMove = marker._latlng.lat - marker._origLatLng.lat;
		var lngMove = marker._latlng.lng - marker._origLatLng.lng;

		for ( var i=0; i<latlngs.length; i++ )
		{
			latlngs[i].lat+=latMove;
			latlngs[i].lng+=lngMove;
		}

		this._poly.setLatLngs( latlngs);

		L.extend(marker._origLatLng, marker._latlng);

		this._poly.redraw();
		this.updateMarkers2();
	}
} );

/************************************************************************
 L.FeatureGroup
 - GSI.KML
 ************************************************************************/
GSI.KML = L.FeatureGroup.extend({
	options: {
		async: true
	},
	opacitySetter : new GSI.LayerOpacitySetter (),
	initialize: function(kml, options) {
		L.Util.setOptions(this, options);
		this._kml = kml;
		this._layers = {};
	},
	load : function()
	{
		if (this._kml) {
			this.addKML(this._kml, this.options, this.options.async);
		}
	},
	loadXML: function(url, cb, options, async) {
		if (async === undefined) async = this.options.async;
		if (options === undefined) options = this.options;

		if ( this.options._map )
		{
			var bounds = this.options._map.getBounds();
			url = url.replace( '{left}', bounds.getWest() );
			url = url.replace( '{top}', bounds.getNorth() );
			url = url.replace( '{right}', bounds.getEast() );
			url = url.replace( '{bottom}', bounds.getSouth() );
		}
		
		$.support.cors = true;
		this.ajax = $.ajax({
			type: "GET",
			dataType: "xml",
			url: url,
			success:  L.Util.bind( this._onKMLLoad, this ),
			error:  L.Util.bind( this._onKMLLoadError, this ),
			async : async

		});
	},
	onAdd: function (map) {
		this._map = map;
		this._map.on( 'zoomend', this._onZoomChange, this );
		this._onZoomChange();
	},
	onRemove: function (map) {
		if ( map ) map.off( 'zoomend', this._onZoomChange, this );
		this.eachLayer(map.removeLayer, map);
		this._map = null;
		this._layerAdded = false;
	},
	_onZoomChange : function()
	{
		if ( !this._map ) return;
		var zoom = this._map.getZoom();

		if (
			( this.options.minZoom && this.options.minZoom > zoom )
				||
			( this.options.maxZoom && this.options.maxZoom < zoom )
		)
		{
			this._layerAdded = false;
			this.eachLayer(this._map.removeLayer, this._map);
		}
		else
		{
			if ( !this._layerAdded )
			{
				this._layerAdded = true;
				this.eachLayer(this._map.addLayer, this._map);
			}
		}
	},
	_onKMLLoadError : function(e)
	{
		this.fire('loaded');
	},
	_onKMLLoad : function( result )
	{
		var data = null;
		if ( !result) return;

		if ( result.data )
		{
			try
			{
				if (window.ActiveXObject)
				{
					data = new ActiveXObject("Microsoft.XMLDOM");
					data.async = false;
					data.loadXML($.trim(result.data));
				}
				else if (window.DOMParser)
				{
					data = new DOMParser().parseFromString(
						$.trim(result.data),
						"application/xml"
					);
				}
			}
			catch( e )
			{
				data = null;
			}
		}
		else data = result;

		if ( !data )
		{
			this.fire('loaded');
		}
		else
		{
			try
			{
				this._addKML( data, this.options );
			}
			catch( e )
			{
				this.fire('loaded');
			}
		}
	},
	addKML: function(url, options, async) {
		var _this = this;
		this.fire('loadstart');

		try{
			this.loadXML(url, null, options, async);
		}
		catch(e)
		{
			this.fire('loaded');
		}
	},
	setMarkerZIndex : function( zIndex ) {
		
		this.options.zIndexOffset = zIndex;
		L.FeatureGroup.prototype.setMarkerZIndex.call(this,this.options.zIndexOffset);
	},
	_addKML: function(xml, options) {

		try
		{
			var layers = GSI.KML.parseKML(xml);

			if (!layers || !layers.length)
			{
				this.fire('loaded');
				return;
			}
			for (var i = 0; i < layers.length; i++) {
				this.fire('addlayer', {
					layer: layers[i]
				});
				
				this.addLayer(layers[i]);
			}
			
			if ( this.options.zIndexOffset )
			{
				this.setMarkerZIndex( this.options.zIndexOffset );
			}
			
			this.latLngs = GSI.KML.getLatLngs(xml);
			if ( this.opacity )
			{
				this.setOpacity( this.opacity );
			}
		}
		catch( e ) {}
		try{
			this.fire('loaded');
		} catch( e ) {}
		this._onZoomChange();
	},
	setOpacity : function( opacity)
	{
		this.opacity = opacity;

		this.eachLayer( L.bind( function( layer ){

			this.opacitySetter.setOpacity( layer,this.opacity );

		}, this ) );
	},
	latLngs: []
});

L.Util.extend(GSI.KML, {

	parseKML: function (xml) {
		var style = this.parseStyle(xml);
		this.parseStyleMap(xml, style);
		var el = xml.getElementsByTagName('Folder');
		var layers = [], l;
		for (var i = 0; i < el.length; i++) {
			if (!this._check_folder(el[i])) { continue; }
			l = this.parseFolder(el[i], style);
			if (l) { layers.push(l); }
		}
		el = xml.getElementsByTagName('Placemark');
		for (var j = 0; j < el.length; j++) {
			if (!this._check_folder(el[j])) { continue; }
			l = this.parsePlacemark(el[j], xml, style);
			if (l) { layers.push(l); }
		}
		return layers;
	},
	// Return false if e's first parent Folder is not [folder]
	// - returns true if no parent Folders
	_check_folder: function (e, folder) {
		
		e = ( e.parentElement ?  e.parentElement : e.parentNode );
		
		while (e && e.tagName !== 'Folder')
		{
			e = ( e.parentElement ?  e.parentElement : e.parentNode );
		}
		return !e || e === folder;
	},
	parseStyle: function (xml) {
		var style = {};
		var sl = xml.getElementsByTagName('Style');

		//for (var i = 0; i < sl.length; i++) {
		var attributes = {color: true, width: true, Icon: true, href: true,
						  hotSpot: true, scale: true};

		function _parse(xml) {
			var options = {};
			for (var i = 0; i < xml.childNodes.length; i++) {
				var e = xml.childNodes[i];
				var key = e.tagName;

				if (!attributes[key]) { continue; }
				if (key === 'hotSpot')
				{
					for (var j = 0; j < e.attributes.length; j++) {
						options[e.attributes[j].name] = e.attributes[j].nodeValue;
					}
				} else {
					var value = e.childNodes[0].nodeValue;
					if (key === 'color') {
						options.opacity = parseInt(value.substring(0, 2), 16) / 255.0;
						options.color = '#' + value.substring(6, 8) + value.substring(4, 6) + value.substring(2, 4);
					} else if (key === 'width') {
						options.weight = value;
					} else if (key === 'Icon') {
						ioptions = _parse(e);
						if (ioptions.href) { options.href = ioptions.href; }
					} else if (key === 'href') {
						options.href = value;
					} else if (key === 'scale') {
						options.scale = value;
					}
				}
			}
			return options;
		}

		for (var i = 0; i < sl.length; i++) {
			var e = sl[i], el;
			var options = {}, poptions = {}, ioptions = {};
			el = e.getElementsByTagName('LineStyle');
			if (el && el[0]) { options = _parse(el[0]); }
			el = e.getElementsByTagName('PolyStyle');
			if (el && el[0]) { poptions = _parse(el[0]); }
			if (poptions.color) { options.fillColor = poptions.color; }
			if (poptions.opacity || poptions.opacity == 0 ) { options.fillOpacity = poptions.opacity; }
			el = e.getElementsByTagName('IconStyle');
			if (el && el[0]) { ioptions = _parse(el[0]); }
			if (ioptions.href) {
				// save anchor info until the image is loaded
				options.icon = new GSI.KMLIcon({
					iconUrl: ioptions.href,
					shadowUrl: null,
					iconAnchorRef: {x: ioptions.x, y: ioptions.y},
					iconAnchorType:	{x: ioptions.xunits, y: ioptions.yunits},
					_iconScale : ioptions.scale
				});
			}
			style['#' + e.getAttribute('id')] = options;
		}
		return style;
	},
	parseStyleMap: function (xml, existingStyles) {
		var sl = xml.getElementsByTagName('StyleMap');

		for (var i = 0; i < sl.length; i++) {
			var e = sl[i], el;
			var smKey = '', smStyleUrl = '';

			el = e.getElementsByTagName('key');
			if (el && el[0]) { smKey = el[0].textContent; }
			el = e.getElementsByTagName('styleUrl');
			if (el && el[0]) { smStyleUrl = el[0].textContent; }

			if (smKey === 'normal')
			{
				existingStyles['#' + e.getAttribute('id')] = existingStyles[smStyleUrl];
			}
		}

		return;
	},
	parseFolder: function (xml, style) {
		var el, layers = [], l;
		el = xml.getElementsByTagName('Folder');
		for (var i = 0; i < el.length; i++) {
			if (!this._check_folder(el[i], xml)) { continue; }
			l = this.parseFolder(el[i], style);
			if (l) { layers.push(l); }
		}
		el = xml.getElementsByTagName('Placemark');
		for (var j = 0; j < el.length; j++) {
			if (!this._check_folder(el[j], xml)) { continue; }
			l = this.parsePlacemark(el[j], xml, style);
			if (l) { layers.push(l); }
		}
		if (!layers.length) { return; }
		return new L.FeatureGroup(layers);
	},
	parsePlacemark: function (place, xml, style) {
		var i, j, el, options = {};
		el = place.getElementsByTagName('styleUrl');
		for (i = 0; i < el.length; i++) {
			var url = el[i].childNodes[0].nodeValue;
			for (var a in style[url]) {
				options[a] = style[url][a];
			}
		}
		var layers = [];
		var parse = ['LineString', 'Polygon', 'Point'];

		for (j in parse) {
			// for jshint
			if (true)
			{
				var tag = parse[j];
				if ( tag && typeof tag == 'string' )
				{
					el = place.getElementsByTagName(tag);
					for (i = 0; i < el.length; i++) {
						var l = this['parse' + tag](el[i], xml, options);
						if (l) { layers.push(l); }
					}
				}
			}
		}

		if (!layers.length) {
			return;
		}
		var layer = layers[0];
		if (layers.length > 1) {
			layer = new L.FeatureGroup(layers);
		}

		var name, tbl = '', descr = '';
		el = place.getElementsByTagName('name');
		if (el.length && el[0].childNodes.length) {
			name = el[0].childNodes[0].nodeValue;
		}
		el = place.getElementsByTagName('description');
		for (i = 0; i < el.length; i++) {
			for (j = 0; j < el[i].childNodes.length; j++) {
				descr = descr + el[i].childNodes[j].nodeValue;
			}
		}

		layer._information = {
			title : ( name && name != '' ? name : null ),
			description : ( descr && descr != '' ? descr : null ),
			table : null
		};
		
		if ( layer._information.description )
		{
			// parse table tag
			var parser= $( '<div>' ).html( layer._information.description );

			var table = parser.children( 'table' );

			if (table.length > 0 )
			{
				var tr = $(table[0] ).find( 'tr' );
				
				if ( tr.length <= 0 )
				{
					tr = $(table[0] ).chidlren( 'tbody' ).children( 'tr' );
				}
				for ( var i=0; i<tr.length; i++ )
				{
					var td = $( tr[i] ).children( 'td' );
					if ( td.length == 2 )
					{
						if ( !layer._information.table ) layer._information.table = [];
						layer._information.table.push( { key : $(td[0]).html(), value: $(td[1]).html() } );
					}
					else
					{
						layer._information.table = null;
						break;
					}
				}
			}

			delete parser;
			parser = null;
		}
		
		if ( layer._information.table ) layer._information.description = null;
		
		if ( ( name && name != '' ) || ( descr && descr != '' )  )
		{
			layer.bindPopup( ( name && name != '' ? '<h2>' + GSI.Utils.encodeHTML(name) + '</h2>' : '' ) + ( descr && descr != '' ? descr : '' ),
					{
						maxWidth:5000
					});
		}

		return layer;
	},
	parseCoords: function (xml) {
		var el = xml.getElementsByTagName('coordinates');
		return this._read_coords(el[0]);
	},
	parseLineString: function (line, xml, options) {
		var coords = this.parseCoords(line);
		if (!coords.length) { return; }
		return new L.Polyline(coords, options);
	},
	parsePoint: function (line, xml, options) {
		var el = line.getElementsByTagName('coordinates');
		if (!el.length) {
			return;
		}
		var ll = el[0].childNodes[0].nodeValue.split(',');
		return new GSI.KMLMarker(new L.LatLng(ll[1], ll[0]), options);
	},
	parsePolygon: function (line, xml, options) {
		var el, polys = [], inner = [], i, coords;
		el = line.getElementsByTagName('outerBoundaryIs');
		for (i = 0; i < el.length; i++) {
			coords = this.parseCoords(el[i]);
			if (coords) {
				polys.push(coords);
			}
		}
		el = line.getElementsByTagName('innerBoundaryIs');
		for (i = 0; i < el.length; i++) {
			coords = this.parseCoords(el[i]);
			if (coords) {
				inner.push(coords);
			}
		}
		if (!polys.length) {
			return;
		}
		if (options.fillColor) {
			options.fill = true;
		}
		if (polys.length === 1) {
			return new L.Polygon(polys.concat(inner), options);
		}
		return new L.MultiPolygon(polys, options);
	},
	getLatLngs: function (xml) {
		var el = xml.getElementsByTagName('coordinates');
		var coords = [];
		for (var j = 0; j < el.length; j++) {
			// text might span many childNodes
			coords = coords.concat(this._read_coords(el[j]));
		}
		return coords;
	},
	_read_coords: function (el) {
		var text = '', coords = [], i;
		for (i = 0; i < el.childNodes.length; i++) {
			text = text + el.childNodes[i].nodeValue;
		}
		text = text.split(/[\s\n]+/);
		for (i = 0; i < text.length; i++) {
			var ll = text[i].split(',');
			if (ll.length < 2) {
				continue;
			}
			coords.push(new L.LatLng(ll[1], ll[0]));
		}
		return coords;
	}
});

GSI.KMLIcon = L.Icon.extend({

	createIcon: function () {
		var img = this._createIcon('icon');

		if ( img.width && img.width > 0 )
		{
			this._onIconImageLoaded( img );
		}
		else
		{
			$(img).css({ 'visibility':'hidden'}).on( 'load', L.bind( this._onIconImageLoaded, this, img ) );
		}
		return img;
	},
	_onIconImageLoaded: function(img) {
		var scale = ( this.options._iconScale ? this.options._iconScale : 1 );
		var w = Math.round( img.width * scale );
		var h = Math.round( img.height * scale );
		this.options.iconSize = [w,h];
		var anchorX = null;
		var anchorY = null;
		if ( this.options.iconAnchorRef && this.options.iconAnchorRef.x )
		{
			anchorX = Math.round(w*this.options.iconAnchorRef.x);
		}
		else
		{
			anchorX = Math.round(w/2);
		}

		if ( this.options.iconAnchorRef && this.options.iconAnchorRef.y )
		{
			anchorY = Math.round(h*this.options.iconAnchorRef.y);
		}
		else
		{
			anchorY = Math.round(h/2);
		}
		this.options.iconAnchor = [anchorX,anchorY];

		this._setIconStyles(img, "icon");
		L.DomUtil.addClass(img, 'leaflet-clickable');
		img.style.visibility= 'visible';
	}
});


GSI.KMLMarker = L.Marker.extend({
	options: {
		icon: new GSI.KMLIcon.Default(),
		clickable:true
	}
});


GSI.GeoJSONTileLayer = L.TileLayer.GeoJSON.extend( {

	_opacity : 1,
	initialize: function (url, options, geojsonOptions) {
		options.clipTiles = false;
		L.TileLayer.GeoJSON.prototype.initialize.call(this, url, options, geojsonOptions);
		this._loadStyle( url );
	},
	setMarkerZIndex : function( zIndex )
	{
		this.options.zIndexOffset = zIndex;
		if ( this.geojsonLayer && this.geojsonLayer.setMarkerZIndex )
			this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
	},
	_tileLoaded: function (tile, tilePoint) {
		if ( tile && tile.datum && this.options.isTopoJSON)
		{
			tile.datum = omnivore.topojson.parse(tile.datum);
		}
		L.TileLayer.Ajax.prototype._tileLoaded.apply(this, arguments);
		if (tile.datum === null) { return null; }
		this.addTileData(tile.datum, tilePoint);
		if ( this._opacity != 1 )this.setOpacity( this._opacity );
		
		if ( this.geojsonLayer )
		{
			if ( this.options.zIndexOffset && this.geojsonLayer.setMarkerZIndex )
			{
				this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
			}
		}
	},
	_onStyleLoad : function(result)
	{
		try
		{
			var data = null;
			if ( !result) return;
			if ( result.data )
			{
				data = result.data;
			}
			else data = result;
			data = eval( "(" + data + ")" );
			if ( data.geojsonOptions ) this.geojsonLayer.options =  data.geojsonOptions;
			if ( data.options )
			{
				if ( this.options._minZoom )
					data.options.minZoom = this.options._minZoom;

				if ( this.options._maxZoom )
					data.options.maxZoom = this.options._maxZoom;

				if ( this.options._maxNativeZoom )
					data.options.maxNativeZoom = this.options._maxNativeZoom;

				if ( this.options._attribution )
					data.options.attribution = this.options._attribution;

				L.setOptions(this, data.options);
			}
		}
		catch( e ){}

		if(this._tileContainer)
			this._reset();

		this._update();
	},
	_defaultLoadStyle : function()
	{
		var styleUrl = './js/style.js';

		this._styleAjax = $.ajax({
			type: "GET",
			dataType: "text",
			url: styleUrl,
			success:  L.Util.bind( this._onStyleLoad, this ),
			async : true
		});
	},
	_loadStyle : function(url)
	{
		var styleUrl = url.replace(/\/\{z\}.*/,"") + '/style.js';

		this._styleAjax = $.ajax({
			type: "GET",
			dataType: "text",
			url: styleUrl,
			success:  L.Util.bind( this._onStyleLoad, this ),
			error :  L.Util.bind( this._defaultLoadStyle, this ),
			async : true

		});
	},
	setOpacity : function( opacity )
	{
		this._opacity = opacity;

		if ( this.geojsonLayer )
		{
			var opacitySetter = new GSI.LayerOpacitySetter();
			opacitySetter.setOpacity( this.geojsonLayer, opacity  );
		}
	}
} );

/************************************************************************
 L.LayerGroup
 ************************************************************************/
L.LayerGroup.prototype.setMarkerZIndex = function(offset ) {
	this._setMarkerZIndex( this, offset );	
};

L.LayerGroup.prototype._setMarkerZIndex = function( layer, offset )
{
	if ( layer.setZIndexOffset )
	{
		layer.setZIndexOffset( offset );
	}
	else if ( layer.getLayers )
	{
		var layers = layer.getLayers();
		for ( var i=0; i<layers.length; i++ )
		{
			this._setMarkerZIndex( layers[i], offset );
		}
	}
};

/************************************************************************
 L.Map
 - GSI.Map
 ************************************************************************/
GSI.Map = L.Map.extend( {
	_initPanes: function () {
		
		L.Map.prototype._initPanes.call( this );
		this._panes.gsiObjectsPane = this._createPane('gsi-objects-pane');
	},
	_limitCenter: function (center, zoom, bounds) {
		if (!bounds) { return center; }

		var centerPoint = this.project(center, zoom),
			viewHalf = this.getSize().divideBy(2),
			viewBounds = new L.Bounds(centerPoint.subtract(viewHalf), centerPoint.add(viewHalf)),
			offset = this._getBoundsOffset(viewBounds, bounds, zoom);

		var result = this.unproject(centerPoint.add(offset), zoom);
	
		return result;
	},
	_limitOffset: function (offset, bounds) {
		if (!bounds) { return offset; }

		var viewBounds = this.getPixelBounds(),
			newBounds = new L.Bounds(viewBounds.min.add(offset), viewBounds.max.add(offset));

		return offset.add(this._getBoundsOffset(newBounds, bounds));
	}
} );

GSI.map = function (id, options) {
	return new GSI.Map(id, options);
};

/************************************************************************
 L.Marker
 - GSI.CenterCrossMarker（中心マーク）
 ************************************************************************/
GSI.CenterCrossMarker = L.Marker.extend( {
	_initIcon: function () {
		var options = this.options,
		    map = this._map,
		    animation = (map.options.zoomAnimation && map.options.markerZoomAnimation),
		    classToAdd = animation ? 'leaflet-zoom-animated' : 'leaflet-zoom-hide';

		var icon = options.icon.createIcon(this._icon),
			addIcon = false;

		// if we're not reusing the icon, remove the old one and init new one
		if (icon !== this._icon) {
			if (this._icon) {
				this._removeIcon();
			}
			addIcon = true;

			if (options.title) {
				icon.title = options.title;
			}

			if (options.alt) {
				icon.alt = options.alt;
			}
		}

		L.DomUtil.addClass(icon, classToAdd);

		if (options.keyboard) {
			icon.tabIndex = '0';
		}

		this._icon = icon;

		this._initInteraction();

		if (options.riseOnHover) {
			L.DomEvent
				.on(icon, 'mouseover', this._bringToFront, this)
				.on(icon, 'mouseout', this._resetZIndex, this);
		}

		var newShadow = options.icon.createShadow(this._shadow),
			addShadow = false;

		if (newShadow !== this._shadow) {
			this._removeShadow();
			addShadow = true;
		}

		if (newShadow) {
			L.DomUtil.addClass(newShadow, classToAdd);
		}
		this._shadow = newShadow;

		if (options.opacity < 1) {
			this._updateOpacity();
		}

		var panes = this._map._panes;

		if (addIcon) {
			panes.gsiObjectsPane.appendChild(this._icon);
		}

		if (newShadow && addShadow) {
			panes.objectsPane.appendChild(this._shadow);
		}
	},
	_removeIcon: function () {
		if (this.options.riseOnHover) {
			L.DomEvent
			    .off(this._icon, 'mouseover', this._bringToFront)
			    .off(this._icon, 'mouseout', this._resetZIndex);
		}

		this._map._panes.gsiObjectsPane.removeChild(this._icon);

		this._icon = null;
	},
	_removeShadow: function () {
		if (this._shadow) {
			this._map._panes.objectsPane.removeChild(this._shadow);
		}
		this._shadow = null;
	}
} );

/************************************************************************
 L.Path
 ************************************************************************/
L.Path.prototype.onRemove = function(map)
{
	map._pathRoot.removeChild(this._container);

	// Need to fire remove event before we set _map to null as the event hooks might need the object
	this.fire('remove');
	this._map = null;
	this._container = null;
	this._stroke = null;
	this._fill = null;

	map.off({
		'viewreset': this.projectLatlngs,
		'moveend': this._updatePath
	}, this);
};

/************************************************************************
 L.Popup
 ・_updateLayout上書き
 ・tableのwidth指定時修正
 ************************************************************************/
L.Popup.prototype._updateLayout = function () {
	var container = this._contentNode,
	    style = container.style;

	var table = $( container ).find( "table" );
	var tableWidth = null;
	
	if ( table.length > 0 )
	{
		tableWidth = table.attr( 'width' );
		if ( !tableWidth )
		{
			tableWidth = table[0].style.width;
		}
		
	}
	
	style.width = '';
	if ( !tableWidth) style.whiteSpace = 'nowrap';
	
	var width = container.offsetWidth;
	width = Math.min(width, this.options.maxWidth);
	width = Math.max(width, this.options.minWidth);

	style.width = (width + 1) + 'px';
	style.whiteSpace = '';

	style.height = '';

	var height = container.offsetHeight,
	    maxHeight = this.options.maxHeight,
	    scrolledClass = 'leaflet-popup-scrolled';

	if (maxHeight && height > maxHeight) {
		style.height = maxHeight + 'px';
		L.DomUtil.addClass(container, scrolledClass);
	} else {
		L.DomUtil.removeClass(container, scrolledClass);
	}

	this._containerWidth = this._container.offsetWidth;
};

/************************************************************************
 L.TileLayer
  - GSI.BaseLayer（地図）
 ************************************************************************/
GSI.BaseLayer = L.TileLayer.extend({
	baseLayerList : null,
	activeIndex : 0,
	isGrayScale : false,
	opacity : 1,
	highQuality : false,
	initialize: function (baseLayerList, defaultMap, defaultMapGrayScale) {

		this.activeIndex    = 0;
        this.activeIndexPre = -1;
		if ( defaultMap )
		{
			for( var i=0; i<baseLayerList.length; i++ )
			{
				if ( baseLayerList[i].id == defaultMap )
				{
					this.activeIndex = i;
					break;
				}
			}
		}
		this.baseLayerList = baseLayerList;
		options = L.setOptions(this, {});
		options.minZoom = 2;
		this.setActiveIndex(this.activeIndex);
        this.setGrayScale(defaultMapGrayScale);
	},
	setHighQuality : function( on )
	{
		this.highQuality = on
		if ( this.highQuality && ( this._map && this._map.getZoom() < 18 ) )
			this.options.tileSize = 128;
		else
			this.options.tileSize = 256;
		this.redraw();
	},
	getHighQuality : function()
	{
		return this.highQuality;
	},
	_getZoomForUrl: function () {
		var options = this.options;
		var zoom = this._map.getZoom();

		if ( this.highQuality )
		{
			zoom++;
			if ( zoom > 18 )
			{
				zoom = 18;
				this.options.tileSize = 256;
			}
			else
			{
				this.options.tileSize = 128;
			}
		}

		if (options.zoomReverse) {
			zoom = options.maxZoom - zoom;
		}

		zoom += options.zoomOffset;

		return options.maxNativeZoom ? Math.min(zoom, options.maxNativeZoom) : zoom;
	},
	getActiveId : function()
	{
		return this.baseLayerList[ this.activeIndex ].id;
	},
	getActiveIndex : function()
	{
		return this.activeIndex;
	},
    setActiveId : function(id)
    {
		for( var i=0; i<this.baseLayerList.length; i++ )
		{
			if ( this.baseLayerList[i].id == id )
			{
				this.setActiveIndex(i);
            }
        }
    },
	setActiveIndex : function(idx)
	{
        if(this.activeIndexPre == -1 || this.activeIndexPre != idx){
		    this.activeIndex = idx;
		    this._url = this.baseLayerList[idx].url;
		    if ( this.baseLayerList[idx].subdomains ){
			    this.options.subdomains =  this.baseLayerList[idx].subdomains;
            }
		    this.options.maxNativeZoom =  this.baseLayerList[idx].maxNativeZoom;
		
		    if ( this.baseLayerList[idx].minZoom ){
			    this.options.minZoom =  this.baseLayerList[idx].minZoom;
            }

            var errorTileUrl = "image/map/no-data.png";
            if(errorTileUrl){
                errorTileUrl = this.baseLayerList[idx].errorTileUrl;
            }
            this.options.errorTileUrl = errorTileUrl;

		    this.setUrl( this._url );
        }
        this.activeIndexPre = this.activeIndex;
	},
	_createTile: function () {
		var tile = L.TileLayer.prototype._createTile.call(this);

		return tile;
	},
	_tileOnLoad: function () {
		var layer = this._layer;
		if (layer && layer.isGrayScale  && this.src !== L.Util.emptyImageUrl) {
			$(this).addClass( "grayscale" );
			if ( GSI.Utils.Browser.ie )
			{
				if ( GSI.Utils.Browser.version >= 10 )
				{
					if ( !$( this ).data( "_src" ) )
					{
						$( this ).data( { "_src" : this.src } );
						this.src = this._layer.grayscaleIE1011( this );//.src );
					}
				}
				else
				{
					$(this).css( { 'filter' : 'gray', opacity : this._layer.opacity} );
				}
			}
		}
		L.TileLayer.prototype._tileOnLoad.call(this);
	},
	_createTile: function () {
		var tile = L.TileLayer.prototype._createTile.call(this);

		if (this.isGrayScale )
		{
			if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version >= 10)
				$( tile ).attr( {'crossOrigin':'Anonymous'} );
			$(tile).addClass( "grayscale" );
			if ( GSI.Utils.Browser.ie && GSI.Utils.Browser.version < 10)
			{
				$(tile).css( { 'filter' : 'gray', opacity : this.opacity} );
			}
		}
		return tile;
	},
	_resetTile : function(tile)
	{
		$( tile ).data( { "_src" : null } );
	},
	getOpacity : function(opacity)
	{
		return this.opacity ;
	},
	setOpacity : function(opacity)
	{
		this.opacity = opacity;
		L.TileLayer.prototype.setOpacity.call(this, opacity);
	},
	grayscaleIE1011 : function (img ) //src)
	{
		var size = this._getTileSize();

		var canvas = document.createElement('canvas');
		var ctx = canvas.getContext('2d');
		canvas.width = size;
		canvas.height = size;
		ctx.drawImage(img, 0, 0);
		var imgPixels = ctx.getImageData(0, 0, canvas.width, canvas.height);

		for(var y = 0; y < imgPixels.height; y++)
		{
			for(var x = 0; x < imgPixels.width; x++)
			{
				var i = (y * 4) * imgPixels.width + x * 4;
				var avg = (imgPixels.data[i] + imgPixels.data[i + 1] + imgPixels.data[i + 2]) / 3;
				imgPixels.data[i] = avg;
				imgPixels.data[i + 1] = avg;
				imgPixels.data[i + 2] = avg;
			 }
		}
		ctx.putImageData(imgPixels, 0, 0, 0, 0, imgPixels.width, imgPixels.height);

		return canvas.toDataURL();
	},
	getGrayScale : function()
	{
		return this.isGrayScale;
	},
	setGrayScale : function(isGrayScale)
	{

		if ( this.isGrayScale != isGrayScale )
		{
			this.isGrayScale = isGrayScale;
			this.redraw();
		}
	}
} );

/************************************************************************
 L.TileLayer
  - GSI.GSITMSLayer
 ************************************************************************/
GSI.GSITMSLayer = L.TileLayer.extend({
	initialize : function(url, options)
	{
		var urlParts = url.split( '{tms}' );
		this._url = urlParts[ 0 ];
		this._ext = urlParts[ 1];

		L.setOptions(this, options);
	},
	_zeroPad : function(num,len) {
		var result = "" + num;
		while (result.length < len) {
		result = "0"+result;
		}
		return result;
	},
	getTileUrl: function (tilePoint)
	{
		var z = tilePoint.z;
		var x = this._zeroPad(tilePoint.x,7);
		var y = this._zeroPad(tilePoint.y,7);

		var dir = '';
		for (var i = 0; i < 6; i++)
		{
			var xi = x.substr(i, 1);
			var yi = y.substr(i, 1);
			dir += "/" + xi + yi;
		}

		var url = L.Util.template(this._url, {s: this._getSubdomain(tilePoint)});
		return url + z + dir + "/" + x + y + this._ext;
	}
} );

/************************************************************************
 L.TileLayer
  - GSI.TileLayer
 ************************************************************************/
GSI.TileLayer = L.TileLayer.extend( {	
	initialize: function (url, options) {
		
		L.TileLayer.prototype.initialize.call(this, url, options);
	},
	_addTile: function (tilePoint, container) {
		var tilePos = this._getTilePos(tilePoint);

		// get unused tile - or create a new tile
		var tile = this._getTile();

		/*
		Chrome 20 layouts much faster with top/left (verify with timeline, frames)
		Android 4 browser has display issues with top/left and requires transform instead
		(other browsers don't currently care) - see debug/hacks/jitter.html for an example
		*/
		L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);

		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;
		this._loadTile(tile, tilePoint);

		if (tile.parentNode !== this._tileContainer) {
			container.appendChild(tile);
		}
		if (( GSI.Utils.Browser.ie && GSI.Utils.Browser.version <= 8)
			 && this.options.opacity !== undefined) {
			L.DomUtil.setOpacity(tile, this.options.opacity);
		}
	},
	_update: function () {

		if (!this._map) { return; }

		var map = this._map,
		    bounds = map.getPixelBounds(),
		    zoom = map.getZoom(),
		    tileSize = this._getTileSize();

		if (zoom > this.options.maxZoom || zoom < this.options.minZoom) {
			this._reset({hard:true});
			return;
		}

		var tileBounds = L.bounds(
		        bounds.min.divideBy(tileSize)._floor(),
		        bounds.max.divideBy(tileSize)._floor());
		
		this._addTilesFromCenterOut(tileBounds);
		
		if ( this.options.unloadInvisibleTiles || this.options.reuseTiles) {
			this._removeOtherTiles(tileBounds);
		}
	}
} );

/************************************************************************
 L.Class
 - GSI.GeoJSON
 ************************************************************************/
GSI.GeoJSON = L.Class.extend( {
	includes: L.Mixin.Events,
	opacity : 1,
	opacitySetter : new GSI.LayerOpacitySetter (),

	initialize : function ( url, options)
	{
		this.url = url;
		options = L.setOptions(this, options);
	},
	load : function()
	{
		this.fire( "loadstart", { "src":this } );
		try
		{
			this._cerateLayer();
		}
		catch(e)
		{
			this.fire( "load", { "src":this } );
			return;
		}

		this._loadTimerId = setTimeout( L.bind( this._loadStart, this ), 200 );

	},
	_loadStart : function()
	{
		if ( this._loadTimerId  )
		{
			clearTimeout( this._loadTimerId  );
			this._loadTimerId  = null;
		}
		try
		{
			this._load();
		}
		catch(e)
		{
			this.fire( "load", { "src":this } );
		}
	},
	onPointToLayer : function(feature, latlng )
	{
		if ( !feature.properties ) return L.marker( latlng ,{ icon : L.icon({iconUrl:'http://cyberjapandata.gsi.go.jp/portal/sys/v4/symbols/080.png',iconSize:[20,20],iconAnchor:[10,10]}) });

		var marker = null;
		if ( feature.properties[ "_markerType" ] )
		{
			var markerType = feature.properties[ "_markerType" ];
			switch( markerType )
			{
				case "DivIcon":
					var iconSize = feature.properties[ "_iconSize" ];
					var iconAnchor = feature.properties[ "_iconAnchor" ];
					var html = feature.properties[ "_html" ];
					var className = feature.properties[ "_className" ];

					var options ={};
					if ( iconSize ) options.iconSize = iconSize;
					if ( iconAnchor ) options.iconAnchor = iconAnchor;
					if ( html ) options.html = html;
					if ( className ) options.className = className;
					
					marker = L.marker( latlng, { icon : GSI.divIcon(options) });
					break;

				case "CircleMarker":
					var options ={};
					for( var key in feature.properties )
					{
						if ( !feature.properties[key] ) continue;
						if ( key != "" && key.charAt(0) == '_' && key != "_markerType")
						{
							var value = feature.properties[key];
							key = key.slice(1);
							options[ key ] = value;
						}
					}
					marker = L.circleMarker(latlng, options);
                    marker.setRadius(options['radius']);
					break;
				case "Circle":
					var options ={};
					for( var key in feature.properties )
					{
						if ( !feature.properties[key] ) continue;
						if ( key != "" && key.charAt(0) == '_' && key != "_markerType")
						{
							var value = feature.properties[key];
							key = key.slice(1);
							options[ key ] = value;
						}
					}
					marker = L.circle(latlng, options['radius'],options);
					break;

			}
		}

		if ( !marker )
		{
			if ( !feature.properties[ "_iconUrl" ] ) return L.marker( latlng ,{ icon : L.icon({iconUrl:'http://cyberjapandata.gsi.go.jp/portal/sys/v4/symbols/080.png',iconSize:[20,20],iconAnchor:[10,10]}) });
			var iconUrl = feature.properties[ "_iconUrl" ];
			var iconSize = feature.properties[ "_iconSize" ];
			var iconAnchor = feature.properties[ "_iconAnchor" ];
			var className = feature.properties[ "_className" ];
			var scale = iconSize[0] / CONFIG.SAKUZU.SYMBOL.ICONSIZE[0];
					
			var iconOptions = {};
			if ( iconUrl ) iconOptions.iconUrl = iconUrl;
			if ( iconSize ) iconOptions.iconSize = iconSize;
			if ( iconAnchor ) iconOptions.iconAnchor = iconAnchor;
			if ( className ) iconOptions.className = className;
			if ( scale ) iconOptions._iconScale = scale;
			marker = L.marker( latlng, { icon : L.icon(iconOptions) });
		}

		return marker;
	},
	onStyle : function(feature)
	{
		if ( !feature.properties ) return null;

		var style = null;
		var iconStyleKeys = {
			"_markerType": true,
			"_iconUrl" : true,
			"_iconSize" : true,
			"_iconAnchor" : true,
			"_html" : true,
			"_radius" : true
		};

		for( var key in feature.properties )
		{
			if ( !feature.properties[key] && feature.properties[key] != 0 ) continue;

			if ( key != "" && key.charAt(0) == '_' )
			{
				if ( iconStyleKeys[ key ] )
				{
					continue;
				}
				else
				{
					var value = feature.properties[key];
					key = key.slice(1);
					if ( !style ) style ={};
					style[ key ] = value;
				}
			}
		}
		return style;
	},
	onEachFeature : function(feature, layer)
	{
		if ( !feature.properties ) return;

		var popupContent = '';

		if ( feature.properties['name' ] )
		{
			popupContent += '<h2>' + GSI.Utils.encodeHTML(feature.properties['name' ] ) + '</h2>';
		}

		if ( feature.properties['description' ] )
		{
			popupContent += feature.properties['description' ];
		}
		else
		{
			var table = '';
			for( var key in feature.properties )
			{
				if ( !feature.properties[key] ) continue;

				if ( key != "" && key != 'name' && !CONFIG.GEOJSONSPECIALKEYS[key] )
				{
					table +=
						"<tr>" +
						"<td>" + key + "</td>" +
						"<td>" + feature.properties[key] + "</td>" +
						"</tr>";
				}
			}

			if ( table != '' )
			{
				table = '<table>' + table + '</table>';
				popupContent += table;
			}
		}
		
		if ( popupContent != '' )
		{
			layer.bindPopup( popupContent,
				{
					maxWidth:5000
				});
		}
	},
	onLoadError : function()
	{
		this.fire( "load", { "src":this } );
	},
	
	setMarkerZIndex : function( zIndex )
	{
		this.options.zIndexOffset = zIndex;
		if ( this.layer && this.layer.setMarkerZIndex )
			this.layer.setMarkerZIndex( this.options.zIndexOffset )
	},
	addData : function( json )
	{
		try
		{
			if ( !this.layer ) this._cerateLayer();
			if ( json.type == 'Topology' )
			{
				json = omnivore.topojson.parse(json);
				this.layer.addData( json );
			}
			else
			{
				this.layer.addData( json );
			}
			
			if ( this.options.zIndexOffset && this.layer.setMarkerZIndex )
				this.layer.setMarkerZIndex( this.options.zIndexOffset )
			
		}
		catch(e){}
	},
	onLoad : function(result)
	{
		var data = null;

		if ( !result) return;
		if ( result.data ) data = result.data;
		else data = result;

		var jsonData = null;

		try
		{
			jsonData = eval( "(" +data + ")" );
		}
		catch(e)
		{
			jsonData = data;
		}

		this.addData( jsonData );

		this.fire( "load", { "src":this } );
	},
	getBounds : function()
	{
		return ( this.layer ? this.layer.getBounds():null );
	},
	_cerateLayer : function()
	{
		var geoJSONOptions = {};

		geoJSONOptions.style = L.bind( this.onStyle, this );
		geoJSONOptions.onEachFeature = L.bind( this.onEachFeature, this );
		geoJSONOptions.pointToLayer = L.bind( this.onPointToLayer, this );

		this.layer = new L.GeoJSON(null,geoJSONOptions);

		if ( !this._layerAdded && this._map )
		{
			var zoom = this._map.getZoom();

			if ( this.options.minZoom && this.options.minZoom > zoom ) return;
			if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

			this._map.addLayer( this.layer );
			this._layerAdded = true;
		}
	},
	_loadFromFile : function() {},
	_load : function()
	{
		this.ajax = $.ajax({
			type: "GET",
			dataType:"text",
			url : this.url,
			success:  L.Util.bind( this.onLoad, this ),
			error : L.Util.bind( this.onLoadError, this )
		});
	},
	_onZoomChange : function()
	{
		if ( !this.layer ) return;
		var zoom = this._map.getZoom();

		if (
			( this.options.minZoom && this.options.minZoom > zoom )
				||
			( this.options.maxZoom && this.options.maxZoom < zoom )
		)
		{
			this._layerAdded = false;
			this._map.removeLayer(this.layer);
		}
		else
		{
			if ( !this._layerAdded )
			{
				this._layerAdded = true;
				this._map.addLayer(this.layer);
			}
		}
	},
	onAdd : function( map )
	{
		this._map = map;
		this._map.on( 'zoomend', this._onZoomChange, this );

		if ( this.layer )
		{
			var zoom = this._map.getZoom();

			if ( this.options.minZoom && this.options.minZoom > zoom ) return;
			if ( this.options.maxZoom && this.options.maxZoom < zoom ) return;

			this._layerAdded = true;
			map.addLayer(this.layer);
		}
	},
	onRemove : function( map )
	{
		if ( map ) map.off( 'zoomend', this._onZoomChange, this );
		if ( this.layer )
		{
			map.removeLayer( this.layer );
			this._layerAdded = false;
		}

		this._map = null;
	},
	setOpacity : function( opacity )
	{
		this.opacity = opacity;
		this.opacitySetter.setOpacity(this.layer, opacity );
	},
	getLayers : function()
	{
		if ( this.layer )
		{
			return this.layer.getLayers();
		}
		else return null;
	},
	addLayer : function(layer)
	{
		if ( this.layer )
		{
			this.layer.addLayer( layer );
		}
	},
	removeLayer : function(layer)
	{
		if ( this.layer )
		{
			this.layer.removeLayer( layer );
		}
	}
} );

/************************************************************************
  postMessage
 ************************************************************************/
window.addEventListener('message', function(event){
    var d = event.data;
    try{
        GSI.ClientMode.queryString = "";

        if(d.sakuzuList  != null){ GSI.ClientMode.sakuzuList  = d.sakuzuList;  }
        if(d.queryString != null){ GSI.ClientMode.queryString = d.queryString; 
            if(GSI.ClientMode.queryString.indexOf("#") != -1){
                var nPos = (GSI.ClientMode.queryString.match(new RegExp("/", "g")) || []).length;
                if(     nPos == 0){ GSI.ClientMode.queryString = GSI.ClientMode.queryString.replace("#", "#//"); }
                else if(nPos == 1){ GSI.ClientMode.queryString = GSI.ClientMode.queryString.replace("#", "#/" ); }
                GSI.ClientMode.queryString = GSI.ClientMode.queryString.replace("#//", "#//&")

                var vUrl      = GSI.ClientMode.queryString.split("#");
                var vUrl_Args = "";
                var vUrl_Hash = "";
                if(vUrl.length == 2){
                    vUrl_Args = vUrl[0].replace("?", "");
                    vUrl_Hash = vUrl[1];
                }
                if(vUrl_Hash.indexOf("/&") == -1){
                    var nOpt = vUrl_Hash.indexOf("&");
                    vUrl_Hash = vUrl_Hash.slice(0, nOpt) + "/" + vUrl_Hash.slice(nOpt, vUrl_Hash.length);
                    var vHash = vUrl_Hash.split("/");
                    if(vHash.length >= 3){
                        var z   = vHash[0];
                        var lat = vHash[1];
                        var lon = vHash[2];
                        vUrl_Hash = "";
                        if(lat != "" && lon != ""){
                            vUrl_Hash += "ll=" + lat + "," + lon;
                        }
                        if(z != ""){
                            vUrl_Hash += "&z=" + z;
                        }
                        if(vHash.length >= 4){
                            vUrl_Hash += vHash[3];
                        }
                    }
                }

                GSI.ClientMode.queryString = vUrl_Args;
                if(GSI.ClientMode.queryString != ""){
                    GSI.ClientMode.queryString += "&";
                }
                GSI.ClientMode.queryString += vUrl_Hash;
            }
        }

        GSI.ClientMode.queryString += location.hash;

        GSI.GLOBALS.queryParams = new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
        initialize_proc();
    }
    catch(e){
   }
}, false);

/************************************************************************
  window読み込み時
 ************************************************************************/
function initialize()
{
	// パラメータ解析
	GSI.GLOBALS.queryParams = new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
    if(GSI.GLOBALS.queryParams.getInit()){
        initialize_proc();
    }
};

var ctrlSettin    = "";
var viewSetting   = "";
var startUpCenter = "";
var startUpZoom   = "";

function initialize_proc()
{
	ctrlSetting = GSI.GLOBALS.queryParams.getControlSetting();
	viewSetting = GSI.GLOBALS.queryParams.getViewSetting();

	// ハッシュ解析
	var hashPosition  = L.Hash.parseHash(location.hash);
	startUpCenter = GSI.GLOBALS.queryParams.getPosition(hashPosition && hashPosition.center ? hashPosition.center : CONFIG.DEFAULT.CENTER);
	startUpZoom   = GSI.GLOBALS.queryParams.getZoom    (hashPosition && hashPosition.zoom   ? hashPosition.zoom   : CONFIG.DEFAULT.ZOOM  );
	
	// マップオブジェクト生成
	GSI.GLOBALS.map = GSI.map('map',
		{
			  doubleClickZoom    : false
			, zoomsliderControl  : false
			, zoomControl        : false
			, attributionControl : false
		  //,maxBounds           : L.latLngBounds(L.latLng(-3600, -3600), L.latLng(3600, 3600))
			, worldCopyJump      : false
			, inertiaMaxSpeed    : 1000
			, center             : startUpCenter
		    , zoom               : startUpZoom
		}
    );
    var vBaseBrankLayer = L.tileLayer('', { minZoom: 2, maxZoom: 18 });
	GSI.GLOBALS.map.addLayer(vBaseBrankLayer);

	
	// スクロール後に正しい位置へ移動
	GSI.GLOBALS.map.on( 'moveend', function()
    {
		var center = GSI.GLOBALS.map.getCenter();
		if(center.lat < -88 || center.lat > 88 || center.lng < -180 || center.lng > 180){
			GSI.GLOBALS.map.panTo(center.wrap(), {animate: false});
        }
	});

	// スペース用
	GSI.GLOBALS.bottomRightSpacer = ( new GSI.Control.Spacer({position:"bottomright"})).addTo(GSI.GLOBALS.map);
	GSI.GLOBALS.bottomLeftSpacer  = ( new GSI.Control.Spacer()                        ).addTo(GSI.GLOBALS.map);

	// アクセスカウンター
	if( CONFIG.USEACCESSCOUNTER ){
        ( new GSI.Control.AccessCounter({url:CONFIG.SERVERAPI.ACCESSCOUNTER, refreshInterval:0}) ).addTo(GSI.GLOBALS.map);
    }
	L.control.scale({imperial:false}).addTo(GSI.GLOBALS.map);

	GSI.GLOBALS.mapLayerList = new GSI.MapLayerList(GSI.GLOBALS.map);

    // Layers.txt を読み込み
	GSI.GLOBALS.layersJSON = new GSI.LayersJSON( {
		 layers        : CONFIG.layerBase
	});

	GSI.GLOBALS.layersJSON.on("load", function(e){
        var f = false;
        if(!GSI.GLOBALS.layersJSON.loadBase()){
            var n = 0;
            var v = GSI.GLOBALS.layersJSON.getBase();
            for(n = 0; n < v.length; n++){
                CONFIG.BASETILES[CONFIG.BASETILES.length] = v[n];
            }
            GSI.GLOBALS.layersJSON.initialize_layers(GSI.GLOBALS.queryParams.getLayers());

			for(var i=0; i<GSI.GLOBALS.layersJSON.visibleLayers.length; i++)
			{
				GSI.Utils.sendSelectedLayer(GSI.GLOBALS.layersJSON.visibleLayers[i].id);
			}
			
		    GSI.GLOBALS.baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, GSI.GLOBALS.queryParams.getBaseMap(), GSI.GLOBALS.queryParams.getBaseMapGrayScale());

            initialize_proc_map();

            f = true;
        }
        else{
            f = true;
        }

        if(f){
            if(GSI.GLOBALS.queryParams.getBaseMap() != ""){
                GSI.GLOBALS.baseLayer.addTo(GSI.GLOBALS.map);
                if(!GSI.GLOBALS.queryParams.getBaseMapDisp()){
                    GSI.GLOBALS.map.removeLayer(GSI.GLOBALS.baseLayer);
                }
            }

            if(typeof GSI.GLOBALS.layerTreeDialog != "undefined")
            {
                GSI.GLOBALS.layerTreeDialog.setTree_Init(e.tree, e.visibleLayers, e.visibleLayersHash);
            }
            if(typeof GSI.GLOBALS.cocoTileLayer != "undefined")
            {
 		        GSI.GLOBALS.cocoTileLayer.refresh();
            }
        }
 	} );
	GSI.GLOBALS.layersJSON.load();
};

function initialize_proc_map()
{
	// ハッシュ
	GSI.GLOBALS.hash = new L.Hash(GSI.GLOBALS.map, {useReplace:( GSI.ClientMode.location ? false : true )});

	GSI.GLOBALS.onoffObjects = {};
	// 中心マーク
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CENTERCROSS] = { obj : new GSI.CenterCross(GSI.GLOBALS.map, { visible: viewSetting.centerCross                                                                                                                           } ), setter : 'setVisible', getter : 'getVisible' };
	// 磁北線
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ] = { obj : new GSI.JihokuLine (GSI.GLOBALS.map, { visible: viewSetting.jihokuLine, lineStyle: CONFIG.JIHOKULINESTYLE, num: CONFIG.JIHOKULINECOUNT                                                            } ), setter : 'setVisible', getter : 'getVisible' };
	// 緯度経度グリッド
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ] = { obj : new GSI.LatLngGrid (GSI.GLOBALS.map, { visible: viewSetting.latLngGrid, lineStyle:CONFIG.LATLNGGRIDSTYLE , condition: CONFIG.LATLNGGRID.CONDITION, labelClassName: CONFIG.LATLNGGRIDLABELCLASSNAME} ), setter : 'setVisible', getter : 'getVisible' };
	// UTMグリッド
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID    ] = { obj : new GSI.UTM.Grid   (GSI.GLOBALS.map, { visible: viewSetting.utmGrid   , lineStyle:CONFIG.UTMGRIDSTYLE    , condition: CONFIG.UTMGRID.CONDITION   , labelClassName: CONFIG.UTMGRIDLABELCLASSNAME   } ), setter : 'setVisible', getter : 'getVisible' };
	// ミニマップ
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.MINIMAP    ] = { obj : new GSI.MiniMap    (GSI.GLOBALS.map, { visible: viewSetting.miniMap                                                                                                                               } ), setter : 'setVisible', getter : 'getVisible' };

	// ココタイル
	GSI.GLOBALS.cocoTileLayer
    = new GSI.COCOTileLayer(
      GSI.GLOBALS.map
    , CONFIG.COCOTILEURL
    , {
          visible : CONFIG.COCOTILEVISIBLE
        , onLoad  : function(tileIdList){ GSI.GLOBALS.layersJSON.setHasTileList( tileIdList ); }
      }
    );
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.COCOTILE   ] = { obj : GSI.GLOBALS.cocoTileLayer, setter : 'setVisible'        , getter : 'getVisible'           };

	// クリックで移動
	GSI.GLOBALS.mapMouse
    = new GSI.MapMouse(
      GSI.GLOBALS.map
    , {
          dblClickInterval      : CONFIG.DBLCLICKINTERVAL
        , rightDblClickInterval : CONFIG.RIGHTDBLCLICKINTERVAL
      }
    );
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CLICKMOVE ] = { obj : GSI.GLOBALS.mapMouse    , setter : 'setClickMoveVisible', getter  : 'getClickMoveVisible' };

	// ヘッダー
	GSI.GLOBALS.header
    = new GSI.Header(
      GSI.GLOBALS.map
    , {
          visible : ctrlSetting.header.visible
        , message : (CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.MESSAGE ? CONFIG.TOPMESSAGE.MESSAGE : null)
        , id      : (CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.ID      ? CONFIG.TOPMESSAGE.ID      : null)
        , expires : (CONFIG.TOPMESSAGE && CONFIG.TOPMESSAGE.EXPIRES ? CONFIG.TOPMESSAGE.EXPIRES : null)
      }
    );

	GSI.GLOBALS.footer = new GSI.Footer( GSI.GLOBALS.map, GSI.GLOBALS.bottomLeftSpacer, GSI.GLOBALS.bottomRightSpacer, "#map", "#footerbtn", "#footer", "image/system/footer_up.png", "image/system/footer_down.png",
		{ visible : ctrlSetting.contextMenu.visible, overlap:true } );
    if(viewSetting.footer){
        GSI.GLOBALS.footer.setVisible(viewSetting.footer);
    }
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.FOOTER     ] = { obj : GSI.GLOBALS.footer};

	// 地図メニュー
	new GSI.MapMenu(
      GSI.GLOBALS.map
    , CONFIG.MAPMENU
    , {
          visible         : ctrlSetting.infoMenu.visible
        , rootEffect      : CONFIG.EFFECTS.MENU.ROOT
        , otherEffect     : CONFIG.EFFECTS.MENU.OTHER
        , onMenuItemClick : function(id)
        {
            GSI.GLOBALS.viewListDialog.show();
        }
	  }
    );

	// 機能メニュー
	new GSI.MapMenu(
      GSI.GLOBALS.map
    , CONFIG.FUNCMENU
    , {
		visible : ctrlSetting.funcMenu.visible,
		position : 'right',
		rootEffect : CONFIG.EFFECTS.MENU.ROOT,
		otherEffect : CONFIG.EFFECTS.MENU.OTHER,
		getCheckState : function( id, defaultState )
		{
			if ( GSI.GLOBALS.onoffObjects[ id ] ) return GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['getter']]();
			else defaultState;
		},
		onCheckItemClick : function( id, checked )
		{
			if ( GSI.GLOBALS.onoffObjects[ id ] ) GSI.GLOBALS.onoffObjects[ id]['obj'][GSI.GLOBALS.onoffObjects[id]['setter']]( checked );
		},
		onMenuItemClick : function( id )
		{
			var windowSize = GSI.Utils.getScreenSize();
			switch ( id )
			{
			case 'measure':
			// 計測ダイアログ
				if ( GSI.GLOBALS.sakuzuDialog && GSI.GLOBALS.sakuzuDialog.getVisible() )
				{
					alert( '作図中は計測出来ません' );
					return;
				}
				if ( !GSI.GLOBALS.measureDialog )
					GSI.GLOBALS.measureDialog = new GSI.MeasureDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ left :windowSize.w - 300, top :40,effect : CONFIG.EFFECTS.DIALOG } );
				GSI.GLOBALS.measureDialog.show();

				break;

			case 'sakuzu':
			// 作図ダイアログ
				CONFIG.SAKUZU.SYMBOL.DEFAULTICON = CONFIG.SAKUZU.SYMBOL.INIT_DEFAULTICON;
				CONFIG.SAKUZU.SYMBOL.ICON_SCALE = CONFIG.SAKUZU.SYMBOL.INIT_ICON_SCALE;
				if ( GSI.GLOBALS.measureDialog && GSI.GLOBALS.measureDialog.getVisible() )
				{
					GSI.GLOBALS.measureDialog.hide();
				}
				if ( !GSI.GLOBALS.sakuzuDialog )
					GSI.GLOBALS.sakuzuDialog = new GSI.SakuzuDialog(
						GSI.GLOBALS.map,
						GSI.GLOBALS.sakuzuList,
						{
							width:350, left :windowSize.w - 370, top :45,
							effect : CONFIG.EFFECTS.DIALOG,
							resizable : ( GSI.Utils.Browser.isSmartMobile ? false : "e,w" )
						}
					);
				GSI.GLOBALS.sakuzuDialog.show();

				break;

			case 'gps':
			// 現在位置取得
				if (!GSI.GLOBALS.geoLocation) GSI.GLOBALS.geoLocation = new GSI.GeoLocation(GSI.GLOBALS.map);
				GSI.GLOBALS.geoLocation.getLocation();

				break;

			case 'share_file':
		    case 'share_link':
			case 'share_builtin':
			// 共有
				if (!GSI.GLOBALS.shareDialog) GSI.GLOBALS.shareDialog = new GSI.ShareDialog(
					GSI.GLOBALS.map, GSI.GLOBALS.pageStateManager, GSI.GLOBALS.layersJSON, GSI.GLOBALS.sakuzuList,
					{ width:350, left : 'center', top: 45, effect : CONFIG.EFFECTS.DIALOG, resizable: false } );
				var mode = GSI.ShareDialog.MODE.LINK;
				if ( id == 'share_file' ) mode = GSI.ShareDialog.MODE.FILE;
				if ( id == 'share_builtin' ) mode = GSI.ShareDialog.MODE.BUILTIN;
				GSI.GLOBALS.shareDialog.show(mode);

				break;

			case 'print':
			// 印刷
				if (!GSI.GLOBALS.pagePrinter) GSI.GLOBALS.pagePrinter =
					new GSI.PagePrinter(
						GSI.GLOBALS.map, GSI.GLOBALS.baseLayer,
						GSI.GLOBALS.mapLayerList,
						GSI.GLOBALS.sakuzuList,
						{
							latLngGrid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.LATLNGGRID ].obj ,
							utmGrid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.UTMGRID ].obj,
							jihokuLine : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.JIHOKULINE ].obj
						} );
				GSI.GLOBALS.pagePrinter.show();
				break;

			}
		}
	});

	// ズームコントロール
	GSI.GLOBALS.map.addControl(new L.Control.Zoom({position:"bottomleft"}));

	// 表示中レイヤーダイアログ
	var left = 8;
	var top  = GSI.GLOBALS.header.getHeight() + 8;
	var dlgVisible = GSI.GLOBALS.queryParams.getViewListDialogVisible();
	if(dlgVisible){
		left = 8;
		top  = GSI.GLOBALS.header.getHeight() + 8;
	}
	GSI.GLOBALS.viewListDialog
    = new GSI.ViewListDialog(
      GSI.GLOBALS.map
    , GSI.GLOBALS.mapLayerList
    , GSI.GLOBALS.cocoTileLayer
    , {
          left     : left
        , top      : top
        , width    : 320
        , visible  : dlgVisible
        , effect    : CONFIG.EFFECTS.DIALOG
        , resizable : ( GSI.Utils.Browser.isSmartMobile ? false : "all" )
      }
    );

	// 表示可能レイヤーダイアログ
	left = 8;
	top  = GSI.GLOBALS.header.getHeight() + 136;
	dlgVisible = GSI.GLOBALS.queryParams.getLayerTreeDialogVisible();
	if(dlgVisible){
        left = 8;
		top  = GSI.GLOBALS.header.getHeight() + 136;
	}
	GSI.GLOBALS.layerTreeDialog
    = new GSI.LayerTreeDialog(      
      GSI.GLOBALS.mapLayerList
    , GSI.GLOBALS.cocoTileLayer
    , {
          left        : left
        , top         : top
        , width       : 320
        , visible     : dlgVisible
        , effect      : CONFIG.EFFECTS.DIALOG
        , resizable   : ( GSI.Utils.Browser.isSmartMobile ? false : "all" ) //"all" ,
	    , currentPath : GSI.GLOBALS.queryParams.getCurrentPath()
      }
    );

	// 検索ダイアログ
	if( ctrlSetting.header.visible){
		GSI.GLOBALS.searchDialog
        = new GSI.SearchResultDialog(
          GSI.GLOBALS.map
        , {
             left         : 8
            , top         : 40
            , effect      : CONFIG.EFFECTS.DIALOG
            , resizable   : "all"
            , maxMarkerNum: CONFIG.SEARCHRESULTMAXMARKERNUM
          }
        );
		new GSI.Searcher(
          GSI.GLOBALS.map
        , GSI.GLOBALS.searchDialog
        , "#search_f"
        , "#query"
        , "#search_result"
        , { 
            visible : ctrlSetting.header.visible
          }
        );
	}

	// 共有作図情報がある場合ダイアログ生成
	GSI.GLOBALS.sakuzuList
    =  new GSI.SakuzuList(
      GSI.GLOBALS.map
    , GSI.GLOBALS.mapMouse
    , {
          url         : CONFIG.SAKUZU.SYMBOL.URL + CONFIG.SAKUZU.SYMBOL.DEFAULTICON
        , size        : CONFIG.SAKUZU.SYMBOL.ICONSIZE
        , anchor      : CONFIG.SAKUZU.SYMBOL.ICONANCHOR
        , _iconScale  : CONFIG.SAKUZU.SYMBOL.ICON_SCALE
      }
    , { 
          defaultList : GSI.ClientMode.sakuzuList
      }
    );

    // Layers.txt を追加
    GSI.GLOBALS.layersJSON.add(CONFIG.layers);

	// 画面サイズの調整
	var adjustWindow = function(){
		var size = GSI.Utils.getScreenSize();
		GSI.GLOBALS.header.refresh(size);
		$("#map" ).css( { top : GSI.GLOBALS.header.getHeight() + 'px' });
		GSI.GLOBALS.map.invalidateSize();
	};
	GSI.GLOBALS.header.on('topmessagechange', adjustWindow);
	$( window ).resize(adjustWindow);
	adjustWindow();
	
	// 初期位置設定
	GSI.GLOBALS.map.setView(startUpCenter, startUpZoom, {reset:true});
	
	// ページの状態管理
	GSI.GLOBALS.pageStateManager = new GSI.PageStateManager(GSI.GLOBALS.map, GSI.GLOBALS.baseLayer, GSI.GLOBALS.onoffObjects, GSI.GLOBALS.mapLayerList, GSI.GLOBALS.layerTreeDialog);

    // ファイル
    window.addEventListener(
      "dragover"
    , function(e){
            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = "copy";
     }        
    , false
    );

    window.addEventListener(
      "drop"
    , function(e){
        e.stopPropagation();
        e.preventDefault();

        var files = e.dataTransfer.files;
        if(files.length > 0){
            var fname = decodeURIComponent(files[0].name);

            var oReader = new FileReader();
            oReader.onload = function(e){
                if(e.target.readyState == FileReader.DONE){
                    var v = e.target.result;
                    GSI.GLOBALS.sakuzuList.loadFromText(v, fname);
                }
            };
            oReader.readAsText(files[0]);
        }
      }
    , false
    );

    GSI.GLOBALS.hash_options = new GSI.HashOptions(GSI.GLOBALS.map);
    GSI.GLOBALS.hash.bind(GSI.GLOBALS.hash_options, GSI.GLOBALS.hash_options.Callback);
};

function Vectors(){
    var ret = null;

    oMapLayers = GSI.GLOBALS.sakuzuList;
    if(oMapLayers != null){
        var oData = oMapLayers.getData();
        var nMax  = oData.length;
        if(nMax > 0){
            ret = oData;
        }
    }
    return ret;
};

function HelpButton(){
    var windowSize = GSI.Utils.getScreenSize();
    if ( GSI.GLOBALS.HelpDialog && GSI.GLOBALS.HelpDialog.getVisible() ){
     GSI.GLOBALS.HelpDialog.hide();
    }
    GSI.GLOBALS.HelpDialog = new GSI.HelpDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ left :windowSize.w - 215, top :45,effect : CONFIG.EFFECTS.DIALOG } );
    GSI.GLOBALS.HelpDialog.show();
};

GSI.MeshDeclination ={
"684827":"8.30,8°20′",
"684826":"8.34,8°20′",
"684825":"8.37,8°20′",
"684824":"8.41,8°20′",
"684817":"8.28,8°20′",
"684816":"8.31,8°20′",
"684815":"8.35,8°20′",
"684814":"8.38,8°20′",
"684813":"8.42,8°30′",
"684807":"8.25,8°20′",
"684806":"8.29,8°20′",
"684805":"8.32,8°20′",
"684804":"8.36,8°20′",
"684803":"8.39,8°20′",
"684802":"8.43,8°30′",
"684800":"8.50,8°30′",
"684717":"8.56,8°30′",
"684707":"8.53,8°30′",
"684706":"8.57,8°30′",
"684210":"9.95,10° 0′",
"684201":"10.31,10°20′",
"684200":"10.03,10° 0′",
"684127":"10.15,10°10′",
"684126":"10.25,10°20′",
"684117":"10.10,10°10′",
"684116":"10.29,10°20′",
"684115":"10.31,10°20′",
"684110":"8.97,9° 0′",
"684107":"10.08,10° 0′",
"684106":"10.29,10°20′",
"684105":"10.38,10°20′",
"684100":"9.05,9° 0′",
"684027":"9.15,9°10′",
"684017":"8.95,9° 0′",
"684007":"8.98,9° 0′",
"674876":"8.26,8°20′",
"674875":"8.30,8°20′",
"674874":"8.33,8°20′",
"674873":"8.37,8°20′",
"674872":"8.40,8°20′",
"674871":"8.44,8°30′",
"674870":"8.47,8°30′",
"674863":"8.34,8°20′",
"674862":"8.38,8°20′",
"674861":"8.41,8°20′",
"674860":"8.45,8°30′",
"674851":"8.39,8°20′",
"674850":"8.42,8°30′",
"674840":"8.40,8°20′",
"674777":"8.51,8°30′",
"674776":"8.54,8°30′",
"674767":"8.48,8°30′",
"674766":"8.52,8°30′",
"674765":"8.55,8°30′",
"674757":"8.46,8°30′",
"674756":"8.49,8°30′",
"674755":"8.52,8°30′",
"674754":"8.56,8°30′",
"674753":"8.59,8°40′",
"674747":"8.43,8°30′",
"674746":"8.46,8°30′",
"674745":"8.50,8°30′",
"674744":"8.53,8°30′",
"674737":"8.41,8°20′",
"674736":"8.44,8°30′",
"674735":"8.47,8°30′",
"674734":"8.50,8°30′",
"674733":"8.54,8°30′",
"674725":"8.45,8°30′",
"674724":"8.48,8°30′",
"674723":"8.51,8°30′",
"674722":"8.54,8°30′",
"674721":"8.57,8°30′",
"674714":"8.45,8°30′",
"674713":"8.48,8°30′",
"674712":"8.51,8°30′",
"674711":"8.55,8°30′",
"674710":"8.58,8°30′",
"674703":"8.46,8°30′",
"674702":"8.49,8°30′",
"674701":"8.52,8°30′",
"674272":"10.78,10°50′",
"674271":"10.66,10°40′",
"674270":"10.29,10°20′",
"674262":"10.72,10°40′",
"674261":"10.77,10°50′",
"674260":"10.47,10°30′",
"674253":"10.15,10°10′",
"674252":"10.51,10°30′",
"674251":"10.65,10°40′",
"674250":"10.44,10°30′",
"674244":"9.74,9°40′",
"674243":"10.10,10°10′",
"674242":"10.55,10°30′",
"674241":"10.68,10°40′",
"674240":"10.38,10°20′",
"674234":"9.90,9°50′",
"674233":"10.30,10°20′",
"674232":"10.85,10°50′",
"674231":"10.90,10°50′",
"674230":"10.31,10°20′",
"674225":"10.02,10° 0′",
"674224":"10.19,10°10′",
"674223":"10.50,10°30′",
"674222":"10.96,11° 0′",
"674221":"10.89,10°50′",
"674220":"10.15,10°10′",
"674216":"9.58,9°30′",
"674215":"9.92,10° 0′",
"674214":"10.23,10°10′",
"674213":"10.44,10°30′",
"674212":"10.71,10°40′",
"674211":"10.54,10°30′",
"674210":"9.82,9°50′",
"674207":"9.53,9°30′",
"674206":"9.38,9°20′",
"674205":"9.62,9°40′",
"674204":"10.01,10° 0′",
"674203":"10.31,10°20′",
"674202":"10.61,10°40′",
"674201":"10.37,10°20′",
"674200":"9.66,9°40′",
"674177":"10.14,10°10′",
"674176":"10.26,10°20′",
"674175":"10.41,10°20′",
"674174":"10.41,10°20′",
"674171":"9.75,9°50′",
"674170":"9.35,9°20′",
"674167":"10.22,10°10′",
"674166":"10.23,10°10′",
"674165":"10.36,10°20′",
"674164":"10.38,10°20′",
"674162":"10.16,10°10′",
"674161":"9.91,9°50′",
"674157":"10.20,10°10′",
"674156":"10.16,10°10′",
"674155":"10.24,10°10′",
"674154":"10.26,10°20′",
"674152":"10.06,10° 0′",
"674151":"9.88,9°50′",
"674147":"10.07,10° 0′",
"674146":"10.04,10° 0′",
"674145":"10.14,10°10′",
"674137":"9.84,9°50′",
"674136":"9.90,9°50′",
"674135":"10.10,10°10′",
"674127":"9.63,9°40′",
"674126":"9.79,9°50′",
"674125":"10.06,10° 0′",
"674117":"9.47,9°30′",
"674116":"9.76,9°50′",
"674107":"9.43,9°30′",
"674106":"9.73,9°40′",
"674077":"9.19,9°10′",
"664772":"8.46,8°30′",
"664771":"8.49,8°30′",
"664770":"8.52,8°30′",
"664762":"8.44,8°30′",
"664761":"8.47,8°30′",
"664760":"8.50,8°30′",
"664750":"8.47,8°30′",
"664677":"8.55,8°30′",
"664667":"8.53,8°30′",
"664661":"8.72,8°40′",
"664660":"8.75,8°50′",
"664657":"8.50,8°30′",
"664656":"8.53,8°30′",
"664654":"8.60,8°40′",
"664653":"8.63,8°40′",
"664652":"8.67,8°40′",
"664651":"8.70,8°40′",
"664650":"8.73,8°40′",
"664644":"8.57,8°30′",
"664643":"8.61,8°40′",
"664642":"8.65,8°40′",
"664641":"8.68,8°40′",
"664640":"8.72,8°40′",
"664632":"8.62,8°40′",
"664631":"8.67,8°40′",
"664630":"8.70,8°40′",
"664620":"8.70,8°40′",
"664547":"8.74,8°40′",
"664542":"8.80,8°50′",
"664537":"8.73,8°40′",
"664532":"8.76,8°50′",
"664531":"8.76,8°50′",
"664527":"8.73,8°40′",
"664526":"8.74,8°40′",
"664522":"8.73,8°40′",
"664521":"8.72,8°40′",
"664517":"8.74,8°40′",
"664516":"8.74,8°40′",
"664515":"8.74,8°40′",
"664512":"8.71,8°40′",
"664511":"8.70,8°40′",
"664510":"8.67,8°40′",
"664507":"8.73,8°40′",
"664506":"8.72,8°40′",
"664505":"8.72,8°40′",
"664501":"8.75,8°50′",
"664500":"8.73,8°40′",
"664412":"8.74,8°40′",
"664411":"8.82,8°50′",
"664410":"8.94,9° 0′",
"664407":"8.66,8°40′",
"664402":"8.69,8°40′",
"664401":"8.80,8°50′",
"664400":"8.93,9° 0′",
"664360":"9.86,9°50′",
"664351":"9.61,9°40′",
"664350":"9.73,9°40′",
"664343":"9.54,9°30′",
"664342":"9.55,9°30′",
"664341":"9.56,9°30′",
"664340":"9.63,9°40′",
"664334":"9.54,9°30′",
"664333":"9.54,9°30′",
"664332":"9.54,9°30′",
"664331":"9.55,9°30′",
"664330":"9.59,9°40′",
"664326":"9.32,9°20′",
"664325":"9.44,9°30′",
"664324":"9.45,9°30′",
"664323":"9.47,9°30′",
"664322":"9.50,9°30′",
"664321":"9.51,9°30′",
"664320":"9.56,9°30′",
"664317":"9.11,9°10′",
"664316":"9.27,9°20′",
"664315":"9.32,9°20′",
"664314":"9.25,9°20′",
"664313":"9.29,9°20′",
"664312":"9.41,9°20′",
"664311":"9.47,9°30′",
"664310":"9.53,9°30′",
"664307":"9.07,9° 0′",
"664306":"9.22,9°10′",
"664305":"9.25,9°20′",
"664304":"9.18,9°10′",
"664303":"9.24,9°10′",
"664302":"9.38,9°20′",
"664301":"9.43,9°30′",
"664300":"9.47,9°30′",
"664277":"9.75,9°50′",
"664276":"9.52,9°30′",
"664275":"9.58,9°30′",
"664274":"9.92,10° 0′",
"664273":"10.36,10°20′",
"664272":"10.80,10°50′",
"664271":"10.64,10°40′",
"664270":"9.90,9°50′",
"664267":"9.90,9°50′",
"664266":"9.75,9°50′",
"664265":"9.71,9°40′",
"664264":"9.91,9°50′",
"664263":"10.25,10°20′",
"664262":"10.68,10°40′",
"664261":"10.66,10°40′",
"664260":"10.11,10°10′",
"664257":"9.82,9°50′",
"664256":"9.79,9°50′",
"664255":"9.81,9°50′",
"664254":"9.93,10° 0′",
"664253":"10.08,10° 0′",
"664252":"10.24,10°10′",
"664251":"10.24,10°10′",
"664250":"10.01,10° 0′",
"664247":"9.71,9°40′",
"664246":"9.76,9°50′",
"664245":"9.85,9°50′",
"664244":"10.02,10° 0′",
"664243":"10.12,10°10′",
"664242":"10.08,10° 0′",
"664241":"9.95,10° 0′",
"664240":"9.84,9°50′",
"664237":"9.65,9°40′",
"664236":"9.72,9°40′",
"664235":"9.86,9°50′",
"664234":"10.07,10° 0′",
"664233":"10.21,10°10′",
"664232":"10.07,10° 0′",
"664231":"9.82,9°50′",
"664230":"9.73,9°40′",
"664227":"9.62,9°40′",
"664226":"9.66,9°40′",
"664225":"9.80,9°50′",
"664224":"10.05,10° 0′",
"664223":"10.21,10°10′",
"664222":"10.07,10° 0′",
"664221":"9.80,9°50′",
"664220":"9.70,9°40′",
"664217":"9.56,9°30′",
"664216":"9.55,9°30′",
"664215":"9.70,9°40′",
"664214":"10.06,10° 0′",
"664213":"10.26,10°20′",
"664212":"10.19,10°10′",
"664211":"9.90,9°50′",
"664210":"9.71,9°40′",
"664207":"9.47,9°30′",
"664206":"9.41,9°20′",
"664205":"9.64,9°40′",
"664204":"10.11,10°10′",
"664203":"10.36,10°20′",
"664202":"10.42,10°30′",
"664201":"10.19,10°10′",
"664200":"9.68,9°40′",
"664177":"9.56,9°30′",
"664176":"9.69,9°40′",
"664167":"9.73,9°40′",
"664166":"9.68,9°40′",
"664157":"9.80,9°50′",
"664156":"9.75,9°50′",
"664155":"9.83,9°50′",
"664153":"9.91,9°50′",
"664152":"9.91,9°50′",
"664147":"9.82,9°50′",
"664146":"9.87,9°50′",
"664145":"9.95,10° 0′",
"664142":"9.91,9°50′",
"664137":"9.82,9°50′",
"664136":"9.96,10° 0′",
"664135":"10.03,10° 0′",
"664127":"9.84,9°50′",
"664126":"9.98,10° 0′",
"664125":"10.02,10° 0′",
"664117":"9.80,9°50′",
"664116":"9.93,10° 0′",
"664115":"9.93,10° 0′",
"664107":"9.54,9°30′",
"664106":"9.65,9°40′",
"664105":"9.72,9°40′",
"654667":"8.25,8°20′",
"654666":"8.27,8°20′",
"654665":"8.30,8°20′",
"654657":"8.20,8°10′",
"654656":"8.22,8°10′",
"654655":"8.24,8°10′",
"654654":"8.27,8°20′",
"654646":"8.17,8°10′",
"654645":"8.19,8°10′",
"654644":"8.21,8°10′",
"654633":"8.15,8°10′",
"654632":"8.15,8°10′",
"654623":"8.07,8° 0′",
"654621":"8.05,8° 0′",
"654620":"8.02,8° 0′",
"654611":"7.94,8° 0′",
"654610":"7.89,7°50′",
"654601":"7.86,7°50′",
"654600":"7.78,7°50′",
"654576":"8.68,8°40′",
"654575":"8.68,8°40′",
"654574":"8.71,8°40′",
"654571":"8.92,9° 0′",
"654570":"8.94,9° 0′",
"654565":"8.63,8°40′",
"654564":"8.69,8°40′",
"654563":"8.78,8°50′",
"654560":"9.16,9°10′",
"654554":"8.63,8°40′",
"654553":"8.76,8°50′",
"654550":"9.18,9°10′",
"654544":"8.55,8°30′",
"654543":"8.70,8°40′",
"654541":"8.92,9° 0′",
"654540":"8.92,9° 0′",
"654534":"8.42,8°30′",
"654532":"8.80,8°50′",
"654531":"8.76,8°50′",
"654530":"8.55,8°30′",
"654522":"8.80,8°50′",
"654521":"8.73,8°40′",
"654520":"8.37,8°20′",
"654517":"7.83,7°50′",
"654516":"7.77,7°50′",
"654512":"8.64,8°40′",
"654511":"8.70,8°40′",
"654510":"8.45,8°30′",
"654507":"7.68,7°40′",
"654506":"7.56,7°30′",
"654505":"7.46,7°30′",
"654504":"7.47,7°30′",
"654502":"8.19,8°10′",
"654501":"8.40,8°20′",
"654500":"8.43,8°30′",
"654477":"8.83,8°50′",
"654476":"8.74,8°40′",
"654475":"8.74,8°40′",
"654474":"8.75,8°50′",
"654473":"8.71,8°40′",
"654472":"8.74,8°40′",
"654471":"8.88,8°50′",
"654470":"8.98,9° 0′",
"654467":"9.06,9° 0′",
"654466":"8.95,9° 0′",
"654465":"8.98,9° 0′",
"654464":"9.04,9° 0′",
"654463":"8.94,9° 0′",
"654462":"8.81,8°50′",
"654461":"8.85,8°50′",
"654460":"8.98,9° 0′",
"654457":"9.14,9°10′",
"654456":"9.10,9°10′",
"654455":"9.22,9°10′",
"654454":"9.37,9°20′",
"654453":"9.21,9°10′",
"654452":"8.82,8°50′",
"654451":"8.69,8°40′",
"654450":"8.90,8°50′",
"654447":"8.90,8°50′",
"654446":"8.98,9° 0′",
"654445":"9.21,9°10′",
"654444":"9.45,9°30′",
"654443":"9.28,9°20′",
"654442":"8.77,8°50′",
"654441":"8.55,8°30′",
"654440":"8.82,8°50′",
"654437":"8.47,8°30′",
"654436":"8.63,8°40′",
"654435":"8.97,9° 0′",
"654434":"9.29,9°20′",
"654433":"9.19,9°10′",
"654432":"8.69,8°40′",
"654431":"8.41,8°20′",
"654430":"8.65,8°40′",
"654427":"8.19,8°10′",
"654426":"8.33,8°20′",
"654425":"8.73,8°40′",
"654424":"9.19,9°10′",
"654423":"9.19,9°10′",
"654422":"8.66,8°40′",
"654421":"8.19,8°10′",
"654420":"8.28,8°20′",
"654417":"8.30,8°20′",
"654416":"8.35,8°20′",
"654415":"8.69,8°40′",
"654414":"9.20,9°10′",
"654413":"9.29,9°20′",
"654412":"8.74,8°40′",
"654411":"8.08,8° 0′",
"654410":"7.98,8° 0′",
"654407":"8.47,8°30′",
"654406":"8.54,8°30′",
"654405":"8.82,8°50′",
"654404":"9.23,9°10′",
"654403":"9.33,9°20′",
"654402":"8.90,8°50′",
"654401":"8.28,8°20′",
"654400":"8.08,8° 0′",
"654377":"9.05,9° 0′",
"654376":"9.20,9°10′",
"654375":"9.34,9°20′",
"654374":"9.40,9°20′",
"654373":"9.45,9°30′",
"654372":"9.45,9°30′",
"654371":"9.39,9°20′",
"654370":"9.39,9°20′",
"654367":"9.09,9°10′",
"654366":"9.20,9°10′",
"654365":"9.39,9°20′",
"654364":"9.59,9°40′",
"654363":"9.67,9°40′",
"654362":"9.53,9°30′",
"654361":"9.37,9°20′",
"654360":"9.38,9°20′",
"654357":"9.14,9°10′",
"654356":"9.21,9°10′",
"654355":"9.32,9°20′",
"654354":"9.57,9°30′",
"654353":"9.69,9°40′",
"654352":"9.55,9°30′",
"654351":"9.38,9°20′",
"654350":"9.40,9°20′",
"654347":"9.15,9°10′",
"654346":"9.19,9°10′",
"654345":"9.20,9°10′",
"654344":"9.33,9°20′",
"654343":"9.40,9°20′",
"654342":"9.34,9°20′",
"654341":"9.31,9°20′",
"654340":"9.39,9°20′",
"654337":"9.01,9° 0′",
"654336":"9.15,9°10′",
"654335":"9.14,9°10′",
"654334":"9.07,9° 0′",
"654333":"9.00,9° 0′",
"654332":"9.03,9° 0′",
"654331":"9.17,9°10′",
"654330":"9.34,9°20′",
"654327":"8.73,8°40′",
"654326":"9.10,9°10′",
"654325":"9.19,9°10′",
"654324":"9.01,9° 0′",
"654323":"8.84,8°50′",
"654322":"8.90,8°50′",
"654321":"9.10,9°10′",
"654320":"9.29,9°20′",
"654317":"8.47,8°30′",
"654316":"9.03,9° 0′",
"654315":"9.25,9°20′",
"654314":"9.13,9°10′",
"654313":"8.97,9° 0′",
"654312":"9.00,9° 0′",
"654311":"9.13,9°10′",
"654310":"9.28,9°20′",
"654307":"8.44,8°30′",
"654306":"8.94,9° 0′",
"654305":"9.20,9°10′",
"654304":"9.21,9°10′",
"654303":"9.16,9°10′",
"654302":"9.16,9°10′",
"654301":"9.20,9°10′",
"654300":"9.28,9°20′",
"654277":"9.41,9°20′",
"654276":"9.35,9°20′",
"654275":"9.58,9°30′",
"654274":"10.00,10° 0′",
"654273":"10.16,10°10′",
"654272":"10.62,10°40′",
"654271":"10.70,10°40′",
"654270":"9.68,9°40′",
"654267":"9.47,9°30′",
"654266":"9.48,9°30′",
"654265":"9.62,9°40′",
"654264":"9.75,9°50′",
"654263":"9.72,9°40′",
"654262":"10.36,10°20′",
"654261":"10.78,10°50′",
"654260":"9.78,9°50′",
"654257":"9.55,9°30′",
"654256":"9.64,9°40′",
"654255":"9.70,9°40′",
"654254":"9.67,9°40′",
"654253":"9.42,9°30′",
"654252":"9.73,9°40′",
"654251":"10.31,10°20′",
"654250":"10.22,10°10′",
"654247":"9.54,9°30′",
"654246":"9.64,9°40′",
"654245":"9.67,9°40′",
"654244":"9.65,9°40′",
"654243":"9.45,9°30′",
"654242":"9.15,9°10′",
"654241":"9.69,9°40′",
"654240":"10.59,10°40′",
"654237":"9.48,9°30′",
"654236":"9.58,9°30′",
"654235":"9.64,9°40′",
"654234":"9.71,9°40′",
"654233":"9.58,9°30′",
"654232":"9.00,9° 0′",
"654231":"8.95,9° 0′",
"654230":"9.95,10° 0′",
"654227":"9.44,9°30′",
"654226":"9.57,9°30′",
"654225":"9.70,9°40′",
"654224":"9.84,9°50′",
"654223":"9.73,9°40′",
"654222":"9.10,9°10′",
"654221":"8.50,8°30′",
"654220":"9.01,9° 0′",
"654217":"9.43,9°30′",
"654216":"9.58,9°30′",
"654215":"9.75,9°50′",
"654214":"9.90,9°50′",
"654213":"9.75,9°50′",
"654212":"9.19,9°10′",
"654211":"8.68,8°40′",
"654210":"8.72,8°40′",
"654207":"9.40,9°20′",
"654206":"9.55,9°30′",
"654205":"9.72,9°40′",
"654204":"9.80,9°50′",
"654203":"9.61,9°40′",
"654202":"9.19,9°10′",
"654201":"8.89,8°50′",
"654200":"8.87,8°50′",
"654177":"9.01,9° 0′",
"654176":"9.12,9°10′",
"654175":"9.38,9°20′",
"654174":"9.58,9°30′",
"654167":"8.78,8°50′",
"654166":"8.72,8°40′",
"654165":"9.09,9°10′",
"654164":"9.44,9°30′",
"654163":"9.65,9°40′",
"654157":"9.39,9°20′",
"654156":"8.78,8°50′",
"654155":"8.98,9° 0′",
"654154":"9.41,9°20′",
"654153":"9.67,9°40′",
"654152":"9.78,9°50′",
"654147":"10.25,10°20′",
"654146":"9.03,9° 0′",
"654145":"9.01,9° 0′",
"654144":"9.54,9°30′",
"654143":"9.79,9°50′",
"654142":"9.84,9°50′",
"654137":"10.08,10° 0′",
"654136":"9.17,9°10′",
"654135":"9.22,9°10′",
"654134":"9.80,9°50′",
"654133":"9.92,10° 0′",
"654132":"9.88,9°50′",
"654127":"9.34,9°20′",
"654126":"9.16,9°10′",
"654125":"9.38,9°20′",
"654124":"9.87,9°50′",
"654123":"9.88,9°50′",
"654122":"9.84,9°50′",
"654117":"9.01,9° 0′",
"654116":"9.06,9° 0′",
"654115":"9.34,9°20′",
"654114":"9.65,9°40′",
"654113":"9.67,9°40′",
"654112":"9.72,9°40′",
"654107":"8.97,9° 0′",
"654106":"9.06,9° 0′",
"654105":"9.31,9°20′",
"654104":"9.49,9°30′",
"654103":"9.58,9°30′",
"654004":"9.80,9°50′",
"654003":"9.71,9°40′",
"654002":"9.64,9°40′",
"644576":"7.42,7°30′",
"644575":"7.23,7°10′",
"644574":"7.11,7°10′",
"644573":"7.28,7°20′",
"644572":"7.65,7°40′",
"644571":"7.90,7°50′",
"644570":"8.11,8°10′",
"644565":"7.18,7°10′",
"644564":"7.02,7° 0′",
"644563":"7.10,7°10′",
"644562":"7.33,7°20′",
"644561":"7.50,7°30′",
"644560":"7.71,7°40′",
"644554":"7.16,7°10′",
"644553":"7.19,7°10′",
"644552":"7.29,7°20′",
"644551":"7.38,7°20′",
"644550":"7.56,7°30′",
"644541":"7.47,7°30′",
"644540":"7.61,7°40′",
"644530":"7.72,7°40′",
"644477":"8.35,8°20′",
"644476":"8.56,8°30′",
"644475":"8.83,8°50′",
"644474":"9.11,9°10′",
"644473":"9.23,9°10′",
"644472":"9.01,9° 0′",
"644471":"8.58,8°30′",
"644470":"8.37,8°20′",
"644467":"8.04,8° 0′",
"644466":"8.34,8°20′",
"644465":"8.57,8°30′",
"644464":"8.74,8°40′",
"644463":"8.87,8°50′",
"644462":"8.78,8°50′",
"644461":"8.57,8°30′",
"644460":"8.49,8°30′",
"644457":"7.86,7°50′",
"644456":"8.13,8°10′",
"644455":"8.31,8°20′",
"644454":"8.39,8°20′",
"644453":"8.46,8°30′",
"644452":"8.42,8°30′",
"644451":"8.38,8°20′",
"644450":"8.48,8°30′",
"644447":"7.83,7°50′",
"644446":"8.05,8° 0′",
"644445":"8.20,8°10′",
"644444":"8.28,8°20′",
"644443":"8.30,8°20′",
"644442":"8.26,8°20′",
"644441":"8.30,8°20′",
"644440":"8.47,8°30′",
"644437":"7.88,7°50′",
"644436":"8.05,8° 0′",
"644435":"8.21,8°10′",
"644434":"8.31,8°20′",
"644433":"8.33,8°20′",
"644432":"8.30,8°20′",
"644431":"8.33,8°20′",
"644430":"8.48,8°30′",
"644377":"8.51,8°30′",
"644376":"8.78,8°50′",
"644375":"9.00,9° 0′",
"644374":"9.17,9°10′",
"644373":"9.26,9°20′",
"644372":"9.24,9°10′",
"644371":"9.21,9°10′",
"644370":"9.26,9°20′",
"644367":"8.53,8°30′",
"644366":"8.57,8°30′",
"644365":"8.67,8°40′",
"644364":"8.93,9° 0′",
"644363":"9.14,9°10′",
"644362":"9.13,9°10′",
"644361":"9.11,9°10′",
"644360":"9.19,9°10′",
"644357":"8.54,8°30′",
"644356":"8.48,8°30′",
"644355":"8.49,8°30′",
"644354":"8.73,8°40′",
"644353":"8.95,9° 0′",
"644352":"8.95,9° 0′",
"644351":"8.99,9° 0′",
"644350":"9.13,9°10′",
"644347":"8.60,8°40′",
"644346":"8.61,8°40′",
"644345":"8.61,8°40′",
"644344":"8.77,8°50′",
"644343":"8.91,8°50′",
"644342":"8.88,8°50′",
"644341":"8.94,9° 0′",
"644340":"9.11,9°10′",
"644337":"8.70,8°40′",
"644336":"8.83,8°50′",
"644335":"8.81,8°50′",
"644334":"8.83,8°50′",
"644333":"8.88,8°50′",
"644332":"8.89,8°50′",
"644331":"8.95,9° 0′",
"644330":"9.12,9°10′",
"644327":"8.81,8°50′",
"644326":"8.93,9° 0′",
"644325":"8.77,8°50′",
"644324":"8.60,8°40′",
"644323":"8.68,8°40′",
"644322":"8.85,8°50′",
"644321":"8.97,9° 0′",
"644320":"9.12,9°10′",
"644316":"8.85,8°50′",
"644315":"8.57,8°30′",
"644314":"8.32,8°20′",
"644313":"8.48,8°30′",
"644312":"8.81,8°50′",
"644311":"8.99,9° 0′",
"644310":"9.11,9°10′",
"644305":"8.46,8°30′",
"644304":"8.31,8°20′",
"644303":"8.53,8°30′",
"644302":"8.83,8°50′",
"644301":"8.98,9° 0′",
"644300":"9.10,9°10′",
"644277":"9.36,9°20′",
"644276":"9.50,9°30′",
"644275":"9.64,9°40′",
"644274":"9.65,9°40′",
"644273":"9.42,9°30′",
"644272":"9.14,9°10′",
"644271":"9.03,9° 0′",
"644270":"9.05,9° 0′",
"644267":"9.30,9°20′",
"644266":"9.45,9°30′",
"644265":"9.60,9°40′",
"644264":"9.60,9°40′",
"644263":"9.41,9°20′",
"644262":"9.22,9°10′",
"644261":"9.19,9°10′",
"644260":"9.25,9°20′",
"644257":"9.26,9°20′",
"644256":"9.41,9°20′",
"644255":"9.58,9°30′",
"644254":"9.65,9°40′",
"644253":"9.59,9°40′",
"644252":"9.46,9°30′",
"644251":"9.41,9°20′",
"644250":"9.46,9°30′",
"644247":"9.26,9°20′",
"644246":"9.40,9°20′",
"644245":"9.55,9°30′",
"644244":"9.68,9°40′",
"644243":"9.72,9°40′",
"644242":"9.66,9°40′",
"644241":"9.57,9°30′",
"644240":"9.59,9°40′",
"644237":"9.28,9°20′",
"644236":"9.38,9°20′",
"644235":"9.47,9°30′",
"644234":"9.56,9°30′",
"644233":"9.63,9°40′",
"644232":"9.61,9°40′",
"644231":"9.55,9°30′",
"644230":"9.56,9°30′",
"644227":"9.26,9°20′",
"644226":"9.34,9°20′",
"644225":"9.35,9°20′",
"644224":"9.36,9°20′",
"644223":"9.37,9°20′",
"644222":"9.37,9°20′",
"644221":"9.39,9°20′",
"644220":"9.46,9°30′",
"644217":"9.23,9°10′",
"644216":"9.28,9°20′",
"644215":"9.25,9°20′",
"644214":"9.20,9°10′",
"644213":"9.15,9°10′",
"644212":"9.15,9°10′",
"644211":"9.20,9°10′",
"644210":"9.40,9°20′",
"644207":"9.19,9°10′",
"644206":"9.21,9°10′",
"644205":"9.17,9°10′",
"644204":"9.13,9°10′",
"644203":"9.09,9°10′",
"644202":"9.06,9° 0′",
"644201":"9.09,9°10′",
"644200":"9.39,9°20′",
"644177":"9.11,9°10′",
"644176":"9.19,9°10′",
"644175":"9.30,9°20′",
"644174":"9.43,9°30′",
"644173":"9.61,9°40′",
"644172":"9.80,9°50′",
"644167":"9.30,9°20′",
"644166":"9.29,9°20′",
"644165":"9.26,9°20′",
"644164":"9.32,9°20′",
"644163":"9.55,9°30′",
"644162":"9.80,9°50′",
"644161":"9.91,9°50′",
"644160":"9.89,9°50′",
"644157":"9.51,9°30′",
"644156":"9.42,9°30′",
"644155":"9.23,9°10′",
"644154":"9.16,9°10′",
"644153":"9.35,9°20′",
"644152":"9.66,9°40′",
"644151":"9.86,9°50′",
"644150":"9.81,9°50′",
"644147":"9.62,9°40′",
"644146":"9.45,9°30′",
"644145":"9.17,9°10′",
"644144":"9.06,9° 0′",
"644143":"9.16,9°10′",
"644142":"9.47,9°30′",
"644141":"9.82,9°50′",
"644140":"9.79,9°50′",
"644137":"9.53,9°30′",
"644136":"9.31,9°20′",
"644135":"9.08,9° 0′",
"644134":"9.07,9° 0′",
"644133":"9.06,9° 0′",
"644132":"9.25,9°20′",
"644131":"9.66,9°40′",
"644130":"9.78,9°50′",
"644127":"9.45,9°30′",
"644126":"9.23,9°10′",
"644125":"9.01,9° 0′",
"644124":"9.02,9° 0′",
"644123":"8.96,9° 0′",
"644122":"9.02,9° 0′",
"644121":"9.41,9°20′",
"644120":"9.69,9°40′",
"644117":"9.57,9°30′",
"644116":"9.38,9°20′",
"644115":"9.03,9° 0′",
"644114":"8.88,8°50′",
"644113":"8.83,8°50′",
"644112":"8.87,8°50′",
"644111":"9.20,9°10′",
"644110":"9.53,9°30′",
"644107":"9.71,9°40′",
"644106":"9.58,9°30′",
"644105":"9.16,9°10′",
"644104":"8.87,8°50′",
"644103":"8.78,8°50′",
"644102":"8.83,8°50′",
"644101":"9.06,9° 0′",
"644100":"9.36,9°20′",
"644075":"9.73,9°40′",
"644074":"9.79,9°50′",
"644073":"9.70,9°40′",
"644072":"9.63,9°40′",
"644067":"9.72,9°40′",
"644066":"9.57,9°30′",
"644065":"9.64,9°40′",
"644064":"9.76,9°50′",
"644063":"9.73,9°40′",
"644062":"9.69,9°40′",
"644057":"9.59,9°40′",
"644056":"9.48,9°30′",
"644055":"9.64,9°40′",
"644054":"9.84,9°50′",
"644053":"9.88,9°50′",
"644047":"9.52,9°30′",
"644046":"9.43,9°30′",
"644045":"9.70,9°40′",
"644044":"10.05,10° 0′",
"644043":"10.14,10°10′",
"644037":"9.56,9°30′",
"644036":"9.48,9°30′",
"644035":"9.78,9°50′",
"644034":"10.20,10°10′",
"644033":"10.29,10°20′",
"644027":"9.68,9°40′",
"644026":"9.68,9°40′",
"644025":"9.94,10° 0′",
"644024":"10.20,10°10′",
"644023":"10.13,10°10′",
"644022":"9.96,10° 0′",
"644017":"9.69,9°40′",
"644016":"9.76,9°50′",
"644015":"9.90,9°50′",
"644014":"9.89,9°50′",
"644013":"9.66,9°40′",
"644012":"9.52,9°30′",
"644011":"9.63,9°40′",
"644007":"9.53,9°30′",
"644006":"9.48,9°30′",
"644005":"9.29,9°20′",
"644004":"9.06,9° 0′",
"644003":"8.94,9° 0′",
"644002":"9.02,9° 0′",
"644001":"9.31,9°20′",
"644000":"9.60,9°40′",
"643907":"9.69,9°40′",
"643906":"9.70,9°40′",
"634375":"8.52,8°30′",
"634374":"8.54,8°30′",
"634373":"8.71,8°40′",
"634372":"8.83,8°50′",
"634371":"8.91,8°50′",
"634370":"9.04,9° 0′",
"634364":"8.69,8°40′",
"634363":"8.79,8°50′",
"634362":"8.80,8°50′",
"634361":"8.83,8°50′",
"634360":"8.97,9° 0′",
"634353":"8.76,8°50′",
"634352":"8.78,8°50′",
"634351":"8.85,8°50′",
"634350":"8.99,9° 0′",
"634343":"8.71,8°40′",
"634342":"8.76,8°50′",
"634341":"8.87,8°50′",
"634340":"9.01,9° 0′",
"634332":"8.72,8°40′",
"634331":"8.84,8°50′",
"634330":"8.99,9° 0′",
"634322":"8.72,8°40′",
"634321":"8.82,8°50′",
"634320":"8.96,9° 0′",
"634312":"8.78,8°50′",
"634311":"8.84,8°50′",
"634310":"8.94,9° 0′",
"634302":"8.87,8°50′",
"634301":"8.93,9° 0′",
"634300":"8.97,9° 0′",
"634277":"9.13,9°10′",
"634276":"9.14,9°10′",
"634275":"9.11,9°10′",
"634274":"9.08,9° 0′",
"634273":"9.10,9°10′",
"634272":"9.12,9°10′",
"634271":"9.13,9°10′",
"634270":"9.35,9°20′",
"634267":"9.08,9° 0′",
"634266":"9.11,9°10′",
"634265":"9.05,9° 0′",
"634264":"8.98,9° 0′",
"634263":"9.04,9° 0′",
"634262":"9.19,9°10′",
"634261":"9.23,9°10′",
"634260":"9.31,9°20′",
"634257":"9.09,9°10′",
"634256":"9.14,9°10′",
"634255":"9.07,9° 0′",
"634254":"8.89,8°50′",
"634253":"8.91,8°50′",
"634252":"9.15,9°10′",
"634251":"9.28,9°20′",
"634250":"9.29,9°20′",
"634247":"9.13,9°10′",
"634246":"9.25,9°20′",
"634245":"9.27,9°20′",
"634244":"9.07,9° 0′",
"634243":"8.95,9° 0′",
"634242":"9.13,9°10′",
"634241":"9.27,9°20′",
"634237":"9.15,9°10′",
"634236":"9.35,9°20′",
"634235":"9.51,9°30′",
"634234":"9.39,9°20′",
"634233":"9.18,9°10′",
"634232":"9.18,9°10′",
"634227":"9.13,9°10′",
"634226":"9.34,9°20′",
"634225":"9.54,9°30′",
"634224":"9.51,9°30′",
"634217":"9.09,9°10′",
"634216":"9.25,9°20′",
"634177":"9.66,9°40′",
"634176":"9.60,9°40′",
"634175":"9.24,9°10′",
"634174":"8.96,9° 0′",
"634173":"8.81,8°50′",
"634172":"8.79,8°50′",
"634171":"8.95,9° 0′",
"634170":"9.30,9°20′",
"634167":"9.47,9°30′",
"634166":"9.44,9°30′",
"634163":"8.84,8°50′",
"634162":"8.76,8°50′",
"634161":"8.85,8°50′",
"634160":"9.29,9°20′",
"634152":"8.76,8°50′",
"634151":"8.79,8°50′",
"634150":"9.19,9°10′",
"634140":"9.07,9° 0′",
"634130":"9.04,9° 0′",
"634077":"9.54,9°30′",
"634076":"9.24,9°10′",
"634075":"8.58,8°30′",
"634074":"8.22,8°10′",
"634073":"8.45,8°30′",
"634072":"8.89,8°50′",
"634071":"9.27,9°20′",
"634070":"9.56,9°30′",
"634067":"9.66,9°40′",
"634066":"9.28,9°20′",
"634065":"8.40,8°20′",
"634064":"8.06,8° 0′",
"634063":"8.57,8°30′",
"634062":"9.23,9°10′",
"634061":"9.59,9°40′",
"634060":"9.70,9°40′",
"634057":"9.59,9°40′",
"634056":"9.35,9°20′",
"634052":"9.75,9°50′",
"634051":"9.99,10° 0′",
"634050":"9.85,9°50′",
"634047":"9.35,9°20′",
"634042":"10.05,10° 0′",
"634041":"10.17,10°10′",
"634040":"9.75,9°50′",
"634037":"9.15,9°10′",
"634032":"9.94,10° 0′",
"634031":"10.02,10° 0′",
"634030":"9.63,9°40′",
"634023":"9.16,9°10′",
"634022":"9.51,9°30′",
"634021":"9.63,9°40′",
"634020":"9.73,9°40′",
"634016":"8.84,8°50′",
"634015":"8.73,8°40′",
"634014":"8.71,8°40′",
"634013":"8.91,8°50′",
"634012":"9.18,9°10′",
"634011":"9.29,9°20′",
"634010":"9.70,9°40′",
"634007":"8.83,8°50′",
"634006":"8.70,8°40′",
"634005":"8.62,8°40′",
"634004":"8.61,8°40′",
"634003":"8.81,8°50′",
"634002":"9.19,9°10′",
"634001":"9.32,9°20′",
"634000":"9.60,9°40′",
"633977":"9.64,9°40′",
"633976":"9.65,9°40′",
"633967":"9.64,9°40′",
"633966":"9.59,9°40′",
"633957":"9.60,9°40′",
"633956":"9.50,9°30′",
"633947":"9.39,9°20′",
"633946":"9.40,9°20′",
"633937":"9.42,9°30′",
"633936":"9.52,9°30′",
"633934":"9.74,9°40′",
"633927":"9.97,10° 0′",
"633926":"10.01,10° 0′",
"633924":"9.85,9°50′",
"633923":"9.80,9°50′",
"633917":"10.30,10°20′",
"633914":"9.93,10° 0′",
"633913":"9.84,9°50′",
"633903":"9.85,9°50′",
"624372":"8.94,9° 0′",
"624371":"9.02,9° 0′",
"624362":"8.92,9° 0′",
"624161":"9.25,9°20′",
"624160":"9.38,9°20′",
"624151":"8.91,8°50′",
"624150":"9.14,9°10′",
"624140":"8.92,9° 0′",
"624113":"8.69,8°40′",
"624111":"9.30,9°20′",
"624110":"9.47,9°30′",
"624103":"8.63,8°40′",
"624102":"8.97,9° 0′",
"624101":"9.33,9°20′",
"624100":"9.49,9°30′",
"624077":"8.89,8°50′",
"624076":"8.59,8°40′",
"624075":"8.66,8°40′",
"624074":"8.69,8°40′",
"624073":"8.85,8°50′",
"624072":"9.29,9°20′",
"624071":"9.60,9°40′",
"624070":"9.70,9°40′",
"624067":"9.07,9° 0′",
"624066":"8.75,8°50′",
"624065":"8.81,8°50′",
"624064":"8.80,8°50′",
"624063":"8.83,8°50′",
"624062":"9.20,9°10′",
"624061":"9.63,9°40′",
"624060":"9.80,9°50′",
"624057":"9.12,9°10′",
"624056":"8.99,9° 0′",
"624055":"8.96,9° 0′",
"624054":"8.84,8°50′",
"624053":"8.74,8°40′",
"624052":"9.02,9° 0′",
"624051":"9.49,9°30′",
"624050":"9.77,9°50′",
"624047":"9.11,9°10′",
"624045":"9.12,9°10′",
"624044":"8.99,9° 0′",
"624043":"8.90,8°50′",
"624042":"9.07,9° 0′",
"624041":"9.43,9°30′",
"624040":"9.70,9°40′",
"624033":"9.47,9°30′",
"624032":"9.43,9°30′",
"624031":"9.43,9°30′",
"624030":"9.60,9°40′",
"624027":"9.41,9°20′",
"624023":"9.88,9°50′",
"624022":"9.63,9°40′",
"624021":"9.27,9°20′",
"624020":"9.32,9°20′",
"624017":"9.44,9°30′",
"624016":"9.38,9°20′",
"624012":"9.38,9°20′",
"624011":"8.95,9° 0′",
"624010":"8.96,9° 0′",
"624007":"9.39,9°20′",
"624006":"9.28,9°20′",
"624002":"9.13,9°10′",
"624001":"8.80,8°50′",
"624000":"8.81,8°50′",
"623937":"9.74,9°40′",
"623927":"9.54,9°30′",
"623923":"9.56,9°30′",
"623922":"9.55,9°30′",
"623913":"9.49,9°30′",
"623912":"9.50,9°30′",
"623906":"9.27,9°20′",
"614173":"8.53,8°30′",
"614172":"8.84,8°50′",
"614171":"9.21,9°10′",
"614170":"9.40,9°20′",
"614163":"8.36,8°20′",
"614162":"8.64,8°40′",
"614161":"9.02,9° 0′",
"614160":"9.24,9°10′",
"614153":"8.19,8°10′",
"614152":"8.52,8°30′",
"614151":"8.93,9° 0′",
"614143":"8.05,8° 0′",
"614142":"8.54,8°30′",
"614141":"9.03,9° 0′",
"614133":"7.95,8° 0′",
"614132":"8.57,8°30′",
"614131":"9.11,9°10′",
"614130":"9.04,9° 0′",
"614123":"7.84,7°50′",
"614122":"8.45,8°30′",
"614121":"9.04,9° 0′",
"614120":"9.00,9° 0′",
"614113":"7.70,7°40′",
"614112":"8.27,8°20′",
"614111":"8.90,8°50′",
"614110":"8.98,9° 0′",
"614103":"7.62,7°40′",
"614102":"8.16,8°10′",
"614101":"8.79,8°50′",
"614100":"8.91,8°50′",
"614077":"9.32,9°20′",
"614076":"9.17,9°10′",
"614072":"9.02,9° 0′",
"614067":"9.17,9°10′",
"614066":"8.98,9° 0′",
"614065":"8.92,9° 0′",
"614064":"8.99,9° 0′",
"614063":"9.04,9° 0′",
"614062":"9.00,9° 0′",
"614057":"8.98,9° 0′",
"614056":"8.77,8°50′",
"614055":"8.70,8°40′",
"614054":"8.83,8°50′",
"614053":"8.99,9° 0′",
"614052":"9.03,9° 0′",
"614051":"9.02,9° 0′",
"614047":"8.81,8°50′",
"614046":"8.60,8°40′",
"614045":"8.56,8°30′",
"614044":"8.77,8°50′",
"614043":"9.04,9° 0′",
"614042":"9.12,9°10′",
"614037":"8.71,8°40′",
"614036":"8.51,8°30′",
"614035":"8.51,8°30′",
"614034":"8.80,8°50′",
"614033":"9.13,9°10′",
"614032":"9.20,9°10′",
"614027":"8.68,8°40′",
"614026":"8.46,8°30′",
"614025":"8.47,8°30′",
"614024":"8.75,8°50′",
"614023":"9.08,9° 0′",
"614022":"9.16,9°10′",
"614017":"8.68,8°40′",
"614016":"8.42,8°30′",
"614015":"8.37,8°20′",
"614014":"8.61,8°40′",
"614013":"8.92,9° 0′",
"614012":"9.04,9° 0′",
"614011":"8.95,9° 0′",
"614010":"8.93,9° 0′",
"614007":"8.61,8°40′",
"614006":"8.29,8°20′",
"614005":"8.21,8°10′",
"614004":"8.44,8°30′",
"614003":"8.78,8°50′",
"614002":"8.94,9° 0′",
"614001":"8.87,8°50′",
"614000":"8.94,9° 0′",
"613907":"9.25,9°20′",
"604173":"7.80,7°50′",
"604172":"8.26,8°20′",
"604171":"8.72,8°40′",
"604170":"8.73,8°40′",
"604164":"7.93,8° 0′",
"604163":"8.09,8°10′",
"604162":"8.41,8°20′",
"604161":"8.62,8°40′",
"604160":"8.45,8°30′",
"604155":"7.89,7°50′",
"604154":"8.10,8°10′",
"604153":"8.23,8°10′",
"604152":"8.44,8°30′",
"604151":"8.47,8°30′",
"604150":"8.12,8°10′",
"604146":"7.84,7°50′",
"604145":"7.90,7°50′",
"604144":"7.96,8° 0′",
"604143":"8.08,8° 0′",
"604142":"8.36,8°20′",
"604141":"8.38,8°20′",
"604140":"8.03,8° 0′",
"604136":"8.07,8° 0′",
"604135":"7.90,7°50′",
"604134":"7.74,7°40′",
"604133":"7.89,7°50′",
"604132":"8.32,8°20′",
"604131":"8.41,8°20′",
"604130":"8.15,8°10′",
"604126":"8.40,8°20′",
"604125":"8.08,8° 0′",
"604124":"7.76,7°50′",
"604123":"7.94,8° 0′",
"604122":"8.41,8°20′",
"604121":"8.53,8°30′",
"604120":"8.33,8°20′",
"604117":"8.67,8°40′",
"604116":"8.66,8°40′",
"604115":"8.31,8°20′",
"604114":"7.93,8° 0′",
"604113":"8.01,8° 0′",
"604112":"8.46,8°30′",
"604111":"8.65,8°40′",
"604110":"8.50,8°30′",
"604107":"8.70,8°40′",
"604106":"8.67,8°40′",
"604105":"8.34,8°20′",
"604104":"7.98,8° 0′",
"604103":"8.03,8° 0′",
"604102":"8.50,8°30′",
"604101":"8.80,8°50′",
"604100":"8.71,8°40′",
"604077":"8.42,8°30′",
"604076":"8.12,8°10′",
"604075":"8.12,8°10′",
"604074":"8.41,8°20′",
"604073":"8.75,8°50′",
"604072":"8.90,8°50′",
"604071":"8.87,8°50′",
"604070":"9.05,9° 0′",
"604067":"8.07,8° 0′",
"604066":"7.96,8° 0′",
"604065":"8.24,8°10′",
"604064":"8.61,8°40′",
"604063":"8.84,8°50′",
"604062":"8.85,8°50′",
"604061":"8.79,8°50′",
"604060":"8.96,9° 0′",
"604057":"7.73,7°40′",
"604056":"7.86,7°50′",
"604055":"8.47,8°30′",
"604054":"8.93,9° 0′",
"604053":"9.01,9° 0′",
"604052":"8.77,8°50′",
"604051":"8.51,8°30′",
"604050":"8.56,8°30′",
"604047":"7.70,7°40′",
"604046":"7.93,8° 0′",
"604045":"8.61,8°40′",
"604044":"9.12,9°10′",
"604043":"9.18,9°10′",
"604042":"8.73,8°40′",
"604041":"8.33,8°20′",
"604040":"8.39,8°20′",
"604037":"7.94,8° 0′",
"604036":"8.14,8°10′",
"604035":"8.66,8°40′",
"604034":"9.15,9°10′",
"604033":"9.26,9°20′",
"604032":"8.80,8°50′",
"604031":"8.46,8°30′",
"604030":"8.65,8°40′",
"604027":"8.20,8°10′",
"604026":"8.33,8°20′",
"604025":"8.69,8°40′",
"604024":"9.09,9°10′",
"604023":"9.24,9°10′",
"604022":"8.94,9° 0′",
"604021":"8.71,8°40′",
"604020":"8.90,8°50′",
"604017":"8.40,8°20′",
"604016":"8.49,8°30′",
"604015":"8.72,8°40′",
"604014":"8.99,9° 0′",
"604013":"9.10,9°10′",
"604012":"8.94,9° 0′",
"604011":"8.74,8°40′",
"604010":"8.76,8°50′",
"604007":"8.62,8°40′",
"604006":"8.67,8°40′",
"604005":"8.80,8°50′",
"604004":"8.89,8°50′",
"604003":"8.87,8°50′",
"604002":"8.77,8°50′",
"604001":"8.64,8°40′",
"604000":"8.59,8°40′",
"603977":"9.43,9°30′",
"603976":"9.54,9°30′",
"603967":"9.34,9°20′",
"603966":"9.47,9°30′",
"603964":"9.28,9°20′",
"603963":"9.22,9°10′",
"603957":"8.92,9° 0′",
"603947":"8.71,8°40′",
"603927":"9.04,9° 0′",
"603917":"8.85,8°50′",
"603907":"8.65,8°40′",
"603905":"8.77,8°50′",
"594250":"8.48,8°30′",
"594240":"8.48,8°30′",
"594230":"8.42,8°30′",
"594220":"8.17,8°10′",
"594210":"7.74,7°40′",
"594200":"7.45,7°30′",
"594177":"8.58,8°30′",
"594176":"8.48,8°30′",
"594175":"8.19,8°10′",
"594174":"7.99,8° 0′",
"594173":"8.13,8°10′",
"594172":"8.60,8°40′",
"594171":"8.94,9° 0′",
"594170":"8.91,8°50′",
"594167":"8.49,8°30′",
"594166":"8.33,8°20′",
"594165":"8.10,8°10′",
"594164":"8.04,8° 0′",
"594163":"8.24,8°10′",
"594162":"8.61,8°40′",
"594161":"8.89,8°50′",
"594160":"8.91,8°50′",
"594157":"8.47,8°30′",
"594156":"8.31,8°20′",
"594155":"8.12,8°10′",
"594154":"8.09,8°10′",
"594153":"8.24,8°10′",
"594152":"8.44,8°30′",
"594151":"8.62,8°40′",
"594150":"8.71,8°40′",
"594147":"8.50,8°30′",
"594146":"8.35,8°20′",
"594145":"8.19,8°10′",
"594144":"8.15,8°10′",
"594143":"8.16,8°10′",
"594142":"8.20,8°10′",
"594141":"8.29,8°20′",
"594140":"8.39,8°20′",
"594137":"8.47,8°30′",
"594136":"8.37,8°20′",
"594135":"8.28,8°20′",
"594134":"8.25,8°20′",
"594133":"8.15,8°10′",
"594132":"8.03,8° 0′",
"594131":"8.00,8° 0′",
"594130":"8.07,8° 0′",
"594127":"8.19,8°10′",
"594126":"8.23,8°10′",
"594125":"8.38,8°20′",
"594124":"8.44,8°30′",
"594123":"8.24,8°10′",
"594122":"7.97,8° 0′",
"594121":"7.86,7°50′",
"594120":"7.92,8° 0′",
"594117":"7.64,7°40′",
"594116":"7.90,7°50′",
"594115":"8.47,8°30′",
"594114":"8.70,8°40′",
"594113":"8.34,8°20′",
"594112":"7.96,8° 0′",
"594111":"7.91,7°50′",
"594110":"8.06,8° 0′",
"594107":"7.28,7°20′",
"594106":"7.66,7°40′",
"594105":"8.42,8°30′",
"594104":"8.63,8°40′",
"594103":"8.11,8°10′",
"594102":"7.80,7°50′",
"594101":"8.03,8° 0′",
"594100":"8.34,8°20′",
"594077":"8.81,8°50′",
"594076":"8.84,8°50′",
"594075":"8.92,9° 0′",
"594074":"8.87,8°50′",
"594073":"8.67,8°40′",
"594072":"8.58,8°30′",
"594071":"8.63,8°40′",
"594070":"8.70,8°40′",
"594067":"8.86,8°50′",
"594066":"8.91,8°50′",
"594065":"9.04,9° 0′",
"594064":"8.97,9° 0′",
"594063":"8.67,8°40′",
"594062":"8.52,8°30′",
"594061":"8.64,8°40′",
"594060":"8.81,8°50′",
"594057":"8.73,8°40′",
"594056":"8.83,8°50′",
"594055":"9.01,9° 0′",
"594054":"9.00,9° 0′",
"594053":"8.71,8°40′",
"594052":"8.50,8°30′",
"594051":"8.56,8°30′",
"594050":"8.74,8°40′",
"594047":"8.46,8°30′",
"594046":"8.57,8°30′",
"594045":"8.77,8°50′",
"594044":"8.82,8°50′",
"594043":"8.62,8°40′",
"594042":"8.41,8°20′",
"594041":"8.42,8°30′",
"594040":"8.57,8°30′",
"594037":"8.14,8°10′",
"594036":"8.25,8°20′",
"594035":"8.48,8°30′",
"594034":"8.60,8°40′",
"594033":"8.48,8°30′",
"594032":"8.33,8°20′",
"594031":"8.34,8°20′",
"594030":"8.48,8°30′",
"594027":"7.97,8° 0′",
"594026":"8.06,8° 0′",
"594025":"8.30,8°20′",
"594024":"8.46,8°30′",
"594023":"8.39,8°20′",
"594022":"8.30,8°20′",
"594021":"8.35,8°20′",
"594020":"8.48,8°30′",
"594017":"8.11,8°10′",
"594016":"8.15,8°10′",
"594015":"8.31,8°20′",
"594014":"8.41,8°20′",
"594013":"8.34,8°20′",
"594012":"8.30,8°20′",
"594011":"8.40,8°20′",
"594010":"8.54,8°30′",
"594007":"8.44,8°30′",
"594006":"8.44,8°30′",
"594005":"8.45,8°30′",
"594004":"8.38,8°20′",
"594003":"8.29,8°20′",
"594002":"8.31,8°20′",
"594001":"8.45,8°30′",
"594000":"8.62,8°40′",
"593977":"8.73,8°40′",
"593976":"8.71,8°40′",
"593975":"8.72,8°40′",
"593967":"8.83,8°50′",
"593966":"8.75,8°50′",
"593965":"8.72,8°40′",
"593907":"8.71,8°40′",
"584177":"7.43,7°30′",
"584176":"7.71,7°40′",
"584175":"8.12,8°10′",
"584174":"8.02,8° 0′",
"584173":"7.46,7°30′",
"584172":"7.45,7°30′",
"584171":"8.07,8° 0′",
"584170":"8.52,8°30′",
"584167":"7.90,7°50′",
"584166":"7.97,8° 0′",
"584165":"7.71,7°40′",
"584164":"7.25,7°20′",
"584163":"6.95,7° 0′",
"584162":"7.33,7°20′",
"584161":"8.09,8°10′",
"584160":"8.54,8°30′",
"584157":"8.18,8°10′",
"584156":"8.11,8°10′",
"584155":"7.59,7°40′",
"584154":"7.15,7°10′",
"584153":"7.21,7°10′",
"584152":"7.67,7°40′",
"584151":"8.17,8°10′",
"584150":"8.47,8°30′",
"584147":"8.19,8°10′",
"584146":"8.11,8°10′",
"584145":"7.75,7°50′",
"584144":"7.61,7°40′",
"584143":"7.87,7°50′",
"584142":"8.07,8° 0′",
"584141":"8.13,8°10′",
"584140":"8.30,8°20′",
"584135":"8.00,8° 0′",
"584134":"8.07,8° 0′",
"584133":"8.25,8°20′",
"584132":"8.17,8°10′",
"584131":"7.98,8° 0′",
"584130":"8.11,8°10′",
"584125":"8.09,8°10′",
"584124":"8.20,8°10′",
"584123":"8.27,8°20′",
"584122":"8.14,8°10′",
"584121":"7.95,8° 0′",
"584120":"8.00,8° 0′",
"584115":"8.06,8° 0′",
"584114":"8.13,8°10′",
"584113":"8.18,8°10′",
"584112":"8.18,8°10′",
"584111":"8.09,8°10′",
"584110":"7.96,8° 0′",
"584104":"8.01,8° 0′",
"584103":"8.10,8°10′",
"584102":"8.27,8°20′",
"584101":"8.26,8°20′",
"584100":"7.93,8° 0′",
"584077":"8.69,8°40′",
"584076":"8.70,8°40′",
"584075":"8.57,8°30′",
"584074":"8.29,8°20′",
"584073":"8.17,8°10′",
"584072":"8.29,8°20′",
"584071":"8.48,8°30′",
"584070":"8.66,8°40′",
"584067":"8.75,8°50′",
"584066":"8.84,8°50′",
"584065":"8.67,8°40′",
"584064":"8.22,8°10′",
"584063":"8.03,8° 0′",
"584062":"8.24,8°10′",
"584061":"8.45,8°30′",
"584060":"8.59,8°40′",
"584057":"8.66,8°40′",
"584056":"8.76,8°50′",
"584055":"8.60,8°40′",
"584054":"8.22,8°10′",
"584053":"8.08,8° 0′",
"584052":"8.28,8°20′",
"584051":"8.43,8°30′",
"584050":"8.48,8°30′",
"584047":"8.49,8°30′",
"584046":"8.47,8°30′",
"584045":"8.30,8°20′",
"584044":"8.15,8°10′",
"584043":"8.26,8°20′",
"584042":"8.44,8°30′",
"584041":"8.47,8°30′",
"584040":"8.41,8°20′",
"584037":"8.34,8°20′",
"584036":"8.27,8°20′",
"584035":"8.09,8°10′",
"584034":"8.14,8°10′",
"584033":"8.42,8°30′",
"584032":"8.57,8°30′",
"584031":"8.52,8°30′",
"584030":"8.40,8°20′",
"584027":"8.18,8°10′",
"584026":"8.22,8°10′",
"584025":"8.22,8°10′",
"584024":"8.31,8°20′",
"584023":"8.43,8°30′",
"584022":"8.48,8°30′",
"584021":"8.45,8°30′",
"584020":"8.41,8°20′",
"584017":"7.91,7°50′",
"584016":"8.06,8° 0′",
"584015":"8.31,8°20′",
"584014":"8.39,8°20′",
"584013":"8.31,8°20′",
"584012":"8.25,8°20′",
"584011":"8.31,8°20′",
"584010":"8.42,8°30′",
"584007":"7.65,7°40′",
"584006":"7.81,7°50′",
"584005":"8.19,8°10′",
"584004":"8.34,8°20′",
"584003":"8.24,8°10′",
"584002":"8.16,8°10′",
"584001":"8.26,8°20′",
"584000":"8.41,8°20′",
"583977":"8.74,8°40′",
"583967":"8.63,8°40′",
"583964":"8.51,8°30′",
"583957":"8.44,8°30′",
"583956":"8.38,8°20′",
"583947":"8.30,8°20′",
"583946":"8.25,8°20′",
"583937":"8.28,8°20′",
"583936":"8.23,8°10′",
"583927":"8.36,8°20′",
"583926":"8.29,8°20′",
"583917":"8.45,8°30′",
"583916":"8.37,8°20′",
"583915":"8.30,8°20′",
"583907":"8.45,8°30′",
"583906":"8.38,8°20′",
"583905":"8.29,8°20′",
"583904":"8.26,8°20′",
"574174":"7.93,8° 0′",
"574173":"8.07,8° 0′",
"574172":"8.32,8°20′",
"574171":"8.35,8°20′",
"574170":"7.96,8° 0′",
"574164":"7.88,7°50′",
"574163":"8.05,8° 0′",
"574162":"8.31,8°20′",
"574161":"8.35,8°20′",
"574160":"8.01,8° 0′",
"574154":"7.79,7°50′",
"574153":"7.96,8° 0′",
"574152":"8.21,8°10′",
"574151":"8.26,8°20′",
"574150":"8.00,8° 0′",
"574144":"7.67,7°40′",
"574143":"7.81,7°50′",
"574142":"8.05,8° 0′",
"574141":"8.16,8°10′",
"574140":"8.06,8° 0′",
"574134":"7.58,7°30′",
"574133":"7.71,7°40′",
"574131":"8.14,8°10′",
"574130":"8.24,8°10′",
"574124":"7.59,7°40′",
"574123":"7.70,7°40′",
"574120":"8.37,8°20′",
"574077":"7.61,7°40′",
"574076":"7.73,7°40′",
"574075":"8.08,8° 0′",
"574074":"8.28,8°20′",
"574073":"8.29,8°20′",
"574072":"8.25,8°20′",
"574071":"8.26,8°20′",
"574070":"8.30,8°20′",
"574067":"7.71,7°40′",
"574066":"7.80,7°50′",
"574065":"8.04,8° 0′",
"574064":"8.23,8°10′",
"574063":"8.32,8°20′",
"574062":"8.26,8°20′",
"574061":"8.14,8°10′",
"574060":"8.09,8°10′",
"574057":"7.81,7°50′",
"574056":"7.88,7°50′",
"574055":"8.02,8° 0′",
"574054":"8.12,8°10′",
"574053":"8.15,8°10′",
"574052":"8.05,8° 0′",
"574051":"7.92,8° 0′",
"574050":"7.90,7°50′",
"574047":"7.98,8° 0′",
"574046":"8.00,8° 0′",
"574045":"7.99,8° 0′",
"574044":"7.95,8° 0′",
"574043":"7.84,7°50′",
"574042":"7.71,7°40′",
"574041":"7.76,7°50′",
"574040":"7.92,8° 0′",
"574037":"8.25,8°20′",
"574036":"8.14,8°10′",
"574035":"7.99,8° 0′",
"574034":"7.79,7°50′",
"574033":"7.55,7°30′",
"574032":"7.40,7°20′",
"574031":"7.64,7°40′",
"574030":"7.97,8° 0′",
"574027":"8.42,8°30′",
"574026":"8.25,8°20′",
"574025":"8.01,8° 0′",
"574024":"7.70,7°40′",
"574023":"7.33,7°20′",
"574022":"7.12,7°10′",
"574021":"7.45,7°30′",
"574020":"7.91,7°50′",
"574017":"8.37,8°20′",
"574016":"8.25,8°20′",
"574015":"8.04,8° 0′",
"574014":"7.71,7°40′",
"574013":"7.25,7°20′",
"574012":"7.02,7° 0′",
"574011":"7.33,7°20′",
"574010":"7.81,7°50′",
"574007":"8.21,8°10′",
"574006":"8.19,8°10′",
"574005":"8.09,8°10′",
"574004":"7.80,7°50′",
"574003":"7.37,7°20′",
"574002":"7.16,7°10′",
"574001":"7.41,7°20′",
"574000":"7.80,7°50′",
"573977":"8.32,8°20′",
"573976":"8.28,8°20′",
"573975":"8.22,8°10′",
"573974":"8.22,8°10′",
"573967":"8.12,8°10′",
"573966":"8.15,8°10′",
"573965":"8.14,8°10′",
"573964":"8.16,8°10′",
"573957":"7.98,8° 0′",
"573956":"8.06,8° 0′",
"573955":"8.09,8°10′",
"573954":"8.12,8°10′",
"573953":"8.18,8°10′",
"573952":"8.23,8°10′",
"573951":"8.28,8°20′",
"573947":"7.99,8° 0′",
"573946":"8.04,8° 0′",
"573945":"8.06,8° 0′",
"573944":"8.10,8°10′",
"573943":"8.16,8°10′",
"573937":"8.05,8° 0′",
"573936":"8.05,8° 0′",
"573935":"8.07,8° 0′",
"573934":"8.11,8°10′",
"573933":"8.18,8°10′",
"573927":"8.05,8° 0′",
"573926":"8.05,8° 0′",
"573925":"8.08,8° 0′",
"573924":"8.14,8°10′",
"573923":"8.20,8°10′",
"573917":"8.01,8° 0′",
"573916":"8.03,8° 0′",
"573915":"8.07,8° 0′",
"573914":"8.13,8°10′",
"573913":"8.17,8°10′",
"573912":"8.22,8°10′",
"573907":"7.96,8° 0′",
"573906":"7.99,8° 0′",
"573905":"8.04,8° 0′",
"573904":"8.07,8° 0′",
"573903":"8.09,8°10′",
"573902":"8.17,8°10′",
"573901":"8.27,8°20′",
"573844":"8.36,8°20′",
"573843":"8.37,8°20′",
"573834":"8.33,8°20′",
"573833":"8.34,8°20′",
"573824":"8.30,8°20′",
"573823":"8.30,8°20′",
"573822":"8.32,8°20′",
"573814":"8.27,8°20′",
"573813":"8.27,8°20′",
"573812":"8.28,8°20′",
"573811":"8.31,8°20′",
"573804":"8.25,8°20′",
"573803":"8.24,8°10′",
"573802":"8.26,8°20′",
"573801":"8.29,8°20′",
"564150":"7.89,7°50′",
"564140":"7.89,7°50′",
"564130":"7.58,7°30′",
"564120":"7.25,7°20′",
"564110":"7.26,7°20′",
"564100":"7.36,7°20′",
"564077":"8.04,8° 0′",
"564076":"8.09,8°10′",
"564075":"8.08,8° 0′",
"564074":"7.89,7°50′",
"564073":"7.58,7°30′",
"564072":"7.45,7°30′",
"564071":"7.61,7°40′",
"564070":"7.83,7°50′",
"564067":"7.91,7°50′",
"564066":"7.96,8° 0′",
"564065":"8.02,8° 0′",
"564064":"7.90,7°50′",
"564063":"7.70,7°40′",
"564062":"7.64,7°40′",
"564061":"7.74,7°40′",
"564060":"7.85,7°50′",
"564057":"7.87,7°50′",
"564056":"7.83,7°50′",
"564055":"7.88,7°50′",
"564054":"7.84,7°50′",
"564053":"7.74,7°40′",
"564052":"7.74,7°40′",
"564051":"7.80,7°50′",
"564050":"7.84,7°50′",
"564047":"7.80,7°50′",
"564046":"7.64,7°40′",
"564045":"7.59,7°40′",
"564044":"7.66,7°40′",
"564043":"7.74,7°40′",
"564042":"7.82,7°50′",
"564041":"7.86,7°50′",
"564040":"7.84,7°50′",
"564037":"7.43,7°30′",
"564036":"7.29,7°20′",
"564035":"7.30,7°20′",
"564034":"7.50,7°30′",
"564033":"7.76,7°50′",
"564032":"7.91,7°50′",
"564031":"7.94,8° 0′",
"564030":"7.89,7°50′",
"564027":"7.09,7°10′",
"564026":"7.13,7°10′",
"564025":"7.31,7°20′",
"564024":"7.52,7°30′",
"564023":"7.82,7°50′",
"564022":"7.99,8° 0′",
"564021":"8.01,8° 0′",
"564020":"7.96,8° 0′",
"564017":"7.21,7°10′",
"564016":"7.39,7°20′",
"564015":"7.54,7°30′",
"564014":"7.66,7°40′",
"564013":"7.86,7°50′",
"564012":"8.02,8° 0′",
"564011":"8.05,8° 0′",
"564010":"8.01,8° 0′",
"564007":"7.44,7°30′",
"564006":"7.56,7°30′",
"564005":"7.61,7°40′",
"564004":"7.66,7°40′",
"564003":"7.84,7°50′",
"564002":"7.99,8° 0′",
"564001":"8.03,8° 0′",
"564000":"8.03,8° 0′",
"563977":"7.93,8° 0′",
"563976":"7.96,8° 0′",
"563975":"7.98,8° 0′",
"563974":"7.99,8° 0′",
"563973":"8.02,8° 0′",
"563972":"8.17,8°10′",
"563971":"8.31,8°20′",
"563970":"8.35,8°20′",
"563967":"7.89,7°50′",
"563966":"7.92,8° 0′",
"563965":"7.95,8° 0′",
"563964":"7.95,8° 0′",
"563963":"8.02,8° 0′",
"563962":"8.25,8°20′",
"563961":"8.37,8°20′",
"563960":"8.34,8°20′",
"563957":"7.85,7°50′",
"563956":"7.89,7°50′",
"563955":"7.94,8° 0′",
"563954":"7.97,8° 0′",
"563953":"8.09,8°10′",
"563952":"8.33,8°20′",
"563951":"8.38,8°20′",
"563950":"8.21,8°10′",
"563947":"7.82,7°50′",
"563946":"7.89,7°50′",
"563945":"7.99,8° 0′",
"563944":"8.05,8° 0′",
"563943":"8.15,8°10′",
"563942":"8.33,8°20′",
"563941":"8.27,8°20′",
"563940":"8.05,8° 0′",
"563937":"7.86,7°50′",
"563936":"7.97,8° 0′",
"563935":"8.12,8°10′",
"563934":"8.18,8°10′",
"563933":"8.20,8°10′",
"563932":"8.25,8°20′",
"563931":"8.17,8°10′",
"563930":"8.00,8° 0′",
"563927":"7.94,8° 0′",
"563926":"8.10,8°10′",
"563925":"8.31,8°20′",
"563924":"8.32,8°20′",
"563923":"8.24,8°10′",
"563922":"8.19,8°10′",
"563921":"8.12,8°10′",
"563920":"8.03,8° 0′",
"563917":"7.98,8° 0′",
"563916":"8.13,8°10′",
"563915":"8.37,8°20′",
"563914":"8.38,8°20′",
"563913":"8.24,8°10′",
"563912":"8.14,8°10′",
"563911":"8.08,8° 0′",
"563910":"8.01,8° 0′",
"563907":"7.97,8° 0′",
"563906":"8.03,8° 0′",
"563905":"8.23,8°10′",
"563904":"8.27,8°20′",
"563903":"8.17,8°10′",
"563902":"8.08,8° 0′",
"563901":"8.01,8° 0′",
"563900":"7.93,8° 0′",
"563874":"8.24,8°10′",
"563873":"8.23,8°10′",
"563872":"8.24,8°10′",
"563871":"8.27,8°20′",
"563867":"8.34,8°20′",
"563866":"8.33,8°20′",
"563863":"8.23,8°10′",
"563862":"8.24,8°10′",
"563861":"8.27,8°20′",
"563857":"8.20,8°10′",
"563856":"8.25,8°20′",
"563852":"8.25,8°20′",
"563851":"8.26,8°20′",
"563847":"8.04,8° 0′",
"563846":"8.14,8°10′",
"563837":"7.99,8° 0′",
"563836":"8.06,8° 0′",
"563835":"8.12,8°10′",
"563827":"7.99,8° 0′",
"563826":"8.00,8° 0′",
"563825":"8.07,8° 0′",
"563817":"7.92,8° 0′",
"563816":"7.90,7°50′",
"563815":"8.06,8° 0′",
"563814":"8.28,8°20′",
"563807":"7.81,7°50′",
"563806":"7.76,7°50′",
"563805":"7.99,8° 0′",
"563804":"8.29,8°20′",
"563803":"8.38,8°20′",
"563722":"8.32,8°20′",
"563721":"8.29,8°20′",
"563712":"8.26,8°20′",
"563711":"8.21,8°10′",
"563710":"8.20,8°10′",
"563702":"8.15,8°10′",
"563701":"8.09,8°10′",
"563700":"8.09,8°10′",
"563667":"8.40,8°20′",
"563657":"8.38,8°20′",
"563637":"8.33,8°20′",
"563636":"8.35,8°20′",
"563626":"8.33,8°20′",
"563617":"8.25,8°20′",
"563607":"8.16,8°10′",
"563606":"8.25,8°20′",
"563605":"8.32,8°20′",
"554170":"7.31,7°20′",
"554160":"7.19,7°10′",
"554150":"7.13,7°10′",
"554077":"7.41,7°20′",
"554076":"7.52,7°30′",
"554075":"7.51,7°30′",
"554074":"7.51,7°30′",
"554073":"7.70,7°40′",
"554072":"7.88,7°50′",
"554071":"7.95,8° 0′",
"554070":"7.99,8° 0′",
"554067":"7.28,7°20′",
"554066":"7.46,7°30′",
"554065":"7.40,7°20′",
"554064":"7.29,7°20′",
"554063":"7.46,7°30′",
"554062":"7.67,7°40′",
"554061":"7.77,7°50′",
"554060":"7.86,7°50′",
"554057":"7.23,7°10′",
"554056":"7.41,7°20′",
"554055":"7.29,7°20′",
"554054":"7.10,7°10′",
"554053":"7.24,7°10′",
"554052":"7.47,7°30′",
"554051":"7.63,7°40′",
"554050":"7.74,7°40′",
"554047":"7.22,7°10′",
"554046":"7.33,7°20′",
"554045":"7.21,7°10′",
"554044":"7.06,7° 0′",
"554043":"7.19,7°10′",
"554042":"7.41,7°20′",
"554041":"7.63,7°40′",
"554040":"7.77,7°50′",
"554037":"7.20,7°10′",
"554036":"7.24,7°10′",
"554035":"7.19,7°10′",
"554034":"7.18,7°10′",
"554033":"7.29,7°20′",
"554032":"7.39,7°20′",
"554031":"7.74,7°40′",
"554030":"8.02,8° 0′",
"554027":"7.17,7°10′",
"554026":"7.18,7°10′",
"554025":"7.19,7°10′",
"554024":"7.28,7°20′",
"554023":"7.38,7°20′",
"554022":"7.41,7°20′",
"554021":"7.82,7°50′",
"554020":"8.20,8°10′",
"554016":"7.14,7°10′",
"554015":"7.17,7°10′",
"554014":"7.31,7°20′",
"554013":"7.46,7°30′",
"554012":"7.51,7°30′",
"554011":"7.82,7°50′",
"554010":"8.12,8°10′",
"554005":"7.21,7°10′",
"554004":"7.34,7°20′",
"554003":"7.47,7°30′",
"554002":"7.58,7°30′",
"554001":"7.74,7°40′",
"554000":"7.88,7°50′",
"553977":"7.93,8° 0′",
"553976":"7.90,7°50′",
"553975":"8.01,8° 0′",
"553974":"8.07,8° 0′",
"553973":"8.05,8° 0′",
"553972":"8.01,8° 0′",
"553971":"7.96,8° 0′",
"553970":"7.88,7°50′",
"553967":"7.85,7°50′",
"553966":"7.79,7°50′",
"553965":"7.83,7°50′",
"553964":"7.90,7°50′",
"553963":"7.94,8° 0′",
"553962":"7.95,8° 0′",
"553961":"7.94,8° 0′",
"553960":"7.92,8° 0′",
"553957":"7.73,7°40′",
"553956":"7.67,7°40′",
"553955":"7.68,7°40′",
"553954":"7.77,7°50′",
"553953":"7.85,7°50′",
"553952":"7.90,7°50′",
"553951":"7.95,8° 0′",
"553950":"8.04,8° 0′",
"553947":"7.69,7°40′",
"553946":"7.56,7°30′",
"553945":"7.56,7°30′",
"553944":"7.67,7°40′",
"553943":"7.79,7°50′",
"553942":"7.86,7°50′",
"553941":"7.95,8° 0′",
"553940":"8.14,8°10′",
"553937":"7.78,7°50′",
"553936":"7.53,7°30′",
"553935":"7.51,7°30′",
"553934":"7.63,7°40′",
"553933":"7.74,7°40′",
"553932":"7.78,7°50′",
"553931":"7.88,7°50′",
"553930":"8.16,8°10′",
"553927":"7.91,7°50′",
"553926":"7.58,7°30′",
"553925":"7.53,7°30′",
"553924":"7.65,7°40′",
"553923":"7.73,7°40′",
"553922":"7.68,7°40′",
"553921":"7.75,7°50′",
"553920":"8.07,8° 0′",
"553917":"7.89,7°50′",
"553916":"7.62,7°40′",
"553915":"7.57,7°30′",
"553914":"7.69,7°40′",
"553913":"7.76,7°50′",
"553912":"7.65,7°40′",
"553911":"7.65,7°40′",
"553910":"7.94,8° 0′",
"553907":"7.76,7°50′",
"553906":"7.61,7°40′",
"553905":"7.59,7°40′",
"553904":"7.69,7°40′",
"553903":"7.76,7°50′",
"553902":"7.71,7°40′",
"553901":"7.71,7°40′",
"553900":"7.87,7°50′",
"553877":"7.76,7°50′",
"553876":"7.69,7°40′",
"553875":"7.87,7°50′",
"553874":"8.16,8°10′",
"553873":"8.31,8°20′",
"553872":"8.31,8°20′",
"553867":"7.88,7°50′",
"553866":"7.79,7°50′",
"553865":"7.77,7°50′",
"553864":"7.91,7°50′",
"553863":"8.13,8°10′",
"553862":"8.22,8°10′",
"553861":"8.10,8°10′",
"553860":"7.99,8° 0′",
"553857":"8.10,8°10′",
"553856":"7.98,8° 0′",
"553855":"7.68,7°40′",
"553854":"7.65,7°40′",
"553853":"7.92,8° 0′",
"553852":"8.08,8° 0′",
"553851":"7.96,8° 0′",
"553850":"7.88,7°50′",
"553847":"8.33,8°20′",
"553846":"8.20,8°10′",
"553845":"7.70,7°40′",
"553844":"7.52,7°30′",
"553843":"7.79,7°50′",
"553842":"7.98,8° 0′",
"553841":"7.89,7°50′",
"553840":"7.85,7°50′",
"553837":"8.50,8°30′",
"553836":"8.52,8°30′",
"553835":"8.02,8° 0′",
"553834":"7.69,7°40′",
"553833":"7.85,7°50′",
"553832":"7.97,8° 0′",
"553831":"7.89,7°50′",
"553830":"7.83,7°50′",
"553827":"8.48,8°30′",
"553826":"8.65,8°40′",
"553825":"8.27,8°20′",
"553824":"7.94,8° 0′",
"553823":"8.00,8° 0′",
"553822":"8.03,8° 0′",
"553821":"7.84,7°50′",
"553820":"7.68,7°40′",
"553817":"8.27,8°20′",
"553816":"8.37,8°20′",
"553815":"8.08,8° 0′",
"553814":"7.92,8° 0′",
"553813":"8.15,8°10′",
"553812":"8.13,8°10′",
"553811":"7.73,7°40′",
"553810":"7.44,7°30′",
"553807":"8.02,8° 0′",
"553806":"7.92,8° 0′",
"553805":"7.55,7°30′",
"553804":"7.55,7°30′",
"553803":"8.09,8°10′",
"553802":"8.17,8°10′",
"553801":"7.64,7°40′",
"553800":"7.27,7°20′",
"553772":"8.05,8° 0′",
"553771":"7.99,8° 0′",
"553770":"7.99,8° 0′",
"553760":"7.97,8° 0′",
"553757":"8.03,8° 0′",
"553750":"8.03,8° 0′",
"553747":"8.04,8° 0′",
"553746":"8.12,8°10′",
"553745":"8.02,8° 0′",
"553740":"8.08,8° 0′",
"553737":"7.97,8° 0′",
"553736":"8.01,8° 0′",
"553735":"7.91,7°50′",
"553734":"7.84,7°50′",
"553733":"7.83,7°50′",
"553730":"8.06,8° 0′",
"553727":"7.75,7°50′",
"553726":"7.81,7°50′",
"553725":"7.80,7°50′",
"553724":"7.76,7°50′",
"553723":"7.77,7°50′",
"553720":"7.98,8° 0′",
"553717":"7.49,7°30′",
"553716":"7.64,7°40′",
"553715":"7.72,7°40′",
"553714":"7.74,7°40′",
"553713":"7.78,7°50′",
"553712":"7.84,7°50′",
"553711":"7.83,7°50′",
"553710":"7.88,7°50′",
"553707":"7.33,7°20′",
"553706":"7.55,7°30′",
"553705":"7.70,7°40′",
"553704":"7.79,7°50′",
"553703":"7.90,7°50′",
"553702":"7.99,8° 0′",
"553701":"7.95,8° 0′",
"553700":"7.92,8° 0′",
"553677":"8.06,8° 0′",
"553676":"8.19,8°10′",
"553675":"8.31,8°20′",
"553667":"8.01,8° 0′",
"553666":"8.12,8°10′",
"553665":"8.27,8°20′",
"553657":"8.02,8° 0′",
"553656":"8.05,8° 0′",
"553655":"8.18,8°10′",
"553647":"8.08,8° 0′",
"553646":"8.05,8° 0′",
"553645":"8.12,8°10′",
"553637":"8.13,8°10′",
"553636":"8.12,8°10′",
"553635":"8.13,8°10′",
"553627":"8.11,8°10′",
"553626":"8.16,8°10′",
"553625":"8.15,8°10′",
"553617":"8.07,8° 0′",
"553616":"8.15,8°10′",
"553615":"8.12,8°10′",
"553607":"8.06,8° 0′",
"553606":"8.13,8°10′",
"553605":"8.08,8° 0′",
"553166":"8.37,8°20′",
"544075":"7.31,7°20′",
"544074":"7.38,7°20′",
"544073":"7.40,7°20′",
"544072":"7.51,7°30′",
"544071":"7.68,7°40′",
"544070":"7.75,7°50′",
"544065":"7.36,7°20′",
"544064":"7.36,7°20′",
"544063":"7.34,7°20′",
"544062":"7.47,7°30′",
"544061":"7.68,7°40′",
"544060":"7.74,7°40′",
"544055":"7.28,7°20′",
"544054":"7.27,7°20′",
"544053":"7.30,7°20′",
"544052":"7.46,7°30′",
"544051":"7.66,7°40′",
"544050":"7.69,7°40′",
"544045":"7.19,7°10′",
"544044":"7.18,7°10′",
"544043":"7.25,7°20′",
"544042":"7.40,7°20′",
"544041":"7.56,7°30′",
"544040":"7.62,7°40′",
"544034":"7.16,7°10′",
"544033":"7.21,7°10′",
"544032":"7.31,7°20′",
"544031":"7.46,7°30′",
"544030":"7.59,7°40′",
"544024":"7.18,7°10′",
"544023":"7.18,7°10′",
"544022":"7.24,7°10′",
"544021":"7.39,7°20′",
"544020":"7.59,7°40′",
"544014":"7.23,7°10′",
"544013":"7.19,7°10′",
"544012":"7.22,7°10′",
"544011":"7.37,7°20′",
"544010":"7.55,7°30′",
"544005":"7.29,7°20′",
"544004":"7.32,7°20′",
"544003":"7.25,7°20′",
"544002":"7.23,7°10′",
"544001":"7.37,7°20′",
"544000":"7.48,7°30′",
"543977":"7.67,7°40′",
"543976":"7.60,7°40′",
"543975":"7.59,7°40′",
"543974":"7.58,7°30′",
"543973":"7.66,7°40′",
"543972":"7.84,7°50′",
"543971":"7.91,7°50′",
"543970":"7.93,8° 0′",
"543967":"7.62,7°40′",
"543966":"7.54,7°30′",
"543965":"7.50,7°30′",
"543964":"7.40,7°20′",
"543963":"7.55,7°30′",
"543962":"7.94,8° 0′",
"543961":"8.07,8° 0′",
"543960":"7.98,8° 0′",
"543957":"7.56,7°30′",
"543956":"7.42,7°30′",
"543955":"7.36,7°20′",
"543954":"7.40,7°20′",
"543953":"7.63,7°40′",
"543952":"7.95,8° 0′",
"543951":"7.97,8° 0′",
"543950":"7.85,7°50′",
"543947":"7.54,7°30′",
"543946":"7.37,7°20′",
"543945":"7.29,7°20′",
"543944":"7.51,7°30′",
"543943":"7.79,7°50′",
"543942":"7.85,7°50′",
"543941":"7.71,7°40′",
"543940":"7.61,7°40′",
"543937":"7.64,7°40′",
"543936":"7.40,7°20′",
"543935":"7.21,7°10′",
"543934":"7.51,7°30′",
"543933":"7.76,7°50′",
"543932":"7.67,7°40′",
"543931":"7.52,7°30′",
"543930":"7.47,7°30′",
"543927":"7.69,7°40′",
"543926":"7.41,7°20′",
"543925":"7.18,7°10′",
"543924":"7.40,7°20′",
"543923":"7.60,7°40′",
"543922":"7.55,7°30′",
"543921":"7.52,7°30′",
"543920":"7.55,7°30′",
"543917":"7.58,7°30′",
"543916":"7.38,7°20′",
"543915":"7.25,7°20′",
"543914":"7.41,7°20′",
"543913":"7.53,7°30′",
"543912":"7.52,7°30′",
"543911":"7.53,7°30′",
"543910":"7.61,7°40′",
"543907":"7.44,7°30′",
"543906":"7.36,7°20′",
"543905":"7.37,7°20′",
"543904":"7.46,7°30′",
"543903":"7.50,7°30′",
"543902":"7.47,7°30′",
"543901":"7.44,7°30′",
"543900":"7.51,7°30′",
"543877":"7.92,8° 0′",
"543876":"7.68,7°40′",
"543875":"7.19,7°10′",
"543874":"7.12,7°10′",
"543873":"7.71,7°40′",
"543872":"7.96,8° 0′",
"543871":"7.57,7°30′",
"543870":"7.23,7°10′",
"543867":"7.92,8° 0′",
"543866":"7.70,7°40′",
"543865":"7.23,7°10′",
"543864":"6.99,7° 0′",
"543863":"7.34,7°20′",
"543862":"7.70,7°40′",
"543861":"7.52,7°30′",
"543860":"7.24,7°10′",
"543857":"7.87,7°50′",
"543856":"7.84,7°50′",
"543855":"7.60,7°40′",
"543854":"7.35,7°20′",
"543853":"7.43,7°30′",
"543852":"7.75,7°50′",
"543851":"7.63,7°40′",
"543850":"7.31,7°20′",
"543847":"7.72,7°40′",
"543846":"7.91,7°50′",
"543845":"7.97,8° 0′",
"543844":"7.83,7°50′",
"543843":"7.77,7°50′",
"543842":"7.97,8° 0′",
"543841":"7.84,7°50′",
"543840":"7.48,7°30′",
"543837":"7.59,7°40′",
"543836":"7.95,8° 0′",
"543835":"8.18,8°10′",
"543834":"7.98,8° 0′",
"543833":"7.82,7°50′",
"543832":"7.98,8° 0′",
"543831":"7.92,8° 0′",
"543830":"7.59,7°40′",
"543827":"7.64,7°40′",
"543826":"8.02,8° 0′",
"543825":"8.21,8°10′",
"543824":"7.83,7°50′",
"543823":"7.58,7°30′",
"543822":"7.73,7°40′",
"543821":"7.72,7°40′",
"543820":"7.51,7°30′",
"543817":"7.72,7°40′",
"543816":"8.03,8° 0′",
"543815":"8.11,8°10′",
"543814":"7.72,7°40′",
"543813":"7.45,7°30′",
"543812":"7.42,7°30′",
"543811":"7.29,7°20′",
"543810":"7.23,7°10′",
"543807":"7.68,7°40′",
"543806":"7.89,7°50′",
"543805":"7.87,7°50′",
"543804":"7.58,7°30′",
"543803":"7.31,7°20′",
"543802":"7.10,7°10′",
"543801":"6.88,6°50′",
"543800":"6.98,7° 0′",
"543777":"7.31,7°20′",
"543776":"7.54,7°30′",
"543775":"7.72,7°40′",
"543774":"7.85,7°50′",
"543773":"8.02,8° 0′",
"543772":"8.19,8°10′",
"543771":"8.17,8°10′",
"543770":"8.07,8° 0′",
"543767":"7.32,7°20′",
"543766":"7.58,7°30′",
"543765":"7.74,7°40′",
"543764":"7.86,7°50′",
"543763":"8.03,8° 0′",
"543762":"8.20,8°10′",
"543761":"8.23,8°10′",
"543760":"8.12,8°10′",
"543757":"7.39,7°20′",
"543756":"7.64,7°40′",
"543755":"7.74,7°40′",
"543754":"7.80,7°50′",
"543753":"7.92,8° 0′",
"543752":"8.03,8° 0′",
"543751":"8.04,8° 0′",
"543750":"7.97,8° 0′",
"543747":"7.47,7°30′",
"543746":"7.64,7°40′",
"543745":"7.67,7°40′",
"543744":"7.66,7°40′",
"543743":"7.79,7°50′",
"543742":"7.89,7°50′",
"543741":"7.83,7°50′",
"543740":"7.77,7°50′",
"543737":"7.50,7°30′",
"543736":"7.61,7°40′",
"543735":"7.55,7°30′",
"543734":"7.46,7°30′",
"543733":"7.66,7°40′",
"543732":"7.83,7°50′",
"543731":"7.76,7°50′",
"543730":"7.69,7°40′",
"543727":"7.51,7°30′",
"543726":"7.63,7°40′",
"543725":"7.50,7°30′",
"543724":"7.34,7°20′",
"543723":"7.58,7°30′",
"543722":"7.84,7°50′",
"543721":"7.81,7°50′",
"543720":"7.77,7°50′",
"543717":"7.50,7°30′",
"543716":"7.72,7°40′",
"543715":"7.60,7°40′",
"543714":"7.45,7°30′",
"543713":"7.66,7°40′",
"543712":"7.88,7°50′",
"543711":"7.89,7°50′",
"543710":"7.90,7°50′",
"543707":"7.48,7°30′",
"543706":"7.79,7°50′",
"543705":"7.73,7°40′",
"543704":"7.66,7°40′",
"543703":"7.79,7°50′",
"543702":"7.85,7°50′",
"543701":"7.87,7°50′",
"543700":"7.94,8° 0′",
"543677":"8.08,8° 0′",
"543676":"8.08,8° 0′",
"543675":"8.01,8° 0′",
"543674":"7.96,8° 0′",
"543667":"8.04,8° 0′",
"543666":"8.00,8° 0′",
"543665":"7.95,8° 0′",
"543664":"7.91,7°50′",
"543663":"7.92,8° 0′",
"543657":"7.93,8° 0′",
"543656":"7.93,8° 0′",
"543655":"7.91,7°50′",
"543654":"7.89,7°50′",
"543653":"7.92,8° 0′",
"543647":"7.82,7°50′",
"543646":"7.89,7°50′",
"543645":"7.92,8° 0′",
"543644":"7.92,8° 0′",
"543643":"7.97,8° 0′",
"543642":"7.95,8° 0′",
"543637":"7.78,7°50′",
"543636":"7.91,7°50′",
"543635":"7.97,8° 0′",
"543634":"8.00,8° 0′",
"543633":"8.07,8° 0′",
"543632":"8.03,8° 0′",
"543631":"7.73,7°40′",
"543630":"7.59,7°40′",
"543627":"7.87,7°50′",
"543626":"7.99,8° 0′",
"543625":"8.06,8° 0′",
"543624":"8.07,8° 0′",
"543623":"8.18,8°10′",
"543622":"8.11,8°10′",
"543621":"7.67,7°40′",
"543620":"7.49,7°30′",
"543617":"7.97,8° 0′",
"543616":"8.04,8° 0′",
"543615":"8.06,8° 0′",
"543614":"8.03,8° 0′",
"543613":"8.17,8°10′",
"543612":"8.22,8°10′",
"543611":"7.83,7°50′",
"543610":"7.67,7°40′",
"543607":"7.97,8° 0′",
"543606":"7.97,8° 0′",
"543605":"7.90,7°50′",
"543604":"7.82,7°50′",
"543603":"8.07,8° 0′",
"543602":"8.37,8°20′",
"543601":"8.12,8°10′",
"543600":"7.94,8° 0′",
"543507":"7.99,8° 0′",
"543342":"8.28,8°20′",
"543341":"8.27,8°20′",
"543333":"8.28,8°20′",
"543332":"8.28,8°20′",
"543331":"8.27,8°20′",
"543323":"8.27,8°20′",
"543322":"8.27,8°20′",
"543321":"8.26,8°20′",
"543312":"8.25,8°20′",
"543311":"8.24,8°10′",
"543310":"8.21,8°10′",
"543301":"8.20,8°10′",
"543300":"8.17,8°10′",
"543217":"8.17,8°10′",
"543207":"8.14,8°10′",
"534075":"7.35,7°20′",
"534074":"7.45,7°30′",
"534073":"7.28,7°20′",
"534072":"7.21,7°10′",
"534071":"7.33,7°20′",
"534070":"7.41,7°20′",
"534066":"7.14,7°10′",
"534065":"7.26,7°20′",
"534064":"7.37,7°20′",
"534063":"7.25,7°20′",
"534062":"7.17,7°10′",
"534061":"7.27,7°20′",
"534060":"7.34,7°20′",
"534056":"7.04,7° 0′",
"534055":"7.07,7° 0′",
"534054":"7.20,7°10′",
"534053":"7.22,7°10′",
"534052":"7.19,7°10′",
"534051":"7.24,7°10′",
"534050":"7.27,7°20′",
"534047":"7.02,7° 0′",
"534046":"7.00,7° 0′",
"534045":"7.00,7° 0′",
"534044":"7.14,7°10′",
"534043":"7.25,7°20′",
"534042":"7.25,7°20′",
"534041":"7.21,7°10′",
"534040":"7.21,7°10′",
"534034":"7.16,7°10′",
"534033":"7.24,7°10′",
"534032":"7.23,7°10′",
"534031":"7.18,7°10′",
"534030":"7.15,7°10′",
"534024":"7.11,7°10′",
"534023":"7.16,7°10′",
"534022":"7.19,7°10′",
"534021":"7.16,7°10′",
"534020":"7.12,7°10′",
"534013":"7.13,7°10′",
"534012":"7.16,7°10′",
"534011":"7.15,7°10′",
"534010":"7.11,7°10′",
"534003":"7.07,7° 0′",
"534002":"7.07,7° 0′",
"534001":"7.09,7°10′",
"534000":"7.12,7°10′",
"533977":"7.37,7°20′",
"533976":"7.35,7°20′",
"533975":"7.38,7°20′",
"533974":"7.43,7°30′",
"533973":"7.45,7°30′",
"533972":"7.42,7°30′",
"533971":"7.35,7°20′",
"533970":"7.38,7°20′",
"533967":"7.34,7°20′",
"533966":"7.34,7°20′",
"533965":"7.34,7°20′",
"533964":"7.35,7°20′",
"533963":"7.38,7°20′",
"533962":"7.39,7°20′",
"533961":"7.37,7°20′",
"533960":"7.42,7°30′",
"533957":"7.30,7°20′",
"533956":"7.32,7°20′",
"533955":"7.32,7°20′",
"533954":"7.31,7°20′",
"533953":"7.33,7°20′",
"533952":"7.36,7°20′",
"533951":"7.46,7°30′",
"533950":"7.61,7°40′",
"533947":"7.24,7°10′",
"533946":"7.28,7°20′",
"533945":"7.31,7°20′",
"533944":"7.32,7°20′",
"533943":"7.31,7°20′",
"533942":"7.37,7°20′",
"533941":"7.59,7°40′",
"533940":"7.81,7°50′",
"533937":"7.18,7°10′",
"533936":"7.23,7°10′",
"533935":"7.30,7°20′",
"533934":"7.36,7°20′",
"533933":"7.38,7°20′",
"533932":"7.49,7°30′",
"533931":"7.68,7°40′",
"533930":"7.78,7°50′",
"533926":"7.19,7°10′",
"533925":"7.29,7°20′",
"533924":"7.39,7°20′",
"533923":"7.50,7°30′",
"533922":"7.64,7°40′",
"533921":"7.71,7°40′",
"533920":"7.61,7°40′",
"533917":"7.09,7°10′",
"533916":"7.18,7°10′",
"533915":"7.27,7°20′",
"533914":"7.40,7°20′",
"533913":"7.60,7°40′",
"533912":"7.79,7°50′",
"533911":"7.81,7°50′",
"533910":"7.61,7°40′",
"533907":"7.10,7°10′",
"533906":"7.21,7°10′",
"533905":"7.32,7°20′",
"533904":"7.48,7°30′",
"533903":"7.73,7°40′",
"533902":"7.93,8° 0′",
"533901":"7.96,8° 0′",
"533900":"7.75,7°50′",
"533877":"7.58,7°30′",
"533876":"7.72,7°40′",
"533875":"7.55,7°30′",
"533874":"7.23,7°10′",
"533873":"6.99,7° 0′",
"533872":"6.82,6°50′",
"533871":"6.77,6°50′",
"533870":"7.04,7° 0′",
"533867":"7.60,7°40′",
"533866":"7.63,7°40′",
"533865":"7.21,7°10′",
"533864":"6.75,6°50′",
"533863":"6.60,6°40′",
"533862":"6.65,6°40′",
"533861":"6.90,6°50′",
"533860":"7.30,7°20′",
"533857":"7.74,7°40′",
"533856":"7.54,7°30′",
"533855":"6.84,6°50′",
"533854":"6.29,6°20′",
"533853":"6.33,6°20′",
"533852":"6.60,6°40′",
"533851":"7.02,7° 0′",
"533850":"7.44,7°30′",
"533847":"7.84,7°50′",
"533846":"7.43,7°30′",
"533845":"6.62,6°40′",
"533844":"6.15,6°10′",
"533843":"6.32,6°20′",
"533842":"6.67,6°40′",
"533841":"7.06,7° 0′",
"533840":"7.37,7°20′",
"533837":"7.73,7°40′",
"533836":"7.31,7°20′",
"533835":"6.69,6°40′",
"533834":"6.38,6°20′",
"533833":"6.52,6°30′",
"533832":"6.80,6°50′",
"533831":"7.09,7°10′",
"533830":"7.29,7°20′",
"533827":"7.49,7°30′",
"533826":"7.21,7°10′",
"533825":"6.84,6°50′",
"533824":"6.67,6°40′",
"533823":"6.76,6°50′",
"533822":"6.93,7° 0′",
"533821":"7.11,7°10′",
"533820":"7.25,7°20′",
"533817":"7.39,7°20′",
"533816":"7.14,7°10′",
"533815":"6.89,6°50′",
"533814":"6.82,6°50′",
"533813":"6.90,6°50′",
"533812":"7.01,7° 0′",
"533811":"7.12,7°10′",
"533810":"7.23,7°10′",
"533807":"7.42,7°30′",
"533806":"7.07,7° 0′",
"533805":"6.82,6°50′",
"533804":"6.77,6°50′",
"533803":"6.88,6°50′",
"533802":"7.01,7° 0′",
"533801":"7.11,7°10′",
"533800":"7.19,7°10′",
"533777":"7.54,7°30′",
"533776":"7.80,7°50′",
"533775":"7.80,7°50′",
"533774":"7.80,7°50′",
"533773":"7.83,7°50′",
"533772":"7.78,7°50′",
"533771":"7.78,7°50′",
"533770":"7.85,7°50′",
"533767":"7.64,7°40′",
"533766":"7.77,7°50′",
"533765":"7.81,7°50′",
"533764":"7.84,7°50′",
"533763":"7.83,7°50′",
"533762":"7.74,7°40′",
"533761":"7.75,7°50′",
"533760":"7.76,7°50′",
"533757":"7.62,7°40′",
"533756":"7.68,7°40′",
"533755":"7.74,7°40′",
"533754":"7.79,7°50′",
"533753":"7.75,7°50′",
"533752":"7.73,7°40′",
"533751":"7.79,7°50′",
"533750":"7.76,7°50′",
"533747":"7.49,7°30′",
"533746":"7.56,7°30′",
"533745":"7.63,7°40′",
"533744":"7.67,7°40′",
"533743":"7.63,7°40′",
"533742":"7.68,7°40′",
"533741":"7.79,7°50′",
"533740":"7.70,7°40′",
"533737":"7.38,7°20′",
"533736":"7.46,7°30′",
"533735":"7.55,7°30′",
"533734":"7.58,7°30′",
"533733":"7.57,7°30′",
"533732":"7.61,7°40′",
"533731":"7.61,7°40′",
"533730":"7.38,7°20′",
"533727":"7.33,7°20′",
"533726":"7.42,7°30′",
"533725":"7.51,7°30′",
"533724":"7.54,7°30′",
"533723":"7.54,7°30′",
"533722":"7.50,7°30′",
"533721":"7.32,7°20′",
"533720":"7.05,7° 0′",
"533717":"7.31,7°20′",
"533716":"7.41,7°20′",
"533715":"7.48,7°30′",
"533714":"7.51,7°30′",
"533713":"7.52,7°30′",
"533712":"7.46,7°30′",
"533711":"7.28,7°20′",
"533710":"7.25,7°20′",
"533707":"7.27,7°20′",
"533706":"7.36,7°20′",
"533705":"7.43,7°30′",
"533704":"7.47,7°30′",
"533703":"7.50,7°30′",
"533702":"7.49,7°30′",
"533701":"7.48,7°30′",
"533700":"7.68,7°40′",
"533677":"7.82,7°50′",
"533676":"7.77,7°50′",
"533675":"7.69,7°40′",
"533674":"7.62,7°40′",
"533673":"8.02,8° 0′",
"533672":"8.43,8°30′",
"533671":"8.18,8°10′",
"533670":"7.94,8° 0′",
"533667":"7.69,7°40′",
"533666":"7.64,7°40′",
"533665":"7.61,7°40′",
"533664":"7.62,7°40′",
"533663":"8.00,8° 0′",
"533662":"8.28,8°20′",
"533661":"7.95,8° 0′",
"533660":"7.73,7°40′",
"533657":"7.65,7°40′",
"533656":"7.63,7°40′",
"533655":"7.65,7°40′",
"533654":"7.69,7°40′",
"533653":"7.91,7°50′",
"533652":"8.00,8° 0′",
"533651":"7.74,7°40′",
"533650":"7.62,7°40′",
"533647":"7.61,7°40′",
"533646":"7.69,7°40′",
"533645":"7.71,7°40′",
"533644":"7.69,7°40′",
"533643":"7.71,7°40′",
"533642":"7.76,7°50′",
"533641":"7.70,7°40′",
"533640":"7.68,7°40′",
"533637":"7.41,7°20′",
"533636":"7.69,7°40′",
"533635":"7.74,7°40′",
"533634":"7.64,7°40′",
"533633":"7.58,7°30′",
"533632":"7.66,7°40′",
"533631":"7.74,7°40′",
"533630":"7.76,7°50′",
"533627":"7.31,7°20′",
"533626":"7.72,7°40′",
"533625":"7.73,7°40′",
"533624":"7.60,7°40′",
"533623":"7.56,7°30′",
"533622":"7.69,7°40′",
"533621":"7.80,7°50′",
"533620":"7.78,7°50′",
"533617":"7.65,7°40′",
"533616":"7.89,7°50′",
"533615":"7.72,7°40′",
"533614":"7.57,7°30′",
"533613":"7.59,7°40′",
"533612":"7.73,7°40′",
"533611":"7.79,7°50′",
"533610":"7.72,7°40′",
"533607":"8.04,8° 0′",
"533606":"8.00,8° 0′",
"533605":"7.72,7°40′",
"533604":"7.57,7°30′",
"533603":"7.59,7°40′",
"533602":"7.69,7°40′",
"533601":"7.71,7°40′",
"533600":"7.64,7°40′",
"533577":"7.96,8° 0′",
"533567":"7.82,7°50′",
"533557":"7.74,7°40′",
"533552":"7.92,8° 0′",
"533551":"7.92,8° 0′",
"533547":"7.76,7°50′",
"533543":"7.86,7°50′",
"533542":"7.86,7°50′",
"533541":"7.84,7°50′",
"533540":"7.84,7°50′",
"533537":"7.80,7°50′",
"533536":"7.83,7°50′",
"533533":"7.80,7°50′",
"533532":"7.77,7°50′",
"533531":"7.77,7°50′",
"533530":"7.81,7°50′",
"533527":"7.80,7°50′",
"533526":"7.83,7°50′",
"533525":"7.82,7°50′",
"533524":"7.79,7°50′",
"533523":"7.76,7°50′",
"533522":"7.74,7°40′",
"533521":"7.81,7°50′",
"533520":"7.86,7°50′",
"533517":"7.72,7°40′",
"533516":"7.77,7°50′",
"533515":"7.78,7°50′",
"533514":"7.76,7°50′",
"533513":"7.74,7°40′",
"533512":"7.77,7°50′",
"533511":"7.92,8° 0′",
"533510":"7.96,8° 0′",
"533507":"7.62,7°40′",
"533506":"7.68,7°40′",
"533505":"7.71,7°40′",
"533504":"7.71,7°40′",
"533503":"7.71,7°40′",
"533502":"7.77,7°50′",
"533501":"7.91,7°50′",
"533500":"7.93,8° 0′",
"533447":"7.85,7°50′",
"533446":"7.87,7°50′",
"533445":"7.90,7°50′",
"533444":"7.96,8° 0′",
"533437":"7.79,7°50′",
"533436":"7.77,7°50′",
"533435":"7.79,7°50′",
"533434":"7.84,7°50′",
"533433":"7.96,8° 0′",
"533432":"8.29,8°20′",
"533427":"7.73,7°40′",
"533426":"7.63,7°40′",
"533425":"7.65,7°40′",
"533424":"7.70,7°40′",
"533423":"7.77,7°50′",
"533422":"8.09,8°10′",
"533421":"8.93,9° 0′",
"533420":"9.03,9° 0′",
"533417":"7.69,7°40′",
"533416":"7.49,7°30′",
"533415":"7.54,7°30′",
"533414":"7.60,7°40′",
"533413":"7.59,7°40′",
"533412":"7.82,7°50′",
"533411":"8.55,8°30′",
"533410":"7.97,8° 0′",
"533407":"7.65,7°40′",
"533406":"7.48,7°30′",
"533405":"7.54,7°30′",
"533404":"7.58,7°30′",
"533403":"7.58,7°30′",
"533402":"7.77,7°50′",
"533401":"8.07,8° 0′",
"533400":"7.03,7° 0′",
"533370":"8.14,8°10′",
"533332":"8.04,8° 0′",
"533331":"8.07,8° 0′",
"533330":"8.07,8° 0′",
"533327":"7.97,8° 0′",
"533326":"7.64,7°40′",
"533325":"7.82,7°50′",
"533324":"7.91,7°50′",
"533323":"7.97,8° 0′",
"533322":"8.03,8° 0′",
"533321":"8.07,8° 0′",
"533320":"8.07,8° 0′",
"533317":"6.76,6°50′",
"533316":"7.24,7°10′",
"533315":"7.86,7°50′",
"533314":"7.96,8° 0′",
"533313":"7.97,8° 0′",
"533312":"8.02,8° 0′",
"533311":"8.08,8° 0′",
"533310":"8.06,8° 0′",
"533307":"6.24,6°10′",
"533306":"7.50,7°30′",
"533305":"8.21,8°10′",
"533304":"8.10,8°10′",
"533303":"8.00,8° 0′",
"533302":"8.02,8° 0′",
"533301":"8.09,8°10′",
"533300":"8.01,8° 0′",
"533227":"8.03,8° 0′",
"533226":"7.93,8° 0′",
"533217":"7.97,8° 0′",
"533216":"7.84,7°50′",
"533215":"7.65,7°40′",
"533214":"7.58,7°30′",
"533207":"7.83,7°50′",
"533206":"7.72,7°40′",
"533205":"7.60,7°40′",
"524073":"7.02,7° 0′",
"524072":"6.99,7° 0′",
"524071":"7.05,7° 0′",
"524070":"7.12,7°10′",
"524063":"7.01,7° 0′",
"524062":"7.00,7° 0′",
"524061":"7.02,7° 0′",
"524060":"7.04,7° 0′",
"524052":"7.02,7° 0′",
"524051":"6.99,7° 0′",
"524050":"7.00,7° 0′",
"524040":"7.15,7°10′",
"523977":"7.10,7°10′",
"523976":"7.22,7°10′",
"523975":"7.44,7°30′",
"523974":"7.67,7°40′",
"523973":"7.87,7°50′",
"523972":"8.01,8° 0′",
"523971":"8.01,8° 0′",
"523970":"7.84,7°50′",
"523967":"7.06,7° 0′",
"523966":"7.17,7°10′",
"523965":"7.48,7°30′",
"523964":"7.81,7°50′",
"523961":"7.97,8° 0′",
"523960":"7.82,7°50′",
"523957":"7.07,7° 0′",
"523956":"7.22,7°10′",
"523955":"7.51,7°30′",
"523954":"7.83,7°50′",
"523951":"7.87,7°50′",
"523950":"7.73,7°40′",
"523947":"7.20,7°10′",
"523946":"7.41,7°20′",
"523941":"7.75,7°50′",
"523940":"7.61,7°40′",
"523937":"7.24,7°10′",
"523936":"7.45,7°30′",
"523931":"7.64,7°40′",
"523930":"7.52,7°30′",
"523927":"7.15,7°10′",
"523926":"7.28,7°20′",
"523921":"7.56,7°30′",
"523920":"7.46,7°30′",
"523913":"7.60,7°40′",
"523912":"7.55,7°30′",
"523910":"7.42,7°30′",
"523903":"7.50,7°30′",
"523902":"7.47,7°30′",
"523900":"7.38,7°20′",
"523877":"7.44,7°30′",
"523876":"6.97,7° 0′",
"523875":"6.64,6°40′",
"523874":"6.59,6°40′",
"523873":"6.71,6°40′",
"523872":"6.95,7° 0′",
"523871":"7.11,7°10′",
"523870":"7.16,7°10′",
"523867":"7.42,7°30′",
"523866":"6.87,6°50′",
"523865":"6.49,6°30′",
"523864":"6.38,6°20′",
"523863":"6.55,6°30′",
"523862":"6.93,7° 0′",
"523861":"7.14,7°10′",
"523860":"7.13,7°10′",
"523857":"7.38,7°20′",
"523856":"6.89,6°50′",
"523855":"6.52,6°30′",
"523854":"6.41,6°20′",
"523853":"6.61,6°40′",
"523852":"7.02,7° 0′",
"523851":"7.19,7°10′",
"523850":"7.11,7°10′",
"523847":"7.34,7°20′",
"523846":"6.99,7° 0′",
"523844":"6.61,6°40′",
"523843":"6.76,6°50′",
"523842":"7.05,7° 0′",
"523841":"7.15,7°10′",
"523840":"7.12,7°10′",
"523837":"7.33,7°20′",
"523836":"7.10,7°10′",
"523834":"6.79,6°50′",
"523833":"6.82,6°50′",
"523832":"6.90,6°50′",
"523831":"7.02,7° 0′",
"523830":"7.23,7°10′",
"523827":"7.34,7°20′",
"523826":"7.18,7°10′",
"523822":"6.80,6°50′",
"523821":"6.95,7° 0′",
"523820":"7.30,7°20′",
"523817":"7.34,7°20′",
"523816":"7.22,7°10′",
"523815":"7.09,7°10′",
"523812":"6.84,6°50′",
"523811":"6.94,7° 0′",
"523810":"7.22,7°10′",
"523807":"7.31,7°20′",
"523806":"7.23,7°10′",
"523805":"7.12,7°10′",
"523802":"6.94,7° 0′",
"523801":"6.98,7° 0′",
"523800":"7.09,7°10′",
"523777":"7.20,7°10′",
"523776":"7.26,7°20′",
"523775":"7.34,7°20′",
"523774":"7.42,7°30′",
"523773":"7.47,7°30′",
"523772":"7.50,7°30′",
"523771":"7.57,7°30′",
"523770":"7.78,7°50′",
"523767":"7.10,7°10′",
"523766":"7.13,7°10′",
"523765":"7.23,7°10′",
"523764":"7.37,7°20′",
"523763":"7.44,7°30′",
"523762":"7.46,7°30′",
"523761":"7.50,7°30′",
"523760":"7.61,7°40′",
"523757":"7.03,7° 0′",
"523756":"7.02,7° 0′",
"523755":"7.13,7°10′",
"523754":"7.32,7°20′",
"523753":"7.39,7°20′",
"523752":"7.40,7°20′",
"523751":"7.40,7°20′",
"523750":"7.44,7°30′",
"523747":"7.07,7° 0′",
"523746":"7.04,7° 0′",
"523745":"7.13,7°10′",
"523744":"7.28,7°20′",
"523743":"7.33,7°20′",
"523742":"7.33,7°20′",
"523741":"7.34,7°20′",
"523740":"7.35,7°20′",
"523737":"7.34,7°20′",
"523736":"7.27,7°20′",
"523735":"7.24,7°10′",
"523734":"7.28,7°20′",
"523733":"7.28,7°20′",
"523732":"7.30,7°20′",
"523731":"7.33,7°20′",
"523730":"7.35,7°20′",
"523727":"7.53,7°30′",
"523726":"7.46,7°30′",
"523725":"7.34,7°20′",
"523724":"7.29,7°20′",
"523723":"7.26,7°20′",
"523722":"7.28,7°20′",
"523721":"7.33,7°20′",
"523720":"7.35,7°20′",
"523717":"7.46,7°30′",
"523716":"7.44,7°30′",
"523715":"7.35,7°20′",
"523714":"7.28,7°20′",
"523713":"7.24,7°10′",
"523712":"7.26,7°20′",
"523711":"7.30,7°20′",
"523710":"7.33,7°20′",
"523707":"7.25,7°20′",
"523706":"7.31,7°20′",
"523705":"7.29,7°20′",
"523704":"7.25,7°20′",
"523703":"7.21,7°10′",
"523702":"7.21,7°10′",
"523701":"7.25,7°20′",
"523700":"7.31,7°20′",
"523677":"8.00,8° 0′",
"523676":"7.90,7°50′",
"523675":"7.68,7°40′",
"523674":"7.56,7°30′",
"523673":"7.57,7°30′",
"523672":"7.62,7°40′",
"523671":"7.63,7°40′",
"523670":"7.59,7°40′",
"523667":"7.72,7°40′",
"523666":"7.71,7°40′",
"523665":"7.60,7°40′",
"523664":"7.53,7°30′",
"523663":"7.53,7°30′",
"523662":"7.57,7°30′",
"523661":"7.58,7°30′",
"523660":"7.57,7°30′",
"523657":"7.51,7°30′",
"523656":"7.55,7°30′",
"523655":"7.52,7°30′",
"523654":"7.49,7°30′",
"523653":"7.50,7°30′",
"523652":"7.54,7°30′",
"523651":"7.56,7°30′",
"523650":"7.56,7°30′",
"523647":"7.41,7°20′",
"523646":"7.45,7°30′",
"523645":"7.46,7°30′",
"523644":"7.45,7°30′",
"523643":"7.47,7°30′",
"523642":"7.51,7°30′",
"523641":"7.53,7°30′",
"523640":"7.54,7°30′",
"523637":"7.38,7°20′",
"523636":"7.40,7°20′",
"523635":"7.41,7°20′",
"523634":"7.41,7°20′",
"523633":"7.43,7°30′",
"523632":"7.47,7°30′",
"523631":"7.50,7°30′",
"523630":"7.51,7°30′",
"523627":"7.36,7°20′",
"523626":"7.37,7°20′",
"523625":"7.37,7°20′",
"523624":"7.36,7°20′",
"523623":"7.37,7°20′",
"523622":"7.42,7°30′",
"523621":"7.46,7°30′",
"523620":"7.49,7°30′",
"523617":"7.35,7°20′",
"523616":"7.35,7°20′",
"523614":"7.33,7°20′",
"523613":"7.35,7°20′",
"523612":"7.39,7°20′",
"523611":"7.43,7°30′",
"523610":"7.47,7°30′",
"523607":"7.33,7°20′",
"523606":"7.33,7°20′",
"523604":"7.32,7°20′",
"523603":"7.32,7°20′",
"523602":"7.34,7°20′",
"523601":"7.38,7°20′",
"523600":"7.44,7°30′",
"523577":"7.58,7°30′",
"523576":"7.61,7°40′",
"523575":"7.63,7°40′",
"523574":"7.68,7°40′",
"523573":"7.72,7°40′",
"523572":"7.74,7°40′",
"523571":"7.78,7°50′",
"523570":"7.80,7°50′",
"523567":"7.56,7°30′",
"523566":"7.57,7°30′",
"523565":"7.60,7°40′",
"523564":"7.71,7°40′",
"523563":"7.82,7°50′",
"523562":"7.79,7°50′",
"523561":"7.73,7°40′",
"523560":"7.76,7°50′",
"523557":"7.55,7°30′",
"523556":"7.56,7°30′",
"523555":"7.61,7°40′",
"523554":"7.76,7°50′",
"523553":"7.90,7°50′",
"523552":"7.85,7°50′",
"523551":"7.76,7°50′",
"523550":"7.81,7°50′",
"523547":"7.54,7°30′",
"523546":"7.57,7°30′",
"523545":"7.62,7°40′",
"523544":"7.73,7°40′",
"523543":"7.82,7°50′",
"523542":"7.78,7°50′",
"523541":"7.74,7°40′",
"523540":"7.80,7°50′",
"523537":"7.53,7°30′",
"523536":"7.56,7°30′",
"523535":"7.57,7°30′",
"523534":"7.54,7°30′",
"523533":"7.56,7°30′",
"523532":"7.60,7°40′",
"523531":"7.65,7°40′",
"523530":"7.72,7°40′",
"523527":"7.52,7°30′",
"523526":"7.55,7°30′",
"523525":"7.49,7°30′",
"523524":"7.34,7°20′",
"523523":"7.32,7°20′",
"523522":"7.44,7°30′",
"523521":"7.55,7°30′",
"523520":"7.63,7°40′",
"523517":"7.51,7°30′",
"523516":"7.54,7°30′",
"523515":"7.45,7°30′",
"523514":"7.26,7°20′",
"523513":"7.22,7°10′",
"523512":"7.36,7°20′",
"523511":"7.50,7°30′",
"523510":"7.57,7°30′",
"523507":"7.49,7°30′",
"523506":"7.52,7°30′",
"523505":"7.44,7°30′",
"523504":"7.29,7°20′",
"523503":"7.25,7°20′",
"523502":"7.35,7°20′",
"523501":"7.47,7°30′",
"523500":"7.55,7°30′",
"523477":"7.69,7°40′",
"523476":"7.65,7°40′",
"523475":"7.68,7°40′",
"523474":"7.63,7°40′",
"523473":"7.63,7°40′",
"523472":"7.87,7°50′",
"523471":"7.98,8° 0′",
"523470":"7.11,7°10′",
"523467":"7.86,7°50′",
"523466":"7.98,8° 0′",
"523465":"7.92,8° 0′",
"523464":"7.70,7°40′",
"523463":"7.61,7°40′",
"523462":"7.79,7°50′",
"523461":"7.96,8° 0′",
"523460":"7.65,7°40′",
"523457":"7.98,8° 0′",
"523456":"8.13,8°10′",
"523455":"8.02,8° 0′",
"523454":"7.73,7°40′",
"523453":"7.55,7°30′",
"523452":"7.65,7°40′",
"523451":"7.85,7°50′",
"523450":"7.82,7°50′",
"523447":"7.88,7°50′",
"523446":"7.91,7°50′",
"523445":"7.83,7°50′",
"523444":"7.67,7°40′",
"523443":"7.55,7°30′",
"523442":"7.63,7°40′",
"523441":"7.84,7°50′",
"523440":"7.89,7°50′",
"523437":"7.69,7°40′",
"523436":"7.55,7°30′",
"523435":"7.52,7°30′",
"523434":"7.56,7°30′",
"523433":"7.57,7°30′",
"523432":"7.69,7°40′",
"523431":"7.91,7°50′",
"523430":"7.96,8° 0′",
"523427":"7.57,7°30′",
"523426":"7.42,7°30′",
"523425":"7.41,7°20′",
"523424":"7.49,7°30′",
"523423":"7.56,7°30′",
"523422":"7.68,7°40′",
"523421":"7.88,7°50′",
"523420":"7.93,8° 0′",
"523417":"7.53,7°30′",
"523416":"7.44,7°30′",
"523415":"7.42,7°30′",
"523414":"7.47,7°30′",
"523413":"7.52,7°30′",
"523412":"7.61,7°40′",
"523411":"7.75,7°50′",
"523410":"7.81,7°50′",
"523407":"7.53,7°30′",
"523406":"7.47,7°30′",
"523405":"7.45,7°30′",
"523404":"7.46,7°30′",
"523403":"7.49,7°30′",
"523402":"7.55,7°30′",
"523401":"7.61,7°40′",
"523400":"7.65,7°40′",
"523377":"6.92,7° 0′",
"523376":"8.13,8°10′",
"523375":"8.49,8°30′",
"523374":"8.17,8°10′",
"523373":"7.98,8° 0′",
"523372":"7.98,8° 0′",
"523371":"8.09,8°10′",
"523370":"8.01,8° 0′",
"523367":"7.70,7°40′",
"523366":"8.32,8°20′",
"523365":"8.41,8°20′",
"523364":"8.10,8°10′",
"523363":"7.86,7°50′",
"523362":"7.79,7°50′",
"523361":"7.93,8° 0′",
"523360":"7.97,8° 0′",
"523357":"7.85,7°50′",
"523356":"8.11,8°10′",
"523355":"8.16,8°10′",
"523354":"7.93,8° 0′",
"523353":"7.67,7°40′",
"523352":"7.44,7°30′",
"523351":"7.48,7°30′",
"523350":"7.67,7°40′",
"523347":"7.79,7°50′",
"523346":"7.82,7°50′",
"523345":"7.89,7°50′",
"523344":"7.77,7°50′",
"523343":"7.53,7°30′",
"523342":"7.24,7°10′",
"523341":"7.17,7°10′",
"523340":"7.36,7°20′",
"523337":"7.67,7°40′",
"523336":"7.48,7°30′",
"523335":"7.63,7°40′",
"523334":"7.66,7°40′",
"523333":"7.53,7°30′",
"523332":"7.38,7°20′",
"523331":"7.35,7°20′",
"523330":"7.43,7°30′",
"523327":"7.65,7°40′",
"523326":"7.51,7°30′",
"523325":"7.61,7°40′",
"523324":"7.62,7°40′",
"523323":"7.58,7°30′",
"523322":"7.59,7°40′",
"523321":"7.63,7°40′",
"523320":"7.63,7°40′",
"523317":"7.72,7°40′",
"523316":"7.69,7°40′",
"523315":"7.70,7°40′",
"523314":"7.63,7°40′",
"523313":"7.62,7°40′",
"523312":"7.64,7°40′",
"523311":"7.70,7°40′",
"523310":"7.71,7°40′",
"523307":"7.62,7°40′",
"523306":"7.58,7°30′",
"523305":"7.57,7°30′",
"523304":"7.60,7°40′",
"523303":"7.64,7°40′",
"523302":"7.61,7°40′",
"523301":"7.62,7°40′",
"523300":"7.69,7°40′",
"523277":"7.76,7°50′",
"523276":"7.67,7°40′",
"523275":"7.63,7°40′",
"523274":"7.66,7°40′",
"523267":"7.79,7°50′",
"523266":"7.71,7°40′",
"523265":"7.64,7°40′",
"523264":"7.66,7°40′",
"523263":"7.76,7°50′",
"523257":"7.71,7°40′",
"523256":"7.73,7°40′",
"523255":"7.58,7°30′",
"523254":"7.54,7°30′",
"523253":"7.67,7°40′",
"523252":"7.72,7°40′",
"523247":"7.56,7°30′",
"523246":"7.68,7°40′",
"523245":"7.54,7°30′",
"523244":"7.50,7°30′",
"523243":"7.61,7°40′",
"523242":"7.66,7°40′",
"523241":"7.68,7°40′",
"523237":"7.54,7°30′",
"523236":"7.64,7°40′",
"523235":"7.61,7°40′",
"523234":"7.62,7°40′",
"523233":"7.65,7°40′",
"523232":"7.64,7°40′",
"523231":"7.65,7°40′",
"523230":"7.71,7°40′",
"523227":"7.61,7°40′",
"523226":"7.63,7°40′",
"523225":"7.67,7°40′",
"523224":"7.71,7°40′",
"523223":"7.69,7°40′",
"523222":"7.67,7°40′",
"523221":"7.63,7°40′",
"523220":"7.66,7°40′",
"523217":"7.67,7°40′",
"523216":"7.64,7°40′",
"523215":"7.65,7°40′",
"523214":"7.65,7°40′",
"523213":"7.66,7°40′",
"523212":"7.70,7°40′",
"523211":"7.58,7°30′",
"523210":"7.55,7°30′",
"523207":"7.69,7°40′",
"523206":"7.65,7°40′",
"523205":"7.60,7°40′",
"523204":"7.55,7°30′",
"523203":"7.57,7°30′",
"523202":"7.62,7°40′",
"523201":"7.46,7°30′",
"523200":"7.42,7°30′",
"523127":"7.87,7°50′",
"523126":"7.96,8° 0′",
"523117":"7.88,7°50′",
"523116":"8.03,8° 0′",
"523111":"7.63,7°40′",
"523107":"7.80,7°50′",
"523106":"7.99,8° 0′",
"523105":"7.86,7°50′",
"523104":"7.76,7°50′",
"522904":"7.63,7°40′",
"522903":"7.64,7°40′",
"513962":"7.35,7°20′",
"513952":"7.31,7°20′",
"513942":"7.28,7°20′",
"513941":"7.27,7°20′",
"513932":"7.25,7°20′",
"513931":"7.24,7°10′",
"513921":"7.23,7°10′",
"513920":"7.21,7°10′",
"513914":"7.22,7°10′",
"513913":"7.22,7°10′",
"513904":"7.21,7°10′",
"513903":"7.22,7°10′",
"513877":"7.28,7°20′",
"513876":"7.22,7°10′",
"513872":"7.02,7° 0′",
"513871":"7.03,7° 0′",
"513870":"7.06,7° 0′",
"513867":"7.26,7°20′",
"513777":"7.14,7°10′",
"513776":"7.21,7°10′",
"513775":"7.23,7°10′",
"513773":"7.19,7°10′",
"513772":"7.18,7°10′",
"513771":"7.23,7°10′",
"513770":"7.29,7°20′",
"513760":"7.26,7°20′",
"513677":"7.31,7°20′",
"513675":"7.31,7°20′",
"513674":"7.28,7°20′",
"513673":"7.25,7°20′",
"513672":"7.25,7°20′",
"513671":"7.33,7°20′",
"513670":"7.42,7°30′",
"513667":"7.27,7°20′",
"513666":"7.28,7°20′",
"513665":"7.28,7°20′",
"513664":"7.24,7°10′",
"513663":"7.17,7°10′",
"513662":"7.19,7°10′",
"513661":"7.34,7°20′",
"513660":"7.42,7°30′",
"513657":"7.23,7°10′",
"513656":"7.25,7°20′",
"513655":"7.26,7°20′",
"513654":"7.22,7°10′",
"513653":"7.16,7°10′",
"513652":"7.21,7°10′",
"513651":"7.34,7°20′",
"513650":"7.39,7°20′",
"513647":"7.19,7°10′",
"513646":"7.22,7°10′",
"513645":"7.25,7°20′",
"513644":"7.22,7°10′",
"513643":"7.17,7°10′",
"513642":"7.17,7°10′",
"513641":"7.21,7°10′",
"513640":"7.26,7°20′",
"513637":"7.17,7°10′",
"513636":"7.20,7°10′",
"513635":"7.23,7°10′",
"513634":"7.21,7°10′",
"513633":"7.18,7°10′",
"513632":"7.12,7°10′",
"513631":"7.09,7°10′",
"513630":"7.16,7°10′",
"513626":"7.17,7°10′",
"513624":"7.20,7°10′",
"513623":"7.18,7°10′",
"513622":"7.15,7°10′",
"513621":"7.11,7°10′",
"513620":"7.15,7°10′",
"513613":"7.17,7°10′",
"513612":"7.15,7°10′",
"513611":"7.11,7°10′",
"513610":"7.14,7°10′",
"513602":"7.12,7°10′",
"513601":"7.09,7°10′",
"513600":"7.09,7°10′",
"513577":"7.46,7°30′",
"513576":"7.46,7°30′",
"513575":"7.41,7°20′",
"513574":"7.33,7°20′",
"513573":"7.31,7°20′",
"513572":"7.36,7°20′",
"513571":"7.45,7°30′",
"513570":"7.51,7°30′",
"513567":"7.44,7°30′",
"513566":"7.42,7°30′",
"513565":"7.36,7°20′",
"513564":"7.33,7°20′",
"513563":"7.33,7°20′",
"513562":"7.36,7°20′",
"513560":"7.45,7°30′",
"513557":"7.41,7°20′",
"513556":"7.39,7°20′",
"513555":"7.34,7°20′",
"513554":"7.32,7°20′",
"513553":"7.33,7°20′",
"513552":"7.36,7°20′",
"513551":"7.38,7°20′",
"513547":"7.35,7°20′",
"513546":"7.38,7°20′",
"513545":"7.35,7°20′",
"513544":"7.33,7°20′",
"513543":"7.33,7°20′",
"513542":"7.35,7°20′",
"513541":"7.36,7°20′",
"513537":"7.31,7°20′",
"513536":"7.41,7°20′",
"513535":"7.41,7°20′",
"513534":"7.36,7°20′",
"513533":"7.33,7°20′",
"513532":"7.34,7°20′",
"513531":"7.35,7°20′",
"513530":"7.35,7°20′",
"513527":"7.32,7°20′",
"513526":"7.50,7°30′",
"513525":"7.53,7°30′",
"513524":"7.40,7°20′",
"513523":"7.32,7°20′",
"513522":"7.34,7°20′",
"513521":"7.35,7°20′",
"513520":"7.32,7°20′",
"513517":"7.31,7°20′",
"513516":"7.54,7°30′",
"513515":"7.58,7°30′",
"513514":"7.40,7°20′",
"513513":"7.30,7°20′",
"513512":"7.34,7°20′",
"513511":"7.34,7°20′",
"513510":"7.26,7°20′",
"513507":"7.22,7°10′",
"513506":"7.41,7°20′",
"513505":"7.47,7°30′",
"513504":"7.35,7°20′",
"513503":"7.29,7°20′",
"513502":"7.32,7°20′",
"513501":"7.24,7°10′",
"513500":"7.11,7°10′",
"513477":"7.51,7°30′",
"513474":"7.47,7°30′",
"513473":"7.49,7°30′",
"513471":"7.56,7°30′",
"513470":"7.56,7°30′",
"513467":"7.47,7°30′",
"513466":"7.46,7°30′",
"513463":"7.49,7°30′",
"513462":"7.52,7°30′",
"513461":"7.55,7°30′",
"513460":"7.55,7°30′",
"513457":"7.44,7°30′",
"513456":"7.45,7°30′",
"513453":"7.47,7°30′",
"513452":"7.50,7°30′",
"513451":"7.53,7°30′",
"513450":"7.56,7°30′",
"513447":"7.41,7°20′",
"513446":"7.44,7°30′",
"513445":"7.44,7°30′",
"513442":"7.44,7°30′",
"513441":"7.46,7°30′",
"513440":"7.52,7°30′",
"513437":"7.37,7°20′",
"513436":"7.40,7°20′",
"513435":"7.41,7°20′",
"513434":"7.41,7°20′",
"513433":"7.40,7°20′",
"513432":"7.40,7°20′",
"513431":"7.40,7°20′",
"513430":"7.45,7°30′",
"513427":"7.32,7°20′",
"513426":"7.34,7°20′",
"513425":"7.36,7°20′",
"513424":"7.37,7°20′",
"513423":"7.38,7°20′",
"513422":"7.39,7°20′",
"513421":"7.38,7°20′",
"513420":"7.39,7°20′",
"513416":"7.27,7°20′",
"513415":"7.31,7°20′",
"513414":"7.33,7°20′",
"513413":"7.35,7°20′",
"513412":"7.37,7°20′",
"513411":"7.37,7°20′",
"513410":"7.37,7°20′",
"513405":"7.27,7°20′",
"513404":"7.29,7°20′",
"513403":"7.29,7°20′",
"513402":"7.31,7°20′",
"513401":"7.35,7°20′",
"513400":"7.36,7°20′",
"513377":"7.49,7°30′",
"513376":"7.37,7°20′",
"513375":"7.42,7°30′",
"513374":"7.64,7°40′",
"513373":"7.74,7°40′",
"513372":"7.66,7°40′",
"513371":"7.59,7°40′",
"513370":"7.65,7°40′",
"513367":"7.52,7°30′",
"513366":"7.46,7°30′",
"513365":"7.55,7°30′",
"513364":"7.79,7°50′",
"513363":"7.97,8° 0′",
"513362":"7.91,7°50′",
"513361":"7.69,7°40′",
"513360":"7.62,7°40′",
"513357":"7.58,7°30′",
"513356":"7.59,7°40′",
"513355":"7.69,7°40′",
"513354":"7.94,8° 0′",
"513353":"8.25,8°20′",
"513352":"8.22,8°10′",
"513351":"7.78,7°50′",
"513350":"7.52,7°30′",
"513347":"7.58,7°30′",
"513346":"7.62,7°40′",
"513345":"7.72,7°40′",
"513344":"7.97,8° 0′",
"513343":"8.29,8°20′",
"513342":"8.22,8°10′",
"513341":"7.67,7°40′",
"513340":"7.36,7°20′",
"513337":"7.50,7°30′",
"513336":"7.54,7°30′",
"513335":"7.64,7°40′",
"513334":"7.85,7°50′",
"513333":"8.06,8° 0′",
"513332":"7.95,8° 0′",
"513331":"7.48,7°30′",
"513330":"7.28,7°20′",
"513327":"7.39,7°20′",
"513326":"7.42,7°30′",
"513325":"7.52,7°30′",
"513324":"7.67,7°40′",
"513322":"7.67,7°40′",
"513321":"7.42,7°30′",
"513320":"7.34,7°20′",
"513317":"7.36,7°20′",
"513316":"7.37,7°20′",
"513315":"7.44,7°30′",
"513314":"7.52,7°30′",
"513313":"7.58,7°30′",
"513312":"7.53,7°30′",
"513311":"7.42,7°30′",
"513310":"7.40,7°20′",
"513307":"7.37,7°20′",
"513306":"7.37,7°20′",
"513305":"7.39,7°20′",
"513304":"7.42,7°30′",
"513302":"7.43,7°30′",
"513300":"7.39,7°20′",
"513277":"7.68,7°40′",
"513276":"7.65,7°40′",
"513275":"7.60,7°40′",
"513274":"7.53,7°30′",
"513273":"7.48,7°30′",
"513272":"7.47,7°30′",
"513271":"7.41,7°20′",
"513270":"7.44,7°30′",
"513267":"7.63,7°40′",
"513266":"7.61,7°40′",
"513265":"7.58,7°30′",
"513264":"7.52,7°30′",
"513263":"7.44,7°30′",
"513262":"7.39,7°20′",
"513261":"7.46,7°30′",
"513260":"7.58,7°30′",
"513257":"7.51,7°30′",
"513256":"7.52,7°30′",
"513255":"7.51,7°30′",
"513254":"7.49,7°30′",
"513253":"7.43,7°30′",
"513252":"7.40,7°20′",
"513251":"7.51,7°30′",
"513250":"7.62,7°40′",
"513247":"7.39,7°20′",
"513246":"7.42,7°30′",
"513245":"7.43,7°30′",
"513244":"7.45,7°30′",
"513243":"7.44,7°30′",
"513242":"7.43,7°30′",
"513241":"7.50,7°30′",
"513240":"7.56,7°30′",
"513237":"7.34,7°20′",
"513236":"7.37,7°20′",
"513235":"7.38,7°20′",
"513234":"7.42,7°30′",
"513233":"7.44,7°30′",
"513232":"7.44,7°30′",
"513231":"7.46,7°30′",
"513230":"7.47,7°30′",
"513227":"7.39,7°20′",
"513226":"7.38,7°20′",
"513225":"7.37,7°20′",
"513224":"7.40,7°20′",
"513223":"7.42,7°30′",
"513222":"7.41,7°20′",
"513221":"7.40,7°20′",
"513220":"7.40,7°20′",
"513217":"7.43,7°30′",
"513216":"7.39,7°20′",
"513215":"7.35,7°20′",
"513214":"7.37,7°20′",
"513213":"7.38,7°20′",
"513212":"7.38,7°20′",
"513211":"7.37,7°20′",
"513210":"7.40,7°20′",
"513207":"7.40,7°20′",
"513206":"7.34,7°20′",
"513205":"7.29,7°20′",
"513204":"7.31,7°20′",
"513203":"7.35,7°20′",
"513202":"7.37,7°20′",
"513201":"7.36,7°20′",
"513200":"7.40,7°20′",
"513177":"7.70,7°40′",
"513176":"7.83,7°50′",
"513175":"7.72,7°40′",
"513174":"7.68,7°40′",
"513167":"7.67,7°40′",
"513166":"7.67,7°40′",
"513165":"7.57,7°30′",
"513164":"7.60,7°40′",
"513163":"7.75,7°50′",
"513162":"7.72,7°40′",
"513157":"7.63,7°40′",
"513156":"7.57,7°30′",
"513155":"7.50,7°30′",
"513154":"7.60,7°40′",
"513153":"7.83,7°50′",
"513152":"7.77,7°50′",
"513151":"7.50,7°30′",
"513150":"7.26,7°20′",
"513147":"7.54,7°30′",
"513146":"7.50,7°30′",
"513145":"7.48,7°30′",
"513144":"7.55,7°30′",
"513143":"7.67,7°40′",
"513142":"7.66,7°40′",
"513141":"7.49,7°30′",
"513140":"7.29,7°20′",
"513137":"7.44,7°30′",
"513136":"7.41,7°20′",
"513135":"7.42,7°30′",
"513134":"7.38,7°20′",
"513133":"7.35,7°20′",
"513132":"7.43,7°30′",
"513131":"7.52,7°30′",
"513130":"7.42,7°30′",
"513127":"7.38,7°20′",
"513126":"7.35,7°20′",
"513125":"7.36,7°20′",
"513124":"7.31,7°20′",
"513123":"7.23,7°10′",
"513122":"7.35,7°20′",
"513121":"7.51,7°30′",
"513120":"7.41,7°20′",
"513117":"7.41,7°20′",
"513116":"7.38,7°20′",
"513115":"7.38,7°20′",
"513114":"7.37,7°20′",
"513113":"7.36,7°20′",
"513112":"7.41,7°20′",
"513111":"7.42,7°30′",
"513110":"7.36,7°20′",
"513107":"7.44,7°30′",
"513106":"7.42,7°30′",
"513105":"7.41,7°20′",
"513104":"7.42,7°30′",
"513103":"7.43,7°30′",
"513102":"7.42,7°30′",
"513101":"7.37,7°20′",
"513100":"7.42,7°30′",
"513057":"7.17,7°10′",
"513047":"7.15,7°10′",
"513046":"7.17,7°10′",
"513037":"7.17,7°10′",
"513036":"7.14,7°10′",
"513027":"7.14,7°10′",
"513020":"7.49,7°30′",
"513017":"7.26,7°20′",
"513016":"7.30,7°20′",
"513007":"7.51,7°30′",
"513006":"7.54,7°30′",
"513005":"7.53,7°30′",
"512973":"7.63,7°40′",
"512972":"7.64,7°40′",
"512963":"7.63,7°40′",
"512962":"7.64,7°40′",
"512953":"7.63,7°40′",
"512952":"7.65,7°40′",
"512943":"7.63,7°40′",
"512942":"7.66,7°40′",
"512941":"7.66,7°40′",
"512933":"7.61,7°40′",
"512932":"7.65,7°40′",
"512931":"7.66,7°40′",
"512922":"7.62,7°40′",
"512921":"7.62,7°40′",
"512912":"7.56,7°30′",
"512911":"7.56,7°30′",
"503965":"7.21,7°10′",
"503964":"7.21,7°10′",
"503932":"7.22,7°10′",
"503876":"7.14,7°10′",
"503672":"7.09,7°10′",
"503671":"7.06,7° 0′",
"503670":"7.05,7° 0′",
"503661":"7.06,7° 0′",
"503660":"7.08,7° 0′",
"503650":"7.14,7°10′",
"503640":"7.16,7°10′",
"503577":"7.11,7°10′",
"503576":"7.19,7°10′",
"503575":"7.24,7°10′",
"503574":"7.26,7°20′",
"503573":"7.30,7°20′",
"503572":"7.30,7°20′",
"503571":"7.05,7° 0′",
"503570":"6.87,6°50′",
"503567":"7.14,7°10′",
"503566":"7.14,7°10′",
"503565":"7.12,7°10′",
"503564":"7.17,7°10′",
"503563":"7.27,7°20′",
"503562":"7.24,7°10′",
"503561":"6.92,7° 0′",
"503560":"6.74,6°40′",
"503557":"7.23,7°10′",
"503556":"7.21,7°10′",
"503555":"7.12,7°10′",
"503554":"7.11,7°10′",
"503553":"7.18,7°10′",
"503552":"7.16,7°10′",
"503551":"6.91,6°50′",
"503547":"7.25,7°20′",
"503546":"7.24,7°10′",
"503545":"7.14,7°10′",
"503544":"7.10,7°10′",
"503543":"7.11,7°10′",
"503542":"7.08,7° 0′",
"503537":"7.19,7°10′",
"503536":"7.19,7°10′",
"503535":"7.14,7°10′",
"503534":"7.10,7°10′",
"503533":"7.08,7° 0′",
"503532":"7.05,7° 0′",
"503527":"7.13,7°10′",
"503526":"7.13,7°10′",
"503525":"7.11,7°10′",
"503524":"7.08,7° 0′",
"503523":"7.06,7° 0′",
"503516":"7.08,7° 0′",
"503515":"7.07,7° 0′",
"503514":"7.06,7° 0′",
"503475":"7.25,7°20′",
"503474":"7.27,7°20′",
"503473":"7.24,7°10′",
"503472":"7.26,7°20′",
"503471":"7.31,7°20′",
"503470":"7.36,7°20′",
"503466":"7.10,7°10′",
"503465":"7.24,7°10′",
"503464":"7.26,7°20′",
"503463":"7.22,7°10′",
"503462":"7.23,7°10′",
"503461":"7.29,7°20′",
"503460":"7.35,7°20′",
"503456":"7.09,7°10′",
"503455":"7.22,7°10′",
"503454":"7.25,7°20′",
"503453":"7.22,7°10′",
"503452":"7.22,7°10′",
"503451":"7.27,7°20′",
"503450":"7.34,7°20′",
"503444":"7.21,7°10′",
"503443":"7.20,7°10′",
"503442":"7.21,7°10′",
"503441":"7.25,7°20′",
"503440":"7.30,7°20′",
"503434":"7.17,7°10′",
"503433":"7.18,7°10′",
"503432":"7.19,7°10′",
"503431":"7.21,7°10′",
"503430":"7.24,7°10′",
"503422":"7.16,7°10′",
"503421":"7.17,7°10′",
"503420":"7.19,7°10′",
"503412":"7.14,7°10′",
"503411":"7.13,7°10′",
"503410":"7.14,7°10′",
"503401":"7.14,7°10′",
"503400":"7.09,7°10′",
"503377":"7.38,7°20′",
"503376":"7.37,7°20′",
"503375":"7.34,7°20′",
"503374":"7.33,7°20′",
"503373":"7.35,7°20′",
"503372":"7.37,7°20′",
"503371":"7.35,7°20′",
"503370":"7.34,7°20′",
"503367":"7.38,7°20′",
"503366":"7.35,7°20′",
"503365":"7.30,7°20′",
"503364":"7.26,7°20′",
"503363":"7.28,7°20′",
"503362":"7.32,7°20′",
"503361":"7.32,7°20′",
"503360":"7.31,7°20′",
"503357":"7.37,7°20′",
"503356":"7.33,7°20′",
"503355":"7.29,7°20′",
"503354":"7.23,7°10′",
"503353":"7.24,7°10′",
"503352":"7.29,7°20′",
"503351":"7.30,7°20′",
"503350":"7.30,7°20′",
"503347":"7.29,7°20′",
"503346":"7.28,7°20′",
"503345":"7.35,7°20′",
"503344":"7.29,7°20′",
"503343":"7.24,7°10′",
"503342":"7.27,7°20′",
"503341":"7.28,7°20′",
"503340":"7.27,7°20′",
"503337":"7.21,7°10′",
"503336":"7.26,7°20′",
"503335":"7.43,7°30′",
"503334":"7.36,7°20′",
"503333":"7.24,7°10′",
"503332":"7.21,7°10′",
"503331":"7.21,7°10′",
"503330":"7.23,7°10′",
"503327":"7.19,7°10′",
"503326":"7.27,7°20′",
"503325":"7.42,7°30′",
"503324":"7.34,7°20′",
"503323":"7.20,7°10′",
"503322":"7.14,7°10′",
"503321":"7.15,7°10′",
"503320":"7.21,7°10′",
"503317":"7.18,7°10′",
"503314":"7.27,7°20′",
"503313":"7.18,7°10′",
"503312":"7.13,7°10′",
"503311":"7.16,7°10′",
"503310":"7.24,7°10′",
"503303":"7.18,7°10′",
"503302":"7.17,7°10′",
"503301":"7.19,7°10′",
"503300":"7.26,7°20′",
"503277":"7.32,7°20′",
"503276":"7.25,7°20′",
"503275":"7.20,7°10′",
"503274":"7.24,7°10′",
"503273":"7.31,7°20′",
"503272":"7.35,7°20′",
"503271":"7.36,7°20′",
"503270":"7.38,7°20′",
"503267":"7.28,7°20′",
"503266":"7.20,7°10′",
"503265":"7.15,7°10′",
"503264":"7.20,7°10′",
"503263":"7.27,7°20′",
"503262":"7.33,7°20′",
"503261":"7.34,7°20′",
"503260":"7.35,7°20′",
"503257":"7.27,7°20′",
"503256":"7.19,7°10′",
"503255":"7.14,7°10′",
"503253":"7.24,7°10′",
"503252":"7.29,7°20′",
"503251":"7.30,7°20′",
"503250":"7.31,7°20′",
"503247":"7.25,7°20′",
"503246":"7.19,7°10′",
"503245":"7.14,7°10′",
"503244":"7.16,7°10′",
"503243":"7.22,7°10′",
"503241":"7.27,7°20′",
"503240":"7.28,7°20′",
"503237":"7.22,7°10′",
"503236":"7.18,7°10′",
"503235":"7.15,7°10′",
"503234":"7.17,7°10′",
"503233":"7.21,7°10′",
"503227":"7.22,7°10′",
"503226":"7.18,7°10′",
"503225":"7.18,7°10′",
"503224":"7.19,7°10′",
"503223":"7.20,7°10′",
"503222":"7.21,7°10′",
"503217":"7.24,7°10′",
"503216":"7.18,7°10′",
"503215":"7.17,7°10′",
"503214":"7.18,7°10′",
"503213":"7.17,7°10′",
"503212":"7.18,7°10′",
"503211":"7.19,7°10′",
"503210":"7.20,7°10′",
"503207":"7.24,7°10′",
"503206":"7.15,7°10′",
"503205":"7.13,7°10′",
"503204":"7.14,7°10′",
"503203":"7.12,7°10′",
"503202":"7.14,7°10′",
"503201":"7.15,7°10′",
"503200":"7.17,7°10′",
"503177":"7.41,7°20′",
"503176":"7.41,7°20′",
"503175":"7.40,7°20′",
"503174":"7.40,7°20′",
"503173":"7.41,7°20′",
"503172":"7.40,7°20′",
"503171":"7.39,7°20′",
"503170":"7.51,7°30′",
"503167":"7.36,7°20′",
"503160":"7.50,7°30′",
"503157":"7.32,7°20′",
"503150":"7.44,7°30′",
"503145":"7.26,7°20′",
"503144":"7.24,7°10′",
"503143":"7.26,7°20′",
"503140":"7.33,7°20′",
"503135":"7.25,7°20′",
"503134":"7.24,7°10′",
"503133":"7.24,7°10′",
"503132":"7.25,7°20′",
"503131":"7.26,7°20′",
"503130":"7.26,7°20′",
"503125":"7.29,7°20′",
"503124":"7.29,7°20′",
"503123":"7.26,7°20′",
"503122":"7.24,7°10′",
"503121":"7.27,7°20′",
"503120":"7.30,7°20′",
"503115":"7.33,7°20′",
"503114":"7.36,7°20′",
"503113":"7.29,7°20′",
"503112":"7.26,7°20′",
"503111":"7.38,7°20′",
"503110":"7.48,7°30′",
"503105":"7.34,7°20′",
"503104":"7.38,7°20′",
"503103":"7.30,7°20′",
"503102":"7.28,7°20′",
"503101":"7.46,7°30′",
"503100":"7.52,7°30′",
"503077":"7.66,7°40′",
"503076":"7.68,7°40′",
"503075":"7.64,7°40′",
"503073":"7.55,7°30′",
"503067":"7.64,7°40′",
"503066":"7.72,7°40′",
"503065":"7.72,7°40′",
"503064":"7.68,7°40′",
"503063":"7.59,7°40′",
"503060":"7.42,7°30′",
"503057":"7.55,7°30′",
"503056":"7.66,7°40′",
"503055":"7.74,7°40′",
"503054":"7.73,7°40′",
"503053":"7.60,7°40′",
"503052":"7.46,7°30′",
"503047":"7.40,7°20′",
"503046":"7.51,7°30′",
"503045":"7.62,7°40′",
"503044":"7.66,7°40′",
"503043":"7.53,7°30′",
"503042":"7.37,7°20′",
"503041":"7.30,7°20′",
"503037":"7.28,7°20′",
"503036":"7.33,7°20′",
"503035":"7.40,7°20′",
"503034":"7.46,7°30′",
"503033":"7.40,7°20′",
"503032":"7.26,7°20′",
"503031":"7.20,7°10′",
"503030":"7.28,7°20′",
"503027":"7.29,7°20′",
"503026":"7.25,7°20′",
"503025":"7.22,7°10′",
"503024":"7.25,7°20′",
"503023":"7.28,7°20′",
"503022":"7.21,7°10′",
"503021":"7.15,7°10′",
"503020":"7.24,7°10′",
"503017":"7.43,7°30′",
"503016":"7.33,7°20′",
"503015":"7.20,7°10′",
"503014":"7.15,7°10′",
"503013":"7.24,7°10′",
"503012":"7.27,7°20′",
"503011":"7.20,7°10′",
"503010":"7.19,7°10′",
"503007":"7.42,7°30′",
"503006":"7.38,7°20′",
"503005":"7.24,7°10′",
"503004":"7.09,7°10′",
"503003":"7.18,7°10′",
"503002":"7.29,7°20′",
"503001":"7.22,7°10′",
"503000":"7.09,7°10′",
"502966":"7.41,7°20′",
"502965":"7.41,7°20′",
"502956":"7.39,7°20′",
"502955":"7.37,7°20′",
"502947":"7.38,7°20′",
"502946":"7.37,7°20′",
"502945":"7.32,7°20′",
"502944":"7.28,7°20′",
"502937":"7.38,7°20′",
"502936":"7.35,7°20′",
"502934":"7.20,7°10′",
"502927":"7.34,7°20′",
"502926":"7.28,7°20′",
"502925":"7.13,7°10′",
"502924":"7.07,7° 0′",
"502917":"7.21,7°10′",
"502916":"7.11,7°10′",
"502915":"6.94,7° 0′",
"502914":"6.91,6°50′",
"502913":"6.99,7° 0′",
"502907":"7.03,7° 0′",
"502906":"6.92,7° 0′",
"502905":"6.76,6°50′",
"502904":"6.76,6°50′",
"502903":"6.91,6°50′",
"493956":"7.82,7°50′",
"493955":"7.70,7°40′",
"493946":"7.80,7°50′",
"493471":"7.18,7°10′",
"493470":"7.09,7°10′",
"493461":"7.19,7°10′",
"493372":"7.16,7°10′",
"493371":"7.17,7°10′",
"493370":"7.21,7°10′",
"493362":"7.11,7°10′",
"493361":"7.12,7°10′",
"493360":"7.15,7°10′",
"493351":"7.08,7° 0′",
"493350":"7.10,7°10′",
"493340":"7.06,7° 0′",
"493330":"7.03,7° 0′",
"493320":"7.00,7° 0′",
"493310":"6.97,7° 0′",
"493300":"6.94,7° 0′",
"493277":"7.20,7°10′",
"493276":"7.14,7°10′",
"493275":"7.12,7°10′",
"493274":"7.12,7°10′",
"493273":"7.11,7°10′",
"493272":"7.11,7°10′",
"493267":"7.15,7°10′",
"493266":"7.14,7°10′",
"493265":"7.14,7°10′",
"493264":"7.14,7°10′",
"493263":"7.10,7°10′",
"493262":"7.08,7° 0′",
"493257":"7.11,7°10′",
"493256":"7.12,7°10′",
"493255":"7.12,7°10′",
"493254":"7.11,7°10′",
"493253":"7.08,7° 0′",
"493252":"7.05,7° 0′",
"493250":"7.01,7° 0′",
"493247":"7.07,7° 0′",
"493246":"7.08,7° 0′",
"493245":"7.07,7° 0′",
"493244":"7.05,7° 0′",
"493243":"7.04,7° 0′",
"493241":"6.99,7° 0′",
"493240":"6.95,7° 0′",
"493237":"7.04,7° 0′",
"493236":"7.05,7° 0′",
"493235":"7.05,7° 0′",
"493234":"7.03,7° 0′",
"493233":"7.01,7° 0′",
"493230":"6.91,6°50′",
"493227":"7.00,7° 0′",
"493226":"7.02,7° 0′",
"493225":"7.04,7° 0′",
"493224":"7.03,7° 0′",
"493223":"7.00,7° 0′",
"493220":"6.93,7° 0′",
"493217":"6.97,7° 0′",
"493216":"6.98,7° 0′",
"493215":"7.02,7° 0′",
"493214":"7.02,7° 0′",
"493213":"6.99,7° 0′",
"493210":"6.98,7° 0′",
"493207":"6.94,7° 0′",
"493206":"6.95,7° 0′",
"493204":"6.98,7° 0′",
"493203":"6.97,7° 0′",
"493177":"7.15,7°10′",
"493176":"7.20,7°10′",
"493175":"7.28,7°20′",
"493174":"7.30,7°20′",
"493173":"7.24,7°10′",
"493172":"7.26,7°20′",
"493171":"7.40,7°20′",
"493170":"7.32,7°20′",
"493167":"7.08,7° 0′",
"493166":"7.13,7°10′",
"493165":"7.19,7°10′",
"493164":"7.18,7°10′",
"493163":"7.12,7°10′",
"493162":"7.14,7°10′",
"493161":"7.22,7°10′",
"493160":"7.12,7°10′",
"493157":"7.00,7° 0′",
"493156":"7.05,7° 0′",
"493155":"7.12,7°10′",
"493154":"7.08,7° 0′",
"493153":"6.95,7° 0′",
"493152":"6.95,7° 0′",
"493151":"7.06,7° 0′",
"493150":"7.10,7°10′",
"493147":"6.91,6°50′",
"493146":"6.97,7° 0′",
"493145":"7.07,7° 0′",
"493144":"7.01,7° 0′",
"493143":"6.81,6°50′",
"493142":"6.81,6°50′",
"493141":"6.96,7° 0′",
"493140":"7.08,7° 0′",
"493137":"6.86,6°50′",
"493136":"6.92,7° 0′",
"493135":"7.05,7° 0′",
"493134":"6.99,7° 0′",
"493133":"6.80,6°50′",
"493132":"6.84,6°50′",
"493131":"7.03,7° 0′",
"493130":"7.02,7° 0′",
"493127":"6.91,6°50′",
"493126":"7.01,7° 0′",
"493125":"7.17,7°10′",
"493124":"7.13,7°10′",
"493123":"6.99,7° 0′",
"493122":"7.09,7°10′",
"493121":"7.29,7°20′",
"493120":"7.10,7°10′",
"493117":"7.04,7° 0′",
"493116":"7.23,7°10′",
"493115":"7.47,7°30′",
"493114":"7.48,7°30′",
"493113":"7.33,7°20′",
"493112":"7.37,7°20′",
"493111":"7.47,7°30′",
"493110":"7.14,7°10′",
"493107":"7.14,7°10′",
"493106":"7.44,7°30′",
"493105":"7.83,7°50′",
"493104":"7.88,7°50′",
"493103":"7.64,7°40′",
"493102":"7.51,7°30′",
"493101":"7.40,7°20′",
"493100":"6.96,7° 0′",
"493077":"7.24,7°10′",
"493076":"7.39,7°20′",
"493075":"7.30,7°20′",
"493074":"7.07,7° 0′",
"493073":"7.10,7°10′",
"493072":"7.21,7°10′",
"493071":"7.15,7°10′",
"493070":"7.02,7° 0′",
"493067":"7.21,7°10′",
"493066":"7.57,7°30′",
"493065":"7.51,7°30′",
"493064":"7.16,7°10′",
"493063":"7.06,7° 0′",
"493062":"7.09,7°10′",
"493061":"7.07,7° 0′",
"493060":"7.03,7° 0′",
"493057":"7.42,7°30′",
"493056":"7.98,8° 0′",
"493055":"7.81,7°50′",
"493054":"7.23,7°10′",
"493053":"7.01,7° 0′",
"493052":"6.98,7° 0′",
"493051":"6.96,7° 0′",
"493050":"7.03,7° 0′",
"493047":"7.45,7°30′",
"493046":"8.02,8° 0′",
"493045":"7.81,7°50′",
"493044":"7.14,7°10′",
"493043":"6.94,7° 0′",
"493042":"6.88,6°50′",
"493041":"6.79,6°50′",
"493040":"6.91,6°50′",
"493037":"7.02,7° 0′",
"493036":"7.35,7°20′",
"493035":"7.34,7°20′",
"493034":"7.00,7° 0′",
"493033":"6.98,7° 0′",
"493031":"6.64,6°40′",
"493030":"6.70,6°40′",
"493027":"6.67,6°40′",
"493026":"6.68,6°40′",
"493025":"6.91,6°50′",
"493024":"7.00,7° 0′",
"493023":"7.16,7°10′",
"493022":"7.08,7° 0′",
"493021":"6.71,6°40′",
"493020":"6.63,6°40′",
"493017":"6.57,6°30′",
"493016":"6.53,6°30′",
"493015":"6.88,6°50′",
"493014":"7.17,7°10′",
"493013":"7.34,7°20′",
"493012":"7.26,7°20′",
"493011":"6.89,6°50′",
"493010":"6.72,6°40′",
"493007":"6.51,6°30′",
"493006":"6.69,6°40′",
"493005":"7.16,7°10′",
"493004":"7.40,7°20′",
"493003":"7.40,7°20′",
"493002":"7.25,7°20′",
"493001":"6.98,7° 0′",
"492977":"6.93,7° 0′",
"492976":"6.84,6°50′",
"492975":"6.72,6°40′",
"492974":"6.73,6°40′",
"492973":"6.88,6°50′",
"492972":"7.02,7° 0′",
"492971":"7.13,7°10′",
"492970":"7.22,7°10′",
"492967":"7.00,7° 0′",
"492966":"6.93,7° 0′",
"492965":"6.83,6°50′",
"492964":"6.83,6°50′",
"492963":"6.92,7° 0′",
"492962":"7.02,7° 0′",
"492961":"7.12,7°10′",
"492960":"7.22,7°10′",
"492957":"7.12,7°10′",
"492956":"7.10,7°10′",
"492955":"7.00,7° 0′",
"492954":"6.95,7° 0′",
"492953":"6.96,7° 0′",
"492951":"7.11,7°10′",
"492950":"7.21,7°10′",
"492947":"7.13,7°10′",
"492946":"7.20,7°10′",
"492945":"7.12,7°10′",
"492944":"7.02,7° 0′",
"492943":"6.98,7° 0′",
"492942":"7.01,7° 0′",
"492941":"7.09,7°10′",
"492940":"7.18,7°10′",
"492937":"7.00,7° 0′",
"492936":"7.15,7°10′",
"492935":"7.12,7°10′",
"492934":"7.01,7° 0′",
"492932":"6.97,7° 0′",
"492931":"7.03,7° 0′",
"492930":"7.11,7°10′",
"492927":"6.87,6°50′",
"492926":"7.02,7° 0′",
"492925":"7.01,7° 0′",
"492924":"6.94,7° 0′",
"492920":"6.97,7° 0′",
"492917":"6.79,6°50′",
"492916":"6.85,6°50′",
"492915":"6.85,6°50′",
"492910":"6.78,6°50′",
"492907":"6.75,6°50′",
"492906":"6.69,6°40′",
"492900":"6.60,6°40′",
"492867":"7.31,7°20′",
"492866":"7.40,7°20′",
"492857":"7.32,7°20′",
"492837":"7.27,7°20′",
"492827":"7.13,7°10′",
"492826":"7.57,7°30′",
"492817":"6.85,6°50′",
"492816":"7.40,7°20′",
"492815":"8.19,8°10′",
"492807":"6.53,6°30′",
"492806":"7.01,7° 0′",
"492805":"7.92,8° 0′",
"492804":"8.16,8°10′",
"483956":"6.65,6°40′",
"483176":"7.41,7°20′",
"483175":"7.80,7°50′",
"483174":"7.91,7°50′",
"483173":"7.74,7°40′",
"483172":"7.53,7°30′",
"483171":"7.26,7°20′",
"483170":"6.80,6°50′",
"483165":"7.31,7°20′",
"483164":"7.51,7°30′",
"483163":"7.65,7°40′",
"483162":"7.52,7°30′",
"483161":"7.20,7°10′",
"483160":"6.84,6°50′",
"483155":"6.79,6°50′",
"483154":"7.06,7° 0′",
"483153":"7.47,7°30′",
"483152":"7.46,7°30′",
"483151":"7.17,7°10′",
"483150":"6.92,7° 0′",
"483145":"6.61,6°40′",
"483144":"6.85,6°50′",
"483143":"7.25,7°20′",
"483142":"7.29,7°20′",
"483141":"7.06,7° 0′",
"483140":"6.89,6°50′",
"483135":"6.63,6°40′",
"483134":"6.77,6°50′",
"483133":"7.01,7° 0′",
"483132":"7.05,7° 0′",
"483131":"6.91,6°50′",
"483130":"6.81,6°50′",
"483124":"6.71,6°40′",
"483123":"6.82,6°50′",
"483122":"6.88,6°50′",
"483121":"6.83,6°50′",
"483120":"6.78,6°50′",
"483114":"6.66,6°40′",
"483113":"6.72,6°40′",
"483112":"6.80,6°50′",
"483111":"6.81,6°50′",
"483110":"6.78,6°50′",
"483104":"6.63,6°40′",
"483103":"6.64,6°40′",
"483102":"6.70,6°40′",
"483101":"6.76,6°50′",
"483100":"6.77,6°50′",
"483077":"6.55,6°30′",
"483076":"6.96,7° 0′",
"483075":"7.47,7°30′",
"483074":"7.55,7°30′",
"483073":"7.35,7°20′",
"483072":"7.13,7°10′",
"483071":"6.96,7° 0′",
"483070":"6.86,6°50′",
"483067":"6.77,6°50′",
"483066":"7.23,7°10′",
"483065":"7.61,7°40′",
"483064":"7.51,7°30′",
"483063":"7.20,7°10′",
"483062":"6.98,7° 0′",
"483061":"6.90,6°50′",
"483060":"6.86,6°50′",
"483057":"6.93,7° 0′",
"483056":"7.26,7°20′",
"483055":"7.47,7°30′",
"483054":"7.33,7°20′",
"483053":"7.03,7° 0′",
"483052":"6.85,6°50′",
"483051":"6.82,6°50′",
"483050":"6.82,6°50′",
"483047":"6.90,6°50′",
"483046":"7.05,7° 0′",
"483045":"7.18,7°10′",
"483044":"7.12,7°10′",
"483043":"6.93,7° 0′",
"483042":"6.78,6°50′",
"483041":"6.75,6°50′",
"483040":"6.76,6°50′",
"483037":"6.81,6°50′",
"483036":"6.82,6°50′",
"483035":"6.90,6°50′",
"483034":"6.96,7° 0′",
"483033":"6.87,6°50′",
"483032":"6.75,6°50′",
"483031":"6.71,6°40′",
"483030":"6.72,6°40′",
"483027":"6.75,6°50′",
"483026":"6.68,6°40′",
"483025":"6.72,6°40′",
"483024":"6.81,6°50′",
"483023":"6.79,6°50′",
"483022":"6.72,6°40′",
"483021":"6.69,6°40′",
"483020":"6.70,6°40′",
"483017":"6.72,6°40′",
"483016":"6.58,6°30′",
"483015":"6.56,6°30′",
"483014":"6.64,6°40′",
"483013":"6.70,6°40′",
"483012":"6.68,6°40′",
"483011":"6.66,6°40′",
"483010":"6.67,6°40′",
"483007":"6.71,6°40′",
"483006":"6.53,6°30′",
"483005":"6.41,6°20′",
"483004":"6.48,6°30′",
"483003":"6.66,6°40′",
"483002":"6.71,6°40′",
"483001":"6.66,6°40′",
"482977":"6.72,6°40′",
"482976":"6.56,6°30′",
"482975":"6.52,6°30′",
"482966":"6.52,6°30′",
"482965":"6.46,6°30′",
"482947":"6.70,6°40′",
"482937":"6.70,6°40′",
"482927":"6.69,6°40′",
"482917":"6.66,6°40′",
"482877":"6.41,6°20′",
"482876":"6.72,6°40′",
"482875":"7.47,7°30′",
"482874":"7.78,7°50′",
"482867":"6.49,6°30′",
"482866":"6.69,6°40′",
"482865":"7.14,7°10′",
"482820":"6.85,6°50′",
"482803":"6.75,6°50′",
"482802":"6.75,6°50′",
"474010":"5.87,5°50′",
"473967":"5.99,6° 0′",
"473173":"6.56,6°30′",
"473172":"6.52,6°30′",
"473171":"6.57,6°30′",
"473170":"6.73,6°40′",
"473163":"6.62,6°40′",
"473162":"6.56,6°30′",
"473161":"6.51,6°30′",
"473160":"6.68,6°40′",
"473153":"6.77,6°50′",
"473152":"6.77,6°50′",
"473151":"6.59,6°40′",
"473150":"6.65,6°40′",
"473143":"6.75,6°50′",
"473142":"6.79,6°50′",
"473141":"6.62,6°40′",
"473140":"6.62,6°40′",
"473133":"6.61,6°40′",
"473132":"6.60,6°40′",
"473131":"6.56,6°30′",
"473130":"6.60,6°40′",
"473123":"6.50,6°30′",
"473122":"6.49,6°30′",
"473121":"6.52,6°30′",
"473120":"6.58,6°30′",
"473113":"6.45,6°30′",
"473112":"6.45,6°30′",
"473111":"6.51,6°30′",
"473110":"6.55,6°30′",
"473102":"6.45,6°30′",
"473101":"6.48,6°30′",
"473100":"6.52,6°30′",
"473077":"6.83,6°50′",
"473076":"6.66,6°40′",
"473075":"6.38,6°20′",
"473074":"6.41,6°20′",
"473073":"6.66,6°40′",
"473072":"6.75,6°50′",
"473071":"6.68,6°40′",
"473067":"6.98,7° 0′",
"473066":"6.89,6°50′",
"473065":"6.57,6°30′",
"473064":"6.52,6°30′",
"473063":"6.57,6°30′",
"473062":"6.53,6°30′",
"473061":"6.52,6°30′",
"473060":"6.51,6°30′",
"473057":"6.95,7° 0′",
"473056":"6.97,7° 0′",
"473055":"6.83,6°50′",
"473054":"6.80,6°50′",
"473053":"6.47,6°30′",
"473052":"6.13,6°10′",
"473051":"6.23,6°10′",
"473047":"6.76,6°50′",
"473046":"6.81,6°50′",
"473045":"6.94,7° 0′",
"473044":"7.00,7° 0′",
"473043":"6.48,6°30′",
"473042":"5.96,6° 0′",
"473041":"6.07,6° 0′",
"473037":"6.61,6°40′",
"473036":"6.64,6°40′",
"473035":"6.83,6°50′",
"473034":"6.92,7° 0′",
"473033":"6.52,6°30′",
"473032":"6.11,6°10′",
"473027":"6.54,6°30′",
"473026":"6.53,6°30′",
"473025":"6.66,6°40′",
"473024":"6.71,6°40′",
"473023":"6.54,6°30′",
"473022":"6.34,6°20′",
"473021":"6.31,6°20′",
"473017":"6.51,6°30′",
"473016":"6.47,6°30′",
"473015":"6.51,6°30′",
"473014":"6.56,6°30′",
"473013":"6.60,6°40′",
"473012":"6.57,6°30′",
"473011":"6.48,6°30′",
"473010":"6.45,6°30′",
"473007":"6.52,6°30′",
"473006":"6.47,6°30′",
"473004":"6.38,6°20′",
"473003":"6.62,6°40′",
"473002":"6.75,6°50′",
"473001":"6.61,6°40′",
"473000":"6.51,6°30′",
"472967":"6.54,6°30′",
"472966":"6.56,6°30′",
"472957":"6.48,6°30′",
"472956":"6.54,6°30′",
"472946":"6.53,6°30′",
"472945":"6.57,6°30′",
"472935":"6.56,6°30′",
"472915":"6.51,6°30′",
"472872":"6.69,6°40′",
"463171":"6.46,6°30′",
"463170":"6.52,6°30′",
"463160":"6.53,6°30′",
"463120":"6.38,6°20′",
"463110":"6.34,6°20′",
"463100":"6.30,6°20′",
"463077":"6.59,6°40′",
"463076":"6.53,6°30′",
"463075":"6.24,6°10′",
"463074":"6.10,6°10′",
"463073":"6.45,6°30′",
"463072":"6.75,6°50′",
"463071":"6.66,6°40′",
"463067":"6.65,6°40′",
"463066":"6.57,6°30′",
"463065":"6.16,6°10′",
"463064":"5.88,5°50′",
"463063":"6.19,6°10′",
"463062":"6.57,6°30′",
"463061":"6.58,6°30′",
"463057":"6.61,6°40′",
"463056":"6.52,6°30′",
"463055":"6.17,6°10′",
"463054":"5.91,5°50′",
"463046":"6.43,6°30′",
"463045":"6.22,6°10′",
"463035":"6.25,6°20′",
"463016":"6.30,6°20′",
"463013":"6.26,6°20′",
"463012":"6.27,6°20′",
"463010":"6.31,6°20′",
"463007":"6.29,6°20′",
"463006":"6.28,6°20′",
"463002":"6.27,6°20′",
"463000":"6.29,6°20′",
"462975":"6.47,6°30′",
"462963":"6.44,6°30′",
"462953":"6.42,6°30′",
"462927":"6.34,6°20′",
"462923":"6.34,6°20′",
"462917":"6.32,6°20′",
"462913":"6.32,6°20′",
"454052":"5.45,5°30′",
"453170":"6.26,6°20′",
"453160":"6.23,6°10′",
"453077":"6.26,6°20′",
"453067":"6.22,6°10′",
"453057":"6.18,6°10′",
"453056":"6.21,6°10′",
"453054":"6.28,6°20′",
"453053":"6.27,6°20′",
"453052":"6.26,6°20′",
"453051":"6.25,6°20′",
"453047":"6.16,6°10′",
"453046":"6.18,6°10′",
"453045":"6.23,6°10′",
"453044":"6.26,6°20′",
"453043":"6.25,6°20′",
"453035":"6.20,6°10′",
"453034":"6.22,6°10′",
"453033":"6.22,6°10′",
"453024":"6.19,6°10′",
"453023":"6.19,6°10′",
"453000":"6.14,6°10′",
"452907":"6.14,6°10′",
"444052":"5.21,5°10′",
"442977":"6.12,6°10′",
"442967":"6.09,6°10′",
"442966":"6.08,6° 0′",
"442964":"6.07,6° 0′",
"442957":"6.06,6° 0′",
"442956":"6.05,6° 0′",
"442945":"6.02,6° 0′",
"442944":"6.02,6° 0′",
"442935":"5.99,6° 0′",
"442914":"5.94,6° 0′",
"432962":"5.86,5°50′",
"432951":"5.83,5°50′",
"432920":"5.75,5°50′",
"432916":"5.74,5°40′",
"432910":"5.73,5°40′",
"432827":"5.75,5°50′",
"432817":"5.73,5°40′",
"423040":"5.63,5°40′",
"423030":"5.60,5°40′",
"422965":"5.67,5°40′",
"422955":"5.65,5°40′",
"422954":"5.64,5°40′",
"422947":"5.63,5°40′",
"422945":"5.62,5°40′",
"422944":"5.62,5°40′",
"422943":"5.62,5°40′",
"422942":"5.61,5°40′",
"422937":"5.60,5°40′",
"422934":"5.60,5°40′",
"422933":"5.59,5°40′",
"422932":"5.59,5°40′",
"422931":"5.59,5°40′",
"422923":"5.57,5°30′",
"422922":"5.57,5°30′",
"422921":"5.56,5°30′",
"422913":"5.55,5°30′",
"422912":"5.54,5°30′",
"422911":"5.54,5°30′",
"422902":"5.52,5°30′",
"422901":"5.52,5°30′",
"414241":"4.16,4°10′",
"414240":"4.19,4°10′",
"414231":"4.13,4°10′",
"414221":"4.11,4°10′",
"414211":"4.08,4° 0′",
"412972":"5.49,5°30′",
"412950":"5.44,5°30′",
"412940":"5.42,5°30′",
"412877":"5.49,5°30′",
"412867":"5.46,5°30′",
"412861":"5.45,5°30′",
"412857":"5.44,5°30′",
"412847":"5.42,5°30′",
"412837":"5.39,5°20′",
"412815":"5.34,5°20′",
"412805":"5.32,5°20′",
"412804":"5.32,5°20′",
"404261":"4.01,4° 0′",
"404252":"3.95,4° 0′",
"404251":"3.98,4° 0′",
"404241":"3.95,4° 0′",
"404201":"3.82,3°50′",
"404200":"3.85,3°50′",
"404077":"4.25,4°20′",
"404076":"4.27,4°20′",
"404067":"4.22,4°10′",
"404066":"4.24,4°10′",
"402874":"5.30,5°20′",
"402850":"5.27,5°20′",
"402843":"5.24,5°10′",
"402840":"5.25,5°20′",
"402822":"5.21,5°10′",
"402821":"5.21,5°10′",
"402812":"5.15,5°10′",
"402811":"5.13,5°10′",
"402802":"5.05,5° 0′",
"402801":"5.00,5° 0′",
"402800":"5.06,5° 0′",
"402757":"5.26,5°20′",
"402747":"5.24,5°10′",
"402737":"5.23,5°10′",
"402727":"5.21,5°10′",
"402707":"5.18,5°10′",
"402706":"5.20,5°10′",
"402705":"5.17,5°10′",
"394271":"3.79,3°50′",
"394270":"3.82,3°50′",
"394261":"3.76,3°50′",
"392872":"4.97,5° 0′",
"392871":"4.91,4°50′",
"392870":"4.99,5° 0′",
"392861":"4.89,4°50′",
"392860":"4.97,5° 0′",
"392850":"4.97,5° 0′",
"392840":"4.97,5° 0′",
"392830":"4.97,5° 0′",
"392777":"5.15,5°10′",
"392776":"5.17,5°10′",
"392772":"5.11,5°10′",
"392771":"5.10,5°10′",
"392767":"5.10,5°10′",
"392766":"5.13,5°10′",
"392762":"5.08,5° 0′",
"392761":"5.07,5° 0′",
"392757":"5.05,5° 0′",
"392756":"5.09,5°10′",
"392755":"5.09,5°10′",
"392747":"5.02,5° 0′",
"392746":"5.05,5° 0′",
"392745":"5.06,5° 0′",
"392741":"5.03,5° 0′",
"392740":"5.02,5° 0′",
"392737":"5.00,5° 0′",
"392736":"5.02,5° 0′",
"392735":"5.03,5° 0′",
"392734":"5.03,5° 0′",
"392733":"5.02,5° 0′",
"392732":"5.01,5° 0′",
"392727":"4.98,5° 0′",
"392726":"5.00,5° 0′",
"392725":"5.01,5° 0′",
"392724":"5.01,5° 0′",
"392723":"5.00,5° 0′",
"392722":"4.99,5° 0′",
"392721":"4.98,5° 0′",
"392717":"4.96,5° 0′",
"392716":"4.98,5° 0′",
"392715":"4.99,5° 0′",
"392714":"4.99,5° 0′",
"392712":"4.96,5° 0′",
"392711":"4.96,5° 0′",
"392705":"4.97,5° 0′",
"392676":"5.07,5° 0′",
"392647":"5.01,5° 0′",
"392646":"5.00,5° 0′",
"392645":"4.99,5° 0′",
"392636":"4.98,5° 0′",
"392635":"4.97,5° 0′",
"384112":"3.55,3°30′",
"383172":"4.87,4°50′",
"383162":"4.84,4°50′",
"383161":"4.85,4°50′",
"383152":"4.82,4°50′",
"383151":"4.82,4°50′",
"382474":"4.76,4°50′",
"382375":"4.69,4°40′",
"382354":"4.65,4°40′",
"382353":"4.64,4°40′",
"382344":"4.63,4°40′",
"382343":"4.63,4°40′",
"374113":"3.31,3°20′",
"374112":"3.33,3°20′",
"374102":"3.30,3°20′",
"372542":"4.64,4°40′",
"372541":"4.64,4°40′",
"372532":"4.63,4°40′",
"372531":"4.62,4°40′",
"372523":"4.60,4°40′",
"372522":"4.60,4°40′",
"372521":"4.59,4°40′",
"372513":"4.58,4°30′",
"372512":"4.56,4°30′",
"372511":"4.55,4°30′",
"372503":"4.55,4°30′",
"372502":"4.53,4°30′",
"372501":"4.52,4°30′",
"372415":"4.56,4°30′",
"372405":"4.55,4°30′",
"365337":"0.01,0° 0′",
"364123":"3.11,3°10′",
"363151":"4.43,4°30′",
"362475":"4.53,4°30′",
"362472":"4.59,4°40′",
"362462":"4.60,4°40′",
"362461":"4.59,4°40′",
"362452":"4.59,4°40′",
"362451":"4.57,4°30′",
"362450":"4.50,4°30′",
"362442":"4.54,4°30′",
"362441":"4.51,4°30′",
"362440":"4.45,4°30′",
"362431":"4.43,4°30′",
"362430":"4.40,4°20′",
"362420":"4.36,4°20′",
"362356":"4.45,4°30′",
"362350":"4.31,4°20′",
"362347":"4.44,4°30′",
"362346":"4.43,4°30′",
"362345":"4.40,4°20′",
"362337":"4.41,4°20′",
"362336":"4.41,4°20′",
"362335":"4.38,4°20′",
"362327":"4.37,4°20′",
"362326":"4.37,4°20′",
"362324":"4.31,4°20′",
"362306":"4.25,4°20′",
"362257":"4.30,4°20′",
"303650":"2.77,2°50′",
"303640":"2.75,2°50′"
};

$(document).ready( initialize );
