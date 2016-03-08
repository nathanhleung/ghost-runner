"use strict";

let gulp = require('gulp');
let gutil = require('gulp-util');
let plumber = require('gulp-plumber');
let bower = require('bower');
let concat = require('gulp-concat');
let sass = require('gulp-sass');
let jade = require('gulp-jade');
let babel = require('gulp-babel');
let jshint = require('gulp-jshint');
let autoprefixer = require('gulp-autoprefixer');
let minifyCss = require('gulp-minify-css');
let rename = require('gulp-rename');
let sh = require('shelljs');

let paths = {
  sass: ['./src/scss/**/*.scss'],
  jade: ['./src/**/*.jade'],
  babel: ['./src/js/**/*.js'],
  lib: ['./src/lib/**/*']
};

gulp.task('default', ['sass', 'jade', 'babel', 'copy-lib']);

gulp.task('sass', function(done) {
  gulp.src('./src/scss/ionic.app.scss')
    .pipe(sass())
    .on('error', sass.logError)
    // this should fix the ios 8 not loading issue
    .pipe(autoprefixer())
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('jade', function(done) {
  gulp.src(paths.jade)
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('./www'))
    .on('end', done);
});

gulp.task('babel', function(done) {
  gulp.src(paths.babel)
    .pipe(plumber())
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter('default'))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('combined.js'))
    .pipe(gulp.dest('./www/js'))
    .on('end', done);
});

gulp.task('copy-lib', function(done) {
  gulp.src(paths.lib)
    .pipe(gulp.dest('./www/lib'))
    .on('end', done);
});

gulp.task('watch', function() {
  gulp.watch(paths.sass, ['sass']);
  gulp.watch(paths.jade, ['jade']);
  gulp.watch(paths.babel, ['babel']);
  gulp.watch(paths.lib, ['copy-lib']);
});

gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
