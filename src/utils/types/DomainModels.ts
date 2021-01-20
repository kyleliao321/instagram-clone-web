export type FeedDomainModel = {
    getUserId: () => string;
    getUserImageSrc: () => string | null;
    getUserName: () => string;
    getPostId: () => string;
    getPostLocation: () => string;
    getPostImageSrc: () => string;
    getPostDescription: () => string;
    getPostLikedNum: () => number;
    getUserLikedPost: () => boolean;
}

export type UserProfileDomainModel = {
    getUserId: () => string;
    getUserImageSrc: () => string|null;
    getUserName: () => string;
    getAlias: () => string;
    getDescription: () => string;
    getPostNum: () => number;
    getFollowerNum: () => number;
    getFollowingNum: () => number;
}

export type PostDomainModel = {
    getPostId: () => string;
    getPostImageSrc: () => string;
    getPostLocation: () => string;
    getPostDate: () => string;
    getPostDescription: () => string;
    getPostUseId: () => string;
    getPostLikedNum: () => number;
    getUserLikedPost: () => boolean;
}
