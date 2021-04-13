"use strict";

let app = new Vue({
    el: "#app",
    data: {
        a: 0,
        b: 0,
        operacion: "",
        resultado: ""
    },
    methods: {
        operar() {

            // if (this.operacion == "sumar")
            //     this.sumar();
            // else if (this.operacion == "restar")
            //     this.restar();
            // else
            //     this.resultado = "Operación desconocida";

            switch (this.operacion) {
                case 'sumar':
                    this.sumar();
                    break;
                case 'restar':
                    this.restar();
                    break;
                default:
                    this.resultado = "Operación desconocida";
            }
        },
        sumar() {
            this.resultado = this.a + this.b;
        },
        restar() {
            this.resultado = this.a - this.b;
        }
    }

})