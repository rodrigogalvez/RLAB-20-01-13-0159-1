<template>
  <b-container>
    <!-- <p>{{ $route.params }}</p> -->
    <b-form @submit.prevent>
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
      <b-button @click="ejecutarCambioPrecio">Enviar</b-button>
      <b-button @click="cancelar">Cancelar</b-button>
    </b-form>
  </b-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return { nuevoPrecio: 0, codigoPrecio: 0 };
  },
  methods: {
    ...mapMutations(["modificarPrecio"]),
    ejecutarCambioPrecio() {
      this.modificarPrecio({
        codigo: this.codigoPrecio,
        precio: this.nuevoPrecio,
      });
      this.$router.push({
        path: `/productos`,
      });
    },
    cancelar() {
      this.$router.push({
        path: `/productos`,
      });
    },
  },
  mounted() {
    // console.log(this.$route); // <- correcto!!!
    // console.log(this.$router);
    this.nuevoPrecio = Number(this.$route.params.precio);
    this.codigoPrecio = Number(this.$route.params.codigo);
  },
};
</script>