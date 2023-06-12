var CONFIG = {};

// この状態で表示された時はcookieを優先

CONFIG.DEFAULTHASH = /#5\/36.10461[\d]*\/140.08455[\d]*\/&base=std&ls=std&disp=1&vs=c1j0h0k0l0u0t0z0r0s0m0f1/g;

//
CONFIG.USECOOKIE = true;
CONFIG.COOKIEKEY_USECOOKIE = "GSIMAPS-USECOOKIE";
CONFIG.COOKIEKEY_HASH = "GSIMAPS-HASHVALUE";
CONFIG.COOKIEKEY_HASH_PREV = "GSIMAPS-HASHVALUE-PREV";

// PC版URL
CONFIG.URL = "./";
// モバイル版URL
CONFIG.MOBILE_FILENAME = "index_m.html";
CONFIG.MOBILEURL = "./" + CONFIG.MOBILE_FILENAME;

// maxZoom設定
CONFIG.MAXZOOM = 18;

CONFIG.ISPREVIEWSITE = false;

// 情報リストからレイヤーを追加した時、選択中の情報を開くかどうか
CONFIG.SHOWVIEWLISTAFTERLAYERSELECT = true;

// 外部タイルのZL選択範囲
CONFIG.OUTSIDETILE = {"ZOOMRANGE" : { "MIN":2, "MAX" : 24} };

CONFIG.layersTab = null;
CONFIG.layersTabUrl = "./layers_txt/tab.txt";

CONFIG.layerBase = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseDefaultID = "std";
CONFIG.layerBaseFolder = "ベースマップ";
CONFIG.layerBaseFolderSYS = "GSI.MAP.BASE";
CONFIG.layersURL = './layers_txt/layers.txt';
CONFIG.layerBaseFolderVisible = false; // ベースマップフォルダを表示するか
CONFIG.baseMapDescription = {
  "std": "基本となる地図。",
  "pale": "淡い配色の地図。",
  "blank": "海岸線と、都道府県・市町村境界のみを表示した地図。",
  "english": "English annotation map",
  "ort": "<div class=\"gsi_layerinfo_subtitle\">ズームレベル2～8:「世界衛星モザイク画像」<br>ズームレベル9～13:「全国ランドサットモザイク画像」<br>ズームレベル14～18:「シームレス空中写真」<br>シームレス空中写真は、国土地理院が保有する複数種別の空中写真から、各地区における最新の写真を抽出・組み合わせて作成した写真レイヤです。</div><a target=\"_blank\" href=\"https://cyberjapandata.gsi.go.jp/legend/seamlessphoto.pdf\">（詳細解説）</a><div class=\"gsi_layerinfo_copy\">(c)国土地理院</div>"
}


CONFIG.HANREILIST = {
  "gsjGeomap_seamless200k_v2": {
    "url": "https://gbank.gsj.jp/seamless/v2/api/1.2.1/legend.json",
    "layer": {
      "url": "https://gbank.gsj.jp/seamless/v2/api/1.2/tiles/{z}/{y}/{x}.png",
      "minZoom": 3,
      "maxZoom": 13
    }
  },
  "vlcd_meakan": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_meakan/vlcd_meakan.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_meakan/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_tokachi": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_tokachi/vlcd_tokachi.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_tokachi/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_tarumae": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_tarumae/vlcd_tarumae.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_tarumae/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_usu": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_usu/vlcd_usu.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_usu/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_hokoma": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_hokoma/vlcd_hokoma.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_hokoma/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_iwate": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_iwate/vlcd_iwate.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_iwate/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_akitakoma": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_akitakoma/vlcd_akitakoma.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_akitakoma/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_chokai": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_chokai/vlcd_chokai.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_chokai/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_kurikoma": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_kurikoma/vlcd_kurikoma.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_kurikoma/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_adatara": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_adatara/vlcd_adatara.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_adatara/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_bandai": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_bandai/vlcd_bandai.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_bandai/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_kusatsu": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_kusatsu/vlcd_kusatsu.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_kusatsu/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_asamayama": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_asamayama/vlcd_asamayama.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_asamayama/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_niigatayake": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_niigatayake/vlcd_niigatayake.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_niigatayake/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_ontake": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_ontake/vlcd_ontake.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_ontake/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_fuji": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_fuji/vlcd_fuji.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_fuji/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_hakone": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_hakone/vlcd_hakone.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_hakone/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_izuo": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_izuo/vlcd_izuo.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_izuo/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_miyake": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_miyake/vlcd_miyake.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_miyake/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_hachijojima": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_hachijojima/vlcd_hachijojima.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_hachijojima/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_kuju": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_kuju/vlcd_kuju.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_kuju/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_aso": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_aso/vlcd_aso.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_aso/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_unzen": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_unzen/vlcd_unzen.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_unzen/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_kiri": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_kiri/vlcd_kiri.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_kiri/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_sakura": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_sakura/vlcd_sakura.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_sakura/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_satsumaio": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_satsumaio/vlcd_satsumaio.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_satsumaio/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_satsumatake": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_satsumatake/vlcd_satsumatake.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_satsumatake/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_suwanosejima": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_suwanosejima/vlcd_suwanosejima.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_suwanosejima/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "vlcd_akitayake": {
    "url": "https://maps.gsi.go.jp/xyz/vlcd_akitayake/vlcd_akitayake.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/vlcd_akitayake/{z}/{x}/{y}.png",
      "minZoom": 10,
      "maxZoom": 16
    }
  },
  "swale": {
    "url": "https://maps.gsi.go.jp/xyz/swale/swale.csv",
    "layer": {
      "url": "https://maps.gsi.go.jp/xyz/swale/{z}/{x}/{y}.png",
      "minZoom": 5,
      "maxZoom": 16
    }
  }
};


