const config = require("../config")
    ,{ task, src, dest } = require('gulp')
    ,$ = config.$;

task("webpack_common",function(){
  return src(config.targetSrc.common + "/js/script.js")
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.targetSrc.common + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe(dest(config.output.common + "/js/"));
});

task("webpack_top",function(){
  return src(config.targetSrc.top + "/js/script.js")
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.targetSrc.top + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe(dest(config.output.top + "/js/"));
});

task("webpack_about",function(){
  return src(config.targetSrc.about + "/js/script.js")
      .pipe($.webpack({
        context : config.webpack.context,
        entry : config.targetSrc.about + "/js/script.js",
        output : {filename : "script.js"},
        externals: config.webpack.externals,
        module: config.webpack.module,
        resolve : config.webpack.resolve
      }))
      .pipe($.gulpif(config.uglify.minify, $.uglify()))
      .pipe(dest(config.output.about + "/js/"));
});
