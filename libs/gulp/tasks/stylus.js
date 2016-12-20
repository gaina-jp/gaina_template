var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    stylus = require("gulp-stylus"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    minify = require("gulp-minify-css"),
    config = require("../config").stylus,
    config_vol1 = require("../config").stylus_vol1;


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