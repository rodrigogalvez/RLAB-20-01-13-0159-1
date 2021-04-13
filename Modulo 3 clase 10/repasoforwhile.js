"use strict";

// Ejercicio 1: crear una función que recibe como entrada un arreglo y devuelve el primero y último elemento del arreglo.

function obtenerPrimeroyUltimo(A) {
    if (A.length == 0) {
        return [];
    } else {
        return [A[0], A[A.length - 1]];
    }
}

console.log(obtenerPrimeroyUltimo([1, 2]));
console.log(obtenerPrimeroyUltimo([34, 55, 99, 120]));
console.log(obtenerPrimeroyUltimo(["hola", "como estas", "chao"]));
console.log(obtenerPrimeroyUltimo([true, [1, 2, 3], "texto"]));

console.log(obtenerPrimeroyUltimo(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t"]));

console.log(obtenerPrimeroyUltimo([["a", 3], ["b", 7, 9], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"], ["k"], ["l"], ["m"], ["n"], ["o"], ["p"], ["q"], ["r"], ["s"], ["t", 12, 15]]));

// Ejercicio 2: Crear un arreglo de N elementos con números al azar. Presentar en consola con el índice y el valor de cada elemento del arreglo.

function crearArreglo(N) {
    var A=[];
    for( var i = 0; i<N; i++) {
        A.push(Math.random()*100);
    }

    for (var i = 0; i<N ; i++ ) {
        console.log("A["+i+"] = "+ A[i]);
    }
    return A;
}

// crearArreglo(20);

// Ejercicio 3: A partir de una posición I, dame N elementos en otro arreglo. Retuilizar la función anterior.

function extraerElementos(A, I, N) {
    var R=[];
    for (var i=0; i<N; i++ ) {
        R.push(A[i+I]);
    }
    return R;
}

console.log(
    extraerElementos(crearArreglo(20), 3, 5)
)

console.log(extraerElementos(["h","i","t","h","a","m","a","r"],2,3))

// Ejercicio 4: Repaso de WHILE.
// Sumar todos los números que ingresa un usario con prompt()
// El programa termina cuando el usuario ingresa una cadena vacía.
// Muestre la suma en consola cada vez y entregue el resultado final.

// TORPEDO: cada vez que le digan "entregue..." o "devuelva..." 
// implica un return.  

function sumaInfinita() {

    var ingreso=prompt("Ingrese un número");
    var suma=0;

    while (ingreso!="") {

        var numero = parseInt(ingreso);
        suma+=numero;
        console.log("La suma va en "+suma);
        ingreso=prompt("Ïngrese el siguiente número");
    }
    return suma;
}

console.log(sumaInfinita());