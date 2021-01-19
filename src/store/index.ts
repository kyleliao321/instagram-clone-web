import Vue from 'vue'
import Vuex from 'vuex'
import { State } from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginUserId: undefined
  },
  getters: {
    isLogin (state: State): boolean {
      return state.loginUserId !== undefined
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
