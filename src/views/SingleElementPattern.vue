<script setup lang="ts">
import bvCardKo from "@/components/bvCardKo.vue";
</script>
<template>
  <h3>Referencias</h3>
  <ul>
    <li>
      <a
        href="https://www.freecodecamp.org/news/introducing-the-single-element-pattern-dfbd2c295c5d/"
        target="_blank"
      >
        Artículo
      </a>
    </li>
    <li>
      <a href="https://github.com/diegohaz/singel" target="_blank">repo</a>
    </li>
  </ul>

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
    <div class="p-4 bg-green-200"></div>
  </div>
</template>
