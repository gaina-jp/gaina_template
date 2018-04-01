const path = require("path")
    ,dest = "../htdocs"
    ,src = "./src";

// npm plugin まとめる
const $ = {
  gulp : require("gulp"),
  pug : require("gulp-pug"),
  pugInherit : require('gulp-pug-inheritance'),
  filter : require('gulp-filter'),
  stylus : require("gulp-stylus"),
  autoprefixer : require("gulp-autoprefixer"),
  sourcemaps : require("gulp-sourcemaps"),
  cleanCSS : require("gulp-clean-css"),
  nib : require('nib'),
  webpack : require("gulp-webpack"),
  uglify : require("gulp-uglify"),
  babel : require("gulp-babel"),
  gulpif : require("gulp-if"),
  changed : require("gulp-changed"),
  cached : require("gulp-cached"),
  plumber : require("gulp-plumber"),
  notify : require('gulp-notify'),
  server : require("gulp-webserver"),
  bs : require("browser-sync").create(),
  imagemin : require('gulp-imagemin'),
  imageminJpg : require('imagemin-jpeg-recompress'),
  imageminPng : require('imagemin-pngquant'),
  imageminGif : require('imagemin-gifsicle')
};


module.exports = {
  $ : $,

  dest : {
    js : "/js",
    css : "/css",
    common : dest + "/common",
    top : dest,
    bookcafe : dest + "/bookcafe",
    column : dest + "/column",
    enquete : dest + "/enquete",
    facility : dest + "/facility",
    labwall : dest + "/labwall",
    login : dest + "/login",
    midokoro : dest + "/midokoro",
    news : dest + "/news",
    staffblog : dest + "/staffblog"
  },

  src : {
    js : "/js/*.js",
    css : "/css/*.styl",
    pug : "/*.pug",
    module : src + "/__utility",
    common : src + "/common",
    top : src,
    bookcafe : src + "/bookcafe",
    column : src + "/column",
    enquete : src + "/enquete",
    facility : src + "/facility",
    labwall : src + "/labwall",
    login : src + "/login",
    midokoro : src + "/midokoro",
    news : src + "/news",
    staffblog : src + "/staffblog"
  },

  //see -> https://qiita.com/syunchanp/items/dace515632a9baff344b
  //see -> https://github.com/babel/babel-loader/issues/505
  webpack :{
    context : path.resolve(__dirname, '../'),
    output : {
      filename : "[name].js"
    },
    externals: {
      "jquery": "jQuery"
    },
    module:{
      loaders: [
        {
          test: /\.js/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    },
    resolve : {
      root : path.resolve(__dirname, '../'),
      extensions : ["", ".js"]
    }
  },

  uglify : {
    minify : false,
    options : {preserveComments:"some"}
  },

  stylus :{
    src : {
      common : src + "/common/css/!(_)*",
      all : src + "/**/css/**/!(_)*",
      exception : "!" + src + "/__utility/css/**/*"
    },
    output : "style.css",
    autoprefixer : {
      browsers : ["last 2 versions", "ie 10", "ios 9", "android 5.0"]
    },
    minify : false,
    sourcemap : false,
    opt:{
      import: ['nib'],
      use: [$.nib()]
    }
  },

  server : {
    host : "192.168.1.96",
    root : dest,
    port : "25769",
    livereload : true
  }
};
