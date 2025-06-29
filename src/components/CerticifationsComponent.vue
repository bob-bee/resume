<template>
  <div class="section">
    <h5 class="section-title">Certifications</h5>
    <div>
      <q-card
        v-for="certification in store.certifications"
        :key="certification.name"
        class="q-mb-md"
        bordered
      >
        <!-- Title and Issuer -->
        <q-item>
          <q-item-section>
            <q-item-label class="text-h6">{{ certification.name }}</q-item-label>
            <q-item-label caption>
              <a
                v-if="certification.companyUrl"
                :href="certification.companyUrl"
                target="_blank"
                rel="noopener"
                class="text-primary"
              >
                {{ certification.company }}
              </a>
              <span v-else>{{ certification.company }}</span>
            </q-item-label>
          </q-item-section>

          <!-- Period & Location -->
          <q-item-section side class="text-right">
            <div>{{ certification.period }}</div>
            <div v-if="certification.location" class="text-caption text-grey">
              {{ certification.location }}
            </div>
          </q-item-section>
        </q-item>

        <q-separator v-if="certification.items?.length" />

        <!-- Items -->
        <q-card-section v-if="certification.items?.length">
          <ul class="q-pl-md">
            <li v-for="item in certification.items" :key="item">
              {{ item }}
            </li>
          </ul>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>
