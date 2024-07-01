console.log("---------------NIVEL MEDIO -------Ejercicio--------888888-----------------------")
console.log("--------------------FOR IN PARA UN ARREGLO DE 4 OBJETOS CON 4 PROPIEDADES------------------")

let familia = 
[
    {nombre: "Maria", apellido: "Lopez", miembro: "madre", edad: 40},
    {nombre: "Juan", apellido: "Perez", miembro: "padre", edad: 38},
    {nombre: "Romina", apellido: "Perez", miembro: "hija", edad: 13},
    {nombre: "Tomas", apellido: "Perez", miembro: "hijo", edad: 10}
]

// console.log(familia[0].nombre)

function presentacion (arreglo)
{
    for (const miembro in familia) 
    {
        console.log(`Hola soy [${familia[miembro].nombre}][${familia[miembro].apellido}] ([${familia[miembro].miembro}]) y tengo [${familia[miembro].edad}] años`)
    }
}

presentacion(familia)