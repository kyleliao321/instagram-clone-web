<template>
    <div style="display: flex; flex-direction: row; justify-content: center;">
        <div class="feeds-container">
            <ig-feed-card
                style="margin-top: 10px;"
                v-for="(feed) in feeds"
                :key="feed.getPostId()"
                :feed="feed" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { FeedDomainModel } from '../../utils/types/DomainModels'
import FeedCard from './FeedCard.vue'

Vue.component('ig-feed-card', FeedCard)

@Component
export default class Feeds extends Vue {
    private feeds: FeedDomainModel[] = [
      {
        getUserId: () => 'mockUserId1',
        getUserName: () => 'Jerry',
        getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
        getPostId: () => 'mockPostId1',
        getPostLocation: () => 'Taiwan',
        getPostImageSrc: () => 'mock',
        getPostDescription: () => 'description',
        getPostLikedNum: () => 100,
        getUserLikedPost: () => false
      },
      {
        getUserId: () => 'mockUserId2',
        getUserName: () => 'Jerry',
        getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
        getPostId: () => 'mockPostId2',
        getPostLocation: () => 'Taiwan',
        getPostImageSrc: () => 'mock',
        getPostDescription: () => 'description',
        getPostLikedNum: () => 100,
        getUserLikedPost: () => true
      },
      {
        getUserId: () => 'mockUserId3',
        getUserName: () => 'Jerry',
        getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
        getPostId: () => 'mockPostId3',
        getPostLocation: () => 'Taiwan',
        getPostImageSrc: () => 'mock',
        getPostDescription: () => 'description',
        getPostLikedNum: () => 100,
        getUserLikedPost: () => false
      },
      {
        getUserId: () => 'mockUserId4',
        getUserName: () => 'Jerry',
        getUserImageSrc: () => 'https://cdn.vuetifyjs.com/images/john.jpg',
        getPostId: () => 'mockPostId4',
        getPostLocation: () => 'Taiwan',
        getPostImageSrc: () => 'mock',
        getPostDescription: () => 'description',
        getPostLikedNum: () => 100,
        getUserLikedPost: () => true
      }
    ]
}
</script>

<style scoped>
    .feeds-container {
        display: flex;
        flex-direction: column;
    }
</style>
