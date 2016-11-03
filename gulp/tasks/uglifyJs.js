var gulp        = require('gulp');
var config      = require('../config').production;
var size        = require('gulp-filesize');
var rename      = require('gulp-rename');
var stripDebug  = require('gulp-strip-debug');
var uglify      = require('gulp-uglify');
var gulpif       = require('gulp-if');

gulp.task('uglifyJs', ['browserify'], function() {
  return gulp.src(config.jsSrc)
    .pipe(gulpif(!global.isWatching, stripDebug()))
    .pipe(uglify({'mangle': false}))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.jsDest))
    .pipe(size());
});