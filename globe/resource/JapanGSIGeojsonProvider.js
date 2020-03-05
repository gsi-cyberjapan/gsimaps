var JapanGSIGeojsonProvider = function(options){
    this._quadtree = undefined;

    this._url = (options.url)? options.url : undefined;  // タイルのURL


    this._viewer   = options.viewer;  // viewerのインスタンス

    this._cacheTiles = {};  // タイルをキャッシュする

    this._showTiles =  [];  // 表示するタイルのキーを格納する

    //this._tilingScheme = new Cesium.GeographicTilingScheme();
    this._tilingScheme   = new Cesium.WebMercatorTilingScheme();

    this._errorEvent = new Cesium.Event();

    this._levelZeroMaximumError = Cesium.QuadtreeTileProvider.computeDefaultLevelZeroMaximumGeometricError(this._tilingScheme);

	this._range = {	// データ要求範囲を設定
		_north: 46.179830,	//lat
		_south: 19.756364,	//lat
		_east: 154.819336,	//lon
		_west: 122.343750,	//lon
		tiles: []	// tiles[z].north, tiles[z].south, tiles[z].east, tiles[z].west
	};
	
	this._maxLevel = 15;

	this._currentLevel = 0;

	this._show = true;
	
	this.show = function(bool){
		this._show = bool;
	};
	
	this._stylejs = undefined;
	
	var that = this;
	(function(url){
		var styleurl = url.replace(/\{z\}\/\{x\}\/\{y\}.*$/, "style.js");
		styleurl = 'http://' + location.host + location.pathname.substr(0, location.pathname.lastIndexOf('/')+1) + styleurl;
		$.ajax({
			type: "GET",
			url: styleurl,
			async: true,
			ifModified: true,
			dataType:"json",
			crossDomain:true,
			// 成功時
			success: function(res){
				if(res){
					console.log(that);
					that._stylejs = res;
				}
			},
			error: function(res){
				that._stylejs = {};
			}
		});
	}(this._url));
	
	
    this._styleObj = {
		"annoproperties" :{
			"class":"クラス名",
			"rID":"レコード ID",
			"lfSpanFr":"整備データ登録日",
			"lfSpanTo":"整備データ削除日",
			"tmpFlg":"暫定フラグ",
			"orgGILvl":"出典地理情報レベル",
			"ftCode":"地物種別コード",
			"admCode":"行政コード",
			"devDate":"整備完了日",
			"annoCtg":"注記分類",
			"knj":"漢字",
			"kana":"読み",
			"arrng":"字列",
			"arrngAgl":"配置角度",
			"repPt":"代表点表示",
			"gaiji":"外字フラグ",
			"noChar":"総文字数",
/*
			"charG1":"文字グループ1",
			"charG2":"文字グループ2",
			"charG3":"文字グループ3",
			"charG4":"文字グループ4",
			"charG5":"文字グループ5",
			"charG6":"文字グループ6",
			"charG7":"文字グループ7",
			"charG8":"文字グループ8",
			"charG9":"文字グループ9",
			"charG10":"文字グループ10",
			"charG11":"文字グループ11",
			"charG12":"文字グループ12",
			"charG13":"文字グループ13",
			"charG14":"文字グループ14",
			"charG15":"文字グループ15",
			"charG16":"文字グループ16",
			"charG17":"文字グループ17",
			"charG18":"文字グループ18",
			"charG19":"文字グループ19",
			"charG20":"文字グループ20",
			"charG21":"文字グループ21",
			"charG22":"文字グループ22"
*/
		},
		"annostyle" : {
			"行政区画（市区町村）": {"size": 32.5,"color": "#000000"},
			"行政区画（飛び地）": {"size": 18.8,"color": "#000000"},
			"居住地名（町字名）": {"size": 13.8,"color": "#000000"},
			"居住地名（通称）": {"size": 13.8,"color": "#000000"},
			"山地（山の総称）": {"size": 32.5,"color": "#000000"},
			"山地（山、岳、峰等）": {"size": 20.0,"color": "#000000"},
			"山地（尖峰、丘、塚等）": {"size": 15.0,"color": "#000000"},
			"河川、湖沼（湖、沼、池等）": {"size": 15.0,"color": "#0000ff"},
			"河川、湖沼（河川、用水等）": {"size": 15.0,"color": "#0000ff"},
			"河川、湖沼（沢、谷、滝等）": {"size": 15.0,"color": "#0000ff"},
			"陸域自然地名（高原、森等）": {"size": 15.0,"color": "#000000"},
			"陸域自然地名（岩、温泉等）": {"size": 15.0,"color": "#000000"},
			"海域、海岸地形（海、湾等）": {"size": 15.0,"color": "#0000ff"},
			"海域、海岸地形（海岸、浜等）": {"size": 15.0,"color": "#0000ff"},
			"海域、海岸地形（岬、磯等）": {"size": 15.0,"color": "#000000"},
			"島（群島、列島等）": {"size": 15.0,"color": "#000000"},
			"島（島）": {"size": 15.0,"color": "#000000"},
			"島（はえ、岩礁等）": {"size": 15.0,"color": "#000000"},
			"陸上交通施設（道路名）": {"size": 17.5,"color": "#005a3c"},
			"陸上交通施設（道路施設）": {"size": 15.0,"color": "#005a3c"},
			"陸上交通施設（道路構造物）": {"size": 13.8,"color": "#005a3c"},
			"陸上交通施設（鉄道路線名）": {"size": 20.0,"color": "#005a3c"},
			"陸上交通施設（鉄道駅名）": {"size": 15.0,"color": "#005a3c"},
			"陸上交通施設（鉄道構造物）": {"size": 15.0,"color": "#005a3c"},
			"海上交通施設（港湾）": {"size": 15.0,"color": "#005a3c"},
			"海上交通施設（港湾施設）": {"size": 15.0,"color": "#005a3c"},
			"航空交通施設（空港名）": {"size": 15.0,"color": "#005a3c"},
			"構造物（高塔、煙突等）": {"size": 15.0,"color": "#000000"},
			"構造物（ダム）": {"size": 15.0,"color": "#0000ff"},
			"構造物（せき）": {"size": 15.0,"color": "#0000ff"},
			"構造物（水門、堤防）": {"size": 15.0,"color": "#0000ff"},
			"土地利用（演習場、ゴルフ場等）": {"size": 15.0,"color": "#000000"},
			"土地利用（史跡名勝天然記念物）": {"size": 15.0,"color": "#000000"},
			"土地利用（漁港）": {"size": 15.0,"color": "#000000"},
			"土地利用（公園）": {"size": 15.0,"color": "#000000"},
			"建物（合同庁舎）": {"size": 13.8,"color": "#000000"},
			"建物（国の機関）": {"size": 13.8,"color": "#000000"},
			"建物（矯正施設）": {"size": 13.8,"color": "#000000"},
			"建物（自衛隊、米軍）": {"size": 13.8,"color": "#000000"},
			"建物（県庁）": {"size": 13.8,"color": "#000000"},
			"建物（大学、大学院）": {"size": 13.8,"color": "#000000"},
			"建物（短期大学）": {"size": 13.8,"color": "#000000"},
			"建物（高等専門学校）": {"size": 13.8,"color": "#000000"},
			"建物（特殊学校）": {"size": 13.8,"color": "#000000"},
			"建物（水族館、動植物園）": {"size": 13.8,"color": "#000000"},
			"建物（発電所）": {"size": 13.8,"color": "#000000"},
			"建物（料金所）": {"size": 13.8,"color": "#000000"},
			"建物（神社）": {"size": 13.8,"color": "#000000"},
			"建物（寺院）": {"size": 13.8,"color": "#000000"},
			"建物（商業施設）": {"size": 13.8,"color": "#000000"},
			"建物（高層施設）": {"size": 13.8,"color": "#000000"},
			"建物（文教施設）": {"size": 13.8,"color": "#000000"},
			"建物（その他）": {"size": 13.8,"color": "#000000"},
			"その他（ふりがな）": {"size": 10.0,"color": "#000000"},
			"その他（鉱山の鉱種名）": {"size": 11.3,"color": "#000000"},
			"その他（その他）": {"size": 15.0,"color": "#000000"}
		}
	};
};

