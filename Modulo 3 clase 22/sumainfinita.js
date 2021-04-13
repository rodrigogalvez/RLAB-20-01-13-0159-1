"use strict";

/* 
    Ejercicio 1: Cacular suma y promedio de una cantidad infinita de números.
    Parámetros de entrada: ninguno.
    Algoritmo:
        Al inicio, la suma y la cantidad de números ingresados es cero.
        Pedir un número con prompt() --> ahora es con la WEB. Es con un botón o enter.
        Sumar el número a la suma que ya tiene calculada
        Contar el número ingresado
        Calcular el promedio y desplegarlo en consola. --> publicar en la web
        Esto se repite hasta que el usuario ingrese una cadena vacía en el prompt() ->> hasta cuando quiera el usuario.
    Pista: usar while. --> no se puede!!
    Resultado: ninguno.
*/


let acumulado = 0;
let contador = 0;

function sumar() {
    let numero = Number(document.getElementById("cifra").value);
    let suma = document.getElementById("suma")
    if (isNaN(numero)) {
        alert("Ingrese solo números");
    } else {
        acumulado += numero; // acumulado = acumulado+numero;
        contador++;
        let promedio = acumulado / contador;
        suma.innerText = 'Suma ' + acumulado + ' - Promedio: ' + promedio;
    }
    document.getElementById("cifra").value = "";
}