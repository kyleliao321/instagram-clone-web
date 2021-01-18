<template>
  <v-app>
    <v-app-bar
      app
      color="icon"
      dark
    >
    </v-app-bar>

    <v-main>
      <ig-icons :icon="Clear" style="width: 60px; height: 60px;" />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({})
export default class App extends Vue {
  get Clear (): string {
    return 'Clear'
  }
}
</script>
