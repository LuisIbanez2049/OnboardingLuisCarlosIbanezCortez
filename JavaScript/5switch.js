console.log("---------------EJERCICIOS BASICOS NIVEL MEDIO  PUNTO 4-----------------------")


console.log("-------------------------------------------------------SWITCH--------------------------------------")

let respuestaUsuario = prompt("Ingrese el color `rojo`, `azul` o `verde`")
while (respuestaUsuario == false) 
{
    respuestaUsuario = prompt("Ingrese el color `rojo`, `azul` o `verde`")
}

if (respuestaUsuario)
    {
        switch (respuestaUsuario) {
            case "rojo":
                console.log("El color de la pasion")
                break;

                case "azul":
                console.log("El color del mar")
                break;

                case "verde":
                console.log("El color de la naturaleza")
                break;
        
            default:
                break;
        }
    }

    