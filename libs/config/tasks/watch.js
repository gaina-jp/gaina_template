const config = require("../config")
    ,$ = config.$;
const { watch, task, parallel } = require('gulp');

task("setWatch", function(cb){
  global.isWatching = true;
  cb();
});
task("test", function(cb){
  watch(config.targetSrc.top + "/**/*.pug", task('pug_all_test'));
  global.isWatching = true;
  cb();
});

task("template", function(cb){
  watch(config.targetSrc.template + config.targetSrc.pug, task('pug_template'));
  cb();
});

task("common", function(cb){
  watch(config.targetSrc.common + config.targetSrc.js, task('webpack_common'));
  watch(config.targetSrc.common + config.targetSrc.css, task('sass_common'));
  watch(config.targetSrc.common + config.targetSrc.pug, task('pug_common'));
  cb();
});

task("top", function(cb){
  watch(config.targetSrc.top + config.targetSrc.js, task('webpack_top'));
  watch(config.targetSrc.top + config.targetSrc.css, task('sass_top'));
  watch(config.targetSrc.top + config.targetSrc.pug, task('pug_top'));
  cb();
});

task("about", function(cb){
  watch(config.targetSrc.about + config.targetSrc.js, task('webpack_about'));
  watch(config.targetSrc.about + config.targetSrc.css, task('sass_about'));
  watch(config.targetSrc.about + config.targetSrc.pug, task('pug_about'));
  cb();
});


task("all", function(cb){
  watch(config.targetSrc.template + config.targetSrc.pug, task('pug_template'));
  watch(config.targetSrc.common + config.targetSrc.js, task('webpack_common'));
  watch(config.targetSrc.common + config.targetSrc.css, task('sass_common'));
  watch(config.targetSrc.common + config.targetSrc.pug, task('pug_common'));
  watch(config.targetSrc.top + config.targetSrc.js, task('webpack_top'));
  watch(config.targetSrc.top + config.targetSrc.css, task('sass_top'));
  watch(config.targetSrc.top + config.targetSrc.pug, task('pug_top'));
  watch(config.targetSrc.about + config.targetSrc.js, task('webpack_about'));
  watch(config.targetSrc.about + config.targetSrc.css, task('sass_about'));
  watch(config.targetSrc.about + config.targetSrc.pug, task('pug_about'));
  cb();
});