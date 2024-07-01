console.log("---------------NIVEL ALTO -------Ejercicio--------4444444444444444-----------------------")
console.log("------------------UNA FUNCION QUE LLAME A DOS FUNCIONES--------------------")

function saludar (nombre)
{
    let saludo = `Hola, mi nombre es [${nombre}]`
    return saludo
}

function calcularEdad (anioNacimiento, anioActual)
{
    let edad = anioActual - anioNacimiento
    return edad
}


function presentacion (funcioSaludar, funcionCalcularedad)
{
    return alert(`${funcioSaludar}. Mi edad es: [${funcionCalcularedad}]`)
}


// function presentacion (nombre, anioNacimiento, anioActual)
// {
//     return alert(`${saludar(nombre)}. Mi edad es: [${calcularEdad(anioNacimiento, anioActual)}]`)
// }

let nombreUsuario = prompt("Ingrese su nombre")
console.log(nombreUsuario)
let anioDeNacimietno = Number(prompt("Ingrese su anio de nacimiento"))
console.log(anioDeNacimietno)
let anioActual = Number(prompt("Ingrese el anio actual"))
console.log(anioActual)


presentacion(saludar(nombreUsuario), calcularEdad(anioDeNacimietno, anioActual))
