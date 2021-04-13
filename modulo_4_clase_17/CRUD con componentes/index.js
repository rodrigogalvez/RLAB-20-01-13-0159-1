"use strict";

Vue.component('listaAlumnos', {
    template: /*html*/`
        <div class="component border border-top-0 rounded-bottom p-1">
            <h4>Listado de alumnos</h4>
            <form @submit.prevent>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <label class="input-group-text"><i class="bi bi-search"></i></label>
                        </div>
                        <input type="search"
                               v-model="filtro"
                               class="form-control">
                    </div>
                </div>
            </form>
            <div class="card overflow-auto"
                 style="height: 60vh;">
                <div class="card-header sticky-top bg-light">
                    Listado de alumnos
                    <div class="btn-group float-right"
                             role="group">
                            <button @click="$emit('agregar')"
                                    class="btn btn-primary"><i class="bi bi-person-plus-fill"></i></button>
                        </div>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"
                        v-for="(alumno, indice) of alumnos"
                        v-if="(alumno.nombre+alumno.apellido).toUpperCase().includes(filtro.toUpperCase())">
                        {{indice}} - {{alumno.nombre}} {{alumno.apellido}} ({{alumno.tipo}})
                        <div class="btn-group float-right"
                             role="group">
                            <button @click="$emit('editar',indice)"
                                    class="btn btn-warning"><i class="bi bi-person-bounding-box"></i></button>
                            <button @click="$emit('eliminar',indice)"
                                    class="btn btn-danger"><i class="bi bi-person-x-fill"></i></button>
                        </div>
                    </li>
                </ul>
                <div class="card-footer sticky-bottom bg-light">
                    Fin de listado de alumnos
                </div>
            </div>
        </div>    
    `,
    data() {
        return {
            filtro: ""
        }
    },
    props: ['alumnos']
})

Vue.component('formularioAlumno', {
    template: /*html*/`
        <div class="component border border-top-0 rounded-bottom p-1">
            <h4>Formulario de edición</h4>
            <div class="row">
                <div class="col">
                    <div class="alert alert-info"
                        role="alert">
                        Modo de operación: {{modoOperacion}}
                        <span v-if="indice!=-1"> editando al: {{indice}}</span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-sm-6 col-md-8 col-lg-8 col-xl-8">
                    <form @submit.prevent="">
                        <div class="form-group">
                            <label>Nombre:</label>
                            <input type="text"
                                   v-model="nombre"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Apellido:</label>
                            <input type="text"
                                   v-model="apellido"
                                   class="form-control">
                        </div>
                        <div class="form-group">
                            <label>Tipo:</label>
                            <select class="custom-select"
                                    v-model="tipo">
                                <option value=""
                                        selected>Elija tipo de alumno</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Online">Online</option>
                                <option value="Libre">Libre</option>
                            </select>
                        </div>
                    </form>
                </div>
                <div class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                    <label>Errores en el formulario:</label>
                    <div class="alert alert-success"
                         v-if="errores.length==0">
                        El estudiante se puede grabar
                    </div>
                    <div class="alert alert-danger"
                         role="alert"
                         v-for="e in errores">
                        {{e}}
                    </div>
                </div>
            </div>
            <div class="row justify-content-end">
                <div class="col">
                </div>
                <div class="col-auto">
                    <div class="btn-group"
                        role="group">
                        <button v-if="indice==-1"
                                @click="agregar"
                                :disabled="errores.length>0"
                                class="btn btn-primary"><i class="bi bi-person-plus-fill"></i></button>
                        <button v-else
                                @click="guardar"
                                :disabled="errores.length>0"
                                class="btn btn-primary"><i class="bi bi-person-check-fill"></i></button>
                        <button @click="cancelar"
                                class="btn btn-secondary"><i class="bi bi-x-square-fill"></i></button>
                    </div>
                </div>
            </div>

        </div>
    `,
    data() {
        return {
            nombre: "",
            apellido: "",
            tipo: ""
        };
    },
    props: ["alumnos", "indice"],
    computed: {
        modoOperacion() {
            if (this.indice == -1)
                return "AGREGAR";
            else
                return "EDICIÓN";
        },
        errores() {
            let resultado = [];
            if (this.nombre == "")
                resultado.push("Nombre en blanco");
            if (this.apellido == "")
                resultado.push("Apellido en blanco");
            if (this.tipo == "")
                resultado.push("Tipo en blanco");
            return resultado;
        }
    },
    methods: {
        cancelar() {
            this.$emit('terminado');
        },
        agregar() {
            this.alumnos.push({
                nombre: this.nombre,
                apellido: this.apellido,
                tipo: this.tipo
            })
            this.$emit('terminado');
        },
        guardar() {
            this.alumnos[this.indice].nombre = this.nombre;
            this.alumnos[this.indice].apellido = this.apellido;
            this.alumnos[this.indice].tipo = this.tipo;
            this.$emit('terminado');
        }
    },
    mounted() {
        if (this.indice == -1) {
            this.nombre = "";
            this.apellido = "";
            this.tipo = "";
        } else {
            this.nombre = this.alumnos[this.indice].nombre;
            this.apellido = this.alumnos[this.indice].apellido;
            this.tipo = this.alumnos[this.indice].tipo;
        }
    }
})

