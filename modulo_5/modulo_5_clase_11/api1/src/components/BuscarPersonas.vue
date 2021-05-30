<template>
  <div>
    <select v-model="resultadosPagina">
      <option value="10">10 por página</option>
      <option value="25">25 por página</option>
      <option value="50">50 por página</option>
      <option value="75">75 por página</option>
      <option value="100">100 por página</option>
    </select>
    <select v-model="pagina">
      <option value="1">página 1</option>
      <option value="2">página 2</option>
      <option value="3">página 3</option>
      <option value="4">página 4</option>
      <option value="5">página 5</option>
      <option value="6">página 6</option>
    </select>
    <button @click="consultar">Consultar</button>
    <p>{{ mensajeError }}</p>
    <p>Página: {{ pagina }} Resultados: {{ resultados }}</p>
    <ol>
      <li v-for="usuario of usuarios" :key="usuario.login.uuid">
        {{ usuario.name.title }} {{ usuario.name.first }}
        {{ usuario.name.last }} {{usuario.email}} {{usuario.dob.age}}
        <img
          :src="usuario.picture.thumbnail"
          :alt="usuario.name.first + ' ' + usuario.name.last"
        />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resultadosPagina: 10,
      mensajeError: "",
      pagina: "1",
      resultados: 0,
      semilla: "",
      usuarios: [],
    };
  },
  methods: {
    consultar() {
      let uri = `https://randomuser.me/api/?results=${this.resultadosPagina}&page=${this.pagina}`;
      if (this.semilla) {
        uri += `&seed=${this.semilla}`;
      }
      fetch(uri).then((respuesta) => {
        if (respuesta.status == 200) {
          // OK!!! seguimos!!
          this.mensajeError = "";
          respuesta.json().then((datos) => {
            this.pagina = datos.info.page;
            this.resultados = datos.info.results;
            this.semilla = datos.info.seed;
            this.usuarios = datos.results;
          });
        } else {
          // Algo salió mal.
          this.mensajeError =
            "Error: " + respuesta.status + " " + respuesta.statusText;
        }
      });
    },
  },
};
</script>