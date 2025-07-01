<template>
  <div class="section">
    <h5 class="section-title">Academia</h5>
    <div class="q-pa-md column q-gutter-md">
      <q-card v-for="edu in store.education" :key="edu.degree" class="card-style-default" bordered>
        <!-- Degree & Institution -->
        <q-item class="q-pa-sm">
          <q-item-section>
            <q-item-label class="card-subtitle">
              {{ edu.degree }}
            </q-item-label>
            <q-item-label caption class="card-meta text-primary">
              {{ edu.institution }}
            </q-item-label>
          </q-item-section>

          <!-- Period & Location -->
          <q-item-section side class="card-meta text-right">
            <div>{{ edu.period }}</div>
            <div>
              {{ edu.location }}
            </div>
          </q-item-section>
        </q-item>

        <!-- Highlights -->
        <q-separator />
        <q-card-section class="card-body">
          <ul>
            <li v-for="item in edu.highlights" :key="item">
              {{ item }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
// No scoped styles needed; all visual design is handled globally.
</style>
