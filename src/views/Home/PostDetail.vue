<template>
    <v-card class="post-detail-container">
        <div class="post-detail-image-container">
            <img
                style="width: 100%;"
                :src="post.getPostImageSrc()" />
        </div>
        <div class="post-detail-metadata-container">
            <div class="post-detail-info">
                <div style="border-bottom: 1px solid grey; padding-bottom: 5px; display: flex; flex-direction: row; align-items: center; ">
                    <ig-avatar :imageSrc="belongUserProfile.getUserImageSrc()" />
                    <div style="margin-left: 5px; font-weight: bold; ">{{belongUserProfile.getUserName()}}</div>
                </div>
                <div>{{ parsedDate }}</div>
                <div>{{ post.getPostLocation() }}</div>
            </div>
            <div class="post-description">{{ post.getPostDescription() }}</div>
            <div class="post-action-container">
                <ig-icons
                    :icon="likeIcon"
                    style="width: 35px; height: 35px; cursor: pointer;"
                    @click.native="onLikeButtonClicked"
                />
                <h5 style="align-self: center; margin-left: 10px;">{{ postLikeNum }} Likes</h5>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import { formatDate } from '@/utils/helpers'
import { PostDomainModel, UserProfileDomainModel } from '@/utils/types/DomainModels'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PostDetail extends Vue {
  @Prop() private post !: PostDomainModel;
  @Prop() private belongUserProfile !: UserProfileDomainModel;

  get likeIcon (): string {
    return this.post.getUserLikedPost() ? 'LikeClicked' : 'Like'
  }

  get postLikeNum (): string {
    return this.post.getPostLikedNum().toString()
  }

  get parsedDate (): string {
    return formatDate(this.post.getPostDate())
  }

  private onLikeButtonClicked () {
    this.$emit('onLikedButtonClicked', this.post.getPostId())
  }
}
</script>

<style scoped>
    .post-detail-container {
        width: 860px;
        display: flex;
        flex-direction: row;
    }
    .post-detail-image-container {
        width: 600px;
        height: 600px;
    }
    .post-detail-metadata-container {
        width: 260px;
        height: 600px;
        display: flex;
        flex-direction: column;
        padding: 10px;
    }
    .post-detail-info {
        padding: 5px;
    }
    .post-description {
        padding: 5px;
        height: 100%;
    }
    .post-action-container {
        width: 100%;
        display: flex;
        flex-direction: row;
        border-top: 1px solid grey;
        padding-top: 10px;
    }
</style>
