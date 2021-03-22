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
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>密码：</span>
      <input type="password" v-model="password" />
    </div>
    <div>
      <span>记住密码：</span>
      <input type="checkbox" v-model="rememberPwd" value="记住密码" />
    </div>
    <div>
      <button @click="submit()">提交</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default class Form extends Vue {
  name = "";
  password = "";
  rememberPwd = false;

  private submit(): void {
    const { name, password, rememberPwd } = this;
    console.log("Form.submit", { name, password, rememberPwd });
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
