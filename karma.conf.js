/**
 * Note: this requires the following to be installed globally with npm:
 * karma-mocha, karma-chai, karma-phantomjs-launcher
 * @param config
 */

/**
 * Node: Need to install globally:
 * npm install -g karma, browserify, watchify, karma-browserify
 */

module.exports = function (config) {
    'use strict';
    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai', 'browserify'],

        files: [
            'test/*.spec.js'
        ],

        reporters: ['progress'],

        port: 9876,
        colors: true,
        autoWatch: false,
        singleRun: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        browsers: ['PhantomJS'],

        plugins: [ 'karma-mocha', 'karma-chai', 'karma-browserify', 'karma-phantomjs-launcher'],

        preprocessors: {
            'test/**/*.js': ['browserify']
        },

        browserify: {
            debug: true,
            transform: ['babelify']
        }

    });
};