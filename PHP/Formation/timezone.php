<?php

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);
if (isset($_SESSION['timezone'])) {
    $_SESSION['timezone'] = $_POST['timezone'];
}