Vue.component('eliminarAlumno', {
    template: /*html*/`
        <div class="component border border-top-0 rounded-bottom p-1">
            <h4>Eliminar alumno</h4>
            <div class="row">
                <div class="col">
                    <div class="alert alert-danger" role="alert">
                        ¿Está seguro de eliminar al alumno {{alumnos[indice].nombre}} {{alumnos[indice].apellido}} ({{alumnos[indice].tipo}})?
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                </div>
                <div class="col-auto">
                    <div class="btn-group float-right"
                        role="group">
                        <button @click="proceder"
                                class="btn btn-danger"><i class="bi bi-person-x-fill"></i></button>
                        <button @click="cancelar"
                                class="btn btn-secondary"><i class="bi bi-x-square-fill"></i></button>
                    </div>
                </div>
            </div>
        </div>
    `,
    props: ["alumnos", "indice"],
    methods: {
        proceder() {
            this.alumnos.splice(this.indice, 1);
            this.$emit('terminado');
        },
        cancelar() {
            this.$emit('terminado');
        }
    }
})

let app = new Vue({
    el: "#app", 
    data: { 
        alumnos: [
            {
                nombre: "Rodrigo",
                apellido: "Galvez",
                tipo: "Presencial"
            },
            {
                nombre: "Alex",
                apellido: "Carrasco",
                tipo: "Presencial"
            },
            {
                nombre: "Cristina",
                apellido: "Núñez",
                tipo: "Presencial"
            },
            {
                nombre: "Andrea",
                apellido: "Oyarce",
                tipo: "Presencial"
            },
            {
                nombre: "Hithamar",
                apellido: "Duran",
                tipo: "Presencial"
            },
            {
                nombre: "Javiera",
                apellido: "Krammle",
                tipo: "Presencial"
            },
            {
                nombre: "Joaquin",
                apellido: "Jaramillo",
                tipo: "Presencial"
            },
            {
                nombre: "Jorge",
                apellido: "Galleguillos",
                tipo: "Presencial"
            },
            {
                nombre: "Mauricio",
                apellido: "Fernández",
                tipo: "Presencial"
            },
            {
                nombre: "Nicolás",
                apellido: "Zapata",
                tipo: "Presencial"
            },
            {
                nombre: "Paola",
                apellido: "Gill",
                tipo: "Presencial"
            },
            {
                nombre: "Rodrigo",
                apellido: "Carrasco",
                tipo: "Presencial"
            },
            {
                nombre: "Leandro",
                apellido: "Venegas",
                tipo: "Presencial"
            }
        ],
        indice: -1,
        modo: 3
    },
    methods: { 
        modoVisualizacion() {
            this.indice = -1;
            this.modo = 0
        },
        modoAgregar() {
            this.indice = -1;
            this.modo = 1;
        },
        modoEdicion(indice) {
            this.indice = indice;
            this.modo = 1;
        },
        modoEliminacion(indice) {
            this.indice = indice;
            this.modo = 2;
        }
    }

});