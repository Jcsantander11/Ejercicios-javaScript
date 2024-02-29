
function trenes(){
var tren1 = ["uno", "dos", "tres", "cuatro"];
console.log(tren1[0]);
}
trenes();
/* cuanta la cantidad de elmentos de una matriz
Array.length*/

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);