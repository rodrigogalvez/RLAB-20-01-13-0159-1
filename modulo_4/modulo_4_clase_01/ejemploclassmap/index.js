"use strict";

class Casa {
    constructor(codigo,direccion,banos,dormitorios,estacionamiento,precio){
        this.codigo = codigo;
        this.direccion = direccion;
        this.banos = banos;
        this.dormitorios = dormitorios;
        this.estacionamiento = estacionamiento;
        this.precio = precio; // precio de arriendo
    }
    toString() {
        return `Dirección: ${this.direccion}\nBaños: ${this.banos}\nDormitorios: ${this.dormitorios}\nEstacionamientos: ${this.estacionamiento}\nArriendo mensual: ${this.precio}\n`;
    }
}
let casa1 = new Casa("hyu76","Álvarez 6363", 20,200, 10, 250000);
let casa2 = new Casa("hdaf7","Los Carrera 636",3,3,1,350000);
let casa3 = new Casa("dhfh7","Baden Powell 800",3,5,2,500000);
let casasEnArriendo = new Map();
casasEnArriendo.set(casa1.codigo,casa1);
casasEnArriendo.set(casa2.codigo,casa2);
casasEnArriendo.set(casa3.codigo,casa3);

class Arrendatario {
    constructor(rut,nombre) {
        this.rut = rut;
        this.nombre = nombre;
    }
    toString() {
        return `RUT: ${this.rut}, Nombre: ${this.nombre}`;
    }
}
let arrendatario1 = new Arrendatario("1-9","Hugo");
let arrendatario2 = new Arrendatario("2-9","Paco");
let arrendatario3 = new Arrendatario("3-9","Luis");
let arrendatarios = new Map();
arrendatarios.set(arrendatario1.rut,arrendatario1);
arrendatarios.set(arrendatario2.rut,arrendatario2);
arrendatarios.set(arrendatario3.rut,arrendatario3);

let contrato = new Map();
contrato.set(arrendatario1,casa1);
contrato.set(arrendatario2,casa2);
contrato.set(arrendatario3,casa3);

// Consultar contratos:
// Consltar el contrato del rut 2-9:
contrato.get(arrendatarios.get("2-9")) //<- poder hacer esto es la maravilla de los MAP.
    // Casa {codigo: "hdaf7", direccion: "Los Carrera 636", banos: 3, dormitorios: 3, estacionamiento: 1, …}
    // banos: 3
    // codigo: "hdaf7"
    // direccion: "Los Carrera 636"
    // dormitorios: 3
    // estacionamiento: 1
    // precio: 350000
    // __proto__: Object