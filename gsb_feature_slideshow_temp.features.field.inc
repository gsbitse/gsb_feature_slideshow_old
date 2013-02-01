<?php
/**
 * @file
 * gsb_feature_slideshow.features.field.inc
 */

/**
 * Implements hook_field_default_fields().
 */
function gsb_feature_slideshow_field_default_fields() {
  $fields = array();

  // Exported field: 'fieldable_panels_pane-gsb_slideshow_fpp-field_gsb_slideshow'.
  $fields['fieldable_panels_pane-gsb_slideshow_fpp-field_gsb_slideshow'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_gsb_slideshow',
      'foreign keys' => array(
        'fid' => array(
          'columns' => array(
            'fid' => 'fid',
          ),
          'table' => 'file_managed',
        ),
      ),
      'indexes' => array(
        'fid' => array(
          0 => 'fid',
        ),
      ),
      'locked' => '0',
      'module' => 'gsb_feature_slideshow',
      'settings' => array(
        'default_image' => 0,
        'uri_scheme' => 'public',
      ),
      'translatable' => '0',
      'type' => 'gsb_slideshow',
    ),
    'field_instance' => array(
      'bundle' => 'gsb_slideshow_fpp',
      'default_value' => NULL,
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'above',
          'module' => 'gsb_feature_slideshow',
          'settings' => array(
            'image_style' => 'panopoly_image_spotlight',
          ),
          'type' => 'gsb_slideshow_default_format',
          'weight' => 0,
        ),
      ),
      'entity_type' => 'fieldable_panels_pane',
      'field_name' => 'field_gsb_slideshow',
      'label' => 'GSB Slideshow',
      'required' => 0,
      'settings' => array(
        'alt_field' => 0,
        'default_image' => 0,
        'file_directory' => 'general',
        'file_extensions' => 'jpg jpeg gif png',
        'max_filesize' => '',
        'max_resolution' => '',
        'min_resolution' => '',
        'title_field' => 0,
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 0,
        'module' => 'gsb_feature_slideshow',
        'settings' => array(),
        'type' => 'gsb_slideshow_widget',
        'weight' => '-4',
      ),
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('GSB Slideshow');

  return $fields;
}
