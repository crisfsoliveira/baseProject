/*
 | ----------------------------------------------------------------------------
 | load gulp
 | ----------------------------------------------------------------------------
 |
 */
var gulp = require('gulp');

/*
 | ----------------------------------------------------------------------------
 | load jade
 | ----------------------------------------------------------------------------
 |
 */
var jade = require('gulp-jade');

/*
 | ----------------------------------------------------------------------------
 | load sass and plugins
 | ----------------------------------------------------------------------------
 |
 */
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var combineMq = require('gulp-combine-mq');
var cssnano = require('gulp-cssnano');

/*
 | ----------------------------------------------------------------------------
 | load javascript compiler plugins
 | ----------------------------------------------------------------------------
 |
 */
var browserify = require('gulp-browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');

/*
 | ----------------------------------------------------------------------------
 | load images plugins
 | ----------------------------------------------------------------------------
 |
 */
var image = require('gulp-image');

/*
 | ----------------------------------------------------------------------------
 | Compile JADE files into HTML
 | ----------------------------------------------------------------------------
 |
 */
gulp.task('jade-compile', function() {
    return gulp.src('source/*.jade')
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('static'));
});

/*
 | ----------------------------------------------------------------------------
 | Compile SASS files into CSS
 | ----------------------------------------------------------------------------
 |
 */
gulp.task('sass-compile', function() {
    return gulp.src('source/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(combineMq({beautify: false}))
        .pipe(cssnano())
        .pipe(gulp.dest('static/assets'));
});

/*
 | ----------------------------------------------------------------------------
 | Compile Javascript
 | ----------------------------------------------------------------------------
 |
 */
gulp.task('js-compile', function() {
    return gulp.src('source/main.js')
        .pipe(browserify({insertGlobals: false, debug: false}))
        .pipe(uglify())
        .pipe(gulp.dest('static/assets'));
});

/*
 | ----------------------------------------------------------------------------
 | Optimize image
 | ----------------------------------------------------------------------------
 |
 */
gulp.task('image-optimize', function() {
    gulp.src('source/images/*')
        .pipe(image({
            pngquant: true,
            optipng: true,
            zopflipng: true,
            advpng: true,
            jpegRecompress: true,
            jpegoptim: true,
            mozjpeg: true,
            gifsicle: true,
            svgo: true
        }))
        .pipe(gulp.dest('static'));
});

/*
 | ----------------------------------------------------------------------------
 | Default gulp action
 | ----------------------------------------------------------------------------
 |
 */
gulp.task('default', ['sass-compile', 'js-compile', 'jade-compile', 'image-optimize']);
