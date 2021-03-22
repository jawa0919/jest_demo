<!--
 * @FilePath     : \jest_demo\src\views\wangjia\Demo02HelloWorld.vue
 * @Date         : 2021-03-22 10:58:05
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Demo02HelloWorld</h3>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Demo02HelloWorld extends Vue {
  @Prop()
  private msg!: string;

  private onLog(): void {
    console.log("Demo02HelloWorld.onLog() run");
  }

  @Emit()
  private change(): string {
    return "Emit ";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
