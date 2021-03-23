<!--
 * @FilePath     : \jest_demo\src\views\wj\week02\Form.vue
 * @Date         : 2021-03-22 19:12:19
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="form">
    <div>
      <span>用户名：</span>
      <input class="input-user" type="text" v-model="user" />
    </div>
    <div>
      <span>密码：</span>
      <input class="input-password" type="password" v-model="password" />
    </div>
    <div>
      <span>记住密码：</span>
      <input
        class="input-password-remember"
        type="checkbox"
        v-model="rememberPwd"
        value="记住密码"
      />
    </div>
    <div>
      <button @click="submitData">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
import { submitForm } from "@/services/api";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Form extends Vue {
  user = "";
  password = "";
  rememberPwd = false;
  submitRes = {};

  async submitData() {
    const { user, password, rememberPwd } = this;
    const res = await submitForm(user, password, rememberPwd);
    this.submitRes = res.data;
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
