<template>
    <v-menu offset-y>
    <template v-slot:activator="{ on, attrs }">
        <v-btn
        icon
        v-bind="attrs"
        v-on="on">
        <ig-avatar
            style="cursor: pointer; "
            :imageSrc="loginUserImageSrc"
            size="52" />
        </v-btn>
    </template>
    <v-list>
        <v-list-item
            v-for="(option, index) in userOptions"
            :key="index"
            style="cursor: pointer; "
            @click.native="onOptionClicked(option.optionName)"
        >
            <v-list-item-icon>
                <v-icon v-text="option.iconName"></v-icon>
            </v-list-item-icon>
            <v-list-item-title style="transform: translateX(-30%); ">
                <v-list-item-title v-text="option.optionName"></v-list-item-title>
            </v-list-item-title>
        </v-list-item>
    </v-list>
    </v-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

type UserOption = {
    optionName: string;
    iconName: string;
}

@Component
export default class UserMenu extends Vue {
    @Prop() private loginUserImageSrc !: string|null;

    get userOptions (): UserOption[] {
      return [
        {
          optionName: 'Profile',
          iconName: 'mdi-account'
        },
        {
          optionName: 'Logout',
          iconName: 'mdi-power'
        }
      ]
    }

    private onOptionClicked (optionName: string) {
      this.$emit('onOptionClicked', optionName)
    }
}
</script>
