import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'

export type State = {
    loginUserId: string|undefined;
    feeds: FeedDomainModel[];
    browsingUserProfile: UserProfileDomainModel|undefined;
    browsingUserPosts: PostDomainModel[];
}
