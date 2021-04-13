"use strict";

let app = new Vue({
    el: "#app",
    data: {
        nombre: "",
        contrasena: "",
        wearein: false,
        contrasenaincorrecta: false
    },
    methods: {
        verificar() {
            if (
                this.nombre != "" &&
                !this.nombre.includes(" ") &&
                this.contrasena != "" &&
                this.contrasena == "enterthematrix")
                this.wearein = true;
            else if (
                this.nombre != "" &&
                !this.nombre.includes(" ") &&
                this.contrasena != "" &&
                this.contrasena != "enterthematrix") {
                this.wearein = false;
                this.contrasenaincorrecta = true;
                this.contrasena = "";
            } else
                this.wearein = false;
        },
        borrarError() {
            this.contrasenaincorrecta = false;
        }
    }

})