Object.defineProperties(JapanGSIGeojsonProvider.prototype, {
    quadtree : {
        get : function() {
            return this._quadtree;
        },
        set : function(value) {
            this._quadtree = value;
        }
    },
    ready : {
        get : function() {
            return true;
        }
    },
    tilingScheme : {
        get : function() {
            return this._tilingScheme;
        }
    },
    errorEvent : {
        get : function() {
            return this._errorEvent;
        }
    }
});

JapanGSIGeojsonProvider.prototype.initialize = function(frameState) {

};

//JapanGSIGeojsonProvider.prototype.beginUpdate = function(context, frameState, commandList) {
JapanGSIGeojsonProvider.prototype.beginUpdate = function(frameState) {
	if ( this._show )
	{
		this._currentLevel = this.getCurrentZoom();
		this.quadtree.beginFrame(frameState);
	}
};

/*
 * Cesium.jsのendUpdateから呼ばれる
 */
//JapanGSIGeojsonProvider.prototype.endUpdate = function(context, frameState, commandList) {
JapanGSIGeojsonProvider.prototype.endUpdate = function(frameState) {
	if ( this._show )
	{
		this._quadtree.endFrame(frameState);
	}
	
	/*
	// 表示リスト配列を作成
	var renderList    = [];
	var tilesToRender = this._quadtree._tilesToRender;
	for(var i=0, len=tilesToRender.length; i<len; i++){
		var item = tilesToRender[i];
		renderList.push(item._x+"/"+item._y+"/"+item._level);
	}

	// 表示リスト配列とshowTiles配列を比較し、削除リスト配列を作成
	var keyList = [];
	for(var i=0, len=this._showTiles.length; i<len; i++){
		var key = this._showTiles[i];
		if(renderList.indexOf(key) == -1 ){
			keyList.push(key);
		}
	}

	for(var i=0, len=keyList.length; i<len; i++){
		var key = keyList[i];

		// showTiles配列から削除
		var idx = this._showTiles.indexOf(key);
		this._showTiles.splice(idx, 1);

		// LabelCollection削除
		for(var j=this._viewer.scene._primitives._primitives.length-1; j>=0; j--){
			var labelCollection = this._viewer.scene._primitives._primitives[j];
			if(labelCollection.key == key){
				var res = this._viewer.scene._primitives.remove(labelCollection);
			}
		}
	}
	*/
};

