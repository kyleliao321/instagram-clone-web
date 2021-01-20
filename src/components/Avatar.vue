<template>
    <v-avatar :size="size">
        <img
            v-if="imageSrc !== null"
            :src="imageSrc" />
        <v-icon x-large v-else>mdi-account-circle</v-icon>
    </v-avatar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Avatar extends Vue {
    @Prop() private imageSrc !: string|null;
    @Prop() private size !: number;
}

</script>
