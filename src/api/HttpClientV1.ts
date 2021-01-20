import { PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import axios, { AxiosInstance } from 'axios'
import Client from './Client'
import { transformPostResponse, transformUserProfileResponse } from './Transformers'
import { GetPostsInput, GetUserProfileInput, GetPostsResponse, LoginInput, LoginResponse, RegisterInput, UserProfileObject } from './types'

export default class HttpClientV1 extends Client {
    private server: AxiosInstance;

    constructor () {
      super()
      this.server = axios.create({ baseURL: 'http://localhost:8080' })
    }

    public async login (loginInput: LoginInput): Promise<LoginResponse|undefined> {
      const res = await this.server.post('/api/v1/accounts/login', loginInput)
      if (res.status === 200) {
        return res.data
      }
    }

    public async register (input: RegisterInput): Promise<boolean> {
      const res = await this.server.post('/api/v1/accounts/register', input)
      if (res.status === 201) {
        return true
      }
      return false
    }

    public async getUserProfile (input: GetUserProfileInput): Promise<UserProfileDomainModel|undefined> {
      const res = await this.server.get(`/api/v1/users/${input.userId}`)

      if (res.status === 200) {
        return transformUserProfileResponse(res.data)
      }
    }

    public async getPosts (input: GetPostsInput): Promise<PostDomainModel[]> {
      const res = await this.server.get('/api/v1/posts/', {
        params: {
          userId: input.userId
        }
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

      return []
    }

    private async getLikedUserIds (postId: string): Promise<string[]> {
      const res = await this.server.get('/api/v1/likes/', {
        params: { postId }
      })

      if (res.status === 200) {
        return res.data.likedUsers.map((u: UserProfileObject) => u.id)
      }

      throw new Error('Network Error')
    }
}
