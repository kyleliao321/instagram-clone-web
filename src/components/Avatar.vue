<template>
    <v-avatar :size="size">
        <img
            v-if="imageSrc !== null"
            :src="imageSrc" />
        <ig-icons
            v-else
            icon="DefaultAvatar" />
    </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Icons from './Icons.vue'

Vue.component('ig-icons', Icons)

@Component
export default class Avatar extends Vue {
    @Prop() private imageSrc !: string|null;
    @Prop() private size !: number;
}

</script>
