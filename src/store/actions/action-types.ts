import { ActionContext } from 'vuex'
import { State } from '../state'
import { Mutations } from '../mutations'

export enum ActionTypes {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
    FETCH_FEEDS = 'FETCH_FEEDS'
}

export type ActionParam = {
    [ActionTypes.LOGIN]: {
        userName: string;
        password: string;
    };
    [ActionTypes.REGISTER]: {
        userName: string;
        password: string;
    };
}

type AugmentedActionContext = {
    commit<K extends keyof Mutations>(
        key: K,
        payload: Parameters<Mutations[K]>[1]
    ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, 'commit'>

export type Actions = {
    [ActionTypes.LOGIN](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.LOGIN]
    ): Promise<void>;
    [ActionTypes.REGISTER](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.REGISTER]
    ): Promise<boolean>;
    [ActionTypes.FETCH_FEEDS](
        context: AugmentedActionContext
    ): Promise<boolean>;
}
