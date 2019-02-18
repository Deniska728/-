<?php

class FileReader {
  public function __construct($file)
  {
    $this->file = $file;
  }
  private function readFile()
  {
    $fpArray = [];
    $i = 0;
    $fp = fopen($this->file, "r");
    $productArray = [];
    if ($fp) {
      while (!feof($fp)) {
        $i++;
        $line = fgets($fp, 999);
        $explodeLine = explode(":", $line);
        $productArray[$explodeLine[0]] = $explodeLine[1];
        if($i == 5){
          $fpArray[] = $productArray;
          $productArray = [];
          $i = 0;
        }
      }
    }
    else echo "Ошибка при открытии файла";
    fclose($fp);
    return $fpArray;
  }

  public function getProductsByDay($day = 1)
  {
    $arrayProducts = $this->readFile();

    for($i = 0, $count = sizeof($arrayProducts); $i < $count; $i++){
      $currentDate = $arrayProducts[$i]['Дата поступления'];
      $date = new DateTime(trim($currentDate));
      $dateFormat = $date->format('d.m.Y');
      $toDate = new DateTime($dateFormat);

      $today = date('d.m.Y');
      $todayDate = new DateTime($today);

      $lts = $toDate->diff($todayDate);
      $leftToStudy = $lts->format('%a');

      if((int)$leftToStudy < $day){
        foreach ($arrayProducts[$i] as $key => $value){
          echo $key.": ".$value."<br>";
        }
        echo "<br>";
      }
    }
  }
}

$newFileReader = new FileReader("./prod.txt");
$newFileReader->getProductsByDay(7);