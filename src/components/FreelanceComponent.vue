<template>
  <div class="section">
    <h5 class="section-title">Projects</h5>
    <div class="card">
      <div v-for="project in store.projects" :key="project.name">
        <!-- Title and Company -->
        <div class="card-title">
          <a v-if="project.companyUrl" :href="project.companyUrl" target="_blank" rel="noopener">
            {{ project.company }}
          </a>
          <span v-else>{{ project.company }}</span>

          <!-- Period & Location -->
          <div class="card-meta">
            <div v-if="project.period">{{ project.period }}</div>
            <div v-if="project.location">
              {{ project.location }}
            </div>
          </div>
        </div>

        <hr class="separator" />

        <!-- Roles -->

        <!-- Items -->
        <div>
          <div class="card-subtitle">
            {{ project.name }}
          </div>
          <div class="card-subtitle">
            {{ project.role }}
          </div>

          <div v-if="project.items?.length" class="card-body">
            <ul>
              <li v-for="item in project.items" :key="item">{{ item }}</li>
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
<style lang="scss" scoped></style>
