/*
  Plan de trabajo:

  TODO: Incluir BootstrapVue -> LISTO!
  TODO: Instalar vuefire -> LISTO! (FIRESTORE)
  TODO: CRUD para la cafetería. -> Haciendo
  TODO:   Crear la base de datos en Firebase. -> haciendo
  TODO:   Cada ítem: nombre, descripción, precio y fotografía.
  TODO:   Publicar en Firebase para usar en otros equipos.

*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
  router:router,
  render: h => h(App)
}).$mount('#app')
