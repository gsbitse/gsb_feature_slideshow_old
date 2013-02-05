Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};

(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow = {
   attach: function (context, settings) {
     if ($('.field-name-field-gsb-slideshow').length) {
       var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time;
       $('.field-name-field-gsb-slideshow').tabs().tabs("rotate", rotation_time, true);
     }
   }
 }

})(jQuery);
