console.log("---------------NIVEL ALTO -------Ejercicio--------22222222-----------------------")
console.log("--------------------------------------")

let matrizDeNumeros = 
[
    [7,8,4],
    [3,5,2]
]

auxNumeroMasGrande = 0
for (let i = 0; i < matrizDeNumeros.length; i++) {
    for (let j = 0; j < matrizDeNumeros[i].length; j++) {
        if (matrizDeNumeros[i][j] > auxNumeroMasGrande)
        {
            auxNumeroMasGrande = matrizDeNumeros[i][j]
        }
        
    }
    
}
console.log("El numero mas grande que hay dentro de la matriz es: " + auxNumeroMasGrande)