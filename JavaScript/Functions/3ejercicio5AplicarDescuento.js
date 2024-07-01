console.log("-------Ejercicio--------555555555555555555-----------------------")


console.log("---------------APLICAR DESCUENTO A PRODUCTOS-----------------------")

let precioProducto = Number(prompt("Cual es el precio del producto?"))

let cantidadDeProducto = Number(prompt("Cuantas unidades lleva?"))

function totalPrecioProductos (precioProducto, cantidadDeProducto)
{
    return precioProducto * cantidadDeProducto
}

if (cantidadDeProducto >= 10 && cantidadDeProducto < 20)
    {
        let descueto10porciento = (totalPrecioProductos(precioProducto, cantidadDeProducto) * 10) / 100
        let precioConDescuento10 = totalPrecioProductos(precioProducto, cantidadDeProducto) - descueto10porciento 

        alert(`Ha comprado mas de 10 productos con un valor de [${totalPrecioProductos(precioProducto, cantidadDeProducto)}]. 
        Le aplicamos un descuento de 10% el cual es de: [${descueto10porciento}]. Precio final con descuento: [${precioConDescuento10}]`)
    }
    else if (cantidadDeProducto >= 20)
        {
            let descueto20porciento = (totalPrecioProductos(precioProducto, cantidadDeProducto) * 20) / 100
            let precioConDescuento20 = totalPrecioProductos(precioProducto, cantidadDeProducto) - descueto20porciento 
            alert(`Ha comprado mas de 20 productos con un valor de [${totalPrecioProductos(precioProducto, cantidadDeProducto)}].
             Le aplicamos un descuento de 20% el cual es de: [${descueto20porciento}]. Precio final con descuento: [${precioConDescuento20}]`)
        }
        else if (cantidadDeProducto < 10)
        {
            alert("No se le aplica ningun descuento. Precio final es: [" + totalPrecioProductos(precioProducto, cantidadDeProducto) + "]")
        }