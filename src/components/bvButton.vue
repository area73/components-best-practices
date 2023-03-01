<script setup lang="ts"></script>
<template>
  <button type="button" class="btn">
    <slot />
  </button>
</template>

<style>
.btn {
  @apply border-2 rounded-lg text-gray-50 font-bold border-cyan-500 bg-cyan-400 px-4 py-1;
  @apply hover:bg-cyan-300  border-cyan-400;
  @apply focus:outline-4 focus:outline-double focus:outline-purple-600;
}
</style>
