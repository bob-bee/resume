<template>
  <div>
    <div class="section-title">
      <h5>Work Experience</h5>
    </div>
    <q-card
      v-for="job in store.work"
      :key="job.company"
      class="card-style-default card-interest q-mb-md"
      bordered
    >
      <!-- Company Header -->
      <q-item class="q-pa-sm">
        <q-item-section>
          <q-item-label class="card-title">
            <a v-if="job.url" :href="job.url" target="_blank" rel="noopener" class="text-primary">
              {{ job.company }}
            </a>
            <span v-else>{{ job.company }}</span>
          </q-item-label>
          <q-item-label caption class="card-meta text-grey">
            {{ job.location }}
          </q-item-label>
        </q-item-section>

        <!-- Period -->
        <q-item-section side class="text-right">
          <div class="card-meta">{{ job.period }}</div>
        </q-item-section>
      </q-item>

      <q-separator />

      <!-- Roles within the company -->
      <div v-for="role in job.roles" :key="role.title">
        <q-card-section class="card-body">
          <div class="card-subtitle">
            {{ role.title }}
            <span class="card-meta q-ml-sm">
              {{ role.duration }}
            </span>
          </div>

          <ul class="content-list">
            <li v-for="item in role.items" :key="item">{{ item }}</li>
          </ul>
        </q-card-section>

        <!-- Separator if multiple roles -->
        <q-separator v-if="job.roles.length > 1" />
      </div>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
// No scoped styles necessary. Using global classes from app.scss.
</style>
