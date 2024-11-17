<?php

// setcookie('about', 'Je suis about', path: '/about.php');

setcookie('about', 'Je suis about', httponly: true);

?>

<h1>about</h1>
<h2><?= $_COOKIE['about'] ?? '' ?></h2>
<a href="/">index</a>