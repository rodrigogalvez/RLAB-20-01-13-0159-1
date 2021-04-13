"use strict";

let app = new Vue({
    el: "#app",
    data: {
        lista: [
            {
                especie: "Perro",
                nombre: "Benyi",
                edad: 13,
                sexo: "Macho"
            },
            {
                especie: "Perro",
                nombre: "Kira",
                edad: 6,
                sexo: "Hembra"
            },
            {
                especie: "Gato",
                nombre: "CATrina",
                edad: 3,
                sexo: "Hembra"
            }
        ],
        nuevaespecie: "",
        nuevonombre: "",
        nuevaedad: "",
        nuevosexo: ""
    },
    methods: {
        agregar() {
            this.lista.push({
                especie: this.nuevaespecie,
                nombre: this.nuevonombre,
                edad: this.nuevaedad,
                sexo: this.nuevosexo
            });
            this.nuevaespecie="";
            this.nuevonombre="";
            this.nuevaedad="";
            this.nuevosexo="";
        }
    }
});