<?php 
require_once "Game.php";

if(!empty($_POST['name'])){
    setUsername('../gameState.txt', $_POST['name']);

    Game::startGame();
} else {
    $file = fopen('../gameState.txt', 'r');
    $arr = [];
    while(!feof($file)){
        $line = fgets($file, 999);
        if($line != '') $arr = explode(':', $line);
    }

    if (gettype($arr[0]) == 'string') {
        Game::startGame();
    } else {
        echo 'Введите имя';
    }

}

function setUsername($path, $username){
    file_put_contents($path, "");

    $file = fopen($path, 'a');
    fwrite($file, $username);
    fclose($file);
}
