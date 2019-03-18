<?php
require_once './app/store/config.php';
require_once './app/store/db.php';
require_once './app/helpers/router.php';

$page = router();

require_once './app/views/' . $page['metas'] . '.php';
require_once './app/components/html_header.php';
require_once './app/components/navbar.php';
echo '<main class="u-afterFixed u-maxWidth">';
  require_once './app/views/' . $page['content'] . '.php';
echo '</main>';
require_once './app/components/html_footer.php';
