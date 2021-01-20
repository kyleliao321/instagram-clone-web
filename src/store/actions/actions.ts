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
  },

  async [ActionTypes.FETCH_BROWSING_USER_PROFILE] (context, param) {
    setTimeout(() => {
      console.log(`fetch user profile with ${param.userId}`)

      const mockProfile = Object.freeze({
        getUserId: () => 'mockId',
        getUserName: () => 'kyleliao0321',
        getAlias: () => 'Kyle',
        getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
        getPostNum: () => 10,
        getFollowingNum: () => 10,
        getFollowerNum: () => 10
      })

      context.commit(MutationTypes.SET_BROWSING_USER_PROFILE, mockProfile)
    }, 1000)
    return true
  },

  async [ActionTypes.FETCH_BROWSING_USER_POSTS] (context, param) {
    setTimeout(() => {
      console.log(`fetch user posts with ${param.userId}`)

      const mockPosts = [
        {
          getPostId: () => 'mockPost1',
          getPostImageSrc: () => '../../assets/DEMO_001.jpg',
          getPostLocation: () => 'Taiwan',
          getPostDate: () => '2020/03/21 21:31',
          getPostDescription: () => 'This post gonna have alot of message here.',
          getPostUseId: () => 'mockId',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => false
        },
        {
          getPostId: () => 'mockPost2',
          getPostImageSrc: () => '../../assets/DEMO_001.jpg',
          getPostLocation: () => 'Chicago',
          getPostDate: () => '2019/03/21 21:31',
          getPostDescription: () => 'This post gonna have alot of message here.',
          getPostUseId: () => 'mockId',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => true
        },
        {
          getPostId: () => 'mockPost3',
          getPostImageSrc: () => '../../assets/DEMO_001.jpg',
          getPostLocation: () => 'Japan',
          getPostDate: () => '2019/03/21 21:31',
          getPostDescription: () => 'This post gonna have alot of message here.',
          getPostUseId: () => 'mockId',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => false
        },
        {
          getPostId: () => 'mockPost4',
          getPostImageSrc: () => '../../assets/DEMO_001.jpg',
          getPostLocation: () => 'USA',
          getPostDate: () => '2019/03/21 21:31',
          getPostDescription: () => 'This post gonna have alot of message here.',
          getPostUseId: () => 'mockId',
          getPostLikedNum: () => 100,
          getUserLikedPost: () => true
        }
      ]

      context.commit(MutationTypes.SET_BROWSING_USER_POSTS, mockPosts)
    }, 1000)
    return true
  }
}
