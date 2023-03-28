var userAgent = window.navigator.userAgent.toLowerCase();
var msie = ( userAgent.match(/(msie|MSIE)/) || userAgent.match(/(T|t)rident/) ) ;

var oFrame = new Array();
var oFrameProcE  = null;
var oFrameProcUL = null;

/************************************************************************
 画面サイズ取得
 ************************************************************************/
function getScreenSize(){
	return {
		w : window.innerWidth ? window.innerWidth: $(window).width(),
		h : window.innerHeight ? window.innerHeight: $(window).height()
	};
};

/************************************************************************
 エレメントサイズ取得
 ************************************************************************/
function getElementSize(elem){
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
};

/************************************************************************
 Urlからレイヤータイプ取得
 ************************************************************************/
function url2LayerType( url ){
	if ( !url ) return null;
	url = (url) ? url.trim() : '';

	if(url.match( /\{tms\}/ )){
		return "tms";
	}

	if(url.match( /photoprot\.php/ )){
		return "kml";
	}

	var ext         = "";
	var layerType   = null;
	var matchResult = url.match( /.*\.([^.]+$)/ );
	// 拡張子
	if(matchResult){
        ext = matchResult[1];
    }

	// kml
	if(ext == "kml"){
		return "kml";
	}

	// タイルかどうか
	if(url.match( /(\{x\})/ )){
		switch( ext ){
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
	else{
		switch( ext ){
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
 開始
 ************************************************************************/
$(function (){
	if (!window.File || !window.FileReader || !window.FileList || !window.Blob){
		$( document.body ).children().hide();
		$(".nosupport").show();
		return;
	}

	var adjustWindow = function(){
        if(oFrame.length > 0){
		    var windowSize = getScreenSize();
		    var l_w  = $(".tree").outerWidth(true);
        
            var frame_w   = parseInt(windowSize.w);
            var frame_h   = parseInt(windowSize.h * 0.5);
            var h_menu = 30;
            var h_span = 50;
            var t      = h_menu;
            var h      = frame_h - h_span;
            var l_edit = l_w + 4;
            var w_edit = frame_w - l_w - 24;
            var t_minh = 0;
            for(var nFrame = 0; nFrame < oFrame.length; nFrame++){
                if(nFrame == 0){
                    t_minh = h - 50;
                    if(t_minh <= 0){
                        t_minh = 50;
                    }
                }
                else{
                    t += frame_h;
                }
                oFrame[nFrame].vPosT = t;

                oFrame[nFrame].o.css({
                     width  : frame_w + "px"
                    ,height : frame_h + "px"
                });

                oFrame[nFrame].oTree[0].style.top    = t       + "px";
                oFrame[nFrame].oTree[0].style.height = h       + "px";

                oFrame[nFrame].oEdit[0].style.top    = t       + "px";
                oFrame[nFrame].oEdit[0].style.left   = l_edit  + "px";
                oFrame[nFrame].oEdit[0].style.width  = w_edit  + "px";
                oFrame[nFrame].oEdit[0].style.height = h       + "px";

                $("." + oFrame[nFrame].vTreeClassWith).css('minHeight', t_minh + "px");
            }
        }
	};

    var init_frame = function(id){
        var frame = $('.frame').html();

        var info_n = oFrame.length;
        var info = {
            o              : $(id)
           ,n              : info_n
           ,oMenu          : null
           ,oMenuLoad      : null
           ,oMenuSave      : null
           ,oTree          : null
           ,oEdit          : null
           ,vPosT          : 0
           ,fSaveMsg       : false
           ,vTreeClass     : "tree_items_" + info_n
           ,vTreeClassWith : ""
        };

        info.o.html(frame);

        info.oMenu     = $(".menu").eq(info.n); $('.menu')[info.n].n = info.n;
        info.oMenuLoad = $(".load").eq(info.n); $('.load')[info.n].n = info.n;
        info.oMenuSave = $(".save").eq(info.n); $('.save')[info.n].n = info.n;
        info.oTree     = $(".tree").eq(info.n); $('.tree')[info.n].n = info.n;
        info.oEdit     = $(".edit").eq(info.n); $('.edit')[info.n].n = info.n;

        oFrame.push(info);
    };

    init_frame('.frame_1');
    init_frame('.frame_2');

    for(var nFrame = 0; nFrame < oFrame.length; nFrame++){
        oFrame[nFrame].oMenu.menu({o:oFrame[nFrame]});

        for(var nFrameTreeClass = 0; nFrameTreeClass < oFrame.length; nFrameTreeClass++){
            if(nFrame != nFrameTreeClass){
                if(oFrame[nFrame].vTreeClassWith != ""){
                    oFrame[nFrame].vTreeClassWith += ",";
                }
                oFrame[nFrame].vTreeClassWith = oFrame[nFrameTreeClass].vTreeClass;
            }
        }

		oFrame[nFrame].oTree
            .on("contextmenu", 
                function(e){
                    $('.top_menu').popupMenu(
			        {
                        o          : oFrame[this.n]
				       ,targetElem : this
				       ,position   : {
					        left   : e.pageX
					       ,top    : e.pageY
				        }
				       ,onClick    : function(o, methodName, target)
				        {
					        o.oTree.tree('exec', o, methodName, target);
				        }
			        }
                    );
			        return false;
		        }
            )
		    .tree('reset', oFrame[nFrame], null, "layers.txt");
    }

	$(window).on('resize',adjustWindow);
	adjustWindow();
} );

/************************************************************************
 メニュー
 ************************************************************************/
(function($){
	$.fn.menu = function(options)
	{
		var _options = $.extend({}, options);
        var o = _options.o;

		// 新規
		this.find( '*[menu_method=new]' ).on('click',
            function(){
    			if(confirm( '現在編集中の情報は破棄されます。よろしいですか？' )){
				    o.oTree.tree('reset', o, null, "layers.txt");
			    }
		    }
        );

		// ダイアログ：ファイルを開く
		this.find('*[menu_method=load]').loadDialog(
            {
                o      : o
		       ,onLoad : function(o, data){
				    o.oTree.tree('reset', o, data);
			    }
		});

		// ダイアログ：ファイルに保存
		this.find( '*[menu_method=save]' ).saveDialog(
            {
                o      : o
            }
		);

		return this;
	};
})(jQuery);

/************************************************************************
 ポップアップメニュー
 ************************************************************************/
(function($){
	$.fn.popupMenu = function(options)
	{
		var _options = $.extend({}, options);
        var o = _options.o;

		var windowSize    = getScreenSize();
		var popupMenuSize = getElementSize(this);
		var target = $(_options.targetElem);
		var left   = 0;
		var top    = 0;
		if(_options.position){
			left = _options.position.left;
			top  = _options.position.top;
		}
		else{
			var offset = target.offset();
			left = offset.left+ target.outerWidth(true) + 8;
			top  = offset.top + Math.floor( target.outerHeight(true) / 2 );
			if (top + popupMenuSize.h > windowSize.h){
                top = windowSize.h - popupMenuSize.h;
            }
		}

		this.find( 'li a' ).off().data( { '_o' : o, '_target' : _options.targetElem } );
		this.find( 'li a' ).on('click', 
            function(){
			    if(_options.onClick){
				    _options.onClick($(this ).data('_o'), $(this).attr('popup_method'), $(this ).data('_target'));
			    }
            }
		);
		this.css(
            {
				left:left +'px'
			  , top : top +'px'
			}
        )
		.hide().fadeIn("normal");

		return this;
	};

})(jQuery);

/************************************************************************
 ダイアログ：ファイルを開く
 ************************************************************************/
(function($){
	$.fn.loadDialog = function(options){
		var _options = $.extend({}, options);
        var o = _options.o;

		var container = o.oMenuLoad;
		var fileInput = $("input[type=file]").eq(o.n).on('change',function(){ _fileCheck(); });
		var reader = null;

		// 表示
		this.on('click',
            function(){
                container[0].style.top = o.vPosT + "px";
			    container.fadeIn();
		    }
        );

		// 中止
		container.find("*[load_method=cancel]").on('click',
            function(){
			    container.fadeOut();
		    }
        );

		// 読み込み
		container.find("*[load_method=load]").on('click',
            function(){
			    if(_fileCheck()){
				    var files = fileInput.prop('files');
				    if( !files ){
                        files = fileInput.attr('files');
                    }
				    _load(files[0]);
				    fileInput.val('');
			    }
			    else{
				    alert( '拡張子 .txt .json のファイルを選択して下さい' );
			    }
		    }
        );

		// ファイルチェック
		var _fileCheck= function(){
			var files = fileInput.prop('files');
			if(!files){
                files = fileInput.attr('files');
            }

			var result = false;
			if( files && files.length >= 1){
				var fileName = files[0].name;
				result = ( fileName.substr(fileName.length-5,5) == '.json' || fileName.substr(fileName.length-4,4) == '.txt' );
			}
			if(result){
				container.find( "*[load_method=load]" ).removeAttr( 'disabled' );
            }
			else{
				container.find( "*[load_method=load]" ).attr( { 'disabled' : 'disabled' } );
            }

			return result;
		};

		// 読み込み
		var _load = function(file){
			reader = new FileReader();
			reader.onload  = _onFileLoad;
			reader.onerror = function(){ alert( 'ファイルが読み込めません' ); };
			reader.readAsText(file);
		};

		var _onFileLoad = function(){
			var data = null;
			try{
				data = JSON.parse(reader.result);
			}
			catch( e){
				alert( '設定ファイルの記述に誤りがあります' );
			}

			if(data){
				data = _convert( data );
				if(data){
					if(_options.onLoad){
                        _options.onLoad(o, data);
                    }
					container.fadeOut();
				}
				else{
					alert( '設定ファイルの記述に誤りがあります' );
				}
			}

			try{
				if( reader.abort  ){ reader.abort();   }
				if( reader.destroy){ reader.destroy(); }
				delete reader;
				reader = null;
			}
			catch( e){
			}
		};

		// 内部形式に変換
		_convert = function( data ){
			if(!data){
                return;
            }

			var result = null;
			try{
				var _convertList = function(list, parent){

					for( var i=0; i<list.length; i++ ){
						var item = list[i];
						item._parent = parent;
						var isFolder = false;
						if(item.type == 'LayerGroup'){
                            isFolder = true;
                        }
						if (!isFolder && item.type != 'Layer'){
                            isFolder = ( item.children  ? true : false );
                        }

						if(isFolder){
							if(item.entries){
								item.children = item.entries;
								delete item.entries;
							}

							if(!item.children){
                                item.children = [];
                            }
							item.children = _convertList(item.children, item);
						}
						else{
							if(item.children){
								delete item.children;
								item.children = null;
							}
						}
						if(item.iconUrl){
                            item.icon = item.iconUrl;
                        }
						item.description = (item.html ? item.html : item.description);
						if(!item.description){
                            item.description = '';
                        }
					}
					return list;
				};
				if(!data.layers){
                    result = _convertList(data, null);
                }
				else{
                    result = _convertList(data.layers, null);
                }
			}
			catch(e){
				return null;
			}

			return result;
		};

		// 初期処理
		_fileCheck();

		return this;
	};
})(jQuery);

/************************************************************************
 tree
 ************************************************************************/
(function($){
	$.fn.tree = function(method){
		var tree = this.data('_tree');
		if     (!tree                                ){ return methods.init   .apply(this, Array.prototype.slice.call(arguments, 1)); }
        else if(                  methods[method]    ){ return methods[method].apply(tree, Array.prototype.slice.call(arguments, 1)); }
        else if(!method || typeof method === 'object'){ return methods.init   .apply(this, arguments);                                }
        else{
			$.error('Method ' +  method + ' does not exist on jQuery.tree' );
		}
	};

	var _makeTree = function(o, targetObject, ul,list){
		var $this = targetObject;
		for(var i = 0; i < list.length; i++){
			ul.append(_createTreeItem(o, $this, list[i]));
		}
	};

	var _createTreeItem = function(o, treeObject, item){
		var $this = treeObject;
		var li        = $('<li>').addClass(item.children ? "" : "li_layer" );
		var titleText = (item.title && item.title != '' ? '<span style="color:#222;">' +item.title + '</span>' : '<span style="color:#999;">名称未設定</span>' );
		
        var title = $('<a>').attr({'href':'javascript:void(0);'})
			.html(titleText)
          //??-DELETE
          //(item.children ? '<span class="num">' + item.children.length + '</span>' : '' )
			.data(
                {
				    "_data"     :  item,
				    "_isFolder" : (item.children ? true : false)
				}
            )
			.addClass(item.children ? 'folder' : 'layer')
			.on("contextmenu",
                function(){
                    var data  = $(this).data("_data")._editedData;
                    var popup = $(this).data("_data").children ? '.folder_menu' : '.layer_menu';
                    if(data){
                        if( data.layersUrl != ""){
                            popup = '.layer_menu';
                        }
                    }
					$(popup).popupMenu(
						{
                              o          : o
						    , targetElem : this
							, onClick    : function(o, methodName, target){
                                o.oTree.tree('exec', o, methodName, target);
							}
						}
                    );
					$this.tree("select", o, this);
					return false;
				}
            )
			.on('click',
                function(){
					$this.tree("select", o, this);
				}
            )
			.on('dblclick',
                function(){
					_openFolder(this);
				}
            );
            
        if ( item.id && item.id.trim() !="" ) title.addClass( "file" );
        else  title.removeClass( "file" );
		item._element = title;

		if(item.children){
			var arrow = $( "<a>" ).attr({'href':'javascript:void(0);'})
				.html("&nbsp;").addClass("arrow")
				.on('click',
                    function(){
                        $(this).addClass( 'open' );
                        _openFolder($(this).next('a'));
                    }
                );
			li.append(arrow);
			li.append(title);

			var ul2 = $('<ul>').css({"margin-left":"30px"});
			_makeTree(o, $this, ul2, item.children);
			li.append(ul2);
			ul2.hide();
		}
		else{
			li.append(title);
		}

		return li;
	};

	var _openFolder = function(target){
		var isFolder = $(target).data('_isFolder');
		if(isFolder){
			var ul = $(target).parent('li').children('ul');
			if(ul.is(':visible')){ $(target).data({'_expanded' : false }); $(target).parent('li').children('a').removeClass('open'); }
			else                 { $(target).data({'_expanded' : true  }); $(target).parent('li').children('a').addClass   ('open'); }

			ul.slideToggle('fast');
		  //ul.css( {display:"block"} );
		}
	};

	var methods = {
		init : function(){
			this.data(
                {
                    '_tree' : this
                }
            );

			this.on('scroll', 
                function(){
				    methods.hidePopup();
                }
			);
			var mouseScreenMouseDown = function() {

			};
			$(document.body).on( 'mousedown',
                function(){
				    if ($('.folder_menu').is(':visible')){ $('.folder_menu').fadeOut('fast'); }
				    if ($('.layer_menu' ).is(':visible')){ $('.layer_menu' ).fadeOut('fast'); } 
				    if ($('.top_menu'   ).is(':visible')){ $('.top_menu'   ).fadeOut('fast'); }
			    }
            );

			return methods.reset.apply(this, arguments);
		},

		hidePopup : function(){
			if($('.folder_menu').is(':visible')){ $( '.folder_menu').fadeOut('fast'); }
			if($('.layer_menu' ).is(':visible')){ $( '.layer_menu' ).fadeOut('fast'); }
			if($('.top_menu'   ).is(':visible')){ $( '.top_menu'   ).fadeOut('fast'); }
		},

		selectClear : function(){
			var selected = $(this).data('_selected');
            if(selected){
                $(selected).removeClass("selected");
                $(this).data({'_selected' : null});
            }
        },

		select : function(o, target){
			var selected = $(this).data('_selected');
			if(selected != target){
				if(selected){
                    $(selected).removeClass("selected");
                }
				$(target).addClass("selected");

				$(this).data({'_selected' : target});

				var offset     = $(target).offset();
				var treeOffset = o.oTree.offset();
				var top = (offset.top + o.oTree.scrollTop()) - treeOffset.top - 15;
				o.oTree.animate({ scrollTop:top }, 'normal');
			}
			o.oEdit.edit("set", o, $(target).data( '_data' ), 
                {
				    onChange : function(target,data){
					    var _data     = (data._editedData ? data._editedData : data);
					    var titleText = (_data.title && _data.title != '' ? _data.title : '<span style="color:#999;">名称未設定</span>');
					    
        				if ( _data.id && _data.id.trim() !="" ) $(target).addClass( "file" )
        				else $(target).removeClass("file");
					    $(target).html(titleText);
                        //??-DELETE
                        // + (_data.children ? '<span class="num">' + _data.children.length + '</span>' : '')
				    }
    		      , onChangeParam : target
			    }
            );
		},

		exec : function(o, methodName, target){
			var targetFolderElem = null;

			switch(methodName){
				case "createfolder_top":
				case "createlayer_top" :
					var newFolder = {
						  "type"     : methodName == "createfolder_top" ? "LayerGroup" : "Layer"
					    , "title"    : ""
						, "children" :(methodName == "createfolder_top" ? [] : null)
						, "_parent"  : null
					};

					$(this).data( '_tree_data' ).push(newFolder);
					var li = _createTreeItem(o, this, newFolder);
					var ul = this.find('ul');
					$(ul[0]).append(li);
					li.children("a").trigger('click');
					break;

				case "createfolder_next":
				case "createlayer_next" :
					// 次にフォルダ作成
					var ul = $(target).parent('li').parent('ul');

					targetFolderElem = $($(target).parent('li').parent('ul').parent('li').children('a.folder'));

					var data = $(target).parent('li').parent('ul').parent('li').children('a.folder').data('_data');
					var newFolder = {
						  "type"     : methodName == "createfolder_next" ? "LayerGroup" : "Layer"
						, "title"    : ""
						, "children" :(methodName == "createfolder_next" ? [] : null)
						, "_parent"  : data
					};

					var nextElem =$(target).parent('li');
					if(nextElem.length > 0){
						var children = null;
						if(data){
							children = data.children;
                        }
						else{
							children = $(this).data( '_tree_data' );
                        }

						var nextData = nextElem.children('a.folder,a.layer').data('_data');
						for( var i = 0; i < children.length; i++){
							if(children[i] == nextData){
								children.splice(i + 1, 0, newFolder);
								break;
							}
						}

						var li = _createTreeItem(o, this, newFolder);
						nextElem.after(li);
					}
					else{
						if(data){
							data.children.push(newFolder);
                        }
						else{
							$(this).data('_tree_data').push(newFolder);
                        }

						var li = _createTreeItem(o, this, newFolder);
						ul.append( li );
					}
					li.children("a").trigger('click');

					break;

				case "createfolder_in":
				case "createlayer_in" :
					// 中にフォルダ作成
					targetFolderElem = $(target);
					var ul   = $(target).parent('li').children('ul');
					var data = $(target).data('_data');
					var newFolder = {
						  "type"     : methodName == "createfolder_in" ? "LayerGroup" : "Layer"
						, "title"    : ""
						, "children" :(methodName == "createfolder_in" ? [] : null)
						, "_parent"  : data
					};
					data.children.push( newFolder );

					var li = _createTreeItem(o, this, newFolder);
					ul.append( li );
					li.children("a").trigger('click');
					break;

				case "remove":
					// 削除
					if($(this).data("_selected") == target){
                        o.oEdit.find("div").hide();
						$(this).data({"_selected" : null});
					}
					var ul         = $(target).parent('li').parent('ul');
					var targetData = $(target).data('_data');

					var data         =   $(target).parent('li').parent('ul').parent('li').children('a.folder').data('_data');
					targetFolderElem = $($(target).parent('li').parent('ul').parent('li').children('a.folder'));

					var children = null;
					if(data){
						children = data.children;
                    }
					else{
						children = $(this).data('_tree_data');
                    }

					for(var i = 0; i < children.length; i++){
						if(children[i] == targetData){
							children.splice(i, 1);
							break;
						}
					}
					$(target).parent('li').remove();

					break;
			}

			if(targetFolderElem){
				var item = targetFolderElem.data('_data');
				if(item){
					if(item._editedData){
                        item = item._editedData;
                    }
					var title = (item.title && item.title != '' ? item.title : '<span style="color:#999;">名称未設定</span>');
					
    				if ( item.id && item.id.tirm() !="" ) targetFolderElem.addClass( "file" )
    				else targetFolderElem.removeClass("file");
					targetFolderElem.html(title);
                    //??-DELETE
                    // + (item.children ? '<span class="num">' + item.children.length + '</span>' : '')

					if(!targetFolderElem.data('_expanded')){
						targetFolderElem.trigger('dblclick');
                    }
				}
			}
		},

		getInfo : function(o)
		{
			return{
				  fileName : $(this).data('_tree_filename')
				, treeData : $(this).data('_tree_data'    )
			};
		},

		reset : function(o, data, filename )
		{
			var $this = this;
			this.data({ '_tree_filename' : filename });

            o.oEdit.find(".edit_folder"     ).hide();
            o.oEdit.find(".edit_layer"      ).hide();
            o.oEdit.find(".layer_edit_frame").hide();

			if(!data){
				data = [
                    {
					      "title"    : ""
					    , "children" : []
				    }
               ];
			}

			this.data({ '_tree_data' : data });

			var ul = this.find('ul');
			if(ul.length <= 0){
				ul = $('<ul>').addClass(o.vTreeClass);
				this.append(ul);

                ul.nestedSortable(
                    {
					  delay                : 150 
					, listType             : 'ul'
					, forcePlaceholderSize : true
					, forceHelperSize      : true
					, placeholder          : "placeholder"
					, helper               : 'clone'
					, items                : 'li'
					, opacity              : .9
					, revert               : 250
					, tabSize              :  5
					, tolerance            : 'pointer'
					, maxLevels            : 10
					, isTree               : false
					, doNotClear           : true
					, handle               : "a"
					, toleranceElement     : 'a.folder,a.layer'
					, disableNestingClass  : 'li_layer'
                    , connectWith          : "." + o.vTreeClassWith
					, update               :
                        function(event, ui){
                            var a = ui.item.children("a.folder, a.layer");
						    var item = a.data("_data");
						    if(item){
    							_removeFromArray = function(targetList, target){
                                    var f = false;
							    	if(!targetList){
                                        return;
                                    }

                                    var _f_insertAfterClick = false;
								    for(var i = 0; i < targetList.length; i++){
    									if(targetList[i] == target){
    										targetList.splice(i, 1);
                                            f = true;
	    									break;
									    }
								    }
                                    return f;
							    };

							    _insertAfterArray = function(targetList, target, prev){
                                    var f = false;
    								if(!targetList){
                                        return;
                                    }

								    if(!prev){
    									targetList.splice(0, 0, target);
	    								return;
								    }

    								for(var i = 0; i < targetList.length; i++){
    									if(targetList[i] == prev){
    										targetList.splice(i + 1, 0, target);
                                            f = true;
										    break;
									    }
								    }
                                    return f;
							    };


                                _insertAfterClickEvt = function(o, a){
                                    a.off();
			                        a.on("contextmenu",
                                        function(){
                                            var data  = $(this).data("_data")._editedData;
                                            var popup = $(this).data("_data").children ? '.folder_menu' : '.layer_menu';
                                            if(data){
                                                if( data.layersUrl != ""){
                                                    popup = '.layer_menu';
                                                }
                                            }
					                        $(popup).popupMenu(
						                        {
                                                      o          : o
						                            , targetElem : this
							                        , onClick    : function(o, methodName, target){
                                                        o.oTree.tree('exec', o, methodName, target);
							                        }
						                        }
                                            );
					                        $this.tree("select", o, this);
					                        return false;
				                        }
                                    );
			                        a.on('click',
                                        function(){
                                            $this.tree("select", o, this);
				                        }
                                    );
                                };

    							var oldList =  (item._parent ? item._parent.children :  $( $this ).data( '_tree_data' ));
    							_removeFromArray(oldList, item);

    							item._parent = null;
                                
							    var newParent = ui.item.parent('ul').parent('li').children("a.folder"        ).data("_data");
							    var prevItem  = ui.item.prev()                   .children("a.folder,a.layer").data("_data");
							    var newList   = ( newParent ? newParent.children : oldList);

    							_insertAfterArray(newList, item, prevItem);
    							item._parent = newParent;

                                var o = null;
                                for(var nFrame = 0; nFrame < oFrame.length; nFrame++){
                                    if(ul[0].className.indexOf(oFrame[nFrame].vTreeClass) >= 0){
                                        o = oFrame[nFrame];
                                        break;
                                    }
                                }

                                if(oFrameProcE && oFrameProcUL){
                                    if(oFrameProcE.timeStamp == event.timeStamp){                                    
                                        if(oFrameProcUL[0].className != ul[0].className){
                                            for(var nFrame = 0; nFrame < oFrame.length; nFrame++){
                                                oFrame[nFrame].oTree.tree("selectClear");
                                                oFrame[nFrame].oEdit.find("div").hide();
                                                oFrame[nFrame].oEdit.edit("clearEdit", o);
                                            }
                                        }
                                    }
                                }                                   
                                var a = ui.item.find("a.folder, a.layer");
                                _insertAfterClickEvt(o, a);

                                oFrameProcE  = event;
                                oFrameProcUL = ul;
	    					}
		    			}
			    	}
                );
			}

			ul.empty();

			this.scrollTop(0);

			methods.hidePopup();

			_makeTree(o, $this, ul,data);
		}
    };

})(jQuery);

/************************************************************************
 edit
 ************************************************************************/
(function($){
	$.fn.edit = function(method){
		var edit = this.data('_edit');

		if(!edit){
			this.data(
                {
                    '_edit' : this
                }
            );
			edit = this;
		}

		if     (                  methods[method]    ){ return methods[method].apply(edit, Array.prototype.slice.call(arguments, 1)); }
        else if(!method || typeof method === 'object'){ return methods.init   .apply(edit, arguments                               ); }
        else{
			$.error('Method ' +  method + ' does not exist on jQuery.edit');
		}
	};

	var methods = {
		fixEdit: function(o)
		{
			var editingData    = $(this).data( "_editingData" );
			var onChange       = $(this).data( "_onChange" );
			var _onChangeParam = $(this).data( "_onChangeParam" );
			if (editingData ){
				// フォーム→データ
				if(editingData.children){
					var f = o.oEdit.find("form[name=folder]");
					if(!editingData._editedData){
						editingData._editedData = {
							children : editingData.children
						};
					}

					editingData._editedData.title     = f.find("input[name=title]"    ).val();
					editingData._editedData.icon      = f.find("input[name=iconUrl]"  ).val();
                    editingData._editedData.layersUrl = f.find("input[name=layersUrl]").val();

					if(f.find("input[name='toggleall']").length > 0){
						editingData._editedData.toggleall = f.find("input[name='toggleall']").prop( 'checked' );
                    }
					else{
						editingData._editedData.toggleall = editingData.toggleall;
                    }
					if(f.find("input[name='tolayer']").is(":checked") ){
						editingData._editedData.id = f.find("input[name='id']").val();
                    }
					else{
						editingData._editedData.id = "";
                    }
					if(onChange){
                        onChange(_onChangeParam,editingData);
                    }
				}
				else{
					var f = o.oEdit.find("form[name=layer]");
					if (!editingData._editedData){
                        editingData._editedData = {};
                    }

					editingData._editedData.type          = f.find("input[name=type]:checked").val();
					editingData._editedData.id            = f.find("input[name=id]"          ).val();
					editingData._editedData.title         = f.find("input[name=title]"       ).val();
					editingData._editedData.icon          = f.find("input[name=iconUrl]"     ).val();
					editingData._editedData.styleurl      = f.find("input[name=styleurl]"    ).val();
					editingData._editedData.url           = f.find("input[name=url]"         ).val();
                    editingData._editedData.errorTileUrl  = f.find("input[name=errorTileUrl]").val();
					if(f.find("input[name='cocotile']").length > 0){
						editingData._editedData.cocotile = f.find("input[name='cocotile']").prop( 'checked' );
                    }
					else{
						editingData._editedData.cocotile = editingData.cocotile;
                    }
					
					var textToLatLng = function(s) {
						var ret = null;
						var parts = s.split(",");
						if ( parts.length == 2 )
						{
							return [
								parseFloat(parts[0]),
								parseFloat(parts[1])
							];
						}
						else
							return null;
					};
					var southWest = textToLatLng( f.find("input[name=bounds_southwest]").val() );
					var northEast = textToLatLng( f.find("input[name=bounds_northeast]").val() );
					if ( southWest && northEast ) editingData._editedData.bounds =[southWest,northEast];
					else editingData._editedData.bounds = null;
					
					editingData._editedData.subdomains    = f.find("input[name=subdomains]"      ).val();
					editingData._editedData.attribution   = f.find("input[name=attribution]"     ).val();
					editingData._editedData.minZoom       = f.find("select[name=minZoom]"        ).val();
					editingData._editedData.maxZoom       = f.find("select[name=maxZoom]"        ).val();
					editingData._editedData.maxNativeZoom = f.find("select[name='maxNativeZoom']").val();
					editingData._editedData.legendUrl     = f.find("input[name=legendUrl]"       ).val();
					editingData._editedData.description   = f.find("textarea[name=html]"         ).val();

					if(onChange){
                        onChange(_onChangeParam,editingData);
                    }
				}
			}
		},

		clearEdit : function(o)
		{
			$(this).data(
                {
				      "_editingData"   : null
				    , "_onChange"      : null
				    , "_onChangeParam" : null
			    }
            );

            o.oEdit.find("input,textarea,select").off();
		},

		set : function(o, data, options)
		{
			try{
                var oToolTip = null;
                if(msie){ oToolTip = o.oEdit.find("input,textarea"); }
                else    { oToolTip = o.oEdit.find("*");              }
                oToolTip.tooltip('destroy');
            }
            catch(e){
            }
			
            if($(this).data("_editingData") == data){
				return;
			}
			methods.fixEdit  (o);
			methods.clearEdit(o);

			$(this).data(
                {
				      "_editingData"   : data
				    , "_onChange"      : (options ? options.onChange      : null)
				    , "_onChangeParam" : (options ? options.onChangeParam : null)
			    }
            );

            o.oEdit.find(".edit_folder"     ).hide();
            o.oEdit.find(".edit_layer"      ).hide();
            o.oEdit.find(".layer_edit_frame").hide();
			if(!data){
                return;
            }

			var onBlur = function(e){
				methods.fixEdit.apply(e.data, [o]);
			};

			var onLayerTypeChange = function(e){
				methods.fixEdit.apply(e.data, [o]);
				onLayerTypeChangeProc(o);
			};
			var onLayerTypeChangeProc = function(o){
                var fEditLayer     = o.oEdit.find(".edit_layer");
				var fEditLayerForm = fEditLayer.find("form[name='layer']");
				if(fEditLayerForm.find("input[name='type']:checked").length > 0){
                    fEditLayerForm.find(".layer_edit_frame").slideDown('normal');

					var layerMode    = fEditLayerForm.find("input[name='type']:checked").attr('layer_mode');
					var layerModeArr = layerMode.split(',');
					
					var elems = fEditLayerForm.find("dt,dd");
					for( var i=0; i<elems.length; i++ )
					{
						var layerMode = $(elems[i]).attr("layer_mode");
						if( layerMode && layerMode != '' ) $(elems[i]).hide();
						
					}
					/*
					fEditLayerForm.find("dt[layer_mode=tile]").hide();
					fEditLayerForm.find("dd[layer_mode=tile]").hide();
					fEditLayerForm.find("dt[layer_mode=layer_style]" ).hide();
					fEditLayerForm.find("dd[layer_mode=layer_style]" ).hide();
					*/
					for (var i = 0; i < layerModeArr.length; i++){
						if ( layerModeArr[i] == '' ) continue;
						for( var j=0; j<elems.length; j++ )
						{
							var layerMode = $(elems[j]).attr("layer_mode");
							if( layerMode && layerMode != '' ) {
								var arr = layerMode.split(',');
								for( var k=0; k<arr.length; k++ )
								{
									if (arr[k]==layerModeArr[i])
									{
										$(elems[j]).show();
										continue;
									}
								}
							}
						}
					
						//fEditLayerForm.find("dt[layer_mode=" + layerModeArr[i] + "]").show();
						//fEditLayerForm.find("dd[layer_mode=" + layerModeArr[i] + "]").show();
					}
				}
				else{
					o.oEdit.find(".layer_edit_frame").hide();
                }
			};

			var _data = (data._editedData ? data._editedData : data);
			if(data.children){
                if(_data.src){
                    _data.layersUrl = _data.src;
                }

                var fEditLayer     = o.oEdit.find(".edit_folder");
				var fEditLayerForm = fEditLayer.find("form[name=folder]");

				fEditLayerForm.find("input[name=title]"          ).val(_data.title                           ).on("blur", this, onBlur);
				fEditLayerForm.find("input[name=iconUrl]"        ).val(_data.iconUrl   ? _data.iconUrl   : "").on("blur", this, onBlur);
                fEditLayerForm.find("input[name=layersUrl]"      ).val(_data.layersUrl ? _data.layersUrl : "").on("blur", this, onBlur);
				if(fEditLayerForm.find("input[name='toggleall']" ).length > 0){
					fEditLayerForm.find("input[name='toggleall']").prop({"checked":_data.toggleall ? true : false } ).on("click", this, onBlur);
                }
                
				fEditLayerForm.find( "input[name=id]" ).val((_data.id) ? _data.id.trim() : '').on("blur", this, onBlur);
				fEditLayerForm.find( "input[name=tolayer]" ).off("click").on("click", this, function(e){
					methods.fixEdit.apply(e.data, [o]);
					if( $(this).is(":checked") )
					{
						
						fEditLayerForm.find( ".id_frame" ).show();
					}
					else
					{
						
						fEditLayerForm.find( ".id_frame" ).hide();
					}
				});
                if ( _data.id && _data.id.trim() != "" )
                {
					fEditLayerForm.find( "input[name=tolayer]" ).prop({"checked":true} );
					fEditLayerForm.find( ".id_frame" ).show();
				}
				else
				{
					fEditLayerForm.find( "input[name=tolayer]" ).prop({"checked":false} );
					fEditLayerForm.find( ".id_frame" ).hide();
				}
                
                
                
				fEditLayer.fadeIn('normal');
			}
			else{
                var fEditLayer     = o.oEdit.find(".edit_layer");
				var fEditLayerForm = fEditLayer.find("form[name='layer']");

				var f = $( "form[name='layer']" );

				if(_data.type == 'Layer'){
					_data.type = url2LayerType(_data.url);
				}

				if(_data.type){
					fEditLayerForm.find("input[name='type']").val ([_data.type]     ).on("click", this, onLayerTypeChange);
				}
				else{
					fEditLayerForm.find("input[name='type']").attr({checked : false}).on("click", this, onLayerTypeChange);
				}

				fEditLayerForm.find("input[name='id']"            ).val(_data.id            ? _data.id            : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("input[name='title']"         ).val(_data.title         ? _data.title         : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("input[name=iconUrl]"         ).val(_data.icon          ? _data.icon          : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("input[name=url]"             ).val(_data.url           ? _data.url           : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("input[name=subdomains]"      ).val(_data.subdomains    ? _data.subdomains    : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("input[name=attribution]"     ).val(_data.attribution   ? _data.attribution   : "").on("blur"  , this, onBlur);
                fEditLayerForm.find("input[name=errorTileUrl]"    ).val(_data.errorTileUrl  ? _data.errorTileUrl  : "").on("blur"  , this, onBlur); 
                fEditLayerForm.find("input[name=styleurl]"    ).val(_data.styleurl  ? _data.styleurl  : "").on("blur"  , this, onBlur);                 
				if(fEditLayerForm.find("input[name='cocotile']"   ).length > 0){
					fEditLayerForm.find("input[name='cocotile']"  ).prop({"checked" : _data.cocotile ? true : false }).on("click"  , this, onBlur);
                }
                
                var southWest = "";
				var northEast = "";
				
                if ( _data.bounds )
                {
					southWest =  _data.bounds[0][0] + "," + _data.bounds[0][1];
					northEast =  _data.bounds[1][0] + "," + _data.bounds[1][1];
				}
				
				fEditLayerForm.find("input[name=bounds_southwest]"    ).val(southWest).on("blur"  , this, onBlur );
				fEditLayerForm.find("input[name=bounds_northeast]"    ).val(northEast).on("blur"  , this, onBlur );
					
				fEditLayerForm.find("select[name='minZoom']"      ).val(_data.minZoom       ? _data.minZoom       : "").on("change", this, onBlur);
				fEditLayerForm.find("select[name='maxZoom']"      ).val(_data.maxZoom       ? _data.maxZoom       : "").on("change", this, onBlur);
				fEditLayerForm.find("select[name='maxNativeZoom']").val(_data.maxNativeZoom ? _data.maxNativeZoom : "").on("change", this, onBlur);
			    fEditLayerForm.find("input[name=legendUrl]"       ).val(_data.legendUrl     ? _data.legendUrl     : "").on("blur"  , this, onBlur);
				fEditLayerForm.find("textarea[name=html]"         ).val(_data.description   ? _data.description   : "").on("blur"  , this, onBlur);

				onLayerTypeChangeProc(o);

				fEditLayer.scrollTop(0).fadeIn('normal');
			}

            var oToolTip = null;
            if(msie){ oToolTip = o.oEdit.find("input,textarea"); }
            else    { oToolTip = o.oEdit.find("*");              }
            oToolTip.tooltip(
                {
				      content: function()
                        {
					        var element = $(this);
					        if(element.is("[title]")){
						        return element.attr("title");
					        }
    				    }
                    , position :
                      { 
                            my        : "left+50 top+6"
                          , at        : "left bottom"
                          , collision : "flipfit"
                      }
                    , tooltipClass : "config_tooltip"
			    }
            );
		}
	};
})(jQuery);

/************************************************************************
 ダイアログ：ファイルに保存
 ************************************************************************/
(function($){
	$.fn.saveDialog = function(options){
		var _options = $.extend({}, options);
        var o = _options.o;

		var container = o.oMenuSave;

		// 表示
		this.on('click',
            function() {
                container[0].style.top = o.vPosT + "px";

			    o.oEdit.edit("fixEdit", o);

			    var info = o.oTree.tree("getInfo", o);

			    o.oEdit.data({ "_info": info });

			    if( info && info.treeData){
				    $('textarea[name="download_text"]' ).eq(o.n).val(_makeLayersJSONText(o, info.treeData, $("input[name=download_text_indent]").eq(o.n)[0].checked));
				    o.oEdit.data("fixEdit", o);
			    }
			    else{
				    alert('err');
				    return;
			    }

			    $("input[name=download_text_indent]").eq(o.n).off();
			    $("input[name=download_text_indent]").eq(o.n).on( "click", this, 
                    function(e) {
    				    var info = o.oEdit.data("_info");
				        $('textarea[name="download_text"]').eq(o.n).val(_makeLayersJSONText(o, info.treeData, this.checked));
                    }
			    );

			    var a = $("*[save_method=load]").eq(o.n).off();

			    $('input[name="download_filename"]').eq(o.n).val(info.fileName && info.fileName != '' ? info.fileName : 'layers.txt');
			    a.attr( { href:'javascript:void(0);', target:''} ).on('click',
                    function(){
                        var f = true;
                        if(o.fSaveMsg){
                            f = false;
                            if(window.confirm("レイヤ定義ファイルURLが入力されているフォルダ内の要素は保存されません。")){
                                f = true;
                            }
                        }
                        if(f){
					        var fileName = ($('input[name="download_filename"]').eq(o.n).val()) ? $('input[name="download_filename"]').eq(o.n).val().trim() : '';
					        if(fileName == ''){
                                fileName = 'layers.txt';
                            }

					        var blob = new Blob([$('textarea[name=download_text]').eq(o.n).val()], { "type" : "text/plain" });
					        if(window.navigator.msSaveBlob){
						        window.navigator.msSaveBlob(blob, fileName, true);
						        return false;
					        }
					        else{
						        window.URL = window.URL || window.webkitURL;
						        a.attr(
                                    {
								        "download" : fileName,
								        "href"     : window.URL.createObjectURL(blob)
							        }
                                );
						        return true;
					        }
                        }
				    }
                );

			    container.fadeIn();
		    }
        );

		// 中止
		container.find("*[save_method=cancel]").on('click',
            function(){
			    container.fadeOut();
            }
		);

		return this;
	};

	var _makeLayersJSONText = function(o, treeData, isIndent){
        o.fSaveMsg = false;

		var makeJSON = function(parent, list){
			for(var i=0; i<list.length; i++){
				var item    = (list[i]._editedData ? list[i]._editedData : list[i]);
				var newItem = {
				};

				if(item.children){
					newItem.type      = "LayerGroup";
					newItem.title     = item.title;
					newItem.iconUrl   = ( item.icon ? item.icon : '' );
					newItem.toggleall = ( item.toggleall ? item.toggleall : false );
					newItem.id = item.id;
					
                    if(item.src && item.src != ""){
                        item.layersUrl = item.src;
                    }

                    if(item.layersUrl && item.layersUrl != ""){
                        if(!newItem.entries){
                            o.fSaveMsg = true;
                        }
                        newItem.src = item.layersUrl;
                    }
                    else{
					    newItem.entries = [];
					    makeJSON( newItem.entries, item.children );
                    }
				}
				else{
					newItem.type         = "Layer";
					newItem.id           = item.id;
					newItem.title        = item.title;
					newItem.iconUrl      = ( item.icon ? item.icon : '' );
					if ( item.styleurl && item.styleurl != '' ) newItem.styleurl     = item.styleurl;
					newItem.url          = item.url;
					if( item.bounds ) newItem.bounds       = item.bounds;
					newItem.subdomains   = ( item.subdomains  ? item.subdomains    : "" );
					newItem.attribution  = ( item.attribution ? item.attribution   : "" );
                    newItem.errorTileUrl = ( item.errorTileUrl ? item.errorTileUrl : "" );
					newItem.cocotile     = ( item.cocotile ? item.cocotile : false );
                    if ( item.minZoom && item.minZoom != '' ){ newItem.minZoom = parseInt(item.minZoom); }
					if ( item.maxZoom && item.maxZoom != '' ){ newItem.maxZoom = parseInt(item.maxZoom); }
					if ( item.maxNativeZoom && item.maxNativeZoom != '' ){
						newItem.maxNativeZoom = parseInt(item.maxNativeZoom);
                    }
					newItem.legendUrl   = item.legendUrl;
					newItem.html        = ( item.description ? item.description : "" );
				}

				parent.push( newItem );
			}
		};

		var resultJSON = [];
		makeJSON(resultJSON, treeData);
		return JSON.stringify({"layers": resultJSON }, undefined , isIndent ? '  ' : null);
	};
})(jQuery);