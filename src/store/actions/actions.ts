import { CancelFollowInput, FollowInput, GetFeedsInput, GetFollowersInput, GetFollowingsInput, LikeOrDislikePostInput, SearchUserInput } from '@/api/types'
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

  async [ActionTypes.LOGOUT] (context) {
    context.commit(MutationTypes.RESET_ALL, undefined)
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
  },

  async [ActionTypes.LIKE_OR_DISLIKE_POST] (context, param) {
    if (context.state.authToken !== undefined && context.state.loginUserId !== undefined) {
      const req: LikeOrDislikePostInput = {
        userId: context.state.loginUserId,
        postId: param.postId,
        authToken: context.state.authToken
      }
      await context.state.http.likeOrDislikePost(req)

      if (param.browsingUserId !== undefined) {
        await context.dispatch(ActionTypes.FETCH_BROWSING_USER_POSTS, { userId: param.browsingUserId })
      }
      await context.dispatch(ActionTypes.FETCH_FEEDS)
    }
  },

  async [ActionTypes.SEARCH_USER_PROFILE] (context, param) {
    if (param.keyword !== '') {
      const req: SearchUserInput = { ...param }
      const searched = await context.state.http.searchUserProfiles(req)
      context.commit(MutationTypes.SET_SEARCH_USER_PROFILE, searched)
    } else {
      context.commit(MutationTypes.SET_SEARCH_USER_PROFILE, [])
    }
  },

  async [ActionTypes.CLEAN_UP_SERACHED] (context) {
    context.commit(MutationTypes.SET_SEARCH_USER_PROFILE, [])
  },

  async [ActionTypes.FETCH_LOGIN_USER_FOLLOWINGS] (context) {
    if (context.state.loginUserId !== undefined) {
      const req: GetFollowingsInput = {
        userId: context.state.loginUserId
      }
      const followings = await context.state.http.getFollowings(req)
      context.commit(MutationTypes.SET_LOGIN_USER_FOLLOWINGS, followings)
      return
    }

    throw new Error('Illegal State')
  },

  async [ActionTypes.FOLLOW] (context, param) {
    if (context.state.loginUserId !== undefined && context.state.authToken !== undefined) {
      const req: FollowInput = {
        followerId: context.state.loginUserId,
        followingId: param.followingId,
        authToken: context.state.authToken
      }
      const followings = await context.state.http.follow(req)
      context.commit(MutationTypes.SET_LOGIN_USER_FOLLOWINGS, followings)
      return
    }

    throw new Error('Illegal State')
  },

  async [ActionTypes.CANCEL_FOLLOW] (context, param) {
    if (context.state.loginUserId !== undefined && context.state.authToken !== undefined) {
      const req: CancelFollowInput = {
        followerId: context.state.loginUserId,
        followingId: param.followingId,
        authToken: context.state.authToken
      }
      const followings = await context.state.http.cancelFollow(req)
      context.commit(MutationTypes.SET_LOGIN_USER_FOLLOWINGS, followings)
      return
    }

    throw new Error('Illegal State')
  },

  async [ActionTypes.FETCH_BROWSING_USER_FOLLOWERS] (context, param) {
    const req: GetFollowersInput = {
      userId: param.userId
    }
    const followers = await context.state.http.getFollowers(req)
    context.commit(MutationTypes.SET_BROWSING_USER_FOLLOWERS, followers)
  },

  async [ActionTypes.FETCH_BROWSING_USER_FOLLOWINGS] (context, param) {
    const req: GetFollowingsInput = {
      userId: param.userId
    }
    const followings = await context.state.http.getFollowings(req)
    context.commit(MutationTypes.SET_BROWSING_USER_FOLLOWINGS, followings)
  }
}
