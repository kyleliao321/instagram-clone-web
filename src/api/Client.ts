import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetFeedsInput, GetPostsInput, GetUserProfileInput, LikeOrDislikePostInput, LoginInput, LoginResponse, RegisterInput, SearchUserInput } from './types'

export default abstract class Client {
    public abstract login(input: LoginInput): Promise<LoginResponse|undefined>
    public abstract register(input: RegisterInput): Promise<boolean>
    public abstract getUserProfile(input: GetUserProfileInput): Promise<UserProfileDomainModel|undefined>
    public abstract getPosts(input: GetPostsInput): Promise<PostDomainModel[]>
    public abstract getFeeds(input: GetFeedsInput): Promise<FeedDomainModel[]>
    public abstract likeOrDislikePost(input: LikeOrDislikePostInput): Promise<void>
    public abstract searchUserProfiles(input: SearchUserInput): Promise<UserProfileDomainModel[]>
}
