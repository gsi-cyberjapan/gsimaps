/*****************
 画面サイズ取得
******************/
function getScreenSize()
{
	return {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
}


/*****************
 エレメントサイズ取得
******************/
function getElementSize(elem)
{
	var result = {
		w : 0,
		h : 0
	};
	var isVisible = elem.is( ':visible' );
	if ( !isVisible )
	{
		elem.css( {'visibility':'hidden'} );
		elem.show();
		result.w = elem.outerWidth(true);
		result.h = elem.outerHeight(true);
		elem.hide();
		elem.css( {'visibility':'visible'} );

	}
	else
	{
		result.w = elem.outerWidth(true);
		result.h = elem.outerHeight(true);
	}
	return result;
}


/*****************
 Urlからレイヤータイプ取得
******************/
function url2LayerType( url )
{
	if ( !url ) return null;
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
	var layerType = null;
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


}



/************************************

	開始

************************************/
$(function () {

	if (!window.File || !window.FileReader || !window.FileList || !window.Blob)
	{
		$( document.body ).children().hide();
		$(".nosupport").show();
		return;
	}

	// ツールチップ
	$( ".edit *" ).tooltip({
		content: function() {
			var element = $( this );
			if ( element.is( "[title]" ) ) {
				return element.attr( "title" );
			}
		},
		position : { my: "left+50 top+6", at: "left bottom", collision: "flipfit" },
		tooltipClass : "config_tooltip"

	});


	//$( '.menu' ).menu();

	$( '.tree' )

		.on ( "contextmenu", function(e) {
			$( '.top_menu' ).popupMenu(
			{
				targetElem : this,
				position : {
					left :  e.pageX,
					top :  e.pageY
				},
				onClick : function( methodName, target )
				{
					$( '.tree' ). tree( 'exec', methodName, target );
				}
			} );
			return false;
		} )
		.tree('reset',null, "layers.txt");


	var adjustWindow = function() {
		var windowSize = getScreenSize();
		var leftWidth = $( ".tree" ).outerWidth( true );

		$( ".tree" ).css( {
			height: windowSize.h + -50 +"px"
		} );

		/*
		$( ".search" ).css( {
			height: windowSize.h + -50 +"px"
		} );


		$( ".search .result_frame" ).css( {
			height: windowSize.h - 58 - $( '.search .check_frame' ).outerHeight(true) +"px"
		} );
		*/
		$( ".edit" ).css( {
			left: leftWidth+4+"px",
			height: windowSize.h + -50 +"px",
			width: windowSize.w - leftWidth - 24 + 'px'
		} );
	};

	$( '.menu' ).menu({adjustWindow:adjustWindow});
	$(window).resize( adjustWindow);
	adjustWindow();
} );



(function($){


/*****************
 メニュー
******************/

	$.fn.menu=function(options)
	{
		var defaults={

		}
		var _options=$.extend(defaults, options);
		// 新規
		this.find( '*[menu_method=new]' ).click( function()
		{
			if ( confirm( '現在編集中の情報は破棄されます。よろしいですか？' ) )
			{
				//$( '.search' ).hide();
				$( '.tree' ).tree('reset',null, "layers.txt" );
			}
		} );

		// 読み込み
		this.find( '*[menu_method=load]' ).loadDialog({

			onLoad : function( data )
			{

				$( '.tree' ).tree('reset',data);
			}

		});
		//.click( function(){ $( '.search' ).hide(); } );


		// 保存
		this.find( '*[menu_method=save]' ).saveDialog(

		);
		//.click( function(){ $( '.search' ).hide(); } );

		// 検索
		/*
		this.find( '*[menu_method=search]' ).search(
			_options
		);
		*/
		return this;


	};


})(jQuery);




/*****************
 ポップアップメニュー
******************/
(function($){


	$.fn.popupMenu=function(options)
	{
		var defaults={

		}
		var _options=$.extend(defaults, options);


		var windowSize = getScreenSize();

		var popupMenuSize = getElementSize( this );
		var target = $(_options.targetElem);
		var left = 0;
		var top = 0;
		if ( _options.position )
		{
			left = _options.position.left;
			top = _options.position.top;

		}
		else
		{
			var offset = target.offset();
			left = offset.left+ target.outerWidth(true) + 8;
			top = offset.top + Math.floor( target.outerHeight(true) / 2 );
			if ( top + popupMenuSize.h > windowSize.h ) top = windowSize.h - popupMenuSize.h;
		}




		this.find( 'li a' ).unbind().data( { '_target' : _options.targetElem } );

		this.find( 'li a' ).on( 'click', function()
		{
			if ( _options.onClick )
			{
				_options.onClick(
					$(this ).attr( 'popup_method' ),
					$(this ).data( '_target' ) );
			}

		} );
		this.css({
				left:left +'px',
				top : top +'px'
			})
			.hide().fadeIn("normal");

		return this;


	};

})(jQuery);



/*****************
 読み込み
******************/

(function($){
	$.fn.loadDialog=function(options)
	{
		var defaults={

		}
		var _options=$.extend(defaults, options);


		var container = $(".load");
		var fileInput = $("input[type=file]").change(function(){ _fileCheck(); });
		var reader = null;



		// ファイルチェック
		var _fileCheck= function()
		{
			var files = fileInput.prop( 'files' );
			if( !files ) files = fileInput.attr( 'files' );
			var result = false;
			if ( files && files.length >=1 )
			{
				var fileName = files[0].name;
				result = ( fileName.substr(fileName.length-5,5) == '.json' || fileName.substr(fileName.length-4,4) == '.txt' );
			}

			if ( result )
				container.find( "*[load_method=load]" ).removeAttr( 'disabled' );
			else
				container.find( "*[load_method=load]" ).attr( { 'disabled' : 'disabled' } );

			return result;
		};

		// 読み込み
		var _load = function(file)
		{

			reader = new FileReader();
			reader.onload = _onFileLoad;
			reader.onerror = function() { alert( 'ファイルが読み込めません' ); };
			reader.readAsText(file);

		};


		var _onFileLoad = function()
		{
			var data = null;
			try
			{
				data = JSON.parse(reader.result);
			}
			catch( e)
			{
				alert( '設定ファイルの記述に誤りがあります' );
			}

			if ( data )
			{
				data = _convert( data );
				if ( data )
				{
					if ( _options.onLoad ) _options.onLoad( data );
					container.fadeOut();
				}
				else
				{
					alert( '設定ファイルの記述に誤りがあります' );
				}

			}


			try
			{
				if ( reader.abort ) reader.abort();
				if ( reader.destroy ) reader.destroy();
				delete reader;
				reader = null;
			}
			catch( e)
			{
			}


		};

		// 内部形式に変換
		_convert = function( data )
		{
			if ( !data ) return;
			var result = null;

			try
			{

				var _convertList = function( list, parent )
				{

					for ( var i=0; i<list.length; i++ )
					{
						var item = list[i];
						item._parent = parent;
						var isFolder = false;
						if ( item.type == 'LayerGroup' ) isFolder = true;

						if ( !isFolder && item.type != 'Layer' ) isFolder = ( item.children  ? true : false );

						if ( isFolder )
						{
							if ( item.entries )
							{
								item.children = item.entries;
								delete item.entries;
							}
							if ( !item.open ) item.open = false;

							if ( !item.children ) item.children = [];
							item.children = _convertList( item.children, item );
						}
						else
						{

							if ( item.children )
							{
								delete item.children;
								item.children = null;
							}



						}
						if ( item.iconUrl ) item.icon = item.iconUrl;
						item.description = ( item.html ? item.html : item.description );
						if ( !item.description ) item.description = '';
					}
					return list;
				};
				if ( !data.layers ) result = _convertList( data, null );
				else result = _convertList( data.layers, null );


			}
			catch( e)
			{
				return null;
			}

			return result;
		},


		// 表示
		this.click( function() {
			container.fadeIn();
		} );

		// 中止
		container.find( "*[load_method=cancel]" ).click( function(){
			container.fadeOut();

		} );

		// 読み込み
		container.find( "*[load_method=load]" ).click( function(){
			if ( _fileCheck() )
			{
				var files = fileInput.prop( 'files' );
				if( !files ) files = fileInput.attr( 'files' );

				_load(files[0]);
				fileInput.val('');
			}
			else
			{
				alert( '拡張子 .txt .json のファイルを選択して下さい' );
			}

		} );


		// 初期処理
		_fileCheck();

		return this;

	};




})(jQuery);




/*****************
 ツリー
******************/

(function($){

	var _makeTree = function( targetObject, ul,list)
	{
		var $this = targetObject;
		for ( var i=0; i<list.length; i++ )
		{
			var li = _createTreeItem($this,list[i]);
			ul.append( li );
		}

	};

	var _openFolder = function(target)
	{
		var isFolder = $(target).data( '_isFolder' );
		if ( isFolder )
		{
			var ul = $(target).parent( 'li').children( 'ul' );

			if ( ul.is(':visible') )
			{
				$(target).data( { '_expanded' : false } );
				$(target).parent( 'li').children('a').removeClass( 'open' );
			}
			else
			{
				$(target).data( { '_expanded' : true } );
				$(target).parent( 'li').children('a').addClass( 'open' );

			}
			ul.slideToggle('fast');
			//ul.css( {display:"block"} );
		}
	};

	var _createTreeItem = function(treeObject, item)
	{
		var $this = treeObject;

		var li = $( '<li>' ).addClass( item.children ? "" : "li_layer" );

		var titleText = ( item.title && item.title != '' ?
			'<span style="color:#222;">' +item.title + '</span>'
			:
			'<span style="color:#999;">名称未設定</span>' );

		var title = $( '<a>' ).attr({'href':'javascript:void(0);'})
			.html( titleText + ( item.children ? '<span class="num">' + item.children.length + '</span>' : '' ) )
			.data( {
				"_data" : item,
				"_isFolder":( item.children ? true : false )
				} )
			.addClass ( item.children ? 'folder' : 'layer' )
			.on("contextmenu",function() {

					$( $( this ).data("_data").children ? '.folder_menu' : '.layer_menu').popupMenu(
						{
							targetElem : this,
							onClick : function( methodName, target )
							{
								methods.exec.apply( $this, [methodName, target] );
							}
						} );
					$this.tree( "select",  this );
					return false;
				})
			.click( function() {
					$this.tree( "select",  this );
				} )
			.dblclick( function(){
					_openFolder( this );
				} );
		item._element = title;

		if ( item.children )
		{
			var arrow = $( "<a>" ).attr({'href':'javascript:void(0);'})
				.html( "&nbsp;" ).addClass("arrow")
				.click( function(){ $(this).addClass( 'open' );  _openFolder( $(this).next('a') ); } );
			li.append(arrow);
			li.append(title);

			var ul2 = $( '<ul>' ).css({"margin-left":"30px"});
			_makeTree( $this, ul2, item.children );
			li.append( ul2 );
			ul2.hide();

		}
		else
		{
			li.append(title);
		}

		return li;
	};






	var methods = {



		init : function()
		{
			this.data( { '_tree' : this } );


			this.on( 'scroll', function() {
				methods.hidePopup();

			});
			var mouseScreenMouseDown = function() {

			};
			$(document.body).on( 'mousedown', function() {

				if ( $( '.folder_menu' ).is( ':visible' ) ) $( '.folder_menu' ).fadeOut('fast');
				if ( $( '.layer_menu' ).is( ':visible' ) ) $( '.layer_menu' ).fadeOut('fast');
				if ( $( '.top_menu' ).is( ':visible' ) ) $( '.top_menu' ).fadeOut('fast');
			});

			return methods.reset.apply( this, arguments );
		},

		hidePopup : function() {
			if ( $( '.folder_menu' ).is( ':visible' ) ) $( '.folder_menu' ).fadeOut('fast');
			if ( $( '.layer_menu' ).is( ':visible' ) ) $( '.layer_menu' ).fadeOut('fast');
			if ( $( '.top_menu' ).is( ':visible' ) ) $( '.top_menu' ).fadeOut('fast');
		},

		select : function( target )
		{
			var selected = $( this ).data( '_selected' );

			if ( selected != target )
			{
				if ( selected ) $( selected ).removeClass(  "selected" );
				$( target ).addClass( "selected" );

				$( this ).data( {'_selected':target} );

				var offset = $( target ).offset();
				var treeOffset = $( '.tree' ).offset();
				var top = ( offset.top + $( '.tree' ).scrollTop() ) - treeOffset.top - 15;
				$( '.tree' ).animate({ scrollTop:top }, 'normal');
			}


			$( ".edit" ).edit( "set", $( target ).data( '_data' ), {
				onChange : function(target,data){
					var _data = ( data._editedData ? data._editedData : data );

					var titleText = ( _data.title && _data.title != '' ? _data.title : '<span style="color:#999;">名称未設定</span>' );
					$(target)
						.html( titleText + ( _data.children ? '<span class="num">' + _data.children.length + '</span>' : '' ) );
				},
				onChangeParam : target
			});

		},

		exec : function( methodName, target )
		{

			var targetFolderElem = null;

			switch ( methodName )
			{

				case "createfolder_top":
				case "createlayer_top":
					var newFolder = {
						"type": methodName == "createfolder_top" ? "LayerGroup" : "Layer",
						"title" : "",
						"children" :( methodName == "createfolder_top" ? [] : null ),
						"_parent" : null
					};

					$(this).data( '_tree_data' ).push( newFolder );
					var li = _createTreeItem( this, newFolder );
					var ul = this.find( 'ul' );
					$(ul[0]).append( li );
					li.children( "a" ).click();

					break;
				case "createfolder_next":
				case "createlayer_next":
					// 次にフォルダ作成
					var ul = $(target).parent( 'li' ).parent( 'ul' );

					targetFolderElem = $(
						$(target).parent( 'li' ).parent( 'ul' ).parent('li' )
						.children( 'a.folder' ) );

					var data = $(target).parent( 'li' ).parent( 'ul' ).parent( 'li' ).children( 'a.folder' ).data( '_data' );
					var newFolder = {
						"type": methodName == "createfolder_next" ? "LayerGroup" : "Layer",
						"title" : "",
						"children" :( methodName == "createfolder_next" ? [] : null ),
						"_parent" : data
					};



					var nextElem =$(target).parent('li');
					if (nextElem.length > 0 )
					{
						var children = null;
						if ( data )
							children = data.children;
						else
							children = $(this).data( '_tree_data' );

						var nextData = nextElem.children( 'a.folder,a.layer' ).data( '_data' );
						for ( var i=0; i<children.length; i++ )
						{
							if ( children[i] == nextData )
							{
								children.splice(i+1, 0, newFolder);
								break;
							}

						}

						var li = _createTreeItem( this, newFolder );

						nextElem.after(li);
					}
					else
					{
						if ( data )
							data.children.push( newFolder );
						else
							$(this).data( '_tree_data' ).push( newFolder );

						var li = _createTreeItem( this, newFolder );
						ul.append( li );
					}
					li.children( "a" ).click();

					break;


				case "createfolder_in":
				case "createlayer_in":
					// 中にフォルダ作成
					targetFolderElem = $( target );
					var ul = $(target).parent( 'li' ).children( 'ul' );
					var data = $(target).data( '_data' );
					var newFolder = {
						"type": methodName == "createfolder_in" ? "LayerGroup" : "Layer",
						"title" : "",
						"children" :  (  methodName == "createfolder_in" ? [] : null ),
						"_parent" : data
					};

					data.children.push( newFolder );

					var li = _createTreeItem( this, newFolder );

					ul.append( li );

					li.children( "a" ).click();
					break;


				case "remove":
					// 削除
					if ($( this ).data("_selected") == target );
					{
						$( '.edit div' ).hide();
						$( this ).data({"_selected":null});
					}
					//$( this ).data( { '_selected' : null } )
					var ul = $(target).parent( 'li' ).parent( 'ul' );
					var targetData = $(target).data( '_data' );

					var data = $(target).parent( 'li' ).parent( 'ul' ).parent( 'li' ).children( 'a.folder' ).data( '_data' );
					targetFolderElem = $(
						$(target).parent( 'li' ).parent( 'ul' ).parent('li' )
						.children( 'a.folder' ) );

					var children = null;
					if ( data )
						children = data.children;
					else
						children = $(this).data( '_tree_data' );

					for ( var i=0; i<children.length; i++ )
					{
						if ( children[i] == targetData )
						{
							children.splice(i, 1);
							break;
						}

					}

					$(target).parent( 'li' ).remove();


					break;
			}


			if ( targetFolderElem )
			{
				var item = targetFolderElem.data( '_data' );
				if ( item )
				{
					if ( item._editedData ) item = item._editedData;
					var title = ( item.title && item.title != '' ? item.title : '<span style="color:#999;">名称未設定</span>' );
					targetFolderElem.html( title+ ( item.children ? '<span class="num">' + item.children.length + '</span>' : '' ) )

					if ( !targetFolderElem.data( '_expanded' ) )
						targetFolderElem.dblclick();
				}



			}

		},



		getInfo : function()
		{
			return {
				fileName : $( this ).data( '_tree_filename' ),
				treeData : $( this ).data( '_tree_data' )
			};
		},

		reset : function( data,filename )
		{
			var $this = this;
			this.data( { '_tree_filename' : filename } );

			$( '.edit div' ).hide();
			if ( !data )
			{
				data = [{
					"title": "",
					"children" : []
				}];
			}

			this.data( { '_tree_data' : data } );

			var ul = this.find( 'ul' );
			if ( ul.length <= 0 )
			{
				ul = $( '<ul>' ).nestedSortable({
					delay : 150 ,
					listType: 'ul',
					forcePlaceholderSize: true,
					forceHelperSize : true,
					placeholder : "placeholder",
					helper:'clone',
					items: 'li',
					opacity: .9,
					revert: 250,
					tabSize: 5,
					tolerance: 'pointer',
					maxLevels: 10,
					isTree: false,
					doNotClear : true,
					handle: "a",
					toleranceElement: '> a.folder,a.layer',
					disableNestingClass : 'li_layer',
					update : function( event, ui ) {
						var a = ui.item.children( "a.layer,a.folder" );
						var item = a.data( "_data" );

						if ( item )
						{

							_removeFromArray = function ( targetList, target )
							{
								if ( !targetList ) return;
								for ( var i=0; i<targetList.length; i++ )
								{
									if ( targetList[i] == target )
									{
										targetList.splice( i, 1 );
										break;
									}
								}
							};

							_insertAfterArray = function ( targetList, target, prev )
							{
								if ( !targetList ) return;
								if ( !prev )
								{
									targetList.splice(0,0, target );
									return;
								}

								for ( var i=0; i<targetList.length; i++ )
								{
									if ( targetList[i] == prev )
									{
										targetList.splice(i+1, 0, target);
										break;
									}
								}
							};

							var oldList =  ( item._parent ? item._parent.children :  $( $this ).data( '_tree_data' ) );

							_removeFromArray( oldList, item );

							item._parent = null;

							var newParent = ui.item.parent( 'ul' ).parent( 'li' ).children( "a.folder").data( '_data' );
							var newList =  ( newParent ? newParent.children :  oldList );
							var prevItem = ui.item.prev().children( "a.layer,a.folder" ).data( "_data" );

							_insertAfterArray( newList, item, prevItem );


							item._parent = newParent;
						}
					}
				});
				this.append( ul );
			}

			ul.empty();

			this.scrollTop( 0 );


			methods.hidePopup();


			_makeTree( $this, ul,data );
		}

	};


	$.fn.tree=function(method )
	{
		var tree = this.data( '_tree' );



		if ( !tree )
		{
			return methods.init.apply( this, Array.prototype.slice.call( arguments, 1 ) );
		} else if (methods[method] ) {
			return methods[method].apply( tree, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tree' );
		}

	};


})(jQuery);


/*****************
 edit
******************/

(function($){
	var methods = {


		fixEdit: function()
		{
			var editingData = $(this).data( "_editingData" );
			var onChange = $(this).data( "_onChange" );
			var _onChangeParam = $(this).data( "_onChangeParam" );

			if ( editingData )
			{
				// フォーム→データ
				if ( editingData.children )
				{
					var f = $( "form[name=folder]" );
					if (!editingData._editedData  )
					{
						editingData._editedData = {
							children : editingData.children
						};

					}

					editingData._editedData.title = f.find( "input[name=title]" ).val();
					editingData._editedData.icon = f.find( "input[name=iconUrl]" ).val();
					if ( f.find( "input[name=open]" ).length > 0 )
						editingData._editedData.open = f.find( "input[name=open]" )[0].checked;
					else
						editingData._editedData.open = editingData.open;

					if ( f.find("input[name='toggleall']").length > 0 )
						editingData._editedData.toggleall = f.find("input[name='toggleall']").prop( 'checked' );
					else
						editingData._editedData.toggleall = editingData.toggleall;

					if ( onChange ) onChange(_onChangeParam,editingData);
				}
				else
				{
					var f = $( "form[name=layer]" );

					if (!editingData._editedData  ) editingData._editedData = {};



					editingData._editedData.type = f.find( "input[name=type]:checked" ).val();
					editingData._editedData.id = f.find( "input[name=id]" ).val();
					editingData._editedData.title = f.find( "input[name=title]" ).val();
					editingData._editedData.icon = f.find( "input[name=iconUrl]" ).val();
					editingData._editedData.url = f.find( "input[name=url]" ).val();
					if ( f.find("input[name='cocotile']").length > 0 )
						editingData._editedData.cocotile = f.find("input[name='cocotile']").prop( 'checked' );
					else
						editingData._editedData.cocotile = editingData.cocotile;

					editingData._editedData.subdomains = f.find( "input[name=subdomains]" ).val();
					editingData._editedData.attribution = f.find( "input[name=attribution]" ).val();

					editingData._editedData.minZoom = f.find( "select[name=minZoom]" ).val();
					editingData._editedData.maxZoom = f.find( "select[name=maxZoom]" ).val();
					editingData._editedData.maxNativeZoom = f.find("select[name='maxNativeZoom']").val();

					editingData._editedData.legendUrl = f.find( "input[name=legendUrl]" ).val();
					editingData._editedData.description = f.find( "textarea[name=html]" ).val();


					if ( onChange ) onChange(_onChangeParam,editingData);

				}
			}
		},

		clearEdit: function()
		{
			$(this).data( {
				"_editingData" : null,
				"_onChange" : null,
				"_onChangeParam" : null
			} );

			$( ".edit input,textarea,select" ).unbind();

		},


		set : function(data, options)
		{
			try{
			$( ".edit *" ).tooltip( 'destroy' );
			}catch(e){}
			if ( $(this).data( "_editingData" ) == data )
			{
				return;
			}

			methods.fixEdit.apply( this);
			methods.clearEdit.apply( this);

			$(this).data( {
				"_editingData" : data,
				"_onChange" : ( options ? options.onChange : null ),
				"_onChangeParam" : ( options ? options.onChangeParam : null )
			} );


			$( '.edit_folder' ).hide();
			$( '.edit_layer' ).hide();
			if ( !data ) return;

			var onBlur = function(e){
				methods.fixEdit.apply( e.data);

			};
			var initLayerEditFrame = function()
			{
				var f = $( "form[name='layer']" );
				if ( f.find("input[name='type']:checked").length > 0 )
				{
					$( ".edit_layer .layer_edit_frame" ).slideDown('normal');
					var layerMode = f.find("input[name='type']:checked").attr( 'layer_mode' );

					var layerModeArr = layerMode.split( ',' );

					$( ".edit_layer" ).find( "dt[layer_mode=tile]" ).hide();
					$( ".edit_layer" ).find( "dd[layer_mode=tile]" ).hide();

					$( ".edit_layer" ).find( "dt[layer_mode=layer_style]" ).hide();
					$( ".edit_layer" ).find( "dd[layer_mode=layer_style]" ).hide();

					for ( var i=0; i<layerModeArr.length; i++ )
					{
						if ( layerModeArr[i] == '' ) continue;
						$( ".edit_layer" ).find( "dt[layer_mode=" + layerModeArr[i] + "]" ).show();
						$( ".edit_layer" ).find( "dd[layer_mode=" + layerModeArr[i] + "]" ).show();
					}
				}
				else
					$( ".edit_layer .layer_edit_frame" ).hide();
			};

			var onLayerTypeChange = function(e){
				methods.fixEdit.apply( e.data);
				initLayerEditFrame();
			};

			var _data = ( data._editedData ? data._editedData : data );

			if ( data.children )
			{

				var f = $( "form[name=folder]" );
				f.find( "input[name=title]" ).val( _data.title ).bind( "blur", this, onBlur );
				f.find( "input[name=icon]" ).val( _data.icon ? _data.icon : "" ).bind( "blur", this, onBlur);

				if ( f.find( "input[name=open]" ).length > 0 )
				{
					f.find( "input[name=open]" ).bind( "click", this, onBlur);
					if ( _data.open )
					{
						f.find( "input[name=open]" )[0].checked = true;
					}
					else
					{
						f.find( "input[name=open]" )[1].checked = true;
					}
				}
				if ( f.find("input[name='toggleall']").length > 0 )
					f.find("input[name='toggleall']").prop( {"checked":_data.toggleall ? true : false } ).bind( "click", this, onBlur);
				$( '.edit_folder' ).fadeIn('normal');

			}
			else
			{
				var f = $( "form[name='layer']" );

				if ( _data.type == 'Layer' )
				{
					_data.type = url2LayerType( _data.url );
				}

				if ( _data.type )
				{
					f.find("input[name='type']").val( [_data.type]  ).bind( "click", this, onLayerTypeChange);
				}
				else
				{
					f.find("input[name='type']").attr( {checked:false} ).bind( "click", this, onLayerTypeChange);
				}


				//f.find( "input,select,textarea" ).attr( {'disabled':'disabled'} );
				//f.find("input[name='type']").removeAttr('disabled');


				f.find( "input[name='id']" ).val( _data.id ? _data.id : "" ).bind( "blur", this, onBlur);
				f.find( "input[name='title']" ).val( _data.title ? _data.title : "" ).bind( "blur", this, onBlur);
				f.find( "input[name=iconUrl]" ).val( _data.icon ? _data.icon : "" ).bind( "blur", this, onBlur);
				f.find( "input[name=url]" ).val( _data.url ? _data.url : "" ).bind( "blur", this, onBlur );
				f.find( "input[name=subdomains]" ).val( _data.subdomains ? _data.subdomains : "" ).bind( "blur", this, onBlur );
				f.find( "input[name=attribution]" ).val( _data.attribution ? _data.attribution : "" ).bind( "blur", this, onBlur );
				if ( f.find("input[name='cocotile']").length > 0 )
					f.find("input[name='cocotile']").prop( {"checked":_data.cocotile ? true : false } ).bind( "click", this, onBlur);

				f.find("select[name='minZoom']").val( _data.minZoom ? _data.minZoom : ""  ).bind( "change", this, onBlur);
				f.find("select[name='maxZoom']").val( _data.maxZoom ? _data.maxZoom : ""  ).bind( "change", this, onBlur);
				f.find("select[name='maxNativeZoom']").val( _data.maxNativeZoom ? _data.maxNativeZoom : ""  ).bind( "change", this, onBlur);

				f.find( "input[name=legendUrl]" ).val( _data.legendUrl ? _data.legendUrl : "" ).bind( "blur", this, onBlur );
				f.find( "textarea[name=html]" ).val( _data.description ? _data.description : "" ).bind( "blur", this, onBlur );

				initLayerEditFrame();

				$( '.edit_layer' ).scrollTop(0).fadeIn('normal');
			}

			$( ".edit *" ).tooltip({
				content: function() {
					var element = $( this );
					if ( element.is( "[title]" ) ) {
						return element.attr( "title" );
					}
				},
				position : { my: "left+50 top+6", at: "left bottom", collision: "flipfit" },
				tooltipClass : "config_tooltip"

			});
		}
	};

	$.fn.edit=function(method )
	{
		var edit = this.data( '_edit' );

		if ( !edit ) {
			this.data( {'_edit' : this } );
			edit = this;
		}

		if (methods[method] ) {
			return methods[method].apply( edit, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( edit, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.edit' );
		}

	};
})(jQuery);






/*****************
 保存
******************/

(function($){

	var _makeLayersJSONText = function( treeData, isIndent )
	{
		var makeJSON = function( parent, list )
		{
			for ( var i=0; i<list.length; i++ )
			{
				var item = ( list[i]._editedData ? list[i]._editedData : list[i] );


				var newItem = {

				};

				if ( item.children )
				{
					// フォルダ
					newItem.type = "LayerGroup";
					newItem.title = item.title;
					newItem.iconUrl = ( item.icon ? item.icon : '' );
					//if ( item.open )
					//	newItem.open = item.open;
					newItem.open = ( item.open ? item.open : false );
					newItem.toggleall = ( item.toggleall ? item.toggleall : false );

					newItem.entries = [];
					makeJSON( newItem.entries, item.children );
				}
				else
				{
					newItem.type = "Layer";
					newItem.id = item.id;
					newItem.title = item.title;
					newItem.iconUrl = ( item.icon ? item.icon : '' );
					newItem.url = item.url;
					newItem.subdomains = ( item.subdomains ? item.subdomains : "" );
					newItem.attribution = ( item.attribution ? item.attribution : "" );
					//newItem.type = item.type;
					//if ( item.cocotile )
					//	newItem.cocotile = item.cocotile;
					newItem.cocotile = ( item.cocotile ? item.cocotile : false );
					if ( item.minZoom && item.minZoom != '' )
						newItem.minZoom = item.minZoom;
					if ( item.maxZoom && item.maxZoom != '' )
						newItem.maxZoom = item.maxZoom;
					if ( item.maxNativeZoom && item.maxNativeZoom != '' )
						newItem.maxNativeZoom = item.maxNativeZoom;

					newItem.legendUrl = item.legendUrl;
					newItem.html = ( item.description ? item.description : "" );
					newItem.zIndex = item.zIndex;


				}

				parent.push( newItem );
			}
		};

		var resultJSON = [];

		makeJSON( resultJSON, treeData );


		return JSON.stringify( {"layers": resultJSON }, undefined , isIndent ? '  ' : null );
	};
	$.fn.saveDialog=function(options)
	{

		var defaults={

		}

		var container = $(".save");

		// 表示
		this.click( function() {
			$( '.edit' ).edit( "fixEdit" );

			var info = $( ".tree" ).tree( "getInfo" );

			$( '.edit' ).data( { "_info": info } );


			if ( info && info.treeData )
			{
				$( 'textarea[name="download_text"]' ).val( _makeLayersJSONText(info.treeData, $( "input[name=download_text_indent]" )[0].checked) );
				$( '.edit' ).data( "fixEdit" );
			}
			else
			{
				alert( 'err' );
				return;
			}

			$( "input[name=download_text_indent]" ).unbind();
			$( "input[name=download_text_indent]" ).bind( "click",this, function(e) {
				var info = $( '.edit' ).data( "_info" );

				$( 'textarea[name="download_text"]' ).val( _makeLayersJSONText(info.treeData, this.checked) );

			});

			var a = $( "*[save_method=load]" ).unbind();

			$( 'input[name="download_filename"]' ).val( info.fileName && info.fileName != '' ? info.fileName : 'layers.txt' );
			a.attr( { href:'javascript:void(0);', target:''} )
				.click( function() {

					var fileName = $.trim( $( 'input[name="download_filename"]' ).val() );
					if ( fileName == '' ) fileName = 'layers.txt';

					var blob = new Blob([$( 'textarea[name=download_text]' ).val()], { "type" : "text/plain" });

					if ( window.navigator.msSaveBlob )
					{
						window.navigator.msSaveBlob( blob, fileName, true );

						return false;
					}
					else
					{
						window.URL = window.URL || window.webkitURL;
						a.attr( {
								"download" : fileName,
								"href" : window.URL.createObjectURL(blob)
							});
						return true;
					}


				} );


			container.fadeIn();
		} );

		// 中止
		container.find( "*[save_method=cancel]" ).click( function(){
			container.fadeOut();

		} );


		return this;

	};




})(jQuery);




/*****************
 検索
******************/

(function($){
	$.fn.search=function(options)
	{
		var _options = options;

		var _search = function(list, options, hitList)
		{
			for ( var i=0; i<list.length; i++ )
			{
				var item = list[i];

				var hit = null;

				if ( options.notitle && ( !item.title || $.trim( item.title ) == '' ) )
				{
					if ( !hit ) hit ={}; hit.notitle = true;
				}

				if ( !item.children )
				{
					if ( item.type == 'Layer' )
					{
						item.type = url2LayerType( item.url );
					}

					var layerType = ( item.type  ? $.trim( item.type  ) : "" );

					if (
						(
							layerType != 'tile' && layerType != 'kml' && layerType != 'geojson' && layerType != 'topojson'
							&& layerType != 'geojson_tile' && layerType != 'topojson_tile'
						)
					)
					{
						if (  options.notype )
						{
							if ( !hit ) hit ={}; hit.notype = true;
						}
					}
					else
					{

						if ( options.nourl && ( !item.url || $.trim( item.url ) == '' ) )
						{
							if ( !hit ) hit ={}; hit.nourl = true;
						}
						if ( options.nolegendUrl && ( !item.legendUrl || $.trim( item.legendUrl ) == '' ) )
						{
							if ( !hit ) hit ={}; hit.nolegendUrl = true;
						}
						if ( options.nohtml && ( !item.description || $.trim( item.description ) == '' ) )
						{
							if ( !hit ) hit ={}; hit.nohtml = true;
						}
					}
				}

				if ( hit )
				{
					hitList.push( { item: item, hit:hit } );
				}

				if ( item.children )
				{

					_search( item.children, options, hitList );
				}

			}
		};

		$( 'form[name="search_f"]' ).find( 'input' ).click( function()
		{


			var ul = $( '.result_frame ul' );
			ul.empty();

			var f = $( 'form[name="search_f"]' );

			var options = {
				notype : f.find( 'input[name="notype"]' ).is(':checked'),
				notitle : f.find( 'input[name="notitle"]' ).is(':checked'),
				nourl : f.find( 'input[name="nourl"]' ).is(':checked'),
				nolegendUrl : f.find( 'input[name="nolegendUrl"]' ).is(':checked'),
				nohtml : f.find( 'input[name="nohtml"]' ).is(':checked')
			};
			var hitList = [];
			_search($( ".tree").data( '_tree_data' ), options, hitList );

			var _getPankuzu = function( target )
			{
				var pankuzu = "";
				target = target._parent;
				while( target )
				{
					var title = target.title;
					if ( !title || title == "" ) title="名称未設定";
					pankuzu = title + ( pankuzu ? " > " : "" ) + pankuzu;
					target = target._parent;
				}

				return "TOP" +( pankuzu == "" ? "" : " > " ) + pankuzu;

			};


			for ( var i= 0; i<hitList.length; i++ )
			{
				var hitItem = hitList[i];

				var li = $( '<li>' );
				var a = $( '<a>' ).attr({href:'javascript:void(0);'}).click( function()
				{
					var item = $(this).data( 'item' );

					$('.tree').tree( 'select', item._element );

				} );
				a.data( { item:hitItem.item} );
				var pankuzu = $( '<div>' ).addClass( 'pankuzu' ).html( _getPankuzu( hitItem.item ) );
				var title = $( '<div>').addClass( 'title' );
				if ( hitItem.item.title && hitItem.item.title != '' )
				{
					title.html(hitItem.item.title )
				}
				else
				{
					title.html("名称未設定" ).addClass( 'notitle' );
				}

				a.append( pankuzu );
				a.append( title );
				li.append( a );
				ul.append( li );
			}

			if ( hitList.length > 0 )
				ul.hide().slideDown( 'normal' );
		} );

		var $this = this;

		$( '.search .close_btn' ).click( function(){
			$( '.search' ).fadeOut( 'normal' );
		} );

		this.click( function()
		{
			if ( !$( '.search' ).is( ':visible' ) )
			{
				$( '.search' ).css({visibility:"hidden"} ).show();
				if ( _options.adjustWindow )_options.adjustWindow();


				$( '.search' ).css({visibility:"visible"} ).hide();
				$( '.search' ).fadeIn( 'normal' );

				var ul = $( '.result_frame ul' );
				ul.empty();
				$( 'form[name="search_f"]' ).find( 'input' ).attr({checked:false}).prop({checked:false});

			}
		} );

		return this;
	};

})(jQuery);
