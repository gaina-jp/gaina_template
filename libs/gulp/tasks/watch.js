var gulp = require("gulp"),
    config = require("../config");

gulp.task("watch_module", ['webpack', 'webpack_common', 'stylus' ,'stylus_common'], function(){
  gulp.watch(config.watch.module.webpack, ['webpack', 'webpack_common']);
  gulp.watch(config.watch.module.stylus, ['stylus' ,'stylus_common']);
});

gulp.task("watch_common", ["webpack_common", "stylus_common"], function(){
  gulp.watch(config.watch.common.webpack, ['webpack_common']);
  gulp.watch(config.watch.common.stylus, ['stylus_common']);
});

gulp.task("watch", ["webpack", "stylus"], function(){
  gulp.watch(config.watch.top.webpack, ['webpack']);
  gulp.watch(config.watch.top.stylus, ['stylus']);
});

gulp.task("watch_html", ["reload_html"], function(){
  gulp.watch(config.dest.top + "/**/*.html", ['reload_html']);
});

