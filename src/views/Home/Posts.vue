<template>
    <div class="posts-container">
        <div
            v-for="(post) in posts"
            :key="post.getPostId()"
            style="width: 200px; height: 200px; padding: 2px;"
        >
            <img
                style="width:100%;"
                src="../../assets/DEMO_001.jpg"
            />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { PostDomainModel } from '../../utils/types/DomainModels'

@Component
export default class Posts extends Vue {
    @Prop() private posts !: PostDomainModel;
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
