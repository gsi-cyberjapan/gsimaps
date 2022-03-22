
if(!GSI) GSI = {};
if(!GSI.GLOBALS)  GSI.GLOBALS = {};  

GSI.GLOBALS.toFr = function(word, ftCode, annoCtg){
	var res = "";
	var search = "";
	var rep = "";

	if (ftCode != 3232){
		word = word.replace(/\(.*?\)/, "");
		word = word.replace(/（.*?）/, "");
	}

	var ac = annoCtg.substr(annoCtg.length - 3, 3);
	switch(ac){
		case "311":
		case "312":
		case "314":
		case "315":
		case "316":
		search = "Mt.";
		rep = "Mont";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		break;
		case "333":
		var searchs333 = ["Mountain Range", "Mountains", "MtR.", "Mts", "MTR.", "MTS"];
		rep = "Monts";
		for(var i = 0; i < searchs333.length; i++){
			res = GSI.GLOBALS.toFr_xx(word, searchs333[i], rep, true);
			if (word != res){
				break;
			}
		}
		if (word == res){
			search = "Mt.";
			rep = "Mont";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "322":
		search = "River";
		rep = "Fleuve";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "R.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Riv.";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			}
		}
		break;
		case "321":
		search = "Lake";
		rep = "Lac";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		if (word == res){
			search = "L.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		}
		if (word == res){
			search = "Pond";
			rep ="Étang"
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "323":
		search = "Waterfall";
		rep = "Cascade de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		break;
		case "343":
		search = "Cape";
		rep = "Cap";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		if (word == res){
			search = "C.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		}
		break;
		case "347":
		search = "Beach";
		rep = "Plage";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "B.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "331":
		var searchs331 = ["Highland","Hld.","Hills","Hls","Plateau","Plat.","Marsh"];
		var reps = ["Plateau","Plateau","Collines","Collines","Plateau","Plateau","Marais"];
		for(var i = 0; i < searchs331.length; i++){
			res = GSI.GLOBALS.toFr_xx(word, searchs331[i], reps[i], true);
			if (word == res){
				res = GSI.GLOBALS.toFr_xx(word, searchs331[i], reps[i], true);
			}
			else{
				break;
			}
		}
		break;
		case "332":
		search = "Pass";
		rep = "Col";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "P.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "334":
		search = "Basin";
		rep = "Bassin";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Plain";
			rep = "Plaine";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Pl.";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			}
		}
		break;
		case "346":
		search = "Peninsula";
		rep = "Péninsule";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Pen.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		if (word == res){
			search = "PEN.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "345":
		search = "Bay";
		rep = "Baie de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Strait";
			rep = "Détroit de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);

			if (word == res){
				search = "Sea";
				rep = "Mer de";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
				
			}
		}
		break;
		
		case "351":
		if (word == "The Senkaku Islands"){
			return "Îles Senkaku";
		}
		search = "Islands";
		rep = "Îles";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Iss";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		if (word == res){
			search = "Island";
			rep = "Île de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;

		case "352":
		search = "Islands";
		rep = "Îles";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Iss";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		if (word == res){
			search = "Island";
			rep = "Île de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		if (word == res){
			search = "Is.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		
		case "353":
		search = "Island";
		rep = "Île de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		break;
		
		case "344":
		var lword = word.toLowerCase();
		var ptb = ["sea of japan","north pacific ocean","east china sea","sea of okhotsk"];
		var xtb = ["Mer du Japon","Océan Pacifique Nord","Mer de Chine orientale","Mer d'Okhotsk"];
		for(var i = 0; i < ptb.length; i++){
		  if (ptb[i] == lword){
			return xtb[i];
		  }
		}
	
		search = "Sea";
		rep = "Mer de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "SEA";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;

		case "353":
		search = "Coral reef";
		rep = "Récif Corallien";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Reef";
			rep = "Récif";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "140":
		search = "Metropolis";
		rep = "Métropole de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Prefecture";
			rep = "Prefécture de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "110":
		search = "City";
		rep = "Ville de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Ward";
			rep = "Arr. de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Town";
				rep = "Bourg de";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
				if (word == res){
					search = "Village";
					rep = "Village de";
					res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
				}
			}
		}
		break;
		case "411":
		if (word =="cycle route"){
			res = "itinéraire cyclable";
			break;
		}
		var searchs411 = ["cycle route","Toll Road","Bridge","Brg.","Tunnel","Tnl.","Road","road","Route","route","St.","Ave.","Expressway","Expwy","Nature Trail"];
		var reps411 = ["itinéraire cyclable de","Route à Péage de","Pont de","Pont de","Tunnel de","Tunnel de","Route de","Route de","Route de","Route de","Rue de","Rue de","Autoroute de","Autoroute de","Sentier Nature de"];
		for(var i = 0; i < searchs411.length; i++){
			res = GSI.GLOBALS.toFr_xx(word, searchs411[i], reps411[i], true);
			if (res != word){
				break;
			}
		}
		break;

		case "422":
		search = "Station";
		rep = "Gare de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Sta.";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "421":
		res = GSI.GLOBALS.toFr_421(word);
		break;
		case "441":
		search = "International Airport";
		rep = "Aéroport international de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		if (word == res){
			search = "Airport";
			rep = "Aéroport de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		}
		break;
		case "431":
		search = "Port";
		rep = "Port de";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
		break;

		case "150":
		search = "Japan";
		rep = "Japon";
		res = GSI.GLOBALS.toFr_xx(word, search, rep, false);
		break;
		default:
		res = word;
		break;
	}

	if (res == word){
		switch (ftCode) {
			case 3207:
			search = "Prefecture";
			rep = "Prefécture de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			break;

			case 3205:
			case 3206:
			search = "City";
			rep = "Ville de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Ward";
				rep = "Arr. de";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
				if (word == res){
					search = "Town";
					rep = "Bourg de";
					res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
					if (word == res){
						search = "Village";
						rep = "Village de";
						res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
					}
				}
			}
			break;
			case 2930:
			search = "Station";
			rep = "Gare de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Sta.";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			}
			break;

			case 3231:
			search = "Shrine";
			rep = "Sanctuaire de";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			break;

			case 3232:
			if (word.indexOf("(Temple)") < 0){
				search = "Temple";
				rep = "Temple de";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			}
			else{
				res = word;
			}
			break;

			case 3208:
			search = "General Subprefectural Bureau";
			rep = "Bureau sous-préfectoral général";
			res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			if (word == res){
				search = "Subprefectural Bureau";
				rep = "Bureau sous-préfectoral";
				res = GSI.GLOBALS.toFr_xx(word, search, rep, true);
			}
			break;

		}
	}
	return res;
};
GSI.GLOBALS.toFr_xx = function(word, search, replaceword, rev){
	var s = word.indexOf(search);
	var remainword;
	var aiu = "aiueoAIUEO";
	if (s >= 0){
		remainword = word.replace(search, "").trim();

		if (rev == true){
			if ((GSI.GLOBALS.endsWith(replaceword, "de") == true ) && (aiu.indexOf(remainword.charAt(0)) >= 0)){
				return replaceword.substr(0, replaceword.length - 1) + "'" + remainword;
			}
			else{
				return replaceword + " " + remainword;
			}
		}
		else{
			if (s == 0){
				return replaceword + " " + remainword;
			}
			else{
				return remainword + " " + replaceword;
			}
		}
	}
	else{
		return word;
	}
};

