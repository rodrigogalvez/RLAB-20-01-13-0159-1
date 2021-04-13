"use strict";

// Plantilla ejemplo de componente:
Vue.component('nombrecomponente',{
    template: /*html*/`
        <div>HTML del componente</div>
    `,
    data() { // * el modelo (data) ahora es una función.
        return {};
    },
    props: ['parametro1','parametro2','etc']
})

// Esto crea un componente global llamado semaforo.
Vue.component('semaforo', {
    // * /*html*/ es para que el código se destaque como HTML, con la extensión ES6 String HTML.
    // template: es el formato del componente en HTML
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
    // el modelo se crea ahora con una función que retorna un objeto.
    data() {
        return {
            color: ""
        };
    },
    // en props se colocan los atributos o parámetros del componente.
    props: ["titulo", "rojo", "amarillo", "verde"]
})

// ! Importante: declarar la app después de declarar los componentes.
new Vue({
    el: "#app",
    // Ya no tenemos nada en el modelo (DATA).
    data: {}
})
