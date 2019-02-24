<?php

class Game {

    public static function setRandomNumber()
    {
        $username = self::getDataFromFile()[0];
        trim($username);
        $randomNum = rand(1, 10);
        file_put_contents('../gameState.txt', "");
        file_put_contents('../gameState.txt', "{$username}:{$randomNum}");
    }

    public static function startGame()
    {
        Game::setRandomNumber();
        self::generateForm('Игра началась! Введите число от 1 до 10');
    }

    public static function checkNumber($number)
    {
        $randomNum = (int)self::getDataFromFile()[1];
        $username = self::getDataFromFile()[0];

        switch($number){
            case $number == $randomNum:
                echo "<h2>{$username}, Вы угадали! Это число {$randomNum}</h2>
                <form action='index.php' method='post'>
                    <input type='submit' value='Загадать новое число'>
                </form>
                ";
                break;
            case ($number - $randomNum) == 1 || ($number - $randomNum) == -1:
                self::generateForm('Тепло');
                break;
            case $number + 1 > $randomNum:
                self::generateForm('Загаданное число меньше введённого');
                break;
            case $number - 1 < $randomNum:
                self::generateForm('Загаданное число больше введённого');
                break;
        }
    }

    public static function generateForm($text)
    {
        echo "<h2>{$text}</h2>
        <form action='handleGame.php' method='post'>
            <input type='text' name='number'>
            <input type='submit'>
        </form>
        ";
    }

    private static function getDataFromFile()
    {
        $file = fopen('../gameState.txt', 'r');
        $arr = [];
        while(!feof($file)){
            $line = fgets($file, 999);
            if($line != '') $arr = explode(':', $line);
        }
        return $arr;
    }
}