<template>
  <div class="section">
    <h5 class="section-title">Awards</h5>
    <div>
      <q-card v-for="award in store.awards" :key="award.title" class="q-mb-md" bordered>
        <!-- Title and Issuer -->
        <q-item>
          <q-item-section>
            <q-item-label class="card-subtitle">{{ award.title }}</q-item-label>
            <q-item-label caption class="card-meta text-primary">
              <a
                v-if="award.issuerUrl"
                :href="award.issuerUrl"
                target="_blank"
                rel="noopener"
                class="card-title text-primary"
              >
                {{ award.issuer }}
              </a>
              <span v-else>{{ award.issuer }}</span>
            </q-item-label>
          </q-item-section>

          <!-- Period & Location -->
          <q-item-section side class="text-right">
            <div v-if="award.period" class="card-meta">{{ award.period }}</div>
            <div v-if="award.location" class="card-meta">
              {{ award.location }}
            </div>
          </q-item-section>
        </q-item>

        <q-separator v-if="award.items?.length" />

        <!-- Award Details -->
        <q-card-section v-if="award.items?.length" class="card-body">
          <ul class="q-pa-md">
            <li v-for="item in award.items" :key="item">
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
