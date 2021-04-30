<template>
  <b-container>
    Aquí aparecerán los productos...
    <div v-for="producto of productos" :key="producto.codigo">
      {{ producto.descripcion }}
      {{ producto.precio }}
      <b-button @click="abrirFormularioPrecio(producto.codigo, producto.precio)"
        >Cambiar precio</b-button
      >
    </div>
  </b-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["productos"]),
  },
  methods: {
    abrirFormularioPrecio(codigo, precio) {
      // this.$router.push( { <-- esto funciona pero pasa los parámetros como TEXTO.
      //   path: `/cambioprecio/${codigo}/${precio}`
      // })
      // this.$router.push({ 
      //   path: `/cambioprecio`, <-- no funciona.
      //   params: { <-- no puedes usar params+path
      //     codigo: codigo,
      //     precio: precio,
      //   },
      // });
      this.$router.push({ // esto funciona y pasa los parámetros con el tipo de dato correcto. :)
        name: `CambioPrecio`,
        params: {
          codigo: codigo,
          precio: precio
        },
      });
    },
  },
};
</script>