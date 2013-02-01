Drupal.settings.gsb_slideshow_settings = Drupal.settings.gsb_slideshow_settings || {};

(function ($) {
 /**
  * Form behavior for GSB Slideshow
  */
 Drupal.behaviors.gsbSlideshow = {
   attach: function (context, settings) {
     if ($('.field-name-field-gsb-slideshow').length) {
       var rotation_time = Drupal.settings.gsb_slideshow_settings.rotation_time;
       $('.field-name-field-gsb-slideshow').tabs({fx:{width: "toggle"}}).tabs("rotate", rotation_time, true);
       //$('.field-name-field-gsb-slideshow').tabs({ fx: { height: 'toggle' } });
       //$('.field-name-field-gsb-slideshow').tabs({fx:{width: "toggle"}}).tabs("rotate", rotation_time, true);
       /*
      http://jquerytools.org/documentation/tabs/slideshow.html
       $('.field-name-field-gsb-slideshow').tabs(".images > div", {
            // enable "cross-fading" effect
            effect: 'fade',
            fadeOutSpeed: "slow",
            // start from the beginning after the last tab
            rotate: true
            // use the slideshow plugin. It accepts its own configuration
            }).slideshow(); */
     }
   }
 }

})(jQuery);
