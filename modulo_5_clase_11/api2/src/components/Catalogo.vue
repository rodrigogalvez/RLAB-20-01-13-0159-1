<template>
  <div>
    <img src="../assets/logo.png" />
    <button @click="traerCatalogo">Traer catálogo</button>
    <button @click="traerCatalogoConAwait">Traer catálogo con await</button>
    <ul>
      <li v-for="producto of listado" :key="producto.codigo">
        {{ producto.codigo }}
        {{ producto.descripcion }}
        {{ producto.precio }}
      </li>
    </ul>
    <hr />
    <ul>
      <li v-for="producto of listado2" :key="producto.codigo">
        {{ producto.codigo }}
        {{ producto.descripcion }}
        {{ producto.precio }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listado: [],
      listado2: [],
      mensajeError: "",
    };
  },
  methods: {
    traerCatalogoConAwait: async function () {
      // Para el caso felíz, se puede usar aync/await para no escribir tanto código.
      let resultado = await fetch("/data/catalogo.json");
      this.listado = await resultado.json();
    },
    traerCatalogo() {
      fetch("/data/catalogo.json").then((resultado) => {
        if (resultado.status == 200) {
          resultado.json().then((datos) => {
            this.listado = datos;
          });
        } else {
          this.mensajeError = resultado.status + " " + resultado.statusText;
        }
      });
      fetch("/data/catalogo2.json").then((resultado) => {
        if (resultado.status == 200) {
          resultado.json().then((datos) => {
            this.listado2 = datos;
          });
        } else {
          this.mensajeError = resultado.status + " " + resultado.statusText;
        }
      });
    },
  },
};
</script>