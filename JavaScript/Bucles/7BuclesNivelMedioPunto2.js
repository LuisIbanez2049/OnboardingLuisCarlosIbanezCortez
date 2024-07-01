console.log("---------------NIVEL MEDIO -------Ejercicio--------222222-----------------------")
console.log("------------------DIVISORES DE UN NUMERO--------------------")

let numeroIngresado = Number(prompt("Ingrese numero"))
let numerosDivisores = []
let auxIndiceNumerosDivisores = 0
for (let i = 1; i <= numeroIngresado; i++) 
    {
        if (numeroIngresado % i == 0)
        {
            numerosDivisores[auxIndiceNumerosDivisores] = i
            auxIndiceNumerosDivisores++
        }
    }

    console.log(`Los numeros divisores de [${numeroIngresado}] son: [${numerosDivisores}]`)