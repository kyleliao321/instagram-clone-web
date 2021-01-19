<template>
<div id="app">
  <v-app id="inspire">
    <v-app-bar
      fixed
      color="white"
    >
      <v-toolbar-title>Demo Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <ig-icons icon="HomeClicked" style="width: 40px; height: 40px;"/>
      </v-btn>
      <ig-avatar :imageSrc="loginUserImageSrc" size="52" />
    </v-app-bar>
    <v-main style="padding-top: 75px;">
      <!-- <ig-feeds /> -->
      <ig-home />
    </v-main>
  </v-app>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Feed from './views/Feeds/Feeds.vue'
import Home from './views/Home/Home.vue'

Vue.component('ig-feeds', Feed)
Vue.component('ig-home', Home)

@Component
export default class App extends Vue {
  get loginUserImageSrc (): string {
    return 'https://cdn.vuetifyjs.com/images/john.jpg'
  }
}
</script>
