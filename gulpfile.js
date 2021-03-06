// Defining base pathes
var basePaths = {
    bower: './bower_components/',
    dev: './src/'
};

// Defining requirements
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jade = require('gulp-jade');
var merge2 = require('merge2');
var ignore = require('gulp-ignore');
var rimraf = require('gulp-rimraf');

// Run:
// gulp sass
// Compiles SCSS files in CSS
gulp.task('sass', function () {
    gulp.src('./sass/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

// Run:
// gulp cssnano
// Minifies CSS files
gulp.task('cssnano', ['cleancss'], function(){
  return gulp.src('./css/*.css')
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('./css/'));
});


// Run:
// gulp jade
// Processes all jade files
gulp.task('templates', function() {
  return gulp.src('*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'));
});


// Run:
// gulp watch
// Starts watcher. Watcher runs gulp sass task on changes
gulp.task('watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
    gulp.watch('./css/theme.css', ['cssnano']);
});

// Run:
// gulp nanocss
// Minifies CSS files
gulp.task('cssnano', ['cleancss'], function(){
  return gulp.src('./css/*.css')
    .pipe(plumber())
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano({discardComments: {removeAll: true}}))
    .pipe(gulp.dest('./css/'));
});

gulp.task('cleancss', function() {
  return gulp.src('./css/*.min.css', { read: false }) // much faster
    .pipe(ignore('theme.css'))
    .pipe(rimraf());
});

// Run:
// gulp scripts.
// Uglifies and concat all JS files into one
gulp.task('scripts', function() {
  gulp.src([
    basePaths.dev + 'js/jquery.min.js',
    basePaths.dev + 'js/bootstrap.min.js',
    basePaths.dev + 'js/owl.carousel.min.js',
    basePaths.dev + 'js/skip-link-focus-fix.js'
    ])
    .pipe(concat('theme.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/'))
});

// Run:
// gulp copy-assets.
// Copy all needed dependency assets files from bower_component assets to themes /js, /scss and /fonts folder. Run this task after bower install or bower update


gulp.task('copy-assets', function() {

	// Copy all Foundation JS files
	gulp.src(basePaths.bower + 'foundation-sites/js/*.js')
      .pipe(gulp.dest(basePaths.dev + '/js'));

	// Copy What input
	gulp.src(basePaths.bower + 'what-input/*.js')
      .pipe(gulp.dest(basePaths.dev + '/js'));

 // Copy all Foundation SCSS files
     gulp.src(basePaths.bower + 'foundation-sites/scss/**/*.scss')
        .pipe(gulp.dest(basePaths.dev + '/sass/foundation'));


// Copy all Font Awesome Fonts
    gulp.src(basePaths.bower + 'fontawesome/fonts/**/*.{ttf,woff,woff2,eof,svg}')
        .pipe(gulp.dest('./fonts'));

// Copy all Font Awesome SCSS files
    gulp.src(basePaths.bower + 'fontawesome/scss/*.scss')
        .pipe(gulp.dest(basePaths.dev + '/sass/fontawesome'));

// owl JS files
    gulp.src(basePaths.bower + 'OwlCarousel2/dist/*.js')
        .pipe(gulp.dest(basePaths.dev + '/js'));

// Copy all Owl2 SCSS files
    gulp.src(basePaths.bower + 'OwlCarousel2/src/scss/*.scss')
       .pipe(gulp.dest(basePaths.dev + '/sass/owl-carousel2'));

// Copy all Owl2 CSS files
    gulp.src(basePaths.bower + 'OwlCarousel2/dist/assets/*.css')
        .pipe(gulp.dest(basePaths.dev + '/css'));

// Copy jQuery
    gulp.src(basePaths.bower + 'jquery/dist/*.js')
        .pipe(gulp.dest(basePaths.dev + '/js'));

// _s JS files
    gulp.src(basePaths.bower + '_s/js/*.js')
        .pipe(gulp.dest(basePaths.dev + '/js'));
});
