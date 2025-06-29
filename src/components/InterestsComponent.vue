<template>
  <div class="section-title">
    <h5>Interests</h5>
  </div>
  <div class="q-pa-md column q-gutter-md">
    <q-card
      title="Interests"
      v-for="interest in store.interests"
      :key="interest.title"
      class="interest-card"
      bordered
    >
      <q-item>
        <q-item-section>
          <q-item-label class="text-h6">{{ interest.title }}</q-item-label>
          <q-item-label caption>{{ interest.goal }}</q-item-label>
        </q-item-section>
      </q-item>

      <q-separator />

      <q-card-section v-if="interest.notes && interest.notes.length">
        <ul>
          <li v-for="note in interest.notes" :key="note">{{ note }}</li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>
