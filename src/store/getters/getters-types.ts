import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN',
    FEEDS = 'FEEDS',
    BROWSING_USER_PROFILE = 'BROWSING_USER_PROFILE',
    BROWSING_USER_POSTS = 'BROWSING_USER_POSTS'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
    [GetterTypes.FEEDS](state: State): FeedDomainModel[];
    [GetterTypes.BROWSING_USER_PROFILE](state: State): UserProfileDomainModel|undefined;
    [GetterTypes.BROWSING_USER_POSTS](state: State): PostDomainModel[];
}
