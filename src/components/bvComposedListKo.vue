<script setup lang="ts">
const props = defineProps<{
  leading: { icon: any };
  trailing: string;
}>();
</script>
<template>
  <li>
    <span class="pr-4"> <component :is="leading.icon" /></span>
    <span>{{ trailing }}</span>
  </li>
</template>
<style></style>
