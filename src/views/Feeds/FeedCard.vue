<template>
    <article class="wrapper">
        <header class="feed-header">
            <div class="image-div">
                <ig-avatar
                    @click.native="onUserImageClick"
                    style="cursor: pointer; "
                    :imageSrc="userImageSrc"
                    size="52" />
            </div>
            <div class="feed-metadata-div">
                <h5>{{ userName }}</h5>
                <h5>{{ location }}</h5>
            </div>
        </header>
        <div class="feed-post-image">
            <img
                style="width: 100%;"
                :src="feed.getPostImageSrc()" />
        </div>
        <div class="feed-post-action-container">
            <v-btn icon>
                <ig-icons
                    @click.native="onLikeButtonClick"
                    :icon="likeIcon"
                    style="width: 35px; height: 35px; " />
            </v-btn>
            <h5 style="align-self: center; margin-left: 10px;">{{likeNum}} likes</h5>
        </div>
        <div class="feed-post-description">
            <div style="font-weight: bold; ">{{ userName }}</div>
            <p style="overflow: hidden; text-overflow: ellipsis; ">{{ description }}</p>
        </div>
    </article>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { FeedDomainModel } from '../../utils/types/DomainModels'

@Component
export default class FeedCard extends Vue {
    @Prop() private feed !: FeedDomainModel;

    get userImageSrc (): string|null {
      return this.feed.getUserImageSrc()
    }

    get userName (): string {
      return this.feed.getUserName()
    }

    get location (): string {
      return this.feed.getPostLocation()
    }

    get description (): string {
      return this.feed.getPostDescription()
    }

    get likeIcon (): string {
      return this.feed.getUserLikedPost() ? 'LikeClicked' : 'Like'
    }

    get likeNum (): string {
      return this.feed.getPostLikedNum().toString()
    }

    private onLikeButtonClick () {
      this.$emit('onLikeButtonClick', this.feed.getPostId())
    }

    private onUserImageClick () {
      this.$emit('onUserImageClick', this.feed.getUserId())
    }
}

</script>

<style scoped>
    .wrapper {
        height: 850px;
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        border-radius: 3px;
        border: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    .feed-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 60px;
        padding: 16px;
    }
    .feed-metadata-div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 20px;
    }
    .feed-post-image {
        margin-top: 5px;
    }
    .feed-post-description {
        padding: 10px 15px 0px 15px;
    }
    .feed-post-action-container {
        display: flex;
        flex-direction: row;
        padding: 0px 10px 0px 10px;
    }
</style>
