<template>
  <div class="section">
    <h5 class="section-title">Projects</h5>
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
            <q-item-label class="card-subtitle">{{ project.name }}</q-item-label>
            <q-item-label caption class="card-meta">
              <a
                v-if="project.companyUrl"
                :href="project.companyUrl"
                target="_blank"
                rel="noopener"
                class="card-title text-primary"
              >
                {{ project.company }}
              </a>
              <span v-else>{{ project.company }}</span>
            </q-item-label>
          </q-item-section>

          <!-- Period & Location -->
          <q-item-section side class="text-right">
            <div v-if="project.period" class="card-meta">{{ project.period }}</div>
            <div v-if="project.location" class="card-meta text-caption text-grey">
              {{ project.location }}
            </div>
          </q-item-section>
        </q-item>

        <q-separator v-if="project.items?.length" />

        <!-- Items -->
        <q-card-section v-if="project.items?.length" class="card-body">
          <ul class="q-pa-md">
            <li v-for="item in project.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
// Removed – styles now centralized in app.scss
</style>
