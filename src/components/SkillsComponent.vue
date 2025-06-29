<template>
  <div class="section">
    <h5 class="q-mb-md section-title">Skills</h5>
    <div class="q-pa-none">
      <div v-for="(skillList, category) in store.skills" :key="category" class="q-mb-sm">
        <span class="category-chip">
          {{ categoryLabels[category] || category }}
        </span>
        <div class="chip-group">
          <span
            v-for="(skill, index) in skillList"
            :key="`${category}-${index}`"
            class="chip-style"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();

const categoryLabels: Record<string, string> = {
  operatingSystems: 'Operating Systems',
  networking: 'Networking',
  cloudPlatforms: 'Cloud Platforms',
  devOpsTools: 'DevOps & Tools',
  databases: 'Databases',
  analyticsAndBI: 'Analytics & BI',
  webDevelopment: 'Web Development',
  scriptingAndAutomation: 'Scripting & Automation',
  administration: 'Administration',
  softSkills: 'Soft Skills',
  languages: 'Languages',
  otherTech: 'Other Technologies',
};
</script>

<style scoped lang="scss">
// No local styles here — everything comes from global app.scss
</style>
