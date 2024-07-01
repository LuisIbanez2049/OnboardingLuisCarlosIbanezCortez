console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO  PUNTO 6-----------------------")


console.log("-------------------------------------------------------CONDICIONALES CON OBJETOS---------------------------------")
console.log("-----------------------------------------------------QUIEN ES MAS ALTO Y QUIEN ES MAYOR ENTRE DOS PERSONAS---------------------------------")

// let prueba = Number(prompt("Ingrese numero"))

// let suma = prueba + 2
//alert("Ls uma es: " + suma )


let pepe =
{
    nombre: "Pepe",
    edad: 20,
    altura: 1.80
}

let pepa =
{
    nombre: "Pepa",
    edad: 21,
    altura: 1.90
}

if (pepe.edad > pepa.edad && pepe.altura > pepa.altura) {
    console.log(`${pepe.nombre} es mas alto y mayor que ${pepa.nombre}`)
}
else {
    console.log(`${pepa.nombre} es mas alta y mayor que ${pepe.nombre}`)
}

console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO  PUNTO 7,8-----------------------")


console.log("-----------------------------------------------------ESTOY APTO PARA CONDUCIR?---------------------------------")


let nombre = prompt("Ingrese su nombre")
console.log(nombre)
let edad = Number(prompt("Ingrese su edad"))
console.log(edad)
let altura = Number(prompt("Ingrese su altura en centimetros"))
console.log(altura)
let vision = Number(prompt("Ingrese su nivel de vision"))
console.log(vision)

let persona =
{
    nombre: nombre,
    edad: edad,
    altura: altura,
    vision: vision
}

console.table(persona)

if (persona.edad > 18 && persona.altura > 110 && persona.vision >= 8) {
    alert(`${persona.nombre} Esta calificado para conducir`)
}
else {
    alert(`${persona.nombre} No estas calificado para conducir :(`)
}

if (persona.edad <= 12) {
    alert("Eres un infante")
}
else if (persona.edad >= 13 && persona.edad <= 18) {
    alert("Eres un adelescente")
}
else if (persona.edad >= 19 && persona.edad <= 45) {
    alert("Eres un joven mayor")
}
else if (persona.edad > 45 && persona.edad <= 100) {
    alert("Eres una persona mayor")
}
else if (persona.edad > 100) {
    alert("Eres de otro planeta")
}

