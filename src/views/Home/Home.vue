<template>
    <div class="home-wrapper">
        <div class="home-colume">
          <ig-user-profile
              v-if="browsingUserProfile !== undefined"
              class="user-profile-container"
              :browsingUserProfile="browsingUserProfile" />
          <ig-posts
              style="margin-top: 20px; width: 600px;"
              :posts="posts"
              :belongUserProfile="browsingUserProfile"
              @onLikeButtonClicked="onLikeButtonClicked" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserProfile from './UserProfile.vue'
import Posts from './Posts.vue'
import { PostDomainModel, UserProfileDomainModel } from '../../utils/types/DomainModels'
import { Action, Getter } from 'vuex-class'
import { ActionParam, ActionTypes } from '@/store/actions/action-types'
import { GetterTypes } from '@/store/getters/getters-types'

Vue.component('ig-user-profile', UserProfile)
Vue.component('ig-posts', Posts)

@Component
export default class Home extends Vue {
  @Action(ActionTypes.FETCH_BROWSING_USER_PROFILE) private fetchBrowsingUserProfile !: (param: ActionParam[ActionTypes.FETCH_BROWSING_USER_PROFILE]) => Promise<boolean>
  @Action(ActionTypes.FETCH_BROWSING_USER_POSTS) private fetchBrowsingPosts !: (param: ActionParam[ActionTypes.FETCH_BROWSING_USER_POSTS]) => Promise<boolean>
  @Action(ActionTypes.LIKE_OR_DISLIKE_POST) private likeOrDislikePost !: (param: ActionParam[ActionTypes.LIKE_OR_DISLIKE_POST]) => Promise<void>
  @Getter(GetterTypes.BROWSING_HOME_USER_ID) private browsingHomeUserId !: string|undefined;
  @Getter(GetterTypes.BROWSING_USER_PROFILE) private browsingUserProfile !: UserProfileDomainModel|undefined;
  @Getter(GetterTypes.BROWSING_USER_POSTS) private posts !: PostDomainModel[];

  private async onLikeButtonClicked (postId: string) {
    if (this.browsingHomeUserId !== undefined) {
      const param = {
        postId,
        browsingUserId: this.browsingHomeUserId
      }
      await this.likeOrDislikePost(param)
    }
  }

  private created () {
    if (this.browsingHomeUserId !== undefined) {
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
    }
    .user-profile-container {
        width: 600px;
        height: 100%;
        border-bottom: 1px solid gray;
    }
</style>
