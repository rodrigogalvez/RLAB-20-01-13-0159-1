"use strict";

var variableglobal="hola";

// ejercicico 1: contar de 100 a 1.
function ejercicio1() {
    var numero = 100;
    while (numero) {
        console.log(numero);
        numero--;
    }
}

// ejercicio 2: contar de 100 a 1 de 5 en 5.
function ejercicio2() {
    var numero = 100;
    while (numero) {
        // let x = 1;
        console.log(numero);
        numero-=5;
    }
    // console.log(x);
}

ejercicio1();
ejercicio2();

// console.log(numero); // tira error.