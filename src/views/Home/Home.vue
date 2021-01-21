<template>
    <div class="home-wrapper">
        <div class="home-colume">
          <ig-user-profile
              v-if="browsingUserProfile !== undefined"
              class="user-profile-container"
              :relationStateWithUser="stateWithBrowsingUser"
              :browsingUserProfile="browsingUserProfile"
              @onFollowActionClick="onFollowActionClick" />
          <ig-posts
              style="margin-top: 20px; width: 900px;"
              :posts="posts"
              :belongUserProfile="browsingUserProfile"
              @onLikeButtonClicked="onLikeButtonClicked" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import UserProfile from './UserProfile.vue'
import Posts from './Posts.vue'
import { PostDomainModel, UserProfileDomainModel } from '../../utils/types/DomainModels'
import { Action, Getter } from 'vuex-class'
import { ActionParam, ActionTypes } from '@/store/actions/action-types'
import { GetterTypes } from '@/store/getters/getters-types'
import { RelationState } from '@/utils/helpers'

Vue.component('ig-user-profile', UserProfile)
Vue.component('ig-posts', Posts)

@Component
export default class Home extends Vue {
  @Action(ActionTypes.FETCH_BROWSING_USER_PROFILE) private fetchBrowsingUserProfile !: (param: ActionParam[ActionTypes.FETCH_BROWSING_USER_PROFILE]) => Promise<boolean>
  @Action(ActionTypes.FETCH_BROWSING_USER_POSTS) private fetchBrowsingPosts !: (param: ActionParam[ActionTypes.FETCH_BROWSING_USER_POSTS]) => Promise<boolean>
  @Action(ActionTypes.LIKE_OR_DISLIKE_POST) private likeOrDislikePost !: (param: ActionParam[ActionTypes.LIKE_OR_DISLIKE_POST]) => Promise<void>
  @Action(ActionTypes.FETCH_LOGIN_USER_FOLLOWINGS) private fetchLoginUserFollowings !: () => Promise<void>;
  @Action(ActionTypes.FOLLOW) private follow !: (param: ActionParam[ActionTypes.FOLLOW]) => Promise<void>;
  @Action(ActionTypes.CANCEL_FOLLOW) private cancelFollow !: (param: ActionParam[ActionTypes.CANCEL_FOLLOW]) => Promise<void>;

  @Getter(GetterTypes.BROWSING_HOME_USER_ID) private browsingHomeUserId !: string|undefined;
  @Getter(GetterTypes.BROWSING_USER_PROFILE) private browsingUserProfile !: UserProfileDomainModel|undefined;
  @Getter(GetterTypes.BROWSING_USER_POSTS) private posts !: PostDomainModel[];
  @Getter(GetterTypes.LOGIN_USER_FOLLOWINGS) private loginUserFollowings !: UserProfileDomainModel[];
  @Getter(GetterTypes.LOGIN_USER_ID) private loginUserId !: string|undefined;

  get stateWithBrowsingUser (): RelationState|undefined {
    const loginUserFollowingIds = this.loginUserFollowings.map((f) => f.getUserId())

    if (this.loginUserId === undefined || this.browsingHomeUserId === undefined) {
      return undefined
    }

    if (this.loginUserId === this.browsingHomeUserId) {
      return RelationState.SELF
    }

    if (loginUserFollowingIds.includes(this.browsingHomeUserId)) {
      return RelationState.FOLLOWING
    } else {
      return RelationState.UNFOLLOWING
    }
  }

  private async onFollowActionClick () {
    if (this.browsingHomeUserId === undefined) {
      return
    }

    if (this.stateWithBrowsingUser === RelationState.FOLLOWING) {
      const param = { followingId: this.browsingHomeUserId }
      await this.cancelFollow(param)
      await this.fetchBrowsingUserProfile({ userId: this.browsingHomeUserId })
    } else if (this.stateWithBrowsingUser === RelationState.UNFOLLOWING) {
      const param = { followingId: this.browsingHomeUserId }
      await this.follow(param)
      await this.fetchBrowsingUserProfile({ userId: this.browsingHomeUserId })
    }
  }

  private async onLikeButtonClicked (postId: string) {
    if (this.browsingHomeUserId !== undefined) {
      const param = {
        postId,
        browsingUserId: this.browsingHomeUserId
      }
      await this.likeOrDislikePost(param)
    }
  }

  @Watch('browsingHomeUserId')
  private onBrowsingHomeUserIdUpdate () {
    if (this.browsingHomeUserId !== undefined) {
      this.fetchBrowsingUserProfile({ userId: this.browsingHomeUserId })
      this.fetchBrowsingPosts({ userId: this.browsingHomeUserId })
    } else {
      throw new Error('Browsing Home User Id is undefined')
    }
  }

  private created () {
    if (this.browsingHomeUserId !== undefined) {
      this.fetchLoginUserFollowings()
      this.fetchBrowsingUserProfile({ userId: this.browsingHomeUserId })
      this.fetchBrowsingPosts({ userId: this.browsingHomeUserId })
    } else {
      throw new Error('Browsing Home User Id is undefined')
    }
  }
}
</script>

<style scoped>
    .home-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .home-colume {
      display: flex;
      flex-direction: column;
      width: 900px;
    }
    .user-profile-container {
        width: 900px;
        height: 100%;
        border-bottom: 1px solid gray;
    }
</style>
