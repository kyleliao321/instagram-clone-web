import { ActionContext } from 'vuex'
import { State } from '../state'
import { Mutations } from '../mutations'

export enum ActionTypes {
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
    REGISTER = 'REGISTER',
    FETCH_FEEDS = 'FETCH_FEEDS',
    NAVIGATE_TO_USER_HOME = 'NAVIGATE_TO_USER_HOME',
    FETCH_BROWSING_USER_PROFILE = 'FETCH_BROWSING_USER_PROFILE',
    FETCH_BROWSING_USER_POSTS = 'FETCH_BROWSING_USER_POSTS',
    LIKE_OR_DISLIKE_POST = 'LIKE_OR_DISLIKE_POST',
    SEARCH_USER_PROFILE = 'SEARCH_USER_PROFILE'
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
    [ActionTypes.NAVIGATE_TO_USER_HOME]: {
        userId: string|undefined;
    };
    [ActionTypes.FETCH_BROWSING_USER_PROFILE]: {
        userId: string;
    };
    [ActionTypes.FETCH_BROWSING_USER_POSTS]: {
        userId: string;
    };
    [ActionTypes.LIKE_OR_DISLIKE_POST]: {
        postId: string;
        browsingUserId: string|undefined;
    };
    [ActionTypes.SEARCH_USER_PROFILE]: {
        keyword: string;
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
    ): Promise<string>;

    [ActionTypes.LOGOUT](
        context: AugmentedActionContext
    ): Promise<void>;

    [ActionTypes.REGISTER](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.REGISTER]
    ): Promise<boolean>;

    [ActionTypes.FETCH_FEEDS](
        context: AugmentedActionContext
    ): Promise<boolean>;

    [ActionTypes.NAVIGATE_TO_USER_HOME](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.NAVIGATE_TO_USER_HOME]
    ): Promise<boolean>;

    [ActionTypes.FETCH_BROWSING_USER_PROFILE](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.FETCH_BROWSING_USER_PROFILE]
    ): Promise<boolean>;

    [ActionTypes.FETCH_BROWSING_USER_POSTS](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.FETCH_BROWSING_USER_POSTS]
    ): Promise<boolean>;

    [ActionTypes.LIKE_OR_DISLIKE_POST](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.LIKE_OR_DISLIKE_POST]
    ): Promise<void>;

    [ActionTypes.SEARCH_USER_PROFILE](
        context: AugmentedActionContext,
        param: ActionParam[ActionTypes.SEARCH_USER_PROFILE]
    ): Promise<void>;
}
