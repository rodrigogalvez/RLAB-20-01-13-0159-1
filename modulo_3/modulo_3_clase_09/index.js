"use strict";

// 1.	Crear un arreglo vacío, llenarlo con los números pares que hay entre 0 y 49 usando un for, luego mostrarlo por consola usando for of.

function pares() {
    var numeros = [];
    for (var i = 0; i <= 49; i++) {
        if (i % 2 == 0) {
            numeros.push(i);
        }
    }

    for (var numero of numeros) {
        console.log(numero);
    }
}
pares();

// 2.	Crear un arreglo del tamaño que guste, con los colores que guste. Utilice el arreglo para escoger colores al azar y usarlos como color de fondo de 6 <span>. Cada vez que se actualice la página debería mostrar diferentes combinaciones de colores
function coloresalazar() {
    var colores = ['red', 'blue', 'green', 'yellow', 'aqua', 'brown'];
    //  <span style="background-color:blue">blue</span>

    for (var i = 0; i < 6; i++) {
        var indicecolor = Math.trunc(Math.random() * colores.length);
        var colorelegido = colores[indicecolor];
        // document.write('<span style="background-color:'+colorelegido+'">HOLA</span>');
        document.write("<span style=\"background-color:" + colorelegido + "\">HOLA</span>");

    }
    document.write("<br>");

}
coloresalazar();

// 3. Llenar un arreglo con los números pares que hay entre 0 y un número generado al azar con tope 20. Luego, mostrar el contenido del arreglo con un for of. Con cada ejecución, el tamaño del arreglo debería ir cambiando.
// Hitamar:
function cargarparesalazar() {
    var tamano = Math.trunc(Math.random()*20)+1;
    var numeros = [];
    for (var i = 0; i <= tamano; i++) {
        if (i % 2 == 0) {
            numeros.push(i);
        }
    }

    for (var numero of numeros) {
        console.log(numero);
    }
}
cargarparesalazar();

// Alex:

// Implementar la función para mostrar los números pares entre 0 y un número aleatorio.
function mostrarPares() {
    // Declaración de variables.
    var pares = [] // Arreglo de números pares, inicialmente vacío.
    var tope = 20 // Tope para generar el número aleatorio.
    var numero = Math.floor(Math.random() * tope + 1) // Número aleatorio.
    // Recorrer los números desde el 0 al número aleatorio generado recién.
    for (var i = 0; i <= numero; i++) {
        // Si el número actual es par, guardar en el arreglo.
        if (i % 2 == 0) {
            pares.push(i)
        }
    }
    // Mostrar por consola el número aleatorio usado y el arreglo de pares llenado anteriormente.
    console.log('Largo: ' + numero);
    for (var par of pares) {
        console.log(par)
    }
}
// Llamar a la función mostrarPares.
mostrarPares()

function problemacomillas() {
    var ejemplo1="Hola Rodrigo";
    var ejemplo2='Hola Rodrigo';
    var ejemplo3="Hola \"Profe\"";
    var ejemplo4='Hola "Profe"';
    var ejemplo5="Hola 'Profe'";
    var ejemplo6='Hola \'Profe\'';
    console.log(ejemplo1);
    console.log(ejemplo2);
    console.log(ejemplo3);
    console.log(ejemplo4);
    console.log(ejemplo5);
    console.log(ejemplo6);
}