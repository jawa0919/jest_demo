<!--
 * @FilePath     : \jest_demo\src\views\wangjia\Demo01Home.vue
 * @Date         : 2021-03-22 09:59:35
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Demo01HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <a href="https://www.baidu.com" class="link" style="color: red;">baidu</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Demo01HelloWorld from "./Demo01HelloWorld.vue"; // @ is an alias to /src

@Component({ components: { Demo01HelloWorld } })
export default class Demo01Home extends Vue {}
</script>
