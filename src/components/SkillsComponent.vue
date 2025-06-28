<template>
  <div class="q-pa-md">
    <div v-for="(skillList, category) in store.skills" :key="category" class="q-mb-md">
      <div class="text-subtitle1 text-primary q-mb-sm">
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

// Optional label mapping if you want to display prettier category names
const categoryLabels: Record<string, string> = {
  operatingSystems: 'Operating Systems',
  networking: 'Networking',
  cloud: 'Cloud Services',
  tools: 'Tools & Utilities',
  dev: 'Development',
  admin: 'System Administration',
  softSkills: 'Soft Skills',
};
</script>

<style lang="scss" scoped>
.skill-wrapper {
  display: flex;
  flex-wrap: wrap;
}

.skill-chip {
  padding: 0.5rem 1rem;
  background-color: #f4f4f5;
  border: 1px solid #d1d5db;
  border-radius: 9999px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
  font-weight: 500;
  font-size: 0.95rem;
  color: #333;
  transition: all 0.2s ease-in-out;
  cursor: default;
  margin: 0.25rem;

  &:hover {
    background-color: #e0e0e7;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
}
</style>
