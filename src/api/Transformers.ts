import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetUserProfileResponse } from './types'

export function transformUserProfileResponse (data: GetUserProfileResponse): UserProfileDomainModel {
  return Object.freeze({
    getUserId: () => data.id,
    getUserName: () => data.userName,
    getAlias: () => data.alias,
    getUserImageSrc: () => data.imageSrc,
    getPostNum: () => data.postNum,
    getFollowerNum: () => data.followerNum,
    getFollowingNum: () => data.followingNum
  })
}
