<script setup lang="ts">
import bvCardKo from "@/components/bvCardKo.vue";
</script>
<template>
  <div class="grid grid-cols-2 gap-4 p-4">
    <div class="bg-red-100 p-4">
      <bv-card-ko
        author="By Enjuto Mojamuto"
        title="Building Blocks"
        thumb="/src/assets/enjuto.png"
        img="/src/assets/lego-blocks.jpg"
        link="http://www.google.com"
      />
    </div>
    <div class="p-4 bg-green-200">// TODO</div>
  </div>
</template>
