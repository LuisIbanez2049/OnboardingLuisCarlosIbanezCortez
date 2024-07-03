console.log("---------------EJERCICIOS BASICOS NIVEL BAJO  PUNTOS 4,5,6-----------------------")
console.log("--------------------------------------")

let num1 = 4
let num2 = 5


if (num1 != num2) {
    console.log("Los numeros son diferentes")
}
if (num1 > num2) {
    // alert(`${num1} Is the greater`)
    console.log(num1 + " " + "Is the greater")
}
else {
    if (num1 < num2) {
        // alert(`${num2} Is the grater`)
        console.log(num2 + " " + "Is the greater")
    }
}
if (num1 == num2) {
    // alert("Los numero son iguales")
    console.log("Los numeros son iguales")
}


// ---------------------------------------------COMPARAR FECHAS---------------------------------

console.log("---------------EJERCICIOS BASICOS NIVEL BAJO  PUNTO 7--------------------------------------------------------")

console.log("-------------------------------------------------------COMPARAR FECHAS--------------------------------------")
let year1 = 2023
let month1 = 9
let day1 = 2

let year2 = 2023
let month2 = 9
let day2 = 2

if (year1 > year2) {
    console.log(`${year1}-${month1}-${day1} es el mayor anio`)
}
else if (year1 < year2) {
    console.log(`${year2}-${month2}-${day2} es el mayor anio`)
}

if (year1 == year2 && month1 > month2) {
    console.log(`${year1}-${month1}-${day1} es el mayor anio`)
}
else if (year1 == year2 && month1 < month2) {
    console.log(`${year2}-${month2}-${day2} es el mayor anio`)
}

if (year1 == year2 && month1 == month2) {
    if (day1 > day2) {
        console.log(`${year1}-${month1}-${day1} es el mayor anio`)
    }
    else if (day1 < day2) {
        console.log(`${year2}-${month2}-${day2} es el mayor anio`)
    }
}

if (year1 == year2 && month1 == month2 && day1 == day2) {
    console.log("Las fechas son iguales")
}

