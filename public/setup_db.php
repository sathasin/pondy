<?php
$host = 'localhost';
$username = 'root';
$password = '';

try {
    $conn = new PDO("mysql:host=$host", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $sql = "CREATE DATABASE IF NOT EXISTS best_puducherry_db";
    $conn->exec($sql);
    echo "Database created successfully<br>";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>
