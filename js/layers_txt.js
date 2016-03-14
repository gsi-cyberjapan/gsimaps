var CONFIG = {};
CONFIG.layerBase          = ['./layers_txt/layers0.txt'];
CONFIG.layerBaseFolder    = "ベースマップ";
CONFIG.layerBaseFolderSYS = "GSI.MAP.BASE";
CONFIG.layers             = [
	 './layers_txt/layers1.txt'
	,'./layers_txt/layers2.txt'
	,'./layers_txt/layers3.txt'
	,'./layers_txt/layers4.txt'
    ,'./layers_txt/layers_experimental.txt'
];

CONFIG.layers_list        = [
     './layers_txt/layers_list.txt'
];

/************************************************************************
 画面サイズ取得
 ************************************************************************/
function getScreenSize()
{
	return {
        w : window.innerWidth  ? window.innerWidth : $(window).width()
       ,h : window.innerHeight ? window.innerHeight: $(window).height()
	};
};

/************************************************************************
 開始
 ************************************************************************/
$(function () {
    $( document.body).Load({});

	if (!window.File || !window.FileReader || !window.FileList || !window.Blob)
	{
		$(document.body).children().hide();
		$(".nosupport").show();
		return;
	}

	var adjustWindow = function() {
		var windowSize = getScreenSize();
		var leftWidth = $( ".tree" ).outerWidth( true );

        var h = 23;
		$(".tree").css( {
			height : windowSize.h + -h +"px"
		} );

		$(".edit").css( {
			left   : leftWidth+4+"px",
			height : windowSize.h + -h +"px",
			width  : windowSize.w - leftWidth - 24 + 'px'
		} );

		$(".tile").css( {
			width  : windowSize.w - leftWidth - 24 + 'px'
		} );
	};

	$(window).resize( adjustWindow);
	adjustWindow();
} );

/************************************************************************
 読み込み
 ************************************************************************/
