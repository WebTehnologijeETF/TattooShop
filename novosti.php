<?php 

$path = dirname(__FILE__) . '\novosti';
$fajl = scandir($path);

$novosti = array();
$datumi = array();

for ($i=2; $i<count($fajl); $i++) {
    $ucitaj = file($path . '/' . $fajl[$i]);
    array_push($novosti, $fajl[$i]);
    array_push($datumi, $ucitaj[0]);
}

for ($i=0; $i<count($novosti) - 1; $i++) {
	for($j=1; $j< count($novosti) ; $j++){
	
        if (DateTime::createFromFormat('DD.MM.YY hh:mm:ss', $datumi[$i]) < DateTime::createFromFormat('DD.MM.YY hh:mm:ss', $datumi[$j])) {
            $v = $datumi[$j];
            $datumi[$j] = $datumi[$i];
            $datumi[$i] = $v;
            $s = $novosti[$j];
            $novosti[$j] = $novosti[$i];
            $novosti[$i] = $s;
            
        }
	}
}

?>