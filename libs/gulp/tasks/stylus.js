var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    cached = require("gulp-cached"),
    plumber = require("gulp-plumber"),
    stylus = require("gulp-stylus"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    minify = require("gulp-minify-css"),
    config = require("../config");

gulp.task("stylus",function(){
  return gulp.src([config.src.top + "/**/css/**/!(_)*", "!" + config.src.top + "/__utility/css/**/*"])
      .pipe(cached("stylus"))
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.minify, minify()))
      .pipe(gulp.dest(config.dest.top + "/"));
});

gulp.task("stylus_all",function(){
  return gulp.src([config.src.top + "/**/css/**/!(_)*", "!" + config.src.top + "/__utility/css/**/*"])
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.minify, minify()))
      .pipe(gulp.dest(config.dest.top + "/"));
});