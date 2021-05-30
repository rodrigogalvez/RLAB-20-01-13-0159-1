<template>
  <div id="app">
    <h1>Listado de productos</h1>
    <ul>
      <li v-for="producto of productos" :key="producto.id">
        {{ producto.nombre }} - {{ producto.precio }}
        <button @click="modificar(producto.id)">Modificar</button>
        <button @click="eliminar(producto.id)">Eliminar</button>
      </li>
    </ul>
    <h2>Nuevo producto</h2>
    <form @submit.prevent>
      <label>Nombre</label>
      <input type="text" v-model="nombre" /><br />
      <label>Precio</label>
      <input type="number" v-model.number="precio" /><br />
      <button v-if="idmodificando" @click="agregar">Modificar</button>
      <button v-else @click="agregar">Agregar</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBwmNhcxmuTFlYtWhCfGmXiV4UVyBPMCtk",
  authDomain: "reinventate159v1.firebaseapp.com",
  projectId: "reinventate159v1",
  storageBucket: "reinventate159v1.appspot.com",
  messagingSenderId: "474385373949",
  appId: "1:474385373949:web:f4678fbff2a112d4d9fc94",
};

const db = firebase.initializeApp(firebaseConfig).firestore();

export default {
  name: "App",
  components: {},
  data() {
    return {
      nombre: "",
      precio: 0,
      idmodificando: "",
      productos: [],
    };
  },
  methods: {
    agregar() {
      // debido a que productos es un arreglo, tiene binding unidireccional.
      // así que para agregar a la colección productos, en vez de hacer push:
      // this.productos.push({ nombre:this.nombre,precio:this.precio});
      // tengo que hacer un add:
      if (this.idmodificando) {
        db.collection("productos").doc(this.idmodificando).set({
          nombre: this.nombre,
          precio: this.precio,
        });
        this.idmodificando = "";
      } else {
        db.collection("productos").add({
          nombre: this.nombre,
          precio: this.precio,
        });
      }
      this.nombre = "";
      this.precio = 0;
    },
    modificar(id) {
      db.collection("productos")
        .doc(id)
        .get()
        .then((snapshot) => {
          if (snapshot.exists) {
            let data = snapshot.data();
            this.nombre = data.nombre;
            this.precio = data.precio;
            this.idmodificando = id;
          }
        });
    },
    eliminar(id) {
      db.collection("productos").doc(id).delete();
    },
  },
  firestore: {
    // esto es un enlace (binding) unidireccional desde la BD hasta el arreglo productos.
    // eso significa que nos mostrará todo lo que se agrega a la colección de la bd,
    // pero lo que agregamos al arreglo no se pasa a la base de datos.
    productos: db.collection("productos"),
  },
};
</script>

<style>
</style>
