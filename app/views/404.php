<?php
  header('HTTP/1.0 404 Not Found');
  header('Status: 404 Not Found');
?>
<article class="Error-404 u-flowText">
  <h2><?=$meta_title?></h2>
  <p><?=$meta_description?></p>
  <img src="<?=$meta_img?>" alt="<?=$meta_title?>">
</article>
