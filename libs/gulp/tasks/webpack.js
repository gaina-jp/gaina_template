const config = require("../config")
    ,$ = config.$;

$.gulp.task("webpack_common",()=>{
  $.gulp.src([config.src.common + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.common + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.common + "/js/"));
});

$.gulp.task("webpack_top",()=>{
  $.gulp.src([config.src.top + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.top + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.top + "/js/"));
});

$.gulp.task("webpack_column",()=>{
  $.gulp.src([config.src.column + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.column + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.column + "/js/"));
});

$.gulp.task("webpack_enquete",()=>{
  $.gulp.src([config.src.enquete + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.enquete + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.enquete + "/js/"));
});

$.gulp.task("webpack_facility",()=>{
  $.gulp.src([config.src.facility + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.facility + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.facility + "/js/"));
});

$.gulp.task("webpack_labwall",()=>{
  $.gulp.src([config.src.labwall + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.labwall + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.labwall + "/js/"));
});

$.gulp.task("webpack_login",()=>{
  $.gulp.src([config.src.login + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.login + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.login + "/js/"));
});

$.gulp.task("webpack_midokoro",()=>{
  $.gulp.src([config.src.midokoro + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.midokoro + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.midokoro + "/js/"));
});

$.gulp.task("webpack_news",()=>{
  $.gulp.src([config.src.news + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.news + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.news + "/js/"));
});

$.gulp.task("webpack_staffblog",()=>{
  $.gulp.src([config.src.staffblog + "/js/script.js"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.src.staffblog + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe($.gulp.dest(config.dest.staffblog + "/js/"));
});
