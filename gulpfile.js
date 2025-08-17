const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

function scssTask() {
  return src('scss/**/*.scss').pipe(sass()).pipe(cleanCSS()).pipe(dest('css'));
}

function jsTask() {
  return src('js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'));
}

function imgTask() {
  return src('image/**/*').pipe(imagemin()).pipe(dest('dist/image'));
}

function watchTask() {
  watch('scss/**/*.scss', scssTask);
  watch('js/**/*.js', jsTask);
}

exports.default = series(scssTask, jsTask, imgTask, watchTask);
