<script setup lang="ts">
const props = defineProps<{
  url: string;
}>();
</script>
<template>
  <a class="link" :href="url"> <slot></slot> </a>
</template>

<style>
.link {
  @apply text-green-600 underline;
  @apply hover:bg-green-300;
  @apply focus:outline-4 focus:outline-double focus:outline-purple-600;
}
</style>
