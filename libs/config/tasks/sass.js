const config = require("../config")
    ,$ = config.$;
const { task, src, dest } = require('gulp');

task("sass_common",()=>{
  return src([config.targetSrc.common + "/css/style.scss", "!" + config.targetSrc.common + "/css/_**.scss"])
      .pipe($.plumber({
        errorHandler: function(e){
          console.log(e);
        }
      }))
      .pipe($.sass(config.sass.opt))
      .pipe($.autoprefixer(config.sass.autoprefixer))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.sass.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.write("/")))
      .pipe(dest(config.output.common + "/css/"));
});

task("sass_top",()=>{
  return src([config.targetSrc.top + "/css/style.scss", "!" + config.targetSrc.top + "/css/_**.scss"])
      .pipe($.plumber({
        errorHandler: function(e){
          console.log(e);
        }
      }))
      .pipe($.sass(config.sass.opt))
      .pipe($.autoprefixer(config.sass.autoprefixer))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.sass.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.write("/")))
      .pipe(dest(config.output.top + "/css/"));
});

task("sass_about",()=>{
  return src([config.targetSrc.about + "/css/style.scss", "!" + config.targetSrc.about + "/css/_**.scss"])
      .pipe($.plumber({
        errorHandler: function(e){
          console.log(e);
        }
      }))
      .pipe($.sass(config.sass.opt))
      .pipe($.autoprefixer(config.sass.autoprefixer))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.init()))
      .pipe($.gulpif(config.sass.minify, $.cleanCSS({level:0}/*,function(e){console.log(e)}*/)))
      .pipe($.gulpif(config.sass.sourcemap, $.sourcemaps.write("/")))
      .pipe(dest(config.output.about + "/css/"));
});
