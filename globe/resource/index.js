
/************************************************************************
 メイン
 ************************************************************************/
$(document).ready(function(){
	
	
	$(".logoarea a").click( function() {
		$.cookie("GSIGLOBEHASH","");
    return true;
	});
	
	if ( !location.hash )
	{
		var cookie = $.cookie("GSIGLOBEHASH");
		if ( cookie && cookie != "" && cookie.charAt(0) == "#")
			location.replace( $.cookie("GSIGLOBEHASH") );
	}
	
	// CONFIG.layers情報読み込み
	$.ajax({
		type: "GET",
		dataType: "JSON",
		url: CONFIG.layersURL,
		cache: CONFIG.LOADLAYERSTXTCACHE,
		async : true
	})
	.done( function(data) {
	//	CONFIG.layersTab = data;
		CONFIG.layers = data;
		for( var i=0; i<CONFIG.layers.length; i++ ) {
			var url = CONFIG.layers[i].url;
			
			var urlParts = CONFIG.layersURL.split( "/" );
			
			if ( url.indexOf( "../") == 0 ) {
				urlParts.pop();
				urlParts.pop();
				url = url.replace( "../", urlParts.join("/") + "/" );
			} else if ( url.indexOf("./") == 0 ) {
				urlParts.pop();
				url = url.replace( "./", urlParts.join("/") + "/" );
			}
			
			CONFIG.layers[i].url = url;
		}
	} )
	.always( function() {
		if ( !CONFIG.layers ) CONFIG.layers = [];

		GLOBE.MAP.create();
		
		GLOBE.DIALOG.HELP.create();
		
		GLOBE.MENU.INFO.create();      //情報ボタン
		GLOBE.MENU.FUNC.create();        //機能ボタン
		GLOBE.MENU.CAMERARESET.create(); //カメラリセットボタン
		GLOBE.MENU.POINTINFO.create(); //地点情報ボタン

		GLOBE.SEARCHFORM.create();  //検索フォーム
		
		GLOBE.DIALOG.SEARCH.create();       //検索ダイアログ
		GLOBE.DIALOG.EDITOUTSIDETILE.create();
		GLOBE.DIALOG.LOADOUTSIDETILE.create();
		GLOBE.DIALOG.GSI3DCUSTOM.create();
		GLOBE.DIALOG.FILEREAD.create();
		GLOBE.DIALOG.HEIGHTPOWER.create();
		GLOBE.DIALOG.GETLINK.create();
		GLOBE.DIALOG.INFOBOX.create();
		GLOBE.DIALOG.FOOTER.create();  //フッター
		GLOBE.DIALOG.COMPAREPHOTO.create(); //時系列表示選択ダイアログ

		GSI.GLOBALS.queryParams = new GSI.QueryParams({ queryString: GSI.ClientMode.queryString });
	        initialize_proc();

		var ctrlSetting   = "";
		var viewSetting   = "";

		function initialize_proc(){
			GSI.GLOBALS.evacManager = new GSI.EvacuationManager(GSI.GLOBALS.queryParams);

			if ((GSI.GLOBALS.queryParams.params["ls"] && GSI.GLOBALS.queryParams.params["ls"].indexOf(CONFIG.layerEvacuationHeader)>=0) || 
			        (GSI.GLOBALS.queryParams.params["lcd"] && GSI.GLOBALS.queryParams.params["lcd"].indexOf(CONFIG.layerEvacuationHeader)>=0) ) 
			{
				var cfdlg = new GSI.Modal.confirmDialog();
				cfdlg.onPositiveButtonClick = MA.bind(confirmOKClick, this, cfdlg);
				cfdlg.onNegativeButtonClick = MA.bind(confirmCancelClick, this, cfdlg);
				cfdlg.show();
				
			}
			else
			{
				initialize_proc_sub();
			}
		};
		function initialize_proc_sub(){

			GSI.GLOBALS.evacDialog = new GSI.EvacDialog();

			ctrlSetting = GSI.GLOBALS.queryParams.getControlSetting();
			viewSetting = GSI.GLOBALS.queryParams.getViewSetting();
			GSI.GLOBALS.mapLayerList = new GSI.MapLayerList(GLOBE.MAP);
		    // Layers.txt を読み込み
			GSI.GLOBALS.layersJSON = new GSI.LayersJSON( {
				layers        : CONFIG.layerBase,
				layersTab     : CONFIG.layersTab,
				tabUrls : null //CONFIG.layersTabUrl 
				 
			});
			GSI.GLOBALS.layersJSON.on("load", function(e){
		        var f = true;
		        
		        if(!GSI.GLOBALS.layersJSON.loadBase()){
		            var n = 0;
		            var v = GSI.GLOBALS.layersJSON.getBase();
					
		            for(n = 0; n < v.length; n++){
		                CONFIG.BASETILES[CONFIG.BASETILES.length] = v[n];
		            }
		            GSI.GLOBALS.queryParams._initLayerList();
		            GSI.GLOBALS.layersJSON.initialize_layers(GSI.GLOBALS.queryParams.getLayers());
					
					for(var i=0; i<GSI.GLOBALS.layersJSON.visibleLayers.length; i++)
					{
						GSI.Utils.sendSelectedLayer(GSI.GLOBALS.layersJSON.visibleLayers[i].id);
					}
					
					
					//GSI.GLOBALS.layersJSON.add(CONFIG.layers);
		            initialize_proc_map();

		            f = true;
		        }
		        else{
		            f = true;
		        }
		        if(f){
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
			//initialize_proc_map();
		};
		function initialize_proc_map()
		{
			// ココタイル
			GSI.GLOBALS.cocoTileLayer
		    = new GSI.COCOTileLayer(
		      GLOBE.MAP
		    , CONFIG.COCOTILEURL
		    , {
		          visible : CONFIG.COCOTILEVISIBLE
		        , onLoad  : function(tileIdList){ GSI.GLOBALS.layersJSON.setHasTileList( tileIdList ); }
		      }
		    );
			GSI.GLOBALS.confirmDlg = new GSI.Modal.confirmDialog();

			GSI.GLOBALS.viewListDialog
		    = new GSI.ViewListDialog(
		      GLOBE.MAP
		    , GSI.GLOBALS.mapLayerList
		    , GSI.GLOBALS.cocoTileLayer
		    , {
		          left     : 10
		        , top      : 250
		        , width    : 320
		        , visible  : GSI.GLOBALS.queryParams._viewListDialogVisible
		        , effect    : CONFIG.EFFECTS.DIALOG
		        , resizable : ( GSI.Utils.Browser.isSmartMobile ? false : "all" )
		      }
		    );
			GSI.GLOBALS.viewListDialog._resetTiles( GSI.GLOBALS.queryParams.getBaseMap() );
			// 表示可能レイヤーダイアログ
			
			GSI.GLOBALS.layerTreeDialog
		    = new GSI.LayerTreeDialog(
		      GSI.GLOBALS.mapLayerList, 
			  GSI.GLOBALS.cocoTileLayer, 
			  GSI.GLOBALS.layersJSON._tabs, 
			  {
		          left        : 10
		        , top         : 50
		        , width       : 320
		        , visible     : GSI.GLOBALS.queryParams._layerTreeDialogVisible
		        , effect      : CONFIG.EFFECTS.DIALOG
		        , resizable   : ( GSI.Utils.Browser.isSmartMobile ? false : "all" ) //"all" ,
			    , currentPath : GSI.GLOBALS.queryParams.getCurrentPath()
		      }
		    );

		    // Layers.txt を追加
		    GSI.GLOBALS.layersJSON.add(CONFIG.layers);
		    
		    
		    GSI.GLOBALS.queryParams.getControlSetting();
		    
		    if ( GSI.GLOBALS.queryParams.getReliefData() ) 
				GSI.GLOBALS.mapLayerList.setElevationData(GSI.GLOBALS.queryParams.getReliefData());
			
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
	
	
	} );
	
});
