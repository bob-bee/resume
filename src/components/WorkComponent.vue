<template>
  <div>
    <q-card v-for="job in store.work" :key="job.company" class="q-mb-md" bordered>
      <!-- Company Header -->
      <q-item>
        <q-item-section>
          <q-item-label>
            <a v-if="job.url" :href="job.url" target="_blank" rel="noopener" class="text-primary">
              {{ job.company }}
            </a>
            <span v-else>{{ job.company }}</span>
          </q-item-label>
          <q-item-label caption>{{ job.location }}</q-item-label>
        </q-item-section>

        <!-- Period -->
        <q-item-section side class="text-right">
          <div>{{ job.period }}</div>
        </q-item-section>
      </q-item>

      <q-separator />

      <!-- Roles within the company -->
      <div v-for="role in job.roles" :key="role.title">
        <q-card-section>
          <div class="text-subtitle1 q-mb-sm">
            {{ role.title }}
            <span class="text-caption text-grey q-ml-sm">
              {{ role.duration }}
            </span>
          </div>

          <ul class="q-pl-md">
            <li v-for="item in role.items" :key="item">{{ item }}</li>
          </ul>
        </q-card-section>

        <!-- Separator if multiple roles -->
        <q-separator v-if="job.roles.length > 1" />
      </div>
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
  padding-block: 0.25rem;
  gap: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.q-item-section {
  padding: 0;
  margin: 0;

  a.text-primary {
    font-size: 0.9625rem; // Slight bump from default
    line-height: 1.2;
  }

  .text-caption {
    font-size: 0.875rem;
    color: #666;
  }
}

.text-subtitle1 {
  font-size: clamp(1.25rem, 2vw, 1.5rem);
  font-weight: bold;
  line-height: 1.3;
}

.text-caption.text-grey {
  font-size: 0.875rem;
  color: #888;
  margin-inline-start: 0.5rem;
}

ul {
  padding-inline-start: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
}
</style>
