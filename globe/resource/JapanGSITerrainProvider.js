(function(){
var
    pow2_16 = Math.pow( 2, 16 ),
    pow2_8 = Math.pow( 2, 8 ),
    pow2_23 = Math.pow( 2, 23 ),
    pow2_24 = Math.pow( 2, 24 );
    
    "use strict";
    
    
    
//----- 標高タイルの既定値設定 -----
    
// pngを利用する場合
    var GSI_MAX_TERRAIN_LEVEL = 14;
    var GSI_DEM_DEFAULT_URL   = 'https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png';
    
// textを利用する場合
    //var GSI_MAX_TERRAIN_LEVEL = 14;
    //var GSI_DEM_DEFAULT_URL   = 'https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt';
    
//----------------------------------
    
    
    
    var PROXY_URL = '';
    
    
    
    var defaultCredit = new Cesium.Credit('');
    
    
    
var DEMAREA=[
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
var DEMAREA2=[
"9/442/198",
"9/438/202",
"9/438/203",
"9/439/202",
"9/439/203",
"9/457/182",
"9/458/182",
"9/442/197"
];

var DEMAREA3=[
"10/879/406",
"10/879/407"
];
    var JapanGSITerrainProvider = function JapanGSITerrainProvider(options) {
		
		this._url = options.url;
		this._maxZoom = Cesium.defaultValue(options.maxZoom, GSI_MAX_TERRAIN_LEVEL);
		this._proxy = options.proxy;
		this._heightPower = Cesium.defaultValue(options.heightPower , 1);

		if (!this._url)
		{
			this._url = GSI_DEM_DEFAULT_URL;
		}
		
		var i = this._url.lastIndexOf('.');
		this._ext = (i > 0 ? this._url.substr(i) : '');
        
        
        this._tilingScheme = new Cesium.WebMercatorTilingScheme({numberOfLevelZeroTilesX:2});
        //this._tilingScheme = new Cesium.GeographicTilingScheme({numberOfLevelZeroTilesX:2});

        this._heightmapWidth = 32;
        this._demDataWidth   = 256;

        this._terrainDataStructure = {
            heightScale:       this._heightPower,
            heightOffset:      0,
            elementsPerHeight: 1,
            stride:            1,
            elementMultiplier: 256,
            
            isBigEndian : false,
            lowestEncodedHeight : 0,
            highestEncodedHeight : 256 * 256 - 1
        };
        
        
        this._levelZeroMaximumGeometricError = 
            Cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(
                this._tilingScheme.ellipsoid, 
                this._heightmapWidth, 
                this._tilingScheme.getNumberOfXTilesAtLevel(0)
            );

        this._errorEvent = new Cesium.Event();
        this._ready = true;
        this._readyPromise = Cesium.when.defer();
        this._rectangles = [];

        var credit = Cesium.defaultValue(options.credit, defaultCredit);
        if (typeof credit === 'string') credit = new Cesium.Credit(credit); 
        this._credit = credit;
    };
    
    JapanGSITerrainProvider.prototype.requestTileGeometry = function(x, y, level, request) {
		
		var tileUrl = this._url;
		var maxLevel = this._maxZoom;
		
        var demcheklebel=8;
        if (level > demcheklebel)
        {
        	var chekx = x;
        	var cheky = y;
        	chekx >>= level - demcheklebel +1;
        	cheky >>= level - demcheklebel;
        	if(DEMAREA.indexOf(demcheklebel +"/" + chekx + "/" +cheky) != -1){
        		if (this._ext == '.png')
        		{
        			tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png';
        			maxLevel = 14;
        		}
        		else
        		{
        			tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt';
        			maxLevel = 14;
        		}
        		demcheklebel2=demcheklebel+1;
        		var chekx2 = x;
        		var cheky2 = y;
        		chekx2 >>= level - demcheklebel2 +1;
        		cheky2 >>= level - demcheklebel2;
        		if(DEMAREA2.indexOf(demcheklebel2 +"/" + chekx2 + "/" +cheky2) >= 0){
        			if (this._ext == '.png')
        			{
        				tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm_png/{z}/{x}/{y}.png';
        				maxLevel = 8;
        			}
        			else
        			{
        				tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt';
        				maxLevel = 8;
        			}
        			demcheklebel3=demcheklebel2+1;
        			var chekx3 = x;
        			var cheky3 = y;
        			chekx3 >>= level - demcheklebel3 +1;
        			cheky3 >>= level - demcheklebel3;
        			if(level >= demcheklebel3 &&  DEMAREA3.indexOf(demcheklebel3 +"/" + chekx3 + "/" +cheky3) >= 0){
        				if (this._ext == '.png')
        				{
        					tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/dem_png/{z}/{x}/{y}.png';
        					maxLevel = 14;
        				}
        				else
        				{
        					tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/dem/{z}/{x}/{y}.txt';
        					maxLevel = 14;
        				}
        			}
        		}
        	}
        	else
        	{
        		if (this._ext == '.png')
        		{
        			tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm_png/{z}/{x}/{y}.png';
        			maxLevel = 8;
        		}
        		else
        		{
        			tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt';
        			maxLevel = 8;
        		}
        	}
        }
        else
        {
        	if (this._ext == '.png')
        	{
        		tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm_png/{z}/{x}/{y}.png';
        		maxLevel = 8;
        	}
        	else
        	{
        		tileUrl = 'https://cyberjapandata.gsi.go.jp/xyz/demgm/{z}/{x}/{y}.txt';
        		maxLevel = 8;
        	}
        }
        
        if ( PROXY_URL ) tileUrl = PROXY_URL + tileUrl;
        
        
        var i = tileUrl.lastIndexOf('.');
        var ext = (i > 0 ? tileUrl.substr(i) : this._ext);
        
        
        if (ext == '.png')
        {
            this._loadProc = function(url, request){
                return  Cesium.loadImage(url, undefined, request);
            };
            this._makeTileData = this._makePngTileData;
        }
        else
        {
            this._loadProc = Cesium.loadText;
            this._makeTileData = this._makeTextTileData;
        }
		
		
        var orgx = x;
        var orgy = y;
        var shift = 0;
        if (level > maxLevel) {
            shift = level - maxLevel;
            level = maxLevel;
        }

        x >>= shift+1;
        y >>= shift;
        var shiftx = (orgx % Math.pow(2, shift + 1)) / Math.pow(2, shift + 1);
        var shifty = (orgy % Math.pow(2, shift)) / Math.pow(2, shift);

        //var url = (typeof tileUrl === 'string' ? tileUrl : this._url(x,y,level) );
        var url = tileUrl.replace( "{x}", x ).replace( "{y}", y ).replace( "{z}", level );
        
        var proxy = this._proxy;
        if (Cesium.defined(proxy)) url = proxy.getURL(url);

        //request = ( request ? request : new Cesium.Request() );
		//request.url = url;
        
        /*
        request.throttle = true;
        
        var that = this;
        request.requestFunction = function(){
			return that._loadProc( url );
		};
        var promise = Cesium.RequestScheduler.request(request);
        
        if (!Cesium.defined(promise)) {
            return Cesium.undefined;
        }
        */
        var promise = this._loadProc(url);
        
        var that = this;
        
        return this._makeTileData( x, y, level, promise, shift, shiftx, shifty, maxLevel )
        	.then(function(data){
        		that._readyPromise = Cesium.when.resolve(true);
        		return data;
        	});
        
        
    };
    
    // テキストから
    JapanGSITerrainProvider.prototype._makeTextTileData = function(x, y, level, promise, shift, shiftx, shifty, maxLevel) {
		
        var self = this;
        return Cesium.when(promise, function(data) {
            var heightCSV = [];
            var LF = String.fromCharCode(10);
            var lines = data.split(LF);
            for (var i=0; i<lines.length; i++){
                var heights = lines[i].split(",");
                for (var j=0; j<heights.length; j++){
                    if (heights[j] == "e") heights[j] = 0;
                }
                heightCSV[i] = heights;
            }

            var whm = self._heightmapWidth;
            var wim = self._demDataWidth;
            var hmp = new Int16Array(whm*whm);

            for(var y = 0; y < whm; ++y){
                for(var x = 0; x < whm; ++x){
                    var py = Math.round( ( y / Math.pow(2, shift) / ( whm - 1 ) + shifty ) * ( wim - 1 ) );
                    var px = Math.round( ( x / Math.pow(2, shift + 1) / ( whm - 1 ) + shiftx ) * ( wim - 1 ) );

                    hmp[y*whm + x] = Math.round(heightCSV[py][px]);
                }
            }
            return new Cesium.HeightmapTerrainData({
                buffer:        hmp,
                width:         self._heightmapWidth,
                height:        self._heightmapWidth,
                structure:     self._terrainDataStructure,
                //childTileMask: maxLevel
                //childTileMask: new Uint8Array(result, result.byteLength, 1)[0]
                childTileMask: 15
            });

		});
    };
    
    // png画像から
    JapanGSITerrainProvider.prototype._makePngTileData = function(x, y, level, promise, shift, shiftx, shifty, maxLevel) {
        var self = this;
        return Cesium.when(promise, function(img) {
            var demDataWidth = self._demDataWidth;
            var heightmapWidth = self._heightmapWidth;
            if ( !self._canvas )
            {
                self._canvas = document.createElement('canvas'),
                self._ctx = self._canvas.getContext( '2d' );
                self._canvas.width = demDataWidth;
                self._canvas.height = demDataWidth;  
            }
            self._ctx.drawImage( img, 0, 0 );
            var data = self._ctx.getImageData( 0, 0, demDataWidth, demDataWidth ).data;
            var result= new Int16Array(heightmapWidth*heightmapWidth);
            for(var y = 0; y < heightmapWidth; ++y)
            {
                for(var x = 0; x < heightmapWidth; ++x){
                    var py = Math.round( ( y / Math.pow(2, shift) / ( heightmapWidth - 1 ) + shifty ) * ( demDataWidth - 1 ) );
                    var px = Math.round( ( x / Math.pow(2, shift + 1) / ( heightmapWidth - 1 ) + shiftx ) * ( demDataWidth - 1 ) );
                    
                    var idx = ((py*(demDataWidth*4)) + (px*4));
                    var r = data[ idx+0 ];
                    var g = data[ idx+1 ];
                    var b = data[ idx+2 ];
                    var h = 0;
                    
                    if ( r != 128 || g!=0 || b!= 0 )
                    {
                        var d = r * pow2_16 + g * pow2_8 + b;
                        h = ( d < pow2_23  ) ? d : d - pow2_24;
                        if ( h == -pow2_23 )h = 0;
                        else h *= 0.01;
                    }
                    
                    result[y*heightmapWidth + x] = Math.round(h);
                }
            }
            
            return new Cesium.HeightmapTerrainData({
                buffer:        result,
                width:         self._heightmapWidth,
                height:        self._heightmapWidth,
                structure:     self._terrainDataStructure,
                //childTileMask: maxLevel
                //childTileMask: new Uint8Array(result, result.byteLength, 1)[0]
                childTileMask: 15
            });
		});
    };
    
    JapanGSITerrainProvider.prototype.getLevelMaximumGeometricError = function(level) {
        //console.log("a: ", level );
        //console.log("b: ", this._levelZeroMaximumGeometricError);
        //console.log("c: ", 1 << level );
        //console.log("d: ", this._levelZeroMaximumGeometricError / (1 << level) );
        return this._levelZeroMaximumGeometricError / (1 << level);
    };
    JapanGSITerrainProvider.prototype.hasWaterMask = function() {
        return !true;
    };
    JapanGSITerrainProvider.prototype.getTileDataAvailable = function(x, y, level) {
        //return true;
        return undefined;
    };

    /*
    JapanGSITerrainProvider(JapanGSITerrainProvider.prototype, {
        errorEvent : { get : function() { return this._errorEvent; } },
        credit : { get : function() { return this._credit; } },
        tilingScheme : { get : function() { return this._tilingScheme; } },
        ready : { get : function() { return true; } }
    });
    */
    Cesium.defineProperties(JapanGSITerrainProvider.prototype, {
        errorEvent : {
            get : function() {
                return this._errorEvent;
            }
        },

        credit : {
            get : function() {
                if (!this._ready) {
                    throw new Cesium.DeveloperError('credit must not be called before the terrain provider is ready.');
                }
                
                return this._credit;
            }
        },

        tilingScheme : {
            get : function() {
                if (!this.ready) {
                    throw new Cesium.DeveloperError('requestTileGeometry must not be called before ready returns true.');
                }
                
                return this._tilingScheme;
            }
        },

        ready : {
            get : function() {
                return this._ready;
            }
        },
        
        readyPromise : {
            get : function() {
                return this._readyPromise;
            }
        },
        
        hasWaterMask : {
            get : function() {
                return false;
            }
        },
        
        hasVertexNormals : {
            get : function() {
                return false;
            }
        },
        
        requestVertexNormals : {
            get : function() {
                return false;
            }
        },
        
        requestWaterMask : {
            get : function() {
                return false;
            }
        },
        
        availability : {
            get : function() {
                return undefined;
            }
        }
    });
    Cesium.JapanGSITerrainProvider = JapanGSITerrainProvider;
})();




Cesium.Cartesian3.normalize = function(cartesian, result) {
	Cesium.Check.typeOf.object('cartesian', cartesian);
	Cesium.Check.typeOf.object('result', result);

	var magnitude = Cesium.Cartesian3.magnitude(cartesian);
	if ( magnitude == 0 ) magnitude = 1;

	result.x = cartesian.x / magnitude;
	result.y = cartesian.y / magnitude;
	result.z = cartesian.z / magnitude;

	if (isNaN(result.x) || isNaN(result.y) || isNaN(result.z)) {
		throw new DeveloperError('normalized result is not a number');
	}

	return result;
};

Cesium.HeightmapTerrainData.prototype.createMesh = function(tilingScheme, x, y, level, exaggeration) {
	if (!Cesium.defined(tilingScheme)) {
	    throw new Cesium.DeveloperError('tilingScheme is required.');
	}
	if (!Cesium.defined(x)) {
	    throw new Cesium.DeveloperError('x is required.');
	}
	if (!Cesium.defined(y)) {
	    throw new Cesium.DeveloperError('y is required.');
	}
	if (!Cesium.defined(level)) {
	    throw new Cesium.DeveloperError('level is required.');
	}

	var ellipsoid = tilingScheme.ellipsoid;
	var nativeRectangle = tilingScheme.tileXYToNativeRectangle(x, y, level);
	var rectangle = tilingScheme.tileXYToRectangle(x, y, level);
	exaggeration = Cesium.defaultValue(exaggeration, 1.0);

	// Compute the center of the tile for RTC rendering.
	var center = ellipsoid.cartographicToCartesian(Cesium.Rectangle.center(rectangle));

	var structure = this._structure;

	var levelZeroMaxError = Cesium.TerrainProvider.getEstimatedLevelZeroGeometricErrorForAHeightmap(ellipsoid, this._width, tilingScheme.getNumberOfXTilesAtLevel(0));
	var thisLevelMaxError = levelZeroMaxError / (1 << level);
	this._skirtHeight = Math.min(thisLevelMaxError * 4.0, 1000.0);

	if ( !Cesium.HeightmapTerrainData.___taskProcessor ) Cesium.HeightmapTerrainData.___taskProcessor = new Cesium.TaskProcessor('GSI_createVerticesFromHeightmap'); // okw

	var verticesPromise = Cesium.HeightmapTerrainData.___taskProcessor.scheduleTask({
	    heightmap : this._buffer,
	    structure : structure,
	    includeWebMercatorT : true,
	    width : this._width,
	    height : this._height,
	    nativeRectangle : nativeRectangle,
	    rectangle : rectangle,
	    relativeToCenter : center,
	    ellipsoid : ellipsoid,
	    skirtHeight : this._skirtHeight,
	    isGeographic : tilingScheme instanceof Cesium.GeographicTilingScheme,
	    exaggeration : exaggeration
	});


	if (!Cesium.defined(verticesPromise)) {
	    // Postponed
	    return undefined;
	}


	var that = this;
	return Cesium.when(verticesPromise, function(result) {

	    that._mesh = new Cesium.TerrainMesh(
	            center,
	            new Float32Array(result.vertices),
	            Cesium.TerrainProvider.getRegularGridIndices(result.gridWidth, result.gridHeight),
	            result.minimumHeight,
	            result.maximumHeight,
	            result.boundingSphere3D,
	            result.occludeePointInScaledSpace,
	            result.numberOfAttributes,
	            result.orientedBoundingBox,
	            Cesium.TerrainEncoding.clone(result.encoding),
	            exaggeration);

	    // Free memory received from server after mesh is created.
	    that._buffer = undefined;
	    return that._mesh;
	});
};