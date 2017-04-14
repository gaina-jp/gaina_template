var gulp = require("gulp"),
    requireDir = require("require-dir");

requireDir("./gulp/tasks", {recursive : true});

gulp.task('common', ['watch_module','watch_common']);
gulp.task('top', ['watch_module','watch']);
gulp.task('default', ['watch_module','watch','watch_common']);
