var gulp          = require('gulp');
var minifycss     = require('gulp-minify-css');
var stylus        = require('gulp-stylus');
var autoprefixer  = require('gulp-autoprefixer');
var notify        = require('gulp-notify');
var livereload    = require('gulp-livereload');
var coffee        = require('gulp-coffee');
var changed       = require('gulp-changed');
var jade          = require('gulp-jade');
var watch         = require('gulp-jade');
var coffeelint    = require('gulp-coffeelint');
var plumber       = require('gulp-plumber');
// var karma         = require('gulp-karma');
var concat        = require('gulp-concat');
var csslint       = require('gulp-csslint');

var devFolder   = '';
var distFolder  = '';

var testFiles = [ 'spec/**/*.js' ];

var paths = {
  src: {
    js:       devFolder + 'js/**/*.coffee',
    css:      devFolder + 'css/**/*.styl',
    icons:    devFolder + 'css/icons.svg',
    kit:      devFolder + 'css/kit.jade',
    kitCss:   devFolder + 'css/assets/kit.styl',
    index:    devFolder + 'index.jade',
    partials: devFolder + 'css/partials/**/*.jade',
    samples:  devFolder + 'css/samples/**/*.jade',
    templates:devFolder + 'templates/**/*.*',
    tests:    distFolder + 'spec/**/*.coffee'
  },
  dist:{
    js:       distFolder + 'js/',
    tests:    distFolder + 'spec/',
    css:      distFolder + 'css/',
    kit:      distFolder + 'css/',
    samples:  distFolder + 'css/samples/',
    index:    distFolder
  }
}
              
gulp.task('build', function(){
  return gulp.src(paths.src.js)
          .pipe(concat('main.min.js'))
          .pipe(gulp.dest(distFolder+'js/'))
});

gulp.task('stylus', function(){
  return gulp.src(devFolder + 'css/main.styl')
          .pipe(plumber())
          .pipe(stylus())
          .pipe(autoprefixer('last 4 version'))
          // .pipe(csslint())
          // .pipe(csslint.reporter())
          // .pipe(minifycss())
          .pipe(gulp.dest(paths.dist.css))
          .pipe(livereload())
});

gulp.task('stylus:kit', function(){
  return gulp.src(devFolder + 'css/assets/kit.styl')
          .pipe(plumber())
          .pipe(stylus())
          .pipe(autoprefixer('last 4 version'))
          // .pipe(csslint())
          // .pipe(csslint.reporter())
          // .pipe(minifycss())
          .pipe(gulp.dest(devFolder + 'css/assets/'))
          .pipe(livereload())
});


gulp.task('coffee', function(e){

    gulp.src(paths.src.js)
          .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
          .pipe(changed(paths.src.js))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter('fail'))

    gulp.src(paths.src.js)
          .pipe(plumber())
          .pipe(changed(paths.src.js))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter())

    return gulp.src(paths.src.js)
          .pipe(plumber())
          .pipe(changed(paths.src.js))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter())
          .pipe(coffee())
          .pipe(gulp.dest(paths.dist.js))
          .pipe(livereload())
});

gulp.task('coffee:main', function(e){
  return gulp.src('app.coffee')
          .pipe(plumber())
          .pipe(changed('app.coffee'))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter())
          .pipe(coffee())
          .pipe(gulp.dest(''))
          .pipe(livereload())
});

gulp.task('coffee:server', function(e){
  return gulp.src('server-js/**/*.coffee')
          .pipe(plumber())
          .pipe(changed('server-js/**/*.coffee'))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter())
          .pipe(coffee())
          .pipe(gulp.dest('server-js/'))
          .pipe(livereload())
});

gulp.task('coffee:tests', function(e){
  return gulp.src(paths.src.tests)
          .pipe(plumber())
          .pipe(changed(paths.src.tests))
          .pipe(coffeelint())
          .pipe(coffeelint.reporter())
          .pipe(coffee())
          .pipe(gulp.dest(paths.dist.tests))
          .pipe(livereload())
});

gulp.task('kit:jade', function(e){
  return gulp.src(paths.src.kit)
          .pipe(plumber())
          .pipe(jade({pretty:true}))
          .pipe(gulp.dest(paths.dist.kit))
          .pipe(livereload())
});

gulp.task('samples:jade', function(e){
  return gulp.src(paths.src.samples)
          .pipe(plumber())
          .pipe(jade({pretty:true}))
          .pipe(gulp.dest(paths.dist.samples))
          .pipe(livereload())
});

gulp.task('index:jade', function(e){
  return gulp.src(paths.src.index)
          .pipe(plumber())
          .pipe(jade({pretty:true}))
          .pipe(gulp.dest(paths.dist.index))
          .pipe(livereload())
});

gulp.task('default', function(){
  var server = livereload();

  gulp.watch(paths.src.css, function(e){
    gulp.run('stylus');
  });

  gulp.watch(paths.src.kitCss, function(e){
    gulp.run('stylus:kit');
  });

  gulp.watch(paths.src.js, function(e){
    gulp.run('coffee');
    server.changed(e.path)
  });

  gulp.watch('server-js/**/*.coffee', function(e){
    gulp.run('coffee:server');
    server.changed(e.path)
  });

  gulp.watch('app.coffee', function(e){
    gulp.run('coffee:main');
    server.changed(e.path)
  });

  gulp.watch(paths.src.tests, function(e){
    gulp.run('coffee:tests');
    server.changed(e.path)
  });

  gulp.watch(paths.src.kit, function(e){
    gulp.run('kit:jade');
  });

  gulp.watch(paths.src.icons, function(e){
    gulp.run('kit:jade');
    gulp.run('index:jade');
  });

  gulp.watch(paths.src.index, function(e){
    gulp.run('index:jade');
  });

  gulp.watch(paths.src.partials, function(e){
    gulp.run('kit:jade');
    gulp.run('index:jade');
  });

  gulp.watch(paths.src.samples, function(e){
    gulp.run('samples:jade');
  });

  gulp.watch(paths.src.templates, function(e){
    gulp.run('index:jade');
  });
});








