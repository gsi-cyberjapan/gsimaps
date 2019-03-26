(function(window) {
    var HAS_HASHCHANGE = (function() {
        var doc_mode = window.documentMode;
        return ('onhashchange' in window) && (doc_mode === undefined || doc_mode > 7);
    })();

    L.Hash = function(map, options) {
        this.onHashChange = L.Util.bind(this.onHashChange, this);

        if (map) {
            this.init(map, options);
        }
    };

    L.Hash.parseHash = function(hash) {
		if(hash.indexOf('#') === 0) {
			hash = hash.substr(1);
		}
		var args = hash.split("/");
		if (args.length >= 3) {
			var zoom = parseInt(args[0], 10),
			lat = parseFloat(args[1]),
			lon = parseFloat(args[2]);
			if (isNaN(zoom) || isNaN(lat) || isNaN(lon)) {
				return false;
			} else {
				return {
					center: new L.LatLng(lat, lon),
					zoom: zoom
				};
			}
		} else {
			return false;
		}
    };

    L.Hash.formatHash = function(map) {
        var center = map.getCenter(),
            zoom = map.getZoom(),
            /////		20140109		F.MARUNO
            //		    precision = Math.max(0, Math.ceil(Math.log(zoom) / Math.LN2));

            /////		20140109		F.MARUNO
            precision = 6;
        /////		20140109		F.MARUNO
        return "#" + [zoom,
        center.lat.toFixed(precision),
        center.lng.toFixed(precision)].join("/");
    },

    L.Hash.prototype = {
        map: null,
        lastHash: null,

        parseHash: L.Hash.parseHash,
        formatHash: L.Hash.formatHash,

        options: {
            useReplace: true
        },

        init: function(map, options) {
            this.map = map;
            options = L.setOptions(this, options);
			// reset the hash
			this.lastHash    = null;
            this.callback    = null;
            this.callback_o  = null;

            this.onHashChange();

            if (!this.isListening) {
                this.startListening();
            }
        },
        bind : function(o, func){
            this.callback   = func;
            this.callback_o = o;
        },
        removeFrom: function(map) {
            if (this.changeTimeout) {
                clearTimeout(this.changeTimeout);
            }

            if (this.isListening) {
                this.stopListening();
            }

            this.map = null;
        },

        onMapMove: function() {
            // bail if we're moving the map (updating from a hash),
            // or if the map is not yet loaded
            if (this.movingMap || !this.map._loaded) {
                return false;
            }
            var f    = false;
            var hash = this.formatHash(this.map);
            
            if(this.callback != null){                
                try{
                    hash = this.callback("moveend", this.callback_o, hash);
                }
                catch(e){
                }
                f = true;
            }

            if(this.lastHash == null){
                f    = true;
                hash = location.hash;
            }

            if(f){
                if (this.lastHash != hash) {
                    if(location.hash == ""){
                        location.hash = hash;
                    }
                    else{
                        location.replace(hash);
                    }
                    this.lastHash = hash;
                }
            }
        },

        movingMap: false,
        update: function() {
            var hash = location.hash;
            if(hash === this.lastHash){
                return;
            }

            var hash_cur = ""; if(hash          !=""){ var hash_cur_ary = hash         .split("/&"); if(hash_cur_ary.length > 1){ hash_cur = hash_cur_ary[0]; } }
            var hash_prv = ""; if(this.lastHash !=""){ var hash_prv_ary = this.lastHash.split("/&"); if(hash_prv_ary.length > 1){ hash_prv = hash_prv_ary[0]; } }
            if(hash_cur != hash_prv){
                var parsed = this.parseHash(hash);
                if (parsed) {
                    this.movingMap = true;
                    this.map.setView(parsed.center, parsed.zoom,{animate:false});

                    this.movingMap = false;
                    this.onMapMove(this.map);
                } else {
                    this.onMapMove(this.map);
                }
            }

            if(this.callback != null){
                try{
                    this.callback("hashchange", this.callback_o, hash);
                }
                catch(e){
                }
            }
            this.lastHash = hash;
        },

        // defer hash change updates every 100ms
        changeDefer: 100,
        changeTimeout: null,
        onHashChange: function() {
            // throttle calls to update() so that they only happen every
            // `changeDefer` ms
            if (!this.changeTimeout) {
                var that = this;
                this.changeTimeout = setTimeout(function() {
                    that.update();
                    that.changeTimeout = null;
                }, this.changeDefer);

            }
        },

        isListening: false,
        hashChangeInterval: null,
        startListening: function() {

            this.map.on("moveend", this.onMapMove, this);

            if (HAS_HASHCHANGE) {
                L.DomEvent.addListener(window, "hashchange", this.onHashChange);
            } else {
                clearInterval(this.hashChangeInterval);
                this.hashChangeInterval = setInterval(this.onHashChange, 50);
            }
            this.isListening = true;

        },

        stopListening: function() {
            this.map.off("moveend", this.onMapMove, this);

            if (HAS_HASHCHANGE) {
                L.DomEvent.removeListener(window, "hashchange", this.onHashChange);
            } else {
                clearInterval(this.hashChangeInterval);
            }
            this.isListening = false;
        }
    };
    L.hash = function(map) {
        return new L.Hash(map);
    };
    L.Map.prototype.addHash = function() {
        this._hash = L.hash(this);
    };
    L.Map.prototype.removeHash = function() {
        this._hash.removeFrom();
    };
})(window);