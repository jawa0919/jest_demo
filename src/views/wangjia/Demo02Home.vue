<!--
 * @FilePath     : \jest_demo\src\views\wangjia\Demo02Home.vue
 * @Date         : 2021-03-22 09:59:35
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Demo02HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      @change="emitString = $event"
    />
    <div>{{ emitString }}</div>
    <a href="https://www.baidu.com" class="link" style="color: red;">baidu</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Demo02HelloWorld from "./Demo02HelloWorld.vue";

@Component({ components: { Demo02HelloWorld } })
export default class Demo02Home extends Vue {
  private emitString?: string;
}
</script>
