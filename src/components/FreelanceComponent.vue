<template>
  <div class="section">
    <h5 class="section-title">Projects</h5>
    <div class="card">
      <div v-for="project in store.projects" :key="project.name">
        <!-- Title and Company -->
        <div class="card-title row">
          <div class="card-title-noun col">
            <a v-if="project.companyUrl" :href="project.companyUrl" target="_blank" rel="noopener">
              {{ project.company }}
            </a>
            <span v-else>{{ project.company }}</span>
          </div>

          <!-- Period & Location -->
          <span>
            <div class="card-meta text-right col">
              <div v-if="project.period">{{ project.period }}</div>
              <div v-if="project.location">
                {{ project.location }}
              </div>
            </div></span
          >
        </div>
        <span>
          <div class="card-description col">
            {{ project.name }}
          </div></span
        >

        <hr class="separator" />

        <div>
          <div v-if="project.items?.length">
            <div class="card-title-verb">
              {{ project.role }}
            </div>
            <ul class="card-body">
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
