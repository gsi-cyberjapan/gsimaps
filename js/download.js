(function() {

  new MutationObserver(function() {
    const target = document.querySelector(".gsi-share-panel-icons");
    if (target && !document.querySelector(".save-json")) {
      const a = document.createElement("a");
      a.setAttribute("class", "save-json");
      a.setAttribute("style", "width:32px;height:32px;background:url(./image/system/share-json.png);cursor:pointer;");
      a.setAttribute("title", "地図中の GeoJSON を保存します");
      target.appendChild(a);

      a.addEventListener("click", function() {
        const map = GSI.GLOBALS.gsimaps._mainMap.getMap();
        const json = {
          "type": "FeatureCollection",
          "features": []
        };
        map.eachLayer(function(layer) {
          if (layer.feature)
            json.features.push(layer.feature);
        });

        if (json.features.length === 0) {
          alert("現在の画面内に GeoJSON Featrure は含まれていないようです");
        } else if (confirm(`${json.features.length} 件の GeoJSON Feature が見つかりました\nOK を押すとダウンロードします`)) {
          const blob = new Blob([JSON.stringify(json, null, 2)], {
            type: "application/json;charset=utf-8"
          });
          saveAs(blob, `gsimaps_${new Date().getTime()}.json`);
        }
      });
    }
  }).observe(document.body, {
    childList: true
  });

})();
