console.log("---------------NIVEL BAJO -------Ejercicio--------99999999999-----------------------")
console.log("------------------DO WHILE--------------------")


let variableAcumular = 0
let numeroIngresado = 0
do {
    numeroIngresado = Number(prompt("Ingrese un numero para almacenar. Si quiere dejar de almacenar precione el numero `0`"))
    variableAcumular = variableAcumular + numeroIngresado
    console.log("Valor ingresado: " + numeroIngresado)
   // numeroIngresado = Number(prompt("Ingrese otro para almacenar. Si quiere dejar de almacenar precione el numero `0`"))
} while (numeroIngresado != 0);



    console.log("El valor de la suma de los numeros acumulados son: " + variableAcumular)