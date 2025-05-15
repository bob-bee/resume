<script setup lang="ts">
import HeaderComponent from 'src/components/HeaderComponent.vue';
</script>

<template>
  <div class="q-pa-md">
    <q-layout
      view="lHh lpr lFf"
      container
      style="block-size: 400px"
      class="shadow-2 rounded-borders"
    >
      <HeaderComponent />
      <q-page-container>
        <q-page> </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
