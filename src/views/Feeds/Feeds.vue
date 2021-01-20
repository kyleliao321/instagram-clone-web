<template>
    <div style="display: flex; flex-direction: row; justify-content: center;">
        <div class="feeds-container">
            <ig-feed-card
                style="margin-top: 10px;"
                v-for="(feed) in feeds"
                :key="feed.getPostId()"
                :feed="feed"
                @onLikeButtonClick="onLikeButtonClick"
                @onUserImageClick="onUserImageClick" />
        </div>
    </div>
</template>

<script lang="ts">
import { ActionParam, ActionTypes } from '@/store/actions/action-types'
import { GetterTypes } from '@/store/getters/getters-types'
import { Vue, Component } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { FeedDomainModel } from '../../utils/types/DomainModels'
import FeedCard from './FeedCard.vue'

Vue.component('ig-feed-card', FeedCard)

@Component
export default class Feeds extends Vue {
    @Action(ActionTypes.FETCH_FEEDS) private fetchFeeds !: () => Promise<boolean>;
    @Action(ActionTypes.LIKE_OR_DISLIKE_POST) private likeOrDislikePost !: (param: ActionParam[ActionTypes.LIKE_OR_DISLIKE_POST]) => Promise<void>;
    @Action(ActionTypes.NAVIGATE_TO_USER_HOME) private navigateToUserHome !: (param: ActionParam[ActionTypes.NAVIGATE_TO_USER_HOME]) => Promise<boolean>;
    @Getter(GetterTypes.FEEDS) private feeds !: FeedDomainModel[];

    private async onLikeButtonClick (postId: string) {
      await this.likeOrDislikePost({ postId, browsingUserId: undefined })
    }

    private async onUserImageClick (userId: string) {
      await this.navigateToUserHome({ userId })
      this.$emit('onNavigate', 'Home')
    }

    private created () {
      this.fetchFeeds()
    }
}
</script>

<style scoped>
    .feeds-container {
        display: flex;
        flex-direction: column;
    }
</style>
