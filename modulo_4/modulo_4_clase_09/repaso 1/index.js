"use strict";

new Vue({
    el: "#app",
    data: {
        saludo: "Hola Mundo!",
        fotoelegida: "",
        logo: "https://es.vuejs.org/images/logo.png",
        fotos: [
            {
                url: "https://es.vuejs.org/images/logo.png",
                titulo: "Logo VueJS"
            },
            {
                url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/500px-Angular_full_color_logo.svg.png",
                titulo: "Logo Angular"
            }
        ]
    },
    methods: {

    }
})