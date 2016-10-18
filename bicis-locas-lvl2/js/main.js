function validateForm(){
	var nombre = document.getElementById('name').value;
	if(nombre === ""){
		alert('Todos los campos son requeridos');
	}
}