var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    stylus = require("gulp-stylus"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    minify = require("gulp-minify-css"),
    config = require("../config");


gulp.task("stylus",function(){
  return gulp.src(config.stylus.src.top)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(concat(config.stylus.output.top))
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.minify, minify()))
      .pipe(gulp.dest(config.dest.top + "/css"));
});

gulp.task("stylus_common",function(){
  return gulp.src(config.stylus.src.common)
      .pipe(plumber())
      .pipe(stylus())
      .pipe(concat(config.stylus.output.common))
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.minify, minify()))
      .pipe(gulp.dest(config.dest.common + "/css"));
});