import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Feeds from '../views/Feeds/Feeds.vue'
import Home from '../views/Home/Home.vue'
import Register from '../views/Register/Register.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feeds',
    name: 'Feeds',
    component: Feeds
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
