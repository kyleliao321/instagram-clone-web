<template>
    <div v-click-outside="onBlured" style="transform: translateY(20%); display: flex; flex-direction: column; ">
        <div class="search-field-container">
            <v-text-field
                v-model="keyword"
                outlined
                dense
                label="keyword"
                append-icon="mdi-magnify"
                @focus="onFocused"
            ></v-text-field>
        </div>
        <v-card v-show="showSearchResult" class="search-result-container">
            <v-list>
                <v-list-item
                    style="cursor: pointer; "
                    v-for="(user) in searchedUserProfiles"
                    :key="user.getUserId()"
                    @click="onSearchedUserClick(user)">
                    <v-list-item-avatar>
                        <ig-avatar :imageSrc="user.getUserImageSrc()" size="35" />
                    </v-list-item-avatar>
                    <v-list-item-title>{{user.getUserName()}}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-card>
    </div>
</template>

<script lang="ts">
import { UserProfileDomainModel } from '@/utils/types/DomainModels'
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class UserSearchField extends Vue {
    @Prop() private searchedUserProfiles !: UserProfileDomainModel[];
    private keyword = '';
    private focused = false;
    private showSearchResult = false;

    @Watch('focused')
    @Watch('searchedUserProfiles')
    private updateVisibility () {
      this.showSearchResult = this.focused && this.searchedUserProfiles.length !== 0
    }

    @Watch('keyword')
    private onKeywordUpdate () {
      this.$emit('onKeywordUpdate', this.keyword)
    }

    private onSearchedUserClick (user: UserProfileDomainModel) {
      this.keyword = ''
      this.$emit('onSearchedUserClick', user)
    }

    private onFocused () {
      // show searched result
      this.focused = true
    }

    private onBlured () {
      // hide searched result
      this.focused = false
    }
}
</script>

<style scoped>
 .search-field-container {
     width: 250px;
 }
 .search-result-container {
     position: absolute;
     top: 25px;
     max-height: 300px;
     overflow-y: scroll;
 }
</style>
