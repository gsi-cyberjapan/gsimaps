'use strict';

var gulp = require( 'gulp' );
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var qunit = require('node-qunit-phantomjs');

gulp.task( 'minify', [], function () {
    return gulp.src( [
            'src/*.js',
        ] )
        .pipe( concat( 'gsimaps.min.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'js' ) );
} );

gulp.task( 'default', [ 'minify' ], function () {
    return gulp.src( [
            // ここにproj4js-combined.jsの元のソースのファイル名を並べる。
            //'node_modules/proj4/dist/proj4.js',
        ] )
        .pipe( concat( 'proj4js-combined.js' ) )
        .pipe( uglify() )
        .pipe( gulp.dest( 'js' ) );
} );

gulp.task('test', function() {
    return qunit( './tests.html' );
});
