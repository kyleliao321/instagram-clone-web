/*eslint-disable */
import Icons from './Icons.vue';
import Avatar from './Avatar.vue';
import UserMenu from './UserMenu.vue';
import UserSearchField from './UserSearchField.vue'
import UserList from './UserList.vue'

export default {
    install(Vue: any, options: any) {
        Vue.component('ig-icons', Icons);
        Vue.component('ig-avatar', Avatar);
        Vue.component('ig-user-menu', UserMenu);
        Vue.component('ig-user-search-field', UserSearchField);
        Vue.component('ig-user-list', UserList);
    }
}

/* eslint-enable */
