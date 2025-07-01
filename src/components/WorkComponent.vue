<template>
  <div class="section">
    <h5 class="section-title">Work Experience</h5>
    ">
    <div v-for="job in store.work" :key="job.company" class="card-style-default">
      <!-- Company Header -->

      <div class="card-title">
        <a v-if="job.url" :href="job.url" target="_blank" rel="noopener" class="text-primary">
          {{ job.company }}
        </a>
        <span v-else>{{ job.company }}</span>

        <div class="card-meta text-right">
          <div>
            {{ job.location }}
          </div>
          <div>{{ job.period }}</div>
        </div>
      </div>

      <!-- Separator -->
      <hr class="separator" />

      <!-- Roles -->
      <div v-for="role in job.roles" :key="role.title" class="card-body role-section">
        <div class="card-subtitle">
          {{ role.title }}
          <span class="card-meta text-right">
            {{ role.duration }}
          </span>
        </div>
        <!-- Items -->

        <ul class="content-list">
          <li v-for="item in role.items" :key="item">{{ item }}</li>
        </ul>
      </div>
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
