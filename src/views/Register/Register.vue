<template>
    <div style="display: flex; justify-content: center; ">
        <div class="register-wrapper">
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
                    @click.native="onRegister"
                    style="transform: translateY(-100%);"
                    outlined
                    :disabled="!registerReady"
                >Register
                </v-btn>
                <h4
                    @click="onNavigate"
                    style="border-bottom: 1px solid black; cursor: pointer; "
                >Already have account?</h4>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ActionParam, ActionTypes } from '@/store/actions/action-types'
import { Vue, Component, Watch } from 'vue-property-decorator'
import { Action } from 'vuex-class'
import { isStringEmpty } from '../../utils/helpers'

@Component
export default class Register extends Vue {
    @Action(ActionTypes.REGISTER) private register !: (param: ActionParam[ActionTypes.REGISTER]) => Promise<boolean>;

    private userName = '';
    private password = '';
    private registerReady = false;

    private onNavigate () {
      this.$emit('onNavigate', 'Login')
    }

    private async onRegister () {
      const param = {
        userName: this.userName,
        password: this.password
      }
      const succeed = await this.register(param)

      if (succeed) {
        this.$emit('onNavigate', 'Login')
      }
    }

    @Watch('userName')
    @Watch('password')
    private onUserNameChanged () {
      this.registerReady = !isStringEmpty(this.userName) && !isStringEmpty(this.password)
    }
}
</script>

<style scoped>
    .register-wrapper {
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
