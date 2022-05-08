<?php

// workaround for block script issue (Pre WP6+)
global $wp_version;
if ((int)$wp_version < 6) {
add_filter('plugins_url',function($url,$path,$plugin) {
  if (strpos($url, get_template_directory()) !== false) {
    $url = get_template_directory_uri().'/blocks/'.basename(dirname($plugin)).'/'.$path;
  }
  return $url;
},10,3);
}