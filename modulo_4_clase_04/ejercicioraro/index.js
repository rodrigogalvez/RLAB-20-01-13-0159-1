"use strict";

import util from './util.js';

console.log("test");
console.log(util.generar_entero());

let app = new Vue({
    el:"#app",
    data: {

    },
    computed: {
        decision() {
            return util.generar_desicion();
        }
    }

})

console.log(app.decision)