import HttpClientV1 from '@/api/HttpClientV1'
import { State } from './state-types'

export const state: State = {
  http: new HttpClientV1(),
  authToken: undefined,
  loginUserId: undefined,
  loginUserProfile: undefined,
  feeds: [],
  browsingHomeUserId: undefined,
  browsingUserProfile: undefined,
  browsingUserPosts: [],
  searchedUserProfile: [],
  loginUserFollowings: []
}
