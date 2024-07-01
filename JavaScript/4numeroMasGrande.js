console.log("---------------EJERCICIOS BASICOS NIVEL BAJO  PUNTO 8-----------------------")


console.log("-------------------------------------------------------NUMERO MAS GRANDE--------------------------------------")

let number1 = prompt("Ingrese un numero")
let number2 = prompt("Ingrese otro numero")
let number3 = prompt("Ingrese un numero mas")
let aux = 0
    if (number1 > number2 || number1 == number2) 
    {
        aux = number1
    }
    else if (number1 < number2)
    {
        aux = number2
    }

    if (aux > number3 || aux == number3)
    {
         console.log(`El numero mas grande es ${aux}`)
    }
    else if (aux < number3)
        {
            console.log(`El numero mas grande es ${number3}`)
        }