$ ->
  $html = $("html")
  $navi = $("#navi")
  $naviContent = $("#navi_content")
  $naviBtn = $("#navi_btn")
  $naviBG = $("#navi_bg")

  _clickFunc = ()->
    if $navi.hasClass("navi-left-to-right")
      if $navi.hasClass("navi-open")
        $html.removeClass("hide-window")
        $navi.removeClass("navi-open")
        $naviContent.removeClass("navi-inner-open")
        $naviBtn.removeClass("navi-btn-open").text("MENU 三")
      else
        $html.addClass("hide-window")
        $navi.addClass("navi-open")
        $naviContent.addClass("navi-inner-open")
        $naviBtn.addClass("navi-btn-open").text("CLOSE ×")
    else if $navi.hasClass("navi-right-to-left")
      if $navi.hasClass("navi-open")
        $html.removeClass("hide-window")
        $navi.removeClass("navi-open")
        $naviContent.removeClass("navi-inner-open")
        $naviBtn.removeClass("navi-btn-open").text("MENU 三")
      else
        $html.addClass("hide-window")
        $navi.addClass("navi-open")
        $naviContent.addClass("navi-inner-open")
        $naviBtn.addClass("navi-btn-open").text("CLOSE ×")
    return

  $naviBG.on("click",_clickFunc)
  $naviBtn.on("click",_clickFunc)

  return
