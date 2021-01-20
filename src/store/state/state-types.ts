import { FeedDomainModel } from '@/utils/types/DomainModels'

export type State = {
    loginUserId: string|undefined;
    feeds: FeedDomainModel[];
}
