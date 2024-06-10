<template>
  <button
    class="button-basic"
    @click="$emit('click')"
    :disabled="props.isDisabled"
  >
    {{ props.text }}
  </button>
</template>
<script setup lang="ts">
interface Props {
  text: string;
  isDisabled: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  text: "",
  isDisabled: false,
});
</script>

<style lang="scss" scoped>
/* ボタンのスタイル */
.button-basic {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 40px;
  color: #ffffff;
  font-weight: bold;
  background-color: #80b5e7;
  border-radius: 12px;
  box-shadow: -4px -4px 8px #fff, 4px 4px 8px rgb(0 0 0 / 24%);
}
@media (any-hover: hover) {
  .button-basic {
    transition: box-shadow 0.2s;
  }

  .button-basic:hover {
    box-shadow: -2px -2px 4px #fff, 2px 2px 4px rgb(0 0 0 / 24%);
  }

  .button-basic:active {
    background-color: #6d90b1;
    box-shadow: inset 4px 4px 8px rgb(0 0 0 / 16%);
  }
}
</style>
