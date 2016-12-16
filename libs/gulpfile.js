var gulp = require("gulp");
var requireDir = require("require-dir");
requireDir("./gulp/tasks", {recursive : true});

gulp.task('default', ['watch','watch_vol1']);
