// import { mount, shallowMount } from "@vue/test-utils";
// import HelloWorld from "@/components/HelloWorld.vue";

// import Demo01Home from "@/views/wangjia/Demo01Home.vue";
// import Demo01HelloWorld from "@/views/wangjia/Demo01HelloWorld.vue";

// import Demo02Home from "@/views/wangjia/Demo02Home.vue";
// import Demo02HelloWorld from "@/views/wangjia/Demo02HelloWorld.vue";

// describe("HelloWorld.vue", () => {
//   it("renders props.msg when passed", () => {
//     const msg = "new message";
//     const wrapper = shallowMount(HelloWorld, { propsData: { msg } });
//     expect(wrapper.text()).toMatch(msg);
//   });
// });

// // 钩子beforeEach/afterEach在describe方法内外部的流向
// // 手动wrapper.describe触发钩子beforeEach/afterEach
// describe("钩子beforeEach/afterEach在describe方法内外部的流向", () => {
//   beforeEach(() => {
//     console.log("beforeEach test in describe");
//   });
//   afterEach(() => {
//     console.log("afterEach test in describe");
//   });
//   expect(true).toBeTruthy();
// });

// // shallowMount和mount的区别
// // 加载深浅的问题，shallowMount不加载组件
// describe("shallowMount和mount的区别", () => {
//   it("shallowMount", () => {
//     const wrapper = shallowMount(Demo01Home);
//     const h = wrapper.findComponent<Demo01HelloWorld>(Demo01HelloWorld);
//     expect(h).toBeDefined();
//   });
//   it("mount", () => {
//     const wrapper = mount(Demo01Home);
//     const h = wrapper.findComponent(Demo01HelloWorld);
//     expect(h).not.toBeUndefined();
//   });
// });

// // dom的prop/class/style的验证
// //  find  attributes  classes 函数
// describe("dom的prop/class/style的验证", () => {
//   const wrapper = shallowMount(Demo01Home);
//   it("验证a标签的href属性是'https://www.baidu.com'", () => {
//     const hrefStr: string = wrapper.find("a").attributes("href") || "";
//     expect(hrefStr).toBe("https://www.baidu.com");
//   });
//   it("验证a标签的字体颜色是‘red’", () => {
//     const styleStr: string = wrapper.find("a").attributes("style") || "";
//     expect(styleStr).toContain("red");
//   });
//   it("验证a标签的className含有‘link’", () => {
//     expect(wrapper.find("a").classes("link")).toBe(true);
//   });
// });

// // 测试组件方法的调用；
// describe("测试组件方法的调用", () => {
//   let wrapper = shallowMount(Demo02HelloWorld);
//   it("Demo02HelloWorld.onLog()", async () => {
//     expect(wrapper.classes()).toContain("hello");
//     console.log("测试打印方法");
//     await (wrapper.vm as any).onLog();
//     console.log("打印完毕");
//   });
// });

// // 测试父组件的是否响应了子组件发射的事件；
// describe("测试父组件的是否响应了子组件发射的事件；", () => {
//   let w1 = mount(Demo02Home);
//   let w2 = w1.findComponent(Demo02HelloWorld);
//   it("Demo02Home Emit", async () => {
//     w2.vm.$emit("chang", "jest change Emit");
//     console.log(w1.html());
//   });
// });

// // 模拟mock api调用；

// // 测试表单的提交事件。
