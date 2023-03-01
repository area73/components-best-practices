<script setup lang="ts">
import bvHeader from "./bvHeader.vue";
const props = defineProps<{
  title: string;
  thumb: string;
  img: string;
  link: string;
  author: string;
}>();

const onclick = (_ev: MouseEvent) => {
  window.alert(props.link);
};
</script>
<template>
  <div class="bv-card-ko" @click="onclick">
    <div>
      <bv-header :as="'H2'" class="header" :text="title" />
    </div>
    <div class="border-y"><img :src="img" alt="main picture" /></div>
    <div class="grid grid-cols-avatar items-center gap-2 p-4 bg-yellow-100">
      <span class="w-8">
        <img :src="thumb" alt="avatar" class="rounded-full" />
      </span>
      <span>{{ author }}</span>
    </div>
  </div>
</template>
<!-- problema de scoped con H2 enn un componente anidado-->
<style scoped lang="scss">
.bv-card-ko {
  @apply border-2 border-neutral-800 bg-white;
  @apply hover:shadow-xl hover:shadow-indigo-400 hover:cursor-pointer hover:outline-2 hover:outline-cyan-700;
}
// error de un componente anidado al usar scoped
h2 {
  @apply font-bold text-lg p-6 text-center;
}

.header {
  @apply font-bold text-lg p-6 text-center;
}
</style>
