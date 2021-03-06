# JavaScript Starter App

By DrinkerOfTea

## Introduction

Starter project for JavaScript applications, including:
* UI shell with React, React-router, Material-ui and Roboto Font
* Gulp build with Browserify (for bundling), ESLint for linting, Less for CSS compilation. 
* Uses Watchify and gulp watch to rebuild any time anything changes
* Basic test framework with Karma, Mocha, Chai and Sinon

## Installation

To install this app:

```
npm install
```

To do a full clean and build: 

```
gulp full-clean-build
```

To continuously run the build any time anything changes:

```
gulp
```

To run a HTTP server for viewing the app on localhost:

```
http-server
```

To run the unit tests (continuously)

```
karma start karma.conf.js
```

