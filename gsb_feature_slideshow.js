Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};

(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow_functionality = {
   attach: function (context, settings) {
      var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time, animationSpeed = 400, activeClass = 'active';
      $('.field-type-gsb-slideshow').each(function() {
        var $this = $(this), sliderHolder = $this.find('.field-items'), sliderItems = sliderHolder.find('.field-item'), sliderWidth = $this.width(), sliderAutoplay = setInterval(function(){ slideshowPlay(1) }, rotation_time);
        sliderItems.width(sliderWidth).first().addClass(activeClass); sliderHolder.width(sliderWidth * sliderItems.length); $this.find('.field-item:first>ul').insertAfter($this.find('.field-items')).addClass('slider-navigation');
        var sliderNavigation = $this.find('.slider-navigation'); sliderNavigation.find('li').first().addClass(activeClass);
        sliderNavigation.find('li a').click(function(e) {var $this = $(this); if (!$this.parent().hasClass('active')) { slideshowPlay(1, $this.parent().index()); } slideshowStop(); e.preventDefault();});
        if ($('body').hasClass('front')) { $this.append('<div class="slide-arrow slider-left"/>').append('<div class="slide-arrow slider-right"/>');
        } else { sliderNavigation.wrap('<div class="nav-circles"/>'); $('.nav-circles').prepend('<div class="slide-arrow slider-left"/>').append('<div class="slide-arrow slider-right"/>'); }
        $this.find('.slide-arrow').click(function () {
          var allNav = sliderNavigation.find('li'), activeNav = allNav.filter('.active'); slideshowStop();
          if ($(this).hasClass('slider-left')) { (activeNav.prev().text() > 0) ? activeNav.prev().find('a').click() : allNav.last().find('a').click(); } else { (activeNav.next().text() > 0) ? activeNav.next().find('a').click() : allNav.first().find('a').click(); }
        });

        function slideshowPlay(dir, goto) {
          var currentActive = sliderItems.filter('.' + activeClass).index(), slideDiff = 1;
          if (parseInt(goto) > -1) { sliderToGo = goto; slideDiff = sliderToGo - currentActive;
          } else { var direction = dir; if (currentActive == (sliderItems.length - 1)) { newSlider = -1; slideDiff = (-1) * sliderItems.length + 1; } else { newSlider = currentActive; } sliderToGo = newSlider + dir;}
            sliderItems.removeClass(activeClass).eq(sliderToGo).addClass(activeClass); sliderNavigation.find('li').removeClass(activeClass).eq(sliderToGo).addClass(activeClass);
          if (Math.abs(slideDiff) == 1) { sliderHolder.animate({'margin-left': (-1)*(sliderToGo)*sliderWidth}, animationSpeed);
          } else {
            var nowActive = sliderItems.eq(sliderToGo), moveSymbol = (slideDiff * 2 + 1) % (-2);
            nowActive.css({'position' : 'absolute', 'left' : (currentActive + moveSymbol)*sliderWidth, 'z-index' : 102}); nowActive.next().css('margin-left', sliderWidth);
            sliderHolder.animate({'margin-left': (-1)*(currentActive + moveSymbol)*sliderWidth}, animationSpeed, function() {
              sliderHolder.css('margin-left', (-1)*(sliderToGo)*sliderWidth); nowActive.next().css('margin-left', 0); nowActive.css({'position': 'static', 'z-index': 90});
            });}}
        function slideshowStop() { clearInterval(sliderAutoplay);}
      });}
  }
})(jQuery);
