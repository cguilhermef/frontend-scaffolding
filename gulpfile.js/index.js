const { parallel, series, watch } = require('gulp');
const { buildStyles } = require('./css/build-styles');
const browserSync = require('browser-sync').create();
const path = require('path');

function dev() {
  browserSync.init({
    server: ['dist', 'samples'],
    ignore: [ "gulpfile/*"],
    notify: false,
    watch: true
  });
  watch(['src/**/*.scss', 'src/**/*.js'], buildStyles);
};

exports.build = parallel(buildStyles);
exports.dev = dev;
