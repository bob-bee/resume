<template>
  <q-page padding>
    <!-- You can optionally use <q-header> inside here -->
    <HeaderComponent />

    <section class="resume-section" id="work-experience">
      <WorkComponent />
    </section>

    <section class="resume-section" id="projects">
      <FreelanceComponent />
    </section>

    <section class="resume-section" id="education">
      <EducationComponent />
    </section>

    <section class="resume-section" id="skills">
      <SkillsComponent />
    </section>

    <section class="resume-section" id="certifications">
      <CerticifationsComponent />
    </section>

    <section class="resume-section" id="awards">
      <AwardsComponent />
    </section>

    <section class="resume-section" id="interests">
      <InterestsComponent />
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
import InterestsComponent from 'src/components/InterestsComponent.vue';
</script>
