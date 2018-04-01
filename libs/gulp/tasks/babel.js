const config = require("../config")
    ,$ = config.$;

$.gulp.task("babel_common",()=>{
  $.gulp.src(config.src.common + "/**/*.js")
      .pipe($.babel())
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.common));
});

$.gulp.task("babel_top",()=>{
  $.gulp.src(config.src.top + "/js/*.js")
      .pipe($.babel())
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.top + "/js"));
});