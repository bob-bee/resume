<template>
  <div class="q-pa-md column q-gutter-md">
    <q-card v-for="edu in store.education" :key="edu.degree" class="education-card" flat bordered>
      <q-item>
        <!-- Degree & Institution -->
        <q-item-section>
          <q-item-label class="text-h6 text-bold">{{ edu.degree }}</q-item-label>
          <q-item-label caption class="text-primary">
            {{ edu.institution }}
          </q-item-label>
        </q-item-section>

        <!-- Period & Location -->
        <q-item-section side class="text-right">
          <div class="text-caption">{{ edu.period }}</div>
          <div class="text-caption text-grey">{{ edu.location }}</div>
        </q-item-section>
      </q-item>

      <!-- Highlights -->
      <q-separator />
      <q-card-section>
        <ul class="q-pl-md q-mt-sm">
          <li v-for="item in edu.highlights" :key="item">
            {{ item }}
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts" setup>
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style lang="scss" scoped>
.education-card {
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
}

ul {
  padding-inline-start: 1.2rem;
  line-height: 1.6;
  font-size: 0.96rem;
}
</style>
