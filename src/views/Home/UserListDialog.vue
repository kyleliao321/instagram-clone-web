<template>
    <v-dialog width="350" v-model="show">
        <template v-slot:activator="{ on, attrs }">
            <h4 style="cursor: pointer; margin-right: 25px; " v-on.native="on" v-bind="attrs">
                {{ buttonName }}
            </h4>
        </template>
        <ig-user-list
            @onUserListClickOnUser="onUserListClickOnUser"
            :subHeader="subHeader"
            :users="users" />
    </v-dialog>
</template>

<script lang="ts">
import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class UserListDialog extends Vue {
    @Prop() private buttonName !: string;
    @Prop() private subHeader !: string;
    @Prop() private users !: UserProfileDomainModel[]
    private show = false;

    private onUserListClickOnUser (user: UserProfileDomainModel) {
      this.$emit('onUserListClickOnUser', user)
      this.show = false
    }
}
</script>
