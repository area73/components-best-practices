<script setup lang="ts">
import bvCardKo from "@/components/bvCardKo.vue";
import bvCard from "@/components/card/bvCard.vue";
import bvComposedPolymorphic from "@/components/card/bvComposedPolymorphic.vue";
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
    <div class="p-4 bg-green-200">
      <bv-card :onClick="() => {}">
        <template #header>
          <h2>Building Components</h2>
        </template>
        <template #body
          ><img src="/src/assets/lego-blocks.jpg" alt="main picture"
        /></template>
        <template #footer>
          <bv-composed-polymorphic :as="'div'">
            <template #leading>
              <img
                src="/src/assets/enjuto.png"
                alt="avatar"
                class="rounded-full"
              />
            </template>
            <template #trailing>By Enjuto Mojamuto</template>
          </bv-composed-polymorphic>
        </template>
      </bv-card>
    </div>
  </div>
</template>
