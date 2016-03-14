/*-----------------------------------------------------------------------------------------------*/
// ダウンロード
/*-----------------------------------------------------------------------------------------------*/
function Download(fname){
    DownloadButton(false);

    setTimeout("DownloadProc('" + fname + "')", 10);
};

function DownloadProc(fname){
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
                    DownloadProcDone(data, "txt", fname);
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

        var o = window.opener;
        if(o != null){
            var vSceneMesh             = [].concat(o.vSceneMesh);
            var vSceneMeshDistanceRate = o.vSceneMeshDistanceRate;
            data = vSceneMesh;
            var n = 0;
	        for(nx = 0; nx <= 256; nx++){
		        for(ny = 0; ny <= 256; ny++){
                    nz = nx * 257 + ny;
			        data[nz] = o.vSceneMesh[nz] * vSceneMeshDistanceRate;
		        }
	        }
            data = data.join(",");
            data_type = "txt";
        }
    }
    else if(fname == "texture.png"){
        fDone = true;

        var o = window.opener.oTextureCanvas;
        if(o != null){
            data      = o.toDataURL();
            data_type = "img";
        }
    }
    else if(fname == "dem.stl" || fname == "dem.wrl"){
        fDone = true;

        var o = window.opener;
        if(o != null){
            var vSceneMesh = [].concat(o.vSceneMesh);

            var vTileN    = o.args["tile_n"];
            var vDem      = [].concat(o.vSceneMesh);
            var vDemMesh  = new Array();
            var vZRate    = o.Download_Arg_ZRate();
            var vDistance = o.args["distance"];

            if(typeof vDemCSV != "undefined"){
                vDemMesh = vDemCSV;
            }
            else{
                for(var nY = 0; nY < vDem.length - 257; nY += 257){
                    var vDemX = "";
                    for(var nX = nY; nX < (nY + 256); nX++){
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
    }

    if(fDone){
        DownloadProcDone(data, data_type, fname);
    }
};

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
                    oA.href = v;;
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

function DownloadProcAlways(){
    DownloadButton(true);
};

function DownloadButton(sw){
    sw = !sw;
    if(sw){
        document.getElementById('wait').style.visibility = "visible";
    }
    else{
        document.getElementById('wait').style.visibility = "hidden";
    }

    if(     args["type"] == "stl"){
        document.getElementById("dl_stl").disabled = sw;
    }
    else if(args["type"] == "vrml"){
        document.getElementById("dl_vrml_wrl").disabled = sw;
        document.getElementById("dl_vwrl_png").disabled = sw;
    }
    else if(args["type"] == "webgl"){
        document.getElementById("dl_webgl_index").disabled = sw;
        document.getElementById("dl_webgl_csv")  .disabled = sw;
        document.getElementById("dl_webgl_png")  .disabled = sw;
    }
};

//「しばらくお待ちください」を点滅させる
$(function(){
	setInterval(
        function(){
		    $('div#wait').fadeOut(800,function(){$(this).fadeIn(800)});
	    }
    ,
    1600);
});

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
    var vDemXY     = modelSizeN / colX;		                  // DEMの1pxあたりの長さ          (mm) (平面方向)
    var vDemZ      = modelSizeN / vDistance;		          // DEMの1m あたりの模型上での長さ(mm) (高さ方向) == 縮尺
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
        for(nX = 0; nX < colX; nX++){
            for(nY = 0; nY < colY; nY++){
                wrlPointList1 += "\t\t\t\t\t\t" + (modelSizeX * (-1) + vDemXY * nY) + " " + (modelSizeH + vDem[nY][nX] * vDemZ * vZRate) + " " + (vDemXY * nX) + ",\n";
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