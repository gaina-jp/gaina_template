var __path = require("path");
var dest = "../htdocs";// 出力先
var src = "./src";// 元データ
var path = {
  dest : {
    common : dest + "/common",
    top : dest
  },

  src : {
    module : src + "/__utility",
    common : src + "/common",
    top : src
  }
};

module.exports = {
  dest : {
    common : path.dest.common,
    top : path.dest.top
  },

  src : {
    module : path.src.module,
    common : path.src.common,
    top : path.src.top
  },

  webpack :{
    _ : { /* Webpack、multiファイル吐き出し、watchでcache、1ファイルでどうにかしたかったけどできてない残骸Object */
      watch: true,
      cache : true,
      entry : {
        "common/js/common" : path.src.common + "/js/common.coffee",
        "js/top" : path.src.top + "/js/top.coffee"
      },
      output : {
        filename : "[name].js",
        path: __path.join(__dirname, "../../htdocs")
      },
      externals: {"jquery": "jQuery"},
      module:{loaders: [{test: /\.coffee$/, loader: "coffee-loader"}]},
      resolve : {extensions : ["", ".js", ".coffee"]}
    },

    common : {
      entry : {
        common : path.src.common + "/js/common.coffee"
      }
    },

    top : {
      entry : {
        top : path.src.top + "/js/top.coffee"
      }
    },

    output : {
      filename : "[name].js"
    },
    externals: {
      "jquery": "jQuery"
    },
    module:{
      loaders: [
        {test: /\.coffee$/, loader: "coffee-loader"}
      ]
    },
    resolve : {
      extensions : ["", ".js", ".coffee"]
    },
    uglify : true
  },

  stylus :{
    src : {
      all : path.src.top + "/**/css/**/!(_)*",
      common : [path.src.common + "/css/**/!(_)*"],
      top : [path.src.top + "/css/**/!(_)*"],
      exception : "!" + path.src.top + "/__utility/css/**/*"
    },
    autoprefixer : {
      browsers : ["last 2 versions", "ie 10", "ios 9", "android 4.0"]
    },
    minify : true,
    sourcemap : false
  },

  watch : {
    module : {
      webpack : path.src.module + "/js/**/*",
      stylus : path.src.module + "/css/**/*"
    },
    common : {
      webpack : path.src.common + "/js/**/*",
      stylus : path.src.common + "/css/**/*"
    },
    top : {
      webpack : path.src.top + "/js/**/*",
      stylus : path.src.top + "/css/**/*"
    }
  },

  connect : {
    host : "localhost" /*default "localhost"*/,
    root : dest,
    port : 12111  /*default 8080*/,
    livereload : true
  }
};