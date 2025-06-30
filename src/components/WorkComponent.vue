<template>
  <div class="section">
    <h5 class="section-title">Work Experience</h5>
    <div class="q-pa-md column q-gutter-md">
      <q-card v-for="job in store.work" :key="job.company" class="card-style-default" bordered>
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

          <q-item-section side class="text-right">
            <div class="card-meta">{{ job.period }}</div>
          </q-item-section>
        </q-item>

        <!-- Roles -->
        <q-separator />

        <q-card-section v-for="role in job.roles" :key="role.title" class="card-body">
          <div class="card-subtitle">
            {{ role.title }}
            <span class="card-meta" style="margin-inline-start: 0.5rem">
              {{ role.duration }}
            </span>
          </div>

          <ul class="content-list">
            <li v-for="item in role.items" :key="item">{{ item }}</li>
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
// Styling assumed to be global or handled by card-style-default
</style>
