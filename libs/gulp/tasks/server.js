const config = require("../config")
    ,$ = config.$;

// gulp-webserver
$.gulp.task("server",()=>{
  $.gulp.src(config.dest.top)
      .pipe($.server({
        host: config.server.host,
        port: config.server.port,
        livereload: true,
        open: true
      }));
});

// browser-sync
$.gulp.task("browsersync",()=>{
  $.bs.init({
    proxy: {
      target: 'http://' + config.server.host + ':' + config.server.port + '/'
    },
    open: "external",
    host: config.server.host,
    port: config.server.port
  });
  $.gulp.watch(config.dest.top + "/**/*.html", ['reload']);
  $.gulp.watch(config.dest.top + "/**/*.css", ['reload']);
  $.gulp.watch(config.dest.top + "/**/*.js", ['reload']);
});
$.gulp.task("reload",()=>{
  $.bs.reload();
});
