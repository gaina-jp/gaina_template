var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    uglify = require("gulp-uglify"),
    webpack = require("gulp-webpack"),
    config = require("../config");

gulp.task("webpack",function(){
  return gulp.src(config.webpack.entry.top)
      .pipe(webpack(config.webpack))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(gulp.dest(config.dest.top + "/js"));
});

gulp.task("webpack_vol1",function(){
  return gulp.src(config.webpack_vol1.entry.vol1)
      .pipe(webpack(config.webpack_vol1))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(gulp.dest(config.dest.vol1 + "/js/"));
});