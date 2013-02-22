<?php
/**
 * @file
 * gsb_feature_slideshow.strongarm.inc
 */

/**
 * Implements hook_strongarm().
 */
function gsb_feature_slideshow_strongarm() {
  $export = array();
/**
  $strongarm = new stdClass();
  $strongarm->disabled = FALSE; /* Edit this to true to make a default strongarm disabled initially */
  $strongarm->api_version = 1;
  $strongarm->name = 'field_bundle_settings_fieldable_panels_pane__gsb_slideshow_fpp';
  $strongarm->value = array(
    'view_modes' => array(
      'full' => array(
        'custom_settings' => FALSE,
      ),
      'token' => array(
        'custom_settings' => FALSE,
      ),
    ),
    'extra_fields' => array(
      'form' => array(),
      'display' => array(
        'title' => array(
          'default' => array(
            'weight' => '-5',
            'visible' => TRUE,
          ),
        ),
      ),
    ),
  );
  $export['field_bundle_settings_fieldable_panels_pane__gsb_slideshow_fpp'] = $strongarm;
**/
  return $export;
}
