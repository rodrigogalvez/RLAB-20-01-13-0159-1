"use strict";

var contador = 10;

// while (contador > 0) {
// while (contador != 0) {
while (contador) {
    console.log("Despegue en " + contador + " segundos...");
    contador--;
}
console.log("¡Despegamos!");

var texto = "¡Hola! ¿Cómo estás?";

// while (texto != "") {
// while (texto.length > 0) {
// while (texto.length) {
while (texto) {
    console.log("El texto es:" + texto);
    texto = texto.substr(1, texto.length - 1);
}

// 1.	Un programa que muestre los números del 100 al 1

var numero = 100;
while (numero) {
    console.log(numero);
    numero--;
}

// 2.	Un programa que, al ingresar un número, muestre el resultado de la suma de los números desde 1 al número ingresado. 
// Ejemplo: Si se ingresa el 5, el resultado será 15
// -	Opcionalmente, dibuje en la página la suma de los número más el resultado: 1+2+3+4+5 = 15

// var valor = prompt("Escriba un número");
// valor = parseInt(valor);
// var suma = 0;
// for (var i=1; i<=valor; i++) {
//     if (i!=1) {
//         document.write('+');
//     }
//     document.write(i);
//     suma += i;
// }
// document.write("="+suma);

var valor = 5; // prompt("Escriba un número");
valor = parseInt(valor);
var suma = 0;
// for (var i=1; i<=valor; i++) {
var i = 1;
while (i <= valor) {
    if (i != 1) {
        document.write('+');
    }
    document.write(i);
    suma += i;
    i++;
}
document.write("=" + suma);
document.write("<br>"); 

// 3.	Un programa que al ingresar un número determine si es par o impar.

// Sin while:
// var entrada = prompt("Ingrese un numero")
// entrada = parseInt(entrada);
// if (entrada % 2 == 0) {
//     document.writeln("El número "+entrada+" es par");
// } else {
//     document.writeln("El número "+entrada+" es impar");
// }

// Con while:
// var entrada = prompt("Ingrese un numero")
// entrada = parseInt(entrada);
// var esimpar=false;
// document.write("El número "+entrada+" es ");
// do {
//     esimpar=!esimpar;
//     entrada--;
// } while (entrada);
// if (esimpar) {
//     document.write(" impar");
// } else {
//     document.write(" par");
// }

// Con while (2):
var entrada = prompt("Ingrese un numero")
entrada = parseInt(entrada);
document.write("El número "+entrada+" es ");
var primeravez=true;
var resultado="";
while(entrada) {
    if (primeravez) {
        resultado="impar";
        primeravez=false;
    } else {
        resultado="par";
        primeravez=true;
    }
    entrada--;
}
document.write(resultado);
