<template>
    <div class="home-wrapper">
        <ig-user-profile
            class="user-profile-container"
            :browsingUserProfile="browsingUserProfile" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserProfile from './UserProfile.vue'
import { UserProfileDomainModel } from '../../utils/types/DomainModels'

Vue.component('ig-user-profile', UserProfile)

@Component
export default class Home extends Vue {
  get browsingUserProfile (): UserProfileDomainModel {
    return Object.freeze({
      getUserId: () => 'mockId',
      getUserName: () => 'kyleliao0321',
      getAlias: () => 'Kyle',
      getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
      getPostNum: () => 10,
      getFollowingNum: () => 10,
      getFollowerNum: () => 10
    })
  }
}
</script>

<style scoped>
    .home-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .user-profile-container {
        width: 600px;
        height: 100%;
        border-bottom: 1px solid gray;
    }
</style>
