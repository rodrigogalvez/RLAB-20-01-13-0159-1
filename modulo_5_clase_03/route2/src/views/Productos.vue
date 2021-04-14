<template>
  <div>
    <div v-if="!$route.params.nombre">
      <h1>Nuestros productos</h1>
      <ul>
        <li v-for="producto of listado" :key="producto.nombre">
          <router-link
            :to="{ name: $route.name, params: { nombre: producto.nombre } }"
            >{{ producto.nombre }} - {{ producto.precio }}</router-link
          >
        </li>
      </ul>
    </div>
    <div v-if="producto">
      <h1>Producto elegido {{ $route.params.nombre }}</h1>
      <p>Nombre del producto: {{ producto.nombre }}</p>
      <p>Precio: {{ producto.precio }}</p>
      <p>Foto: <img :src="producto.foto" alt="" /></p>
      <router-link :to="{ name: $route.name }">Volver</router-link>
    </div>
    <div v-if="$route.params.nombre && !producto">
      <p>Producto elegido {{ $route.params.nombre }} no existe.</p>
      <router-link :to="{ name: $route.name }">Volver</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listado: [
        {
          nombre: "Capuccino",
          precio: 1500,
          foto:
            "https://cdn.pixabay.com/photo/2015/05/24/18/21/coffee-782171_960_720.jpg",
        },
        {
          nombre: "Medialuna",
          precio: 1000,
          foto:
            "https://cdn.pixabay.com/photo/2016/07/11/12/12/croissants-1509556_960_720.jpg",
        },
        {
          nombre: "Torta",
          precio: 3000,
          foto:
            "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_960_720.jpg",
        },
      ],
    };
  },
  computed: {
    producto() {
      let indice = this.listado.findIndex(
        (producto) =>
          producto.nombre.toLowerCase() ==
          this.$route.params.nombre?.toLowerCase()
      );
      if (indice == -1) {
        return undefined;
      } else {
        return this.listado[indice];
      }
    },
  },
};
</script>
