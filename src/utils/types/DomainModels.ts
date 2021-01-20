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
    userId: string;
    userImageSrc: string|null;
    userName: string;
    alias: string;
    postNum: number;
    followerNum: number;
    followingNum: number;
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
