import { State } from './state-types'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
}
