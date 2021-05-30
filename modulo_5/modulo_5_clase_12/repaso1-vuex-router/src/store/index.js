import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [
      {
        codigo: 1,
        descripcion: "Chala de playa",
        precio: 1000
      },
      {
        codigo: 2,
        descripcion: "Zapatilla de lona",
        precio: 5000
      },
    ],
    otracosa: ""
  },
  mutations: {
    // CRUD
    modificarPrecio(state, payload) {
      let indice = state.productos.findIndex((producto) => producto.codigo == payload.codigo);
      if (indice > -1) {
        state.productos[indice].precio = payload.precio;
      }
    }
  },
  actions: {

  },
  modules: {
  }
})
