<template>
    <div class="wrapper">
        <div class="top-container">
            <div class="user-image-container">
                <ig-avatar :imageSrc="userImageSrc" size="120" />
            </div>
            <div class="user-metadata-container">
                <h2>{{ userName }}</h2>
                <div class="number-container">
                    <h4 style="margin-right: 25px;">{{ postsNum }} posts</h4>
                    <h4 style="margin-right: 25px;">{{ followerNum }} followers</h4>
                    <h4>{{ followingNum }} followings</h4>
                </div>
                <h3>{{ userAlias }}</h3>
            </div>
        </div>
        <div class="description-container">
            <p>A lot of message goint to be here</p>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { UserProfileDomainModel } from '../../utils/types/DomainModels'

@Component
export default class UserProifle extends Vue {
  @Prop() private browsingUserProfile !: UserProfileDomainModel;

  get userImageSrc (): string|null {
    return this.browsingUserProfile.userImageSrc
  }

  get userName (): string {
    return this.browsingUserProfile.userName
  }

  get userAlias (): string {
    return this.browsingUserProfile.alias
  }

  get postsNum (): string {
    return `${this.browsingUserProfile.postNum}`
  }

  get followingNum (): string {
    return `${this.browsingUserProfile.followingNum}`
  }

  get followerNum (): string {
    return `${this.browsingUserProfile.followerNum}`
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
