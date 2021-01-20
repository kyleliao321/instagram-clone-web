import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN',
    LOGIN_USER_ID = 'LOGIN_USER_ID',
    FEEDS = 'FEEDS',
    BROWSING_HOME_USER_ID = 'BROWSING_HOME_USER_ID',
    BROWSING_USER_PROFILE = 'BROWSING_USER_PROFILE',
    BROWSING_USER_POSTS = 'BROWSING_USER_POSTS'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
    [GetterTypes.LOGIN_USER_ID](state: State): string;
    [GetterTypes.FEEDS](state: State): FeedDomainModel[];
    [GetterTypes.BROWSING_HOME_USER_ID](state: State): string|undefined;
    [GetterTypes.BROWSING_USER_PROFILE](state: State): UserProfileDomainModel|undefined;
    [GetterTypes.BROWSING_USER_POSTS](state: State): PostDomainModel[];
}
