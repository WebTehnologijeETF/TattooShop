<?php

function validirajIme($ime){
	/*if($ime == "") return false;   */
	
	else if(containsNumbers($ime)) return false;
	
	else return true;	
}

a
function validirajEmail($email){
	return filter_var($email, FILTER_VALIDATE_EMAIL);
}

function validirajDrzavu($drzava){
	if($drzava == "") return false;
	else if (containsNumbers($drzava)) return false;
	
	return true;
}

function validirajPoruku($poruka){
	if($poruka != "") return true;
	return false;
}

function containsNumbers($string){  /* provjera da li su svi znakovi brojevi */
	return ctype_digit($string); 
}

function poslataForma(){
	return ($_SERVER['REQUEST_METHOD'] == 'POST');
}
function praznaPolja($ime , $email , $poruka){
	if($ime == "" || $email == "" || $poruka == "") return false;
	
	return true;
}
function odobriSve()

function prikaziErorr(){
	echo "Polja ime, email, drzava ne smiju biti prazna! ";
	
}


/* dio za prikaz unesenih podataka */ 


function prikaziUneseno($ime , $prezime , $email , $poruka , $drzava){

echo 	'<div>';
echo		 '<p>Provjerite ispravnost podataka:</p>';
echo         '<p >Ime: ' .$ime '</p>';
echo         '<p class="djelatnost">Email: ' .$prezime '</p>';
echo         '<p class="djelatnost">Poruka: ' .$email '</p>';
echo         '<p class="djelatnost">Tip: ' .$drzava '</p>';
echo         '<p class="djelatnost">Broj telefona: ' .$poruka '</p>';
echo		'<input id="send" type="mail"  value="Posalji">'
echo	'</div>'
}
?>