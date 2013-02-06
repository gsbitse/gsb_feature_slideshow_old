Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};

(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow_functionality = {
   attach: function (context, settings) {
      var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time,
          sliders = $('.field-type-gsb-slideshow'),
          animationSpeed = 400,
          activeClass = 'active';

      sliders.each(function() {
        var $this = $(this),
            sliderHolder = $this.find('.field-items'),
            sliderItems = sliderHolder.find('.field-item'),
            sliderWidth = $this.width(),
            sliderAutoplay = setInterval(function(){ slideshowPlay(1) }, rotation_time);
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
          slideshowStop();
          e.preventDefault();
        });
        $this.append('<div class="slider-arrows"/>');
        sliderArrows = $this.find('.slider-arrows');
        sliderArrows.append('<div class="slider-left"/>')
          .append('<div class="slider-right"/>');
          
        sliderArrows.find('div').click(function () {
          slideshowStop();
          if ($(this).hasClass('slider-left')) {
            slideshowPlay(-1);
          } else {
            slideshowPlay(1);
          }
        });

        function slideshowPlay(dir, goto) {
          if (parseInt(goto) > -1) {
            var sliderToGo = goto; 
          } else {
            var currentActive = sliderItems.filter('.'+activeClass).index(),
              direction = dir;
            if (dir == 1) {
              if (currentActive == (sliderItems.length - 1)) {
                currentActive = -1;
              }
            } else {
              if (currentActive == 0) {
                currentActive = sliderItems.length;
              }
            }
            sliderToGo = currentActive + dir;
          }
          sliderItems.removeClass(activeClass).eq(sliderToGo).addClass(activeClass);
          sliderNavigation.find('li').removeClass(activeClass).eq(sliderToGo).addClass(activeClass);
          sliderHolder.animate({'margin-left': (-1)*(sliderToGo)*sliderWidth}, 400);
        }

        function slideshowStop() {
          clearInterval(sliderAutoplay);
        }

      });
   }
 }

})(jQuery);
