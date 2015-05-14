function showMenu(){
	var submeni=document.getElementById("submenu").children[0];
    var submeni1=document.getElementById("submenu").children[1];
    var submeni2=document.getElementById("submenu").children[2];	
	submeni.style.display="block";
	submeni1.style.display="block";
	submeni2.style.display="block";
   document.getElementById("submenu").style.display="block";
   document.getElementById("submenu").style.clear="both";
    
 }
 function hideMenu(){
   document.getElementById("submenu").style.display="none";
   document.getElementById("submenu").style.clear="both";
 }
 

 function odobriIme(){
	var ime=document.getElementById("unosIme").value;
	var re = /^[A-Za-z]+$/;
	if(ime.match(re))
	document.getElementById("greskaIme").innerHTML="nnnennnnnnnnnnnnn";
	return true;
	}
	else {
	document.getElementById("greskaIme").innerHTML="Unesite validno ime.";
	return false;
	}
}


function provjeriMail(){
	var email=document.getElementById("unos3").value;
	if(validirajEmail(email)){
	document.getElementById("greskaEmail").innerHTML="kkkkkkkk";
	return true;
	}
	else {
		document.getElementById("greskaEmail").innerHTML="Unesite odgovarajuci e-mail.";
		return false;
	}
}

function validirajEmail(email) {
 var re = /^[a-z\._0-9]+@[a-z]+\.[a-z]{2,4}$/;
 return re.test(email);
 }

 
 function validirajDrzavu(){
	var country=document.getElementById("unos4").value
	
	 
	var req=new XMLHttpRequest();

	req.onreadystatechange=function(){
		if(req.readyState==4 && req.status==200){
			var response=JSON.parse(req.responseText);
			document.getElementById("greskaDrzava").innerHTML="";
			document.getElementById("unos4").value=response[0].name;					
			drzavaValidirana=true;
			return true;
			
			
		}
		else if(req.status==404){
			document.getElementById("greskaDrzava").innerHTML="Please enter a valid name.";
			drzavaValidirana=false;
			return false;
		}
		
	}
	
	var url="https://restcountries.eu/rest/v1/name/"+country;
	req.open("GET",url,true);
	req.send();
}
