<?php

require_once './isloggeding.php';

$currentUser = isLoggeding();

if (!$currentUser) {
    header('Location: /login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil</title>
</head>
<body>
    <nav>
        <a href="/">Accueil</a>
        <a href="/profile.php">Profil</a>
        <a href="/logout.php">Déconnexion</a>
    </nav>
    <h1>PROFIL</h1>
    <h2>Hello <?= $currentUser['username'] ?></h2>
</body>
</html>