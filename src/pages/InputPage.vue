<template>
  <q-page padding>
    <!-- You can optionally use <q-header> inside here -->
    <HeaderComponent />

    <section class="resume-section" id="work-experience">
      <WorkComponent />
    </section>
    <div class="page-break"></div>

    <section class="resume-section" id="projects">
      <FreelanceComponent />
    </section>
    <div class="page-break"></div>

    <section class="resume-section" id="education">
      <EducationComponent />
    </section>
    <div class="page-break"></div>

    <section class="resume-section" id="skills">
      <SkillsComponent />
    </section>
  </q-page>
</template>

<script setup lang="ts">
// No need to import store or call fetch here anymore
import WorkComponent from 'src/components/resume/WorkComponent.vue';
import FreelanceComponent from 'src/components/resume/FreelanceComponent.vue';
import EducationComponent from 'src/components/resume/EducationComponent.vue';
import HeaderComponent from 'src/components/resume/HeaderComponent.vue';
import SkillsComponent from 'src/components/resume/SkillsComponent.vue';
</script>
