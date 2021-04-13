"use strict";

// Repaso FOREACH

let arr1 = [6,78,7];

console.log("Mostrar arreglo:")
console.log(arr1);

// Hacer que un foreach muestre los números con el mensaje:
// "El número x es y"

arr1.forEach(mostrarElemento);

function mostrarElemento(numero,indice){
    console.log("El número "+ indice + " es "+ numero);
}

// Esto:
// arr1.forEach(mostrarElemento);
// Es lo mismo que hacer esto:
// mostrarElemento(6,0) // -> El número 0 es 6
// mostrarElemento(78,1) // -> El número 1 es 78
// mostrarElemento(7,2) // -> El número 2 es 7
// es decir, la función mostrarElemento() se invocó por cada elemento del arreglo arr1.