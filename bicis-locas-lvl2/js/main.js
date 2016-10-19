function validateForm(){
	var spans = document.getElementsByClassName('falla');
	while(spans.length>0){
		spans[0].parentElement.removeChild(spans[0]);
	}
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var correo = document.getElementById('input-email').value;
	var password = document.getElementById('input-password').value;
	var indice = document.getElementById("opciones").selectedIndex;
	letras = /^[A-Z][a-zA-Z]*$/;
	expresion = /\w+@+\w+\.+[a-z]/;
	// if(nombre === "" || apellido === "" || correo === "" || password === ""){
	// 	document.getElementById('alertaGeneral').style.display = 'inline';
	// } else if(!letras.test(nombre)){
	// 	return document.getElementById('alertaNombre').style.display = 'inline';
	// } else if(!letras.test(apellido)){
		// return document.getElementById('alertaApellido').style.display = 'inline';
	// } else if(!expresion.test(correo)){
	// 	return document.getElementById('alertaCorreo').style.display = 'inline';
	// } else if(password.length<6){
	// 	return document.getElementById('alertaPasswordI').style.display = 'inline';
	// } else if(password==="password" || password==="123456" || password==="098754"){
	// 	return document.getElementById('alertaPasswordII').style.display = 'inline';
	// } else if(indice == 0 ) {
 	//  return document.getElementById('alertaBici').style.display = 'inline';
	// }
	if(!letras.test(nombre)){
		var validacion = document.createElement('span');
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Nombre con mayúscula")); 
		document.getElementById('name').parentElement.appendChild(validacion);
	}
	if(!letras.test(apellido)){
		var validacion = document.createElement('span');
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Apellido con mayúscula")); 
		document.getElementById('lastname').parentElement.appendChild(validacion);
	}
	if(!expresion.test(correo)){
		var validacion = document.createElement('span');
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Correo no válido")); 
		document.getElementById('input-email').parentElement.appendChild(validacion);
	}
	if(password.length<6 || (password==="password" || password==="123456" || password==="098754")){
		var validacion = document.createElement('span');
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Contraseña no válida")); 
		document.getElementById('input-password').parentElement.appendChild(validacion);
	}
	if(indice == 0){
		var validacion = document.createElement('span');
		validacion.setAttribute("class","falla");
		validacion.appendChild(document.createTextNode("Escoge al menos una bici")); 
	 	document.getElementById('opciones').parentElement.appendChild(validacion);		
	}
}