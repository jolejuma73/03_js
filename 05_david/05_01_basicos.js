//https://www.youtube.com/watch?v=bmGPv687toc&t=1286s

//array y objetos  https://www.youtube.com/watch?v=5DaZXXbHI_U&t=24s


//  Aprende JavaScript en 60 minutos
//  1. Variables
//  2. Condicionales    
//  3. Bucles
//  4. Funciones
//  5. Objetos
//  6. Arrays
//  7. DOM
//  8. Eventos
//  9. LocalStorage
//  10. Fetch
//  11. Async/Await
//  12. Promesas    
//  13. Clases
//  14. Herencia    
//  15. Métodos estáticos
//  16. Métodos encadenados
//  17. Métodos privados
//  18. Métodos públicos
//  19. Métodos protegidos
//  20. Métodos abstractos
//  21. Métodos finales
//  22. Métodos abstractos  


//  
//var miVariable =  5;
//console.log(miVariable);
//console.log("mi edad es " +  miVariable)
//var miTexto = "Hola";
//console.log(miTexto);
//
//miVariable = 52
//
//
//const miConstante = 3;
//console.log("El valor de mi constante es " + miConstante);
//
////se pueden hacer sumas, restas, divisiones y multiplicaciones
//var opr1 =5
//var opr2 = 3
//var opr3 = 9
//var resultado = opr1  + opr2 + opr3;
//console.log("resultado vale : " + resultado)
//
    //  condicionales
//let miNumero = 6;
//let miNombre = "José Antonio"
//
//if (miNumero > 5){
//    console.log("El número es mayor a 5")
//    console.log("Ejecutando archivo correcto...");
//
//}else{
//    console.log("El número es menor o igual a 5")
//}
//if (miNumero > 5  &&  miNombre == "zzzJosé Antonio"){
//    console.log("si ")
//
//}else{
//    console.log("nozzzzz")
//}
//
//if (miNumero > 5  ||  miNombre == "zzzJosé Antonio"){
//    console.log("si es || o 5 o zzzja es una de las dos ")
//
//}else{
//    console.log("nozzzzz")
//}
//let miNumero2 = 5
//if(miNumero2 > 0){
//    console.log("Mi número2 es positivo");
//} else if (miNumero2 === 0){
//    console.log("Mi número2 es zero");
//} else {
//    console.log("Mi número2 es negativo");
//}
//let miNumero3 = -5
//if(miNumero3 > 0){
//    console.log("Mi número3 es positivo");
//} else if (miNumero3 === 0){
//    console.log("Mi número3 es zero");
//} else {
//    console.log("Mi número3 es negativo");
//}
////bucles
////let contador = 0;
////while(contador < 5){
////    console.log(contador);
////    contador = contador + 1;
////}
////for(let contador = 0; contador < 10; contador = contador + 1 ){
////    console.log(contador);}
//let contador = 0; // Definir la variable contador antes de usarla
//for(let i = 0; i < 10; i++ ) {
//    console.log(i);
//}
//for(let i = 10; i > 0; i-- ) {
//    console.log(i);
//}
//
////CONTADOR DE INICIALES
//// Lista de nombres
//let nombres = ["Ana", "Andrés", "Bruno", "Carlos", "Camila", "Daniel", "Ana", "Andrés", "Bruno"];
//
//// Objeto para almacenar las iniciales
//let contadorIniciales = {};
//
//// Recorrer la lista de nombres
//for (let nombre of nombres) {
//    let inicial = nombre.charAt(0).toUpperCase(); // Tomar la primera letra y convertirla en mayúscula
//    contadorIniciales[inicial] = (contadorIniciales[inicial] || 0) + 1;
//}
//
//// Mostrar el resultado
//console.log(contadorIniciales);

//  4. Funciones
//saludar();
//function saludar(){
//    console.log("Hola, soy una función");
//}
//saludar();

//function saludar(nombre, edad){
//    console.log("Hola, mi nombre es " + nombre);
//    console.log("y mi edad es " + edad);
//
//}
//saludar("José Antonio", 24);
//saludar("José", 67);
//saludar("Antonio", 51);
//
//function multiplicar(num1, num2) {
//    let resultado = num1 * num2;
//    return resultado;
//}
//let recibidor = multiplicar(5, 3);
//console.log(recibidor);