JapanGSIGeojsonProvider.prototype.updateForPick = function(frameState) {
	//console.log("japan updateForPick:", frameState);
};

JapanGSIGeojsonProvider.prototype.cancelReprojections = function() {
	//console.log("japan cancelReprojections");
};

JapanGSIGeojsonProvider.prototype.getLevelMaximumGeometricError = function(level) {
	//console.log("japan getLevelMaximumGeometricError", level);
    return this._levelZeroMaximumError / (1 << level);
};

/*
 * Cesium.jsのprocessTileLoadQueueから呼ばれる
 */
JapanGSIGeojsonProvider.prototype.loadTile = function( frameState, tile) {
	
	if ( !this.isNeedTile(frameState, tile) )
	{
		return;
	}
	
	var x = tile.x,   y = tile.y,  level = tile.level;
	var key = x + "/" + y + "/" + level;
	var that = this;

	if(tile.state === Cesium.QuadtreeTileLoadState.LOADING) {
		if(tile.data===undefined){
			return;
		}
		if ( tile.data && tile.data.primitive )
		{
			if ( tile.data.primitive.update )
				tile.data.primitive.update( frameState, []);
		
			if (tile.data.primitive.ready) {
				tile.state = Cesium.QuadtreeTileLoadState.DONE;
				tile.renderable = true;
			}
		}
		return;
	}
	if(tile.state === Cesium.QuadtreeTileLoadState.START){
		tile.state = Cesium.QuadtreeTileLoadState.FAILED;
		
		// geojson読み込み
		var url = this.buildUrl(this._url, x, y, level);
		$.ajax({
			type: "GET",
			url: url,
			async: true,
			ifModified: true,
			dataType:"json",
			crossDomain:true,
			// 成功時
			success: function(res){
				if(res){
					that.drawGeojson(res, x, y, level);
				}
			},
			// 失敗時(404)
			error: function(res){
				geojson = null;
			},
			// 完了時(success・errorが呼ばれた後に呼び出される)
			complete: function(){
				if (tile.state === Cesium.QuadtreeTileLoadState.FAILED) {
					that.addTileData(frameState, tile);
					Cesium.Cartesian3.fromElements(tile.data.boundingSphere2D.center.z, tile.data.boundingSphere2D.center.x, tile.data.boundingSphere2D.center.y, tile.data.boundingSphere2D.center);
				}
				tile.state = Cesium.QuadtreeTileLoadState.LOADING;
			}
		});
	}

};

