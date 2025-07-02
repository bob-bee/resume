<template>
  <div class="section">
    <h5 class="section-title">Skills</h5>
    <div class="card">
      <div v-for="(skillList, category) in store.skills" :key="category">
        <div class="q-pa-sm row wrap">
          <!-- Category Label (2 cols) -->
          <div class="col-2 skill-category q-pa-sm">
            {{ categoryLabels[category] || category }}
          </div>

          <!-- Skills List (10 cols) -->
          <div class="col-10 q-pa-sm skill-list bordered rounded">
            <div class="row q-col-gutter-sm q-row-gutter-sm">
              <span v-for="(skill, index) in skillList" :key="`${category}-${index}`" class="">
                <q-chip class="chip col-auto q-pa-xs q-mb-xs q-mr-xs">{{ skill }}</q-chip>
              </span>
            </div>
          </div>
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
.chip {
  display: inline-block;
  background-color: var(--q-color-accent, #e0e0e0);
  color: #333;
  padding: 4px 10px;
  border-radius: 16px;
  font-size: 0.875rem;
  line-height: 1;
}
</style>
