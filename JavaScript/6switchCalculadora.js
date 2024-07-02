console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO  PUNTO 5-----------------------")


console.log("-------------------------------------------------------SWITCH-CALCULADORA---TRANSFORMAR STRING A INT----------------------------------")



let numero1 = prompt("Ingrese el numero 1 que sea mayor a 0 y menor o igual a 100")
let numeroEntero1 = Number(numero1)
console.log(numeroEntero1)
while (numeroEntero1 < 0 || numeroEntero1 > 100) {
    console.log("")
    numero1 = prompt("El numero no esta dentro del rango de 1 a 100. Reingrese numero 1 que sea mayor a 0 y menor o igual a 100")
    numeroEntero1 = Number(numero1)
}

console.log(`Numero 1: ${numeroEntero1}`)


let numero2 = prompt("Ingrese el numero 2 que sea mayor a 0 y menor o igual a 100")
let numeroEntero2 = Number(numero2)
while (numeroEntero2 < 0 || numeroEntero2 > 100) {
    numero2 = prompt("El numero no esta dentro del rango de 1 a 100. Reingrese el numero 2 que sea mayor a 0 y menor o igual a 100")
    numeroEntero2 = Number(numero2)
}

console.log(`Numero 2: ${numeroEntero2}`)

let respuestaRealizarOtraOperacion = confirm("Quiere realizar una operacion?")
console.log(respuestaRealizarOtraOperacion)
while (respuestaRealizarOtraOperacion == true) {
    let respuestUsuario = prompt("Ingrese operaciona a realizar: `suma`, `resta`, `multiplicacion` o `division`").toLowerCase()

    while (respuestUsuario == false || (respuestUsuario != "suma" && respuestUsuario != "resta" && respuestUsuario != "multiplicacion" && respuestUsuario != "division")) {
        respuestUsuario = prompt("No ha ingresado ninguna operacion o la ha escrito mal. Ingrese operacion a realizar: `suma`, `resta`, `multiplicacion` o `division`").toLowerCase()
    }
    if (respuestUsuario) {
        switch (respuestUsuario) {
            case "suma":
                let resultadoSuma = numeroEntero1 + numeroEntero2
                alert(`La suma de numero: ${numeroEntero1} mas el numero: ${numeroEntero2} es: ${resultadoSuma}`)
                break;

            case "resta":
                let resultadoResta = numeroEntero1 - numeroEntero2
                alert(`La resta de numero: ${numeroEntero1} menos el numero: ${numeroEntero2} es: ${resultadoResta}`)
                break;
            case "multiplicacion":
                let resultadoMultiplicacion = numeroEntero1 * numeroEntero2
                alert(`La multiplicacion de numero: ${numeroEntero1} por el numero: ${numeroEntero2} es: ${resultadoMultiplicacion}`)
                break;

            case "division":
                let resultadoDivision = numeroEntero1 / numeroEntero2
                alert(`La division de numero: ${numeroEntero1} entre el numero: ${numeroEntero2} es: ${resultadoDivision}`)
                break;

            default:
                break;
        }
    }
    respuestaRealizarOtraOperacion = confirm("Desea realizar otra operacion?")
    if (respuestaRealizarOtraOperacion == true) {
        console.log(respuestaRealizarOtraOperacion)
        respuestaRealizarOtraOperacion = true
    }
    else {
        console.log(respuestaRealizarOtraOperacion)
        respuestaRealizarOtraOperacion = false
    }
}
alert("BYE BYE")
console.log("BYE BYE")

