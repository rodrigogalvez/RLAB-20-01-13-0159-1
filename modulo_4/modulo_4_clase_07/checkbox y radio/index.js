"use strict";

let app = new Vue({
    el:"#app",
    data: {
        opcionSimple:"",
        opcionSimple2:"",
        opcionMultiple1:"",
        opcionMultiple2:"",
        opcionMultiple3:"",
        opcionMultiple4:"",

    } ,
    methods: {
        test() {
            console.log(arguments);
        }
    }

})