
console.log("---------------NIVEL ALTO -----Ejercicio-----111111111-----------------------")
console.log("---------------CALCULAR IMPUESTO-----------------------")



function impuestoApagar (ingresoAnual)
{
    let impuesto
    if (ingresoAnual <= 10000)
    {
        impuesto = (ingresoAnual * 10) / 100
    }
    else if (ingresoAnual > 10000 && ingresoAnual <= 20000)
    {
        impuesto = (ingresoAnual * 15) / 100
    }
    else if (ingresoAnual > 20000)
    {
        impuesto = (ingresoAnual * 20) / 100
    }

    return impuesto
}

let ingresoAnualUsuario = Number(prompt("Indique su ingreso anual"))

alert(`De acuerdo a su ingreso de [${ingresoAnualUsuario}]. Debe pagar un impusto de: [${impuestoApagar(ingresoAnualUsuario)}]`)
console.log("El ingreso anual inmgresado es: " + ingresoAnualUsuario)