JapanGSIGeojsonProvider.prototype.isNeedTile = function(frameState, tile) {
	// Reject1
	if ( tile.level > this._currentLevel || tile.level > this._maxLevel )
	{
		return false;
	}
	
	// Reject2
	if ( this._range.tiles.length == 0 ) this.initRangeTiles();
	if ( tile.x < this._range.tiles[tile.level].west || tile.x > this._range.tiles[tile.level].east || tile.y < this._range.tiles[tile.level].north || tile.y > this._range.tiles[tile.level].south )
	{
		this.addTileData(frameState, tile);
		tile.state = Cesium.QuadtreeTileLoadState.DONE;
		tile.renderable = true;
		return false;
	}
	
	return true;
};

JapanGSIGeojsonProvider.prototype.addTileData = function(frameState, tile){
	tile.data = {
		primitive : undefined,
		freeResources : function() {
			if (Cesium.defined(this.primitive)) {
				this.primitive.destroy();
				this.primitive = undefined;
			}
		}
	};
	
	// 確認する時はalphaを255にする
	//var color = Cesium.Color.fromBytes(255, 0, 0, 255);
	var color = Cesium.Color.fromBytes(255, 0, 0, 0);
	
	tile.data.primitive = new Cesium.Primitive({
		geometryInstances : new Cesium.GeometryInstance({
			geometry : new Cesium.RectangleOutlineGeometry({
				rectangle : tile.rectangle
			}),
			attributes : {
				color : Cesium.ColorGeometryInstanceAttribute.fromColor(color)
			}
		}),
		appearance : new Cesium.PerInstanceColorAppearance({
			flat : true
		})
	});
	
	tile.data.boundingSphere3D = Cesium.BoundingSphere.fromRectangle3D(tile.rectangle);
	tile.data.boundingSphere2D = Cesium.BoundingSphere.fromRectangle2D(tile.rectangle, frameState.mapProjection);
};

JapanGSIGeojsonProvider.prototype.buildUrl = function(url, x, y, level){
	var url = url.replace("{z}", level).replace("{x}", x).replace("{y}", y);
	return url;
}


JapanGSIGeojsonProvider.prototype.hexToRgb = function(hex){
	var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result ? {
		r: parseInt(result[1], 16),
		g: parseInt(result[2], 16),
		b: parseInt(result[3], 16)
	} : null;
}


/**
 * geojson描画
 *
 * @param geojson geojsonオブジェクト
 */
JapanGSIGeojsonProvider.prototype.drawGeojson = function(geojson, x, y, level){
	//console.log("stylejs:", this._stylejs);
	var that = this;
	var key  = x+"/"+y+"/"+level;

	// すでにキャッシュされている場合 ⇒ 何もしない
	if(this._cacheTiles[key]){
		return;
	// 新規の場合 ⇒ キャッシュする
	}else{
		this._cacheTiles[key] = [];
	}

	// ラベルオブジェクトを作成
	for(var i=0; i<geojson.features.length; i++){
		var feature = geojson.features[i];
		var coord   = feature.geometry.coordinates;

		var labelObj = {
			"position"        : new Cesium.Cartesian3.fromDegrees(coord[0], coord[1]),
			"text"            : feature.properties.knj,
			"style"           : Cesium.LabelStyle.FILL_AND_OUTLINE,
			"outlineColor"    : Cesium.Color.WHITE,
			"outlineWidth"    : 3.0,
			"fillColor"       : this.getLabelColor(feature.properties),
			"font"            : this.getFont(feature.properties),
			"fontY"           : 18,
			"verticalOrigin"  : Cesium.VerticalOrigin.CENTER,
			"strokeWidth"     : 2.0,
			"strokeColor"     : Cesium.Color.WHITE,
			"stroke"          : true,
			"pixelOffset"     : new Cesium.Cartesian2(0, -70),  // 3D表示時の沈み防止
	 		"heightReference" : Cesium.HeightReference.CLAMP_TO_GROUND,
	 		"description"     : this.getDescription(feature.properties),
	 		"name"            : feature.properties.knj,
		};
		this._cacheTiles[key].push(labelObj);
	}

}

