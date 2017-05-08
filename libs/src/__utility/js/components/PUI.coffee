class PUI
  _global = window
  _doc = _global.document
  _navigator = _global.navigator
  __ua__ = _navigator.userAgent.toLowerCase()
  constructor: ()->
    return
  @:: =
    ie     : __ua__.indexOf('msie') > -1
    ie6    : __ua__.indexOf('msie') > -1 && __ua__.indexOf('msie 6.0') > -1
    ie7    : __ua__.indexOf('msie') > -1 && __ua__.indexOf('msie 7.0') > -1
    ie8    : __ua__.indexOf('msie') > -1 && __ua__.indexOf('msie 8.0') > -1
    ie9    : __ua__.indexOf('msie') > -1 && __ua__.indexOf('msie 9.0') > -1
    ie10    : __ua__.indexOf('msie') > -1 && __ua__.indexOf('msie 10') > -1
    chrome : __ua__.indexOf('chrome') > -1 && __ua__.indexOf('safari') > -1
    ff     : __ua__.indexOf('firefox') > -1
    safari : __ua__.indexOf('safari') > -1 && __ua__.indexOf('chrome') is -1
    wii    : __ua__.indexOf('wii') isnt -1 && __ua__.indexOf('opera') isnt -1
    wiiU   : __ua__.indexOf('wiiu') isnt -1
    ndsi   : __ua__.indexOf("nintendo dsi") isnt -1
    n3ds   : __ua__.indexOf('nintendo 3ds') isnt -1
    iphone : __ua__.indexOf('iphone') isnt -1
    ipad   : __ua__.indexOf('ipad') isnt -1
    android: __ua__.indexOf('android') > -1
    androidPhone: __ua__.indexOf('android') > -1 and __ua__.indexOf('mobile') > -1
    android2_3: __ua__.indexOf('android') > -1 and __ua__.indexOf('android 2.3') > -1
    microsoft : __ua__.indexOf('microsoft') != -1
module.exports = PUI