<script setup lang="ts">
import bvCardKo from "@/components/bvCardKo.vue";
import bvCard from "@/components/card/bvCard.vue";
import bvComposedPolymorphic from "@/components/card/bvComposedPolymorphic.vue";
</script>
<template>
  <h3>Preguntas</h3>

  <ul>
    <li>
      ¿Qué pasa si tengo que pasar propiedades a elementos anidados
      internamente?
    </li>
    <li>¿Romperá mi componente la web?</li>
    <li>¿Cómo hago para pasar atributos de HTML al componente (id, data-*)</li>
    <li>
      ¿puedo estilizar el componmente pasándole una clase o una propiedad de
      estilo?
    </li>
    <li>¿cómo se mnanejan los eventos?</li>
  </ul>

  <h3>Respuestas / reglas</h3>
  <ul>
    <li>Renderizar un único elemento</li>
    <li>Nunca romper la app</li>
    <li>Renderizar todos los atributos de HTML pasados como props</li>
    <li>Siempre fundir los estilos pasados como props</li>
    <li>Pasar todos los manejadores de eventos pasados como props</li>
  </ul>

  <div class="grid grid-cols-2 gap-4 p-4">
    <h3>Dont's</h3>
    <h3>Do</h3>
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
