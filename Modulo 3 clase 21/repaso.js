"use strict";

// Ejemplos de promesas.

// Entrga una promesa que se ejecuta en un tiempo en milisegundos.
function esperarUnTiempo(tiempo) {
    return new Promise((todobien,algosaliomal)=>{
        setTimeout(()=>{
            console.log(`Tiempo cumplido ${tiempo} milisegundos`);
            todobien();
        },tiempo)
    })
}

// demostración:
console.log("Esperar 30 segundos");
esperarUnTiempo(30000);
console.log("Esperar 35 segundos y mostrar un mensaje");
esperarUnTiempo(35000).then(
    ()=>{
        console.log("El tiempo se ha cumplido y salió bien");
    }
)
console.log("Los mensajes de estas promesas deben aparecer después del resto del código fuente.");

// Ejempo operador spread (tres puntos: ...)

// Arreglos:
var arr1 = ["Manzana","Pera", "Plátano"];
var arr2 = ["Durazno", "Kiwi", "Naranja"];
// Concatenar en un nuevo arreglo:
var arr3 = arr1.concat(arr2);
// Concatenar usando spread:
var arr4 = [...arr1,...arr2];
// arr3 y arr4 deberían contener lo mismo:
console.log(arr3);
console.log(arr4);

// Invocar una función pasando parámetros en un arreglo.
// la función:
function sumar(a,b) {
    return a+b;
}
var numeros=[100,50];
// sin spread:
console.log(sumar(numeros[0],numeros[1]));
// con spread:
console.log(sumar(...numeros));


// otro ejemplo, con el constructor de objetos:
class Persona {
    constructor(nombre,rut, correo) {
        this.nombre = nombre;
        this.rut = rut;
        this.correo = correo;
    }
    toString() {
        return `Nombre: ${this.nombre}, RUT: ${this.rut}, Correo: ${this.correo}`;
    }
}
// Supongamos que tenemos tres datos de persona en un arreglo.
var datosNuevos = ["Pepito", "1-9", "pepito.perez@gmail.com"];
// crear un objeto persona con la forma tradicional:
var persona1 = new Persona(datosNuevos[0], datosNuevos[1], datosNuevos[2]);
// crear un objeto nuevo usando el perador spread:
var persona2 = new Persona(...datosNuevos);
// ver qué resulta:
console.log(persona1);
console.log(persona2);

//Ejemeplo de objeto Map:
// Nota: tal vez los correos no están correctos.
var marcela = new Persona("Marcela Ulloa", "100-1", "m.ulloa@duoc.cl");
var rodrigo = new Persona("Rodrigo Gálvez", "200-1", "r.galvez@profesor.duoc.cl");
var claudio = new Persona("Claudio Rubilar", "204-1", "claudiorubilar@gmail.com");
// Map:
var empleado = new Map();
empleado.set(rodrigo,marcela);
empleado.set(claudio,marcela);
// mostrar todo los elementos del mapa:
for (var [claveEmpleado, valorJefe] of empleado) {
    console.log(claveEmpleado,valorJefe);
}

for (var [claveEmpleado, valorJefe] of empleado) {
    console.log(claveEmpleado.toString(),valorJefe.toString());
}

for (var [claveEmpleado, valorJefe] of empleado) {
    console.log(claveEmpleado.nombre+" es empleado de "+valorJefe.nombre);
}

// Torpedo: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Map