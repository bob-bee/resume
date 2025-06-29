<template>
  <div class="q-pa-md">
    <div v-for="(skillList, category) in store.skills" :key="category" class="skill-section">
      <div class="section-header">
        {{ categoryLabels[category] || category }}
      </div>
      <div class="skill-wrapper">
        <div v-for="(skill, index) in skillList" :key="`${category}-${index}`" class="skill-chip">
          {{ skill }}
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
.skill-section {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-block-end: 0.5rem;
  background-color: #ffffff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.section-header {
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-block-end: 0.5rem;
}

.skill-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
}

.skill-chip {
  padding: 0.3rem 0.75rem;
  background-color: #f3f4f6;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  font-size: 0.85rem;
  font-weight: 500;
  color: #374151;
  white-space: nowrap;
  transition: 0.2s ease;
  cursor: default;

  &:hover {
    background-color: #e5e7eb;
  }
}
</style>
