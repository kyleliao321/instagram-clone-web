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
  },
  async [ActionTypes.FETCH_FEEDS] (context) {
    setTimeout(() => {
      const mockFeeds = [
        {
          getUserId: () => 'mockUserId1',
          getUserName: () => 'Jerry',
          getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
          getPostId: () => 'mockPostId1',
          getPostLocation: () => 'Taiwan',
          getPostImageSrc: () => 'mock',
          getPostDescription: () => 'description',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => false
        },
        {
          getUserId: () => 'mockUserId2',
          getUserName: () => 'Jerry',
          getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
          getPostId: () => 'mockPostId2',
          getPostLocation: () => 'Taiwan',
          getPostImageSrc: () => 'mock',
          getPostDescription: () => 'description',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => true
        },
        {
          getUserId: () => 'mockUserId3',
          getUserName: () => 'Jerry',
          getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
          getPostId: () => 'mockPostId3',
          getPostLocation: () => 'Taiwan',
          getPostImageSrc: () => 'mock',
          getPostDescription: () => 'description',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => false
        },
        {
          getUserId: () => 'mockUserId4',
          getUserName: () => 'Jerry',
          getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
          getPostId: () => 'mockPostId4',
          getPostLocation: () => 'Taiwan',
          getPostImageSrc: () => 'mock',
          getPostDescription: () => 'description',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => true
        }
      ]
      context.commit(MutationTypes.SET_FEEDS, mockFeeds)
    }, 1000)
    return true
  }
}
