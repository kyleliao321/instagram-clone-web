<template>
    <div class="posts-container">
        <v-dialog
            v-for="(post) in posts"
            :key="post.getPostId()"
            width="860px"
        >
            <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" style="width: 300px; height: 300px; padding: 2px;">
                    <img
                        style="width:100%;"
                        :src="post.getPostImageSrc()"
                    />
                </div>
            </template>

            <ig-post-detail
                :belongUserProfile="belongUserProfile"
                :post="post"
                @onLikedButtonClicked="onLikeButtonClicked"/>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { PostDomainModel, UserProfileDomainModel } from '../../utils/types/DomainModels'
import PostDefailt from './PostDetail.vue'

Vue.component('ig-post-detail', PostDefailt)

@Component
export default class Posts extends Vue {
    @Prop() private belongUserProfile !: UserProfileDomainModel;
    @Prop() private posts !: PostDomainModel;

    private onLikeButtonClicked (postId: string) {
      this.$emit('onLikeButtonClicked', postId)
    }
}
</script>

<style scoped>
    .posts-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
</style>
