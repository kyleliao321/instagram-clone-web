import { State } from './state-types'

export enum MutationTypes {
    SET_LOGIN_USER_ID = 'SET_LOGIN_USER_ID'
}

export type Mutations<S = State> = {
    [MutationTypes.SET_LOGIN_USER_ID](state: S, payload: string): void;
}