CONFIG.layerEvacuationFolder = "指定緊急避難場所";
CONFIG.layerEvacuationFolderSYS = "GSI.MAP.EVAC";
CONFIG.layerEvacuationHeader = "skhb";
CONFIG.layerEvacuationIsConfirmOK = false;

CONFIG.DisasterLoreFolder = "自然災害伝承碑";
CONFIG.DisasterLoreFolderSYS = "GSI.MAP.DISASTER.LORE";
CONFIG.DisasterLoreHeader = "disaster_lore";
CONFIG.DisasterLoreAll = "disaster_lore_all";

CONFIG.VolcanoTerrainFolder = "火山地形分類データ";
CONFIG.VolcanoTerrainFolderSYS = "GSI.MAP.VOLCANO.TERRAIN";
CONFIG.VolcanoTerrainHeader = "volcano_terrain";

// 確認表示が必要なレイヤー
CONFIG.CONFIRM_LAYERS = {
  "kokuarea": { // このグループの一意のID
    "title": "留意事項", // 確認ダイアログに表示するタイトル

    // 表示するメッセージ
    "message": "航空法第132条で規定する無人航空機の飛行禁止空域のうち、航空法施行規則第236条第1号から第3号までに掲げる空域（空港等の周辺空域）を表示します。緑色の面は、上空での飛行が禁止される制限表面を表します。紫色の面は、上空及びその下の空域での飛行が禁止される進入表面及び転移表面並びに上空の空域で飛行が禁止される空港等の敷地を表します。<br>" +
      "なお、この情報には誤差が含まれている場合があります。また空港等の敷地については工事等により変更がある場合がありますので、境界付近等正確な空域については空港等の管理者に確認願います。<br>" +
      "詳細については、<a target='_blank' href='http://www.mlit.go.jp/koku/koku_tk10_000003.html'>国土交通省ホームページ</a>で確認してください。",
    "withBlend": false, // 合成するかどうか
    "layers": [ // レイヤーのIDを配列で指定
      "kokuarea"
    ]
  },
  "red": {
    "title": "ご利用上の注意",
    "message": "赤色立体地図及びオルソ立体地図はアジア航測株式会社の特許（第3670274号等）を使用して作成したものです。" +
      "赤色立体地図及びオルソ立体地図を利用される場合は、<a target='_blank' href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html'>国土地理院コンテンツ利用規約</a>に記載のとおり、" +
      "<a target='_blank' href='https://www.rrim.jp/researcher/'>アジア航測株式会社の許諾条件</a>を確認してご利用下さい。",
    "withBlend": true,
    "layers": [
      "red",
      "20190121_sekisyokurittai_kusatsushiranesan",
      "20190121_olsorittai_kusatsushiranesan",
      "oosimared",
      "miyakejimared",
      "20180906hokkaido_atsuma_sekishoku",
      "tarumaered",
      "20180130_kusatsushiranesan_sekishokurittai",
      "20180309_sekisyokurittai_kirishima",
      "kuchinoerabured",
      "2018_sekisyokurittai_azumayama",
      "20190807asama_sekisyoku"
    ]
  },
  "lakechart": {
    "title": "免責事項・ご利用上の注意",
    "message": "湖沼データの湖岸線等は湖沼調査時点のものであり電子地形図と異なる場合があります。​" +
      "湖沼データの測量年は「i」ボタンの選択メニューからお調べいただくか、​<a target='_blank' href='https://www.gsi.go.jp/kankyochiri/koshouchousa-list.html'>こちら</a>で確認できます。",
    "withBlend": true,
    "layers": [
      "lakedata",
    ]
  }
};


