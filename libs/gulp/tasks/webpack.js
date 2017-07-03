var gulp = require("gulp"),
    gulpif = require("gulp-if"),
    plumber = require("gulp-plumber"),
    rename = require("gulp-rename"),
    uglify = require("gulp-uglify"),
    webpack = require("gulp-webpack"),
    config = require("../config");

gulp.task("webpack_top",function(){
  return gulp.src(config.src.top + "/js/top.coffee")
      .pipe(plumber())
      .pipe(webpack({
        entry : { top: config.src.top + "/js/top.coffee"},
        output : config.webpack.output,
        externals: config.webpack.externals,
        module:config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe(gulpif(config.uglify.minify, uglify(config.uglify.options)))
      .pipe(gulp.dest(config.dest.top + config.dest.js));
});

gulp.task("webpack_common",function(){
  return gulp.src(config.src.common + "/js/common.coffee")
      .pipe(plumber())
      .pipe(webpack({
        entry : { common: config.src.common + "/js/common.coffee" },
        output : config.webpack.output,
        externals: config.webpack.externals,
        module:config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe(gulpif(config.uglify.minify, uglify(config.uglify.options)))
      .pipe(gulp.dest(config.dest.common + config.dest.js));
});
