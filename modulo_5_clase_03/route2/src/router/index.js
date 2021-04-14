import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '../views/Inicio.vue'
import Productos from '../views/Productos.vue'
import Nosotros from '../views/Nosotros.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/productos/:nombre?',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    component: Nosotros
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "nosotros" */ '../views/Nosotros.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