/**
 * geojsonの緯度経度を[lon, lat, lon, lat, lon, lat……]にする
 *
 * @param geom geojsonのgeometry(オブジェクト)
 */
JapanGSIGeojsonProvider.prototype.getDegArr = function(geom){
	var arr = [];

	// ラインストリング
	if(geom.type == "LineString"){
		for(var i=0, len1=geom.coordinates.length; i<len1; i++){
			var coord = geom.coordinates[i]
			arr.push(coord[0]);
			arr.push(coord[1]);
		}
	// ポリゴン
	}else if(geom.type == "Polygon"){
		for(var i=0, len1=geom.coordinates.length; i<len1; i++){
			for(var j=0, len2=geom.coordinates[i].length; j<len2; j++){
				var coord = geom.coordinates[i][j]
				Array.prototype.push.apply(arr, coord);
			}
		}
	}
	return arr;
}
/*
JapanGSIGeojsonProvider.prototype.getDegArr = function(geom){
	var arr = [];
	for(var i=0, len1=geom.coordinates.length; i<len1; i++){
		for(var j=0, len2=geom.coordinates[i].length; j<len2; j++){
			arr.push(geom.coordinates[i][j][0]);
			arr.push(geom.coordinates[i][j][1]);
		}
	}
	return arr;
}
*/

/**
 * ラベルの文字色を取得
 *
 * @param prop プロパティ(オブジェクト)
 */
JapanGSIGeojsonProvider.prototype.getLabelColor = function(prop){
	var style = this._styleObj.annostyle;

	var color = style[prop.annoCtg].color;
	var rgb   = this.hexToRgb(color);

	var cesiumColor = new Cesium.Color(rgb.r/255, rgb.g/255, rgb.b/255, 1.0);

	return cesiumColor;
};

/**
 * ラベルのフォントサイズを取得
 *
 * @param prop プロパティ(オブジェクト)
 */
JapanGSIGeojsonProvider.prototype.getFont = function(prop){
	var style = this._styleObj.annostyle;

	var size  = style[prop.annoCtg].size;
		size  = size + (size*0.5);

	return 'bold '+size+'px "メイリオ"';
};



/**
 * infoboxに表示させる内容を取得
 *
 * @param prop プロパティ(オブジェクト)
 */
JapanGSIGeojsonProvider.prototype.getDescription = function(prop){
	var style = this._styleObj.annoproperties;
	var str   = "";

	for(var key in style){
		str += "<tr><td>" + style[key] + "</td><td>" + prop[key] + "</td></tr>";
	}
	str = "<table>"+str+"</table>";
	return str;
};

JapanGSIGeojsonProvider.prototype.computeTileVisibility = function(tile, frameState, occluders) {
    var boundingSphere;
    if (frameState.mode === Cesium.SceneMode.SCENE3D) {
        boundingSphere = tile.data.boundingSphere3D;
    } else {
        boundingSphere = tile.data.boundingSphere2D;
    }
    var rtn = frameState.cullingVolume.computeVisibility(boundingSphere);
    return rtn;
};


/*
 * Cesium.jsのcreateRenderCommandsForSelectedTilesから呼ばれる
 */
JapanGSIGeojsonProvider.prototype.showTileThisFrame = function(tile, context, frameState, commandList){
	var key = tile._x+"/"+tile._y+"/"+tile._level;

	var that = this;
	
	// 表示配列に追加 ⇒ タイルごとにprimitiveCollectionを作成
	if(this._cacheTiles[key]){
		if(this._showTiles.indexOf(key) == -1){
			this._showTiles.push(key);

			// LabelCollection作成
			var LabelCollection = new Cesium.BillboardCollection({
				 scene : this._viewer.scene
			});
			LabelCollection["type"] = "GeojsonTile_labelCollection";
			LabelCollection["key"]  = key;

			//this._viewer.scene.primitives.add(LabelCollection);
			var labels = this._viewer.scene.primitives.add(LabelCollection);
			// LabelCollectionに追加
			for(var i=0, len=this._cacheTiles[key].length; i<len; i++){
				var labelObj = this._cacheTiles[key][i];
				var label = LabelCollection.add({
				    position : labelObj.position,
				    pixelOffset: labelObj.pixelOffset,
				    heightReference : Cesium.HeightReference.CLAMP_TO_GROUND,
				    scaleByDistance : new Cesium.NearFarScalar(1.0e2, 1.5, 1.0e5, 0.0),
				    image  : Cesium.writeTextToCanvas(labelObj.name, labelObj),
				    show: that._show
				});
				label["type"]        = "clickPrimitive";
				//label["fontY"]       = labelObj["fontY"];
				label["description"] = labelObj["description"];
				label["name"]        = labelObj["name"];
			}
		}
	}

    tile.data.primitive.update(context, frameState, commandList);
};

