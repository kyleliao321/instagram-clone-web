<template>
  <svg xmlns="http://www.w3.org/2000/svg" :viewBox="viewBox" :class="$attrs.class">
    <component :is="this.$attrs.icon"/>
  </svg>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import iconList from '../assets/icons'

@Component({
  components: {
    ...iconList
  }
})
export default class Icons extends Vue {
  get viewBox (): string {
    switch (this.$attrs.icon.toLowerCase()) {
      case 'clear':
      case 'home':
      case 'like':
      case 'homeclicked':
      case 'likeclicked':
        return '0 0 24 24'
      default:
        return '0 0 20 20'
    }
  }
}

</script>
