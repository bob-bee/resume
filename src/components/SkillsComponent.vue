<template>
  <div class="section-title">
    <h5>Skills</h5>
  </div>
  <div class="q-pa-md">
    <div
      v-for="(skillList, category) in store.skills"
      :key="category"
      class="card-style-default card-interest q-mb-sm"
    >
      <div class="card-title q-mb-sm">
        {{ categoryLabels[category] || category }}
      </div>
      <div class="chip-group">
        <span
          v-for="(skill, index) in skillList"
          :key="`${category}-${index}`"
          class="chip-style"
          >{{ skill }}</span
        >
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
