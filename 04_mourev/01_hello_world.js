console.log("Hola Mundo");
//variables
var myString = "Esto es una cadena de texto";
console.log(myString);

let myString2 = "Esto es una cadena de texto";
myString2 = "Aquí cambio el valor de la cadena de texto";
console.log(typeof myString2);
myString2 = 6;
console.log(myString2);
console.log(typeof myString2);

let myNumber = 7;
myNumber = myNumber + 9;
console.log(myNumber);
console.log(myNumber - 1);
console.log(myNumber);

console.log(myString + " " + myNumber);

let myNumber2 = 6.5;
console.log(myNumber2); 
console.log(typeof myString2);

let myBool = false;
myBool = true;  
console.log(myBool);
console.log(typeof myBool);

myBool = null;
console.log(myBool + myNumber2 + myNumber);

myBool = undefined;
console.log(myBool);
let myundefined;
console.log(myundefined);
//Constantes
const myConst = "Mi propiedad constante";
console.log(myConst);
console.log(typeof myConst);

//Control de flujo
myNumber = 10;
myString = "Hola Mundo";
if (myNumber == 10 && myString == "Hola") {
    console.log("El número es 10 y hola");
}else if (myNumber == 11) {
    console.log("El número es 11"); 
}else if (myNumber == 10 || myString == "Hola") {
    console.log("El número es 11 o la palabra es Hola."); 
}
else {
    console.log("El número no es 10");
}

myBool = null;
if (myBool == null) {
    console.log("myBool Es verdadero")
};

//Funciones
function myFunction() {
    return "Mi Función. Hola Mundo function"
}
console.log(myFunction());

//Listas o arrays
let myList = ["Hola", "Mundo", "Adios", 25];
console.log(myList);
console.log(myList[0]);

// Set
let myset = new Set( ["Hola", "Mundo", "Adios", 25, "Mundo", "Pandereta"]);
myset.add("Blanco")
console.log(myset);

// Mapas
let myMap = new Map([["Brais", 36], ["Torpedo", 25], ["Tímpano", 82]]);
myMap.set("NIku1525", 136);

console.log(myMap);
console.log(myMap.get("Brais"));

//Bucles

for (const value of myset) {
    console.log(value);
}
for (const value of myMap) {
    console.log(value);
}
for (const value of myList) {
    console.log(value);
}

let myCounter = 0;
while (myCounter < myList.length) {
    console.log(myList[myCounter]);
    myCounter++;
}

// Clases
class MyClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let myClass = new MyClass("Brais", 36);
console.log(myClass);
console.log(myClass.name);
    
//  Enum
const MyEnum = {
    DART: "dart",
    PYTHON: "python"  ,     
    SWIFT: "swift" ,
    JAVA: "java" ,
    KOTLIN:  "kotlin" ,
    JAVASCRIPT:  "javaScript"
}
// Probamos que funciona correctamente
console.log(MyEnum);
console.log(MyEnum.JAVASCRIPT);