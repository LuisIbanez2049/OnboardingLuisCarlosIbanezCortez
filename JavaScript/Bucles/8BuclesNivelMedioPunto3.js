console.log("---------------NIVEL MEDIO -------Ejercicio--------3333333-----------------------")
console.log("--------------------------------------")

let numeroIngresado = Number(prompt('Ingrese numero'))

function ringBell (numeroIngresado)
{
  for (let i = 1; i < numeroIngresado; i++) {
  console.log("DingDong")
}
return "DingDong"
}

console.log(ringBell(numeroIngresado))