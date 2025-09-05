```vue
<template>
  <q-page class="q-pa-md">
    <!-- Personal Information -->
    <div class="q-mb-lg">
      <q-input v-model="store.name" label="Full Name" outlined dense />

      <q-input v-model="primaryTitle" label="Primary Title" outlined dense />

      <q-input
        v-model="primarySummary"
        label="Professional Summary"
        type="textarea"
        outlined
        dense
      />
    </div>

    <!-- Contact Information -->
    <ContactComponent :contacts="store.contacts" @update-contacts="updateContacts" />

    <!-- Work Experience -->
    <SectionEditor
      title="Work Experience"
      :items="store.work"
      :onAdd="addWork"
      :onRemove="removeWork"
    >
      <template #default="{ item }">
        <q-input v-model="item.company" label="Company" outlined dense />
        <q-input v-model="item.period" label="Period" outlined dense />
        <q-input v-model="item.location" label="Location" outlined dense />
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
        <q-input v-model="item.degree" label="Degree" outlined dense />
        <q-input v-model="item.institution" label="Institution" outlined dense />
        <q-input v-model="item.period" label="Period" outlined dense />
      </template>
    </SectionEditor>

    <!-- Skills -->
    <div class="section-editor q-pa-md q-mb-lg bg-grey-1 rounded">
      <h5>Skills (comma-separated)</h5>
      <q-input
        v-model="skillsInput"
        label="Skills"
        type="textarea"
        outlined
        dense
        @blur="saveSkills"
      />
    </div>

    <q-btn color="primary" label="Save All" class="full-width" @click="saveAll" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';
import SectionEditor from 'src/components/input/SectionEditor.vue';
import ContactComponent from 'src/components/input/ContactComponent.vue';

export default defineComponent({
  components: { SectionEditor, ContactComponent },
  setup() {
    const store = useResumeStore();
    const skillsInput = ref('');

    // Computed with getter/setter for first role bucket
    const primaryTitle = computed({
      get: () => store.roleBuckets[0]?.title ?? '',
      set: (val: string) => {
        if (store.roleBuckets.length === 0) {
          store.roleBuckets.push({ key: '', title: val, summary: '' });
        } else {
          if (store.roleBuckets[0]) {
            store.roleBuckets[0].title = val;
          }
        }
      },
    });
    const primarySummary = computed({
      get: () => store.roleBuckets[0]?.summary ?? '',
      set: (val: string) => {
        if (store.roleBuckets.length === 0) {
          store.roleBuckets.push({ key: '', title: '', summary: val });
        } else {
          if (store.roleBuckets[0]) {
            store.roleBuckets[0].summary = val;
          }
        }
      },
    });

    onMounted(() => {
      store.loadFromLocalStorage();
      skillsInput.value = store.skills.webDevelopment.join(', ');
    });

    function addWork(): void {
      store.addWorkExperience({ company: '', url: '', location: '', period: '', roles: [] });
    }
    function removeWork(idx: number): void {
      store.removeWorkExperience(idx);
    }

    function addEducation(): void {
      store.addEducation({
        degree: '',
        institution: '',
        institutionUrl: '',
        location: '',
        period: '',
        highlights: [],
      });
    }
    function removeEducation(idx: number): void {
      store.removeEducation(idx);
    }

    function saveSkills(): void {
      const arr = skillsInput.value
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);
      store.updateSkills({
        webDevelopment: arr,
        operatingSystems: [],
        networking: [],
        devOpsTools: [],
        cloudPlatforms: [],
        databases: [],
        analyticsAndBI: [],
        scriptingAndAutomation: [],
        administration: [],
        otherTech: [],
        softSkills: [],
        languages: [],
      });
    }

    function updateContacts(newContacts: typeof store.contacts): void {
      store.contacts = newContacts;
    }

    function saveAll(): void {
      store.saveToLocalStorage();
    }

    return {
      store,
      skillsInput,
      primaryTitle,
      primarySummary,
      addWork,
      removeWork,
      addEducation,
      removeEducation,
      saveSkills,
      updateContacts,
      saveAll,
    };
  },
});
</script>

<style scoped>
.section-editor {
  border: 1px solid #ccc;
}
</style>
```
