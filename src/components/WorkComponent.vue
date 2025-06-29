<template>
  <div class="section">
    <h5 class="section-title">Work Experience</h5>

    <div v-for="job in store.work" :key="job.company" class="card-style-default card-interest">
      <!-- Company Header -->
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: flex-start">
          <div>
            <div class="card-title">
              <a v-if="job.url" :href="job.url" target="_blank" rel="noopener" class="text-primary">
                {{ job.company }}
              </a>
              <span v-else>{{ job.company }}</span>
            </div>
            <div class="card-meta text-grey">
              {{ job.location }}
            </div>
          </div>
          <div class="card-meta" style="text-align: right">
            {{ job.period }}
          </div>
        </div>
      </div>

      <!-- Roles within the company -->
      <div v-for="role in job.roles" :key="role.title">
        <div class="card-body">
          <div class="card-subtitle">
            {{ role.title }}
            <span class="card-meta" style="margin-inline-start: 0.5rem">
              {{ role.duration }}
            </span>
          </div>

          <ul class="content-list">
            <li v-for="item in role.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
// No scoped styles necessary. Using global classes from app.scss.
</style>
