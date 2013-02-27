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
              sliderWidth = $this.width();

          $this.addClass('slideshow-processed');

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
            if ($(this).hasClass('slider-left')) {          
              (activeNav.prev().text() > 0) ? activeNav.prev().find('a').click() : allNav.last().find('a').click();
            } else {
              (activeNav.next().text() > 0) ? activeNav.next().find('a').click() : allNav.first().find('a').click();
            }
          }); /* end slider navigation arrows function */

          if (windowhash > -1) {
            var hashspeed = 10,
              animateto = (-1) * windowhash * sliderWidth;
          } else {
            windowhash = 0;
            sharpy.css('margin-left', (-1) * sliderWidth);
            sliderHolder.css('margin-left', (-1) * sliderWidth);
            console.log(sharpy.css('margin-left'));
            console.log(sliderHolder.css('margin-left'));
            var hashspeed = 1500,
              animateto = 0;
          }
            console.log(animateto);
            console.log((-1) * sliderWidth * 2);
            sliderItems.removeClass(activeClass).eq(windowhash).addClass(activeClass);
            sliderNavigation.find('li').removeClass(activeClass).eq(windowhash).addClass(activeClass);
            sharpy.animate({'margin-left' : animateto }, {
                duration: hashspeed,
                step: function(now, fx) {
                  console.log(now);
                  sliderHolder.css('margin-left', parseInt(now));
                }
              }); 

          function slideshowPlay(dir, goto, anispeed) {
            if (!$this.hasClass('animation-process')) {
              $this.addClass('animation-process');
              var anispeed = anispeed ? anispeed : animationSpeed,
              currentActive = sliderItems.filter('.' + activeClass).index() != -1 ? sliderItems.filter('.' + activeClass).index() : 0,
                slideDiff = 1;
              if (parseInt(goto) > -1) {
                sliderToGo = goto;
                slideDiff = sliderToGo - currentActive;
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
                  },
                  complete: function() {
                    $this.removeClass('animation-process');
                  }
                });      
              } else {
                // moveSymbol = 1 с последнего на первый
                var nowActive = sliderItems.eq(sliderToGo),
                  moveSymbol = (slideDiff * 2 + 1) % (-2);
                sliderHolder.width(sliderHolder.width() + sliderWidth);
                if (moveSymbol == -1) {
                  sliderItems.eq(0).clone().addClass('todelete').appendTo(sliderHolder);
                  finaldestination = (-1) * sliderItems.length * sliderWidth;
                } else {
                  sliderItems.last().clone().addClass('todelete').prependTo(sliderHolder);
                  sharpy.css('margin-left', (-1) * sliderWidth);
                  console.log(sliderHolder.css('margin-left'));
                  finaldestination = 0;
                }
                console.log(sharpy.css('margin-left'));
                sharpy.stop().animate({'margin-left' : finaldestination }, {
                  duration: anispeed,
                  step: function(now, fx) {
                    sliderHolder.css('margin-left', parseInt(now));
                  },
                  complete: function() {
                    if (moveSymbol == -1) {
                      sliderHolder.css('margin-left', 0);
                    } else {
                      sliderHolder.css('margin-left', (-1) * (sliderItems.length - 1)  * sliderWidth);
                    }                 
                    sliderHolder.find('.todelete').remove();
                    sliderHolder.width(sliderHolder.width() - sliderWidth);
                    $this.removeClass('animation-process');
                  }
                }); 
    
              }
              window.location.hash = sliderToGo;
            }
          } /* end slideshow play function */

        } /* end processed condition */

      }); /* end slideshow*/
   }
 }

})(jQuery);
