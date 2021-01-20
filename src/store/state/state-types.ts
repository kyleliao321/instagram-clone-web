import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'

export type State = {
    loginUserId: string|undefined;
    loginUserProfile: UserProfileDomainModel|undefined;
    feeds: FeedDomainModel[];
    browsingHomeUserId: string|undefined;
    browsingUserProfile: UserProfileDomainModel|undefined;
    browsingUserPosts: PostDomainModel[];
}