var subtractScratch = new Cesium.Cartesian3();
JapanGSIGeojsonProvider.prototype.computeDistanceToTile = function(tile, frameState) {
    var boundingSphere;
    if (frameState.mode === Cesium.SceneMode.SCENE3D) {
        boundingSphere = tile.data.boundingSphere3D;
    } else {
        boundingSphere = tile.data.boundingSphere2D;
    }

    return Math.max(0.0, Cesium.Cartesian3.magnitude(Cesium.Cartesian3.subtract(boundingSphere.center, frameState.camera.positionWC, subtractScratch)) - boundingSphere.radius);
};

JapanGSIGeojsonProvider.prototype.isDestroyed = function() {
    return false;
};

JapanGSIGeojsonProvider.prototype.destroy = function() {
    return Cesium.destroyObject(this);
};




// 現在のズームレベルを返す（描画されているタイルのズームレベルの平均値）
JapanGSIGeojsonProvider.prototype.getCurrentZoom = function() {
	var zoom = 1;
	var tilesToRender = this._viewer.scene.globe._surface._tilesToRender;
	//this.getZoomLevel();
	if ( Cesium.defined( tilesToRender ) )
	{
		var levels = [];
		var levelTotal = 0;
		for( var i=0; i<tilesToRender.length; i++ )
			levelTotal += tilesToRender[i]._level;
		
		if ( tilesToRender.length > 0 )
			zoom = parseInt( Math.round( levelTotal / tilesToRender.length ) );
		if ( zoom < 2 ) zoom = 2;
		if ( zoom > 18 ) zoom = 18;
	}
	
	return zoom;
};

// Geojsonを要求する範囲の境界タイル番号をズームレベルごとに算出する
JapanGSIGeojsonProvider.prototype.initRangeTiles = function() {
	var lt = Cesium.Cartographic.fromDegrees(this._range._west, this._range._north, 0);
	var rb = Cesium.Cartographic.fromDegrees(this._range._east, this._range._south, 0);
	
	for ( var z=0; z<=18; z++ )
	{
		var ltxy = this._tilingScheme.positionToTileXY(lt, z);
		var rbxy = this._tilingScheme.positionToTileXY(rb, z);
		this._range.tiles[z] = {
			north: ltxy.y,
			south: rbxy.y,
			west: ltxy.x,
			east: rbxy.x
		};
	}
	//console.log(this._range.tiles);
};

JapanGSIGeojsonProvider.prototype.show = function(bool){
	this._show = bool;
	
};

// 矩形描画（テスト用）
JapanGSIGeojsonProvider.prototype.drawRect = function(rectangle){
	
	var color = Cesium.Color.fromBytes(0, 0, 255, 70);
	
	var g = new Cesium.GeometryInstance({
		geometry : new Cesium.RectangleGeometry({
			rectangle : rectangle
		}),
		attributes : {
			color : Cesium.ColorGeometryInstanceAttribute.fromColor(color)
		}
	});
	/*
	var g = new Cesium.GeometryInstance({
		geometry : new Cesium.RectangleOutlineGeometry({
			rectangle : rectangle
		}),
		attributes : {
			color : Cesium.ColorGeometryInstanceAttribute.fromColor(color)
		}
	});
	*/
	var p = new Cesium.Primitive({
		geometryInstances : g,
		appearance : new Cesium.PerInstanceColorAppearance({
			flat : true
		})
	});
	this._viewer.scene.primitives.add(p);
};

