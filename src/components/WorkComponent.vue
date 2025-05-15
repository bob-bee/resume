<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card" flat bordered>
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Title</q-item-label>
          <q-item-label caption> Subhead </q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section horizontal>
        <q-card-section>
          {{ lorem }}
        </q-card-section>

        <q-separator vertical />

        <q-card-section class="col-4">
          {{ lorem }}
        </q-card-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
// ...
const lorem = 'lorem';
</script>
<style lang="sass" scoped>
.my-card
  inline-size: 100%
  max-inline-size: 350px
</style>
