console.log("---------------NIVEL ALTO -------Ejercicio-------333333333333-----------------------")
console.log("---------------DECIR SI EL DIA ES FERIADO O NO CON  SWITCH-----------------------")

let obejetoVacio = {}

function datosPersonales (objeto)
{
    let nombre = prompt("Ingrese nombre")
    if (nombre != "")
    {
        let apellido = prompt("Ingrese apellido")
        if (apellido != "")
        {
            let edad = Number(prompt("Ingrese edad"))
            if (edad != "")
            {
                objeto.nombre =  nombre
                objeto.apellido = apellido
                objeto.edad = edad 
            }
            else if (edad == "")
            {
                alert("El campo edad esta vacio")
            }
        }
        else if (apellido == "")
        {
            alert("El campo apellido esta vacio")
        }
    }
    else if (nombre == "")
    {
        alert("El campo nombre esta vacio")
    }

    return objeto
}


console.log(datosPersonales(obejetoVacio))

//----------------------------------------------------------------------------------------------

// function cargarDatosPersonales (nombre, apellido, edad)
// {
//     let persona = {}
//     if (nombre != "" && apellido != "" && edad != "")
//     {
//         persona =
//         {
//             nombre: nombre,
//             apellido: apellido,
//             edad: edad
//         }

//     }
//     else if (nombre == "" || apellido == "" || edad == "")
//     {
//         alert("Uno de los campos esta incompleto. Intente de nuevo")
//     }

//     return console.table(persona)
// }

// let nombrePersona = prompt("Ingrese su nombre")
// let apellidoPersona = prompt("Ingrese su apellido")
// let edadPersona = Number(prompt("Ingrese su edad"))

// cargarDatosPersonales(nombrePersona, apellidoPersona, edadPersona)
