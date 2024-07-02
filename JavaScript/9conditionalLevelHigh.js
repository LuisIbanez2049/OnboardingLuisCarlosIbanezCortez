console.log("---------------EJERCICIOS BASICOS NIVEL ALTO  PUNTO 1-----------------------")




let nombreCliente = prompt("Ingrese su nombre").toLowerCase()
let pase = prompt("Ingrese su tipo de pase `vip` o `normal`").toLowerCase()

if (nombreCliente == "luis" || pase == "vip") {
    alert("Eres bienvenido")
}

else if (pase == "normal") {
    let respuestaClienteComprarVip = confirm("Quiere comprar Pase Vip?")
    if (respuestaClienteComprarVip) {
        let respuestaClientePoseeMasDe1000 = confirm("Posees mas de 1000 pesos para realizar la compra?'")
        if (respuestaClientePoseeMasDe1000) {
            alert("Transaccion exitosa. Eres Bienvenido!")
        }
        else if (respuestaClientePoseeMasDe1000 != true) {
            alert("BYE BYE")
        }
    }
    else if (respuestaClienteComprarVip != true) {
        let respuestaClienteUsarPaseNormal = confirm("Quieres usar tu pase normal?")
        if (respuestaClienteUsarPaseNormal) {
            alert("Eres Binvenido!")
        }
        else if (respuestaClienteUsarPaseNormal != true) {
            let entrada = confirm("Posee entrada?")
            if (entrada) {
                alert("Eres Bienvenido")
            }
            else if (entrada != true) {
                let respuestaClienteComprarEntrada = confirm("Quieres comprar entrada?")
                if (respuestaClienteComprarEntrada) {
                    let respuestaClientePoseeMasDe1000 = confirm("Posees mas de 1000 pesos para realizar la compra?'")
                    if (respuestaClientePoseeMasDe1000) {
                        alert("Transaccion exitosa. Eres Bienvenido!")
                    }
                    else if (respuestaClientePoseeMasDe1000 != true) {
                        alert("BYE BYE")
                    }
                }
                else if (respuestaClienteComprarEntrada != true) {
                    alert("BYE BYE")
                }
            }
        }
    }
}

