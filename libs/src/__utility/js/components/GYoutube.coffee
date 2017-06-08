###
  Youtube APIのやつ
  未着手部分有り
  最低限の機能はあるからTODOにはしない！
###
class PYoutube
  __audio = null
  __target = null
  __videoId = ""
  constructor: (target, id)->
    __target = target
    __videoId = id or "7jIBHYe5lnY"
    this.init()
    this.player = null

  init:()->
    _this = @

    window.onPlayerReady = ()->
      return

    window.onYouTubeIframeAPIReady = ->
      _this.player = new YT.Player( __target, {
        height : "auto"
        width : "100%"
        videoId : __videoId
        playerVars: {
          rel : 0
          wmode : "opaque"
        }
        events : {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      } )
      return

    _s = document.getElementsByTagName("script")
    _tag = document.createElement('script')
    _tag.src = "https://www.youtube.com/iframe_api"
    _firstScriptTag = _s[0]
    _firstScriptTag.parentNode.insertBefore(_tag, _firstScriptTag)

    return

  setURL:(url)->
    return

module.exports = PYoutube
