"use strict" ;

let app = new Vue({
    el:"#app",
    data: {
        productos:[
            {
                nombre:"Manzana",
                precio: 100
            }
        ],
        nuevoNombre: "",
        nuevoPrecio: ""
    },
    methods:{
        agregar(){
            this.productos.push({
                nombre: this.nuevoNombre,
                precio: this.nuevoPrecio
            })
            this.nuevoNombre="";
            this.nuevoPrecio="";
            this.$refs.primeraEntrada.focus();
        }
    },
    mounted() {
        this.nuevoNombre=(new Date()).toString();
    }
})