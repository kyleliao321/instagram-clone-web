import Client from '@/api/Client'
import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'

export type State = {
    http: Client;
    authToken: string|undefined;
    loginUserId: string|undefined;
    loginUserProfile: UserProfileDomainModel|undefined;
    feeds: FeedDomainModel[];
    browsingHomeUserId: string|undefined;
    browsingUserProfile: UserProfileDomainModel|undefined;
    browsingUserPosts: PostDomainModel[];
    browsingUserFollowers: UserProfileDomainModel[];
    browsingUserFollowings: UserProfileDomainModel[];
    searchedUserProfile: UserProfileDomainModel[];
    loginUserFollowings: UserProfileDomainModel[];
}
