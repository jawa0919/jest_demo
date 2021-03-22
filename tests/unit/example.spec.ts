import { mount, shallowMount, Wrapper } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    let wrapper = shallowMount(HelloWorld, { propsData: { msg } });
    expect(wrapper.text()).toMatch(msg);
  });
});
