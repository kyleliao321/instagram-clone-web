<template>
<div id="app">
  <v-app id="inspire">
    <v-app-bar
      v-if="isLogin"
      fixed
      color="white"
    >
      <v-toolbar-title>Demo Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <ig-icons
          @click.native="navigateToFeeds"
          :icon="homeIcon"
          style="width: 40px; height: 40px;"/>
      </v-btn>
      <ig-avatar
        @click.native="navigateToHome"
        style="cursor: pointer; "
        :imageSrc="loginUserImageSrc"
        size="52" />
    </v-app-bar>
    <v-main style="padding-top: 75px;">
      <router-view
        @onNavigate="onNavigate"
      ></router-view>
    </v-main>
  </v-app>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'
import { ActionParam, ActionTypes } from './store/actions/action-types'
import { GetterTypes } from './store/getters/getters-types'
import { UserProfileDomainModel } from './utils/types/DomainModels'

@Component
export default class App extends Vue {
  @Action(ActionTypes.NAVIGATE_TO_USER_HOME) private navigateToUserHome !: (param: ActionParam[ActionTypes.NAVIGATE_TO_USER_HOME]) => Promise<boolean>;
  @Getter(GetterTypes.IS_LOGIN) private isLogin !: boolean;
  @Getter(GetterTypes.LOGIN_USER_ID) private loginUserId !: string;
  @Getter(GetterTypes.LOGIN_USER_PROFILE) private loginUser !: UserProfileDomainModel|undefined;

  get loginUserImageSrc (): string | null {
    if (this.loginUser !== undefined) {
      return this.loginUser.userImageSrc
    }
    throw new Error('Illega state')
  }

  get currentRouteName (): string {
    return this.$route.name ?? ''
  }

  get homeIcon (): string {
    return this.currentRouteName === 'Feeds' ? 'HomeClicked' : 'Home'
  }

  private onNavigate (dest: string) {
    console.log(`navigate ${dest}`)
    if (this.currentRouteName !== dest) {
      this.$router.push({ name: dest })
    }
  }

  private navigateToFeeds () {
    if (this.currentRouteName !== 'Feeds') {
      this.$router.push({ name: 'Feeds' })
    }
  }

  private navigateToHome () {
    if (this.currentRouteName !== 'Home') {
      this.navigateToUserHome({ userId: this.loginUserId })
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
