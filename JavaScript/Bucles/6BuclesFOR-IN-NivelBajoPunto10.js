console.log("---------------NIVEL BAJO -------Ejercicio--------10 y 11-----------------------")
console.log("------------------FOR IN PARA UN OBJETO--------------------")

let persona = 
{
    nombre: "Antonio",
    apellido: "Lopez",
    edad: 58,
    hobby: "leer",
    musica: "rock"
}
console.log("Mostrar solo propiedades del objeto")
for (const key in persona) {
   console.log(key)  // "key" solo me muestra los nombres de los atributos que tiene el objeto
}
console.log("Mostrar solo valores de las propiedades del objeto")
for (const key in persona) {
    console.log(persona[key])  // "persona[key]" me muestra solo el valor del atributo que tiene el objeto          
 }

 console.log("Mostrar nombre de las propiedades con sus valores")
 for (const key in persona) {
    console.log(key + ": " + persona[key])  
 }
