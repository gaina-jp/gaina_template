const config = require("../config")
    ,$ = config.$;


$.gulp.task("setWatch", ()=>{
  global.isWatching = true;
});
$.gulp.task("watch_test", ()=>{
  $.gulp.watch(config.src.top + "/**/*.pug", ['pug_all_test']);
  global.isWatching = true;
});

$.gulp.task("watch_image", ()=>{
  $.gulp.watch(config.src.top + "/**/*.+(jpg|png|gif)", ['imagemin']);
});


$.gulp.task("watch_common", ()=>{
  $.gulp.watch(config.src.common + config.src.js, ['webpack_common']);
  $.gulp.watch(config.src.common + config.src.css, ['stylus_common']);
  $.gulp.watch(config.src.top + "/**/_*.pug", ['pug_common']);
});
$.gulp.task("watch_top", ()=>{
  $.gulp.watch(config.src.top + config.src.js, ['webpack_top']);
  $.gulp.watch(config.src.top + config.src.css, ['stylus_top']);
  $.gulp.watch(config.src.top + config.src.pug, ['pug_top']);
});
$.gulp.task("watch_column", ()=>{
  $.gulp.watch(config.src.column + config.src.js, ['webpack_column']);
  $.gulp.watch(config.src.column + config.src.css, ['stylus_column']);
  $.gulp.watch(config.src.column + "/**/*.pug", ['pug_column']);
});
$.gulp.task("watch_enquete", ()=>{
  $.gulp.watch(config.src.enquete + config.src.js, ['webpack_enquete']);
  $.gulp.watch(config.src.enquete + config.src.css, ['stylus_enquete']);
  $.gulp.watch(config.src.enquete + "/**/*.pug", ['pug_enquete']);
});
$.gulp.task("watch_facility", ()=>{
  $.gulp.watch(config.src.facility + config.src.js, ['webpack_facility']);
  $.gulp.watch(config.src.facility + config.src.css, ['stylus_facility']);
  $.gulp.watch(config.src.facility + "/**/*.pug", ['pug_facility']);
});
$.gulp.task("watch_labwall", ()=>{
  $.gulp.watch(config.src.labwall + config.src.js, ['webpack_labwall']);
  $.gulp.watch(config.src.labwall + config.src.css, ['stylus_labwall']);
  $.gulp.watch(config.src.labwall + "/**/*.pug", ['pug_labwall']);
});
$.gulp.task("watch_login", ()=>{
  $.gulp.watch(config.src.login + config.src.js, ['webpack_login']);
  $.gulp.watch(config.src.login + config.src.css, ['stylus_login']);
  $.gulp.watch(config.src.login + "/**/*.pug", ['pug_login']);
});
$.gulp.task("watch_midokoro", ()=>{
  $.gulp.watch(config.src.midokoro + config.src.js, ['webpack_midokoro']);
  $.gulp.watch(config.src.midokoro + config.src.css, ['stylus_midokoro']);
  $.gulp.watch(config.src.midokoro + "/**/*.pug", ['pug_midokoro']);
});
$.gulp.task("watch_news", ()=>{
  $.gulp.watch(config.src.news + config.src.js, ['webpack_news']);
  $.gulp.watch(config.src.news + config.src.css, ['stylus_news']);
  $.gulp.watch(config.src.news + "/**/*.pug", ['pug_news']);
});
$.gulp.task("watch_staffblog", ()=>{
  $.gulp.watch(config.src.staffblog + config.src.js, ['webpack_staffblog']);
  $.gulp.watch(config.src.staffblog + config.src.css, ['stylus_staffblog']);
  $.gulp.watch(config.src.staffblog + "/**/*.pug", ['pug_staffblog']);
});


$.gulp.task("watch_pug_all", ()=>{
  $.gulp.watch(config.src.top + "/**/*.pug", ['pug_all']);
});
$.gulp.task("watch_stylus_all", ()=>{
  $.gulp.watch(config.src.top + "/**/*.styl", ['stylus_all']);
});
$.gulp.task("watch_webpack_all", ()=>{
  $.gulp.watch(config.src.common + config.src.js, ['webpack_common']);
  $.gulp.watch(config.src.top + config.src.js, ['webpack_top']);
  $.gulp.watch(config.src.column + config.src.js, ['webpack_column']);
  $.gulp.watch(config.src.enquete + config.src.js, ['webpack_enquete']);
  $.gulp.watch(config.src.facility + config.src.js, ['webpack_facility']);
  $.gulp.watch(config.src.labwall + config.src.js, ['webpack_labwall']);
  $.gulp.watch(config.src.login + config.src.js, ['webpack_login']);
  $.gulp.watch(config.src.midokoro + config.src.js, ['webpack_midokoro']);
  $.gulp.watch(config.src.news + config.src.js, ['webpack_news']);
  $.gulp.watch(config.src.staffblog + config.src.js, ['webpack_staffblog']);
});

$.gulp.task("watch", ()=>{
  $.gulp.watch(config.src.top + "/**/*.pug", ['pug_all']);
  $.gulp.watch(config.src.top + "/**/*.styl", ['stylus_all']);
  $.gulp.watch(config.src.common + config.src.js, ['webpack_common']);
  $.gulp.watch(config.src.top + config.src.js, ['webpack_top']);
  $.gulp.watch(config.src.column + config.src.js, ['webpack_column']);
  $.gulp.watch(config.src.enquete + config.src.js, ['webpack_enquete']);
  $.gulp.watch(config.src.facility + config.src.js, ['webpack_facility']);
  $.gulp.watch(config.src.labwall + config.src.js, ['webpack_labwall']);
  $.gulp.watch(config.src.login + config.src.js, ['webpack_login']);
  $.gulp.watch(config.src.midokoro + config.src.js, ['webpack_midokoro']);
  $.gulp.watch(config.src.news + config.src.js, ['webpack_news']);
  $.gulp.watch(config.src.staffblog + config.src.js, ['webpack_staffblog']);
});