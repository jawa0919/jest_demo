<!--
 * @FilePath     : \jest_demo\src\views\wj\week01\Home.vue
 * @Date         : 2021-03-22 15:28:30
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="home">
    <img alt="Vue logo" src="./../../../assets/logo.png" />
    <Hello msg="Welcome to Your Vue.js + TypeScript App" />
    <a href="https://www.baidu.com" class="link" style="color: red;">baidu</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Hello from "./Hello.vue";

@Component({ components: { Hello } })
export default class Home extends Vue {}
</script>
