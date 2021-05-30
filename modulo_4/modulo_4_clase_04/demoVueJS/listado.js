"use strict";

let app = new Vue({
    el: "#app",
    data: { // sección de datos (se llama MODELO)
        palabra: "",
        lista: ["Ejemplo 1", "Ejemplo 2", "Ejemplo 3"]
    },
    methods: { // sección de métodos.
        agregar() {
            if (this.palabra != "") {
                this.lista.push(this.palabra);
                this.palabra = "";
            }
        }
    }
})