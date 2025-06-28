<template>
  <q-page padding>
    <!-- You can optionally use <q-header> inside here -->
    <HeaderComponent />

    <section class="resume-section" id="work-experience">
      <h3 class="section-title">Work Experience</h3>
      <WorkComponent />
    </section>

    <section class="resume-section" id="projects">
      <h3 class="section-title">Freelance Projects</h3>
      <FreelanceComponent />
    </section>

    <section class="resume-section" id="deucation">
      <h3 class="section-title">Education</h3>
      <EducationComponent />
    </section>

    <section class="resume-section" id="skills">
      <h3 class="section-title">Skills</h3>
      <SkillsComponent />
    </section>

    <section class="resume-section" id="certifications">
      <h3 class="section-title">Certifications</h3>
      <CerticifationsComponent />
    </section>

    <section class="resume-section" id="awards">
      <h3 class="section-title">Awards</h3>
      <AwardsComponent />
    </section>
  </q-page>
</template>

<script setup lang="ts">
// No need to import store or call fetch here anymore
import WorkComponent from 'src/components/WorkComponent.vue';
import FreelanceComponent from 'src/components/FreelanceComponent.vue';
import EducationComponent from 'src/components/EducationComponent.vue';
import CerticifationsComponent from 'src/components/CerticifationsComponent.vue';
import AwardsComponent from 'src/components/AwardsComponent.vue';
import HeaderComponent from 'src/components/HeaderComponent.vue';
import SkillsComponent from 'src/components/SkillsComponent.vue';
</script>
