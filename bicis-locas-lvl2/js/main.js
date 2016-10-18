function validateForm(){
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var indice = document.getElementById("opciones").selectedIndex;
	letras = /^[A-Z][a-zA-Z]*$/;
	expresion = /\w+@+\w+\.+[a-z]/;
	if(nombre === "" || apellido === "" || correo === "" || password === ""){
		document.getElementById('alertaGeneral').style.display = 'inline';
	} else if(!letras.test(nombre)){
		return document.getElementById('alertaNombre').style.display = 'inline';
	} else if(!letras.test(apellido)){
		return document.getElementById('alertaApellido').style.display = 'inline';
	} else if(!expresion.test(correo)){
		return document.getElementById('alertaCorreo').style.display = 'inline';
	} else if(password.length<6){
		return document.getElementById('alertaPasswordI').style.display = 'inline';
	} else if(password==="password" || password==="123456" || password==="098754"){
		return document.getElementById('alertaPasswordII').style.display = 'inline';
	} else if(indice == 0 ) {
  		return document.getElementById('alertaBici').style.display = 'inline';
	}
}