var dest = "../html";// 出力先
var src = "./src";// 元データ

module.exports = {
  dest : dest,

  js:{
    src : src + "/js/**",
    dest : dest + "/js",
    uglify : true
  },

  webpack :{
    //entry : src + "/coffee/app.coffee",
    entry : {
      top :src + "/top/coffee/top.coffee"
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

  copy : {
    src : [
      src + "/www/index.html"
    ],
    dest : dest
  },

  stylus :{
    src : [
      src + "/top/styl/**/!(_)*"
    ],
    dest : dest + '/css/',
    output : "top.css",
    autoprefixer : {
      browsers : ["last 3 versions", "ie 8", "ios 4", "android 2.3"]
    },
    minify : true
  },

  watch : {
    webpack : src + "/top/coffee/**/**.coffee",
    stylus : src + "/top/styl/**/*"
  },

 /*
  * _vol1は別ディレクトリ用サンプル
  * ディレクトリごとに分けたい場合はこんな感じ
  * まったくスマートじゃないけどね！
  */

  webpack_vol1 :{
    //entry : src + "/coffee/app.coffee",
    entry : {
      vol1 :src + "/vol1/coffee/vol1.coffee"
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
      src + "/vol1/styl/**/!(_)*"
    ],
    dest : dest + '/vol1/css/',
    output : "vol1.css",
    autoprefixer : {
      browsers : ["last 3 versions", "ie 8", "ios 4", "android 2.3"]
    },
    minify : true
  },

  watch_vol1 : {
    webpack : src + "/vol1/coffee/**/**.coffee",
    stylus : src + "/vol1/styl/**/*"
  }
};