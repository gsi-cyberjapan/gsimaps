if ( !CONFIG.UI ) CONFIG.UI = {};

CONFIG.UI.MENU = [
  {
    id : "reset",
    title : "初期表示",
    buttonWidth : "74px",
    icon : "./image/system/tool-icon-reload.png",
    description : "初期表示に戻せます"
  },
  /*
  {
    title : "国土地理院ホームページ",
    icon : "./image/system/tool-icon-gsi.png",
    description : "国土地理院HPへリンク",
    url : "https://www.gsi.go.jp/",
    target : "_blank"
  },
  */
  {
    id: 'print',
    title : "印刷",
    icon : "./image/system/tool-icon-print.png",
    description : "印刷"
  },
  {
    id : "share",
    title : "共有",
    icon : "./image/system/tool-icon-share.png",
    description : "共有・保存"
  },
  {
    title : "設定",
    icon : "./image/system/tool-icon-setting.png",
    description : "グリッド表示・設定",
    childrenWidth: 240,
    childViewStyle : "popuplist",
    popupDirection: "bottom",
    children: [
      {
        title: 'グリッド表示',
        arrow: true,
        textAlign: "left",
        childrenWidth: 230,
        childViewStyle : "popuplist",
        popupDirection: "left",
        description : "",
        children: [
          {
            id: CONFIG.PARAMETERNAMES.LATLNGGRID,
            title: '緯経度グリッド',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.UTMGRID,
            title: 'UTMグリッド',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.TILEGRID,
            title: 'タイル座標',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.CHIIKIMESH,
            title: '地域メッシュ',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.T25000GRID,
            title: '図郭',
            typeA: 'check',
            defaultCheck: false
          }/*,
          
          {
            id: CONFIG.PARAMETERNAMES.KOKUDOKIHONZUKAKU,
            title: '国土基本図図郭',
            typeA: 'check',
            defaultCheck: false,
            hidden : CONFIG.DISABLE_KOKUDOKIHONZUZUKAKU
          }
          */
        ]
      },
      {
        id: CONFIG.PARAMETERNAMES.CENTERCROSS,
        title: '中心十字線',
        typeA: 'check',
        defaultCheck: true,
        description : "地図の中央に十字線を表示します"
      },
      {
        id: CONFIG.PARAMETERNAMES.ZOOMGUIDE,
        title: '表示ズームの案内',
        typeA: 'check',
        defaultCheck: true
      },
      /*
      {
        id: CONFIG.PARAMETERNAMES.JIHOKULINE,
        title: '磁北線' + '<span class="mini_comment">（ズーム11以上）</span>',
        typeA: 'check',
        defaultCheck: false
      },
      {
        id: CONFIG.PARAMETERNAMES.TOUKYOKEN,
        title: '等距圏',
        typeA: 'check',
        defaultCheck: false
      },
      {
        id: CONFIG.PARAMETERNAMES.HOUILINE,
        title: '方位線',
        typeA: 'check',
        defaultCheck: false
      },
      */
      {
        id: CONFIG.PARAMETERNAMES.MINIMAP,
        title: '広域図',
        typeA: 'check',
        defaultCheck: false,
        description : "別ウィンドウで広域地図を表示します"
      },
      {
        id: CONFIG.PARAMETERNAMES.CLICKMOVE,
        title: 'クリックで移動',
        typeA: 'check',
        defaultCheck: false,
        description : "左クリックで地図を移動できます"
      },
      {
        id: CONFIG.PARAMETERNAMES.MULTIPOPUP,
        title: 'ポップアップ複数表示',
        typeA: 'check',
        defaultCheck: false,
        description : "ポップアップを複数同時に表示できます"
      },/*
      {
        id: CONFIG.PARAMETERNAMES.PANELOVERLAP,
        title: '地図選択を重ねて表示',
        typeA: 'check',
        defaultCheck: false,
        description : ""
      },*/
      {
        id: CONFIG.PARAMETERNAMES.SAVESTATE,
        title: '次回終了状態を再現',
        typeA: 'check',
        defaultCheck: false,
        description : "次回、前回の終了位置から表示していた地図が表示されます。（cookieを利用しています）"
      },
      {
        id: "to-mobile",
        title: 'モバイル版で表示',
        description : ""
      }
    ]
  },
  {
    title : "ツール",
    icon : "./image/system/tool-icon-tool.png",
    description : "ツール",
    childViewStyle : "panel",
    buttonWidth : "64px",
    children : [
      {
        id : "sakuzu",
        title : "作図・ﾌｧｲﾙ",
        description : "点、線、面などを作図できます",
        icon : "./image/system/tool/tool-sakuzu.png"
      },
      {
        id : "measure",
        title : "計測",
        description : "距離や面積を計測できます",
        icon : "./image/system/tool/tool-keisoku.png"
      },
      {
        id : "danmen",
        title : "断面図",
        description : "任意の地点間の断面図を作成できます",
        icon : "./image/system/tool/tool-danmen.png"
      },
      {
        id : "splitwindow",
        title : "並べて比較",
        description:"2つの地図を並べて比較できます",
        icon : "./image/system/tool/tool-narabete.png"
      },
      {
        id : "comparisonmap",
        title : "重ねて比較",
        description : "2つの地図の境界を左右にスライドさせて比較できます",
        icon : "./image/system/tool/tool-kasanete.png"
      },
      {
        id : "3d",
        title : "３D",
        childViewStyle : "popuppanel",
        icon : "./image/system/tool/tool-3d.png",
        description : "任意の範囲の起伏を3次元表示できます",
        popupDirection: "left",
        children : [
          {
            id: 'gsi3d_l',
            title: '<span style="font-size:13pt;">大</span><br><span style="font-size:9px;">縦横2048px</span>',
            description : "2048×2048ピクセルの3Dモデルを作成します"
          },
  
          {
            id: 'gsi3d_s',
            title: '<span style="font-size:13pt;">小</span><br><span style="font-size:9px;">縦横1024px</span>',
            description : "1024×1024ピクセルの3Dモデルを作成します"
          },
          {
            id: 'gsi3d_custom',
            title: 'カスタム',
            description : "任意の範囲を指定できます"
          }
        ]
      },
      {
        id : "gsiglobe",
        title : "Globe",
        icon : "./image/system/tool/tool-globe.png",
        description : "土地の起伏を地球儀で3次元表示できます"
      },
      {
        id : "other",
        title : "その他",
        icon : "./image/system/tool/tool-sonota.png",
        description : "その他ツール",
        childViewStyle : "popuppanel",
        popupDirection: "left",
        children : [
          {
            id : CONFIG.PARAMETERNAMES.JIHOKULINE,
            typeA: 'check',
            title : "磁北線",
            showTitle : true,
            icon : "./image/system/tool/tool-jihoku.png",
            description : "磁北線を表示します",
            keepPanel: true
          },
          {
            id : CONFIG.PARAMETERNAMES.TOUKYOKEN,
            typeA: 'check',
            title : "等距圏",
            showTitle : true,
            icon : "./image/system/tool/tool-toukyo.png",
            description : "指定した地点からの等距離の場所を線で表示します"
          },
          {
            id : CONFIG.PARAMETERNAMES.HOUILINE,
            typeA: 'check',
            title : "方位線",
            showTitle : true,
            icon : "./image/system/tool/tool-houi.png",
            description : "指定した地点からの方位線を表示します"
          },
          {
            id : "othermap",
            title : "その他の<br>地図",
            description : "その他の地図",
            childViewStyle : "popuppanel",
            popupDirection: "left",
            children : [
              {
                id : "link",
                url : "itsumonavi",
                title : "いつもNAVI",
                icon : "./image/system/tool/tool-itsumo.png",
                description:"現在の場所を「いつもNAVI」で表示します"
              },
              {
                id : "link",
                url : "mapion",
                title : "Mapion",
                icon : "./image/system/tool/tool-mapion.png",
                description:"現在の場所を「Mapion」で表示します"
              }
            ]
          },
          {
            id : "placecode",
            title : "場所情報<br>コード",
            icon : "./image/system/tool/tool-uplace.png",
            description:"中心位置の場所情報コードを表示できます"
          },
          {
            id : "loadoutsidetile",
            title : "外部タイル",
            showTitle : true,
            icon : "./image/system/tool/tool-gaibu.png",
            description:"地理院タイル以外のタイルデータを表示できます"
          }
        ]
      }
    ]
  },
  {
    id: 'help',
    title : "ヘルプ",
    text : "?",
    icon : "",
    class : "gsi-header-tool-help-icon",
    description : "ヘルプ",
    target : "_blank",
    url : "https://maps.gsi.go.jp/help/"
  },

  {
    id : "gsivector",
    title : "",
    icon : "",
    class : "gsi-header-tool-vectorlogo-icon",
    description : "地理院地図Vector（仮称）へジャンプ"
  }

];
