import { GetFeedsInput } from '@/api/types'
import { ActionTree } from 'vuex'
import { MutationTypes } from '../mutations/mutation-types'
import { State } from '../state'
import { Actions, ActionTypes } from './action-types'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN] (context, param) {
    const loginPayload = await context.state.http.login({ ...param })
    if (loginPayload !== undefined) {
      const userProfile = await context.state.http.getUserProfile({ userId: loginPayload.credential.userId })
      context.commit(MutationTypes.SET_AUTH_TOKEN, loginPayload.credential.jwt)
      context.commit(MutationTypes.SET_LOGIN_USER_ID, loginPayload.credential.userId)
      context.commit(MutationTypes.SET_LOGIN_USER_PROFILE, userProfile)
      return loginPayload.credential.userId
    }
    throw new Error('Network Error')
  },

  async [ActionTypes.REGISTER] (context, param) {
    const result = await context.state.http.register({ ...param })
    return result
  },

  async [ActionTypes.FETCH_FEEDS] (context) {
    if (context.state.loginUserId !== undefined) {
      const req: GetFeedsInput = {
        userId: context.state.loginUserId,
        loginUserId: context.state.loginUserId
      }
      const feeds = await context.state.http.getFeeds(req)
      context.commit(MutationTypes.SET_FEEDS, feeds)
      return true
    }
    return false
  },

  async [ActionTypes.NAVIGATE_TO_USER_HOME] (context, param) {
    context.commit(MutationTypes.SET_BROWSING_HOME_UESR_ID, param.userId)
    return true
  },

  async [ActionTypes.FETCH_BROWSING_USER_PROFILE] (context, param) {
    const userProfile = await context.state.http.getUserProfile({ ...param })
    if (userProfile !== undefined) {
      console.log(userProfile)
      context.commit(MutationTypes.SET_BROWSING_USER_PROFILE, userProfile)
      return true
    }
    return false
  },

  async [ActionTypes.FETCH_BROWSING_USER_POSTS] (context, param) {
    if (context.state.loginUserId !== undefined) {
      const req = {
        userId: param.userId,
        loginUserId: context.state.loginUserId
      }
      const data = await context.state.http.getPosts(req)
      context.commit(MutationTypes.SET_BROWSING_USER_POSTS, data)
      return true
    }
    return false
  }
}
