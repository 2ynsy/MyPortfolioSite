import { mountSuspended } from "@nuxt/test-utils/runtime";
import ButtonBasic from "~/components/button/ButtonBasic.vue";

describe("ButtonBasic", async () => {
  test("正しく描画される", async () => {
    // コンポーネントをマウントし、描画が完了するのを待つ
    const wrapper = await mountSuspended(ButtonBasic, {
      props: {
        text: "クリック",
        isDisabled: false,
      },
    });

    // ボタンが存在することを確認
    expect(wrapper.find(".button-basic").exists()).toBe(true);
    // ボタンのテキストを確認
    expect(wrapper.text()).toContain("クリック");
    // ボタンが無効でないことを確認
    expect(wrapper.find(".button-basic").attributes("disabled")).toBeFalsy();
  });

  test("クリックイベントが発生する", async () => {
    const wrapper = await mountSuspended(ButtonBasic, {
      props: {
        text: "クリック",
        isDisabled: false,
      },
    });

    // クリックイベントをトリガー
    await wrapper.find(".button-basic").trigger("click");

    // クリックイベントが発生したことを確認
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  test("isDisabledがtrueの場合、ボタンはクリックイベントを発火しない", async () => {
    // コンポーネントをマウント
    const wrapper = await mountSuspended(ButtonBasic, {
      props: {
        text: "テスト",
        isDisabled: true,
      },
    });

    // ボタン要素を取得
    const button = wrapper.find(".button-basic");

    // ボタンをクリック
    await button.trigger("click");

    // クリックイベントが発生していないことを確認
    expect(wrapper.emitted("click")).toBeFalsy();
  });
});
