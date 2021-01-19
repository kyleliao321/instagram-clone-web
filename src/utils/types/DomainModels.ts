export type Feed = {
    getUserId: () => string;
    getUserImageSrc: () => string | null;
    getUserName: () => string;
    getPostId: () => string;
    getPostLocation: () => string;
    getPostImageSrc: () => string;
    getPostDescription: () => string;
}
