//undefine

let x;
let y;

console.log(x);
console.log(y);
//alert(x)
//alert(y)

//Booleano

let bool1 = 10;
let bool2 = 5;

console.log(bool1 <= bool2);
console.log(bool1 >= bool2);


//numerico

let numero = 10

//alert(numero);
console.log(numero)


//cadena de texto con ejemplos de sus metodos
let nombre = "Danny" 
//alert("Hola, me llamo "+nombre+"!");
console.log("Hola, me llamo "+nombre+"!")

//metodo length
let logNombre = nombre.length
// alert(`El tamaño del string es: ${logNombre}`)
console.log(`El tamaño del la cadena de texto es: ${logNombre}`)

//metodo IndexOf
let posicion1 = nombre.indexOf('n')
let posicion = nombre.indexOf('o')
console.log(`${posicion1} posicion`)    
console.log(`${posicion} posicion`)    

//Includes
let existe = nombre.includes('a')
let existe2 = nombre.includes('r')
console.log(existe)
console.log(existe2)


//Null

let variableNula = null

//alert(variableNula)
console.log(variableNula)




//NUMEROS

let numeroEntero = 10

let numeroDecimal = 5.30


//Operaciones algebraicas 
//suma
let suma = 5 + 3
console.log(suma)

//resta
let resta = 10 - 4
console.log(resta)

//multiplicacion
let multiplicacion = 2 * 6
console.log(multiplicacion)

//division
let division = 20 / 5
console.log(division)

//residuo
let residuo = 15 % 4;
console.log(residuo); 


//NaN (NOT A NUMBER)

let resultado = 0 / 0
console.log(resultado)

let invalido = NaN + 5
console.log("El valor de la operación es: " +invalido )


//MATH
//random
let aleatorio1 = Math.random();
console.log(aleatorio1);

let aleatorio2 = Math.random();
console.log(aleatorio2);


//PI
let piEj = Math.PI;
console.log(piEj);

// dound
let numeroX = 3.7;
let redondeado1 = Math.round(numeroX);
console.log(redondeado1);

let numeroY = 8.2;
let redondeado2 = Math.round(numeroY);
console.log(redondeado2);


// Ceil este lo redonde al numero entero siguiente
let numeroC = 3.1;
let siguienteEnteroX = Math.ceil(numeroC);
console.log(siguienteEnteroX);

let numeroD = -2.5;
let siguienteEnteroY = Math.ceil(numeroD);
console.log(siguienteEnteroY);


// Floor este lo redondea al numero entero anterior
let numeroF = 5.9;
let enteroAnterior1 = Math.floor(numeroF);
console.log(enteroAnterior1);

let numeroG = -7.3;
let enteroAnterior2 = Math.floor(numeroG);
console.log(enteroAnterior2);


// SQRT(raiz cuadrada)
let numeroH = 25;
let raizCuadrada1 = Math.sqrt(numeroH);
console.log(raizCuadrada1);

let numeroI = 9;
let raizCuadrada2 = Math.sqrt(numeroI);
console.log(raizCuadrada2);



// Valor absoluto
let numeroJ = -10;
let valorAbsoluto1 = Math.abs(numeroJ);
console.log(valorAbsoluto1);


let numeroK = 7;
let valorAbsoluto2 = Math.abs(numeroK);
console.log(valorAbsoluto2);


// Min, este selecional el elemento de menor valor
let minimo = Math.min(4, 8, 2);
console.log(minimo);

let minimo2 = Math.min(-5, 0, -3);
console.log(minimo2);


//Max, este selecciona el numero de mayo valor

let maximo1 = Math.max(9, 3, 6);
console.log(maximo1);

let maximo2 = Math.max(0, -2, 5);
console.log(maximo2);



//INCREMENTO

//posIncremento
let numeroL = 10;
let porsIncremento = numeroL++; 
console.log(porsIncremento); 
//alert(porsIncremento)

// preIncremento
let numeroM = 10;
let preIncremento = ++numeroM; 
console.log(preIncremento); 
//alert(preIncremento)



//Objetos

let Animal = {
    nombre: 'León',
    especie: 'Felino',
    peso: 190,
    edad: 5,
    altura: 1.2,
    emitirSonido: function() {
        console.log("Roar");
    }
};

//metodo Freeze
// Aplicando el método freeze al objeto Animal
//Object.freeze(Animal); 
//No se realizara ninguna modificacion al nombre del objeto
//Animal.nombre = 'Tigre'; 


//metodo seal
// se pueden modificar, pero no agregar o eliminar
//Object.seal(Animal); 
//delete Animal.peso; 
//Animal.nombre = 'Tigre';



console.log(Animal);












