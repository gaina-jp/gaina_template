var gulp = require("gulp"),
    connect = require("gulp-connect"),
    config = require("../config");

gulp.task("connect",function(){
  connect.server({
    host: config.connect.host,
    root: config.connect.root,
    port: config.connect.port,
    livereload: config.connect.livereload
  });
});

gulp.task("reload_html",function(){
  gulp.src(config.connect.root + "/**/*.html")
      .pipe(connect.reload());
});