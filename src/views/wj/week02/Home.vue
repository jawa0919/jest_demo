<!--
 * @FilePath     : \jest_demo\src\views\wj\week02\Home.vue
 * @Date         : 2021-03-22 15:28:30
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="home">
    <img alt="Vue logo" src="./../../../assets/logo.png" />
    <Hello msg="Welcome to Your Vue.js + TypeScript App" @change="change" />
    <a href="https://www.baidu.com" class="link" style="color: red;">baidu</a>
    <p>{{ emitString }}</p>
    <p v-if="host">{{ host }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello from "./Hello.vue";
import { netConfig } from "@/services/api";

@Component({ components: { Hello } })
export default class Home extends Vue {
  constructor() {
    super();
    console.log("🚀 ~ file: Home.vue ~ line 27 constructor");
  }
  private emitString = "emitString Def";
  private host = "";

  async onLoad() {
    console.log("🚀 ~ file: Home.vue ~ line 33 onLoad");
  }

  async loadData() {
    const { data } = await netConfig();
    this.host = data.host;
  }

  change(str: string): void {
    this.emitString = str;
  }
}
</script>
