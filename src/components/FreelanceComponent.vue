<template>
  <div class="section">
    <h5 class="section-title">Projects</h5>
    <div>
      <div v-for="project in store.projects" :key="project.name" class="card-style-default">
        <!-- Title and Company -->
        <div class="resume-item project-header">
          <div class="project-info">
            <div class="card-meta">
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
            </div>
          </div>

          <!-- Period & Location -->
          <div class="card-meta text-right">
            <div v-if="project.period">{{ project.period }}</div>
            <div v-if="project.location">
              {{ project.location }}
            </div>
          </div>
        </div>

        <hr v-if="project.items?.length" class="separator" />

        <!-- Roles -->

        <!-- Items -->
        <div>
          <div class="card-subtitle">
            {{ project.name }}
          </div>

          <div v-if="project.items?.length" class="card-body role-section">
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
