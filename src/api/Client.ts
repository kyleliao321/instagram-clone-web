import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetFeedsInput, GetPostsInput, GetUserProfileInput, LoginInput, LoginResponse, RegisterInput } from './types'

export default abstract class Client {
    public abstract login(input: LoginInput): Promise<LoginResponse|undefined>
    public abstract register(input: RegisterInput): Promise<boolean>
    public abstract getUserProfile(input: GetUserProfileInput): Promise<UserProfileDomainModel|undefined>
    public abstract getPosts(input: GetPostsInput): Promise<PostDomainModel[]>
    public abstract getFeeds(input: GetFeedsInput): Promise<FeedDomainModel[]>
}
