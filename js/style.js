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
    for(name in feature.properties) {
      if(!name.match(/^_/)){
        if(name=="name"){
          s += "<tr><th colspan='2' style='font-size:14px; font-weight:bold; color:#000000;'>" + feature.properties[name] + "</th></tr>";
        }else if(name=="description"){
          s += "<tr><td colspan='2' style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";
        }else{
          s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + name + "</td>"
               + "<td style='font-size:14px; color:#000000;'>" + feature.properties[name] + "</td></tr>";
        }
      }
    }
    s += "</table>";
    if(s != "<table></table>"){
      layer.bindPopup(s,{maxWidth:5000});
    }
  }
}

}