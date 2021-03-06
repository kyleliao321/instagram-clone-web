import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum MutationTypes {
    SET_AUTH_TOKEN = 'SET_AUTH_TOKEN',
    SET_LOGIN_USER_ID = 'SET_LOGIN_USER_ID',
    SET_LOGIN_USER_PROFILE = 'SET_LOGIN_USER_PROFILE',
    SET_FEEDS = 'SET_FEEDS',
    SET_BROWSING_HOME_UESR_ID = 'SET_BROWSING_HOME_UESR_ID',
    SET_BROWSING_USER_PROFILE = 'SET_BROWSING_USER_PROFILE',
    SET_BROWSING_USER_POSTS = 'SET_BROWSING_USER_POSTS',
    SET_BROWSING_USER_FOLLOWERS = 'SET_BROWSING_USER_FOLLOWERS',
    SET_BROWSING_USER_FOLLOWINGS = 'SET_BROWSING_USER_FOLLOWINGS',
    RESET_ALL = 'RESET_ALL',
    SET_SEARCH_USER_PROFILE = 'SET_SEARCH_USER_PROFILE',
    SET_LOGIN_USER_FOLLOWINGS = 'SET_LOGIN_USER_FOLLOWINGS'
}

export type Mutations<S = State> = {
    [MutationTypes.SET_AUTH_TOKEN](state: S, payload: string): void;
    [MutationTypes.SET_LOGIN_USER_ID](state: S, payload: string): void;
    [MutationTypes.SET_LOGIN_USER_PROFILE](state: S, payload: UserProfileDomainModel|undefined): void;
    [MutationTypes.SET_FEEDS](state: S, payload: FeedDomainModel[]): void;
    [MutationTypes.SET_BROWSING_HOME_UESR_ID](state: S, payload: string|undefined): void;
    [MutationTypes.SET_BROWSING_USER_PROFILE](state: S, payload: UserProfileDomainModel): void;
    [MutationTypes.SET_BROWSING_USER_POSTS](state: S, payload: PostDomainModel[]): void;
    [MutationTypes.SET_BROWSING_USER_FOLLOWERS](state: S, payload: UserProfileDomainModel[]): void;
    [MutationTypes.SET_BROWSING_USER_FOLLOWINGS](state: S, payload: UserProfileDomainModel[]): void;
    [MutationTypes.RESET_ALL](state: S): void;
    [MutationTypes.SET_SEARCH_USER_PROFILE](state: S, payload: UserProfileDomainModel[]): void;
    [MutationTypes.SET_LOGIN_USER_FOLLOWINGS](state: S, payload: UserProfileDomainModel[]): void;
}
