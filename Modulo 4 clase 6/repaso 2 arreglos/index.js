"use strict";

let app = new Vue({
    el: "#app", // Este atributo 'el' es OBLIGATORIO
    data: { // Esta sección se llama MODELO
        lista: [
            {
                nombre: "Rodrigo",
                apellido: "Galvez"
            },
            {
                nombre: "Alex",
                apellido: "Carrasco"
            },
            {
                nombre: "Cristina",
                apellido: "Núñez"
            }
        ],
        nuevonombre: "",
        nuevoapellido: "",
        indiceedicion: -1
    },
    computed: {
        modoOperacion() {
            if (this.indiceedicion == -1)
                return "AGREGAR";
            else
                return "EDICIÓN";
        },
        errores() {
            let resultado = "";
            if (this.nuevonombre=="")
                resultado+="Nombre en blanco ";
            if (this.nuevoapellido=="")
                resultado+="Apellido en blanco";
            return resultado;
        }
    },
    methods: { // Esta sección se llama métodos
        limpiar() {
            this.indiceedicion = -1;
            this.nuevonombre = "";
            this.nuevoapellido = "";
        },
        agregar() {
            this.lista.push({
                nombre: this.nuevonombre,
                apellido: this.nuevoapellido
            })
            this.limpiar();
        },
        guardar() {
            this.lista[this.indiceedicion].nombre = this.nuevonombre;
            this.lista[this.indiceedicion].apellido = this.nuevoapellido;
            this.limpiar(); // DRY -> Dont Repeat Yourself -> no hacer código repetitivo.
        },
        editar(indice) {
            this.indiceedicion = indice;
            this.nuevonombre = this.lista[indice].nombre;
            this.nuevoapellido = this.lista[indice].apellido;
        },
        eliminar(indice) {
            if (confirm("Está seguro de eliminar?")) {
                this.lista.splice(indice, 1);
                this.limpiar();
            }
        }
    }

});