<script setup lang="ts">
const props = defineProps<{
  as: "H1" | "H2" | "H3" | "H4";
  text: string;
}>();
</script>
<template>
  <template v-if="props.as === 'H1'">
    <h1 class="bv-header">{{ text }}</h1>
  </template>
  <template v-if="props.as === 'H2'">
    <h2 class="bv-header">{{ text }}</h2>
  </template>
  <template v-if="props.as === 'H3'">
    <h3 class="bv-header">{{ text }}</h3>
  </template>
  <template v-if="props.as === 'H4'">
    <h4 class="bv-header">{{ text }}</h4>
  </template>
</template>
<style lang="scss">
.bv-header {
  &--h1 {
    font-size: 48px;
  }
  &--h2 {
    font-size: 24px;
  }
  &--h3 {
    font-size: 20px;
  }
  &--h4 {
    font-size: 18px;
  }
}
</style>
