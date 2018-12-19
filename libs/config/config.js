'use strict';
const path = require("path")
    ,dest = "../htdocs"
    ,src = "./src";

// npm plugin まとめる
const $ = {
  pug : require("gulp-pug"),
  pugInherit : require('gulp-pug-inheritance'),
  // filter : require('gulp-filter'),
  sass : require("gulp-sass"),
  packageImporter : require('node-sass-package-importer'),
  autoprefixer : require("gulp-autoprefixer"),
  sourcemaps : require("gulp-sourcemaps"),
  cleanCSS : require("gulp-clean-css"),
  webpack : require("gulp-webpack"),
  uglify : require("gulp-uglify"),
  babel : require("gulp-babel"),
  gulpif : require("gulp-if"),
  changed : require("gulp-changed"),
  cached : require("gulp-cached"),
  plumber : require("gulp-plumber"),
  server : require("gulp-webserver"),
  imagemin : require('gulp-imagemin'),
  imageminJpg : require('imagemin-jpeg-recompress'),
  imageminPng : require('imagemin-pngquant'),
  imageminGif : require('imagemin-gifsicle'),
  imageminSVG : require('imagemin-svgo')
};

const config = {
  $ : $,

  output : {
    js : "/js",
    css : "/css",
    common : dest + "/common",
    top : dest,
    about : dest + "/about",
  },

  targetSrc : {
    js : "/js/*.js",
    css : "/css/*.scss",
    pug : "/*.pug",
    images : "/*.+(jpg|gif|png)",
    template : src + "/__template",
    module : src + "/__utility",
    common : src + "/common",
    top : src,
    about : src + "/about",
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
    minify : true,
    options : {preserveComments:"some"}
  },

  sass :{
    src : {
      common : src + "/common/css/!(_)*",
      all : src + "/**/css/**/!(_)*",
      exception : "!" + src + "/__utility/css/**/*"
    },
    output : "style.css",
    autoprefixer : {
      browsers : ["last 2 versions", "ie 10", "ios 9", "android 4.0"]
    },
    minify : true,
    sourcemap : true,
    opt:{
      importer: $.packageImporter({
        extensions: ['.scss', '.css']
      })
      // import: ['nib'],
      // use: [$.nib()]
    }
  },

  server : {
    host : "192.168.1.184",
    root : dest,
    port : "25769",
    livereload : true
  }
};

module.exports = config;