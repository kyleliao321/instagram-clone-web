<template>
  <v-app>
    <v-main>
      <ig-feeds />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Feed from './views/Feeds/Feeds.vue'

Vue.component('ig-feeds', Feed)

@Component
export default class App extends Vue {
}
</script>
