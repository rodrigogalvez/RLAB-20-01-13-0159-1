"use strict";

Vue.component("listaproductos", {
    template: /*html*/`
        <div class="listaproductos">
            <h1>Listado de productos</h1>
            <ol>
                <li v-for="(producto,indice) of productos">
                    {{producto.nombre}} - {{producto.precio}} 
                    <button class="editar" @click="avisar(indice)">&#9997;</button>
                </li>
            </ol>
        </div>
    `,
    data() {
        return {};
    },
    props: ['productos'],
    methods: {
        avisar(indice) {
            this.$emit('aviso', indice);
        }
    }
})

Vue.component("crearproducto", {
    template: /*html*/`
        <div class="crearproducto">
            <form @submit.prevent>
                <label>Nombre producto</label>
                <input type="text" maxlength="20" v-model="nombre">
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" v-model.number="precio">
                <br>
                <button @click="agregar()" :disabled="!sepuedeagregar">Grabar</button>
            </form>
        </div>
    `,
    data() {
        return {
            nombre: "",
            precio: 1
        };
    },
    props: ["productos"],
    computed: {
        sepuedeagregar() {
            return this.nombre.length > 3;
        }
    },
    methods: {
        agregar() {
            this.productos.push(
                {
                    nombre: this.nombre,
                    precio: this.precio
                }
            )
        }
    }
})

Vue.component("modificarproducto", {
    template: /*html*/`
        <div class="modificarproducto">
            <form @submit.prevent v-if="indice>=0">
                <label>Nombre producto</label>
                <input type="text" maxlength="20" 
                    v-model="productos[indice].nombre">
                <br>
                <label>Precio</label>
                <input type="number" min="1" max="99999" 
                    v-model.number="productos[indice].precio">
                <br>
                <button @click="modificar()">Grabar</button>
            </form>
            <p v-else>No ha seleccionado un produto para modificar</p>
        </div>
    `,
    data() {
        return {

        };
    },
    props: ["productos", "indice"],
    methods: {
        modificar() {
            this.$emit('finmodificacion');
        }
    }
})

let app = new Vue({
    el: "#app",
    data: {
        productos: [
            {
                nombre: "Lápiz",
                precio: 50
            },
            {
                nombre: "Corrector",
                precio: 2000
            },
            {
                nombre: "Regla",
                precio: 500
            }
        ],
        lenguetas: [
            {
                componente: "listaproductos",
                titulo: "Productos"
            },
            {
                componente: "crearproducto",
                titulo: "Nuevo"
            },
            {
                componente: "modificarproducto",
                titulo: "Modificar"
            }
        ],
        lenguetaactual: undefined,
        modificandoIndice: -1
    },
    methods: {
        cambiarLengueta(lengueta) {
            this.lenguetaactual = lengueta;
        },
        sepidemodificar(indice) {
            this.modificandoIndice = indice;
            this.lenguetaactual = this.lenguetas[2];
        },
        modificacionfinalizada() {
            this.modificandoIndice = -1;
            this.lenguetaactual = this.lenguetas[0];
        }

    },
    mounted() {
        this.lenguetaactual = this.lenguetas[0];
    }
})
