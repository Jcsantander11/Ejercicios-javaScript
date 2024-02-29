var venta = {
    zapatos: 20,
    impuesto: 1.2,

    preciototal: function(){
        let calcular = venta.zapatos * venta.impuesto;
        console.log("el precio es: " + calcular)
    }
}

venta.preciototal();