"use strict";

// This file is part of Leaflet.Geodesic.
// Copyright (C) 2017  Henry Thasler
// based on code by Chris Veness Copyright (C) 2014 https://github.com/chrisveness/geodesy
//
// Leaflet.Geodesic is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Leaflet.Geodesic is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Leaflet.Geodesic.  If not, see <http://www.gnu.org/licenses/>.



/** Extend Number object with method to convert numeric degrees to radians */
if (typeof Number.prototype.toRadians === "undefined") {
  Number.prototype.toRadians = function() {
    return this * Math.PI / 180
  }
}

/** Extend Number object with method to convert radians to numeric (signed) degrees */
if (typeof Number.prototype.toDegrees === "undefined") {
  Number.prototype.toDegrees = function() {
    return this * 180 / Math.PI
  }
}

var INTERSECT_LNG = 179.999 // Lng used for intersection and wrap around on map edges

L.Geodesic = L.Polyline.extend({
  options: {
    color: "blue",
    steps: 10,
    dash: 1,
    wrap: true
  },

  initialize: function(latlngs, options) {
    this.options = this._merge_options(this.options, options)
    this.datum = {}
    this.datum.ellipsoid = {
        a: 6378137,
        b: 6356752.3142,
        f: 1 / 298.257223563
      } // WGS-84
    this._latlngs = (this.options.dash < 1) ? this._generate_GeodesicDashed(
      latlngs) : this._generate_Geodesic(latlngs)
    L.Polyline.prototype.initialize.call(this, this._latlngs, this.options)
  },

  setLatLngs: function(latlngs) {
    this._latlngs = (this.options.dash < 1) ? this._generate_GeodesicDashed(
      latlngs) : this._generate_Geodesic(latlngs)
    L.Polyline.prototype.setLatLngs.call(this, this._latlngs)
  },

  /**
   * Calculates some statistic values of current geodesic multipolyline
   * @returns (Object} Object with several properties (e.g. overall distance)
   */
  getStats: function() {
    var obj = {
        distance: 0,
        points: 0,
        polygons: this._latlngs.length
      },
      poly, points

    for (poly = 0; poly < this._latlngs.length; poly++) {
      obj.points += this._latlngs[poly].length
      for (points = 0; points < (this._latlngs[poly].length - 1); points++) {
        obj.distance += this._vincenty_inverse(this._latlngs[poly][points],
          this._latlngs[poly][points + 1]).distance
      }
    }
    return obj
  },


  /**
   * Creates geodesic lines from geoJson. Replaces all current features of this instance.
   * Supports LineString, MultiLineString and Polygon
   * @param {Object} geojson - geosjon as object.
   */
  geoJson: function(geojson) {

    var normalized = L.GeoJSON.asFeature(geojson)
    var features = normalized.type === "FeatureCollection" ? normalized.features : [
      normalized
    ]
    this._latlngs = [];
    for (var feature in features) {
      var geometry = feature.type === "Feature" ? feature.geometry :
        feature,
        coords = geometry.coordinates

      switch (geometry.type) {
        case "LineString":
          this._latlngs.push(this._generate_Geodesic([L.GeoJSON.coordsToLatLngs(
            coords, 0)]))
          break
        case "MultiLineString":
        case "Polygon":
          this._latlngs.push(this._generate_Geodesic(L.GeoJSON.coordsToLatLngs(
            coords, 1)))
          break
        case "Point":
        case "MultiPoint":
          console.log("Dude, points can't be drawn as geodesic lines...")
          break
        default:
          console.log("Drawing " + geometry.type +
            " as a geodesic is not supported. Skipping...")
      }
    }
    L.Polyline.prototype.setLatLngs.call(this, this._latlngs)
  },

  /**
   * Creates a great circle. Replaces all current lines.
   * @param {Object} center - geographic position
   * @param {number} radius - radius of the circle in metres
   */
  createCircle: function(center, radius) {
    var polylineIndex = 0
    var prev = {
      lat: 0,
      lng: 0,
      brg: 0
    }
    var step

    this._latlngs = []
    this._latlngs[polylineIndex] = []

    var direct = this._vincenty_direct(L.latLng(center), 0, radius, this.options
      .wrap)
    prev = L.latLng(direct.lat, direct.lng)
    this._latlngs[polylineIndex].push(prev)
    for (step = 1; step <= this.options.steps;) {
      direct = this._vincenty_direct(L.latLng(center), 360 / this.options
        .steps * step, radius, this.options.wrap)
      var gp = L.latLng(direct.lat, direct.lng)
      if (Math.abs(gp.lng - prev.lng) > 180) {
        var inverse = this._vincenty_inverse(prev, gp)
        var sec = this._intersection(prev, inverse.initialBearing, {
          lat: -89,
          lng: ((gp.lng - prev.lng) > 0) ? -INTERSECT_LNG : INTERSECT_LNG
        }, 0)
        if (sec) {
          this._latlngs[polylineIndex].push(L.latLng(sec.lat, sec.lng))
          polylineIndex++
          this._latlngs[polylineIndex] = []
          prev = L.latLng(sec.lat, -sec.lng)
          this._latlngs[polylineIndex].push(prev)
        } else {
          polylineIndex++
          this._latlngs[polylineIndex] = []
          this._latlngs[polylineIndex].push(gp)
          prev = gp
          step++
        }
      } else {
        this._latlngs[polylineIndex].push(gp)
        prev = gp
        step++
      }
    }

    L.Polyline.prototype.setLatLngs.call(this, this._latlngs)
  },

  /**
   * Creates a geodesic Polyline from given coordinates
   * @param {Object} latlngs - One or more polylines as an array. See Leaflet doc about Polyline
   * @returns (Object} An array of arrays of geographical points.
   */
  _generate_Geodesic: function(latlngs) {
    var _geo = [],
      _geocnt = 0,
      s, poly, points, pointA, pointB

    for (poly = 0; poly < latlngs.length; poly++) {
      _geo[_geocnt] = []
      for (points = 0; points < (latlngs[poly].length - 1); points++) {
        pointA = L.latLng(latlngs[poly][points])
        pointB = L.latLng(latlngs[poly][points + 1])
        if (pointA.equals(pointB)) {
          continue;
        }
        var inverse = this._vincenty_inverse(pointA, pointB)
        var prev = pointA
        _geo[_geocnt].push(prev)
        for (s = 1; s <= this.options.steps;) {
          var direct = this._vincenty_direct(pointA, inverse.initialBearing,
            inverse.distance / this.options.steps * s, this.options.wrap
          )
          var gp = L.latLng(direct.lat, direct.lng)
          if (Math.abs(gp.lng - prev.lng) > 180) {
            var sec = this._intersection(pointA, inverse.initialBearing, {
              lat: -89,
              lng: ((gp.lng - prev.lng) > 0) ? -INTERSECT_LNG : INTERSECT_LNG
            }, 0)
            if (sec) {
              _geo[_geocnt].push(L.latLng(sec.lat, sec.lng))
              _geocnt++
              _geo[_geocnt] = []
              prev = L.latLng(sec.lat, -sec.lng)
              _geo[_geocnt].push(prev)
            } else {
              _geocnt++
              _geo[_geocnt] = []
              _geo[_geocnt].push(gp)
              prev = gp
              s++
            }
          } else {
            _geo[_geocnt].push(gp)
            prev = gp
            s++
          }
        }
      }
      _geocnt++
    }
    return _geo
  },


  /**
   * Creates a dashed geodesic Polyline from given coordinates - under work
   * @param {Object} latlngs - One or more polylines as an array. See Leaflet doc about Polyline
   * @returns (Object} An array of arrays of geographical points.
   */
  _generate_GeodesicDashed: function(latlngs) {
    var _geo = [],
      _geocnt = 0,
      s, poly, points
      //      _geo = latlngs;    // bypass

    for (poly = 0; poly < latlngs.length; poly++) {
      _geo[_geocnt] = []
      for (points = 0; points < (latlngs[poly].length - 1); points++) {
        var inverse = this._vincenty_inverse(L.latLng(latlngs[poly][
          points
        ]), L.latLng(latlngs[poly][points + 1]))
        var prev = L.latLng(latlngs[poly][points])
        _geo[_geocnt].push(prev)
        for (s = 1; s <= this.options.steps;) {
          var direct = this._vincenty_direct(L.latLng(latlngs[poly][
              points
            ]), inverse.initialBearing, inverse.distance / this.options
            .steps * s - inverse.distance / this.options.steps * (1 -
              this.options.dash), this.options.wrap)
          var gp = L.latLng(direct.lat, direct.lng)
          if (Math.abs(gp.lng - prev.lng) > 180) {
            var sec = this._intersection(L.latLng(latlngs[poly][points]),
              inverse.initialBearing, {
                lat: -89,
                lng: ((gp.lng - prev.lng) > 0) ? -INTERSECT_LNG : INTERSECT_LNG
              }, 0)
            if (sec) {
              _geo[_geocnt].push(L.latLng(sec.lat, sec.lng))
              _geocnt++
              _geo[_geocnt] = []
              prev = L.latLng(sec.lat, -sec.lng)
              _geo[_geocnt].push(prev)
            } else {
              _geocnt++
              _geo[_geocnt] = []
              _geo[_geocnt].push(gp)
              prev = gp
              s++
            }
          } else {
            _geo[_geocnt].push(gp)
            _geocnt++
            var direct2 = this._vincenty_direct(L.latLng(latlngs[poly][
                points
              ]), inverse.initialBearing, inverse.distance / this.options
              .steps * s, this.options.wrap)
            _geo[_geocnt] = []
            _geo[_geocnt].push(L.latLng(direct2.lat, direct2.lng))
            s++
          }
        }
      }
      _geocnt++
    }
    return _geo
  },


  /**
   * Vincenty direct calculation.
   * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
   *
   * @private
   * @param {number} initialBearing - Initial bearing in degrees from north.
   * @param {number} distance - Distance along bearing in metres.
   * @returns (Object} Object including point (destination point), finalBearing.
   */

  _vincenty_direct: function(p1, initialBearing, distance, wrap) {
    var φ1 = p1.lat.toRadians(),
      λ1 = p1.lng.toRadians();
    var α1 = initialBearing.toRadians();
    var s = distance;

    var a = this.datum.ellipsoid.a,
      b = this.datum.ellipsoid.b,
      f = this.datum.ellipsoid.f;

    var sinα1 = Math.sin(α1);
    var cosα1 = Math.cos(α1);

    var tanU1 = (1 - f) * Math.tan(φ1),
      cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)),
      sinU1 = tanU1 * cosU1;
    var σ1 = Math.atan2(tanU1, cosα1);
    var sinα = cosU1 * sinα1;
    var cosSqα = 1 - sinα * sinα;
    var uSq = cosSqα * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 *
      uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));

    var σ = s / (b * A),
      σʹ, iterations = 0;
    do {
      var cos2σM = Math.cos(2 * σ1 + σ);
      var sinσ = Math.sin(σ);
      var cosσ = Math.cos(σ);
      var Δσ = B * sinσ * (cos2σM + B / 4 * (cosσ * (-1 + 2 * cos2σM *
          cos2σM) -
        B / 6 * cos2σM * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σM *
          cos2σM)));
      σʹ = σ;
      σ = s / (b * A) + Δσ;
    } while (Math.abs(σ - σʹ) > 1e-12 && ++iterations);

    var x = sinU1 * sinσ - cosU1 * cosσ * cosα1;
    var φ2 = Math.atan2(sinU1 * cosσ + cosU1 * sinσ * cosα1, (1 - f) *
      Math.sqrt(sinα * sinα + x * x));
    var λ = Math.atan2(sinσ * sinα1, cosU1 * cosσ - sinU1 * sinσ * cosα1);
    var C = f / 16 * cosSqα * (4 + f * (4 - 3 * cosSqα));
    var L = λ - (1 - C) * f * sinα *
      (σ + C * sinσ * (cos2σM + C * cosσ * (-1 + 2 * cos2σM * cos2σM)));

    if (wrap)
      var λ2 = (λ1 + L + 3 * Math.PI) % (2 * Math.PI) - Math.PI; // normalise to -180...+180
    else
      var λ2 = (λ1 + L); // do not normalize

    var revAz = Math.atan2(sinα, -x);

    return {
      lat: φ2.toDegrees(),
      lng: λ2.toDegrees(),
      finalBearing: revAz.toDegrees()
    };
  },

  /**
   * Vincenty inverse calculation.
   * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
   *
   * @private
   * @param {LatLng} p1 - Latitude/longitude of start point.
   * @param {LatLng} p2 - Latitude/longitude of destination point.
   * @returns {Object} Object including distance, initialBearing, finalBearing.
   * @throws {Error} If formula failed to converge.
   */
  _vincenty_inverse: function(p1, p2) {
    var φ1 = p1.lat.toRadians(),
      λ1 = p1.lng.toRadians();
    var φ2 = p2.lat.toRadians(),
      λ2 = p2.lng.toRadians();

    var a = this.datum.ellipsoid.a,
      b = this.datum.ellipsoid.b,
      f = this.datum.ellipsoid.f;

    var L = λ2 - λ1;
    var tanU1 = (1 - f) * Math.tan(φ1),
      cosU1 = 1 / Math.sqrt((1 + tanU1 * tanU1)),
      sinU1 = tanU1 * cosU1;
    var tanU2 = (1 - f) * Math.tan(φ2),
      cosU2 = 1 / Math.sqrt((1 + tanU2 * tanU2)),
      sinU2 = tanU2 * cosU2;

    var λ = L,
      λʹ, iterations = 0;
    do {
      var sinλ = Math.sin(λ),
        cosλ = Math.cos(λ);
      var sinSqσ = (cosU2 * sinλ) * (cosU2 * sinλ) + (cosU1 * sinU2 -
        sinU1 * cosU2 * cosλ) * (cosU1 * sinU2 - sinU1 * cosU2 * cosλ);
      var sinσ = Math.sqrt(sinSqσ);
      if (sinσ == 0) return 0; // co-incident points
      var cosσ = sinU1 * sinU2 + cosU1 * cosU2 * cosλ;
      var σ = Math.atan2(sinσ, cosσ);
      var sinα = cosU1 * cosU2 * sinλ / sinσ;
      var cosSqα = 1 - sinα * sinα;
      var cos2σM = cosσ - 2 * sinU1 * sinU2 / cosSqα;
      if (isNaN(cos2σM)) cos2σM = 0; // equatorial line: cosSqα=0 (§6)
      var C = f / 16 * cosSqα * (4 + f * (4 - 3 * cosSqα));
      λʹ = λ;
      λ = L + (1 - C) * f * sinα * (σ + C * sinσ * (cos2σM + C * cosσ * (-
        1 + 2 * cos2σM * cos2σM)));
    } while (Math.abs(λ - λʹ) > 1e-12 && ++iterations < 100);
    if (iterations >= 100) {
      console.log("Formula failed to converge. Altering target position.")
      return this._vincenty_inverse(p1, {
          lat: p2.lat,
          lng: p2.lng - 0.01
        })
        //  throw new Error('Formula failed to converge');
    }

    var uSq = cosSqα * (a * a - b * b) / (b * b);
    var A = 1 + uSq / 16384 * (4096 + uSq * (-768 + uSq * (320 - 175 *
      uSq)));
    var B = uSq / 1024 * (256 + uSq * (-128 + uSq * (74 - 47 * uSq)));
    var Δσ = B * sinσ * (cos2σM + B / 4 * (cosσ * (-1 + 2 * cos2σM *
        cos2σM) -
      B / 6 * cos2σM * (-3 + 4 * sinσ * sinσ) * (-3 + 4 * cos2σM *
        cos2σM)));

    var s = b * A * (σ - Δσ);

    var fwdAz = Math.atan2(cosU2 * sinλ, cosU1 * sinU2 - sinU1 * cosU2 *
      cosλ);
    var revAz = Math.atan2(cosU1 * sinλ, -sinU1 * cosU2 + cosU1 * sinU2 *
      cosλ);

    s = Number(s.toFixed(3)); // round to 1mm precision
    return {
      distance: s,
      initialBearing: fwdAz.toDegrees(),
      finalBearing: revAz.toDegrees()
    };
  },


  /**
   * Returns the point of intersection of two paths defined by point and bearing.
   * based on the work of Chris Veness (https://github.com/chrisveness/geodesy)
   *
   * @param {LatLon} p1 - First point.
   * @param {number} brng1 - Initial bearing from first point.
   * @param {LatLon} p2 - Second point.
   * @param {number} brng2 - Initial bearing from second point.
   * @returns {Object} containing lat/lng information of intersection.
   *
   * @example
   * var p1 = LatLon(51.8853, 0.2545), brng1 = 108.55;
   * var p2 = LatLon(49.0034, 2.5735), brng2 = 32.44;
   * var pInt = LatLon.intersection(p1, brng1, p2, brng2); // pInt.toString(): 50.9078°N, 4.5084°E
   */
  _intersection: function(p1, brng1, p2, brng2) {
    // see http://williams.best.vwh.net/avform.htm#Intersection

    var φ1 = p1.lat.toRadians(),
      λ1 = p1.lng.toRadians();
    var φ2 = p2.lat.toRadians(),
      λ2 = p2.lng.toRadians();
    var θ13 = Number(brng1).toRadians(),
      θ23 = Number(brng2).toRadians();
    var Δφ = φ2 - φ1,
      Δλ = λ2 - λ1;

    var δ12 = 2 * Math.asin(Math.sqrt(Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
      Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ /
        2)));
    if (δ12 == 0) return null;

    // initial/final bearings between points
    var θ1 = Math.acos((Math.sin(φ2) - Math.sin(φ1) * Math.cos(δ12)) /
      (Math.sin(δ12) * Math.cos(φ1)));
    if (isNaN(θ1)) θ1 = 0; // protect against rounding
    var θ2 = Math.acos((Math.sin(φ1) - Math.sin(φ2) * Math.cos(δ12)) /
      (Math.sin(δ12) * Math.cos(φ2)));

    if (Math.sin(λ2 - λ1) > 0) {
      var θ12 = θ1;
      var θ21 = 2 * Math.PI - θ2;
    } else {
      var θ12 = 2 * Math.PI - θ1;
      var θ21 = θ2;
    }

    var α1 = (θ13 - θ12 + Math.PI) % (2 * Math.PI) - Math.PI; // angle 2-1-3
    var α2 = (θ21 - θ23 + Math.PI) % (2 * Math.PI) - Math.PI; // angle 1-2-3

    if (Math.sin(α1) == 0 && Math.sin(α2) == 0) return null; // infinite intersections
    if (Math.sin(α1) * Math.sin(α2) < 0) return null; // ambiguous intersection

    //α1 = Math.abs(α1);
    //α2 = Math.abs(α2);
    // ... Ed Williams takes abs of α1/α2, but seems to break calculation?

    var α3 = Math.acos(-Math.cos(α1) * Math.cos(α2) +
      Math.sin(α1) * Math.sin(α2) * Math.cos(δ12));
    var δ13 = Math.atan2(Math.sin(δ12) * Math.sin(α1) * Math.sin(α2),
      Math.cos(α2) + Math.cos(α1) * Math.cos(α3))
    var φ3 = Math.asin(Math.sin(φ1) * Math.cos(δ13) +
      Math.cos(φ1) * Math.sin(δ13) * Math.cos(θ13));
    var Δλ13 = Math.atan2(Math.sin(θ13) * Math.sin(δ13) * Math.cos(φ1),
      Math.cos(δ13) - Math.sin(φ1) * Math.sin(φ3));
    var λ3 = λ1 + Δλ13;
    λ3 = (λ3 + 3 * Math.PI) % (2 * Math.PI) - Math.PI; // normalise to -180..+180º

    return {
      lat: φ3.toDegrees(),
      lng: λ3.toDegrees()
    };
  },

  /**
   * Overwrites obj1's values with obj2's and adds obj2's if non existent in obj1
   * @param obj1
   * @param obj2
   * @returns obj3 a new object based on obj1 and obj2
   */
  _merge_options: function(obj1, obj2) {
    var obj3 = {};
    for (var attrname in obj1) {
      obj3[attrname] = obj1[attrname];
    }
    for (var attrname in obj2) {
      obj3[attrname] = obj2[attrname];
    }
    return obj3;
  }
});

L.geodesic = function(latlngs, options) {
  return new L.Geodesic(latlngs, options);
};
