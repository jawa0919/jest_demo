/*
 * @FilePath     : \jest_demo\src\views\wj\week02\__tests__\week02.spec.ts
 * @Date         : 2021-03-22 15:31:21
 * @Author       : wangjia <jawa0919@163.com>
 * @Description  : 第二周
 */

import { mount, shallowMount, Wrapper } from "@vue/test-utils";
import Home from "./../Home.vue";
import Hello from "./../Hello.vue";
import Form from "./../Form.vue";
import { netConfig } from "./../../../../services/api";
jest.mock("./../../../../services/api");

// 测试组件方法的调用；
describe("测试组件方法的调用", () => {
  let wrapper = shallowMount(Hello);
  it("Demo02HelloWorld.onLog()", async () => {
    expect(wrapper.classes()).toContain("hello");
    console.log("测试打印方法");
    await (wrapper.vm as any).onLog();
    console.log("打印完毕");
  });
});

// 测试父组件的是否响应了子组件发射的事件；
describe("测试父组件的是否响应了子组件发射的事件；", () => {
  let w1 = mount(Home);
  let w2 = w1.findComponent(Hello);
  it("Demo02Home Emit", async () => {
    w2.vm.$emit("change", "jest change Emit");
    await w1.vm.$nextTick();
    expect(w1.html()).toContain("jest change Emit");
  });
});

// 模拟mock api调用；
describe("模拟mock api调用；", () => {
  it("jest.fn() 简单模拟1", async () => {
    // 生成一个模拟函数
    let mockNetConfig = jest.fn();
    // 设置模拟函数的返回值
    mockNetConfig.mockReturnValue({
      status: 200,
      data: {
        name: "高安屯小程序内外网api",
        scheme: "https",
        host: "jest.fn.api",
        port: "80",
      },
    });
    // 模拟函数的执行
    let res = await mockNetConfig({ args: "def" });
    // 返回值校验
    expect(res.status).toBe(200);
    expect(res.data.host).toBe("jest.fn.api");

    // 调用情况
    // 函数被调用
    expect(mockNetConfig).toBeCalled();
    // 函数被调用了一次
    expect(mockNetConfig).toBeCalledTimes(1);
    // 函数参数校验
    expect(mockNetConfig).toHaveBeenCalledWith({ args: "def" });
  });
  it("jest.mock() 模块模拟", async () => {
    let res = await netConfig();
    // 返回值校验
    expect(res.status).toBe(200);
    expect(res.data.host).toBe("__mocks__.api.netConfig");
    // 调用情况
    // Matcher error: received value must be a mock or spy function
    // 只有 mock/spy 函数是才可获取调用情况
  });
  it("真实请求模块模拟", async () => {
    let w1 = shallowMount(Home);
    await w1.vm.$nextTick();
    expect(w1.html()).toContain("__mocks__.api.netConfig");
  });
});

// 测试表单的提交事件。
describe("测试表单的提交事件。", () => {
  const wrapper = shallowMount(Form);
  it("input name", () => {
    const inputNode = wrapper.find('input[type="text"]');
    inputNode.setValue("wangjia");
    inputNode.trigger("change");
    expect(inputNode.element.nodeValue).toContain("wangjia");
  });
  it("input pwd", () => {
    const inputNode = wrapper.find('input[type="password"]');
    inputNode.setValue("123456");
    inputNode.trigger("change");
    expect(inputNode.element.nodeValue).toBe("123456");
  });
  it("input pwd", () => {
    const inputNode = wrapper.find('input[type="checkbox"]');
    expect(inputNode.element.nodeValue).toBe(true);
  });
});
