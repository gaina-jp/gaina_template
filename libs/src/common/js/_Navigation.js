let Navigation = ()=>{
  let $html = $("html");
  let $navi = $("#navi");
  let $naviContent = $("#navi_content");
  let $naviBtn = $("#navi_btn");
  let $naviBG = $("#navi_bg");

  let _clickFunc = ()=>{
    if($navi.hasClass("navi-open")){
      $html.removeClass("hide-window");
      $navi.removeClass("navi-open");
      $naviContent.removeClass("navi-inner-open");
      $naviBtn.removeClass("navi-btn-open");
    }else{
      $html.addClass("hide-window");
      $navi.addClass("navi-open");
      $naviContent.addClass("navi-inner-open");
      $naviBtn.addClass("navi-btn-open");
    }
  };

  $naviBG.on("click",_clickFunc);
  $naviBtn.on("click",_clickFunc)
};


module.exports = Navigation;