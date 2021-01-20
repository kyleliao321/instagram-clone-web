<template>
    <div style="display: flex; justify-content: center; ">
        <div class="login-wrapper">
            <div class="content-wrapper">
                <h2 style="margin-bottom: 10px; ">Demo Application</h2>
                <v-text-field
                    v-model="userName"
                    label="username"
                    outlined
                    clearable
                ></v-text-field>
                <v-text-field
                    style="transform: translateY(-25%);"
                    type="password"
                    v-model="password"
                    label="password"
                    outlined
                    clearable
                ></v-text-field>
                <v-btn
                    @click.native="onLogin"
                    style="transform: translateY(-100%);"
                    outlined
                    :disabled="!loginReady"
                >Login
                </v-btn>
                <h4
                    @click="onNavigate"
                    style="border-bottom: 1px solid black; cursor: pointer; "
                >Don't have account yet?</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import { isStringEmpty } from '../../utils/helpers'
import { Action, Getter } from 'vuex-class'
import { ActionParam, ActionTypes } from '@/store/actions/action-types'
import { GetterTypes } from '@/store/getters/getters-types'

@Component
export default class Register extends Vue {
    @Action(ActionTypes.LOGIN) private login !: (param: ActionParam[ActionTypes.LOGIN]) => Promise<string>
    @Action(ActionTypes.NAVIGATE_TO_USER_HOME) private navigateToUserHome !: (param: ActionParam[ActionTypes.NAVIGATE_TO_USER_HOME]) => Promise<boolean>;
    @Getter(GetterTypes.IS_LOGIN) private isLogin !: boolean;

    private userName = '';
    private password = '';
    private loginReady = false;
    private loginUserId: string|undefined = undefined;

    private onNavigate () {
      this.$emit('onNavigate', 'Register')
    }

    private async onLogin () {
      const param = {
        userName: this.userName,
        password: this.password
      }
      this.loginUserId = await this.login(param)
    }

    @Watch('isLogin')
    private async onLoginStatusUpdate () {
      if (this.isLogin) {
        await this.navigateToUserHome({ userId: this.loginUserId })
        this.$emit('onNavigate', 'Home')
      }
    }

    @Watch('userName')
    @Watch('password')
    private onUserNameChanged () {
      this.loginReady = !isStringEmpty(this.userName) && !isStringEmpty(this.password)
    }
}
</script>

<style scoped>
    .login-wrapper {
        width: 500px;
        height: 800px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 3px;
        border: 1px solid rgba(var(--b6a,219,219,219),1);
    }
    .content-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translateY(-50%);
    }
</style>
