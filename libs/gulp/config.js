var __path = require("path");
var dest = "../htdocs";// 出力先
var src = "./src";// 元データ

module.exports = {
  dest : {
    js : "/js",
    css : "/css",
    common : dest + "/common",
    top : dest
  },

  src : {
    js : "/js/**/*",
    css : "/css/**/*",
    module : src + "/__utility",
    common : src + "/common",
    top : src
  },

  webpack :{
    output : {filename : "[name].js"},
    externals: {"jquery": "jQuery"},
    module:{
      loaders: [
        {test: /\.coffee$/, loader: "coffee-loader"}
      ]
    },
    resolve : {extensions : ["", ".js", ".coffee"]}
  },
  uglify : {
    minify : true,
    options : {preserveComments:"some"}
  },

  stylus :{
    src : {
      common : src + "/common/css/!(_)*",
      top : src + "/css/!(_)*",
      all : src + "/**/css/**/!(_)*",
      exception : "!" + src + "/__utility/css/**/*"
    },
    output : "style.css",
    autoprefixer : {
      browsers : ["last 2 versions", "ie 10", "ios 9", "android 4.0"]
    },
    minify : true,
    sourcemap : false
  },

  connect : {
    host : "localhost" /*default "localhost"*/,
    root : dest,
    port : 12111  /*default 8080*/,
    livereload : true
  }
};