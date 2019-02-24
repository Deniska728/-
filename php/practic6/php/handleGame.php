<?php
require_once "Game.php";
$number = $_POST['number'];

if(!empty($number) && $number > 0){
    Game::checkNumber($number);
} else {
    Game::generateForm('Вы не ввели число или число меньше единицы');
}
