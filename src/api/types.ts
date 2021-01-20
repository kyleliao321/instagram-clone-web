export type LoginInput = {
    userName: string;
    password: string;
}

export type LoginResponse = {
    credential: {
        jwt: string;
        userId: string;
    };
}

export type RegisterInput = {
    userName: string;
    password: string;
}

export type GetUserProfileInput = {
    userId: string;
}

export type UserProfileObject = {
    id: string;
    userName: string;
    alias: string;
    description: string;
    imageSrc: string|null;
    postNum: number;
    followerNum: number;
    followingNum: number;
}

export type GetUserProfileResponse = {
    user: UserProfileObject;
}

export type GetPostsInput = {
    userId: string;
    loginUserId: string;
}

export type PostObject = {
    id: string;
    description: string;
    location: string;
    timestamp: string;
    imageSrc: string;
    postedUserid: string;
}

export type GetPostsResponse = {
    posts: PostObject[];
}

export type GetFeedsInput = {
    userId: string;
    loginUserId: string;
}

export type FeedObject = {
    userId: string;
    userName: string;
    userImage: string|null;
    postId: string;
    location: string;
    description: string;
    timestamp: string;
    postImage: string;
}

export type GetFeedsResponse = {
    feeds: FeedObject[];
}

export type LikeOrDislikePostInput = {
    userId: string;
    postId: string;
    authToken: string;
}

export type SearchUserInput = {
    keyword: string;
}

export type SearchUserResponse = {
    users: UserProfileObject[];
}
