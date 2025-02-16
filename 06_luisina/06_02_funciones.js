//SUBPROGRAMAS
// //https://www.youtube.com/watch?v=e5M-oF3ROt0
//funciomes y procedimientos

//FUNCIONES
//https://www.youtube.com/watch?v=aYdvt6myUkc
function saludar() {
    console.log("Hola! Estoy en la función")
}
saludar();

function sumar (num1, num2) {
    resultado = num1 + num2;
    return resultado;
}
let suma = sumar (5,2);
console.log("el resultado es : " + suma);
suma = sumar (51,21);
console.log("Ahora el resultado es : " + suma);