GSI.GLOBALS.toFr_421 = function(word){
	var words = word.split(" ");
	var res = "";
	var r = -1, l = -1;

	for(var i = 0 ; i < words.length; i++){
		if ( (words[i] == "Railway") || (words[i] == "Rwy") ){
			r = i;
		}
		if (words[i] == "Line"){
			l = i;
		}
	}

	var rwpart = "";
	for(var j = 0; j < r; j++){
		rwpart += " " + words[j];
	}
	var lpart = "";
	for(var k = r >= 0? r + 1 : 0; k < l; k++){
		lpart += " " + words[k];
	}

	if (rwpart != ""){
		res = "Chemin de fer " + rwpart;
	}
	if (lpart != ""){
		if (rwpart != ""){
			res += ", "
		}
		res += "Ligne de" + lpart;
	}
	if ( (lpart == "") && (rwpart == "") ){
		res = word;
	}

	if (res.indexOf("North") >= 0){
		res = res.replace("North", "Nord");
	}
	if (res.indexOf("South") >= 0){
		res = res.replace("South", "Sud");
	}
	if (res.indexOf("East") >= 0){
		res = res.replace("East", "Est");
	}
	if (res.indexOf("West") >= 0){
		res = res.replace("West", "Ouest");
	}
	if (res.indexOf("Electric") >= 0){
		res = res.replace("Electric", "Électrique");
	}
	if (res.indexOf("Exp.") >= 0){
		res = res.replace("Exp.", "Express");
	}
	return res;
};

