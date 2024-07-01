console.log("---------Ejercicio------66666666666-----------------------")


console.log("---------------ES ADULTO O NO?-----------------------")
 function esUnAdulto (edad)
 {
    let esMayorOno
    if (edad >= 18)
    {
        esMayorOno = true
    }
    else if (edad <= 18)
    {
        esMayorOno = false
    }
    return esMayorOno
 }

 let edadUsuario = Number(prompt("Ingrese su edad")) 

    if (esUnAdulto(edadUsuario))
    {
        alert("Eres mayor de edad")
    }
    else if (esUnAdulto(edadUsuario) != true)
    {
        alert("No eres un adulto")
    }

    console.log("Edad ingresadaa: " + edadUsuario)