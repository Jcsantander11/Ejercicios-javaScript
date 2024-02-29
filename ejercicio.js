//contar la cantidad de elementos de una cadena

var nombre = "Jean carlos santander";
console.log(nombre.length)

var casa = [1,2,3,4,5];
console.log(casa.length);

//meotod indexof y lastindexof
nombreposi = nombre.lastIndexOf("e");
console.log(nombreposi)

//metodo split
nombresepa = nombre.split(" ");
console.log(nombresepa)

//mayusculas y minusculas
nombremay = nombre.toUpperCase();
nombremin = nombre.toLowerCase();
console.log(nombremay)
console.log(nombremin)

//typeoff identifica que operador es
var test = typeof("hola");
var test1 = typeof(45);
var test2 = typeof(true);
var test3 = typeof([1,2,3]);

console.log(test, test1, test2, test3)

var nombre = "hello";
nombre3 = nombre.indexOf("l")
console.log(nombre3)