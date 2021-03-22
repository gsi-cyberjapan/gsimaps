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
    
    var VECTORTILE_DATA_LOADING = 1;
    var VECTORTILE_DATA_LOADED  = 2;
    var VECTORTILE_DATA_ERROR   = 3;
    
    /**/

    "use strict";

    //var defaultCredit =new Credit('国土地理院');
    var defaultCredit =new Credit('');

    var JapanGSIVectorTileProvider = function JapanGSIVectorTileProvider(options) {
        options = defaultValue(options, {});
        this.options = options;
        //console.log( options );
		/*
        var url = defaultValue(options.url, 'http://a.tile.openstreetmap.org/');

        if (!trailingSlashRegex.test(url)) {
            url = url + '/';
        }
		*/
        this._viewer = options.viewer;
        this._url = options.url;
        //this._fileExtension = defaultValue(options.fileExtension, 'png');
        this._proxy = options.proxy;
        this._tileDiscardPolicy = options.tileDiscardPolicy;

        this._tilingScheme = new WebMercatorTilingScheme();

        this._tileWidth = 256;
        this._tileHeight = 256;
		this._geojsonOptions = options.geojsonOptions;
		this._drawPoint = options.drawPoint;
        //var parsedLayers = parseLayers(options.layerLists);
        //this._layerLists = parsedLayers[0];

        //this._minimumLevel = defaultValue(options.minimumLevel, parsedLayers[1]);
        //this._maximumLevel = defaultValue(options.maximumLevel, parsedLayers[2]);
		this._minZoom = options.minZoom;
		this._maximumLevel = options.maxZoom;
		this._maxNativeZoom = options.maxNativeZoom;
		//this._minimumTerrainLevel = options.minZoom;
		this._maximumTerrainLevel = options.maxZoom;
		
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
        var url = imageryProvider._url;
        url = url.replace( "{x}", x ).replace( "{y}", y ).replace( "{z}", level )
        var proxy = imageryProvider._proxy;
        if (defined(proxy)) {
            url = proxy.getURL(url);
        }
		
        return url;
    }

    defineProperties(JapanGSIVectorTileProvider.prototype, {
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
		
		_maximumTerrainLevel : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('_maximumTerrainLevel must not be called before the imagery provider is ready.');
                }

                return this.__maximumTerrainLevel;
            }
        },
		
		inimumTerrainLevel : {
            get : function() {
                if (!this._ready) {
                    throw new DeveloperError('minimumTerrainLevel must not be called before the imagery provider is ready.');
                }

                return this._minimumTerrainLevel;
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

    JapanGSIVectorTileProvider.prototype.getTileCredits = function(x, y, level) {
        return undefined;
    };
	JapanGSIVectorTileProvider.prototype._makeErrorImage = function( x, y, z ) {
		var that = this;
		return Cesium.when({x:x,y:y,z:z}, function(info) {
			var deferred = Cesium.when.defer();
			var canvas = document.createElement("canvas")
			canvas.width = 256;
			canvas.height = 256;
			//deferred.reject();
			
			/*
			var ctx = canvas.getContext('2d');
			ctx.fillStyle="#ff0000";
			
			ctx.fillRect( 0,0,255,255 );
			ctx.fillStyle="#000000";
			ctx.fillText(z+"",32,32);
			*/
			deferred.resolve(canvas);
			
			return deferred.promise;
		});
	};
	JapanGSIVectorTileProvider.prototype.requestImage = function(x, y, level) {
		if (!this._ready) {
			throw new DeveloperError('requestImage must not be called before the imagery provider is ready.');
		}
		
		if ( !this._cache ) this._cache = {};
		
		 var key = x + ":" + y + ":" + level;
		
		if ( this._maxNativeZoom && this._maxNativeZoom < level )
		{
			this.requestNativeZoomLoad(x, y, level);
			if ( this._cache[key] && this._cache[key].state == VECTORTILE_DATA_ERROR )
				return this._makeErrorImage( x, y, level );
			else if ( this._cache[key] && this._cache[key].state == VECTORTILE_DATA_LOADED )
			{
				var tileInfo =this._cache[key];
				
				var canvas = document.createElement("canvas");
				canvas.width = tileInfo.tileWidth;
				canvas.height = tileInfo.tileHeight;
				_drawGeoJSON( tileInfo.geoJSON, tileInfo, canvas );
				return canvas;
			}
		}
		
		
		if ( this._cache[key] )
		{
			if ( this._cache[key].state == VECTORTILE_DATA_LOADING )
				return;
			
			if ( this._cache[key].state == VECTORTILE_DATA_ERROR )
				return this._makeErrorImage( x, y, level );
				
			if ( this._cache[key].state == VECTORTILE_DATA_LOADED )
			{
				var tileInfo =this._cache[key];
				
				var canvas = document.createElement("canvas");
				canvas.width = tileInfo.tileWidth;
				canvas.height = tileInfo.tileHeight;
				_drawGeoJSON( tileInfo.geoJSON, tileInfo, canvas );
				return canvas;
			}
			
		}
		
		var tileInfo = {
			key : key,
			url: buildImageUrl(this, x, y, level),
			x : x,
			y : y,
			z : level,
			tileWidth : this.tileWidth,
			tileHeight : this.tileHeight,
			geojsonOptions : this._geojsonOptions,
			drawPoint : this._drawPoint,
			obj : this
		};
		this._cache[key] = tileInfo;
		
		
		var loadGeoJSON = function(info)
		{
			return Cesium.when(info, function(info) {
				
				var deferred = Cesium.when.defer();
				loadGeoJSON.createImage(info, deferred);

				return deferred.promise;
			});
		};
		
		
		loadGeoJSON.createImage = function(tileInfo, deferred) {
			
			var canvas = document.createElement("canvas");
			canvas.width = tileInfo.tileWidth;
			canvas.height = tileInfo.tileHeight;
			
			tileInfo.obj._cache[tileInfo.key].state = VECTORTILE_DATA_LOADING;
			var ajax = $.ajax({
				type: "GET",
				url: tileInfo.url,
				async: true,
				dataType:"json",
				crossDomain:true,
				success: function(res){
					
					this._tileInfo.obj._cache[this._tileInfo.key].state= VECTORTILE_DATA_LOADED;
					this._tileInfo.obj._cache[this._tileInfo.key].geoJSON= res;
					
					_drawGeoJSON( res, this._tileInfo, this._canvas );
					
					this._deferred.resolve(this._canvas);
				},
				error: function(res){
					
					this._tileInfo.obj._cache[this._tileInfo.key].state= VECTORTILE_DATA_ERROR;
					this._deferred.resolve(document.createElement("canvas"));
					//this._deferred.reject();
				},
				_canvas : canvas,
				_tileInfo : tileInfo,
				_deferred : deferred
			} );
		};
		return loadGeoJSON(tileInfo);
    };
	JapanGSIVectorTileProvider.prototype._clipGeometry = function( geoJSON, tileBounds) {
		
		if ( !geoJSON || !geoJSON.features ) return;
		var result = {
			features : [],
			"type" : "FeatureCollection"
		};
		
		var tilePolygon = [
			[ tileBounds.lt.lng, tileBounds.lt.lat ], 
			[ tileBounds.rb.lng, tileBounds.lt.lat ],
			[ tileBounds.rb.lng, tileBounds.rb.lat ],
			[ tileBounds.lt.lng, tileBounds.rb.lat ]
		];
		
		
		//console.log( geoJSON.features );
		for( var i=0; i< geoJSON.features.length; i++ )
		{
			var feature = geoJSON.features[i];
			
			if ( feature.geometry.type == "LineString" )
			{
				var coordinates = [];
				
				if ( feature.geometry.coordinates.length >= 2 )
				{
					var prevPointOrig = feature.geometry.coordinates[0];
					var prevPoint = { x: prevPointOrig[0] , y: prevPointOrig[1] };
					var pointAdded = false;
					for( var j=1; j<feature.geometry.coordinates.length; j++ )
					{
						var pointOrig = feature.geometry.coordinates[j];
						var point = { x: pointOrig[0] , y: pointOrig[1] };
						if ( 
							
							intersectLine( prevPoint,point, { x: tileBounds.lt.lng, y : tileBounds.lt.lat } , { x: tileBounds.rb.lng, y : tileBounds.lt.lat } ) ||
							intersectLine( prevPoint,point, { x: tileBounds.rb.lng, y : tileBounds.lt.lat } , { x: tileBounds.rb.lng, y : tileBounds.rb.lat } ) ||
							intersectLine( prevPoint,point, { x: tileBounds.rb.lng, y : tileBounds.rb.lat } , { x: tileBounds.lt.lng, y : tileBounds.rb.lat } ) ||
							intersectLine( prevPoint,point, { x: tileBounds.lt.lng, y : tileBounds.rb.lat } , { x: tileBounds.lt.lng, y : tileBounds.lt.lat } ) ||
							pointInRectangle( prevPointOrig, tilePolygon ) ||
							pointInRectangle( pointOrig, tilePolygon )
						)
						{
							if ( !pointAdded ) coordinates.push( prevPointOrig );
							coordinates.push(pointOrig);
							pointAdded = true;;
						}
						else
						{
							pointAdded = false;
						}
						
						
						prevPointOrig = pointOrig;
						prevPoint = point;
					}
				}
				if ( coordinates.length > 0 )
				{
					result.features.push( {
						geometry : {
							"type" : "LineString",
							coordinates : coordinates
						},
						properties : feature.properties
					} );
				}
				//if ( coordinates.length > 0 ) console.log( coordinates );
			}
			else if ( feature.geometry.type == "Polygon" )
			{
				var polygonToRect = function( poly )
				{
					var minX = null;
					var minY = null;
					var maxX = null;
					var maxY = null;
					var result = [];
					for( var i=0; i<poly.length; i++ )
					{
						if ( minX == null || poly[i][0] < minX ) minX =poly[i][0];
						if ( minY == null || poly[i][1] < minY ) minY =poly[i][1];
						if ( maxX == null || poly[i][0] > maxX ) maxX =poly[i][0];
						if ( maxY == null || poly[i][1] > maxY ) maxY =poly[i][1];
						
					}
					
					
					return [
						[minX,minY],
						[maxX,minY],
						[maxX,maxY],
						[minX,maxY]
					];
				};
				
				var isRectOverlapped = function(rect1, rect2)
				{
					var r1 = {left:null, top:null, right:null, bottom:null};
					var r2 = {left:null, top:null, right:null, bottom:null};
					for( var i=0; i<4; i++ )
					{
						if ( r1.left == null || r1.left>rect1[i][0] ) r1.left = rect1[i][0];
						if ( r1.top == null || r1.top>rect1[i][1] ) r1.top = rect1[i][1];
						if ( r1.right == null || r1.right<rect1[i][0] ) r1.right = rect1[i][0];
						if ( r1.bottom == null || r1.bottom<rect1[i][1] ) r1.bottom = rect1[i][1];
					}
					for( var i=0; i<4; i++ )
					{
						if ( r2.left == null || r2.left>rect2[i][0] ) r2.left = rect2[i][0];
						if ( r2.top == null || r2.top>rect2[i][1] ) r2.top = rect2[i][1];
						if ( r2.right == null || r2.right<rect2[i][0] ) r2.right = rect2[i][0];
						if ( r2.bottom == null || r2.bottom<rect2[i][1] ) r2.bottom = rect2[i][1];
					}
					
					var left = Math.max(r1.left, r2.left);
					var right = Math.min(r1.right, r2.right);
					var top = Math.max(r1.top, r2.top);
					var bottom = Math.min(r1.bottom, r2.bottom);
					return (left < right && top < bottom);
				};
				
				
				if ( feature.geometry.coordinates.length > 0 )
				{
					var polyRect = polygonToRect(feature.geometry.coordinates[0]);
					if ( 
						isRectOverlapped( tilePolygon, polyRect ) 
					)
					{
						result.features.push( {
							geometry : {
								"type" : "Polygon",
								coordinates : feature.geometry.coordinates
							},
							properties : feature.properties
						} );
					}
				}
			}
			else if ( false ) //feature.geometry.type == "Point" )
			{
				if (this._geojsonOptions )
				{
					try
					{
						var layer= this._geojsonOptions.pointToLayer( feature, 
							{
								lat :feature.geometry.coordinates[1],
								lng :feature.geometry.coordinates[0]
							}
						);
						
						if ( layer instanceof L.Rectangle )
						{
							result.features.push( {
								geometry : {
										"type" : "Polygon",
										coordinates : layer._latlngs
									},
									properties : feature.properties
							} );
						}
						else if ( layer._layers )
						{
							for( var k=0; k<layer._layers.length; k++ )
							{
								
								if ( layer._layers[k] instanceof L.Rectangle )
								{
									var layer2 = layer._layers[k];
									var coordinates = [];
									console.log( layer2._bounds._latlngs[0], layer2._bounds._latlngs[1] );
									coordinates.push( [layer2._bounds._latlngs[0][1], layer2._bounds._latlngs[0][0]] );
									coordinates.push( [layer2._bounds._latlngs[1][1], layer2._bounds._latlngs[0][0]] );
									coordinates.push( [layer2._bounds._latlngs[1][1], layer2._bounds._latlngs[1][0]] );
									coordinates.push( [layer2._bounds._latlngs[0][1], layer2._bounds._latlngs[1][0]] );
									coordinates.push( [layer2._bounds._latlngs[0][1], layer2._bounds._latlngs[0][0]] );
									console.log( coordinates );
									result.features.push( {
										geometry : {
												"type" : "Polygon",
												coordinates : [coordinates]
											},
											properties : feature.properties
									} );
								}
							}
						}
					}
					catch(e){
						console.log(e);
					}
				}
			}
			
		}
		return ( result.features.length > 0 ? result : null );
	};
	
	
	JapanGSIVectorTileProvider.prototype._nativeZoomTile2CacheTile = function(from, to) {
	
		
		var geoJSON = this._cache[from.x + ":" + from.y + ":" + from.z].geoJSON;
		
		var toTileBounds = {
			lt : {
				lat : _tile2Lat( to.y, to.z ),
				lng : _tile2Lng( to.x, to.z )
			},
			rb : {
				lat : _tile2Lat( to.y + 1, to.z ),
				lng : _tile2Lng( to.x + 1, to.z )
			}
		};
		
		
		for( var z = from.z+1; z <= to.z; z++ )
		{
			
			
			var _tile =_latLng2Tile( 
				toTileBounds.rb.lat + ( ( toTileBounds.lt.lat - toTileBounds.rb.lat ) / 2 ), 
				toTileBounds.lt.lng + ( ( toTileBounds.rb.lng - toTileBounds.lt.lng ) / 2 ), 
				z );
				
			
			var key = _tile.x + ":" + _tile.y + ":" + z;
			
			
			if ( !geoJSON )
			{
				this._cache[key] = {
					key : key,
					url: buildImageUrl(this, _tile.x, _tile.y, z),
					x : _tile.x,
					y : _tile.y,
					z : z,
					tileWidth : this.tileWidth,
					tileHeight : this.tileHeight,
					geojsonOptions : this._geojsonOptions,
					drawPoint : this._drawPoint,
					obj : this,
					state : VECTORTILE_DATA_ERROR
				};
				continue;;
			}
			
			
			if (  this._cache[key] &&  this._cache[key].geoJSON )
				geoJSON = this._cache[key].geoJSON;
			
			else
			{
				var tileBounds = {
					lt : {
						lat : _tile2Lat( _tile.y, z ),
						lng : _tile2Lng( _tile.x, z )
					},
					rb : {
						lat : _tile2Lat( _tile.y + 1, z ),
						lng : _tile2Lng( _tile.x + 1, z )
					}
				};
				
				
				geoJSON = this._clipGeometry( geoJSON, tileBounds );
				
				
				if ( geoJSON )
				{
					this._cache[key] = {
						key : key,
						url: buildImageUrl(this, _tile.x, _tile.y, z),
						x : _tile.x,
						y : _tile.y,
						z : z,
						tileWidth : this.tileWidth,
						tileHeight : this.tileHeight,
						geojsonOptions : this._geojsonOptions,
						drawPoint : this._drawPoint,
						obj : this,
						state : VECTORTILE_DATA_LOADED,
						geoJSON : geoJSON
					};
				}
				else
				{
					this._cache[key] = {
						key : key,
						url: buildImageUrl(this, _tile.x, _tile.y, z),
						x : _tile.x,
						y : _tile.y,
						z : z,
						tileWidth : this.tileWidth,
						tileHeight : this.tileHeight,
						geojsonOptions : this._geojsonOptions,
						drawPoint : this._drawPoint,
						obj : this,
						state : VECTORTILE_DATA_ERROR
					};
				}
				
			}
			
		}
	};
	
	JapanGSIVectorTileProvider.prototype.pick = function( info ) {
		
		//console.log( this.info );
		if ( !this._cache ) return;
		var tile = _latLng2Tile(info.lat, info.lng , info.level  );
		var faeature = null;
		
		
		faeature = this._pick( info, tile, tile.x + ":" + tile.y + ":" + tile.z );
		if ( faeature ) return faeature;
		
		/*
		faeature = this._pick( info, tile, (tile.x-1 ) + ":" + (tile.y-1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x-1 ) + ":" + tile.y + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x-1 ) + ":" + (tile.y + 1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x ) + ":" + (tile.y -1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x ) + ":" + (tile.y + 1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x+1 ) + ":" + (tile.y-1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x+1 ) + ":" + tile.y  +":" + tile.z );
		if ( faeature ) return faeature;
		
		
		faeature = this._pick( info, tile, (tile.x+1 ) + ":" + (tile.y + 1 ) + ":" + tile.z );
		if ( faeature ) return faeature;
		
		*/
		return null;
	},
	
	JapanGSIVectorTileProvider.prototype._pick = function( info, tile, key ) {
		
		var cache = this._cache[key ];
		if ( !cache ) return null;
		if ( !cache || !cache.geoJSON || !cache.geoJSON.features) return null;
		
		
		
		var tileBounds = {
			lt : {
				lat : _tile2Lat( cache.y, cache.z ),
				lng : _tile2Lng( cache.x, cache.z )
			},
			rb : {
				lat : _tile2Lat( cache.y + 1, cache.z ),
				lng : _tile2Lng( cache.x + 1, cache.z )
			}
		};
		
		var pos = tileBoundsToPos( tileBounds, info, cache.tileWidth, cache.tileHeight );
		
		var nearDist = null;
		var result = null;
		for( var i =cache.geoJSON.features.length-1; i>=0; i-- )
		{
			var feature = cache.geoJSON.features[i];
			
			switch( feature.geometry.type )
			{
			case "Polygon":_containsPolygon
				if (  _containsPolygon( feature, info, pos ) ) return feature;
				break;
			case "LineString":
				var dist = _containsPolyline( feature, info, pos );
				if ( (dist!=null) && (  nearDist == null || nearDist > dist ) )
				{
					result = feature;
					nearDist = dist;
					return feature;
				}
				break;
			default:
			}
		}
		
		return result;
		
		
	};
	
	function _sqClosestPointOnSegment (p, p1, p2, sqDist) {
		var x = p1.x,
		    y = p1.y,
		    dx = p2.x - x,
		    dy = p2.y - y,
		    dot = dx * dx + dy * dy,
		    t;

		if (dot > 0) {
			t = ((p.x - x) * dx + (p.y - y) * dy) / dot;

			if (t > 1) {
				x = p2.x;
				y = p2.y;
			} else if (t > 0) {
				x += dx * t;
				y += dy * t;
			}
		}

		dx = p.x - x;
		dy = p.y - y;

		return sqDist ? dx * dx + dy * dy : new { x:x, y:y};
	};
	
	function _pointToSegmentDistance(/*Point*/ p, /*Point*/ p1, /*Point*/ p2) {
		return Math.sqrt(_sqClosestPointOnSegment(p, p1, p2, true));
	}
	
	function _containsPolyline( feature, latLng, pos )
	{
		var w =  ( feature._style && feature._style.weight ? feature._style.weight / 2 : 12 );
		
		if (!feature._parts ) return false;
			/*
		if (L.Browser.touch) {
			w += 10; // polyline click tolerance on touch devices
		}
		*/
		var nearestDistance = null;
		var part = feature._parts;
		for (var j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
			if (j === 0) {
				continue;
			}

			var dist = _pointToSegmentDistance(pos, part[k], part[j]);
			if ( nearestDistance == null || nearestDistance > dist )
				nearestDistance = dist;
			
		//console.log( dist, pos, part[k], part[j] );
			//if ( dist <=  w ) return true;
		}
		if (nearestDistance != null && nearestDistance <= w)
			return nearestDistance;
		else
			return null;
	};
	
	
	
	function _containsPolygon( feature, latLng, pos )
	{
		var w =  ( feature._style && feature._style.weight ? feature._style.weight / 2 : 12 );
		
		if (!feature._parts ) return false;
		/*
		if (L.Browser.touch) {
			w += 10; // polyline click tolerance on touch devices
		}
		*/
		
		var nearestDistance = _containsPolyline( feature, latLng, pos );
		if ( nearestDistance != null )
			return true;
			
			
			
		var part = feature._parts;
		var inside = false;
		for (var j = 0, len2 = part.length, k = len2 - 1; j < len2; k = j++) {
			p1 = part[j];
			p2 = part[k];

			if (((p1.y > pos.y) !== (p2.y > pos.y)) &&
					(pos.x < (p2.x - p1.x) * (pos.y - p1.y) / (p2.y - p1.y) + p1.x)) {
				inside = !inside;
			}
		}
		
		return inside;
		
		
		
	};
	
	
	
    JapanGSIVectorTileProvider.prototype.requestNativeZoomLoad = function(x, y, level) {
		
		var tileBounds = {
			lt : {
				lat : _tile2Lat( y, level ),
				lng : _tile2Lng( x, level )
			},
			rb : {
				lat : _tile2Lat( y + 1, level ),
				lng : _tile2Lng( x + 1, level )
			}
		};
			
		var _tile =_latLng2Tile( 
			tileBounds.rb.lat + ( ( tileBounds.lt.lat - tileBounds.rb.lat ) / 2 ), 
			tileBounds.lt.lng + ( ( tileBounds.rb.lng - tileBounds.lt.lng ) / 2 ), 
			this.options.maxNativeZoom );
		var key = _tile.x + ":" + _tile.y + ":" + _tile.z;
		if ( this._cache[key] )
		{
			if ( this._cache[key ].state == VECTORTILE_DATA_LOADING ) return;
			else if ( this._cache[key ].state == VECTORTILE_DATA_ERROR )
			{
				this._cache[ x + ":" + y + ":" + level ] = {
					state : VECTORTILE_DATA_ERROR
				};
				return;
			}
			
			if ( this._cache[key ].state == VECTORTILE_DATA_LOADED )
				this._nativeZoomTile2CacheTile(_tile, { x:x, y:y, z:level});
			return;
			
		}
		else
		{
			
			var tileInfo = {
				key : key,
				url: buildImageUrl(this, _tile.x, _tile.y, _tile.z),
				x : _tile.x,
				y : _tile.y,
				z : _tile.z,
				tileWidth : this.tileWidth,
				tileHeight : this.tileHeight,
				geojsonOptions : this._geojsonOptions,
				drawPoint : this._drawPoint,
				obj : this,
				state : VECTORTILE_DATA_LOADING
			};
			this._cache[key] = tileInfo;
			var ajax = $.ajax({
				type: "GET",
				url: tileInfo.url,
				async: true,
				dataType:"json",
				crossDomain:true,
				success: function(res){
					this._tileInfo.obj._cache[this._tileInfo.key].state= VECTORTILE_DATA_LOADED;
					this._tileInfo.obj._cache[this._tileInfo.key].geoJSON= res;
				},
				error: function(res){
					this._tileInfo.obj._cache[this._tileInfo.key].state= VECTORTILE_DATA_ERROR;
				},
				_tileInfo : tileInfo
			} );
		}
	};
    
	function _drawGeoJSON( geoJSON, info, canvas )
	{
		//var key = info.x + ":" + info.y + ":" + info.z;
		//info.obj._cache[ key ] = geoJSON;
					
		var ctx = canvas.getContext('2d');
		var tileBounds = {
			lt : {
				lat : _tile2Lat( info.y, info.z ),
				lng : _tile2Lng( info.x, info.z )
			},
			rb : {
				lat : _tile2Lat( info.y + 1, info.z ),
				lng : _tile2Lng( info.x + 1, info.z )
			}
		};
		
		for( var i=0; i<geoJSON.features.length; i++ )
		{
			var feature = geoJSON.features[i];
			switch( feature.geometry.type )
			{
			case "Point":
			
				if ( info.drawPoint )
					info.drawPoint( feature, info, tileBounds );
				break;
			case "Polygon":
				_drawPolygon( feature, info, tileBounds, canvas );
				break;
			case "LineString":
				_drawLineString( feature, info, tileBounds, canvas );
				break;
			default:
			}
			
		}
		
	};
	
	
	function _drawLineString( feature, info, tileBounds, canvas )
	{
		var lineParts = [];
		var geometry = feature.geometry;
		var coordinates = geometry.coordinates;
		
		var ctx = canvas.getContext('2d');
		ctx.beginPath();
		
		var style = {
			weight : 5,
			opacity : 0.5,
			color: '#0033ff'
		};
		
		for( var key in feature.properties )
		{
			if ( key.charAt(0) == "_" )
			{
				style[key.substr(1)] = feature.properties[key];
			}
		}
		
		
		if (info.geojsonOptions )
		{
			try
			{
				style= info.geojsonOptions.style( feature );
			}
			catch(e){}
		}
		
		feature._style= style;
		
		if ( style.dashArray )
		{
			var parts = style.dashArray.split( ',' );
			style.dashArray = [];
			for( var i=0; i<parts.length; i++ )
			{
				style.dashArray.push(parseInt( parts[i] ));
			}
			if ( style.dashArray.length < 2 ) style.dashArray = null;
		}
		var prevPos = null;
		
		for( var i=0; i<coordinates.length; i++ )
		{
			var latLng = {
				lng : coordinates[i][0],
				lat : coordinates[i][1]
			};
			var pos = tileBoundsToPos( tileBounds, latLng, info.tileWidth, info.tileHeight );
			
			lineParts.push( pos );
			if ( i== 0 ) ctx.moveTo(pos.x, pos.y);
			else {
				if ( style.dashArray )
					_dotLineTo( ctx, prevPos.x, prevPos.y, pos.x, pos.y, style.dashArray);
				else
				{
					//console.log( "lineTo", pos.x, pos.y );
					ctx.lineTo(pos.x, pos.y);
				}
			}
			prevPos = pos;
		}
		ctx.save();
		if ( style.weight )
			ctx.lineWidth = style.weight;
		if ( style.color )
			ctx.strokeStyle = style.color;
		if ( style.opacity || style.opacity == 0.0 )
			ctx.globalAlpha = style.opacity;
		else
			ctx.globalAlpha = 1;
			
		ctx.stroke();
		ctx.restore();
		
		
		feature._parts = lineParts;
		
	};
	
	function _dotLineTo(ctx, p1x, p1y, p2x, p2y, dashArray)
	{
		if ( ctx.setLineDash !== undefined )
		{
			ctx.setLineDash(dashArray);
			ctx.lineTo( p2x, p2y );
		}
		else if ( ctx.mozDash !== undefined )
		{
			ctx.mozDash = dashArray;
			ctx.lineTo( p2x, p2y );
		}
		else
		{
			var d = Math.sqrt(Math.pow(p2x - p1x, 2) + Math.pow(p2y - p1y, 2));
			var rad = Math.atan2(p2y - p1y, p2x - p1x);
			var space = ( dashArray && dashArray.length>= 2 && dashArray[0]>0 ? dashArray[0] : 5 );
			var dotted = Math.round(d / space / 2);
			for (var i = 0; i < dotted; i++) {
				var p3x = Math.cos(rad) * space * (i * 2) + p1x;
				var p3y = Math.sin(rad) * space * (i * 2) + p1y;
				var p4x = Math.cos(rad) * space * (i * 2 + 1) + p1x;
				var p4y = Math.sin(rad) * space * (i * 2 + 1) + p1y;

				ctx.moveTo(p3x, p3y);
				ctx.lineTo(p4x, p4y);
				
			}
		}
	}
	
	function _drawPolygon( feature, info, tileBounds, canvas )
	{
		var lineParts = [];
		var geometry = feature.geometry;
		var coordinates = geometry.coordinates;
		
		var ctx = canvas.getContext('2d');
		
		var style ={ 
			stroke : true,
			weight : 5,
			opacity : 0.5,
			color: '#0033ff',
			fill : true,
			fillColor: '#0033ff',
			fillOpacity : 0.2
		};
		
		for( var key in feature.properties )
		{
			if ( key.charAt(0) == "_" )
			{
				style[key.substr(1)] = feature.properties[key];
			}
		}
		
		
		
		if (info.geojsonOptions )
		{
			try
			{
				var style2 = info.geojsonOptions.style( feature );
				style = $.extend( style, style2 );
			}
			catch(e){}
		}
		feature._style= style;
		if ( style.dashArray )
		{
			var parts = style.dashArray.split( ',' );
			style.dashArray = [];
			for( var i=0; i<parts.length; i++ )
			{
				style.dashArray.push(parseInt( parts[i] ));
			}
			if ( style.dashArray.length < 2 ) style.dashArray = null;
		}
		for( var i=0; i<coordinates.length; i++ )
		{
			
			ctx.beginPath();
			var prevPos = null;
			for( var j=0; j<coordinates[i].length; j++ )
			{
				
				var latLng = {
					lng : coordinates[i][j][0],
					lat : coordinates[i][j][1]
				};
				var pos = tileBoundsToPos( tileBounds, latLng, info.tileWidth, info.tileHeight );
				
				lineParts.push( pos );
				if ( j== 0 ) ctx.moveTo(pos.x, pos.y);
				else ctx.lineTo(pos.x, pos.y);
				
				prevPos = pos;
			}
		
			ctx.closePath();
			ctx.save();
			
			if ( style.stroke )
			{
				if ( style.dashArray )
				{
					if ( ctx.setLineDash !== undefined )
					{
						ctx.setLineDash(style.dashArray);
					}
					else if ( ctx.mozDash !== undefined )
					{
						ctx.mozDash = style.dashArray;
					}
				}
				
				if ( style.weight )
					ctx.lineWidth = style.weight;
				if ( style.color )
					ctx.strokeStyle = style.color;
				if ( style.opacity || style.opacity == 0.0 )
					ctx.globalAlpha = style.opacity;
				else
					ctx.globalAlpha = 1;
				
				
				ctx.stroke();
			}
			
			if ( style.fill )
			{
				
			
				if ( style.fillColor )
					ctx.fillStyle = style.fillColor;
				if ( style.fillOpacity || style.fillOpacity == 0.0 )
					ctx.globalAlpha = style.fillOpacity;
				else
					ctx.globalAlpha = 1;
				ctx.fill();
			}
			
			
			ctx.restore();
		
		}
		feature._parts = lineParts;
	};
	function pointInRectangle(point, rect) {
		
		var minX = null;
		var minY = null;
		var maxX = null;
		var maxY = null;
		
		for( var i=0; i<4; i++ )
		{
			if ( minX == null || rect[i][0] <minX ) minX = rect[i][0];
			if ( minY == null || rect[i][1] <minY ) minY = rect[i][1];
			if ( maxX == null || rect[i][0] >maxX ) maxX = rect[i][0];
			if ( maxY == null || rect[i][1] >maxY ) maxY = rect[i][1];
		}
		
		return ( point[0] > minX && point[0] < maxX && point[1] > minY && point[1] < maxY );
		
		
	};
	
	function pointInPolygon(point, poly) {
		var  sign = function(a, b) {
			return (a > b) ? 1 : (a < b) ? -1 : 0;
		};
		var windingNumber=0,x=point[0],y=point[1];
		for (var i=poly.length-1,j=0,yi,yj,counterClockwise; i>=0; j=i--) {
			yi=poly[i][1]-y; yj=poly[j][1]-y;
			if ((yi>0)!=(yj>0)
				&& (counterClockwise=sign(yj,yi))
			    ==sign(yj*(poly[i][0]-x),yi*(poly[j][0]-x)))
				windingNumber+=counterClockwise;
		}
		return windingNumber%2==1; // ray casting algorithm
		//  return windingNumber!==0;  // winding number algorithm
	}
	
	function intersectLine (p1, p2,p3, p4) {
		return(
			(
				((p2.x-p1.x)*(p3.y-p1.y)-(p2.y-p1.y)*(p3.x-p1.x))*((p2.x-p1.x)*(p4.y-p1.y)-(p2.y-p1.y)*(p4.x-p1.x)) < 0
			)
			&&
			(
				((p4.x-p3.x)*(p1.y-p3.y)-(p4.y-p3.y)*(p1.x-p3.x))*((p4.x-p3.x)*(p2.y-p3.y)-(p4.y-p3.y)*(p2.x-p3.x)) < 0 
			)
		);
	};
	

	function tileBoundsToPos(tileBounds, latLng, w, h)
	{
		return {
			x : w * ( (latLng.lng - tileBounds.lt.lng ) / (tileBounds.rb.lng - tileBounds.lt.lng ) ),
			y : h - ( h * ( (latLng.lat - tileBounds.rb.lat ) / (tileBounds.lt.lat - tileBounds.rb.lat ) ) )
			
		};
	};
	function _tile2Lng(x, z){return (x/Math.pow(2,z)*360-180); };
	function _tile2Lat(y, z){ var n=Math.PI-2*Math.PI*y/Math.pow(2,z); return (180/Math.PI*Math.atan(0.5*(Math.exp(n)-Math.exp(-n)))); };
	function _latLng2Tile( lat, lng, z )
	{
		var R = 128 / Math.PI; 
		var lng_rad = lng * Math.PI / 180; 
		var worldCoordX =   R * (lng_rad + Math.PI); 
		var pixelCoordX = worldCoordX * Math.pow(2, z);
		var tileCoordX = Math.floor( pixelCoordX / 256);
		
		var lat_rad = lat * Math.PI / 180; 
		var worldCoordY = - R / 2 * Math.log( (1 + Math.sin(lat_rad)) / (1 - Math.sin(lat_rad)) ) + 128; 
		var pixelCoordY = worldCoordY * Math.pow(2, z); 
		var tileCoordY = Math.floor( pixelCoordY / 256); 
		return {
			x : tileCoordX,pxX:Math.floor( pixelCoordX - tileCoordX * 256),
			y : tileCoordY,pxY:Math.floor( pixelCoordY - tileCoordY * 256),
			z : z
		};
	};

    JapanGSIVectorTileProvider.prototype.pickFeatures = function() {
        return undefined;
    };

    Cesium.JapanGSIVectorTileProvider = JapanGSIVectorTileProvider;
    
    
    
})();






