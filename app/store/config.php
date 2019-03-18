<?php
define('ENV', 'dev');

define('DB', array(
  'dsn' => (ENV === 'dev') ? 'mysql:host=localhost;dbname=kiss' : 'your_hosting_dsn',
  'user' => (ENV === 'dev') ? 'root' : 'your_hosting_user',
  'pass' => (ENV === 'dev') ? 'qwerty' : 'your_hosting_pass'
));

define('APP', array(
  'home_url' => (ENV === 'dev') ? '/proyectos/kiss' : 'https://tudominio.com',
  'name' => 'KISS',
  'logo' => './img/logo.png',
  'favicon' => './img/favicon.png',
  'apple_touch_icon' => './img/apple-touch-icon.png',
  'apple_touch_startup_image' => './img/apple-touch-startup-image.png',
  'language' => 'es',
  'theme_color' => '#8892BF',
  'twitter' => '@your_twitter'
));
