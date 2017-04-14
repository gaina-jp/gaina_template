var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    uglify = require("gulp-uglify"),
    webpack = require("gulp-webpack"),
    config = require("../config");

gulp.task("webpack",function(){
  return gulp.src(config.webpack.top.entry.top)
      .pipe(plumber())
      .pipe(webpack(config.webpack.top))
      .pipe(gulpif(config.webpack.uglify, uglify()))
      .pipe(gulp.dest(config.dest.top + "/js"));
});

gulp.task("webpack_common",function(){
  return gulp.src(config.webpack.common.entry.common)
      .pipe(plumber())
      .pipe(webpack(config.webpack.common))
      .pipe(gulpif(config.webpack.uglify, uglify()))
      .pipe(gulp.dest(config.dest.common + "/js"));
});