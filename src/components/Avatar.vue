<template>
    <v-avatar :size="size">
        <img :src="imageSrc" />
    </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Avatar extends Vue {
    @Prop() private imageSrc !: string;
    @Prop() private size !: number;
}

</script>