(function($){
	$.fn.Load=function(options)
	{
		var defaults={

		}
		var _options=$.extend(defaults, options);

        var _Load_Data           = null;
        var _Load_DataHash       = {};
        var _Load_DataIndex      = -1;
        var _Load_DataSrc        = null;

        var _Load_DataList       = null;
        var _Load_DataListIndex  = null;

		var Load = function()
		{
            _Load_Data          = new Array();
            _Load_DataHash      = {};
            _Load_DataIndex     = -1;
            _Load_DataSrc       = new Array();

            _Load_DataList      = new Array();
            _Load_DataListIndex = -1;

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

            for(n = 0; n < CONFIG.layers_list.length; n++){
                var d = {
	                fname  : CONFIG.layers_list[n]
	               ,load   : null
	               ,layers : null
                };
                _Load_DataList.push(d);  
            }
            _LoadProc();
		};

		var _LoadProc = function()
        {
        	_Load_DataIndex++;
            if(_Load_DataIndex < _Load_Data.length){
                var url = _Load_Data[_Load_DataIndex].fname;
	            ajax = $.ajax({
		              type     : "GET"
		            , url      : url
		            , dataType : "text"
		            , cache    : false
		            , success  : LoadProcSuccess
		            , error    : LoadProcError
	            });
            }
            else{
                _LoadProcSrc();
            }
        };

		var _LoadProc_SetSrc = function(layer)
        {
            if(layer.src){
                if(layer.src.indexOf('./') == 0){
                    var path = layer.src_url.substring(0, layer.src_url.lastIndexOf('/'));
                    layer.src  = path + "/" + layer.src.substr(2);
                }
                _Load_DataSrc.push(layer);
            }
        }

        var LoadProcSuccess = function(data)
        {
	        var json = JSON.parse(data);
            if(_Load_DataIndex == 0){
                var json_base = JSON.parse("{ \"layers\": [ { \"type\": \"LayerGroup\", \"title\": \"" + CONFIG.layerBaseFolder + "\", \"title_sys\": \"" + CONFIG.layerBaseFolderSYS + "\", \"iconUrl\": \"\", \"open\": false, \"toggleall\": false, \"entries\": [] } ] }");
                    json_base.layers[0].entries = json.layers.concat();
                    json      = json_base;
            }

            if( json.layers){
                for(var i = 0; i < json.layers.length; i++){
                    LoadProcSuccess_SRC(json.layers[i], _Load_Data[_Load_DataIndex].fname);
                }
            }

		    _Load_Data[_Load_DataIndex].layers = json.layers[0];

		    _LoadProc();
        };

		var LoadProcSuccess_SRC = function(layer, url)
        {
            layer.src_url = url;

            if(layer.type == "Layer"){
                _Load_DataHash[layer.id] = layer;
            }

            if(layer.type == "LayerGroup"){
                if(layer.src){
                    _LoadProc_SetSrc(layer);
                }
                else{
                    for(var n = 0; n < layer.entries.length; n++){
                        LoadProcSuccess_SRC(layer.entries[n], url);
                    }
                }
            }

        };

        var LoadProcError = function()
        {
		    _LoadProc();
        };

		var _LoadProcSrc = function()
        {
            if(_Load_DataSrc.length == 0){
                _LoadListProc();
            }
            else{
                url = _Load_DataSrc[0].src;
 	            ajax = $.ajax({
		              type     : "GET"
		            , url      : url
		            , dataType : "text"
		            , cache    : false
		            , success  : LoadProcSrcSuccess
		            , error    : LoadProcSrcError
	            });
            }
        };
		
		var LoadProcSrcSuccess = function(data)
        {
	        var json = JSON.parse(data);
            _Load_DataSrc[0].entries = json.layers;
            for(var i = 0; i < _Load_DataSrc[0].entries.length; i++){
                _Load_DataSrc[0].entries[i].src_url = _Load_DataSrc[0].src_url;
                _LoadProc_SetSrc(_Load_DataSrc[0].entries[i]);
            }

            _Load_DataSrc.shift();
            _LoadProcSrc();
        };

        var LoadProcSrcError = function(){
            _Load_DataSrc.shift();
            _LoadProcSrc();
        };

		var _LoadListProc = function()
        {
        	_Load_DataListIndex++;
            if(_Load_DataListIndex < _Load_DataList.length ){
                var url = _Load_DataList[_Load_DataListIndex].fname;
	            ajax = $.ajax({
		              type     : "GET"
		            , url      : url
		            , dataType : "text"
		            , cache    : false
		            , success  : LoadListProcSuccess
		            , error    : LoadListProcError
	            });
            }
            else{
                $( '.tree' ).tree('reset', _Load_Data);
            }
        };

        var LoadListProcSuccess = function(data)
        {
            try{
	            var json = JSON.parse(data);
                for(var id in json){
                    var item = _Load_DataHash[id];
                    if(item){
                        item._visible    = true;
                        item.period      = json[id].period      ? json[id].period      : ""
                        item.typicalimg  = json[id].typicalimg  ? json[id].typicalimg  : ""
                        item.basicsurvey = json[id].basicsurvey ? json[id].basicsurvey : ""
                        item.info        = json[id].info        ? json[id].info        : ""
                    }
                }
            }
            catch(e){
                console.log("Error:" + _Load_DataList[_Load_DataListIndex].fname)
            }

		    _LoadListProc();
        };
        
        var LoadListProcError = function()
        {
		    _LoadListProc();
        };

		// 表示
		this.click( function() {
            //console.log("Click");
		} );

		// 初期処理
		Load();

		return this;
	};
})(jQuery);

/************************************************************************
 ツリー
 ************************************************************************/
