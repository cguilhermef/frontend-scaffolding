const { parallel, series } = require('gulp');
const { buildStyles, cleanCss, processScss,  } = require('./css/build-styles');

exports.buildStyles = buildStyles;
exports.build = parallel(buildStyles);
