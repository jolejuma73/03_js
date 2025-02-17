
//OPERADORES ARITMETICOS + - * / % **
//1 + 1
//2
//3 -1
//2
//6 / 3
//2
//2 * 4
//8
//8 / 3
//2.6666666666666665
//5 % 2
//1
//4 % 2
//0
//2**4
//16

//CADENAS DE TEXTO(Strengs)
//"José Antonio"
//'José Antonio'
//`José Antonio`
//'JOsé A' +'Márquez'
//"José AMárquez"
//'JOsé A' +' Márquez'
//"José A Márquez"
//`Èl peluche cuesta  ${100 * 1.20}€`
//'Èl peluche cuesta  120€'
//"El peluche cuesta  ${100 * 1.20}€"
//'El peluche cuesta  ${100 * 1.20}€' con 2 no funciona

//BOOLEANOS
//Verdad o Falso se le llama booleano
//true or false

//OPERADORES DE COMPARACION
//3>2
//true
//3<2
//false
//"Miguel" == "Miguel"
//true
//'Juan' === 'Juannnn'
//false
//'Pera' !== 'Manzana' la pera es diferente a la manzana
//true
//2 >= 3  2 es mayor o igual a 3
//false 
//2 <= 3    2 es menor o igual a 3
//true
//(2 ===2) && (3 === 3) && (4 === 4)
//true && true && true .todas tienen que ser verdaderas
//true
//(2 ===2) && (4 === 3) && (4 === 4)
//true && false && true
//false
//(2 ===2) || (4 === 3) Si es verdadero o falso
//true || false
//true
//(2 ===2) || (4 === 3) || (4 === 4)
//true || false || true 
//true
//(12 ===2) || (4 === 3) 
//false || false    
//false
//!(2 ===2)  niega la condiciones
//false

//OPERADOR NOT
//!(2 ===2)  niega la condiciones
//false
//!(12 ===2)  niega la condiciones
//true


//OPERADOR VACIO
//null
//undefined

//OPERADOR bigInt
//En JavaScript, agregar una "n" al final de un número literal crea un valor de tipo BigInt.son un tipo de dato numérico en JavaScript que permite representar números enteros de magnitud arbitraria. Esto es útil cuando se trabaja con números que exceden el límite seguro para los números enteros representables con el tipo Number (que es Number.MAX_SAFE_INTEGER). Es pueden sumar, restar, multiplicar y dividir como cualquier otro número en JavaScript.
//const bigInt = 1234567890123456789012345678901234567890n;

//OPERADOR SIMBOL()
//Los Symbols son un tipo de dato primitivo en JavaScript introducido en ECMAScript 6 (ES6). Son únicos e inmutables, lo que significa que cada Symbol creado es diferente de cualquier otro Symbol, incluso si tienen la misma descripción. Se utilizan principalmente para crear claves únicas para propiedades de objetos. Esto ayuda a evitar colisiones de nombres de propiedades, especialmente cuando se trabaja con bibliotecas o código de terceros.
//const simboloUnico = Symbol();
//const otroSimbolo = Symbol('descripcion'); // Opcional: se puede agregar una descripción
//const claveSimbolo = Symbol('miClave');
//
//const objeto = {};
//objeto[claveSimbolo] = 'valor asociado al simbolo';
//
//console.log(objeto[claveSimbolo]); // Acceder al valor usando la clave Symbol

//VARIABLES
//son como contenedores que almacenan información. Imagina que tienes una caja donde puedes guardar un número, una palabra o cualquier otro tipo de dato. Esa caja es una variable.
//var nombre = "Juan"; // Declara una variable llamada "nombre" y le asigna el valor "Juan"
//let edad = 30; // Declara una variable llamada "edad" y le asigna el valor 30
//const PI = 3.1416; // Declara una constante llamada "PI" y le asigna el valor 3.1416
//let finanzas = 500
//undefined
//finanzas
//500
//finanzas = 800
//800
//finanzas= finanzas+20+100
//920
//finanzas
//con let podemos modificar el valor de algo
//con const no se puede cambiar el valor.
//const frase = 'This is fine'
//undefined
//frase = 'This is cool'  
//Uncaught TypeError: Assignment to constant variable.

//Controlar el flujo del programa
//condiciones booleanas
//let tenemosComidaDentro = true
//if(tenemosComidaDentro) {
//    'cocinar'
//}
//const cantidadDetergente =100
//
//if (cantidadDetergente <10) {'detergente suficiente'} else if (cantidadDetergente < 20) {'detergente casi' } else if(cantidadDetergente <25)  {'tefalta poco' } else { 'todo perfecto'}
//'todo perfecto'

//IDENTACION CODIGO
//El código debe ser legible.

//FLUJO DE CONTROL
//Flujo de control de ramificaciones
//streams
//day = 0
//while (day < 4) {
//console.log('streaming') 
//day = day + 1
//}
//4
//console.log(2)
//2
//const frase = "This is fine"  Declaramos una vinculación variable y las vinculaciones constantes no devuelven un valor
//undefined
//"This is fine"  Esto es una expresión y devuelve la expresión
//"This is fine"
//for (let day = 0; day < 4; day =day + 1) {console.log('streaming')}
//4
//let personasBici = 10
//console.log(personasBici)//10 
//
//personasBici = personasBici + 1
//console.log(personasBici)//11   
//++ personasBici 
//console.log(personasBici)  //12
//personasBici ++
//console.log(personasBici)//13
//-- personasBici
//console.log(personasBici)
//personasBici --
//console.log(personasBici)
//personasBici++
//for (let day = 0; day < 4; day++) {
//    console.log('streaming');
//}
//for (let day = 0; day < 4; day += 1) {
//    console.log('streaming');
//}
//streaming
//streaming
//streaming
//streaming
///*este comentario
//es multilinea
//y se cierra así */
////mayusc+enter y se baja a la siguiente linea
//let finanzas = 1000
//function tocarPeluche(coste) {
//    console.log (`tocar peluche cuesta ${coste}€`)
//    finanzas = finanzas - coste
//    return finanzas
//}
//tocarPeluche(20)
//tocar peluche cuesta 20€
//
//980

//function tocarPeluche(coste = 100) {
//    
//    console.log (`tocar peluche cuesta ${coste}€`)
//    finanzas = finanzas - coste
//    return finanzas
//}
//tocarPeluche()
//900