(function($){
	var Init = function( targetObject, ul,list)
	{
        if(list){
		    var $this = targetObject;
		    for ( var i=0; i<list.length; i++ ){
       			_makeTree($this, ul, list[i].layers);
		    }
        }
	};

	var _makeTree = function( targetObject, ul,list)
	{
		var $this = targetObject;

       	var li = _createTreeItem($this,list);
        if(li != null){
	        ul.append( li );
        }
	};

	var _openFolder = function(target)
	{
		var isFolder = $(target).data( '_data' ).entries ? true : false;
		if(isFolder)
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
		}
	};

    var _createTreeItemExit = function(item){
        var f = false;
        for(var i = 0; i < item.length; i++){
            if(item[i].entries){
                f = _createTreeItemExit(item[i].entries);
                if(f){
                    break;
                }
            }
            else{
                if(item[i]._visible){
                    f = true;
                    break;
                }
            }
        }
        return f;
    };

	var _createTreeItem = function(treeObject, item)
	{
		var $this = treeObject;

        var fView = true;
        if(item.entries){
            fView = _createTreeItemExit(item.entries);
        }
        else{
            if(!item._visible){
                fView = false;
            }
        }

        var li = null;
        if(fView){
		    li = $( '<li>' ).addClass( item.entries ? "" : "li_layer" );

		    var title = $( '<a>' ).attr({'href':'javascript:void(0);'})
			    .html( '<span style="color:#222;">' +item.title + '</span>' )
			    .data(
                    {
			        "_data"    : item,
			        }
                )
			    .addClass(item.entries ? 'folder' : 'layer' )
			    .click(
                    function(){
					    $this.tree( "select",  this );
				    }
                )
			    .dblclick(
                    function(){
				        _openFolder( this );
				    }
                );

		    item._element = title;

		    if ( item.entries ){
			    var arrow = $( "<a>" ).attr({'href':'javascript:void(0);'})
				    .html( "&nbsp;" ).addClass("arrow")
				    .click(
                        function(){
                            $(this).addClass( 'open' );
                            _openFolder( $(this).next('a') );
                        }
                    );
			    li.append(arrow);
			    li.append(title);

			    var ul2 = $( '<ul>' ).css({"margin-left":"30px"});
                for(var nEntries = 0; nEntries < item.entries.length; nEntries++){
			        _makeTree( $this, ul2, item.entries[nEntries] );
                }
			    li.append( ul2 );
			    ul2.hide();

		    }
		    else{
			    li.append(title);
		    }
        }

		return li;
	};

	var methods = {
		init : function()
		{
			this.data( { '_tree' : this });
    		return methods.reset.apply( this, arguments );
		},

		select : function( target )
		{
			$('.edit').hide();
            $('tile').html("");

			var selected = $( this ).data( '_selected' );

			if ( selected != target ){
				if ( selected ) $( selected ).removeClass(  "selected" );
				$( target ).addClass( "selected" );

				$( this ).data( {'_selected':target} );

				var offset = $( target ).offset();
				var treeOffset = $( '.tree' ).offset();
				var top = ( offset.top + $( '.tree' ).scrollTop() ) - treeOffset.top - 15;
				$( '.tree' ).animate({ scrollTop:top }, 'normal');
			}

            var data = $( target ).data( '_data' );
			if(data){
			    if ( data.type == "Layer" ){
        			$('.edit').show();

                    $('.tile').html("<img src=\"" + data.typicalimg + "\" />");

				    var f = $( "form[name='layer']" );

				    f.find("input[name=id]"         ).val( data.id          ? data.id          : "" );
				    f.find("input[name=url]"        ).val( data.url         ? data.url         : "" );
				    f.find("input[name=maxZoom]"    ).val( data.maxZoom     ? data.maxZoom     : "" );
				    f.find("input[name=minZoom]"    ).val( data.minZoom     ? data.minZoom     : "" );
                    f.find("input[name=period]"     ).val( data.period      ? data.period      : "" );                    
				    f.find("input[name=legendUrl]"  ).val( data.legendUrl   ? data.legendUrl   : "" );
                    f.find("input[name=basicsurvey]").val( data.basicsurvey ? data.basicsurvey : "否" );
				  //f.find( "textarea[name=info]"   ).val( data.info        ? data.info        : "" );
                                          $('.info').html( data.info        ? data.info        : "　" );

				    $( '.edit_layer' ).scrollTop(0).fadeIn('normal');
			    }
            }

		},

		reset : function( data)
		{
			var $this = this;

			$('.edit').hide();

			this.data( { '_tree_data' : data } );

			var ul = this.find('ul');
			if ( ul.length <= 0 ){
				ul = $( '<ul>' );
				this.append( ul );
			}
			ul.empty();

			this.scrollTop(0);
           
			Init( $this, ul,data);
		}
	};


	$.fn.tree=function(method )
	{
		var tree = this.data( '_tree' );

		if( !tree ){
			return methods.init.apply( this, Array.prototype.slice.call( arguments, 1 ) );
		}
        else if (methods[method] ){
			return methods[method].apply( tree, Array.prototype.slice.call( arguments, 1 ));
		}
        else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tree' );
		}
	};
})(jQuery);