const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');


const paths = {
    scss: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css'
    },
    images: {
    src: 'src/images/**/*',
    dest: 'dist/images'
    },
    js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
    }
};


function compilarSass() {
    return gulp.src(paths.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.scss.dest));
}


function comprimirImagens() {
    return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}


function comprimirJS() {
    return gulp.src(paths.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(paths.js.dest));
}


exports.default = gulp.parallel(compilarSass, comprimirImagens, comprimirJS);