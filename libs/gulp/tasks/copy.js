var gulp = require("gulp");
var config = require("../config").copy;

gulp.task("copy",function(){
  return gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
});

gulp.task("copy_vol1",function(){
  return gulp.src(config.src)
      .pipe(gulp.dest(config.dest));
});