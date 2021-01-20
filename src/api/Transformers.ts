import { PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetUserProfileResponse, PostObject } from './types'

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
