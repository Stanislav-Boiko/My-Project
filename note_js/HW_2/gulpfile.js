// npm i -D gulp sass gulp-sass ....

import gulp from 'gulp'
import sass from 'sass'
import gulpsass from 'gulp-sass'
import cleancss from 'gulp-clean-css'
import htmlmin from 'gulp-htmlmin'
import imagemin from 'gulp-imagemin'
import browserSync from 'browser-sync'

const browser = browserSync.create()

browser.init({
    server: {
        baseDir: './build'
    }
})

const sassPlugin = gulpsass(sass)



export function html(){
    return gulp.src('./src/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'))
}

export function images(){
    return gulp.src('./src/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'))
}

export function styles(){
    return gulp.src('./src/styles/**/*.scss')
        .pipe(sassPlugin())
        .pipe(cleancss())
        .pipe(gulp.dest('build'))
}

function reloadBrowser(cb){
    browser.reload()
    cb()
}


export function watch(){
    return gulp.watch('src/**/*.*', gulp.series(gulp.parallel(html, images, styles), reloadBrowser))
}