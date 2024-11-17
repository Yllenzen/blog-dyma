<?php

$pdo = require_once './database.php';
$error = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $input = filter_input_array(INPUT_POST, [
    'email' => FILTER_SANITIZE_EMAIL,
  ]);
  $password = $_POST['password'] ?? '';
  $email = $input['email'] ?? '';
  if (!$password || !$email) {
    $error = 'ERROR';
  } else {
    $statementUser = $pdo->prepare('SELECT * FROM user WHERE email =:email');
    $statementUser->bindValue(':email', $email);
    $statementUser->execute();
    $user = $statementUser->fetch();
    if (password_verify($password, $user['password'])) {
      $sessionId = bin2hex(random_bytes(32));
      $statementSession = $pdo->prepare('INSERT INTO session (id, userid) VALUES (:sessionId, :userid)');
      $statementSession->bindValue(':userid', $user['id']);
      $statementSession->bindValue(':sessionId', $sessionId);
      $statementSession->execute();
      $signature = hash_hmac('sha256', $sessionId, 'quatre petits chats');
      setcookie('signature', $signature, time() + 60 * 60 * 24 * 14, "", "", false, true);
      setcookie('session', $sessionId, time() + 60 * 60 * 24 * 14, "", "", false, true);
      header('Location: /profile.php');
    } else {
      $error = 'Identifiants invalides';
    }
  }
}
?>


<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>
<body>
    <nav>
        <a href="/">Accueil</a>
        <a href="/login.php">Connexion</a>
        <a href="/register.php">Inscription</a>
    </nav>
    <h1>Connexion</h1>

    <form action="/login.php" method="POST">
        <input type="text" placeholder="email" name="email">
        <br>
        <br>
        <input type="text" placeholder="password" name="password">
        <br>
        <br>
        <?php if ($error) : ?>
            <h1 style="color:red;"><?= $error ?></h1>
        <?php endif; ?>
        <button type="submit">Connexion</button>
    </form>
</body>
</html>

