console.log("---------------NIVEL BAJO -------Ejercicio--------8 y 1 del NIVEL MEDIO-----------------------")
console.log("------------------VARIABLE QUE ACUMULA VALORES--------------------")

let numeroIngresado = Number(prompt("Ingrese un numero para almacenar. Si quiere dejar de almacenar precione el numero `0`"))
let variableAcumular = 0
while (numeroIngresado != 0)
    {
        variableAcumular = variableAcumular + numeroIngresado
        console.log("Valor ingresado: " + numeroIngresado)
        numeroIngresado = Number(prompt("Ingrese otro para almacenar. Si quiere dejar de almacenar precione el numero `0`"))
    }

     console.log("El valor de la suma de los numeros acumulados son: " + variableAcumular)

    let numeroSecreto = variableAcumular

    let respuestaUsuarioNumeroSecreto = Number(prompt("Adivine el numero secreto. Ingrese numero"))

    let auxNumerodeIntentos = 1
    let xUnidadesPorDebajoDelNumeroSecreto = 40
    let xUnidadesPorEncimaDelNumeroSecreto = 40

while (respuestaUsuarioNumeroSecreto != numeroSecreto)
    {
        
        if (auxNumerodeIntentos <= 2)
        {
            alert(`Numero incorrecto. Pista n°[${auxNumerodeIntentos}]: El numero secreto esta entre [${numeroSecreto - xUnidadesPorDebajoDelNumeroSecreto}] y [${numeroSecreto + xUnidadesPorEncimaDelNumeroSecreto}]`)
            xUnidadesPorDebajoDelNumeroSecreto = xUnidadesPorDebajoDelNumeroSecreto - 10
            xUnidadesPorEncimaDelNumeroSecreto = xUnidadesPorEncimaDelNumeroSecreto -10
        }
        else if (auxNumerodeIntentos == 3)
        {
            xUnidadesPorDebajoDelNumeroSecreto = xUnidadesPorDebajoDelNumeroSecreto - 10
            xUnidadesPorEncimaDelNumeroSecreto = xUnidadesPorEncimaDelNumeroSecreto -10
            alert(`Numero incorrecto. Ultima pista: El numero secreto esta entre [${numeroSecreto - xUnidadesPorDebajoDelNumeroSecreto}] y [${numeroSecreto + xUnidadesPorEncimaDelNumeroSecreto}]`)
        }
        if (respuestaUsuarioNumeroSecreto > numeroSecreto && auxNumerodeIntentos > 3)
        {
            alert("El numero ingresadp es mayor que el numero secreto")
        }
        else if (respuestaUsuarioNumeroSecreto < numeroSecreto && auxNumerodeIntentos > 3)
        {
            alert("El numero ingresado es menor que el numero secreto")
        }
        respuestaUsuarioNumeroSecreto = Number(prompt(`Intento n°[${auxNumerodeIntentos}] incorrecto. Intente de nuevo, ingrese otro numero`))
        auxNumerodeIntentos++
    }

    alert(`Adivino el numero secreto!!. Le tomó [${auxNumerodeIntentos}] intento/s`)
    console.log(auxNumerodeIntentos)
