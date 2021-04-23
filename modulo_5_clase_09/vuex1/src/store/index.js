import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // aquí van todas las variables.
    numero: 0
  },
  mutations: {
    // aquí van todos los métodos.
    // ! todos los métodos reciben un state.
    // en vez de "this." usamos "state."
    incrementar(state, n) {
      state.numero += n;
    }
  },
  actions: {
  },
  modules: {
  }
})
