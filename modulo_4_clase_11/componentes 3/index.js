"use strict";

Vue.component('semaforo', {
    template: /*html*/`
    <div class="componentesemaforo">
        <h5>{{titulo}}</h5>
        <div class="panel">
            <label><input type="radio" v-model="color" value="rojo">{{rojo}}</label><br>
            <label><input type="radio" v-model="color" value="amarillo">{{amarillo}}</label><br>
            <label><input type="radio" v-model="color" value="verde">{{verde}}</label><br>
        </div>
        <div class="semaforo">
            <div :class="{colorrojo: color=='rojo'}"></div>
            <div :class="{coloramarillo: color=='amarillo' }"></div>
            <div :class="{colorverde: color=='verde'}"></div>
        </div>
    </div>`,
    data() {
        return {};
    },
    // intentamos pasar color para que se modofique el modelo.
    // pero saldrá un error en al consola:
    // ! [Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "color"
    // ! found in
    // ! ---> <Semaforo>
    // !         <Root>
    props: ["titulo", "rojo", "amarillo", "verde", "color"]
})

new Vue({
    el: "#app",
    data: {
        // Notar que los datos importantes de la app siguen en la app, no en el componente.
        semaforos: [
            {
                titulo: "Temperaturas",
                rojo: "Muy alta temperatura",
                amarillo: "Temperatura alta",
                verde: "Temperatura normal",
                color: "" // * esta propiedad queremos modificarla con el v-model.
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
