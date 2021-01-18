<template>
  <v-app>
    <v-app-bar
      app
      color="icon"
      dark
    >
    </v-app-bar>

    <v-main>
      <ig-avatar :imageSrc="imageSrc" :size="size" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  get imageSrc (): string {
    return 'https://cdn.vuetifyjs.com/images/john.jpg'
  }

  get size (): number {
    return 62
  }
}
</script>
