import $ from 'jQuery';
import _navigation from './_Navigation';
global.$ = global.jQuery = $;

jQuery(($)=>{
  let $window = $(window);
  _navigation();

  let _gall = $("#article_gallery_photos");
  if(_gall.length !== 0){
    let _gallery = _gall.slick({
      vertical : true,
      dots : false,
      swipe :false,
      arrows : false
    });

    let _desc = $(".article-gallery-desc");
    let _ismove = false;

    _gallery.on('beforeChange',(event, slick, currentSlide, nextSlide)=>{
      _ismove = true;
    });
    _gallery.on('afterChange',(event, slick, currentSlide, nextSlide)=>{
      _ismove = false;
    });

    let _clickFunc = (event)=>{
      if(_ismove) return false;
      let num = event.data.num;
      _gallery.slick("setPosition");
      _gallery.slick("slickGoTo",num);

      _thumbs.each((i)=>{
        let __this = $(_thumbs[i]);
        let __desc = $(_desc[i]);
        if(i === num){
          __this.addClass("is-current");
          __desc.addClass("is-current");
        }else{
          __this.removeClass("is-current");
          __desc.removeClass("is-current");
        }
      });
    };

    let _thumbs = $(".article-gallery-thumb");
    _thumbs.each((i)=>{
      let __this = $(_thumbs[i]);
      __this.on("click",{num:i},_clickFunc);
    });


    $window.on("resize",(event)=>{
      _gallery.slick("setPosition");
    });
  }


  let HeightAjuster = (element)=>{
    let _elm = $(element);
    let _m = 0;

    if($window.width() > 750){
      _elm.each((i)=>{
        if($(_elm[i]).height() > _m){
          _m = $(_elm[i]).height();
        }
      });
      _elm.each((i)=>{
        if($(_elm[i]).height() !== _m){
          let _diff = (_m - $(_elm[i]).height()) / 2;
          $(_elm[i]).css({paddingTop : _diff,paddingBottom : _diff});
        }
      });
    }else{
      _elm.each((i)=>{
        $(_elm[i]).css({paddingTop : "",paddingBottom : ""});
      });
    }
  };

  let Resizer = ()=>{
    HeightAjuster(".thanks-contact-txt");
  };

  $window.on("resize", Resizer);
  Resizer();

});