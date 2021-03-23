<!--
 * @FilePath     : \jest_demo\src\views\wj\week02\Hello.vue
 * @Date         : 2021-03-22 15:29:34
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 
-->

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>Hello</h3>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";

@Component
export default class Hello extends Vue {
  @Prop()
  private msg!: string;

  private loadData(): void {
    console.log("--------------------------------假装加载数据Hello.loadData");
  }

  @Emit()
  private change(): string {
    return "Emit";
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
</style>
