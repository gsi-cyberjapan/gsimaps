function INCLUDE(){  
    var dir     = "./js.lib/";
    var scripts = new Array(  
          "html2canvas.js"
        , "togeojson.js"
    );  
    for(var i = 0; i < scripts.length; i++) {  
        document.write("<script type='text\/javascript' src='" + dir + scripts[i] + "'><\/script>");  
    }
};

INCLUDE(); 

/*-----------------------------------------------------------------------------------------------*
 * 地理院地図：style.js 用ラッパー関数
 *-----------------------------------------------------------------------------------------------*/
GSI =
{
    GLOBALS : {
        map : {
                getZoom :
                    function(){
                        return args["z"];
                    }
            }
    }
};

/*-----------------------------------------------------------------------------------------------*
 * 設定
 *-----------------------------------------------------------------------------------------------*/
var CONFIG = {};
CONFIG.layerBase          = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseDefaultID = "std";
CONFIG.layers             = [
	'./layers_txt/layers1.txt',
	'./layers_txt/layers2.txt',
	'./layers_txt/layers3.txt',
	'./layers_txt/layers4.txt',
	'./layers_txt/layers_skhb.txt',
	'./layers_txt/layers5.txt',
	'./layers_txt/layers_experimental.txt'
];
/*-----------------------------------------------------------------------------------------------*/
var vDemType                            = "TXT"; // TXT, PNG
var vDemUrl                             = "https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt";
//  vDemUrl                             = "./[@]/tile.gsi/{z}/{x}/{y}.png";
var vDemUrl_Default                     = "https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt";
var vDemUrl_maxZoom                     =14;
var vDemGMType                            = "TXT"; // TXT, PNG
var vDemGMUrl                             = "https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt";
var vDemGMUrl_Default                     = "https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt";
var vDemGMUrl_maxZoom                     =8;
/*-----------------------------------------------------------------------------------------------*/
var _Load_StyleZoom                     = false;
var _Load_Data                          = null;
var _Load_DataHash                      = {};
var _Load_DataIndex                     = -1;
var _Load_DataSrc                       = null;
/*-----------------------------------------------------------------------------------------------*/
var vVectorPointDivIcon                 = "HTML2CANVAS";      // TXT,HTML2CANVAS
var vVectorPointDivIcon_SizeW           = 400;                // HTML2CANVAS：描画最大サイズ（横）[px]
var vVectorPointDivIcon_SizeH           = 400;                // HTML2CANVAS：描画最大サイズ（縦）[px]
var vVectorPointDivIcon_StyleFontWeight = "normal";           // TXT        ：太さ：normal、bold、lighter、bolder、または100〜900の9段階（400がnormal）
var vVectorPointDivIcon_StyleFontSize   = 24;                 // TXT        ：単位：px
var vVectorPointDivIcon_StyleFontFamily = "'Century Gothic'"; // TXT        ：書体：「' '」で囲む。「,」で区切って複数指定可能。
/*-----------------------------------------------------------------------------------------------*/
var args                                = null;
/*-----------------------------------------------------------------------------------------------*/
var vLayers                             = null;
                                            /* レイヤー配列
                                                id          : 
                                                url         : 
                                                url_type    : 
                                                url_ext     : 
                                                url_style   : 
                                                z           : 
                                                x           : 
                                                y           : 
                                                size        : 
                                                zoom        : 
                                                zoom_x      : 
                                                zoom_y      : 
                                                zoom_min    : 
                                                zoom_max    : 
                                                zoom_native : 
                                                opacity     : 
                                                grayscale   : 
                                            */
var oLayersTM                           = null;
var vLayersTM                           = 100;
var vLayersTM_Cur                       = 0;
var vLayersTM_Max                       = 1000 * 60 * 15;
var nLayersData                         = 0;
var vLayersData                         = null;
                                            /* [LayerID] ハッシュデータ
                                                フォーマット
                                                id          : レイヤーID
                                                type        : タイプ
                                                              img    : 画像
                                                              vector : ベクター
                                                src         : ソース
                                                load        : ステータス.データ読み込み
                                                loadCanvas  : ステータス.データ描画
                                                data        : データ
                                                              type == vector のみ
                                             */
var vLayersData_VectorStyle             = null;
                                            /* [LayerID] ハッシュデータ
                                                id          : レイヤーID
                                                src         : ソース
                                                load        : 読込ステータス
                                                zoom_min    :
                                                zoom_max    ;
                                                zoom_native ;
                                                data        : データ(JavaScript[Style.js])
                                             */
var vLayersData_VectorAjax              = null;
var vTilesDem                           = null;
var vVectors                            = 0;
var vVectorsN                           = 0;
var vVectorHTML                         = {
                                           o        : null
                                         , oCanvas  : null
                                         , oDiv     : null
                                         , oIFrame  : null
                                         , v        : new Array()
                                         , vOpenner : false
                                         };
var vDem                                = null;
var fDemTrimFromCenter                  = true;
var nVertexNumX                         = 256;
var nVertexNumY                         = 256;
var nGeomSizeX = 100;
var nGeomSizeY = 100;

/*-----------------------------------------------------------------------------------------------*/
var vLoadLayersProc_oTextureCanvas_2D   = null;
var vLoadLayersProc_x                   = null;
var vLoadLayersProc_y                   = null;
var vLoadLayersProc_wTileImg            = null;
var vLoadLayersProc_hTileImg            = null;
/*-----------------------------------------------------------------------------------------------*/
var oTM                                 = null;
var vTM                                 = 1500;
var vHash                               = "";
/*-----------------------------------------------------------------------------------------------*/
var vFrame3D_W                          = 0;
var vFrame3D_H                          = 0;
var vFrame3D_H_Ctrl                     = 0;
/*-----------------------------------------------------------------------------------------------*/
var o                                   = null;
var oProgressBar                        = null;
var oFrame                              = null;
var oFrame3D                            = null;
var oFrame3D_CtrlZ                      = null;
var oFrame3D_Download                   = null;
var oGSIMapLink                         = null;
var oRenderer                           = null;
var oScene                              = null;
var oSceneLight                         = null;
var oSceneMesh                          = null;
var oSceneGEODataMeshArr                = null;
var oSceneMeshBase                      = null;
var oCamera                             = null;
var oCameraCtrl                         = null;
var oTextureCanvas                      = null;
var nTextureTileN                       = 6;
var vTextureCanvas_W                    = 2048;
var vTextureCanvas_H                    = 2048;
var vSceneMesh                          = null;
var vSceneMesh_ZMin                     = null;
var vSceneMeshDistanceRate              = 1;
var vSceneMeshZRate                     = 1.0;
var oGeo3DData                          = null;
var oIconTextureCanvas                  = null;
var oFaceMaterial                       = null;
var bFaceTransparent                    = false;
var oFaceTransparentCheck               = null;

/*-----------------------------------------------------------------------------------------------*/
var oWinDownload                        = null;
/*-----------------------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------------------*/
// 初期処理
/*-----------------------------------------------------------------------------------------------*/
function Init(iFrame){
    var oWin = window.opener;
    if(oWin != null){
        try{
            if(oWin.CONFIG){
                if(oWin.CONFIG.layerBase          && oWin.CONFIG.layerBase.length          > 0){ CONFIG.layerBase          = oWin.CONFIG.layerBase; }
                if(oWin.CONFIG.layerBaseDefaultID && oWin.CONFIG.layerBaseDefaultID.length > 0){ CONFIG.layerBaseDefaultID = oWin.CONFIG.layerBaseDefaultID; }
                if(oWin.CONFIG.layers             && oWin.CONFIG.layers.length             > 0){ CONFIG.layers             = oWin.CONFIG.layers;    }
              if ( oWin.CONFIG.layersTab )
              {
				for( var i=0; i<oWin.CONFIG.layersTab.length; i++ )
				{
					for( var j=0; j<oWin.CONFIG.layersTab[i].layers.length; j++ )
						CONFIG.layers.push( oWin.CONFIG.layersTab[i].layers[j]);
				}
			  }
            }
        }
        catch(e){
        }
    }

    o = document.getElementById(iFrame)
    if(o != null){
        InitProgress(o);
        InitFrame(o);
        InitFrameDownload(o);

        args = InitGet();
	    if(args){
            if(oProgressBar != null){
	            $( "#" + oProgressBar.id).show();
            }
			$( "#gsimap_link" ).attr( {"href":getGSIMapUrl( args )} );
            InitLoadLayersTxt();
	    }
    }
};

function getGSIMapUrl( args )
{
	var base = "base=";
	if ( 0<args["ls"].length )
	{
		base += args["ls"][0].id;
		
		if ( args["ls"][0].grayscale )
			base+= "&base_grayscale=1";
	}
	
	var ls ="";
	for( var i=0; i<args["ls"].length; i++ )
	{
		var dItem = args["ls"][i];
		
		ls += ( ls != '' ? '|' : '' ) + dItem.id
			+ ( dItem.opacity && dItem.opacity < 1 ? "," + dItem.opacity  : "" );
	}
	return "./#" + args["z"] + "/" + args["lat"] + "/" + args["lon"] + "/&" + base + "&ls=" + encodeURIComponent(ls);
}

function InitGet(){
    var ret    = null;
    var search = document.location.search;
    var hash   = document.location.hash;
	if(search.length > 1){
		ret = new Object();

        search = search.substring(1);
        hash   = hash.substring(1);

        /* ------------------------------------------
           引数
           ------------------------------------------
        + "&base_grayscale="+ args["base_grayscale"]：グレースケール背景地図(&ls=の一番目が背景地図)
        + "&ls="            + args["ls"]            ：表示レイヤー
	    + "&lat="           + args["lat"]           ：中心緯度
        + "&lon="           + args["lon"]           ：中心経度
        + "&z="             + args["z"]             ：ズームレベル
        + "&pxsize="        + args["pxsize"]        ：タイルサイズ
          ------------------------------------------
          ハッシュ
          ------------------------------------------
	    + "&cpx="           + vCameraPosX           ：透視投影.カメラ位置(X)
        + "&cpy="           + vCameraPosY           ：透視投影.カメラ位置(Y)
        + "&cpz="           + vCameraPosZ           ：透視投影.カメラ位置(Z)
        + "&cux="           + vCameraUpX            ：透視投影.カメラ中心座標(X)
        + "&cuy="           + vCameraUpY            ：透視投影.カメラ中心座標(Y)
        + "&cuz="           + vCameraUpZ            ：透視投影.カメラ中心座標(Z)
	    + "&ctx="           + vCameraTgtX           ：透視投影.視点(X)
        + "&cty="           + vCameraTgtY           ：透視投影.視点(Y)
        + "&ctz="           + vCameraTgtZ           ：透視投影.視点(Z)
	    + "&a="             + vCameraZ;             ：高さ方向の倍率
          ------------------------------------------ */
		var params = (search + hash).split('&');
		for(var i = 0; i < params.length; i++){
			var element = params[i].split('=');
			var paramName  = decodeURIComponent(element[0]);
			var paramValue = decodeURIComponent(element[1]);
			ret[paramName] = decodeURIComponent(paramValue);
		}
		bFaceTransparent = ( ret["b"] == 1 ? true : false );
		if ( oFaceTransparentCheck ) oFaceTransparentCheck.prop({"checked":bFaceTransparent});
        // 引数：レイヤー
        if(ret["ls"]){
            var d = ret["ls"].split("|");

            ret["ls"] = new Array();
            for(n = 0; n < d.length; n++){
                var nItem = d[n].split(",");
                var nItemID      = "";
                var nItemOpacity = 1;
                var nMultiply = mpflag(ret["blend"], n, nItemID);
                if(nItem.length >= 2){
                    nItemID      = nItem[0];
                    try{
                        nItemOpacity = parseFloat(nItem[1]);
                    }
                    catch(e){}
                }
                else{
                    nItemID      = nItem[0];
                }

                var dItem = {
                      id        : nItemID
                    , opacity   : nItemOpacity
                    , grayscale : false
                    , multiplytile : nMultiply
                };
                if(n == 0){
                    if(ret["base_grayscale"] && ret["base_grayscale"] == "1"){
                        dItem.grayscale = true;
                    }
                }
                ret["ls"].push(dItem);
            }
        }
        else{
            ret["ls"] = new Array();

            var dItem = {
                    id        : CONFIG.layerBaseDefaultID
                , opacity   : 1
                , grayscale : false
                , mutiplytile : 0
            };

            ret["ls"].push(dItem);
        }
		ret["planeopacity"] = 0.99;
		
		if ( !ret["frame"] ||( ret["frame"] != "normal"  && ret["frame"] != "none" ) )
			ret["frame"] = "trans";
        // 引数：DEM
        if(!(vDemType == "PNG" || vDemType == "TXT")){
            vDemType = "TXT";
            vDemUrl  = vDemUrl_Default;
        }
		if(ret["z"]<=vDemGMUrl_maxZoom){
            vDemType = vDemGMType;
            vDemUrl = vDemGMUrl;
            vDemUrl_Default = vDemGMUrl_Default;
            vDemUrl_maxZoom = vDemGMUrl_maxZoom;
        }

        ret["tile_n"]    = nTextureTileN;
        ret["tile_n_px"] = vTextureCanvas_W;
        ret["tile_n_w"]    = nTextureTileN;
        ret["tile_n_px_w"] = vTextureCanvas_W;
        ret["tile_n_h"]    = nTextureTileN;
        ret["tile_n_px_h"] = vTextureCanvas_W;
        
        
        var setTileN = function (ret, size, key)
        {
            ret["tile_n_px"+key] = parseInt(size, 10);
            if(isFinite(ret["tile_n_px"+key])){
                if(ret["tile_n_px"+key] < 256){
                    ret["tile_n_px"+key] = 256;
                }
                else{
                    if(ret["tile_n_px"+key] % 2 != 0){
                        ret["tile_n_px"+key]++;
                    }
                }
                ret["tile_n"+key] = Math.ceil(ret["tile_n_px"+key] / 256);
            }
        };
        
        
        
        if(ret["w"] && ret["h"] )
        {
			setTileN( ret, ret["w"], "_w" );
			setTileN( ret, ret["h"], "_h" );
        }
        else if(ret["pxsize"]){
			//setTileN( ret, ret["pxsize"], "" );
			ret["w"] = ret["pxsize"];
			ret["h"] = ret["pxsize"];
			setTileN( ret, ret["pxsize"], "_w" );
			setTileN( ret, ret["pxsize"], "_h" );
        }
		else
		{
			alert( "" );
		}
	
		
		if ( ret["tile_n_px_w"] > ret["tile_n_px_h"] )
		{
			
			nVertexNumX = 256;
			nVertexNumY = Math.floor( ret["tile_n_px_h"] * ( 256 / ret["tile_n_px_w"]) );
		}
		else
		{
			
			nVertexNumY = 256;
			nVertexNumX = Math.floor( ret["tile_n_px_w"] * ( 256 / ret["tile_n_px_h"]) );
		}
		
		if ( nVertexNumX < 256 || nVertexNumY < 256 )
		{
			nVertexNumX = parseInt( nVertexNumX * 1.5 );
			nVertexNumY = parseInt( nVertexNumY * 1.5 );
			
		}
		
		
        // トリミング
        if(fDemTrimFromCenter){
            var vCX         = GetTileX(ret["z"], ret["lon"]);        // 中心タイル情報
            
            var vCY         = GetTileY(ret["z"], ret["lat"]);        // 中心タイル情報
            var vC0         = 256 * 0.5;                             // 中心タイル中点
            var nCT_X       = Math.floor(ret["tile_n_w"] * 0.5);     // 中心タイルからのタイル数
            var nCT_Y       = Math.floor(ret["tile_n_h"] * 0.5);     // 中心タイルからのタイル数
            var nCTXS       = nCT_X;                                   // 中心タイルからのX0方向へのタイル数
            var nCTXE       = nCT_X + 1;                               // 中心タイルからのX1方向へのタイル数
            var nCTYS       = nCT_Y;                                   // 中心タイルからのY0方向へのタイル数
            var nCTYE       = nCT_Y + 1;                               // 中心タイルからのY0方向へのタイル数
            var nCTXS_PXS_S = 0;                                     // X0トリミング範囲.開始px
            var nCTXS_PXS_E = 256;                                   // X0トリミング範囲.終了px
            var nCTXS_PXE_S = 0;                                     // X1トリミング範囲.開始px
            var nCTXS_PXE_E = 256;                                   // X1トリミング範囲.終了px
            var nCTYS_PXS_S = 0;                                     // y0トリミング範囲.開始px
            var nCTYS_PXS_E = 256;                                   // y0トリミング範囲.終了px
            var nCTYS_PXE_S = 0;                                     // y1トリミング範囲.開始px
            var nCTYS_PXE_E = 256;                                   // y1トリミング範囲.終了px
            
            if(vCX.px != vC0){
                if(vCX.px < vC0){
                    nCTXS++;
                    nCTXE++;
                }
                else{
                    nCTXS++;
                    nCTXE++;
                }
                nCTXS_PXS_S = vCX.px;
                nCTXS_PXE_E = vCX.px;
            }
            if(vCY.px != vC0){
                if(vCY.px < vC0){
                    nCTYS++;
                    nCTYE++;
                }
                else{
                    nCTYS++;
                    nCTYE++;
                }
                nCTYS_PXS_S = vCY.px;
                nCTYS_PXE_E = vCY.px;
            }
            var nCX_RangeS = vCX.n - nCTXS;                             // X0タイル番号
            var nCX_RangeE = vCX.n + nCTXE;                             // X1タイル番号
            var nCY_RangeS = vCY.n - nCTYS;                             // Y0タイル番号
            var nCY_RangeE = vCY.n + nCTYE;                             // Y1タイル番号
            var nCX_RangeS_Lon = GetTile2Lng(nCX_RangeS    , ret["z"]); // X0タイル経度(左上)
            var nCX_RangeE_Lon = GetTile2Lng(nCX_RangeE + 1, ret["z"]); // X1タイル経度(左上)
            var nCY_RangeS_Lat = GetTile2Lat(nCY_RangeS    , ret["z"]); // Y0タイル緯度(右下)
            var nCY_RangeE_Lat = GetTile2Lat(nCY_RangeE + 1, ret["z"]); // Y1タイル緯度(右下)
            
            ret["tile_n_w"]   = nCX_RangeE - nCX_RangeS;
            ret["tile_n_h"]   = nCY_RangeE - nCY_RangeS;
            //Math.max(nCX_RangeE - nCX_RangeS, nCY_RangeE - nCY_RangeS);
            ret["lon_lt_x"] = nCX_RangeS;   ret["lon_lt"] = nCX_RangeS_Lon;
            ret["lon_rb_x"] = nCX_RangeE;   ret["lon_rb"] = nCX_RangeE_Lon;
            ret["lat_lt_y"] = nCY_RangeS;   ret["lat_lt"] = nCY_RangeS_Lat;
            ret["lat_rb_y"] = nCY_RangeE;   ret["lat_rb"] = nCY_RangeE_Lat;
            ret["trim_n_x"]   = (ret["tile_n_w"] - 1);
            ret["trim_n_y"]   = (ret["tile_n_h"] - 1);
            ret["trim_x_s"] = nCTXS_PXS_S;       // 左トリムピクセル
            ret["trim_x_e"] = 256 - nCTXS_PXE_E; // 右トリムピクセル
            ret["trim_y_s"] = nCTYS_PXS_S;       // 上トリムピクセル
            ret["trim_y_e"] = 256 - nCTYS_PXE_E; // 下トリムピクセル
            ret["trim_y_w"] = ret["trim_n_x"] * 256; // 幅トリムピクセル
            ret["trim_y_h"] = ret["trim_n_y"] * 256; // 高トリムピクセル
            
            var vWP_X = ret["trim_n_x"] * 256;
            var vWP_Y = ret["trim_n_y"] * 256;
            var vWC_X = ret["tile_n_px_w"];
            var vWC_Y = ret["tile_n_px_h"];
            var vT_X  = Math.ceil((vWP_X - vWC_X) * 0.5);
            ret["trim_n_x"] = Math.floor(ret["tile_n_px_w"] / 256);
            if(ret["tile_n_px_w"] % 256 != 0){
                ret["trim_n_px_x"] = (ret["tile_n_px_w"] - (ret["trim_n_x"] * 256)) * 0.5;
            }
            else{
                ret["trim_n_px_x"] = 0;
            }
            
            var vT_Y  = Math.ceil((vWP_Y - vWC_Y) * 0.5);
            ret["trim_n_y"] = Math.floor(ret["tile_n_px_h"] / 256);
            if(ret["tile_n_px_h"] % 256 != 0){
                ret["trim_n_px_y"] = (ret["tile_n_px_h"] - (ret["trim_n_y"] * 256)) * 0.5;
            }
            else{
                ret["trim_n_px_y"] = 0;
            }
            ret["trim_x_s"] += vT_X;
            ret["trim_x_e"] += vT_X;
            ret["trim_y_s"] += vT_Y;
            ret["trim_y_e"] += vT_Y;
            ret["trim_y_w"] = Math.ceil(vWC_X * 0.5) * 2;
            ret["trim_y_h"] = Math.ceil(vWC_Y * 0.5) * 2;             
            
            vTextureCanvas_W = 256 * ret["tile_n_w"];
            vTextureCanvas_H = 256 * ret["tile_n_h"];
        }
        else{
	        // ret["tile_n"]によってタイル番号等を再計算
            if(fCalxX){ ret["lon_rb"] = GetTile2Lng(ret["lon_lt_x"] + ret["tile_n_w"] - 1, ret["z"]);   ret["lon_rb_x"] = GetTileX(ret["z"], ret["lon_rb"]).n; }
            if(fCalxY){ ret["lat_rb"] = GetTile2Lat(ret["lat_lt_y"] + ret["tile_n_h"] - 1, ret["z"]);   ret["lat_rb_y"] = GetTileY(ret["z"], ret["lat_rb"]).n; }
        }

        ret["tiles"]  = ret["tile_n_w"] * ret["tile_n_h"];

	    // 高さ方向の倍率計算の為、3Dモデルの実距離を求める。
         ret["distance"] = CalcLatitudinallyDistance(ret["lat"] , ret["z"] , Math.max(parseInt(ret["w"]), parseInt(ret["h"])) );
 
        // レイヤーチェック
        if(!(ret["ls"] && ret["ls"] != null)){
            ret = null;
        }

        if(ret != null){
            LocationHash();
        }
	}

	return ret;
};

function InitLoadLayersTxt(){
    _Load_Data      = new Array();
    _Load_DataHash  = {};
    _Load_DataIndex = -1;
    _Load_DataSrc   = new Array();

    var n = 0;
    for(n = 0; n < CONFIG.layerBase.length; n++){
        var d = {
	         fname  : CONFIG.layerBase[n]
	        ,load   : null
	        ,layers : null
        };
        _Load_Data.push(d);    
    }
    for(n = 0; n < CONFIG.layers.length; n++){
        var d = {
	        fname  : CONFIG.layers[n]
	        ,load   : null
	        ,layers : null
        };
        _Load_Data.push(d);  
    }

    InitLoadLayersTxt_Proc();
};

var InitLoadLayersTxt_Proc = function(){
    _Load_DataIndex++;
    if(_Load_DataIndex < _Load_Data.length){
        var url = _Load_Data[_Load_DataIndex].fname;
	    $.ajax({
		      type     : "GET"
		    , url      : url
		    , dataType : "text"
		    , cache    : true
		    , success  : InitLoadLayersTxt_Proc_Success
		    , error    : InitLoadLayersTxt_Proc_Error
	    });
    }
    else{
        InitLoadLayersTxt_ProcSrc();
    }
};

var InitLoadLayersTxt_Proc_DataSrcSet = function(layer){
    if(layer.src){
        if(layer.src.indexOf('./') == 0){
            var path = layer.src_url.substring(0, layer.src_url.lastIndexOf('/'));
            layer.src  = path + "/" + layer.src.substr(2);
        }
        _Load_DataSrc.push(layer);
    }
};

var InitLoadLayersTxt_Proc_Success = function(data){
	var json = JSON.parse(data);
	
    if(_Load_DataIndex == 0){
        var json_base = JSON.parse("{ \"layers\": [ { \"type\": \"LayerGroup\", \"title\": \"\", \"title_sys\": \"\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] } ] }");
            json_base.layers[0].entries = json.layers.concat();
            json      = json_base;
    }

    if( json.layers){
        for(var i = 0; i < json.layers.length; i++){
            InitLoadLayersTxt_Proc_Success_SRC(json.layers[i], _Load_Data[_Load_DataIndex].fname);
        }
    }

	_Load_Data[_Load_DataIndex].layers = json.layers[0];

	InitLoadLayersTxt_Proc();
};

var InitLoadLayersTxt_Proc_Success_SRC = function(layer, url){
    layer.src_url = url;

    if(layer.type == "Layer" || (layer.type == "LayerGroup" && layer.id != "" )){
        _Load_DataHash[layer.id] = layer;
    }

    if(layer.type == "LayerGroup"){
        if(layer.src){
            InitLoadLayersTxt_Proc_DataSrcSet(layer);
        }
        else{
            for(var n = 0; n < layer.entries.length; n++){
                InitLoadLayersTxt_Proc_Success_SRC(layer.entries[n], url);
            }
        }
    }
};

var InitLoadLayersTxt_Proc_Error = function(){
	InitLoadLayersTxt_Proc();
};

