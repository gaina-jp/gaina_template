###
  画像をPCスマホ用で出し分けるやつ
  _change = new PChangeImage($(".change"), $(".change-bg"))
  してリサイズイベントで
  _change.changeforSP()
  _change.changeforPC()
  みたいな感じでやる
  img/ にはスマホ用画像
  img/p にはPC用画像
  ファイル名は同じにしておくことー
###
class PChangeImage
  constructor: (targets, targetsbg)->
    this.$targets = targets
    this.$targetsbg = targetsbg
    this.len = targets.length
    this.lenbg = targetsbg.length

  changeforPC:()->
    for i in [0...this.len]
      _$img = this.$targets[i]
      _src = _$img.src
      if _src.indexOf("/p/") is -1
        _changeSrc = _src.replace("img\/", "img/p/")
        _$img.src = _changeSrc
    for j in [0...this.lenbg]
      _$img = $(this.$targetsbg[j])
      _src = _$img.css("background-image")
      if _src.indexOf("/p/") is -1
        _changeSrc = _src.replace("img\/", "img/p/")
        _$img.css({"background-image":_changeSrc})

  changeforSP:()->
    for i in [0...this.len]
      _$img = this.$targets[i]
      _src = _$img.src
      if _src.indexOf("/p/") isnt -1
        _changeSrc = _src.replace("img\/p\/", "img/")
        _$img.src = _changeSrc
    for j in [0...this.lenbg]
      _$img = $(this.$targetsbg[j])
      _src = _$img.css("background-image")
      if _src.indexOf("/p/") isnt -1
        _changeSrc = _src.replace("img\/p\/", "img/")
        _$img.css({"background-image":_changeSrc})


module.exports = PChangeImage

