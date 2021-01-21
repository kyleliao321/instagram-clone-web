<template>
    <div class="wrapper">
        <div class="top-container">
            <div class="user-image-container">
                <ig-avatar :imageSrc="userImageSrc" size="120" />
            </div>
            <div class="user-metadata-container">
                <div style="display: flex;">
                  <h2>{{ userName }}</h2>
                  <v-btn
                    v-if="showActionButton"
                    style="margin-left: 15px; "
                    outlined
                    :color="actionButtonColor"
                    @click="onFollowActionClick"
                    >{{ actionButtonName }}</v-btn>
                </div>
                <div class="number-container">
                    <h4 style="margin-right: 25px;">{{ postsNum }} posts</h4>
                    <ig-user-list-dialog
                      @onUserListClickOnUser="onUserListClickOnUser"
                      :buttonName="followerNum"
                      subHeader="FOLLOWERS"
                      :users="browsingUserFollowers" />
                    <ig-user-list-dialog
                      @onUserListClickOnUser="onUserListClickOnUser"
                      :buttonName="followingNum"
                      subHeader="FOLLOWINGS"
                      :users="browsingUserFollowings" />
                </div>
                <h3>{{ userAlias }}</h3>
            </div>
        </div>
        <div class="description-container">
            <p>{{ userDescription }}</p>
        </div>
    </div>
</template>

<script lang="ts">
import UserListDialog from './UserListDialog.vue'
import { RelationState } from '@/utils/helpers'
import { Vue, Component, Prop } from 'vue-property-decorator'
import { UserProfileDomainModel } from '../../utils/types/DomainModels'

Vue.component('ig-user-list-dialog', UserListDialog)

@Component
export default class UserProifle extends Vue {
  @Prop() private relationStateWithUser !: RelationState|undefined;
  @Prop() private browsingUserProfile !: UserProfileDomainModel;
  @Prop() private browsingUserFollowers !: UserProfileDomainModel[];
  @Prop() private browsingUserFollowings !: UserProfileDomainModel[];

  get showActionButton (): boolean {
    if (this.relationStateWithUser === undefined || this.relationStateWithUser === RelationState.SELF) {
      return false
    }
    return true
  }

  get actionButtonColor (): string {
    if (this.relationStateWithUser === RelationState.FOLLOWING) {
      return 'error'
    } else {
      return 'indigo'
    }
  }

  get actionButtonName (): string {
    if (this.relationStateWithUser === RelationState.FOLLOWING) {
      return 'Cancel'
    } else {
      return 'Follow'
    }
  }

  get userImageSrc (): string|null {
    return this.browsingUserProfile.getUserImageSrc()
  }

  get userName (): string {
    return this.browsingUserProfile.getUserName()
  }

  get userAlias (): string {
    return this.browsingUserProfile.getAlias()
  }

  get userDescription (): string {
    return this.browsingUserProfile.getDescription()
  }

  get postsNum (): string {
    return `${this.browsingUserProfile.getPostNum()}`
  }

  get followingNum (): string {
    return `${this.browsingUserProfile.getFollowingNum()}  followings`
  }

  get followerNum (): string {
    return `${this.browsingUserProfile.getFollowerNum()}  followers`
  }

  private onUserListClickOnUser (user: UserProfileDomainModel) {
    this.$emit('onUserListClickOnUser', user)
  }

  private onFollowActionClick () {
    this.$emit('onFollowActionClick')
  }
}
</script>
<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
    }
    .top-container {
        height: 150px;
        display: flex;
        flex-direction: row;
    }
    .user-image-container {
        width: 150px;
        height: 150px;
        padding: 30px;
    }
    .user-metadata-container {
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 0px 0px 40px;
    }
    .number-container {
        display: flex;
        flex-direction: row;
    }
    .description-container {
        padding: 20px 0px 0px 45px;
        display: flex;
        justify-content: flex-start;
    }
</style>
