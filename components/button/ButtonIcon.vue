<template>
  <button
    class="button-icon"
    @click="$emit('click')"
    :disabled="props.isDisabled"
  >
    <img :src="props.src" />
  </button>
</template>
<script setup lang="ts">
interface Props {
  src: string;
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  src: iconSearchSvg,
  isDisabled: false,
});
</script>

<style lang="scss" scoped>
/* ボタンのスタイル */
.button-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  aspect-ratio: 1;
  color: #222;
  background-color: #efefef;
  border-radius: 50%;
  box-shadow: -4px -4px 8px #fff, 4px 4px 8px rgb(0 0 0 / 24%);
}
@media (any-hover: hover) {
  .button-icon {
    transition: box-shadow 0.2s;
  }

  .button-icon:hover {
    box-shadow: -2px -2px 4px #fff, 2px 2px 4px rgb(0 0 0 / 24%);
  }

  .button-icon:active {
    background-color: #ebebeb;
    box-shadow: inset 4px 4px 8px rgb(0 0 0 / 16%);
  }
}
</style>
