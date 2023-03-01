<script setup lang="ts">
const props = defineProps<{
  as: "li" | "div";
}>();
</script>
<template>
  <li v-if="props.as === 'li'" class="bv-composed-poly">
    <span class="pr-4 bv-composed-poly__leading"><slot name="leading" /></span>
    <span class="bv-composed-poly__trailing"><slot name="trailing" /></span>
  </li>
  <div v-if="props.as === 'div'">
    <span class="pr-4 bv-composed-poly__leading"><slot name="leading" /></span>
    <span class="bv-composed-poly__trailing"><slot name="trailing" /></span>
  </div>
</template>
<style></style>
