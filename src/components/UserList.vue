<template>
    <v-card class="user-list-container">
        <v-list>
            <v-subheader
                style="border-botton: 1px solid grey; "
            >{{ subHeader }}</v-subheader>
            <v-list-item
                v-for="(user) in users"
                :key="user.getUserId()"
                @click="onUserListClickOnUser(user)"
            >
                <v-list-item-avatar>
                    <ig-avatar :imageSrc="user.getUserImageSrc()" size="40"/>
                </v-list-item-avatar>
                <v-list-item-title>{{ user.getUserName() }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-card>
</template>

<script lang="ts">
import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { Vue, Component, Prop } from 'vue-property-decorator'
import Avatar from './Avatar.vue'

Vue.component('ig-avatar', Avatar)

@Component
export default class UserList extends Vue {
    @Prop() private subHeader !: string;
    @Prop() private users !: UserProfileDomainModel[];

    private onUserListClickOnUser (user: UserProfileDomainModel) {
      this.$emit('onUserListClickOnUser', user)
    }
}
</script>

<style scoped>
    .user-list-container {
        height: 500px;
        overflow-y: auto;
    }
</style>
