<!--
 * @FilePath     : \jest_demo\src\views\wangjia\Demo01HelloWorld.vue
 * @Date         : 2021-03-22 10:01:48
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Demo01HelloWorld</h3>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Demo01HelloWorld extends Vue {
  @Prop()
  private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
