var gulp   = require('gulp');
var config = require('../config');
var useref = require('gulp-useref');
var debug  = require('gulp-debug');
//var critical   = require('critical').stream;
//var criticalConfig     = require('../config').critical;


// Run this to compress all the things!
gulp.task('production', ['default', 'images', 'minifyCss', 'uglifyJs', 'modernizr', 'useref'], function( cb ){
  cb();
});

gulp.task('useref', ['default'], function(){
  return gulp.src( config.dest + '/**/*.html')
    .pipe(useref())
    .pipe(gulp.dest( config.dest ));
});