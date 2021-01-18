import { withKnobs, select } from '@storybook/addon-knobs'
import '../../plugins/vuetify'
import '../../plugins/components'

export default {
  title: '/Common/Icon',
  decorators: [withKnobs]
}

export const original = () => ({
  props: {
    icon: {
      default: select('icon', [
        'Clear'
      ], 'Clear')
    }
  },
  template: `
        <ig-icons :icon="icon" style="width: 60px; height: 60px;" />
    `
})
