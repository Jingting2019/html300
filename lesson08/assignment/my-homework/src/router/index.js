import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/history',
    name: 'History',
    // route level code-splitting
    // this generates a separate chunk (history.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "history" */ '../views/History.vue')
  },
  {
    path: '/desertification',
    name: 'Desertification',
    component: () => import(/* webpackChunkName: "desertification" */ '../views/Desertification.vue')
  },
  {
    path: '/recovery',
    name: 'Recovery',
    component: () => import(/* webpackChunkName: "recovery" */ '../views/Recovery.vue')
  }
]

const router = new VueRouter({

  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
