"use strict";

let mensaje = "HOLA"; // Esta es una variable global.

// Cuando empieza a escribir, anote esto así:
// let app = new Vue({})
// Después llene las llaves.

let app = new Vue({
    el: "#app", // Este atributo 'el' es OBLIGATORIO
    data: { // Esta sección se llama MODELO
        mensaje: "Hola Mundo",
        colorMensaje: {
            color: "red",
            backgroundColor: "yellow"
        }
    },
    methods: { // Esta sección se llama métodos
        // mostrarHora: () => { }  esta no funciona porque el this de esta función flecha sería el objeto local methods.
        // mostrarHora: function () { } esta si funciona.
        mostrarHora() {
            let x = new Date();
            this.mensaje = x.toLocaleString();
        },
        cambiarColor() {
            if (this.colorMensaje.backgroundColor == "yellow")
                this.colorMensaje.backgroundColor = "blue";
            else
                this.colorMensaje.backgroundColor = "yellow";
        }
    }

});