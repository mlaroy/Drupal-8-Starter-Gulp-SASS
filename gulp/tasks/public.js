var gulp        = require('gulp');
var config      = require('../config.json');

// Copy public assets
gulp.task('public', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});