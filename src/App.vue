<template>
<div id="app">
  <v-app id="inspire">
    <v-app-bar
      v-if="isLogin"
      fixed
      color="white"
      style="padding: 0px 80px 0px 40px; "
    >
      <v-toolbar-title>Demo Application</v-toolbar-title>

      <v-spacer></v-spacer>
        <ig-user-search-field
          :searchedUserProfiles="searchedUsers"
          @onSearchedUserClick="onSearchedUserClick"
          @onKeywordUpdate="onKeywordUpdate"/>
      <v-spacer></v-spacer>

      <v-btn icon>
        <ig-icons
          @click.native="navigateToFeeds"
          :icon="homeIcon"
          style="width: 40px; height: 40px;"/>
      </v-btn>
      <ig-user-menu
        :loginUserImageSrc="loginUserImageSrc"
        @onOptionClicked="onOptionClicked"
      />
    </v-app-bar>
    <v-main style="padding-top: 75px;">
      <router-view
        @onUserListClickOnUser="onSearchedUserClick"
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
  @Action(ActionTypes.LOGOUT) private logout !: () => Promise<void>;
  @Action(ActionTypes.CLEAN_UP_SERACHED) private cleanUpSearched !: () => Promise<void>;
  @Action(ActionTypes.SEARCH_USER_PROFILE) private searchUsers !: (param: ActionParam[ActionTypes.SEARCH_USER_PROFILE]) => Promise<void>;
  @Getter(GetterTypes.IS_LOGIN) private isLogin !: boolean;
  @Getter(GetterTypes.LOGIN_USER_ID) private loginUserId !: string;
  @Getter(GetterTypes.LOGIN_USER_PROFILE) private loginUser !: UserProfileDomainModel|undefined;
  @Getter(GetterTypes.SEARCHED_USER_PROFILE) private searchedUsers !: UserProfileDomainModel[];

  get loginUserImageSrc (): string | null {
    if (this.loginUser !== undefined) {
      return this.loginUser.getUserImageSrc()
    }
    throw new Error('Illega state')
  }

  get currentRouteName (): string {
    return this.$route.name ?? ''
  }

  get homeIcon (): string {
    return this.currentRouteName === 'Feeds' ? 'HomeClicked' : 'Home'
  }

  get userOptions (): string[] {
    return [
      'User Profile',
      'Logout'
    ]
  }

  private onSearchedUserClick (user: UserProfileDomainModel) {
    this.navigateToUserHome({ userId: user.getUserId() })
    this.onNavigate('Home')
    this.cleanUpSearched()
  }

  private async onKeywordUpdate (keyword: string) {
    await this.searchUsers({ keyword })
  }

  private async onOptionClicked (optionName: string) {
    if (optionName === 'Profile') {
      // update the browsing home id
      this.navigateToUserHome({ userId: this.loginUserId })
      this.navigateToHome()
    } else if (optionName === 'Logout') {
      await this.logout()
      this.onNavigate('Login')
    }
  }

  private onNavigate (dest: string) {
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
