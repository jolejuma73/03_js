//https://www.youtube.com/watch?v=bmGPv687toc&t=1286s
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

