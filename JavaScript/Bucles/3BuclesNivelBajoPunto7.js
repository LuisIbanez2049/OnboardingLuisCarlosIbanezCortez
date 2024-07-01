console.log("---------------NIVEL BAJO -------Ejercicio--------7777777777777-----------------------")
console.log("------------------TABLA DE MULTIPLICAR--------------------")

let numeroIngresadoPorUsuario = Number(prompt(`Ingrese numero en el rango de 1 a 10`))
    while (numeroIngresadoPorUsuario < 1 || numeroIngresadoPorUsuario > 10)
    {
        numeroIngresadoPorUsuario = Number(prompt(`Numero fuera de rango. Reingrese numero en el rango de 1 a 10`))
    }

for (let i = 1; i <= 10; i++) 
{
    let resultadoDeMultiplicacion = numeroIngresadoPorUsuario * i
    console.log(`[${i}] * [${numeroIngresadoPorUsuario}] = [${resultadoDeMultiplicacion}]`)
}


