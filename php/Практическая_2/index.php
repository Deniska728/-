<?php

$str = '9ff09w4y3ery3uyzse265468r5y47';


function numberTranslate($str){
    $numbers0_19 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    $numbers20_90 = [ 'zero', 1, 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    $arrChar = [];
    $returnArray = [];
    $newStr = '';
    $arrStr = str_split($str);

    function implodeToStr(&$array, &$returnArr){
        $numb = implode($array);
        array_push($returnArr, $numb);
        $array = [];
    }

    foreach($arrStr as $key => $value){
        if(array_key_exists($value, $numbers0_19)){
            if(sizeof($arrChar) < 2){
                array_push($arrChar, $value);
            } else {
                $newStr.= $numbers20_90[$arrChar[0]].$numbers0_19[$arrChar[1]].' ';
                implodeToStr($arrChar, $returnArray);
                array_push($arrChar, $value);
            }
        } else {
            if(sizeof($arrChar) == 1){
                $newStr.=$numbers0_19[$arrChar[0]].' ';
                implodeToStr($arrChar, $returnArray);   
            }
            if(sizeof($arrChar) == 2){
                $newStr.= $numbers20_90[$arrChar[0]].$numbers0_19[$arrChar[1]].' ';
                implodeToStr($arrChar, $returnArray);   
            }
        }
    }
    if($arrChar != 0){
        if(sizeof($arrChar) == 1){
            $newStr.=$numbers0_19[$arrChar[0]].' ';
            implodeToStr($arrChar, $returnArray);   
        }
        if(sizeof($arrChar) == 2){
            $newStr.= $numbers20_90[$arrChar[0]].$numbers0_19[$arrChar[1]].' ';
            implodeToStr($arrChar, $returnArray);
        }
    }
    print_r($newStr."<br>");
    return $returnArray;
}

print_r(numberTranslate($str));

?>