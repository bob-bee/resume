<template>
  <q-page padding>
    <!-- You can optionally use <q-header> inside here -->
    <ContactComponent />
  </q-page>
</template>

<script setup lang="ts">
// No need to import store or call fetch here anymore
import ContactComponent from 'src/components/input/ContactComponent.vue';
</script>
