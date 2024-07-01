console.log("--------Ejercicio-------111111111111111111111111-----------------------")

console.log("--------------------------------------FUNCIONES-Y--FUNCIONES ANONIMAS------------------------")


function saludar(nombre)
{
    return console.log(`Hola ${nombre}. Eres bienvenido!`)
}

let nombre = "Luis"

console.log(saludar(nombre))

console.log("-------Ejercicio--------22222222222222222222-----------------------")


console.log("------------FUNCION ANONIMA- QUE RESIVE DOS NUMERO Y DEVUELVE- LA MULTIPLICACION DE AMBOS-")

let num1 = 4
let num2 = 7

let resultadoDeMultiplicacion = function(num1, num2)
{
    return num1 * num2
}

console.log(`La multiplicacion de ${num1} por ${num2} es: ${resultadoDeMultiplicacion(num1, num2)}`)

console.log("---------Ejercicio------333333333333333333-----------------------")
//Cree una función con nombre llamada "área" que recibe dos parámetros numéricos, uno que 
//representa la base y el otro la altura de un triángulo. Devolver su área


let baseTriangulo = 6
let alturaTriangulo = 8

function area (base, altura)
{
    let areaTriangulo = (base * altura) / 2
    return areaTriangulo
}

console.log
(
    `El area del triangulo 
    con base [${baseTriangulo}] y altura [${alturaTriangulo}] 
    es: [${area(baseTriangulo, alturaTriangulo)}]`
)

console.log("--------Ejercicio-------44444444444444-----------------------")
// PERIMETRO DE UN TRIANGULO 

let ladoA = 4
let ladoB = 7
let ladoC = 10

function perimetro (ladoA, ladoB, ladoC)
{
    return ladoA + ladoB +ladoC
}

console.log
(
    `El perimetro del triangulo con lados [${ladoA}], [${ladoB}] y lado [${ladoC}]
    es: [${perimetro(ladoA, ladoB, ladoC)}]`

)

