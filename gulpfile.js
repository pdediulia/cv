"use strict";

var gulp = require('gulp'),
        autoprefixer = require('gulp-autoprefixer'),
        livereload = require('gulp-livereload'),
        connect = require('gulp-connect'),
        imagemin = require('gulp-imagemin'),
        htmlmin = require('gulp-htmlmin'),
        minifyCSS = require('gulp-minify-css');

    gulp.task('connect', function () {
        connect.server({
            root: '',
            livereload: true
        });
    });

    //css
    gulp.task('css', function () {
        gulp.src('css/*.css')
            .pipe(autoprefixer('last 7 versions'))
            .pipe(minifyCSS('site.css'))
            .pipe(gulp.dest('app/css'))
            .pipe(connect.reload());
    });

    //html
    gulp.task('html', function () {
        gulp.src('*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('app/'))
        .pipe(connect.reload());
    });

    //image
   gulp.task('image', () => {
        gulp.src('images/*')
        .pipe(imagemin({
            progressive: true}))
        .pipe(gulp.dest('app/images'))
        .pipe(connect.reload());
    });

   //fonts
   gulp.task('fonts', function() {
    gulp.src('fonts/*.ttf')
        .pipe(gulp.dest('app/fonts'))
    });


    //watch
    gulp.task('watch', function () {
        gulp.watch('css/*.css', ['css'])
        gulp.watch('*.html', ['html'])
    });

    //default
    gulp.task('default', ['connect', 'html', 'css', 'image', 'fonts','watch']);
