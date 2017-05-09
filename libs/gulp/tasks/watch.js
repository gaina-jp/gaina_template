var gulp = require("gulp"),
    config = require("../config");

gulp.task("watch_module", function(){
  gulp.watch(config.watch.module.webpack, ['webpack_top', 'webpack_common']);
  gulp.watch(config.watch.module.stylus, ['stylus_all']);
});

gulp.task("watch_stylus", function(){
  gulp.watch(config.stylus.src.all , ['stylus']);
});

gulp.task("watch_common", function(){
  gulp.watch(config.watch.common.webpack, ['webpack_common']);
});

gulp.task("watch_top", function(){
  gulp.watch(config.watch.top.webpack, ['webpack_top']);
});

gulp.task("watch_html", function(){
  gulp.watch([
    config.dest.top + "/**/*.html",
    config.dest.top + "/**/*.js",
    config.dest.top + "/**/*.css"
  ], ['reload_html']);
});

