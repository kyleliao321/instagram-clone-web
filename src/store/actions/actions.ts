import { ActionTree } from 'vuex'
import { MutationTypes } from '../mutations/mutation-types'
import { State } from '../state'
import { Actions, ActionTypes } from './action-types'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN] (context, param) {
    setTimeout(() => {
      context.commit(MutationTypes.SET_LOGIN_USER_ID, param.userName + param.userName)
    }, 1000)
  },
  async [ActionTypes.REGISTER] (context, param) {
    setTimeout(() => {
      // make an api call
    }, 1000)
    return true
  }
}
