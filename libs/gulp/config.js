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
    top : src + "/top"
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
    common : {
      entry : {
        common : path.src.common + "/coffee/common.coffee"
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
      }
    },

    top : {
      entry : {
        top : path.src.top + "/coffee/top.coffee"
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
      }
    },

    uglify : true
  },

  stylus :{
    src : {
      common : [path.src.common + "/styl/**/!(_)*"],
      top : [path.src.top + "/styl/**/!(_)*"]
    },
    output : {
      common : "common.css",
      top : "top.css"
    },
    autoprefixer : {
      browsers : ["last 3 versions", "ie 8", "ios 4", "android 2.3"]
    },
    minify : true
  },

  watch : {
    module : {
      webpack : path.src.module + "/coffee/**/**.coffee",
      stylus : path.src.module + "/styl/**/*"
    },
    common : {
      webpack : path.src.common + "/coffee/**/**.coffee",
      stylus : path.src.common + "/styl/**/*"
    },
    top : {
      webpack : path.src.top + "/coffee/**/**.coffee",
      stylus : path.src.top + "/styl/**/*"
    }
  },

  connect : {
    host : "localhost" /*default "localhost"*/,
    root : dest,
    port : 12111  /*default 8080*/,
    livereload : true
  }
};