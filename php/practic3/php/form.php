<?php
if($_SERVER['REQUEST_METHOD'] == 'POST') {
  $name = $_POST['name'];
  $lastname = $_POST['lastname'];
  $age = $_POST['age'];
  $password = $_POST['password'];
  $mail = $_POST['mail']

  checkValid($name, $lastname, $age, $password, $mail);
}

function checkValid($name = '', $lastname = '', $age = '', $password = '', $mail = ''){
  if(!preg_match('/[А-Яа-яЁёA-Za-z]{2,10}/', $name)){
    echo 'Некорректное имя. Длина должна быть от 2 до 10 символов'.'<br/>';
  }
  if(!preg_match('/[А-Яа-яЁёA-Za-z]{2,14}/', $lastname)){
    echo 'Некорректная фамилия. Длина должна быть от 2 до 14 символов.'.'<br/>';
  }
  if(!preg_match('/[0-9]{2}/', $age)){
    echo 'Некорректный возраст.'.'<br/>';
  }
  if(!preg_match('/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}/', $password)){
    echo 'Пароль должет состоять минимум из одной цифры, одной заглавной и строчной буквы. Длина от 8 до 14 символов.'.'<br/>';
  }
  if($mail == ''){
    echo 'Введите email';
  }
}