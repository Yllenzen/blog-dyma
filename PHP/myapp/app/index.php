<?php

try {
  $pdo = new PDO('mysql:host=localhost;dbname=test', 'Nelly', 'Pomme123', [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
  ]);
} catch (PDOException $e) {
  echo $e->getMessage();
  throw $e;
}
