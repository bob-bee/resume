<template>
  <div>
    <q-card
      v-for="project in store.projects"
      :key="project.name"
      class="card-style-default q-mb-md"
      bordered
    >
      <!-- Title and Company -->
      <q-item class="resume-item">
        <q-item-section>
          <q-item-label class="card-title">{{ project.name }}</q-item-label>
          <q-item-label caption class="card-meta">
            <a
              v-if="project.companyUrl"
              :href="project.companyUrl"
              target="_blank"
              rel="noopener"
              class="text-primary"
            >
              {{ project.company }}
            </a>
            <span v-else>{{ project.company }}</span>
          </q-item-label>
        </q-item-section>

        <!-- Period & Location -->
        <q-item-section side class="text-right">
          <div class="card-meta">{{ project.period }}</div>
          <div v-if="project.location" class="card-meta text-caption text-grey">
            {{ project.location }}
          </div>
        </q-item-section>
      </q-item>

      <q-separator />

      <!-- Items -->
      <q-card-section class="card-body">
        <ul class="content-list">
          <li v-for="item in project.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
// Removed – styles now centralized in app.scss
</style>
