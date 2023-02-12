<script setup lang="ts">
import bvAction from "@/components/bvAction.vue";
import bvButton from "@/components/bvButton.vue";
</script>

<template>
  <h2 class="py-3 text-lg">Usar la plataforma</h2>
  <div class="p-4">
    <ul class="list-disc">
      <li>intentar seguir los standards</li>
      <li>Usar nombres de componentes familiares</li>
      <li>usar nombres comunes para los atributos</li>
    </ul>
  </div>
  <div class="p-4">
    <p>
      Intentar usar la nomenclatura que ya conocemos y que es un estandar para
      la definición de componentes y de clases (kebab case).
    </p>
    <p>
      Para crear web components tienen que ser 2 o más palabras separadas con
      guión
    </p>

    <div>
      <h3>Dont's</h3>
      <bv-action text="WTF" />
      <h3>Don</h3>
      <bv-button> Allright </bv-button>
    </div>

    <div>Do</div>
  </div>
</template>
<style lang="scss">
.content {
}
</style>
