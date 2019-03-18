<div class="Logo">
  <a href="<?=APP['home_url']?>">
    <?php
      if ( APP['logo'] !== null ) {
        echo '<img src="' . APP['logo'] . '" alt="' . APP['name'] . '">';
      } else {
        echo APP['name'];
      }
    ?>
  </a>
</div>
