import { MutationTree } from 'vuex'
import { State } from '../state'
import { Mutations, MutationTypes } from './mutation-types'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_LOGIN_USER_ID] (state, payload) {
    state.loginUserId = payload
  },
  [MutationTypes.SET_FEEDS] (state, payload) {
    state.feeds = payload
  }
}
