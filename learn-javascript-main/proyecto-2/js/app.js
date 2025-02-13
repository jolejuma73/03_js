// Función que se encarga de realizar el cálculo del IVA
function calcularIVA(){
const precio = document.querySelector("#precio").value;
const iva = document.querySelector("#iva").value / 100;
	
	//Realizar el cálculo del iva
const resultado =  parseFloat(precio) * (1 + iva);
	
	//Mostrar resultado	
	document.querySelector("#iva-amount").innerHTML = "Importe del IVA: $" + (resultado - parseFloat(precio));
	document.querySelector("#total").innerHTML = "Precio Final: $" + resultado;
}

//Evento para que la función se ejecute cada vez que se ingresen datos en el formulario

	document.querySelector("#precio").addEventListener("input", calcularIVA);
	document.querySelector("#iva").addEventListener("input", calcularIVA);
