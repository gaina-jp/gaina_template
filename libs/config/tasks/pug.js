const config = require("../config")
    ,{ task, src, dest } = require('gulp')
    ,$ = config.$;

task("pug_template",()=>{
  return src([config.targetSrc.top + "/**/*.pug", "!" + config.targetSrc.top + "/**/_*.pug"])
      .pipe($.pug({pretty: true}))
      .pipe(dest(config.output.top));
});

task("pug_top",()=>{
  return src([config.targetSrc.top + "/*.pug", "!" + config.targetSrc.top + "/**/_*.pug"])
      .pipe($.pug({pretty: true}))
      .pipe(dest(config.output.top));
});

task("pug_about",()=>{
  return src([config.targetSrc.about + "/*.pug", "!" + config.targetSrc.about + "/**/_*.pug"])
      .pipe($.pug({pretty: true}))
      .pipe(dest(config.output.about));
});
