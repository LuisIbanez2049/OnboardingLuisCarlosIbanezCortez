console.log("---------------NIVEL ALTO -------Ejercicio--------11111111-----------------------")
console.log("--------------------------------------")
let numeroIngresado = 0
let acumulaSumaNumerosPares = 0
let acumulaSumaNumerosImpares = 0
let numerosAlmacenados = []
let auxPosicionNumerosAlmacenados = 0
function cargarNumeros() {
    console.log("NUMEROS INGRESADOS")
    do {
        numeroIngresado = Number(prompt("Ingrese numero. Para dejar de ingresar precione 0"))
        console.log(numeroIngresado)
        numerosAlmacenados[auxPosicionNumerosAlmacenados] = numeroIngresado
        auxPosicionNumerosAlmacenados++
    } while (numeroIngresado != 0);
    return numerosAlmacenados
}

function sumarNumerosPares(arreglo) {
    console.log("NUMEROS PARES")
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            console.log(arreglo[i])
            acumulaSumaNumerosPares = acumulaSumaNumerosPares + arreglo[i]
        }
    }

    return acumulaSumaNumerosPares
}

function sumarNumerosImpares(arreglo) {
    console.log("NUMEROS IMPARES")
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 != 0) {
            console.log(arreglo[i])
            acumulaSumaNumerosImpares = acumulaSumaNumerosImpares + arreglo[i]
        }
    }

    return acumulaSumaNumerosImpares
}

cargarNumeros()
console.log(`La suma de los numeros pares son: [${sumarNumerosPares(numerosAlmacenados)}]`)
console.log(`La suma de los numeros impares son: [${sumarNumerosImpares(numerosAlmacenados)}]`)
