/*
The MIT License (MIT)

Copyright (c) 2015 TilemapJP
https://github.com/tilemapjp/Cesium-JapanGSI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/


(function(){
    var
        Credit = Cesium.Credit,
        defaultValue = Cesium.defaultValue,
        defined = Cesium.defined,
        defineProperties = Cesium.defineProperties,
        DeveloperError = Cesium.DeveloperError,
        Event = Cesium.Event,
        Rectangle = Cesium.Rectangle,
        WebMercatorTilingScheme = Cesium.WebMercatorTilingScheme,
        ImageryProvider = Cesium.ImageryProvider;
    /**/

    "use strict";

    var trailingSlashRegex = /\/$/;
    var zoomStringRegex = /^([0-9]+)-?([0-9]+)?$/;
    //var defaultCredit = new Credit('国土地理院');
    var defaultCredit = new Credit('');


    function devideZoomString(zoomString) {
        if (zoomString.match(zoomStringRegex)) {
            var min = RegExp.$1;
            var max = RegExp.$2;
            return max ? [parseInt(min),parseInt(max)] : [parseInt(min),parseInt(min)];
        }
        return [];
    }

    function getTargetLayer(layerObj, layerName){
    	var resultObj;
    	if(typeof layerObj.id!== "undefined")return;
    	for(var category in layerObj){
    		var isUndefined = typeof  layerObj[category][layerName] === "undefined";
    		if(isUndefined){
    			resultObj =  arguments.callee(layerObj[category], layerName);
    			if(typeof resultObj!== "undefined")return resultObj;
    		} else {
	    		if(layerName in layerObj[category]){
	    			return layerObj[category][layerName];
	    		}
    		}
    	}
    	return resultObj;
    }

    function parseLayers(optionLayerList) {
        if (!optionLayerList) {
            optionLayerList = ["std"];
        }
        var layerList = [], max = 0, min = 18;

        for (var i = 0; i < optionLayerList.length; i++) {
            var optionLayer = optionLayerList[i];
            var isStr = typeof optionLayer === "string";
            if (isStr) {
                //optionLayer = defaultLayerIDs[optionLayer];
            	optionLayer = getTargetLayer(defaultLayerIDs, optionLayer);
            } else {
                var defaultLayer = defaultLayerIDs[optionLayer.id];
                if (defaultLayer) {
                    optionLayer.ext = defaultValue(optionLayer.ext, defaultLayer.ext);
                    optionLayer.zoom = defaultValue(optionLayer.zoom, defaultLayer.zoom);
                }
            }

            var minmax = devideZoomString(optionLayer.zoom);
            if (minmax.length == 0) continue;
            if (minmax[0] < min) min = minmax[0];
            if (minmax[1] > max) max = minmax[1];

            for (var j=minmax[0];j<=minmax[1];j++) {
                if (!layerList[j]) layerList[j] = optionLayer;
            }
        }

        for (var i=min;i<=max;i++) {
            if (!layerList[i]) throw "No layer definition for zoom level" + i;
        }
        if (max < min) throw "There are no valid layer definition";

        return [layerList, min, max];
    }

    var JapanGSICombineImageryProvider = function JapanGSICombineImageryProvider(options) {
        options = defaultValue(options, {});
        this.options = options;
        //console.log( options );
		/*
        var url = defaultValue(options.url, 'http://a.tile.openstreetmap.org/');

        if (!trailingSlashRegex.test(url)) {
            url = url + '/';
        }
		*/
		this._test = 0;
		
		this._urlList = [];
		this._tileList = options.tileList;
		for ( var i=0; i<this._tileList.length; i++ )
		{
			if ( this._tileList[i].id == CONFIG.FREERELIEFID )
				this._urlList.push(CONFIG.FREERELIEFID);
			else
				this._urlList.push(this._tileList[i].url);
		}

        //this._fileExtension = defaultValue(options.fileExtension, 'png');
        this._proxy = options.proxy;
        this._tileDiscardPolicy = options.tileDiscardPolicy;

        this._tilingScheme = new WebMercatorTilingScheme();

        this._tileWidth = 256;
        this._tileHeight = 256;

        //var parsedLayers = parseLayers(options.layerLists);
        //this._layerLists = parsedLayers[0];

        //this._minimumLevel = defaultValue(options.minimumLevel, parsedLayers[1]);
        //this._maximumLevel = defaultValue(options.maximumLevel, parsedLayers[2]);
		//this._minimumLevel = options.minZoom;
		this._maximumLevel = (options.maxZoom ? options.maxZoom + 1 : options.maxZoom);
		
        this._rectangle = defaultValue(options.rectangle, this._tilingScheme.rectangle);

        // Check the number of tiles at the minimum level.  If it's more than four,
        // throw an exception, because starting at the higher minimum
        // level will cause too many tiles to be downloaded and rendered.
        //var swTile = this._tilingScheme.positionToTileXY(Rectangle.southwest(this._rectangle), this._minimumLevel);
        //var neTile = this._tilingScheme.positionToTileXY(Rectangle.northeast(this._rectangle), this._minimumLevel);
        //var tileCount = (Math.abs(neTile.x - swTile.x) + 1) * (Math.abs(neTile.y - swTile.y) + 1);
        //if (tileCount > 4) {
        //    throw new DeveloperError('The imagery provider\'s rectangle and minimumLevel indicate that there are ' + tileCount + ' tiles at the minimum level. Imagery providers with more than four tiles at the minimum level are not supported.');
        //}

        this._errorEvent = new Event();

        this._ready = true;

        var credit = defaultValue(options.credit, defaultCredit);
        if (typeof credit === 'string') {
            credit = new Credit(credit);
        }
        this._credit = credit;
    };

	function buildImageUrl(imageryProvider, x, y, level) {
		
		var tileList = imageryProvider._tileList;
		var urlList = [];
		//var urlList = imageryProvider._urlList.concat();
		for ( var i=0; i<tileList.length; i++ )
		{
			if ( tileList[i].id == CONFIG.FREERELIEFID )
			{
				urlList.push(CONFIG.FREERELIEFID);
			}
			else
			{
				var tileX = x;
				var tileY = y;
				var tileL = level;
				
				if ( tileList[i].maxNativeZoom != null && tileList[i].maxNativeZoom < level )
				{
					var mag = Math.pow(2, level - tileList[i].maxNativeZoom);
					var tileX = parseInt(tileX / mag);
					var tileY = parseInt(tileY / mag);
					var tileL = tileList[i].maxNativeZoom;
				}
				
				if ( tileList[i].tms )
				{
					var tileMaxIndex = (tileL == 0 ? 0 : Math.pow(2, tileL) - 1);
					tileY = tileMaxIndex - tileY;
				}
				
				urlList.push( tileList[i].url.replace( "{x}", tileX ).replace( "{y}", tileY ).replace( "{z}", tileL ) );
			}
		}
		var proxy = imageryProvider._proxy;
		if (defined(proxy)) {
			for ( var i=0; i<urlList.length; i++ )
			{
				if ( urlList[i] == CONFIG.FREERELIEFID )
					urlList[i] = urlList[i];
				else
					urlList[i] = proxy.getURL(urlList[i]);
			}
		}
		
		return urlList;
	}

    defineProperties(JapanGSICombineImageryProvider.prototype, {
        url : {
            get : function() {
                return this._url;
            }
        },

        proxy : {
            get : function() {
                return this._proxy;
            }
        },

        tileWidth : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('tileWidth must not be called before the imagery provider is ready.');
                }

                return this._tileWidth;
            }
        },

        tileHeight: {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('tileHeight must not be called before the imagery provider is ready.');
                }

                return this._tileHeight;
            }
        },

        maximumLevel : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('maximumLevel must not be called before the imagery provider is ready.');
                }

                return this._maximumLevel;
            }
        },

        minimumLevel : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('minimumLevel must not be called before the imagery provider is ready.');
                }

                return this._minimumLevel;
            }
        },

        tilingScheme : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('tilingScheme must not be called before the imagery provider is ready.');
                }

                return this._tilingScheme;
            }
        },

        rectangle : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('rectangle must not be called before the imagery provider is ready.');
                }

                return this._rectangle;
            }
        },

        tileDiscardPolicy : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('tileDiscardPolicy must not be called before the imagery provider is ready.');
                }

                return this._tileDiscardPolicy;
            }
        },

        errorEvent : {
            get : function() {
                return this._errorEvent;
            }
        },

        ready : {
            get : function() {
                return this._ready;
            }
        },

        credit : {
            get : function() {
                return this._credit;
            }
        },

        hasAlphaChannel : {
            get : function() {
                return true;
            }
        }
    });

    JapanGSICombineImageryProvider.prototype.getTileCredits = function(x, y, level) {
        return undefined;
    };

    JapanGSICombineImageryProvider.prototype.requestImage = function(x, y, level) {
		if (!this._ready) {
		    throw new DeveloperError('requestImage must not be called before the imagery provider is ready.');
		}
		if ( this.options.minZoom > level || (this.options.maxZoom && this.options.maxZoom < level) )
		{
			if ( !this._dummyCanvas )
			{
				this._dummyCanvas = document.createElement("canvas");
				this._dummyCanvas.width = 1;
				this._dummyCanvas.height = 1;
			}
			return this._dummyCanvas;
		}
		var urlList = buildImageUrl(this, x, y, level);
		var tileList = this._tileList;
		
		
		var fncToGrayScale = function( ctx )
		{
			var src = ctx.getImageData(0, 0, 256, 256);
			var dst = ctx.createImageData(256,256);
			
			for (var i = 0; i < src.data.length; i=i+4) {
			    var pixel = (src.data[i] + src.data[i+1] + src.data[i+2]) / 3;
			    dst.data[i] = dst.data[i+1] = dst.data[i+2] = pixel;
			    dst.data[i+3] = src.data[i+3];
			}
			
			ctx.putImageData(dst, 0, 0);
		};
		
		
		var fncCombine = function( ctx, overCtx, opacity, mode )
		{
			opacity = parseFloat(opacity);
			
			var src = ctx.getImageData(0, 0, 256, 256);
			var dst = ctx.createImageData(256,256);
			var imgData = overCtx.getImageData(0,0,256,256);
			
			for (var i = 0; i < src.data.length; i=i+4) {
				
				var c1 = {
					r : src.data[i],
					g : src.data[i+1],
					b : src.data[i+2],
					a : src.data[i+3]
				};
				
				var c2 = {
					r : imgData.data[i],
					g : imgData.data[i+1],
					b : imgData.data[i+2],
					a : imgData.data[i+3]
				};
				
				var r = 0;
				var g = 0;
				var b = 0;
				var a = 0;
				

				if (c2.a == 0 || opacity == 0){
					//a=0と透過100%は乗算しない
					r = c1.r;
					g = c1.g;
					b = c1.b;
					a = c1.a;
				}
				else{
					switch( mode )
					{
						case 1: //半透明
							r = c1.r + ( ( c2.r - c1.r ) * opacity );
							g = c1.g + ( ( c2.g - c1.g ) * opacity );
							b = c1.b + ( ( c2.b - c1.b ) * opacity );
							a = c1.a + ( ( c2.a - c1.a ) * opacity );
							break;
							
						case 2: //乗算
							r = c1.r * ( c2.r / 255 );
							g = c1.g * ( c2.g / 255 );
							b = c1.b * ( c2.b / 255 );
							a = c1.a * ( c2.a / 255 );
							break;
						case 3: //両方
							r = c1.r * ( c2.r / 255 );
							g = c1.g * ( c2.g / 255 );
							b = c1.b * ( c2.b / 255 );
							a = c1.a * ( c2.a / 255 );
							r = c1.r + ( ( r - c1.r ) * opacity );
							g = c1.g + ( ( g - c1.g ) * opacity );
							b = c1.b + ( ( b - c1.b ) * opacity );
							a = c1.a + ( ( a - c1.a ) * opacity );
							break;
					}
				}
				r = Math.floor(r);
				g = Math.floor(g);
				b = Math.floor(b);
				a = Math.floor(a);
				
				
				if ( r > 255 ) r = 255;
				if ( g > 255 ) g = 255;
				if ( b > 255 ) b = 255;
				if ( a > 255 ) a = 255;
				
				
				dst.data[i] = r;
				dst.data[i+1] = g;
				dst.data[i+2] = b;
				dst.data[i+3] = a;
				
				
			}
			ctx.putImageData(dst, 0, 0);
		}		
		
		var promiseList = [];
		for ( var i=0; i<urlList.length; i++ )
		{
			if ( urlList[i] == CONFIG.FREERELIEFID )
			{
				// 自由な色別標高図
				var loadRelief = function(info)
				{
					return Cesium.when(info, function(info) {
						var deferred = Cesium.when.defer();
						loadRelief.createImage(info, deferred);
						return deferred.promise;
					});
				};
				
				
				loadRelief.createImage = function(info, deferred) {
					
					var loader = new GSI3D.DEMLoader( 
						info.coords.x, info.coords.y, info.coords.z,
						$.extend( true, [], []), {
							overZooming : true,
							useHillshademap : GSI.GLOBALS.mapLayerList.getElevationData().useHillshademap
						} );
					loader.on("load",function(e) {
						var deferred = e.target._params.deferred;
						
						var canvas = document.createElement("canvas");
						
						canvas.width=256;
						canvas.height=256;
						
						var ctx = canvas.getContext('2d');
						e.target._params.info.target._reliefDrawer.draw( canvas, 
							e.target.getData(), e.target.getHillshademapImage() );
						deferred.resolve(canvas);
					});
					
					loader._params = {
						info:info,
						deferred : deferred
					}
					loader.load();
					
					return deferred.promise;
				};
				
				
				
				if ( !this._reliefDrawer )
					this._reliefDrawer = new GSI3D.ReliefTileLayer.TileDrawer(GSI.GLOBALS.mapLayerList.getElevationData());
				var deferred = Cesium.when.defer();
				promiseList.push(
					loadRelief.createImage({
						target : this,
						coords : {x:x,y:y, z: level}
					}, deferred)
				);
			
			}
			else if ( tileList[i].maxNativeZoom != null && tileList[i].maxNativeZoom < level )
			{
				var mag = Math.pow(2, level - tileList[i].maxNativeZoom);
				
				var tileX = parseInt(x / mag);
				var indexInTileX = (x / mag - tileX) * mag;
				
				var tileY = parseInt(y / mag);
				var indexInTileY = (y / mag - tileY) * mag;
				
				var promise = Cesium.when.reject();
				if ( mag <= 256 )
				{
					promise = ImageryProvider.loadImage(this, urlList[i])
						.then(function(image) {
							try
							{
								var canvas = document.createElement("canvas");
								canvas.width  = 256;
								canvas.height = 256;
								
								var blockSize = parseInt(canvas.width / mag);
								var sx = blockSize * indexInTileX;
								var sy = blockSize * indexInTileY;
								var sw = blockSize;
								var sh = blockSize;
								var dx = 0;
								var dy = 0;
								var dw = canvas.width;
								var dh = canvas.height;
								
								var ctx = canvas.getContext('2d');
								ctx.clearRect( 0, 0, canvas.width, canvas.height );
								ctx.beginPath();
								ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
								
								return Cesium.when.resolve( canvas );
							}
							catch(e)
							{
								consolse.log("Error at LoadNativeImage", e);
								return Cesium.when.reject();
							}
						});
				}
				promiseList.push( promise );
			}
			else
				promiseList.push( ImageryProvider.loadImage(this, urlList[i]) );
		}
		
		var canvasWidth = 256;
		var canvasHeight = 256;

		var othis = this;
		return Cesium.when.resolve(Promise.allSettled(promiseList)
		.then(function(imageList){
			try
			{
				var workCanvas = document.createElement("canvas");
				workCanvas.width  = canvasWidth;
				workCanvas.height = canvasHeight;
				var workCtx = workCanvas.getContext("2d");
				workCtx.globalAlpha = 1;
				workCtx.fillStyle = "#fff";
				workCtx.fillRect( 0, 0, canvasWidth, canvasHeight );
				
				var tempCanvas = document.createElement("canvas");
				tempCanvas.width  = canvasWidth;
				tempCanvas.height = canvasHeight;
				var tempCtx = tempCanvas.getContext("2d");
				tempCtx.globalAlpha = 1;
				
				for ( var i=imageList.length-1; i>=0; i-- )
				{
					//Promiseを解決できていない分はスキップ
					if (imageList[i].status != "fulfilled")	continue;

					var tile = othis._tileList[i];
					var data = imageList[i].value;
					if ( !tile || !tile._visibleInfo || tile._visibleInfo._isHidden ) continue;
					if ( tile.minZoom != null && tile.minZoom > level ) continue;
					if ( tile.maxZoom != null && tile.maxZoom < level ) continue;
					
					
					var opacity = tile._visibleInfo.opacity;
					if ( opacity == undefined ) opacity = 1;
					
					tempCtx.clearRect( 0, 0, canvasWidth, canvasHeight );
					tempCtx.beginPath();
					tempCtx.drawImage(data, 0, 0);
					
					if ( tile._visibleInfo._grayScale )
					{
						fncToGrayScale(tempCtx);
					}
					
					if ( tile._visibleInfo._isCombine && opacity != 1 )
					{
						fncCombine( workCtx, tempCtx, opacity, 3 );
					}
					else if ( tile._visibleInfo._isCombine )
					{
						fncCombine( workCtx, tempCtx, opacity, 2 );
					}
					else if ( opacity != 1 )
					{
						fncCombine( workCtx, tempCtx, opacity, 1 );
					}
					else
					{
						workCtx.drawImage( tempCanvas, 0, 0, canvasWidth, canvasHeight );
					}
				}
				
				if ( othis._test )
				{
					workCtx.beginPath();
					workCtx.strokeStyle = "#c00";
					workCtx.fillStyle = "#c00";
					workCtx.lineWidth = 2;
					workCtx.strokeRect(0, 0, canvasWidth-1, canvasHeight-1);
					workCtx.font = "20px 'HG正楷書体-PRO'";
					workCtx.fillText("xyz: " + x + " / " + y + " / " + level, 5, canvasHeight-10);
				}
				
				return Cesium.when.resolve( workCtx.getImageData(0, 0, canvasWidth, canvasHeight) );
			}
			catch(e)
			{
				console.log("Error at Combine:", e);
			}
		}));
	};

    JapanGSICombineImageryProvider.prototype.pickFeatures = function() {
        return undefined;
    };

    Cesium.JapanGSICombineImageryProvider = JapanGSICombineImageryProvider;
})();