// 初期状態で合成をOnにするレイヤーID
// 火山地形分類データは排他選択(50431行目付近)と同じ箇所で処理
CONFIG.BLENDLAYERS = {
  "relief": true,
  "relief_free": true,
  "swale": true,
  "gsjGeomap_seamless200k_v2": true
};


// 自分で作る色別標高図
CONFIG.FREERELIEFID = "relief_free";

// 自分で作る色別表構図のカラーパターン
// HTMLカラー（#付きの7文字）or{r,g,b}
CONFIG.FREERELIEF_COLORPATTERNS = [
  {
    "title": "デフォルト",
    "colors": [
      "#0000FF",
      "#0095FF",
      "#00EEFF",
      "#91FF00",
      "#FFFF00",
      "#FF8C00",
      "#FF4400"
    ]
  },
  {
    "title": "黒→白",
    "colors": [
      { "r": 70, "g": 70, "b": 70 },
      { "r": 101, "g": 101, "b": 101 },
      { "r": 132, "g": 132, "b": 132 },
      { "r": 163, "g": 163, "b": 163 },
      { "r": 193, "g": 193, "b": 193 },
      { "r": 224, "g": 224, "b": 224 },
      { "r": 255, "g": 255, "b": 255 }]
  },
  {
    "title": "青→白",
    "colors": [
      { "r": 0, "g": 0, "b": 255 },
      { "r": 43, "g": 43, "b": 255 },
      { "r": 85, "g": 85, "b": 255 },
      { "r": 128, "g": 128, "b": 255 },
      { "r": 170, "g": 170, "b": 255 },
      { "r": 213, "g": 213, "b": 255 },
      { "r": 255, "g": 255, "b": 255 }]
  },
  {
    "title": "赤→白",
    "colors": [
      { "r": 255, "g": 0, "b": 0 },
      { "r": 255, "g": 43, "b": 43 },
      { "r": 255, "g": 85, "b": 85 },
      { "r": 255, "g": 128, "b": 128 },
      { "r": 255, "g": 170, "b": 170 },
      { "r": 255, "g": 213, "b": 213 },
      { "r": 255, "g": 255, "b": 255 }
    ]
  }
];

// 色別表構図の最低標高色分け時の色
CONFIG.FREERELIEF_AUTOLOWCOLOR = "#0000FF";

//キャッシュ（Layers.txt）
CONFIG.LOADLAYERSTXTCACHE = false;

//キャッシュ（ココタイル）
CONFIG.LOADCOCOTILECACHE = true;

// トップメッセージ
CONFIG.TOPMESSAGE = null;
// 閉じた時のID != 現在のID または EXPIRES時間過ぎた場合にお知らせ復活

// 初期位置
CONFIG.DEFAULT = { CENTER: [36.104611, 140.084556], ZOOM: 5 };

// レイヤータイプリスト
CONFIG.LAYERTYPELIST = {
  "kml": { caption: "KML", isTile: false },
  "tile": { caption: "タイル", isTile: true, isTileImage: true },
  "geojson": { caption: "GeoJSON", isTile: false },
  "topojson": { caption: "TopoJSON", isTile: false },
  "geojson_tile": { caption: "GeoJSONタイル", isTile: true },
  "topojson_tile": { caption: "TopoJSONタイル", isTile: true },
  "tms": { caption: "TMS", isTile: true, isTileImage: true },
  "multiLayer": { caption: "複数レイヤ", isTile: false },
  "geotiff": { caption: "GeoTiff", isTile: false },
  "videooverlay": { caption: "VideoOverlay", isTile: false }
};

// Globe
CONFIG.GLOBEURL = "./globe/index_globe.html";


// 国土地理院距離計算式の利用のデフォルト値
CONFIG.USEGSIDISTANCE = true;

// ココタイルONOFFのデフォルト値
CONFIG.COCOTILEVISIBLE = false;

//ココタイルURL設定
// 複数設定例
CONFIG.COCOTILEURL = ['https://cyberjapandata-t1.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t2.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://cyberjapandata-t3.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv', 'https://insarmap.gsi.go.jp/xyz/cocotile/{z}/{x}/{y}.csv'];

// リストにレイヤーのタイプを表示するかどうか（デバッグ用）
CONFIG.VISIBLELAYERTYPE = false;

// IE10,11のグレースケールを利用するか
CONFIG.USEIE10GRAYSCALE = false;
CONFIG.USEIE11GRAYSCALE = true;

// 検索結果クリック時のズームレベル
CONFIG.SEARCHRESULTCLICKZOOM = 15;

