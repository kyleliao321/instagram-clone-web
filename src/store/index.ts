import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { Actions, ActionTypes } from './types/action-types'
import { Getters, GetterTypes } from './types/getters-types'
import { Mutations, MutationTypes } from './types/mutation-types'
import { State } from './types/state-types'

Vue.use(Vuex)

const state: State = {
  loginUserId: undefined
}

const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.IS_LOGIN] (state) {
    return state.loginUserId !== undefined
  }
}

const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOGIN_USER_ID] (state, payload) {
    state.loginUserId = payload
  }
}

const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN] (context) {
    context.commit(MutationTypes.SET_LOGIN_USER_ID, 'mockId')
  }
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
  }
})
