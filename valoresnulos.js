var letras = "abc";

console.log(letras.match(/a/));//match para encontrar un valor

//valor nullo cuando el valor no existe
var letras = "abc";

console.log(letras.match(/d/));

//valor indefinido cuando se crea una variable pero no tiene ningun valor (caracter, entero, bool etc)
var persona;
console.log(persona)

//aun peor
console.log(persona2)

//ejemplo con un objeto que tiene la propiedad score pero en consola se escribe mal

var juego = {
    Score: 100,
}

console.log(juego.score)

//cadena vacia
try{
    var casa = "";
    console.log(casa)
}catch(err){
    console.log(err);
}
