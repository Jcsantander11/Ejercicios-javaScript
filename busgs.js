for(var i = 0; i >= -1000; i--){
    console.log(i);
}
console.log("llegaste a mil hpta")

//funcion correcta
function suma(a,b){
    console.log(a+b);
}

suma(10,5);

console.log("Funcionando");

//funcion que comete falla pero continua ya que solo concatena con una cadena las variables
function suma(a,b){
    console.log(a+b);
}

suma(10,"hola");

console.log("Funcionando");



//funcion que tiene un error y por ende no permite ejecutar el siguiente codigo
try{
    console.log(c+d);
}catch(error){
    console.log(error)
    console.log("error en en la suma", "\nverificar codigo");
}

var resta = (10,2);
console.log("la resta es: ", resta);

//declarar un error manualmente
try{
    throw new ReferenceError();
}catch(error){
    console.log(error)
    console.log("error en en la suma", "\nverificar codigo");
}

var resta = (10,2);
console.log("la resta es: ", resta);


//tipos de errores:
/*
ReferenceError
Aparece un ReferenceError cuando, por ejemplo, uno intenta usar variables que no han sido declaradas en ninguna parte.
Cualquier tipo de código JavaScript no válido provocará un SyntaxError.
Se genera un TypeError cuando, por ejemplo, se intenta ejecutar un método en un tipo de datos no compatible.

*/

//pasar numero de base decimal a cualquier otra base

var num = (20);
base2 = num.toString(2);
console.log(base2)

//rangeerror sucede cuando se excede del rango
try {
    var num2 = 10;
    num2.toString(100);
} catch (error) {
    console.log(error)
    console.log(num2)
}