GSI.GLOBALS.toKr_base = function(sound){
	//語頭
	var kanall = ["ああ","いい","うう","おう","くう","こう","すう","そう","つう","とう","ぬう","のう","ふう","ほう","むう","もう","ゆう","よう","るう","ろう","ぐう","ごう","ずう","ぞう","づう","どう","ぶう","ぼう","ぷう","ぽう","おお","こお","そお","とお","のお","ほお","もお","ろお","きゅう","しゅう","ちゅう","にゅう","ひゅう","みゅう","りゅう","ぎゅう","じゅう","びゅう","ぴゅう","きょう","しょう","ちょう","にょう","ひょう","みょう","りょう","ぎょう","じょう","びょう","ぴょう","きゃっ","きゅっ","きょっ","しゃっ","しゅっ","しょっ","ちゃっ","ちゅっ","ちょっ","にゃっ","にゅっ","にょっ","ひゃっ","ひゅっ","ひょっ","みゃっ","みゅっ","みょっ","りゃっ","りゅっ","りょっ","ぎゃっ","ぎゅっ","ぎょっ","じゃっ","じゅっ","じょっ","びゃっ","びゅっ","びょっ","ぴゃっ","ぴゅっ","ぴょっ","あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ","あん","いん","うん","えん","おん","かん","きん","くん","けん","こん","さん","しん","すん","せん","そん","たん","ちん","つん","てん","とん","なん","にん","ぬん","ねん","のん","はん","ひん","ふん","へん","ほん","まん","みん","むん","めん","もん","やん","ゆん","よん","らん","りん","るん","れん","ろん","わん","をん","がん","ぎん","ぐん","げん","ごん","ざん","じん","ずん","ぜん","ぞん","だん","ぢん","づん","でん","どん","ばん","びん","ぶん","べん","ぼん","ぱん","ぴん","ぷん","ぺん","ぽん","あっ","いっ","うっ","えっ","おっ","かっ","きっ","くっ","けっ","こっ","さっ","しっ","すっ","せっ","そっ","たっ","ちっ","つっ","てっ","とっ","なっ","にっ","ぬっ","ねっ","のっ","はっ","ひっ","ふっ","へっ","ほっ","まっ","みっ","むっ","めっ","もっ","やっ","ゆっ","よっ","らっ","りっ","るっ","れっ","ろっ","わっ","をっ","がっ","ぎっ","ぐっ","げっ","ごっ","ざっ","じっ","ずっ","ぜっ","ぞっ","だっ","ぢっ","づっ","でっ","どっ","ばっ","びっ","ぶっ","べっ","ぼっ","ぱっ","ぴっ","ぷっ","ぺっ","ぽっ","１","２","３","４","５","６","７","８","９","０","1","2","3","4","5","6","7","8","9","0","ん","きゃん","ちゃん","・","っす","きゅん","きょん","しゃん","しゅん","しょん","ちゅん","ちょん","ひゃん","ひゅん","ひょん","じゃん","じゅん","じょん","ぢゅう","ぢょう","りーん","わぁっ","うぇん","うぇい","てぃっ","たーん","ふぁ","ふぃ","ふぅ","ふぇ","ぶゅ","ほぅ","ちぇ","うぇ","とぅ","どぅ","てぃ","でぃ","ぢゃ","くぅ","すぃ","むぃ","ヴィ","わぁ","しぇ","しい","にい"];
	var hnglll = ["아","이","우","오","구","고","스","소","쓰","도","누","노","후","호","무","모","유","요","루","로","구","고","즈","조","즈","도","부","보","푸","포","오","고","소","도","노","호","모","로","규","슈","주","뉴","휴","뮤","류","규","주","뷰","퓨","교","쇼","조","뇨","효","묘","료","교","조","뵤","표","캿","큣","쿗","샷","슛","숏","찻","춧","촛","냣","늇","뇻","햣","흇","횻","먓","뮷","묫","럇","륫","룟","걋","귯","굣","잣","줏","좃","뱟","븃","뵷","퍗","퓻","푯","아","이","우","에","오","가","기","구","게","고","사","시","스","세","소","다","지","쓰","데","도","나","니","누","네","노","하","히","후","헤","호","마","미","무","메","모","야","유","요","라","리","루","레","로","와","오","가","기","구","게","고","자","지","즈","제","조","다","지","즈","데","도","바","비","부","베","보","파","피","푸","페","포","갸","규","교","샤","슈","쇼","자","주","조","냐","뉴","뇨","햐","휴","효","먀","뮤","묘","랴","류","료","갸","규","교","자","주","조","뱌","뷰","뵤","퍄","퓨","표","안","인","운","엔","온","간","긴","군","겐","곤","산","신","슨","센","손","단","진","쓴","덴","돈","난","닌","눈","넨","논","한","힌","훈","헨","혼","만","민","문","멘","몬","얀","윤","욘","란","린","룬","렌","론","완","온","간","긴","군","겐","곤","잔","진","즌","젠","존","단","진","즌","덴","돈","반","빈","분","벤","본","판","핀","푼","펜","폰","앗","잇","웃","엣","옷","갓","깃","굿","겟","곳","삿","싯","슷","셋","솟","닷","짓","씃","뎃","돗","낫","닛","눗","넷","놋","핫","힛","훗","헷","홋","맛","밋","뭇","멧","못","얏","윳","욧","랏","릿","룻","렛","롯","왓","옷","갓","깃","굿","겟","곳","잣","짓","즛","젯","좃","닷","짓","즛","뎃","돗","밧","빗","붓","벳","봇","팟","핏","풋","펫","폿","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","은","갼","잔","・","쑤","균","굔","샨","슌","숀","준","존","햔","휸","횬","쟌","쥰","죤","쥬","죠","린","왓","웬","웨","딧","단","햐","휘","휴","훼","뷰","후","제","웨","두","두","디","디","자","구","쉬","뮈","뷔","와","쉐","시","니"];

	//語中・語尾
	var kanamm = ["ああ","いい","うう","おう","くう","こう","すう","そう","つう","とう","ぬう","のう","ふう","ほう","むう","もう","ゆう","よう","るう","ろう","ぐう","ごう","ずう","ぞう","づう","どう","ぶう","ぼう","ぷう","ぽう","おお","こお","そお","とお","のお","ほお","もお","ろお","きゅう","しゅう","ちゅう","にゅう","ひゅう","みゅう","りゅう","ぎゅう","じゅう","びゅう","ぴゅう","きょう","しょう","ちょう","にょう","ひょう","みょう","りょう","ぎょう","じょう","びょう","ぴょう","きゃっ","きゅっ","きょっ","しゃっ","しゅっ","しょっ","ちゃっ","ちゅっ","ちょっ","にゃっ","にゅっ","にょっ","ひゃっ","ひゅっ","ひょっ","みゃっ","みゅっ","みょっ","りゃっ","りゅっ","りょっ","ぎゃっ","ぎゅっ","ぎょっ","じゃっ","じゅっ","じょっ","びゃっ","びゅっ","びょっ","ぴゃっ","ぴゅっ","ぴょっ","あ","い","う","え","お","か","き","く","け","こ","さ","し","す","せ","そ","た","ち","つ","て","と","な","に","ぬ","ね","の","は","ひ","ふ","へ","ほ","ま","み","む","め","も","や","ゆ","よ","ら","り","る","れ","ろ","わ","を","が","ぎ","ぐ","げ","ご","ざ","じ","ず","ぜ","ぞ","だ","ぢ","づ","で","ど","ば","び","ぶ","べ","ぼ","ぱ","ぴ","ぷ","ぺ","ぽ","きゃ","きゅ","きょ","しゃ","しゅ","しょ","ちゃ","ちゅ","ちょ","にゃ","にゅ","にょ","ひゃ","ひゅ","ひょ","みゃ","みゅ","みょ","りゃ","りゅ","りょ","ぎゃ","ぎゅ","ぎょ","じゃ","じゅ","じょ","びゃ","びゅ","びょ","ぴゃ","ぴゅ","ぴょ","あん","いん","うん","えん","おん","かん","きん","くん","けん","こん","さん","しん","すん","せん","そん","たん","ちん","つん","てん","とん","なん","にん","ぬん","ねん","のん","はん","ひん","ふん","へん","ほん","まん","みん","むん","めん","もん","やん","ゆん","よん","らん","りん","るん","れん","ろん","わん","をん","がん","ぎん","ぐん","げん","ごん","ざん","じん","ずん","ぜん","ぞん","だん","ぢん","づん","でん","どん","ばん","びん","ぶん","べん","ぼん","ぱん","ぴん","ぷん","ぺん","ぽん","あっ","いっ","うっ","えっ","おっ","かっ","きっ","くっ","けっ","こっ","さっ","しっ","すっ","せっ","そっ","たっ","ちっ","つっ","てっ","とっ","なっ","にっ","ぬっ","ねっ","のっ","はっ","ひっ","ふっ","へっ","ほっ","まっ","みっ","むっ","めっ","もっ","やっ","ゆっ","よっ","らっ","りっ","るっ","れっ","ろっ","わっ","をっ","がっ","ぎっ","ぐっ","げっ","ごっ","ざっ","じっ","ずっ","ぜっ","ぞっ","だっ","ぢっ","づっ","でっ","どっ","ばっ","びっ","ぶっ","べっ","ぼっ","ぱっ","ぴっ","ぷっ","ぺっ","ぽっ","１","２","３","４","５","６","７","８","９","０","1","2","3","4","5","6","7","8","9","0","・","いゃ","きゃん","きゅん","きょん","しゃん","しゅん","しょん","ちゃん","ちゅん","ちょん","ひゃん","ひゅん","ひょん","じゃん","じゅん","じょん","ぢゅう","ぢょう","りーん","わぁっ","うぇん","うぇい","てぃっ","たーん","ふぁ","ふぃ","ふぅ","ふぇ","ぶゅ","ほぅ","ちぇ","うぇ","とぅ","どぅ","てぃ","でぃ","ぢゃ","くぅ","すぃ","むぃ","ヴィ","わぁ","しぇ","しい","にい"];
	var hngmmm = ["아","이","우","오","쿠","코","스","소","쓰","토","누","노","후","호","무","모","유","요","루","로","구","고","즈","조","즈","도","부","보","푸","포","오","코","소","토","노","호","모","로","큐","슈","추","뉴","휴","뮤","류","규","주","뷰","퓨","쿄","쇼","초","뇨","효","묘","료","교","조","뵤","표","캿","큣","쿗","샷","슛","숏","찻","춧","촛","냣","늇","뇻","햣","흇","횻","먓","뮷","묫","럇","륫","룟","걋","귯","굣","잣","줏","좃","뱟","븃","뵷","퍗","퓻","푯","아","이","우","에","오","카","키","쿠","케","코","사","시","스","세","소","타","치","쓰","테","토","나","니","누","네","노","하","히","후","헤","호","마","미","무","메","모","야","유","요","라","리","루","레","로","와","오","가","기","구","게","고","자","지","즈","제","조","다","지","즈","데","도","바","비","부","베","보","파","피","푸","페","포","캬","큐","쿄","샤","슈","쇼","차","추","초","냐","뉴","뇨","햐","휴","효","먀","뮤","묘","랴","류","료","갸","규","교","자","주","조","뱌","뷰","뵤","퍄","퓨","표","안","인","운","엔","온","칸","킨","쿤","켄","콘","산","신","슨","센","손","탄","친","쓴","텐","톤","난","닌","눈","넨","논","한","힌","훈","헨","혼","만","민","문","멘","몬","얀","윤","욘","란","린","룬","렌","론","완","온","간","긴","군","겐","곤","잔","진","즌","젠","존","단","진","즌","덴","돈","반","빈","분","벤","본","판","핀","푼","펜","폰","앗","잇","웃","엣","옷","캇","킷","쿳","켓","콧","삿","싯","슷","셋","솟","탓","칫","씃","텟","톳","낫","닛","눗","넷","놋","핫","힛","훗","헷","홋","맛","밋","뭇","멧","못","얏","윳","욧","랏","릿","룻","렛","롯","왓","옷","갓","깃","굿","겟","곳","잣","짓","즛","젯","좃","닷","짓","즛","뎃","돗","밧","빗","붓","벳","봇","팟","핏","풋","펫","폿","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","・","야","캰","큔","쿈","샨","슌","숀","챤","츈","쵼","햔","휸","횬","쟌","쥰","죤","쥬","죠","린","왓","웬","웨","팃","탄","햐","휘","휴","훼","뷰","후","체","웨","투","두","티","디","자","쿠","쉬","뮈","뷔","와","쉐","시","니"];

	var res = "";
	var c,n;
	var skip;
	var wd;

	for (var i = sound.length - 1; i >= 0; i--) {
		skip = 0;
		c = sound.substring(i - 2, i + 1);
		if(kanamm.indexOf(c) != -1){
			n = kanamm.indexOf(c);
			res += hngmmm[n];
			wd = c.length;
			skip = -2;
		}else{
			c = sound.substring(i - 1, i + 1);
			if(kanamm.indexOf(c) != -1){
				n = kanamm.indexOf(c);
				res += hngmmm[n];
				wd = c.length;
				skip = -1;
			}else{
				c = sound.substring(i, i + 1);
				n = kanamm.indexOf(c);
				if (n != -1){
					res += hngmmm[n];
					wd = c.length;
				}
				else{
					//res+=c;
				}
				skip = 0;
			}
		}
		i += skip;
	}
	var head = sound.substr(0, wd);
	var revres = "";
	for(var x = res.length - 1; x >=0; x--){
		revres += res[x];
	}
	n = kanall.indexOf(head);
	if (n != -1){
		res = hnglll[n] + revres.substring(1)
	}
	return res;
};

