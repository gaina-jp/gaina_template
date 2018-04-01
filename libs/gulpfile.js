let gulp = require("gulp"),
    requireDir = require("require-dir");

requireDir("./gulp/tasks", {recursive : true});

gulp.task('stylus', ['server', 'watch_stylus_all']);
gulp.task('webpack', ['server', 'watch_webpack_all']);
gulp.task('pug', ['server', 'watch_pug_all']);

gulp.task('all', ['server', 'watch_webpack_all', 'watch_stylus_all', 'watch_pug_all','watch_image']);

gulp.task('common', ['server', 'watch_common','watch_image']);

gulp.task('sync', ['browsersync', 'stylus_all', 'webpack_all','watch_image']);
gulp.task('default', ['server', 'stylus_all', 'webpack_all','imagemin']);
