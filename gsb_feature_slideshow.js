Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};
(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow_functionality = {
   attach: function (context, settings) {
      var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time,
          animationSpeed = 400,
          autoplay = true,
          activeClass = 'active',
          windowhash = parseInt(window.location.hash.replace( /^\D+/g, ''));

      $('.field-type-gsb-slideshow').each(function() {
        var $this = $(this);

        if (!$this.hasClass('slideshow-processed')) {
          var sliderHolder = $this.find('.field-items'),
              sliderItems = sliderHolder.find('.field-item'),
              sliderWidth = $this.width(),
              sliderAutoplay = setInterval(function(){ 
                if ($this.hasClass('autoplay-next')) {
                  slideshowPlay(1);
                }
              }, rotation_time); /* slider autoplay timer */

          $this.addClass('slideshow-processed');

          $this.hover(function(e) {
            e.stopPropagation();
            if ($this.hasClass('autoplay')) {
              $this.removeClass('autoplay-next');
            }
          }, function(e) {
            e.stopPropagation();
            if ($this.hasClass('autoplay')) {
              $this.removeClass('autoplay-next').addClass('autoplay-next');
            }
          }); /* end slider hover stop */

          if (autoplay) {
            $this.addClass('autoplay autoplay-next');
          } /* end autpoplay function */

          sliderItems.width(sliderWidth).first().addClass(activeClass);
          sliderHolder.width(sliderWidth * sliderItems.length);
          $this.find('.field-item:first>ul').insertAfter($this.find('.field-items')).addClass('slider-navigation');
          var sliderNavigation = $this.find('.slider-navigation');
          sliderNavigation.find('li').first().addClass(activeClass);

          sliderNavigation.find('li a').click(function(e) {
            var $this = $(this);
            if (!$this.parent().hasClass('active')) {
              slideshowPlay(1, $this.parent().index());
            }
            if ($this.parents('.autoplay').length > 0) {
              slideshowStop();
            }
            e.preventDefault();
            e.stopPropagation();
          }); /* end slider item navigation function */

            $this.append('<div class="large-slide-left"/>').append('<div class="large-slide-right"/>');
            $this.append('<span class="slider-sharpy"></span>');
            var sharpy = $this.find('.slider-sharpy');
            sliderNavigation.wrap('<div class="nav-circles"/>');
            $('.nav-circles').prepend('<div class="slide-arrow slider-left"/>').append('<div class="slide-arrow slider-right"/>');
          
            $('.large-slide-left').click(function(e) {e.stopPropagation(); $this.find('.slider-left').click();});
            $('.large-slide-right').click(function(e) {e.stopPropagation(); $this.find('.slider-right').click();});

          $this.find('.slide-arrow').click(function (e) {
            e.stopPropagation();
            var allNav = sliderNavigation.find('li'),
                activeNav = allNav.filter('.active');
            if ($this.hasClass('autoplay')) {
              slideshowStop();
            }
            if ($(this).hasClass('slider-left')) {          
              (activeNav.prev().text() > 0) ? activeNav.prev().find('a').click() : allNav.last().find('a').click();
            } else {
              (activeNav.next().text() > 0) ? activeNav.next().find('a').click() : allNav.first().find('a').click();
            }
          }); /* end slider navigation arrows function */

          if (windowhash > -1) {
            sliderItems.removeClass(activeClass);
            sliderItems.eq(windowhash).addClass(activeClass);
            slideshowPlay(1, windowhash, 1);
          } /* end hash check function */

          function slideshowPlay(dir, goto, anispeed) {
           var anispeed = anispeed ? anispeed : animationSpeed,
            currentActive = sliderItems.filter('.' + activeClass).index() != -1 ? sliderItems.filter('.' + activeClass).index() : 0,
              slideDiff = 1;
            if (parseInt(goto) > -1) {
              sliderToGo = goto;
              slideDiff = sliderToGo - currentActive;
            } else {
              var direction = dir;
                if (currentActive == (sliderItems.length - 1)) {
                  newSlider = -1;
                  slideDiff = (-1) * sliderItems.length + 1;
                } else {
                  newSlider = currentActive;
                }
              sliderToGo = newSlider + dir;            
            }
              sharpy.css('margin-left', sliderHolder.css('margin-left'));
              sliderItems.removeClass(activeClass).eq(sliderToGo).addClass(activeClass);
              sliderNavigation.find('li').removeClass(activeClass).eq(sliderToGo).addClass(activeClass);
            if (Math.abs(slideDiff) == 1) { 
              var finaldestination = (-1)*(sliderToGo)*sliderWidth;             
              sharpy.stop().animate({'margin-left' : finaldestination }, {
                duration: anispeed,
                step: function(now, fx) {
                  sliderHolder.css('margin-left', parseInt(now));
                }
              });      
            } else {
              var nowActive = sliderItems.eq(sliderToGo),
                moveSymbol = (slideDiff * 2 + 1) % (-2);
              nowActive.css({'position' : 'absolute', 'left' : (currentActive + moveSymbol)*sliderWidth, 'z-index' : 102});
              nowActive.next().css('margin-left', sliderWidth);
              var finaldestination = (-1)*(currentActive + moveSymbol)*sliderWidth; 
              sharpy.stop().animate({'margin-left' : finaldestination}, 
                {
                  duration: anispeed,
                  step: function(now, fx) {
                    sliderHolder.css('margin-left', parseInt(now));
                  },
                  complete: function() {
                    sliderHolder.css('margin-left', (-1)*(sliderToGo)*sliderWidth);
                    nowActive.next().css('margin-left', 0);
                    nowActive.css({'position': 'static', 'z-index': 90});
                  }
                }
              );  
            }
            window.location.hash = sliderToGo;
          } /* end slideshow play function */

          function slideshowStop() {
            clearInterval(sliderAutoplay);
            $this.removeClass('autoplay autoplay-next');
          }

        } /* end processed condition */

      }); /* end slideshow*/
   }
 }

})(jQuery);
