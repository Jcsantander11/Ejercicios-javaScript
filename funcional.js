var conversion1 = 100;
var conversion2 = 0;
var cambio = 1.2;

function convertirmoneda(amount, rate){
    return amount * rate;
}

conversion2 = convertirmoneda(conversion1, cambio);

console.log(conversion2)

function doble(num1){
    return num1 *2;
}