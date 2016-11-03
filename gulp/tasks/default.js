var gulp = require('gulp');

// modernizr depends on sass and browserify tasks
gulp.task('default', ['browserify', 'sass', 'js', 'drush'], function( cb ) {
  cb();
});