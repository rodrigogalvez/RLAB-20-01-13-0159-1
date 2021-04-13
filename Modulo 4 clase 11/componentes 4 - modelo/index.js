"use strict";

Vue.component('semaforo', {
    // * La propiedad value se enlaza al checked en el input radio con una condición para activar/desactivar el radio según su valor.
    template: /*html*/`
    <div class="componentesemaforo">
        <h5>{{titulo}}</h5>
        <div class="panel">
            <label><input type="radio" v-bind:checked="value=='rojo'" v-on:input="oninput" value="rojo">{{rojo}}</label><br>
            <label><input type="radio" v-bind:checked="value=='amarillo'" v-on:input="oninput" value="amarillo">{{amarillo}}</label><br>
            <label><input type="radio" v-bind:checked="value=='verde'" v-on:input="oninput" value="verde">{{verde}}</label><br>
        </div>
        <div class="semaforo">
            <div :class="{colorrojo: value=='rojo'}"></div>
            <div :class="{coloramarillo: value=='amarillo' }"></div>
            <div :class="{colorverde: value=='verde'}"></div>
        </div>
    </div>`,
    data() {
        return {};
    },
    // Debemos pasar una propiedad llamada value para que funcione el v-model.
    props: ["titulo", "rojo", "amarillo", "verde", "value"],
    methods: {
        // y hay que lanzar un envento input para avisar a la app que el dato cambió.
        oninput(event) {
            console.log(event);
            this.$emit('input', event.target.value)
        }
    }
})

let app = new Vue({
    el: "#app",
    data: {
        // Notar que los datos importantes de la app siguen en la app, no en el componente.
        semaforos: [
            {
                titulo: "Temperaturas",
                rojo: "Muy alta temperatura",
                amarillo: "Temperatura alta",
                verde: "Temperatura normal",
                color: ""
            },
            {
                titulo: "Cambio de fondos AFP",
                rojo: "Cambiar de fondo AHORA",
                amarillo: "Cambiar de fondo proxima semana",
                verde: "Manterse en el mismo fondo",
                color: ""
            },
            {
                titulo: "Promedio de notas",
                rojo: "Alumnos repitiendo",
                amarillo: "Algunos podrían repetir",
                verde: "Todas las notas azules",
                color: ""
            }
        ]

    }
})