var InitLoadLayersTxt_ProcSrc = function(){
    if(_Load_DataSrc.length == 0){
        var f = false;
        
        vLayers     = null;
        nLayersData = 0;

        if(args["ls"] && args["ls"] != null){
            for(n = 0; n < args["ls"].length; n++){
                if(n == 0){
                    vLayers = new Array();
                }
                var d = _Load_DataHash[args["ls"][n].id];
                if (!d ) continue;
                var isMulti = false;
                var isMinNative = false;
                var entries = [];
                if ( d.entries ) 
                {
					isMulti = true;
					entries = d.entries;
                }
                else entries.push(d);
                
                for( var childNo=0; childNo<entries.length; childNo++ )
                {
					d =entries[childNo];
	                if(d){
	                    d.url = d.url.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp");
	                    if(d.url.indexOf('//maps.gsi.go.jp/') != -1){
							d.url=d.url.replace('https://','//');
							d.url=d.url.replace('http://','//');
						}
	                    var dUrlType  = InitLoadLayersTxt_ProcSrc_URL2LayerType(d.url);
	                    var dUrlStyle = false;
	                    var fTileUrl  = true;
	                    var vTileSize = 256;
						var itemCount = args["tiles"];
                        var numTilesX = args["tile_n_w"];
                        var numTilesY = args["tile_n_h"];
	                    if(dUrlType.type == "tile"){
	                        if(dUrlType.ext != "img"){
	                            dUrlStyle = true;
	                        }
	                    }

	                    if(!dUrlStyle || !_Load_StyleZoom){
	                        if(d.minZoom){ if(args["z"] < d.minZoom){ fTileUrl = false; } }
	                        if(d.maxZoom){ if(args["z"] > d.maxZoom){ fTileUrl = false; } }
	                    }
	                    if(fTileUrl){
	                        var vTileZ     = args["z"];
	                        var vTileX     = args["lon_lt_x"];
	                        var vTileY     = args["lat_lt_y"];
	                        var vTileZoom  = 0;
	                        var vTileZoomX = 0;
	                        var vTileZoomY = 0;
	                        
	                        if(d.maxNativeZoom){
	                            if(args["z"] > d.maxNativeZoom){
	                                vTileZ     = d.maxNativeZoom;
	                                var vTileP = GetTileN(args["z"], vTileZ, vTileX, vTileY);
	                                vTileX     = vTileP.x;
	                                vTileY     = vTileP.y;
	                                vTileSize  = GetScaleTileSize(args["z"], vTileZ);
	                                vTileZoom  = args["z"] - vTileZ;

	                                var vTileRZ = vTileZ + vTileZoom;
	                                    vTileRP = GetTileN(vTileZ, vTileRZ, vTileX, vTileY);
	                                vTileZoomX = vTileRP.x;
	                                vTileZoomY = vTileRP.y;
	                            }
	                            else if(isMulti && args["z"] < d.maxNativeZoom && d.url.match( /\.geojson$/ )){
									isMinNative = true;
	                                vTileZ     = d.maxNativeZoom;
	                                var startX = GetTileX( vTileZ, args["lon_lt"]  );
	                                var startY = GetTileY( vTileZ, args["lat_lt"] );
	                                var endX = GetTileX( vTileZ, args["lon_rb"] );
	                                var endY = GetTileY( vTileZ, args["lat_rb"] );
	                                var vTileP = GetTileN(args["z"], vTileZ, vTileX, vTileY);
	                                vTileX     = vTileP.x;
	                                vTileY     = vTileP.y;
	                                vTileSize  = GetScaleTileSize(args["z"], vTileZ);
	                                vTileZoom  = args["z"] - vTileZ;

	                                var vTileRZ = vTileZ + vTileZoom;
	                                    vTileRP = GetTileN(vTileZ, vTileRZ, vTileX, vTileY);
	                                vTileZoomX = vTileRP.x;
	                                vTileZoomY = vTileRP.y;
	                                for( var z2 = args["z"]; z2<d.maxNativeZoom; z2++ )
	                                {
										numTilesX *= 2;
										numTilesY *= 2;
									}
									
			                        itemCount = numTilesX * numTilesY;
	                            }
	                        }

	                        if(vLayers == null){
	                            vLayers = new Array();
	                        }
	                        var dUrlType = InitLoadLayersTxt_ProcSrc_URL2LayerType(d.url);
	                        if(dUrlType != null){
	                            dItem = {
	                                  id          : ( d.id && d.id != "" ? d.id :args["ls"][n].id )
	                                , url         : d.url
	                                , url_type    : dUrlType.type
	                                , url_ext     : dUrlType.ext
	                                , url_style   : dUrlStyle
	                                , styleurl    : d.styleurl
	                                , z           : vTileZ
	                                , x           : vTileX
	                                , y           : vTileY
	                                , size        : vTileSize
	                                , zoom        : vTileZoom
	                                , zoom_x      : vTileZoomX
	                                , zoom_y      : vTileZoomY
	                                , isMinNative   : isMinNative
	                                , isMulti     : isMulti
	                                , numTilesX   : numTilesX
	                                , numTilesY   : numTilesY
	                                , zoom_min    : d.minZoom       ? d.minZoom       : null
	                                , zoom_max    : d.maxZoom       ? d.maxZoom       : null
	                                , zoom_native : d.maxNativeZoom ? d.maxNativeZoom : null
	                                , opacity     : args["ls"][n].opacity
	                                , grayscale   : args["ls"][n].grayscale
                                	, multiplytile : args["ls"][n].multiplytile
                                	, bouds : d.bounds
	                            };
	                            vLayers.push(dItem);
	                            var nItem = 1;
	                            if(dUrlType.type == "tile"){
	                                nItem = itemCount;
	                            }
	                            nLayersData += nItem;

	                            f = true;
	                        }
	                    }
	                }
	        	}
            }
        }

        if(f){
            if(oProgressBar != null){
	            $( "#" + oProgressBar.id).show();
            }

            InitLoad();
        }
        else{
            if(oProgressBar != null){
	            $( "#" + oProgressBar.id).hide();
            }
        }
    }
    else{
        url = _Load_DataSrc[0].src;

 	    $.ajax({
		      type     : "GET"
		    , url      : url
		    , dataType : "text"
		    , cache    : false
		    , success  : InitLoadLayersTxt_ProcSrc_Success
		    , error    : InitLoadLayersTxt_ProcSrc_Error
	    });
    }
};

function InitLoadLayersTxt_ProcSrc_URL2LayerType(url){
    var ret  = null;
    var type = null;
    var ext  = null;

    if(url){
	    url = url.replace(/^\s+|\s+$/g, "");

	    var matchResult = url.match(/.*\.([^.]+$)/);
	    if(matchResult){
            ext = matchResult[1];
        }

	    // タイル[geojson,{img}]
	    if(url.match(/(\{x\})/)){
            type = "tile";
            if(ext == "geojson"){
            }
            else{
                ext = "img";
            }
	    }
        // ファイル[geojson,kml]
	    else{
            if(ext == "geojson" || ext == "kml"){
                type = "file";
            }
	    }

        if(type != null){
            ret = {
                  type : type
                , ext  : ext
            };
        }
    }

	return ret;
};

var InitLoadLayersTxt_ProcSrc_Success = function(data){
	var json = JSON.parse(data);
    _Load_DataSrc[0].entries = json.layers;
    for(var i = 0; i < _Load_DataSrc[0].entries.length; i++){
        _Load_DataSrc[0].entries[i].src_url = _Load_DataSrc[0].src_url;
        InitLoadLayersTxt_Proc_Success_SRC(_Load_DataSrc[0].entries[i], _Load_DataSrc[0].entries[i].src_url);
        InitLoadLayersTxt_Proc_DataSrcSet(_Load_DataSrc[0].entries[i]);
    }

    _Load_DataSrc.shift();
    InitLoadLayersTxt_ProcSrc();
};

var InitLoadLayersTxt_ProcSrc_Error = function(){
    _Load_DataSrc.shift();
    InitLoadLayersTxt_ProcSrc();
};

function InitProgress(o){
    if(o != null && typeof o != "undefined"){
        oProgressBar      = document.createElement("div"); o     .appendChild(oProgressBar);
        oProgressBar.id             = "progressbar";
        oProgressBar.style.position = "relative";
        oProgressBar.style.top      = "300px";
        oProgressBar.style.margin   = "0 auto";
        oProgressBar.style.width    = "300px";
        oProgressBar.style.height   = "20px";
        oProgressBar.style.zIndex   = "256";	    
    }

    if(oProgressBar != null){
        $( "#" + oProgressBar.id).progressbar({value: 0});
        $( "#" + oProgressBar.id).hide();
        
    }
};

function InitProgressMsgInfo(msg){
    console.log("地理院地図３Ｄ[情報]>" + msg);
};

function InitProgressMsgError(msg){
    console.log("地理院地図３Ｄ[エラー]>" + msg);
};

function InitFrame(o){
    if(o != null){
        oFrame   = document.createElement("div"); o     .appendChild(oFrame); oFrame.style.display = "none";
        oFrame3D = document.createElement("div"); oFrame.appendChild(oFrame3D);
        {
            oFrame3D_CtrlZ    = document.createElement("div"); 
            oFrame.appendChild(oFrame3D_CtrlZ);
            oFrame3D_CtrlZ.innerHTML = 
           		"<div style=\"vertical-align  :middle;font-size:10pt;\"><div style=\"float:left; font-size:10pt;margin-right:4px;margin-bottom:3px;\">高さ方向の倍率=<input type=\"text\" id=\"ratioZ\" value=\"1.0\" style=\"width:2em;\" onChange=\"SceneGeometryZ_Value();\"/></div>"
           	+"<div style=\"font-size:12pt; float:left;vertical-align  :middle; padding-top:2px;\"><div id=\"slider_ratioZ\" style=\"font-size:12pt; width: 280px;\"></div></div>";
           	/*
                + "<table style=\"border:none;\">"
                + "<tr>"
                + "<td style=\"border:none;\">高さ方向の倍率=<input type=\"text\" id=\"ratioZ\" value=\"1.0\" style=\"width:2em;\" onChange=\"SceneGeometryZ_Value();\"/></td>"
                + "<td style=\"border:none;\"><div id=\"slider_ratioZ\" style=\"width: 300px;\"></div></td>"
                + "</tr>"
                + "</table>"
            ;
            */
        }
    }
};

function InitFrameDownload(o){
    if(o != null){
        oFrame3D_Download = document.createElement("div"); oFrame.appendChild(oFrame3D_Download);
        $(oFrame3D_Download).css({
        	"position":"absolute",
        	"bottom":"2px",
        	"left" : "2px",
        	"right": "2px"
        } );
        oFrame3D_Download.innerHTML = ""
            + "<div style=\"padding:1px;\">"
            + "<table>"
		    + "<tbody>"
            + "<tr>"
            + "<th style=\"font-weight: bold;\">STLファイル</th>"
            + "<td>色を付けられない3Dプリンタ用のデータです</td>"
            + "<td><input id=\"dl_stl\" onclick=\"showDownloadWindow('stl');\"     type=\"button\" value=\"ダウンロード\"></td>"
            + "</tr>"
            + "<tr>"
            + "<th style=\"font-weight: bold;\">VRMLファイル</th>"
            + "<td>フルカラーの3Dプリンタ用のデータです</td>"
            + "<td><input id=\"dl_vrml\" onclick=\"showDownloadWindow('vrml');\"   type=\"button\" value=\"ダウンロード\"></td>"
            + "</tr>"
            + "<tr>"
            + "<th style=\"font-weight: bold;\">WebGL用ファイル</th>"
            + "<td>ブラウザでぐるぐる回す用のファイルです（今の画面のファイル）</td>"
            + "<td><input id=\"dl_three\" onclick=\"showDownloadWindow('webgl');\" type=\"button\" value=\"ダウンロード\"></td>"
            + "</tr>"
            + "</tbody>"
            + "</table>"
            
            + "</div>"
        ;
        vFrame3D_H_Ctrl += 125;
        //+ '<div style="position:absolute; right:0; top: 0;"><a id="gsimap_link" target="_blank" style="font-size:11pt;" href="./">地理院地図で表示</a></div>'
        oGSIMapLink = $( "<a>" ).attr( {
			id : "gsimap_link",
			"target" : "_blank"
		}).html( "地理院地図で表示" );
		
		var transFrame = $( "<div>" ).addClass("trans_frame");
		oFaceTransparentCheck = $( "<input>" ).attr( {"type":"checkbox", "id":"facetrans_check"} )
			.prop( {"checked":bFaceTransparent} )
			.click(function(){
				if ( !oFaceMaterial ) return;
				if ( $(this).is(":checked") )
				{
					bFaceTransparent = true;
					oFaceMaterial.transparent = true;
					oFaceMaterial.depthTest =false;
					oFaceMaterial.depthWrite =false;
					oFaceMaterial.needsUpdate = false;
					LocationHash();
				}
				else
				{
					
					bFaceTransparent = false;
					oFaceMaterial.transparent = false;
					oFaceMaterial.depthTest =true;
					oFaceMaterial.depthWrite =true;
					oFaceMaterial.needsUpdate = true;
					LocationHash();
				}
			} );
		var transLabel = $( "<label>" ).attr({"for":"facetrans_check"}).html("表面を透過");
		transFrame.append(oFaceTransparentCheck);
		transFrame.append(transLabel);
		
    	$( oFrame ).append( oGSIMapLink);
    	$( oFrame ).append( transFrame);
    }
};

function InitLoad(){
	oRenderer = new THREE.WebGLRenderer({ antialias: true, alpha:true,logarithmicDepthBuffer: true });
	oRenderer.setSize(vFrame3D_W, vFrame3D_H);
    oRenderer.setClearColor(0xe6e6fa, 1.0)
	//oRenderer.shadowMapEnabled = true;
	oFrame3D.appendChild(oRenderer.domElement);   
	
	
	RequestLayers(vLayers, args["z"], args["lon_lt_x"], args["lat_lt_y"], args["tile_n_w"], args["tile_n_h"]);

	// 読み込み待ち
    vLayersTM_Cur = 0;
	oLayersTM = setInterval(function(){
        if(vLayersTM_Cur >= vLayersTM_Max){
		    clearInterval(oLayersTM);
            InitProgressMsgInfo("Loading...GiveUp");
        }
        else{
            vLayersTM_Cur += vLayersTM;
            if(nLayersData    <= RequestLayersN()
                &&
                args["tiles"] <= vTilesDem.length
            ){
                $( "#" + oProgressBar.id).progressbar("value", 98);
				
		        clearInterval(oLayersTM);
                setTimeout("InitLoadLayers()", 10);
	        }
        }
	}, vLayersTM);
};

function InitLoadLayers(){
    LoadLayers(args["z"], args["lon_lt_x"], args["lat_lt_y"], args["tile_n_w"], args["tile_n_h"]);

    vLayersTM_Cur = 0;
	oLayersTM = setInterval(function(){
        if(vLayersTM_Cur >= vLayersTM_Max){
		    clearInterval(oLayersTM);
            InitProgressMsgInfo("タイムアウトしました([" + (vLayersTM_Max / 1000) + "]秒)");
        }
        else{
            vLayersTM_Cur += vLayersTM;

            if(vVectors == 0 || vVectors == vVectorsN){
                // トリミング
                if(args["trim_x_s"] || args["trim_x_e"] || args["trim_y_s"] || args["trim_y_e"]){
                    if(oTextureCanvas != null){
                        vTextureCanvas_W = args["trim_y_w"];
                        vTextureCanvas_H = args["trim_y_h"];
                        var oTextureCanvas_2D = oTextureCanvas.getContext("2d");
                        var imageData = oTextureCanvas_2D.getImageData(args["trim_x_s"], args["trim_y_s"], vTextureCanvas_W, vTextureCanvas_H);
                        oTextureCanvas.width  = vTextureCanvas_W;
                        oTextureCanvas.height = vTextureCanvas_H;
                        oTextureCanvas_2D = oTextureCanvas.getContext("2d");
                        oTextureCanvas_2D.putImageData(imageData, 0, 0, 0, 0, vTextureCanvas_W, vTextureCanvas_H);
                    }
                }

		        clearInterval(oLayersTM);
                setTimeout("LoadScene()", 10);
	        }
        }
	}, vLayersTM);
};

/*-----------------------------------------------------------------------------------------------*/
// アドレス
/*-----------------------------------------------------------------------------------------------*/
function LocationHash(){
    if(oTM == null){
        oTM = setInterval(
            function(){
                var vURL = location.protocol + "//" + location.host + location.pathname;

                var date = new Date
                var hash = LocationHashCreate();
                if(vHash != hash){
                    vHash = hash;
                    location.replace("#" + vHash );
                }
            }
        , vTM);
    }
};

function LocationHashCreate(){
    var ret = "";
    if(oFrame.style.display == "block"){
        if(oCamera != null){
	        var vCameraPosX = oCamera.position.x.toFixed(3);
	        var vCameraPosY = oCamera.position.y.toFixed(3);
	        var vCameraPosZ = oCamera.position.z.toFixed(3);
	        var vCameraUpX  = oCamera.up.x.toFixed(3);
	        var vCameraUpY  = oCamera.up.y.toFixed(3);
	        var vCameraUpZ  = oCamera.up.z.toFixed(3);
	        var vCameraTgtX = oCameraCtrl.target.x.toFixed(3);
	        var vCameraTgtY = oCameraCtrl.target.y.toFixed(3);
	        var vCameraTgtZ = oCameraCtrl.target.z.toFixed(3);
	        var vCameraZ    = parseFloat(document.getElementById("ratioZ").value);


	        ret = ""
	         + "&cpx="    + vCameraPosX
             + "&cpy="    + vCameraPosY
             + "&cpz="    + vCameraPosZ
             + "&cux="    + vCameraUpX
             + "&cuy="    + vCameraUpY
             + "&cuz="    + vCameraUpZ
	         + "&ctx="    + vCameraTgtX
             + "&cty="    + vCameraTgtY
             + "&ctz="    + vCameraTgtZ
	         + "&a="      + vCameraZ
	         + "&b="      + ( bFaceTransparent ? "1" : "0" );
        }
    }
    return ret;
};

/*-----------------------------------------------------------------------------------------------*/
// 地図計算
/*-----------------------------------------------------------------------------------------------*/
function GetScale        (z         ){ return 256 * Math.pow(2, z);                  }
function GetScaleTileSize(z, zNative){ return GetScale(z) / GetScale(zNative) * 256; }

function GetTileX(z, lon){ var lng_rad = lon * Math.PI / 180; var R = 128 / Math.PI; var worldCoordX =   R * (lng_rad + Math.PI);                                                     var pixelCoordX = worldCoordX * Math.pow(2, z); var tileCoordX = Math.floor( pixelCoordX / 256); return {n:tileCoordX,px:Math.floor( pixelCoordX - tileCoordX * 256)}; }
function GetTileY(z, lat){ var lat_rad = lat * Math.PI / 180; var R = 128 / Math.PI; var worldCoordY = - R / 2 * Math.log( (1 + Math.sin(lat_rad)) / (1 - Math.sin(lat_rad)) ) + 128; var pixelCoordY = worldCoordY * Math.pow(2, z); var tileCoordY = Math.floor( pixelCoordY / 256); return {n:tileCoordY,px:Math.floor( pixelCoordY - tileCoordY * 256)}; }
function GetTileN (z, zN, x, y){ var nR = Math.pow(2, z - zN); var nX = Math.floor(x / nR); var nY = Math.floor(y / nR); return { x : nX, y : nY }; };
function GetTile2Lng(x, z){                                          return (x/Math.pow(2,z)*360-180);                               };
function GetTile2Lat(y, z){ var n=Math.PI-2*Math.PI*y/Math.pow(2,z); return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n)))); };
function CalcLatitudinallyDistance(lat, z, pxsize){ R = 6378137.0; return 2*Math.PI* R * Math.cos(lat/180.0*Math.PI) / Math.pow(2,z) / 256 * pxsize; };
function ConverUnit(lat, z, radius, unit_src, unit_to){
    if(unit_src == "m" || unit_src == "km"){ unit_src = "m"; }
    if(unit_to  == "m" || unit_to  == "km"){ unit_to  = "m"; }

    var mppx = Math.abs(Math.cos(lat / 180  * Math.PI) * 2 * Math.PI * 6378137) / Math.pow(2, z + 8);
    if     (unit_src == "m"  && unit_to == "px"){ radius = Math.floor(radius / mppx); }
    else if(unit_src == "px" && unit_to == "m" ){ radius = Math.floor(radius * mppx); }

    return radius;
};
/*-----------------------------------------------------------------------------------------------*/
// 要求：タイル
/*-----------------------------------------------------------------------------------------------*/
function RequestLayers(url, z, x, y, nTilesOTS_X, nTilesOTS_Y){
    vLayersData             = {};
    vLayersData_VectorStyle = {};
    vTilesDem               = [];
    
    // DEM
    var oTilesDem = [];
    var n_y = 0; var xx = 0;
    var n_x = 0; var yy = 0;
    var nz = Math.pow(2, 0 + z);
	for(n_y = 0; n_y < nTilesOTS_Y; n_y++){
		for(n_x = 0; n_x < nTilesOTS_X; n_x++){
            xx = x + n_x;
            yy = y + n_y;

            xx = checkTileCoord( xx, nz );
            yy = checkTileCoord( yy, nz );
            var dem_d = { data : null, z : 0, x : 0, y : 0, x14 :0, y14 : 0 };
            var dem_z = z;  dem_d.z = dem_z;
            var dem_x = xx; dem_d.x = dem_x;                
            var dem_y = yy; dem_d.y = dem_y;
            if(dem_z > vDemUrl_maxZoom){
                var dem_n = GetTileN(z, vDemUrl_maxZoom, xx, yy);
                dem_z = vDemUrl_maxZoom;
                dem_x = dem_n.x; dem_d.x14 = dem_x;
                dem_y = dem_n.y; dem_d.y14 = dem_y;
                
            }

            var dem = vDemUrl.replace("{z}", dem_z).replace("{x}", dem_x).replace("{y}", dem_y);
            if(     vDemType == "TXT"){
				
                dem_d.data = $.ajax({ url : dem });
            }
            else if(vDemType == "PNG"){
                dem_d.data = dem;
            }

            if(dem_d.data != null){
                oTilesDem.push(dem_d);
            }
        }
	}

    if(oTilesDem.length > 0){
        RequestTileDemResult(oTilesDem);
    }

    // Layer
    var fLayersVecoter = false;
    for(var nLayers = 0; nLayers < vLayers.length; nLayers++){
        var vID       = vLayers[nLayers].id;
	    var vURL      = vLayers[nLayers].url;
        var vURLI     = vURL.replace("\{z\}\/\{x\}\/\{y\}", "*").split("*");
        var vURLType  = vLayers[nLayers].url_type;
        var vURLExt   = vLayers[nLayers].url_ext;
        var vURLStyle = vLayers[nLayers].styleurl;
        if(vURLType == "tile"){
            if(vURLI.length == 2){
				if ( !vURLStyle )
                	vURLStyle = vURLI[0] + "style.js";
                z = vLayers[nLayers].z;
                x = vLayers[nLayers].x;
                y = vLayers[nLayers].y;
                var bounds = vLayers[nLayers].bouds;
                
				var maxX = nTilesOTS_X;
				var maxY = nTilesOTS_Y;
				if ( vLayers[nLayers].isMinNative )
				{
					maxX = vLayers[nLayers].numTilesX;
					maxY = vLayers[nLayers].numTilesY;
				}
                var n_y = 0; var xx = 0;
                var n_x = 0; var yy = 0;
	            for(n_y = 0; n_y < maxY; n_y++){
		            for(n_x = 0; n_x < maxX; n_x++){
                        xx = x + n_x;
                        yy = y + n_y;

                        xx = checkTileCoord( xx, nz );
                        yy = checkTileCoord( yy, nz );
                        var src = vURLI[0] + z + "/" + xx + "/" + yy + vURLI[1];
                        if(vURLExt == "img"){
							var isDraw = checkBounds( xx, yy, z, bounds );
							if ( isDraw )
							{
				                var img         = new Image();
				                img.crossOrigin = "anonymous";
				                img.src         = src;
	                            img.id          = vID;
				                img.onload      = function(){ RequestLayersData_Img(this); }
				                img.onerror     = function(){ RequestLayersData_Img(this); }
                        	}
                        	else
                        	{
								var img         = new Image();
	                            img.id          = vID;
	                            RequestLayersData_Img(img);
							}
                        }
                        else{
                            fLayersVecoter = true;
                            RequestLayersData_Vector(vLayers[nLayers], src, vURLStyle);
                        }
                    }
	            }
            }
        }
        else if(vURLType == "file"){
            fLayersVecoter = true;
            RequestLayersData_Vector(vLayers[nLayers], vURL, vURLStyle);
        }
    }

    // Layer：Vector
    if(fLayersVecoter){
        RequestLayersVector();
    }
};

