"use strict";

let app = new Vue({
    el: "#app",
    data: {
        numeroMaximo: 41,
        numeroMinimo: 1,
        cantidadNumeros: 7,
        numeros: []
    },
    methods: {
        generarNumero() {
            return Math.trunc(Math.random() * (this.numeroMaximo - this.numeroMinimo)) + this.numeroMinimo;
        },
        generarJugada() {
            // se puede hacer con for () pero queda incompleto:
            // for (this.numeros = []; this.numeros.length < this.cantidadNumeros;/*FALTA el incremento. No existe en este caso. */) {
            this.numeros=[];
            while (this.numeros.length < this.cantidadNumeros-1) {
                let nuevo = this.generarNumero();
                if (!this.numeros.includes(nuevo)) {
                    this.numeros.push(nuevo);
                }
            }
            this.numeros.sort((a, b) => a - b);
            // Si no coloca una función en el SORT(), entonces ordena todo como si fuera texto.
            // Sería con esta función:
            // this.numeros.sort((a, b) => {
            //     let A = a+"";
            //     let B = b+"";
            //     if (A<B) return -1;
            //     if (B<A) return 1;
            //     return 0;
            // });
            while (this.numeros.length < this.cantidadNumeros) {
                let nuevo = this.generarNumero();
                if (!this.numeros.includes(nuevo)) {
                    this.numeros.push(nuevo);
                }
            }
        }
    }
})