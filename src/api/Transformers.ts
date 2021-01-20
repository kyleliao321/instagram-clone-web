import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { FeedObject, GetUserProfileResponse, PostObject } from './types'

export function transformUserProfileResponse (data: GetUserProfileResponse): UserProfileDomainModel {
  const user = data.user
  return Object.freeze({
    userId: user.id,
    userName: user.userName,
    alias: user.alias,
    userImageSrc: user.imageSrc ?? null,
    postNum: user.postNum,
    followerNum: user.followerNum,
    followingNum: user.followingNum
  })
}

export function transformPostResponse (post: PostObject, likedUserIds: string[], loginUserId: string): PostDomainModel {
  return Object.freeze({
    getPostId: () => post.id,
    getPostDescription: () => post.description,
    getPostLocation: () => post.location,
    getPostDate: () => post.timestamp,
    getPostUseId: () => post.postedUserid,
    getPostImageSrc: () => `http://localhost:8080/static/${post.imageSrc}`,
    getPostLikedNum: () => likedUserIds.length,
    getUserLikedPost: () => loginUserId in likedUserIds
  })
}

export function transformFeedResponse (feed: FeedObject, likedUserIds: string[], loginUserId: string): FeedDomainModel {
  return Object.freeze({
    getUserId: () => feed.userId,
    getUserName: () => feed.userName,
    getUserImageSrc: () => feed.userImage ?? null,
    getPostId: () => feed.postId,
    getPostDescription: () => feed.description,
    getPostLocation: () => feed.location,
    getPostImageSrc: () => `http://localhost:8080/static/${feed.postImage}`,
    getPostLikedNum: () => likedUserIds.length,
    getUserLikedPost: () => loginUserId in likedUserIds
  })
}
