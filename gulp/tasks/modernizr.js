var gulp      = require('gulp');
var config    = require('../config.json');
var modernizr = require('gulp-modernizr');

var production = {
  cssSrc: config.dest + '/css/*.css',
  jsSrc: config.dest + '/js/app/*.js',
  jsDest: config.dest + '/js/app',
  modernizr: {
    devFile: config.src + '/js/vendor/modernizr-dev.js',
    options : [
      "setClasses",
      "addTest",
      "html5printshiv",
      "testProp",
      "fnBind"
    ]
  }
};

gulp.task('modernizr', ['sass', 'browserify'], function( cb ) {
  return gulp.src([
      production.cssSrc,
      production.jsSrc
    ])
    .pipe(modernizr( production.modernizr ))
    .pipe(gulp.dest( production.jsDest ));
  cb();
});