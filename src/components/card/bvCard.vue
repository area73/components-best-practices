<script setup lang="ts">
const props = defineProps<{
  onClick: (ev: MouseEvent) => void;
}>();
</script>
<template>
  <div class="bv-card" @click="(ev:MouseEvent) => props.onClick">
    <div class="bv-card__header"><slot name="header" /></div>
    <div class="bv-card__body"><slot name="body" /></div>
    <div class="bv-card__footer"><slot name="footer" /></div>
  </div>
</template>

<style lang="scss">
.bv-card {
  @apply border-2 border-neutral-800 bg-white;
  @apply hover:shadow-xl hover:shadow-indigo-400 hover:cursor-pointer hover:outline-2 hover:outline-cyan-700;

  &__header {
    @apply font-bold text-lg p-6 text-center;
  }
  &__body {
  }

  &__footer {
    @apply grid grid-cols-avatar items-center gap-2 p-4 bg-yellow-100;
  }
}
</style>
