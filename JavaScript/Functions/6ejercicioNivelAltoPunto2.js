console.log("---------------NIVEL ALTO --------Ejercicio---------22222222222-----------------------")
console.log("---------------DECIR SI EL DIA ES FERIADO O NO CON  SWITCH-----------------------")

function esDiaFeriadoOno (dia)
{
    let diaHabilOno
    if (dia == 1 || dia == 2 || dia == 3 || dia == 4 || dia == 5)
    {
        diaHabilOno = "Es un dia habil"
    }
    else if (dia == 6 || dia ==7)
    {
        diaHabilOno = "Es fin de semana"
    }

    return diaHabilOno
}

let respuestaUsuario = Number(prompt("Ingrese el dia de hoy en numero"))

switch (respuestaUsuario) {
    case  1:
        console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  2:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  3:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  4:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  5:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  6:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;
        case  7:
            console.log(esDiaFeriadoOno(respuestaUsuario))
        break;

    default:
        break;
}

console.log("Dia ingresado por el usuario: " + respuestaUsuario)