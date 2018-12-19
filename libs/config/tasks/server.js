const config = require("../config")
    ,{ watch, series, task, src, dest } = require('gulp')
    ,$ = config.$;

// gulp-webserver
task("server",()=>{
  return src(config.dest.top)
      .pipe($.server({
        host: config.server.host,
        port: config.server.port,
        livereload: true,
        open: true
      }));
});
