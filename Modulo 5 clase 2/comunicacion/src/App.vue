<template>
  <div id="app">
    <h1>Cuenta de bichos en la casa</h1>
    <contador
      v-for="contador of contadores"
      :key="contador.titulo"
      :titulo="contador.titulo"
      @incrementado="contadorActualizado"
    ></contador>
    <h1>Resumen:</h1>
    <p>Total de bichos: {{ totalBichos }}</p>
    <h2>Bichos por tipo</h2>
    <ul>
      <li v-for="contador of contadores" :key="contador.titulo">
        {{ contador.titulo }} = {{ contador.cuenta }}
      </li>
    </ul>
  </div>
</template>

<script>
import contador from "./components/contador";

export default {
  name: "App",
  components: {
    contador,
  },
  data() {
    return {
      contadores: [
        {
          titulo: "Moscas",
          cuenta: 0,
        },
        {
          titulo: "Zancudos",
          cuenta: 0,
        },
        {
          titulo: "Hormigas",
          cuenta: 0,
        },
      ],
    };
  },
  computed: {
    totalBichos() {
      return this.contadores.reduce(
        (acumulado, contador) => acumulado + contador.cuenta,
        0
      );
    },
  },
  methods: {
    contadorActualizado(titulo, cuenta) {
      // console.log(titulo, cuenta);
      let indice = this.contadores.findIndex(
        (contador) => contador.titulo == titulo
      );
      if (indice == -1) {
        this.contadores.push({ titulo: titulo, cuenta: cuenta });
      } else {
        this.contadores[indice].cuenta = cuenta;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
