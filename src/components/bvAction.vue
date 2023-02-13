<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>
<template>
  <button type="button" class="btn">{{ text }}</button>
</template>

<style>
.btn {
  @apply border-2 rounded-lg text-gray-50 font-bold border-cyan-500 bg-cyan-400 px-4 py-1;
  @apply hover:bg-cyan-600;
}
</style>
