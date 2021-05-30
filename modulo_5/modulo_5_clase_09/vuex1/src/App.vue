<template>
  <div id="app">
    <h1>Número general</h1>
    <!-- <p>Número: {{ $store.state.numero }}</p>
    <button @click="incrementarGlobal(1)">+</button>
    <button @click="incrementarGlobal(2)">++</button>
    <button @click="incrementarGlobal(3)">+++</button> -->
    <p>Número: {{ numero }}</p>
    <button @click="incrementar(1)">+</button>
    <button @click="incrementar(2)">++</button>
    <button @click="incrementar(3)">+++</button>
    <hijo></hijo>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Hijo from "./components/Hijo.vue";

export default {
  name: "App",
  components: { Hijo },
  computed: {
    ...mapState(["numero"]),
  },
  methods: {
    // incrementarGlobal(n) {
    //   this.$store.commit("incrementar", n);
    // },
    ...mapMutations(["incrementar"]),// --> this.$store.commit("incrementar", n);
  },
};
</script>

<style>
</style>
