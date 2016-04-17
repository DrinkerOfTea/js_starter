/**
 * Created by DrinkerOfTea on 12/03/2016.
 */
// Imports
var gulp = require('gulp');
var gutil = require('gulp-util');
var eslint = require('gulp-eslint');
var browserify = require('browserify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var del = require('del');
var less = require('gulp-less');
var babelify = require('babelify');
var runSequence = require('run-sequence');

// Linting task
gulp.task('eslint', function () {
    return gulp.src(['app/**/*.js', 'app/**/*.jsx', 'GulpFile.js', 'karma.conf.js', '!node_modules/**'])
        .pipe(eslint()).pipe(eslint.format()).pipe(eslint.failOnError());
});

// Clean dist directory task - only do so if there are no ESLint errors
gulp.task('clean', function() {
    return del(['dist/*']);
});

/**
 * Bundle the JavaScript files into a single js file, including translation from ES2015.
 * @param {boolean} Whether to watch the Javascript files and re-bundle if they change
 */
var bundle = function bundle(watch) {

    //Set up browserify, to run on JS and JSX files, including watchify plugin to rerun when files change
    var b = watchify(browserify('app/js/app.jsx',
        {
            entries     : 'app/js/app.jsx',
            extensions  : ['.jsx'],
            cache       : {},
            packageCache: {},
        }).
        transform(babelify.configure({
            presets: ["es2015", "react"]
        })), { poll: true});

    var doBundling = function doBundling() {
        b.bundle().on('error', function(error){
            if (error instanceof SyntaxError) {
                gutil.log(gutil.colors.red('Syntax Error:'));
                gutil.log(gutil.colors.red(error.message));
                gutil.log(gutil.colors.red(error.codeFrame));
            } else {
                gutil.log(gutil.colors.red('Error:', error.message));
            }
        }).pipe(source('app.js')).pipe(gulp.dest('dist/js'));
        gutil.log('Bundling complete');
    };

    //If in watch mode trigger a rebundle on file changes:
    if(watch) {
        b.on('update', doBundling);
        gutil.log('Watchify watching for JS and JSX updates...');
    }

    return doBundling();
};

//Bundle but don't watch (only do after the JS files have been linted):
gulp.task('bundle', ['eslint'], function() {
    return bundle(false);
});

//Bundle and watch:
gulp.task('bundle-watch', function() {
    return bundle(true);
});

// Copy over the HTML files
gulp.task('copy-html', function() {
   return gulp.src('app/index.html').pipe(gulp.dest('dist'));
});

gulp.task('copy-fonts', function() {
    return gulp.src('node_modules/roboto-fontface/fonts/*.*').pipe(gulp.dest('./dist/fonts'));
});

gulp.task('less', function () {
    return gulp.src('app/less/app.less')
        .pipe(less())
        .pipe(gulp.dest('dist/css'));
});

//Run a full build, including bundling, copying files and CSS compilation (without watching)
gulp.task('full-build', ['bundle', 'copy-html', 'copy-fonts', 'less']);

//Run a full clean and build (without watching)
gulp.task('full-clean-build', ['clean'], function() {
    return runSequence(
        ['full-build']
    );
});

// Default task - run a full build, then watch for changes:
gulp.task('default', ['copy-html', 'copy-fonts', 'less', 'bundle-watch'], function() {

    //Note: watchify in bundle-watch task will already recompile JavaScript whenever it changes.

    //Watch HTML file and copy it to the dist if it changes:
    gulp.watch('app/**/*.html', ['copy-html']);

    //Watch less files and run less if it changes:
    gulp.watch('app/less/**/**', ['less']);

    //Watch JavaScript and JSX files and lint them if the change:
    gulp.watch(['app/**/*.js', 'app/**/*.jsx', 'GulpFile.js', 'karma.conf.js', '!node_modules/**'], ['eslint']);

    gutil.log(gutil.colors.green('Build complete - watching for changes...'));
});

