console.log("---------------NIVEL MEDIO -------Ejercicio--------4444444-----------------------")
console.log("----------------COMPARANDO FECHAS----------------------")

// IMPORTANTE LAS FECHAS DEBEN ESTAR EN EL FORMATO YYYY-MM-DD (4 NUMEROS -2NUMERO -2NUMEROS)

const dateLimit = new Date("1997-08-03") // Date("1997-08-03"): Este constructor crea un nuevo objeto Date basado en la cadena de texto "1997-08-03"
let dateLimitTime = dateLimit.getTime() // dateLimit.getTime(): El método getTime() devuelve el número de milisegundos transcurridos desde el 1 de enero 
//                                         de 1970 00:00:00 UTC (la época Unix) hasta la fecha representada por dateLimit. Este valor es un número 
//                                         entero y se utiliza para facilitar la comparación de fechas.
const dates = ["1984-02-18", "1998-02-03", "1973-07-15", "2024-10-31", "2081-09-01","1997-08-03"]


let fechasMayoresOiguales = []
let auxPosicion = 0
for (let i = 0; i < dates.length; i++)
    {
        let formatoDate = new Date(dates[i]) // new Date(dates[i]): Convierte la cadena de texto dates[i] a un objeto Date.
        let formatoDateTime = formatoDate.getTime() // formatoDate.getTime(): Obtiene el timestamp (número de milisegundos desde la época Unix) 
                                                    // de la fecha actual representada por formatoDate.
        if(dateLimitTime < formatoDateTime || dateLimitTime == formatoDateTime)
        {
            fechasMayoresOiguales[auxPosicion] = dates[i]
            auxPosicion++ 
        }
    }

    console.log(fechasMayoresOiguales)
