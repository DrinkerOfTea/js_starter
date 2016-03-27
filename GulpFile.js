/**
 * Created by DrinkerOfTea on 12/03/2016.
 */
// Imports
var gulp = require('gulp');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var derequire = require('gulp-derequire');
var streamify = require('gulp-streamify');
var del = require('del');
var browserSync = require('browser-sync').create();
var less = require('gulp-less');
var merge = require('merge2');
var babelify = require('babelify');
var runSequence = require('run-sequence');

// Linting task
gulp.task('eslint', function () {
    return gulp.src(['app/**/*.js', 'GulpFile.js', 'karma.conf.js', '!node_modules/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

// Clean dist directory task - only do so if there are no ESLint errors
gulp.task('clean', ['eslint'], function() {
    return del(['dist/*']);
});

// Create a standalone JS file from all the JS files, converting from ES2015 JavaScript with Babel
gulp.task('bundle', function() {
    var b = browserify('app/js/app.jsx', {entries: 'app/js/app.jsx', extensions: ['.jsx']}).transform(babelify.configure({presets: ["es2015", "react"]}));
    b.bundle().pipe(source('app.js')).pipe(gulp.dest('dist/js'));
});

// Copy over the HTML files
gulp.task('copy', function() {
    var html = gulp.src('app/index.html').pipe(gulp.dest('dist'));
    var fonts = gulp.src('node_modules/roboto-fontface/fonts/*.*').pipe(gulp.dest('./dist/fonts'));
    return merge(html, fonts);
});

gulp.task('less', function () {
    return gulp.src('app/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

// Perform all the build tasks in parallel - bundle, copy HTML and compile CSS
gulp.task('build', ['eslint'], function() {
    return runSequence(
        ['bundle', 'less']
    );
});

gulp.task('clean-build', ['clean'], function() {
    runSequence(
        ['copy', 'bundle', 'less']
    );
});

// Browser-sync watch
gulp.task('js-watch', ['build'], browserSync.reload);

// use default task to launch Browsersync and watch JS files
gulp.task('serve', ['clean-build'], function () {

    // Serve files from the root of this project
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });

    // Watch for any changes
    gulp.watch(["app/**/**", "GulpFile.js"], ['js-watch']);
});

// Default task - build:
gulp.task('default', ['clean-build']);

