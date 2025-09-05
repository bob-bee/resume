<template>
  <q-page class="q-pa-md">
    <q-form @submit.prevent="submit">
      <!-- Personal Info -->
      <div class="q-mb-md">
        <q-input v-model="store.personalInfo.name" label="Full Name" required />
        <q-input v-model="store.personalInfo.email" label="Email" type="email" required />
        <q-input v-model="store.personalInfo.phone" label="Phone" />
        <q-input
          v-model="store.personalInfo.summary"
          label="Professional Summary"
          type="textarea"
        />
      </div>

      <!-- Work Experience -->
      <SectionEditor
        title="Work Experience"
        :items="store.work"
        :onAdd="addWork"
        :onRemove="removeWork"
      >
        <template #default="{ item, index }">
          <q-input v-model="item.company" label="Company" />
          <q-input v-model="item.period" label="Period" />
          <q-input v-model="item.location" label="Location" />
        </template>
      </SectionEditor>

      <!-- Education -->
      <SectionEditor
        title="Education"
        :items="store.education"
        :onAdd="addEducation"
        :onRemove="removeEducation"
      >
        <template #default="{ item }">
          <q-input v-model="item.degree" label="Degree" />
          <q-input v-model="item.institution" label="Institution" />
          <q-input v-model="item.period" label="Period" />
        </template>
      </SectionEditor>

      <!-- Skills as simple comma‐separated list -->
      <q-input
        v-model="skillsInput"
        label="Skills (comma‐separated)"
        type="textarea"
        @blur="updateSkills"
      />

      <q-btn type="submit" color="primary" label="Save Data" class="full-width" />
    </q-form>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';
import SectionEditor from 'src/components/input/SectionEditor.vue';

export default defineComponent({
  components: { SectionEditor },
  setup() {
    const store = useResumeStore();
    const skillsInput = ref(store.skills.webDevelopment.join(', '));

    function addWork() {
      store.addWorkExperience({ company: '', period: '', location: '', roles: [] });
    }
    function removeWork(i: number) {
      store.removeWorkExperience(i);
    }
    function addEducation() {
      store.addEducation({ degree: '', institution: '', location: '', period: '', highlights: [] });
    }
    function removeEducation(i: number) {
      store.removeEducation(i);
    }

    function updateSkills() {
      store.updateSkills({ webDevelopment: skillsInput.value.split(',').map((s) => s.trim()) });
    }

    function submit() {
      store.saveToLocalStorage();
      // optionally navigate to /resume
    }

    return {
      store,
      skillsInput,
      addWork,
      removeWork,
      addEducation,
      removeEducation,
      updateSkills,
      submit,
    };
  },
});
</script>