GSI.GLOBALS.exKr = function(word, sound, ftCode, annoCtg){
	var k = "";
	var krwd = "";

	word = word.replace(/\(.*?\)/, "")
	word = word.replace(/（.*?）/, "")
	sound = sound.replace(/\(.*?\)/, "")
	sound = sound.replace(/（.*?）/, "")

	annoCtg.length > 3 ? k = annoCtg.substring(1, 3) : k = annoCtg;
	if (k != ""){
		switch(k){
			case "110":krwd = GSI.GLOBALS.toKr110(word, sound);
			break;
			case "140":krwd = GSI.GLOBALS.toKr140(word, sound);
			break;
			case "150":krwd = GSI.GLOBALS.toKr150(word, sound);
			break;
			case "311":
			case "312":
			case "314":
			case "315":
			case "316":krwd = GSI.GLOBALS.toKr31X(word, sound);
			break;
			case "321":krwd = GSI.GLOBALS.toKr321(word, sound);
			break;
			case "322":krwd = GSI.GLOBALS.toKr322(word, sound);
			break;
			case "323":krwd = GSI.GLOBALS.toKr323(word, sound);
			break;
			case "333":krwd = GSI.GLOBALS.toKr333(word, sound);
			break;
			case "334":krwd = GSI.GLOBALS.toKr334(word, sound);
			break;
			case "331":krwd = GSI.GLOBALS.toKr331(word, sound);
			break;
			case "332":krwd = GSI.GLOBALS.toKr332(word, sound);
			break;
			case "344":krwd = GSI.GLOBALS.toKr344(word, sound);
			break;
			case "345":krwd = GSI.GLOBALS.toKr345(word, sound);
			break;
			case "346":krwd = GSI.GLOBALS.toKr346(word, sound);
			break;
			case "347":krwd = GSI.GLOBALS.toKr347(word, sound);
			break;
			case "343":krwd = GSI.GLOBALS.toKr343(word, sound);
			break;
			case "351":krwd = GSI.GLOBALS.toKr351(word, sound);
			break;
			case "352":krwd = GSI.GLOBALS.toKr352(word, sound);
			break;
			case "353":krwd = GSI.GLOBALS.toKr353(word, sound);
			break;
			case "411":krwd = GSI.GLOBALS.toKr411(word, sound);
			break;
			case "412":krwd = GSI.GLOBALS.toKr412(word, sound);
			break;
			case "421":krwd = GSI.GLOBALS.toKr421(word, sound);
			break;
			case "422":krwd = GSI.GLOBALS.toKr422(word, sound);
			break;
			case "431":krwd = GSI.GLOBALS.toKr431(word, sound);
			break;
			case "441":krwd = GSI.GLOBALS.toKr441(word, sound);
			break;
			default:krwd = GSI.GLOBALS.toKr_base(sound);
			break;

		}
	}
	else{
		k = ftCode;
		switch(k){
			case 3205:
			case 3206:
			krwd = GSI.GLOBALS.toKr110(word, sound);
			break;
			case 3207:krwd = GSI.GLOBALS.toKr140(word, sound);
			break;
			case 2930:krwd = GSI.GLOBALS.toKr422(word, sound);
			break;
			case 3231:krwd = GSI.GLOBALS.toKrFt3231(word, sound)
			break;
			case 3232:krwd = GSI.GLOBALS.toKrFt3232(word, sound)
			break;
			case 3208:krwd = GSI.GLOBALS.toKrFt3208(word, sound)
			break;
			case 1401:
			case 1402:
			case 1403:
			case 51301:
			case 2910:
				krwd = GSI.GLOBALS.toKr_base(sound);
				break;
			default:
				krwd ="";
			break;
		}
	}

	return krwd;
};
GSI.GLOBALS.toKrFt3231 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "じんじゃ"){
		esk = "신사";
	}
	else if (es == "じんぐう"){
		esk = "신사";
	}
	else{
		es = "";
		esk = "신사";
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;

};
GSI.GLOBALS.toKrFt3232 = function(word, sound){
	if (sound == "てら"){
		return "（절）";
	}

	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if (es == "てら"){
		esk = "사";
	}
	else if (es == "でら"){
		esk = "사";
	}
	else{
		es = sound.substr(sound.length - 1, 1);
		if (es == "じ"){
			esk = "사";
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;

};
GSI.GLOBALS.toKrFt3208 = function(word, sound){
	var es = sound.substr(sound.length - 11, 11);
	var esk = "";

	if (es == "そうごうしんこうきょく"){
		esk = "종합진흥국";
	}
	else { es = sound.substr(sound.length - 7, 7);
		if (es == "しんこうきょく"){
			esk = "진흥국";
	     	}
		else{
			es = "";
			esk = "";
			}
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;

};
GSI.GLOBALS.toKr150 = function(word, sound){
	var es = sound.substr(sound.length - 5, 5);
		var esk = "";
		if (es == "にほんこく"){
			esk = "일본국";
		}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);
	return base + esk;
};

GSI.GLOBALS.toKr140 = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if (es == "けん"){
		esk = "현";
	}
	else if (es == "どう"){
		esk = "도";
	}
	else{
		es = sound.substr(sound.length - 1, 1);
		if (es == "と"){
			//京都と都の区別
			if (word !="京都"){
				esk = "도";
			}
			else{
				es ="";
			}

		}
		else if (es == "ふ"){
			//岐阜と府の区別
			if (word != "岐阜"){
				esk = "부";
			}
			else{
				es = "";
			}
		}
		else{
			es = "";
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};

GSI.GLOBALS.toKr110 = function(word, sound){
	var es = sound.substr(sound.length - 1, 1);
	var esk = "";

	if (es == "し"){
		esk = "시";
	}
	else if (es == "く"){
		esk = "구";
	}
	else{
		es = sound.substr(sound.length - 2, 2);
		if (es == "まち"){
			esk = "정";
		}
		else if(es == "そん"){
			esk = "촌";
		}
		else if(es == "むら"){
			esk = "촌";
		}
		else{
			es = sound.substr(sound.length - 3, 3);
			if (es == "ちょう"){
				esk = "정";
			}
			else{
				es = "";
			}
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr31X = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "やまさんざんたけだけ";

	if (esk.indexOf(es) >= 0){
		esk = "산";
	}
	else{
		es = "";
		esk = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var ss = word.substr(word.length -2 ,1);
	if ( (esk != "") && ((ss == "っ") || (ss == "ヶ")) ){
		ep = sound;
	}

	if  (word.length == 2){
		ep = sound;
	}
	var search31x = "峯峰嶺";
	es = word.substr(word.length - 1, 1);
	if (search31x.indexOf(es) >= 0){
		ep = sound;
		esk = "산";
	}
	else{
		search31x = "せんぜん";
		es = sound.substr(sound.length - 2, 2);
		if (search31x.indexOf(es) >= 0){
			ep = sound;
			esk = "산";
		}
	}

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr321 = function(word, sound){
	var es = sound.substr(sound.length - 1, 1);
	var esw = word.substr(word.length - 1, 1);
	var esk = "";

	if ((es == "こ") || (esw == "浦") || (esw == "沼")){
		esk = "호";
	}
	else{
		if (sound.endsWith("ちょすいち") == true){
			esk = "저수지";
			es = sound.substr(sound.length - 5, 5);
		}
		else{
			es = "";

		}
	}


	if (esw == "浦"){
		es = sound.substr(sound.length - 2, 2);
	}
	else if (esw == "沼"){
		es = sound.substr(sound.length - 2, 2);
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var ss = word.substring(word.length -2 ,word.length - 1);
	if ((es == "こ") && ( (ss == "っ") || (ss == "ヶ") )){
		ep = sound;
	}

	if ((esw == "浦") || (esw == "沼") ||  (word.length == 2)){
		ep = sound;
	}

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr322 = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if ( (es == "がわ") || (es == "かわ") ){
		esk = "강";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var ss = word.substr(word.length -2, 1);
	if ( (ss == "ヶ") && ((es == "がわ") || (es == "かわ")) ){
		ep = sound;
	}

	if  (word.length == 2){
		ep = sound;
	}

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr323 = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if ( (es == "たき") || (es == "だき") ){
		esk = "폭포";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var ss = word.substr(word.length -2, 1);
	if ( (es != "") && ((ss == "ヶ") || (ss == "大") || (ss == "ノ")) ){
		ep = sound;
	}

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr333 = function(word, sound){
	var es = sound.substr(sound.length - 5, 5);
	var esk = "";

	if (es == "さんみゃく"){
		esk = "산맥";
	}
	else{
		es = sound.substr(sound.length - 3, 3);
		if (es == "さんち"){
			esk="산지";
		}
		else if (es == "こうち"){
			esk="산지";
		}
		else{
			es = sound.substr(sound.length - 4, 4);
			if (es == "れんざん"){
				esk="산지";
			}
			else{
				es = sound.substr(sound.length - 2, 2);
				if (es == "やま"){
					esk = "산지";
				}
				else{
					es = "";
				}
			}
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr334 = function(word, sound){
	var es = sound.substr(sound.length - 3, 3);
	var esk = "";

	if (es == "へいや"){
		esk = "평야";
	}
	else if (es == "げんや"){
		esk = "평야";
	}
	else if (es == "ぼんち"){
		esk = "분지";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr331 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "こうげん"){
		esk = "고원";
	}
	else if (es == "しつげん"){
		esk = "습원";
	}
	else{
		es = sound.substr(sound.length - 6, 6);
		if (es == "きゅうりょう"){
			esk = "구릉";
		}
		else{
			es = sound.substr(sound.length - 3, 3);
			if (es == "だいち"){
				esk = "대지";
			}
			else{
				es = "";
			}
		}
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr332 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "おんせん"){
		esk = "온천";
	}
	else{
		es = sound.substr(sound.length - 3, 3);
		if (es == "とうげ"){
			
			esk = "고개";
		}
		else{
			es = "";
		}

	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var ss = word.substr(word.length -2, 1);
	if ( (es == "とうげ") && (ss == "ヶ") ){
		ep = sound;
	}
	
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr345 = function(word, sound){
	var es = sound.substr(sound.length - 5, 5);
	var esk = "";

	if (word == "羽地内海"){
		es = "";
		esk = "해";
	}
	else{
		if (es == "かいきょう"){
			esk = "해협";
		}
		else{
			es = sound.substr(sound.length - 2, 2);
			if (es == "わん"){
				esk = "만";
			}
			else{
				es = word.substr(word.length -2, 2);
				if ( (es == "瀬戸") || (es == "水道") ){
					es = "";
					esk = "해협";
				}
				else{
					es = "";
				}
			}

		}
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr346 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "はんとう"){
		esk = "반도";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr347 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "かいがん"){
		esk = "해안";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr343 = function(word, sound){
	var es = sound.substr(sound.length - 3, 3);
	var esk = "";

	if (es == "みさき"){
		esk = "곳";
	}
	else{
		es = "";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var ss = word.substr(word.length -2, 1);
	if ((es == "みさき") && (ss == "ヶ")){
		ep = sound;
	}
	else{
		es = word.substr(word.length - 1, 1)
		if ((es == "崎") || (es == "﨑") || (es == "鼻") || (es == "埼")){
			ep = sound;
			esk = "곳";
		}
	} 

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr344 = function(word, sound){

	var ess = ["北太平洋","日本海","東シナ海","オホーツク海"];
	var kess = ["북태평양","일본해","동중국해","오호츠크해"];

	for(var i = 0; i < ess.length; i++){
		if (ess[i] == word){
			return kess[i];
		 }
	}
	
	var es = "";
	var esk = "";
	
	es = sound.substr(sound.length - 2, 2);
	if (es == "かい"){
		esk = "해";
	}
	else{
		es = "";
	}

	if (word == "瀬戸内海"){
		es = "";
		esk = "해";
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	es = sound.substr(sound.length - 2, 2);
	if (es == "なだ"){
		ep = sound;
		esk = "해";
	}
	
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};

GSI.GLOBALS.toKr351 = function(word, sound){
	var es = sound.substr(sound.length - 4, 4);
	var esk = "";

	if (es == "ぐんとう"){
		esk = "군도";
	}
	else if (es == "れっとう"){
		esk="열도";
	}
	else if (es == "しょとう"){
		esk="제도";
	}
	else{
		return GSI.GLOBALS.toKr352(word, sound);
	}
    var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr352 = function(word, sound){
	var es = "";
	var esk = "";

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);

	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;

};
GSI.GLOBALS.toKr353 = function(word, sound){
	var es = sound.substr(sound.length - 6, 6);
	var esk = "";

	if (es == "さんごしょう"){
		esk = "산호초";
	}
	else{
		es = sound.substr(sound.length - 3, 3);
		if (es == "しょう"){
			esk = "초";
		}
		else{
			es = "";
		}
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr411 = function(word, sound){
	var es = "";
	var esk = "";
	var ess=["こうそくどうろ","じどうしゃどう","しぜんほどう","じてんしゃせんようどうろ","じてんしゃどう","とおり","せん","ばし","きょう","おおはし","とんねる","どうろ","ずいどう","かいどう"];
	var kess=["고속도로","자동차도","자연산책로","자전거전용도로","자전거전용도로","거리","선","대교","대교","대교","터널","도로","터널","가도"];

	for(var i = 0; i < ess.length; i++){
		es = sound.substr(sound.length - ess[i].length, ess[i].length);
		if (es == ess[i]){
			esk = kess[i];
			break;
		}
	}
	if (esk == ""){
		es = "";
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr412 = function(word, sound){
	var es = "";
	var esk = "";

	var ess = ["ＪＣＴ・ＩＣ","ＳＡＳＩＣ","ＳＩＣ","ＩＣ","ＪＣＴ","ＳＡ","ＰＡ","じゃんくしょん・いんたーちぇんじ","すまーといんたーちぇんじ","いんたーちぇんじ","じゃんくしょん","さーびすえりあ","ぱーきんぐえりあ"];
	var kess = ["분기점・나들목","휴게소・스마트나들목","스마트나들목","나들목","분기점","휴게소","휴게소","분기점・나들목","스마트나들목","나들목","분기점","휴게소","휴게소"];
	for(var i = 0; i < ess.length; i++){
		if (GSI.GLOBALS.endsWith(sound, ess[i]) == true){
			es = ess[i];
			esk = kess[i];
			break;
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};

GSI.GLOBALS.toKr421 = function(word, sound){
	var es = sound.substr(sound.length - 6, 6);
	var esk = "";

	if (es == "しんかんせん"){
		esk = "신칸센";
	}
	else{
		es = sound.substr(sound.length - 4, 4);
		if (es == "てつどう"){
			esk = "철도";
		}
		else if (es == "ほんせん"){
			esk = "본선";
		}
		else if (es == "とんねる"){
			esk = "터널";
		}
		else{
			es = sound.substr(sound.length - 2, 2);
			if (es == "せん"){
				esk = "선";
			}
			else{
				es = "";
			}
		}
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr422 = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if (es == "えき"){
		esk = "역";
	}
	else{
		es = "";
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr431 = function(word, sound){
	var es = sound.substr(sound.length - 2, 2);
	var esk = "";

	if (es == "こう"){
		esk = "항";
	}
	else{
		es = "";
	}
	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};
GSI.GLOBALS.toKr441 = function(word, sound){
	var es = sound.substr(sound.length - 8, 8);
	var esk = "";

	if (es == "こくさいくうこう"){
		esk = "국제공항";
	}
	else{
		if (GSI.GLOBALS.endsWith(sound, "くうこう") == true){
			esk = "공항";
		}
		else{
			es = "";
		}
	}

	var npl = sound.length - es.length;
	var ep = sound.substr(0, npl);
	var base = GSI.GLOBALS.toKr_base(ep);

	return base + esk;
};


GSI.GLOBALS.endsWith = function(word, part){
	var x = part.length;

	if (x > word.length){
		return false;
	}
	var wp = word.substr(word.length - x, x);
	return wp == part;
};

GSI.GLOBALS.toRoma = function(word, ftCode, annoCtg){
	var res = "";	
	var ac = annoCtg.substr(annoCtg.length - 3, 3);

	if (ftCode != 3232){
		word = word.replace(/\(.*?\)/, "");
		word = word.replace(/（.*?）/, "");
	}

	switch (ac){
		case "110":
		case "120":
		res = word.replace("City", "");
		res = res.replace("Ward", "");
		res = res.replace("Town", "");
		res = res.replace("Village", "");
		break;
		case "140":
		res = word.replace("Metropolis", "");
		res = res.replace("Prefecture", "");
		break;
		case "411":
		res = word.replace("Tunnel", "Tonneru");
		res = res.replace("Bridge","");
		res = res.replace("Brg.","");
		res = res.replace("Tunnel","Tonneru");
		res = res.replace("Tnl.","Tonneru");
		res = res.replace("Road","Doro");
		res = res.replace("road","Doro");
		res = res.replace("Route","Doro");
		res = res.replace("St.","");
		res = res.replace("Ave.","");
		res = res.replace("Expressway","Jidoshado");
		res = res.replace("Expwy","Jidoshado");
		res = res.replace("Nature Trail","Shizen Hodo");
		res = res.replace("Trail","");
		res = res.replace("cycle route","Jitenshado");
		res = res.replace(/Line$/, "Sen");
		break;
		case "421":
		res = word.replace("Railway Line", "Tetsudo");
		res = res.replace("Rwy Line", "Tetsudo");
		res = res.replace("Railway", "Tetsudo");
		res = res.replace("Rwy", "Tetsudo");
		res = res.replace("Electric", "");
		res = res.replace("Main Line", "Honsen");
		res = res.replace("Exp.", "Express");
		res = res.replace("-tunnel", "-Tonneru");
		res = res.replace(/Line$/, "Sen");
		break;
		case "422":
		res = word.replace("Station", "Eki");
		res = res.replace(".Sta", "Eki");
		res = res.replace("Sta.", "Eki");
		res = res.replace("-shin-eki Station", "Shin-eki");
		res = res.replace("-shin-eki .Sta", "Shin-eki");
		break;
		case "431":
		res = word.replace("Port", "Ko");
		break;
		case "441":
		res = word.replace("International Airport", "Kokusai Kuko");
		res = res.replace("Airport", "Kuko");
		res = res.replace("Aerodrome", "Hikojo");
		break;
		default:
		res = word;
	}
		switch(ftCode){
			case 3205:
			case 3206:
			res = word.replace("City", "");
			res = res.replace("Ward", "");
			res = res.replace("Town", "");
			res = res.replace("Village", "");
			break;
			case 3207:
			res = word.replace("Metropolis", "");
			res = res.replace("Prefecture", "");
			break;
			case 2930:
			res = word.replace("Station", "Eki");
			res = res.replace(".Sta", "Eki");
			res = res.replace("Sta.", "Eki");
			res = res.replace("-shin-eki Station", "Shin-eki");
			res = res.replace("-shin-eki .Sta", "Shin-eki");
			break;
			case 3231:
			res = word.replace("Shrine", "");
			break;
			case 3232:
			res = word.replace("(Temple)", "(Tera)");
			res = res.replace("Temple", "");
			break;
			case 3208:
			res = word.replace("General Subprefectual bureau", "Sougou Shinkokyoku");
			res = res.replace("Subprefectual bureau", "Shinkokyoku");
			break;

			default:
			break;
		}
	return res;
};

GSI.GLOBALS.exSpeach = function(sound){
	var sounds = ["ＪＣＴ・ＩＣ","ＳＡＳＩＣ","ＳＩＣ","ＩＣ","ＪＣＴ","ＳＡ","ＰＡ"];
	var voices = ["じゃんくしょん・いんたーちぇんじ","さーびすえりあ・すまーといんたーちぇんじ","すまーといんたーちぇんじ","いんたーちぇんじ","じゃんくしょん","さーびすえりあ","ぱーきんぐえりあ"];

	for(var i=0; i < sounds.length; i++){
		if (sound.indexOf(sounds[i]) >= 0){
			return sound.replace(sounds[i], voices[i]);
		}
	}
	return "";
};

/*
$(document).ready( function(){
	GSI.GLOBALS.gsimaps = new GSI.GSIMaps();
	
	// test
	
} );
*/