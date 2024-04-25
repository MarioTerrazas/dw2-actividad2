'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    del = require('del'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    cleanCss =  require('gulp-clean-css'),
    flatmap = require('gulp-flatmap'),
    htmlmin = require('gulp-htmlmin');

// Compila archivos SASS
gulp.task('sass', function(){
    gulp.src('./css/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

// Vigila los cambios en los archivos SASS
gulp.task('sass:watch', function(){
    gulp.watch('./css/*.scss', ['sass']);
});

// Configura el servidor de desarrollo y sincronización del navegador
gulp.task('browser-sync', function(){
    var files = ['*.html', './css/*.css', './img/*.{png, jpg, gif}', './js/*.js'];
    browserSync.init(files, {
        server:{
            baseDir: './'
        }
    });
});

// Tarea predeterminada que inicia el servidor de desarrollo y vigila los cambios en los archivos SASS
gulp.task('default', ['browser-sync'], function(){
    gulp.start('sass:watch');
});

// Elimina la carpeta 'dist' para realizar una limpieza
gulp.task('clean', function(){
    return del(['dist']);
});

// Optimiza y comprime las imágenes
gulp.task('imagemin', function(){
    return gulp.src('./images/*.{png, jpg, jpeg, gif}')
        .pipe(imagemin({optimizationLevel: 3, progressive: true, interlaced: true}))
        .pipe(gulp.dest('dist/images'));
});

// Concatena, minifica y revisa los archivos CSS y JavaScript, y minimiza el HTML
gulp.task('usemin', function(){
    return gulp.src('./*.html')
            .pipe(flatmap(function(stream, file){
                return stream
                        .pipe(usemin({
                            css: [rev()],
                            html: [function(){return htmlmin({collapseWhitespace: true})}],
                            js: [uglify(), rev()],
                            inlinejs: [uglify()],
                            inlinecss: [cleanCss(), 'concat']
                        }));
            }))
            .pipe(gulp.dest('./dist'));
});

// Tarea para construir el proyecto: copia las fuentes, optimiza las imágenes y aplica el uso min
gulp.task('build', function(){
    gulp.start('copyfonts', 'imagemin', 'usemin');
});
