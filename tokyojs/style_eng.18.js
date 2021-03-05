{
options:{
  attribution: '英語ベクトルタイル',minZoom: 5, maxZoom: 18
},
geojsonOptions:{
  pointToLayer: function(feature, latlng){
    var size = 17;
    var baseFontSize = 10;//px
    var scaledFontSize = 10;
    var scaleFactor = 1.0;
    var infoFontElm = "transform:scale(scalefactor);transform-origin:left center;";
    var iconsize = 0; //pixel
    var color = "#000";
    var dispel = "";
    var htmlel = "";
    var fontel = "font-family:Meiryo, メイリオ, sans-serif;";
    var divel =  "<span style='white-space: nowrap;";

    var pos = null;
    var angle = 0;

    if (feature.properties["dspPos"]){
      pos = feature.properties["dspPos"];
    }
    if (feature.properties["arrngAgl"]){
      angle = feature.properties["arrngAgl"];
    }

    var z = GSI.GLOBALS.map.getZoom();
    //アイコン
    var iconurl = "";
    var kind = "";
    var note = "";
    var iconname = "";
    var ia = [0,0];
    if (feature.properties["ftCode"]){
      kind = feature.properties["ftCode"];
    }
    if (feature.properties["annoCtg"]){
      note = feature.properties["annoCtg"];
    }

    if((kind != "") && (z >= 5) && (kind != "100")&& (kind != "50100")
      && (kind != "411") && (kind != "413")
      && (kind != "421") && (kind != "423") 
      && (kind != "2941") && (kind != "2942") && (kind != "2943")
      && (kind != "2944") && (kind != "2945") && (kind != "3221")
      && (kind != "3218") && (kind != "3243") && (kind != "3221")
      && (kind != "3211") && (kind != "3216") && (kind != "6368") && (kind != "56368")
      && (kind != "7201") && (kind != "7211") && (kind != "7221")){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 24;
        }
        else if ((z < 12) && (z >= 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 16;
        }
        else if ((z < 9) && (z >= 7)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 16;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 10;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }

    if((z >= 5) && (kind == "1401")){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 8;
        }
        else if ((z < 9) && (z >= 7)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 0;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }

        ia = [ iconsize/2, iconsize/2 ];
    }

    if ((z >= 5) && ( (kind == "1402") || (kind == "1403") )){
        if (note){
          kind = note;
        }
      iconname = kind + ".png";
        if (z >= 12){
        iconurl = "./image/vector/9/" + iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 8;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }

        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (note == "311"){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z > 18){
          iconurl = ""+ iconname;
          iconsize = 0;
        }
        else if ((z < 18) && (z >= 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 3;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    if (note == "312"){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z > 14){
          iconurl = ""+ iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 3;
        }
        else{
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 4;
    }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (note == "314"){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = ""+ iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 3;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (note == "315"){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = ""+ iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 3;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (note == "316"){
        if (note){
          kind = note;
        }
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = ""+ iconname;
          iconsize = 0;
        }
        else if ((z < 12) && (z >= 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 3;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 0;
    }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    

    if (kind == "2930"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 18;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 16;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 15;
        }
        else if (z == 13){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 13;
        }
        else{
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
   if (kind == "3207"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 24;
        }
        else if (z == 13){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 22;
        }
        else if (z == 12){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else{
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    if (kind == "3208"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 22;
        }
        else if (z == 13){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 22;
        }
        else if (z == 12){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else{
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    if ((kind == "51301") || (kind == "51302") || (kind == "51303")){
      iconname = kind + ".png";
        if (z >= 8){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 10;
        }
        else if ((z < 8) && (z >= 7)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 8;
        }
        else if ((z < 7) && (z >= 6)){
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 7;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 5;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }


    if (kind == "6375"){
      iconname = kind + ".png";
        if (z >= 12){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 14;
        }
      else if (z == 11){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 24;
        }
      else if (z == 10){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 20;
        }
      else if (z == 9){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 18;
        }
      else if (z == 8){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 24;
        }
      else if (z == 7){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 12;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 5;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }


    if (kind == "6376"){
        iconname = kind + ".png";
        if (z >= 12){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 14;
        }
        else if ((z == 11)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 22;
        }
        else if ((z == 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 20;
        }
        else if ((z == 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 18;
        }
        else if ((z == 8)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 30;
        }
        else if ((z == 7)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 12;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 5;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "56376"){
        iconname = kind + ".png";
        if (z >= 9){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 14;
        }
        else if ((z == 8)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 26;
        }
        else if ((z == 7)){
          iconurl = "./image/vector/7/" + iconname;
          iconsize = 12;
        }
        else{
          iconurl = "./image/vector/5/" + iconname;
          iconsize = 5;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "3205"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 15;
        }
        else if (z == 13){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 15;
        }
        else if (z == 12){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 13;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "3206"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 15;
        }
        else if (z == 13){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 13;
        }
        else if (z == 12){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 11;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "3218"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "3231"){
       iconname = kind + ".png";
       if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
       
       ia = [ iconsize/2, iconsize/2 ];
   }
    
    if (kind == "3232"){
       iconname = kind + ".png";
       if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 13;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 13;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
       
       ia = [ iconsize/2, iconsize/2 ];
   }
    
    if (kind == "3243"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }

    if (kind == "3211"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
        
    if (kind == "3216"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    if (kind == "6331"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 17;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 15;
        }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 17;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
    
    if (kind == "2901"){
        iconname = kind + ".png";
        if (z >= 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if ((z == 17 || z == 18)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 16)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 15)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 14)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else if ((z == 13)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else if ((z == 12)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 18;
        }
        else if ((z == 11)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 16;
        }
        else if ((z == 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 16;
        }
        else{
          iconurl = "";
          iconsize = 0;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }

    if (kind == "2903"){
        iconname = kind + ".png";
      if (z > 14){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 0;
        }
        else if ((z == 14)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else if ((z == 13)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else if ((z == 12)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 20;
        }
        else{
          iconurl = "";
          iconsize = 0;
      }
      
      ia = [ iconsize/2, iconsize/2 ];
    }
    if (kind == "2904"){
        iconname = kind + ".png";
      if (z >= 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if ((z == 17 || z == 18)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 16)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 15)){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 20;
        }
        else if ((z == 14)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 24;
        }
        else if ((z == 13)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 24;
        }
        else if ((z == 12)){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 24;
        }
        else if ((z == 11)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 20;
        }
        else if ((z == 10)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 16;
        }
        else if ((z == 9)){
          iconurl = "./image/vector/9/" + iconname;
          iconsize = 18;
        }
        else{
          iconurl = "";
          iconsize = 0;
      }
      
      ia = [ iconsize/2, iconsize/2 ];
    }
    if (kind == "2910"){
        iconname = kind + ".png";
        if (z > 18){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        else if (z == 17 || z == 18){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
        }
        else if (z == 16){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
         }
        else if (z == 15){
          iconurl = "./image/vector/15/" + iconname;
          iconsize = 22;
         }
        else if (z == 14){
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 22;
         }
        else{
          iconurl = "./image/vector/12/" + iconname;
          iconsize = 0;
        }
        
        ia = [ iconsize/2, iconsize/2 ];
    }
      
//    if ( (z == 10) && (kind == "1403") ){
//      //ZL10、annoCtg1403はアイコンを表示しない
//      iconurl = " ./image/vector/9/" + iconname;
//      iconsize = 0;
//      //ia = [0, 0];
//    }

    if (iconurl != ""){
      var imgel = "<img width="+ iconsize + "px height="+ iconsize +"px src='"+iconurl+"'></img>";
      htmlel+=imgel;
    }

    switch(feature.properties["annoCtg"]){
      case 110:
        //ここからbreakまではannoCtgが110(市区町村)の場合
        if (z < 8){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 9:
              scaleFactor = 1.2;
              break;
            case 10:
              scaleFactor = 1.5;
              break;
            case 11:
              scaleFactor = 1.5;
              break;
            case 12:
              scaleFactor = 1.5;
              break;
            case 13:
              scaleFactor = 1.5;
              break;
            case 14:
              scaleFactor = 1.5;
              break;
            case 15:
              scaleFactor = 1.5;
              break;
            case 16:
              scaleFactor = 1.5;
              break;
            case 17:
              scaleFactor = 2.0;
              break;
            case 18:
              scaleFactor = 2.0;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
     case 120:
        //ここからbreakまではannoCtgが120(市区町村)の場合
        if (z < 13){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 14:
              scaleFactor = 1.5;
              break;
            case 15:
              scaleFactor = 1.5;
              break;
            case 16:
              scaleFactor = 1.5;
              break;
            case 17:
              scaleFactor = 2.0;
              break;
            case 18:
              scaleFactor = 2.0;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 210:
        //ここからbreakまではannoCtgが210の場合
        if (z < 13){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 14:
              scaleFactor = 1.3;
              break;
            case 15:
              scaleFactor = 1.2;
              break;
            case 16:
              scaleFactor = 1.2;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 220:
        //ここからbreakまではannoCtgが212(市街地)の場合
       if (z < 13){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 14:
              scaleFactor = 1.1;
              break;
            case 15:
              scaleFactor = 1.0;
              break;
            case 16:
              scaleFactor = 1.0;
              break;
            case 17:
              scaleFactor = 1.3;
              break;
            case 18:
              scaleFactor = 1.3;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 212:
        //ここからbreakまではannoCtgが212(市街地)の場合
        if ((z < 10) || (z >= 12)){
          dispel = "display:none;";
        }
        else{
          scaleFactor = 1.2;
        }
        break;
      case 311:
        //ここからbreakまではannoCtgが311(山の総称)の場合
        if (z < 10){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            case 11:
              scaleFactor = 1.1;
              break;
            case 12:
              scaleFactor = 1.1;
              break;
            case 13:
              scaleFactor = 1.1;
              break;
            case 14:
              scaleFactor = 1.1;
              break;
            case 15:
              scaleFactor = 1.6;
              break;
            case 16:
              scaleFactor = 1.6;
              break;
            case 17:
              scaleFactor = 1.8;
              break;
            case 18:
              scaleFactor = 1.8;
              break;
            default:
              scaleFactor = 1.3;
              break;
          }
          color = "#800080";
        }
        break;
      case 312:
        //ここからbreakまではannoCtgが312(山・岳・峰)の場合
        if (z < 10){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            case 11:
              scaleFactor = 1.1;
              break;
            case 12:
              scaleFactor = 1.3;
              break;
            case 13:
              scaleFactor = 1.4;
              break;
            case 14:
              scaleFactor = 1.5;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 1.3;
              break;
          }
          color = "#800080";
        }
        break;
       case 313:
        //ここからbreakまではannoCtgが313の場合
        if (z < 14){
          dispel = "display:none;";
        }
        else{
          switch(z){
           case 15:
              scaleFactor = 1.1;
              break;
            case 16:
              scaleFactor = 1.1;
              break;
            case 17:
              scaleFactor = 1.3;
              break;
            case 18:
              scaleFactor = 1.3;
              break;
            default:
              scaleFactor = 1.1;
              break;
          }
          color = "#800080";
        }
        break;
      case 314:
        //ここからbreakまではannoCtgが314(山 >3000m)の場合
        if (z < 10){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            default:
              scaleFactor = 1.3;
              break;
          }
          color = "#800080";
        }
        break;
      case 315:
        //ここからbreakまではannoCtgが315(山 >1000m)の場合
        if (z < 10){ //V1:10
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            default:
              scaleFactor = 1.3;
              break;
          }
          color = "#800080";
        }
        break;
      case 316:
        //ここからbreakまではannoCtgが316(山 <1000m)の場合
        if (z < 10){ //V1:10
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            default:
              scaleFactor = 1.3;
              break;
          }
          color = "#800080";
        }
        break;
      case 321:
        //ここからbreakまではannoCtgが321(湖沼名)の場合
        if (z < 7){ //v1:8
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.4;
              break;
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 1.1;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
          color = "#0000FF";
        }
        break;
      case 322:
        //ここからbreakまではannoCtgが322(河川)の場合
        if (z < 7){ //v1:8
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.4;
              break;
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 1.1;
              break;
            case 11:
              scaleFactor = 1.2;
              break;
            case 12:
              scaleFactor = 1.2;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.2;
              break;
            case 15:
              scaleFactor = 1.2;
              break;
            case 16:
              scaleFactor = 1.2;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
          }
          color = "#0000FF";
        }
        break;
      case 323:
        //ここからbreakまではannoCtgが323の場合
        if (z < 12){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 12:
              scaleFactor = 1.1;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.2;
              break;  
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 333:
        //ここからbreakまではannoCtgが333(山脈、山地)の場合
        if ((z < 7) || (z >= 15)){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 1.2;
              break;
            case 8:
              scaleFactor = 1.6;
              break;
            case 9:
              scaleFactor = 1.8;
              break;
            case 10:
              scaleFactor = 2.2;
              break;
            case 11:
              scaleFactor = 2.8;
              break;
            default:
              scaleFactor = 0;
              break;
          }
          color = "#800080";
        }
        break;
      case 334:
        //ここからbreakまではannoCtgが3(平野・盆地)の場合
        if ((z < 8) || (z >= 12)){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 9:
              scaleFactor = 1.8;
              break;
            case 10:
              scaleFactor = 2.2;
              break;
            case 11:
              scaleFactor = 2.4;
              break;
            default:
              scaleFactor = 0;
              break;
          }
          color = "#660000";
        }
        break;
      case 331:
        //ここからbreakまではannoCtgが331(高原・原・森・・・)の場合
        if (z < 10){
          dispel = "display:none;";
        }
         else{
          scaleFactor = 1.2;
        }
        break;
      case 332:
        //ここからbreakまではannoCtgが332(岩・溶岩・・・)の場合
        if (z < 10){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 10:
              scaleFactor = 1.1;
              break;
            case 11:
              scaleFactor = 1.1;
              break;
            case 12:
              scaleFactor = 1.1;
              break;
            case 13:
              scaleFactor = 1.1;
              break;
            case 14:
              scaleFactor = 1.2;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 344:
        //ここからbreakまではannoCtgが344(海、灘)の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 1;
              break;
            case 6:
              scaleFactor = 1.8;
              break;
            case 7:
              scaleFactor = 1.4;
              break;
            case 8:
              scaleFactor = 1.8;
              break;
            case 9:
              scaleFactor = 1.5;
              break;
            case 10:
              scaleFactor = 2.4;
              break;
            case 11:
              scaleFactor = 2.8;
              break;
            default:
              scaleFactor = 2.0;
              break;
          }
          color = "#0000FF";
        }
        break;
      case 345:
        //ここからbreakまではannoCtgが345(湾・淵など)の場合
       if (z < 7){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 1.4;
              break;
            case 8:
              scaleFactor = 1.6;
              break;
            case 9:
              scaleFactor = none;
              break;
            case 10:
              scaleFactor = 1.5;
              break;
            case 11:
              scaleFactor = 1.5;
              break;
            case 12:
              scaleFactor = 1.5;
              break;
            case 13:
              scaleFactor = 1.5;
              break;
            case 14:
              scaleFactor = 1.7;
              break;
            case 15:
              scaleFactor = 1.7;
              break;
            case 16:
              scaleFactor = 1.9;
              break;
            case 17:
              scaleFactor = 2.1;
              break;
            case 18:
              scaleFactor = 2.1;
              break;
            default:
              scaleFactor = 0.0;
              break;
          }
          color = "#0000FF";
        }
        break;
      case 347:
        //ここからbreakまではannoCtgが347(海岸・浜・・)の場合
        if (z < 9){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 9:
              scaleFactor = 1.3;
              break;
            case 10:
              scaleFactor = 1.5;
              break;
            case 11:
              scaleFactor = 1.5;
              break;
             default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 348:
        //ここからbreakまではannoCtgが348(海山など)の場合
        if (z < 18){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 0;
              break;
            case 8:
              scaleFactor = 0;
              break;
            default:
              scaleFactor = 0;
              break;
          }
          color = "#993300";
        }
        break;
      case 346:
        //ここからbreakまではannoCtgが346(半島など)の場合
        if ((z < 7) || (z >= 12)){ //v1:8
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 1.2;
              break;
            case 8:
              scaleFactor = 2.2;
              break;
            case 9:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 2.4;
              break;
          }
          color = "#800080";
        }
        break;
      case 343:
        //ここからbreakまではannoCtgが343(岬など)の場合
        if (z < 7){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.4;
              break;
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 0.8;
              break;
            case 11:
              scaleFactor = 1.4;
              break;
            case 12:
              scaleFactor = 1;
              break;
            case 13:
              scaleFactor = 1;
              break;
            case 14:
              scaleFactor = 1;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.3;
              break;
            case 18:
              scaleFactor = 1.3;
              break;
            default:
              scaleFactor = 1.0;
              break;
          }
        }
        break;
      case 351:
        //ここからbreakまではannoCtgが351(島の総称)の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 0.8;
              break;
            case 6:
              scaleFactor = 1.1;
              break;
            case 7:
              scaleFactor = 1.2;
              break;
            case 8:
              scaleFactor = 1.8;
              break;
            case 9:
              scaleFactor = 1.6;
              break;
            case 10:
              scaleFactor = 2.0;
              break;
            case 11:
              scaleFactor = 2.0;
              break;
            case 12:
              scaleFactor = 1.4;
              break;
            case 13:
              scaleFactor = 1.4;
              break;
            case 14:
              scaleFactor = 1.4;
              break;
            case 15:
              scaleFactor = 1.4;
              break;
            case 16:
              scaleFactor = 1.6;
              break;
            case 17:
              scaleFactor = 1.8;
              break;
            case 18:
              scaleFactor = 1.8;
              break;
            default:
              scaleFactor = 1.0;
              break;
          }
        }
        break;
      case 352:
        //ここからbreakまではannoCtgが352(島)の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 0.8;
              break;
            case 6:
              scaleFactor = 1.2;
              break;
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.4;
              break;
            case 9:
              scaleFactor = 1.0;
              break;
            case 10:
              scaleFactor = 1.1;
              break;
            case 11:
              scaleFactor = 1.4;
              break;
            case 12:
              scaleFactor = 1.0;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
        case 353:
        //ここからbreakまではannoCtgが353の場合
        if (z < 11){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 12:
              scaleFactor = 1.0;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.2;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 150:
        //ここからbreakまではannoCtgが150(国名)の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 1.8;
              break;
            case 6:
              scaleFactor = 1.8;
              break;
            case 7:
              scaleFactor = 2.0;
              break;
            default:
              scaleFactor = 3.4;
              break;
          }
        }
        break;
      case 140:
        //ここからbreakまではannoCtgが140(都道府県)の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 1.4;
              break;
            case 6:
              scaleFactor = 1.4;
              break;
            case 7:
              scaleFactor = 1.4;
              break;
            case 8:
              scaleFactor = 2.8;
              break;
            case 9:
              scaleFactor = 2.2;
              break;
            default:
              scaleFactor = 2.4;
              break;
          }
        }
        break;
     case 411:
        //ここからbreakまではannoCtgが411(道路名)の場合
        if (z < 12){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 12:
              scaleFactor = 1.2;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.4;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.5;
              break;
            case 17:
              scaleFactor = 1.6;
              break;
            case 18:
              scaleFactor = 1.6;
              break;
              scaleFactor = 0;
              break;
          }
            color = "#339900";
        }
        break;
      case 412:
        //ここからbreakまではannoCtgが412の場合
        if (z < 12){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 12:
              scaleFactor = 1.0;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.2;
              break;
            case 15:
              scaleFactor = 1.2;
              break;
            case 16:
              scaleFactor = 1.2;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
          }
            color = "#339900";
        }
        break;
      case 421:
        //ここからbreakまではannoCtgが421(鉄道路線名)の場合
        if (z < 9){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 1.2;
              break;
            case 11:
              scaleFactor = 1.2;
              break;
            case 12:
              scaleFactor = 1.2;
              break;
            case 13:
              scaleFactor = 1.2;
              break;
            case 14:
              scaleFactor = 1.4;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.5;
              break;
            case 17:
              scaleFactor = 1.6;
              break;
            case 18:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 0;
              break;
                  }
          color = "#339900";
        }
        break;
      
      case 431:
        //ここからbreakまではannoCtgが431(港湾)の場合
        if (z < 11){
          dispel = "display:none;";
        }
         else{
          scaleFactor = 1.4;
          color = "#339900";
        }
        break;
      case 441:
        //ここからbreakまではannoCtgが441(空港名)の場合
        if (z < 11){
          dispel = "display:none;";
        }
         else{
          scaleFactor = 1.4;
          color = "#339900";
        }
        break;
       case 531:
        //ここからbreakまではannoCtgが531の場合
        if (z < 14){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 532:
        //ここからbreakまではannoCtgが532の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 534:
        //ここからbreakまではannoCtgが534の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
     case 612:
        //ここからbreakまではannoCtgが612の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      case 631:
        //ここからbreakまではannoCtgが631の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      
      case 651:
        //ここからbreakまではannoCtgが651の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      
       case 681:
        //ここからbreakまではannoCtgが681の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
        }
        break;
      }
//////////////////////////////////////////////////////////////////
    switch(feature.properties["ftCode"]){
      case 51301:
        //ここからbreakまではftCodeが51301(都市名(100万))の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 0.8;
              break;
            case 6:
              scaleFactor = 1.4;
              break;
            case 7:
              scaleFactor = 0.9;
              break;
            case 8:
              scaleFactor = 1.4;
              break;
            default:
              scaleFactor = 1.6;
              break;
          }
        }
        break;
      case 51302:
        //ここからbreakまではannoCtgが51302(都市名(50万))の場合
        if (z < 5){ //v1:7
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 0.8;
              break;
            case 6:
              scaleFactor = 1.4;
              break;
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 1.6;
              break;
          }
        }
        break;
      case 51303:
        //ここからbreakまではannoCtgが51303(都市名(それ以下))の場合
        if (z < 5){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 5:
              scaleFactor = 0.8;
              break;
            case 6:
              scaleFactor = 1.4;
              break;
            case 7:
              scaleFactor = 0.8;
              break;
            case 8:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 1.6;
              break;
          }
        }
        break;
      case 1401:
        //ここからbreakまではannoCtgが1401(都道府県所在地)の場合
        if  ((z < 8) || (z >= 12)){
          dispel = "display:none;";
        }
         else{
          scaleFactor = 1.2;
        }
        break;
      case 1402:
        //ここからbreakまではannoCtgが1402(市役所・東京都の区役所)の場合
        if ((z < 8) || (z >= 12)){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 1;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 1403:
        //ここからbreakまではannoCtgが1403(町・村)の場合
        if ((z < 8) || (z >= 12)){
          dispel = "display:none;";
        }
        else{
          switch(z){
            case 9:
              scaleFactor = 1;
              break;
            case 10:
              scaleFactor = 1;
              break;
            default:
              scaleFactor = 1.2;
              break;
          }
        }
        break;
      case 2910:
        //ここからbreakまではftcodeが2910の場合
        if (z < 15){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.5;
              break;
            case 18:
              scaleFactor = 1.5;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
          color = "#339900";
        }
        break;
       case 2930:
        //ここからbreakまではftcodeが2930(鉄道駅名)の場合
        if (z < 13){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 13:
              scaleFactor = 1.3;
              break;
            case 14:
              scaleFactor = 1.3;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.6;
              break;
            case 18:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 0;
              break;
                  }
          color = "#339900";
        }
        break;
      case 2901:
        //nRNo
        if (z > 11){
          scaleFactor = 1.0;
          color = "#FFF";
        }
        else if ((z <= 11) && (z > 9)){
          scaleFactor = 0.8;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
      case 2903:
        //都市高速番号
        if (z > 14){
          scaleFactor = 1.0;
          color = "#FFF";
        }
        else if ((z <= 14) && (z >= 12)){
          scaleFactor = 1.1;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
      case 2904:
        //eRNo
        if (z > 11){
          scaleFactor = 1.2;
          color = "#FFF";
        }
        else if ((z <= 11) && (z >= 9)){
          scaleFactor = 1;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
     case 3205:
        //
        if (z > 14){
          scaleFactor = 0;
          color = "#FFF";
        }
        else if ((z <= 17) && (z >= 12)){
          scaleFactor = 0;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
     case 3206:
        //
        if (z > 14){
          scaleFactor = 0;
          color = "#FFF";
        }
        else if ((z <= 17) && (z >= 12)){
          scaleFactor = 0;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
     case 3207:
        //
        if (z > 14){
          scaleFactor = 0;
          color = "#FFF";
        }
        else if ((z <= 17) && (z >= 12)){
          scaleFactor = 0;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
     case 3208:
        //
        if (z > 14){
          scaleFactor = 0;
          color = "#FFF";
        }
        else if ((z <= 17) && (z >= 12)){
          scaleFactor = 0;
          color = "#FFF";
        }
        else{
          dispel = "display:none;";
        }
        fontel = "font-family:ＭＳ ゴシック;";
        break;
     case 3231:
        //ここからbreakまではftcodeが3231(神社)の場合
        if (z < 13){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 13:
              scaleFactor = 1.3;
              break;
            case 14:
              scaleFactor = 1.3;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.6;
              break;
            case 18:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
         }
        break;
      case 3232:
        //ここからbreakまではftcodeが3232(寺院)の場合
        if (z < 13){
          dispel = "display:none;";
        }
         else{
          switch(z){
            case 13:
              scaleFactor = 1.3;
              break;
            case 14:
              scaleFactor = 1.3;
              break;
            case 15:
              scaleFactor = 1.3;
              break;
            case 16:
              scaleFactor = 1.3;
              break;
            case 17:
              scaleFactor = 1.6;
              break;
            case 18:
              scaleFactor = 1.6;
              break;
            default:
              scaleFactor = 0;
              break;
                   }
         }
        break;
        
      default:
          break;
    }
    
/////////////////////////////////////////////////////////////////////////

    divel += fontel;
    divel += dispel;

    var fname = "";
    if (feature.properties["name"]){
      fname = feature.properties["name"];
      divel+= "text-shadow:-1px -1px #fff,1px -1px #fff,-1px 1px #fff,1px 1px #fff;"
      divel+= "background-color:#fff0;"
      divel+= "font-weight:bold;"
  }
    else{
      if (feature.properties["nRNo"]){
        fname = feature.properties["nRNo"];
      }
      if (feature.properties["uRNo"]){
        fname = feature.properties["uRNo"];
      }
      if (feature.properties["eRNo"]){
        fname = feature.properties["eRNo"];
      }     
    }

    scaledFontSize = baseFontSize * scaleFactor;
    if (scaleFactor < 1){
      divel += "font-size:" + baseFontSize + "px;";

      infoFontElm = infoFontElm.replace("scalefactor", scaleFactor);
      divel += infoFontElm;
      }     
    else{
      divel += "font-size:" +scaledFontSize + "px;";
    }

    divel += "color:" + color + ";";
    if (divel.indexOf("display:") < 0){
      divel+= "display:inline-block;";
    }

    if( pos ){
      var hel = pos.substring( 0, 1 );
      var vel = pos.substring( 1, 2 );
      var mt, w, h;
      if ( hel || vel ){
        divel += "position:relative;";
        var cv = document.getElementById( "measure" );
        if ( ( cv ) && ( cv.getContext ) ){
          var ct = cv.getContext( "2d" );
          if( ct ){
            if ((kind) && ((kind=="2901") || (kind == "2903") || (kind == "2904"))){
              ct.font = scaledFontSize + "px 'ＭＳ ゴシック'";
            }
            else{
              ct.font = scaledFontSize + "px 'メイリオ'";
            }

            mt = ct.measureText(fname);
            if ( mt ){
              w = mt.width * 1.15;
              h = scaledFontSize * 1.25;

              if (angle == 0){
                if (hel == "C"){
                  divel += "left:-" + Math.floor((w + iconsize) / 2) + "px;";
                }
                else if (hel == "R"){
                  divel += "left:-" + (w  + iconsize) + "px;";
                }
                else{
                  if (iconurl == ""){
                    if (iconsize > 0){
                      divel += "left:" + iconsize + "px;";
                    }
                    else{
                      if ( (z==10) && (note == "1403") ){
                        var dumsize = Math.floor(z * 1.2);
                        divel += "left:" + dumsize + "px;";
                      }
                    }
                  }
                }

                if (vel == "C"){
                  if (iconurl != ""){
                            divel += "top:-" + ( (h - scaledFontSize) + Math.floor((iconsize - h) / 2) ) + "px;";
                  }
                  else{
                    if (iconsize < 1){
                      divel += "top:-" + (h - scaledFontSize) + "px;";
                    }
                  }
                }
                else if (vel=="B"){
                  if (iconurl != ""){
                    divel += "top:-" + ((h - scaledFontSize) + iconsize)  + "px;";
                  }
                  else{
                    divel += "top:-" + ((h - scaledFontSize) + h)  + "px;";
                  }
                }
                else{
                  if (iconsize > 0){
                    divel += " top:" + h + "px;"
                  }
                }

              }
              else{
                var rd =(0-angle) * Math.PI / 180;
                var wd2 = w / 2;
                var hd2 = h / 2;
                var sinw = Math.abs(wd2 * Math.sin(rd));
                var cosw = Math.abs(wd2 * Math.cos(rd));

                var leftval = 0;
                var topval = 0;

                switch(hel){
                  case "C":
                  leftval = -(wd2);
                  break;
                  case "R":
                  leftval = -(wd2 * 2);
                  break;
                  default:
                  break;
                }
                switch(vel){
                  case "C":
                  topval = -(hd2);
                  break;
                  case "B":
                  topval = -(h);
                  break;
                  default:
                  break;
                }

                if (((angle >= 0) && (angle < 90)) ||
                ((angle >= 180) && (angle < 270))){

                  if (hel == "L"){
                    leftval += -(wd2 - cosw);
                    topval += -(sinw);
                  }
                  else if (hel == "R"){
                    leftval += (wd2 - cosw);
                    topval += sinw;
                  }
                }
                else{

                  if (hel == "L"){
                    leftval += -(wd2 - cosw);
                    topval += sinw;
                  }
                  else if (hel == "R"){
                    leftval += (wd2 - cosw);
                    topval += -(sinw);
                  }
                }
                
                divel += "left:" + (leftval) + "px;";
                divel += "top:" + (topval) + "px;";            
              }
            }
          }
        }
      }
    }

    if (angle != 0){
      divel += "-webkit-transform: rotate(" + (0 - angle) + "deg);";
      divel += "-moz-transform: rotate(" + (0 - angle) + "deg);";
      divel += "-o-transform: rotate(" + (0 - angle) + "deg);";
      divel += "-ms-transform: rotate(" + (0 - angle) + "deg);";
      divel += "transform: rotate(" + (0 - angle) + "deg);";
      divel += "transform-origin: center center;";
    }

    if (fname != ""){
      divel += "'>" + fname + "</span>";
    }
    else{
      divel += "'></span>";
    }

    htmlel += divel;

    if (iconsize > 0){
    return L.marker(latlng, {
      icon : L.divIcon({
        iconAnchor: ia,
          iconSize: [iconsize, iconsize],
          className : "gsi-div-alt-icon",
          html: htmlel
        })
      });
      }
    else{
      return L.marker(latlng, {
        icon : L.divIcon({
          iconAnchor: ia,
        className : "gsi-div-icon",
        html: htmlel
      })
    });
      }
  },
  onEachFeature: function (feature, layer){
    var dataproperties = {
      "name":" ",
      "nRNo":"National Highway Number",
      "uRNo":"Urban Expressway Number",
      "eRNo":"Expressway Number"
    };

   if ((!feature.properties["dspPos"])
    &&(!feature.properties["arrng"])
    &&(!feature.properties["name"])
    &&(!feature.properties["arrngAgl"])
    &&(!feature.properties["ftCode"])
    &&(!feature.properties["annoCtg"])){
       return;
    }
    
    var ftc = feature.properties["ftCode"];
    var anc = feature.properties["annoCtg"];
    var optn = "";

    switch(ftc){
      case 56376:
      case 6376:
      optn="AirPort";
      break;
      case 2910:
      optn="Michi-no-Eki (Roadside Rest Area)";
      break;
      case 2930:
      optn="Station";
      break;
      case 3205:
      optn="City Hall";
      break;
      case 3206:
      optn="Municipality Office";
      break;
      case 3207:
      optn="Prefectural Office";
      break;
      case 3208:
      optn="Subprefectural Bureau Office";
      break;
      case 3218:
      optn="Post Office";
      break;
      case 3231:
      optn="Shrine";
      break;
      case 3232:
      optn="Temple";
      break;
      case 3243:
      optn="Hospital";
      break;
      case 3211:
      optn="Koban(Police Box)";
      break;
      case 3216:
      optn="Museum";
      break;
      case 6331:
      optn ="Onsen(Hot Spring etc.)";
      break;
      case 50100:
      case 100:
      if (anc == 140){
        optn = "Prefecture";
      }
      else if (anc == 212){
        optn = "Area Name";
      }
      else if (anc == 411){
        optn = "Road";
      }
      else if (anc == 421){
        optn = "Railway";
      }
      else if (anc == 210){
        optn = "Area Name";
      }
      else if (anc == 220){
        optn = "Area Name";
      }
      else if (anc == 531){
        optn = "Facility etc.";
      }
      else if (anc == 612){
        optn = "Government Office";
      }
      else if (anc == 681){
        optn = "Facility etc.";
      }
      break;
      case 51301:
      case 1401:
      case 1402:
      case 1403:
      optn="Municipality";
      break;
      default:

    }

    var s = "<table>";

    if (optn != ""){
      s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;' colspan='2';>" + optn + "</td>";
    }

    for(var k in feature.properties){
      var v = feature.properties[k];
      if(v !== "" && dataproperties[k]){
        if (k == "name"){
        // s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + dataproperties[k] + "</td>"
        //      + "<td style='font-size:14px; color:#000000;'>" + v + "</td></tr>";
          s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + dataproperties[k] + "</td>"
              + "<td style='font-size:14px; color:#000000;'>" + this.expandWord(v, ftc, anc) + "</td></tr>";
        }
        else{
         s += "<tr><td style='vertical-align:top; font-size:14px; color:#0000ff;'>" + dataproperties[k] + "</td>"
              + "<td style='font-size:14px; color:#000000;'>" + v + "</td></tr>";
      }
      }
    }
    s += "</table>";

    layer.bindPopup(s);
    layer.on({
      click: function(){
        if (!feature.properties["kana"]){
          return;
        }
        var spc = GSI.GLOBALS.exSpeach(feature.properties["kana"]);
        if ( spc == "" ){
          spc = feature.properties["kana"];
        }
        if(spc.search(/は/) != -1){
          //「は」を「わ」と読むのを阻止
          spc = spc.replace(/は/g, "ハ");
        }
        var synthes = new SpeechSynthesisUtterance(spc);
        synthes.lang = "ja-JP";
        var voices = speechSynthesis.getVoices();
        for (var i = 0; i < voices.length; i++) {
          if (voices[i].lang == "ja-JP"){
            synthes.voice = voices[i];
          }
        }
        speechSynthesis.speak( synthes );
      }
    });
  },
  expandWord : function(word, ftCode, annoCtg){
    if (typeof ftCode !== undefined){
      if (ftCode == 100){
        if (typeof annoCtg === undefined) return word;

        switch(annoCtg){
          case 311:
          case 312:
          case 313:
          case 314:
          case 315:
          case 316:
            return word.replace("Mt.", "Mount");
          case 321:
            return word.replace("L.", "Lake");
          case 322:
            return word.replace("R.", "River");
          case 343:
            return word.replace("C.", "Cape ");
          case 351:
          case 352:
            return word.replace("Is.", "Island");
          case 411:
            word = word.replace("Ave.", "Avenue");
            if (word.indexOf("Expwy.") < 0){
              word = word.replace("Expwy", "Expressway");
            }
            return word;
          case 412:
            if (word.indexOf("SIC.") < 0){
              word = word.replace("SIC", "Smart Interchange");
            }
            if (word.indexOf("IC.") < 0){
              word = word.replace("IC", "Interchange");
            }
            if (word.indexOf("PA.") < 0){
              word = word.replace("PA", "Parking Area");
            }
            if (word.indexOf("SA.") < 0){
              word = word.replace("SA", "Service Area");
            }
            if (word.indexOf("JCT.") < 0){
              word = word.replace("JCT", "Junction");
            }
            return word;
          case 421:
            if (word.indexOf("Rwy.") < 0){
              return word.replace(" Rwy", " Railway");
            }
            return word;
          default:
            return word;
        }
      }
      else if (ftCode == 50100){
        if (typeof annoCtg === undefined) return word;

        switch(annoCtg){
          case 321:
            return word.replace("L.", "Lake");
          case 322:
            return word.replace("R.", "River");
          case 343:
            return word.replace("C.", "Cape ");
          case 346:
            return word.replace("Pen.", "Peninsula ");
          case 352:
            return word.replace("Is.", "Island");
          case 333:
            word = word.replace("MtR.", "Mountain Range");
            if (word.indexOf("Mts.") < 0){
              return word.replace("Mts", "Mountains");
            }
            return word;
          default:
            return word;
        }
      }
      else if (ftCode == 2930){
        return word.replace("Sta.", "Station");
      }
      else if (ftCode == 3232){
        return word.replace("(Temple)", "");
      }
      else{
        return word;
      }
    }
    else{
      return word;
    }
  }
}
}
