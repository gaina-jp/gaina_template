window.jQuery = window.$ = require "jQuery"
PChangeImage = require "../../__utility/coffee/components/PChangeImage"
PUI = require "../../__utility/coffee/components/PUI"
ImageCheck = require "../../__utility/coffee/components/PImageLoadChecker"

#_ua = new PUI()

$ ->
  $window = $(window)
  $html = $("html")
  $body = $("body")


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
      .delay(1000)
      .animate({opacity:0},500)
    _$load
      .stop()
      .delay(2500)
      .animate(
        {top: $window.height()},
        300,
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

  _ic = new ImageCheck(_init)

  return

