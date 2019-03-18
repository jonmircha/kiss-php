<?php
function router () {
  $home = array ( 'content' => 'home', 'metas' => 'home_metas' );

  if ( isset($_GET['page']) ) {
    $page = preg_replace( '/[^-a-zA-Z0-9_]/', '', $_GET['page'] );

    if ( !empty($page) ) {
      return  array (
        'content' => file_exists("./app/views/{$page}.php") ? $page : '404',
        'metas' => file_exists("./app/views/{$page}_metas.php") ? "{$page}_metas" : '404_metas'
      );
    } else {
      return $home;
    }
  } else {
    return $home;
  }
}
