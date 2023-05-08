/* //Ejercicio 1

function mayorQue (numeroA, numeroB) {
    if (numeroA > numeroB) {
        console.log (`${numeroA} es mayor que ${numeroB}`)
        
    }else (
        console.log (`${numeroA} es menor que ${numeroB}` )
    )
    
}
mayorQue (2,8);

///Ejercico 2

function sonIguales (numeroA, numeroB) {
    if (numeroA === numeroB) {
        console.log (`${numeroA} es igual que ${numeroB}`)
        
    }else (
        console.log (`${numeroA} es diferente que ${numeroB}` )
    )
    
}
sonIguales (5,1);


//Ejercicio 3

function masGrande (numeroA, numeroB) {
    if (numeroA > numeroB) {
        console.log (`${numeroA} es mayor que ${numeroB}`)
        
    }
    if (numeroA === numeroB){
        console.log(`${numeroA} es igual que ${numeroB}`)
    }
    if (numeroA < numeroB) {
        console.log (`${numeroA} es menor que ${numeroB}`)
        
    }

masGrande (8,13);

//Ejercicio 4

function masChico ( numeroA, numeroB, numeroC ) {
    if ( numeroA < numeroB && numeroA < numeroC) {
        console.log (`${numeroA} es el mas chico`)
    }
    if (numeroB < numeroA && numeroB < numeroC) {
        console.log (`${numeroB} es el mas chico`)
    }
    if (numeroC < numeroA && numeroC < numeroB) {
        console.log (`${numeroC} es el mas chico`)
    }
    
}
masChico (5,7,3)


//Ejercicio 5

const persona1 = {
    nombre: `Pablo`,
    edad1: 25,
    altura1: 1.70,
}

const persona2 = {
    nombre: `Juan`,
    edad2: 34,
    altura2: 1.68,
}

function masEdad ( edad1, edad2){
    if (edad1 > edad2) {
        console.log ( `${persona1.nombre} es mayor que ${persona2.nombre}`)
        
    }else ( console.log (`${persona2.nombre} es mayor que ${persona1.nombre}`))
}
masEdad (persona1.edad1, persona2.edad2)

function mayorAltura ( altura1, altura2){
    if (altura1 > altura2) {
        console.log ( `${persona1.nombre} es mas alto que ${persona2.nombre}`)
        
    }else ( console.log (`${persona2.nombre} es mas alto que ${persona1.nombre}`))
}
mayorAltura (persona1.altura1, persona2.altura2)

//Ejercicio 6

const nombre = prompt ( `Ingresar nombre`)
const edad = Number (prompt(`Ingresar edad`))
const altura = Number (prompt (`Ingrasar altura en cm`))
const vision = Number (prompt (`Ingrasar rango de vision de 0 a 10, sindo 10 el valor maximo `))


    if ( edad >= 18 && altura >= 150 && vision >= 8 ) {
        console.log ( `${nombre} Esta capacitado para conducir`);

    }else ( console.log (`${nombre} No esta capacitado para conducir`));
    
//Ejercicio 7 */




//ejercicio 8

/* alert (`Tenes tres oportunudades para adivinar un numero del 1 al 10`)
let numeroIncognita = 7;
let numeroIngresado1 = Number (prompt (`Ingresar un numero entre 1 y 10`));

if (numeroIncognita == numeroIngresado1) {
    alert (`Adivinaste, Felicitaciones!`);
    
}else if (numeroIncognita > numeroIngresado1){
    alert (`El numero es mayor, intentalo de nuevo`)
    let numeroIngresado2 = Number (prompt (`Ingresar un numero entre 1 y 10`));

    if (numeroIncognita == numeroIngresado2) {
        alert (`Adivinaste, Felicitaciones!`)
    
    }
    else if (numeroIncognita > numeroIngresado2){
        alert (`El numero es mayor, intentalo de nuevo`)
        let numeroIngresado3 = Number (prompt (`Ingresar un numero entre 1 y 10`));
        if (numeroIncognita == numeroIngresado3) {
            alert (`Adivinaste, Felicitaciones!`)
        
        }else if (numeroIncognita > numeroIngresado3){
            alert (`Fallaste, ya no hay mas intentos`)
    
        }else {
            alert (`El numero es menor, intentalo de nuevo`)
         }
    }
    else {
        alert (`El numero es menor, intentalo de nuevo`)
        let numeroIngresado3 = Number (prompt (`Ingresar un numero entre 1 y 10`));

    if (numeroIncognita == numeroIngresado3) {
        alert (`Adivinaste, Felicitaciones!`)
    
    }else if (numeroIncognita > numeroIngresado3){
        alert (`El numero es mayor, intentalo de nuevo`)

    }else {
        alert (`El numero es menor, intentalo de nuevo`)
     }
    }
 
        
}else {
    alert (`El numero es menor, intentalo de nuevo`)
    let numeroIngresado2 = Number (prompt (`Ingresar un numero entre 1 y 10`));
    if (numeroIncognita == numeroIngresado2) {
        alert (`Adivinaste, Felicitaciones!`)
    
    }else if (numeroIncognita > numeroIngresado2){
        alert (`El numero es mayor, intentalo de nuevo`)
        let numeroIngresado3 = Number (prompt (`Ingresar un numero entre 1 y 10`));
        if (numeroIncognita == numeroIngresado3) {
            alert (`Adivinaste, Felicitaciones!`)
        
        }else if (numeroIncognita > numeroIngresado3){
            alert (`Fallaste, ya no hay mas intentos`)
    
        }else {
            alert (`Fallaste, ya no hay mas intentos`)
         }
        
    }else {
        alert (`El numero es menor, intentalo de nuevo`)
        let numeroIngresado3 = Number (prompt (`Ingresar un numero entre 1 y 10`));

    if (numeroIncognita == numeroIngresado3) {
        alert (`Adivinaste, Felicitaciones!`)
    
    }else if (numeroIncognita > numeroIngresado3){
        alert (`Fallaste, ya no hay mas intentos`)

    }else {
        alert (`Fallaste, ya no hay mas intentos`)
     }
    }
 }
      */
     

