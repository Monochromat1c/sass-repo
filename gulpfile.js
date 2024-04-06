const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('Library-of-Alexandria/**/*.scss')
        .pipe(sass())
        .pipe(dest('assets/css'))
}

function watchTask() {
    watch(['Library-of-Alexandria/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask)