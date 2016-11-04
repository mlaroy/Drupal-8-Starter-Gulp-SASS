var gulp         = require('gulp');
var sass         = require('gulp-sass');
var cssjoin      = require('gulp-cssjoin');
var sourcemaps   = require('gulp-sourcemaps');
var handleErrors = require('../util/handleErrors');
var base         = require('../config.json');
var autoprefixer = require('gulp-autoprefixer');
var filter       = require('gulp-filter');
var browserSync  = require('browser-sync');

var config = {
  src: base.src + '/scss/**/*.{sass,scss}',
  dest: base.dest + '/css',
  settings: {
    sourcemap: true,
    precision: 8, // Allow correct rounding in Chrome
    imagePath: 'images' // Used by the image-url helper
  },
  sourcemapSettings: {}
}

gulp.task('sass', function () {
  return gulp.src(config.src)
    .pipe(sourcemaps.init(config.sourcemapSettings))
    .pipe(cssjoin())
    .pipe(sass(config.settings))
    .on('error', handleErrors)
    .pipe(autoprefixer({ browsers: ['last 2 versions'] }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))
    .pipe(filter('**/*.css'))
    .pipe(browserSync.stream());
});