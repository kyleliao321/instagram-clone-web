export type Feed = {
    getUserId: () => string;
    getUserImageSrc: () => string | null;
    getUserName: () => string;
    getPostId: () => string;
    getPostLocation: () => string;
    getPostImageSrc: () => string;
    getPostDescription: () => string;
}

export type UserProfileDomainModel = {
    getUserId: () => string;
    getUserImageSrc: () => string | null;
    getUserName: () => string;
    getAlias: () => string;
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
}
