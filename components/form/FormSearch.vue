<template>
  <form class="search-form" @submit.prevent="submitSearch">
    <input type="text" v-model="searchText" placeholder="Search..." />
    <button type="submit"><img :src="iconSearchSvg"</button>
  </form>
</template>

<script setup lang="ts">
const searchText = ref<string>("");
const emit = defineEmits();

const submitSearch = () => {
  if (searchText.value.trim() !== "") {
    emit("search", searchText.value.trim());
  }
};
</script>

<style scoped lang="scss">
.search-form {
  display: flex;
  align-items: center;
}

.search-form input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 0.5rem;
}

.search-form button {
  padding: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.search-form button img {
  width: 1.5rem;
  height: 1.5rem;
}
</style>
