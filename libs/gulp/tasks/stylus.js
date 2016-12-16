var gulp = require("gulp");
var gulpif = require("gulp-if");
var plumber = require("gulp-plumber");
var stylus = require("gulp-stylus");
var concat = require("gulp-concat");
var autoprefixer = require("gulp-autoprefixer");
var minify = require("gulp-minify-css");
var config = require("../config").stylus;
var config_vol1 = require("../config").stylus_vol1;


gulp.task("stylus",function(){
  return gulp.src(config.src)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(concat(config.output))
      .pipe(autoprefixer(config.autoprefixer))
      .pipe(gulpif(config.minify, minify()))
      .pipe(gulp.dest(config.dest));
});

gulp.task("stylus_vol1",function(){
  return gulp.src(config_vol1.src)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(concat(config_vol1.output))
      .pipe(autoprefixer(config_vol1.autoprefixer))
      .pipe(gulpif(config_vol1.minify, minify()))
      .pipe(gulp.dest(config_vol1.dest));
});