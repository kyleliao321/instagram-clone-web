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

export type GetUserProfileResponse = {
    id: string;
    userName: string;
    alias: string;
    description: string;
    imageSrc: string|null;
    postNum: number;
    followerNum: number;
    followingNum: number;
}
