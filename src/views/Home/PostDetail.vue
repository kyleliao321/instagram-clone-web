<template>
    <v-card class="post-detail-container">
        <div class="post-detail-image-container">
            <img
                style="width: 100%;"
                src="../../assets/DEMO_001.jpg" />
        </div>
        <div class="post-detail-metadata-container">
            <div class="post-detail-info">
                <div>{{ post.getPostLocation() }}</div>
                <div>{{ post.getPostDate() }}</div>
            </div>
            <div class="post-description">{{ post.getPostDescription() }}</div>
            <div class="post-action-container">
                <ig-icons icon="LikeClicked" style="width: 35px; height: 35px;" />
                <h5 style="align-self: center; margin-left: 10px;">1,000 Likes</h5>
            </div>
        </div>
    </v-card>
</template>

<script lang="ts">
import { PostDomainModel } from '@/utils/types/DomainModels'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class PostDetail extends Vue {
  @Prop() private post !: PostDomainModel;
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
