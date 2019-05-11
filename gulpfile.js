const { src, dest, parallel, start, watch, series } = require('gulp');
const sass = require('gulp-sass')
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');

function css() {
  return src('src/scss/**')
  .pipe(sass())
  //.pipe(concat('style.css'))
  .pipe(dest('dist/css'))
  .pipe(livereload())
}

function html() {
  return src('src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('dist/html'))
    .pipe(livereload())
}

function watch_css() {
    livereload.listen();
    return watch('src/scss/*.scss', series('css'));
}
function watch_html() {
    livereload.listen();
    return watch('src/pug/**/*.pug', series('html'));
}
exports.css = css;
exports.html = html;
exports.default = parallel(html, css);
exports.watch = parallel(watch_css, watch_html);
