console.log("---------------EJERCICIOS BASICOS NIVEL BAJO  PUNTO 8-----------------------")


console.log("-------------------------------------------------------NUMERO MAS GRANDE--------------------------------------")

let number1 = prompt("Ingrese un numero")
let number2 = prompt("Ingrese otro numero")
let number3 = prompt("Ingrese un numero mas")
let aux = 0
552
if (number1 > number2) {
    aux = number1
}
else
{
    aux = number2
}

if (aux > number3) {
    
    console.log(`El numero mas grande es ${aux}`)
}
else {
    console.log(`El numero mas grande es ${number3}`)
    aux = number3
}

let tresNumeros = [number1, number2, number3]
let numerosIguales = []
for (let i = 0; i < 3; i++) {
    if (tresNumeros[i] == aux) {
        numerosIguales[i] = tresNumeros[i]
        console.log(tresNumeros[i])
    }
}
if(numerosIguales.length == 1 )
{
    console.log(`El numero mas grnade es: [${numerosIguales}]`)
}
else
{
    console.log(`Los numeros mas grandes son: [${numerosIguales}]`)
}