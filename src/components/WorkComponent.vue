<template>
  <div class="section">
    <h5 class="section-title">Work Experience</h5>
    <div class="card">
      <div v-for="job in store.work" :key="job.company">
        <!-- Company Header -->

        <div class="card-title row">
          <div class="card-title-noun col">
            <a v-if="job.url" :href="job.url" target="_blank" rel="noopener">
              {{ job.company }}
            </a>
            <span v-else>{{ job.company }}</span>
          </div>

          <div class="card-meta text-right col">
            <div>
              {{ job.location }}
            </div>
            <div>{{ job.period }}</div>
          </div>
        </div>

        <!-- Separator -->
        <hr class="separator" />

        <!-- Roles -->
        <div v-for="role in job.roles" :key="role.title">
          <div class="card-title-verb">
            {{ role.title }}
            <span class="card-meta">
              {{ role.duration }}
            </span>
          </div>
          <!-- Items -->

          <div>
            <ul class="card-body">
              <li v-for="item in role.items" :key="item">{{ item }}</li>
            </ul>
          </div>
        </div>
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