function checkBounds(x,y,z,bounds)
{
	if ( !bounds ) return true;
	
	if (typeof(bounds) == "string" || bounds instanceof String) 
	{
		try {
			bounds = eval( "(" + bounds + ")" );
		}
		catch(e)
		{
			
		}
	}
	
	var latLng1 = null;
	var latLng2 = null;
	if ( bounds instanceof Array && bounds.length == 2) 
	{
		try {
			latLng1 = {
				lat : parseFloat(bounds[0][0]),
				lng : parseFloat(bounds[0][1])
			};
			latLng2 = {
				lat : parseFloat(bounds[1][0]),
				lng : parseFloat(bounds[1][1])
			};
		}
		catch(e)
		{
			
		}
	}
	
	if ( !latLng1 || !latLng2 ) return true;
	
	var minLat = latLng1.lat;
	var minLng = latLng1.lng;
	var maxLat = latLng1.lat;
	var maxLng = latLng1.lng;
	if ( minLat > latLng2.lat ) minLat = latLng2.lat;
	if ( minLng > latLng2.lng ) minLng = latLng2.lng;
	if ( maxLat < latLng2.lat ) maxLat = latLng2.lat;
	if ( maxLng < latLng2.lng ) maxLng = latLng2.lng;
	
	
	var tileMinLng = GetTile2Lng(x, z);
	var tileMaxLat = GetTile2Lat(y, z);
	
	var tileMaxLng = GetTile2Lng(x+1, z);
	var tileMinLat = GetTile2Lat(y+1, z);
	
	
	return (
		tileMinLat <= maxLat &&
		tileMaxLat >= minLat &&
		tileMinLng <= maxLng &&
		tileMaxLng >= minLng
	);
	
	
	//return false;
}

function RequestLayersVector(){
    vLayersData_VectorAjax = null;

    var fBreak = false;
    // Vector:Style
    {
        for(var id in vLayersData_VectorStyle){
            if(vLayersData_VectorStyle.hasOwnProperty(id)){
                var dLayersStyle = vLayersData_VectorStyle[id];
                if(!dLayersStyle.load){
                    vLayersData_VectorAjax = dLayersStyle;

                    $.ajax({
		                  type     : "GET"
	                    , url      : dLayersStyle.src
	                    , dataType : "text"
	                    , cache    : false
                    }
                    )
                    .done(
                        function(data, status, jqXHR){
                            if(data == null){
                                vLayersData_VectorAjax.data = "";
                            }
                            else{
                                try{
                                    vLayersData_VectorAjax.data =  eval( "(" + data + ")" );
                                    RequestLayersVectorStyle(vLayersData_VectorAjax, vLayersData_VectorAjax.data);
                                }
                                catch(e){
                                    InitProgressMsgError("VectorStyle[" + vLayersData_VectorAjax.src + "]...[" + e + "]");
                                }
                            }
                        }
                    )
                    .fail(
                        function(data, status, error){
                            vLayersData_VectorAjax.data = null;
		                    $.ajax({
				                  type     : "GET"
			                    , url      : "./js/style.js"
			                    , dataType : "text"
			                    , cache    : false
		                    }
		                    )
		                    .done(
		                        function(data, status, jqXHR){
		                            if(data == null){
		                                vLayersData_VectorAjax.data = "";
		                            }
		                            else{
		                                try{
		                                    vLayersData_VectorAjax.data =  eval( "(" + data + ")" );
		                                    RequestLayersVectorStyle(vLayersData_VectorAjax, vLayersData_VectorAjax.data);
		                                }
		                                catch(e){
		                                    InitProgressMsgError("VectorStyle[" + vLayersData_VectorAjax.src + "]...[" + e + "]");
		                                }
		                            }
		                        }
		                    )
		                    .fail(
		                        function(data, status, error){
		                            vLayersData_VectorAjax.data = null;
		                        }
		                    )
                        }
                    )
                    .always(
                        function(){
                            vLayersData_VectorAjax.load = true;
                            RequestLayersVector();
                        }
                    )

                    fBreak = true;
                    break;
                }
            }
        }
    }

    // Vector
    if(!fBreak){
        for(var id in vLayersData){
            if(vLayersData.hasOwnProperty(id)){
                var dLayers = vLayersData[id];
                for(var nLayers = 0; nLayers < dLayers.length; nLayers++){
                    if(dLayers[nLayers].type == "vector" && !dLayers[nLayers].load){
                        vLayersData_VectorAjax = dLayers[nLayers];

                        var fRequest = true;
                        if(vLayersData_VectorStyle){
                            if(vLayersData_VectorStyle.hasOwnProperty(dLayers[nLayers].id)){
                                var zoom_min = vLayersData_VectorStyle[id].zoom_min;
                                var zoom_max = vLayersData_VectorStyle[id].zoom_max;
                                if(zoom_min != null){ if(args["z"] < zoom_min){ fRequest = false; } }
                                if(zoom_max != null){ if(args["z"] > zoom_max){ fRequest = false; } }
                            }
                        }

                        if(fRequest){
                            $.ajax({
		                          type     : "GET"
	                            , url      : dLayers[nLayers].src
	                            , dataType : "text"
	                            , cache    : false
                            }
                            )
                            .done(
                                function(data, status, jqXHR){
                                    if(data == null){
                                        vLayersData_VectorAjax.data = "";
                                    }
                                    else{
                                        vLayersData_VectorAjax.data = data;
                                    }
                                }
                            )
                            .fail(
                                function(data, status, error){
                                    vLayersData_VectorAjax.data = "";
                                }
                            )
                            .always(
                                function(){
                                    vLayersData_VectorAjax.load = true;
                                    RequestLayersVector();
                                }
                            )

                            fBreak = true;
                            break;
                        }
                        else{
                            for(var nLayersFalse = 0; nLayersFalse < dLayers.length; nLayersFalse++){
                                dLayers[nLayersFalse].load = true;
                                dLayers[nLayersFalse].data = "";
                            }
                        }
                    }
                }
            }
            if(fBreak){
                break;
            }
        }
    }
};

function RequestLayersVectorStyle(vLayersData_Vector, data){
    if(data){
    	if(data.options){
            if(_Load_StyleZoom){
                if(data.options.minZoom      ){ vLayersData_Vector.zoom_min    = data.options.minZoom;       }
                if(data.options.maxZoom      ){ vLayersData_Vector.zoom_max    = data.options.maxZoom;       }
                if(data.options.maxNativeZoom){ vLayersData_Vector.zoom_native = data.options.maxNativeZoom; }
            }
        }
	}
};

