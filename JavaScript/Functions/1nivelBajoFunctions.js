console.log("---------------EJERCICIOS FUNCIONES NIVEL BAJO  PUNTOS 1,2,3,4,5,6-----------------------")


console.log("--------------------------------------FUNCIONES-Y--FUNCIONES ANONIMAS------------------------")


// DECLARACION DE UNA FUNCION

// LA SIGUIENTE FUNCION TIENE COMO PARAMETROS 2 VARIABLES "numero1" y "numero2"
function agregar (numero1, numero2) // LAS VARIABLES QUE RECIBE UNA FUNCION SE LLAMAN PARAMETROS
{
    let resultado = numero1 * numero2
    return resultado
}

let numero1 = Number(prompt("Ingrese numero 1"))
let numero2 = Number(prompt("Ingrese numero 2"))
console.log("El resultado de la multiplicacion es: " + agregar(numero1, numero2)) // LAS VARIABLES QUE RECIBE LA FUNCION A LA HORA DE LA LLAMADA SE LLAMAN
                        //ARGUMENTOS



// PARA DECLARAR UNA FUNCION ANONIMA DEBEMOS CREAR UNA FUNCION SIN NOMBRE Y ASIGNAR LA 
// FUNCION A UNA VARIABLE 

const resultadoDeDivision = function(numero1, numero2) 
 {
    let resultadoDeLaDivision = numero1 / numero2
    return resultadoDeLaDivision
 }

 let num1 = 6
 let num2 = 0

 // Como la variable "resultadoDeDivision" tiene asignado una funcion tenemos que llamar 
 // a la variable

 if(num2 == 0)
 {
    console.log("No se puede divir por 0")
 }
 else
 {
    console.log(`La division de ${num1} entre ${num2} es: ${resultadoDeDivision(num1, num2)}`)
 }


 