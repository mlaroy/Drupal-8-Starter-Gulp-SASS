var gulp      = require('gulp');
var notify    = require('gulp-notify');
var shell     = require('gulp-shell');


// Run drush to clear the theme registry
gulp.task('drush', function() {
  return gulp.src('', {
      read: false
    })
    .pipe(shell([
      'drush cache-rebuild',
    ]))
    .pipe(notify({
      title: "Caches cleared",
      message: "Drupal caches cleared.",
      onLast: true
    }));
});