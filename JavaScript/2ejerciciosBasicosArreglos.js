console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO PUNTO 4444444444444-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

let frutas = ["manzana", "pera", "naranja", "banana", "frutilla"]

for (const fruta of frutas)
    {
        console.log(fruta)
    }



console.log("---------------EJERCICIOS BASICOS NIVEL ALTO PUNTO 1111111111-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

//alert("EJERCICIO BASICOS NIVEL ALTO PUNTO 1111111111")
let edad = Number(prompt("Ingrese edad"))
console.log("Edad ingresada: -->> " + edad)
let soyUnAdulto = []
if (edad >= 18)
{
    soyUnAdulto.push(edad)
    console.log(`Soy un adulto. Mi edad es [${soyUnAdulto[0]}]`)
}
else
{
    console.log("Eres menor de edad")
}

console.log("---------------EJERCICIOS BASICOS NIVEL ALTO PUNTO 2222222222-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

//alert("EJERCICIO BASICOS NIVEL ALTO PUNTO 2222222222")

let matrizDeNumeros = 
[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
    [13,14,15]
]

let numeroDeFila = 1
let numeroDeColumna = 1
for (let i = 0; i < matrizDeNumeros.length; i++) // matrizDeNumeros.length = numero de elementos que tenga la matris. En este caso 5
{
    for (let j = 0; j < matrizDeNumeros[i].length; j++) // matrizDeNumeros[i].length = numero de elementos que tenga el elemento "i" de la matriz
                                                        // En este caso i=0. Entonces matrizDeNumeros[i].length = 3 porque el elemto 0 tiene 3 numeros
    {
        console.log(`La fila [${numeroDeFila}] y columna [${numeroDeColumna}] tiene el valor de: [${matrizDeNumeros[i][j]}]`)
        numeroDeColumna++
    }
    numeroDeColumna = 1
    numeroDeFila++
    
}


console.log("---------------EJERCICIOS BASICOS NIVEL ALTO PUNTO 3333333333-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

//alert("EJERCICIO BASICOS NIVEL ALTO PUNTO 3333333333")

let familia = 
[
    {nombre: "Ana", apellido: "Smith", edad: 30, relacion: "madre"},
    {nombre: "Jon", apellido: "Smith", edad: 32, relacion: "padre"},
    {nombre: "Anabel", apellido: "Smith", edad: 5, relacion: "hija"},
    {nombre: "Jorge", apellido: "Smith", edad: 65, relacion: "abuelo"},
    {nombre: "Maria", apellido: "Smith", edad: 63, relacion: "abuela"}
]

for (let persona of familia) 
    {
        console.log
        (   `
            Nombre: [${persona.nombre}]
            Apellido: [${persona.apellido}]
            Edad: [${persona.edad}]
            Relacion: [${persona.relacion}]
            `
        )
    }

console.log("---------------EJERCICIOS BASICOS NIVEL ALTO PUNTO 4444444444444-----------------------")
console.log("---------------DECLARACION, ASIGNACION DE VARIABLES Y CONCATENACION DE VARIABLES-----------------------")

// Palabras: pera, 10, maria

let randomText = `[${familia[4].nombre}] se dio cuenta que ya no tenia [${frutas[1]}], asi que fue por sus llaves para salir y comprar [${matrizDeNumeros[3][0]}] unidades. Pero al salir se resbalo con una cascara de [${frutas[3]}]`

alert(randomText)
console.log(randomText)
