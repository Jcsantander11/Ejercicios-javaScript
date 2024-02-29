//IF ELSE
var resultado = 50;
if(resultado > 40){
    console.log("Has pasado");
}else{
    console.log("No has pasado");
}

//IF ELSE
var puesto = "primero";

if(puesto == "primero"){
    console.log("oro");
}else if(puesto == "segundo"){
    console.log("plata");
}else if(puesto == "tercero"){
    console.log("bronce");
}else{
    console.log("una patada en el rabo");
}

//SWITCH (Se usa para mas de 3 condiciones)
var puesto = "primero";

switch(puesto){
    case "primero":
        console.log("Oro");
        break;
    case "segundo":
        console.log("plata");
        break;
    case "tercero":
        console.log("bronce");
        break;
    default:
        console.log("Nada");
}
