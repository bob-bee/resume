<template>
  <div>
    <q-card v-for="project in store.projects" :key="project.name" class="q-mb-md" bordered>
      <!-- Title and Company -->
      <q-item>
        <q-item-section>
          <q-item-label>{{ project.name }}</q-item-label>
          <q-item-label caption>
            <a
              v-if="project.companyUrl"
              :href="project.companyUrl"
              target="_blank"
              rel="noopener"
              class="text-primary"
            >
              {{ project.company }}
            </a>
            <span v-else>{{ project.company }}</span>
          </q-item-label>
        </q-item-section>

        <!-- Period & Location -->
        <q-item-section side class="text-right">
          <div>{{ project.period }}</div>
          <div v-if="project.location" class="text-caption text-grey">
            {{ project.location }}
          </div>
        </q-item-section>
      </q-item>

      <q-separator />

      <!-- Items -->
      <q-card-section>
        <ul class="q-pl-md">
          <li v-for="item in project.items" :key="item">
            {{ item }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style lang="scss" scoped>
.q-card {
  border: 0.1rem solid rgb(12, 12, 10);
  border-radius: 0.25rem;
  padding: 1rem;
}

.q-item {
  padding-block: 0.25rem; // Top/bottom spacing
  gap: 0.5rem; // Space between sections
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.q-item-section[avatar] {
  flex: 0 0 auto;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .q-icon {
    font-size: clamp(2rem, 3vw, 2.75rem); // Match icon sizing from resume
  }
}

.q-item-section:not([avatar]) {
  flex: 1;
  padding: 0;
  margin: 0;

  .resume-link,
  .resume-text-muted {
    font-size: 0.9625rem; // Slight bump from default 0.875
    line-height: 1.2;
    text-align: end;
  }
}

ul {
  padding-inline-start: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
}

.text-caption.text-grey {
  font-size: 0.875rem;
  color: #666;
}
</style>
