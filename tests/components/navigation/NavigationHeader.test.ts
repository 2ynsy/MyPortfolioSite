// testファイル内でのインポート
import { mountSuspended } from "@nuxt/test-utils/runtime";
import NavigationHeader from "@/components/navigation/NavigationHeader.vue"; // Header.vueのパスに応じて変更してください

describe("Header", () => {
  it("renders header with correct elements", async () => {
    // Headerコンポーネントをマウント
    const wrapper = await mountSuspended(NavigationHeader);

    // テスト対象の要素が存在することを確認
    expect(wrapper.find(".header").exists()).toBeTruthy;
    expect(wrapper.find(".header-title").exists()).toBeTruthy;
    expect(wrapper.find(".nav").exists()).toBeTruthy;
    expect(wrapper.find(".header-navigation").exists()).toBeTruthy;
    expect(wrapper.find("FormSearch-stub").exists()).toBeTruthy; // FormSearchが正しくレンダリングされているかを確認

    // ナビゲーションの要素が正しいかを確認
    const navLinks = wrapper.findAll(".nav ul li a");
    expect(navLinks.length).toBe(7); // ナビゲーションリンクの数が4つであることを確認

    // ナビゲーションリンクのテキストが正しいかを確認
    expect(navLinks[0].text()).toBe("Home");
    expect(navLinks[1].text()).toBe("About");
    expect(navLinks[2].text()).toBe("Portfolio");
    expect(navLinks[6].text()).toBe("Contact");
  });
});