// 検索結果のマーカー表示件数(-1で全て)
CONFIG.SEARCHRESULTMAXMARKERNUM = -1;

// 緯度経度グリッドスタイル
CONFIG.LATLNGGRIDSTYLE = {
  color: "#1D417A",
  weight: 2,
  opacity: 1,
  fill: false,
  fillOpacity: 1,
  dashArray: [3, 3]
};
CONFIG.LATLNGGRIDLABELCLASSNAME = 'latlnggrid_label';

// レイヤーツリーの階層を記憶
CONFIG.LAYERTREEDIALOGKEEPCURRENT = false;

// UTMグリッドスタイル
CONFIG.UTMGRIDSTYLE = {
  color: "#FF0000",
  weight: 2,
  opacity: 1,
  fill: false,
  fillOpacity: 1,
  dashArray: [3, 3],
  visible: false
};
CONFIG.UTMGRIDLABELCLASSNAME = 'utmgrid_label';
CONFIG.UTMGRIDBOUNDARYLABEL_HIDEMETER = true;

// 磁北線の数
CONFIG.JIHOKULINECOUNT = 3;

// 磁北線のスタイル
CONFIG.JIHOKULINESTYLE = {
  "color": ' #ff0000',
  "weight": 1,
  "opacity": 0.8,
  "fill": false,
  "fillOpacity": 1,
  "clickable": false
};

// 磁北線が表示される閾値（ZLがこの値以上で表示される）
CONFIG.JIHOKULINEAVAILABLEZOOM = 11;

CONFIG.DISABLE_KOKUDOKIHONZUZUKAKU = true;

// 印刷用紙サイズ
CONFIG.USELARGEPAPERSIZE = false;
CONFIG.PAPERSIZE = {
  "A4_portrait": { w: 650, h: 900 },  //A4縦
  "A4_landscape": { w: 950, h: 550 }, //A4横

  "A3_portrait": { w: 950, h: 1350 },  //A3縦
  "A3_landscape": { w: 1400, h: 900 },  //A3横

  "A2_portrait": { w: 1400, h: 2000, large: true },  //A2縦
  "A2_landscape": { w: 2050, h: 1350, large: true },  //A2横

  "A1_portrait": { w: 2050, h: 2950, large: true },  //A1縦
  "A1_landscape": { w: 3000, h: 2000, large: true },  //A1横

  "A0_portrait": { w: 3000, h: 4270, large: true },  //A0縦
  "A0_landscape": { w: 4320, h: 2950, large: true }  //A0横
};




// ダイアログ表示等エフェクト
CONFIG.EFFECTS = {
  // メニュー表示エフェクト
  MENU: {
    ROOT: {
      animation: "slide",
      option: { "easing": "linear" },
      speed: "fast"
    },
    OTHER: {
      animation: "scale",
      option: { "direction": "both", "easing": "linear" },
      speed: "fast"
    }
  },
  // ダイアログ表示エフェクト
  DIALOG: {
    animation: "puff",
    option: { "percent": 10 },
    speed: "fast"
  }

};

// サークル→ポリゴンの角数/2
CONFIG.CIRCLETOPOLYGONNUMSIDES = 160;


// パラメータ用
CONFIG.PARAMETERNAMES = {
  CENTERCROSS: 'centercross',
  ZOOMGUIDE: 'zoomguide',
  JIHOKULINE: 'jihokuline',
  TOUKYOKEN: 'toukyoken',
  HOUILINE: 'houiline',
  LATLNGGRID: 'latlnggrid',
  UTMGRID: 'utmgrid',
  TILEGRID: 'tilegrid',
  AREAMESH: 'areamesh',
  T25000GRID: 't25000grid',
  CHIIKIMESH: 'chiikimesh',
  KOKUDOKIHONZUKAKU: 'kokudokihonzukaku',
  MINIMAP: 'minimap',
  FOOTER: 'footer',
  COCOTILE: 'cocotile',
  CLICKMOVE: 'clickmove',
  MULTIPOPUP: 'multipopup',
  PANELOVERLAP: 'paneloverlap',
  HIGHQUALITY: 'highquality',
  CONTEXTMENUOVERLAP: 'contextmenuoverlap',
  USEGSIDISTANCE: 'usegsidistance',
  SPLITWINDOW: 'splitwindow',
  COMPAREMAP: 'comparemap',
  SAVESTATE: 'savestate'
};

CONFIG.QUERYPARAMETER = {};
CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.CENTERCROSS] = {
  prefix: 'c',
  settingName: 'centerCross'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.ZOOMGUIDE] = {
  prefix: 'g',
  settingName: 'zoomGuide'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.JIHOKULINE] = {
  prefix: 'j',
  settingName: 'jihokuLine'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.HOUILINE] = {
  prefix: 'h',
  settingName: 'houiLine'
};


CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.TOUKYOKEN] = {
  prefix: 'k',
  settingName: 'toukyoKen'
};


CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.LATLNGGRID] = {
  prefix: 'l',
  settingName: 'latLngGrid'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.UTMGRID] = {
  prefix: 'u',
  settingName: 'utmGrid'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.TILEGRID] = {
  prefix: 't',
  settingName: 'tileGrid'
};
CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.T25000GRID] = {
  prefix: 'z',
  settingName: 't25000Grid'
};
CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.CHIIKIMESH] = {
  prefix: 'r',
  settingName: 'chiikiMesh'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.SPLITWINDOW] = {
  prefix: 's',
  settingName: 'splitWindow'
};
CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.COMPAREMAP] = {
  prefix: 'm',
  settingName: 'compareMap'
};


CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.MINIMAP] = {
  prefix: 'm',
  settingName: 'miniMap'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.FOOTER] = {
  prefix: 'f',
  settingName: 'footer'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.COCOTILE] = {
  prefix: 't',
  settingName: 'cocoTile'
};

CONFIG.QUERYPARAMETER[CONFIG.PARAMETERNAMES.CLICKMOVE] = {
  prefix: 'v',
  settingName: 'clickMove'
};

CONFIG.HIDDENCONTROLPARAMETER = {
  INFOMENU: 'i',
  FUNCMENU: 'f',
  HEADER: 'h',
  CONTEXTMENU: 'c',
  BASEMAPSELECTOR: 'b',
  ALL: 'all'
};

CONFIG.DIALOGPARAMETER = {
  VIEWLISTDIALOG: 'v',
  LAYERTREEDIALOG: 'l',
  LEFTPANEL: 'm',
};

