import { ActionTree } from 'vuex'
import { MutationTypes } from '../mutations/mutation-types'
import { State } from '../state'
import { Actions, ActionTypes } from './action-types'

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.LOGIN] (context, param) {
    const loginPayload = await context.state.http.login({ ...param })
    if (loginPayload !== undefined) {
      const userProfile = await context.state.http.getUserProfile({ userId: loginPayload.credential.userId })
      context.commit(MutationTypes.SET_LOGIN_USER_ID, loginPayload.credential.userId)
      context.commit(MutationTypes.SET_LOGIN_USER_PROFILE, userProfile)
      return loginPayload.credential.userId
    }
    throw new Error('Network Error')
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
