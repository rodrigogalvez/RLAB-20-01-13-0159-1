"use strict";

Vue.component('pingponginterno', {
    template: "#pingponginterno",
    data() {
        return {
            elegido: 1
        };
    },
    methods: {
        mostrarOtro() {
            this.elegido = this.elegido == 1 ? 2 : 1;
        }
    }
})

Vue.component('saltador', {
    template: "#saltador",
    data() {
        return {
            x: 0,
            y: 0
        }
    },
    methods: {
        cambiar() {
            this.x = Math.trunc(Math.random() * 600);
            this.y = Math.trunc(Math.random() * 600);
        }
    }

})

let app = new Vue({
    el: "#app",
    data: {}
})
