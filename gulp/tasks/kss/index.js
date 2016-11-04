var gulp         = require('gulp');
var kss          = require('gulp-kss');
var base         = require('../../config.json');

var config =  {
  root: base.src,
  src: base.src + '/scss/**/*.{sass,scss}',
  dest: base.dest + '/styleguide',
  options: { title: '' },
  settings: {
    overview: './readme.md', // ./src/README.md
    templateDirectory: base.src + '/kss-template',// ./src/kss-template
    extraHead: [
      '<script src="/js/app.js"></script>',
      '<script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>',
      '<link src="/css/styleguide.css" rel="stylesheet" />'
    ]
  }
};

gulp.task('kss', function() {
  gulp.src(config.src)
    .pipe(kss(config.settings))
    .pipe(gulp.dest(config.dest));
  return true;
});