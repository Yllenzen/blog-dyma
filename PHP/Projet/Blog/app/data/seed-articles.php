<?php

$articles = json_decode(file_get_contents('./articles.json'), true);

$dns = 'mysql:host=localhost;dbname=blog';
$user = 'root';
$pwd = '123456';

$pdo = new PDO($dns, $user, $pwd);

$statement = $pdo->prepare('
    INSERT INTO article (
        title, 
        image, 
        content, 
        category
    ) VALUES (
        :title, 
        :image, 
        :content, 
        :category
    )');

foreach ($articles as $article) {
    $statement->bindValue(':title', $article['title']);
    $statement->bindValue(':image', $article['image']);
    $statement->bindValue(':content', $article['content']);
    $statement->bindValue(':category', $article['category']);
    $statement->execute();
}
