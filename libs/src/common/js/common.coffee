window.jQuery = window.$ = require "jQuery"
window.PChangeImage = require "../../__utility/js/components/PChangeImage"
PUI = require "../../__utility/js/components/PUI"
window.PImageCheck = require "../../__utility/js/components/PImageLoadChecker"
window.__ua = new PUI()

$ ->
  $window = $(window)
  $html = $("html")
  $body = $("body")

  console.log("common.js");

  $body.css({
    height : $window.height()
    overflow : "hidden"
  })

  if $window.height() > $body.height()
    $html.css({"overflow-y":""})

  _init = ()->
    _$load = $("#load")
    _$loadInner = $("#loadinner")

    _$loadInner
      .stop()
      .delay(300)
      .animate({opacity:0},300)
    _$load
      .stop()
      .delay(300)
      .animate(
        {top: $window.height()},
        200,
        ()->
          $html.css({"overflow-y":""})
          $body.css({
            height : ""
            overflow : ""
          })
          _$load.remove()
          _$loadInner.remove()
          return
      )

    return

  ###_change = new PChangeImage($(".change"), $(".change-bg"))
  resizeFunc = ()->
    return
  $window.on("resize", resizeFunc)
  resizeFunc()###

  _ic = new PImageCheck(_init)

  return

