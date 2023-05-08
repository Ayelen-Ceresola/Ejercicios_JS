/* // ejercicio 1

let numeroIngresado = Number ( prompt ( `ingrese un numero`))

for ( let i = 1; i <= 10; i++ ){  
    console.log (`${i} x ${numeroIngresado} = ${i * numeroIngresado}`) 
  
}
 */
//Ejercicio 2
/* 
let numerosingresados = Number ( prompt (`Ingrese un numero `))
const numero = []


while (numerosingresados != 0) {
    numero.push (numerosingresados)
    numerosingresados = Number ( prompt (`Ingrese un numero `))

}
console.log (numero) */

/* //Ejercicio 3
let numerosIngresados = Number ( prompt (`Ingrese un numero `))
const numero = []


while (numerosIngresados != 0) {
    numero.push (numerosIngresados)
    numerosIngresados = Number ( prompt (`Ingrese un numero `))
    

}
console.log (numero)

let ultimoNumero = numero [numero.length -1 ]
console.log (ultimoNumero)
let numeroIngresado;
let i = 0
do {
    numeroIngresado = Number ( prompt(`adivina el numero del 1 al 100`))
    i ++
    if (numeroIngresado == ultimoNumero) {
        alert (`Felicitaciones, lo lograste en ${i} veces`) 
        } else if (numeroIngresado > ultimoNumero){
        alert (`El numero es menor`)
            }else alert (`El numero ingresado es mayor`)
           
    
} while (numeroIngresado != ultimoNumero);  */
/* 
//Ejercio 4

let numIngresado = Number ( prompt(`Ingrese un numero`))
const numDivisor = []

for (let i = 1; i <= numIngresado; i++) {
    let datos = numIngresado % i
    if (datos == 0){
        numDivisor.push (i) 
    }
    
}

if (numDivisor.length == 2){
    alert (`primo`)
}else {alert (`no primos`)}
 */

 

/* //Ejercio 5

let numIngresado = Number ( prompt(`Ingrese un numero`))
const numDivisor = []

for (let i = 1; i <= numIngresado; i++) {
    let datos = numIngresado % i
    if (datos == 0){
        numDivisor.push (i) 
    }
    
}
alert (`Los numeros divisores del ${numIngresado} son ${numDivisor}`) */

//Ejercicio 6

/* let tabla = [ 1, 2, 3, 4, 5, 15, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
    console.log (tabla [i])
    } */

//Ejercicio 7
/* 
let tabla = [ 1, 2, 3, 4, 5, 15, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
    console.log (tabla [i]*2)
    }
 */
/* //Ejercico 8

let familia = [
    { nombre: "Ana", edad: 72, altura: 160, peso: 72},
    { nombre: "Luis", edad: 82, altura: 180, peso: 85},
    { nombre: "Amancay", edad: 35, altura: 170, peso: 60},
    { nombre: "Pablo", edad: 38, altura: 170, peso: 58},
    { nombre: "Ayelen", edad: 37, altura: 165, peso: 61},
]

for (let i = 0; i < familia.length; i++) {
    alert (`${familia[i].nombre} tiene ${familia[i].edad} años, mide ${familia[i].altura} y pesa ${familia[i].peso}`)
} */

/* //Ejercio 9

let tabla = [ 1, 2, 3, 4, 5, 15, 7, 8, 9, 10]

for (let i = 0; i < 10; i++) {
    if (tabla[i] % 2 != 0)
    console.log (tabla [i])
    } */
//Ejercico 10

/* let numerosIngresados = Number ( prompt (`Ingrese un numero `))
const numeroPar = []
const numeroImpar = []



while (numerosIngresados != 0) {
    if (numerosIngresados % 2 != 0)
        numeroImpar.push (numerosIngresados)
        else { numeroPar.push (numerosIngresados)}


    numerosIngresados = Number ( prompt (`Ingrese un numero `))

}
let sumaImpar = numeroImpar.reduce ((total,number) => total + number)
console.log (sumaImpar)

let sumaPar = numeroPar.reduce ((total,number) => total + number)
console.log (sumaPar)
 */



 /* //Ejercico 11

 let tabla = [ 1, 2, 3, 4, 5, 15, 7, 8, 9, 10]
 let numeroMayor = tabla[0]

for (let i = 0; i < 10; i++) {
    if (numeroMayor < tabla[i]){
        numeroMayor = tabla [i]
    }
} alert (`${numeroMayor} es el numero mas grande`) */

/* //Ejercico 12

let tabla = [ 9, 12, 53, 4, 5, 15, 7, 8, 9, 10]
 let numeroMenor = tabla[0]

for (let i = 0; i < 10; i++) {
    if (numeroMenor > tabla[i]){
        numeroMenor = tabla [i]
    }
} alert (`${numeroMenor} es el numero mas chico`)

 */
/* //Ejercico 13

let jugadorUno = prompt ("Ingrese su nombre")
let jugadorDos = prompt ("Ingrese su nombre")

let eleccionUno = prompt (` ${jugadorUno} Ingrese piedra, papel o tijera`)
let eleccionDos = prompt (` ${jugadorDos} Ingrese piedra, papel o tijera`)

while (eleccionUno == eleccionDos) {
    alert (`Empate, ingrese nuevamente`)
    eleccionUno = prompt (` ${jugadorUno} Ingrese piedra, papel o tijera`)
    eleccionDos = prompt (` ${jugadorDos} Ingrese piedra, papel o tijera`)  
}
if (eleccionUno == `piedra` && eleccionDos == `tijera` ){
    alert (`${jugadorUno} es el ganador`)
    }else if ( eleccionUno == `tijera` && eleccionDos == `papel`)
        {alert (`${jugadorUno} es el ganador`)}
        else if ( eleccionUno == `papel` && eleccionDos == `piedra`)
            {alert (`${jugadorUno} es el ganador`)}
            else {`${jugadorDos} es el ganador`}
 */
/* //Ejercio 14
let triangulo = ""

for (let i = 1; i <=5 ; i++) {
    triangulo += `*`
    console.log (triangulo)
    
} */


/* //Ejercico 15

let triangulo = "*****"

for (let i = 1; i <=5 ; i++) {
    console.log (triangulo)
    triangulo = triangulo.substring (0, triangulo.length -1)
    
    
} */

//Ejercicio 16
 
/* let tabla = [ 9, 12, 53, 4, 5, 15, 7, 8, 9, 10]
let tablaOrdenda = [] */

