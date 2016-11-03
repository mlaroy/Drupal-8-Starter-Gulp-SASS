var gulp        = require('gulp');
var base        = require('../config.json');
browserifyTask  = require('./browserify');
var browserSync = require('browser-sync');

// Set up tasks to complete before reloading
gulp.task('sass-watch',   ['sass','kss'], browserSync.reload); // Injected
gulp.task('img-watch',    ['images'], browserSync.reload);
gulp.task('pug-watch',    ['pug'], browserSync.reload);
gulp.task('scripts-watch',['browserify'], browserSync.reload);
gulp.task('twig-watch',   ['drush'], browserSync.reload);

// gulp.watch("templates/*.twig", ['drush']);
// gulp.watch("**/*.yml", ['drush']);
// gulp.watch("**/*.theme", ['drush']);
// gulp.watch("src/*.php", ['drush']);

var proxy = false;

// Out watch tasks
gulp.task('watch', ['setWatch'],function() {
  // Start a server

  if(proxy) {
    browserSync({
      proxy: "http://mylocal.local",
      server: false
    });
  } else {
    browserSync({
      "server": {
        "baseDir": "public"
      }
    });
  }

  gulp.watch(base.src + '/pug/**/*.pug',          ['pug-watch']);
  gulp.watch(base.twig + '/**/*.twig',            ['twig-watch']);
  gulp.watch(base.src + '/scss/**/*.{sass,scss}', ['sass-watch']);
  gulp.watch(base.src + '/js/**/*.js',            ['scripts-watch']);
});

gulp.task('setWatch', function() {
  global.isWatching = true;
});