const config = require("../config")
    ,$ = config.$;

const _error = "PUGでerror";

$.gulp.task("pug_all",()=>{
  $.gulp.src([config.src.top + "/**/*.pug", "!" + config.src.top + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: " + _error)}))
      .pipe($.cached("pug"))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.top));
});

$.gulp.task("pug_all_test",()=>{
  $.gulp.src([config.src.top + "/**/*.pug", "!" + config.src.top + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.changed(config.dest.top, {extension: '.html'}))
      .pipe($.gulpif(global.isWatching, $.cached("pug")))
      .pipe($.pugInherit({basedir: config.src.top}))
      .pipe($.filter((file)=>{
        return !/\/__/.test(file.path) && !/^_/.test(file.relative);
      }))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.top));
});

$.gulp.task("pug_common",()=>{
  $.gulp.src([config.src.top + "/**/*.pug", "!" + config.src.top + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.top));
});

$.gulp.task("pug_top",()=>{
  $.gulp.src([config.src.top + "/*.pug", "!" + config.src.top + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: " + _error)}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.top));
});
$.gulp.task("pug_column",()=>{
  $.gulp.src([config.src.column + "/*.pug", "!" + config.src.column + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.column));
});

$.gulp.task("pug_enquete",()=>{
  $.gulp.src([config.src.enquete + "/*.pug", "!" + config.src.enquete + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.enquete ));
});

$.gulp.task("pug_facility",()=>{
  $.gulp.src([config.src.facility + "/*.pug", "!" + config.src.facility + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.facility ));
});

$.gulp.task("pug_labwall",()=>{
  $.gulp.src([config.src.labwall + "/*.pug", "!" + config.src.labwall + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.labwall ));
});

$.gulp.task("pug_login",()=>{
  $.gulp.src([config.src.login + "/*.pug", "!" + config.src.login + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.login ));
});

$.gulp.task("pug_midokoro",()=>{
  $.gulp.src([config.src.midokoro + "/*.pug", "!" + config.src.midokoro + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.midokoro ));
});

$.gulp.task("pug_news",()=>{
  $.gulp.src([config.src.news + "/*.pug", "!" + config.src.news + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.news ));
});

$.gulp.task("pug_staffblog",()=>{
  $.gulp.src([config.src.staffblog + "/*.pug", "!" + config.src.staffblog + "/**/_*.pug"])
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.pug({pretty: true}))
      .pipe($.gulp.dest(config.dest.staffblog ));
});
