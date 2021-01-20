/*eslint-disable */
import Icons from './Icons.vue';
import Avatar from './Avatar.vue';
import UserMenu from './UserMenu.vue';

export default {
    install(Vue: any, options: any) {
        Vue.component('ig-icons', Icons);
        Vue.component('ig-avatar', Avatar);
        Vue.component('ig-user-menu', UserMenu);
    }
}

/* eslint-enable */
