<template>
    <div class="home-wrapper">
        <div class="home-colume">
          <ig-user-profile
              class="user-profile-container"
              :browsingUserProfile="browsingUserProfile" />
          <ig-posts
              style="margin-top: 20px; width: 600px;"
              :posts="posts" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserProfile from './UserProfile.vue'
import Posts from './Posts.vue'
import { PostDomainModel, UserProfileDomainModel } from '../../utils/types/DomainModels'

Vue.component('ig-user-profile', UserProfile)
Vue.component('ig-posts', Posts)

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

  get posts (): PostDomainModel[] {
    return [
      {
        getPostId: () => 'mockPost1',
        getPostImageSrc: () => '../../assets/DEMO_001.jpg',
        getPostLocation: () => 'location',
        getPostDate: () => 'date',
        getPostDescription: () => 'des',
        getPostUseId: () => 'mockId'
      },
      {
        getPostId: () => 'mockPost2',
        getPostImageSrc: () => '../../assets/DEMO_001.jpg',
        getPostLocation: () => 'location',
        getPostDate: () => 'date',
        getPostDescription: () => 'des',
        getPostUseId: () => 'mockId'
      },
      {
        getPostId: () => 'mockPost3',
        getPostImageSrc: () => '../../assets/DEMO_001.jpg',
        getPostLocation: () => 'location',
        getPostDate: () => 'date',
        getPostDescription: () => 'des',
        getPostUseId: () => 'mockId'
      },
      {
        getPostId: () => 'mockPost4',
        getPostImageSrc: () => '../../assets/DEMO_001.jpg',
        getPostLocation: () => 'location',
        getPostDate: () => 'date',
        getPostDescription: () => 'des',
        getPostUseId: () => 'mockId'
      }
    ]
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
