import Vue from 'vue'
import store from '../store'
import VueRouter, { Route, RouteConfig } from 'vue-router'
import Feeds from '../views/Feeds/Feeds.vue'
import Home from '../views/Home/Home.vue'
import Register from '../views/Register/Register.vue'
import Login from '../views/Login/Login.vue'
import { GetterTypes } from '@/store/getters/getters-types'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/feeds',
    name: 'Feeds',
    component: Feeds,
    meta: {
      requiredAuth: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// setup interceptor for authentication checking
// if given client is not logged in yet, redirect to login page
router.beforeEach((to: Route, from: Route, next) => {
  if (to.matched.some(record => record.meta.requiredAuth)) {
    if (!store.getters[GetterTypes.IS_LOGIN]) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
