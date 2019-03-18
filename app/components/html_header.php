<!DOCTYPE html>
<html lang="<?=APP['language']?>">
<head>
  <!-- Meta Tags HTML -->
  <meta charset="UTF-8">
  <title><?=$meta_title?></title>
  <meta name="description" content="<?=$meta_description?>">
  <!-- Meta Tags Responsive -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="theme-color" content="<?=APP['theme_color']?>">
  <meta name="MobileOptimized" content="width">
  <meta name="HandheldFriendly" content="true">
  <!-- Meta Tags Twitter -->
  <meta name="twitter:site" content="<?=APP['twitter']?>">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?=$meta_title?>">
  <meta name="twitter:description" content="<?=$meta_description?>">
  <meta name="twitter:image" content="<?=$meta_img?>">
  <!-- Meta Tags Facebook -->
  <meta property="og:site_name" content="<?=APP['name']?>">
  <meta property="og:url" content="<?=$meta_url?>">
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?=$meta_title?>">
  <meta property="og:description" content="<?=$meta_description?>">
  <meta property="og:image" content="<?=$meta_img?>">
  <!-- Meta Tags Google -->
  <meta itemprop="name" content="<?=$meta_title?>">
  <meta itemprop="description" content="<?=$meta_description?>">
  <meta itemprop="image" content="<?=$meta_img?>">
  <!-- Meta Tags iOS -->
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="format-detection" content="telephone=no">
  <meta name="apple-mobile-web-app-title" content="<?=APP['name']?>">
  <!-- Meta Tags Windows -->
  <meta name="msapplication-TileColor" content="<?=APP['theme_color']?>">
  <meta name="msapplication-TileImage" content="<?=APP['logo']?>">
  <!-- Meta Tags Iconos -->
  <link rel="apple-touch-icon" href="<?=APP['apple_touch_icon']?>">
  <link rel="apple-touch-startup-image" href="<?=APP['apple_touch_startup_image']?>">
  <link rel="shortcut icon" type="image/png" href="<?=APP['favicon']?>">
  <!-- Varios Links -->
  <link rel="author" type="text/plain" href="./humans.txt">
  <link rel="sitemap" type="application/xml" title="Sitemap" href="./sitemap.xml">
  <link rel="manifest" href="./manifest.json">
  <link rel="canonical" href="<?=$meta_url?>">
  <!-- Hojas CSS -->
  <link href="https://fonts.googleapis.com/css?family=Raleway:400,700" rel="stylesheet">
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.1.3/hamburgers.min.css">
  <link rel="stylesheet" href="./style.css?t=1549733606384">
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=your-tag-id"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'your-tag-id');
  </script>
</head>
<body>