// GeoJSON 独自パラメータ
CONFIG.GEOJSONSPECIALKEYS = {
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


var vs = window.navigator.appVersion.toLowerCase();
var ua = window.navigator.userAgent.toLowerCase();

// サーバーサイドAPI
CONFIG.SERVERAPI = {};

CONFIG.SERVERAPI.GETADDR = "https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
CONFIG.SERVERAPI.CHIMEI_SEARCH = "https://msearch.gsi.go.jp/address-search/AddressSearch";
CONFIG.SERVERAPI.CHIMEI_SEARCH_ADDITIONALPARAMS = {
  "lang": "ja,en",
  "zl": "T",
  "ilvl": "T",
  "sort_il": "1"
};

//for IE9
if ((ua.indexOf("msie") >= 0) && (vs.indexOf("msie 9") >= 0)) {
  CONFIG.SERVERAPI.GETADDR = "http://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress";
  CONFIG.SERVERAPI.CHIMEI_SEARCH = "http://msearch.gsi.go.jp/address-search/AddressSearch";
}

/************************************************************************
 設定：メニュー：ヘルプ
 ************************************************************************/
CONFIG.HELPMENU = [
  { 'Moji': 'ヘルプ', 'Img': './image/help/help_icon.png', 'Link': 'https://maps.gsi.go.jp/help/' },
  { 'Moji': 'Twitter', 'Img': './image/help/twitter.png', 'Link': 'https://twitter.com/gsi_cyberjapan' },
  { 'Moji': 'GitHub', 'Img': './image/help/github.png', 'Link': 'https://github.com/gsi-cyberjapan' },
  { 'Moji': 'パートナーネットワーク', 'Img': './image/help/partner_icon.png', 'Link': 'https://maps.gsi.go.jp/pn/' },
  { 'Moji': '国土地理院トップ', 'Img': './image/help/gsi_top.png', 'Link': 'http://www.gsi.go.jp/' }
];


/************************************************************************
 設定：グリッド（ズームレベル対応）
 ************************************************************************/
// 緯度経度グリッド
CONFIG.LATLNGGRID = {
  CONDITION: [
    { zoom: 2, grid: 3600 * 40 },
    { zoom: 3, grid: 3600 * 40 },
    { zoom: 4, grid: 3600 * 20 },
    { zoom: 5, grid: 3600 * 10 },
    { zoom: 6, grid: 3600 * 5 },
    { zoom: 7, grid: 3600 * 3 },
    { zoom: 8, grid: 3600 * 2 },
    { zoom: 9, grid: 3600 },
    { zoom: 10, grid: 60 * 30 },
    { zoom: 11, grid: 60 * 20 },
    { zoom: 12, grid: 60 * 10 },
    { zoom: 13, grid: 60 * 3 },
    { zoom: 14, grid: 60 * 2 },
    { zoom: 15, grid: 60 },
    { zoom: 16, grid: 30 },
    { zoom: 17, grid: 20 },
    { zoom: 18, grid: 10 },
    { zoom: 99, grid: 10 }
  ]
};

// UTMグリッド
CONFIG.UTMGRID = {
  CONDITION: [
    { zoom: 7, grid: 'a' },          //  7以下 広域
    { zoom: 10, grid: 100 * 1000 }, // 10以下 100km
    { zoom: 11, grid: 20 * 1000 },
    { zoom: 12, grid: 10 * 1000 },
    { zoom: 13, grid: 5 * 1000 },
    { zoom: 14, grid: 3 * 1000 },
    { zoom: 15, grid: 1 * 1000 },
    { zoom: 16, grid: 500 },
    { zoom: 17, grid: 250 },
    { zoom: 18, grid: 100 },
    { zoom: 99, grid: 100 }
  ]
};

CONFIG.USEATTRPANEL = true;


CONFIG.LAYERTREESEARCHLIST = [
  "空中写真・衛星画像",
  "主題図",
  "基準点・測地観測",
  "災害関連(地震、台風・豪雨等、火山)",
  "他機関の情報",
  "ベクトルタイル提供実験",
  "ベースマップ",
  "更新情報",
  "諸元情報",
  "1970年代",
  "2000年代",
  "昭和",
  "平成",
  "ヘリ",
  "航空機",
  "衛星",
  "UAV",
  "写真判読",
  "地形判読",
  "河川・湖",
  "沿岸",
  "磁気",
  "地殻変動",
  "地すべり",
  "断層",
  "地震",
  "台風",
  "大雨",
  "火山",
  "基図",
  "土地利用",
  "災害対策",
  "全球",
  "南極",
  "全国",
  "関東地方",
  "茨城県",
  "トピック"
];

/************************************************************************
 設定：作図
 ************************************************************************/
CONFIG.SAKUZU = {

  SYMBOL: {
    URL: "https://maps.gsi.go.jp/portal/sys/v4/symbols/",
    FILES: [
      // 汎用記号（●（光沢）、●、○、■（影付き）、■、×、▲（影付き）、△、★）
      '080.png', '081.png', '082.png', '083.png', '805.png', '806.png', '807.png', '808.png', '809.png', '810.png',
      '076.png', '077.png', '078.png', '079.png', '395.png', '396.png', '397.png', '398.png', '399.png', '400.png',
      '097.png', '098.png', '099.png', '100.png', '389.png', '390.png', '391.png', '392.png', '393.png', '394.png',
      '084.png', '085.png', '086.png', '087.png', '811.png', '812.png', '813.png', '814.png', '815.png', '816.png',
      '088.png', '089.png', '090.png', '091.png', '817.png', '818.png', '819.png', '820.png', '821.png', '822.png',
      '092.png', '093.png', '094.png', '095.png', '096.png', '695.png', '696.png', '697.png', '698.png', '699.png',
      '101.png', '102.png', '103.png', '104.png', '823.png', '824.png', '825.png', '826.png', '827.png', '828.png',
      '105.png', '106.png', '107.png', '108.png', '829.png', '830.png', '831.png', '832.png', '833.png', '834.png',
      '317.png', '318.png', '319.png', '316.png', '320.png', '800.png', '801.png', '802.png', '803.png', '804.png',

      // 汎用記号（その他）
      '312.png', '313.png', '363.png',
      '337.png', '338.png', '339.png', '340.png', '341.png', '342.png', '343.png', '344.png', '345.png', '346.png',
      '347.png', '348.png', '349.png', '350.png', '351.png', '352.png', '353.png', '354.png', '355.png', '356.png',
      '357.png', '358.png', '359.png', '360.png', '361.png', '362.png',
      '213.png', '214.png', '168.png', '169.png', '170.png', '171.png',
      '324.png', '332.png', '326.png', '331.png', '321.png', '329.png', '325.png', '330.png', '323.png', '334.png',
      '327.png', '333.png', '322.png', '335.png', '328.png', '336.png',
      '180.png', '188.png', '181.png', '182.png', '183.png', '184.png', '185.png', '186.png', '187.png', '189.png',
      '373.png', '377.png', '379.png', '382.png', '378.png', '371.png', '381.png', '376.png', '375.png', '372.png',
      '374.png', '380.png', 'dot.png',

      // 数字
      '700.png', '701.png', '702.png', '703.png', '704.png', '705.png', '706.png', '707.png', '708.png', '709.png', '710.png',
      '205.png', '201.png', '202.png', '203.png', '204.png',
      '206.png', '207.png', '208.png',
      '209.png', '210.png', '211.png', '212.png',
      '215.png', '216.png', '217.png',
      '457.png', '458.png', '459.png', '460.png', '461.png', '462.png', '463.png', '464.png', '465.png', '466.png',

      // 交通
      '190.png', '005.png', '067.png', '122.png', '123.png', '124.png', '019.png', '020.png', '015.png', '014.png',
      '138.png', '137.png', '157.png', '158.png', '159.png', '160.png', '161.png',
      '018.png', '072.png', '017.png', '016.png', '073.png', '074.png', '075.png', '049.png', '009.png', '040.png',
      '066.png', '057.png', '068.png',

      // 施設
      '001.png', '002.png', '003.png', '004.png', '006.png', '007.png', '008.png', '010.png', '011.png', '012.png',
      '035.png', '036.png', '037.png', '038.png', '128.png', '134.png', '139.png', '111.png', '114.png', '109.png',
      '135.png', '129.png', '130.png', '131.png', '132.png', '133.png', '136.png', '013.png', '021.png', '022.png',
      '023.png', '024.png', '026.png', '027.png', '028.png', '029.png', '121.png', '034.png', '033.png', '032.png',
      '116.png', '115.png', '025.png', '030.png', '031.png', '039.png', '042.png', '043.png', '044.png', '045.png',
      '046.png', '047.png', '048.png', '110.png', '041.png', '112.png', '113.png', '117.png', '119.png', '118.png',
      '120.png', '125.png', '126.png', '127.png', '140.png', '051.png', '050.png',
      '071.png', '150.png', '151.png', '152.png', '153.png', '154.png', '155.png', '156.png', '052.png', '053.png',
      '141.png', '069.png', '056.png', '058.png', '059.png', '060.png', '061.png', '062.png', '063.png', '064.png',
      '065.png', '142.png', '143.png', '144.png', '145.png', '146.png', '147.png', '148.png', '149.png', '070.png',
      '162.png', '163.png', '165.png', '164.png', '166.png', '167.png',
      '054.png', '055.png', '364.png', '315.png', '314.png', '365.png', '200.png', '476.png',

      // 災害
      '449.png', '447.png', '446.png', '445.png', '438.png', '437.png', '436.png', '300.png',
      '301.png', '302.png', '303.png', '304.png', '305.png', '306.png', '307.png',
      '308.png', '309.png', '310.png', '311.png',
      '1101.png', '1102.png', '1103.png', '1104.png', '1105.png', '1106.png', '1107.png', '1108.png'
    ],
    ICONSIZE: [20, 20],
    ICONANCHOR: [10, 10],
    DEFAULTICON: '080.png',
    INIT_DEFAULTICON: '080.png',
    ICON_SCALE: 1,
    INIT_ICON_SCALE: 1
  },



  FONTSIZELIST: [
    8, 9, 9.5, 10, 10.5, 11, 12, 15, 18, 19, 20, 24, 32, 48, 64, 92
  ]
};


CONFIG.SAKUZU.LINEDASHARRAY = {
  "dash": [4, 2],
  "dot": [1, 2]
};




/*******************************************************
 標高タイルのエリア
   GSI.DEMLoader.DEMAREA
   GSI.DEMLoader.DEMAREA2
   GSI.DEMLoader.DEMAREA3
   ※それぞれ上記ハッシュにコピーされ
   CONFIG.DEMAREA,CONFIG.DEMAREA2,CONFIG.DEMAREA3は削除される
*******************************************************/
CONFIG.DEMAREA = [
  "8/215/108",
  "8/215/109",
  "8/215/110",
  "8/216/108",
  "8/216/109",
  "8/216/110",
  "8/217/109",
  "8/218/107",
  "8/218/108",
  "8/219/101",
  "8/219/102",
  "8/219/103",
  "8/219/104",
  "8/219/105",
  "8/219/106",
  "8/219/107",
  "8/219/108",
  "8/220/101",
  "8/220/102",
  "8/220/103",
  "8/220/104",
  "8/220/105",
  "8/220/106",
  "8/220/107",
  "8/221/101",
  "8/221/102",
  "8/221/103",
  "8/221/104",
  "8/221/105",
  "8/221/108",
  "8/221/109",
  "8/221/110",
  "8/221/99",
  "8/222/100",
  "8/222/101",
  "8/222/102",
  "8/222/103",
  "8/223/100",
  "8/223/101",
  "8/223/102",
  "8/224/100",
  "8/224/101",
  "8/224/102",
  "8/224/113",
  "8/224/99",
  "8/225/100",
  "8/225/101",
  "8/225/102",
  "8/225/98",
  "8/225/99",
  "8/226/100",
  "8/226/101",
  "8/226/102",
  "8/226/98",
  "8/226/99",
  "8/227/100",
  "8/227/101",
  "8/227/102",
  "8/227/103",
  "8/227/104",
  "8/227/105",
  "8/227/93",
  "8/227/94",
  "8/227/95",
  "8/227/96",
  "8/227/97",
  "8/227/98",
  "8/227/99",
  "8/228/100",
  "8/228/107",
  "8/228/108",
  "8/228/109",
  "8/228/110",
  "8/228/91",
  "8/228/92",
  "8/228/93",
  "8/228/94",
  "8/228/95",
  "8/228/96",
  "8/228/97",
  "8/228/98",
  "8/228/99",
  "8/229/107",
  "8/229/108",
  "8/229/91",
  "8/229/92",
  "8/229/93",
  "8/229/94",
  "8/229/95",
  "8/229/97",
  "8/230/92",
  "8/230/93",
  "8/230/94",
  "8/231/92",
  "8/231/93",
  "8/231/94",
  "8/232/91",
  "8/232/92",
  "8/232/93",
  "8/233/91",
  "8/233/92",
  "8/237/110"
];
CONFIG.DEMAREA2 = [
  "9/442/198",
  "9/438/202",
  "9/438/203",
  "9/439/202",
  "9/439/203",
  "9/457/182",
  "9/458/182",
  "9/442/197"
];

CONFIG.DEMAREA3 = [
  "10/879/406",
  "10/879/407"
];

CONFIG.CHIIKIMESH = {};
CONFIG.CHIIKIMESH.STYLEURL =  "https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/style.js";
CONFIG.CHIIKIMESH.GEOJSONURL = 'https://cyberjapandata.gsi.go.jp/xyz/chiikimesh/{z}/{x}/{y}.geojson';

CONFIG.DEMURLLIST = [
  {
    "title": "DEM5A",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5a_png/{z}/{x}/{y}.png",
    "minzoom": 9,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM5B",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5b_png/{z}/{x}/{y}.png",
    "minzoom": 9,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM5C",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5c_png/{z}/{x}/{y}.png",
    "minzoom": 9,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM10B",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png",
    "minzoom": 9,
    "maxzoom": 14,
    "fixed": 0
  },
  {
    "title": "DEMGM",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/demgm_png/{z}/{x}/{y}.png",
    "minzoom": 8,
    "maxzoom": 8,
    "fixed": 0
  }
];

CONFIG.FOOTERDEMURLLIST = [
  {
    "title": "DEM5A",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5a_png/{z}/{x}/{y}.png",
    "minzoom": 15,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM5B",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5b_png/{z}/{x}/{y}.png",
    "minzoom": 15,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM5C",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem5c_png/{z}/{x}/{y}.png",
    "minzoom": 15,
    "maxzoom": 15,
    "fixed": 1
  },
  {
    "title": "DEM10B",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png",
    "minzoom": 14,
    "maxzoom": 14,
    "fixed": 0
  },
  {
    "title": "DEMGM",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/demgm_png/{z}/{x}/{y}.png",
    "minzoom": 8,
    "maxzoom": 8,
    "fixed": 0
  }
];

CONFIG.LAKEDEPTHURLLIST = [
  {
    "title": "",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/lakedepth/{z}/{x}/{y}.png",
    "minzoom": 14,
    "maxzoom": 14,
    "fixed": 1
  }
];

CONFIG.LAKESTDHEIGHTURLLIST = [
  {
    "title": "",
    "url": "https://cyberjapandata.gsi.go.jp/xyz/lakedepth_standard/{z}/{x}/{y}.png",
    "minzoom": 14,
    "maxzoom": 14,
    "fixed": 1
  }
];

CONFIG.BASEMAPLIST = [
  {
    "layerType": "tile",
    "id": "std",
    "title": "標準地図",
    "url": "https://maps.gsi.go.jp/xyz/std/{z}/{x}/{y}.png",
    "thumb" : ""
  },

  {
    "layerType": "tile",
    "id": "pale",
    "title": "淡色地図",
    "url": "https://maps.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png",
    "thumb" : ""
  },
  {
    "layerType": "tile",
    "id": "blank",
    "title": "白地図",
    "url": "https://maps.gsi.go.jp/xyz/blank/{z}/{x}/{y}.png",
    "thumb" : ""
  },
  {
    "layerType": "tile",
    "id": "english",
    "title": "English",
    "url": "https://maps.gsi.go.jp/xyz/english/{z}/{x}/{y}.png",
    "thumb" : ""
  },
  {
    "layerType": "tile",
    "id": "ort",
    "title": "写真",
    "url": "https://maps.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg",
    "thumb" : ""
  }
];