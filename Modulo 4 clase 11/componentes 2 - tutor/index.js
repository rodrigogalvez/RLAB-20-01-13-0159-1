"use strict";

Vue.component('semaforo',
    {
        // * /*html*/ es para que el código se destaque como HTML, con la extensión ES6 String HTML.
        template: /*html*/`<div class="componentesemaforo">
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
        props: ["rojo", "verde", "amarillo"],
        data() {
            return {
                color: ""
            };
        }
    }

)

let app = new Vue({
    el: "#app",
    data: {
        color: ""
    }
})