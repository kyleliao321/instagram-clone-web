import { GetterTree } from 'vuex'
import { Getters, GetterTypes } from './getters-types'
import { State } from '../state'

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.IS_LOGIN] (state) {
    return state.loginUserId !== undefined
  }
}
