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
