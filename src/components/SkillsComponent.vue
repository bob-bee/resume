<template>
  <div class="section">
    <h5 class="q-mb-md section-title">Skills</h5>
    <div class="q-pa-md">
      <q-card
        v-for="(skillList, category) in store.skills"
        :key="category"
        class="card-style-default"
        bordered
      >
        <q-card-section class="q-pa-sm">
          <div class="row wrap">
            <!-- Category Label (2 cols) -->
            <div class="col-2 skill-category q-pa-sm">
              {{ categoryLabels[category] || category }}
            </div>

            <!-- Skills List (6 cols) -->
            <div class="col-10 q-pa-sm skill-list bordered">
              <div class="row q-col-gutter-sm q-row-gutter-sm">
                <q-chip
                  v-for="(skill, index) in skillList"
                  :key="`${category}-${index}`"
                  class="q-mb-xs q-mr-xs"
                  color="accent"
                >
                  {{ skill }}
                </q-chip>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
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
// Styling is handled globally; no scoped styles needed unless you want to tweak chip spacing
</style>
