<script setup lang="ts">
import bvAction from "@/components/bvAction.vue";
import bvButton from "@/components/bvButton.vue";
import bvLink from "@/components/bvLink.vue";
import bvComposedListKo from "@/components/bvComposedListKo.vue";
import bvComposedListOk from "@/components/bvComposedListOk.vue";
import IconTooling from "@/components/icons/IconTooling.vue";
</script>

<template>
  <h2 class="py-3 text-lg">Usar la plataforma</h2>
  <div class="p-4">
    <ol class="list-decimal">
      <li>intentar seguir los standards</li>
      <li>Usar nombres de componentes familiares</li>
      <li>usar nombres comunes para los atributos</li>
      <li>menos props y más slots</li>
    </ol>
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

    <div class="grid grid-cols-comparation gap-4 pt-4">
      <h3 class="col-span-2">Dont's</h3>
      <h3>Do</h3>
      <div>1,2</div>
      <div class="bg-red-100 p-4">
        <bv-action text="WTF" />
      </div>
      <div class="p-4 bg-green-200">
        <bv-button> Allright </bv-button>
      </div>
      <div>3</div>
      <div class="bg-red-100 p-4">
        <bv-link url="http://belvo.com">this is a link</bv-link>
      </div>
      <div class="p-4 bg-green-200">???</div>
      <div>4</div>
      <div class="bg-red-100 p-4">
        <ul>
          <bv-composed-list-ko
            :leading="{ icon: IconTooling }"
            trailing="wadus wadus"
          />
        </ul>
      </div>
      <div class="p-4 bg-green-200">
        <ul>
          <bv-composed-list-ok>
            <template #leading><icon-tooling /></template>
            <template #trailing>foo bar</template>
          </bv-composed-list-ok>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.content {
}
</style>
