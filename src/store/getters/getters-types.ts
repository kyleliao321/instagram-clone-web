import { State } from '../state'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
}
