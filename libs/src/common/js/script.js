import $ from 'jQuery';
import _navigation from './_Navigation';
global.$ = global.jQuery = $;
jQuery(($)=>{
  let $window = $(window);
  _navigation();

  let $fixedBar = $("#fixed_bar");
  let $toPagetop =  $("#to_pagetop");
  if($fixedBar.length !== 0){
    let _$footer = $("footer");
    $fixedBar.css({position: "fixed"});
    let __fixedBarHeight = $fixedBar.outerHeight();

    let __resizeFunc = ()=>{
      __fixedBarHeight = $fixedBar.outerHeight();
      _$footer.css({paddingTop: __fixedBarHeight});
      $toPagetop.css({bottom: $fixedBar.outerHeight() + 20});
    };
    let __scrollFunc = ()=>{
      let __posAmount = $window.scrollTop() + $window.height() - __fixedBarHeight;
      if(__posAmount > _$footer.offset().top){
        $fixedBar.css({position: "absolute", top: "0", bottom:"inherit"});
        $toPagetop.css({bottom: 20});
      }else{
        $fixedBar.css({position: "fixed", top: "", bottom:""});
        $toPagetop.css({bottom: $fixedBar.outerHeight() + 20});
      }
    };

    $window.on("resize", __resizeFunc);
    $window.on("scroll", __scrollFunc);
    __resizeFunc();
    __scrollFunc();

    window.onload = function(){
      __resizeFunc();
    };
  }


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