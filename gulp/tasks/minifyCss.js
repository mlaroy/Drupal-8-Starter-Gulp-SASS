var gulp      = require('gulp');
var config    = require('../config.json');
var cleanCSS = require('gulp-clean-css');
var size      = require('gulp-filesize');
var rename    = require('gulp-rename');
var browserSync  = require('browser-sync');

var production = {
  cssSrc: config.dest + '/css/*.css',
  jsSrc: config.dest + '/js/app/*.js',
  cssDest: config.dest + '/css',
  jsDest: config.dest + '/js/app',
  cssOutputName: '*.css',
  jsOutputName: '*.js'
};

gulp.task('minifyCss', ['sass'], function() {
  return gulp.src(config.cssSrc)
    .pipe(cleanCSS({
      mediaMerging: true,
      keepBreaks: true,
      roundingPrecision: -1
    }))
    .pipe(rename(config.cssOutputName))
    .pipe(gulp.dest(config.cssDest))
    .pipe(size());
});