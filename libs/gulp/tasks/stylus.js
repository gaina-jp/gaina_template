var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    cached = require("gulp-cached"),
    plumber = require("gulp-plumber"),
    stylus = require("gulp-stylus"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    sourcemaps = require("gulp-sourcemaps"),
    cleanCSS = require("gulp-clean-css"),
    config = require("../config");

gulp.task("stylus_common",function(){
  return gulp.src([config.stylus.src.common])
      .pipe(cached("stylus"))
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.init()))
      .pipe(gulpif(config.stylus.minify, cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.write(config.dest.common + "/css")))
      .pipe(gulp.dest(config.dest.common + "/css"));
});

gulp.task("stylus_top",function(){
  return gulp.src([config.stylus.src.top])
      .pipe(cached("stylus"))
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.init()))
      .pipe(gulpif(config.stylus.minify, cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.write(config.dest.top + "/css")))
      .pipe(gulp.dest(config.dest.top + "/css"));
});

gulp.task("stylus_all",function(){
  return gulp.src([config.stylus.src.all, config.stylus.src.exception])
      .pipe(plumber())
      .pipe(stylus())
      .pipe(autoprefixer(config.stylus.autoprefixer))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.init()))
      .pipe(gulpif(config.stylus.minify, cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe(gulpif(config.stylus.sourcemap, sourcemaps.write(config.dest.top + "/")))
      .pipe(gulp.dest(config.dest.top + "/"));
});