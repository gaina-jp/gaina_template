var gulp = require("gulp"),
    config = require("../config").watch,
    config_vol1 = require("../config").watch_vol1;

gulp.task("watch", ["webpack", "stylus"], function(){
  gulp.watch(config.webpack, ['webpack']);
  gulp.watch(config.stylus, ['stylus']);
});

gulp.task("watch_vol1", ["webpack_vol1", "stylus_vol1"], function(){
  gulp.watch(config_vol1.webpack, ['webpack_vol1']);
  gulp.watch(config_vol1.stylus, ['stylus_vol1']);
});