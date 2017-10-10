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

CONFIG.layersTab = [
	{
		'caption' : 'トピック',
		'layers' : [
			'./layers_txt/layers1.txt',
			'./layers_txt/layers_topic.txt',
			'./layers_txt/layers_skhb.txt',
			'./layers_txt/layers_typhoon.txt',
			'./layers_txt/layers_topic_nishi.txt'
		]
	},
	{
		'caption' : '台風・豪雨等',
		'layers' : [
			'./layers_txt/layers_typhoon.txt'
		]
	},
	{
		'caption' : 'ベースマップ',
		'layers' : [
			'./layers_txt/layers0.txt'
		]
	},
	{
		'caption' : '全て',
		'layers' : null,
		'isDetail' : true
	}
	
];

CONFIG.layerBase          = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseDefaultID = "std";
CONFIG.layerBaseFolder    = "ベースマップ";
CONFIG.layerBaseFolderSYS = "GSI.MAP.BASE";
CONFIG.layers = [
	'./layers_txt/layers1.txt',
	'./layers_txt/layers2.txt',
	'./layers_txt/layers3.txt',
	'./layers_txt/layers4.txt',
	'./layers_txt/layers_skhb.txt',
	'./layers_txt/layers5.txt',
	'./layers_txt/layers_experimental.txt'
];

CONFIG.layerEvacuationFolder = "指定緊急避難場所";
CONFIG.layerEvacuationFolderSYS = "GSI.MAP.EVAC";
CONFIG.layerEvacuationHeader = "skhb";
CONFIG.layerEvacuationIsConfirmOK = false;

//キャッシュ（Layers.txt）
CONFIG.LOADLAYERSTXTCACHE = false;

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
	"tms"           : { caption : "TMS", isTile: true, isTileImage : true },
	"multiLayer"    : { caption : "複数レイヤ", isTile: false }
};

// Globe
CONFIG.GLOBEURL = "./globe/index_globe.html";


// 国土地理院距離計算式の利用のデフォルト値
CONFIG.USEGSIDISTANCE = true;

// ココタイルONOFFのデフォルト値
CONFIG.COCOTILEVISIBLE = false;

//ココタイルURL設定
// 複数設定例
// CONFIG.COCOTILEURL = ['http://cyberjapandata-t1.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://cyberjapandata-t2.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://cyberjapandata-t3.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv']
CONFIG.COCOTILEURL = ['https://cyberjapandata-t1.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t2.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t3.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'http://insarmap.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv'];


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

// サークル→ポリゴンの角数/2
CONFIG.CIRCLETOPOLYGONNUMSIDES = 80;


// パラメータ用
CONFIG.PARAMETERNAMES = {
	CENTERCROSS : 'centercross',
	JIHOKULINE  : 'jihokuline',
	LATLNGGRID  : 'latlnggrid',
	UTMGRID     : 'utmgrid',
	TILEGRID    : 'tilegrid',
	AREAMESH    : 'areamesh',
	T25000GRID  : 't25000grid',
	CHIIKIMESH: 'chiikimesh',
	MINIMAP     : 'minimap',
    FOOTER      : 'footer',
	COCOTILE    : 'cocotile',
	CLICKMOVE   : 'clickmove',
	MULTIPOPUP  : 'multipopup',
	HIGHQUALITY : 'highquality',
	CONTEXTMENUOVERLAP : 'contextmenuoverlap',
	USEGSIDISTANCE : 'usegsidistance'
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

CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.TILEGRID ] = {
	prefix : 't',
	settingName : 'tileGrid'
};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.T25000GRID ] = {
	prefix : 'z',
	settingName : 't25000Grid'
};
CONFIG.QUERYPARAMETER[ CONFIG.PARAMETERNAMES.CHIIKIMESH ] = {
	prefix : 'r',
	settingName : 'chiikiMesh'
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

/// 標高
/*
CONFIG.DEM     = new Array(1);
CONFIG.DEM[0] = { type : "PNG", url : "./[@]/tile.gsi/{z}/{x}/{y}.png"                   , z :  9, fixed : 1, src : "標高ＰＮＧ" };
*/
CONFIG.DEM = new Array(4);
CONFIG.DEM[0] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
CONFIG.DEM[1] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
CONFIG.DEM[2] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};
CONFIG.DEM[3] = { type : "TXT", url : "https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt"  , z : 8, fixed : 0, src : "DEMGM"};
 
//for IE9
var vs = window.navigator.appVersion.toLowerCase();
var ua = window.navigator.userAgent.toLowerCase();
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
  CONFIG.DEM[0] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5a/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5A" };
  CONFIG.DEM[1] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem5b/{z}/{x}/{y}.txt", z : 15, fixed : 1, src : "DEM5B" };
  CONFIG.DEM[2] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt"  , z : 14, fixed : 0, src : "DEM10B"};
  CONFIG.DEM[3] = { type : "TXT", url : "http://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt"  , z : 8, fixed : 0, src : "DEMGM"};

}

// サーバーサイドAPI
CONFIG.SERVERAPI = {};

CONFIG.SERVERAPI.GETADDR = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
CONFIG.SERVERAPI.CHIMEI_SEARCH="https://msearch.gsi.go.jp/address-search/AddressSearch";

//for IE9
if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
{
	CONFIG.SERVERAPI.GETADDR = "http://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
	CONFIG.SERVERAPI.CHIMEI_SEARCH="http://msearch.gsi.go.jp/address-search/AddressSearch";
}

/************************************************************************
 設定：メニュー：ヘルプ
 ************************************************************************/
CONFIG.HELPMENU = [
 {'Moji':'ヘルプ',                 'Img':'./image/help/help_icon.png',    'Link':'http://maps.gsi.go.jp/help/'},
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
			childrenWidth:240,
			children : [
				{
					title : 'グリッド表示',
					arrow : true,
					textAlign:"left",
					childrenWidth:230,
					children : [
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
							id : CONFIG.PARAMETERNAMES.TILEGRID,
							title : 'タイル座標',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.CHIIKIMESH,
							title : '地域メッシュ',
							typeA : 'check',
							defaultCheck : false
						},
						{
							id : CONFIG.PARAMETERNAMES.T25000GRID,
							title : '2万5千分1地形図郭',
							typeA : 'check',
							defaultCheck : false
						}
					]
				},
				{
					id : CONFIG.PARAMETERNAMES.CENTERCROSS,
					title : '中心十字線',
					typeA : 'check',
					defaultCheck : true
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
				},
				{
					id : CONFIG.PARAMETERNAMES.MULTIPOPUP,
					title : 'ポップアップ複数表示',
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
					id : 'saveimage',
					title : '画像として保存',
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
			title : '現在位置',
			arrow : true,
			id : 'gps',
			checkCondition : function() { return GSI.GeoLocation.can; }
		},
		{
			
			title : '3D',
			arrow : true,
			childrenWidth:210,
			children : [
				{
					id : 'gsi3d_l',
					title : '大(2048×2048)',
					//arrow : true,
					href : 'gsi3d_l'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				},
				
				{
					id : 'gsi3d_s',
					title : '小(1024×1024)',
					//arrow : true,
					href : 'gsi3d_s'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				},
				
				{
					id : 'gsi3d_custom',
					title : 'カスタム'
				}/*,
				{
					id : 'gsi3d_view',
					title : '表示領域(最大2048×2048)',
					//arrow : true,
					href : 'gsi3d_view'//'http://cyberjapandata.gsi.go.jp/3d/site/index.html?z={z}&lat={y}&lon={x}'
				}*/
			]
		},
		{
			title : 'Globe',
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
GSI.TEXT.SAKUZU.DIALOG_LIST_VISIBLEICONLABELBTN = 'アイコンのラベルを表示';


GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください<br><div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>';
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルの内容を入力して下さい<br><div style="font-size:85%">※ファイルを地図上にドラッグ＆ドロップすることでも読み込めます</div>' ;
GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE9 = '<strong>KML,GeoJSON,TopoJSON</strong>ファイルを選択してください';
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
GSI.TEXT.SAKUZU.DIALOG_EDIT_OK2BTN = 'O　K';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN = '終　了';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN = 'キャンセル';
GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELCONFIRMMSG = '編集を終了しますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_HIDECONFIRMMSG = '作図・ファイルパネルを閉じますか？確定していない編集内容は破棄されます。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVECONFIRMMSG = 'このオブジェクトを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_REMOVELAYERCONFIRMMSG = 'このレイヤを削除します。よろしいですか？';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOFREE_BTN = '自由文入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_INFOTABLE_BTN = 'テーブル入力に切替';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG = '表示するHTMLを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_MSG = '表示するテキストを入力して下さい。';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT = '例1:動物園　\n例2:<span style="background:#00FFFF; color:red; font-size:20pt;">図書館</span>';
GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_HINT = '例1:動物園';

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

// 3D範囲選択
GSI.TEXT.THREEDAREA = {};
GSI.TEXT.THREEDAREA.DIALOG_TITLE = '3D範囲を選択';
GSI.TEXT.THREEDAREA.DIALOG_OKBTN = 'O　K';
GSI.TEXT.THREEDAREA.DIALOG_CANCELBTN = '終　了';

// 画像保存
GSI.TEXT.MAPTOIMAGE = {};
GSI.TEXT.MAPTOIMAGE.WINDOW_MSG ="ファイルを保存する準備が整いました";
GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEIMGBTN = '画像を保存';
GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEPGWBTN = 'ワールドファイルを保存';
GSI.TEXT.MAPTOIMAGE.WINDOW_MSG2 ='※保存したファイルは、国土地理院コンテンツ利用規約に従ってご利用ください。<br>' + 
'<a href="http://maps.gsi.go.jp/help/use.html" target="_blank">地理院タイルのご利用について</a><br>' +
'<a href="http://maps.gsi.go.jp/help/howtouse.html" target="_blank">ワールドファイルについて</a>' ;

GSI.TEXT.EVAC = {};
GSI.TEXT.EVAC.KIYAKU = '最新の状況などは当該市町村にご確認ください。';
GSI.TEXT.EVAC.KIYAKULINK = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>　<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>';
GSI.TEXT.EVAC.CONFIRMTOP = '地理院地図に掲載されている指定緊急避難場所データ（以下、「本データ」といいます）を利用される場合は、<a href="http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html" target="blank">国土地理院コンテンツ利用規約</a>のほか、以下のご利用上の注意をご確認いただき、内容に同意された場合のみご利用ください。';
GSI.TEXT.EVAC.ATTENTION = '【ご利用上の注意】';
GSI.TEXT.EVAC.CONFIRMITEM1 = '本データは、災害対策基本法第49条の4に基づき市町村長が指定した指定緊急避難場所の情報を各市町村に提供いただき、当該市町村に確認の上、地図上に表示したものです。最新の状況などは当該市町村にご確認ください。';
GSI.TEXT.EVAC.CONFIRMITEM2 = '本データを、ダウンロードや印刷等を行い国土地理院サーバ外で利用される場合は、本データの更新にあわせて最新の情報をご利用ください（参照：<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>）。';
GSI.TEXT.EVAC.CONFIRMITEM3 = '指定緊急避難場所は、災害種別ごとに指定されています。本データをダウンロードや印刷等を行い国土地理院サーバ外で利用される場合、指定された災害種別を利用者が正確に理解できるよう、十分にご留意ください。';
GSI.TEXT.EVAC.ATTENTIONDATA = '【データについて】';
GSI.TEXT.EVAC.DATAITEM1 = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho.html" target="blank">「指定緊急避難場所」について</a>';
GSI.TEXT.EVAC.DATAITEM2 = '<a href="http://www.gsi.go.jp/bousaichiri/hinanbasho-help.html" target="blank">利用方法</a>';
GSI.TEXT.EVAC.DATAITEM3 = '<a href="http://disaportal.gsi.go.jp/hinanbasho/koukaidate.html" target="blank">市町村別公開日・更新日一覧</a>';
GSI.TEXT.EVAC.DATAITEM5 = '<a href="https://geoinfo2.gsi.go.jp/contact/Inquiry2.aspx?pcode=1004&bcode=100411&mcode=10041101" target="blank">お問い合わせ</a>';



/************************************************************************
 設定：作図
 ************************************************************************/
CONFIG.SAKUZU = {

	SYMBOL : {
		URL: "https://maps.gsi.go.jp/portal/sys/v4/symbols/",
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
			'361.png', '362.png', '371.png', '372.png', '373.png', '374.png', '375.png', '376.png', '377.png', '378.png',
			'379.png', '380.png', '381.png', '382.png', '436.png', '437.png', '438.png', '445.png', '446.png', '447.png',
			'449.png', '457.png', '458.png', '459.png', '460.png', '461.png', '462.png', '463.png', '464.png', '465.png',
			'466.png', '476.png', '700.png',
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
	},
	
	
	
	FONTSIZELIST : [
		8,9,10,11,12,15,18,19,20,24,32,48,64,92
	]
	
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


GSI.Circle = L.Circle.extend( { 
	initialize: function (latlng, radius, options) {
		L.Circle.prototype.initialize.call(this, latlng, radius, options);
	},
	_getPathPartStr: function (points) {
		var round = L.Path.VML;

		for (var j = 0, len2 = points.length, str = '', p; j < len2; j++) {
			p = points[j];
			if (round) {
				p._round();
			}
			str += (j ? 'L' : 'M') + p.x + ' ' + p.y;
		}
		return str + (L.Browser.svg ? 'z' : 'x');
	},
	_projectLatlngs: function () {
		this._originalPoints = [];
		for (var i = 0, len = this._latlngs.length; i < len; i++) {
			this._originalPoints[i] = this._map.latLngToLayerPoint(this._latlngs[i]);
		}
		// project polygon holes points
		// TODO move this logic to Polyline to get rid of duplication
		this._holePoints = [];

		if (!this._holes) { return; }

		var i, j, len, len2;

		for (i = 0, len = this._holes.length; i < len; i++) {
			this._holePoints[i] = [];

			for (j = 0, len2 = this._holes[i].length; j < len2; j++) {
				this._holePoints[i][j] = this._map.latLngToLayerPoint(this._holes[i][j]);
			}
		}
	},
	
	_clipPoints: function () {
		var points = this._originalPoints,
		    newParts = [];

		this._parts = [points].concat(this._holePoints);
		if (this.options.noClip) { return; }
		
		for (var i = 0, len = this._parts.length; i < len; i++) {
			var clipped = L.PolyUtil.clipPolygon(this._parts[i], this._map._pathViewport);
			if (clipped.length) {
				newParts.push(clipped);
			}
		}
		this._parts = newParts;
	},
	_convertLatLngs: function (latlngs, overwrite) {
		var i, len, target = overwrite ? latlngs : [];

		for (i = 0, len = latlngs.length; i < len; i++) {
			if (L.Util.isArray(latlngs[i]) && typeof latlngs[i][0] !== 'number') {
				return;
			}
			target[i] = L.latLng(latlngs[i]);
		}
		return target;
	},
	_initWithHoles: function (latlngs) {
		var i, len, hole;
		if (latlngs && L.Util.isArray(latlngs[0]) && (typeof latlngs[0][0] !== 'number')) {
			this._latlngs = this._convertLatLngs(latlngs[0]);
			this._holes = latlngs.slice(1);

			for (i = 0, len = this._holes.length; i < len; i++) {
				hole = this._holes[i] = this._convertLatLngs(this._holes[i]);
				if (hole[0].equals(hole[hole.length - 1])) {
					hole.pop();
				}
			}
		}

		// filter out last point if its equal to the first one
		latlngs = this._latlngs;

		if (latlngs.length >= 2 && latlngs[0].equals(latlngs[latlngs.length - 1])) {
			latlngs.pop();
		}
	},

	getPathString: function () {
		this._originalPoints = [];
		var latlngs = [];
		var numSides = CONFIG.CIRCLETOPOLYGONNUMSIDES;
		var center = this.getLatLng();
		var center_lat_rad = center.lat * Math.PI/180;
		var center_lng_rad = center.lng * Math.PI/180;
		var dmax_lat = this._mRadius / 6378137;
		var xys=[];
		xys.push([dmax_lat,0]);
		for(var i = 1; i < numSides; i++)
		{
			var y = dmax_lat - 2 * dmax_lat/numSides * i;
			var x =   2 * Math.asin(Math.sqrt((Math.pow(Math.sin(dmax_lat/2),2) - Math.pow(Math.sin((y)/2),2)) / (Math.cos(center_lat_rad+y)*Math.cos(center_lat_rad))));
			if(x !== x){
			 return;
			}else{
			 xys.push([y, x]);
			}
		}
		xys.push([-dmax_lat,0]);
		for(var i = 1; i < numSides; i++)
		{
			xys.push([xys[numSides-i][0],-xys[numSides-i][1]]);
		}
		xys.push([dmax_lat,0]);
		for(var i = 0; i < xys.length; i++)
		{
			latlngs.push(L.latLng((center_lat_rad+xys[i][0]) / (Math.PI/180), (center_lng_rad+xys[i][1]) / (Math.PI/180)));
		}
		
		this._latlngs = this._convertLatLngs(latlngs);
		this._initWithHoles(latlngs);
		this._projectLatlngs();
		this._clipPoints();
		var parts = this._parts,
		    lu = L.LineUtil;

		for (var i = 0, len = parts.length; i < len; i++) {
			parts[i] = lu.simplify(parts[i], this.options.smoothFactor);
		}
		
		
		for (var i = 0, len = this._parts.length, str = ''; i < len; i++) {
			str += this._getPathPartStr(this._parts[i]);
		}
		return str;
	}
	/*
	getPathString: function () {
		
		var p = this._point,
		    r = this._radius;

		if (this._checkIfEmpty()) {
			return '';
		}
		if (L.Browser.svg) {
			return 'M' + p.x + ',' + (p.y - r) +
			       'A' + r + ',' + r + ',0,1,1,' +
			       (p.x - 0.1) + ',' + (p.y - r) + ' z';
		} else {
			p._round();
			r = Math.round(r);
			return 'AL ' + p.x + ',' + p.y + ' ' + r + ',' + r + ' 0,' + (65535 * 360);
		}
	}
	*/
});

/*
L.Draw.Circle.prototype._drawShape = function (latlng) {
	
	if (!this._shape) {
		this._shape = new GSI.Circle(this._startLatLng, this._startLatLng.distanceTo(latlng), this.options.shapeOptions);
		this._map.addLayer(this._shape);
	} else {
		this._shape.setRadius(this._startLatLng.distanceTo(latlng));
	}
};

L.Draw.Circle.prototype._fireCreatedEvent = function () {
	var circle = new GSI.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
	L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, circle);
};
*/

GSI.Circle.addInitHook(function () {
	if (L.Edit.Circle) {
		this.editing = new L.Edit.Circle(this);

		if (this.options.editable) {
			this.editing.enable();
		}
	}

	this.on('add', function () {
		if (this.editing && this.editing.enabled()) {
			this.editing.addHooks();
		}
	});

	this.on('remove', function () {
		if (this.editing && this.editing.enabled()) {
			this.editing.removeHooks();
		}
	});
});

L.circle = function (latlng, radius, options) {
	return new GSI.Circle(latlng,radius, options);
};

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
	},
	
	_drawShape : function (latlng) {
		if (!this._shape) {
			this._shape = new GSI.Circle(this._startLatLng, this._startLatLng.distanceTo(latlng), this.options.shapeOptions);
			this._map.addLayer(this._shape);
		} else {
			this._shape.setRadius(this._startLatLng.distanceTo(latlng));
		}
	},

	_fireCreatedEvent : function () {
		var circle = new GSI.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
		L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, circle);
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
			distance : this._area2MeasurementString( L.GeometryUtil.calc_area(this._poly.getLatLngs() ) )
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
	if ( id == "gsi3d_l" )
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
	else if ( id == "gsi3d_s" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&pxsize=1024";
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	else if ( id == "gsi3d_view" )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図3Dに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		
		var size = GSI.GLOBALS.map.getSize();
		if ( size.x > 2048 ) size.x = 2048;
		if ( size.y > 2048 ) size.y = 2048;
		
		if( size.x % 2 == 1 ) size.x-=1;
		if( size.y % 2 == 1 ) size.y-=1;
		
        var args = "";
        args += "?z="   + z;
        args += "&lat=" + center.lat;
        args += "&lon=" + center.lng;
        args += "&w=" + size.x;
        args += "&h=" + size.y;
        args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

        return "./index_3d.html" + args;
	}
	
	else if ( id == 'gsiglobe' )
	{
		if(GSI.Utils.Browser.ie && ( GSI.Utils.Browser.version <= 10 )){
			alert( 'お使いのWebブラウザは地理院地図Globeに対応していません。\nChrome、Firefox、IE11　をご使用ください。' );
			return null;
		}
		
		var url = CONFIG.GLOBEURL;
		
		// GlobeのURL生成
		var queryString = GSI.GLOBALS.pageStateManager.getPositionQueryString();
		if(queryString != "") queryString += "/1/";
		
		var base = GSI.GLOBALS.pageStateManager.getBaseLayerQueryString();
		var hasBase = (base != '');
		if( base != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + base;
		var ls = GSI.GLOBALS.pageStateManager.getLayersQueryString();
		var disp = GSI.GLOBALS.pageStateManager.getTileViewSetting();
		
		if ( ls != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + ls;
		if ( disp != '' )
			queryString += ( queryString != '' ? '&' : '#' ) + disp;
		
		url += queryString;
		
		
		return url; //'http://maps.gsi.go.jp/globe/index_globe.html';
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
GSI.Utils.Browser.isMac = !!GSI.Utils.Browser.userAgent.match(/mac|ppc/);

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

GSI.Utils.dotLineTo = function (texture, p1x, p1y, p2x, p2y, dashArray)
{
	if ( texture.setLineDash !== undefined )
	{
		texture.setLineDash(dashArray);
		texture.lineTo( p2x, p2y );
	}
	else if ( texture.mozDash !== undefined )
	{
		texture.mozDash = dashArray;
		texture.lineTo( p2x, p2y );
	}
	else
	{
		var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
		var rad = Math.atan2(p2y - p1y, p2x - p1x);
		var space = ( dashArray && dashArray.length>= 2 && dashArray[0]>0 ? dashArray[0] : 5 );
		var dotted = Math.round(d / space / 2);

		for (var i = 0; i < dotted; i++) {
			var p3x = Math.cos(rad) * space * (i * 2) + p1x;
			var p3y = Math.sin(rad) * space * (i * 2) + p1y;
			var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
			var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

			texture.moveTo(p3x, p3y);
			texture.lineTo(p4x, p4y);
			
		}
	}
}


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
GSI.Utils.rpad = function(src, letter, num)
{
	var dst = src;
	var len = num - src.length;
	if (dst) dst="";
	for(var i=0; i < len; i++)
	{
		dst+=letter;
	}
	return dst;
};
GSI.Utils.lpad = function(src, letter, num)
{
	var dst = "";
	var len = num - src.length;
	for(var i=0; i<len; i++)
	{
		dst+=letter;
	}
	return dst + src;
};


L.LatLng.prototype._originalDistanceTo = L.LatLng.prototype.distanceTo;
L.LatLng.prototype.distanceTo = function (other) {
	other = L.latLng(other);
	var ret = null;
	
	if ( CONFIG.USEGSIDISTANCE )
		return GSI.Utils.DistanceCalculator.calc(this, other);
	else
		return L.LatLng.prototype._originalDistanceTo.call( this,other );
	
};
GSI.Utils.setMixBlendMode = function( item, flg )
{
	if ( item._visibleInfo.layer._container == null )
	{
		return;
	}
	if ( GSI.Utils.Browser.ie )
	{
		return;
	}
	if ( (flg === undefined) || (flg == null) )
	{
		//flg = false;
		return;
	}
	if ( ( flg != true ) && ( flg != "1" ) )
	{
		flg = false;
	}
	if ( flg == "1" )
	{
		flg = true;
	}
	var el = item._visibleInfo.layer._container.getAttribute('style');
	if ( el )
	{
	    el = el.replace("mix-blend-mode: multiply; ", "");
	}
	else
	{
	    el = "";
	}
	if ( flg == true )
	{
		el = "mix-blend-mode: multiply; " + el;
	}
    item._visibleInfo.layer._container.setAttribute('style', el);
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

			x10mNumber = zero + Math.floor( x /10 );
			x10mNumber = x10mNumber.substr(x10mNumber.length - num, num);
			y10mNumber = zero + Math.floor( y /10 );
			y10mNumber = y10mNumber.substr(y10mNumber.length - num, num);
		}
		
		var letters = GSI.UTM.Utils.findGridLetters(zone, Math.floor( y /10 ) * 10, Math.floor( x /10 ) * 10);
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
		this._lines = [];
		this._labels = [];
		this._zoneLines = [];
		this._zoneLabels = [];
		
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
	
	
	drawPath : function(texture)
	{
		if ( !this._lines ) return;
		texture.beginPath();
		for( var i=0; i< this._lines.length; i++ )
		{
			var from = null;
			
			for( var j=0; j<this._lines[i]._latlngs.length; j ++ )
			{
				var point = this._map.latLngToContainerPoint(this._lines[i]._latlngs[j]);
				
				if( j == 0 ) texture.moveTo( point.x, point.y );
				else {
					GSI.Utils.dotLineTo( texture, from.x, from.y, point.x, point.y, [3,3] );
				}
				
				from = point;
			}
			//this._drawPath( texture, this._lines[i] );
		}
		
		texture.save();
		
		texture.lineWidth = this.options.lineStyle.weight;
		texture.strokeStyle = this.options.lineStyle.color;
			
		
		var opacity = 1;
		texture.globalAlpha = opacity;
		texture.stroke();

		texture.restore();
		
	},
	
	_lineToDot : function (texture, p1x, p1y, p2x, p2y)
	{
		var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
		var rad = Math.atan2(p2y - p1y, p2x - p1x);
		var space = 3;
		var dotted = Math.round(d / space / 2);

		for (var i = 0; i < dotted; i++) {
			var p3x = Math.cos(rad) * space * (i * 2) + p1x;
			var p3y = Math.sin(rad) * space * (i * 2) + p1y;
			var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
			var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

			texture.moveTo(p3x, p3y);
			texture.lineTo(p4x, p4y);
			
		}
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var i, j, len, len2, point, drawMethod;
		var vp = this._map._pathViewport;
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		texture.beginPath();
		
		var parts = layer._parts;
		
		for (i = 0, len = parts.length; i < len; i++) {
			
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				point = parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				
				texture[drawMethod](point.x + ( origin.x - pixelBounds.min.x ), point.y + ( origin.y - pixelBounds.min.y ));
			}
			// TODO refactor ugly hack
			if (layer instanceof L.Polygon || layer instanceof L.Circle) {
				texture.closePath();
			}
		}
		
		texture.save();
		this._updateStyle(texture, layer);
		
		var opacity = 1;
		//console.log( this.options.opacity );
		if (layer.options.fill) {
			
			texture.globalAlpha = ( layer.options.fillOpacity ?layer.options.fillOpacity : 1 ) * opacity;
			texture.fill();          
		}
		if (layer.options.stroke) {
			texture.globalAlpha = opacity;
			texture.stroke();
		}

		texture.restore();
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
			left = Math.floor( (screenSize.w/2)-( parseInt(this.options.width) / 2 ) );
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
	show : function(noActivate)
	{
		if ( !this.container ) this.create();
		
		GSI.Dialog._dialogManager.appendVisibleList( this, noActivate );
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
	_activeTabIndex : -1,
	
	initialize : function(mapLayerList,cocoTileLayer, layersTab, options)
	{
		this.mapLayerList = mapLayerList;
		this.cocoTileLayer = cocoTileLayer;
		this.layersTab = layersTab;
		this.mapLayerList.on( 'change', L.bind( this.onMapLayerListChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);

        this._current_id = this.path = this.options.currentPath;

		cocoTileLayer.on( 'load', L.bind( this.onCOCOTileLoad, this ) );
		cocoTileLayer.on( 'hide', L.bind( this.onCOCOTileHide, this ) );
		
		
	},
	createHeader : function()
	{
		this.headerFrame.addClass( "tab");
		this._titleFrame = $( '<div>' );
		this._tabFrame = $( '<div>' ).addClass("layertreedialog_tab_frame");
		
		for( var i=0; i<this.layersTab.length; i++ )
		{
			var  tabInfo = this.layersTab[i];
			/*
			var a = $("<a>").css({"font-size":"90%"})
			.attr( {"href":"javascript:void(0);"} )
			.html(tabInfo.caption)
			.data ({"tabInfo":tabInfo, "idx" : i})
			.click(L.bind(this._onTabClick, this ) );//function(){alert("");});
			*/
			
			var a = $("<a>").css({"font-size":"90%"})
			.attr( {"href":"javascript:void(0);"} )
			.data ({"tabInfo":tabInfo, "idx" : i})
			.click(L.bind(this._onTabClick, this ) )
			.css( {"z-index": this.layersTab.length - i} );
			
			var leftTriangle = $("<div>").html("").addClass("left_triangle").append("<div>");
			var centerTitle = $("<div>").html(tabInfo.caption).addClass("center_text");
			var rightTriangle = $("<div>").html("").addClass("right_triangle").append("<div>");
			
			a.append( leftTriangle ).append( centerTitle ).append( rightTriangle );
			
			this._tabFrame.append( a );
		}
		
		this._tabFrame.append( $("<div>").css({"clear":"both"}) );
		this._titleTextFrame = $( '<div>' ).append( $('<span>').html(this.options.title ) ).addClass("title_frame");
		//this._titleFrame.append( this._titleTextFrame);//.append(this._titleControlFrame);
		this._titleFrame.append(this._tabFrame).append( this._titleTextFrame);//.append(this._titleControlFrame);
		//this._activeTabIndex = 0;
		
		
		this._tabScrollLeftBtn = $( "<a>" ).hide()
			.addClass("tab_scroll_btn")
			.addClass("tab_scroll_left")
			.attr({"href":"javascript:void(0);"})
			.on( "mousedown", L.bind(this._onTabScrollLeftMouseDown, this) )
			.on( "mouseup", L.bind(this._onTabScrollLeftMouseUp, this) );
			
		this._tabScrollRightBtn = $( "<a>" ).hide()
			.addClass("tab_scroll_btn")
			.addClass("tab_scroll_right")
			.on( "mousedown", L.bind(this._onTabScrollRightMouseDown, this) )
			.on( "mouseup", L.bind(this._onTabScrollRightMouseUp, this) );
			
		this._titleFrame.append(this._tabScrollLeftBtn).append(this._tabScrollRightBtn);
		this.activateTab(0);
		
		return this._titleFrame;
		
	},
	
	_onTabClick : function(event)
	{
		var a = $(event.currentTarget );
		var newidx = a.data("idx");

		if (this._activeTabIndex != newidx)
		{
			if (this._checkEvacuationLayer() == false)
			{
				CONFIG.layerEvacuationIsConfirmOK = false;
				GSI.GLOBALS.evacDialog.hide();
			}
		}
		

		this.activateTab(newidx);
	},
	
	activateTab : function(idx)
	{
		this._tabFrame.find("a").removeClass("active");
		this._tabFrame.find("a").eq(idx).addClass("active");
		
		var tabArr = this._tabFrame.find("a");
		for( var i=0; i<tabArr.length; i++ )
		{
			var zIndex = tabArr.length -i;
			if ( idx == i ) zIndex = 99;
			
			$( tabArr[i]).css( {"z-index":zIndex} );
		}
		
		if ( this._activeTabIndex != idx )
		{
			this._activeTabIndex = idx;

			if ( this.tree )
			{
				this.onFolderClick_Proc(this.tree[this._activeTabIndex]);

				//this._current = this.tree[idx].entries;
				//this._initializeList( this.tree[idx].entries );
			}
		}
		
		
		this._initializeTabScrollBtns();
		
	},
	
	_onResize : function()
	{
		GSI.Dialog.prototype._onResize.call(this);

		var height = this.container.outerHeight( false )
			- this.headerFrame.outerHeight( true )
			- this._controlFrame.outerHeight( true ) - 11;

		this.listFrame.css( { "max-height": 'none', height: height + 'px'} );
		
		
		this._initializeTabScrollBtns();
		
	},
	
	_initializeTabScrollBtns : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		
		if ( scrollContainerWidth < scrollInnerWidth )
		{
			var scrollMax = scrollInnerWidth - scrollContainerWidth;
			if ( scrollMax <= scrollLeft )
			{
				this._tabFrame.scrollLeft(scrollMax);
				this._tabScrollRightBtn.addClass("deactive");
			}
			else
				this._tabScrollRightBtn.removeClass("deactive");
				
			if ( scrollLeft > 0 )
				this._tabScrollLeftBtn.removeClass("deactive");
			else
				this._tabScrollLeftBtn.addClass("deactive");
		}
		else
		{
			this._tabScrollLeftBtn.addClass("deactive");
			this._tabScrollRightBtn.addClass("deactive");
			this._tabFrame.scrollLeft(0);
		}
		
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
	},
	
	_onTabScrollLeftMouseDown : function()
	{
		if ( this._tabScrollLeftTimer )
			clearTimeout(  this._tabScrollLeftTimer );
		this._tabScrollLeftTimer = setTimeout( L.bind( function(){
			this._tabScrollLeft();
		}, this ), 10 );
	},
	
	_onTabScrollLeftMouseUp : function()
	{
		if ( this._tabScrollLeftTimer )
			clearTimeout(  this._tabScrollLeftTimer );
		this._tabScrollLeftTimer = null;
	},
	
	
	_tabScrollLeft : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		var scrollMax = scrollInnerWidth - scrollContainerWidth;
		scrollLeft-=2;
		if ( scrollLeft < 0 ) scrollLeft = 0;
		this._tabFrame.scrollLeft(scrollLeft);
		
		
		if ( scrollLeft > 0 )
		{
			this._tabScrollLeftBtn.removeClass("deactive");
		}
		else
			this._tabScrollLeftBtn.addClass("deactive");
		
		
		if ( scrollMax <= scrollLeft )
			this._tabScrollRightBtn.addClass("deactive");
		else
			this._tabScrollRightBtn.removeClass("deactive");
			
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
		if ( !this._tabScrollLeftBtn.hasClass("deactive") )
		{
			this._tabScrollLeftTimer = setTimeout( L.bind( function(){
				this._tabScrollLeft();
			}, this ), 10 );
		}
	},
	
	
	_onTabScrollRightMouseDown : function()
	{
		if ( this._tabScrollRightTimer )
			clearTimeout(  this._tabScrollRightTimer );
		this._tabScrollRightTimer = setTimeout( L.bind( function(){
			this._tabScrollRight();
		}, this ), 10 );
	},
	
	_onTabScrollRightMouseUp : function()
	{
		if ( this._tabScrollRightTimer )
			clearTimeout(  this._tabScrollRightTimer );
		this._tabScrollRightTimer = null;
	},
	
	_tabScrollRight : function()
	{
		var scrollLeft = this._tabFrame.scrollLeft();
		var scrollContainerWidth = this._tabFrame.outerWidth();
		var scrollInnerWidth = this._tabFrame.find("a").last().position().left-10 +
			this._tabFrame.find("a").last().outerWidth(true) + scrollLeft;
		
		var scrollMax = scrollInnerWidth - scrollContainerWidth;
		scrollLeft+=2;
		if ( scrollLeft> scrollMax ) scrollLeft = scrollMax;
		this._tabFrame.scrollLeft(scrollLeft);
		
		
		
		if ( scrollLeft > 0 )
			this._tabScrollLeftBtn.removeClass("deactive");
		else
			this._tabScrollLeftBtn.addClass("deactive");
		
		
		if ( scrollMax <= scrollLeft )
			this._tabScrollRightBtn.addClass("deactive");
		else
			this._tabScrollRightBtn.removeClass("deactive");
			
		if ( scrollContainerWidth >= scrollInnerWidth)
		{
			this._tabScrollLeftBtn.hide();
			this._tabScrollRightBtn.hide();
		}
		else
		{
			this._tabScrollLeftBtn.show();
			this._tabScrollRightBtn.show();
		}
		
		
		if ( !this._tabScrollRightBtn.hasClass("deactive") )
		{
			this._tabScrollRightTimer = setTimeout( L.bind( function(){
				this._tabScrollRight();
			}, this ), 10 );
		}
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
		if ( this._checkEvacuationLayer() == false )
		{
			GSI.GLOBALS.evacDialog.hide();
		}

		GSI.Dialog.prototype.hide.call(this);
	},
	onCOCOTileLoad : function(e)
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		//this._initializeList( this.current ? this.current.entries : this.tree, true );
	},
	onCOCOTileHide : function(e )
	{
		if ( !this.tree ) return;
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		//this._initializeList( this.current ? this.current.entries : this.tree, true );
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
			this.activateTab( this._activeTabIndex );
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

			if ( ( item.entries && !item.isMultiLayer ) || item.src)
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
			            this.mapLayerList.append(l.info, true, l.hidden,null,l.blend);
			            //this.mapLayerList.append(l.info, true, l.hidden);
                    }
                }
                this.visibleLayers.length = 0;
                this._initializeListProc();
            }
        }
        else{
		    this.refreshTitle();
		    this._initializeList( this.current ? this.current.entries : this.tree[this._activeTabIndex].entries);
		    if ( this._userResized ) this._onResize();
        }
    },
    _initializeList_VisibleLayers : function(id){
        this._initializeList_ID_Mode    = "visible";
        this._initializeList_ID_Mode_ID = id;
        this._initializeList_ID(id);
    },

	_initializeList_CurrentPath : function(id)
	{
        this._initializeList_ID_Mode    = "current";
        this._initializeList_ID_Mode_ID = id;
        this._initializeList_ID(id);
    },
	_initializeList_ID : function(path)
	{
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
			var target = this.current ;
			if ( target )
			{

				while( target.parent )
				{
					target = target.parent;
				}
				if ( this.tree )
				{
					for( var i=0; i<this.tree.length; i++)
					{
						if ( target == this.tree[i])
						{
							this._tabFrame.find("a").removeClass("active");
							this._tabFrame.find("a").eq(i).addClass("active");
							
							var tabArr = this._tabFrame.find("a");
							for( var j=0; j<tabArr.length; j++ )
							{
								var zIndex = tabArr.length -j;
								if ( i == j ) zIndex = 99;
								
								$( tabArr[j]).css( {"z-index":zIndex} );
							}
							this._activeTabIndex = i;
							break;
						}
					}
				}
			}
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
            else if(tree[i].entries && !tree[i].isMultiLayer){
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
			/*
			var span = $( '<span>' ).html( "&nbsp;&gt;&nbsp;" );
			this._titleTextFrame.prepend( span );
			var a = $( '<a>' ).html( this.options.title ).attr( { 'href' : 'javascript:void(0);' } );
			a.click(
				L.bind( this.onFolderClick, this, a )
			).data( { 'data' : null } );
			this._titleTextFrame.prepend( a );
			*/
		}
		else
		
		{
			var title = ( !this.tree || this.tree.length <= this._activeTabIndex ? this.options.title : this.tree[this._activeTabIndex ].title );
			var span = $( '<span>' ).html( title ); //.attr( { 'href' : 'javascript:void(0);' } );
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
		if (item.html)
		{
			var flddescriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'flddescription_btn' ).html("解説");
			li.append( flddescriptionBtn );
			flddescriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );
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
		if ( item._visibleInfo || this.mapLayerList.exists( item )  )
		{
			a.addClass( 'view' );
		}
		else
		{
			a.removeClass( 'view' );
		}
		a.addClass( 'item' ).append( title );

        // 詳細
		var descriptionBtn = $( '<a>' ).attr( { 'href':'javascript:void(0);'} ).addClass( 'description_btn' ).html("解説");
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
	_expandFolder : function( item )
	{
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
					    //cache    : true,
					    cache    : CONFIG.LOADLAYERSTXTCACHE,
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
	onConfirmOkClick : function ( item )
	{
		GSI.GLOBALS.confirmDlg.hide();
		GSI.GLOBALS.evacDialog.show();

		CONFIG.layerEvacuationIsConfirmOK = true;
		this._expandFolder( item );
	},
	onFolderClick : function( a )
	{
		var item = a.data( 'data' );
		
		if (( item ) && ( item.title_evac && item.title_evac == CONFIG.layerEvacuationFolderSYS ))
		{
			if ( this._checkEvacuationLayer() == false )
			{
				GSI.GLOBALS.confirmDlg.onPositiveButtonClick = L.bind(this.onConfirmOkClick, this, item);
				GSI.GLOBALS.confirmDlg.show();			
			}
			else
			{
				this._expandFolder( item );
			}
		}
		else
		{
			this._expandFolder( item );
			if (this._checkEvacuationLayer() == false)
			{
				CONFIG.layerEvacuationIsConfirmOK = false;
				GSI.GLOBALS.evacDialog.hide();
			}
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
		
		var baseLayerTarget = null;
		
		for( var i=0; i<GSI.GLOBALS.baseLayer.baseLayerList.length; i++ )
		{
			if ( item.id == GSI.GLOBALS.baseLayer.baseLayerList[i].id )
			{
				baseLayerTarget = GSI.GLOBALS.baseLayer.baseLayerList[i];
				break;
			}
		}
		
        if(baseLayerTarget || ( target && target.title_sys && target.title_sys == CONFIG.layerBaseFolderSYS ) ){
            var f = false;
            if(this.mapLayerList.exists(item)){
                f = true;
            }
            for( var i=0; i<GSI.GLOBALS.baseLayer.baseLayerList.length; i++ )
			{
				var baseLayer = GSI.GLOBALS.baseLayer.baseLayerList[i];
				if ( this.mapLayerList.exists( baseLayer ) )
				{
					this.mapLayerList.remove( baseLayer );
				}
			}
            if(f){
                GSI.GLOBALS.map.removeLayer(GSI.GLOBALS.baseLayer);
            }
            else{
                GSI.GLOBALS.map.addLayer(GSI.GLOBALS.baseLayer);
                this.mapLayerList.append(item);
			    GSI.Utils.sendSelectedLayer(this._current_id);
            }
        }
        else if ( target && target.title_evac && target.title_evac == CONFIG.layerEvacuationFolderSYS )
        {		
            var f = false;
            if(this.mapLayerList.exists(item)){
                f = true;
            }

            this._onHideAllClick();
            if(f == false){
                this.mapLayerList.append(item);
				if (GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false)
				{
					GSI.GLOBALS.evacDialog.show();
				}
    		    GSI.Utils.sendSelectedLayer(this._current_id);
            }
        }
        else
        {
			if(!this.mapLayerList.exists(item))
			{ 
				if ( item.id.indexOf("relief") >= 0 )
					this.mapLayerList.append(item, null, null, null, true);
				else
					this.mapLayerList.append(item);
				GSI.Utils.sendSelectedLayer(this._current_id);

			}
			else
			{
				this.mapLayerList.remove(item); 
			}
        }
	},
	onMapLayerListChange : function()
	{
		this._initializeList( this.current ? this.current.entries : ( this.tree ? this.tree[this._activeTabIndex].entries : true), true );
		this._toolTipViewCounter = 0;
	},
	_checkEvacuationLayer : function()
	{
	    if ( this.mapLayerList )
	    {
	    	var l = this.mapLayerList.getList();
	    	for(i = 0 ; i < l.length; i++ )
	    	{
	    		if ( l[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}
	    	}
	    	var tl = this.mapLayerList.getTileList();

	    	for(i = 0 ; i < tl.length; i++ )
	    	{
	    		if ( tl[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}
	    	}
	    }
	    return false;
	}
});

/************************************************************************
 L.Class
 - GSI.Dialog
   - GSI.HelpDialog (ヘルプダイアログ管理)
 ************************************************************************/
/*
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
				'width'	: '20px',
				'height': '20px',
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
*/

GSI.HelpDialog = L.Class.extend( {
	options : {
	},
	initialize : function(map,mapMouse, options)
	{
		this.map = map;
		this.mapMouse = mapMouse;
		this._blind = $( "<div>" )
			.click( L.bind( function(){this.hide();}, this) )
			.addClass( "help_window_blind" );
		
		this._frame = $( "<div>" ).addClass("help_window_frame");
		
		this._titleFrame = $("<div>").addClass( "help_window_content_title" );
		
		this._contentFrame = $("<div>").addClass("help_window_content_frame");
		
		
		this._contentFrame.on({
			/* フリック開始時 */
			'touchstart': L.bind( function(e) {
				this._touchX = e.originalEvent.changedTouches[0].pageX;
				this._touchStartX = this._touchX;
				this._accel = 0;
				//this._slideX = parseFloat($(this).position().left);
				this._touchY = e.originalEvent.changedTouches[0].pageY; //←縦方向のタッチ位置も取得
			}, this ),
			/* フリック中 */
			'touchmove': L.bind( function(e) {
				var moveX = this.touchX - e.originalEvent.changedTouches[0].pageX,
					moveY = this.touchY - e.originalEvent.changedTouches[0].pageY, //←縦方向のタッチ位置も取得
					moveRate = moveX / moveY; //←フリックした縦横の移動量の比率を計算

				//↓垂直方向から15度以上の方向にフリックした場合のみ、ページのスクロールをキャンセル
				if(moveRate > Math.tan(15 * Math.PI/180)) {
					e.preventDefault();
				}

				//this._slideX = this._slideX - (this._touchX - event.changedTouches[0].pageX );
				//$(this).css({left:this.slideX});
				this._accel = (e.originalEvent.changedTouches[0].pageX - this._touchX) * 5;
				this._touchX = e.originalEvent.changedTouches[0].pageX;
				this._touchEndX = this._touchX;
				
			}, this ),
			/* フリック終了 */
			'touchend': L.bind( function(e) {
				//this._slideX += this._accel;
				
				if ( Math.abs( this._touchEndX - this._touchStartX ) > 50 )
				{
					if ( this._accel > 1 )
						this.prev();
					else if ( this._accel < -1)
						this.next();
				}
				//console.log( this._slideX, this._accel, this._touchX );
				//$("#query").val(this._slideX + "/" + this._accel + "/" + this._touchX );
			}, this )
		});
		
		this._closeButton = $( "<a>")
			.attr({"href":"javascript:void(0);"})
			.click( L.bind( function(){this.hide();}, this) )
			.addClass("help_window_closebtn").html("×");
		
		this._titleFrame.append( $("<span>") );
		this._titleFrame.append( this._closeButton );
		this._frame.append( this._titleFrame);
		this._frame.append( this._contentFrame);
		
		
		this._nextButton = $("<a>")
			.attr( {
				"href":"javascript:void(0);"
			} )
			.addClass( "help_window_frame_button")
			.addClass( "help_window_frame_next_button")
			.html( "" )
			.click( L.bind( function(){this._nextButton.blur();this.next();}, this ) );
		
		
		this._prevButton = $("<a>")
			.attr( {
				"href":"javascript:void(0);"
			} )
			.addClass( "help_window_frame_button")
			.addClass( "help_window_frame_prev_button")
			.html( "" )
			.click( L.bind( function(){this._prevButton.blur();this.prev();}, this ) );
		
		
		this._frame.append( this._prevButton);
		this._frame.append( this._nextButton);
		
		
		this._contentList = [];
		this._selectedIndex = -1;
		
		$("#help .help_content").each( L.bind(function(index, elem) {
			this._contentList.push( {
				content : $( elem ).clone(),
				title : $( elem ).attr( "title" )
			});
		}, this )  );
		
		this.select(0);
		
		$( "body").append( this._blind);
		$( "body").append( this._frame);
		//GSI.Dialog.prototype.initialize.call(this, options);
	},
	
	next : function()
	{
		if ( this._contentList.length > this._selectedIndex+1)
			this.select(this._selectedIndex+1);
		else
			this.select(0);	
	},
	
	prev : function()
	{
		if ( 0 <= this._selectedIndex-1)
			this.select(this._selectedIndex-1);
		else
			this.select(this._contentList.length -1);	
			
	},
	
	select : function( index )
	{
		if ( this._contentList && this._contentList.length > index && index >= 0 )
		{
			if ( this._selectedIndex >= 0 )
			{
				this._contentFrame.fadeOut( 100, L.bind( function(){
					this._titleFrame.find("span").empty().append( this._contentList[index].title ); 
					this._contentFrame.empty().append( this._contentList[index].content );
					this._contentFrame.fadeIn( 100 );
				}, this));
			}
			else
			{
				this._titleFrame.find("span").empty().append( this._contentList[index].title ); 
				this._contentFrame.empty().append( this._contentList[index].content );
			}
			this._selectedIndex = index;
		}
		
	},
	getVisible : function()
	{
		return ( this._blind ? this._blind.is( ":visible" ) : false );
	},
	
	show : function ()
	{
		this._blind.fadeIn(200);
		this._frame.fadeIn(200);
	},
	hide : function ()
	{
		this._blind.fadeOut(200);
		this._frame.fadeOut(200);
	},
	create : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	}
});

GSI.HelpDialog.hide = function() {
	if ( GSI.GLOBALS.HelpDialog ) GSI.GLOBALS.HelpDialog.hide();
};

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
			area = L.GeometryUtil.calc_area(latLngs);

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

		//計測値の説明
        this.infoBtn = $("<a>").attr({"href":"http://maps.gsi.go.jp/help/howtouse.html","target":"_blank"}).addClass('gsi_measuredialog_infobtn').html("計測値の説明");
        this.frame.append(this.infoBtn);
        
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
			
			// アイコンラベル
			tr = $( '<tr>' );
			id = 'GSI_SakuzuDialog_label_check' + GSI.Utils.getCurrentID() ;
			var checkbox2 = $( '<input>' ).attr( { 'id': id, 'type' : 'checkbox', 'checked' : item.getIconLabelVisible()} ).addClass( 'normalcheck' );
			
			checkbox2.click( L.bind( function(checkBox2,item){
				item.setIconLabelVisible(checkBox2.is( ':checked' ) );
				
			}, this, checkbox2, item ) );
			
			label = $( '<label>' ).attr( {'for': id} ).html( GSI.TEXT.SAKUZU.DIALOG_LIST_VISIBLEICONLABELBTN );
			td = $( '<td>' ).attr({"colspan":4, "align":"right"}).append(checkbox2).append( label );
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
			if ( (GSI.Utils.Browser.ie) && (GSI.Utils.Browser.version == 9) )
			{
				frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE9 ) );
			}
			else
			{
				frame.append( $('<div>').addClass( 'message' ).html( GSI.TEXT.SAKUZU.DIALOG_LOAD_COMMENT_IE8) );
			}
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
		this._editCancelBtn = cancelBtn;
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

		if ( this._editingTarget && !this._editingTarget.isReady() ) 
		{
			if ( this._editingTarget._editingPathList )
			{
				for( var i= 0; i<this._editingTarget._editingPathList.length; i++ )
				{
					if ( this._editingTarget._editingPathList[i].completeShape )
						this._editingTarget._editingPathList[i].completeShape();
				}
			}
			
			return;
		}
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
			
			if ( this._editingTarget && this._editingTarget._layer )
			{
				this._editingTarget._layer._edited = true;
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

		this._pointEditTextFrame  = $( '<div>' ).css({position:"relative"});
		var messageFrame = $( "<div>" ).addClass("gsi_sakuzu_dialog_pointedit_textmessage_frame" ).css({position:"relative"});
		messageFrame .append( $( '<div>' ).addClass( "gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG ));
		this._pointEditTextModeButton = $( "<a>" ).addClass("gsi_sakuzu_dialog_pointedit_textmode_btn").attr({href:"javascript:void(0);"}).html( "HTML入力に切り替え" );
		messageFrame .append( this._pointEditTextModeButton);
		
		this._pointEditTextFrame.append( messageFrame );
		
		this._pointEditTextModeButton.click( L.bind( function(){
			if ( this._pointEditTextArea.val() != "" && !this._pointEditTextArea.hasClass("textmode") )
			{
				if ( !confirm( 'スタイル等の情報が失われる可能性があります。よろしいですか？' ) ) return;
			}
			this._setPointTextMode( !this._pointEditTextArea.hasClass("textmode"), this._pointEditTextArea.val() );
		}, this ) );
		
		this._pointEditTextArea = $( '<textarea>' )
			.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT} )
			.addClass( 'gsi_sakuzu_dialog_pointedit_textarea' ).addClass( 'textmode' );
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
		
		this._pointEditTextStyleFrame = $( '<div>' ).addClass( 'gsi_sakuzu_dialog_pointedit_text_style_frame' );
		
		// font-family
		/*
		var fontFamilyFrame = $( '<div>' ).addClass('font_family_select_frame');
		this._pointEditTextFontFamilySelect = $( '<select>' ).addClass( 'font_family_select' );
		fontFamilyFrame.append( this._pointEditTextFontFamilySelect );
		this._pointEditTextStyleFrame.append( fontFamilyFrame );
		
		this._pointEditTextFontFamilySelect
				.append($('<option>')
				.html("フォントを選択")
				.val(""));
		
		for ( var i=0; i<CONFIG.SAKUZU.FONTFAMILYLIST.length; i++ )
		{
			this._pointEditTextFontFamilySelect
				.append($('<option>')
				.html(CONFIG.SAKUZU.FONTFAMILYLIST[i])
				.val(CONFIG.SAKUZU.FONTFAMILYLIST[i]));
		}
		
		this._pointEditTextFontFamilySelect
			.on( 'change', L.bind( function(){
				this._onPointIconHTMLChange();
			}, this ) );
			
		*/
		// font-size
		this._pointEditTextFontSizeSelect = $( '<select>' ).addClass( 'font_size_select' );
		this._pointEditTextStyleFrame.append( this._pointEditTextFontSizeSelect );
		
		this._pointEditTextFontSizeSelect
				.append($('<option>')
				.html("文字サイズ")
				.val(""));
				
		for ( var i=0; i<CONFIG.SAKUZU.FONTSIZELIST.length; i++ )
		{
			this._pointEditTextFontSizeSelect
				.append($('<option>')
				.html(CONFIG.SAKUZU.FONTSIZELIST[i])
				.val(CONFIG.SAKUZU.FONTSIZELIST[i]));
		}
		
		
		
		this._pointEditTextFontSizeSelect
			.on( 'change', L.bind( function(){
				this._onPointIconHTMLChange();
			}, this ) );
		
		// bold
		this._pointEditTextFontBoldButton = $( '<a>' ).addClass( 'font_bold_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontBoldButton );
		this._pointEditTextFontBoldButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontBoldButton.data({ '_bold' : this._pointEditTextFontBoldButton.data('_bold') ? false: true } );
				if ( this._pointEditTextFontBoldButton.data('_bold') )
					this._pointEditTextFontBoldButton.addClass( 'enabled' );
				else
					this._pointEditTextFontBoldButton.removeClass( 'enabled' );
				this._onPointIconHTMLChange();
			}, this ) );
			
			
		
		// italic
		this._pointEditTextFontItalicButton = $( '<a>' ).addClass( 'font_italic_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontItalicButton );
		this._pointEditTextFontItalicButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontItalicButton.data({ '_italic' : this._pointEditTextFontItalicButton.data('_italic') ? false: true } );
				
				if ( this._pointEditTextFontItalicButton.data('_italic') )
					this._pointEditTextFontItalicButton.addClass( 'enabled' );
				else
					this._pointEditTextFontItalicButton.removeClass( 'enabled' );
				this._onPointIconHTMLChange();
			}, this ) );
		
		// underline
		this._pointEditTextFontUnderlineButton = $( '<a>' ).addClass( 'font_underline_btn' ).attr({href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontUnderlineButton );
		this._pointEditTextFontUnderlineButton
			.on( 'click', L.bind( function(){
				this._pointEditTextFontUnderlineButton.data({ '_underline' : this._pointEditTextFontUnderlineButton.data('_underline') ? false: true } );
				if ( this._pointEditTextFontUnderlineButton.data('_underline') )
					this._pointEditTextFontUnderlineButton.addClass( 'enabled' );
				else
					this._pointEditTextFontUnderlineButton.removeClass( 'enabled' );
				
				this._onPointIconHTMLChange();
			}, this ) );
		
		
		
			
		// color
		var id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;
		this._pointEditTextFontColorButton = $( '<a>' ).addClass( 'color_btn' ).attr({id:id,href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontColorButton );
		this._pointEditTextFontColorButton.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			clearButton : true,
			onChangeColor: L.bind( function( color ){
				if ( color && color != '' )
				{
					this._pointEditTextFontColorButton.find("div").css( {"background-color":color} );
					this._pointEditTextFontColorButton.addClass( 'enabled' );
				}
				else
				{
					this._pointEditTextFontColorButton.find("div").css( {"background-color":""} );
					this._pointEditTextFontColorButton.removeClass( 'enabled' );
				}
				this._pointEditTextFontColorButton.data({ '_color' : color } );
				this._onPointIconHTMLChange();
			}, this )
		});
		
		this._pointEditTextFontColorButton .append( $("<div>") );
		
		// background-color
		id = 'GSI_SakuzuDialog_lineColor_' + GSI.Utils.getCurrentID() ;
		this._pointEditTextFontBGColorButton = $( '<a>' ).addClass( 'background_color_btn' ).attr({id:id,href:"javascript:void(0);"}).html("");
		this._pointEditTextStyleFrame.append( this._pointEditTextFontBGColorButton );
		
		this._pointEditTextFrame.append( this._pointEditTextStyleFrame );
		this._pointEditTextFontBGColorButton.simpleColorPicker({
			showEffect: 'slide',
			hideEffect: 'slide',
			clearButton : true,
			onChangeColor: L.bind( function( color ){
				if ( color && color != '' )
				{
					this._pointEditTextFontBGColorButton.find("div").css( {"background-color":color} );
					this._pointEditTextFontBGColorButton.addClass( 'enabled' );
				}
				else
				{
					this._pointEditTextFontBGColorButton.find("div").css( {"background-color":""} );
					this._pointEditTextFontBGColorButton.removeClass( 'enabled' );
				}
				this._pointEditTextFontBGColorButton.data({ '_bgcolor' : color } );
				this._onPointIconHTMLChange();
			}, this )
		});
		this._pointEditTextFontBGColorButton .append( $("<div>") );
		
		
		
		
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
		this._setPointTextMode( true );
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
	
	_pointEditTextToHTML : function(text)
	{
		
		
		// テキストモード
		var fontSize = this._pointEditTextFontSizeSelect.val();
		var style = '';
		if ( fontSize && fontSize != '' )
			style += "font-size:" + fontSize + 'pt;'
		
		if ( this._pointEditTextFontBoldButton.data('_bold') )
			style += "font-weight:bold;";
		if ( this._pointEditTextFontItalicButton.data('_italic') )
			style += "font-style:italic;";
		if ( this._pointEditTextFontUnderlineButton.data('_underline') )
			style += "text-decoration:underline;";
		if ( this._pointEditTextFontColorButton.data( '_color' ) && this._pointEditTextFontColorButton.data( '_color' ) != '' )
			style += "color:" + this._pointEditTextFontColorButton.data( '_color' ) + ";";
		if ( this._pointEditTextFontBGColorButton.data( '_bgcolor' ) && this._pointEditTextFontBGColorButton.data( '_bgcolor' ) != '' )
			style += "background-color:" + this._pointEditTextFontBGColorButton.data( '_bgcolor' ) + ";";
		
		
		if ( style != '' )
			text = '<div style="' + style + '">' + text.replace(/\n/g, '<br>') + '</div>';
		else
		    text = text.replace(/\n/g, '<br>');
		    
		return text;
	},
	
	
	_onPointIconHTMLChange : function()
	{
		if ( this._pointEditTextArea.hasClass( "textmode" ) )
		{
			var text =  this._pointEditTextToHTML(this._pointEditTextArea.val());
			
			if ( this._pointEditTextArea.data("start_text") == text )
			{
				this._refreshEditingIconHTML( this._pointEditTextArea.data("html_text") );
			}
			else
				this._refreshEditingIconHTML(  text);
		}
		else
		{
			this._refreshEditingIconHTML( this._pointEditTextArea.val() );
		}
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
	
	_setPointTextMode : function(textMode, text)
	{
		if ( textMode )
		{
			
			this._pointEditTextFrame .find( "div.gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_MSG );
			this._pointEditTextArea.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_TEXTMODE_HINT } );
			var fontFamily = "";
			var fontSize = "";
			var bold = false;
			var italic = false;
			var underline = false;
			var color = "";
			var bordering = "";
			var backgroundColor = "";
			if ( !text || text == "" )
			{
				
				this._pointEditTextArea.data( {"start_text":"", "html_text" : ""} );
				this._pointEditTextArea.val("");
			}
			else
			{
				var a = $( "<div>" ).html( text );
				var children = a.children();
				if ( children.length > 0 )
				{
					fontSize = parseInt( $(children[0]).css( "font-size" ) );
					
					var fontWeight = $(children[0]).css( "font-weight" );
					if ( fontWeight && fontWeight != 'normal' )
						bold = true;
					
					var fontStyle = $(children[0]).css( "font-style" );
					if ( fontStyle && fontStyle == 'italic' )
						italic = true;
					
					var fontUnderline = $(children[0]).css( "text-decoration" );
					if ( fontUnderline && fontUnderline == 'underline' )
						underline = true;
					color =  $(children[0]).css( "color" );
					backgroundColor =  $(children[0]).css( "background-color" );
					if ( color == "transparent" ) color = "";
					if ( backgroundColor == "transparent" ) backgroundColor = "";
					//text-shadow
					bordering = "";
					this._pointEditTextArea.val(a.html(a.html().replace(/<br>/ig, "\n" )).text());
				}
				else
				{
					this._pointEditTextArea.val(text);
                }
			}
			
			this._pointEditTextFontSizeSelect.val(fontSize );
			this._pointEditTextFontBoldButton.data({"_bold":bold})[ ( bold ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontItalicButton.data({"_italic":italic})[ ( italic ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontUnderlineButton.data({"_underline":underline})[ ( underline ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontColorButton.data({"_color":color})[ ( color && color != '' ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontColorButton.find("div").css( {"background-color" : color && color != '' ? color : ""} );
			this._pointEditTextFontBGColorButton.data({"_bgcolor":backgroundColor})[ ( backgroundColor && backgroundColor != ''  ? "add" : "remove" ) + "Class"]( 'enabled' );
			this._pointEditTextFontBGColorButton.find("div").css( {"background-color" : backgroundColor && backgroundColor != '' ? backgroundColor : ""} );
			
			this._pointEditTextArea.data( {"start_text":this._pointEditTextToHTML(this._pointEditTextArea.val()), "html_text" : text} );
			
			
			this._pointEditTextModeButton.html( 'HTML入力に切替' );
			this._pointEditTextArea.addClass( "textmode" );
			this._pointEditTextStyleFrame.show();
		}
		else
		{
			if ( this._pointEditTextArea.data("start_text") == this._pointEditTextToHTML(text) )
			{
				text = this._pointEditTextArea.data("html_text")
			}
			else
			{
				text = this._pointEditTextToHTML(text);
				
			}
			this._pointEditTextArea.data( {"start_text":"", "html_text" : ""} );
			
			
			this._pointEditTextFrame .find( "div.gsi_sakuzu_dialog_pointedit_textmessage" )
				.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_MSG );
			
			this._pointEditTextArea.attr( { 'placeholder': GSI.TEXT.SAKUZU.DIALOG_EDIT_POINTTEXT_HINT } );
			if ( !text )
				this._pointEditTextArea.val("");
			else
				this._pointEditTextArea.val(text);
			this._pointEditTextModeButton.html( 'テキスト入力に切替' );
			this._pointEditTextArea.removeClass( "textmode" );
			this._pointEditTextStyleFrame.hide();
			
		}
	},
	
	_setControlStyle : function( style )
	{
		if ( !style ) return;

		// ポイント
		if ( style.icon )
		{
			if ( !style.icon.options.iconUrl && ( style.icon.options.html || style.icon.options.html == '' ) )
			{
				var text = style.icon.options.html ;
				/*
				if ( !style.icon.options.html || style.icon.options.html == '' )
				{
					this._setPointTextMode( true, text );
				}
				else
				{
					this._setPointTextMode( false,text );
				}
				*/
				this._setPointTextMode( true, text );
				
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

			if ( key != '' )
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
		this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).removeClass('disabled' );
		this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
	},
	_startEdit : function(itemType, layer)
	{
		this._editRemoveBtnFrame.show(); //removeClass('disabled' );
		this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).removeClass('disabled' );
		this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
		
		this._editingTarget.startEdit(itemType, layer);
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
	},
	_startCreate : function( id )
	{
		switch(id)
		{
		case GSI.SakuzuListItem.POLYGON:
		case GSI.SakuzuListItem.MULTIPOLYGON:
		case GSI.SakuzuListItem.LINESTRING:
		case GSI.SakuzuListItem.MULTILINESTRING:
			this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OK2BTN ).addClass('disabled' );
			this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
			break;
		default:
			this._editOkBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_OKBTN ).addClass('disabled' );
			this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
			break;
		}
		this._editRemoveBtnFrame.hide(); //.addClass('disabled' );
	
		this._editingTarget =this._sakuzuList.getSakuzuItem();
		this._editingTarget.startCreate(id);
		this._currentCreateId = id;
		
		this._setControlStyle( this._editingTarget.getEditingStyle() );
		this._initEditInfo( this._editingTarget.getEditingInfo() );
		
		if ( this._editingTarget._editingPathList )
		{
			for( var i=0; i<this._editingTarget._editingPathList.length; i++ )
			{
				if ( 
					this._editingTarget._editingPathList[i] instanceof GSI.Draw.Polygon ||
					this._editingTarget._editingPathList[i] instanceof GSI.Draw.Polyline )
				{
				
					this._editingTarget._editingPathList[i].on( "measurechange", L.bind( function(path) {
						if ( path._markers )
						{
							if ( path instanceof GSI.Draw.Polygon )
							{
								if ( path._markers.length < 3 ) 
									this._editOkBtn.addClass('disabled' );
								else
									this._editOkBtn.removeClass('disabled' );
								if ( path._markers.length >= 1 )
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
								else
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
								
							}
							else if (path instanceof GSI.Draw.Polyline)
							{
								if ( path._markers.length < 2 ) 
									this._editOkBtn.addClass('disabled' );
								else
									this._editOkBtn.removeClass('disabled' );
								if ( path._markers.length >= 1 )
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCEL2BTN );
								else
									this._editCancelBtn.html( GSI.TEXT.SAKUZU.DIALOG_EDIT_CANCELBTN );
							}
						}
					}, this, this._editingTarget._editingPathList[i] ) );
				}
			}
		}
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
		this._setCheckdState( this._tileGridCheck, false );
		this._setCheckdState( this._chiikiMeshCheck, false );
		this._setCheckdState( this._t25000Check, false );
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
		visibles[ CONFIG.PARAMETERNAMES.TILEGRID] = this._tileGridCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.CHIIKIMESH] = this._chiikiMeshCheck.is( ':checked' );
		visibles[ CONFIG.PARAMETERNAMES.T25000GRID] = this._t25000Check.is( ':checked' );
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
		
		// タイル座標
		item = __createItem( this,'タイル座標を表示' );
		ul.append( item.li );
		this._tileGridCheck = item.checkbox;
		
		// 地域メッシュ
		item = __createItem( this,'地域メッシュを表示' );
		ul.append( item.li );
		this._chiikiMeshCheck = item.checkbox;
		
		// 2万5千分1地形図郭
		item = __createItem( this,'2万5千分1地形図郭を表示' );
		ul.append( item.li );
		this._t25000Check = item.checkbox;
		
		
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
	initialize : function(map, layersJSON, mapLayerList, cocoTileLayer, options)
	{
		this.map = map;
		this.layersJSON = layersJSON;
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

        //this._ButtonTxtAdd = $("<a>").css({"position":"absolute",'left':'5px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("<img src='./image/system/add.png' style='position:relative;left:-2px;top:3px;' />情報追加/ベースマップ切替");
        this._RbtnTxtAdd = $("<a>").css({"position":"absolute",'left':'4px','bottom':'5px','cursor':'pointer'}).addClass('view_list_dialog_button').html("リセット");
		
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

        //frame.append( this._ButtonTxtAdd );
        frame.append( this._RbtnTxtAdd );

		frame.append( frameRange );
        /*
		frame.append( this._removeAllButton );
		frame.append( this._hideAllButton   );
		frame.append( this._showAllButton   );
        */
		var dummy = $('<div>').html( '&nbsp;' ).css( { "font-size": '9.5pt' } );
		frame.append(dummy );

		//this._ButtonTxtAdd.click( L.bind( this._onAddClick, this ) );
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
		this._checkEvacuationLayer();
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
	show : function(noActivate)
	{
		GSI.Dialog.prototype.show.call(this,noActivate);
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
			for ( var i=0; i<liList.length; i++ )
			{
				var li = $( liList[i] );
				var isFirstTile = ( i==0 );
				
				var isLastTile = ( i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS ) );
				
				if ( isFirstTile )
					li.find(".updown_frame a.up").addClass("disabled");//.hide();
				else
					li.find(".updown_frame a.up").removeClass("disabled");//
	

				if ( isLastTile ) 
					li.find(".updown_frame a.down").addClass("disabled");//.hide();
				else
					li.find(".updown_frame a.down").removeClass("disabled");//.show();
			}
			
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
		
		if ( target._appendInfo ) target = target._appendInfo;
		
		target = target.parent;
		var result = '';
		while( target )
		{
			result = target.title + (result == '' ?'': '&gt;') + result;
			target = target.parent;
		}

		return result;
	},
	_updateLayer : function( li, item, isTile, isFirstTile, isLastTile  )
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
		
		
		if ( isFirstTile )
			li.find(".updown_frame a.up").addClass("disabled");//.hide();
		else
			li.find(".updown_frame a.up").removeClass("disabled");//.show();
			

		if ( isLastTile ) 
			li.find(".updown_frame a.down").addClass("disabled");//.hide();
		else
			li.find(".updown_frame a.down").removeClass("disabled");//.show();
		
	},
	_makeLayer : function( li, a, item, isTile, isFirstTile, isLastTile )
	{
		var cocoVisible = this.cocoTileLayer.getVisible();

        var vClass = 'item_frame';
        var vClassTitle = 'title';
        var fBaseMap = false;
        var enablemt = false;
        if(item.parent && item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
            vClass   = 'item_frame_fixed';
            vClassTitle = 'title_base';
            fBaseMap = true;
        }
        a.addClass( vClass );
		
		if ( (!GSI.Utils.Browser.ie) && (item.url) && (!fBaseMap) )
        {
            var regext = /\.png$|\.jpg$|\.jpeg$/g;
            var hit = regext.exec(item.url);
            if ( (hit) && (hit.length > 0) )
            {
                vClassTitle = 'title_mt';
                enablemt = true;
            }
        
        }
        
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
        else
        {
			//乗算
            if (enablemt)
            {
                var mp = new GSI.ToggleSwitch( {className:'toggle', checked:(item._visibleInfo.blend)} );
                //var mp = new GSI.OnOffSwitch( {className:'filetext', checked:(item._visibleInfo.blend)} );
                var mpElement = mp.getElement();
                mpElement.addClass("multiplytile");
                mpElement.on( 'change', L.bind(this._onBlendSwitchChange, this, a, mp ) );
 
                li.append( mpElement );
            }
		}
		
        // 透過
		var opacityBtn =$("<a>").addClass("opacity_btn").attr( {"href":"javascript:void(0);"} ).html('透過率');
		opacityBtn.click( L.bind(function(){ this._onOpacityBtnClick(li); }, this ));
		li.append( opacityBtn );
		
		/*
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
		*/

        // 詳細
		var descriptionBtn = $( '<span>' ).addClass( 'description_btn').html("解説");
		li.append( descriptionBtn );
		descriptionBtn.unbind( 'click' ).bind( 'click', L.bind( this._onLayerMouseEnter, this, a, item ) );

		// 閉じる
		var closeBtn = $( '<div>' ).addClass( 'closebtn' );
		li.append(closeBtn );
    	closeBtn.unbind( 'click' ).bind( 'click', L.bind( this.onRemoveClick, this, li ) );
		
		// ソート
		if ( isTile && !fBaseMap && ( !isFirstTile || !isLastTile ) )
		{
			
			
			var updownFrame = $( "<div>").addClass( 'updown_frame' );
			var upButton = $( "<a>" ).attr( {"href":"javascript:void(0);"} ).addClass( "up" )
				.click( L.bind( function(){this._up(li);}, this ) );
			var downButton = $ ( "<a>" ).attr( {"href":"javascript:void(0);"} ).addClass( "down" )
				.click( L.bind( function(){this._down(li);}, this ) );
			
			if ( isFirstTile )
				upButton.addClass("disabled");//.hide();
			else
				upButton.removeClass("disabled");//.hide();
			
			if ( isLastTile ) 
				downButton.addClass("disabled");//.hide();
			else
				downButton.removeClass("disabled");//.hide();
			
			
			updownFrame.append( upButton ).append( downButton );
			li.append(updownFrame );

		}
		
		
		a.click( L.bind( this.onItemClick, this, li, a, viewMark) );
	},
	_onOpacityBtnClick : function(li)
	{
		
		
		var item = li.data('data');
		var opacity = ( item._visibleInfo ? item._visibleInfo.opacity : 1 );
		if ( !this._opacityWindow )
		{
			this._opacityWindow = $( '<div>' ).addClass( 'viewlistdialog_opacity_window' );
			this._opacityValue = $( '<div>' ).addClass( 'value' ).html( '透過率:' );
			this._opacitySlider = $( '<div>' ).addClass( 'slider' ).html( '&nbsp;' );
			this._opacityWindow.append(this._opacityValue ).append( this._opacitySlider );
			$( "body" ) .append( this._opacityWindow );
			this._opacitySlider.slider({
				min: 0,
				max : 100
			});
		}
		else if ( this._opacityWindow && this._opacityWindow.is(":visible") && this._opacityWindow.data("item") == item )
		{
			this._opacityWindow.slideUp(200);
			return;
		}
		var offset = li.find("a.opacity_btn").offset();
		this._opacityWindow.css({
			top: offset.top + li.find("a.opacity_btn").outerHeight() -4,
			left :offset.left - 200 + 'px'
		}).data( { "item" : item } );
		
		var opacityPercentage = Math.round( 100 - ( opacity * 100 ) );
		this._opacityValue.html('透過率:' + opacityPercentage + '%');
		this._opacitySlider.data({"__target_item":item}).slider( "option", "value", opacityPercentage );
		this._opacitySlider.off("slide").on( "slide", L.bind(function( event, ui ) {
			var item = this._opacitySlider.data('__target_item');
			var value = ui.value;// this._opacitySlider.slider( "option", "value" );
			this._opacityValue.html('透過率:' + value + '%');
			var opacity = value/ 100.0;
			if ( opacity < 0 ) opacity = 0;
			if ( opacity > 1 ) opacity = 1;
			opacity = 1- opacity;
			if(item.parent.title_sys && item.parent.title_sys == CONFIG.layerBaseFolderSYS){
				GSI.GLOBALS.baseLayer.setOpacity(opacity);
				item._visibleInfo.opacity = opacity;
			}
			else{
				item._visibleInfo.layer.setOpacity( opacity );
				item._visibleInfo.opacity = opacity;
			}
		}, this ) );
		
		if ( this._hideOpacityWindowHandler )
		{
			$( document.body ).unbind( 'mousedown', this._hideOpacityWindowHandler );
			$( document.body ).unbind( 'touchstart', this._hideOpacityWindowHandler );
		
		}
		this._hideOpacityWindowHandler  = L.bind( function(event)
		{
			if ( !this._opacityWindow 
				|| event.target == this._opacityWindow[0]
			    || $(event.target).is(".opacity_btn")) return;

			var parents = $( event.target ).parents();
			
			var hit = false;
			for( var i=0; i<parents.length; i++ )
			{
				if ( $(parents[i]).is(".viewlistdialog_opacity_window"))
				{
					hit = true;
					break;
				}
			}
			if ( !hit )
			{
				this._opacityWindow.slideUp(200);
				$( document.body ).unbind( 'mousedown', this._hideOpacityWindowHandler );
				$( document.body ).unbind( 'touchstart', this._hideOpacityWindowHandler );
			}
		}, this );

		$( document.body ).bind( 'mousedown', this._hideOpacityWindowHandler );
		$( document.body ).bind( 'touchstart', this._hideOpacityWindowHandler );
		
		this._opacityWindow.hide().slideDown(200);
		
	},
	_up : function(li)
	{
		var item = li.data('data');
		var tileList = this.mapLayerList.getTileList();
		var hit = false;
		for( var i=1; i<tileList.length; i++ )
		{
			if ( item == tileList[i])
			{
				hit = true;
				break;
			}
			
		}
		if ( hit ) li.prev().before( li.detach() ); 
		
		this.onSortChange();
		this._initializeList( true );
	},
	
	_down : function(li)
	{
		var item = li.data('data');
		var tileList = this.mapLayerList.getTileList();
		var hit = false;
		for( var i=0; i<tileList.length; i++ )
		{
			if ( item == tileList[i])
			{
				if ( i < tileList.length-1)
				{
					var nextItem = tileList[i+1];
				
					
					if(nextItem.parent && nextItem.parent.title_sys && nextItem.parent.title_sys == CONFIG.layerBaseFolderSYS){
						
					}
					else hit = true;
				}
				break;
			}
			
		}
		if ( hit ) li.next().after( li.detach() ); 
		
		this.onSortChange();
		this._initializeList( true );
	},
	
	
	Refresh : function(visibleLayers)
	{
        this._removeAll();

		for ( var i=0; i<visibleLayers.length; i++ )
		{
			var l = visibleLayers[i];
			if(l && l.info){
				//GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden);
				GSI.GLOBALS.mapLayerList.append(l.info, true,l.hidden, null, l.blend);
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
				this._updateLayer( li, item, isTile, 
						i==0,
						i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS )  );
			}
			else
			{
			    var a = $( '<a>' ).attr( { 'href':'javascript:void(0);' } );
			    a.data( { 'data' : item } );
				this._makeLayer(li, a, item, isTile, i==0,
						i>= list.length-1 || ( i == list.length-2 && 
						list[list.length-1].parent && list[list.length-1].parent.title_sys && list[list.length-1].parent.title_sys == CONFIG.layerBaseFolderSYS )  );
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

			if (item.id.indexOf(CONFIG.layerEvacuationHeader)>=0)
			{
				if ( GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false )
				{
					GSI.GLOBALS.evacDialog.show();
				}
			}
		}
		else
		{
			item._visibleInfo._isHidden = true;
			this.map.removeLayer( item_layer );

            viewMark.removeClass( 'viewmark' ).html( ' ' );
            a.removeClass( 'view' );

			if (item.id.indexOf(CONFIG.layerEvacuationHeader)>=0 )
			{
				GSI.GLOBALS.evacDialog.hide();
			}
        }
        
        if ( item._visibleInfo.blend )
        {
            this._blendTile(a, item._visibleInfo.blend);
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
		/*
		var tileList = this.mapLayerList.getTileList();
		
		if ( this.mapLayerList.getList().length > 0 || tileList.length > 0)
		{
			if ( this.mapLayerList.getList().length == 0 && tileList.length ==1 && 
				tileList[0].parent && tileList[0].parent.title_sys && tileList[0].parent.title_sys == CONFIG.layerBaseFolderSYS ) return;
			this.show(true);
		}
		*/
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
			this._checkEvacuationLayer();
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
	_onBlendSwitchChange : function( a, mp )
	{
		/*
       	if (GSI.Utils.Browser.ie)
       	{
       		alert('この機能はインターネットエクスプローラーではご利用いただけません。');
       		return;
       	}
       	*/
       	var item = a.data( 'data' );
       	item._visibleInfo.blend = mp.checked();
       	this._blendTile( a, mp.checked() );
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
	_checkEvacuationLayer : function()
	{
	    if ( this.mapLayerList )
	    {
	    	var l = this.mapLayerList.getList();
	    	for(i = 0 ; i < l.length; i++ )
	    	{				
	    		if ( l[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}				
	    	}
	    	var tl = this.mapLayerList.getTileList();

	    	for(i = 0 ; i < tl.length; i++ )
	    	{				
	    		if ( tl[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
	    		{
	    			return true;
	    		}			
	    	}
	    }
		if( GSI.GLOBALS.layerTreeDialog.current )
		{
			if ( GSI.GLOBALS.layerTreeDialog.current.title_evac )
			{
				return true;
			}
		}
		

	    GSI.GLOBALS.evacDialog.hide();
		CONFIG.layerEvacuationIsConfirmOK = false;
	    return false;
	},
	_blendTile : function ( a, flg )
	{
       	if (GSI.Utils.Browser.ie)
       	{
       		//alert('この機能はインターネットエクスプローラーではご利用いただけません。');
       		return;
       	}

		var item = a.data('data');
		GSI.Utils.setMixBlendMode( item, flg );
		/*
		var tileId = getblendTileSetting(item.id);

		var el = item._visibleInfo.layer._container.getAttribute('style');
		if ( el )
		{
		    el = el.replace("mix-blend-mode: multiply; ", "");
		}
		else
		{
		    el = "";
		}
		if ( flg == true)
		{
			el = "mix-blend-mode: multiply; " + el;
		}
	    item._visibleInfo.layer._container.setAttribute('style', el);
		*/
	}
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
 - GSI.EvacDialog
 ************************************************************************/
GSI.EvacDialog = L.Control.extend( {
	options : {
		width: '310px',
		position:'bottomright',
	},
	initialize : function()
	{
		this._map = GSI.GLOBALS.map;
		L.Util.setOptions(this, this.options);
		this._isShow = false;
	},
	show : function ()
	{
		if (this._isShow == false)
		{
			if (!this._map)
			{
				this._map = GSI.GLOBALS.map;
			}
			this.addTo(this._map);
		}
		this._isShow = true;
	},
	hide : function ()
	{
		if (this._isShow == true)
		{
			this.removeFrom(this._map);
		}
		this._isShow = false;
	},
	onAdd: function (map)
	{
		this._map = map;
		this._container = L.DomUtil.create('div', 'evac_dialog');
		//content
		var frame =$('<div>').addClass('evac_dialog_content').html(this.createContent());
		
		$(this._container).css({'opacity':'0.7'}).append(frame);

		return this._container
	},
	createContent : function()
	{
		return GSI.TEXT.EVAC.KIYAKU + "<br>" + GSI.TEXT.EVAC.KIYAKULINK;
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
	appendVisibleList : function( dlg, noActivate )
	{
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				if ( noActivate ) return;
				this.visibleList.splice( i,1 );
				break;
			}
		}

		this.adjust( dlg );
		if ( noActivate && this.visibleList.length > 0)
		{
			this.visibleList.splice( this.visibleList.length-1, 0, dlg );
		}
		else
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
			if (this.visibleList[i].options.containerClass != "evac_dialog")
			{
				this.visibleList[i].css({'z-index':zIndex, opacity: opacity} );			
			}
			this.visibleList[i].addClass( "deactive");

			zIndex++;
			idx++;
		}

		if ( this.visibleList.length > 0 )
		{
			if (this.visibleList[ this.visibleList.length - 1].options.containerClass != "evac_dialog")
			{
				this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.95} );
			}
			else
			{
				this.visibleList[ this.visibleList.length - 1 ].css({'z-index':zIndex, opacity: 0.6} );				
			}
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
	},
	isVisibleDialog : function( dlg ){
		for ( var i=0; i<this.visibleList.length; i++ )
		{
			var d = this.visibleList[i];
			if ( d == dlg )
			{
				return true;
			}
		}
		return false;
	}
} );
/************************************************************************
 L.Class
 - GSI.EvacuationManager
 ************************************************************************/
GSI.EvacuationManager = L.Class.extend({
	initialize : function( queryParams )
	{
		this._isVisibleDialog = false;
		if (queryParams)
		{
			this._queryparams = null;
			this._queryParams = queryParams;
		}
	},
	Reset : function( qp )
	{
		this.initialize( qp );
	},
	Out : function()
	{
		return this._queryParams;
	},
	accept : function()
	{
		var d;
		
		if (this._queryParams.params["disp"])
		{
			d = this._queryParams.params["disp"];
		}

		var ls, ly, lcd;
		if(this._queryParams.params["ls"])
		{
			ls = this._queryParams.params["ls"].split("|");
			GSI.Utils.rpad(d, "0", ls.length);
		}
		ly = this._queryParams._layers;
		lcd = this._queryParams.params["lcd"];
		if (ls)
		{
			if (d.charAt(ls.length-1) == "1")
			{
				this._isVisibleDialog = true;
			}

			if ( lcd && lcd.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
			{
				for(var i = ls.length - 1; i >= 0; i--)
				{
					if ( (lcd != ls[i]) && ls[i].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ls.splice(i,1);
						this._isVisibleDialog = (this._isVisibleDialog || (d.charAt(i) == "1") )
					}
				}
			}
			else
			{
				var lsct = 0;
				for(var i = ls.length - 1; i >= 0; i--)
				{
					if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
					{
						if (lsct > 0)
						{
							ls.splice(i,1);
						}
						lsct++;
					}
				}
			}
			this._queryParams.params["ls"] = ls.join('|');
		}

		var dct = 0;
		if (ly)
		{
			for(var i = ly.length - 1; i >= 0; i--)
			{
				if ( lcd && lcd.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					if ((lcd != ly[i].id) && ly[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ly.splice(i,1);
					}
				}
				else
				{
					if ( ly[i].id.indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						if (dct > 0)
						{
							ly.splice(i,1);
						}
						dct++;
					}
				}			
			}
		}
	},
	cancel : function()
	{
		var ls, ly, lcd;
		if(this._queryParams.params["ls"])
		{
			ls = this._queryParams.params["ls"].split("|");
		}
		ly = this._queryParams._layers;
		lcd = this._queryParams.params["lcd"];

		if (ls)
		{
			for(var i = ls.length - 1; i >= 0; i--)
			{
				if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
				{
					ls.splice(i,1);
				}
			}
			this._queryParams.params["ls"] = ls.join('|');
		}

		if (lcd)
		{
			if (lcd.indexOf(CONFIG.layerEvacuationHeader)>=0)
			{
				this._queryParams.params["lcd"]=null;
			}
		}

		if (ly)
		{
			for(var i = ly.length - 1; i >= 0; i--)
			{
				if (ly[i].id.indexOf(CONFIG.layerEvacuationHeader)>=0)
				{
					ly.splice(i,1);
				}
			}
		}
		this._isVisibleDialog = false;
	},
	isVisibleDialog : function()
	{
		return this._isVisibleDialog;
	}
});

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
	options : {
		watchInterval : 5000,
		max : 1000
	},
	initialize : function (map)
	{
		this.map = map;
	},
	
	getLocation : function()
	{
		if ( GSI.GeoLocation.can )
		{
			if ( this._getLocationId ) return false;
			
			this._locationCounter = 0;
			this._getLocationId = navigator.geolocation.watchPosition(
				L.bind(function(loc) {
					if ( loc.coords.accuracy < 100 || this._locationCounter >= 0)
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
						navigator.geolocation.clearWatch(this._getLocationId);
						this._getLocationId = null;	
					}
					this._locationCounter++;
				}, this ),
				L.bind(function(){},this),
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
    HashSetProc : function( hash ){
        var n = hash.indexOf("/&");
        if(n >= 1){
            var options = hash.substr(n);
            if(this.vHashOptions != options){
                this.eHashChange = true;
				
				if (options.indexOf(CONFIG.layerEvacuationHeader) >= 0)
				{
					this.forEvacuation(options);
				}
				else
				{
					this.HashSetProc_sub(options);
				}
            }
        }
    },
    HashSetProc_sub : function( options ){
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
					GSI.GLOBALS.layerTreeDialog.setCurrentPath(GSI.GLOBALS.queryParams.getCurrentPath());
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

	},
	forEvacuation : function ( options )
	{
		
		var disp = "";
		var ops = {};
		var op = options.split("&");
		for( var i = 0; i < op.length; i++ )
		{
			var it = op[i].split("=");
			ops[it[0]] = it[1];
		}
		
		if (ops["disp"])
		{
			//逆順に並べておく
			for( var i = ops["disp"].length - 1; i >= 0; i-- )
			{
				disp += ops["disp"].charAt(i);
			}
			ops["disp"] = "";
		}
		GSI.GLOBALS.confirmDlg.onPositiveButtonClick = L.bind(this.evacuationConfirmOK, this, ops, disp);
		GSI.GLOBALS.confirmDlg.onNegativeButtonClick = L.bind(this.evacuationConfirmCancel, this, ops, disp);

		if ( ops["ls"].indexOf(CONFIG.layerEvacuationHeader) < 0 )
		{
			GSI.GLOBALS.evacDialog.hide();
			HashSetProc_sub(options);
		}
		else
		{
			var ls = ops["ls"].split("%7C");
			if  (CONFIG.layerEvacuationIsConfirmOK == false )
			{
				GSI.GLOBALS.confirmDlg.show();
			}
			else
			{
				this.evacuationConfirmOK( ops, disp );
			}
		}
	},
	evacuationConfirmOK : function( ops, disp )
	{
		var wrongls = false;
		if (ops["ls"])
		{
			var ls = ops["ls"].split("%7C");
			if (ls)
			{
				if ( disp.length < ls.length ) GSI.Utils.rpad(disp, "0", ls.length);

				if ( ops["lcd"] && ops["lcd"].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					var cc = 0;
					//with lcd
					for (var i = ls.length-1; i>=0; i--)
					{
						
						if ((ops["lcd"] != ls[i]) && (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0))
						{
							ls.splice(i, 1);
							wrongls = true;
						}
						else
						{
							ops["disp"]+=disp.charAt(i);
						}
					}
				}
				else
				{
					var dct;
					for (var i = ls.length-1; i>=0; i--)
					{
						if (ls[i].indexOf(CONFIG.layerEvacuationHeader)>=0)
						{
							if (dct > 0)
							{
								ls.splice(i, 1);
								wrongls = true;
							}
							else
							{
								ops["disp"] += disp.charAt(i);
								dct++;
							}
						}
						else
						{
							if ( disp.charAt(i) )
							{
								ops["disp"] += disp.charAt(i);
							}
						}
					}
				}
				ops["ls"] = ls.join("%7C");
			}		
		}
		var newop = "";
		for( var key in ops )
		{
			if ( ops[key] )
				newop += (key + "=" + ops[key] + "&");
			else
				newop += (key + "&");
		}
		if (wrongls == true)
		{
			location.hash = newop;
		}
		else
		{
			this.HashSetProc_sub(newop.substring(0, newop.length - 1));
		}
		GSI.GLOBALS.confirmDlg.hide();
		if (GSI.Dialog._dialogManager.isVisibleDialog(GSI.GLOBALS.evacDialog) == false)
		{
			GSI.GLOBALS.evacDialog.show();
		}

	},
	evacuationConfirmCancel : function( ops, disp )
	{
		if ( ops["ls"] )
		{
			var ls = ops["ls"].split("%7C");
			if( ls )
			{
				if ( disp.length < ls.length ) GSI.Utils.rpad(disp, "0", ls.length);

				for ( var i = ls.length - 1; i >= 0; i-- )
				{
					if ( ls[i].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
					{
						ls.splice(i, 1);
					}
					else
					{
						if ( disp.charAt(i) )
						{
							ops["disp"] += disp.charAt(i);
						}
					}
				}
				ops["ls"] = ls.join("%7C");
			}
			if ( ops["lcd"] )
			{
				if ( ops["lcd"].indexOf(CONFIG.layerEvacuationHeader) >= 0 )
				{
					ops["lcd"] = null;
				}
			}		
		}
		var newop = "";
		for( var key in ops )
		{
			if ( ops[key] )
				newop += (key + "=" + ops[key] + "&");
			else
				newop += (key + "&");
		}
		location.hash = newop;
		GSI.GLOBALS.confirmDlg.hide();
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
	
	drawPath : function(texture)
	{
		if ( !this._lines ) return;
		for( var i=0; i< this._lines.length; i++ )
		{
			this._drawPath( texture, this._lines[i] );
		}
		
		
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var i, j, len, len2, point, drawMethod;
		var vp = this._map._pathViewport;
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		texture.beginPath();
		
		var parts = layer._parts;
		
		for (i = 0, len = parts.length; i < len; i++) {
			
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				point = parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				
				texture[drawMethod](point.x + ( origin.x - pixelBounds.min.x ), point.y + ( origin.y - pixelBounds.min.y ));
			}
			// TODO refactor ugly hack
			if (layer instanceof L.Polygon || layer instanceof L.Circle) {
				texture.closePath();
			}
		}
		
		texture.save();
		this._updateStyle(texture, layer);
		
		var opacity = 1;
		//console.log( this.options.opacity );
		if (layer.options.fill) {
			
			texture.globalAlpha = ( layer.options.fillOpacity ?layer.options.fillOpacity : 1 ) * opacity;
			texture.fill();          
		}
		if (layer.options.stroke) {
			texture.globalAlpha = opacity;
			texture.stroke();
		}

		texture.restore();
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
 - GSI.TileGrid（タイル座標）
 ************************************************************************/
GSI.TileGridLayer = L.TileLayer.Canvas.extend( {
	
	_initContainer: function ()
	{
		var tilePane = this._map._panes.overlayPane;
		
		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-layer');

			this._updateZIndex();

			if (this._animated) {
				var className = 'leaflet-tile-container';
				this._bgBuffer = L.DomUtil.create('div', className, this._container);
				this._tileContainer = L.DomUtil.create('div', className, this._container);

			} else {
				this._tileContainer = this._container;
			}
			
			tilePane.insertBefore(this._container,tilePane.firstChild);
			//tilePane.appendChild(this._container);

		}
	},
	
	drawTo : function(texture)
	{
		var ctx = texture;
		var zoom = this._map.getZoom();
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		
		for( var key in this._tiles )
		{
			var tile = this._tiles[key];
			
			var pos = $(tile).position();
			pos.left += ( origin.x - pixelBounds.min.x );
			pos.top += ( origin.y - pixelBounds.min.y );
			
			ctx.globalAlpha =1.0;
			ctx.fillStyle = '#FF0000';
			ctx.strokeStyle = '#FF0000';
			ctx.strokeRect(
				pos.left,
				pos.top, 255, 255);
			
			
			ctx.textAlign = 'center';
			ctx.font = 'bold 24px sans-serif';
			//ctx.fillStyle = '#98514B';
			ctx.fillStyle = '#FF0000';
			ctx.strokeStyle = '#fff';
			
			ctx.lineWidth = 5;
			ctx.strokeText(zoom + '/' + tile._tilePoint.x + '/' + tile._tilePoint.y,
				 pos.left+128, pos.top+128);
			ctx.globalAlpha = 1.0;
			ctx.fillText(zoom + '/' + tile._tilePoint.x + '/' + tile._tilePoint.y,
				 pos.left+128, pos.top+128);
		}
	},
	
	drawTile : function(canvas, tilePoint, zoom) {
		var ctx = canvas.getContext('2d');
		ctx.globalAlpha = 1.0;
		ctx.fillStyle = '#FF0000';
		ctx.strokeStyle = '#FF0000';
		//ctx.fillStyle = '#FF0000';
		//ctx.strokeStyle = '#FF0000';
		ctx.strokeRect(0, 0, 255, 255);
		ctx.textAlign = 'center';
		ctx.font = 'bold 24px sans-serif';
		//ctx.fillStyle = '#98514B';
		ctx.fillStyle = '#FF0000';
		ctx.strokeStyle = '#fff';
		ctx.lineWidth = 5;
		ctx.strokeText(zoom + '/' + tilePoint.x + '/' + tilePoint.y, 128, 128);
		ctx.globalAlpha = 1.0;
		ctx.fillText(zoom + '/' + tilePoint.x + '/' + tilePoint.y, 128, 128);
	}
} );

GSI.TileGrid = L.Class.extend( {
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

		this._visible = options.visible;
		this.setVisible(this._visible);
	},
	
	drawPath : function(texture)
	{
		if ( this._layer ) this._layer.drawTo (texture);
		
		
	},
	
	
	
	setVisible : function( on )
	{
		this._visible = on;
		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			this._layer = new GSI.TileGridLayer({minZoom:2, maxZoom:18});
			this._map.addLayer(this._layer);
		}
	},
	getVisible : function()
	{
		return this._visible;
	}
});

/************************************************************************
 L.Class
 - GSI.T25000Grid（2万5千分の1）
 ************************************************************************/
GSI.T25000Grid = L.Class.extend( {
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
		this._style = null;

		options = L.setOptions(this, options);

		options.lineStyle.clickable = false;

		this._visible = options.visible;
		this.setVisible(this._visible);
		
		
	},
	setVisible : function( on )
	{
		this._visible = on;
		
		

		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			/*
			var style = {
				options:
				{
				  attribution: '図郭',minZoom: 10,maxNativeZoom: 8, maxZoom: 18
				},
				geojsonOptions:
				{
						 pointToLayer: function(feature, latlng) {
						   var idstyle = "\""
							   +"font-size: 16px;"
							   +"color:#f00;"
							   +"white-space: nowrap;"
							   +"\"";
						   var idAnchor = feature.properties['図名'].length /2 * 16;
						   var myIcon= L.divIcon({
										   iconAnchor: [idAnchor,10],
										   className: "gsi-div-icon", 
										   html: "<div style="+idstyle+">"+feature.properties['図名']+"</div>"});
						   var s = '<div class="popup">';
						   for(var k in feature.properties) {
							 if(k == "図郭座標"){continue;}
							 var v = feature.properties[k];
							 s += k + ': ' + v + '<br>';
						   }
						   s += '</div>';
						   var zdiv = L.marker(latlng, {icon: myIcon}).bindPopup(s);
						   var zkaklb = [[feature.properties['図郭座標'][0][1],feature.properties['図郭座標'][0][0]],[feature.properties['図郭座標'][1][1],feature.properties['図郭座標'][1][0]]];
						   var zkak = L.rectangle(zkaklb, {color: '#f00', weight: 1, opacity: 1,'fillColor': '#f00', 'fillOpacity': 0});
						   return L.featureGroup([zdiv,zkak]);
						 }
				}
			};
			*/
			if ( !this._style )
			{
				$.ajax( {
					type: "GET",
					url: "https://cyberjapandata.gsi.go.jp/xyz/zk25000/style.js",
					dataType: "text",
					cache:false,
					success : L.bind(this._onStyleLoad, this),
					error : L.bind(this._onStyleLoadError, this)
				} );
			}
			else
			{
				this._layer = new GSI.VectorTileLayer(
					'https://cyberjapandata.gsi.go.jp/xyz/zk25000/{z}/{x}/{y}.geojson',
					this._style.options,this._style.geojsonOptions, true);
				
				this._map.addLayer(this._layer);
			}
		}
	},
	getVisible : function()
	{
		return this._visible;
	},
	
	_onStyleLoad : function( text )
	{
		try
		{
			this._style= eval( "(" + text + ")" );
			this._style.options.skipLoadStyle = true;
			//this._style.options.styletype = "canvas";
		}
		catch( e)
		{
			this._onStyleLoadError();
			return;
		}
		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			
			this._layer = new GSI.VectorTileLayer(
				'https://maps.gsi.go.jp/xyz/zk25000/{z}/{x}/{y}.geojson',
				this._style.options,this._style.geojsonOptions, true);
			
			this._map.addLayer(this._layer,this._style.geojsonOptions);
		}
	},
	
	_onStyleLoadError : function( text )
	{
		//if ( this._layer )
		//	this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			this._layer = new L.TileLayer.GeoJSON(
				'https://maps.gsi.go.jp/xyz/zk25000/{z}/{x}/{y}.geojson',
				{});
			
			this._map.addLayer(this._layer);
		}
	}
	
});



/************************************************************************
 L.Class
 - GSI.ChiikiMesh（地域メッシュ）
 ************************************************************************/
GSI.ChiikiMesh = L.Class.extend( {
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

		this._visible = options.visible;
		this.setVisible(this._visible);
	},
	setVisible : function( on )
	{
		this._visible = on;
		
		

		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			/*
			var style = {
				options:
				{
				  attribution: '地域メッシュ',minZoom: 6,maxNativeZoom: 14, maxZoom: 18
				},
				geojsonOptions:
				{
						 pointToLayer: function(feature, latlng) {
						   var idstyle = "\""
							   +"font-size: 16px;"
							   +"color:#f00;"
							   +"white-space: nowrap;"
							   +"\"";
						   var idAnchor = (feature.properties['mesh_code'].length - 0.5) /3 * 16;
						   var myIcon= L.divIcon({
										   iconAnchor: [idAnchor,10],
										   className: "gsi-div-icon", 
										   html: "<div style="+idstyle+">"+feature.properties['mesh_code']+"</div>"});

						   var zdiv = L.marker(latlng, {icon: myIcon});
						   var zkaklb = [[feature.properties['rectangle_lb'][0][1],feature.properties['rectangle_lb'][0][0]],[feature.properties['rectangle_lb'][1][1],feature.properties['rectangle_lb'][1][0]]];
						   var zkak = L.rectangle(zkaklb, {color: '#f00', weight: 1, opacity: 1,'fillColor': '#f00', 'fillOpacity': 0});
						   return L.featureGroup([zdiv,zkak]);
						 }
				}
			};
			this._layer = new L.TileLayer.GeoJSON(
				'https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/{z}/{x}/{y}.geojson',
				style.options,style.geojsonOptions);
			
			this._map.addLayer(this._layer);
			*/
			if ( !this._style )
			{
				$.ajax( {
					type: "GET",
					url: "https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/style.js",
					dataType: "text",
					cache:false,
					success : L.bind(this._onStyleLoad, this),
					error : L.bind(this._onStyleLoadError, this)
				} );
			}
			else
			{
				this._layer = new GSI.VectorTileLayer(
					'https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/{z}/{x}/{y}.geojson',
					this._style.options,this._style.geojsonOptions, true);
				
				this._map.addLayer(this._layer);
			}
		}
	},
	getVisible : function()
	{
		return this._visible;
	},
	
	_onStyleLoad : function( text )
	{
		try
		{
			this._style= eval( "(" + text + ")" );
			this._style.options.skipLoadStyle = true;
			//this._style.options.styletype = "canvas";
		}
		catch( e)
		{
			this._onStyleLoadError();
			return;
		}
		if ( this._layer )
			this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			
			this._layer = new GSI.VectorTileLayer(
				'https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/{z}/{x}/{y}.geojson',
				this._style.options,this._style.geojsonOptions, true);
			
			this._map.addLayer(this._layer,this._style.geojsonOptions);
		}
	},
	
	_onStyleLoadError : function( text )
	{
		//if ( this._layer )
		//	this._map.removeLayer(this._layer);
		if ( this._visible )
		{
			this._layer = new L.TileLayer.GeoJSON(
				'https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/{z}/{x}/{y}.geojson',
				{});
			
			this._map.addLayer(this._layer);
		}
	}
});


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
	
	drawPath : function(texture)
	{
		if ( !this._lines ) return;
		texture.beginPath();
		for( var i=0; i< this._lines.length; i++ )
		{
			var from = null;
			
			for( var j=0; j<this._lines[i]._latlngs.length; j ++ )
			{
				var point = this._map.latLngToContainerPoint(this._lines[i]._latlngs[j]);
				
				if( j == 0 ) texture.moveTo( point.x, point.y );
				else {
					this._lineToDot( texture, from.x, from.y, point.x, point.y );
				}
				
				from = point;
			}
			//this._drawPath( texture, this._lines[i] );
		}
		
		texture.save();
		
		texture.lineWidth = this.options.lineStyle.weight;
		texture.strokeStyle = this.options.lineStyle.color;
			
		
		var opacity = 1;
		texture.globalAlpha = opacity;
		texture.stroke();

		texture.restore();
		
	},
	
	_lineToDot : function (texture, p1x, p1y, p2x, p2y)
	{
		var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
		var rad = Math.atan2(p2y - p1y, p2x - p1x);
		var space = 3;
		var dotted = Math.round(d / space / 2);

		for (var i = 0; i < dotted; i++) {
			var p3x = Math.cos(rad) * space * (i * 2) + p1x;
			var p3y = Math.sin(rad) * space * (i * 2) + p1y;
			var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
			var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

			texture.moveTo(p3x, p3y);
			texture.lineTo(p4x, p4y);
			
		}
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer) {
		if ( !layer._parts ) return;
		
		var i, j, len, len2, point, drawMethod;
		var vp = this._map._pathViewport;
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		texture.beginPath();
		
		var parts = layer._parts;
		
		for (i = 0, len = parts.length; i < len; i++) {
			
			for (j = 0, len2 = parts[i].length; j < len2; j++) {
				point = parts[i][j];
				drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				
				texture[drawMethod](point.x + ( origin.x - pixelBounds.min.x ), point.y + ( origin.y - pixelBounds.min.y ));
			}
			// TODO refactor ugly hack
			if (layer instanceof L.Polygon || layer instanceof L.Circle) {
				texture.closePath();
			}
		}
		
		texture.save();
		this._updateStyle(texture, layer);
		
		var opacity = 1;
		//console.log( this.options.opacity );
		if (layer.options.fill) {
			
			texture.globalAlpha = ( layer.options.fillOpacity ?layer.options.fillOpacity : 1 ) * opacity;
			texture.fill();          
		}
		if (layer.options.stroke) {
			texture.globalAlpha = opacity;
			texture.stroke();
		}

		texture.restore();
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
		this._tabs = $.extend( [], options.layersTab );
		
		for ( var i=0; i<this._tabs .length; i++ )
		{
			this._data.push( {
					"type": "LayerGroup",
					"title": this._tabs[i].caption,
					"iconUrl": "",
					"toggleall": false,
					"isDetail" : this._tabs[i].isDetail,
					"entries": [],
					"isTab" : true
			} );
			if ( this._tabs[i].isDetail)
			{
				this._detailTabIndex = i;
			}
		}
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
					layers : [],
					isDetail : true
				} );
			}
		}

        // After loadBase()
        //this.initialize_layers(this.options.visibleLayers);
	},
    initialize_layers : function(layers)
    {
        this.visibleLayers     = [];
        this.visibleLayersHash = {};

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
				hidden : layerData.hidden,
				blend : layerData.blend
			};
			this.visibleLayers.push( info );
			if ( !this.visibleLayersHash[ layerData.id ] )
				this.visibleLayersHash[ layerData.id ] = [];
				
			this.visibleLayersHash[ layerData.id ].push( info );
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
				for( var i=0; i<this._tabs.length; i++ )
				{
					if ( this._tabs[i].layers == null ) continue;
					for( var j=0; j< this._tabs[i].layers.length; j++ )
					{
						this._loadingData.push( {
							url    : this._tabs[i].layers[j],
							load   : false,
							layers : [],
							isDetail : this._tabs[i].isDetail,
							tabIndex : i
						} );
					}
				}
            }
		    for (var i = 0; i < layers.length; i++){
				this._loadingData.push( {
					url    : layers[i],
                    load   : false,
					layers : [],
					isDetail : true
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
				
				
				if ( this._loadingData[i].isDetail )
				{
					for ( var j=0; j<this._loadingData[i].layers.length; j++ )
					{
						//if ( !this._tabs[this._detailTabIndex].data ) this._tabs[this._detailTabIndex].data =[];
						this._data[this._detailTabIndex].entries.push( this._loadingData[i].layers[j] );
						//this._data.push( this._loadingData[i].layers[j] );
					}
				}
				else
				{
					for ( var j=0; j<this._loadingData[i].layers.length; j++ )
					{
						//if ( !this._tabs[this._detailTabIndex].data ) this._tabs[this._detailTabIndex].data =[];
						this._data[this._loadingData[i].tabIndex].entries.push( this._loadingData[i].layers[j] );
						//this._data.push( this._loadingData[i].layers[j] );
					}
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

		if ( (json.layers) && (json.layers[0].title) && (!json.layers[0].title_sys) )
		{
			var hybridjson = JSON.parse("{ \"layers\":[] }");
			for(ll in json.layers)
			{
				if (json.layers[ll].title == "指定緊急避難場所")
				{
        			var json_evac2 = JSON.parse("{ \"type\": \"LayerGroup\", \"title\": \"" + CONFIG.layerEvacuationFolder + "\", \"title_evac\": \"" + CONFIG.layerEvacuationFolderSYS + "\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] }");
        			//var json_evac2 = JSON.parse("{ \"layers\": [ { \"type\": \"LayerGroup\", \"title\": \"" + CONFIG.layerEvacuationFolder + "\", \"title_evac\": \"" + CONFIG.layerEvacuationFolderSYS + "\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] } ] }");
        			json_evac2.entries = json.layers[ll].entries.concat();
        			//json_evac2.layers[0].entries = json.layers[ll].entries.concat();
        			hybridjson.layers.push(json_evac2);
				}
				else
				{
					hybridjson.layers.push(json.layers[ll]);
				}
			}
			json = hybridjson;
		}
		/*
        if (json.layers && json.layers[0].title)
        {
        	if ( json.layers[0].title == "指定緊急避難場所" )
        	{
        		var json_evac = JSON.parse("{ \"layers\": [ { \"type\": \"LayerGroup\", \"title\": \"" + CONFIG.layerEvacuationFolder + "\", \"title_evac\": \"" + CONFIG.layerEvacuationFolderSYS + "\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] } ] }");
        		json_evac.layers[0].entries = json.layers[0].entries.concat();
        		json = json_evac;
        	}
        }
        */
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
        return this._data[this._detailTabIndex].entries[0].entries;
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
		if ( !this.layersHash ) this.layersHash = {};
		
		if ( !tree ) return;
		var folderCount = 0;
		for ( var i=0; i<tree.length; i++ )
		{
			if ( tree[i].type == "Layer" )
			{
				var info = tree[i];

				if((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0))
				{
					info.url=info.url.replace('https://','//');
				}
				if(( info.url.indexOf('{z}/{x}/{y}.png') != -1 || info.url.indexOf('{z}/{x}/{y}.jpg') != -1  ) && (info.url.indexOf('//maps.gsi.go.jp/') != -1 || info.url.indexOf('//cyberjapandata.gsi.go.jp/') != -1 ))
				{
					info.url=info.url.replace('cyberjapandata.gsi.go.jp', 'maps.gsi.go.jp' );
					info.url=info.url.replace('http://','//');
					info.url=info.url.replace('https://','//');
				}
//				if ( window.location.protocol == "https:" )
//					info.url = info.url.replace( "http://", "https://" );
				info.layerType = GSI.LayersJSON.url2LayerType( info.url );
				if ( info.cocotile  )
				{
					if (  this.hasTileList ){
						info.hasTile = ( this.hasTileList[ info.id ] == true );
                    }
				}
				
				if ( this.visibleLayersHash[ info.id ] )
				{
					for ( var j = 0; j<this.visibleLayersHash[ info.id ].length; j++ )
					{
						var layerInfo = this.visibleLayersHash[ info.id ][j];
						info.initialOpacity =layerInfo.initialOpacity;
						if ( ! this.visibleLayersHash[ info.id ][j].info  )
							this.visibleLayersHash[ info.id ][j].info = info;
					}
				}
				
				
				if (!this.layersHash[info.id] )
					this.layersHash[info.id] = info;
				this.layers.push( info );
			}
			else
			{
				if ( !tree[ i ] .id )
				{
					tree[ i ] .isMultiLayer = false;
					tree[ i ] .id = ( parent ? parent.id + '_' + folderCount : 'f' + folderCount );
					folderCount ++;
				}
				else if ( tree[ i ] .isMultiLayer != false)
				{
					var info = tree[i];
					info.layerType = 'multiLayer';
					info.isMultiLayer = true;
					if ( this.visibleLayersHash[ info.id ] )
					{
						for ( var j = 0; j<this.visibleLayersHash[ info.id ].length; j++ )
						{
							var layerInfo = this.visibleLayersHash[ info.id ][j];
							info.initialOpacity =layerInfo.initialOpacity;
							this.visibleLayersHash[ info.id ][j].info = info;
						}
					}
					if (!this.layersHash[info.id] )
						this.layersHash[info.id] = info;
					
					this.layers.push( info );
				}
			}
			tree[i].parent = parent;
			this._initializeTree( tree[i].isMultiLayer ? null : tree[i].entries, tree[i]);
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

GSI.LayersJSON.url2LayerType = function( url )
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
};

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
	append : function( info, noFinishMove, isHide ,Confirm_FLAG, blend)
	{
		if ( this.exists( info ) ) return;
		info._appendInfo = null;
		
		if ( GSI.GLOBALS.layersJSON.layersHash[info.id] &&
			GSI.GLOBALS.layersJSON.layersHash[info.id] != info &&
			!GSI.GLOBALS.layersJSON.layersHash[info.id].isMultiLayerChild)
		{
			var oldInfo = info;
			info = GSI.GLOBALS.layersJSON.layersHash[info.id];
			info._appendInfo = oldInfo;
		}
		
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
		if ( isHide ) info._visibleInfo._isHidden = true;
		
		if ( ( blend === undefined ) || ( blend == null ) )
		{
		    info._visibleInfo.blend = false;
		}
		else
		{
		    info._visibleInfo.blend = ( blend == "1" ? true : false );
		}
		info.initialOpacity = null;
		
		info._visibleInfo.layer = GSI.Utils.infoToLayer(info, noFinishMove );
		if ( info._visibleInfo.layer)
		{
			if ( info.layerType=="tile" )
			{
				var fBaseMap = false;
				if(info.parent && info.parent != null && info.parent.title_sys == CONFIG.layerBaseFolderSYS){
					fBaseMap = true;
				}
				if ( !info._visibleInfo._isHidden)
				{
					if(fBaseMap){
						info._visibleInfo.grayscale = GSI.GLOBALS.baseLayer.isGrayScale;
						GSI.GLOBALS.baseLayer.setActiveId(info.id);
					}
					else{
						this.map.addLayer(info._visibleInfo.layer,true,info._visibleInfo.blend);
    					GSI.Utils.setMixBlendMode( info, info._visibleInfo.blend );
					}
				}
				if(fBaseMap) this.tileList.push( info );
				else this.tileList.unshift( info );
				
				this._initZIndex( this.tileList );
			}
			else if ( info.layerType=="kml" )
			{
			// KML
				info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "KML"  ) );
				info._visibleInfo .layer.on("loaded", L.bind( this.onLayerLoad, this, info._visibleInfo.layer  ) );
				info._visibleInfo .layer .load();

				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer,true);

				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );
			}
			else if ( info.layerType=="geojson" )
			{
			// GeoJSON
				info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "GeoJSON"  ) );
				info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
				info._visibleInfo .layer .load();

				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer);

				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );

			}
			else if ( info.layerType=="geojson_tile" )
			{
			// タイルGeoJSON
				if ( !info._visibleInfo._isHidden )this.map.addLayer(info._visibleInfo.layer,true);

				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );
			}
			else if ( info.layerType=="topojson_tile" )
			{
			// タイルTopoJSON
				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer,true);
				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );
			}
			else if ( info.layerType=="topojson" )
			{
			// TopoJSON
				info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "TopoJSON"  ) );
				info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
				info._visibleInfo .layer .load();
				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer);

				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );
			}
			else if ( info.layerType=="tms" )
			{
			// TMS
				
				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer,true);
				this.tileList.unshift( info );
				this._initZIndex( this.tileList );
			}
			else if ( info.layerType=="multiLayer" )
			{
			// 複数レイヤ
				info._visibleInfo .layer.on("loadstart", L.bind( this.onLayerLoadStart, this, info._visibleInfo.layer, "MultiLayer"  ) );
				info._visibleInfo .layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
				info._visibleInfo .layer. load();
				if ( !info._visibleInfo._isHidden ) this.map.addLayer(info._visibleInfo.layer);
				this.list.unshift( info );
				this._initZIndexOffset( this.list, 10000 );


			}
			
			
		}
		/*
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
			if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;
			
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
			if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;
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
			if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;

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
			if ( info.bounds && info.bounds!="" )
			{
				options.bounds =info.bounds;
				options._bounds =info.bounds;
			}
			info._visibleInfo.layer = new GSI.VectorTileLayer(info.url,options, options2);

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
			if ( info.bounds && info.bounds!="" )
			{
				options.bounds =info.bounds;
				options._bounds =info.bounds;
			}

			info._visibleInfo.layer = new GSI.VectorTileLayer(info.url,options, options2);
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
			if ( info.bounds && info.bounds!="" ) ptions.bounds =info.bounds;

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
			if ( info.bounds && info.bounds!="" ) ptions.bounds =info.bounds;

			info._visibleInfo.layer = new GSI.GSITMSLayer(info.url,options);
			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer,true);
			this.tileList.unshift( info );
			this._initZIndex( this.tileList );
		}
		else if ( info.layerType=="multiLayer" )
		{
			// 複数レイヤ
			info._visibleInfo.layer = new GSI.MultiLayer(info.entries);
			if ( isHide )
				info._visibleInfo._isHidden = true;
			else
				this.map.addLayer(info._visibleInfo.layer);

			
		}
		*/
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
				if ( this.tileList[i] == info )return true;
				
			}
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i].id == info.id )return true;
				
			}
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info ) return true;
			}
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i].id == info.id ) return true;
			}
		}

		return false;
	},
	remove : function( info )
	{
		var targetInfo = null;
		if ( CONFIG.LAYERTYPELIST[info.layerType].isTileImage )
		{
			for ( var i=0; i<this.tileList.length; i++ )
			{
				if ( this.tileList[i] == info )
				{
					targetInfo = info;
					this.tileList.splice(i, 1);
					break;
				}
			}
			
			if ( !targetInfo )
			{
				for ( var i=0; i<this.tileList.length; i++ )
				{
					if ( this.tileList[i].id == info.id )
					{
						targetInfo = this.tileList[i];
						this.tileList.splice(i, 1);
						break;
					}
				}
			}
		
		
		}
		else
		{
			for ( var i=0; i<this.list.length; i++ )
			{
				if ( this.list[i] == info )
				{
					targetInfo = info;
					this.list.splice(i, 1);
					break;
				}
			}
			
			
			if ( !targetInfo )
			{
				for ( var i=0; i<this.list.length; i++ )
				{
					if ( this.list[i].id == info.id )
					{
						targetInfo = this.list[i];
						this.list.splice(i, 1);
						break;
					}
				}
			}
		}
			
		if ( targetInfo )
		{
			this.map.removeLayer( targetInfo._visibleInfo.layer );
			targetInfo._visibleInfo = null;
		}
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
	},
	getTotalCount : function()
	{
		return ( this.tileList ? this.tileList.length : 0 )
			+ ( this.list ? this.list.length : 0 );
	}
} );


GSI.Utils.infoToLayer = function( info, noFinishMove )
{
	var layer = null;
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
		if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;

		layer = new GSI.TileLayer(info.url,options);

	}
	else if ( info.layerType=="kml" )
	{
		var options = {async: true, "_map": this.map};

		if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
		if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
		if ( info.attribution ) options.attribution =info.attribution;
		if ( info.errorTileUrl ) options.errorTileUrl =info.errorTileUrl;
		if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;
		layer = new GSI.KML(info.url, options);
		layer._noFinishMove = noFinishMove;

	}
	else if ( info.layerType=="geojson" )
	{
	// GeoJSON
		var options = {};

		if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
		if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
		if ( info.attribution ) options.attribution =info.attribution;
		if ( info.bounds && info.bounds!="" ) options.bounds =info.bounds;

		layer = new GSI.GeoJSON(info.url,options);
		layer._noFinishMove = noFinishMove;

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
		
		if ( info.maxCanvasZoom  && info.maxCanvasZoom!="" )
		{
			options.maxCanvasZoom =info.maxCanvasZoom;
			options._maxCanvasZoom =info.maxCanvasZoom;
		}
		
		if ( info.attribution )
		{
			options.attribution =info.attribution;
			options._attribution =info.attribution;
		}
		if ( info.bounds && info.bounds!="" )
		{
			options.bounds =info.bounds;
			options._bounds =info.bounds;
		}
		if ( info.styleurl && info.styleurl!="" )
		{
			options.styleurl =info.styleurl;
			options._styleurl =info.styleurl;
		}
		
		//console.log( info );
		
		//if ( info.canvas &&  L.Browser.canvas )
		//	layer = new GSI.Canvas.GeoJSONTileLayer(info.url,options, options2);
		//else
			layer = new GSI.VectorTileLayer(info.url,options, options2);

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
		if ( info.bounds && info.bounds!="" )
		{
			options.bounds =info.bounds;
			options._bounds =info.bounds;
		}

		layer = new GSI.VectorTileLayer(info.url,options, options2);

	}
	else if ( info.layerType=="topojson" )
	{
	// TopoJSON
		var options = {layerType:'topojson'};

		if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
		if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
		if ( info.attribution ) options.attribution =info.attribution;
		if ( info.bounds && info.bounds!="" ) ptions.bounds =info.bounds;

		layer = new GSI.GeoJSON(info.url,options);
		layer._noFinishMove = noFinishMove;
	}
	else if ( info.layerType=="tms" )
	{
	// TMS
		var options = {};

		if ( ( info.minZoom == 0 || info.minZoom ) && info.minZoom != "" ) options.minZoom= info.minZoom;
		if ( ( info.maxZoom == 0 || info.maxZoom ) && info.maxZoom != "" ) options.maxZoom =info.maxZoom;
		if ( info.maxNativeZoom && info.maxNativeZoom!="" ) options.maxNativeZoom =info.maxNativeZoom;
		if ( info.attribution ) options.attribution =info.attribution;
		if ( info.bounds && info.bounds!="" ) ptions.bounds =info.bounds;

		layer = new GSI.GSITMSLayer(info.url,options);
	}
	else if ( info.layerType=="multiLayer" )
	{
		// 複数レイヤ
		layer = new GSI.MultiLayer(info.entries);


	}

	return layer;
};


/************************************************************************
 L.Class
 - GSI.MapMenu（地図、機能メニュー）
 ************************************************************************/
GSI.MapMenuList = [];

GSI.MapMenu = L.Class.extend( {
	includes: L.Mixin.Events,
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
		this._menuItemList = [];
		
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
						.click( L.bind( this.onItemClick, this ) )
						.on( 'mouseover', L.bind( this.onItemMouseOver, this ))
						.on( 'mouseout',  L.bind( this.onItemMouseOut, this ));

					if ( childConfig.arrow )
					{
						a.addClass( "arrow" );
						if ( childConfig.textAlign == "left" )
							a.addClass( this.options.position ).css({"text-align":"left", "padding-left" : "20px"});
						else
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
					this._menuItemList.push( a );
				}
				ul.append( li );
				parent.childrenFrame = ul;

				this.initializeTreeItems( item, childConfig,depth + 1 );
			}

			$( document.body).append( ul );
		}
	},
	disableMenuItem : function( id )
	{
		if ( !this._menuItemList ) return;
		for( var i=0; i<this._menuItemList.length; i++ )
		{
			if ( this._menuItemList[i].data('data').id == id )
				this._menuItemList[i].addClass( 'disabled' );
		}
	},
	
	
	isEnableMenuItem : function( id )
	{
		if ( !this._menuItemList ) return;
		for( var i=0; i<this._menuItemList.length; i++ )
		{
			if ( this._menuItemList[i].data('data').id == id )
				return !this._menuItemList[i].hasClass( 'disabled' );
		}
		
		return false;
	},
	
	
	enableMenuItem : function( id )
	{
		if ( !this._menuItemList ) return;
		for( var i=0; i<this._menuItemList.length; i++ )
		{
			if ( this._menuItemList[i].data('data').id == id )
				this._menuItemList[i].removeClass( 'disabled' );
			
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
	
	onItemMouseOver : function(event)
	{
		
		var target =  event.currentTarget;
		var info = $( target ).data( 'data' );
		if ( this.options.onMenuItemMouseOver )
		{
			this.options.onMenuItemMouseOver(info.id);
		}
	},
	onItemMouseOut : function(event)
	{
		var target =  event.currentTarget;
		var info = $( target ).data( 'data' );
		if ( this.options.onMenuItemMouseOut )
		{
			this.options.onMenuItemMouseOut(info.id);
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
			this.hide(true);
		}
	},
	hide : function(noEffect)
	{
		this._visible = false;
		this.hideChildren( this.rootItem, noEffect );
		this.fire("hide");
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
   - GSI.Modal.Dialog
     - GSI.Modal.confirmDialog（免責事項選択ダイアログ）
 ************************************************************************/
GSI.Modal.confirmDialog = GSI.Modal.Dialog.extend( {
	options : {
		positiveButtonText : 'ＯＫ',
		nagativeButtonText : 'キャンセル',
		title : "免責事項・ご利用上の注意"
		,message : ""
		,width : 460
	},
	getContent : function()
	{
		var frame = $( '<div>' ).css({'height':'280px','overflow':'auto'}).addClass( 'gsi_modal_dialog_content' );
		var inframe = $('<div>').css({'margin':'10px'});
		var liframe1 = $('<div>').css({'margin':'5px 18px 0px 0px'});
		var liframe2 = $('<div>').css({'margin':'0px 18px 0px 0px'});
		var frmct = $( '<div>' ).html(GSI.TEXT.EVAC.CONFIRMTOP);
		var uol = $('<ol>');
		var li1 = $('<li>').attr({"value":"1"}).html(GSI.TEXT.EVAC.CONFIRMITEM1);
		var li2 = $('<li>').attr({"value":"2"}).html(GSI.TEXT.EVAC.CONFIRMITEM2);
		var li3 = $('<li>').attr({"value":"3"}).html(GSI.TEXT.EVAC.CONFIRMITEM3);
		var atten = $( '<div>' ).html(GSI.TEXT.EVAC.ATTENTION);

		var dol = $('<ol>');
		var dli1 = $('<li>').attr({"value":"1"}).html(GSI.TEXT.EVAC.DATAITEM1);
		var dli2 = $('<li>').attr({"value":"2"}).html(GSI.TEXT.EVAC.DATAITEM2);
		var dli3 = $('<li>').attr({"value":"3"}).html(GSI.TEXT.EVAC.DATAITEM3);
		var dli4 = $('<li>').attr({"value":"4"}).html(GSI.TEXT.EVAC.DATAITEM5);
		var datten = $( '<div>' ).html(GSI.TEXT.EVAC.ATTENTIONDATA);

		uol.append(li1);
		uol.append(li2);
		uol.append(li3);
		liframe1.append(atten);
		liframe1.append(uol);

		dol.append(dli1);
		dol.append(dli2);
		dol.append(dli3);
		dol.append(dli4);
		liframe2.append(datten);
		liframe2.append(dol);

		inframe.append(frmct);
		inframe.append(liframe1);
		inframe.append(liframe2);

		frame.append(inframe);
		var titleFrame = $( '<div>' ).addClass('gsi_modal_dialog_header').html( this.options.title );

		var dialogFrame = GSI.Modal.Dialog.prototype.getContent.call( this );

		this.dialogContent.append( titleFrame );
		this.dialogContent.append( frame );

		return dialogFrame ;
	},
	onPositiveButtonClick : function()
	{
		this.hide();
		this.fire('positive');
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
 - GSI.ToggleSwitch
 ************************************************************************/
GSI.ToggleSwitch = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		className : "toggle",
		checked:true,
		onText:"ON",
		offText:"OFF"
	},
	classNames : {
		"toggle":"gsi_onoffswitch_toggle",
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
		var id = 'GSI_ToggleSwitch_' + GSI.Utils.getCurrentID();
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
				    this._originalMap.addLayer ( tileList[i]._visibleInfo.layer, null, tileList[i]._visibleInfo.blend );
					GSI.Utils.setMixBlendMode( tileList[i], tileList[i]._visibleInfo.blend );
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
			attributionControl : false,
			closePopupOnClick : false
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
    				//this._map.addLayer( tileList[i]._visibleInfo.layer );
    				this._map.addLayer( tileList[i]._visibleInfo.layer, null, tileList[i]._visibleInfo.blend );
    				GSI.Utils.setMixBlendMode( tileList[i], tileList[i]._visibleInfo.blend );
                }
			}
		}
        this._baseLayer = null;
        if(fBase){
		    this._baseLayer = new GSI.BaseLayer(CONFIG.BASETILES, this._originalBaseLayer.getActiveId());

			this._baseLayer.isGrayScale = this._originalBaseLayer.isGrayScale;
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
		
		// tileGrid
		if ( this.options.tileGrid.getVisible() )
		{
			new GSI.TileGrid( this._map, {
				condition: CONFIG.UTMGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.UTMGRIDSTYLE,
				labelClassName:CONFIG.UTMGRIDLABELCLASSNAME
			} );
		}
		// t25000Grid
		if ( this.options.t25000Grid.getVisible() )
		{
			new GSI.T25000Grid( this._map, {
				condition: CONFIG.UTMGRID.CONDITION,
				visible: true,
				lineStyle:CONFIG.UTMGRIDSTYLE,
				labelClassName:CONFIG.UTMGRIDLABELCLASSNAME
			} );
		}// chiikiMesh
		if ( this.options.chiikiMesh.getVisible() )
		{
			new GSI.ChiikiMesh( this._map, {
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
        var result_blend     = '';
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
			    var opacity   = ( ( tileIdList[i]._visibleInfo && ( tileIdList[i]._visibleInfo.opacity || tileIdList[i]._visibleInfo.opacity == 0 ) ) ? tileIdList[i]._visibleInfo.opacity   : 1);
			    var opacityText = ( opacity == 0 ? "0" : opacity.toFixed(2) );
			    if ( opacityText != "0" ) opacityText = opacityText.replace(/0$/g,'');
	            result += ( result !='' ? '|' : '' ) +tileIdList[i].id + ( opacity != 1 ? ',' + opacityText : '');
	            if(i != tileIdList.length-1){
	              var l = tileIdList[i]._visibleInfo.blend? "1": "0";
	              result_blend += l;
	            }
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
			    var opacity = ( ( idList[i]._visibleInfo && ( idList[i]._visibleInfo.opacity || idList[i]._visibleInfo.opacity == 0 ) ) ? idList[i]._visibleInfo.opacity : 1 );
			    var opacityText = ( opacity == 0 ? "0" : opacity.toFixed(2) );
			    if ( opacityText != "0" ) opacityText = opacityText.replace(/0$/g,'');
			    result += ( result !='' ? '|' : '' ) +idList[i].id + ( opacity != 1 ? ',' + opacityText : '');
            }
		}

        if(fGrayScale){
            if(GSI.GLOBALS.baseLayer.getGrayScale()){
                result_grayscale = "base_grayscale=1";
            }
        }

		if ( ( result != '') && (result_blend != '' ) )
		{
			result_blend= "&blend=" + result_blend;
		}
		
		if ( result != ''  || result_grayscale)
		{
            if(result_grayscale != ""){
                if(result != ""){
                    result_grayscale += "&";
                }
            }

			return result_grayscale + "ls=" + encodeURIComponent( result ) + result_blend;;
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
		tileGrid : false,
		t25000Grid : false,
		chiikiMesh : false,
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
            
            var blds = this.params["blend"];
			
			for ( var i=0; i<layers.length; i++ )
			{
				if ( $.trim( layers[i] ) == '' ) continue;
				var parts  = layers[i].split( ',' );
				var $hdn = false;

                var bld = "0";
                if (i > 0)
                {
					if ( blds )
                		bld = ( blds? blds.charAt( i - 1 ) : "0");
                	else
                	{
						if ( parts[ 0 ].indexOf("relief") >= 0 )
							bld = "1";
					}
                }
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
					hidden  : $hdn,
					blend   : bld
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
	initialize : function( owner, dataType, title, fileName, layer, visible, iconLabelVisible)
	{
		this.editMode = GSI.SakuzuListItem.NONE;
		this._owner = owner;
		this._dataType = dataType;
		this._title = title;
		this._fileName = fileName;
		this._layer = layer;
		this._visible = visible;
		this._iconLabelVisible = iconLabelVisible;
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
	
	getIconLabelVisible : function()
	{
		return this._iconLabelVisible;
	},
	setIconLabelVisible : function( visible)
	{
		if ( this._iconLabelVisible  != visible )
		{
			this._iconLabelVisible = visible;
			if ( this._layer )
			{
				if ( this._layer.getLayers )
				{
					var layers = this._layer.getLayers ();
					for( var i=0; i<layers.length; i++ )
					{
						this._setIconLabelVisible( layers[i], visible );
					}
				}
				else
					this._setIconLabelVisible( this._layer.layer, visible );
				
			}
		}

	},
	_setIconLabelVisible : function( layer, visible)
	{
		if ( !layer ) return;
		if ( layer.setLabelVisible ) layer.setLabelVisible( visible );
		if ( layer.options && layer.options.icon  && layer.options.icon .setLabelVisible ) layer.options.icon .setLabelVisible( visible );
		if ( layer.getLayers )
		{
			var layers = layer.getLayers();
			for( var i=0; i<layers.length; i++ )
			{
				this._setIconLabelVisible( layers[i], visible );
			}
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
			this._owner._map.on('draw:measurechange', function()
			{
				
			} );
			
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
				var icon = L.icon( iconOptions );
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
						if ( layer.options.icon instanceof L.DivIcon )
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
			if ( this._editingEditingLayer.options.icon )
			{
				this._editingEditingLayer.options.icon.options.labelVisible = this._iconLabelVisible;
				
				if ( this._editingEditingLayer.options.icon.setLabelText )
					this._editingEditingLayer.options.icon.setLabelText(
						this._editingEditingLayerInfo.title
					);
			}
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

					if (value == null)
					{
						value = "";
					}

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
			var numSides = CONFIG.CIRCLETOPOLYGONNUMSIDES;
			var center = layer.getLatLng();
			var center_lat_rad = center.lat * Math.PI/180;
			var center_lng_rad = center.lng * Math.PI/180;
			var dmax_lat = layer._mRadius / 6378137;
			var xys=[];
			xys.push([dmax_lat,0]);
			for(var i = 1; i < numSides; i++)
			{
				var y = dmax_lat - 2 * dmax_lat/numSides * i;
				var x =   2 * Math.asin(Math.sqrt((Math.pow(Math.sin(dmax_lat/2),2) - Math.pow(Math.sin((y)/2),2)) / (Math.cos(center_lat_rad+y)*Math.cos(center_lat_rad))));
				if(x !== x){
				 return;
				}else{
				 xys.push([y, x]);
				}
			}
			xys.push([-dmax_lat,0]);
			for(var i = 1; i < numSides; i++)
			{
				xys.push([xys[numSides-i][0],-xys[numSides-i][1]]);
			}
			xys.push([dmax_lat,0]);
			for(var i = 0; i < xys.length; i++)
			{
				latLngs.push(L.latLng((center_lat_rad+xys[i][0]) / (Math.PI/180), (center_lng_rad+xys[i][1]) / (Math.PI/180)));
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
						this._makeGeoJSONFeatures( layer2, features );
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
		text =  text ? text : this._fileReader.result;
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
		
		layer._kmlText = text;
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
				if ( item._layer && item._layer._kmlText && item._layer._kmlText != "" )
				{
	                this._styleId = 1;

					var styleList = {};
					
					
					var kml = '';
					
					if ( item._layer._edited )
					{
						kml =
							'<?xml version="1.0" encoding="UTF-8"?>' + "\n" +
							'<kml xmlns="http://www.opengis.net/kml/2.2">' + "\n" +
							'<Document>\n' +
							item.toKML(styleList) +
							'</Document>\n' +
							'</kml>';
					}
					else
					{
						kml = item._layer._kmlText;
					}
					result.push( {
						"kmltext" : kml //item._layer._kmlText
					} );
					continue;
				}
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
				
				
				if ( latLng[0] > 90 || latLng[0] < -90 || latLng[1] > 180 || latLng[1] < -180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.getDemPng(latLng);
				}
				
			}
			else if ( qType == this.QUERY_UTMPOINT )
			{
				var latLng = GSI.UTM.Utils.point2LatLng( query );

				if ( latLng )
				{
					this.getDemPng([latLng.lat, latLng.lng], CONFIG.SEARCHRESULTCLICKZOOM);
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
				else if ( latLng[0] > 90 || latLng[0] < -90 || latLng[1] > 180 || latLng[1] < -180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.getDemPng(latLng);
				}
			}
			else if ( qType == this.QUERY_LATLNGNE )
			{
				var latLng = this.parseLatLngText4( query );

				if (!latLng)
				{
					alert( '緯度経度を正しく入力して下さい\n');
				}
				else if ( latLng[0] > 90 || latLng[0] < -90 || latLng[1] > 180 || latLng[1] < -180 )
				{
					alert( '緯度経度を正しく入力して下さい\n' +
						'緯度:' + latLng[0] + ' 経度:' + latLng[1] );
				}
				else
				{
					this.getDemPng(latLng);
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
		else if( q.match(/^(-|\+)*[0-9]+(\.[0-9]+)*\s+(-|\+)*[0-9]+(\.[0-9]+)*$/)  )
		{
			return this.QUERY_LATLNG;
		}
		else if ( q.match(/^(-|\+)*[0-9]+度[\s]+(-|\+)*[0-9]+度$/)
			||
			 q.match(/^(-|\+)*[0-9]+度[0-9]+分[\s]+(-|\+)*[0-9]+度[0-9]+分$/)
			||
			 q.match(/^(-|\+)*[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒[\s]+(-|\+)*[0-9]+度[0-9]+分[0-9]+(\.[0-9]+)*秒$/)
		)
		{
			return this.QUERY_LATLNG2;
		}
		else
		{
			if ( ( q.match(/^(?:N|S|北緯|南緯|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(?:E|W|東経|西経|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)/) )
				||
				( q.match(/^(?:E|W|東経|西経|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(?:N|S|北緯|南緯|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)/) ) )
			{
				//NE表記
				return this.QUERY_LATLNGNE;
			}
			else if ( ( q.match(/^(?:N|S|北緯|南緯|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(?:E|W|東経|西経|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/) )
			 		|| 
			 		( q.match(/^(?:E|W|東経|西経|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(?:N|S|北緯|南緯|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}['分′])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/) ) )
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
		var latwSign;
		var lngwSign;
		var matchArr =  s.match( /^(-|\+)*([0-9]+)度[\s]+(-|\+)*([0-9]+)度$/ );

		if ( matchArr && matchArr.length > 0 )
		{
			var lat = parseInt( (matchArr[1] ? matchArr[1] : "") + matchArr[2] );
			var lng = parseInt( (matchArr[3] ? matchArr[3] : "") + matchArr[4] );
			return [ lat, lng ];
		}

		matchArr = s.match(/^(-|\+)*([0-9]+)度([0-9]+)分[\s]+(-|\+)*([0-9]+)度([0-9]+)分$/);

		if ( matchArr && matchArr.length > 0 )
		{
			latwSign = (matchArr[1] && matchArr[1] == "-"? -1 : 1);
			lngwSign = (matchArr[4] && matchArr[4] == "-"? -1 : 1);
			var lat = parseInt( matchArr[2] ) + ( parseFloat( matchArr[3] ) / 60.0 );
			var lng = parseInt( matchArr[5] ) + ( parseFloat( matchArr[6] ) / 60.0 );

			lat = lat * latwSign;
			lng = lng * lngwSign;
			return [ lat, lng ];
		}

		matchArr = s.match(/^(-|\+)*([0-9]+)度([0-9]+)分([0-9]+)秒[\s]+(-|\+)*([0-9]+)度([0-9]+)分([0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			latwSign = (matchArr[1] && matchArr[1] == "-"? -1 : 1);
			lngwSign = (matchArr[5] && matchArr[5] == "-"? -1 : 1);
			var lat = parseInt( matchArr[2] ) + ( parseFloat( matchArr[3] ) / 60.0 ) + ( parseFloat( matchArr[4] ) / 3600.0 );
			var lng = parseInt( matchArr[6] ) + ( parseFloat( matchArr[7] ) / 60.0 ) + ( parseFloat( matchArr[8] ) / 3600.0 );

			lat = lat * latwSign;
			lng = lng * lngwSign;
			return [ lat, lng ];
		}

		matchArr = s.match(/^(-|\+)*([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒[\s]+(-|\+)*([0-9]+)度([0-9]+)分([0-9]+\.[0-9]+)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			latwSign = (matchArr[1] && matchArr[1] == "-"? -1 : 1);
			lngwSign = (matchArr[5] && matchArr[5] == "-"? -1 : 1);
			var lat = parseInt( matchArr[2] ) + ( parseFloat( matchArr[3] ) / 60.0 ) + ( parseFloat( matchArr[4] ) / 3600.0 );
			var lng = parseInt( matchArr[6] ) + ( parseFloat( matchArr[7] ) / 60.0 ) + ( parseFloat( matchArr[8] ) / 3600.0 );

			lat = lat * latwSign;
			lng = lng * lngwSign;
			return [ lat, lng ];
		}

		matchArr = s.match(/^(-|\+)*([0-9]+)度([0-9]+)分([0-9]+(?:\.[0-9]+)*)秒[\s]+(-|\+)*([0-9]+)度([0-9]+)分([0-9]+(?:\.[0-9]+)*)秒$/);

		if ( matchArr && matchArr.length > 0 )
		{
			latwSign = (matchArr[1] && matchArr[1] == "-"? -1 : 1);
			lngwSign = (matchArr[5] && matchArr[5] == "-"? -1 : 1);
			var lat = parseInt( matchArr[2] ) + ( parseFloat( matchArr[3] ) / 60.0 ) + ( parseFloat( matchArr[4] ) / 3600.0 );
			var lng = parseInt( matchArr[6] ) + ( parseFloat( matchArr[7] ) / 60.0 ) + ( parseFloat( matchArr[8] ) / 3600.0 );

			lat = lat * latwSign;
			lng = lng * lngwSign;
			return [ lat, lng ];
		}


		return null;
	},
	parseLatLngText3 : function( s )
	{
		s = $.trim(s);
		s = s.replace( ',', ' ' );
		
		var matchArr =  s.match(/^(N|S|北緯|南緯|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(E|W|東経|西経|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/);
		var revflg = false;
		
		if (!matchArr)
		{
			matchArr =  s.match(/^(E|W|東経|西経|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*(?:,|\s)(N|S|北緯|南緯|-|\+)*([0-9]{1,3}[度°])([0-9]{1,2}[分′'])*([0-9]{1,2}(?:\.[0-9]+)*[秒″\"])*$/);
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

			if ( matchArr[1] && (matchArr[1] == 'S' || matchArr[1] == 'W' || matchArr[1] == '南緯' || matchArr[1] == '西経' || matchArr[1] == '-') )
			{
				la = -1 * la;
			}
			if ( matchArr[5] && (matchArr[5] == 'S' || matchArr[5] == 'W' || matchArr[5] == '南緯' || matchArr[5] == '西経' || matchArr[5] == '-') )
			{
				lo = -1 * lo;
			}
			if (revflg)
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

		var matchArr = s.match(/^(N|S|北緯|南緯|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(E|W|東経|西経|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)/)
		var revflg = false;
		
		if (!matchArr)
		{
			matchArr = s.match(/^(E|W|東経|西経|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)(?:,|\s)(N|S|北緯|南緯|-|\+)*([0-9]{1,3}(?:\.[0-9]+)*)/)
			revflg = true;
		}

		var lat, lon;
		try{
			if (matchArr && matchArr.length == 5)
			{
				lat = parseFloat( matchArr[2] );
				lon = parseFloat( matchArr[4] );
				if ( matchArr[1] && (matchArr[1] == 'S' || matchArr[1] == 'W' || matchArr[1] == '南緯' || matchArr[1] == '西経' || matchArr[1] == '-') )
				{
					lat = -1 * lat;
				}
				if ( matchArr[3] && (matchArr[3] == 'S' || matchArr[3] == 'W' || matchArr[3] == '南緯' || matchArr[3] == '西経' || matchArr[3] == '-') )
				{
					lon = -1 * lon;
				}
				if (revflg)
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
			result =  [ lat, lng ];
			
			return result;
		}
		catch( e )
		{
			return null;
		}
	},
	getDemPng : function ( latlng , errorZoom)
	{
        var lon = latlng[1] * .017453292519943295; // DEG → RAD : lon = (lon / 180) * Math.PI;
        var lat = latlng[0] * .017453292519943295; // DEG → RAD : lat = (lat / 180) * Math.PI;
	    var R	= 128 / Math.PI;
	    var x = R * (lon + Math.PI);
	    var y = (-1) * R / 2 * Math.log((1 + Math.sin(lat)) / (1 - Math.sin(lat))) + 128;
	    var z = 14;
        var vX_px     = x * Math.pow(2, z);
        var vY_px     = y * Math.pow(2, z);
        var vX_Tile   = Math.floor(vX_px / 256);
        var vY_Tile	  = Math.floor(vY_px / 256);
		var demUrl = "https://maps.gsi.go.jp/xyz/dem_png/" + z + "/" + vX_Tile + "/" + vY_Tile + ".png";
	    
		if ( latlng )
		{
			var errZoom = errorZoom ? errorZoom : 5;
			
			var aj =$.ajax ({
				type : "GET",
				url : demUrl,
				success: L.Util.bind(this.jumpToPoint, this, latlng, CONFIG.SEARCHRESULTCLICKZOOM),
				error: L.Util.bind(this.jumpToPoint, this, latlng, errZoom),
			});
		}
	},
	jumpToPoint : function (latlng, zoom) {
		this.map.setView(latlng, zoom, {reset : true});
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
 L.Control
 - GSI.Control.CrPanel
 ************************************************************************/
GSI.Control.CopyrightPanel = L.Control.extend({

	options: {

		position: 'bottomright',
		title:'地理院タイル',
		linkurl:'http://maps.gsi.go.jp/development/ichiran.html',
		width: 110,
		height: 10,
	},

	

	hideText: 'Hide CopyrightPanel',

	showText: 'Show CopyrightPanel',


	initialize: function (options) {
		L.Util.setOptions(this, options);
	},

	onAdd: function (map) {
		this._map = map;

		//Creating the container and stopping events from spilling through to the main map.
		this._container = L.DomUtil.create('div', 'leaflet-control-flatpanel');
		this._container.style.width = this.options.width + 'px';
		this._container.style.height = this.options.height + 'px';

		var alink = L.DomUtil.create('a','leaflet-control-crpanel', this._container);

		alink.innerHTML = this.options.title;
		alink.href = this.options.linkurl;
		alink.target = '_blank';
		//alink.style.color='#000000';

		this._urlPanel = alink;
		
		return this._container;
	},

	addTo: function (alink) {
		L.Control.prototype.addTo.call(this, alink);
		return this;
	},

	onRemove: function (map) {
		this._miniMap.off( 'click', this._onMiniMapClick, this );
		this._miniMap.off( 'touchend', this._onMiniMapClick, this );
	},

});

L.Map.addInitHook(function () {
	if (this.options.crPanel) {
		this.crPanel = (new L.Control.CopyrightPanel()).addTo(this);
	}
});

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
 L.Icon
 - GSI.DivIcon
 ************************************************************************/
GSI.Icon = L.Icon.extend( {
	
	options :{
		html : ''
	},
						 
	createIcon: function (oldIcon) {
		var img = L.Icon.prototype.createIcon.call(this,oldIcon);
		$(img).css( {'margin':0} );
		var div = $( (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div') );
		
		div.empty();
		div.append( img );
		this._setIconStyles(div[0], 'icon');
		
		this._createLabel(div);
		this._div = div;
		return div[0];
	},
	_createLabel : function( div )
	{
		if ( this.options._name == null || this.options._name == '' )
		{
			this._label = null;
		}
		else
		{
			this._label = $("<div>").addClass("gsi-iconlabel-class").html(this.options._name).css({"position":"absolute"} );

			var size = L.point(this.options['iconSize']);
			if (!size) {
				size = {};
				size.x = 12;
				size.y = 12;
			}
			
			$("body").append( this._label );
			this._label.css( { top:( size.y + 3 ) + 'px',
				left : (size.x / 2) - (this._label.outerWidth() / 2) + 'px'} );
			this._label.remove();

			if ( !this.options.labelVisible  )
			{
				this._label.hide();		
			}
			div.append( this._label) ;
		}
	},
	setLabelText : function(text)
	{
		this.options._name = text;
		if ( this._label ) this._label.remove();
		this._createLabel(this._div);
	},
	setLabelVisible : function(visible)
	{
		this.options.labelVisible = visible;
		if (this._label )
		{
			if (  this.options.labelVisible ) this._label.slideDown(200);
			else  this._label.slideUp(200);
		}
	}

} );

L.icon = function (options) {
	return new GSI.Icon(options);
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
						
						if ( value && value.length > 0 && value.charAt(0) == "#" )
						{
							options.color = value;
							options.opacity = 1;
						}
						else
						{
							options.color = '#' + value.substring(6, 8) + value.substring(4, 6) + value.substring(2, 4);
							options.opacity = parseInt(value.substring(0, 2), 16) / 255.0;
						}
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
				options.icon = {
					iconUrl: ioptions.href,
					shadowUrl: null,
					iconAnchorRef: {x: ioptions.x, y: ioptions.y},
					iconAnchorType:	{x: ioptions.xunits, y: ioptions.yunits},
					_iconScale : ioptions.scale
				};
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
		
		var name, tbl = '', descr = '';
		el = place.getElementsByTagName('name');
		if (el.length && el[0].childNodes.length) {
			name = el[0].childNodes[0].nodeValue;
		}
		for (j in parse) {
			// for jshint
			if (true)
			{
				var tag = parse[j];
				if ( tag && typeof tag == 'string' )
				{
					el = place.getElementsByTagName(tag);
					for (i = 0; i < el.length; i++) {
						var l = this['parse' + tag](el[i], xml, options, name);
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
	parsePoint: function (line, xml, options, name) {
		var el = line.getElementsByTagName('coordinates');
		if (!el.length) {
			return;
		}
		
		if ( options.icon )
		{
			options = $.extend( {}, options );
			options.icon._name = name;
			options.icon = new GSI.KMLIcon(options.icon);
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
			latLng = new L.LatLng(ll[1], ll[0]);
			if ( ll.length >= 3 && ll[2] != "" && ll[2] != 0 ) latLng._h = ll[2];
			
			coords.push(latLng);
		}
		return coords;
	}
});

GSI.KMLIcon = L.Icon.extend({
	
	/*					 
	createIcon: function (oldIcon) {
		var img = L.Icon.prototype.createIcon.call(this,oldIcon);
		$(img).css( {'margin':0} );
		var div = $( (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div') );
		div.append( img );
		this._setIconStyles(div[0], 'icon');
		
		this._createLabel(div);
		this._div = div;
		return div[0];
	},
	
	*/
	
	createIcon: function (oldIcon) {
		var img = this._createIcon('icon');

		$(img).css( {'margin':0} );
		var div = $( (oldIcon && oldIcon.tagName === 'DIV') ? oldIcon : document.createElement('div') );
		this._div = div;
		div.append( $(img) );
		this._setIconStyles(div[0], 'icon');
		if ( img.width && img.width > 0 )
		{
			this._onIconImageLoaded( img );
		}
		else
		{
			$(img).css({ 'visibility':'hidden'}).on( 'load', L.bind( this._onIconImageLoaded, this, img ) );
		}
		
		
		return div[0];
		
		//return img;
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
		
		img.style.width = w + 'px';
		img.style.height = h + 'px';
		this._setIconStyles(this._div[0], "icon");
		L.DomUtil.addClass(this._div[0], 'leaflet-clickable');
		img.style.visibility= 'visible';
		this._createLabel(this._div);
	},
	_createLabel : function( div )
	{
		if ( this.options._name == null || this.options._name == '' )
		{
			this._label = null;
		}
		else
		{
			this._label = $("<div>").addClass("gsi-iconlabel-class").html(this.options._name).css({"position":"absolute"} );

			var size = L.point(this.options['iconSize']);
			if (!size) {
				size = {};
				size.x = 12;
				size.y = 12;
			}
			
			$("body").append( this._label );
			this._label.css( { top:( size.y + 3 ) + 'px',
				left : (size.x / 2) - (this._label.outerWidth() / 2) + 'px'} );
			this._label.remove();

			if ( !this.options.labelVisible  )
			{
				this._label.hide();
			}
			div.append( this._label) ;
		}
	},
	setLabelText : function(text)
	{
		this.options._name = text;
		if ( this._label ) this._label.remove();
		this._createLabel(this._div);
	},
	setLabelVisible : function(visible)
	{
		this.options.labelVisible = visible;
		if (this._label )
		{
			if (  this.options.labelVisible ) this._label.slideDown(200);
			else  this._label.slideUp(200);
		}
	}
	
});


GSI.KMLMarker = L.Marker.extend({
	options: {
		icon: new GSI.KMLIcon.Default(),
		clickable:true
	}
});



/************************************************************************
 GSI.MultiLayer
 ************************************************************************/
GSI.MultiLayer = L.LayerGroup.extend( {
	includes: L.Mixin.Events,
	initialize: function (entries, options) {
		this._entries = entries;
		L.LayerGroup.prototype.initialize.call(this, []);
	},
	
	load : function()
	{
		this.clearLayers();
		if ( !this._entries )
		{
			return;
		}
		
		for( var i=0; i<this._entries.length; i++ )
		{
			var info = this._entries[i];
			
			if ( window.location.protocol == "https:" )
				info.url = info.url.replace( "http://", "https://" );
			info.layerType = GSI.LayersJSON.url2LayerType( info.url );
			
			var layer = GSI.Utils.infoToLayer(info);
			if ( !layer ) continue;
			
			layer._info = info;
			if ( info.layerType=="tile" )
			{
				this.addLayer(layer,true);
			}
			else if ( info.layerType=="kml" )
			{
			// KML
				layer.on("loadstart", L.bind( this.onLayerLoadStart, this, layer, "KML"  ) );
				layer.on("loaded", L.bind( this.onLayerLoad, this, layer  ) );
				layer .load();
				this.addLayer(layer,true);
			}
			else if ( info.layerType=="geojson" )
			{
			// GeoJSON
				layer.on("loadstart", L.bind( this.onLayerLoadStart, this, layer, "GeoJSON"  ) );
				layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
				layer .load();
				this.addLayer(layer);
			}
			else if ( info.layerType=="geojson_tile" )
			{
			// タイルGeoJSON
				this.addLayer(layer,true);
			}
			else if ( info.layerType=="topojson_tile" )
			{
			// タイルTopoJSON
				this.addLayer(layer,true);
			}
			else if ( info.layerType=="topojson" )
			{
			// TopoJSON
				layer.on("loadstart", L.bind( this.onLayerLoadStart, this, layer, "TopoJSON"  ) );
				layer.on( "load", L.bind( function(e){ this.onLayerLoad(e.src) },this));
				layer .load();
				this.addLayer(layer);
			}
			else if ( info.layerType=="tms" )
			{
			// TMS
				this.addLayer(layer,true);
			}
		}
		
	},
	
	onLayerLoadStart : function()
	{
		
	},
	
	onLayerLoad : function()
	{
		
	},
	setOpacity : function( opacity )
	{
		this._opacity = opacity;
		
		var layers = this.getLayers();
		
		for( var i=0; i<layers.length; i++ )
		{
			if ( layers[i].setOpacity ) layers[i].setOpacity( opacity );
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


L.Map.include({
	setMultiPopup : function(val)
	{
		
		if ( this._popupList )
		{
			for( var i=0; i<this._popupList.length; i++ )
			{
				
				this.removeLayer(this._popupList[i]);
				this._popupList[i]._isOpen = false;
				
			}
			this._popupList = [];
		}
		
		this.options.multipopup = val;
		
	},
	openPopup: function (popup, latlng, options) { // (Popup) or (String || HTMLElement, LatLng[, Object])
		
		if ( !this.options.multipopup  ) 
		{
			this.closePopup();
		}
		if (!(popup instanceof L.Popup)) {
			var content = popup;

			popup = new L.Popup(options)
			    .setLatLng(latlng)
			    .setContent(content);
		}
		
		//			
		popup._isOpen = true;
		
		if ( this.options.multipopup  ) 
		{
			popup.options.closeOnClick = false;
			if ( !this._popupList )
				this._popupList = [];
			this._popupList.push( popup );
		}
		else
		{
			popup.options.closeOnClick = true;
			this._popup = popup;
		}
		return this.addLayer(popup);
	},

	closePopup: function (popup) {
		
		if (!popup || popup === this._popup) {
			popup = this._popup;
			this._popup = null;
		}
		if (popup) {
			this.removeLayer(popup);
			popup._isOpen = false;
		}

		
		
		return this;
	}
});


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
			var name = feature.properties[ "name" ];
			var scale = iconSize[0] / CONFIG.SAKUZU.SYMBOL.ICONSIZE[0];
					
			var iconOptions = {};
			if ( iconUrl ) iconOptions.iconUrl = iconUrl;
			if ( iconSize ) iconOptions.iconSize = iconSize;
			if ( iconAnchor ) iconOptions.iconAnchor = iconAnchor;
			if ( className ) iconOptions.className = className;
			if ( scale ) iconOptions._iconScale = scale;
			if ( name ) iconOptions._name= name;
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
				var featureValue = feature.properties[key] ? feature.properties[key] : "";

				if ( key != "" && key != 'name' && !CONFIG.GEOJSONSPECIALKEYS[key] )
				{
					table +=
						"<tr>" +
						"<td>" + key + "</td>" +
						"<td>" + featureValue + "</td>" +
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
		this.opacitySetter.setOpacity(this.layer, this.opacity );
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
 L.Class
 - GSI.Dialog
   - GSI.ThreeDAreaDialog (3D範囲指定管理)
 ************************************************************************/
GSI.ThreeDAreaDialog = GSI.Dialog.extend( {
	options : {
		title : GSI.TEXT.THREEDAREA.DIALOG_TITLE,
		width : "200px"
	},
	initialize : function(map,layer,options)
	{
		this._map = map;
		this._layer = layer;
		this._layer.on( 'change', L.bind( this._onChange, this ) );
		GSI.Dialog.prototype.initialize.call(this, options);
		this._onChange();
	},
	
	show : function ()
	{
		this._origMinZoom = this._map.options.minZoom;
		this._origMaxZoom = this._map.options.maxZoom;
		this._map.options.minZoom = this._map.getZoom();
		this._map.options.maxZoom = this._map.getZoom();
		if ( this.options.zoomControl ) this.options.zoomControl._updateDisabled();
		
		GSI.Dialog.prototype.show.call(this);
		this._onChange();
	},
	hide : function ()
	{
		this._map.options.minZoom = this._origMinZoom;
		this._map.options.maxZoom = this._origMaxZoom;
		if ( this.options.zoomControl ) this.options.zoomControl._updateDisabled();
		
		this._layer.remove();
		GSI.Dialog.prototype.hide.call(this);
	},
	createHeader : function()
	{
		this.title = $( '<div>' ).html( this.options.title );

		return $( '<div>' ).append( this.title );
	},
	
	_onChange : function( e )
	{
		if ( !this._latLtFrame ) return;
		//this._latFrame.html( ( this._layer ? this._layer._latlng.lat : "" )  );
		//this._lngFrame.html( ( this._layer ? this._layer._latlng.lng : "" )  );
		this._latLtFrame.html( ( this._layer && this._layer._latLngBounds ? 
			( Math.round( this._layer._latLngBounds.getNorthWest().lat * 1000000 ) / 1000000 ).toFixed(6) : "" )  );
		this._lngLtFrame.html( ( this._layer && this._layer._latLngBounds ? 
			( Math.round( this._layer._latLngBounds.getNorthWest().lng * 1000000 ) / 1000000 ).toFixed(6) : "" )  );
		this._latRbFrame.html( ( this._layer && this._layer._latLngBounds ? 
			( Math.round( this._layer._latLngBounds.getSouthEast().lat * 1000000 ) / 1000000 ).toFixed(6) : "" )  );
		this._lngRbFrame.html( ( this._layer && this._layer._latLngBounds ? 
			( Math.round( this._layer._latLngBounds.getSouthEast().lng * 1000000 ) / 1000000 ).toFixed(6) : "" )  );
		
		var w =parseInt(this._layer.options.width);
		var h =parseInt(this._layer.options.height);
		
		if (w % 2 != 0) w++;
		if (h % 2 != 0) h++;
		
		this._sizeFrame.html( ( this._layer ? w + "×" + h: "" ) );
	},
	
	createContent : function()
	{
		this._frame = $( '<div>' );
		
		var infoTable = $( '<table>' );
		var infoTableTBody = $( '<tbody>' );
		var tr = null;
		
		/*
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("中心緯度:"));
		this._latFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( '' );
		tr.append( this._latFrame );
		infoTableTBody.append( tr );
		
		
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("中心経度:"));
		this._lngFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( ''  );
		tr.append( this._lngFrame );
		infoTableTBody.append( tr );
		*/
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("左上緯度:"));
		this._latLtFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( '' );
		tr.append( this._latLtFrame );
		infoTableTBody.append( tr );
		
		
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("左上経度:"));
		this._lngLtFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( ''  );
		tr.append( this._lngLtFrame );
		infoTableTBody.append( tr );
		
			tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("右下緯度:"));
		this._latRbFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( '' );
		tr.append( this._latRbFrame );
		infoTableTBody.append( tr );
		
		
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("右下経度:"));
		this._lngRbFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( ''  );
		tr.append( this._lngRbFrame );
		infoTableTBody.append( tr );
		
		
		tr = $( "<tr>" ).append( $("<td>").css({"white-space":"nowrap"}).html("大きさ:"));
		this._sizeFrame = $( '<td>' ).css({"white-space":"nowrap"}).html( '' );
		tr.append( this._sizeFrame );
		infoTableTBody.append( tr );
		
		infoTable.append(infoTableTBody);
		
		this._buttonFrame = $( '<div>' ).css({"text-align":"center"});
		
		this._okButton = $( '<a>' )
			.addClass("normalbutton threedareadialog_button")
			.attr( {"href":"javascript:void(0);"} )
			.html(GSI.TEXT.THREEDAREA.DIALOG_OKBTN)
			.click( L.bind( this._onOkClick, this ) );
		/*
		this._cancelButton = $( '<a>' )
			.addClass("normalbutton threedareadialog_button")
			.attr( {"href":"javascript:void(0);"} )
			.html(GSI.TEXT.THREEDAREA.DIALOG_CANCELBTN)
			.click( L.bind( function(){ this.hide(); }, this ) );
		*/
		this._buttonFrame
			.append( this._okButton );
		//	.append( this._cancelButton );
		
		this._frame
			.append( infoTable )
			.append( this._buttonFrame );
		
		return this._frame;
	},
	_onOkClick : function()
	{
		var center = this._layer._latlng;
		var args = "";
		args += "?z="   + this._map.getZoom();
		args += "&lat=" + center.lat;
		args += "&lon=" + center.lng;

		var w =parseInt(this._layer.options.width);
		var h =parseInt(this._layer.options.height);
		
		if (w % 2 != 0) w++;
		if (h % 2 != 0) h++;
		
		args += "&w=" + w;
		args += "&h=" + h;

		args += "&"     + GSI.GLOBALS.pageStateManager.getLayersQueryString({visibleOnly:true})

		this.hide();
		
		window.open( "./index_3d.html" + args  );
	}
	
});



GSI.ThreeDAreaSelectLayer = L.Class.extend( {
	includes: L.Mixin.Events,
	
	options : {
		width : 256,
		height: 256
	},
	
	initialize: function (latlng, options) {
		L.setOptions(this, options);
		this._latlng = latlng;
	},
	
	setLatLng : function(latlng )
	{
		this._latlng = latlng;
	},
		
	onAdd : function(map) {
		this._map = map;
		
		if ( !this._dialog )
		{
			var windowSize = GSI.Utils.getScreenSize();
			this._dialog = new GSI.ThreeDAreaDialog(this._map, this,{
							width:220, left :windowSize.w - 240, top :45,
							effect : CONFIG.EFFECTS.DIALOG,
							zoomControl : this.options.zoomControl
						});
		}
		
		this._refreshLatLngBounds();
		
		this._dialog.show();
		
		
		map.on('viewreset', this.update, this);
	
		this.update();
		this.fire('add');
		
		this.fire('change', {
			latlng : this._latlng,
			width : this.options.width,
			width : this.options.height
		});
		
	},
	
	_refreshLatLngBounds : function()
	{
		var centerPos = this._map.latLngToContainerPoint(this._latlng);
		
		this._latLngBounds = L.latLngBounds(
			this._map.containerPointToLatLng(
				L.point( centerPos.x - ( this.options.width/ 2 ), centerPos.y+(this.options.height/ 2 )) ),
			this._map.containerPointToLatLng(
				L.point(centerPos.x + ( this.options.width/ 2 ), centerPos.y-(this.options.height/ 2 )) ) 
		);
		
	},
	
	
	addTo: function (map) {
		map.addLayer(this);
		var pos = this._map.latLngToLayerPoint(this._latlng).round();
		return this;
	},
	remove : function()
	{
		if (!this._map)return;
		this._map.removeLayer( this );
	},
	onRemove : function(map) {
		
		this._remove();
		this.fire('remove');
		
		L.DomEvent.off(this._leftTopMark[0], "touchstart", this._onDown, this);
		L.DomEvent.off(this._leftTopMark[0], "mousedown", this._onDown, this);
		map.off('viewreset', this.update, this);

		this._map = null;
		
		
	},
	_remove: function () {
		this._map._panes.markerPane.removeChild(this._div[0]);

		this._div = null;
	},
	update : function()
	{
		if ( !this._div )
		{
			this._div = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"border" : "3px solid #cd5e3c",
				"width" : this.options.width +"px",
				"height" : this.options.height +"px",
				"margin-left" : -parseInt( this.options.width / 2 ) +"px",
				"margin-top" : -parseInt( this.options.height / 2 ) +"px"
			} );
			
			this._leftTopMark = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"background": "#fff",
				"width" : "12px",
				"height" : "12px",
				"left" : 0,
				"top"  : 0,
				"margin-left" : "-6px",
				"margin-top" : "-6px",
				"border" : "1px solid #cd5e3c",
				"cursor" : "nw-resize"
			} );
			
			this._rightTopMark = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"background": "#fff",
				"width" : "12px",
				"height" : "12px",
				"right" : 0,
				"top"  : 0,
				"margin-right" : "-6px",
				"margin-top" : "-6px",
				"border" : "1px solid #cd5e3c",
				"cursor" : "ne-resize"
			} );
			this._leftBottomMark = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"background": "#fff",
				"width" : "12px",
				"height" : "12px",
				"left" : 0,
				"bottom"  : 0,
				"margin-left" : "-6px",
				"margin-bottom" : "-6px",
				"border" : "1px solid #cd5e3c",
				"cursor" : "ne-resize"
			} );
			this._rightBottomMark = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"background": "#fff",
				"width" : "12px",
				"height" : "12px",
				"right" : 0,
				"bottom"  : 0,
				"margin-right" : "-6px",
				"margin-bottom" : "-6px",
				"border" : "1px solid #cd5e3c",
				"cursor" : "nw-resize"
			} );
			
			this._moveMark = $( '<div>' ).css( {
				"position" :"absolute",
				"box-sizing": "border-box",
				"width" : "24px",
				"height" : "24px",
				"left" : "50%",
				"top"  : "50%",
				"margin-left" : "-12px",
				"margin-top" : "-12px",
				"cursor" : "move",
				"background-image" : "url(image/system/move.png)",
				"background-position" : "50% 50%",
				"background-repeat" : "no-repeat"
			} );
			
			
			this._div.append(this._leftTopMark);
			this._div.append(this._rightTopMark);
			this._div.append(this._leftBottomMark);
			this._div.append(this._rightBottomMark);
			this._div.append(this._moveMark);
			
			L.DomEvent.on(this._leftTopMark[0], "touchstart", this._onDownLT, this);
			L.DomEvent.on(this._leftTopMark[0], "mousedown", this._onDownLT, this);
			L.DomEvent.on(this._leftTopMark[0], "MSPointerDown", this._onDownLT, this);
			L.DomEvent.on(this._rightTopMark[0], "touchstart", this._onDownRT, this);
			L.DomEvent.on(this._rightTopMark[0], "mousedown", this._onDownRT, this);
			L.DomEvent.on(this._rightTopMark[0], "MSPointerDown", this._onDownRT, this);
			L.DomEvent.on(this._leftBottomMark[0], "touchstart", this._onDownLB, this);
			L.DomEvent.on(this._leftBottomMark[0], "mousedown", this._onDownLB, this);
			L.DomEvent.on(this._leftBottomMark[0], "MSPointerDown", this._onDownLB, this);
			L.DomEvent.on(this._rightBottomMark[0], "touchstart", this._onDownRB, this);
			L.DomEvent.on(this._rightBottomMark[0], "mousedown", this._onDownRB, this);
			L.DomEvent.on(this._rightBottomMark[0], "MSPointerDown", this._onDownRB, this);
			L.DomEvent.on(this._moveMark[0], "touchstart", this._onDownMove, this);
			L.DomEvent.on(this._moveMark[0], "mousedown", this._onDownMove, this);
			L.DomEvent.on(this._moveMark[0], "MSPointerDown", this._onDownMove, this);
			
			
			this._map._panes.markerPane.appendChild(this._div[0]);
		}
		this._div.css( {
			"width" : this.options.width +"px",
			"height" : this.options.height +"px",
			"margin-left" : -parseInt( this.options.width / 2 ) +"px",
			"margin-top" : -parseInt( this.options.height / 2 ) +"px"
		} );
		
		
		
		var pos = this._map.latLngToLayerPoint(this._latLngBounds.getCenter()).round();
		this._setPos(pos);
	
	},
	
	_onDownLT : function( e )
	{
		this._onDown(e);
		this._dragTarget = this._leftTopMark;
	},
	
	_onDownRT : function( e )
	{
		this._onDown(e);
		this._dragTarget = this._rightTopMark;
	},
	
	_onDownLB : function( e )
	{
		this._onDown(e);
		this._dragTarget = this._leftBottomMark;
	},
	_onDownRB : function( e )
	{
		this._onDown(e);
		this._dragTarget = this._rightBottomMark;
	},
	_onDownMove : function( e )
	{
		this._onDown(e);
		this._dragTarget = this._moveMark;
	},
	
	_onDown : function(e)
	{
		this._moved = false;

		if (e.shiftKey || ((e.which !== 1) && (e.button !== 1) && !e.touches)) { return; }

		L.DomEvent.stopPropagation(e);

		L.DomUtil.disableImageDrag();
		L.DomUtil.disableTextSelection();

		if (this._moving) { return; }

		var first = e.touches ? e.touches[0] : e;
		
		
		L.DomEvent.on(document, "touchmove", this._onMove, this);
		L.DomEvent.on(document, "mousemove", this._onMove, this);
		L.DomEvent.on(document, "touchend", this._onUp, this);
		L.DomEvent.on(document, "mouseup", this._onUp, this);
		
		
		this._startPoint = new L.Point(first.clientX, first.clientY);
		
	},
	
	
	
	_onMove : function( e )
	{
		if (e.touches && e.touches.length > 1) {
			this._moved = true;
			return;
		}

		var first = (e.touches && e.touches.length === 1 ? e.touches[0] : e),
		    newPoint = new L.Point(first.clientX, first.clientY);

		L.DomEvent.preventDefault(e);

		if (!this._moved) {
			this.fire('dragstart');

			this._moved = true;

			L.DomUtil.addClass(document.body, 'leaflet-dragging');
			this._lastTarget = e.target || e.srcElement;
			this._startPoint = new L.Point(first.clientX, first.clientY);
			L.DomUtil.addClass(this._lastTarget, 'leaflet-drag-target');
		}
		
		//var point = this._map.latLngToContainerPoint(this._latlng);
		var offset = {
			x : ( this._startPoint.x- first.clientX  ),
			y : ( this._startPoint.y- first.clientY  )
		};
		
		if ( this._dragTarget == this._moveMark )
		{
			var point = this._map.latLngToContainerPoint(this._latlng);
			point.x -= offset.x;
			point.y -= offset.y;
			
			this._latlng = this._map.containerPointToLatLng(point);
			this._refreshLatLngBounds();
		}
		else
		{
			if ( this._dragTarget == this._leftTopMark )
			{
				
				//var newW = parseInt(this._div.css("width") ) + offset.x;
				//var newH = parseInt(this._div.css("height") ) + offset.y;
				var point = this._map.latLngToContainerPoint(this._latLngBounds.getNorthWest());
				var containerOffset = $( this._map.getContainer() ).offset();
				
				var newPoint = {
					x:first.clientX - containerOffset.left,
					y:first.clientY - containerOffset.top
				};
				
				var newW = parseInt(this._div.css("width") ) + ( point.x - newPoint.x  );
				var newH = parseInt(this._div.css("height") ) + ( point.y - newPoint.y  );
				//console.log( newW, newH );
				
				if ( newW < 256 ) newW = 256;
				if ( newW > 2048 ) newW = 2048;
				if ( newH < 256 ) newH = 256;
				if ( newH > 2048 ) newH = 2048;
				
				var northWest = this._map.containerPointToLatLng(
						L.point( point.x - ( newW - this.options.width ), point.y-(newH - this.options.height )) );
				var southEast = this._latLngBounds.getSouthEast();
				
				this._latLngBounds = L.latLngBounds(
					L.latLng( southEast.lat, northWest.lng ),
					L.latLng( northWest.lat, southEast.lng )
				);
		
				
				this._latlng = this._latLngBounds.getCenter();
				this.options.width = newW;
				this.options.height = newH;
				
			}
			else if ( this._dragTarget == this._rightTopMark )
			{
			
				//var newW = parseInt(this._div.css("width") ) - offset.x;
				//var newH = parseInt(this._div.css("height") ) + offset.y;
				var point = this._map.latLngToContainerPoint(this._latLngBounds.getNorthEast());
				var containerOffset = $( this._map.getContainer() ).offset();
				
				var newPoint = {
					x:first.clientX - containerOffset.left,
					y:first.clientY - containerOffset.top
				};
				
				var newW = parseInt(this._div.css("width") ) - ( point.x - newPoint.x  );
				var newH = parseInt(this._div.css("height") ) + ( point.y - newPoint.y  );
				
				if ( newW < 256 ) newW = 256;
				if ( newW > 2048 ) newW = 2048;
				if ( newH < 256 ) newH = 256;
				if ( newH > 2048 ) newH = 2048;
				
				var northEast = this._map.containerPointToLatLng(
						L.point( point.x + ( newW - this.options.width ), point.y-(newH - this.options.height )) );
				
				this._latLngBounds = L.latLngBounds(
					this._latLngBounds.getSouthWest(),
					L.latLng( northEast.lat, northEast.lng )
				);
		
				
				this._latlng = this._latLngBounds.getCenter();
				this.options.width = newW;
				this.options.height = newH;
				
			}
			else if ( this._dragTarget == this._leftBottomMark )
			{
			
				//var newW = parseInt(this._div.css("width") ) + offset.x;
				//var newH = parseInt(this._div.css("height") ) - offset.y;
				var point = this._map.latLngToContainerPoint(this._latLngBounds.getSouthWest());
				var containerOffset = $( this._map.getContainer() ).offset();
				
				var newPoint = {
					x:first.clientX - containerOffset.left,
					y:first.clientY - containerOffset.top
				};
				
				var newW = parseInt(this._div.css("width") ) + ( point.x - newPoint.x  );
				var newH = parseInt(this._div.css("height") ) - ( point.y - newPoint.y  );
				
				if ( newW < 256 ) newW = 256;
				if ( newW > 2048 ) newW = 2048;
				if ( newH < 256 ) newH = 256;
				if ( newH > 2048 ) newH = 2048;
				
				
				if ( newW < 256 ) newW = 256;
				if ( newW > 2048 ) newW = 2048;
				if ( newH < 256 ) newH = 256;
				if ( newH > 2048 ) newH = 2048;
				
				var southWest = this._map.containerPointToLatLng(
						L.point( point.x - ( newW - this.options.width ), point.y+(newH - this.options.height )) );
				
				this._latLngBounds = L.latLngBounds(
					L.latLng( southWest.lat, southWest.lng ),
					this._latLngBounds.getNorthEast()
				);
		
				
				this._latlng = this._latLngBounds.getCenter();
				this.options.width = newW;
				this.options.height = newH;
			}
			else if ( this._dragTarget == this._rightBottomMark )
			{
				//var newW = parseInt(this._div.css("width") ) - offset.x;
				//var newH = parseInt(this._div.css("height") ) - offset.y;
				var point = this._map.latLngToContainerPoint(this._latLngBounds.getSouthEast());
				var containerOffset = $( this._map.getContainer() ).offset();
				
				var newPoint = {
					x:first.clientX - containerOffset.left,
					y:first.clientY - containerOffset.top
				};
				
				var newW = parseInt(this._div.css("width") ) - ( point.x - newPoint.x  );
				var newH = parseInt(this._div.css("height") ) - ( point.y - newPoint.y  );
				
				
				if ( newW < 256 ) newW = 256;
				if ( newW > 2048 ) newW = 2048;
				if ( newH < 256 ) newH = 256;
				if ( newH > 2048 ) newH = 2048;
				
				var southEast = this._map.containerPointToLatLng(
						L.point( point.x + ( newW - this.options.width ), point.y+(newH - this.options.height )) );
				var northWest = this._latLngBounds.getNorthWest();
				this._latLngBounds = L.latLngBounds(
					L.latLng( southEast.lat, northWest.lng ),
					L.latLng( northWest.lat, southEast.lng )
				);
		
				
				this._latlng = this._latLngBounds.getCenter();
				this.options.width = newW;
				this.options.height = newH;
			}
			
			//if (this.options.width % 2 != 0) this.options.width++;
			//if (this.options.height % 2 != 0) this.options.height++;
			if ( this.options.width < 256 ) this.options.width = 256;
			if ( this.options.width > 2048 ) this.options.width = 2048;
			if ( this.options.height < 256 ) this.options.height = 256;
			if ( this.options.height > 2048 ) this.options.height = 2048;
		}
		
		this.update();
		this.fire('change', {
			latlng : this._latlng,
			width : this.options.width,
			height : this.options.height
		});
		this._startPoint = new L.Point(first.clientX, first.clientY);
		this._moving = true;

	},
	
	_onUp: function () {
		L.DomUtil.removeClass(document.body, 'leaflet-dragging');

		if (this._lastTarget) {
			L.DomUtil.removeClass(this._lastTarget, 'leaflet-drag-target');
			this._lastTarget = null;
		}

		
		L.DomEvent.off(document, "touchmove", this._onMove, this);
		L.DomEvent.off(document, "mousemove", this._onMove, this);
		L.DomEvent.off(document, "touchend", this._onUp, this);
		L.DomEvent.off(document, "mouseup", this._onUp, this);
		

		L.DomUtil.enableImageDrag();
		L.DomUtil.enableTextSelection();
		
		
		this.fire('change', {
			latlng : this._latlng,
			width : this.options.width,
			width : this.options.height
		});
		
		if (this._moved && this._moving) {
			this.fire('dragend', {
			});
		}

		this._moving = false;
	},
	
	_setPos : function( pos )
	{
		L.DomUtil.setPosition(this._div[0], pos);
		
		this._div.css( {"z-index":0} );
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
		//console.log( )
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
	GSI.GLOBALS.evacManager = new GSI.EvacuationManager(GSI.GLOBALS.queryParams);

	if ((GSI.GLOBALS.queryParams.params["ls"] && GSI.GLOBALS.queryParams.params["ls"].indexOf(CONFIG.layerEvacuationHeader)>=0) || 
	        (GSI.GLOBALS.queryParams.params["lcd"] && GSI.GLOBALS.queryParams.params["lcd"].indexOf(CONFIG.layerEvacuationHeader)>=0) ) 
	{
		var cfdlg = new GSI.Modal.confirmDialog();
		cfdlg.onPositiveButtonClick = L.bind(confirmOKClick, this, cfdlg);
		cfdlg.onNegativeButtonClick = L.bind(confirmCancelClick, this, cfdlg);
		cfdlg.show();
	}
	else
	{
		this.initialize_proc_sub();
	}
};

function initialize_proc_sub()
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
	
	GSI.GLOBALS.evacDialog = new GSI.EvacDialog();

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

	L.control.scale({imperial:false}).addTo(GSI.GLOBALS.map);

	GSI.GLOBALS.mapLayerList = new GSI.MapLayerList(GSI.GLOBALS.map);

    // Layers.txt を読み込み
	GSI.GLOBALS.layersJSON = new GSI.LayersJSON( {
		 layers        : CONFIG.layerBase,
		 layersTab     : CONFIG.layersTab 
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
	
	
	// タイル座標
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.TILEGRID    ] = { obj : new GSI.TileGrid   (GSI.GLOBALS.map, { visible: viewSetting.tileGrid   , lineStyle:CONFIG.UTMGRIDSTYLE    , condition: CONFIG.UTMGRID.CONDITION   , labelClassName: CONFIG.UTMGRIDLABELCLASSNAME   } ), setter : 'setVisible', getter : 'getVisible' };
	
	// 地域メッシュ
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CHIIKIMESH    ] = { obj : new GSI.ChiikiMesh   (GSI.GLOBALS.map, { visible: viewSetting.chiikiMesh   , lineStyle:CONFIG.UTMGRIDSTYLE    , condition: CONFIG.UTMGRID.CONDITION   , labelClassName: CONFIG.UTMGRIDLABELCLASSNAME   } ), setter : 'setVisible', getter : 'getVisible' };
	
	// 1/25000
	GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.T25000GRID    ] = { obj : new GSI.T25000Grid   (GSI.GLOBALS.map, { visible: viewSetting.t25000Grid   , lineStyle:CONFIG.UTMGRIDSTYLE    , condition: CONFIG.UTMGRID.CONDITION   , labelClassName: CONFIG.UTMGRIDLABELCLASSNAME   } ), setter : 'setVisible', getter : 'getVisible' };
	
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
	
	GSI.GLOBALS.multiPopup = {};
	GSI.GLOBALS.multiPopup.setMultiPopupVisible =function(val){
		return GSI.GLOBALS.map.setMultiPopup( val );
	};
	GSI.GLOBALS.multiPopup.getMultiPopupVisible =function(){
		return GSI.GLOBALS.map.options.multipopup;
	};
	
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.MULTIPOPUP ] = { obj : GSI.GLOBALS.multiPopup    , setter : 'setMultiPopupVisible', getter  : 'getMultiPopupVisible' };
	
	
	GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.USEGSIDISTANCE ] = { obj : 
		{
			setUseGSIDistance : function( on ) { CONFIG.USEGSIDISTANCE = on; } ,
			getUseGSIDistance : function() { return CONFIG.USEGSIDISTANCE; } 
		}   , setter : 'setUseGSIDistance', getter  : 'getUseGSIDistance' };
	
	
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
			GSI.GLOBALS.layerTreeDialog.show();
        }
	  }
    );

	// 機能メニュー
	GSI.GLOBALS.funcMenu = new GSI.MapMenu(
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
		onMenuItemMouseOver : function( id )
		{
			if ( id == 'gsi3d_s' )
			{
				if ( GSI.GLOBALS._area3D ) GSI.GLOBALS.map.removeLayer( GSI.GLOBALS._area3D );
				var icon = L.divIcon({
					className: 'my-div-icon', 
					html:'<div style="position:absolute;margin-top:-512px;margin-left:-512px;border:3px solid #cd5e3c;width:1024px; height:1024px"></div>'});
				
				GSI.GLOBALS._area3D = L.marker(GSI.GLOBALS.map.getCenter(), {icon: icon}).addTo(GSI.GLOBALS.map);
				
			}
			else if ( id == 'gsi3d_l' )
			{
				if ( GSI.GLOBALS._area3D ) GSI.GLOBALS.map.removeLayer( GSI.GLOBALS._area3D );
				var icon = L.divIcon({
					className: 'my-div-icon', 
					html:'<div style="position:absolute;margin-top:-1024px;margin-left:-1024px;border:3px solid #cd5e3c;width:2048px; height:2048px"></div>'});
				
				GSI.GLOBALS._area3D = L.marker(GSI.GLOBALS.map.getCenter(), {icon: icon}).addTo(GSI.GLOBALS.map);
				
			}
			else if ( id == 'gsi3d_view' )
			{
				if ( GSI.GLOBALS._area3D ) GSI.GLOBALS.map.removeLayer( GSI.GLOBALS._area3D );
				
				var size = GSI.GLOBALS.map.getSize();
				
				if ( size.x > 2048 ) size.x = 2048;
				if ( size.y > 2048 ) size.y = 2048;
				
				if( size.x % 2 == 1 ) size.x-=1;
				if( size.y % 2 == 1 ) size.y-=1;
				
				var icon = L.divIcon({
					className: 'my-div-icon', 
					html:'<div style="position:absolute;' + 
						'margin-top:-' + parseInt(size.y / 2 ) + 'px;margin-left:-' + parseInt(size.x / 2 ) + 'px;border:3px solid #cd5e3c;width:' + 
						size.x + 'px; height:' + size.y + 'px;"></div>'});
				GSI.GLOBALS._area3D = L.marker(GSI.GLOBALS.map.getCenter(), {icon: icon}).addTo(GSI.GLOBALS.map);
				
			}
			
		},
		onMenuItemMouseOut : function( id )
		{
			if ( id == 'gsi3d_s' || id == 'gsi3d_l' || id == 'gsi3d_view')
			{
				if ( GSI.GLOBALS._area3D ) GSI.GLOBALS.map.removeLayer( GSI.GLOBALS._area3D );
				GSI.GLOBALS._area3D = null;
			}
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
			// 現在位置取得-移動
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
							tileGrid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.TILEGRID ].obj,
							t25000Grid : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.T25000GRID ].obj,
							chiikiMesh : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.CHIIKIMESH ].obj,
							jihokuLine : GSI.GLOBALS.onoffObjects[ CONFIG.PARAMETERNAMES.JIHOKULINE ].obj
						} );
				GSI.GLOBALS.pagePrinter.show();
				break;
			
			case 'saveimage':
			// 画像保存
				//GSI.GLOBALS.map._resetView( GSI.GLOBALS.map.getCenter(), GSI.GLOBALS.map.getZoom(), true );
				var list = [];
				var tileList = $.extend( [], GSI.GLOBALS.mapLayerList.getTileList() );
				var otherList = GSI.GLOBALS.mapLayerList.getList();
				var multiTileList = [];
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.TILEGRID ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.TILEGRID ].obj.getVisible() )
				{
					list.push( {
							type : "system",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.TILEGRID ].obj,
							opacity : 1,
							grayscale : false
						} );
				}
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ].obj.getVisible() )
				{
					list.push( {
							type : "system",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.JIHOKULINE ].obj,
							opacity : 1,
							grayscale : false
						} );
				}
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ].obj.getVisible() )
				{
					list.push( {
							type : "system",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.LATLNGGRID ].obj,
							opacity : 1,
							grayscale : false
						} );
				}
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID ].obj.getVisible() )
				{
					list.push( {
							type : "system",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.UTMGRID ].obj,
							opacity : 1,
							grayscale : false
						} );
				}
				
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CHIIKIMESH ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CHIIKIMESH ].obj.getVisible() )
				{
					list.push( {
							type : "geojson_tile",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CHIIKIMESH ].obj._layer,
							opacity : 1,
							grayscale : false
						} );
				}
				if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.T25000GRID ].obj 
					&& GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.T25000GRID ].obj.getVisible() )
				{
					list.push( {
							type : "geojson_tile",
							layer : GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.T25000GRID ].obj._layer,
							opacity : 1,
							grayscale : false
						} );
				}
				
				
				for( var i=0; i<GSI.GLOBALS.sakuzuList.getLength(); i++ )
				{
					list.push( {
							type : "geojson",
							layer : GSI.GLOBALS.sakuzuList.get(i)._layer,
							opacity : 1,
							grayscale : false
						} );
					
					
				}
				
				for( var i=0; i<otherList.length; i++ )
				{
					if ( !otherList[i]._visibleInfo || otherList[i]._visibleInfo._isHidden ) continue;
					
					if ( otherList[i].layerType == "multiLayer" )
					{
						var layers = otherList[i]._visibleInfo.layer.getLayers();
						for( var j=0; j<layers.length; j++ )
						{
							if ( layers[j]._info.layerType == "" || layers[j]._info.layerType == "tile" )
							{
								multiTileList.push( {
									type : layers[j]._info.layerType,
									layer : layers[j],
									opacity : otherList[i]._visibleInfo.opacity,
									grayscale : otherList[i]._visibleInfo.grayscale
								} );
								continue;
							}
							// タイル以外
							if ( layers[j]._info.layerType != "tile" )
							{
								list.push( {
									type : layers[j]._info.layerType,
									layer : layers[j],
									opacity : otherList[i]._visibleInfo.opacity,
									grayscale : otherList[i]._visibleInfo.grayscale
								} );
							}
							
						}
					}
					else
					{
						list.push( {
							type : otherList[i].layerType,
							layer : otherList[i]._visibleInfo.layer,
							opacity : otherList[i]._visibleInfo.opacity,
							grayscale : otherList[i]._visibleInfo.grayscale
						} );
					}
					
					//list.push( otherList[i] );
				}
				
				
				for( var i=multiTileList.length-1; i>=0; i-- )list.push(multiTileList[i]);
				
				for( var i=0; i<tileList.length; i++ )
				{
					
					if ( !tileList[i]._visibleInfo || tileList[i]._visibleInfo._isHidden ) continue;
					list.push( {
						type : tileList[i].layerType,
						layer : tileList[i]._visibleInfo.layer,
						opacity : tileList[i]._visibleInfo.opacity,
						grayscale : tileList[i]._visibleInfo.grayscale,
						blend : tileList[i]._visibleInfo.blend
					} );
				}
				
				
				if ( !GSI.GLOBALS.mapToImageWindow )
				{
					GSI.GLOBALS.mapToImageWindow = new GSI.MapToImageWindow( GSI.GLOBALS.map );
					GSI.GLOBALS.mapToImage = new GSI.MapToImage(GSI.GLOBALS.map, list);
					GSI.GLOBALS.mapToImage.on( "finish", function(e) {
						GSI.GLOBALS.mapToImageWindow.setCanvas(e.canvas[0]);
					} );
				}
				else
					GSI.GLOBALS.mapToImage.setList( list );
				
				
				GSI.GLOBALS.mapToImageWindow.show(L.bind(function(){
					GSI.GLOBALS.mapToImage.start();
				
				}, this));
				
				
		
	
				break;
				
			case 'gsi3d_custom':
				
				if ( ! GSI.GLOBALS.threeDAreaSelectLayer )
					GSI.GLOBALS.threeDAreaSelectLayer 
						= new GSI.ThreeDAreaSelectLayer(GSI.GLOBALS.map.getCenter(),{zoomControl:GSI.GLOBALS.zoomControl});
				GSI.GLOBALS.threeDAreaSelectLayer.setLatLng(GSI.GLOBALS.map.getCenter());
				GSI.GLOBALS.map.addLayer( GSI.GLOBALS.threeDAreaSelectLayer );
				
				
				break;
			}
		}
	});
	GSI.GLOBALS.funcMenu.on("hide", function(){
		if ( GSI.GLOBALS._area3D ) GSI.GLOBALS.map.removeLayer( GSI.GLOBALS._area3D );
			GSI.GLOBALS._area3D = null;
		
	} );
	
	GSI.GLOBALS.funcMenu.disableMenuItem( 'gps_end' );
	GSI.GLOBALS.funcMenu.disableMenuItem( 'gps_save' );
	
	// ズームコントロール
	GSI.GLOBALS.zoomControl = new L.Control.Zoom({position:"bottomleft"});
	GSI.GLOBALS.map.addControl(GSI.GLOBALS.zoomControl);

	GSI.GLOBALS.confirmDlg
	= new GSI.Modal.confirmDialog();
	
	var cs = GSI.GLOBALS.queryParams.getControlSetting();
	if(cs.header.visible == false || GSI.GLOBALS.isCreditShow)
	{
		GSI.GLOBALS.map.addControl(new GSI.Control.CopyrightPanel({position:"bottomright"}));
	}

	// 表示中レイヤーダイアログ
	var left = 8;
	//var top  = GSI.GLOBALS.header.getHeight() + 8;
	var top  = GSI.GLOBALS.header.getHeight() + 400;
	var dlgVisible = GSI.GLOBALS.queryParams.getViewListDialogVisible();
	if(dlgVisible){
		left = 8;
		top  = GSI.GLOBALS.header.getHeight() + 400;
	}
	
	
	top = GSI.Utils.getScreenSize().h-240;
	
	
	GSI.GLOBALS.viewListDialog
    = new GSI.ViewListDialog(
      GSI.GLOBALS.map
    , GSI.GLOBALS.layersJSON
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
	//top  = GSI.GLOBALS.header.getHeight() + 136;
	top  = GSI.GLOBALS.header.getHeight() + 8;
	
	dlgVisible = GSI.GLOBALS.queryParams.getLayerTreeDialogVisible();
	if(dlgVisible){
        left = 8;
		top  = GSI.GLOBALS.header.getHeight() + 8;
	}
	GSI.GLOBALS.layerTreeDialog
    = new GSI.LayerTreeDialog(      
      GSI.GLOBALS.mapLayerList, 
	  GSI.GLOBALS.cocoTileLayer, 
	  CONFIG.layersTab, 
	  {
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
function confirmOKClick( dlg )
{
	dlg.hide();
	GSI.GLOBALS.evacManager.accept();
	initialize_proc_sub();

	if ( GSI.GLOBALS.evacManager.isVisibleDialog() == true)
	{	
		GSI.GLOBALS.evacDialog.show();
	}
	CONFIG.layerEvacuationIsConfirmOK = true;
};

function confirmCancelClick( dlg )
{
	dlg.hide();
	GSI.GLOBALS.evacManager.cancel();
	initialize_proc_sub();
	CONFIG.layerEvacuationIsConfirmOK = false;
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
    GSI.GLOBALS.HelpDialog = new GSI.HelpDialog( GSI.GLOBALS.map,GSI.GLOBALS.mapMouse,{ left :"center", top :45,effect : CONFIG.EFFECTS.DIALOG } );
    GSI.GLOBALS.HelpDialog.show();
};







/*******************************************************

    ベクトルタイルCanvas描画

*******************************************************/


GSI.Canvas = {};

GSI.Canvas.Polyline =  L.Polyline.extend( {
	
	_isCanvas : true,
	
	_containsPoint: function (p, closed) {
		var i, j, k, len, len2, dist, part,
		    w = this.options.weight / 2;
		if (!this._parts ) return;
		
		if (L.Browser.touch) {
			w += 10; // polyline click tolerance on touch devices
		}

		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];
			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) {
					continue;
				}

				dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

				if (dist <= w) {
					return true;
				}
			}
		}
		return false;
	}
	
} );



GSI.Canvas.Polygon =  L.Polygon.extend( {
	
	_isCanvas : true,
	_containsPointPolyline: function (p, closed) {
		var i, j, k, len, len2, dist, part,
		    w = this.options.weight / 2;
		if (!this._parts ) return false;
		
		if (L.Browser.touch) {
			w += 10; // polyline click tolerance on touch devices
		}

		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];
			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				if (!closed && (j === 0)) {
					continue;
				}

				dist = L.LineUtil.pointToSegmentDistance(p, part[k], part[j]);

				if (dist <= w) {
					return true;
				}
			}
		}
		return false;
	},
	
	_containsPoint: function (p) {
		var inside = false,
		    part, p1, p2,
		    i, j, k,
		    len, len2;

		// TODO optimization: check if within bounds first
		
		if (!this._parts ) return false;
		
		
		if (this._containsPointPolyline( p, true)) {
			// click on polygon border
			return true;
		}

		// ray casting algorithm for detecting if point is in polygon

		for (i = 0, len = this._parts.length; i < len; i++) {
			part = this._parts[i];

			for (j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
				p1 = part[j];
				p2 = part[k];

				if (((p1.y > p.y) !== (p2.y > p.y)) &&
						(p.x < (p2.x - p1.x) * (p.y - p1.y) / (p2.y - p1.y) + p1.x)) {
					inside = !inside;
				}
			}
		}

		return inside;
	}
	
} );

	
GSI.Canvas.PathProcs =	{
	redraw: function () {
		if (this._map) {
			this.projectLatlngs();
			this._requestUpdate();
		}
		return this;
	},
	
	setStyle: function (style) {
		L.setOptions(this, style);
		
		if (this._map) {
		//	this._updateStyle();
		//	this._requestUpdate();
		}
		return this;
		
	},



	onRemove: function (map) {
		
		map._pathRoot.removeChild(this._container);

		// Need to fire remove event before we set _map to null as the event hooks might need the object
		this.fire('remove');
		

		if (L.Browser.vml) {
			this._container = null;
			this._stroke = null;
			this._fill = null;
		}

		map.off({
			'viewreset': this.projectLatlngs,
			'moveend': this._updatePath
		}, this);
		
		
		
		if ( L.Browser.canvas )
		{
			if (this.options.clickable) {
				this._map.off('click', this._onClick, this);
				this._map.off('mousemove', this._onMouseMove, this);
			}

			this._requestUpdate();
		}
		this._map = null;
		
		
		
	},
	
	
	_requestUpdate: function () {
		if (this._map && !L.Path._updateRequest) {
			L.Path._updateRequest = L.Util.requestAnimFrame(this._fireMapMoveEnd, this._map);
		}
	},

	_fireMapMoveEnd: function () {
		L.Path._updateRequest = null;
		this.fire('moveend');
	},

	_initElements: function () {
		
		
		
		if ( L.Browser.canvas ) {
			this._map._initPathRoot();
			this._ctx = this._map._canvasCtx;
		}
		
		
		return L.Polyline.prototype._initElements.call(this);
	},

	_updateStyle: function (scale) {
		if ( L.Browser.canvas  ) {
			
			var options = this.options;
			if (options.stroke) {
				this._ctx.lineWidth = options.weight * ( scale ? scale : 1 );
				this._ctx.strokeStyle = options.color;
				if ( options.lineCap &&
					( options.lineCap == "butt" ||
					options.lineCap == "round" ||
					options.lineCap == "square" )
				)
				{
					this._ctx.lineCap = options.lineCap ;
				}
				else
					this._ctx.lineCap = "butt";
			}
			if (options.fill) {
				this._ctx.fillStyle = options.fillColor || options.color;
			}
			
		}
		else
			return L.Polyline.prototype._updateStyle.call(this);
			
	},

	_drawPath: function (offset) {
		var options = this.options;
		var dashArray = null;
		var isPolygon = (this instanceof L.Polygon);
		if ( options.dashArray )
		{
			if ( options.dashArray instanceof Array )
				dashArray = $.extend( [], options.dashArray);
			else
			{
				var dashParts = options.dashArray.split( ',' );
				dashArray = [];
				for( var i=0; i<dashParts.length; i++ )
				{
					dashArray.push(parseInt( dashParts[i] ));
				}
			}
			if ( dashArray.length < 2 ) dashArray = null;
		}
		var i, j, len, len2, point, drawMethod;
		
		
		if (!offset ) offset = {x:0,y:0};
		for (i = 0, len = this._parts.length; i < len; i++) {
			this._ctx.beginPath();
			for (j = 0, len2 = this._parts[i].length; j < len2; j++) {
				point = this._parts[i][j];
				//drawMethod = (j === 0 ? 'move' : 'line') + 'To';
				var toPoint = {
					x : point.x -offset.x,
					y : point.y- offset.y
				};
				if ( this._canvasOffset )
				{
					//toPoint.x -= this._canvasOffset.x;
					//toPoint.y -= this._canvasOffset.y;
					
				}
				
				
				if ( j == 0 )
				{
					this._ctx.moveTo(toPoint.x, toPoint.y);
				}
				else
				{
					if (dashArray && !isPolygon)
						GSI.Utils.dotLineTo( this._ctx, fromPoint.x, fromPoint.y,
							toPoint.x, toPoint.y, dashArray);
					else
					{
						if ( this._ctx.setLineDash !== undefined )
							this._ctx.setLineDash([]);
						else if ( this._ctx.mozDash !== undefined )
							this._ctx.mozDash = [];
						this._ctx.lineTo(toPoint.x, toPoint.y);
					}
				}
				
				fromPoint = toPoint;
				/*
				if ( this._canvasOffset )
				{
					x -= this._canvasOffset.x;
					y -= this._canvasOffset.y;
					
				}
				this._ctx[drawMethod](x, y);
				*/
			}
			// TODO refactor ugly hack
			if (isPolygon) {
				this._ctx.closePath();
			}
		}
	},
	
	
	
	
	_checkIfEmpty: function () {
		return !this._parts.length;
	},
	
	//_latLngToPoint : function(tilePoint,zoom,dz,canvas_dx,canvas_dy,tlng,tlat){
	_latLngTileToPoint : function(tilePoint,canvasDx,canvasDy,zoom,tileSize, resolution, originShift,latLng){
		/*
		var tileSize_default = 256;
		var tileSize=tileSize_default;
		var tz = zoom;
		if(dz!=0){tileSize = tileSize_default*Math.pow(2, dz);tz = tz -dz;}
		var initialResolution = 2 * Math.PI / tileSize;
		var resolution = initialResolution / (Math.pow(2, tz));
		var originShift = 2 * Math.PI / 2.0;
		*/
		
		
		var X = latLng.lng * (Math.PI / 180) ;
		var Y=Math.log(Math.tan(Math.PI/4 + latLng.lat * (Math.PI / 180) / 2) );
		var tx=(X + originShift)/(tileSize * resolution);
		var ty=(Y + originShift)/(tileSize * resolution);
		ty = Math.pow(2, zoom) - ty;
		tx=(tx-tilePoint.x)*tileSize+canvasDx;
		ty=(ty-tilePoint.y)*tileSize+canvasDy;
		return L.point( tx, ty );
	},
	
	projectLatlngs: function (tilePoint,canvasDx,canvasDy,zoom,tileSize, resolution, originShift) {
		if ( !originShift ) return;
		
		this._originalPoints = [];
		//var zoom = this._map.getZoom();
		//var nativeZoom = this._maxNativeZoom || zoom;
		//var dz = zoom - nativeZoom;
		for (var i = 0, len = this._latlngs.length; i < len; i++) {
			this._originalPoints[i] = this._latLngTileToPoint( 
				tilePoint,canvasDx,canvasDy,zoom,tileSize, resolution, originShift, this._latlngs[i]);
			//	this._tilePoint, zoom, dz, this._latlngs[i] );
			//var a = this._map.latLngToLayerPoint(this._latlngs[i]);
		}
	},
	_updatePath: function (offset) {
		if (!this._map) { return; }
		if (this.options.visible==false) return;
		
		//this._clipPoints();
		this._parts = [this._originalPoints];
		this._simplifyPoints();
		
		
		if (this._checkIfEmpty()) { return; }
		
		var ctx = this._ctx,
		    options = this.options;
		this._drawPath(offset);
		
		
		ctx.save();
		this._updateStyle();

		if (options.fill) {
			ctx.globalAlpha = options.fillOpacity;
			ctx.fill();
		}

		if (options.stroke) {
			ctx.globalAlpha = options.opacity;
			ctx.stroke();
		}
		
		ctx.restore();
		
	},
	
	
	_onClick: function (e) {
		if (this._containsPoint(e.layerPoint)) {
			this.fire('click', e);
		}
	},

	_onMouseMove: function (e) {
		if (!this._map || !this._map._pathRoot || this._map._animatingZoom) { return; }

		// TODO don't do on each move
		if (this._containsPoint(e.layerPoint)) {
			//this._ctx.canvas.style.cursor = 'pointer';
			this._map._pathRoot.style.cursor = 'pointer';
			this._mouseInside = true;
			this.fire('mouseover', e);

		} else if (this._mouseInside) {
			//this._ctx.canvas.style.cursor = '';
			this._map._pathRoot.style.cursor = '';
			this._mouseInside = false;
			this.fire('mouseout', e);
		}
	}
};

GSI.Canvas.Polyline.include(GSI.Canvas.PathProcs);
GSI.Canvas.Polygon.include(GSI.Canvas.PathProcs);


GSI.Canvas.MultiPolyline = L.FeatureGroup.extend( {
	initialize: function (latlngs, options) {
		this._isCanvas = true;
		this._layers = {};
		this._options = options;
		this.setLatLngs(latlngs);
	},

	setLatLngs: function (latlngs) {
		var i = 0,
		    len = latlngs.length;

		this.eachLayer(function (layer) {
			if (i < len) {
				layer.setLatLngs(latlngs[i++]);
			} else {
				this.removeLayer(layer);
			}
		}, this);

		while (i < len) {
			var layer = new GSI.Canvas.Polyline(latlngs[i++], this._options);
			this.addLayer(layer);
		}

		return this;
	},

	getLatLngs: function () {
		var latlngs = [];

		this.eachLayer(function (layer) {
			latlngs.push(layer.getLatLngs());
		});

		return latlngs;
	}

} );

GSI.Canvas.MultiPolygon = L.FeatureGroup.extend( {
	initialize: function (latlngs, options) {
		this._isCanvas = true;
		this._layers = {};
		this._options = options;
		this.setLatLngs(latlngs);
	},

	setLatLngs: function (latlngs) {
		var i = 0,
		    len = latlngs.length;

		this.eachLayer(function (layer) {
			if (i < len) {
				layer.setLatLngs(latlngs[i++]);
			} else {
				this.removeLayer(layer);
			}
		}, this);

		while (i < len) {
			var layer = new GSI.Canvas.Polygon(latlngs[i++], this._options);
			this.addLayer(layer);
		}

		return this;
	},

	getLatLngs: function () {
		var latlngs = [];

		this.eachLayer(function (layer) {
			latlngs.push(layer.getLatLngs());
		});

		return latlngs;
	}

} );
GSI.Canvas.multiPolyline = function (latlngs, options) {
	return new GSI.Canvas.MultiPolyline(latlngs, options);
};

GSI.Canvas.multiPolygon = function (latlngs, options) {
	return new GSI.Canvas.MultiPolygon(latlngs, options);
};

L.DivIcon.prototype._setIconStyles = function (img, name) {
	var options = this.options,
	    size = L.point(options[name + 'Size']),
	    anchor;
	
	var div = $(img).children("div");
	
	if ( div.length > 0 && div.find("img").length <= 0)
	{
		// 斜体時に右端がかけるので無理矢理大きく
		var cssText = ( div.prop("style") ? div.prop("style").cssText : "" );
		var angle90 = div.css("writing-mode") 
			|| div.css("-moz-writing-mode") || div.css("-o-writing-mode") 
			|| div.css("-ms-writing-mode")|| div.css("-webkit-writing-mode");
		if ( angle90 ) angle90 = $.trim( angle90 );
		else
		{
			var matches = cssText.match(/vertical-rl/);
			if ( matches )angle90 = "vertical-rl";
		}
		
		var fontStyle = div.css("font-style") || "normal";
		
		if ( angle90  && angle90 != "" && ( fontStyle!="" && fontStyle != "normal" ) )
		{
			if ( size ) size = L.point(12,12);//{x:12, y:12};
			if ( div.css("font-size") )
			{
				size.x = Math.ceil( parseInt(div.css("font-size")) * 1.5 );
			}else
				size.x = 300;
		}
	}
	
	
	if (name === 'shadow') {
		anchor = L.point(options.shadowAnchor || options.iconAnchor);
	} else {
		anchor = L.point(options.iconAnchor);
	}

	if (!anchor && size) {
		anchor = size.divideBy(2, true);
	}
	
	
	
	img.className = 'leaflet-marker-' + name + ' ' + options.className;

	if (anchor) {
		img.style.marginLeft = (-anchor.x) + 'px';
		img.style.marginTop  = (-anchor.y) + 'px';
	}

	if (size) {
		img.style.width  = size.x + 'px';
		img.style.height = size.y + 'px';
	}
};


GSI.Canvas.GeoJSON =  L.GeoJSON.extend( {
	
	addData: function (geojson) {
		var features = L.Util.isArray(geojson) ? geojson : geojson.features,
		    i, len, feature;

		if (features) {
			for (i = 0, len = features.length; i < len; i++) {
				// Only add this if geometry or geometries are set and not null
				feature = features[i];
				if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
					this.addData(features[i]);
				}
			}
			return this;
		}

		var options = this.options;

		if (options.filter && !options.filter(geojson)) { return; }
		
		var layer = GSI.Canvas.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, options);
		
		layer.feature = L.GeoJSON.asFeature(geojson);

		layer.defaultOptions = layer.options;
		this.resetStyle(layer);

		if (options.onEachFeature) {
			options.onEachFeature(geojson, layer);
		}

		return this.addLayer(layer);
	}
	
	
	
});


GSI.Canvas.GeoJSON.coordsToLatLng=function (coords) { // (Array[, Boolean]) -> LatLng
		return new L.LatLng(coords[1], coords[0], coords[2]);
};

GSI.Canvas.GeoJSON.coordsToLatLngs = function (coords, levelsDeep, coordsToLatLng) { // (Array[, Number, Function]) -> Array
	var latlng, i, len,
	    latlngs = [];

	for (i = 0, len = coords.length; i < len; i++) {
		latlng = levelsDeep ?
		        GSI.Canvas.GeoJSON.coordsToLatLngs(coords[i], levelsDeep - 1, coordsToLatLng) :
		        (coordsToLatLng || GSI.Canvas.GeoJSON.coordsToLatLng)(coords[i]);

		latlngs.push(latlng);
	}

	return latlngs;
};

GSI.Canvas.GeoJSON.geometryToLayer = function (geojson, pointToLayer, coordsToLatLng, vectorOptions) {
	var geometry = geojson.type === 'Feature' ? geojson.geometry : geojson,
	    coords = geometry.coordinates,
	    layers = [],
	    latlng, latlngs, i, len;
	
	coordsToLatLng = coordsToLatLng || this.coordsToLatLng;

	switch (geometry.type) {
	case 'Point':
		latlng = coordsToLatLng(coords);
		return pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng);

	case 'MultiPoint':
		for (i = 0, len = coords.length; i < len; i++) {
			latlng = coordsToLatLng(coords[i]);
			layers.push(pointToLayer ? pointToLayer(geojson, latlng) : new L.Marker(latlng));
		}
		return new L.FeatureGroup(layers);

	case 'LineString':
		latlngs = this.coordsToLatLngs(coords, 0, coordsToLatLng);
		return new GSI.Canvas.Polyline(latlngs, vectorOptions);

	case 'Polygon':
		
		if (coords.length === 2 && !coords[1].length) {
			throw new Error('Invalid GeoJSON object.');
		}
		latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
		return new GSI.Canvas.Polygon(latlngs, vectorOptions);

	case 'MultiLineString':
		
		latlngs = this.coordsToLatLngs(coords, 1, coordsToLatLng);
		
		return new GSI.Canvas.MultiPolyline(latlngs, vectorOptions);

	case 'MultiPolygon':
		latlngs = this.coordsToLatLngs(coords, 2, coordsToLatLng);
		return new GSI.Canvas.MultiPolygon(latlngs, vectorOptions);

	case 'GeometryCollection':
		for (i = 0, len = geometry.geometries.length; i < len; i++) {

			layers.push(this.geometryToLayer({
				geometry: geometry.geometries[i],
				type: 'Feature',
				properties: geojson.properties
			}, pointToLayer, coordsToLatLng, vectorOptions));
		}
		return new L.FeatureGroup(layers);

	default:
		throw new Error('Invalid GeoJSON object.');
	}
};

GSI.Canvas.geoJson = function (geojson, options) {
	return new GSI.Canvas.GeoJSON(geojson, options);
};




GSI.VectorTileLayer = L.TileLayer.Canvas.extend( {
	_requests: [],
	_keyLayers: {},
	
	_opacity : 1,
	_useCanvas : false,
	
	options : {
		tileSize : 256,
		canvasSize : 512,
		maxDz : 4,
		canvasDx : 20,
		canvasDy : 20
	},
	initialize: function (url, options, geojsonOptions, isNormalNativeZoom) {
		this._url = url;
		this.geojsonOptions = $.extend( {}, geojsonOptions );
		this._isNormalNativeZoom = isNormalNativeZoom;
		
		options.clipTiles = false;
		this._styleLoading = true;
		L.setOptions(this, options);
		this._useCanvas = ( this.options.styletype == 'canvas' );
		L.TileLayer.prototype.initialize.call(this, url, options);
		//L.TileLayer.Ajax.prototype.initialize.call(this, url, options);
        this.geojsonLayer = new L.GeoJSON(null, this.geojsonOptions);
		if ( options.skipLoadStyle ){
			
			//this._defaultLoadStyle();
			this._styleLoading = false;
		}
			
		else
			this._loadStyle( url, options.styleurl );
	},
	
	
	setMarkerZIndex : function( zIndex )
	{
		this.options.zIndexOffset = zIndex;
		if ( this.geojsonLayer && this.geojsonLayer.setMarkerZIndex )
			this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
	},
	
	setStyleText : function( styleText )
	{
		try
		{
			var data = eval( "(" + styleText + ")" );
			if ( data.geojsonOptions ) this.geojsonOptions =  data.geojsonOptions;
			for (  var key in this._tiles ) //var i=0; i<this._tiles.length; i++ ) 
			{
				var tile = this._tiles[key];
				if ( !tile.geoJSON ) continue;
				for( var j=0; j<tile.geoJSON.length; j++ )
				{
					tile.geoJSON[j].options = this.geojsonOptions;
				}
			}
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
				if ( this.options._bounds )
					data.options.bounds = this.options._bounds;
				this._useCanvas = ( data.options.styletype == 'canvas' );
				
				L.setOptions(this, data.options);
			}
		}
		catch(e)
		{
			
		}
		if ( this.geojsonLayer )
		{
			//this.geojsonLayer.options = $.extend( {}, this.geojsonOptions );
			this.geojsonLayer.setStyle( this.geojsonOptions );
		}
		
		
		this._styleLoading = false;
		this._updateTileStyles();
		/*
		if ( !this._useCanvas )
		{
			try
			{
				if(this._tileContainer)
					this._reset();
			}catch(e){}
			try
			{
				this._update();
			}catch(e){}
		}
		*/
	
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
			if ( data.geojsonOptions ) this.geojsonOptions =  data.geojsonOptions;
			if ( this._tiles )
			{
    			for ( var i=0; i<this._tiles.length; i++ ) 
    			{
    				var tile = this._tiles[i];
    				if ( !tile.geoJSON ) continue;
    				for( var j=0; j<tile.geoJSON.length; j++ )
    				{
    					tile.geoJSON[i].options = this.geojsonOptions;
    				}
    			}
			}
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
				if ( this.options._bounds )
					data.options.bounds = this.options._bounds;
				this._useCanvas = ( data.options.styletype == 'canvas' );
				
				L.setOptions(this, data.options);
			}
		}
		catch( e ){
        }
		
		if ( this.geojsonLayer )
		{
			this.geojsonLayer.options = $.extend( {}, this.geojsonOptions );
			//this.geojsonLayer.setStyle( this.geojsonOptions.style );
		}
		
		this._styleLoading = false;
		//this._updateTileStyles();
		
		try
		{
			if(this._tileContainer)
				this._reset();
		}catch(e){}
		try
		{
			this._update();
		}catch(e){}
	},
	
	_updateTileStyles : function()
	{
		
		
		for (key in this._tiles)
		{
			var tile = this._tiles[key];
			var geoJSON = tile.geoJSON;
			if (geoJSON)
			{
				
				for( var i=0; i<geoJSON.length; i++ )
				{
					//if (geoJSON[i].options.clickable) geoJSON[i]._onMouseMove(e);
					var style = this.geojsonOptions.style;
					if (typeof style === 'function') {
						style = style(geoJSON[i].feature);
					}
					if (geoJSON[i].setStyle) {
						geoJSON[i].setStyle(style);
					}
				}
				this.drawTile(tile, tile._tilePoint, null, true);
			}
		}
		
	},
	
	
	_defaultLoadStyle : function()
	{
		var styleUrl = './js/style.js';

		this._styleAjax = $.ajax({
			type: "GET",
			dataType: "text",
			url: styleUrl,
			success:  L.Util.bind( this._onStyleLoad, this ),
			error :  L.Util.bind( function(){
				this._styleLoading = false;
			}, this ),
			async : true
		});
	},
	/*
	_getTileSize: function () {
		var map = this._map,
		    zoom = map.getZoom() + this.options.zoomOffset,
		    zoomN = this.options.maxNativeZoom,
		    tileSize = this.options.tileSize;
		if ( this._useCanvas  )
		{
			if (zoomN && ( zoom > zoomN) ) {
				tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
			}
		}
		else
		{
			if (zoomN && zoom > zoomN) {
				tileSize = Math.round(map.getZoomScale(zoom) / map.getZoomScale(zoomN) * tileSize);
			}
		}
		return tileSize;
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
	*/
	
	_loadStyle : function(url,styleUrl)
	{
		
		if ( styleUrl && styleUrl != '' )
			styleUrl = styleUrl;
		else
			styleUrl = url.replace(/\/\{z\}.*/,"") + '/style.js';
		
		var data = null;
		
		this._styleLoading = true;
		this._styleAjax = $.ajax({
			type: "GET",
			dataType: "text",
			url: styleUrl,
			data :data,
			success:  L.Util.bind( this._onStyleLoad, this ),
			error :  L.Util.bind( this._defaultLoadStyle, this ),
			async : true

		});
	},
	
	
    _createTile: function () {
		
		var tile = L.DomUtil.create('canvas', 'leaflet-tile');
		tile.onselectstart = tile.onmousemove = L.Util.falseFn;
		//tile.width = tile.height = this._getTileSize();
		if ( !this._useCanvas )
		{
			tile.width = tile.height = this._getTileSize();
			return;
		}
		var zoom = this._map.getZoom();
		var dz = zoom - this.options.maxNativeZoom;
		var tileSize = ( this._printMode  ? this.options.canvasSize : this.options.tileSize );
		var tz = zoom;
		if(dz>=this.options.maxDz){tileSize = tileSize*Math.pow(2, this.options.maxDz);tz = tz -dz;}
		else if(dz>0){tileSize = tileSize*Math.pow(2, dz);tz = tz -dz;}
		
		
		
		/*
		if ( this._printMode )
		{
			var tileSize2 = this.options.tileSize;
			scale = this.options.tileSize / this.options.canvasSize;
			
			if(dz>0){tileSize2 =tileSize2 *Math.pow(2, dz);}
			tile.style.width= tileSize2 + this.options.canvasDx + "px";
			tile.style.height= tileSize2 + this.options.canvasDx + "px";
			tile.width=tileSize + this.options.canvasDx *2;
			tile.height=tileSize + this.options.canvasDy *2;
		}
		else 
		*/
		/*
		if (dz >= this.options.maxDz)
		
		{
			var tileSize2 =this.options.tileSize *Math.pow(2, dz);
			tile._scale = tileSize2 / tileSize;
			tile.style.width= tileSize2 + this.options.canvasDx * Math.pow(2,(dz-this.options.maxDz+1))  + "px";
			tile.style.height= tileSize2 + this.options.canvasDx * Math.pow(2,(dz-this.options.maxDz+1)) + "px";
			tile.width=tileSize + this.options.canvasDx *2;
			tile.height=tileSize + this.options.canvasDy *2;
		}
		else
		*/
		{
			if (dz >= this.options.maxDz)
			{
				var tileSize2 = ( dz > 0 ? this.options.tileSize *Math.pow(2, dz) : this.options.tileSize );
				var tileSize3 = ( this._printMode  ? this.options.canvasSize : this.options.tileSize );
				if(dz>0)tileSize3 = tileSize3*Math.pow(2, dz);
				
				tile._scale = tileSize2 / tileSize3;
				tile.style.width= tileSize + this.options.canvasDx * (2 * tile._scale)  + "px";
				tile.style.height= tileSize + this.options.canvasDx * (2 * tile._scale) + "px";
				tile._realTileSize = tileSize3;
				tile._tileSize = tileSize;
				
			}
			else
			{
				var tileSize2 = ( dz > 0 ? this.options.tileSize *Math.pow(2, dz) : this.options.tileSize );
				tile._scale = tileSize2 / tileSize;
				tile.style.width= tileSize2 + this.options.canvasDx * (2 * tile._scale)  + "px";
				tile.style.height= tileSize2 + this.options.canvasDx * (2 * tile._scale) + "px";
			}
			tile.width=tileSize + this.options.canvasDx *2;
			tile.height=tileSize + this.options.canvasDy *2;
		}
		
		
		
		return tile;
	},
	
	_clearTilePopup : function(tile)
	{
		if ( !this._popup ) return;
		
		var geoJSON = tile.geoJSON;
		if (!geoJSON) return;
		for( var i=0; i<geoJSON.length; i++ )
		{
			if ( geoJSON instanceof L.FeatureGroup )
			{
				var layers = geoJSON.getLayers();
				for( var j=0; j<layers.length; j++ )
				{
					if ( layers[j]._popup == this._popup )
						this._map.closePopup(this._popup);
				}
			}
			if ( geoJSON[i]._popup == this._popup ) 
				this._map.closePopup(this._popup);
		}
	},
	
	_clearPopup : function()
	{
		this._map.closePopup( this._popup );
		this._popup = null;
		
	},
	
	_reset: function (e) {
		if ( ( e && e.hard ) || this._map.getZoom() < this.options.minZoom || this._map.getZoom() > this.options.maxZoom) 
		{
			this._clearPopup();
		}
		this.geojsonLayer.clearLayers();
		this._keyLayers = {};
        this._removeOldClipPaths();
		
		for (var i in this._requests) {
			if ( this._requests[i] && this._requests[i].abort )
            	this._requests[i].abort();
        }
		this._requests = [];
		if ( ( e && e.hard ) || this._map.getZoom() < this.options.minZoom || this._map.getZoom() > this.options.maxZoom) 
		{
			if ( this._bgBuffer )this._clearBgBuffer();
		}
		L.TileLayer.Canvas.prototype._reset.apply(this, arguments);
    },
	_removeOldClipPaths: function  () {
        for (var clipPathId in this._clipPathRectangles) {
            var clipPathZXY = clipPathId.split('_').slice(1);
            var zoom = parseInt(clipPathZXY[0], 10);
            if (zoom !== this._map.getZoom()) {
                var rectangle = this._clipPathRectangles[clipPathId];
                this._map.removeLayer(rectangle);
                var clipPath = document.getElementById(clipPathId);
                if (clipPath !== null) {
                    clipPath.parentNode.removeChild(clipPath);
                }
                delete this._clipPathRectangles[clipPathId];
            }
        }
    },
	// Recurse LayerGroups and call func() on L.Path layer instances
    _recurseLayerUntilPath: function (func, layer) {
        if (layer instanceof L.Path) {
            func(layer);
        }
        else if (layer instanceof L.LayerGroup) {
            // Recurse each child layer
            layer.getLayers().forEach(this._recurseLayerUntilPath.bind(this, func), this);
        }
    },

    _clipLayerToTileBoundary: function (layer, tilePoint) {
        // Only perform SVG clipping if the browser is using SVG
        if (!L.Path.SVG) { return; }
        if (!this._map) { return; }

        if (!this._map._pathRoot) {
            this._map._pathRoot = L.Path.prototype._createElement('svg');
            this._map._panes.overlayPane.appendChild(this._map._pathRoot);
        }
        var svg = this._map._pathRoot;

        // create the defs container if it doesn't exist
        var defs = null;
        if (svg.getElementsByTagName('defs').length === 0) {
            defs = document.createElementNS(L.Path.SVG_NS, 'defs');
            svg.insertBefore(defs, svg.firstChild);
        }
        else {
            defs = svg.getElementsByTagName('defs')[0];
        }

        // Create the clipPath for the tile if it doesn't exist
        var clipPathId = 'tileClipPath_' + tilePoint.z + '_' + tilePoint.x + '_' + tilePoint.y;
        var clipPath = document.getElementById(clipPathId);
        if (clipPath === null) {
            clipPath = document.createElementNS(L.Path.SVG_NS, 'clipPath');
            clipPath.id = clipPathId;

            // Create a hidden L.Rectangle to represent the tile's area
            var tileSize = this.options.tileSize,
            nwPoint = tilePoint.multiplyBy(tileSize),
            sePoint = nwPoint.add([tileSize, tileSize]),
            nw = this._map.unproject(nwPoint),
            se = this._map.unproject(sePoint);
            this._clipPathRectangles[clipPathId] = new L.Rectangle(new L.LatLngBounds([nw, se]), {
                opacity: 0,
                fillOpacity: 0,
                clickable: false,
                noClip: true
            });
            this._map.addLayer(this._clipPathRectangles[clipPathId]);

            // Add a clip path element to the SVG defs element
            // With a path element that has the hidden rectangle's SVG path string  
            var path = document.createElementNS(L.Path.SVG_NS, 'path');
            var pathString = this._clipPathRectangles[clipPathId].getPathString();
            path.setAttribute('d', pathString);
            clipPath.appendChild(path);
            defs.appendChild(clipPath);
        }

        // Add the clip-path attribute to reference the id of the tile clipPath
        this._recurseLayerUntilPath(function (pathLayer) {
            pathLayer._container.setAttribute('clip-path', 'url(#' + clipPathId + ')');
        }, layer);
    },
	_initEvents: function () {
		

	},
	onAdd: function (map) {
		
		
        this._map = map;
        this._map._panes.overlayPane.style.cursor = '';
        //L.TileLayer.Ajax.prototype.onAdd.call(this, map);
        
		
		L.TileLayer.prototype.onAdd.call(this, map);
		
		if ( !GSI.VectorTileLayer._layers ) 
			GSI.VectorTileLayer._layers = [];
		
		GSI.VectorTileLayer._layers.push( this );
		if ( GSI.VectorTileLayer._layers.length == 1 )
		{
			this._map.on('mousemove', GSI.VectorTileLayer._onGeoJSONMouseMove);
			this._map.on('click', GSI.VectorTileLayer._onGeoJSONClick);
		}
		
		this._map.on( 'moveend', this._onMapMoved, this );
		
		map.addLayer(this.geojsonLayer);
		
	},
	
	onRemove: function (map) {
		
		this._map.off( 'moveend', this._onMapMoved, this );
		
		this._clearPopup();
		this._map._panes.overlayPane.style.cursor = '';
		map.removeLayer(this.geojsonLayer);

		for( var i=0; i<GSI.VectorTileLayer._layers.length; i++ )
		{
			if ( GSI.VectorTileLayer._layers[i] == this )
			{
				GSI.VectorTileLayer._layers.splice(i,1);
				break;
			}
		}
		if ( GSI.VectorTileLayer._layers.length == 0 )
		{
			
			this._map.off('mousemove', GSI.VectorTileLayer._onGeoJSONMouseMove);
			this._map.off('click', GSI.VectorTileLayer._onGeoJSONClick);
		}
		L.TileLayer.prototype.onRemove.call(this, map);
	},
	
	_latLngToChildLayer : function( latLng )
	{
		if ( !latLng ) return null;
		var zoom = this._map.getZoom();
		var dz = zoom - this.options.maxNativeZoom;
		var drawTileSize = ( this._printMode ? this.options.canvasSize : this.options.tileSize );
		var dispTileSize = this.options.tileSize;
		
		var tz = zoom;
		
		
		if(dz>0){dispTileSize = dispTileSize*Math.pow(2, dz);tz = tz -dz;}
		//if(dz>=this.options.maxDz) 
		//	drawTileSize = drawTileSize*Math.pow(2, this.options.maxDz);
		if (dz>0)
			drawTileSize = ( this._printMode ? this.options.canvasSize : this.options.tileSize )*Math.pow(2, dz);
		var scale=drawTileSize / dispTileSize;
		
		
		
		var initialResolution = 2 * Math.PI / dispTileSize;
		var resolution = initialResolution / (Math.pow(2, tz));
		var originShift = 2 * Math.PI / 2.0;
		
		
		var tilePoint = this._map.project(latLng).divideBy(dispTileSize).floor();
		
		
		
		var key = tilePoint.x + ":" + tilePoint.y;
		var tile = this._tiles[key];
		if ( !tile ) return;
		var tilePoint = tile._tilePoint;
		var x = latLng.lng * (Math.PI / 180) ;
		var y=Math.log(Math.tan(Math.PI/4 + latLng.lat * (Math.PI / 180) / 2) );
		var tx=(x + originShift)/(dispTileSize * resolution);
		var ty=(y + originShift)/(dispTileSize * resolution);
		ty = Math.pow(2, tz) - ty;
		tx=(tx-tilePoint.x)*dispTileSize; //+( this.options.canvasDx );
		ty=(ty-tilePoint.y)*dispTileSize; //+( this.options.canvasDy );
		tx *= scale;
		ty *= scale;
		tx += (this.options.canvasDx );
		ty += (this.options.canvasDx );
		
		var tile = this._tiles[key];
		var p= L.point( tx, ty );
		var hit = false;
		var result = null;
		var geoJSON = tile.geoJSON;
		if (!geoJSON) return null;
		
		for( var i=0; i<geoJSON.length; i++ )
		{
			if ( geoJSON instanceof L.FeatureGroup )
			{
				var layers = geoJSON.getLayers();
				for( var j=0;j<layers.length; j++ )
				{
					if (layers[j].options && layers[j].options.clickable && layers[j]._onMouseMove )
					{ 
						if ( layers[j]._containsPoint(p) )
						{
							result = layers[j];
							hit = true;
							return result;
						}
					}
					if ( hit ) break;
				}
			}
			else
			{
				if (geoJSON[i].options && geoJSON[i].options.clickable )
				{
					if ( geoJSON[i]._containsPoint(p) )
					{
						result = geoJSON[i];
						hit = true;
						return result;
					}
				}
			}
		}
		
		return result;
	},
	
	
	_update: function () {
		if (this._map && this._map._panTransition && this._map._panTransition._inProgress) { return; }
		if (this._tilesToLoad < 0) { this._tilesToLoad = 0; }
		
		L.TileLayer.Canvas.prototype._update.apply(this, arguments);
	},
	
	_addTile: function (tilePoint, container) {
		var tilePos = this._getTilePos(tilePoint);
		
		var mapZoom = this._map.getZoom();
		
		// get unused tile - or create a new tile
		var tile = ( !this._useCanvas ? { style:{},className :""} : this._getTile() );
		tile.datum = null;
		tile.processed = false;
		//tile.geoJSON = null;
		/*
		Chrome 20 layouts much faster with top/left (verify with timeline, frames)
		Android 4 browser has display issues with top/left and requires transform instead
		(other browsers don't currently care) - see debug/hacks/jitter.html for an example
		*/
		
		if ( this._useCanvas )
		{	
			//scale = ( this._printMode ?  this.options.tileSize / this.options.canvasSize : 1 );
			tilePos.x -= parseInt( this.options.canvasDx * tile._scale );
			tilePos.y -= parseInt( this.options.canvasDy * tile._scale );
			tile._dX = parseInt( this.options.canvasDx * tile._scale );
			tile._dY = parseInt( this.options.canvasDy * tile._scale );
			tile._current = {
				x : 0,
				y : 0
			};
			tile._defaultTilePos = tilePos;
			var maxTilePoint = $.extend({}, tilePoint );
			maxTilePoint.x += 1;
			maxTilePoint.y += 1;
			var maxTilePos = this._getTilePos( maxTilePoint );
			
		}
		
		L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);
		
		
		
		this._tiles[tilePoint.x + ':' + tilePoint.y] = tile;

		this._loadTile(tile, tilePoint);
		
		if ( this._useCanvas )
		{
			if (tile.parentNode !== this._tileContainer) {
				container.appendChild(tile);
			}
		}
	},
	
	_getTileUrls : function( tilePoint,zoom,dz )
	{
		var x =  "";
		var y =  "";
		if ( !tilePoint._children ) tilePoint._children = [];
		if(dz<0 && !this._isNormalNativeZoom)
		{
			var num =Math.pow(2, Math.abs(dz) );
			for ( var i=0; i<num; i++ ){
				x =  i+Math.floor(tilePoint.x / Math.pow(2, dz));
				for ( var ii=0; ii<num;  ii++ ){
					y =  ii+Math.floor(tilePoint.y / Math.pow(2, dz));
					//result.push("/"+x+"/"+y+".geojson");
					tilePoint._children.push( {
						url:L.Util.template(this._url, L.extend({
								s: this._getSubdomain(tilePoint),
								z: zoom,
								x: x,
								y: y
							}, this.options)),
						key : x + ":" + y + ":" +zoom,
						x : x,
						y : y,
						z : zoom
					} );
				}
			}
		}
		else
		{
			tilePoint._children.push( {
				url :this.getTileUrl(tilePoint ),
				key : tilePoint.x + ":" + tilePoint.y + ":" +tilePoint.z,
				x : tilePoint.x,
				y : tilePoint.y,
				z : tilePoint.z
			} );
		}
		return ;
	},
	setPrintMode : function( printMode )
	{
		this._printMode = printMode;
		this._reset( {hard:true} );
	},
	
	_loadTile: function (tile, tilePoint) {
		
		tile._layer = this;
		tile._tilePoint = tilePoint;
		//this._redrawTile(tile);
	
		if (!this.options.async) {
			this.tileDrawn(tile);
		}
		
		this._adjustTilePoint(tilePoint);
		/*
		var layer = this;
		var req = new XMLHttpRequest();
		this._requests.push(req);
		req.onreadystatechange = this._xhrHandler(req, layer, tile, tilePoint);
		req.open('GET', this.getTileUrl(tilePoint), true);
		
		//req.open('GET','http://cyberjapandata.gsi.go.jp/xyz/experimental_rdcl/16/58242/25798.geojson', true);
		req.send();
		*/
		//this._adjustTilePoint(tilePoint);
		var layer = this;
		/*
		var req = new XMLHttpRequest();
		this._requests.push(req);
		req.onreadystatechange = this._xhrHandler(req, layer, tile, tilePoint);
		req.open('GET', this.getTileUrl(tilePoint), true);
		req.send();
		*/
		var zoom = this._map.getZoom();
		var dz = zoom  - this.options.maxNativeZoom;
		if ( this._useCanvas)
		{
			
			this._getTileUrls( tilePoint, this.options.maxNativeZoom, dz );
		}
		else
		{
			this._getTileUrls( tilePoint, zoom, 0 );
		}
		
		if ( !tile.datum ) tile.datum = {};
		this.tileDrawn(tile);
		for( var i=0; i<tilePoint._children.length; i++ )
		{
			var req = $.ajax( {
				type: "GET",
				dataType : "text",
				url: tilePoint._children[i].url,
				async:true,
				success:  L.Util.bind( function(data){
						this.child.loaded = true;
						this.tile.datum[this.child.key] = JSON.parse(data);
						this.layer._tileLoaded(this.tile, this.tilePoint, this.child.key);
					}, 
					{ layer:layer, tile:tile, tilePoint:tilePoint, child :tilePoint._children[i] }
				),
				error : L.Util.bind( function(data){
						this.child.loaded = true;
		                this.layer._tileLoaded(this.tile, this.tilePoint, this.child.key);
					}, 
					{ layer:layer, tile:tile, tilePoint:tilePoint, child :tilePoint._children[i] }
				)
			});
			this._requests.push(req);
			
		}
			
	},
	
	
	
	_initContainer: function ()
	{
		var tilePane = this._map._panes.overlayPane;
		
		if (!this._container) {
			this._container = L.DomUtil.create('div', 'leaflet-layer');

			this._updateZIndex();

			if (this._animated) {
				var className = 'leaflet-tile-container';
				this._bgBuffer = L.DomUtil.create('div', className, this._container);
				this._tileContainer = L.DomUtil.create('div', className, this._container);

			} else {
				this._tileContainer = this._container;
			}
			
			tilePane.insertBefore(this._container,tilePane.firstChild);
			//tilePane.appendChild(this._container);

			if (this.options.opacity < 1) {
				this._updateOpacity();
			}
		}
	},
	
	_tileLoaded: function (tile, tilePoint, childKey) {
		
	
		if ( tile && tile.datum[childKey] && this.options.isTopoJSON)
		{
			tile.datum[childKey] = omnivore.topojson.parse(tile.datum[childKey]);
		}
		
		var loaded = true;
		if ( tilePoint )
		{
			for( var j=0; j<tilePoint._children.length; j++ )
			{
				if ( !tilePoint._children[j].loaded )
					loaded = false;
			}
		}
		//if ( loaded )
		L.TileLayer.Canvas.prototype._tileLoaded.apply(this, arguments);
			
		if ( !tile  ) return null;
		
		
		
		
		if (tile.datum[childKey] )
		{
			try
			{
				var addedLayers = [];
				
				var addedLayer = this.addTileData(addedLayers, tile, tile.datum[childKey], tilePoint);
				if ( !tile.geoJSON ) tile.geoJSON = [];
				for( var i= 0; i<addedLayers.length; i++ )
				{
					tile.geoJSON.push(addedLayers[i]);
				}
				
				if( !this._styleLoading )
				{
					this._updateTilePosition( tile );
					this.drawTile(tile, tilePoint, addedLayer, null, false, tile._current);
				}
			}catch(e){
			}
		
		}
		this.tileDrawn(tile);
		
		
		
		
		//if (tile.datum === null) { return null; }
		//this.addTileData(tile.datum, tilePoint);
		
		
		if ( this._opacity != 1 )this.setOpacity( this._opacity );
		
		if ( this.geojsonLayer )
		{
			if ( this.options.zIndexOffset && this.geojsonLayer.setMarkerZIndex )
			{
				this.geojsonLayer.setMarkerZIndex( this.options.zIndexOffset )
			}
		}
	},
	
	addTileData: function (result, tile, geojson, tilePoint) {
        var features = L.Util.isArray(geojson) ? geojson : geojson.features,
            i, len, feature;
		var mapZoom = this._map.getZoom();
		
        if (features) {
            for (i = 0, len = features.length; i < len; i++) {
                // Only add this if geometry or geometries are set and not null
                feature = features[i];

                // Exchange Null data to empty string
				if ( feature.properties ){
					for(name in feature.properties)
					{
						if (name == "name" || name == "iframe" || name == "description" || name =="写真"){
							continue;
						}
						else{
							if (feature.properties[name] == null){
							    feature.properties[name] = "";
						    }
						}
					}
				}
                if (feature.geometries || feature.geometry || feature.features || feature.coordinates) {
                    this.addTileData(result, tile, features[i], tilePoint);
                    
                }
            }
            return result;
        }
		
        var options = this.geojsonOptions;
		
        if (options.filter && !options.filter(geojson)) { return null; }
		
        var parentLayer = this.geojsonLayer;
        var incomingLayer = null;
        if (this.options.unique && typeof(this.options.unique) === 'function') {
            var key = this.options.unique(geojson);

            // When creating the layer for a unique key,
            // Force the geojson to be a geometry collection
            if (!(key in this._keyLayers && geojson.geometry.type !== 'GeometryCollection')) {
                geojson.geometry = {
                    type: 'GeometryCollection',
                    geometries: [geojson.geometry]
                };
            }

            // Transform the geojson into a new Layer
            try {
				
				if ( !this._useCanvas )
                	incomingLayer = L.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng);
                else
            		incomingLayer = GSI.Canvas.GeoJSON.geometryToLayer (geojson, options.pointToLayer, options.coordsToLatLng);
            }
            // Ignore GeoJSON objects that could not be parsed
            catch (e) {
				
                return null;
            }
            incomingLayer.feature = L.GeoJSON.asFeature(geojson);
            // Add the incoming Layer to existing key's GeometryCollection
            if (key in this._keyLayers) {
                parentLayer = this._keyLayers[key];
                parentLayer.feature.geometry.geometries.push(geojson.geometry);
            }
            // Convert the incoming GeoJSON feature into a new GeometryCollection layer
            else {
                this._keyLayers[key] = incomingLayer;
            }
        }
        // Add the incoming geojson feature to the L.GeoJSON Layer
        else {
            // Transform the geojson into a new layer
            try {
				if ( !this._useCanvas )
				{
					
                	incomingLayer = L.GeoJSON.geometryToLayer(geojson, options.pointToLayer, options.coordsToLatLng, this.geojsonOptions);
                }
                else
                {
                	incomingLayer =GSI.Canvas.GeoJSON.geometryToLayer (geojson, options.pointToLayer, options.coordsToLatLng, this.geojsonOptions);
            	}
            }
            // Ignore GeoJSON objects that could not be parsed
            catch (e) {
                return null;
            }
            
            if ( !incomingLayer ) return null;
            incomingLayer.feature = L.GeoJSON.asFeature(geojson);
        }
        incomingLayer.defaultOptions = incomingLayer.options;

        //this.geojsonLayer.resetStyle(incomingLayer);
        
        if ( !this._styleLoading )
        {
	        var style = this.geojsonOptions.style;
			if (typeof style === 'function') {
				style = style(incomingLayer.feature);
			}
			if (incomingLayer.setStyle) {
				
				incomingLayer.setStyle(style);
			}
			
	        
        }
        
        if ( !incomingLayer._isCanvas ) this.geojsonLayer.resetStyle(incomingLayer);
        
        if (options.onEachFeature) {
            options.onEachFeature(geojson, incomingLayer);
        }
        //parentLayer.addLayer(incomingLayer);
		
		
		//tile.geoJSON.push(incomingLayer);
		
		if ( !incomingLayer._isCanvas ) 
        {
	        parentLayer.addLayer(incomingLayer);

	        // If options.clipTiles is set and the browser is using SVG
	        // then clip the layer using SVG clipping
	        if (this.options.clipTiles) {
	            this._clipLayerToTileBoundary(incomingLayer, tilePoint);
	        }
		}
		else
		{
			
			incomingLayer._tilePoint = tilePoint;
			result.push( incomingLayer );
			
			//if ( !tile.geoJSON ) tile.geoJSON = [];
			//tile.geoJSON.push(incomingLayer);
			
		}
        return incomingLayer;
    },
    _removeOtherTiles: function (bounds) {
		var kArr, x, y, key;

		for (key in this._tiles) {
			kArr = key.split(':');
			x = parseInt(kArr[0], 10);
			y = parseInt(kArr[1], 10);

			// remove tile if it's out of bounds
			if (x < bounds.min.x || x > bounds.max.x || y < bounds.min.y || y > bounds.max.y) {
				this._removeTile(key);
			}
		}
	},

	_removeTile: function (key) {
		var tile = this._tiles[key];
		this._clearTilePopup(tile);
		this.fire('tileunload', {tile: tile, url: tile.src});

		if (this.options.reuseTiles) {
			L.DomUtil.removeClass(tile, 'leaflet-tile-loaded');
			this._unusedTiles.push(tile);

		} else if (tile.parentNode === this._tileContainer) {
			this._tileContainer.removeChild(tile);
		}

		// for https://github.com/CloudMade/Leaflet/issues/137
		if (!L.Browser.android) {
			tile.onload = null;
			tile.src = L.Util.emptyImageUrl;
		}

		delete this._tiles[key];
	},
	
	_updateTilePosition : function(tile, zoom, dz, pixelBounds, origin, mapSize)
	{
		if ( !this._useCanvas ) return;
		
		if ( !zoom )
		{
			zoom = this._map.getZoom();
			dz = zoom - this.options.maxNativeZoom;
			pixelBounds = this._map.getPixelBounds();
			origin = this._map.getPixelOrigin();
			mapSize = this._map.getSize();
		}
				//console.log( this._map.getPixelBounds() );
		if ( dz > this.options.maxDz)
		{
			var tilePoint = tile._tilePoint;
			
			var tileLeftTop = {
				x : tilePoint.x * tile._realTileSize - pixelBounds.min.x,
				y : tilePoint.y * tile._realTileSize - pixelBounds.min.y
			};
			var tileRightBottom = {
				x : (tilePoint.x+1) * tile._realTileSize - pixelBounds.min.x,
				y : (tilePoint.y+1) * tile._realTileSize - pixelBounds.min.y
			};
			
			var newCurrent = $.extend( {}, tile._current );
			
			if (
				tileLeftTop.x + tile._current.x > 0 
				|| tile._current.y + tile._current.y > 0 
				|| tileLeftTop.x + tile._current.x + tile._tileSize < mapSize.x
				|| tileLeftTop.y + tile._current.y + tile._tileSize < mapSize.y )
			{
				
				newCurrent.x = parseInt(-tileLeftTop.x + ( ( mapSize.x / 2 ) - ( tile._tileSize/2) ) );
				newCurrent.y = parseInt(-tileLeftTop.y + ( ( mapSize.y / 2 ) - ( tile._tileSize/2) ) );
			}
			
			if ( newCurrent.x < 0 )
				newCurrent.x = 0;
			if ( newCurrent.y < 0 )
				newCurrent.y = 0;
			if ( newCurrent.x > tile._realTileSize - tile._tileSize )
				newCurrent.x = tile._realTileSize - tile._tileSize;
			if ( newCurrent.y > tile._realTileSize - tile._tileSize )
				newCurrent.y = tile._realTileSize - tile._tileSize;
			
			
			
			if ( newCurrent.x != tile._current.x || newCurrent.y != tile._current.y || !tile._updatePos)
			{
				
				tile._current.x = newCurrent.x;
				tile._current.y = newCurrent.y;
				
				var tilePos = this._getTilePos( tilePoint );
				
				tilePos.x += tile._current.x - tile._dX;
				tilePos.y += tile._current.y - tile._dY;
				
				//var pos = $.extend( {}, L.DomUtil.getPosition(tile ) );
				
				L.DomUtil.setPosition(tile, tilePos, L.Browser.chrome);
				
				//var pos2 = $.extend( {}, L.DomUtil.getPosition(tile ) );
				//console.log( tile._current  );
				
				//var ctx = tile.getContext('2d');
				//ctx.clearRect( 0, 0, tile.width, tile.height );
				//ctx.beginPath();
				//this.drawTile(tile, tile._tilePoint, tile.geoJSON, zoom, true, tile._current );
				return true;
			}
				
		}
		return false;
		
	},
	
	_onMapMoved : function(e)
	{
		if ( !this._useCanvas ) return;
		var zoom = this._map.getZoom();
		var dz = zoom - this.options.maxNativeZoom;
		var pixelBounds = this._map.getPixelBounds();
		var origin = this._map.getPixelOrigin();
		var mapSize = this._map.getSize();
				//console.log( this._map.getPixelBounds() );
		if ( dz > this.options.maxDz)
		{
			for ( var key in this._tiles )
			{
				var tile = this._tiles[key];
				if ( this._updateTilePosition( tile, zoom, dz, pixelBounds, origin, mapSize ) )
				{
					
					var ctx = tile.getContext('2d');
					ctx.clearRect( 0, 0, tile.width, tile.height );
					ctx.beginPath();
					this.drawTile(tile, tile._tilePoint, tile.geoJSON, zoom, true, tile._current );
				}
				
				
				
			}
		}
		return true;
	},
	
    drawTile: function (tile, tilePoint, drawLayers, zoom, redraw, drawOffset) {
		
		if ( !this._useCanvas || !drawLayers || !tile.getContext ) return;// !tile.geoJSON || !tile.getContext ) return;
		
		if ( !zoom ) zoom = this._map.getZoom();
		var dz = zoom - this.options.maxNativeZoom;
		var tileSize = ( this._printMode  ? this.options.canvasSize : this.options.tileSize );
		var tz = zoom;
		
		//if(dz>=this.options.maxDz){tileSize = tileSize*Math.pow(2, this.options.maxDz);tz = tz -dz;}
		//else 
		if(dz>0){tileSize = tileSize*Math.pow(2, dz);tz = tz -dz;}
		
		var initialResolution = 2 * Math.PI / tileSize;
		var resolution = initialResolution / (Math.pow(2, tz));
		var originShift = 2 * Math.PI / 2.0;
		
		var ctx = tile.getContext('2d');
		//var scale = 1;//( this._printMode  ? this.options.canvasSize / this.options.tileSize   : 1 );
		
		//var pos = this._getTilePos( tilePoint );
		for( var i=0; i<drawLayers.length; i++ )
		{
			var drawList = [];
			if ( drawLayers[i] instanceof L.FeatureGroup)
			{
				var layers = drawLayers[i].getLayers();
				for( var j=0; j<layers.length; j++ )
					drawList.push( layers[j] );
			}
			else
			{
				drawList.push( drawLayers[i] );
			}
			for( var j=0; j<drawList.length; j++ )
			{
				
				drawList[j]._ctx = ctx;
				drawList[j]._ctx.lineCap = 'round';
				drawList[j]._ctx.lineJoin = 'round';
				
				drawList[j]._map = this._map;
				//this._map._initPathRoot();
				//drawList[j]._initPath();
				
				drawList[j].projectLatlngs(
					tilePoint,this.options.canvasDx,this.options.canvasDy,tz,tileSize, resolution, originShift);
				//drawList[j]._updateStyle();
				
				if ( !this._styleLoading )
		        {
			        var style = this.geojsonOptions.style;
					if (typeof style === 'function') {
						style = style(drawLayers[i].feature);
					}
					if (drawList[j].setStyle) {
						
						drawList[j].setStyle(style);
					}
					
			        
		        }
				drawList[j]._updatePath(drawOffset);
			}
		}
		
	},
	
	setOpacity : function( opacity )
	{
		this._opacity = opacity;
		if ( this.geojsonLayer )
		{
			var opacitySetter = new GSI.LayerOpacitySetter();
			opacitySetter.setOpacity( this.geojsonLayer, opacity  );
		}
		
		$( this._container ).css({ "opacity": opacity } );
	}
	
} );





GSI.VectorTileLayer._onGeoJSONMouseMove = function( e )
{
	if ( !GSI.VectorTileLayer._layers ) return;
	var hitLayer = null;
	for( var i=0; i<GSI.VectorTileLayer._layers.length; i++ )
	{
		var layer = GSI.VectorTileLayer._layers[i];
		if ( !layer._useCanvas ) continue;
		
		hitLayer = layer._latLngToChildLayer( e.latlng );
		
		if ( hitLayer ) break;
		
	}
	
	if ( hitLayer )
	{
		layer._map._panes.overlayPane.style.cursor = 'pointer';
	}
	else
	{
		layer._map._panes.overlayPane.style.cursor = '';
	}
};
	
GSI.VectorTileLayer._onGeoJSONClick = function( e )
{
	if ( !GSI.VectorTileLayer._layers ) return;
	var hitLayer = null;
	for( var i=0; i<GSI.VectorTileLayer._layers.length; i++ )
	{
		var layer = GSI.VectorTileLayer._layers[i];
		if ( !layer._useCanvas ) continue;
		
		var hitLayer = layer._latLngToChildLayer(  e.latlng );
		
		if ( hitLayer ) 
		{
			break;
		}
	}
	
	if ( hitLayer )
	{
		layer._popup = hitLayer._popup;
		layer._popup.setLatLng(e.latlng);
		layer._map.openPopup( layer._popup );
	}
};










/*******************************************************

 GSI.MapToImage
    画像保存

*******************************************************/


GSI.MapToImage = {};

GSI.MapToImage = L.Class.extend( {
	includes: L.Mixin.Events,
	options : {
		drawControls : true
	},
	
	initialize : function ( map, list, options )
	{
		L.setOptions(this, options);
		this._map = map;
		this._list = list;
		
	},
	
	setList : function( list )
	{
		this._list = list;
	},
	
	start : function()
	{
		for ( var i=0; i<this._list.length; i++ )
		{
			
			var item = this._list[i];
			var layer = item.layer;
			if ( !layer ) {
				item.loaded = true;
				continue;
			}
			
			
			if ( item.type == "geojson" )
			{
				item.drawLayer = new GSI.MapToImage.VectorTileLayer( this._map, layer, {opacity: item.opacity} );
			}
			if ( item.type == "kml" )
			{
				item.drawLayer = new GSI.MapToImage.VectorTileLayer( this._map, layer, {opacity: item.opacity} );
			}
			
			else if ( item.type == "geojson_tile" )
			{
				item.drawLayer = new GSI.MapToImage.VectorTileLayer( this._map, layer, {opacity: item.opacity} );
			}
			else if ( item.type == "tile" )
			{
                
				item.drawLayer = new GSI.MapToImage.TileLayer( this._map, layer, {
					opacity: item.opacity, 
					grayscale: item.grayscale,
					blend: item.blend
					} );
			}
			else if ( item.type == "system" )
			{
				item.drawLayer = layer;
			}
			else
			{
				item.loaded = true;
			}
			if ( !item.drawLayer ) continue;
			item.loaded = false;
			
		}
		
		for ( var i=0; i<this._list.length; i++ )
		{
			
			var item = this._list[i];
			
			if ( !item.drawLayer ) continue;
			
			if ( item.drawLayer.on )
			{
				item.drawLayer.off("loaded").on("loaded", L.bind(this._onLoad, this, item ) );
			}
			
			if ( item.drawLayer.refreshQueue ) 
			{
				item.drawLayer.refreshQueue();
			}
			
			if ( item.drawLayer.load )
			{
				item.drawLayer.load();
			}
			else
				item.loaded = true;
		
		}
		
		if ( !this._drawn )this._onLoad({});
	},
	
	_onLoad : function(item) {
		
		item.loaded  = true;
		var loaded = true;
		for( var i =0; i<this._list.length; i++ )
		{
			if ( !this._list[i].loaded ){ loaded = false; break; }
		}
		if ( loaded ) {
			this._drawn = true;
			this._drawMapImage();
		}
	},
	
	_drawMapImage : function()
	{
		var size = this._map.getSize();
		
		var imageSize = {
			width : size.x,
			height : size.y
		};
		
		this._mapCanvas = $( "<canvas>" ).css ( {
		} )
		.attr( {
			"width" : size.x,
			"height" : size.y
		} );
		this._mapTexture = this._mapCanvas[0].getContext("2d");
		this._mapTexture.fillStyle = "rgb(255, 255, 255)";
		this._mapTexture.fillRect(0, 0, size.x, size.y);
		for ( var i=this._list.length-1; i>=0; i-- )
		{
			if ( this._list[i].drawLayer )
			{
				if ( this._list[i].type=="system" )
					this._list[i].drawLayer.drawPath( this._mapTexture );
				else
				{
				    this._list[i].drawLayer.draw( this._mapTexture );
			    }
			}
		}
		this._markerPaneToCanvas();
		
		
	},
	
	_drawDIVMarker : function(marker, origin, pixelBounds)
	{
		var result = false;
		
		var div = marker.children("div");
		
	
		var radius = div.css( "border-radius" ) || div.css( "-moz-border-radius" ) || div.css( "-webkit-border-radius" );
		if ( radius )
		{
			radius = $.trim(radius);
			var parts = radius.split( " " );
			if (parts.length > 0 )
				radius = parseInt( parts[0] );
			else
				radius = 0;
		}
		else
			radius = 0;
		
		var left = 0;
		var top = 0;
		//transform: translate3d(1023px, -112px, 0px); opacity: 1;
		if (L.Browser.any3d) {
			var matches = marker[0].style[L.DomUtil.TRANSFORM].match(/([+-]*\d+)[\D]*\,[^+-\d]*([+-]*\d+)[\D]*/);
			if (matches) {
				left = parseFloat(matches[1])+( origin.x-pixelBounds.min.x );
				top  = parseFloat(matches[2])+( origin.y-pixelBounds.min.y );
			}
		} else {
			left = parseInt(marker[0].style.left)+( origin.x-pixelBounds.min.x );
			top = parseInt(marker[0].style.top)+( origin.y-pixelBounds.min.y );
		}
		
		var margin = {
			left : 0,
			top : 0
		};
		
		
		var opacity = div.css("opacity");
		if (!opacity ) opacity = 1;
		
		
			
		if ( marker.css("margin-left") ) margin.left = parseFloat( marker.css("margin-left") );
		if ( marker.css("margin-top") ) margin.top = parseFloat( marker.css("margin-top") );
		if ( marker.css("margin") ) {
			var parts = $.trim(marker.css("margin")).split( " " );
			if ( parts.length > 0 ) margin.top = parseFloat( $.trim(parts[0]) );
			if ( parts.length > 3 ) margin.left= parseFloat( $.trim(parts[3]) );
			
		}
		if ( $.trim( div.html() ) == "" )
		{
			
			
			var bgColor = "#000";
			if ( div.css( "background-color" ) ) bgColor = div.css( "background-color" );
			else if ( div.css( "background" ) ) bgColor = div.css( "background" );
			var size = {
				w : div.outerWidth(),
				h : div.outerHeight()
			};
			
			
			if ( radius )
			{
				
				this._mapTexture.beginPath();
				this._mapTexture.arc(left, top, size.w/2, 0, Math.PI*2, false);
				this._mapTexture.save();
				this._mapTexture.fillStyle = bgColor;
				this._mapTexture.globalAlpha=opacity;
				this._mapTexture.fill();
				this._mapTexture.restore();
			}
			else
			{
				this._mapTexture.fillStyle = bgColor;
				this._mapTexture.globalAlpha=opacity;
				this._mapTexture.fillRect(left+margin.left, top+margin.top, size.w, size.h);
			}
			result = true;
		}
		else
		{
			var cssText = ( div.prop("style") ? div.prop("style").cssText : "" );
			
			var fontSize = div.css("font-size") || '12px';
			var fontWeight = div.css("font-weight") || '';
			var fontStyle = div.css("font-style") || '';
			var textShadow = div.css("text-shadow") || div.css("-ms-text-shadow") || '';
			if ( textShadow )
			{
				var matches = textShadow.match(/(rgb\([\d\s,]+\))/);
				if ( matches )textShadow = matches[1];
				else {
					matches = textShadow.match(/(#[a-f|A-F|\d]+)/);
					if ( matches )textShadow = matches[1];
					else textShadow = '';
				};
			}
			else textShadow = '';
			var color = div.css("color") || "#000";
			var fontFamily = div.css("font-family");
			if ( !fontFamily || fontFamily == '' ) fontFamily = "'Meiryo','メイリオ','ヒラギノ角ゴ Pro W3','sans-serif'";
			var text = div.text();
			var transformOrign = div.css("transform-origin");
			var lineHeight = div.css("line-height");
			var transform = div.css("transform") 
				|| div.css("-moz-transform") || div.css("-o-transform") 
				|| div.css("-ms-transform")|| div.css("-webkit-transform");
			var rotate = 0;
			if ( transform )
			{
				var matches = transform.match(/rotate\((.+?)deg/);
				if ( matches )rotate = parseFloat(matches[1]);
				else
				{
					var matches = cssText.match(/rotate\((.+?)deg/);
					if ( matches )rotate = parseFloat(matches[1]);
				}
			}
			
			var angle90 = div.css("writing-mode") 
				|| div.css("-moz-writing-mode") || div.css("-o-writing-mode") 
				|| div.css("-ms-writing-mode")|| div.css("-webkit-writing-mode");
			if ( angle90 ) angle90 = $.trim( angle90 );
			else
			{
				var matches = cssText.match(/vertical-rl/);
				if ( matches )angle90 = "vertical-rl";
			}
			
			
			//if ( !transform 
			var textAlign = "left";
			var textBaseline = "top";
			
			if ( transformOrign && transformOrign != "" )
			{
				transformOrign = $.trim(transformOrign);
				var parts = transformOrign.split( " " );
				if ( parts.length == 1 )
				{
					if ( parts[0] == "right" || parts[0] == "bottom" )
					{
						textAlign = "right";
						textBaseline = "bottom";
					}
					else if ( parts[0] == "center" )
					{
						
						textAlign = "center";
						textBaseline = "middle";
					}
					else
					{
						textAlign = "left";
						textBaseline = "top";
					}
					
				}
				else if ( parts.length >= 2 )
				{
					if ( parts[0] == "right" || parts[0] == "bottom" )
						textAlign = "right";
					else if ( parts[0] == "center" )
						textAlign = "center";
					else
						textAlign = "left";
					
					
					if ( parts[1] == "right" || parts[1] == "bottom" )
						textBaseline = "bottom";
					else if ( parts[1] == "center" )
						textBaseline = "middle";
					else
						textBaseline = "top";
						
				}
				
			}
			
			if ( lineHeight && lineHeight.match(/px/) )
			{
				lineHeight = parseFloat( lineHeight );
			}
			else
				lineHeight = null;
			
			var parts = fontFamily.split( ',' );
			fontFamily = "";
			for( var k=0; k<parts.length; k++ )
			{
				fontFamily += (fontFamily == "" ? "": ",") + "'" + $.trim(parts[k]).replace(/[\'\"]/g,"") + "'";
			}
			
			this._mapTexture.font = ( fontStyle != "" ? fontStyle + " " : "" ) + fontWeight + " " + fontSize + " " + fontFamily + "";
			this._mapTexture.globalAlpha=opacity;
			
			
			if ( angle90 == "mode:tb-rl" || angle90 == "vertical-rl" )
			{
				return this._drawDIVMarkerTategaki(left, top, margin, text, color, textShadow, textAlign, textBaseline, rotate, lineHeight );
			}
			
			this._mapTexture.textAlign = textAlign;
			this._mapTexture.textBaseline = textBaseline;
				
			
			var metrics  = this._mapTexture.measureText(text, left+margin.left, top+margin.top );
			var lineWidth = metrics.width;
			
			if ( lineHeight != null )
			{
				this._mapTexture.textAlign = "top";
				top += (lineHeight/2);
			}
		
			if ( rotate != 0 )
			{
				//top += lineHeight;
				this._mapTexture.save();
				this._mapTexture.translate( left+margin.left, top+margin.top );
				this._mapTexture.rotate( rotate * Math.PI / 180 );
				if ( textShadow && textShadow != '' )
				{
					this._mapTexture.lineWidth  = 4;
					this._mapTexture.strokeStyle = textShadow;
					this._mapTexture.strokeText(text, 0,0 );
				}
				
				this._mapTexture.fillStyle = color;
				this._mapTexture.fillText(text, 0,0 );
				this._mapTexture.restore();
			}
			else
			{
				
				this._mapTexture.save();
				this._mapTexture.rotate( 0 );
				this._mapTexture.translate( left+margin.left,top+margin.top);
				if ( textShadow && textShadow != '' )
				{
					this._mapTexture.lineWidth  = 4;
					this._mapTexture.strokeStyle = textShadow;
					this._mapTexture.strokeText(text, 0, 0 );
				}
				this._mapTexture.fillStyle = color;
				this._mapTexture.fillText(text, 0, 0 );
				this._mapTexture.restore();
			}
			result = true;
			
		}
		return result;
	},
	
	_drawDIVMarkerTategaki : function(left, top, margin, text, color, textShadow, textAlign, textBaseline, rotate, lineHeight)
	{
		var texture = this._mapTexture;
		var canvas = null;
		
		if ( rotate != 0 )
		{
			canvas = document.createElement( "canvas" );
			texture = canvas.getContext('2d');
			texture.font = this._mapTexture.font;
			texture.globalAlpha = this._mapTexture.globalAlpha;
		}
		
		var isDrawShadow = !!( textShadow && textShadow != '');
		if ( isDrawShadow )
		{
			texture.lineWidth  = 4;
			texture.strokeStyle = textShadow;
		}
		var result = false;
		var metric = texture.measureText("あ" );
		var charHeight = metric.width;
		
		texture.textAlign = "center";
		//texture.textAlign = "left";
		texture.textBaseline = "top";
		
		
		//texturefillText(text, left+margin.left, top+margin.top);
		texture.fillStyle = color;
		var x = ( !canvas ? left+margin.left : 0 ) + (charHeight/2);
		var y= ( !canvas ? top+margin.top : 0 );
		for( var i=0; i<text.length; i++ )
		{
			var c = text.charAt(i);
			
			if ( c == "（" || c == "(" )
			
			{
				c="(";
				texture.save();
				texture.textBaseline = "middle";
				//texture.textBaseline = "middle";
				texture.translate( 
					x,
					y + charHeight - texture.measureText(c).width / 2); //texture.measureText(c).width, y + );
				texture.rotate( 90 * Math.PI / 180 );
				
				if ( isDrawShadow )
					texture.strokeText(c, 0,0 );
				texture.fillText(c, 0, 0);
				texture.restore();
			}
			else if ( c == "）" || c == ")" )
			{
				c= ")";
				texture.save();
				texture.textBaseline = "middle";
				texture.translate( x,
					y + charHeight / 2);
				texture.rotate( 90 * Math.PI / 180 );
				if ( isDrawShadow )
					texture.strokeText(c, 0,0);
				texture.fillText(c, 0, 0 );
				texture.restore();
			}
			else
			{
				
				texture.save();
				if ( isDrawShadow )
					texture.strokeText(c,x,y);
				texture.fillText(c, x, y);
				
				texture.restore();
			}
			y += charHeight;
			
		}
		
		if ( canvas )
		{
			//texture
			this._mapTexture.save();
			this._mapTexture.translate( left+margin.left, top+margin.top );
			this._mapTexture.rotate( rotate * Math.PI / 180 );
			this._mapTexture.drawImage(canvas, 0,0);
			this._mapTexture.restore();
		}
		
		
		result = true;
		return result;
	},
	
	_markerPaneToCanvas : function()
	{
		var size = this._map.getSize();
		var markerPane = $(".leaflet-objects-pane .leaflet-marker-pane" ).clone();
		var images = markerPane.find( "img" );
		images.each(function() {
			this.crossOrigin = "anonymous";
			var url = this.src.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp");
			if(url.indexOf('//maps.gsi.go.jp/') != -1)
			{
				url=url.replace('https://','//');
				url=url.replace('http://','//');
			}
			if ( !CONFIG.ISPREVIEWSITE )
			{
				this.src = url;
			}
			else
			{
				if ( url.match(/maps.gsi.go.jp/) )
				{
					var proxy = CONFIG.PROXYURL;
					this.src = proxy.replace( "{url}",  url.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp") );
				}
			}
			
		} );
		
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		
		//markerPane.find( "*" ).css( {"transform":"none"} );
		
		//markerPane.css( { "position":"absolute", "margin-left" : ( origin.x - pixelBounds.min.x ) + "px",  "margin-top" : ( origin.y - pixelBounds.min.y) + "px"} );
		
		var markers = markerPane.children();
		for( var i=0; i<markers.length; i++ )
		{
			var marker = $(markers[i]);
			
			if ( marker.prop("tagName") == "DIV" && marker.find("img").length <= 0)
			{
				if ( this._drawDIVMarker( marker, origin,pixelBounds ) )
					marker.remove();
			}
			
		}
		
		
		
		if ( origin.x-pixelBounds.min.x == 0 && top+( origin.y-pixelBounds.min.y ) == 0 )
		{
			
		}
		else
		{
			var elems = markerPane.find( "*" );
			
			for( var i=0; i<elems.length; i++ )
			{
				var el = elems[i];
				var transform = el.style[L.DomUtil.TRANSFORM];
				var left = 0;
				var top = 0;
				//transform: translate3d(1023px, -112px, 0px); opacity: 1;
				if (L.Browser.any3d) {
					
					var matches = el.style[L.DomUtil.TRANSFORM].match(/([+-]*\d+)[\D]*\,[^+-\d]*([+-]*\d+)[\D]*/);
					if (matches) {
						//console.log( matches );
						left = parseFloat(matches[1]);
						top  = parseFloat(matches[2]);
						
						var point = new L.Point(left+( origin.x-pixelBounds.min.x ), top+( origin.y-pixelBounds.min.y ) );
						el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
					}
				} else {
					el.style.left = parseInt(el.style.left)+( origin.x-pixelBounds.min.x ) + "px";
					el.style.top = parseInt(el.style.top)+( origin.y-pixelBounds.min.y ) + "px";
					//left = parseFloat(el.style.left);
					//top  = parseFloat(el.style.top);
				}
				
			}
		}
		
		
		
		
		
		
		
		var dummy = $( "<div>" ).addClass("maptoimage-dummy").css({"z-index" : 0, "width": "1px", "height": "1px", "position": "absolute"});
		$( "body" ).append(dummy);
		
		dummy.append( markerPane );
		html2canvas(markerPane[0], {
			onrendered: L.bind( this._onMarkerRendered, this ),
			logging:false,
			userCORS:true,
			allowTaint:false,
			width: size.x,
			height: size.y
		});
		
	},
	_popupPaneToCanvas : function()
	{
		var size = this._map.getSize();
		var popupPane = $(".leaflet-objects-pane .leaflet-popup-pane" ).clone();
		
		if ( popupPane.children().length <= 0 )
		{
			this._balloonToCanvas();
			return;
		}
		
		var images = popupPane.find( "img" );
		images.each(function() {
			this.crossOrigin = "anonymous";
			var url = this.src.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp");
			if(url.indexOf('//maps.gsi.go.jp/') != -1)
			{
				url=url.replace('https://','//');
				url=url.replace('http://','//');
			}
			if ( !CONFIG.ISPREVIEWSITE )
			{
				this.src = url;
			}
			else
			{
				if ( url.match(/maps.gsi.go.jp/) )
				{
					var proxy = CONFIG.PROXYURL;
					this.src = proxy.replace( "{url}",  url.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp") );
				}
			}
			
		} );
		
		
		
		
		var mapPane = $( ".leaflet-map-pane" );
		popupPane.find( ".leaflet-popup" ).remove();
		
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		
		//markerPane.find( "*" ).css( {"transform":"none"} );
		
		//markerPane.css( { "position":"absolute", "margin-left" : ( origin.x - pixelBounds.min.x ) + "px",  "margin-top" : ( origin.y - pixelBounds.min.y) + "px"} );
		
		if ( origin.x-pixelBounds.min.x == 0 && top+( origin.y-pixelBounds.min.y ) == 0 )
		{
			
		}
		else
		{
			var elems = popupPane.find( "*" );
			
			for( var i=0; i<elems.length; i++ )
			{
				var el = elems[i];
				var transform = el.style[L.DomUtil.TRANSFORM];
				var left = 0;
				var top = 0;
				//transform: translate3d(1023px, -112px, 0px); opacity: 1;
				if (L.Browser.any3d) {
					
					var matches = el.style[L.DomUtil.TRANSFORM].match(/([+-]*[\d\.]+)[\D]*\,[^+-\d]*([+-]*[\d\.]+)[\D]*/);
					if (matches) {
						left = parseFloat(matches[1]);
						top  = parseFloat(matches[2]);
						
						var point = new L.Point(left+( origin.x-pixelBounds.min.x ), top+( origin.y-pixelBounds.min.y ) );
						el.style[L.DomUtil.TRANSFORM] =  L.DomUtil.getTranslateString(point);
					}
				} else {
					left = parseFloat(el.style.left);
					top  = parseFloat(el.style.top);
				}
				
			}
		}
		
		var dummy = $( "<div>" ).addClass("maptoimage-dummy").css({"z-index" : 0, "width": "1px", "height": "1px", "position": "absolute"});
		$( "body" ).append(dummy);
		
		//mapPane.append( popupPane );
		dummy.append( popupPane );
		html2canvas(popupPane[0], {
			onrendered: L.bind( this._onPopupRendered, this ),
			logging:false,
			userCORS:true,
			allowTaint:false,
			width: size.x,
			height: size.y
		});
	},
	
	_onMarkerRendered : function(canvas) 
	{
		var size = this._map.getSize();
		
		this._mapTexture.drawImage(canvas, 0, 0, size.x, size.y, 
				0,0, 
				size.x, size.y);
		$( ".maptoimage-dummy" ).remove();
		
		if ( this.options.drawControls )
			this._centerCrossToCanvas();
		this._popupPaneToCanvas();
		
	},
	
	_onPopupRendered : function(canvas) 
	{
		var size = this._map.getSize();
		
		this._mapTexture.drawImage(canvas, 0, 0, size.x, size.y, 
				0,0, 
				size.x, size.y);
		$( ".maptoimage-dummy" ).remove();
		this._balloonToCanvas();
		
	},
	
	_balloonToCanvas : function()
	{
		var size = this._map.getSize();
		
		
		var popupPane = $(".leaflet-objects-pane .leaflet-popup-pane" ).clone();
		//popupPane.children( ":not(.leaflet-popup)" ).remove();
		var baloons = popupPane.find( ".leaflet-popup" );
		var baloonsOrig = $( ".leaflet-objects-pane .leaflet-popup-pane .leaflet-popup" );
		
		if ( baloons.length <= 0 ) 
		{
			if ( this.options.drawControls )
				this._miniMapToCanvas();
			else
				this._scaleToCanvas();
			return;
		}
		
		var images = popupPane.find( "img" );
		images.each(function() {
			this.crossOrigin = "anonymous";
			var src = this.src.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp");
			if(src.indexOf('//maps.gsi.go.jp/') != -1)
			{
				src=src.replace('https://','//');
				src=src.replace('http://','//');
			}
			if ( !CONFIG.ISPREVIEWSITE )
			{
				this.src = src;
			}
			else
			{
				if ( src.match(/maps.gsi.go.jp/) )
				{
					var proxy = CONFIG.PROXYURL;
					this.src = proxy.replace( "{url}",  src.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp") );
				}
			}
			
		} );
		
		
		
		
		this._baloons = [];
		var containerPos = $(this._map.getContainer() ).offset();
		for( var i=0; i<baloons.length; i++ )
		{
			var pos = $(baloonsOrig[i]).offset();
			pos.top-=containerPos.top;
			pos.left-=containerPos.left;
			
			this._baloons.push(
				{
					elem: baloons[i],
					pos : pos,
					arrowHeight : $(baloonsOrig[i]).find(".leaflet-popup-tip-container .leaflet-popup-tip").outerHeight()
				} );
		}
		
		this._drawNextBalloon();
		
		
		
	},
	
	_drawNextBalloon : function()
	{
		var baloon = $( this._baloons[0].elem );
		
		var closeBtn = baloon.find("a.leaflet-popup-close-button").css( {
		    position: "absolute",
			top: 0,
			right: 0,
			padding: "4px 4px 0 0",
			"text-align": "center",
			width: "18px",
			height: "14px",
			font: "16px/14px Tahoma, Verdana, sans-serif",
			color: "#c3c3c3",
			"text-decoration": "none",
			"font-weight": "bold",
			background: "transparent"
		} ).remove();
		
		baloon.find(".leaflet-popup-tip-container").remove();
		baloon.append( closeBtn );
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		
		var dummy = $( "<div>" ).addClass("maptoimage-dummy").css({"z-index" : 0, "width": "1px", "height": "1px", "position": "absolute"});
		$( "body" ).append(dummy);
		
		dummy.append( baloon[0] );
		
		
		var iframes = dummy.find("iframe");
	
	
		for( var i=0; i<iframes.length; i++ )
		{
			var w = $(iframes[i] ).outerWidth() ;
			var h = $(iframes[i] ).outerHeight() ;
			
			$(iframes[i] ).parent().append( $( "<div>" ).css({ width:w +"px", height:h+"px", background:"#333"}) );
			$(iframes[i] ).hide();
			
			
		}
		
		
		
		this._baloons[0].width = baloon.outerWidth();
		this._baloons[0].height = baloon.outerHeight();
		
		
		baloon.css( {
			"transform" : "none",
			"left" : 0,
			"top" : 0
		} );
		
		html2canvas(baloon[0], {
			onrendered: L.bind( this._onBalloonRendered, this ),
			logging:false,
			userCORS:true,
			allowTaint:true,
			width: this._baloons[0].width,
			height: this._baloons[0].height
		});
	},
	
	_onBalloonRendered : function(canvas) 
	{
		
		this._mapTexture.shadowBlur = 20;
		this._mapTexture.shadowColor = "rgba(0, 0, 0, 0.5)";
		
		
		this._mapTexture.drawImage(canvas, 
				0,0, 
				this._baloons[0].width, this._baloons[0].height, 
				this._baloons[0].pos.left, this._baloons[0].pos.top, 
				this._baloons[0].width, this._baloons[0].height);
		
		
		
		this._mapTexture.shadowBlur = 0;
		this._mapTexture.shadowColor = "rgba(0, 0, 0, 0)";
		
		var pos = {
			x : 0,
			y : 0
		};
		
		pos.x = this._baloons[0].pos.left + ( this._baloons[0].width / 2 );
		pos.y = this._baloons[0].pos.top + this._baloons[0].height;
		
		this._mapTexture.beginPath();
		this._mapTexture.moveTo(
			parseInt(pos.x - 14 ), 
			parseInt(pos.y - 1 )
		);
		
		this._mapTexture.lineTo(
			parseInt(pos.x + 14 ), 
			parseInt(pos.y - 1 )
		);
		
		this._mapTexture.lineTo(
			parseInt(pos.x ), 
			parseInt(pos.y - 1 + 14 )
		);
		
		this._mapTexture.closePath();
		this._mapTexture.save();
		this._mapTexture.fillStyle = "#fff";
		this._mapTexture.globalAlpha = 1;
		this._mapTexture.fill();   
		this._mapTexture.restore();
			
		$( ".maptoimage-dummy" ).remove();
		this._baloons.shift();
		
		if ( this._baloons.length <= 0 )
		{
			if ( this.options.drawControls )
				this._miniMapToCanvas();
			else
				this._scaleToCanvas();
			
		}
		else
			this._drawNextBalloon();
		
	},
	
	_miniMapToCanvas : function()
	{
		var size = this._map.getSize();
		
		if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.MINIMAP] .obj.getVisible() )
		{
			var miniMap = GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.MINIMAP] .obj.miniMap;
			var tileLayer = new GSI.MapToImage.TileLayer(miniMap._miniMap, miniMap._layer);
			tileLayer.on("loaded", L.bind(this._onMiniMapLoad, this, { tileLayer: tileLayer, miniMap : miniMap} ) );
			tileLayer.refreshQueue();
			tileLayer.load();
			
		}
		else
			this._scaleToCanvas();
		
	},
	
	_onMiniMapLoad : function( data )
	{
		var size = data.miniMap._miniMap .getSize();
		var imageSize = {
			width : size.x,
			height : size.y
		};
		
		var canvas = $( "<canvas>" ).css ( {
		} )
		.attr( {
			"width" : size.x,
			"height" : size.y
		} );
		texture = canvas[0].getContext("2d");
		texture.fillStyle = "rgb(255, 255, 255)";
		texture.fillRect(0, 0, size.x, size.y);
		
		data.tileLayer.draw(texture);
		var miniMapContainer = $(".leaflet-control-container .leaflet-control-minimap" ).clone();
		miniMapContainer.empty();
		
		var dummy = $( "<div>" ).addClass("maptoimage-dummy").css({"z-index" : 0, "width": "1px", "height": "1px", "position": "absolute"});
		$( "body" ).append(dummy);
		
		dummy.append( miniMapContainer );
		var canvas2 = canvas[0];
		html2canvas(miniMapContainer[0], {
			onrendered: L.bind( function(canvas){
				var offset = $(this._map.getContainer() ).offset();
				var pos = $(".leaflet-control-container .leaflet-control-minimap" ).offset();
				pos.left -= offset.left;
				pos.top -= offset.top;
				
				
				if ( $( "#footer" ).is(":visible") )
					pos.top += $( "#footer" ).outerHeight();
				//this._mapTexture.drawImage(canvas, pos.left, pos.top );
				//this._mapTexture.drawImage(canvas2, pos.left+2, pos.top+2 );
				
				var min = null;
				var max = null;
				
				for( var i=0; i<data.miniMap._aimingRect._parts[0].length; i++ )
				{
					if ( !min ) min = $.extend( {}, data.miniMap._aimingRect._parts[0][i] );
					else
					{
						if( min.x > data.miniMap._aimingRect._parts[0][i].x ) min.x = data.miniMap._aimingRect._parts[0][i].x;
						if( min.y > data.miniMap._aimingRect._parts[0][i].y ) min.y = data.miniMap._aimingRect._parts[0][i].y;
					}
					if ( !max ) max = $.extend( {}, data.miniMap._aimingRect._parts[0][i] );
					else
					{
						if( max.x < data.miniMap._aimingRect._parts[0][i].x ) max.x = data.miniMap._aimingRect._parts[0][i].x;
						if( max.y < data.miniMap._aimingRect._parts[0][i].y ) max.y = data.miniMap._aimingRect._parts[0][i].y;
					}
				}
				
				var w = max.x - min.x;
				var h = max.y - min.y;
				var texture = canvas2.getContext("2d");
				texture.moveTo( parseInt(size.x / 2 - w / 2), parseInt(size.y / 2 - h / 2) );
				texture.lineTo( parseInt(size.x / 2 + w / 2), parseInt(size.y / 2 - h / 2) );
				texture.lineTo( parseInt(size.x / 2 + w / 2), parseInt(size.y / 2 + h / 2) );
				texture.lineTo( parseInt(size.x / 2 - w / 2), parseInt(size.y / 2 + h / 2) );
				texture.closePath();
				texture.save();
				texture.lineWidth = 2;
				texture.strokeStyle = data.miniMap._aimingRect.options.color;
				texture.fillStyle = data.miniMap._aimingRect.options.color;
				
				texture.globalAlpha = data.miniMap._aimingRect.options.fillOpacity;
				texture.fill();   
				texture.globalAlpha = data.miniMap._aimingRect.options.opacity;
				texture.stroke();
				texture.restore();
				
				//var drawLayer = new GSI.MapToImage.VectorTileLayer( data.miniMap._miniMap , data.miniMap._aimingRect );
				//drawLayer.draw( canvas.getContext("2d") );
				
				this._mapTexture.shadowBlur = 10;
				this._mapTexture.shadowColor = "rgba(0, 0, 0, 0.5)";

				this._mapTexture.drawImage(canvas, pos.left, pos.top );
				this._mapTexture.drawImage(canvas2, pos.left+2, pos.top+2 );
				
				
				$( ".maptoimage-dummy" ).remove();
				this._scaleToCanvas();
			}, this ),
			logging:false,
			userCORS:true,
			allowTaint:false,
			width: size.x+4,
			height: size.y+4
		});
		
	},
	
	_scaleToCanvas : function(canvas) 
	{
		var size = this._map.getSize();
		
		var scaleBar = $( ".leaflet-control-scale" );
		
		var size = {
			w : scaleBar.outerWidth(),
			h : scaleBar.outerHeight()
		};
		
		var offset = $(this._map.getContainer() ).offset();
		var pos = scaleBar.offset();
		if ( $( "#footer" ).is(":visible") )
			pos.top += $( "#footer" ).outerHeight();
		pos.left -= offset.left;
		pos.top -= offset.top;
		pos.left +=1;
		pos.top +=1;
		size.w -= 2;
		size.h -= 2;
		
		
		this._mapTexture.fillStyle = "#fff";
		this._mapTexture.globalAlpha = 0.5;
		this._mapTexture.fillRect( pos.left, pos.top, size.w, size.h );
		if ( this._mapTexture.setLineDash !== undefined )
			this._mapTexture.setLineDash([]);
		else if ( this._ctx.mozDash !== undefined )
			this._mapTexture.mozDash = [];
		
		this._mapTexture.beginPath();
		this._mapTexture.moveTo( pos.left, pos.top );
		this._mapTexture.lineTo( pos.left, pos.top  + size.h );
		this._mapTexture.lineTo( pos.left + size.w, pos.top  + size.h );
		this._mapTexture.lineTo( pos.left + size.w, pos.top );
		this._mapTexture.save();
		this._mapTexture.globalAlpha = 1;
		this._mapTexture.lineWidth = 2;
		this._mapTexture.strokeStyle = "#777";
		this._mapTexture.stroke();
		
		
		this._mapTexture.font = "normal 11px 'Lucida Grande','Hiragino Kaku Gothic ProN', 'ヒラギノ角ゴ ProN W3', 'Meiryo', 'メイリオ', 'sans-serif'";
		
		this._mapTexture.fillStyle = "#333";
		this._mapTexture.textAlign = "left";
		this._mapTexture.textBaseline = "middle";
		this._mapTexture.fillText( scaleBar.text(), 
			pos.left + 6, pos.top + size.h / 2 );
		
		this._mapTexture.restore();
		
		this._finish();
		/*
		scaleBar = scaleBar.clone();
		var dummy = $( "<div>" ).addClass("maptoimage-dummy").css({"z-index" : 0, "width": "1px", "height": "1px", "position": "absolute"});
		$( "body" ).append(dummy);
		
		console.log( scaleBar );
		//mapPane.append( popupPane );
		dummy.append( scaleBar );
		html2canvas(scaleBar[0], {
			onrendered: L.bind( function(canvas) {
				
				$( ".maptoimage-dummy" ).remove();
				var scaleBar = $( ".leaflet-control-scale" );
				var offset = $(this._map.getContainer() ).offset();
				var pos = scaleBar.offset();
				if ( $( "#footer" ).is(":visible") )
					pos.top += $( "#footer" ).outerHeight();
				//if ( pos.left - 280 > 0 ) pos.left-=280;
				this._mapTexture.drawImage(canvas, pos.left - offset.left, pos.top - offset.top );
				this._finish();
			}, this ),
			logging:false,
			userCORS:true,
			allowTaint:false,
			width: size.x,
			height: size.y
		});
		*/
		
	},
	
	_centerCrossToCanvas : function()
	{
		var size = this._map.getSize();
		
		if ( GSI.GLOBALS.onoffObjects[CONFIG.PARAMETERNAMES.CENTERCROSS] .obj.getVisible() )
		{
			this._mapTexture.beginPath();
			
			this._mapTexture.moveTo( parseInt(size.x / 2 ) - 16, parseInt( size.y / 2 ) );
			this._mapTexture.lineTo( parseInt(size.x / 2 ) + 16, parseInt( size.y / 2 ) );
			
			
			this._mapTexture.moveTo( parseInt(size.x / 2 ), parseInt( size.y / 2 ) - 16 );
			this._mapTexture.lineTo( parseInt(size.x / 2 ), parseInt( size.y / 2 ) + 16 );
			
			this._mapTexture.save();
			this._mapTexture.globalAlpha = 1;
			
			this._mapTexture.lineWidth = 3;
			this._mapTexture.strokeStyle = "#222";
		
		
			this._mapTexture.stroke();
			
			this._mapTexture.restore();
		}
	},
	
	_finish : function() 
	{
		var size = this._map.getSize();
		
		var text =  "地理院地図";
		this._mapTexture.font= "normal 25px 'メイリオ','ヒラギノ角ゴ Pro W3'";
		
		this._mapTexture.strokeStyle = '#000';
		this._mapTexture.lineWidth = 4; 
		this._mapTexture.lineJoin = 'round';
		this._mapTexture.fillStyle = '#fff';
		this._mapTexture.textAlign = 'right';
		this._mapTexture.textBaseline = 'bottom';
		
		this._mapTexture.globalAlpha = 0.8;
		this._mapTexture.strokeText(text,size.x-6,size.y-6);
		this._mapTexture.globalAlpha = 1;
		this._mapTexture.fillText(text,size.x-6,size.y-6);
		
		this.fire("finish", { canvas : this._mapCanvas } );
	}
	
	
} );




GSI.MapToImage.TileLayer = L.Class.extend( {
	includes: L.Mixin.Events,
	
	initialize : function ( map, layer, options )
	{
		L.setOptions(this, options);
		this._map = map;
		this._layer = layer;
		
	},
	
	_getTileSize : function()
	{
		var zoom = this._map.getZoom();
		var zoomN = this._layer.options.maxNativeZoom;
		var tileSize = this._layer.options.tileSize;

		if (zoomN && zoom > zoomN) {
			tileSize = Math.round(this._map.getZoomScale(zoom) / this._map.getZoomScale(zoomN) * tileSize);
		}
		
		return tileSize;
	},
	
	refreshQueue : function()
	{
		var bounds = this._map.getPixelBounds();
		var zoom = this._map.getZoom();
		if (zoom > this._layer.options.maxZoom || zoom < this._layer.options.minZoom) {
			return;
		}
		
		
		var tileSize = this._getTileSize();
		
		
		
		var tileBounds = L.bounds(
				bounds.min.divideBy(tileSize)._floor(),
				bounds.max.divideBy(tileSize)._floor());
		this._queue = [],
			center = tileBounds.getCenter();
		
		this._tiles = {};
		var j, i, point;

		for (j = tileBounds.min.y; j <= tileBounds.max.y; j++) {
			for (i = tileBounds.min.x; i <= tileBounds.max.x; i++) {
				point = new L.Point(i, j);
				this._queue.push(point);
				this._tiles[ point.x + ":" + point.y ] = point;
			}
		}
		
	},
	
	_getZoomForUrl: function () {

		var options = this._layer.options,
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
	
	_adjustTilePoint: function (tilePoint) {

		var limit = this._getWrapTileNum();
		
		// wrap tile coordinates
		if (!this.options.continuousWorld && !this.options.noWrap) {
			tilePoint.x = ((tilePoint.x % limit.x) + limit.x) % limit.x;
		}

		tilePoint.z = this._getZoomForUrl();
	},
	
	load : function()
	{
		if ( !this._queue ) return;
		var zoom = this._getZoomForUrl();
		var tileSize = this._getTileSize();
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		var loadCounter = 0;
		
		for( var i = 0; i<this._queue.length; i++ )
		{
			var tilePoint =  this._queue[i];
			
			var tilePoint2 = $.extend( {}, tilePoint );
			
			this._adjustTilePoint(tilePoint2);
			
			if (this._layer.options.bounds) {
				var 
					nwPoint = tilePoint.multiplyBy(tileSize),
					sePoint = nwPoint.add([tileSize, tileSize]),
					nw = this._map.unproject(nwPoint),
					se = this._map.unproject(sePoint);

				if (!this._layer.options.continuousWorld && !this._layer.options.noWrap) {
					nw = nw.wrap();
					se = se.wrap();
				}

				if (!this._layer.options.bounds.intersects([nw, se])) 
				{
					tilePoint._noimage = true;
					delete this._tiles[ tilePoint.x + ":" + tilePoint.y ];
					continue;
				}
			}
			
			var tilePos = this._getTilePos(tilePoint2, tileSize);
			tilePos = tilePoint.multiplyBy(tileSize).subtract(origin);
			tilePos.x += (origin.x - pixelBounds.min.x );
			tilePos.y += (origin.y - pixelBounds.min.y );
			
			
			
			tilePoint.img = $( "<img>" ).css({
				width : tileSize + "px",
				height : tileSize + "px"
			}).attr( { "crossOrigin" : "anonymous" } );
			//tilePoint.z = zoom;
			tilePoint.size = tileSize;
			tilePoint.pos = tilePos;
			tilePoint.img.on("load", L.bind( this._onTileLoad, this, tilePoint ) );
			tilePoint.img.on( "error", L.bind( this._onTileLoadError, this, tilePoint ) );
			
			tilePoint.img.attr( { "src" : this.getTileUrl(tilePoint2) } );
			
			//this._loadTile(tile, tilePoint);
			loadCounter++;
		}
		
		if ( loadCounter <= 0 )
		{
			this._tileLoaded();
		}
	},
	
	_tileLoaded : function()
	{
		var length = 0;
		for(var key in this._tiles) length++;
		
		if ( length <= 0 )
		{
			this.fire( "loaded" );
		}
	},
	
	_onTileLoad :function(tilePoint)
	{
		delete this._tiles[ tilePoint.x + ":" + tilePoint.y ];
		this._tileLoaded();
	},
	_onTileLoadError :function(tilePoint)
	{
		tilePoint._noimage = true;
		delete this._tiles[ tilePoint.x + ":" + tilePoint.y ];
		this._tileLoaded();
	},
	
	_getSubdomain: function (tilePoint) {
		var index = Math.abs(tilePoint.x + tilePoint.y) % this._layer.options.subdomains.length;
		return this._layer.options.subdomains[index];
	},
	getTileUrl: function (tilePoint) {
		return L.Util.template(this._layer._url.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp"), L.extend({
			s: this._getSubdomain(tilePoint),
			z: tilePoint.z,
			x: tilePoint.x,
			y: tilePoint.y
		}, this.options));
	},
	
	_getTilePos : function(tilePoint, tileSize)
	{
		var origin = this._map.getPixelOrigin();

		return tilePoint.multiplyBy(tileSize).subtract(origin);
	},
	
	
	draw : function( texture )
	{
		var grayScaleCanvas = null;
		texture.globalAlpha = ( this.options.opacity ? this.options.opacity : 1.0 );
		for ( var i=0; i<this._queue.length; i++ )
		{
			var tilePoint = this._queue[i];
			if ( tilePoint._noimage ) continue;
			
			if ( this.options.grayscale )
			{
				
				if ( !grayScaleCanvas )
					grayScaleCanvas = document.createElement("canvas");
				if(grayScaleCanvas.getContext)
				{
					grayScaleCanvas.width  = Math.ceil(tilePoint.size);
					grayScaleCanvas.height = Math.ceil(tilePoint.size);

					var ctx = grayScaleCanvas.getContext("2d");
					ctx.drawImage(tilePoint.img[0], 0, 0, 256 ,256, 0, 0, tilePoint.size, tilePoint.size);
					var imageData = ctx.getImageData(0, 0, tilePoint.size, tilePoint.size);
					pixelData = imageData.data;
					for(var y = 0; y < grayScaleCanvas.height; y++){
						for(var x = 0; x < grayScaleCanvas.width; x++){
							// (x,y)ピクセルの明度
							var j = (y * 4 * grayScaleCanvas.width) + (x * 4);

							var R = pixelData[j    ];
							var G = pixelData[j + 1];
							var B = pixelData[j + 2];

							//グレースケールに変換
							var grayScale = (R * 0.3) + (G * 0.59) + (B * .11);
							pixelData[j    ] = grayScale;
							pixelData[j + 1] = grayScale;
							pixelData[j + 2] = grayScale;
							//pixelData[j + 3] = 32;
						}
					}
					ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
					
					
				texture.drawImage(grayScaleCanvas, 0, 0, 256 ,256, 
					tilePoint.pos.x, tilePoint.pos.y, 
					tilePoint.size, tilePoint.size);
					
				}
			}
			else
			{
				if ( this.options.blend )
				{
					texture.globalCompositeOperation = "multiply";
					texture.drawImage(tilePoint.img[0], 0, 0, 256 ,256, 
						tilePoint.pos.x, tilePoint.pos.y, 
						tilePoint.size, tilePoint.size);
					texture.globalCompositeOperation = "source-over";
				}
				else
				{
					texture.drawImage(tilePoint.img[0], 0, 0, 256 ,256, 
						tilePoint.pos.x, tilePoint.pos.y, 
						tilePoint.size, tilePoint.size);
				
				}
			}
		}
		texture.globalAlpha = 1.0;
	}
	
} );




GSI.MapToImage.VectorTileLayer = L.Class.extend( {
	includes: L.Mixin.Events,
	
	initialize : function ( map, layer, options )
	{
		L.setOptions(this, options);
		this._map = map;
		this._layer = layer;
		
	},
	
	load : function()
	{
		this.fire( "loaded" );
	},
	
	draw : function( texture )
	{
		if ( this._layer instanceof GSI.VectorTileLayer )
		{
			var canvasList = $(this._layer._container ).find( "canvas" );
			for( var key in this._layer._tiles )
			{
				var geoJSON = this._layer._tiles[key].geoJSON;
				if ( !geoJSON ) continue;
				for( var i=0; i<geoJSON.length; i++ )
					this._drawLayer( texture,geoJSON[i], this._layer._tiles[key]._tilePoint, this._layer.options );
			}
		}
		
		this._drawLayer( texture,this._layer.geojsonLayer ? this._layer.geojsonLayer  : ( this._layer.layer ? this._layer.layer: this._layer) );
	},
	_drawLayer : function(texture,layer, tilePoint, layerOptions)
	{
		if ( !layer ) return;
		if ( layer.getLayers ) 
		{
			var layers = layer.getLayers();
			
			
			for( var i=0; i<layers.length; i++ )
			{
				this._drawLayer( texture,layers[i], tilePoint, layerOptions );
			}
			return;
		}
		this._drawPath( texture, layer, tilePoint, layerOptions );
	},
	
	_updateStyle: function (texture, layer) {
		if ( !layer._parts && ( !layer._radius || !layer._point ) ) return;
		var options = layer.options;
		if (options.stroke) {
			texture.lineWidth = options.weight;
			texture.strokeStyle = options.color;
			
			if ( options.lineCap &&
				( options.lineCap == "butt" ||
				options.lineCap == "round" ||
				options.lineCap == "square" )
			)
			{
				texture.lineCap = options.lineCap ;
			}
			else
				texture.lineCap = "butt";
			texture.lineJoin = 'round';
		}
		if (options.fill) {
			texture.fillStyle = options.fillColor || options.color;
		}
	},
	
	_drawPath: function (texture, layer, tilePoint, layerOptions) {
		
		if ( layer.options.visible == false ) return;
		
		var origin = this._map.getPixelOrigin();
		var pixelBounds = this._map.getPixelBounds();
		var options = layer.options;
		var dashArray = null;
		
		
		
		var offset = {
			x : 0,
			y : 0
		};
		var scale = 1;
		if ( tilePoint )
		{
			var zoom = this._map.getZoom();
			var dz = zoom - layerOptions.maxNativeZoom;
			var tileSize = layerOptions.tileSize;
			var tz = zoom;
			if(dz>0){tileSize = tileSize*Math.pow(2, dz);tz = tz -dz;}
			//if(dz>=layerOptions.maxDz)
			//	scale = tileSize / (layerOptions.tileSize*Math.pow(2, layerOptions.maxDz) );
			
			offset.x = tilePoint.x*tileSize- pixelBounds.min.x -layerOptions.canvasDx*scale;
			offset.y = tilePoint.y*tileSize- pixelBounds.min.y  - layerOptions.canvasDy*scale;
		}
		else
		{
			offset.x = ( origin.x - pixelBounds.min.x );
			offset.y = ( origin.y - pixelBounds.min.y );
		}
		
		
		if ( options.dashArray )
		{
			if ( options.dashArray instanceof Array )
				dashArray = $.extend( [], options.dashArray);
			else
			{
				var dashParts = options.dashArray.split( ',' );
				dashArray = [];
				for( var i=0; i<dashParts.length; i++ )
				{
					dashArray.push(parseInt( dashParts[i] ));
				}
			}
			if ( dashArray.length < 2 ) dashArray = null;
		}
		
		if ( !layer._parts ) 
		{
			if ( layer._radius && layer._point )
			{
				var p = layer._point;
				texture.beginPath();
				texture.arc(
					( scale * p.x ) + offset.x, 
					( scale * p.y ) + offset.y, 
					layer._radius, 0, Math.PI * 2, false);
			}
		}
		else
		{
			
			var i, j, len, len2, point, drawMethod;
			var vp = this._map._pathViewport;
			
			var isPolygon = (layer instanceof L.Polygon || layer instanceof L.Circle);
			
			texture.beginPath();
			var parts = layer._parts;
			for (i = 0, len = parts.length; i < len; i++) {
				
			
				var fromPoint = null;
				var firstPoint = null;
				var lastPoint = null;
				
				if ( parts[i].length > 2 &&
					(parts[i][0].x != parts[i][parts[i].length-1].x || parts[i][0].y != parts[i][parts[i].length-1].y ) )
				{
					lastPoint =parts[i][0];
				}
				for (j = 0, len2 = parts[i].length; j < len2; j++) {
					
					point = parts[i][j];
				
					var toPoint = {
						x : ( scale * point.x ) + offset.x,
						y : ( scale * point.y ) + offset.y
					};
					
					if ( j == 0 )
					{
						firstPoint = toPoint;
						texture.moveTo(toPoint.x, toPoint.y);
					}
					else
					{
						if (dashArray && !isPolygon)
							GSI.Utils.dotLineTo( texture, fromPoint.x, fromPoint.y,
								toPoint.x, toPoint.y, dashArray);
						else
						{
							if ( texture.setLineDash !== undefined )
								texture.setLineDash([]);
							else if ( texture.mozDash !== undefined )
								texture.mozDash = [];
							texture.lineTo(toPoint.x, toPoint.y);
						}
					}
					
					fromPoint = toPoint;
				}
				
				if ( lastPoint && isPolygon )
				{
					
					var toPoint = {
						x : ( scale * lastPoint.x ) + offset.x,
						y : ( scale * lastPoint.y ) + offset.y
					};
					if ( texture.setLineDash !== undefined )
						texture.setLineDash([]);
					else if ( texture.mozDash !== undefined )
						texture.mozDash = [];
					texture.lineTo(toPoint.x, toPoint.y);
				}
				
			}
			
			if (isPolygon) {
				texture.closePath();
			}
		}
		
		
		texture.save();
		
		
		this._updateStyle(texture, layer);
		var opacity = ( this.options.opacity ?  this.options.opacity: 1 );
		
		if (layer.options.fill) 
		{
			texture.globalAlpha = ( layer.options.fillOpacity || layer.options.fillOpacity == 0 ?layer.options.fillOpacity : 0 ) * opacity;
			texture.fill();
		}
		if (layer.options.stroke) {
			texture.globalAlpha = ( layer.options.opacity || layer.options.opacity == 0 ?  layer.options.opacity: 1 );
			texture.stroke();
		}
		texture.restore();
		
	}


	
} );




GSI.MapToImageWindow = L.Class.extend( {
	includes: L.Mixin.Events,
	
	initialize : function ( map, canvas )
	{
		L.setOptions(this, options);
		this._map = map;
	},
	
	show : function(f)
	{
		if ( !this._blind )
		{
			this._blind = $( "<div>" ).addClass( "window_blind" );
			this._msg = $( "<div>" ).css( {
				"position" : "absolute",
				"left" : "50%",
				"top" : "50%",
				"margin-left" : "-90px",
				"padding-left" : "34px",
				"display" : "none",
				"color" : "#fff",
				"z-index" : 999999,
				"line-height": "32px",
				"background-image": "url(image/system/loading002.gif)",
				"background-position":"0px 50%",
				"background-repeat":"no-repeat"
			}).html( "画像を生成しています" );
			$("body").append( this._blind ).append( this._msg );
		}
		
		
		
		
		this._blind.fadeIn( 300 );
		this._msg .fadeIn( 300,f );
	
	},
	
	_makeWorldFileText : function()
	{
		
		var size = this._map.getSize();
		var bounds = this._map.getBounds();
				
		var northWest = L.Projection.SphericalMercator.project(
				bounds.getNorthWest()
			);
		var southEast = L.Projection.SphericalMercator.project(
				bounds.getSouthEast()
			);
			
			
		var lt = {
			lng : northWest.x * 6378137.0,
			lat :northWest.y * 6378137.0
		};
		var rb = {
			lng : southEast.x * 6378137.0,
			lat : southEast.y * 6378137.0
		};
		var txt = "";
				txt += ( ( rb.lng - lt.lng ) / size.x ) + "\n";
				txt += "0\n";
				txt += "0\n";
				txt += -( ( rb.lng - lt.lng ) / size.x ) + "\n";
				txt += lt.lng + "\n";
				txt += lt.lat;
		return txt;
	},
	
	setCanvas : function( canvas )
	{
		this._canvas = canvas;		
		this._worldFileText = this._makeWorldFileText();
		
		this._msg .hide();
		this._fileName = 'img' + GSI.Utils.getTimeStampString();
		
		if ( !this._frame )
		{
			this._frame = $( "<div>" ).addClass("gsi_maptoimage_window");
			
			this._text = $( "<div>"  ).addClass("gsi_maptoimage_window_text").html( GSI.TEXT.MAPTOIMAGE.WINDOW_MSG );
			this._frame.append( this._text );
			
			this._closeBtn = $( "<a>" ).addClass("close_btn").attr({"href":"javascript:void(0);"}).html("×").click( L.bind( function() { this.hide();}, this ) );
			this._frame.append( this._closeBtn );
			var buttonFrame = $( "<div>" ).addClass("gsi_maptoimage_window_button_frame");
			this._dlImageButton = $( "<a>" ).attr({"href":"javascript:void(0);"}).html(GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEIMGBTN).click(L.bind( function(){
				if(window.navigator.msSaveBlob)
				{
					window.navigator.msSaveOrOpenBlob( this._makeImage(this._canvas.toDataURL()), this._fileName + ".png" );
				}
				else
				{
					var url = window.URL || window.webkitURL;
					this._dlImageButton.attr( {
						"download" : this._fileName + ".png",
						"href" : url.createObjectURL(this._makeImage(this._canvas.toDataURL()))
					} );
					
				}
			
			}, this ) );
			this._dlWorldButton = $( "<a>" ).attr({"href":"javascript:void(0);"}).html(GSI.TEXT.MAPTOIMAGE.WINDOW_SAVEPGWBTN).click(L.bind( function(){
				/*
				var size = this._map.getSize();
				var bounds = this._map.getBounds();
						
				var northWest = L.Projection.SphericalMercator.project(
						bounds.getNorthWest()
					);
				var southEast = L.Projection.SphericalMercator.project(
						bounds.getSouthEast()
					);
					
					
				var lt = {
					lng : northWest.x * 6378137.0,
					lat :northWest.y * 6378137.0
				};
				var rb = {
					lng : southEast.x * 6378137.0,
					lat : southEast.y * 6378137.0
				};

				//var lt = bounds.getNorthWest();
				//var rb = bounds.getSouthEast();
				
				var txt = "";
				txt += ( ( rb.lng - lt.lng ) / size.x ) + "\n";
				txt += "0\n";
				txt += "0\n";
				txt += -( ( rb.lng - lt.lng ) / size.x ) + "\n";
				txt += lt.lng + "\n";
				txt += lt.lat;
				*/
				var blob = new Blob([this._worldFileText], { "type" : "text/plain"})
					
				if(window.navigator.msSaveBlob)
				{
					window.navigator.msSaveOrOpenBlob( blob, this._fileName + ".pgw" );
				}
				else
				{
					
					var url = window.URL || window.webkitURL;
					this._dlWorldButton.attr( {
						"download" : this._fileName + ".pgw",
						"href" : url.createObjectURL(blob)
					} );
					
				}
			}, this ) );
			buttonFrame.append( this._dlImageButton ).append( this._dlWorldButton );
			
			var messageFrame = $( "<div>" ).addClass("gsi_maptoimage_window_text2").html( GSI.TEXT.MAPTOIMAGE.WINDOW_MSG2 );
			
			
			this._frame.append( buttonFrame );
			this._frame.append( messageFrame );
			
			$("body").append( this._frame );
		}
		
		this._blind.fadeIn( 200 );
		this._frame.fadeIn( 200 );
		
	},
	 
	_makeImage : function(v){
		var o      = null;
		var base64 = v.split(',');
		if(base64.length > 1){
			var data   = window.atob(base64[1]);
			var data_n = data.length;
			if(data_n > 0){
			var data_buff = new ArrayBuffer(data_n);
			var data_blob = new Uint8Array(data_buff);

			var i = 0;

			for(i = 0; i < data_n; i++){
			    data_blob[i] = data.charCodeAt(i);
			}
				o = new Blob([data_blob], {type: 'image/png'});
			}
		}
		return o;
	},
	
	hide : function()
	{
		if ( this._frame ) this._frame.fadeOut( 200 );
		if ( this._blind ) this._blind.fadeOut( 200 );
	},
	
} );




/*************************************************
 L.TileLayer boundsのバグ修正
*************************************************/
L.TileLayer.prototype._tileShouldBeLoaded = function (tilePoint) {
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
		var tileSize = this._getTileSize(), //options.tileSize,
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
};






/*************************************************
 距離の計算
*************************************************/
GSI.Utils.DistanceCalculator = {};
GSI.Utils.DistanceCalculator.calc = function (from, to)
{
	try
	{
		var PI = 3.14159265358979;
		var params = {};
		
		// ラジアンへ
		params.phi1  = from.lat * PI / 180;
		params.lamb1 = from.lng * PI / 180; if (params.lamb1 < 0) params.lamb1 += PI * 2;
		params.phi2  = to.lat * PI / 180;
		params.lamb2 = to.lng * PI / 180; if (params.lamb2 < 0) params.lamb2 += PI * 2;
		
		// 計算
		params.lamb = params.lamb2 - params.lamb1;
		if (params.lamb > PI) params.lamb -= PI * 2;
		else if (params.lamb < -PI) params.lamb += PI * 2;

		if (params.lamb >= 0) params.seihan = 0;
		else if (params.lamb < 0)
		{
			params.seihan = 1;
			params.lamb = Math.abs(params.lamb);
		}
		
		// 楕円体原子 GRS80
		var daen = 2;
		var a = 6378137;
		var rf = 298.257222101;
		params.f = 1. / rf;
		
		params.a = a;
		params.lambd = PI - params.lamb;
		if (params.seihan == 0)
		{
			params.delta = params.phi2 - params.phi1;
			params.sigma = params.phi1 + params.phi2;
			params.u1 = Math.atan((1 - params.f) * Math.tan(params.phi1));
			params.u2 = Math.atan((1 - params.f) * Math.tan(params.phi2));
		}
		else if (params.seihan == 1)
		{
			params.delta = params.phi1 - params.phi2;
			params.sigma = params.phi1 + params.phi2;
			params.u1 = Math.atan((1 - params.f) * Math.tan(params.phi2));
			params.u2 = Math.atan((1 - params.f) * Math.tan(params.phi1));
		}

		params.sigmad = params.u1 + params.u2;
		params.deltad = params.u2 - params.u1;
		params.xi = Math.cos(params.sigmad / 2.);
		params.xid = Math.sin(params.sigmad / 2.);
		params.eta = Math.sin(params.deltad / 2.);
		params.etad = Math.cos(params.deltad / 2.);
		params.x = Math.sin(params.u1) * Math.sin(params.u2);
		params.y = Math.cos(params.u1) * Math.cos(params.u2);
		params.c__ = params.y * Math.cos(params.lamb) + params.x;
		params.d__1 = 1 - params.f;
		params.ep = params.f * (2 - params.f) / (params.d__1 * params.d__1);
		var zoneInfo = {
			zone : 0,
			theta : null
		};
		
		var dms2r = GSI.Utils.DistanceCalculator._dms2r;
		
		// Zoneの判断
		if (params.c__ >= 0)
		{
			zoneInfo.zone = 1;
			zoneInfo.theta = params.lamb * (params.f * params.y + 1);
		}
		else if (params.c__ < 0 && params.c__ >= -Math.cos(dms2r(PI,30000) * Math.cos(params.u1))) 
		{
			zoneInfo.zone = 2;
			zoneInfo.theta = params.lambd;
		}
		else if (params.c__ < -Math.cos(dms2r(PI,30000) * Math.cos(params.u1))) 
		{
			zoneInfo.zone = 3;
			GSI.Utils.DistanceCalculator._zone3(PI, params, zoneInfo);
		}
		
		params.theta = zoneInfo.theta;
		
		
		var distance = 0;
		if (zoneInfo.zone >= 1 && zoneInfo.zone <= 321) 
		{
			distance = GSI.Utils.DistanceCalculator._zone1(PI, params, zoneInfo);
		}
		else if (zoneInfo.zone == 322)
		{
			distance = GSI.Utils.DistanceCalculator._zone322(PI, params, zoneInfo);
		}
		else if (zoneInfo.zone == 323)
		{
			distance = GSI.Utils.DistanceCalculator._zone323(PI, params, zoneInfo);
		}
	}
	catch(ex)
	{
		console.log(ex);
	}
	
	return distance;
};

GSI.Utils.DistanceCalculator._dms2r = function(PI,dms)
{
	var dd, mm, ss, deg, hugou;

	if (dms > 0) {
		hugou = 1.;
	} else if (dms < 0) {
		hugou = -1;
	}
	dd = parseFloat(parseInt(Math.abs(dms) / 10000));
	mm = parseFloat(parseInt((Math.abs(dms) - dd * 10000) / 100));
	ss = Math.abs(dms) - dd * 10000 - mm * 100;
	deg = hugou * (dd + mm / 60 + ss / 3600);
	return deg * PI / 180.;
};


GSI.Utils.DistanceCalculator._zone1 = function(PI,params, zoneInfo)
{
	var d__1, d__2, d__3, d__4, d__5;
	
	var zero_ = function(a){
		if (Math.abs(a) < 1e-14) return 1e-14;
		else return a;
	};
	/* Local variables */
	var g, h__;
	var i__;
	var n0, aa, bb, dd, ee, ff, gg, jj, kk, zeta;
	//extern doublereal zero_(doublereal *);
	var dalp2, alpha, zetad, alpha2, sgamma, rgamma;
	//extern /* Subroutine */ int hanten_(void);
	var ssigma;
	//extern /* Subroutine */ int handan1_(void), handan2_(void);

/*     θの計算 */
	for (i__ = 1; i__ <= 100; ++i__)
	{
		if (zoneInfo.zone == 1)
		{
			d__1 = params.eta;
			d__2 = Math.cos(params.theta / 2.);
			d__3 = params.xi;
			d__4 = Math.sin(params.theta / 2.);
			g = Math.sqrt(d__1 * d__1 * (d__2 * d__2) + d__3 * d__3 * (d__4 * d__4));
			d__1 = params.etad;
			d__2 = Math.cos(params.theta / 2.);
			d__3 = params.xid;
			d__4 = Math.sin(params.theta / 2.);
			h__ = Math.sqrt(d__1 * d__1 * (d__2 * d__2) + d__3 * d__3 * (d__4 * d__4));
		}
		else
		{
			d__1 = params.eta;
			d__2 = Math.sin(params.theta / 2.);
			d__3 = params.xi;
			d__4 = Math.cos(params.theta / 2.);
			g = Math.sqrt(d__1 * d__1 * (d__2 * d__2) + d__3 * d__3 * (d__4 * d__4));
			d__1 = params.etad;
			d__2 = Math.sin(params.theta / 2.);
			d__3 = params.xid;
			d__4 = Math.cos(params.theta / 2.);
			h__ = Math.sqrt(d__1 * d__1 * (d__2 * d__2) + d__3 * d__3 * (d__4 * d__4));
		}
		ssigma = Math.atan(g / zero_(h__)) * 2;
		jj = g * 2 * h__;
		d__1 = h__;
		d__2 = g;
		kk = d__1 * d__1 - d__2 * d__2;
		sgamma = params.y * Math.sin(params.theta) / zero_(jj);
		d__1 = sgamma;
		rgamma = 1 - d__1 * d__1;
		zeta = rgamma * kk - params.x * 2;
		zetad = zeta + params.x;
		d__1 = params.f;
		dd = params.f * 0.25 * (params.f + 1) - d__1 * d__1 * 0.1875 * rgamma;
		d__1 = zeta;
		d__2 = rgamma;
		ee = (1 - dd * rgamma) * params.f * sgamma * (ssigma + dd * jj * (
			zeta + dd * kk * (d__1 * d__1 * 2 - d__2 * d__2)));
		if (zoneInfo.zone == 1)
		{
		    ff = params.theta - params.lamb - ee;
		}
		else
		{
		    ff = params.theta - params.lambd + ee;
		}
		if (Math.abs(ff) < 1e-14)
		{
		    break;
		}
		d__1 = sgamma;
		d__2 = sgamma;
		d__3 = params.f;
		gg = params.f * (d__1 * d__1) * (1 - dd * 2 * rgamma) + params.f * 
			zetad * (ssigma / zero_(jj)) * (1 - dd * rgamma + params.f *
			 0.5 * (d__2 * d__2)) + d__3 * d__3 * 0.25 * zeta * zetad;
		d__1 = 1 - gg;
		params.theta -= ff / zero_(d__1);
	}
		
/*     方位角の計算(zone=[1],[2,31,321]) */

	if (zoneInfo.zone == 1) 
	{
		alpha = Math.atan(params.xi * Math.tan(params.theta / 2.) / zero_(params.eta));
		dalp2 = Math.atan(params.xid * Math.tan(params.theta / 2.) / zero_(params.etad));
	}
	else
	{
		alpha = Math.atan(params.etad * Math.tan(params.theta / 2.) / zero_(params.xid));
		dalp2 = Math.atan(params.eta * Math.tan(params.theta / 2.) / zero_(params.xi));
	}
	if (alpha <= -1e-14 && params.lamb > 0.)
	{
		alpha += PI;
	}
	else if (alpha >= 1e-14 && params.lamb < 0.)
	{
		alpha += PI;
	}
	else if (alpha <= -1e-14 && params.lamb < 0.)
	{
		alpha += PI * 2;
	}

	var result = {};
	
    result.alpha1 = alpha - dalp2;
	if (zoneInfo.zone == 1)
	{
		alpha2 = alpha + dalp2;
	} else {
		alpha2 = PI - alpha - dalp2;
	}
	result.alp21 = PI + alpha2;
	if (result.alp21 < 0)
	{
		result.alp21 += PI * 2;
	} else if (result.alp21 >= PI * 2)
	{
		result.alp21 -= PI * 2;
	}

	if (Math.abs(params.lamb) < 1e-14)
	{
		GSI.Utils.DistanceCalculator._handan1(PI,params,zoneInfo,result);
	}
	if ((d__1 = Math.abs(params.lamb) - PI, Math.abs(d__1)) < 1e-14)
	{
		GSI.Utils.DistanceCalculator._handan2(PI,params,zoneInfo,result);
	}

	GSI.Utils.DistanceCalculator._hanten(PI,params,zoneInfo,result);
	
	
/*     測地線長の計算(zone=[1],[2,31,321]) */
    d__1 = Math.sqrt(params.ep * rgamma + 1) + 1;
    n0 = params.ep * rgamma / (d__1 * d__1);
    d__1 = n0;
    aa = (n0 + 1) * (d__1 * d__1 * 1.25 + 1);
    d__1 = n0;
    d__2 = Math.sqrt(params.ep * rgamma + 1) + 1;
    bb = params.ep * (1 - d__1 * d__1 * .375) / (d__2 * d__2);
    d__1 = rgamma;
    d__2 = zeta;
    d__3 = kk;
    d__4 = rgamma;
    d__5 = zeta;
    result.s = (1 - params.f) * params.a * aa * (ssigma - bb * jj * (zeta - 
	    bb * .25 * (kk * (d__1 * d__1 - d__2 * d__2 * 2) - bb * 
	    0.16666666666666666 * zeta * (1 - d__3 * d__3 * 4) * (d__4 * d__4 *
	     3 - d__5 * d__5 * 4))));
    return result.s;
};



GSI.Utils.DistanceCalculator._zone3 = function(PI, params, zoneInfo)
{
	var d__1, d__2, d__3, d__4;

	d__1 = Math.cos(params.u1);
	d__2 = Math.sin(params.u1);
	d__3 = params.f;
	d__4 = Math.sin(params.u1), d__4 *= d__4;
	zoneInfo.rr = params.f * PI * (d__1 * d__1) * (1 - params.f * 0.25 
		* (params.f + 1) * (d__2 * d__2) + d__3 * d__3 * 0.1875 * (d__4 * 
		d__4));
	zoneInfo.d1 = params.lambd * Math.cos(params.u1) - zoneInfo.rr;
	zoneInfo.d2 = Math.abs(params.sigmad) + zoneInfo.rr;
	zoneInfo.q = params.lambd / (params.f * PI);
	zoneInfo.f1 = params.f * .25 * (params.f * .5 + 1);
	
	d__1 = zoneInfo.q;
	zoneInfo.gamma0 = zoneInfo.q + zoneInfo.f1 * zoneInfo.q - zoneInfo.f1 * (d__1 * (d__1 * d__1));
	if (Math.abs(params.sigma) >= 1e-14)
	{
		zoneInfo.zone = 31;
		GSI.Utils.DistanceCalculator._zone31(PI, params, zoneInfo);
	}
	else if (Math.abs(params.sigma) < 1e-14)
	{
		zoneInfo.zone = 32;
		GSI.Utils.DistanceCalculator._zone32(PI, params, zoneInfo);
	}
	return 0;
}


GSI.Utils.DistanceCalculator._zone31 = function(PI, params, zoneInfo)
{
	var d__1, d__2, d__3;

	var j, k, j1, aa0, bb0, psi, psid;
	var psidd;
	
	
	var zero_ = function(a){
		if (Math.abs(a) < 1e-14) return 1e-14;
		else return a;
	};
	
	aa0 = Math.atan(zoneInfo.d1 / zero_(zoneInfo.d2));
	d__2 = zoneInfo.d1;
	d__3 = zoneInfo.d2;
	d__1 = Math.sqrt(d__2 * d__2 + d__3 * d__3);
	bb0 = Math.asin(zoneInfo.rr / zero_(d__1));
	psi = aa0 + bb0;
	d__1 = Math.cos(params.u1);
	j = zoneInfo.gamma0 / zero_(d__1);
	k = (zoneInfo.f1 + 1) * Math.abs(params.sigmad) * (1 - params.f * params.y) / (params.f * PI * zero_(params.y));
	d__1 = cos(psi);
	j1 = j / (k / zero_(d__1) + 1);
	psid = Math.asin(j1);
	d__1 = Math.cos(params.u2);
	psidd = Math.asin(Math.cos(params.u1) / zero_(d__1) * j1);
	d__1 = Math.cos(params.deltad / 2.0);
	params.theta = Math.atan(Math.tan((psid + psidd) / 2.0) * Math.sin(Math.abs(params.sigmad) / 2.0) / zero_(d__1)) * 2;
	return 0;
};


GSI.Utils.DistanceCalculator._zone32 = function(PI, params, zoneInfo)
{
	if (zoneInfo.d1 >= 1e-14) {
		zoneInfo.zone = 321;
		GSI.Utils.DistanceCalculator._zone321(PI, params, zoneInfo);
	} else if (abs(zoneInfo.d1) < 1e-14) {
		zoneInfo.zone = 322;
	} else if (zoneInfo.d1 <= -1e-14) {
		zoneInfo.zone = 323;
	}
	return 0;
};


GSI.Utils.DistanceCalculator._zone321 = function(PI, params, zoneInfo)
{
	params.theta = params.lambd;
	return 0;
};


/*************************************************
 Zone3(b2)における方位角，距離の計算
*************************************************/
GSI.Utils.DistanceCalculator._zone322 = function(PI,params, zoneInfo)
{
	var d__1;
	var n0, aa, alpha2, rgamma;
	var result = {};
	
	result.alpha1 = PI / 2.;
	alpha2 = PI / 2.;
	result.alp21 = PI * 1.5;
	GSI.Utils.DistanceCalculator._hanten(PI,params,zoneInfo,result);
	d__1 = Math.sin(params.u1);
	rgamma = d__1 * d__1;
	d__1 = Math.sqrt(params.ep * rgamma + 1) + 1;
	n0 = params.ep * rgamma / (d__1 * d__1);
	d__1 = n0;
	aa = (n0 + 1) * (d__1 * d__1 * 1.25 + 1);
	result.s = (1 - params.f) * params.a * aa * PI;
	return result.s;
};


/*************************************************
 Zone3(b3)における方位角，距離の計算
*************************************************/
GSI.Utils.DistanceCalculator._zone323 = function(PI,params, zoneInfo)
{
    var d__1;
    var i__;
    var m, n, w, n0, aa, dd, alpha2, rgamma, sgamma;
    for (i__ = 1; i__ <= 100; ++i__) {
		d__1 = zoneInfo.gamma0;
		rgamma = 1 - d__1 * d__1;
		d__1 = params.f;
		dd = params.f * .25 * (params.f + 1) - d__1 * d__1 * 0.1875 * rgamma;
		sgamma = zoneInfo.q / (1 - dd * rgamma);
		if ((d__1 = zoneInfo.gamma0 - sgamma, Math.abs(d__1)) < 1e-14) {
			break;
		}
		zoneInfo.gamma0 = sgamma;
	}
	m = 1 - zoneInfo.q / cos(params.u1);
	n = dd * rgamma / (1 - dd * rgamma);
	w = m - n + m * n;
	var result = {};
	
	if (w <= 0.) {
		result.alpha1 = PI / 2.0;
	} else {
		result.alpha1 = PI / 2.0 - Math.asin(Math.sqrt(w / 2.0)) * 2;
	}
	alpha2 = PI - result.alpha1;
	result.alp21 = PI + alpha2;
	GSI.Utils.DistanceCalculator._hanten(PI,params,zoneInfo,result);
	d__1 = Math.sqrt(params.ep * rgamma + 1) + 1;
	n0 = params.ep * rgamma / (d__1 * d__1);
	d__1 = n0;
	aa = (n0 + 1) * (d__1 * d__1 * 1.25 + 1);
	result.s = (1 - params.f) * params.a * aa * PI;
	return result.s;
};


/*************************************************
 経度差0度の方位角の判断
*************************************************/
GSI.Utils.DistanceCalculator._handan1 = function(PI,params,zoneInfo,result)
{
	if (params.delta >= 0.) {
		result.alpha1 = 0.;
		result.alp21 = PI;
	} else if (params.delta < 0.) {
		result.alpha1 = PI;
		result.alp21 = 0.;
	}
	return 0;
};


/*************************************************
 経度差180度の方位角の判断
*************************************************/
GSI.Utils.DistanceCalculator._handan2 = function(PI,params,zoneInfo,result)
{
	if (params.sigma >= 0) {
		result.alpha1 = 0;
		result.alp21 = 0;
	} else if (params.sigma < 0) {
		result.alpha1 = PI;
		result.alp21 = PI;
	}
	return 0;
};




/*************************************************
 方位角の反転
*************************************************/
GSI.Utils.DistanceCalculator._hanten = function(PI,params,zoneInfo,result)
{
	if (params.seihan == 1) {
		var alphax = result.alpha1;
		result.alpha1 = result.alp21;
		result.alp21 = alphax;
	}
	return 0;
} /* hanten_ */







$(document).ready( initialize );