/*eslint-disable */
import Icons from './Icons.vue';
import Avatar from './Avatar.vue';

export default {
    install(Vue: any, options: any) {
        Vue.component('ig-icons', Icons);
        Vue.component('ig-avatar', Avatar);
    }
}

/* eslint-enable */
