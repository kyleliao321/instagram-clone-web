import { FeedDomainModel, PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { FeedObject, GetUserProfileResponse, PostObject, SearchUserResponse } from './types'

export function transformUserProfileResponse (data: GetUserProfileResponse): UserProfileDomainModel {
  const user = data.user
  return Object.freeze({
    getUserId: () => user.id,
    getUserName: () => user.userName,
    getAlias: () => user.alias,
    getDescription: () => user.description,
    getUserImageSrc: () => user.imageSrc ?? null,
    getPostNum: () => user.postNum,
    getFollowerNum: () => user.followerNum,
    getFollowingNum: () => user.followingNum
  })
}

export function transformSearchUserResponse (data: SearchUserResponse): UserProfileDomainModel[] {
  const users = data.users
  return users.map(user => {
    return Object.freeze({
      getUserId: () => user.id,
      getUserName: () => user.userName,
      getAlias: () => user.alias,
      getDescription: () => user.description,
      getUserImageSrc: () => user.imageSrc ?? null,
      getPostNum: () => user.postNum,
      getFollowerNum: () => user.followerNum,
      getFollowingNum: () => user.followingNum
    })
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
    getUserLikedPost: () => likedUserIds.includes(loginUserId)
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
    getUserLikedPost: () => likedUserIds.includes(loginUserId)
  })
}
