import { mountSuspended } from "@nuxt/test-utils/runtime";
import ButtonIcon from "@/components/button/ButtonIcon.vue";

describe("ButtonIcon.vue", () => {
  test("button icon is rendered with default props", async () => {
    // コンポーネントをマウントする
    const wrapper = await mountSuspended(ButtonIcon);

    // img要素を検証する
    const imgElement = wrapper.find("img");
    expect(imgElement.exists()).toBe(true);

    // propsのデフォルト値を確認する
    expect(imgElement.attributes("src")).toBe(iconSearchSvg);
    expect(wrapper.props().isDisabled).toBeFalsy();
  });

  test("button is disabled when isDisabled prop is true", async () => {
    // プロパティとしてisDisabledをtrueでコンポーネントをマウントする
    const wrapper = await mountSuspended(ButtonIcon, {
      propsData: {
        isDisabled: true,
      },
    });

    // ボタンが無効化されていることを確認する
    expect(wrapper.emitted("click")).toBeFalsy();
  });

  test("click event is emitted when button is clicked", async () => {
    // コンポーネントをマウントする
    const wrapper = await mountSuspended(ButtonIcon);

    // ボタンをクリックする
    await wrapper.find("button").trigger("click");

    // clickイベントが発行されたことを確認する
    expect(wrapper.emitted()).toHaveProperty("click");
  });
});
