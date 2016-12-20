var dest = "../html";// 出力先
var src = "./src";// 元データ

var top_src = src + "/top";
var vol1_src = src + "/vol1";

var vol1_dir = dest + "/vol1";

module.exports = {
  dest : {
    top : dest,
    vol1 : vol1_dir
  },

  src : {
    top : top_src,
    vol1 : vol1_src
  },

  js:{
    // 使ってない -> src : src + "/js/**",
    // 使ってない -> dest : dest + "/js",
    uglify : true
  },

  webpack :{
    //entry : src + "/coffee/app.coffee",
    entry : {
      top :top_src + "/coffee/top.coffee"
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

  // copyは使ってないけど、一応ある
  copy : {
    src : [
      src + "/www/index.html"
    ],
    dest : dest
  },

  stylus :{
    src : [
      top_src + "/styl/**/!(_)*"
    ],
    dest : dest + '/css/',
    output : "top.css",
    autoprefixer : {
      browsers : ["last 3 versions", "ie 8", "ios 4", "android 2.3"]
    },
    minify : true
  },

  watch : {
    webpack : top_src + "/coffee/**/**.coffee",
    stylus : top_src + "/styl/**/*"
  },

 /*
  * _vol1は別ディレクトリ用サンプル
  * ディレクトリごとに分けたい場合はこんな感じ
  * まったくスマートじゃないけどね！
  */

  webpack_vol1 :{
    //entry : src + "/coffee/app.coffee",
    entry : {
      vol1 :vol1_src + "/coffee/vol1.coffee"
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

  copy_vol1 : {
    src : [
      src + "/www/vol1/index.html"
    ],
    dest : dest
  },

  stylus_vol1 :{
    src : [
      vol1_src + "/styl/**/!(_)*"
    ],
    dest : vol1_dir + '/css/',
    output : "vol1.css",
    autoprefixer : {
      browsers : ["last 3 versions", "ie 8", "ios 4", "android 2.3"]
    },
    minify : true
  },

  watch_vol1 : {
    webpack : vol1_src + "/coffee/**/**.coffee",
    stylus : vol1_src + "/styl/**/*"
  }
};