// TIPO NUMBER
let numero = 15;
// TIPO STRING
let saludo = "hola mundo, desde js"
let nombre = "Daniel"
// TIPO BOOLEAN
let validacion = true;
let validacion2 = true;
// TIPO NULL
let data = null;
// DEFINICION DE UN CONSTANTE
const valorPi = 3.1416;
// ALCANCE (SCOPE)
// if(true){
//     saludo = "hola mundo desde el if"
//     numero = 10;
//     // alert(numero)
//     // alert(saludo)
//     // valorPi = 5;
// }
// alert("hola desde alert")

// function suma(a, b){
//     return a + b
// }

// console.log(`Hola ${nombre}, mi edad es ${suma(25,2)}`)
// console.log('Hola' + nombre + ', mi edad es ' + suma(25,2))

// alert(typeof validacion)
// alert(numero++)

// if(validacion || validacion2){
//     console.log("el numero es diferente de 20")
// }

// function mostrarNumero(){
//     let saludo = "hola desde la funcion"
//     // alert(saludo)
// }

let Vehiculo = {
    marca : 'Mustang',
    year : 1985,
    color: 'rojo',
    saludar: function (){
        alert("hola soy un vehiculo")
    }
}

Vehiculo.puertas = 5
// Object.seal(Vehiculo)
// // console.log(Array)
// // alert(Vehiculo)
// console.log(Vehiculo)

// Vehiculo.puertas = 5;
// Vehiculo.color = "azul"
// Desestructuracion
// let {color, year, marca, saludar, puertas} = Vehiculo


// console.log(color)
// console.log(year)
// console.log(marca)
// console.log(puertas)
// saludar();


let numeros = [1,2,3,"hola"]
let i = 0;
// while(i < numeros.length){
//     console.log(numeros[i])
//     i++;
// }

// do {
//     console.log(numeros[i])
//     i++; 
// } while (i < numeros.length);

// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i])
   
// }

// numeros.forEach(function (valor){
//     console.log(valor)
// });

// for(let valor of numeros){
//     console.log(valor)
// }


// for(let propiedad in Vehiculo){
//     console.log(propiedad)
// }

switch (numero) {
    case 15:
        console.log("El numero es quince")
        
        break;
    case 20:
        console.log("El numero es veinte")
        
        break;

    default:
        break;
}


console.log(numeros)

// mostrarNumero();
