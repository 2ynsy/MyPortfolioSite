<template>
  <header class="header">
    <div class="header-title">basil</div>
    <div class="header-content">
      <nav class="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="dropdown">
            <a href="#">Portfolio</a>
            <div class="dropdown-content">
              <a href="#">Project 1</a>
              <a href="#">Project 2</a>
              <a href="#">Project 3</a>
            </div>
          </li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <FormSearch />
    </div>
  </header>
</template>
<script setup lang="ts"></script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #333;
  color: #fff;
  &-title {
    color: #f0f0f0;
    font-weight: bold;
  }
  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.header-title {
  color: #f0f0f0;
  font-weight: bold;
}
.header-navigation {
  display: flex;
  gap: 10px;
}
.nav ul {
  list-style: none;
  display: flex;
}

.nav ul li {
  margin-right: 1rem;
}

.nav ul li a {
  color: inherit;
  text-decoration: none;
  transition: color 0.3s ease;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -2px; /* 下線がリンクのテキストの下に表示されるように位置調整 */
    left: 0;
    width: 100%;
    height: 2px; /* 下線の太さ */
    background-color: #3498db; /* モダンなブルーカラー */
    border-radius: 1px;
    transform: scaleX(0); /* 初期状態では下線を非表示 */
    transition: transform 0.3s ease; /* ホバー時の遷移 */
  }

  &:hover::after {
    transform: scaleX(1); /* ホバー時に下線を表示 */
  }
}

/* Dropdown menu styles */
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #333;
  min-width: 160px;
  z-index: 1;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dropdown:hover .dropdown-content {
  display: block;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-content a {
  color: #fff;
  padding: 0.75rem 1rem;
  display: block;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
  background-color: #666;
}
</style>
