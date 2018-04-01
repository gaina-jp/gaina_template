const config = require("../config")
    ,$ = config.$;

$.gulp.task("imagemin",()=>{
  $.gulp.src(config.src.top + "/**/*.+(jpg|png|gif)")
      .pipe($.plumber({errorHandler: $.notify.onError("Error: <%= error.message %>")}))
      .pipe($.changed(config.dest.top))
      .pipe($.imagemin([
        $.imageminJpg({
          min: 40,
          max: 80
        }),
        $.imageminPng(),
        $.imageminGif({
          interlaced: false,
          optimizationLevel: 3,
          colors: 200
        })
      ]))
      .pipe($.gulp.dest(config.dest.top));
});

