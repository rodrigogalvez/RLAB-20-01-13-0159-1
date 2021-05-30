"use strict";


// Ejercicio 1 de arreglos:
function crearArreglo25() {
    var A = new Array(25);

    for (var i = 0; i < 25; i++) {
        A[i] = i;
    }
    return A;
}

// Ejercicio 3 de matrices:

// 3.	Crear una matriz de 10 x N, donde N es un número ascendente que va de 3 a 12. Llenar cada arreglo con el índice de su arreglo padre, así el primero arreglo tendrá 0’s, el segundo arreglo solo 1’s, el tercer arreglo solo 2’s y así sucesivamente. Mostrar la matriz por consola.
function matrizAscendente() {
    var matriz = [];
    for (var i = 0; i < 10; i++) {
        var fila = [];
        for (var j = 0; j < i + 3; j++) {
            fila.push(i);
        }
        matriz.push(fila);
    }
    console.log(matriz);
}

// Ejercicio adicional: Crear una matriz MxN con un valor inicial indicado en la invocación.
function crearMatriz(M, N, valor) {
    var matriz = [];
    for (var i = 0; i < M; i++) {
        var fila = [];
        for (var j = 0; j < N; j++) {
            fila.push(valor);
        }
        matriz.push(fila);
    }
    return matriz;
}

// Ejercicio MAP: Usar la función anterio para crear matrices y crear una nueva función 
// para multiplicar la matriz por un número.
function multiplicacionEscalar(matriz, valor) {

    function procesacelda(celda) {
        return celda * valor;
    }

    function procesaFila(fila) {
        var filamultiplicada = fila.map(procesacelda);
        return filamultiplicada;
    }

    var resultado = matriz.map(procesaFila);
    return resultado;
}

function multiplicacionEscalarConFor(matriz, valor) {
    var resultado = [];
    for (var i = 0; i < matriz.length; i++) {
        var filanueva = [];
        for (var j = 0; j < matriz[i].length; j++) {
            filanueva.push(matriz[i][j] * valor);
        }
        resultado.push(filanueva);
    }
    return resultado;
}

// Ejercicio map 2: "pasar lista": dado un arreglo con nombres, presente un nuevo arreglo con el texto siguiente:
// "¡nombre, presente!"
// Ejemplo: ["Juan", "Javiera","Alex" ] => ["¡Juan, presente!", "¡Javiera, presente!", "¡Alex, presente!"]

function pasarLista(lista) {
    function decirPresente(nombre) {
        var presente = "¡" + nombre + ", presente!";
        return presente;
    }
    var resultado = lista.map(decirPresente);
    return resultado;
}
function pasarListaAvanzado(lista) {
    return lista.map((nombre) => "¡" + nombre + ", presente!");
}

function pasarLista2(lista) {
    function decirPresente(nombre, indice) {
        var presente = "¡" + nombre + ", presente! (número de lista " + indice + ")";
        return presente;
    }
    var resultado = lista.map(decirPresente);
    return resultado;
}

function pasarLista3(lista) {
    function decirPresente(nombre, indice, listacompleta) {
        var presente = "¡" + nombre + ", presente! (número de lista " + indice + ") " + listacompleta;
        return presente;
    }
    var resultado = lista.map(decirPresente);
    return resultado;
}

