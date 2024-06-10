import { mountSuspended } from "@nuxt/test-utils/runtime";
import FormSearch from "@/components/form/FormSearch.vue";

describe("FormSearch", () => {
  test("search text input and submit button are rendered", async () => {
    // コンポーネントをマウントする
    const wrapper = await mountSuspended(FormSearch);

    // 検索テキスト入力と送信ボタンを検証する
    expect(wrapper.find('input[type="text"]').exists()).toBe(true);
    expect(wrapper.find('button[type="submit"]').exists()).toBe(true);
  });

  test("submitSearch emits search event with trimmed searchText", async () => {
    // コンポーネントをマウントする
    const wrapper = await mountSuspended(FormSearch);

    // テキストを入力する
    await wrapper.find('input[type="text"]').setValue("   query   ");

    // フォームを送信する
    await wrapper.find("form").trigger("submit.prevent");

    // 正しいイベントが発行されたことを確認する
    expect(wrapper.emitted()).toHaveProperty("search");
    expect(wrapper.emitted().search[0]).toEqual(["query"]);
  });

  test("submitSearch does not emit search event when searchText is empty", async () => {
    // コンポーネントをマウントする
    const wrapper = await mountSuspended(FormSearch);

    // フォームを送信する（テキストが空の状態）
    await wrapper.find("form").trigger("submit.prevent");

    // searchイベントが発行されなかったことを確認する
    expect(wrapper.emitted()).not.toHaveProperty("search");
  });
});
