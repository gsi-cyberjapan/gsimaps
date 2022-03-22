CONFIG.USEMINIZOOMCONTROL = true; // 小さいズームコントロールを使用
CONFIG.USEGPS = true; // GPS機能を使用
CONFIG.OVERLAPLEFTPANEL = true; // パネルを地図に重ねて表示
CONFIG.MOBILE = true; // モバイル用

if ( !CONFIG.UI ) CONFIG.UI = {};

CONFIG.UI.MENU = [
  /*
  {
    title : "国土地理院ホームページ",
    icon : "./image/system/tool-icon-gsi.png",
    description : "",
    url : "https://www.gsi.go.jp/",
    target : "_blank"
  },
  */
  {
    id : "reset",
    icon : "./image/system/tool-icon-reload.png",
    description : "初期表示に戻せます"
  },
  {
    id: 'menu',
    icon : "./image/system/tool-icon-menu.png",
    description : "",
    childViewStyle : "popupmenu",
    popupDirection: "bottom",
    children: [      
      {
        id : "share",
        title : "共有",
        keepPanel : true,
        icon : "./image/system/tool-icon-share.png",
        description : ""
      },    
      {
        title : "設定",
        icon : "./image/system/tool-icon-setting.png",
        description : "",
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
            defaultCheck: true
          },
          {
            id: CONFIG.PARAMETERNAMES.ZOOMGUIDE,
            title: '表示ズームの案内',
            typeA: 'check',
            defaultCheck: true
          },
          {
            id: CONFIG.PARAMETERNAMES.MINIMAP,
            title: '広域図',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.CLICKMOVE,
            title: 'クリックで移動',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.MULTIPOPUP,
            title: 'ポップアップ複数表示',
            typeA: 'check',
            defaultCheck: false
          },
          {
            id: CONFIG.PARAMETERNAMES.SAVESTATE,
            title: '次回終了状態を再現',
            typeA: 'check',
            defaultCheck: false,
            description : "次回、前回の終了位置から表示していた地図が表示されます。（cookieを利用しています）"
          },
          {
            id: "to-pc",
            title: 'PC版で表示'
          }
        ]
      },
      {
        title : "ツール",
        icon : "./image/system/tool-icon-tool.png",
        description : "",
        childViewStyle : "panel",
        panelClass: "gsi-menu-rightpanel mobile",
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
            icon : "./image/system/tool/tool-danmen.png"
          },
          {
            id : "splitwindow",
            title : "並べて比較",
            icon : "./image/system/tool/tool-narabete.png"
          },
          {
            id : "comparisonmap",
            title : "重ねて比較",
            icon : "./image/system/tool/tool-kasanete.png"
          },
          {
            id : "3d",
            title : "３D",
            childViewStyle : "popuppanel",
            popupDirection: "left",
            icon : "./image/system/tool/tool-3d.png",
            panelClass: "gsi-menu-popuppanel mobile",
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
                title: 'カスタム'
              }
            ]
          },
          {
            id : "gsiglobe",
            title : "Globe",
            icon : "./image/system/tool/tool-globe.png",
          },
          {
            id : CONFIG.PARAMETERNAMES.JIHOKULINE,
            typeA: 'check',
            title : "磁北線",
            keepPanel: true,
            icon : "./image/system/tool/tool-jihoku.png",
          },
          {
            id : CONFIG.PARAMETERNAMES.TOUKYOKEN,
            typeA: 'check',
            title : "等距圏",
            icon : "./image/system/tool/tool-toukyo.png"
          },
          {
            id : CONFIG.PARAMETERNAMES.HOUILINE,
            typeA: 'check',
            title : "方位線",
            icon : "./image/system/tool/tool-houi.png"
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
    description : "",
    target : "_blank",
    url : "https://maps.gsi.go.jp/help/"
  }
];