/*  //Ejercicio 9
 
 let edadIngresada = Number (prompt (`Ingresa tu edad`))
  if (edadIngresada <= 12 && edadIngresada > 0) {
    console.log (`Es un infante`)
}else if ( edadIngresada >= 13 && edadIngresada <= 18){
    console.log (`Es un adolescente`)
}else if (edadIngresada >= 19 && edadIngresada <= 45){
    console.log (`Es un adulto joven`)
}else if ( edadIngresada >= 46 && edadIngresada <= 99){
    console.log (`Es un anciano`)
}else if ( edadIngresada === 100){
    alert (`¿En realidad tenes esa edad?`)
}else {console.log (`Edad invalidad`)
}  */

/* //Ejercicio 10

let datoUno = prompt (`Ingrese: piedra, papel o tijera`)
let datoDos = prompt (`Ingrese: piedra, papel o tijera`)

function comparacionDatos(datos) {
    if (datoUno == `piedra` && datoDos == `tijera`) {
        console.log (`Participante uno es el ganador`)     
    }else if (datoUno == `papel` && datoDos == `piedra`) {
        console.log (`Participante uno es el ganador`)      
    }else if (datoUno == `tijera` && datoDos == `papel`){
        console.log (`Participante uno es el ganador`)
    }
}
comparacionDatos() */

/* //Ejercicio 11

let comparacion = prompt (`Ingrese un color`)

switch (comparacion) {
    case `blanco`:
        alert (`Falta de color`) 
        break;
    case `negro`:
        alert (`falta de color`)
        break;
    case`verde`:
        alert (`: El color de la naturaleza`) 
        break;
    case `azul`:
        alert (`: El color del agua`)
        break;
    case `amarillo`:
        alert (`El color del sol`) 
        break;
    case `rojo`:
        alert (`El color del fuego`)
        break;
    case `marron`:
        alert (`El color de la tierra`) 
        break;

    default: alert (`Excelente elección, no lo teníamos pensado`)
        break;
} */
/*  //Ejercico 12

 let operacion = prompt (`Ingrese operacion: suma, resta, multiplicacion, division`)
 let numeroUno = Number (prompt (`Ingrese un numero`))
 let numeroDos = Number (prompt (`Ingrese un numero`))

 switch (operacion) {
    case `suma`:
        console.log (`El resultado de sumar ${numeroUno} y ${numeroDos} es ${numeroUno + numeroUno}`)
        break;
    case `resta`:
        console.log (`El resultado de restar ${numeroUno} y ${numeroDos} es ${numeroUno - numeroUno}`)
         break;
    case `multiplicacion`:
        console.log (`El resultado de multiplicar ${numeroUno} y ${numeroDos} es ${numeroUno * numeroUno}`)
        break;
    case `division`:
        console.log (`El resultado de dividir ${numeroUno} y ${numeroDos} es ${numeroUno / numeroUno}`)
        break;
 
    default:
        console.log (`Operacion no valida`)
        break;
 } */

/*  //Ejercicio 13

 let nombre = prompt (`Ingrese su nombre`)
 let apellido = prompt (`Ingrese su apellido`)
 let fechaDeNacimiento = Number(  prompt (`Ingrese su fecha de nacimiento`))
 let domicilio = prompt (`Ingrese su domicilio`)
 
 let datosDni [

 ] */