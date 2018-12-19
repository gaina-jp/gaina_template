import $ from 'jQuery';
import _navigation from './_Navigation';
global.$ = global.jQuery = $;
jQuery(($)=>{
  let $window = $(window);
  _navigation();

  let __resizeFunc = ()=>{};
  let __scrollFunc = ()=>{};

  $window.on("resize", __resizeFunc);
  $window.on("scroll", __scrollFunc);
  __resizeFunc();
  __scrollFunc();

  window.onload = function(){
    __resizeFunc();
  };


  let _scrollToPagetop = (event)=>{
    $("html, body").stop().animate({scrollTop: 0},400);
    return false;
  };

  $toPagetop.on("click", _scrollToPagetop);

  let _scrollToTarget = (event)=>{
    let __$target = $(event.currentTarget);
    let __targetHash = __$target.attr("href");
    if(__targetHash === "" || __targetHash.indexOf("#") !== 0){
      return false;
    }
    let __targetOffsetTop = $(__targetHash).offset().top - $("#navi").outerHeight();
    $("html, body").stop().animate({scrollTop: __targetOffsetTop},400);
    return false;
  };
  $(".btn-anchor").on("click", _scrollToTarget);

});