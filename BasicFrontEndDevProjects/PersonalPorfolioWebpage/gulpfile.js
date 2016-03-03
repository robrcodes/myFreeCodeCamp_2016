var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var pixrem = require('gulp-pixrem');
var plumber = require('gulp-plumber');
var picshrink = require('gulp-imagemin');

var sassOptions = {
  errLogToConsole: true,
  outputStyle: 'expanded'
};

var autoprefixerOptions = {
  browsers: ['last 2 versions', '> 5%', 'Firefox ESR'],
  cascade: false
};

// object containing file paths
var paths = {
  css:['./src/css/main.css']
  ,cssdist:['./dist/css/']
  ,cssin:['./dist/css/allcss.css']
  ,cssminout:['./dist/css/*.min.css']
  ,sass:['./src/scss/main.scss']
  ,sasspartials:['./src/scss/partials/*.scss']
};

// default task
gulp.task('default', ['serve', 'doSass', 'allcss']);

// concatinate css to dist folder
// this version not minified
gulp.task('allcss', function() {
  console.log('Gulp is running allcss task...');
  return gulp.src(paths.css)
  .pipe(concat('allcss.css'))
  .pipe(gulp.dest('./dist/css/'));
});

gulp.task('mincss', function() {
  return gulp.src(paths.css)
    .pipe(concat('allcss.min.css'))
    .pipe(uglifycss({
      "max-line-len": 80 }))
    .pipe(gulp.dest('./dist/css/'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['doSass'], function() {
    browserSync.init({
        server: "./"
    });
    // compile sass
    gulp.watch('./src/scss/main.scss', ['doSass']);
    gulp.watch('./src/scss/partials/*.scss', ['doSass']);
    // concatenate css
    gulp.watch('./src/css/main.css', ['allcss']);
    // reload browser
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./dist/css/*.css").on('change', browserSync.reload);
});

gulp.task('doSass', function() {
  console.log('Gulp is running doSass task...');
  return gulp.src(paths.sass)
      .pipe(plumber())
      .pipe(sourcemaps.init())
      .pipe(sass(sassOptions).on('error', notify.onError(function (error) {
return "Problem file : " + error.message;
})))
      .pipe(autoprefixer(autoprefixerOptions))
      .pipe(sourcemaps.write('./maps'))
      .pipe(pixrem({ rootValue: '10px' }))
      .pipe(plumber.stop())
      .pipe(gulp.dest('./src/css/'))
      .pipe(browserSync.stream());
      console.log('Gulp is finished doSass task...');
});

//optimise images
gulp.task('image-opt', function() {
  return gulp.src('./src/images/**/*')
    .pipe(picshrink())
    .pipe(gulp.dest('./dist/images/'));
});
