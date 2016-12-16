var gulp = require("gulp");
var gulpif = require("gulp-if");
var uglify = require("gulp-uglify");
var webpack = require("gulp-webpack");
var config = require("../config");

gulp.task("webpack",function(){
  return gulp.src(config.webpack.entry.top)
      .pipe(webpack(config.webpack))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(gulp.dest(config.js.dest));
});

gulp.task("webpack_vol1",function(){
  return gulp.src(config.webpack_vol1.entry.vol1)
      .pipe(webpack(config.webpack_vol1))
      .pipe(gulpif(config.js.uglify, uglify()))
      .pipe(gulp.dest(config.dest + "/vol1/js/"));
});