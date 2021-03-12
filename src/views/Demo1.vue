<!--
 * @FilePath     : \jest_demo\src\views\Demo1.vue
 * @Date         : 2021-03-12 17:24:37
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 第一周
-->

<template>
  <div class="Demo1">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a href="https://www.baidu.com" class="link" style="color: red;">baidu</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class Demo1 extends Vue {
  constructor() {
    super();
    console.log("constructor Demo1");
  }
}
</script>
