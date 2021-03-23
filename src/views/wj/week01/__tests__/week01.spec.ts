/*
 * @FilePath     : \jest_demo\src\views\wj\week01\__tests__\week01.spec.ts
 * @Date         : 2021-03-22 15:31:21
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 第一周
 */

import { mount, shallowMount, Wrapper } from "@vue/test-utils";
import Home from "./../Home.vue";
import Hello from "./../Hello.vue";

// 钩子beforeEach/afterEach在describe方法内外部的流向
// 手动wrapper.describe触发钩子beforeEach/afterEach
describe("钩子beforeEach/afterEach在describe方法内外部的流向", () => {
  beforeEach(() => {
    console.log("beforeEach test in describe");
  });
  afterEach(() => {
    console.log("afterEach test in describe");
  });
  expect(true).toBeTruthy();
});

// shallowMount和mount的区别
// 加载深浅的问题，shallowMount不加载组件
describe("shallowMount和mount的区别", () => {
  it("shallowMount", () => {
    const wrapper = shallowMount(Home);
    let helloWrapper = wrapper.findComponent<Hello>({ name: "Hello" });
    expect(helloWrapper).toBeDefined();
  });
  it("mount", () => {
    const wrapper = mount(Home);
    let helloWrapper = wrapper.findComponent<Hello>({ name: "Hello" });
    expect(helloWrapper).not.toBeUndefined();
  });
});

// dom的prop/class/style的验证
//  find  attributes  classes 函数
describe("dom的prop/class/style的验证", () => {
  const wrapper = shallowMount(Home);
  it("验证a标签的href属性是'https://www.baidu.com'", () => {
    const hrefStr: string = wrapper.find("a").attributes("href") || "";
    expect(hrefStr).toBe("https://www.baidu.com");
  });
  it("验证a标签的字体颜色是‘red’", () => {
    const styleStr: string = wrapper.find("a").attributes("style") || "";
    expect(styleStr).toContain("red");
  });
  it("验证a标签的className含有‘link’", () => {
    expect(wrapper.find("a").classes("link")).toBe(true);
  });
});
