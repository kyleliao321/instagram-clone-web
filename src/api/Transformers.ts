import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { GetUserProfileResponse } from './types'

export function transformUserProfileResponse (data: string): UserProfileDomainModel {
  const payload = JSON.parse(data)
  const user = payload.user
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
