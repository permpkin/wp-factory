<?php
 
  return [
    'wp-factory' => [
      # Required.
      'APP_PATH' => __DIR__,
      'APP_THEME' => 'factory',
      
      # Clockwork Settings
      'CLOCKWORK_ENABLE' => true,
      'CLOCKWORK_TOOLBAR' => 'false',
      'CLOCKWORK_PERFORMANCE_CLIENT_METRICS' => true,
      'CLOCKWORK_REQUESTS_SLOW_THRESHOLD' => 5,
      'CLOCKWORK_STORAGE_FILES_PATH' => '/tmp/clockwork',
      'CLOCKWORK_DISABLE_DOCKER_HEALTH_CHECKS' => true,
      
      # Wordpress/Mysql
      'MYSQL_HOST' => '127.0.0.1',
      'MYSQL_TABLE_PREFIX' => 'wp_',
      'MYSQL_DATABASE' => 'factory',
      'MYSQL_USER' => 'factory',
      'MYSQL_PASSWORD' => 'factory',
      
      # Optional Wordpress
      'WP_REDIS_BACKEND_HOST' => '127.0.0.1',
      'WP_REDIS_BACKEND_PORT' => 6379,
      'WP_REDIS_BACKEND_DB' => 0
    ]
  ];
