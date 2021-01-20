import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum MutationTypes {
    SET_LOGIN_USER_ID = 'SET_LOGIN_USER_ID',
    SET_LOGIN_USER_PROFILE = 'SET_LOGIN_USER_PROFILE',
    SET_FEEDS = 'SET_FEEDS',
    SET_BROWSING_HOME_UESR_ID = 'SET_BROWSING_HOME_UESR_ID',
    SET_BROWSING_USER_PROFILE = 'SET_BROWSING_USER_PROFILE',
    SET_BROWSING_USER_POSTS = 'SET_BROWSING_USER_POSTS'
}

export type Mutations<S = State> = {
    [MutationTypes.SET_LOGIN_USER_ID](state: S, payload: string): void;
    [MutationTypes.SET_LOGIN_USER_PROFILE](state: S, payload: UserProfileDomainModel): void;
    [MutationTypes.SET_FEEDS](state: S, payload: FeedDomainModel[]): void;
    [MutationTypes.SET_BROWSING_HOME_UESR_ID](state: S, payload: string|undefined): void;
    [MutationTypes.SET_BROWSING_USER_PROFILE](state: S, payload: UserProfileDomainModel): void;
    [MutationTypes.SET_BROWSING_USER_POSTS](state: S, payload: PostDomainModel[]): void;
}
