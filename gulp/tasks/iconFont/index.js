var gulp             = require('gulp');
var iconfont         = require('gulp-iconfont');
var generateIcon     = require('./generateIcon');
var base             = require('../../config.json');
//var gulpImagemin     = require('gulp-imagemin');
var handleErrors     = require('../../util/handleErrors');
var path             = require('path');
var package          = require('../../../package.json');

var config = {
  src: base.src + '/icons/*.svg',
  dest: base.dest + '/fonts',
  fontPath: '/fonts',
  options: {
    fontName: package.name + '-icons',
    appendCodepoints: true,
    normalize: true
  }
}

var iconFontTask = function() {
  return gulp.src(config.src)
    .pipe(iconfont(config.options))
    .on('glyphs', generateIcon(config) )
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
};

gulp.task('iconFont', iconFontTask);
module.exports = iconFontTask;