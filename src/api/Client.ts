import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetUserProfileInput, LoginInput, LoginResponse, RegisterInput } from './types'

export default abstract class Client {
    public abstract login(input: LoginInput): Promise<LoginResponse|undefined>
    public abstract register(input: RegisterInput): Promise<boolean>
    public abstract getUserProfile(input: GetUserProfileInput): Promise<UserProfileDomainModel|undefined>
}
