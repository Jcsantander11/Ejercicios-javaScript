var persona = {
    nombre: "jean",
    edad: 22,
    sexo: "masculino",
}

persona.estatura = 170


console.log(persona)

//crear un objeto y agregar atributos
var casa = {
    ventanas: 5,
    puertas: 3,
    escaleras: 1
}

casa.piezas = 2;
console.log(casa)

//crear un objeto y crear atributos u actualizar
var casa2 = {}
    casa2.ventanas= 4,
    casa2.puertas= 2,
    casa2.escaleras= 5


console.log(casa2)

//actualizar atributos con corhetes y punto
var casa3 = {}
    casa3.ventanas= 0,
    casa3["puertas"] = 0, //los corchetes se utilizan cuando el nombre del atributo lleva espacio
    casa3.escaleras= 0


console.log(casa3)

//los corchetes permiten evaluar expresiones
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

var arr =[];
    arr.uno = 1;
    arr.dos = 2;
    arr.tres = 3;
    arr.push(dos = 3)//agregar un nuevo atributo

    arr.pop(0)//eliminar el ultimo atributo agregado

    console.log(arr)
