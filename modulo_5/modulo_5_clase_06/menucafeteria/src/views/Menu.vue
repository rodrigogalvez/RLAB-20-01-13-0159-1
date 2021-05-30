<template>
  <div>
    <b-card no-body header="Menu de la cafetería Perrote">
      <b-list-group flush>
        <b-list-group-item v-for="producto of productos" :key="producto.id"
          >{{ producto.nombre }} - {{ producto.precio }}</b-list-group-item
        >
      </b-list-group>
    </b-card>
    <hr />
    <b-form @submit.prevent>
      <label>Nombre:</label>
      <b-form-input
        type="text"
        placeholder="Nombre del producto"
        v-model="nombre"
      ></b-form-input>
      <b-form-text>Nombre del producto</b-form-text>
      <label>Descripción:</label>
      <b-form-textarea
        row="3"
        max-rows="8"
        placeholder="Descripción del producto"
        v-model="descripcion"
      ></b-form-textarea>
      <b-form-text>Descripción larga del producto</b-form-text>
      <label>Precio:</label>
      <b-form-input
        type="number"
        placeholder="Precio del producto"
        v-model.number="precio"
      ></b-form-input>
      <b-form-text>Precio del producto</b-form-text>
      <label>Foto:</label>
      <b-form-input
        type="url"
        placeholder="Foto del producto"
        v-model="foto"
      ></b-form-input>
      <b-form-text>Foto del producto</b-form-text>
      <b-button @click="grabar()">Grabar</b-button>
    </b-form>
  </div>
</template>

<script>
import { db } from "@/db.js";

export default {
  name: "Menu",
  data() {
    return {
      productos: [],
      nombre: "",
      precio: 0,
      descripcion: "",
      foto: "",
    };
  },
  methods: {
    grabar() {
      db.collection("productos").add({
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        foto: this.foto,
      });
      this.nombre = "";
      this.descripcion = "";
      this.precio = 0;
      this.foto = "";
    },
  },
  firestore: {
    productos: db.collection("productos"),
  },
};
</script>
