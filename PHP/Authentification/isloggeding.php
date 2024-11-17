<?php

function isLoggeding() {
    $pdo = require_once './database.php';
    $sessionId = $_COOKIE['session'] ?? '';
    $signature = $_COOKIE['signature'] ?? '';
    
    if ($sessionId && $signature) {
        $hash = hash_hmac('sha256', $sessionId, 'quatre petits chats');
        $match = hash_equals($signature, $hash);
        if ($match) {
            $sessionStatement = $pdo->prepare('SELECT * FROM session WHERE id=:id');
            $sessionStatement->bindValue(':id', $sessionId);
            $sessionStatement->execute();
            $session = $sessionStatement->fetch();    
            if ($session) {
                $userStatement = $pdo->prepare('SELECT * FROM user WHERE id=:id');
                $userStatement->bindValue(':id', $session['userid']);
                $userStatement->execute();
                $user = $userStatement->fetch();
            }
        }
    }

    return $user ?? false;
}
