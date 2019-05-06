const { src, dest, parallel, start, watch, series } = require('gulp');
const sass = require('gulp-sass')
const pug = require('gulp-pug');
//const watch = require('gulp-watch');

// gulp.task('sass', function() {
//   gulp.src('src/scss')
//   .pipe(sass())
//   .pipe(gulp.dest('dist/css'))
// });

function css() {
  return src('src/scss/*.scss')
  .pipe(sass())
  .pipe(dest('dist/css'))
}

function html() {
  return src('src/pug/*.pug')
    .pipe(pug())
    .pipe(dest('dist/html'))
}

function watch_css() {
  return watch('src/scss/*.scss', series('css'));
}
function watch_html() {
  return watch('src/pug/**/*.pug', series('html'));
}
exports.css = css;
exports.html = html;
exports.default = parallel(html, css);
exports.watch = parallel(watch_css, watch_html);
