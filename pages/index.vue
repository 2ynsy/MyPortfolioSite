<template>
  <div class="portfolio">
    <h1 class="title">ポートフォリオ</h1>
    <div class="projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <div class="project-image">
          <img :src="project.img" :alt="project.title" />
        </div>
        <div class="project-info">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const projects = [
  {
    id: 1,
    title: "フードデリバリーアプリ",
    description:
      "このアプリは、ユーザーが近くのレストランから食事を注文し、自宅やオフィスに配達してもらうことができるものです。ユーザーはメニューから料理を選択し、注文をカートに追加し、支払いを行います。レストラン側では、受注を受け取り、料理を準備して配達員に引き渡します。",
    link: "https://example.com/food-delivery-app",
    img: picTideJpg,
  },
  {
    id: 2,
    title: "ポートフォリオサイト",
    description:
      "このポートフォリオサイトは、私のプロジェクトやスキルに関する情報を提供するために作成されました。ポートフォリオページでは、過去のプロジェクトや成果物を紹介し、スキルセットをデモンストレーションします。",
    link: "https://example.com/portfolio-site",
    img: picUnitedKingdomJpg,
  },
  // 他のプロジェクトも同様に追加
];
</script>
<style scoped lang="scss">
.portfolio {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
  font-family: "Noto Sans JP", sans-serif; /* Google FontsからRobotoを読み込む */

  .title {
    text-align: center;
    margin-bottom: 40px;
    font-size: 3rem;
    color: #2c3e50; /* モダンなダークグレーの色 */
    position: relative;
    padding-bottom: 10px;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 4px;
      background-color: #3498db; /* モダンなブルーカラー */
      border-radius: 2px;
      transition: width 0.3s ease; /* ホバー解除時の遷移を追加 */
    }

    &:hover::after {
      /* ホバー時のアニメーション */
      width: 100%;
      transition: width 0.3s ease;
    }
  }
  .projects {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .project {
    background-color: #f9f9f9;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* ボックスシャドウにも遷移を追加 */

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* ホバー時の影を変更 */
    }
  }

  .project-image {
    width: 100%;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .project-info {
    padding: 20px;
    h2 {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 1.5rem;
      color: #333;
      font-weight: bold;
    }

    p {
      margin-bottom: 10px;
      font-size: 1rem;
      color: #666;
    }

    a {
      color: #007bff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #0056b3;
      }
    }
  }
}
</style>
