var gulp = require("gulp");
var runSequence = require("run-sequence");

gulp.task("build",function(){
  runSequence("webpack","stylus","copy");
});

gulp.task("build_vol1",function(){
  runSequence("webpack_vol1","stylus_vol1","copy_vol1");
});