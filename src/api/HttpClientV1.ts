import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import axios, { AxiosInstance, AxiosResponse } from 'axios'
import Client from './Client'
import { transformUserProfileResponse } from './Transformers'
import { GetUserProfileInput, GetUserProfileResponse, LoginInput, LoginResponse, RegisterInput } from './types'

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
      const res = await this.server.get(`/api/v1/users/${input.userId}`, {
        transformResponse: [transformUserProfileResponse]
      })

      if (res.status === 200) {
        return res.data
      }
    }
}
