var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    webpack = require("gulp-webpack"),
    config = require("../config");

gulp.task("webpack_top",function(){
  return gulp.src(config.src.top + config.src.js)
      .pipe(plumber())
      .pipe(webpack(config.webpack))
      .pipe(rename("top.js"))
      .pipe(gulpif(config.uglify, uglify({preserveComments: 'some'})))
      .pipe(gulp.dest(config.dest.top + config.dest.js));
});

gulp.task("webpack_common",function(){
  return gulp.src(config.src.common + config.src.js)
      .pipe(plumber())
      .pipe(webpack(config.webpack))
      .pipe(rename("common.js"))
      .pipe(gulpif(config.uglify, uglify({preserveComments: 'some'})))
      .pipe(gulp.dest(config.dest.common + config.dest.js));
});