Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};

(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow_functionality = {
   attach: function (context, settings) {
      var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time,
          sliders = $('.field-type-gsb-slideshow');

      sliders.each(function() {
        var $this = $(this),
          sliderHolder = $this.find('.field-items'),
          sliderItems = sliderHolder.find('.field-item'),
          sliderWidth = $this.width(),
          sliderAutoplay = setInterval(function(){ slideshowPlay() }, rotation_time);

        $this.find('.field-item:first>ul').insertAfter($this.find('.field-items')).addClass('slider-navigation');
        var sliderNavigation = $this.find('.slider-navigation');
          sliderItems.first().addClass('active');
        sliderHolder.width(sliderWidth * sliderItems.length);
        sliderItems.width(sliderWidth);

        sliderNavigation.find('li a').click(function(e) {
          slideshowStop();
          var _this = $(this),
              parentIndex = _this.parent().index(),
              animationSpeed =
          sliderItems.removeClass('active');
          sliderItems.eq(parentIndex).addClass('active');
          sliderHolder.animate({'margin-left': (-1)*parentIndex*sliderWidth}, 400);
          e.preventDefault();
        });

        function slideshowPlay() {
          var currentActive = sliderItems.filter('.active').index();
          if (currentActive == (sliderItems.length - 1)) {
            currentActive = -1;
          }
          sliderItems.removeClass('active');
          sliderItems.eq(currentActive+1).addClass('active');
          sliderHolder.animate({'margin-left': (-1)*(currentActive+1)*sliderWidth}, 400);
        }

        function slideshowStop() {
          clearInterval(sliderAutoplay);
        }

      });

   }
 }

})(jQuery);