function RequestLayersVectorStyleSet(vLayersData_Vector){
    var data = vLayersData_Vector.data;

    if(data && data != null && data != ""){
        data = JSON.parse(data);
        
        if(data && data.features){
            var id = vLayersData_Vector.id;
            if(vLayersData_VectorStyle){
                if(vLayersData_VectorStyle.hasOwnProperty(id)){
                    var vStyle = vLayersData_VectorStyle[id].data;
                    if(vStyle){
                        if(vStyle.geojsonOptions){
                            if(vStyle.geojsonOptions.style          || 
                               vStyle.geojsonOptions.pointToLayer   || 
                               vStyle.geojsonOptions.onEachFeature
                            ){
                                var vDataFeatures = data.features;
                                for(var n = 0; n < vDataFeatures.length; n++){
                                    try{
                                        var vType = vDataFeatures[n].geometry.type;
                                        if(vType == "LineString"      ||
                                           vType == "MultiLineString" ||
                                           vType == "Polygon"         ||
                                           vType == "MultiPolygon"    ||
                                           vType == "Point"           ||
                                           vType == "MultiPoint"
                                        ){
                                            if(vStyle.geojsonOptions.style){
                                                try{
                                                    var vOptions = vStyle.geojsonOptions.style(vDataFeatures[n]);
                                                    if(vOptions){
                                                        // LineString, MultiLineString, Polygon, MultiPolygon, Point(Circle, CircleMarker), MultiPoint(Circle, CircleMarker)
                                                        if(vOptions.stroke      != null){ data.features[n].properties._stroke      = vOptions.stroke;      }
                                                        if(vOptions.color       != null){ data.features[n].properties._color       = RequestLayersVectorStyleSetColorToHex(vOptions.color);     }
                                                        if(vOptions.weight      != null){ data.features[n].properties._weight      = vOptions.weight;      }
                                                        if(vOptions.opacity     != null){ data.features[n].properties._opacity     = vOptions.opacity;     }
														if(vOptions.dashArray     != null){ data.features[n].properties._dashArray     = vOptions.dashArray;     }
                                                        // LineString, MultiLineString, Polygon, MultiPolygon, Point(Circle, CircleMarker), MultiPoint(Circle, CircleMarker)
                                                        if(vOptions.fillColor   != null){ data.features[n].properties._fillColor   = RequestLayersVectorStyleSetColorToHex(vOptions.fillColor); }
                                                        if(vOptions.fillOpacity != null){ data.features[n].properties._fillOpacity = vOptions.fillOpacity; }

                                                        // Point(Circle, CircleMarker), MultiPoint(Circle, CircleMarker)
                                                        if(vOptions.radius      != null){ data.features[n].properties._radius  = vOptions.radius;      }
                                                    }
                                                }
                                                catch(e){
                                                    InitProgressMsgError("Vector[" + vLayersData_VectorStyle[id].src + "]...style()[" + e + "]");
                                                }
                                            }
                                        }

                                        if(vType == "Point"      ||
                                           vType == "MultiPoint"
                                        ){
                                            // Point(DivIcon, CircleMarker, Circle), MultiPoint(DivIcon, CircleMarker, Circle)
                                            if(vStyle.geojsonOptions.pointToLayer){
                                                try{
                                                    vDataFeatures[n].properties._client = "gsi.3d";
                                                    var vMarker = vStyle.geojsonOptions.pointToLayer(vDataFeatures[n], vDataFeatures[n].geometry.coordinates);
                                                    if(vMarker){
                                                        if(vMarker._layers){
                                                            for(key in vMarker._layers){
                                                                if(vMarker._layers[key].options){
                                                                    vMarker = vMarker._layers[key];
                                                                }
                                                            }
                                                        }
                                                        if(vMarker.options){
                                                            // (DivIcon, Icon)
                                                            if(vMarker.options.icon && vMarker.options.icon.options){
                                                                vMarker = vMarker.options.icon.options;

                                                                var fMarker = true;
                                                                if(data.features[n].properties._markerType){
                                                                    // (Font)
                                                                    if(data.features[n].properties._markerType == "Font"){
                                                                        fMarker = false;
                                                                    }
                                                                }

                                                                if(fMarker){
                                                                    // (DivIcon)
                                                                    if(vMarker.html){
                                                                        data.features[n].properties._markerType = "DivIcon";
                                                                        data.features[n].properties._html       = vMarker.html;
                                                                    }

                                                                    // (Icon)
                                                                    if(vMarker.iconUrl){
                                                                        data.features[n].properties._markerType = "Icon";
                                                                        data.features[n].properties._iconUrl    = vMarker.iconUrl;
                                                                    }


                                                                    // (DivIcon, Icon)
                                                                    if(vMarker.iconSize && vMarker.iconSize.length == 2){
                                                                        data.features[n].properties._iconSize    = new Array(2);
                                                                        data.features[n].properties._iconSize[0] = vMarker.iconSize[0];
                                                                        data.features[n].properties._iconSize[1] = vMarker.iconSize[1];
                                                                    }
                                                                    if(vMarker.iconAnchor && vMarker.iconAnchor.length == 2){
                                                                        data.features[n].properties._iconAnchor    = new Array(2);
                                                                        data.features[n].properties._iconAnchor[0] = vMarker.iconAnchor[0];
                                                                        data.features[n].properties._iconAnchor[1] = vMarker.iconAnchor[1];
                                                                    }
                                                                }
                                                            }
                                                            // (Circle, CircleMarker)
                                                            else if((vMarker._mRadius || vMarker._mRadius == null)){
                                                                var fMarker = false;
                                                                // Circle
                                                                if(vMarker._mRadius){
                                                                    fMarker = true;
                                                                    data.features[n].properties._markerType = "Circle";
                                                                    data.features[n].properties._radius     = vMarker._mRadius;
                                                                }
                                                                // CircleMarker
                                                                else if(vMarker.options.radius){
                                                                    fMarker = true;
                                                                    data.features[n].properties._markerType = "CircleMarker";
                                                                    data.features[n].properties._radius     = vMarker.options.radius;
                                                                }

                                                                if(fMarker){
                                                                    vMarker = vMarker.options;

                                                                    // (Circle, CircleMarker)
                                                                    if(vMarker.color      ){ data.features[n].properties._color       = RequestLayersVectorStyleSetColorToHex(vMarker.color);     }
                                                                    if(vMarker.weight     ){ data.features[n].properties._weight      = vMarker.weight;      }
                                                                    if(vMarker.opacity    ){ data.features[n].properties._opacity     = vMarker.opacity;     }

                                                                    if(vMarker.fillColor  ){ data.features[n].properties._fillColor   = RequestLayersVectorStyleSetColorToHex(vMarker.fillColor); }
                                                                    if(vMarker.fillOpacity){ data.features[n].properties._fillOpacity = vMarker.fillOpacity; }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                                catch(e){
                                                    InitProgressMsgError("Vector[" + vLayersData_VectorStyle[id].src + "]...pointToLayer()[" + e + "]");
                                                }

                                            }

                                            // (Icon)
                                            if(vStyle.geojsonOptions.onEachFeature){
                                                try{
                                                    var vMarker = new L.marker();
                                                    vStyle.geojsonOptions.onEachFeature(vDataFeatures[n], vMarker);
                                                    if(vMarker.options.icon && vMarker.options.icon.options){
                                                        var fMarker = false;

                                                        vMarker = vMarker.options.icon.options;
                                                        if(vMarker.iconUrl){
                                                            fMarker = true;
                                                            data.features[n].properties._markerType = "Icon";
                                                            data.features[n].properties._iconUrl    = vMarker.iconUrl;
                                                        }

                                                        if(fMarker){
                                                            if(vMarker.iconSize && vMarker.iconSize.length == 2){
                                                                data.features[n].properties._iconSize    = new Array(2);
                                                                data.features[n].properties._iconSize[0] = vMarker.iconSize[0];
                                                                data.features[n].properties._iconSize[1] = vMarker.iconSize[1];
                                                            }
                                                            if(vMarker.iconAnchor && vMarker.iconAnchor.length == 2){
                                                                data.features[n].properties._iconAnchor    = new Array(2);
                                                                data.features[n].properties._iconAnchor[0] = vMarker.iconAnchor[0];
                                                                data.features[n].properties._iconAnchor[1] = vMarker.iconAnchor[1];
                                                            }
                                                        }
                                                    }
                                                }
                                                catch(e){
                                                    InitProgressMsgError("Vector[" + vLayersData_VectorStyle[id].src + "]...onEachFeature()[" + e + "]");
                                                }
                                            }
                                        }
                                    }
                                    catch(e){
                                        InitProgressMsgError("Vector[" + vLayersData_VectorStyle[id].src + "]...[" + e + "]");
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return data;
};

CanvasRenderingContext2D.prototype.fillTextVertical = function(text, x, y, deg){
    var oCanvas = this;
    var oCanvasFont     = oCanvas.font.match(/(\d+)px\s?.*/);
    var vCanvasFontSize = 0;
    if(oCanvasFont.length >= 1){
        vCanvasFontSize = parseInt(oCanvasFont[1], 10);
    }

    var _text_n = -1;
    var _text_c = "";

    var _text_t = (
        function(){
            var constructor = function(v, opt){
                this.v      = v;
                this.length = v.length;

                opt = opt || {};

                this.t_Period   = opt.t_Period   || false;
                this.t_TopRight = opt.t_TopRight || false;
                this.t_Rotate90 = opt.t_Rotate90 || false;
                this.t_Join     = opt.t_Join     || false;

                this.v_RHeight  = opt.v_RHeight  || false;
            };
            return constructor;
        }
    )();

    CanvasRenderingContext2D.prototype._Text = function(text){
        var ret = [];

        var _CL = new Array(); 

        _CL.push(this._TextData(_CL, "Bracket" , "‘“（〔［｛〈《「『【⦅〘〖«〝" , 1.3));
        _CL.push(this._TextData(_CL, "Bracket" , "’”）〕］｝〉》」』】⦆〙〗≫〟", 1  ));
        _CL.push(this._TextData(_CL, "Rotate90", "‐〜゠–"));
        _CL.push(this._TextData(_CL, "Plane"   , "？！‼⁇⁈⁉"));
        _CL.push(this._TextData(_CL, "Plane"   , "・：；"));
        _CL.push(this._TextData(_CL, "Period"  , "。．"));
        _CL.push(this._TextData(_CL, "Period"  , "、，"));
        _CL.push(this._TextData(_CL, "Plane"   , "ヽヾゝゞ々〻"));
        _CL.push(this._TextData(_CL, "Rotate90", "ー"));
        _CL.push(this._TextData(_CL, "TopRight", "ぁぃぅぇぉァィゥェォっゃゅょゎゕゖッャュョヮヵヶㇰㇱㇲㇳㇴㇵㇶㇷㇸㇹㇺㇻㇼㇽㇾㇿㇷ゚"));
        _CL.push(this._TextData(_CL, "Plane"   , "￥＄￡＃€№"));
        _CL.push(this._TextData(_CL, "Plane"   , "°′″℃￠％‰㏋ℓ"));
        _CL.push(this._TextData(_CL, "Plane"   , "　"));
        _CL.push(this._TextData(_CL, "Plane"   , "あいうえおかがきぎくぐけげこごさざしじすずせぜそぞただちぢつづてでとどなにぬねのはばぱひびぴふぶぷへべぺほぼぽまみむめもやゆよらりるれろわゐゑをんゔか゚き゚く゚け゚こ゚"));
        _CL.push(this._TextData(_CL, "Plane"   , "アイウエオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヰヱヲンヴカ゚キ゚ク゚ケ゚コ゚セ゚ツ゚ト゚ヷヸヹヺ"));
        _CL.push(this._TextData(_CL, "Plane"   , "＝≠＜＞≦≧∈∋⊆⊇⊂⊃∪∩⊄⊅⊊⊋∉⌅⌆∧∨⇒⇔∥∦≡≒≪≫∽∝≢≃≅≈≶≷⊥↔⋚⋛"));
        _CL.push(this._TextData(_CL, "Plane"   , "＋－±×÷⊕⊖⊗∓"));
        _CL.push(this._TextData(_CL, "Plane"   , " "));
        _CL.push(this._TextData(_CL, "Bracket" , "（〔［", 1.3));
        _CL.push(this._TextData(_CL, "Bracket" , "）〕］", 1  ));

        var _CLAll = "";
        for(var n = 0; n < _CL.length; n++){
            _CLAll += _CL[n].v;
        }

        this._text_n = -1;
        this._text_c = "";
        var text_len = text.length;
        while(this._text_n < text_len - 1){
            this._Text_ProcNext(text);

            var pos = _CLAll.indexOf(this._text_c);
            if(pos == -1){
                 ret.push(this.Text_TypePlane()); 
            }
            else{
                var fCL = false;
                for(var n = 1; n < _CL.length; n++){
                    if(pos < _CL[n].p){
                        var o = _CL[n - 1];
                        if(     o.t == "Plane"   ){ ret.push(this.Text_TypePlane   ());          }
                        else if(o.t == "Bracket" ){ ret.push(this.Text_TypeBracket (o.arg));     }
                        else if(o.t == "Period"　){ ret.push(this.Text_TypePeriod  ());          }
                        else if(o.t == "TopRight"){ ret.push(this.Text_TypeTopRight());          }
                        else if(o.t == "Rotate90"){ ret.push(this.Text_TypeRotate90());          }
                        fCL = true;
                        break;
                    }
                }
                if(!fCL){
                    ret.push(this.Text_TypePlane());
                }
            }
        }       
        return ret;
    };

    CanvasRenderingContext2D.prototype._TextData = function(_CL, type, text, arg){
        if(!arg){
            arg = null;
        }
        var data = {};
        data.t   = type;
        data.v   = text;
        data.p   = 0;
        data.arg = arg;
        if(_CL.length > 0){
            data.p = _CL[_CL.length - 1].p + _CL[_CL.length - 1].v.length;
        }
        return data;
    };

    CanvasRenderingContext2D.prototype._Text_ProcPrev = function(text){
        this._text_n -= 1;
        this._text_c  = text.charAt(this._text_n);
        return this._text_c;
    };

    CanvasRenderingContext2D.prototype._Text_ProcNext = function(text, c){
        this._text_n += 1;
        this._text_c  = text.charAt(this._text_n);
        if(c && c !== this._text_c){
            // Error
        }
        return this._text_c;
    };

    CanvasRenderingContext2D.prototype.Text_TypePlane    = function(    ){ return new _text_t(this._text_c                                       );  };
    CanvasRenderingContext2D.prototype.Text_TypePeriod   = function(    ){ return new _text_t(this._text_c, { t_Period   : true                  }); };
    CanvasRenderingContext2D.prototype.Text_TypeBracket  = function(rate){ return new _text_t(this._text_c, { t_Rotate90 : true, v_RHeight : rate}); };
    CanvasRenderingContext2D.prototype.Text_TypeTopRight = function(    ){ return new _text_t(this._text_c, { t_TopRight : true                  }); };
    CanvasRenderingContext2D.prototype.Text_TypeRotate90 = function(    ){ return new _text_t(this._text_c, { t_Rotate90 : true                  }); };

    CanvasRenderingContext2D.prototype.proc = function(text, x, y, deg){
        if(deg < -360 || deg > 360){
            var deg_sign = 1;
            if(deg < 0){
                deg_sign = -1;
            }
            deg = (Math.abs(deg) - (Math.floor(Math.abs(deg) / 360) * 360)) * deg_sign;
        }
        if(deg == 360){
            deg = 0;
        }
        if(deg < 0){
            deg = 360 + deg;
        }

        if(deg == 0){
        }
        else{
            var vAreaY = 0;
            if(deg > 0 && deg <= 360){
                vAreaY = vCanvasFontSize;
            }
        }

        y = y + vCanvasFontSize;

        if(deg != 0){
            var vN = Math.floor(deg / 90);
            var vF = deg % 90;
            if(vF == 0){
                if(deg == 90){
                    x += -(vCanvasFontSize * 1);
                    y += -(vCanvasFontSize * 1);
                }
                if(deg == 180){
                    y += -(vCanvasFontSize * 2);
                }
                if(deg == 270){
                    x += +(vCanvasFontSize * 1);
                    y += -(vCanvasFontSize * 1);
                }
            }
            else{
                var _x_r = 0;
                var _y_r = 0;
                if(deg >    0){ _x_r = -0.015;  _y_r = -0.005;  }
                if(deg >=  10){ _x_r = -0.015;  _y_r = -0.005;  }
                if(deg >=  20){ _x_r = -0.015;  _y_r = -0.005;  }
                if(deg >=  30){ _x_r = -0.015;  _y_r = -0.005;  }
                if(deg >=  40){ _x_r = -0.016;  _y_r = -0.006;  }
                if(deg >=  50){ _x_r = -0.015;  _y_r = -0.008;  }
                if(deg >=  60){ _x_r = -0.014;  _y_r = -0.009;  }
                if(deg >=  70){ _x_r = -0.013;  _y_r = -0.010;  }
                if(deg >=  80){ _x_r = -0.012;  _y_r = -0.011;  }

                if(deg >= 100){ _x_r = -0.010;  _y_r = -0.012;  }
                if(deg >= 110){ _x_r = -0.009;  _y_r = -0.012;  }
                if(deg >= 120){ _x_r = -0.007;  _y_r = -0.013;  }
                if(deg >= 130){ _x_r = -0.006;  _y_r = -0.013;  }
                if(deg >= 140){ _x_r = -0.005;  _y_r = -0.013;  }
                if(deg >= 150){ _x_r = -0.0035; _y_r = -0.013;  }
                if(deg >= 160){ _x_r = -0.0023; _y_r = -0.0125; }
                if(deg >= 170){ _x_r = -0.0010; _y_r = -0.0120; }

                if(deg >= 190){ _x_r = +0.0010; _y_r = -0.0105; }
                if(deg >= 200){ _x_r = +0.0020; _y_r = -0.0098; }
                if(deg >= 210){ _x_r = +0.0025; _y_r = -0.0090; }
                if(deg >= 220){ _x_r = +0.0030; _y_r = -0.0080; }
                if(deg >= 230){ _x_r = +0.0033; _y_r = -0.0070; }
                if(deg >= 240){ _x_r = +0.0040; _y_r = -0.0065; }
                if(deg >= 250){ _x_r = +0.0040; _y_r = -0.0055; }
                if(deg >= 260){ _x_r = +0.0040; _y_r = -0.0045; }

                if(deg >= 280){ _x_r = +0.0035; _y_r = -0.0030; }
                if(deg >= 290){ _x_r = +0.0032; _y_r = -0.0023; }
                if(deg >= 300){ _x_r = +0.0028; _y_r = -0.0018; }
                if(deg >= 310){ _x_r = +0.0024; _y_r = -0.0012; }
                if(deg >= 320){ _x_r = +0.0020; _y_r = -0.0008; }
                if(deg >= 330){ _x_r = +0.0016; _y_r = -0.0004; }
                if(deg >= 340){ _x_r = +0.0010; _y_r = -0.0002; }
                if(deg >= 350){ _x_r = +0.0004; _y_r = -0.0001; }


                x += (vCanvasFontSize * deg * _x_r);
                y += (vCanvasFontSize * deg * _y_r);
            }
        }

        if(text.length > 0 && vCanvasFontSize > 0){
            var oText = this._Text(text);

            for(var i = 0, c = 0.0, l = oText.length; i < l; i++){
                var vText = oText[i];
                if(vText == null){
                    continue;
                }
                if(vText.t_Rotate90){
                    oCanvas.save();
                    oCanvas.translate( x ,  y);
                    oCanvas.rotate((90 + deg) * Math.PI / 180);
                    oCanvas.translate(-x , -y);

                    for(var j = 0; j < vText.length; j++){
                        var cx = 0;
                        var cy = y - vCanvasFontSize * 0.1;
                        if(vText.v_RHeight){
                            cx = x + c + j -(vText.v_RHeight) * vCanvasFontSize;
                            if(oCanvas.lineWidth == 1){
                                oCanvas.fillText(vText.v[j], cx, cy);
                            }
                            else{
                                oCanvas.strokeText(vText.v[j], cx, cy);
                            }
                            c -= (1.7 - vText.v_RHeight) * vCanvasFontSize;
                        }
                        else{
                            cx = (x + c + (j - 0.80) * vCanvasFontSize);
                            if(oCanvas.lineWidth == 1){
                                oCanvas.fillText(vText.v[j], cx, cy);
                            }
                            else{
                                oCanvas.strokeText(vText.v[j], cx, cy);
                            }
                        }
                    }
                    oCanvas.restore();
                }
                else if(vText.t_TopRight){
                    oCanvas.save();
                    oCanvas.translate( x ,  y);
                    oCanvas.rotate(deg * Math.PI / 180);
                    oCanvas.translate(-x , -y);

                    var cx = x + vCanvasFontSize * 0.2;
                    var cy = y + c;
                    if(oCanvas.lineWidth == 1){
                        oCanvas.fillText(vText.v, cx, cy);
                    }
                    else{
                        oCanvas.strokeText(vText.v, cx, cy);
                    }
                    oCanvas.restore();
                }
                else if(vText.t_Period){
                    oCanvas.save();
                    oCanvas.translate( x ,  y);
                    oCanvas.rotate(deg * Math.PI / 180);
                    oCanvas.translate(-x , -y);

                    var cx = x + vCanvasFontSize * 0.5;
                    var cy = y + c;
                    if(oCanvas.lineWidth == 1){
                        oCanvas.fillText(vText.v, cx, cy);
                    }
                    else{
                        oCanvas.strokeText(vText.v, cx, cy);
                    }
                    oCanvas.restore();
                }
                else{
                    oCanvas.save();
                    oCanvas.translate( x ,  y);
                    oCanvas.rotate(deg * Math.PI / 180);
                    oCanvas.translate(-x , -y);

                    var cx = x;
                    var cy = y + c;
                    if(oCanvas.lineWidth == 1){
                        oCanvas.fillText(vText.v, cx, cy);
                    }
                    else{
                        oCanvas.strokeText(vText.v, cx, cy);
                    }
                    oCanvas.restore();
                }
                c += vText.length * vCanvasFontSize;
            }
        }
    };

    this.proc(text, x, y, deg);
};

function RequestLayersVectorStyleSetColorToHex(color) {
    
    if(color.substr(0, 1) == "#" && color.length == 4){
        var r = color.substr(1, 1);
        var g = color.substr(2, 1);
        var b = color.substr(3, 1);

        color = "#" + r + r + g + g + b + b;
    }

    return color;
};

function RequestLayersData(id, o){
    if(!(id in vLayersData)){
        vLayersData[id] = new Array();
    }

    vLayersData[id].push(o);
};

function RequestLayersData_Img(o){
    o.type       = "img";
    o.load       = true;
    o.loadCanvas = false;
    RequestLayersData(o.id, o);
};

function RequestLayersData_Vector(vLayer, src, src_style){
    var id = vLayer.id;

    var o = {
          id         : id
        , type       : "vector"
        , src        : src
        , load       : false
        , loadCanvas : false
        , data       : ""
    };

    if(vLayer.url_style){
        if(src_style && src_style != ""){
            if(!(id in vLayersData_VectorStyle)){
                vLayersData_VectorStyle[id] = {
                    id          : id
                  , src         : src_style
                  , load        : false
                  , zoom_min    : vLayer.zoom_min
                  , zoom_max    : vLayer.zoom_max
                  , zoom_native : vLayer.zoom_native
                  , data        : null
                };
            }
        }
    }
    RequestLayersData(id, o);
};

function RequestLayersN(){
    var n = 0;
    if(vLayersData){
        for(var id in vLayersData){
            if(vLayersData.hasOwnProperty(id)){
                var dLayers = vLayersData[id];
                for(var nLayers = 0; nLayers < dLayers.length; nLayers++){
                    var dLayersItem = dLayers[nLayers];
                    if(dLayersItem.type == "img"){
                        n += dLayers.length;
                        break;
                    }
                    else{
                        if(dLayers[nLayers].load){
                            n++;
                        }
                    }
                }
            }
        }
    }
    if(vLayersData_VectorStyle){
        for(var id in vLayersData){
            n++;
        }
    }

    return n;
};

function RequestTileDemResult(o){
    if(o != null && o.length >= 1){
        if(     vDemType == "TXT"){
            $.when(o[0].data)
                .done(
                    function(data, status, jqXHR){
                        vTilesDem.push(RequestTileDemResultMake(data, o[0].z, o[0].x, o[0].y, o[0].x14, o[0].y14));
                    }
                )
                .fail(
                    function(data, status, error){
                        vTilesDem.push(""); 
                    }
                )
                .always(
                    function(){
                        RequestTileDemResult_Progress();
                        o.shift();
                        RequestTileDemResult(o);
                    }
                )
            ;
        }
        else if(vDemType == "PNG"){
            var oImg = new Image();
            oImg.crossOrigin    = "anonymous";
            oImg.style.position = "absolute";
            oImg.onload = function(){
                var data = "";

                var oCanvasTile        = document.createElement("canvas");
                    oCanvasTile.width  = this.width;
                    oCanvasTile.height = this.height;  
                var oCanvasTileContext = oCanvasTile.getContext("2d");
                oCanvasTileContext.drawImage(this, 0, 0);
                for(var ny = 0; ny < oCanvasTile.height; ny++){
                    var data_x = "";
                    for(var nx = 0; nx < oCanvasTile.width; nx++){
                        var data_dem = oCanvasTileContext.getImageData(nx, ny, 1, 1).data;
                        var alt  = 0;
                        if(data_dem.length >= 3){
                            var r = data_dem[0];
                            var g = data_dem[1];
                            var b = data_dem[2];
                            var x = r * 256 * 256 + g * 256 + b;
                            var h = (x < Math.pow(2, 23)) ? x : x - Math.pow(2, 24);
                            if( h !== -Math.pow( 2, 23)){
                                alt = h;
                            }
                        }

                        if(data_x != ""){
                            data_x += ",";
                        }
                        data_x += alt;
                    }
                    data += data_x;
                    if(ny != 255){
                        data += "\n";
                    }
                }
                oCanvasTileContext = null;
                oCanvasTile        = null;

                vTilesDem.push(RequestTileDemResultMake(data, o[0].z, o[0].x, o[0].y, o[0].x14, o[0].y14));

                RequestTileDemResult_Progress();
                o.shift();
                RequestTileDemResult(o);
            };
            oImg.onerror = function(){
                var data = "";

                var ret = new Array();
                for(var ny = 0; ny < 256; ny++){
                    var data_x = "";
                    for(var nx = 0; nx < 256; nx++){
                        if(data_x != ""){
                            data_x += ",";
                        }
                        data_x += "0";
                    }
                    data += data_x;
                    if(ny != 255){
                        data += "\n";
                    }
                }

                vTilesDem.push(data);

                RequestTileDemResult_Progress();
                o.shift();
                RequestTileDemResult(o);
            };
            oImg.src = o[0].data;
        }
    }
};

function RequestTileDemResultMake(data, z, x, y, x14, y14){
    if(z > vDemUrl_maxZoom){
        var vDem14 = data.split("\n");
        if(vDem14.length >= 256){
            var nPX = 256 / 16;
            var nR  = Math.pow(2, z - vDemUrl_maxZoom);
            var nRR = Math.pow(2, 18 - z + vDemUrl_maxZoom -14);
            var nX = (x - (x14 * nR)) * nRR;
            var nY = (y - (y14 * nR)) * nRR;
            var nPXT  = nPX * nRR;

            var nX_S  = nX * nPX;
            var nX_E  = nX_S + nPXT;
            var nY_S  = nY * nPX;
            var nY_E  = nY_S + nPXT;
            var vDem_N = "";
            for(iY = nY_S; iY < nY_E; iY++){
                for(iYN = 0; iYN < nR; iYN++){
                    var vDem14_X = vDem14[iY].split(",");
                    if(vDem14_X.length >= 256){
                        if(vDem_N != ""){
                            vDem_N += "\n";
                        }
                        var vDem_N_X = "";
                        for(iX = nX_S; iX < nX_E; iX++){
                            for(iXN = 0; iXN < nR; iXN++){
                                if(vDem_N_X != ""){
                                    vDem_N_X += ",";
                                }
                                vDem_N_X += vDem14_X[iX];
                            }
                        }
                        vDem_N += vDem_N_X;
                    }
                }
            }
            data = vDem_N;
        }
    }
    return data;
};

function RequestTileDemResult_Progress(){
    var p = 0.0;
    var pMax = args["tile_n"] * (args["tile_n"] * 2);
    var pN   = RequestLayersN() + vTilesDem.length;

    if(pN > 0){
        if(pN == pMax){
            p = 100;
        }
        else{
            p = (1 - ((pMax - pN + 1) / pMax)) * 100;
        }
    }
    if(oProgressBar != null){
        if(p >= 100){
            p = 98;
        }
	    $( "#" + oProgressBar.id).progressbar("value", p);
    }
};

/*-----------------------------------------------------------------------------------------------*/
// LoadLayers
/*-----------------------------------------------------------------------------------------------*/
function LoadLayers(z, x, y, nTilesOTS_X, nTilesOTS_Y){

    oTextureCanvas = document.createElement("canvas");
    oTextureCanvas.style.display = "none";
    oTextureCanvas.width         = vTextureCanvas_W;
    oTextureCanvas.height        = vTextureCanvas_H;
    oFrame.appendChild(oTextureCanvas);
	var oTextureCanvas_2D = oTextureCanvas.getContext("2d");
	oTextureCanvas_2D.fillStyle = "rgb(255, 255, 255)";
	oTextureCanvas_2D.fillRect(0, 0, vTextureCanvas_W, vTextureCanvas_H);
	var wTileImg = vTextureCanvas_W / nTilesOTS_X;
	var hTileImg = vTextureCanvas_H / nTilesOTS_Y;

    // DEM
    var sizeW = 256 * nTilesOTS_X;
    var sizeH = 256 * nTilesOTS_Y;
    vDem = new Array(256 * nTilesOTS_X * 256 * nTilesOTS_Y);
    var nx_tile = 0;
    var ny_tile = 0;
    
    
    for( ny_tile=0; ny_tile<nTilesOTS_Y; ny_tile++ )
    {
		for( nx_tile=0; nx_tile<nTilesOTS_X; nx_tile++ )
	    {
			var i= ny_tile * nTilesOTS_X + nx_tile;
			
			var vTilesDemAry = null;
	        if(vTilesDem[i] != ""){
	            vTilesDemAry = vTilesDem[i].replace(/\n/g,",").split(",");
	        }
	        
	        for(ny_dem = 0; ny_dem < 256; ny_dem++){
				for(nx_dem = 0; nx_dem < 256; nx_dem++){
	                var vTilesDemAryV = 0;
	                if(vTilesDemAry != null){
					    vTilesDemAryV = vTilesDemAry[256 * ny_dem + nx_dem];
	    				if(vTilesDemAryV == "e"){
		    				vTilesDemAryV = 0;
	                    }
					}
					//if ( vTilesDemAryV <= 0 ) vTilesDemAryV= 1000;
					var xx = ( nx_tile * 256 ) +nx_dem;
					var yy = ( ny_tile * 256 ) +ny_dem;
					
					vDem[sizeW * yy + xx] = vTilesDemAryV;
					
				}
	    	}
		}
	}
    // トリミング
    {
        if(args["trim_x_s"] || args["trim_x_e"] || args["trim_y_s"] || args["trim_y_e"]){
            //var vDemN  = nTilesOTS_Y * 256;
            
            var vDemXS = args["trim_x_s"];
            var vDemXE = args["trim_x_e"];
            var vDemYS = args["trim_y_s"];
            var vDemYE = args["trim_y_e"];
            vDem = LoadLayers_Dem_Trim(vDem, nTilesOTS_X * 256, nTilesOTS_Y * 256, vDemXS, vDemXE, vDemYS, vDemYE);
            
            nTilesOTS_X = args["trim_n_x"];
            nTilesOTS_Y = args["trim_n_y"];
        }
        vSceneMesh = LoadLayers_DemNormarize(vDem, args["w"], args["h"], 1);
    }
    LoadLayersProc(oTextureCanvas_2D, x, y, wTileImg, hTileImg);
    
};

function LoadLayersProc(oTextureCanvas_2D, x, y, wTileImg, hTileImg){
    vLoadLayersProc_oTextureCanvas_2D = oTextureCanvas_2D;
    vLoadLayersProc_x                 = x;
    vLoadLayersProc_y                 = y;
    vLoadLayersProc_wTileImg          = wTileImg;
    vLoadLayersProc_hTileImg          = hTileImg;

    var fProc = true;
    // Layer
    for(var nLayers = 0; nLayers < vLayers.length; nLayers++){
        if(!fProc){
            break;
        }

        var vID      = vLayers[nLayers].id;
	    var vURL     = vLayers[nLayers].url;
        var vURLI    = vURL.replace("\{z\}\/\{x\}\/\{y\}", "*").split("*");
        var vURLType = vLayers[nLayers].url_type;
        var vURLExt  = vLayers[nLayers].url_ext;

        var vZoom    = vLayers[nLayers].zoom;
        var vZoom_x  = vLayers[nLayers].zoom_x;
        var vZoom_y  = vLayers[nLayers].zoom_y;
        var vLayer   = vLayersData[vID];
        if(vURLType == "tile"){
            var strRgx = null;
 	        strRgx = vURL.replace("{z}", "(\\d\+)").replace("{x}", "\\d\+"  ).replace("{y}", "\\d\+"  ); var rgxZfromURL = new RegExp(strRgx); 
	        strRgx = vURL.replace("{z}", "\\d\+"  ).replace("{x}", "(\\d\+)").replace("{y}", "\\d\+"  ); var rgxXfromURL = new RegExp(strRgx);
	        strRgx = vURL.replace("{z}", "\\d\+"  ).replace("{x}", "\\d\+"  ).replace("{y}", "(\\d\+)"); var rgxYfromURL = new RegExp(strRgx);

            var nx_tile = 0;
            var ny_tile = 0;
	        for(var i = 0; i < vLayer.length; i++, ny_tile++){
                if(!fProc){
                    break;
                }

                if(!vLayer[i].loadCanvas){
                    vLayer[i].loadCanvas = true;

		            var imgURL = vLayer[i].src;
                    var nr  = 1;
		            var zz  = -1;
                    var x0  = x;
                    var y0  = y;
		            var xx  = -1;
		            var yy  = -1;
		            if(rgxZfromURL.test(imgURL)){ zz = parseInt(RegExp.$1); }
		            if(rgxXfromURL.test(imgURL)){ xx = parseInt(RegExp.$1); }
		            if(rgxYfromURL.test(imgURL)){ yy = parseInt(RegExp.$1); }

		            var nx = xx - x0;
		            var ny = yy - y0;

                    var nz = Math.pow( 2, zz );
                    nx = checkTileCoord( nx, nz );
                    ny = checkTileCoord( ny, nz );
                    
                    if(vZoom > 0){
                        var zTo = zz + vZoom;
                        var pTo = GetTileN(zz, zTo, xx, yy);

                        nr = Math.pow(2, vZoom);
                        var nxr = 0; if((x0 - vZoom_x) > 0){ nxr = (x0 - vZoom_x) / nr; }
                        var nyr = 0; if((y0 - vZoom_y) > 0){ nyr = (y0 - vZoom_y) / nr; }
                        x0 = vZoom_x;
                        y0 = vZoom_y;
                        xx = pTo.x; if((xx - x0) > 0){ nx = (xx - x0) / nr; }else { nx = 0; } nx -= nxr;
                        yy = pTo.y; if((yy - y0) > 0){ ny = (yy - y0) / nr; }else { ny = 0; } ny -= nyr;
                    }
                    var nw = wTileImg * nr;
                    var nh = hTileImg * nr;
                    if(vURLExt == "img"){
                        LoadLayersCanvas(oTextureCanvas_2D, vLayers[nLayers], vLayer[i], nx, ny, nw, nh);
                    }
                    else{
                        try{
                            if(vLayer[i].data != ""){
                                var data = LoadLayersProcVectorData(vLayer[i]);
                                if(data){
                                    if(vURLExt == "geojson"){
                                        if(data.features){
                                            if(LoadLayers_Vectors(oTextureCanvas_2D, data.features, vLayers[nLayers])){
                                                fProc = false;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        catch(e){
                            InitProgressMsgError("Vector[" + vLayer[i].src + "]...[" + e + "]");
                        }
                    }

	            }
            }
        }
        else if(vURLType == "file"){
            if(vLayer.length > 0){
                if(!vLayer[0].loadCanvas){
                    vLayer[0].loadCanvas = true;
                    try{
                        if(vURLExt  == "geojson" ||
                            vURLExt == "kml"
                        ){
                            var data = null;

                            if(     vURLExt == "geojson"){ data = LoadLayersProcVectorData   (vLayer[0]     ); }
                            else if(vURLExt == "kml"    ){ data = LoadLayersProcVectorDataKML(vLayer[0].data); }
                            if(data && data != null){
                                if(LoadLayers_Vectors(oTextureCanvas_2D, data.features, vLayers[nLayers])){
                                    fProc = false;
                                }
                            }
                        }
                    }
                    catch(e){
                        InitProgressMsgError("Vector[" + vLayer[0].src + "]...[" + e + "]");
                    }
                }
            }
        }
    }
 
    if(fProc){
        // Layer：Vector
        LoadLayers_VectorsOpener(oTextureCanvas_2D);

    	//oTextureCanvas_2D.save();
    	//oTextureCanvas_2D.restore();
    }
};

function LoadLayersProcCall(){
    LoadLayersProc(vLoadLayersProc_oTextureCanvas_2D, vLoadLayersProc_x, vLoadLayersProc_y, vLoadLayersProc_wTileImg, vLoadLayersProc_hTileImg);
};

function LoadLayersProcVectorData(vLayer){
    var data = JSON.parse(vLayer.data);
    if(data){
        data = RequestLayersVectorStyleSet(vLayer);
    }
    return data;
};

function LoadLayersProcVectorDataKML(data){
    var kml  = (new DOMParser()).parseFromString(data, 'text/xml');
    if(kml){
        data = toGeoJSON.kml(kml);
        if(data.features){
            for(var n = 0; n < data.features.length; n++){
                initializeZData( data.features[n]);
                if(data.features[0].geometry && data.features[0].properties){
                    var data_type = data.features[n].geometry.type;
                    if(data_type){
                        var data_styleUrl = data.features[n].properties.styleUrl;
                        if(data_styleUrl && data_styleUrl != ""){
                            var data_style_id = data_styleUrl.replace(/\./g, "\\\.");
                            var data_style = $(kml).find(data_style_id);
                            if(data_style.length >= 0){
                                data_style = data_style.eq(0);
                                if(data_style){
                                    var _markerType = data_type;
                                    if(_markerType == "Point"      || 
                                       _markerType == "LineString" || 
                                       _markerType == "Polygon"
                                    ){
                                        if(_markerType == "Point"){
                                           _markerType = "Icon";
                                        }

                                        data.features[n].properties._markerType = _markerType;
                                        LoadLayersProcVectorDataKML_properties(data.features[n], data_style);
                                    }
                                }

                            }

                        }
                    }
                }
            }
        }
    }
    else{
        data = null;
    }

    return data;
};

function initializeZData(data) {
	
				
	if(data.properties._markerType == "Icon" || data.geometry.type == "Marker"){
		data.properties._markerType = "Icon";
		if ( data.geometry.coordinates.length >= 3 && 
			( data.geometry.coordinates[2] != "" && data.geometry.coordinates[2] != 0 ) )
		{
			data._bounds = {
				lt :{
					lat : data.geometry.coordinates[1],
					lng :data.geometry.coordinates[0]
				},
				rb :{
					lat : data.geometry.coordinates[1],
					lng :data.geometry.coordinates[0]
				}
			};
			data._hasZdata = true;
		}
    }
	else if(data.properties._markerType == "LineString" ||
	        data.properties._markerType == "Polygon" ||
	        data.geometry.type == "LineString" || 
	        data.geometry.type == "Polygon"
	){
		if(data.properties._markerType == "Polygon" || data.geometry.type == "Polygon"){
			data.properties._markerType = "Polygon";
			var bounds = null;
			for( var i=0; i<data.geometry.coordinates[0].length; i ++ )
			{
				var p = data.geometry.coordinates[0][i];
				if ( p.length >= 3 && 
					( p[2] != "" && p[2] != 0 ) )
				{
					data._hasZdata = true;
					if ( !bounds )
					{
						bounds = {
							lt :{
								lat : p[1],
								lng :p[0]
							},
							rb :{
								lat : p[1],
								lng :p[0]
							}
						};
					}
					else
					{
						if ( bounds.lt.lat < p[1] ) bounds.lt.lat = p[1];
						if ( bounds.lt.lng > p[0] ) bounds.lt.lng = p[0];
						if ( bounds.rb.lat > p[1] ) bounds.rb.lat = p[1];
						if ( bounds.rb.lng < p[0] ) bounds.rb.lng = p[0];
					}
				}
			}
			
			data._bounds = bounds;
		}
		else
		{
			
			data.properties._markerType = "LineString";
			var bounds = null;
			for( var i=0; i<data.geometry.coordinates.length; i ++ )
			{
				var p = data.geometry.coordinates[i];
				if ( p.length >= 3 && 
					( p[2] != "" && p[2] != 0 ) )
				{
					data._hasZdata = true;
					if ( !bounds )
					{
						bounds = {
							lt :{
								lat : p[1],
								lng :p[0]
							},
							rb :{
								lat : p[1],
								lng :p[0]
							}
						};
					}
					else
					{
						if ( bounds.lt.lat < p[1] ) bounds.lt.lat = p[1];
						if ( bounds.lt.lng > p[0] ) bounds.lt.lng = p[0];
						if ( bounds.rb.lat > p[1] ) bounds.rb.lat = p[1];
						if ( bounds.rb.lng < p[0] ) bounds.rb.lng = p[0];
					}
				}
			}
			data._bounds = bounds;
		}

	}
	
	
}
function LoadLayersProcVectorDataKML_properties(data, data_style){
	data.properties._altitudeMode = data.geometry.altitudeMode;
	
    if(data.properties._markerType == "Icon"){
        var _icon = data_style.find("IconStyle").find("Icon").find("href").text();
        if(_icon){
            data.properties._iconUrl = _icon;
            data.properties._iconScale      = data_style.find("IconStyle").find("scale").text();
            if ( !data.properties._iconScale ) data.properties._iconScale  =1;
            data.properties._iconSize      = new Array(2);
            data.properties._iconSize[0]   = 20;
            data.properties._iconSize[1]   = 20;

            data.properties._iconAnchor    = new Array(2);
            data.properties._iconAnchor[0] = 10;
            data.properties._iconAnchor[1] = 10;
        }
		
		if ( data.geometry.coordinates.length >= 3 && 
			( data.geometry.coordinates[2] != "" || data.geometry.coordinates[2] == 0 ) )
		{
			data._bounds = {
				lt :{
					lat : data.geometry.coordinates[1],
					lng :data.geometry.coordinates[0]
				},
				rb :{
					lat : data.geometry.coordinates[1],
					lng :data.geometry.coordinates[0]
				}
			};
			data._hasZdata = true;
		}
    }
    else if(data.properties._markerType == "LineString" ||
            data.properties._markerType == "Polygon"
    ){
        var vKey = "";
        var _color = data_style.find("LineStyle").find("color").text();
        var _width = data_style.find("LineStyle").find("width").text();
        //var _dashArray = data_style.find("LineStyle").find("dashArray").text();
        if(_color){ 
            _color = LoadLayersProcVectorDataKML_properties_color(_color);
            if(_color != null){
                data.properties._color   = _color.color;
                data.properties._opacity = _color.opacity;
            }
        }
        if(_width){
            data.properties._weight = _width;
        }

        if(data.properties._markerType == "Polygon"){
            _color = data_style.find("PolyStyle").find("color").text();
            if(_color){
                _color = LoadLayersProcVectorDataKML_properties_color(_color);
                
                if(_color != null){
                    data.properties._fillColor   = _color.color;
                    data.properties._fillOpacity = _color.opacity;
                }
            }
            
            var bounds = null;
			for( var i=0; i<data.geometry.coordinates[0].length; i ++ )
			{
				var p = data.geometry.coordinates[0][i];
				if ( p.length >= 3 && 
					( p[2] != "" || p[2] == 0   ) )
				{
					data._hasZdata = true;
					if ( !bounds )
					{
						bounds = {
							lt :{
								lat : p[1],
								lng :p[0]
							},
							rb :{
								lat : p[1],
								lng :p[0]
							}
						};
					}
					else
					{
						if ( bounds.lt.lat < p[1] ) bounds.lt.lat = p[1];
						if ( bounds.lt.lng > p[0] ) bounds.lt.lng = p[0];
						if ( bounds.rb.lat > p[1] ) bounds.rb.lat = p[1];
						if ( bounds.rb.lng < p[0] ) bounds.rb.lng = p[0];
					}
				}
			}
			
			data._bounds = bounds;
        }
        else
        {
			
            var bounds = null;
			for( var i=0; i<data.geometry.coordinates.length; i ++ )
			{
				var p = data.geometry.coordinates[i];
				if ( p.length >= 3 && (p[2] != "" || p[2] == 0 ) )
				{
					data._hasZdata = true;
					if ( !bounds )
					{
						bounds = {
							lt :{
								lat : p[1],
								lng :p[0]
							},
							rb :{
								lat : p[1],
								lng :p[0]
							}
						};
					}
					else
					{
						if ( bounds.lt.lat < p[1] ) bounds.lt.lat = p[1];
						if ( bounds.lt.lng > p[0] ) bounds.lt.lng = p[0];
						if ( bounds.rb.lat > p[1] ) bounds.rb.lat = p[1];
						if ( bounds.rb.lng < p[0] ) bounds.rb.lng = p[0];
					}
				}
			}
			data._bounds = bounds;
		}
        
    }
    
};

function LoadLayersProcVectorDataKML_properties_color(color){
    var ret = null;
    
    if (color && color.length > 0 && color.charAt(0) == "#" )
    {
		
		return { color : color, opacity : 1 };
	}
    if(color && color.length == 8){
        var a   = color.substr(0, 2);
        var b   = color.substr(2, 2);
        var g   = color.substr(4, 2);
        var r   = color.substr(6, 2);
        a = parseInt(a, 16);
        if(a > 0){
            a = Math.round(a / 255 * 100) / 100;
        }

        ret = { color : "#" + r + g + b, opacity : a };
    }
    else if(color && color.length == 6){
        var b   = color.substr(0, 2);
        var g   = color.substr(2, 2);
        var r   = color.substr(4, 2);

        var a = parseInt("ff", 16);
        if(a > 0){
            a = Math.round(a / 255 * 100) / 100;
        }

        ret = { color : "#" + r + g + b, opacity : a };
    }

    return ret;
};

function LoadLayersCanvas(oTextureCanvas_2D, vUrl, vTile, nx, ny, wTileImg, hTileImg){
	try{
        var oCanvasGrayScale = null;

        if(vUrl.grayscale){
            var canvas = document.createElement("canvas");

            if(canvas.getContext){
                canvas.width  = Math.ceil(wTileImg);
                canvas.height = Math.ceil(hTileImg);

                var ctx = canvas.getContext("2d");
                    ctx.drawImage(vTile, 0, 0, 256 ,256, 0, 0, wTileImg, hTileImg);
                var imageData = ctx.getImageData(0, 0, wTileImg, hTileImg);
                pixelData = imageData.data;
                for(var y = 0; y < canvas.height; y++){
                    for(var x = 0; x < canvas.width; x++){
                        // (x,y)ピクセルの明度
                        var i = (y * 4 * canvas.width) + (x * 4);

                        var R = pixelData[i    ];
                        var G = pixelData[i + 1];
                        var B = pixelData[i + 2];

                        //グレースケールに変換
                        var grayScale = (R * 0.3) + (G * 0.59) + (B * .11);
                        pixelData[i    ] = grayScale;
                        pixelData[i + 1] = grayScale;
                        pixelData[i + 2] = grayScale;
                    }
                }
                ctx.putImageData(imageData, 0, 0, 0, 0, imageData.width, imageData.height);
                oFrame.appendChild(canvas);

                oCanvasGrayScale = imageData;
            }
        }

        oTextureCanvas_2D.globalAlpha = vUrl.opacity;
        if(oCanvasGrayScale != null){
            oTextureCanvas_2D.putImageData(oCanvasGrayScale, nx * wTileImg, ny * hTileImg, 0, 0, wTileImg, hTileImg);
        }
        else{
        	if (vUrl.multiplytile == 0)
        	{
              oTextureCanvas_2D.drawImage(vTile, 0, 0, 256 ,256, nx * wTileImg, ny * hTileImg, wTileImg, hTileImg);
            }
            else
            {
              oTextureCanvas_2D.globalCompositeOperation = "multiply";
              oTextureCanvas_2D.drawImage(vTile, 0, 0, 256 ,256, nx * wTileImg, ny * hTileImg, wTileImg, hTileImg);
              oTextureCanvas_2D.globalCompositeOperation = "source-over";
            }
            //oTextureCanvas_2D.drawImage(vTile, 0, 0, 256 ,256, nx * wTileImg, ny * hTileImg, wTileImg, hTileImg);
        }
        oTextureCanvas_2D.globalAlpha = 1.0;

	}
	catch(e){
	}
};

function LoadLayers_VectorsOpener(oCanvas){
    var o = window.opener;
    if(o != null){
        try{
            var v = o.Vectors();
            var v2 = [];
            if(v != null){
                v2.DataOpenner = true;
				for( var i=0; i<v.length; i++ )
				{
					if ( v[i].kmltext && v[i].kmltext != "" )
					{
						var kmlData = LoadLayersProcVectorDataKML( v[i].kmltext );

            			if ( kmlData )
            			{
							for( var j=0; j<kmlData.features.length; j++ )
							{
								v2.push( kmlData.features[j] );
							}
						}
					}
					else
						v2.push( v[i] );
				}
                LoadLayers_Vectors(oCanvas, v2, null);
            }
        }
        catch(e){
        }
    }
};

function LoadLayers_Vectors(oCanvas, oData, vUrl){
    vVectorHTML.v = null;
    if(oData.DataOpenner){
        vVectorHTML.vOpenner = true;
    }
    else{
        vVectorHTML.vOpenner = false;
    }

    try{
        var vZ           = parseInt(args["z"], 10);
        var vRange_Lon_L = args["lon_lt"]; var vRange_X_L = args["lon_lt_x"];
        var vRange_Lon_R = args["lon_rb"]; var vRange_X_R = args["lon_rb_x"];
        var vRange_Lat_T = args["lat_lt"]; var vRange_Y_T = args["lat_lt_y"];
        var vRange_Lat_B = args["lat_rb"]; var vRange_Y_B = args["lat_rb_y"];

        var nX = args["tile_n_w"] - (vRange_X_R - vRange_X_L);
        var nY = args["tile_n_h"] - (vRange_Y_B - vRange_Y_T);

        vRange_Lon_L = GetTile2Lng(vRange_X_L     , vZ);
        vRange_Lon_R = GetTile2Lng(vRange_X_R + nX, vZ);
        vRange_Lat_T = GetTile2Lat(vRange_Y_T     , vZ);
        vRange_Lat_B = GetTile2Lat(vRange_Y_B + nY, vZ);
        var vDeg2PxX = vTextureCanvas_W / (                          vRange_Lon_R      -                           vRange_Lon_L     );
        var vDeg2PxY = vTextureCanvas_H / (LoadLayers_Vectors_MercaY(vRange_Lat_T, vZ) - LoadLayers_Vectors_MercaY(vRange_Lat_B, vZ));
        var vRPX     = vTextureCanvas_W / (args["tile_n_w"] * 256);
		var vLatLngBounds = getBoxLatLngBounds( { 
			lat: args["lat"], 
			lng:args["lon"]}, 
			parseInt(args["z"]), 
			args["w"], 
			args["h"] );
        for(var n = 0; n < oData.length; n++){
            var vData = oData[n];
            if ( vData.kmltext && vData.kmltext != "" )continue;
            if ( vData._hasZdata )
            {
				if ( !oGeo3DData ) oGeo3DData = [];
				if ( vLatLngBounds.lt.lng <= vData._bounds.rb.lng 
					&& vData._bounds.lt.lng <= vLatLngBounds.rb.lng
					&& vLatLngBounds.lt.lat >= vData._bounds.rb.lat 
					&& vData._bounds.lt.lat >= vLatLngBounds.rb.lat
				)
					oGeo3DData.push( vData );
				continue;
			}
            try{
                if(vUrl != null){
                    oCanvas.globalAlpha = vUrl.opacity;
                }

                var vDataType = vData["geometry"]["type"];
                if(vDataType == "Point" || vDataType == "MultiPoint"){
                    var vDataGeometry = vData["geometry"]["coordinates"];

                    var nGeometryMax_Multi = 1;
                    if(vDataType == "MultiPoint"){
                        nGeometryMax_Multi = vDataGeometry.length;
                    }

                    for(var nGeometryMulti = 0; nGeometryMulti < nGeometryMax_Multi; nGeometryMulti++){
                        var vDataGeometryArray = vDataGeometry;
                        if(vDataType == "MultiPoint"){
                            vDataGeometryArray = vDataGeometry[nGeometryMulti];
                        }

                        if(vDataGeometryArray.length >= 2){
                            /*-------------------------------------------------------------------------------------------------------*/
                            if(     vData.properties["_markerType"]    == "Font"
                                || (vData.properties["_text_fontText"] != null && vData.properties["_text_fontText"] != "")
                            ){
                                var iDataName = "";
                                if(vData.properties["_markerType"] != "Font"){
                                    iDataName = "_text";
                                }                                

                                var vDataGeometryLon = parseFloat(vDataGeometryArray[0]);
                                var vDataGeometryLat = parseFloat(vDataGeometryArray[1]);

                                var vX        = LoadLayers_Vectors_2PX(vDataGeometryLon, vRange_Lon_L, vDeg2PxX, "lon");
                                var vY        = LoadLayers_Vectors_2PX(vDataGeometryLat, vRange_Lat_T, vDeg2PxY, "lat");
                                var vXA       = 0;
                                var vYA       = 0;

                                var vText              = vData["properties"][iDataName + "_fontText"];
                                var vTextFontWight     = vData["properties"][iDataName + "_fontWeight"];
                                var vTextFontSize      = vData["properties"][iDataName + "_fontSize"];
                                var vTextFontFamily    = vData["properties"][iDataName + "_fontFamily"];
                                var vTextFontColor     = vData["properties"][iDataName + "_fontColor"];
                                var vTextFontWriteMode = vData["properties"][iDataName + "_fontWriteMode"];
                                var vRotate            = parseFloat(vData["properties"][iDataName + "_rotate"]);
                                var vShadow            = vData["properties"][iDataName + "_Shadow"];
                                var vShadowSize        = vData["properties"][iDataName + "_Shadow_size"];
                                var vShadowFontColor   = vData["properties"][iDataName + "_Shadow_fontColor"];
                                
                                vXA = 0; if(vData["properties"][iDataName + "_anchorL"] != null){ vXA = vData["properties"][iDataName + "_anchorL"]; }
                                vYA = 0; if(vData["properties"][iDataName + "_anchorT"] != null){ vYA = vData["properties"][iDataName + "_anchorT"]; }

                                var nTextMax = 1;
                                if(vShadow){
                                    nTextMax = 2;
                                }
                                for(var nText = 0; nText < nTextMax; nText++){
                                    oCanvas.beginPath();

                                    oCanvas.lineWidth = 1.0;
                                    if(vShadow){
                                        if(nText == 0){
                                            oCanvas.lineWidth   = vShadowSize;
                                            oCanvas.strokeStyle = vShadowFontColor;
                                        }
                                    }

                                    oCanvas.font        = vTextFontWight + " " + vTextFontSize + "px " + vTextFontFamily;
                                    oCanvas.fillStyle   = vTextFontColor;
                                    if(vTextFontWriteMode == "vertical"){
                                        oCanvas.fillTextVertical(vText, (vX - vXA), (vY - vYA) + vTextFontSize, vRotate);
                                    }
                                    else{
                                        oCanvas.save();

                                        if(vRotate > 0){
                                            oCanvas.translate(vX, vY);
                                            oCanvas.rotate(vRotate * Math.PI / 180);
                                            oCanvas.translate(-vX, -vY);
                                        }
                                        if(oCanvas.lineWidth == 1){
                                            oCanvas.fillText(vText, (vX - vXA), (vY - vYA) + vTextFontSize);
                                        }
                                        else{                                        
                                            oCanvas.strokeText(vText, (vX - vXA), (vY - vYA) + vTextFontSize);
                                        }

                                        oCanvas.restore();
                                    }
                                }
                            }
                            if(vData.properties["_markerType"] == "DivIcon"){
                                var vDataGeometryLon = parseFloat(vDataGeometryArray[0]);
                                var vDataGeometryLat = parseFloat(vDataGeometryArray[1]);
                                var vX        = LoadLayers_Vectors_2PX(vDataGeometryLon, vRange_Lon_L, vDeg2PxX, "lon");
                                var vY        = LoadLayers_Vectors_2PX(vDataGeometryLat, vRange_Lat_T, vDeg2PxY, "lat");
                                var vXA       = 0; if(vData["properties"]["_iconAnchor"] != null){ vXA = parseInt(vData["properties"]["_iconAnchor"][0], 10); }
                                var vYA       = 0; if(vData["properties"]["_iconAnchor"] != null){ vYA = parseInt(vData["properties"]["_iconAnchor"][1], 10); }
                                var vText     = vData["properties"]["_html"];
                                if(vVectorPointDivIcon == "HTML2CANVAS"){
                                    if(vVectorHTML.v == null){
                                        vVectorHTML.v = new Array();
                                    }
                                    if(vVectorHTML.o == null){
                                        vVectorHTML.o                    = document.body;
                                        vVectorHTML.oCanvas              = oCanvas;
                                        vVectorHTML.oDiv                 = document.createElement("div");
                                        vVectorHTML.oDiv.style.display   = "block";
                                        vVectorHTML.oDiv.style.position  = "absolute";
                                        vVectorHTML.oDiv.style.top       = (-vVectorPointDivIcon_SizeW - 10) + "px";
                                        vVectorHTML.oDiv.style.left      = (-vVectorPointDivIcon_SizeH - 10) + "px";
                                        vVectorHTML.o.appendChild(vVectorHTML.oDiv);
                                        vVectorHTML.oIFrame              = document.createElement("iframe");
                                        vVectorHTML.oIFrame.style.width  = vVectorPointDivIcon_SizeW + "px";
                                        vVectorHTML.oIFrame.style.height = vVectorPointDivIcon_SizeH + "px";
                                        vVectorHTML.oDiv.appendChild(vVectorHTML.oIFrame);
                                    }

                                    var v = {
                                          x    : (vX - vXA)
                                        , y    : (vY - vYA)
                                        , vUrl : vUrl
                                        , src  : vData
                                        , HTML : vText
                                    }

                                    vVectorHTML.v.push(v);
                                    vVectors++;
                                }
                                else{
                                        vText     = $('<div>').html(vText).text();
                                    var vTextSize = vRPX * vVectorPointDivIcon_StyleFontSize;

                                    oCanvas.beginPath();
                                    oCanvas.font= vVectorPointDivIcon_StyleFontWeight + " " + vTextSize + "px " + vVectorPointDivIcon_StyleFontFamily;
                                    oCanvas.fillStyle   = '#000000';
                                    oCanvas.fillText(vText, (vX - vXA), (vY - vYA) + vTextSize);
                                }
                            }
                            /*-------------------------------------------------------------------------------------------------------*/
                            if(vData.properties["_markerType"] == "Icon"){
                                var vDataGeometryLon = parseFloat(vDataGeometryArray[0]);
                                var vDataGeometryLat = parseFloat(vDataGeometryArray[1]);

                                var vX   = LoadLayers_Vectors_2PX(vDataGeometryLon, vRange_Lon_L, vDeg2PxX, "lon");
                                var vY   = LoadLayers_Vectors_2PX(vDataGeometryLat, vRange_Lat_T, vDeg2PxY, "lat");
                                var vURL = vData["properties"]["_iconUrl"];
                                var vW   = 10; if(vData["properties"]["_iconSize"]   != null){ vW  = Math.floor(vRPX * parseInt(vData["properties"]["_iconSize"][0])); }
                                var vH   = 10; if(vData["properties"]["_iconSize"]   != null){ vH  = Math.floor(vRPX * parseInt(vData["properties"]["_iconSize"][1])); }
                                var vXA  =  0; if(vData["properties"]["_iconAnchor"] != null){ vXA = parseInt(vData["properties"]["_iconAnchor"][0], 10); }
                                var vYA  =  0; if(vData["properties"]["_iconAnchor"] != null){ vYA = parseInt(vData["properties"]["_iconAnchor"][1], 10); }
       						    var vScale = 1; if(vData["properties"]["_iconScale"]   != null){ vScale  = parseFloat(vData["properties"]["_iconScale"]); }
       						    vXA = Math.floor(vXA *vScale);
       						    vYA = Math.floor(vYA *vScale);
                                var vImgOpacity = 1.0;
                                if(vUrl != null){
                                    vImgOpacity = vUrl.opacity;
                                }
                                var oImg              = new Image();
                    			    oImg.crossOrigin  = "anonymous";
                                    oImg.alt          = (vX - vXA) + "," + (vY - vYA) + "," + vImgOpacity;
                                    oImg.style.width  = Math.floor(vW * vScale) + "px";
                                    oImg.style.height = Math.floor(vH * vScale) + "px";
                                    oImg.onload = function(){
                                        var vPos = this.alt.split(",");
                                        if(vPos.length == 3){
                                            var vPosX    = vPos[0];
                                            var vPosY    = vPos[1];
                                            var vOpacity = vPos[2];
                                            var vW    = this.style.width .replace("px", "");
                                            var vH    = this.style.height.replace("px", "");

                                            oCanvas.globalAlpha = vOpacity;
                                            oCanvas.drawImage(this, vPosX, vPosY, vW, vH);
                                            oCanvas.globalAlpha = 1.0;

                                            vVectorsN++;
                                        }
                                    };
                                    oImg.onerror = function(){
                                        vVectorsN++;
                                    };
                                    oImg.src = vURL.replace( "cyberjapandata.gsi.go.jp", "maps.gsi.go.jp" );
                                    if(oImg.src.indexOf('//maps.gsi.go.jp/') != -1){
                                     oImg.src=oImg.src.replace('https://','//');
                                     oImg.src=oImg.src.replace('http://','//');
                                    }
                                    vVectors++;
                            }
                            /*-------------------------------------------------------------------------------------------------------*/
                            if(vData.properties["_markerType"] == "Circle"       ||
                               vData.properties["_markerType"] == "CircleMarker"    
                            ){
                                var vDataGeometryLon = parseFloat(vDataGeometryArray[0]);
                                var vDataGeometryLat = parseFloat(vDataGeometryArray[1]);

                                var vR = vData["properties"]["_radius"];
                                if(vData.properties["_markerType"] == "Circle"){
                                    vR = ConverUnit(vDataGeometryLat, vZ, parseFloat(vR), "m", "px");
                                }
                                    vR = parseInt(vR);
                                var vX = LoadLayers_Vectors_2PX(vDataGeometryLon, vRange_Lon_L, vDeg2PxX, "lon");
                                var vY = LoadLayers_Vectors_2PX(vDataGeometryLat, vRange_Lat_T, vDeg2PxY, "lat");

                                if(vData["properties"]["_fillColor"] != null && vData["properties"]["_fillOpacity"] != null){
                                    var vStyleColor   = LoadLayers_Vevtors_PropertiesColor(vData["properties"]["_fillColor"]);
                                    var vStyleOpacity = parseFloat(vData["properties"]["_fillOpacity"]);

                                    oCanvas.beginPath();
                                    oCanvas.fillStyle = "rgba(" + vStyleColor.r + "," + vStyleColor.g + "," + vStyleColor.b + "," + vStyleOpacity + ")";
                                    oCanvas.arc(vX, vY, vR, 0, Math.PI*2, false);
                                    oCanvas.fill();
                                }
                                if(vData["properties"]["_color"] != null && vData["properties"]["_opacity"] != null){
                                    var vStyleColor   = LoadLayers_Vevtors_PropertiesColor(vData["properties"]["_color"]);
                                    var vStyleOpacity = parseFloat(vData["properties"]["_opacity"]);
                                    var vStyleWeight  = parseInt(vData["properties"]["_weight"]);

                                    oCanvas.beginPath();
                                    oCanvas.lineWidth = vStyleWeight;
                                    oCanvas.strokeStyle = "rgba(" + vStyleColor.r + "," + vStyleColor.g + "," + vStyleColor.b + "," + vStyleOpacity + ")";
                                    oCanvas.arc(vX, vY, vR, Math.PI*2, false);
                                    oCanvas.stroke();
                                }
                            }
                        }
                    }
                }
                /*-------------------------------------------------------------------------------------------------------*/
                else if(vDataType == "LineString" || vDataType == "MultiLineString" || vDataType == "Polygon" || vDataType == "MultiPolygon"){
                    var vDataGeometry = vData["geometry"]["coordinates"];
                    if(vDataGeometry.length >= 1){
                        var nFigIni = 0;
                        if(vDataType == "LineString" || vDataType == "MultiLineString"){
                            nFigIni = 1;
                        }
                        for(var nFig = nFigIni; nFig < 2; nFig++){
                            oCanvas.beginPath();
                            if(nFig == 0){
                                if(vData["properties"]["_fillColor"] != null && vData["properties"]["_fillOpacity"] != null){
                                    var vStyleColor   = LoadLayers_Vevtors_PropertiesColor(vData["properties"]["_fillColor"]);
                                    var vStyleOpacity = parseFloat(vData["properties"]["_fillOpacity"]);
                                    oCanvas.fillStyle = "rgba(" + vStyleColor.r + "," + vStyleColor.g + "," + vStyleColor.b + "," + vStyleOpacity + ")";
                                }
                            }
                            else{
                                if(vData["properties"]["_stroke"] != null){
                                    if(vData["properties"]["_stroke"] == 0){
                                        break;
                                    }
                                }

                                if(vData["properties"]["_color"] != null && vData["properties"]["_opacity"] != null){
                                    var vStyleColor   = LoadLayers_Vevtors_PropertiesColor(vData["properties"]["_color"]);
                                    var vStyleOpacity = parseFloat(vData["properties"]["_opacity"]);
                                    var vStyleWeight  = parseInt(vData["properties"]["_weight"]);
                                    oCanvas.lineWidth = vStyleWeight;
                                    oCanvas.strokeStyle = "rgba(" + vStyleColor.r + "," + vStyleColor.g + "," + vStyleColor.b + "," + vStyleOpacity + ")";
                                }
                                if(vData["properties"]["_dashArray"] != null){
									var dashArr = vData["properties"]["_dashArray"];
									if ( !(dashArr instanceof Array) )
									{
										var dashParts = dashArr.split( ',' );
										dashArr = [];
										for( var i=0; i<dashParts.length; i++ )
										{
											dashArr.push(parseInt( dashParts[i] ));
										}
									}
									if ( dashArr.length == 2 )
									{
										if ( oCanvas.setLineDash !== undefined )
											oCanvas.setLineDash(dashArr);
										else if ( oCanvas.mozDash !== undefined )
											oCanvas.mozDash = dashArr;
										
									}
									else
									{
										if ( oCanvas.setLineDash !== undefined )
											oCanvas.setLineDash([]);
										else if ( oCanvas.mozDash !== undefined )
											oCanvas.mozDash = [];
									}
								}
								else
								{
										if ( oCanvas.setLineDash !== undefined )
											oCanvas.setLineDash([]);
										else if ( oCanvas.mozDash !== undefined )
											oCanvas.mozDash = [];
								}
								//this._ctx.setLineDash([]);
							
                            }


                            var fMove = true;
                            var nGeometryMax_Multi = 1;
                            if(vDataType == "MultiPolygon" || vDataType == "MultiLineString"){
                                nGeometryMax_Multi = vDataGeometry.length;
                            }
                            for(var nGeometryMulti = 0; nGeometryMulti < nGeometryMax_Multi; nGeometryMulti++){
                                var nGeometryMax = 1;
                                if(   vDataType == "Polygon"){
                                    nGeometryMax = vDataGeometry.length;
                                }
                                else if(vDataType == "MultiPolygon" || vDataType == "MultiLineString"){
                                    nGeometryMax = vDataGeometry[nGeometryMulti].length;
                                }
                                for(var nGeometry = nGeometryMax; nGeometry != 0; nGeometry--){
                                    var vDataGeometryArray = vDataGeometry;
                                    if(vDataType == "Polygon"){
                                        vDataGeometryArray = vDataGeometry[nGeometry - 1];
                                        if(nFig == 1){
                                            oCanvas.beginPath();
                                        }

                                    }
                                    else if(vDataType == "MultiPolygon"){
                                        vDataGeometryArray = vDataGeometry[nGeometryMulti][nGeometry - 1];
                                        if(nFig == 0){
                                            oCanvas.beginPath();
                                        }
                                    }
                                    else if(vDataType == "MultiLineString"){
                                        vDataGeometryArray = vDataGeometry[nGeometryMulti];
                                    }

                                    for(var nDataGeometry = 0; nDataGeometry < vDataGeometryArray.length; nDataGeometry++){
                                        if(vDataGeometryArray[nDataGeometry].length >= 2){
                                            var vDataGeometryLon = parseFloat(vDataGeometryArray[nDataGeometry][0]);
                                            var vDataGeometryLat = parseFloat(vDataGeometryArray[nDataGeometry][1]);
                                            var vX = LoadLayers_Vectors_2PX(vDataGeometryLon, vRange_Lon_L, vDeg2PxX, "lon");
                                            var vY = LoadLayers_Vectors_2PX(vDataGeometryLat, vRange_Lat_T, vDeg2PxY, "lat");
                                            
                                            if(fMove){
                                                oCanvas.moveTo(vX, vY);
                                                fMove = false;
                                            }
                                            else{
                                                oCanvas.lineTo(vX, vY);
                                            }
                                        }
                                    }
                                    if(vDataType == "LineString" || vDataType == "MultiLineString"){
                                        oCanvas.stroke();
                                    }
                                    else if(vDataType == "Polygon" || vDataType == "MultiPolygon"){
                                        oCanvas.closePath(); 
                                        if(nGeometry - 1 == 0){
                                            if(nFig == 0){ oCanvas.fill();   }                       
                                            else         { oCanvas.stroke(); }
                                        }
                                        else{
                                            if(nFig == 0){                   }
                                            else         { oCanvas.stroke(); }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                /*-------------------------------------------------------------------------------------------------------*/
            }
            catch(e){
            }

        }
    }
    catch(e){
    }
    oCanvas.globalAlpha = 1.0;

    setTimeout(
        function(){
            LoadLayers_Vectors_HTML();
        }
    , 100);

    var ret = false;
    if(vVectorHTML.v != null){
        ret = true;
    }    
    return ret;
};

function LoadLayers_Vectors_2PX(v, gen, rpx, t){
    if(t == "lat"){
        var vZ = parseInt(args["z"], 10);
        v   = LoadLayers_Vectors_MercaY(v  , vZ);
        gen = LoadLayers_Vectors_MercaY(gen, vZ);
    }

    var l = v - gen;
    if(t == "lat"){
        if(v < gen){
            l = Math.abs(l);
        }
        else{
            l *= -1;
        }
    }

    return Math.floor(l * rpx);
};

function LoadLayers_Vectors_MercaY(y, z){
    var PI = 3.14159265358979323846264338327950288419716939937510;
    var th = PI * z / 180;
    var Merc_Scale_Factor = 1.0 * Math.cos(th);

    var phi = PI * y / 180;
    var tt = Math.tan(PI / 4.0 + phi / 2.0);

    var RMAX = 6378137.0;

    return Merc_Scale_Factor * RMAX * Math.log(tt);

};

function LoadLayers_Vectors_HTML(){
    var ret                 = false;
    var fLoadLayersProcCall = false;

    if(vVectorHTML.v != null){
        if(vVectorHTML.v.length >= 1){
            var v = vVectorHTML.v[0];
            vVectorHTML.oIFrame.contentWindow.document.body.innerHTML = v.HTML;

            try{
                html2canvas(
                 vVectorHTML.oIFrame.contentWindow.document.body
                ,{
                    onrendered: function(canvas){
                        var vImgOpacity = 1.0;
                        if(v.vUrl != null){
                            vImgOpacity = v.vUrl.opacity;
                        }

                        var oImg             = new Image();
                            oImg.crossOrigin = "anonymous";
                            oImg.alt         = v.x + "," + v.y + "," + vImgOpacity;
                        oImg.onload = function()
                        {
                            var vPos = this.alt.split(",");
                            if(vPos.length == 3){
                                var vPosX    = vPos[0];
                                var vPosY    = vPos[1];
                                var vOpacity = vPos[2];
                                vVectorHTML.oCanvas.globalAlpha = vOpacity;
                                vVectorHTML.oCanvas.drawImage(this, vPosX, vPosY, vVectorPointDivIcon_SizeW, vVectorPointDivIcon_SizeH);
                                vVectorHTML.oCanvas.globalAlpha = 1.0;
                            }

                            vVectorHTML.v.shift();
                            vVectorsN++;
                            LoadLayers_Vectors_HTML();
                        };
                        oImg.onerror = function(){
                            vVectorHTML.v.shift();
                            vVectorsN++;
                            LoadLayers_Vectors_HTML();
                        };
                        oImg.src = canvas.toDataURL("image/png");
                    }
                });
                ret = true;

            }
            catch(e){
                vVectorHTML.v.shift();
                vVectorsN++;
                InitProgressMsgError("lib.html2canvas[" + e + "]");
            }
        }
        else{
            if(!vVectorHTML.vOpenner){
                fLoadLayersProcCall = true;
            }
        }
    }

    if(!ret){
        if(vVectorHTML.o != null){
            vVectorHTML.oDiv.removeChild(vVectorHTML.oIFrame); vVectorHTML.oIFrame = null;
            vVectorHTML.o   .removeChild(vVectorHTML.oDiv   ); vVectorHTML.oDiv    = null;
            vVectorHTML.o = null;
        }
    }

    if(fLoadLayersProcCall){
        vVectorHTML.v = null;
        LoadLayersProcCall();
    }

    return ret;
};

function LoadLayers_Vevtors_PropertiesColor(v){
    var v = v.toLowerCase().replace(/#/,"");
    var r = 0;
    var g = 0;
    var b = 0;
    var a = 0;
    
    try{
        if(/^[0-9a-fA-F]{6}$/.test(v)){
            r = parseInt(v.substr(0,2), 16);
            g = parseInt(v.substr(2,2), 16);
            b = parseInt(v.substr(4,2), 16);
        }
    }
    catch(e){
    }

    return {
      r : r
    , g : g
    , b : b
    , a : a
    };
};

function LoadLayers_Dem_Trim(v, n_x, n_y, nXS, nXE, nYS, nYE){
    var ret = new Array();
    var nY_S = nYS;
    var nY_E = n_y - nYE;
    var vY = new Array();
    for(var nY = nY_S; nY < nY_E; nY++){
        var nTrim_S = (nY * n_x) + (nXS);
        var nTrim_E = (nY * n_x) + (n_x - nXE);
        var vX = v.slice(nTrim_S, nTrim_E);

        vY.push(vX);
    }
    ret = Array.prototype.concat.apply([], vY);

    return ret;
};

/* 標高タイルを正規化(一定のメッシュに間引く)
 * ・縦横最終列はその前をコピー
 */
function LoadLayers_DemNormarize(v, nTilesX, nTilesY, pxTile){
    vSceneMesh_ZMin = null;
    
	var nTilesOTS_X = nTilesX;
	var nTilesOTS_Y = nTilesY;
	
	var ret = new Array((nVertexNumY+1)*(nVertexNumX+1));
    var ny = 0;
    var nx = 0;
    var nz = 0;
	for(ny = 0; ny <= nVertexNumY; ny++){
		for(nx = 0; nx <= nVertexNumX; nx++){
            nz = ny * (nVertexNumX+1) + nx;
			if     (nx == nVertexNumX){ ret[nz] = ret[ ny      * (nVertexNumX+1) + nx - 1]; }
			else if(ny == nVertexNumY){	ret[nz] = ret[(ny - 1) * (nVertexNumX+1) + nx    ]; }
			else              {
                
                if (false )// nVertexNumX == nVertexNumY )
                {
					ret[nz] = v[ny * nTilesX * pxTile * nTilesX + nx * nTilesX];
				}
				else
				{
					
	                var xx = Math.round( nx * ( (nTilesX) / nVertexNumX ) );
	                var yy = Math.round( ny * ( (nTilesY) / nVertexNumY ) );
	                ret[nz] = v[ yy * (nTilesX*1) +xx];
	            }
                
			}

            if(isNaN(ret[nz])){
                ret[nz] = "0";
            }
		
            if(vSceneMesh_ZMin == null){
                vSceneMesh_ZMin = ret[nz];
            }
            else{
                if(parseFloat(ret[nz]) < vSceneMesh_ZMin){
                    vSceneMesh_ZMin = ret[nz];
                }
            }
		}
	}

	return ret;
};

/*-----------------------------------------------------------------------------------------------*/
// LoadScene
/*-----------------------------------------------------------------------------------------------*/
function LoadScene(){
	// シーンの設定
	oScene = new THREE.Scene();

	// 環境光の設置
	oScene.add(new THREE.AmbientLight(0x111111));

	// 平行光源の設置
	oSceneLight = new THREE.DirectionalLight(0xFFFFFF, 1.0, 0);
	oSceneLight.position.set(100, -200, 200);
	oScene.add(oSceneLight);

	// カメラ（視点）の設定
	oCamera = new THREE.PerspectiveCamera(45, vFrame3D_W / vFrame3D_H, 1, 10000);
	if(args && args["cpx"]){
		oCamera.position.set(parseFloat(args["cpx"]), parseFloat(args["cpy"]), parseFloat(args["cpz"]));
		oCamera.up.set(parseFloat(args["cux"]), parseFloat(args["cuy"]), parseFloat(args["cuz"]));
	}
	else{
		oCamera.position.set(0, -100, 100);
		oCamera.up.set(0, 0, 1);
		oCamera.lookAt( {x:0, y:0, z:0 } );
	}

	// 高さ方向の倍率の計算
	document.getElementById("ratioZ").value = 1.0;
	vSceneMeshDistanceRate = 100 / parseFloat(args["distance"]); // 実距離1mの3D空間上の長さ

	if(args && args["a"]){
		vSceneMeshZRate = parseFloat(args["a"]);
	    document.getElementById("ratioZ").value = vSceneMeshZRate;
	}

	nGeomSizeX = 100;
	nGeomSizeY = 100;
	if ( args["tile_n_px_w"] > args["tile_n_px_h"] )
	{
		
		nGeomSizeX = 100;
		nGeomSizeY = Math.floor( args["tile_n_px_h"] * ( 100 / args["tile_n_px_w"]) );
	}
	else
	{
		
		nGeomSizeY = 100;
		nGeomSizeX = Math.floor( args["tile_n_px_w"] * ( 100 / args["tile_n_px_h"]) );
	}
	// メッシュ状ジオメトリを作成する。
	var geometry = new THREE.PlaneGeometry(nGeomSizeX, nGeomSizeY, nVertexNumX, nVertexNumY);

    var material = null;
    if(oTextureCanvas != null){
	    var texture = new THREE.Texture(oTextureCanvas);
	    texture.needsUpdate = true;
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        
	    material = new THREE.MeshBasicMaterial({map: texture});
	    material.side = THREE.DoubleSide;
    }
    else{
        material = new THREE.MeshPhongMaterial( {  color: 0x00FF7F, ambient:0x990000 } );
	    material.side = THREE.DoubleSide;
    }
	oFaceMaterial = material;
	material.opacity = 1;
	if ( bFaceTransparent )
	{
		material.transparent = true;
		material.depthTest = false;
		material.depthWrite = false;
	}
	else
	{
		material.transparent = false;
		material.depthTest = true;
		material.depthWrite = true;
	}
	// 地形表面のメッシュを作成、登録する。
	oSceneMesh = new THREE.Mesh(geometry, material);
	oScene.add(oSceneMesh);
	
	LoadSceneMeshBase();
	// 高さのあるデータ表示
	Draw3DGEOData();

	// 標高値に合わせてメッシュ形状を変化させる。
	SceneGeometryZ();
	
	
	// マウス操作のためのプラグイン
	oCameraCtrl = new THREE.TrackballControls(oCamera, oFrame3D);
	if( args && args["ctx"] ){
		oCameraCtrl.target.x = parseFloat(args["ctx"]);
		oCameraCtrl.target.y = parseFloat(args["cty"]);
		oCameraCtrl.target.z = parseFloat(args["ctz"]);
	}

    InitProgress(); 

    oFrame.style.display = "block";
    EvtResize();

	// 高さ方向調整用スライダーバーを設定
	$("#slider_ratioZ").slider({
		  value : vSceneMeshZRate
		, min   : 0
		, max   : 10
		, step  : 0.1
		, slide : function(event, ui){ document.getElementById("ratioZ").value = ui.value; SceneGeometryZ_Value(); }
		, stop  : function(event, ui){ document.getElementById("ratioZ").value = ui.value; SceneGeometryZ_Value(); }
	});
	// 高さ方向調整用テキストボックスにフォーカスが当たってしまうのを防止
	document.getElementById("ratioZ").blur();

	SceneRender(); // IEの背景色フリッカーを回避
	SceneRender();
};


function getBoxLatLngBounds(center, zoom, w, h)
{
	// latLngToPoint
	center.lat = parseFloat( center.lat );
	center.lng = parseFloat( center.lng );
	w = parseInt(w);
	h = parseInt(h);
	zoom = parseInt(zoom );
	var DEG_TO_RAD = Math.PI / 180;
	var RAD_TO_DEG = 180 / Math.PI;
	var MAX_LATITUDE = 85.0511287798;
	var _a = 0.5 / Math.PI;
	var _b = 0.5;
	var _c = -0.5 / Math.PI;
	var _d = 0.5;
	
	var latLngToPoint = function( latlng, zoom )
	{
	
		var d = DEG_TO_RAD;
		var max = MAX_LATITUDE;
		var lat = Math.max(Math.min(max, latlng.lat), -max);
		var x = latlng.lng * d;
		var y = lat * d;
		y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

		var projectedPoint = {x:x,y:y};
		var scale = 256 * Math.pow(2, zoom);
		
		scale = scale || 1;
		var point = {x:0, y:0 };
		point.x = scale * (_a * projectedPoint.x + _b);
		point.y = scale * (_c * projectedPoint.y + _d);
		return point;
	};
	
	
	
	var pointToLatLng = function( point,zoom )
	{
		var scale = 256 * Math.pow(2, zoom);
		scale = scale || 1;
		var untransformedPoint =  {
			x: (point.x / scale - _b) / _a,
			y: (point.y / scale - _d) / _c
		};
		        
		//var untransformedPoint = this.transformation.untransform(point, scale);
		var d = RAD_TO_DEG;
		var lng = untransformedPoint.x * d;
		var lat = (2 * Math.atan(Math.exp(untransformedPoint.y)) - (Math.PI / 2)) * d;


		return { lat : lat, lng : lng };
	};
	
	var centerPoint = latLngToPoint( center, zoom );
	var ltLatLng = pointToLatLng( {
		x : centerPoint.x - (w/2),
		y : centerPoint.y - (h/2),
	}, zoom );
	var rbLatLng = pointToLatLng( {
		x : centerPoint.x + (w/2),
		y : centerPoint.y + (h/2),
	}, zoom );
	
	
	
		
	return { lt : ltLatLng, rb : rbLatLng, w:w, h:h };
}

var oGEODataTriangles = [];
function _latLngToPointData(viewBox,lat, lng, h)
{
	
	var latLngToPoint = function( latlng, zoom )
	{
	
        var DEG_TO_RAD = Math.PI / 180;
    	var RAD_TO_DEG = 180 / Math.PI;
    	var MAX_LATITUDE = 85.0511287798;
    	var _a = 0.5 / Math.PI;
    	var _b = 0.5;
    	var _c = -0.5 / Math.PI;
    	var _d = 0.5;
		var d = DEG_TO_RAD;
		var max = MAX_LATITUDE;
		var lat = Math.max(Math.min(max, latlng.lat), -max);
		var x = latlng.lng * d;
		var y = lat * d;
		y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

		var projectedPoint = {x:x,y:y};
		var scale = 256 * Math.pow(2, zoom);
		
		scale = scale || 1;
		var point = {x:0, y:0 };
		point.x = scale * (_a * projectedPoint.x + _b);
		point.y = scale * (_c * projectedPoint.y + _d);
		return point;
	};
	var ltPoint = latLngToPoint( viewBox.lt, parseInt( args["z"] ) );
	var rbPoint = latLngToPoint( viewBox.rb, parseInt( args["z"] ) );
	var targetPoint = latLngToPoint( {lat:lat,lng:lng}, parseInt( args["z"] ) );
	
	var x=( ( targetPoint.x - ltPoint.x ) / ( rbPoint.x - ltPoint.x ) );
	var y=( ( targetPoint.y - ltPoint.y) / Math.abs( ltPoint.y - rbPoint.y ) );
	
	/*
	var x=( ( lng - viewBox.lt.lng ) / ( viewBox.rb.lng - viewBox.lt.lng ) );
	var y=( ( lat - viewBox.rb.lat ) / Math.abs( viewBox.lt.lat - viewBox.rb.lat ) );
	*/
	//var y=(viewBox.lt.lat - lat ) * (( ( viewBox.lt.lng - viewBox.rb.lng ) / viewBox.h ));
	var z=(h - parseFloat(vSceneMesh_ZMin)) * vSceneMeshDistanceRate * vSceneMeshZRate;
	x = ( x * nGeomSizeX  )- (nGeomSizeX/2);
	y = ( (1-y) * nGeomSizeY  )- (nGeomSizeY/2);
	
	return {x:x, y:y,z:z};
}



function polyToriangles(pointArr)
{
	var ret = [];
	var p0 = {lng:0,lat:0};
	var counter = 0;
	var points = $.extend( [], pointArr );
	if ( points.length >= 3 && points[0].lng == points[points.length-1].lng && points[0].lat == points[points.length-1].lat )
		points.splice(points.length-1,1);
	
	var idx = _getFarPoint(p0,points);
	while( points.length > 3 )
	{
		counter++;
		var l = points.length;
		var triangle = [
			{lng:points[idx-1>=0?idx-1:l-1].lng,lat:points[idx-1>=0?idx-1:l-1].lat,h:points[idx-1>=0?idx-1:l-1].h},
			{lng:points[idx].lng,lat:points[idx].lat,h:points[idx].h},
			{lng:points[idx+1<l?idx+1:0].lng,lat:points[idx+1<l?idx+1:0].lat,h:points[idx+1<l?idx+1:0].h}
		];
		
		if ( _isTriangleInPoint(triangle,points ) )
		{
			idx --;
			if ( idx < 0 ) idx =points.length - 1;
		}
		else
		{
			ret.push( triangle );
			points.splice(idx,1);
			idx = _getFarPoint(p0,points);
		}
		
		if ( counter > 10000 ) break;
	}
	
	if ( points.length == 3 )
	{
		ret.push( [
			{lng:points[0].lng,lat:points[0].lat,h:points[0].h},
			{lng:points[1].lng,lat:points[1].lat,h:points[1].h},
			{lng:points[2].lng,lat:points[2].lat,h:points[2].h}
		] );
		return ret;
	}
	
	return null;
}


function _isTriangleInPoint( tri, points )
{
	var subVector = function( a, b )
	{
		var ret = {};
		ret.lng = a.lng - b.lng;
		ret.lat = a.lat - b.lat;
		return ret;
	};
	
	for( var i=0; i<points.length; i++ )
	{
		var p = points[i];
		var AB = subVector(tri[1], tri[0]);
		var BP = subVector(p, tri[1]);

		var BC = subVector(tri[2], tri[1]);
		var CP = subVector(p, tri[2]);

		var CA = subVector(tri[0], tri[2]);
		var AP = subVector(p, tri[0]);

		var c1 = AB.x * BP.y - AB.y * BP.x;
		var c2 = BC.x * CP.y - BC.y * CP.x;
		var c3 = CA.x * AP.y - CA.y * AP.x;

		if( ( c1 > 0 && c2 > 0 && c3 > 0 ) || ( c1 < 0 && c2 < 0 && c3 < 0 ) ) {
		    return true;
		}
	}
	return false;
}

function _getFarPoint(p0,points)
{
	var maxDistance = null;
	var idx =0;
	
	for( var i=0; i<points.length; i++ )
	{
		var p = points[i];
		var distance = Math.sqrt(Math.pow(p0.lng-p.lng,2) + Math.pow(p0.lat-p.lat,2));
		if ( maxDistance == null || maxDistance<distance )
		{
			maxDistance = distance;
			idx=i;
		}
	}
	
	return idx;
}



function Draw3DGEOData()
{
	if (!oGeo3DData || oGeo3DData.length <= 0) {
		$(".trans_frame").hide();
		return; 
	}
	
	//var geometry = new THREE.Geometry();
	var viewBox =getBoxLatLngBounds( { 
		lat: parseFloat(args["lat"]), 
		lng:parseFloat(args["lon"])}, 
		parseInt(args["z"]), 
		parseInt(args["tile_n_px_w"]), 
		parseInt(args["tile_n_px_h"]) );
	
	
	
	var iconNo = 0;
	for( var i=0; i<oGeo3DData.length; i++ )
	{
		if ( oGeo3DData[i].properties._markerType == "Polygon" )
		{
			var  geometry = new THREE.Geometry();
			var triangles = _draw3DGEODataPolygon( geometry, viewBox, oGeo3DData[i] );
			oGeo3DData[i].properties._fillOpacity = ( oGeo3DData[i].properties._fillOpacity || oGeo3DData[i].properties._fillOpacity == 0 ? oGeo3DData[i].properties._fillOpacity : 0.2 );
			var fillColor = oGeo3DData[i].properties._fillColor;
			fillColor = ( fillColor ? fillColor : 0x0033ff );
			var material = new THREE.MeshBasicMaterial(
				{color: fillColor, 
					opacity: oGeo3DData[i].properties._fillOpacity, 
					transparent:true, depthWrite:true, blending : THREE.NormalBlending});
			
			//var material = new THREE.MeshPhongMaterial( {  color: fillColor,
			//		opacity: 1,oGeo3DData[i].properties._fillOpacity,  transparent:true } );
			material.side = THREE.DoubleSide;
			
			geometry.computeFaceNormals();
			geometry.computeVertexNormals();
			
		    var mesh = new THREE.Mesh(geometry, material);
		    if ( !oSceneGEODataMeshArr ) oSceneGEODataMeshArr = [];
		    oSceneGEODataMeshArr.push( {
		    	type : "Polygon",
		    	triangles : triangles,
		    	mesh:mesh
		    } );
			oScene.add(mesh);
			
			
		}
		else if ( oGeo3DData[i].properties._markerType == "LineString" )
		{
			var geometry = new THREE.Geometry();
			var points = _draw3DGEODataLineString( geometry, viewBox, oGeo3DData[i] );
			oGeo3DData[i].properties._opacity = ( oGeo3DData[i].properties._opacity || oGeo3DData[i].properties._opacity == 0 ? oGeo3DData[i].properties._opacity : 0.5 );
			var color = ( oGeo3DData[i].properties._color ? oGeo3DData[i].properties._color : 0x0033ff );
			var weight = ( oGeo3DData[i].properties._weight ? oGeo3DData[i].properties._weight : 5 );
			
			
			geometry.computeFaceNormals();
			geometry.computeVertexNormals();
			
			var mesh = new THREE.Line( geometry, new THREE.LineBasicMaterial( { 
				color: color,linewidth:parseInt(weight),
				opacity: oGeo3DData[i].properties._opacity, depthWrite:true,  transparent: true
				} ) );
			//mesh.material.linewidth = 10;
		    if ( !oSceneGEODataMeshArr ) oSceneGEODataMeshArr = [];
			oSceneGEODataMeshArr.push( {
		    	type : "LineString",
		    	points : points,
		    	mesh:mesh
		    } );
			oScene.add(mesh);
			
			
		}
		else if ( oGeo3DData[i].properties._markerType == "Icon" )
		{
			var latlngPoint = {
				lat : oGeo3DData[i].geometry.coordinates[1],
				lng : oGeo3DData[i].geometry.coordinates[0],
				h : oGeo3DData[i].geometry.coordinates[2]
			};
			
			if (oGeo3DData[i].properties._altitudeMode == "relativeToGround")
			{
				var x=( ( latlngPoint.lng - viewBox.lt.lng ) / ( viewBox.rb.lng - viewBox.lt.lng ) )  * viewBox.w;
				var y=( ( latlngPoint.lat - viewBox.rb.lat ) / Math.abs( viewBox.rb.lat - viewBox.lt.lat ) )  * viewBox.h;
				
			    y = viewBox.h - y;
				latlngPoint.h = parseFloat(latlngPoint.h) + getDEMValue( x, y, viewBox );
				oGeo3DData[i].geometry.coordinates[2] = latlngPoint.h;
			}
			
			var point = _latLngToPointData( 
				viewBox, 
				latlngPoint.lat, 
				latlngPoint.lng, 
				latlngPoint.h);
            
			var iconScale = oGeo3DData[i].properties._iconScale;
			if (!iconScale ) iconScale = 1;
			
			var iconSize ={
				w:oGeo3DData[i].properties._iconSize[0] * iconScale,
				h:oGeo3DData[i].properties._iconSize[1] * iconScale
			};
			var screenSize = ( nGeomSizeX > nGeomSizeY ? nGeomSizeY :nGeomSizeX );
			iconSize.w *= (nGeomSizeX / args["w"]);
			iconSize.h *= (nGeomSizeX / args["w"]);
			
			var url = oGeo3DData[i].properties._iconUrl.replace(/cyberjapandata.gsi.go.jp/, "maps.gsi.go.jp");
			if(url.indexOf('//maps.gsi.go.jp/') != -1){
				url=url.replace('https://','//');
				url=url.replace('http://','//');
			}
			var texture = THREE.ImageUtils.loadTexture( url );
			var material = new THREE.SpriteMaterial( { map: texture, useScreenCoordinates: false,transparent:true, depthWrite:true } );
			var mesh = new THREE.Sprite( material );
			mesh.position.set( point.x, point.y, point.z );
			mesh.scale.set( iconSize.w,iconSize.h, 1.0 );
			
			var img = new Image();
			img.style.width = iconSize.w;
			img.style.height = iconSize.h;
			img.width = iconSize.w;
			img.height = iconSize.h;
			img._iconNo = iconNo;
			img.crossOrigin = "anonymous";
			img.onload = function()
			{
				try
				{
					if ( !oIconTextureCanvas )
					{
						oIconTextureCanvas = document.createElement('canvas');
						oIconTextureCanvas.width = 512;
						oIconTextureCanvas.height = 512;
					}
					var destX = ( (this._iconNo % 16 ) * 32 );
					var destY = ( Math.floor(this._iconNo / 16) * 32 );
					var iconTexture = oIconTextureCanvas.getContext('2d');
					iconTexture.drawImage( this, destX, destY, 32, 32 );
				}
				catch(e){
				}
			};
			img.src = url;
			
		    if ( !oSceneGEODataMeshArr ) oSceneGEODataMeshArr = [];
			oSceneGEODataMeshArr.push( {
		    	type : "Icon",
		    	point : latlngPoint,
		    	mesh:mesh,
		    	iconSize : iconSize,
		    	iconNo : iconNo
		    } );
			iconNo++;
			oScene.add(mesh);
			
		}
		
	}
	
}

function _draw3DGEODataIcon(geometry,viewBox, data )
{
	
}

function getDEMValue(x, y, viewBox)
{
	x = Math.round( x * ( ( nVertexNumX) / viewBox.w ) );
	y = Math.round( y * ( ( nVertexNumY) / viewBox.h ) );
	if ( x < 0 || y < 0 || x > nVertexNumX || y > nVertexNumY )return 0;
	
	//return 0;
	var result =  vSceneMesh[ y * (nVertexNumX+1) + x ];
	
	if ( result ) return parseFloat( result );
	else return 0;
}
	
function _draw3DGEODataLineString(geometry,viewBox, data )
{
	var points = [];
	
	var isRelative = ( data.properties._altitudeMode == "relativeToGround" );
	
	
	var coordinates = data.geometry.coordinates;
	
	if ( coordinates.length <= 1 )
	{
		coordinates = coordinates[0];
    	for( var i=0; i<coordinates.length; i++ )
    	{
    		var p=coordinates[i];
    		points.push( {lng:p[0],lat:p[1],h:p[2]} );
    	}

	}
	else
	{
    	for( var i=0; i<coordinates.length; i++ )
    	{
    		var p=coordinates[i];
    		
    		if ( isRelative )
    		{
    			var x=( ( p[0] - viewBox.lt.lng ) / ( viewBox.rb.lng - viewBox.lt.lng ) )  * viewBox.w;
    			var y=( ( p[1] - viewBox.rb.lat ) / Math.abs( viewBox.lt.lat - viewBox.rb.lat ) )  * viewBox.h;
    			y = viewBox.h - y;
    			var demValue = getDEMValue( x, y, viewBox );
    			p[2] = parseFloat(p[2]) + demValue;
    		}
    		points.push( {lng:p[0],lat:p[1],h:p[2]} );
    	}
	}
	for( var i=0; i<points.length; i++ )
	{
		var p1 = _latLngToPointData( viewBox, points[i].lat, points[i].lng, points[i].h );
		
		geometry.vertices.push( new THREE.Vertex( new THREE.Vector3(p1.x, p1.y, p1.z) ) );  
	}
	
	return points
}

function _draw3DGEODataPolygon(geometry,viewBox, data )
{
	var isRelative = ( data.properties._altitudeMode == "relativeToGround" );
	
	
	var points = [];
	for( var i=0; i<data.geometry.coordinates[0].length; i ++ )
	{
		var p = data.geometry.coordinates[0][i];
		
		if ( isRelative )
		{
			var x=( ( p[0] - viewBox.lt.lng ) / ( viewBox.rb.lng - viewBox.lt.lng ) )  * viewBox.w;
			var y=( ( p[1] - viewBox.rb.lat ) / Math.abs( viewBox.rb.lat - viewBox.lt.lat ) )  * viewBox.h;
			y = viewBox.h - y;
			var demValue = getDEMValue( x, y, viewBox );
			p[2] = parseFloat(p[2]) + demValue;
		}
		points.push( {lng:p[0],lat:p[1],h:p[2]} );
	}
	
	
	var triangles = polyToriangles(points);
	
	
	
	
	for( var j=0; j<triangles.length; j++ )
	{
		var p1 = _latLngToPointData( viewBox, triangles[j][0].lat, triangles[j][0].lng, triangles[j][0].h );//{x:triangles[0], y:triangles[1], z:vertexes[2]};
		var p2 = _latLngToPointData( viewBox, triangles[j][1].lat, triangles[j][1].lng, triangles[j][1].h );//{x:vertexes[3], y:vertexes[4], z:vertexes[5]};
		var p3 = _latLngToPointData( viewBox, triangles[j][2].lat, triangles[j][2].lng, triangles[j][2].h );//{x:vertexes[6], y:vertexes[7], z:vertexes[8]};
		//var n = _normal( p1, p2, p3 );
		var v1 = new THREE.Vector3(p1.x, p1.y, p1.z);
		var v2 = new THREE.Vector3(p2.x, p2.y, p2.z);
		var v3 = new THREE.Vector3(p3.x, p3.y, p3.z);
		geometry.vertices.push(new THREE.Vertex(v1));
		geometry.vertices.push(new THREE.Vertex(v2));
		geometry.vertices.push(new THREE.Vertex(v3));
		
		var face = new THREE.Face3( geometry.vertices.length-3, geometry.vertices.length-2, geometry.vertices.length-1 );
		geometry.faces.push( face );
		
	}
	
	return triangles;
}


function LoadSceneMeshBase(){
    oSceneMeshBase = new Array(5);

    var i = 0;
    var h = -1 * vSceneMeshDistanceRate * 100;

	var material = new THREE.MeshPhongMaterial({color: 0xffffff, depthWrite:false,ambient: 0xffffff, specular: 0xcccccc, shininess:50, metal:true});
	
	if ( args["frame"] == "trans" )
	{
		material.transparent = true;
		material.opacity = 0.5;
	}
	nGeomSizeX = 100;
	nGeomSizeY = 100;
	if ( args["tile_n_px_w"] > args["tile_n_px_h"] )
	{
		
		nGeomSizeX = 100;
		nGeomSizeY = Math.floor( args["tile_n_px_h"] * ( 100 / args["tile_n_px_w"]) );
	}
	else
	{
		
		nGeomSizeY = 100;
		nGeomSizeX = Math.floor( args["tile_n_px_w"] * ( 100 / args["tile_n_px_h"]) );
	}
	
	if ( args["frame"] != "none" )
    {
		var geometry = new THREE.PlaneGeometry(nGeomSizeX, nGeomSizeY, 1, 1);
		for(i = 0; i < geometry.vertices.length; i++){
			geometry.vertices[i].z = h;
		}
		geometry.vertices[0].y = -(nGeomSizeY/2);
		geometry.vertices[1].y = -(nGeomSizeY/2);
		geometry.vertices[2].y =  (nGeomSizeY/2);
		geometry.vertices[3].y =  (nGeomSizeY/2);
		geometry.computeFaceNormals();
		geometry.computeVertexNormals();
		geometry.dynamic            = true;
		geometry.verticesNeedUpdate = true;

	    oSceneMeshBase[0] = new THREE.Mesh(geometry, material);
		oScene.add(oSceneMeshBase[0]);

	    for(n = 1; n < 5; n++){
			
			if     (n == 1)geometry = new THREE.PlaneGeometry(nGeomSizeX, 1,nVertexNumX, 1);
		    else if(n == 2)geometry = new THREE.PlaneGeometry(nGeomSizeY, 1,nVertexNumY, 1);
		    else if(n == 3)geometry = new THREE.PlaneGeometry(nGeomSizeY, 1,nVertexNumY, 1);
		    else if(n == 4)geometry = new THREE.PlaneGeometry(nGeomSizeX, 1,nVertexNumX, 1);
		    
		    for(i = 0; i < geometry.vertices.length; i++){
				
			    geometry.vertices[i].z = h;

	            x = null;
	            y = null;
	            if     (n == 1){ x = null;       y = -(nGeomSizeY/2);                 }
	            else if(n == 2){ x =  -(nGeomSizeX/2);      y =  (nGeomSizeY/2)-nGeomSizeY/nVertexNumY*(i%(nVertexNumY+1)); }
	            else if(n == 3){ x =   (nGeomSizeX/2);      y = -(nGeomSizeY/2)+nGeomSizeY/nVertexNumY*(i%(nVertexNumY+1)); }
	            else if(n == 4){ x =   (nGeomSizeX/2)-nGeomSizeX/nVertexNumX*(i%(nVertexNumX+1)); y =  (nGeomSizeY/2);                 }

	            if(x != null){ geometry.vertices[i].x = x; }
	            if(y != null){ geometry.vertices[i].y = y; }
		    }

	        oSceneMeshBase[n] = new THREE.Mesh(geometry, material);
	        oScene.add(oSceneMeshBase[n]);
	    }
    }
};

/*-----------------------------------------------------------------------------------------------*/
// Scene
/*-----------------------------------------------------------------------------------------------*/

// 標高値に合わせてジオメトリの形状を変更する。
function SceneGeometryZ(){  
    var n  = 0;
    var nz = 0;  
	for(ny = 0; ny <= nVertexNumY; ny++){
        for(nx = 0; nx <= nVertexNumX; nx++){
            nz = ny * (nVertexNumX+1) + nx;
			oSceneMesh.geometry.vertices[nz].z = (vSceneMesh[nz] - vSceneMesh_ZMin) * vSceneMeshDistanceRate * vSceneMeshZRate;
		}
	}
	oSceneMesh.geometry.computeFaceNormals();
	oSceneMesh.geometry.computeVertexNormals();
	oSceneMesh.geometry.dynamic            = true;
	oSceneMesh.geometry.verticesNeedUpdate = true;
	
    if(oSceneMeshBase != null && args["frame"] != "none"){
        for(n = 1; n < 5; n++){
			switch( n )
			{
				case 1:
				//下
					for(i = 0; i < (nVertexNumX+1); i++){
						nz = (nVertexNumY) * (nVertexNumX+1) + i;
						try{
							oSceneMeshBase[n].geometry.vertices[i].z = oSceneMesh.geometry.vertices[nz].z;
						}catch(e){
						}
					}
					break;
					
				case 2:
				//左
					for(i = 0; i < (nVertexNumY+1); i++){
						nz = (nVertexNumX+1) * i;
						oSceneMeshBase[n].geometry.vertices[i].z = oSceneMesh.geometry.vertices[nz].z;
					}
					
					break;
				case 3:
				//右
					for(i = 0; i < (nVertexNumY+1); i++){
						nz = (nVertexNumX+1) * (nVertexNumY - i) + nVertexNumX;
						oSceneMeshBase[n].geometry.vertices[i].z = oSceneMesh.geometry.vertices[nz].z;
					}
					break;
				case 4:
				//上
					for(i = 0; i < (nVertexNumX+1); i++){
						nz = nVertexNumX - i;
						oSceneMeshBase[n].geometry.vertices[i].z = oSceneMesh.geometry.vertices[nz].z;
					}
					break;
			}
	       
	        oSceneMeshBase[n].geometry.computeFaceNormals();
	        oSceneMeshBase[n].geometry.computeVertexNormals();
	        oSceneMeshBase[n].geometry.dynamic            = true;
	        oSceneMeshBase[n].geometry.verticesNeedUpdate = true;
        }
    }
    
    
    if ( oSceneGEODataMeshArr != null )
    {
		
		for( var k=0; k<oSceneGEODataMeshArr.length; k++ )
		{
			var meshData = oSceneGEODataMeshArr[k];
			var viewBox =getBoxLatLngBounds( { 
				lat: parseFloat(args["lat"]), 
				lng:parseFloat(args["lon"])}, 
				parseInt(args["z"]), 
				parseInt(args["tile_n_px_w"]), 
				parseInt(args["tile_n_px_h"]) );
			if ( meshData.points )
			{
				for( var i=0; i<meshData.points.length; i++ )
				{
					var p1 = _latLngToPointData( viewBox, meshData.points[i].lat, meshData.points[i].lng, meshData.points[i].h );
					meshData.mesh.geometry.vertices[i].z = p1.z;
				
				}
			}
			
			else if ( meshData.triangles )
			{
				for( var i=0, idx=0; i<meshData.triangles.length; i++, idx+=3 )
				{
					var p1 = _latLngToPointData( viewBox, meshData.triangles[i][0].lat, meshData.triangles[i][0].lng, meshData.triangles[i][0].h );//{x:triangles[0], y:triangles[1], z:vertexes[2]};
					var p2 = _latLngToPointData( viewBox, meshData.triangles[i][1].lat, meshData.triangles[i][1].lng, meshData.triangles[i][1].h );//{x:vertexes[3], y:vertexes[4], z:vertexes[5]};
					var p3 = _latLngToPointData( viewBox, meshData.triangles[i][2].lat, meshData.triangles[i][2].lng, meshData.triangles[i][2].h );//{x:vertexes[6], y:vertexes[7], z:vertexes[8]};
					meshData.mesh.geometry.vertices[idx].z = p1.z;
					meshData.mesh.geometry.vertices[idx+1].z = p2.z;
					meshData.mesh.geometry.vertices[idx+2].z = p3.z;
				
				}
			}
			else if (meshData.point)
			{
				var meshData = oSceneGEODataMeshArr[k];
				var p = _latLngToPointData( 
					viewBox, 
					meshData.point.lat, 
					meshData.point.lng, 
					meshData.point.h);
				meshData.mesh.position.set( p.x, p.y, p.z );
				
				meshData.mesh.updateMatrix();
				meshData.mesh.matrixWorldNeedsUpdate = true;
				
				
			}
			if ( meshData.mesh.geometry )
			{
				meshData.mesh.geometry.computeFaceNormals();
				meshData.mesh.geometry.computeVertexNormals();
				meshData.mesh.geometry.dynamic            = true;
				meshData.mesh.geometry.verticesNeedUpdate = true;
			}
		}
	}
	
};

function SceneGeometryZ_Value(){
	var strA = document.getElementById("ratioZ").value;
	if(isFinite(strA)){
		vSceneMeshZRate = parseFloat(strA);

		SceneGeometryZ();

		//SceneRender();

		$("#slider_ratioZ").slider( "option", "value", vSceneMeshZRate);
	}
	else{
        vSceneMeshZRate = 1;
        document.getElementById("ratioZ").value = vSceneMeshZRate;

        SceneGeometryZ_Value();
	}
};

function SceneRender(){
    if(oRenderer != null && oScene != null && oCamera != null){
	    oCameraCtrl.update();
	    requestAnimationFrame(SceneRender);
	    oRenderer.render(oScene, oCamera);
    }
};
function mpflag(param, x, id){
  if (!param)
  {
	if (id.indexOf("relief") >= 0)
		return 1;
	else
    	return 0;
  }
  if (x < 1)
  {
    return 0;
  }
  return param.charAt(x - 1);
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード
/*-----------------------------------------------------------------------------------------------*/
function showDownloadWindow(type){
    //oWinDownload = window.open("index_3d_download.html?type=" + type, "_brank");
    $( "tr.downloadfile" ).hide();
    $( "tr.downloadfile." + type ).show();
    if ( !oIconTextureCanvas )
    	$( "tr.downloadfile.icon" ).hide();
    
    $( ".download .title span" ).hide();
    $( ".download .title span." + type ).show();
    
    
    $( ".download" ).css( {	"visibility" : "hidden"} ).show();
    $( ".download" ).css( {
    	"margin-left" : -parseInt( $( ".download" ).outerWidth() / 2 ) + "px",
    	"margin-top" : -parseInt( $( ".download" ).outerHeight() / 2 ) + "px"
    } );
    $( ".download" ).hide().css( {	"visibility" : "visible"} );
    $( ".download .close_btn" ).off("click").on( "click", function() {
		 $( "#blind" ).fadeOut(300 );
		 $( ".download" ).fadeOut(300 );
    } );
    
    
    $( ".download" ).fadeIn(300 );
    $( "#blind" ).fadeIn(300 );
};

function Download_Arg_ZRate(){
    return document.getElementById('ratioZ').value;
};

/*-----------------------------------------------------------------------------------------------*/
// イベント
/*-----------------------------------------------------------------------------------------------*/
function EvtResize(){
	//var w = window.innerWidth;
	//var h = window.innerHeight;
	var screenSize = {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
	
    oFrame.style.width  = screenSize.w + "px";
    oFrame.style.height = screenSize.h + "px";

    if(oFrame.style.display == "block"){
		vFrame3D_H_Ctrl = $(oFrame3D_Download ).outerHeight() + 4;
        oFrame3D.style.position ="absolute";
        oFrame3D.style.border = "solid 1px #b9b9b9";
	    oFrame3D.style.left  = "2px";
	    oFrame3D.style.top ="2px";
	    oFrame3D.style.right  = "2px";
	    oFrame3D.style.bottom = vFrame3D_H_Ctrl + "px";

        oFrame3D_CtrlZ.style.position = "absolute";
        oFrame3D_CtrlZ.style.bottom      = (vFrame3D_H_Ctrl) + "px";
        oFrame3D_CtrlZ.style.left     = "10px";
		
		
        vFrame3D_W = $(oFrame3D).outerWidth()-2;
        vFrame3D_H = $(oFrame3D).outerHeight()-2;
        
        oRenderer.setSize(vFrame3D_W, vFrame3D_H); // レンダラ―画面の再設定
        oCamera.aspect = vFrame3D_W / vFrame3D_H;  // カメラのアスペクト比の再調整
        oCamera.updateProjectionMatrix();
        SceneRender(); // 再描画
    }
};

/*-----------------------------------------------------------------------------------------------*/

window.onresize = function(){
    EvtResize();
};

window.onbeforeunload = function(){
    try{
        if(oWinDownload != null){
            oWinDownload.close();
        }
    }
    catch(e){
    }
}


















var downLoadProgressTimerId = null;
/*-----------------------------------------------------------------------------------------------*/
// ダウンロード
/*-----------------------------------------------------------------------------------------------*/
function Download(fname,a){
	
	if ( $( ".download" ).data("downloading"))
	{
		return;
	}
	
	var progressToggle = function()
	{
		clearTimeout( downLoadProgressTimerId );
		if ( $( ".download_progress" ).is(":visible") )
		{
			$( ".download_progress" ).fadeOut(50);
			downLoadProgressTimerId = setTimeout( progressToggle, 300 );
		}
		else
		{
			$( ".download_progress" ).fadeIn(50);
			downLoadProgressTimerId = setTimeout( progressToggle, 800 );
		}
	};
	downLoadProgressTimerId = setTimeout( progressToggle, 800 );
	
	$( ".download_progress" ).css({"visibility":"hidden"}).show();
	
	$( ".download_progress" ).css({
		"margin-left" : -parseInt($(".download_progress").outerWidth()/2) + "px",
		"margin-top" : -parseInt($(".download_progress").outerHeight()/2) + "px"
	});
	
	$( ".download_progress" ).hide().css({"visibility":"visible"}).fadeIn(300);
	$( ".download" ).data({"downloading":true}).addClass("disable");
    setTimeout(function(){
    	DownloadProc(fname,a);
    	
    }, 3000);
};

function DownloadProc(fname,a){
    var fDone     = false;
    var data      = null;
    var data_type = null;
    if(fname == "index.html"){
        $.ajax({
		      type     : "GET"
	        , url      : "./index_3d_template.html"
	        , dataType : "text"
	        , cache    : false
        }
        )
        .done(
            function(data, status, jqXHR){
                if(data != null){
					data = data.replace( "/*[[texture_width]]*/", args["w"] );
					data = data.replace( "/*[[texture_height]]*/", args["h"] );
					data = data.replace( "/*[[mesh_width]]*/", nVertexNumX );
					data = data.replace( "/*[[mesh_height]]*/", nVertexNumY );
					data = data.replace( "/*[[geom_width]]*/", nGeomSizeX );
					data = data.replace( "/*[[geom_height]]*/", nGeomSizeY );
					if ( oGeo3DData )
					{
						var geo3DData = [];
						for( var i=0; i<oGeo3DData.length; i++ )
	                    {
							if ( oGeo3DData[i].properties._markerType == "Polygon" )
							{
								geo3DData.push( {
									properties : {
										_markerType : "Polygon",
										_fillOpacity : oGeo3DData[i].properties._fillOpacity,
										_fillColor : oGeo3DData[i].properties._fillColor,
										_color : oGeo3DData[i].properties._color,
										_opacity : oGeo3DData[i].properties._opacity,
										_weight : oGeo3DData[i].properties._weight
									},
									geometry :{
										coordinates : oGeo3DData[i].geometry.coordinates
									}
								} );
							}
							else if ( oGeo3DData[i].properties._markerType == "LineString" )
							{
								geo3DData.push( {
									properties : {
										_markerType : "LineString",
										_opacity : oGeo3DData[i].properties._opacity,
										_color : oGeo3DData[i].properties._color,
										_weight : oGeo3DData[i].properties._weight
									},
									geometry :{
										coordinates : oGeo3DData[i].geometry.coordinates
									}
								} );
							}
							else if ( oGeo3DData[i].properties._markerType == "Icon" )
							{
								geo3DData.push( {
									properties : {
										_markerType : "Icon",
										_iconUrl : oGeo3DData[i].properties._iconUrl,
										_iconSize : oGeo3DData[i].properties._iconSize,
										_iconAnchor : oGeo3DData[i].properties._iconAnchor,
										_iconScale : oGeo3DData[i].properties._iconScale
									},
									geometry :{
										coordinates : oGeo3DData[i].geometry.coordinates
									}
								} );
							}
							
						}
						
						var geo3DDataText=JSON.stringify( geo3DData, undefined , ' ');
						data = data.replace( "/*[[insertgeo3ddata]]*/", 
							"var nGeomSizeX = " + nGeomSizeX + ";\n" +
							"var nGeomSizeY = " + nGeomSizeY + ";\n" +
							"var vSceneMesh_ZMin = " + vSceneMesh_ZMin + ";\n" +
							"var vSceneMeshDistanceRate = " + vSceneMeshDistanceRate + ";\n" +
							"var args = {};\n" +
							"args['lat'] = " + args['lat']  + ";\n" +
							"args['lon'] = " + args['lon']  + ";\n" +
							"args['z'] = " + args['z']  + ";\n" +
							"args['tile_n_px_w'] = " + args['tile_n_px_w']  + ";\n" +
							"args['tile_n_px_h'] = " + args['tile_n_px_h']  + ";\n" +
							"oGeo3DData = " + geo3DDataText + ";" 
							);
						
					}
                    
                    DownloadProcDone(data, "txt", fname,a);
                }
                else{
                    DownloadProcAlways();
                }
            }
        )
        .fail(
            function(data, status, error){
                DownloadProcAlways();
            }
        )
    }
    else if(fname == "dem.csv"){
        fDone = true;

            var vSceneMesh2             = [].concat(vSceneMesh);
            data = vSceneMesh2;
            
            var n = 0;
	        for(ny = 0; ny <= nVertexNumY; ny++){
		        for(nx = 0; nx <= nVertexNumX; nx++){
                    nz = ny * (nVertexNumX+1) + nx;
			        data[nz] = vSceneMesh2[nz] * vSceneMeshDistanceRate;
		        }
	        }
            data = data.join(",");
            data_type = "txt_blob";
    }
    else if(fname == "texture.pgw"){
        fDone = true;
		var w = parseInt( args["w"] );
		var h = parseInt( args["h"] );
		var ret = getBoxLatLngBounds( { 
			lat: args["lat"], 
			lng:args["lon"]}, 
			parseInt(args["z"]), 
			w, 
			h );
		
		ret.lt = latLngToMercator( ret.lt );
		ret.rb = latLngToMercator( ret.rb );
		
		
		var txt = "";
		txt += ( ( ret.rb.lng - ret.lt.lng ) / w ) + "\n";
		txt += "0\n";
		txt += "0\n";
		txt += -( ( ret.rb.lng - ret.lt.lng ) / w ) + "\n";
		txt += ret.lt.lng + "\n";
		txt += ret.lt.lat;
		data = txt;
        data_type = "txt_blob";
    }
    else if(fname == "texture.png"){
        fDone = true;

        data      = oTextureCanvas.toDataURL();
        data_type = "img";
    }
    else if(fname == "icon.png"){
        fDone = true;
        data      = oIconTextureCanvas.toDataURL();
        data_type = "img";
    }
    else if(fname == "dem.stl" || fname == "dem.wrl"){
        fDone = true;

            var vSceneMesh2 = [].concat(vSceneMesh);
            var vTileN    = args["tile_n"];
            var vDem      = [].concat(vSceneMesh2);
            var vDemMesh  = new Array();
            var vZRate    = Download_Arg_ZRate();
            var vDistance = args["distance"];
			
            if(typeof vDemCSV != "undefined"){
                vDemMesh = vDemCSV;
            }
            else{
                for(var nY = 0; nY < vDem.length - (nVertexNumX+1); nY += (nVertexNumX+1)){
                    var vDemX = "";
                    for(var nX = nY; nX < (nY + nVertexNumX); nX++){
                        if(vDemX != ""){
                            vDemX += ",";
                        }
                        vDemX += vDem[nX];
                    }
                    vDemMesh.push(vDemX);
                }
            }
            if     (fname == "dem.stl"){ data = Download_STL(vDemMesh, vZRate, vDistance); }
            else if(fname == "dem.wrl"){ data = Download_WRL(vDemMesh, vZRate, vDistance); }
			
            data_type = "txt_blob";
        
    }
    if(fDone){
        DownloadProcDone(data, data_type, fname,a);
    }
};

function latLngToMercator( latlng )
{
	var d = Math.PI / 180,
	max = 85.0511287798,
	lat = Math.max(Math.min(max, latlng.lat), -max),
	x = latlng.lng * d,
	y = lat * d;

	y = Math.log(Math.tan((Math.PI / 4) + (y / 2)));

	return {
		lat : y * 6378137.0,
		lng : x * 6378137.0
	};
}
function DownloadProcDone(data, data_type, fname){
    if(data != null){
        try{
            if(window.navigator.msSaveBlob){
                var blob = null;
                if(data_type == "txt" || data_type == "txt_blob"){
                    blob = Download_Text(data);
                }
                else if(data_type == "img"){
                    blob = Download_Image(data);
                }
                if(blob != null){
                    window.navigator.msSaveBlob(blob, fname);
                }
            }
            else{
                var oA   = document.createElement("a");
                
                document.body.appendChild(oA);

                var oURL = window.URL || window.webkitURL;

                if(     data_type == "file"){
                    oA.href = v;
                }
                else if(data_type == "txt"){
                    oA.href = "data:application/octet-stream," + encodeURIComponent(data);
                }
                else if(data_type == "txt_blob"){
                    oA.href = oURL.createObjectURL(Download_Text(data));
                }
                else if(data_type == "img"){
                    oA.href = oURL.createObjectURL(Download_Image(data));
                }

                oA.download = fname;
				oA.click();

                document.body.removeChild(oA);
            }
        }
        catch(e){
        }
    }

    DownloadProcAlways();
};


function DownloadProcAlways()
{
	if ( downLoadProgressTimerId ) clearTimeout( downLoadProgressTimerId );
	downLoadProgressTimerId = null;
	
	$( ".download_progress" ).fadeOut(300);
	$( ".download" ).data({"downloading":false}).removeClass("disable");
}


function DownloadTextLine(v){
    return v + "\n";
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：イメージ
/*-----------------------------------------------------------------------------------------------*/
function Download_Image(v){
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
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：Text
/*-----------------------------------------------------------------------------------------------*/
function Download_Text(v){
    return new Blob([v], {type: 'text/plain'});
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：STL
/*-----------------------------------------------------------------------------------------------*/
function Download_STL(vDem, vZRate, vDistance){
    var ret = "";
    /*....................................................................
     * TEMPLATE
     *....................................................................*/    
    ret += DownloadTextLine("solid 3d_data");
    ret += DownloadTextLine("{stlPointList}");
    ret += DownloadTextLine("endsolid");
    ret  = ret.substr(0, (ret.length - 1));
    /*....................................................................
     * Make
     *....................................................................*/
    var vData = Download_ConvertFromDem("STL", vDem, vZRate, vDistance)
    /*....................................................................
     * Complete
     *....................................................................*/
    ret = ret.replace(/{stlPointList}/g, vData.stlPointList);
    return ret;
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：VRML
/*-----------------------------------------------------------------------------------------------*/
function Download_WRL(vDem, vZRate, vDistance){
    var ret = "";
    /*....................................................................
     * TEMPLATE
     *....................................................................*/
    ret += DownloadTextLine("#VRML V2.0 utf8");
    ret += DownloadTextLine("DEF obj1 Transform {");
    ret += DownloadTextLine("\tchildren [");
    ret += DownloadTextLine("\t\tShape {");
    ret += DownloadTextLine("\t\t\tappearance Appearance {");
    ret += DownloadTextLine("\t\t\t\tmaterial Material {");
    ret += DownloadTextLine("\t\t\t\t\tdiffuseColor 1.000000 1.000000 1.000000");
    ret += DownloadTextLine("\t\t\t\t\tambientIntensity 0.600000");
    ret += DownloadTextLine("\t\t\t\t\tspecularColor 0.000000 0.000000 0.000000");
    ret += DownloadTextLine("\t\t\t\t\temissiveColor 0.000000 0.000000 0.000000");
    ret += DownloadTextLine("\t\t\t\t\tshininess 0.050000");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t\ttexture ImageTexture {");
    ret += DownloadTextLine("\t\t\t\t\turl [\"texture.png\"]");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t}");
    ret += DownloadTextLine("\t\t\tgeometry IndexedFaceSet {");
    ret += DownloadTextLine("\t\t\t\tcoord Coordinate {");
    ret += DownloadTextLine("\t\t\t\t\tpoint [");
    ret += DownloadTextLine(         "{pointList1}");
    ret += DownloadTextLine("\t\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t\tcoordIndex [");
    ret += DownloadTextLine(       "{facetList1}");
    ret += DownloadTextLine("\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t\ttexCoord TextureCoordinate {");
    ret += DownloadTextLine("\t\t\t\t\tpoint [");
    ret += DownloadTextLine(         "{pointCoordtList}");
    ret += DownloadTextLine("\t\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t\tnormalIndex [");
    ret += DownloadTextLine(       "{facetList1}");
    ret += DownloadTextLine("\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t}");
    ret += DownloadTextLine("\t\t}");
    ret += DownloadTextLine("\t\tShape {");
    ret += DownloadTextLine("\t\t\tappearance Appearance {");
    ret += DownloadTextLine("\t\t\t\tmaterial Material {");
    ret += DownloadTextLine("\t\t\t\t\tdiffuseColor 1.000000 1.000000 1.000000");
    ret += DownloadTextLine("\t\t\t\t\tambientIntensity 0.600000");
    ret += DownloadTextLine("\t\t\t\t\tspecularColor 0.000000 0.000000 0.000000");
    ret += DownloadTextLine("\t\t\t\t\temissiveColor 0.000000 0.000000 0.000000");
    ret += DownloadTextLine("\t\t\t\t\tshininess 0.050000");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t}");
    ret += DownloadTextLine("\t\t\tgeometry IndexedFaceSet {");
    ret += DownloadTextLine("\t\t\t\tcoord Coordinate {");
    ret += DownloadTextLine("\t\t\t\t\tpoint [");
    ret += DownloadTextLine(         "{pointList1}");
    ret += DownloadTextLine("\t\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t\t}");
    ret += DownloadTextLine("\t\t\t\tcoordIndex [");
    ret += DownloadTextLine(       "{facetList2}");
    ret += DownloadTextLine("\t\t\t\t]");
    ret += DownloadTextLine("\t\t\t}");
    ret += DownloadTextLine("\t\t}")
    ret += DownloadTextLine("\t]");
    ret += DownloadTextLine("}");
    ret  = ret.substr(0, (ret.length - 1));
    /*....................................................................
     * Make
     *....................................................................*/
    var vData = Download_ConvertFromDem("WRL", vDem, vZRate, vDistance)
    /*....................................................................
     * Complete
     *....................................................................*/
    ret = ret.replace(/{pointList1}/g     , vData.wrlPointList1);      // ポイントリスト
    ret = ret.replace(/{facetList1}/g     , vData.wrlFacetList1);      // 面リスト（上面のみ）
    ret = ret.replace(/{facetList2}/g     , vData.wrlFacetList2);      // 面リスト（上面以外）
    ret = ret.replace(/{pointCoordtList}/g, vData.wrlPointCoordtList); // 画像の頂点の座標リスト（Xは0～1、Yは-1～0）

    return ret;
};

/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：COnvert
/*-----------------------------------------------------------------------------------------------*/
function Download_ConvertFromDem(type, vDem, vZRate, vDistance){
    var stlPointList       = "";

    var wrlPointList1      = "";
    var wrlFacetList1      = "";
    var wrlFacetList2      = "";
    var wrlPointCoordtList = "";

    /*....................................................................
     * VALUE
     *....................................................................*/
    var modelSize  = 150;    // モデルの最大サイズ（mm）
    var modelSizeH = 5;      // モデルの台座の高さ（mm）
    /*....................................................................*/
    var vData = vDem.concat();
    vDem = new Array();
    for(ny = 0; ny < vData.length; ny++){
        vDem.push(vData[ny].split(","));
    }

    var colX = vDem[0].length
    var colY = vDem.length;
    /*....................................................................*/    
    var modelSizeN = modelSize * colX / Math.max(colX, colY); // モデルのサイズ[MAX]（mm）
    var modelSizeNX = modelSize * colX / colX; // モデルのサイズ[MAX]（mm）
    var modelSizeNY = modelSize * colX / colY; // モデルのサイズ[MAX]（mm）
    var vDemXY     = modelSizeN / colX;		                  // DEMの1pxあたりの長さ          (mm) (平面方向)
    var vDemZ      = modelSize / vDistance;		          // DEMの1m あたりの模型上での長さ(mm) (高さ方向) == 縮尺
    var modelSizeX = vDemXY * (colX - 1);		              // モデルのサイズ（X方向）
    var modelSizeY = vDemXY * (colY - 1);		              // モデルのサイズ（Y方向）
    if(type == "STL"){
        modelSizeX = round(modelSizeX, 2);
        modelSizeY = round(modelSizeY, 2);
    }
    var vCX        = Math.round(modelSizeX / 2);              // 中央のX座標（データ容量削減のために四捨五入）for STL
    var vCZ        = Math.round(modelSizeY / 2);              // 中央のY座標（データ容量削減のために四捨五入）for STL
    /*....................................................................*/    
    var vDemT = transpose(vDem);
        vDem  = vDemT;
    /*....................................................................*/    
    if(type == "STL"){
        // 表面
        for(nY = 0; nY < colY - 1; nY++){
	        for(nX = 0; nX < colX -1; nX++){
		        // 頂点の座標を計算
		        var x1 = round(vDemXY *  nX     , 2);   var y1 = round(modelSizeH + vDem[nX    ][nY    ] * vDemZ * vZRate, 2);   var z1 = round(vDemXY *  nY     , 2);
		        var x2 = x1;                            var y2 = round(modelSizeH + vDem[nX    ][nY + 1] * vDemZ * vZRate, 2);   var z2 = round(vDemXY * (nY + 1), 2);
		        var x3 = round(vDemXY * (nX + 1), 2);   var y3 = round(modelSizeH + vDem[nX + 1][nY    ] * vDemZ * vZRate, 2);   var z3 = z1;

		        // ベクトルのXYZ成分をそれぞれ計算
		        var x12 = x2 - x1;   var y12 = y2 - y1;   var z12 = z2 - z1;
		        var x13 = x3 - x1;   var y13 = y3 - y1;   var z13 = z3 - z1;
		
		        // 外積の成分を計算
		        var nv123X = y12 * z13 - z12 - y13;
		        var nv123Y = z12 * x13 - x12 * z13;
		        var nv123Z = x12 * y13 - y12 * x13;
		
		        // ベクトルの長さを求める（長さ1のベクトルにするため）
		        var nv123L = round(Math.sqrt(Math.pow(nv123X, 2) + Math.pow(nv123Y, 2) + Math.pow(nv123Z, 2)), 8);

		        // 頂点の座標を計算
		        var x4 = x3;   var y4 = y3;                                                              var z4 = z3;
		        var x5 = x2;   var y5 = y2;                                                              var z5 = z2;
		        var x6 = x4;   var y6 = round(modelSizeH +  vDem[nX + 1][nY + 1] * vDemZ * vZRate ,2);   var z6 = z2;

		        // ベクトルのXYZ成分をそれぞれ計算
		        var x45 = x5 - x4;   var y45 = y5 - y4;   var z45 = z5 - z4;
		        var x46 = x6 - x4;   var y46 = y6 - y4;   var z46 = z6 - z4;

		        // 外積の成分を計算
		        var nv456X = y45 * z46 - z45 - y46;
		        var nv456Y = z45 * x46 - x45 * z46;
		        var nv456Z = x45 * y46 - y45 * x46;
		
		        // ベクトルの長さを求める（長さ1のベクトルにするため）
		        var nv456L = round(Math.sqrt(Math.pow(nv456X, 2) + Math.pow(nv456Y, 2) + Math.pow(nv456Z, 2)), 8);

		        stlPointList += "\tfacet normal " + nv123X / nv123L + " " + nv123Y / nv123L + " " + nv123Z / nv123L + "\n";
		        stlPointList += "\t\touter loop\n";
	
		        stlPointList += "\t\t\t vertex " + x1 + " " + y1 + " " + z1 + "\n";
		        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";
		        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";

		        stlPointList += "\t\tendloop\n";
		        stlPointList += "\tendfacet\n";

		        stlPointList += "\tfacet normal " + nv456X / nv456L + " " + nv456Y / nv456L + " " + nv456Z / nv456L + "\n";
		        stlPointList += "\t\touter loop\n";

		        stlPointList += "\t\t\t vertex " + x4 + " " + y4 + " " + z4 + "\n";
		        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";
		        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";

		        stlPointList += "\t\tendloop\n";
		        stlPointList += "\tendfacet\n";
	        }
        }

        // 左面
        for(nY = 0; nY < colY - 1; nY++){
	        var x1 = 0;   var y1 = round(modelSizeH +  vDem[0][nY    ] * vDemZ * vZRate, 2);   var z1 = round(vDemXY *  nY     , 2);
	        var x2 = 0;   var y2 = 0;                                                          var z2 = z1;
	        var x3 = 0;   var y3 = round(modelSizeH +  vDem[0][nY + 1] * vDemZ * vZRate ,2);   var z3 = round(vDemXY * (nY + 1), 2);
	        var x4 = x3;  var y4 = y3;                                                         var z4 = z3;
	        var x5 = x2;  var y5 = y2;                                                         var z5 = z2;
	        var x6 = x4;  var y6 = 0;                                                          var z6 = z4;

	        stlPointList += "\tfacet normal -1 0 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x1 + " " + y1 + " " + z1 + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        stlPointList += "\tfacet normal -1 0 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x4 + " " + y4 + " " + z4 + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";
	
	        // 底面
	        stlPointList += "\tfacet normal 0 -1 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + vCX + " 0 " + vCZ + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";
        }

        // 右面
        for(nY = 0; nY < colY - 1; nY++){
	        var x1 = modelSizeX;   var y1 = round(modelSizeH + vDem[colX - 1][nY    ] * vDemZ * vZRate, 2);   var z1 = round(vDemXY *  nY     , 2);
	        var x2 = x1;           var y2 = 0;                                                                var z2 = round(vDemXY * (nY + 1), 2);
	        var x3 = x1;           var y3 = 0;                                                                var z3 = z1;
	        var x4 = x1;           var y4 = y1;                                                               var z4 = z1;
	        var x5 = x1;           var y5 = round(modelSizeH + vDem[colX - 1][nY + 1] * vDemZ * vZRate, 2);   var z5 = z2;
	        var x6 = x1;           var y6 = 0;                                                                var z6 = z2;

	        stlPointList += "\tfacet normal 1 0 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x1 + " " + y1 + " " + z1 + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        stlPointList += "\tfacet normal 1 0 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x4 + " " + y4 + " " + z4 + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        // 底面
	        stlPointList += "\tfacet normal 0 -1 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + vCX + " 0 " + vCZ + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";
        }

        // 奥面
        for(nX = 0; nX < colX - 1; nX++){
            var x1 = round(vDemXY *  nX     , 2);   var y1 = round(modelSizeH + vDem[nX   ][0] * vDemZ * vZRate, 2);   var z1 = 0;
            var x2 = round(vDemXY * (nX + 1), 2);   var y2 = 0;                                                        var z2 = 0;
	        var x3 = x1;                            var y3 = 0;                                                        var z3 = 0;
	        var x4 = x1;                            var y4 = y1;                                                       var z4 = 0;
	        var x5 = x2;                            var y5 = round(modelSizeH + vDem[nX + 1][0] * vDemZ * vZRate, 2);  var z5 = 0;
	        var x6 = x2;                            var y6 = 0;                                                        var z6 = 0;

	        stlPointList += "\tfacet normal 0 0 -1\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x1 + " " + y1 + " " + z1 + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        stlPointList += "\tfacet normal 0 0 -1\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x4 + " " + y4 + " " + z4 + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        // 底面
	        stlPointList += "\tfacet normal 0 -1 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + vCX + " 0 " + vCZ + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";
        }

        // 手前面
        for(nX = 0; nX < colX - 1; nX++){
	        var x1 = round(vDemXY * nX, 2);         var y1 = round(modelSizeH + vDem[nX    ][colY - 1] * vDemZ * vZRate, 2);   var z1 = modelSizeY;
	        var x2 = x1;                            var y2 = 0;                                                                var z2 = z1;
	        var x3 = round(vDemXY * (nX + 1), 2);   var y3 = round(modelSizeH + vDem[nX + 1][colY - 1] * vDemZ * vZRate, 2);   var z3 = z1;
	        var x4 = x3;                            var y4 = y3;                                                               var z4 = z1;
	        var x5 = x2;                            var y5 = 0;                                                                var z5 = z1;
	        var x6 = x3;                            var y6 = 0;                                                                var z6 = z1;

	        stlPointList += "\tfacet normal 0 0 1\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x1 + " " + y1 + " " + z1 + "\n";
	        stlPointList += "\t\t\t vertex " + x2 + " " + y2 + " " + z2  + "\n";
	        stlPointList += "\t\t\t vertex " + x3 + " " + y3 + " " + z3  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        stlPointList += "\tfacet normal 0 0 1\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + x4 + " " + y4 + " " + z4 + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";

	        // 底面
	        stlPointList += "\tfacet normal 0 -1 0\n";
	        stlPointList += "\t\touter loop\n";

	        stlPointList += "\t\t\t vertex " + vCX + " 0 " + vCZ + "\n";
	        stlPointList += "\t\t\t vertex " + x6 + " " + y6 + " " + z6  + "\n";
	        stlPointList += "\t\t\t vertex " + x5 + " " + y5 + " " + z5  + "\n";

	        stlPointList += "\t\tendloop\n";
	        stlPointList += "\tendfacet\n";
        }
        stlPointList = stlPointList.substr(0, (stlPointList.length - 1));
    }
    /*....................................................................*/    
    else if(type == "WRL"){
        // ポイントリスト
        for(nY = 0; nY < colY; nY++){
            
        	for(nX = 0; nX < colX; nX++){
        	
                wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1) + vDemXY * nX) + " " + (modelSizeH + vDem[nX][nY] * vDemZ * vZRate) + " " + (vDemXY * nY) + ",\n";
                
	        }
        }   
        for(nY = 0; nY < colY    ; nY++){ wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1)                      ) + " 0 " + (vDemXY * nY) + ",\n";         } // ポイントリスト：左面        
        for(nY = 0; nY < colY    ; nY++){ wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1) + vDemXY * (colX - 1)) + " 0 " + (vDemXY * nY) + ",\n";         } // ポイントリスト：右面        
        for(nX = 1; nX < colX - 1; nX++){ wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1) + vDemXY * nX        ) + " 0 0,\n";                             } // ポイントリスト：奥面        
        for(nX = 1; nX < colX - 1; nX++){ wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1) + vDemXY * nX        ) + " 0 " + (vDemXY * (colY - 1)) + ",\n"; } // ポイントリスト：手前面        
        wrlPointList1 += "\t\t\t\t\t\t" + (Math.round(modelSizeX * (-1) / 2)) + " 0 " + (Math.round(modelSizeY / 2));                                            // ポイントリスト：底面の中心点
		
        // 面リスト：表面
        for(nY = 0; nY < colY - 1; nY++){
            for(nX = 0; nX < colX -1; nX++){
		        wrlFacetList1 += "\t\t\t\t\t" + (nY * colX + nX    ) + ", " + ((nY + 1) * colX + nX) + ", " + ( nY      * colX + nX + 1) + ", -1,\n";
		        wrlFacetList1 += "\t\t\t\t\t" + (nY * colX + nX + 1) + ", " + ((nY + 1) * colX + nX) + ", " + ((nY + 1) * colX + nX + 1) + ", -1,\n";
	        }
        }
        wrlFacetList1 = wrlFacetList1.substr(0, (wrlFacetList1.length - 2));
        
        // 面リスト：左面
        for(nY = 0; nY < colY - 1; nY++){
	        wrlFacetList2 += "\t\t\t\t\t" + (colX *  nY                           ) + ", " + (colX * colY + nY    ) + ", " + (colX *       (nY + 1)) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * (nY + 1)                      ) + ", " + (colX * colY + nY    ) + ", " + (colX * colY + nY + 1 ) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + nY + 1) + ", " + (colX * colY + nY     ) + ", -1,\n";
        }
        // 面リスト：右面
        for(nY = 0; nY < colY - 1; nY++){
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * (nY + 1) - 1) + ", " + (colX * colY + colY + nY + 1) + ", " + (colX * colY + colY + nY) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * (nY + 1) - 1) + ", " + (colX * (nY + 2) - 1) + ", " + (colX * colY + colY + nY +1) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + colY + nY) + ", " + (colX * colY + colY + nY +1) + ", -1,\n";
        }
        // 面リスト：奥面
        wrlFacetList2 += "\t\t\t\t\t" + (0                                    ) + ", " + (colX * colY + 2 * colY) + ", " + (colX * colY           ) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (0                                    ) + ", " + (1                     ) + ", " + (colX * colY + 2 * colY) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY           ) + ", " + (colX * colY + 2 * colY) + ", -1,\n";
        for (nX = 1; nX < colX - 2; nX++)	{
	        wrlFacetList2 += "\t\t\t\t\t" + (nX                                   ) + ", " + (colX * colY + 2 * colY + nX    ) + ", " + (colX * colY + 2 * colY + nX - 1) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (nX                                   ) + ", " + (nX + 1                         ) + ", " + (colX * colY + 2 * colY + nX    ) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + 2 * colY + nX - 1) + ", " + (colX * colY + 2 * colY + nX    ) + ", -1,\n";
        }
        wrlFacetList2 += "\t\t\t\t\t" + (colX - 2                             ) + ", " + (colX * colY + colY               ) + ", " + (colX * colY + colX + 2 * colY - 3) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX - 2                             ) + ", " + (colX - 1                         ) + ", " + (colX * colY + colY               ) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + colX + 2 * colY - 3) + ", " + (colX * colY + colY               ) + ", -1,\n";
        // 面リスト：手前面
        wrlFacetList2 += "\t\t\t\t\t" + (colX * (colY - 1)                    ) + ", " + (colX * colY + colY - 1           ) + ", " + (colX * (colY - 1) + 1            ) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * (colY - 1) + 1                ) + ", " + (colX * colY + colY - 1           ) + ", " + (colX * colY + colX + 2 * colY - 2) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + colX + 2 * colY - 2) + ", " + (colX * colY + colY - 1           ) + ", -1,\n";
        for (nX = 1; nX < colX - 2; nX++)	{
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * (colY - 1) + nX) + ", " + (colX * colY + colX + 2 * colY - 3 + nX) + ", " + (colX * (colY - 1) + nX + 1) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * (colY - 1) + nX + 1) + ", " + (colX * colY + colX + 2 * colY - 3 + nX) + ", " + (colX * colY + colX + 2 * colY - 2 + nX) + ", -1,\n";
	        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + colX + 2 * colY - 2 + nX) + ", " + (colX * colY + colX + 2 * colY - 3 + nX) + ", -1,\n";
        }
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY - 2                      ) + ", " + (colX * colY + 2 * colX + 2 * colY - 5) + ", " + (colX * colY - 1                      ) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY - 1                      ) + ", " + (colX * colY + 2 * colX + 2 * colY - 5) + ", " + (colX * colY + 2 * colY - 1           ) + ", -1,\n";
        wrlFacetList2 += "\t\t\t\t\t" + (colX * colY + 2 * colX + 2 * colY - 4) + ", " + (colX * colY + 2 * colY - 1           ) + ", " + (colX * colY + 2 * colX + 2 * colY - 5) + ", -1";
		
        //頂点のXY座標値（Xは0～1、Yは-1～0で定義）
        for(nY = 0; nY < colY; nY++){
	        for(nX = 0; nX < colX; nX++){
		        wrlPointCoordtList += "\t\t\t\t\t\t" + round((vDemXY * nX / modelSizeX),4) + " " + round((-1 * vDemXY * nY / modelSizeY),4) + ",\n";
		        //wrlPointCoordtList += "\t\t\t\t\t\t" +  + " " + round((-1 * vDemXY * nY / modelSizeY),4) + ",\n";
	        }
        }
        wrlPointCoordtList = wrlPointCoordtList.substr(0, (wrlPointCoordtList.length - 2));
    }
    /*....................................................................*/    
    return {
      stlPointList       : stlPointList
    , wrlPointList1      : wrlPointList1
    , wrlFacetList1      : wrlFacetList1
    , wrlFacetList2      : wrlFacetList2
    , wrlPointCoordtList : wrlPointCoordtList
    };
};





/*-----------------------------------------------------------------------------------------------*/
// ダウンロード：Math
/*-----------------------------------------------------------------------------------------------*/
function round    (v, precision){ var digit = Math.pow(10, precision); return Math.round(v * digit) / digit; };
function transpose(a           ){ return Object.keys(a[0]).map(function(c){ return a.map(function(r){ return r[c]; }); }); };

/*-----------------------------------------------------------------------------------------------*/
// タイル座標：ループチェック
// zmb2: 2^zoom-value
/*-----------------------------------------------------------------------------------------------*/
function checkTileCoord( xory, zmb2 ){
    if ( xory >= zmb2 ){
        return (xory -= zmb2);
    }
    else if ( xory < 0 )
    {
        return (xory += zmb2);
    }
    else{
        return xory;
    }
};