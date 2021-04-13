"use strict";

Vue.component('semaforo', {
    // * /*html*/ es para que el código se destaque como HTML, con la extensión ES6 String HTML.
    // Notar que ahora el v-model del input radio está enlazado con una propiedad del prop configuracion
    template: "#semaforo",
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
                color: "amarillo" // esta propiedad ahora si se acutualiza.
            },
            {
                titulo: "Cambio de fondos AFP",
                rojo: "Cambiar de fondo AHORA",
                amarillo: "Cambiar de fondo proxima semana",
                verde: "Manterse en el mismo fondo",
                color: "rojo"
            },
            {
                titulo: "Promedio de notas",
                rojo: "Alumnos repitiendo",
                amarillo: "Algunos podrían repetir",
                verde: "Todas las notas azules",
                color: "verde"
            }
        ]

    }
})
