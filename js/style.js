{

options:{
  attribution: 'ベクトルタイル',maxNativeZoom: 2
},
geojsonOptions:{
  pointToLayer: function (feature, latlng) {
    var s = {};
    for(name in feature.properties) {
      if(name.match(/^_/) && !name.match(/_markerType/)){
        if( feature.properties['_markerType']=='Circle' && name =='_radius'){continue;}
        s[name.substr(1)]=feature.properties[name];
      }
    }
    if(feature.properties['_markerType']=='Icon'){
      s['iconUrl']=s['iconUrl'].replace('http://cyberjapandata.gsi.go.jp/','//maps.gsi.go.jp/');
      var myIcon = L.icon(s);
      return L.marker(latlng, {icon: myIcon});
    }
    if(feature.properties['_markerType']=='DivIcon'){
      var myIcon = L.divIcon(s);
      return L.marker(latlng, {icon: myIcon});
    }
    if(feature.properties['_markerType']=='Circle'){
      return L.circle(latlng,feature.properties['_radius'],s);
    }
    if(feature.properties['_markerType']=='CircleMarker'){
      return L.circleMarker(latlng,s);
    }
    return L.marker(latlng);
  },
  style: function (feature) {
    if(!feature.properties['_markerType']){
      var s = {};
      for(name in feature.properties) {
        if(name.match(/^_/) && !name.match(/_markerType/)){
          if( feature.properties['_markerType']=='Circle' && name =='_radius'){continue;}
          s[name.substr(1)]=feature.properties[name];
        }
      }
      return s;
    }
  },
  onEachFeature: function (feature, layer) {
    var s = "<table>";
    var photoFlg = false;

    for(name in feature.properties) {
      if(!name.match(/^_/)){
        if(name=="name"){
          s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>" + feature.properties[name] + "</th></tr>";
        }else if(name=="description"){
          s += "<tr><td colspan='2' style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";

        // (UAV)動画
        }else if(name=="iframe"){
          s += "<tr><td colspan='2' style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";

        // 斜め写真・垂直写真
        }else if(name=="写真"){
          photoFlg = true;
          // 写真のURLを取り出す
          var div = document.createElement("div");
          div.innerHTML = feature.properties[name];
          var photoUrl = div.querySelector("a").href;
          photoUrl=photoUrl.replace('http://saigai.gsi.go.jp/','https://saigai.gsi.go.jp/');
          s += "<tr><td colspan='2'>"
               + "<a href='" + photoUrl + "' target='_blank'>"
               + "<img src='" + photoUrl +"' alt='写真' width=300px>"
               + "</a></td></tr>"
               + "<tr><td colspan='2'>↑写真クリックで拡大表示</td></tr>";

        }else{
          s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + name + "</td>"
               + "<td style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";
        }
      }
    }
    s += "</table>";
    if(s != "<table></table>"){
      if(photoFlg){
        layer.bindPopup(s,{minWidth:300, maxWidth:5000});
      }else{
        layer.bindPopup(s,{maxWidth:5000});
      }
    }
  }
}

}