let contador = 3;
function recursividad(){
    console.log(contador)
    contador = contador -1;
    if(contador === 0) return
    recursividad();
}

//PROGRAMACION ORIENTADO A OBJETOS 
var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}

virtualPet.nap()

    if(virtualPet.sleepy === "true"){
        console.log("la mascota esta dormida");
    }else{
        console.log("la mascota esta despierta");
    }

