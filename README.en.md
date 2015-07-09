# gsimaps (GSI Maps)
The source of GSI Maps, the web maps by Geospatial Information Authority of Japan (GSI,) Japan's National Geospatial Information Authority (NGIA.)

## GSI Maps, the web site

- GSI Maps (officially operated by GSI): http://maps.gsi.go.jp/
- GSI Maps (demo directly based on this repository): http://gsi-cyberjapan.github.io/gsimaps/

## How to use this repository
1. Please download this repository.
2. Place the files onto your web server.
3. Open index.html.
You may want to customize the site to include your logo; in that case please edit index.html .
The access counter on the lower right side is disabled .

Most of the functions of gsimaps should work even if you open [index.html](index.html) from your filesystem.
Howerver, some important functions such as a function to handle vector tile data, will work only when you host index.html on a web server.

## Remarks
- This repository provides the source code of "GSI Maps" http://maps.gsi.go.jp/ operated by GSI (Geospatial Information Authority of Japan.)
- As for Leaflet, jQuery, or all other existing software included in this repository, the [Licenses for the respective projects](LICENSE_LIBRARIES.md) applies.
- According to <a href='http://www.gsi.go.jp/kikakuchousei/kikakuchousei40182.html'>GSI Contents License</a> which is based on the Japanese Government's Standard License, 2-clause BSD license, which is the same as Leaflet's, applies for the work by GSI.
- All the pull requests will be subject to 2-clause BSD License with a credit of GSI after we merge respective pull requests.
- gsimaps uses <a href='http://newspat.csis.u-tokyo.ac.jp/geocode/'>the serveice operated by CSIS, University of Tokyo</a>.
- Server-side services called from gsimaps are NOT guaranteed to be always in operation, and are NOT guaranteed to be persistently in operation. 
- Server-side services called from gsimaps may be updated or may be abandoned without prior notice.
- This English translation is tentative and not necessarily authorized.

See the [LICENSE file](LICENSE) also.

## See Also
- Edit tool for layers definition (from this repository): http://gsi-cyberjapan.github.io/gsimaps/config/config.html
- The specifications for layers definition (also from our github repository): https://github.com/gsi-cyberjapan/layers-dot-txt-spec

## hashtag
The hashtag for this repository is #gsimaps .
Twitter: https://twitter.com/hashtag/gsimaps
