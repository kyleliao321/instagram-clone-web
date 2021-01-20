<template>
    <div class="posts-container">
        <v-dialog
            v-for="(post) in posts"
            :key="post.getPostId()"
            width="860px"
        >
            <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on" style="width: 200px; height: 200px; padding: 2px;">
                    <img
                        style="width:100%;"
                        :src="post.getPostImageSrc()"
                    />
                </div>
            </template>

            <ig-post-detail :post="post" @onLikedButtonClicked="onLikeButtonClicked"/>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { PostDomainModel } from '../../utils/types/DomainModels'
import PostDefailt from './PostDetail.vue'

Vue.component('ig-post-detail', PostDefailt)

@Component
export default class Posts extends Vue {
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
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
