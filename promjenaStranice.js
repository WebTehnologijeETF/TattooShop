function promjenaStranice(naziv) {
	var ajax = new XMLHttpRequest();
	
	
	ajax.onreadystatechange = function () {
		if(ajax.readyState == 4 && ajax.status == 200) {
			document.getElementById("wrapper").innerHTML =  ajax.responseXML; //ajax.responseText;
		}
		if (ajax.readyState == 4 && ajax.status == 404)
			document.getElementById("wrapper").innerHTML = "Greska";
	}
	
	
	ajax.open("GET", naziv + ".html", true);
	ajax.send();
}