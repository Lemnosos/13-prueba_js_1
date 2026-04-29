/*
Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios.
Ejemplo: Para "Ana" devolverá "A N A".
*/

let nombre1 = "antoñito"
let nombre_solucion = ""
let nombre1_mayus = nombre1.toUpperCase();
let solucion = []
solucion = nombre1_mayus.split("")
solucion.forEach((letra) => { nombre_solucion += (letra + " ") })
console.log(`${nombre1} se convierte en ${nombre_solucion}`)


/*
Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre.
Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.
*/
let nombre2 = "antoñito currupipi fernando de la santisima trinidad"
let array_nombres = nombre2.split(" ")
let palabras = array_nombres.length
console.log(`"${nombre2}" está formado por ${palabras} palabras`)



/*
Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

var1 = frase
var2 = letra_buscada
contador = 0
para cada letra de la frase{
    if(letra == letra_buscada)
        contador++
}
mostrar contador
*/

let var1 = "Frase de prueba para buscar una letra"
let var2 = "a"
let contador = 0
for (let i = 0; i < var1.length; i++) {
    if (var2 == var1.charAt(i))
        contador++
}
console.log(`La frase "${var1}" tiene ${contador} veces la letra ${var2}`)
