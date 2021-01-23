import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import axios, { AxiosInstance } from 'axios'
import Client from './Client'
import { transformFeedResponse, transformFollowersResponse, transformFollowingssResponse, transformPostResponse, transformSearchUserResponse, transformUserProfileResponse } from './Transformers'
import { GetPostsInput, GetUserProfileInput, GetPostsResponse, GetFeedsResponse, LoginInput, LoginResponse, RegisterInput, UserProfileObject, GetFeedsInput, LikeOrDislikePostInput, SearchUserInput, GetFollowersInput, GetFollowingsInput, FollowInput, CancelFollowInput } from './types'

export default class HttpClientV1 extends Client {
    private server: AxiosInstance;
    private apiKey: string;

    constructor () {
      super()
      const baseUrl = process.env.VUE_APP_API_URL
      const apiKey = process.env.VUE_APP_X_API_KEY

      if (!baseUrl || !apiKey) {
        throw new Error('Base URL or API key is not defined in environment variable')
      }

      this.apiKey = apiKey
      this.server = axios.create({ baseURL: baseUrl })
    }

    public async login (loginInput: LoginInput): Promise<LoginResponse|undefined> {
      const res = await this.server.post('/api/v1/accounts/login', loginInput, {
        headers: { 'X-API-KEY': this.apiKey }
      })
      if (res.status === 200) {
        return res.data
      }
    }

    public async register (input: RegisterInput): Promise<boolean> {
      const res = await this.server.post('/api/v1/accounts/register', input, {
        headers: { 'X-API-KEY': this.apiKey }
      })
      if (res.status === 201) {
        return true
      }
      return false
    }

    public async getUserProfile (input: GetUserProfileInput): Promise<UserProfileDomainModel|undefined> {
      const res = await this.server.get(`/api/v1/users/${input.userId}`, {
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        return transformUserProfileResponse(res.data)
      }
    }

    public async getPosts (input: GetPostsInput): Promise<PostDomainModel[]> {
      const res = await this.server.get('/api/v1/posts/', {
        params: {
          userId: input.userId
        },
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        const data = res.data as GetPostsResponse

        const result: PostDomainModel[] = []

        for (const post of data.posts) {
          const likedUsers = await this.getLikedUserIds(post.id)
          const postM = transformPostResponse(post, likedUsers, input.loginUserId)
          result.push(postM)
        }

        return result
      }

      throw new Error('Network Error')
    }

    public async getFeeds (input: GetFeedsInput): Promise<FeedDomainModel[]> {
      const res = await this.server.get('/api/v1/feeds/', {
        params: {
          userId: input.userId,
          pageSize: '100'
        },
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        const result: FeedDomainModel[] = []
        const data = res.data as GetFeedsResponse

        for (const feed of data.feeds) {
          const likedUsers = await this.getLikedUserIds(feed.postId)
          const feedM = transformFeedResponse(feed, likedUsers, input.loginUserId)
          result.push(feedM)
        }

        return result
      }

      throw new Error('Network Error')
    }

    public async likeOrDislikePost (input: LikeOrDislikePostInput): Promise<void> {
      const likedUsers = await this.getLikedUserIds(input.postId)

      if (likedUsers.includes(input.userId)) {
        // dislike post
        const res = await this.server.delete(
          `/api/v1/likes/user/${input.userId}/post/${input.postId}`,
          {
            headers: {
              Authorization: `Bearer ${input.authToken}`,
              'X-API-KEY': this.apiKey
            }
          }
        )

        if (res.status !== 200) {
          throw new Error('Network Error')
        }
      } else {
        // like post
        const res = await this.server.post(
          '/api/v1/likes/',
          {
            userId: input.userId,
            postId: input.postId
          },
          {
            headers: {
              Authorization: `Bearer ${input.authToken}`,
              'X-API-KEY': this.apiKey
            }
          }
        )

        if (res.status !== 201) {
          throw new Error('Network Error')
        }
      }
    }

    public async searchUserProfiles (input: SearchUserInput): Promise<UserProfileDomainModel[]> {
      const res = await this.server.get('/api/v1/users/', {
        params: { userName: input.keyword },
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        return transformSearchUserResponse(res.data)
      }

      throw new Error('Network Error')
    }

    public async getFollowers (input: GetFollowersInput): Promise<UserProfileDomainModel[]> {
      const res = await this.server.get(`/api/v1/relations/followers/${input.userId}`, {
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        return transformFollowersResponse(res.data)
      }

      throw new Error('Network Error')
    }

    public async getFollowings (input: GetFollowingsInput): Promise<UserProfileDomainModel[]> {
      const res = await this.server.get(`/api/v1/relations/followings/${input.userId}`, {
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        return transformFollowingssResponse(res.data)
      }

      throw new Error('Network Error')
    }

    public async follow (input: FollowInput): Promise<UserProfileDomainModel[]> {
      const res = await this.server.post(
        '/api/v1/relations/',
        {
          followerId: input.followerId,
          followingId: input.followingId
        },
        {
          headers: {
            Authorization: `Bearer ${input.authToken}`,
            'X-API-KEY': this.apiKey
          }
        }
      )

      if (res.status === 201) {
        return transformFollowingssResponse(res.data)
      }

      throw new Error('Network Error')
    }

    public async cancelFollow (input: CancelFollowInput): Promise<UserProfileDomainModel[]> {
      const res = await this.server.delete(
          `/api/v1/relations/follower/${input.followerId}/following/${input.followingId}`,
          {
            headers: {
              Authorization: `Bearer ${input.authToken}`,
              'X-API-KEY': this.apiKey
            }
          }
      )

      if (res.status === 200) {
        return transformFollowingssResponse(res.data)
      }

      throw new Error('Network Error')
    }

    private async getLikedUserIds (postId: string): Promise<string[]> {
      const res = await this.server.get('/api/v1/likes/', {
        params: { postId },
        headers: { 'X-API-KEY': this.apiKey }
      })

      if (res.status === 200) {
        return res.data.likedUsers.map((u: UserProfileObject) => u.id)
      }

      throw new Error('Network Error')
    }
}
