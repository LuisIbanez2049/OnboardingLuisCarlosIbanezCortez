console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO  PUNTO 9-----------------------")


console.log("--------------------EL DOBLE Y TRIPLE DE UN NUMERO-------------------------")


let numero = Number(prompt("Ingrese un numero mayor o igual a 1 y menor o iual a 3"))

while(numero <= 1 || numero >= 3)
    {
        numero = Number(prompt("El numero ingresado esta fuera del parametro >= 1 y <= 3. Reingrese numero"))
    }

    alert(`El numero ingresado es [${numero}]`)
    let elDobleDelNumero = numero * 2
    let elTripleDelNumero = numero * 3
    alert(`El doble ddel numero ingresado es [${elDobleDelNumero}]`)
    alert(`El triple del numero ingresado es [${elTripleDelNumero}]`)