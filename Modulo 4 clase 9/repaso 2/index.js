"use strict";
// let numero1 = 100
new Vue({
    el: "#app",
    data: {
        numero1: "",
        numero2: "",
        resultado: ""
    },
    methods: {
        sumar() {
            console.log("SUMAR")
            this.resultado = this.numero1 +
                Number(this.numero2);
        },
        procesarSubmit(evento) {
            console.log("SUBMIT")
            evento.preventDefault()
        }
    }
})