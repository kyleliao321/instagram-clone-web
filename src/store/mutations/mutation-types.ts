import { FeedDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum MutationTypes {
    SET_LOGIN_USER_ID = 'SET_LOGIN_USER_ID',
    SET_FEEDS = 'SET_FEEDS'
}

export type Mutations<S = State> = {
    [MutationTypes.SET_LOGIN_USER_ID](state: S, payload: string): void;
    [MutationTypes.SET_FEEDS](state: S, payload: FeedDomainModel[]): void;
}
