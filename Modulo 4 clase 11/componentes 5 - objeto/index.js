"use strict";

Vue.component('semaforo', {
    // * /*html*/ es para que el código se destaque como HTML, con la extensión ES6 String HTML.
    // Notar que ahora el v-model del input radio está enlazado con una propiedad del prop configuracion
    template: /*html*/`
    <div class="componentesemaforo">
        <h5>{{configuracion.titulo}}</h5>
        <div class="panel">
            <label><input type="radio" v-model="configuracion.color" value="rojo">{{configuracion.rojo}}</label><br>
            <label><input type="radio" v-model="configuracion.color" value="amarillo">{{configuracion.amarillo}}</label><br>
            <label><input type="radio" v-model="configuracion.color" value="verde">{{configuracion.verde}}</label><br>
        </div>
        <div class="semaforo">
            <div :class="{colorrojo: configuracion.color=='rojo'}"></div>
            <div :class="{coloramarillo: configuracion.color=='amarillo' }"></div>
            <div :class="{colorverde: configuracion.color=='verde'}"></div>
        </div>
    </div>`,
    data() {
        return {};
    },
    // Ahora solo necesitamos el prop configuracion. Ya no hay binding ni métodos, solo v-model.
    props: ["configuracion"]
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
                color: "" // esta propiedad ahora si se acutualiza.
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
