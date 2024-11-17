<?php

require_once './isloggeding.php';

$currentUser = isLoggeding();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil</title>
</head>
<body>
    <nav>
        <a href="/">Accueil</a>
        <?php if ($currentUser): ?>
            <a href="/profile.php">Profil</a>
            <a href="/logout.php">Déconnexion</a>
        <?php else : ?>
            <a href="/login.php">Connexion</a>
            <a href="/register.php">Inscription</a>
        <?php endif; ?>
    </nav>
    <h1>ACCUEIL</h1>
</body>
</html>