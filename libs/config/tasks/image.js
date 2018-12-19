const config = require("../config")
    ,$ = config.$
    ,_imagemin = [
      $.imageminJpg({
        min: 70,
        max: 80
      }),
      $.imageminPng(),
      $.imageminGif({
        interlaced: false,
        optimizationLevel: 3,
        colors: 200
      }),
    $.imageminSVG()
    ];
const { watch, series, task, src, dest } = require('gulp');

task("imagemin",()=>{
  return src(config.src.top + "/**/*.+(jpg|png|gif|svg)")
      .pipe($.plumber({
        errorHandler: function(e){
          console.log(e);
        }
      }))
      .pipe($.changed(config.dest.top))
      .pipe($.imagemin(_imagemin))
      .pipe(dest(config.dest.top));
});

