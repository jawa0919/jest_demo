import { mount, shallowMount, Wrapper } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import Home from "@/views/Home.vue";
import Demo1 from "@/views/Demo1.vue";

// 钩子beforeEach/afterEach在describe方法内外部的流向
// 手动wrapper.describe触发钩子beforeEach/afterEach

// shallowMount和mount的区别
// 加载深浅的问题，shallowMount不加载组件

// dom的prop/class/style的验证
//  find  attributes  classes 函数

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});

describe("Home.vue", () => {
  it("shallowMount", () => {
    const wrapper = shallowMount(Home);
    const h: Wrapper<HelloWorld> = wrapper.findComponent(HelloWorld);
    expect(h.text()).toMatch("Welcome to Your Vue.js + TypeScript App");
  });
  it("mount", () => {
    const wrapper = mount(Home);
    const h: Wrapper<HelloWorld> = wrapper.findComponent(HelloWorld);
    expect(h.text()).toMatch("Welcome to Your Vue.js + TypeScript App");
  });
});

describe("Demo1.vue", () => {
  const wrapper: Wrapper<Demo1> = shallowMount(Demo1);
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
