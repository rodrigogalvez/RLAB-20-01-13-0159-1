"use strict";

/*
    Ejercicios complementarios:

    Complete el código fuente de cada función según la
    especificación que está en el comentario antes o dentro de 
    cada función.

    Permitido: 
        Crear funciones adicionales dentro de la función propuesta.
        Crear variables adicionales dentro de la función propuesta.

    Prohibido: 
        Cambiar el código fuente propuesto.
*/

/* 
    Ejercicio 1: Cacular suma y promedio de una cantidad infinita de números.
    Parámetros de entrada: ninguno.
    Algoritmo:
        Al inicio, la suma y la cantidad de números ingresados es cero.
        Pedir un número con prompt()
        Sumar el número a la suma que ya tiene calculada
        Contar el número ingresado
        Calcular el promedio y desplegarlo en consola.
        Esto se repite hasta que el usuario ingrese una cadena vacía en el prompt()
    Pista: usar while.
    Resultado: ninguno.
*/
function promedioInfinito() {
    
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

/*
    Ejercicio 2: Sumar dos matrices. Parámetros de entrada:
    Matriz A: arreglo de arreglos representando una matriz de M filas por N columnas.
    Matriz B: idéntico al anterior.
    Algoritmo: 
        crear una nueva matriz C, sumando en cada celda el valor de cada 
        celda de la matriz A y la matriz B.
        Si las matrices A y B tienen la misma cantidad de filas y columnas, entonces 
        puede realizar la operación. En caso contrario, el resultado es undefined.
    Pista: puede crear las matrices usando la función vista en clases crearMatriz()
    Pista: usar for anidados.
    Resultado: devolver por "return" la matriz C.
*/
function matrizSumar(A,B) {

}

/*
    Ejercicio 3: Multiplicar dos matrices. Parámetros de entrada:
    Matriz A: arreglo de arreglos representando una matriz de M filas por N columnas.
    Matriz B: idéntico al anterior.
    Algoritmo: 
        crear una nueva matriz C, multiplicando el valor de la primera celda de A con la primera celda de B,
        luego la segunda celda de A con la primera celda de la segunda fila de B...
        Busque en Internet cómo realizar la multiplicación de matrices.
        Solo puede multiplicar las matrices si son compatibles. En caso de no ser compatibles, 
        devolver undefined.
    Pista: usar for anidados.
    Pista: ver el algoritmo correcto aquí: https://es.wikipedia.org/wiki/Multiplicaci%C3%B3n_de_matrices
    Resultado: devolver por "return" la matriz C.
*/
function matrizMultiplicar(A,B) {

}

/*
    Ejercicio 4: Determinar números primeros antes de un número dado.
    Parámetros de entrada:
    Número N: el número máximo para revisar los números primos.
    Algoritmo:
        Partiendo desde el número 2 hasta llegar al número N, determine qué números son primos.
        El número primo es un número solo divisible por si mismo y por 1.
        Ejemplo: entre el 1 y el 20, los números primos existentes son: 3, 5, 7, 11, 13, 17, 19.
    Pista: https://es.wikipedia.org/wiki/N%C3%BAmero_primo
    Pista: usar for anidados. Puede abortar un for usando break.
    Resultado: un arreglo con los números primos encontrados.
*/
function numerosPrimos(N) {

}