//ARREGLOS
//let miArray = [1, 2, 3, 4, 5];
//let miArreglo = ["David", "José", "Antonio", "García", "Pérez", "Francisco"];
//for (let i = 0; i < 10; i++) {
//console.log("Accediendo al índice: " + i);
//    let mostrar = miArreglo[i]   
//    console.log(mostrar);
//}
//
//OBJETOS
let persona = {
    name: "Aciclovir 250 mg Polvo para solución para perfusión",
    presentation: "Vial 250 mg",
    type: "Antiviral",
    dose: "5-10 mg/kg c/ 8h",
    preparation: "Reconstituir con 10cc de agua para inyección o SSF. Tras reconstitución, SSF, SG5% o RL. No superar los 5mg/ml",
    appearance: "Solución clara e incolora.",
    administrationTime: "No menos de 60 minutos",
    storage: "Una vez diluido, permanece estable 12h a temperatura ambiente. No refrigerar por riesgo de cristalización.",
    technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65256/FT_65256.pdf"
};
let persona2 = {
    nombre: "José Antonio",
    edad: 51,
    profesion: "Enfermero"
};
console.log(persona2);


let persona3 = {
    nombre: "Basilio",
    edad: 24,
    profesion: "Carpintero"
};
persona2.comidaFavorita = "Hamburguesa";
persona2.segundaComidaFavorita = "Pizza";
persona2.nombre = "Nuevo Nombre";
console.log(persona);
console.log(persona2);
console.log(persona3);


//Crear un array

const miArray = ["Basilio", 156 , false];//esto no es recomendable
const miArray2 = ["José Antonio", "Perfecto","Blas"];  //esto  es recomendable, sean el mismo tipo de datos
//Propiedad legngth (longitud)
const cant = miArray.length;
console.log(cant);// imprime: 3 quesería la cantidad de nombres o elementos que contiene const miArray
//  Acceder a los elementos de un array
const miArray3 = ["Lucas", "José Antonio", "Tomás", "Blas"]; //Los elementos del array el primero se le da el número 0, por lo tanto este array tiene 4 elementos, el 0, el 1, el 2 y el 3
var nombre = miArray3[0];
console.log(nombre);//imprime Lucas
var nombre = miArray3[1];
console.log(nombre);//imprime José Antonio
var nombre = miArray3[2];
console.log(nombre);//imprime Juan
var nombre = miArray3[3];
console.log(nombre);//imprime Blas
var nombre = miArray3[4];//imprime undefined, ya que no hay un cuarto elemento en el array

//Agregar elementos a un array a través de métodos. Un método es comu una función que tiene el elemento.
const miArray4 = ["Lucas", "José Antonio", "Tomás", "Blas"];
console.log(miArray4);//imprime: ["Lucas", "José Antonio", "Tomás", "Blas"]
miArray4.push("Gregorio");//agrega un elemento al final del array
console.log(miArray4);//imprime: ["Lucas", "José Antonio", "Tomás", "Blas", "Gregorio"]
miArray4.unshift("Jorge");//agrega un elemento al principio del array
console.log(miArray4);//imprime: ["Jorge", "Lucas", "José Antonio", "Tomás", "Blas", "Gregorio"]

//  Quitar elementos de un array a través de métodos
let final = miArray4.pop();//quita el último elemento del array
console.log(miArray4);//imprime: ["Jorge", "Lucas", "José Antonio", "Tomás", "Blas"]
console.log(final);//imprime: Gregorio
let inicio = miArray4.shift();//quita el último elemento del array
console.log(miArray4);//imprime: ["Lucas", "José Antonio", "Tomás", "Blas"]
console.log(inicio);//imprime: Jorge

// Recorrer/iterar el array
const nombres = ["Lucas", "José Antonio", "Tomás", "Blas"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}//imprime: Lucas, José Antonio, Tomás, Blas

const aii = ["Amoxixilina", "Clindamicina", "Gentamicina", "Levofloxacino"];
for (let i = 0; i < aii.length; i++) {
    console.log(aii[i]);
}//imprime: Amoxixilina, Clindamicina, Gentamicina, Levofloxacino
aii.forEach((elemento) => {
    console.log(elemento);
});
//imprime: Amoxixilina, Clindamicina, Gentamicina, Levofloxacino
aii.forEach((daigualelnombrequepongamos) => {
    console.log(daigualelnombrequepongamos);
});
//imprime: Amoxixilina, Clindamicina, Gentamicina, Levofloxacino

//Crear un objeto que pueden tener diferentes tipos de datos
const datos = {
    nombre: "José Antonio",
    edad: 51,
    profesion: "Enfermero"
};
console.log(datos);//imprime: {nombre: "José Antonio", edad: 51, profesion: "Enfermero"}

//  Acceder a una propiedad de un objeto
let edad = datos.edad;
console.log(edad);//imprime: 51

//Editar una propiedad
datos.edad = 52;
console.log(datos);//imprime: {nombre: "José Antonio", edad: 52, profesion: "Enfermero"}

