const { dest, series, src } = require('gulp');
const sass = require('gulp-sass');
const clean = require('gulp-clean');
const minifier = require('gulp-clean-css');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');


function cleanCss() {
  return src('dist/*.css', { read: false})
    .pipe(clean());
};

function minifyCss() {
  return src('dist/*.css')
    .pipe(minifier())
    .pipe(rename({ extname: '.min.css'}))
    .pipe(dest('dist/'));
};

function autoprefixCss() {
  return src('dist/*.css')
    .pipe(autoprefixer({
      browsers: ['last 3 versions'],
      cascade: false
    }))
    .pipe(dest('dist/'));
};

function processScss() {
    return src('src/scss/main.scss')
    .pipe(sass())
    .pipe(rename({
      basename: 'styles'
    }))
    .pipe(dest('dist/'));
};

exports.autoprefixCss = autoprefixCss;
exports.cleanCss = cleanCss;
exports.minifyCss - minifyCss;
exports.processScss = processScss;

exports.buildStyles = series(cleanCss, processScss, autoprefixCss, minifyCss);
