import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN',
    LOGIN_USER_ID = 'LOGIN_USER_ID',
    LOGIN_USER_PROFILE = 'LOGIN_USER_PROFILE',
    FEEDS = 'FEEDS',
    BROWSING_HOME_USER_ID = 'BROWSING_HOME_USER_ID',
    BROWSING_USER_PROFILE = 'BROWSING_USER_PROFILE',
    BROWSING_USER_POSTS = 'BROWSING_USER_POSTS',
    BROWSING_USER_FOLLOWERS = 'BROWSING_USER_FOLLOWERS',
    BROWSING_USER_FOLLOWINGS = 'BROWSING_USER_FOLLOWINGS',
    SEARCHED_USER_PROFILE = 'SEARCHED_USER_PROFILE',
    LOGIN_USER_FOLLOWINGS = 'LOGIN_USER_FOLLOWINGS'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
    [GetterTypes.LOGIN_USER_ID](state: State): string;
    [GetterTypes.LOGIN_USER_PROFILE](state: State): UserProfileDomainModel|undefined;
    [GetterTypes.FEEDS](state: State): FeedDomainModel[];
    [GetterTypes.BROWSING_HOME_USER_ID](state: State): string|undefined;
    [GetterTypes.BROWSING_USER_PROFILE](state: State): UserProfileDomainModel|undefined;
    [GetterTypes.BROWSING_USER_POSTS](state: State): PostDomainModel[];
    [GetterTypes.SEARCHED_USER_PROFILE](state: State): UserProfileDomainModel[];
    [GetterTypes.LOGIN_USER_FOLLOWINGS](state: State): UserProfileDomainModel[];
    [GetterTypes.BROWSING_USER_FOLLOWERS](state: State): UserProfileDomainModel[];
    [GetterTypes.BROWSING_USER_FOLLOWINGS](state: State): UserProfileDomainModel[];
}
