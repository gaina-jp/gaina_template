###
  UserAgentのやつ
###
class PUI
  __ua__ = window.navigator.userAgent.toLowerCase()
  constructor: ()->
    return
  @:: =
    _ie             : __ua__.indexOf('msie') isnt -1
    _ie6            : __ua__.indexOf('msie') isnt -1 && __ua__.indexOf('msie 6.0') isnt -1
    _ie7            : __ua__.indexOf('msie') isnt -1 && __ua__.indexOf('msie 7.0') isnt -1
    _ie8            : __ua__.indexOf('msie') isnt -1 && __ua__.indexOf('msie 8.0') isnt -1
    _ie9            : __ua__.indexOf('msie') isnt -1 && __ua__.indexOf('msie 9.0') isnt -1
    _ie10           : __ua__.indexOf('msie') isnt -1 && __ua__.indexOf('msie 10') isnt -1
    _ieVer          : __ua__.match(/msie (\d+\.\d)/),
    _chrome         : __ua__.indexOf('chrome') isnt -1 && __ua__.indexOf('safari') isnt -1
    _ff             : __ua__.indexOf('firefox') isnt -1
    _safari         : __ua__.indexOf('safari') isnt -1 && __ua__.indexOf('chrome') is -1
    _opera          : __ua__.indexOf('opera') isnt -1
    _iphone         : __ua__.indexOf('iphone') isnt -1
    _ipad           : __ua__.indexOf('ipad') isnt -1
    _android        : __ua__.indexOf('android') isnt -1
    _androidPhone   : __ua__.indexOf('android') isnt -1 and __ua__.indexOf('mobile') isnt -1
    _androidTablet  : __ua__.indexOf('android') isnt -1 and __ua__.indexOf('mobile') is -1
    _windowsPhone   : __ua__.indexOf('windows phone') isnt -1
    _mac            : __ua__.indexOf('mac os') isnt -1
    _wii            : __ua__.indexOf('nintendo') isnt -1 && __ua__.indexOf('wii;')
    _wiiU           : __ua__.indexOf('nintendo') isnt -1 && __ua__.indexOf('wiiu') isnt -1
    _dsi            : __ua__.indexOf('nintendo') isnt -1 && __ua__.indexOf("dsi;") isnt -1
    _3ds            : __ua__.indexOf('nintendo') isnt -1 && __ua__.indexOf('nintendo 3ds') isnt -1
    _new3ds         : __ua__.indexOf('iphone') isnt -1 && __ua__.indexOf('new nintendo 3ds') isnt -1
    _switch         : __ua__.indexOf('nintendo') isnt -1 && __ua__.indexOf('switch') isnt -1

module.exports = PUI