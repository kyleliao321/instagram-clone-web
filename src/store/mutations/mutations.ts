import { MutationTree } from 'vuex'
import { State } from '../state'
import { Mutations, MutationTypes } from './mutation-types'

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_AUTH_TOKEN] (state, payload) {
    state.authToken = payload
  },
  [MutationTypes.SET_LOGIN_USER_ID] (state, payload) {
    state.loginUserId = payload
  },
  [MutationTypes.SET_LOGIN_USER_PROFILE] (state, payload) {
    state.loginUserProfile = payload
  },
  [MutationTypes.SET_FEEDS] (state, payload) {
    state.feeds = payload
  },
  [MutationTypes.SET_BROWSING_HOME_UESR_ID] (state, payload) {
    state.browsingHomeUserId = payload
  },
  [MutationTypes.SET_BROWSING_USER_PROFILE] (state, payload) {
    state.browsingUserProfile = payload
  },
  [MutationTypes.SET_BROWSING_USER_POSTS] (state, payload) {
    state.browsingUserPosts = payload
  },
  [MutationTypes.RESET_ALL] (state) {
    state.authToken = undefined
    state.loginUserId = undefined
    state.loginUserProfile = undefined
    state.feeds = []
    state.browsingHomeUserId = undefined
    state.browsingUserProfile = undefined
    state.browsingUserPosts = []
    state.loginUserFollowings = []
  },
  [MutationTypes.SET_SEARCH_USER_PROFILE] (state, payload) {
    state.searchedUserProfile = payload
  },
  [MutationTypes.SET_LOGIN_USER_FOLLOWINGS] (state, payload) {
    state.loginUserFollowings = payload
  }
}
