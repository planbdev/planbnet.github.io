const gulp = require('gulp'),
    rename = require('gulp-rename'),
    csso = require('gulp-csso'),
    sass = require('gulp-sass'),
    aliases = require('gulp-style-aliases'),
    combineMq = require('gulp-combine-mq'),
    webpack = require('webpack-stream'),
    webpackConfigFile = require('./webpack.config.js'),
    getInstalledPath = require('get-installed-path'),
    bootstrapFolder = getPath('bootstrap'),
    imagemin = require('gulp-imagemin'),
    imageminSvgo = require('imagemin-svgo');
//const path = require('path');

const sourceSass = ['./src/scss/main.scss'];

function getPath(package) {
    return (
        getInstalledPath.sync(package,
            {
                local: true
            }
        )
    );
}

gulp.task('sassTask', function () {
    gulp.src(sourceSass)
      .pipe(aliases({
          "bootstrap": bootstrapFolder
      }))
      .pipe(sass())
      .pipe(combineMq())
      .pipe(csso())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('../assets/dist/scss/'));
});


gulp.task('jsTask', function () {
    return gulp.src('./src/js/**/*.js')
      .pipe(webpack(webpackConfigFile))
      .pipe(gulp.dest('../assets/dist/js/'));
});
gulp.task('distribute', function () {
    gulp.run(['sassTask', 'jsTask'])
})

gulp.task('default', function () {
    gulp.src('./src/img/**')
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({ plugins: [{ removeViewBox: false }] })
        ]))
        .pipe(gulp.dest('./dist/img/'));
    gulp.watch("./src/scss/**/*.scss", ['sassTask']);
    gulp.watch("./src/js/**/*.js", ['jsTask']);
});

