import { FeedDomainModel } from '@/utils/types/DomainModels'
import { State } from '../state'

export enum GetterTypes {
    IS_LOGIN = 'IS_LOGIN',
    FEEDS = 'FEEDS'
}

export type Getters = {
    [GetterTypes.IS_LOGIN](state: State): boolean;
    [GetterTypes.FEEDS](state: State): FeedDomainModel[];
}
