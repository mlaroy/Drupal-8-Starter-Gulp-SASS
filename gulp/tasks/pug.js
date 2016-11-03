var gulp         = require('gulp');
var data         = require('gulp-data');
var pug          = require('gulp-pug');
var handleErrors = require('../util/handleErrors');
var fs           = require('fs');
var base         = require('../config.json');
var pugInheritance = require('gulp-pug-inheritance');
var changed      = require('gulp-changed');
var gulpif       = require('gulp-if');
var cached       = require('gulp-cached');
var filter       = require('gulp-filter');
var debug        = require('gulp-debug');
var util         = require('util');
var rename       = require('gulp-rename');
var package      = require('../../package.json');

// load in whatever content you may reference directly to pug
var content = {
  "content": JSON.parse( fs.readFileSync(base.src + '/pug/content.json') ),
  "package": package
}

gulp.task('pug', function() {
//  console.log(util.inspect(cached('pug'), {showHidden: false, depth: null}));
  return gulp.src(base.src + '/pug/**/*.pug')

    //only pass unchanged *main* files and *all* the partials
    .pipe(gulpif(global.isWatching, changed(base.dest, {extension: '*.html'})))

    //filter out unchanged partials, but it only works when watching
    .pipe(gulpif(global.isWatching, cached('pug')))

    .pipe(debug({title: 'Changed file:'}))

    //find files that depend on the files that have changed
    .pipe(gulpif(global.isWatching, pugInheritance({basedir: base.src + '/pug'})))

    .pipe(debug({title: 'Compiling:'}))

    //filter out partials (folders and files starting with "_" )
    .pipe(filter(function (file) {
        return !/\/_/.test(file.path) && !/^_/.test(file.relative);
    }))
    .pipe(data(function() {
    // Load content from a json file for easy updating of templates
      return content;
    }))
    .pipe(pug({pretty:true}))
    .on('error', handleErrors)
    .pipe(gulp.dest(base.dest));
});