import { ActionContext } from 'vuex'
import { Mutations } from './mutation-types'
import { State } from './state-types'

export enum ActionTypes {
    LOGIN = 'LOGIN'
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
    [ActionTypes.LOGIN](context: AugmentedActionContext): Promise<void>;
}
