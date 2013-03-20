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
      'cardinality' => '-1',
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
      'default_value' => array(
        0 => array(
          'title' => '',
          'link' => '',
          'fid' => array(
            'fid' => '0',
          ),
          'description' => '',
          'button_text' => '',
          'button_style' => 'style 1',
        ),
      ),
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'hidden',
          'module' => 'gsb_feature_slideshow',
          'settings' => array(
            'file_view_mode' => 'gsb_slideshow',
          ),
          'type' => 'gsb_slideshow_default_format',
          'weight' => '0',
        ),
        'ical' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
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
        'weight' => '2',
      ),
    ),
  );

  // Exported field: 'fieldable_panels_pane-gsb_slideshow_fpp-field_slideshow_type'.
  $fields['fieldable_panels_pane-gsb_slideshow_fpp-field_slideshow_type'] = array(
    'field_config' => array(
      'active' => '1',
      'cardinality' => '1',
      'deleted' => '0',
      'entity_types' => array(),
      'field_name' => 'field_slideshow_type',
      'foreign keys' => array(),
      'indexes' => array(
        'value' => array(
          0 => 'value',
        ),
      ),
      'locked' => '0',
      'module' => 'list',
      'settings' => array(
        'allowed_values' => array(
          'homepage-slider' => 'Home Page',
          'standard-slider' => 'Typical Page',
        ),
        'allowed_values_function' => '',
      ),
      'translatable' => '0',
      'type' => 'list_text',
    ),
    'field_instance' => array(
      'bundle' => 'gsb_slideshow_fpp',
      'default_value' => array(
        0 => array(
          'value' => 'standard-slider',
        ),
      ),
      'deleted' => '0',
      'description' => '',
      'display' => array(
        'default' => array(
          'label' => 'hidden',
          'module' => 'list',
          'settings' => array(),
          'type' => 'list_key',
          'weight' => '1',
        ),
        'ical' => array(
          'label' => 'above',
          'settings' => array(),
          'type' => 'hidden',
          'weight' => 0,
        ),
      ),
      'entity_type' => 'fieldable_panels_pane',
      'field_name' => 'field_slideshow_type',
      'label' => 'Slideshow Type',
      'required' => 1,
      'settings' => array(
        'user_register_form' => FALSE,
      ),
      'widget' => array(
        'active' => 1,
        'module' => 'options',
        'settings' => array(),
        'type' => 'options_buttons',
        'weight' => '1',
      ),
      'workbench_access_field' => 0,
    ),
  );

  // Translatables
  // Included for use with string extractors like potx.
  t('GSB Slideshow');
  t('Slideshow Type');

  return $fields;
}
