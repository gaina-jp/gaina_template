class PImageLoadChecker

  constructor: (init)->
    _doc = window.document

    _imgCheck = (callback)->
      _imgLen = _doc.images.length
      _done = 0
      for j in [0..._imgLen]
        if _doc.images[j].complete
          _done++
        else
          _doc.images[j].onload = ()->
            _done++
            return

      _imgLodingChecker = setInterval(
        ()->
          if _done is _imgLen
            clearInterval(_imgLodingChecker)
            callback()
          return
      ,33
      )
      return

    _imgCheck(init)

module.exports = PImageLoadChecker