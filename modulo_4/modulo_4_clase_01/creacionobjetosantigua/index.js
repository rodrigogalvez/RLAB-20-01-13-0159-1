"use strict";
// forma nueva (ES6):
class Producto {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
    toString() {
        return this.codigo + " - " + this.nombre;
    }
}
let producto1 = new Producto("12","Zapatillas");

// forma antingua (ES5):
function productoAntiguo(codigo,nombre) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.toString = ()=>{
        return this.codigo + " - " + this.nombre;
    }
}
let producto2 = new productoAntiguo("12","Zapatillas");