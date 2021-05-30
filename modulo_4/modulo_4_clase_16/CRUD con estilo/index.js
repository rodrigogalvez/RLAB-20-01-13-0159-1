"use strict";

let app = new Vue({
    el: "#app", // Este atributo 'el' es OBLIGATORIO
    data: { // Esta sección se llama MODELO
        lista: [
            {
                nombre: "Rodrigo",
                apellido: "Galvez",
                tipo: "Presencial"
            },
            {
                nombre: "Alex",
                apellido: "Carrasco",
                tipo: "Presencial"
            },
            {
                nombre: "Cristina",
                apellido: "Núñez",
                tipo: "Presencial"
            },
            {
                nombre: "Andrea",
                apellido: "Oyarce",
                tipo: "Presencial"
            },
            {
                nombre: "Hithamar",
                apellido: "Duran",
                tipo: "Presencial"
            },
            {
                nombre: "Javiera",
                apellido: "Krammle",
                tipo: "Presencial"
            },
            {
                nombre: "Joaquin",
                apellido: "Jaramillo",
                tipo: "Presencial"
            },
            {
                nombre: "Jorge",
                apellido: "Galleguillos",
                tipo: "Presencial"
            },
            {
                nombre: "Mauricio",
                apellido: "Fernández",
                tipo: "Presencial"
            },
            {
                nombre: "Nicolás",
                apellido: "Zapata",
                tipo: "Presencial"
            },
            {
                nombre: "Paola",
                apellido: "Gill",
                tipo: "Presencial"
            },
            {
                nombre: "Rodrigo",
                apellido: "Carrasco",
                tipo: "Presencial"
            },
            {
                nombre: "Leandro",
                apellido: "Venegas",
                tipo: "Presencial"
            }

        ],
        nuevonombre: "",
        nuevoapellido: "",
        nuevotipo: "",
        indiceedicion: -1,
        filtro: ""
    },
    computed: {
        modoOperacion() {
            if (this.indiceedicion == -1)
                return "AGREGAR";
            else
                return "EDICIÓN";
        },
        errores() {
            let resultado = [];
            if (this.nuevonombre == "")
                resultado.push("Nombre en blanco");
            if (this.nuevoapellido == "")
                resultado.push("Apellido en blanco");
            if (this.nuevotipo == "")
                resultado.push("Tipo en blanco");
            return resultado;
        }
    },
    methods: { // Esta sección se llama métodos
        limpiar() {
            this.indiceedicion = -1;
            this.nuevonombre = "";
            this.nuevoapellido = "";
            this.nuevotipo = "";
        },
        agregar() {
            this.lista.push({
                nombre: this.nuevonombre,
                apellido: this.nuevoapellido,
                tipo: this.nuevotipo
            })
            this.limpiar();
        },
        guardar() {
            this.lista[this.indiceedicion].nombre = this.nuevonombre;
            this.lista[this.indiceedicion].apellido = this.nuevoapellido;
            this.lista[this.indiceedicion].tipo = this.nuevotipo;
            this.limpiar(); // DRY -> Dont Repeat Yourself -> no hacer código repetitivo.
        },
        editar(indice) {
            this.indiceedicion = indice;
            this.nuevonombre = this.lista[indice].nombre;
            this.nuevoapellido = this.lista[indice].apellido;
            this.nuevotipo = this.lista[indice].tipo;
        },
        eliminar(indice) {
            if (confirm("Está seguro de eliminar?")) {
                this.lista.splice(indice, 1);
                this.limpiar();
            }
        }
    }

});