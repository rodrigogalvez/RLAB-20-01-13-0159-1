"use strict";

let app = new Vue({
    el: "#app",
    data: {
        color:"",
        saludo: "SEMAFORO"
    },
    computed: {
        colorconvertido() {
            switch (this.color) {
                case "verde":
                    return "green";
                case "amarillo":
                    return "yellow";
                case "rojo":
                    return "red";
                default: 
                    return "black";
            }

        }
    }
})