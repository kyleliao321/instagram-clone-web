import { GetterTree } from 'vuex'
import { Getters, GetterTypes } from './getters-types'
import { State } from '../state'

export const getters: GetterTree<State, State> & Getters = {
  [GetterTypes.IS_LOGIN] (state) {
    return state.loginUserId !== undefined
  },
  [GetterTypes.FEEDS] (state) {
    return state.feeds
  },
  [GetterTypes.BROWSING_USER_PROFILE] (state) {
    return state.browsingUserProfile
  },
  [GetterTypes.BROWSING_USER_POSTS] (state) {
    return state.browsingUserPosts
  }
}
