console.log("---------------NIVEL BAJO -------Ejercicio--------666666666666666-----------------------")
console.log("------------------ORDENAR NUMEROS Y MOSTRARLOS EN ORDEN DESCENDENTE--------------------")

let numeros= []

let cantidadDeNumerosAingresar = Number(prompt("Cuantos numeros quiere ingresar?"))


let auxIndiseDeNumero = 0
for (let i = 0; i < cantidadDeNumerosAingresar; i++) 
{
    auxIndiseDeNumero++
    let numerosIngresadosPorUsuario = Number(prompt(`Quiere ingresar [${cantidadDeNumerosAingresar}] numero/s. Ingrese numero [${auxIndiseDeNumero}] en el rango de 1 a 100`))
    while (numerosIngresadosPorUsuario < 1 || numerosIngresadosPorUsuario > 100)
    {
        numerosIngresadosPorUsuario = Number(prompt(`Numero fuera de rango. Reingrese numer [${auxIndiseDeNumero}] en el rango de 1 a 100`))
    }

    numeros[i] = numerosIngresadosPorUsuario
}


console.log("Numeros Ingresados: " + numeros)
let numerosOredenaods = numeros.sort((a, b) => a - b) // Importante poner los argumentos en .sort

console.log("Numeros ordenados: " + numerosOredenaods)

let numerosOrdenDescendente = numerosOredenaods.reverse()

console.log("Numeros ordenados de mayor a menor: " + numerosOrdenDescendente)

