const config = require("../config")
    ,$ = config.$;

$.gulp.task("stylus_all",()=>{
  $.gulp.src([config.src.top + "/**/*.styl", "!" + config.src.top + "/**/_*.styl"])
      .pipe($.cached("stylus"))
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.top + "/")))
      .pipe($.gulp.dest(config.dest.top + "/"));
});

$.gulp.task("stylus_common",()=>{
  $.gulp.src([config.src.common + "/css/style.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.common + "/css/")))
      .pipe($.gulp.dest(config.dest.common + "/css/"));
});
$.gulp.task("stylus_top",()=>{
  $.gulp.src([config.src.top + "/css/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.top + "/")))
      .pipe($.gulp.dest(config.dest.top + "/css/"));
});
$.gulp.task("stylus_bookcafe",()=>{
  $.gulp.src([config.src.bookcafe + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.bookcafe + "/")))
      .pipe($.gulp.dest(config.dest.bookcafe + "/"));
});
$.gulp.task("stylus_column",()=>{
  $.gulp.src([config.src.column + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.column + "/")))
      .pipe($.gulp.dest(config.dest.column + "/"));
});
$.gulp.task("stylus_enquete",()=>{
  $.gulp.src([config.src.enquete + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.enquete + "/")))
      .pipe($.gulp.dest(config.dest.enquete + "/"));
});
$.gulp.task("stylus_facility",()=>{
  $.gulp.src([config.src.facility + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.facility + "/")))
      .pipe($.gulp.dest(config.dest.facility + "/"));
});
$.gulp.task("stylus_labwall",()=>{
  $.gulp.src([config.src.labwall + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.labwall + "/")))
      .pipe($.gulp.dest(config.dest.labwall + "/"));
});
$.gulp.task("stylus_login",()=>{
  $.gulp.src([config.src.login + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.login + "/")))
      .pipe($.gulp.dest(config.dest.login + "/"));
});
$.gulp.task("stylus_midokoro",()=>{
  $.gulp.src([config.src.midokoro + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.midokoro + "/")))
      .pipe($.gulp.dest(config.dest.midokoro + "/"));
});
$.gulp.task("stylus_news",()=>{
  $.gulp.src([config.src.news + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.news + "/")))
      .pipe($.gulp.dest(config.dest.news + "/"));
});
$.gulp.task("stylus_staffblog",()=>{
  $.gulp.src([config.src.staffblog + "/**/*.styl"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.stylus(config.stylus.opt))
      .pipe($.autoprefixer(config.stylus.autoprefixer))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.stylus.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.stylus.sourcemap, $.sourcemaps.write(config.dest.staffblog + "/")))
      .pipe($.gulp.dest(config.dest.staffblog + "/"));
});