////Agregar una nueva propiedad
//datos.comidaFavorita = "Hamburguesa";
//console.log(datos);//imprime: {nombre: "José Antonio", edad: 52, profesion: "Enfermero", comidaFavorita: "Hamburguesa"}
//
////  Borrar una propiedad
//delete datos.comidaFavorita;
//console.log(datos);//imprime: {nombre: "José Antonio", edad: 52, profesion: "Enfermero"}
//
////  Recorrer / Iterar un objeto
//const datosPersonales = {
//    nombre: "José Antonio",
//    edad: 51,
//    profesion: "Enfermero"
//};
//for (let key in datosPersonales) {
//    console.log(key, datos[key])
//}//imprime: nombre José Antonio, edad 51, profesion Enfermero
//for (let key in datosPersonales) {
//    console.log(key);//imprime: nombre, edad, profesion
//}
//
//
//const arrayDeObjetos = [
//    {
//        name: "Aciclovir 250 mg Polvo para solución para perfusión",
//        presentation: "Vial 250 mg",
//        type: "Antiviral",
//        dose: "5-10 mg/kg c/ 8h",
//        preparation: "Reconstituir con 10cc de agua para inyección o SSF. Tras reconstitución, SSF, SG5% o RL. No superar los 5mg/ml",
//        appearance: "Solución clara e incolora.",
//        administrationTime: "No menos de 60 minutos",
//        storage: "Una vez diluido, permanece estable 12h a temperatura ambiente. No refrigerar por riesgo de cristalización.",
//        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65256/FT_65256.pdf"
//    },
//    {
//        name: "Amikacina 500mg/2ml Solución inyectable y para perfusión",
//        presentation: "Vial 500 mg en 2 ml",
//        type: "Aminoglucósido",
//        dose: "15 mg/kg/día",
//        preparation: "SSF o SG5%. 5 mg/ml",
//        appearance: "Transparente o ligeramente amarillenta.",
//        administrationTime: "30-60 minutos",
//        storage: "Una vez diluido, permanece estable 24h a temperatura ambiente.",
//        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/57012/FT_57012.pdf"
//    },
//    {
//        name: "Amoxicilina 1 g / Ac. clavulánico 200 mg",
//        presentation: "Vial 1000mg/200mg",
//        type: "Betalactámico",
//        dose: "1000mg/200mg c/8h",
//        preparation: "Se recomienda reconstituir con 20cc de agua para inyección y, posteriormente, administrar en bolo o añadir a alguno de los siguientes disolventes: agua para inyección, SSF o RL.",
//        appearance: "Incoloro o color paja pálido.",
//        administrationTime: "Directa en 3 min o diluido en 30 minutos",
//        storage: "El producto reconstituido con 20cc de agua para inyección, es estable a temperatura ambiente durante 20 minutos. Una vez añadido a la bolsa de perfusión, es estable en agua para inyección y SSF, durante 3 horas a temperatura ambiente y durante 6 horas en nevera. En RL es estable 2 horas a temperatura ambiente.",
//        technicalSheet: "https://cima.aemps.es/cima/pdfs/es/ft/65131/FichaTecnica_65131.html.pdf"
//    },
//];
//for(let i = 0; i < arrayDeObjetos.length; i++){
//    console.log(arrayDeObjetos[i]);
//}
//for(let i = 0; i < arrayDeObjetos.length; i++){
//    console.log("=====================================");
//    console.log("name: " + arrayDeObjetos[i].name);
//    console.log("presentation: " + arrayDeObjetos[i].presentation);
//    console.log("type: " + arrayDeObjetos[i].type);
//    console.log("dose " + arrayDeObjetos[i].dose);    
//    console.log("preparation: " + arrayDeObjetos[i].preparation);
//    console.log("administrationTime: " + arrayDeObjetos[i].administrationTime);
//    console.log("storage: " + arrayDeObjetos[i].storage);
//    console.log("technicalSheet: " + arrayDeObjetos[i].technicalSheet);
//
//}
//Objeto que dentro de las propiedades tiene un array
const objetoConArray = {
    nombre: "Objeto con Array",
    arr: ["abeja", "banana", "casa", "linterna"], 
};
objetoConArray.arr.forEach(elemento => {
    console.log(elemento + "  una palabra cualquiera")
})
for (let i = 0; i < objetoConArray.arr.length; i++) {
    console.log(objetoConArray.arr[i] + " aqui ponemos cualquier otra cosa diferente a la anterior");
}

const arrayAparte = objetoConArray.arr;
for (let i = 0; i < arrayAparte.length; i++) {
    console.log(arrayAparte[i] + " otra cosa diferente");
}