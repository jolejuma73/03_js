

let frutas = ['kiwi','manzana', 'pera', 'naranja', "melón"];
console.log(frutas);// imprime [ 'manzana', 'pera', 'naranja' ]
frutas.pop();// borra el último elemento del array  
console.log(frutas);
frutas.shift();//borra el primer elemento del array imprime imprime [ 'pera', 'naranja' ]
console.log(frutas);
frutas.unshift("sandia");//añade un elemento al principio del array imprime [ 'sandia', 'pera' ]
console.log(frutas);
frutas.push("coco");//añade un elemento al final del array imprime [ 'sandia', 'pera', 'coco' ]
console.log(frutas);

let frutasConA = frutas.filter(fruta => fruta.includes("a"));//filtra las frutas que contienen la letra "a" imprime [ 'sandia', 'manzana', 'pera', 'naranja' ]
console.log(frutasConA);

let telas = ['uno', 'dos', "tres"];
let telas2 = ['cuatro','cinco' ];
let telas3 = ['seis','siete' ];
let telas4 = ['ocho','nueve' ];


let todasTelas =telas.concat(telas2, telas3, telas4);
let todasTelas2 =telas2.concat( telas3);

let todasTelas4 =telas.concat( telas4);
let todasTelas3 =telas.concat( telas3);//[ 'uno', 'dos', 'tres', 'seis', 'siete' ]
console.log(todasTelas);//imprime 'uno',   'dos',  'tres',  'cuatro',  'cinco', 'seis',  'siete', 'ocho',  'nueve'
console.log(todasTelas2);//imprime [ 'cuatro', 'cinco', 'seis', 'siete' ]
console.log(todasTelas4);//imprime 'uno',   'dos',  'tres',   'ocho',  'nueve'
console.log(todasTelas3);//imprime 'uno',   'dos',  'tres', 'seis',  'siete', 

todasTelas.reverse();
console.log(todasTelas);//imprime 'nueve', 'ocho', 'siete', 'seis', 'cinco', 'cuatro', 'tres', 'dos', 'uno'
todasTelas.sort();
console.log(todasTelas);//imprime 'cinco', 'cuatro', 'dos', 'nueve', 'ocho', 'seis', 'siete', 'tres', 'uno'