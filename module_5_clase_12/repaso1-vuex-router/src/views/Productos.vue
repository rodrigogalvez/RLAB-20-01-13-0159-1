<template>
  <b-container>
    Aquí aparecerán los productos...
    <!-- <div v-for="producto of $store.state.productos" :key="producto.codigo"> -->
    <div v-for="producto of productos" :key="producto.codigo">
      {{ producto.descripcion }}
      {{ producto.precio }}
      <b-button @click="abrirFormularioPrecio(producto.codigo, producto.precio)"
        >Cambiar precio</b-button
      >
      <b-button @click="cambioMula(producto)">Cambio mula</b-button>
    </div>
    <b-form @submit.prevent="ejecutarCambioPrecio"
        v-if="codigoPrecio"
    >
      <b-form-group
        label="Nuevo precio"
        description="Nuevo precio del producto"
      >
        <b-form-input
          v-model.number="nuevoPrecio"
          type="number"
          placeholder="Nuevo precio"
        ></b-form-input>
      </b-form-group>
    </b-form>
  </b-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return { nuevoPrecio: 0, codigoPrecio: 0 };
  },
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    ...mapMutations(["modificarPrecio"]),
    abrirFormularioPrecio(codigo, precio) {
      this.codigoPrecio = codigo;
      this.nuevoPrecio = precio;
    },
    ejecutarCambioPrecio() {
      this.modificarPrecio({
        codigo: this.codigoPrecio,
        precio: this.nuevoPrecio,
      });
      this.codigoPrecio = 0;
      this.nuevoPrecio = 0;
    },

    cambioMula(producto) {
        // producto.precio=555;
           this.modificarPrecio({
        codigo: producto.codigo,
        precio: 555,
      })
    }
  },
};
</script>