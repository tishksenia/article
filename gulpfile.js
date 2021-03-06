const { src, dest, parallel, start, watch, series } = require('gulp');
const sass = require('gulp-sass')
const pug = require('gulp-pug');
const concat = require('gulp-concat');
const livereload = require('gulp-livereload');
const uglify = require('gulp-uglify');
const jshint = require('gulp-jshint');

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
    .pipe(dest('dist/'))
    .pipe(livereload())
}

function js() {
  return src('src/js/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(uglify())
  .pipe(concat('app.js'))
  .pipe(dest('dist/js/'))
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
function watch_js() {
    livereload.listen();
    return watch('src/js/*.js', series('js'));
}
exports.css = css;
exports.html = html;
exports.js = js;
exports.default = parallel(html, css, js);
exports.watch = parallel(watch_css, watch_html, watch_js);
