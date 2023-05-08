
/* //Ejercicios  1,2,3,4,5,6
let miNombre = "Ayelen";
let miApellido = "Ceresola";
let miEdad = 37;
let miMascota = "Bronco";
let edadDeMascota = 10

console.log (miNombre)

//Ejercicio 7
const nombreCompleto = `${miNombre} ${miApellido}`
console.log (nombreCompleto)

//Ejercico 8
const textoPresentacion = `Mi nombre completo es ${ nombreCompleto} y tengo ${miEdad} años
Mi perro se llama ${miMascota} y tiene ${edadDeMascota} años`
console.log (textoPresentacion)

//Ejercicio 9
const sumaEdades =  miEdad + edadDeMascota
console.log ( sumaEdades)

const restaEdades = miEdad - edadDeMascota
console.log ( restaEdades)

const productoEdades = miEdad * edadDeMascota
console.log ( productoEdades)

const divisionEdades = miEdad / edadDeMascota
console.log ( divisionEdades)

// Ejercicio 10
const textoPresentacion2 = `${textoPresentacion} 
La suma de nuetras edades es ${ sumaEdades}, la resta de nuetras edades es ${ restaEdades}, el producto de nuetras edades es ${ productoEdades}, la division de nuestras edades es ${divisionEdades}
 `
console.log ( textoPresentacion2)


//Ejercicio 11
const alumno = {
    nombre: "Ayelen",
    apellido: "Ceresola",
    edad: 37,
    estatura: 1.64,
    alumno: true,
    
 }
console.log (alumno)
console.log (alumno.nombre)
console.log (alumno.apellido)
console.log (alumno.edad)
console.log (alumno.estatura)
console.log( alumno.alumno)


//Ejercicio 12
const mascota = {
   nombre: "Bronco",
    edad: 10,
    tipoDeAniimal: "perro",
    raza: "rottweiler",
    tamaño: "grande"

 }
console.log (mascota)
console.log (mascota.nombre)
console.log (mascota.edad)
console.log (mascota.tipoDeAnimal)
console.log (mascota.raza)
console.log (mascota.tamaño)


//Ejercicio 13
const frutas = [ `manzana`, `banana`, `naranja`, `frutilla`, `sandia`]

console.log (frutas)
console.log (`${ frutas [0]}`)
console.log (`${ frutas [1]}`)
console.log (`${ frutas [2]}`)
console.log (`${ frutas [3]}`)
console.log (`${ frutas [4]}`)


//Ejercicio 14
const numeros = [ 1, 2, 3, 4, 5 ]

console.log ( numeros )
console.log (`${ numeros [0]}`)
console.log (`${ numeros [1]}`)
console.log (`${ numeros [2]}`)
console.log (`${ numeros [3]}`)
console.log (`${ numeros [4]}`)


// Ejercico 15
const familia = [ `Ana`, `Luis`, `Ayelen`, `Amancay`, `Pablo`]

console.log ( familia )
console.log ( `${ familia [0]}`)
console.log ( `${ familia [1]}`)
console.log ( `${ familia [2]}`)
console.log ( `${ familia [3]}`)
console.log ( `${ familia [4]}`)


//Ejercico 16
const textoAleatorio = `Hoy mi hermano ${familia[4]} compro ${ numeros[3]} kilos de ${ frutas[1]} en el super.`
console.log ( textoAleatorio )

//Ejercicoio 17
let miEdad1 = prompt (`Ingresar mi edad`);
let edadDeMiCompañero = prompt (`Ingresar edad de mi compañero`)

let soyMayor = (miEdad1 > edadDeMiCompañero);
console.log (`Mi edad es mayor a la de mi compañero ${soyMayor}`)

let soyMenor = (miEdad1 < edadDeMiCompañero);
console.log (`Mi edad es menor a la de mi compañero ${soyMenor}`)

let laMismaEdad = ( miEdad1 === edadDeMiCompañero);
console.log (`Tenemos la misma edad ${laMismaEdad}`)

if (miEdad1 > edadDeMiCompañero) {
     console.log (`Mi edad es mayor a la de mi compañero ${soyMayor}`)
}
if (miEdad1 < edadDeMiCompañero) {
    console.log (`Mi edad es menor a la de mi compañero ${soyMenor}`)
}
if (miEdad1 === edadDeMiCompañero) {
    console.log (`Mi edad es igual a la de mi compañero ${laMismaEdad}`)
}

//Ejercicoio 18
let miEdadHoy = prompt (`Ingresa tu edad`);
let mayorDeEdad = 18

if ( miEdadHoy >= mayorDeEdad) {
     console.log (`Soy mayor de edad, tengo ${miEdadHoy} años.`);
} 


//Ejercicio 19
let edadPersona = prompt (`Ingresar edaad`);
let alturaPersona = prompt (`Ingresar altura en cm`);

if ( edadPersona > 6 && alturaPersona > 1.20 ){
    console.log (`Puede subir a la atraccion, porque tiene ${edadPersona} años, y mide ${alturaPersona}`)
 }


//Ejercicio 20
let pase = prompt (`Ingresa tipo de pase VIP/ NORMAL/ LIMITADO`);
let saldo = prompt (`Ingresa saldo`);

if (pase == `VIP` || saldo >= 1000) {
    console.log (`Puede pasar`)
} */