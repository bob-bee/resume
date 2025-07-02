<template>
  <div class="section">
    <h5 class="section-title">Awards</h5>
    <ul class="section-item">
      <li v-for="award in store.awards" :key="award.title">
        <div v-for="item in award.items || [null]" :key="item || 'no-item'" class="award-item">
          <div class="award-main">
            <span class="card-title">{{ award.title }}</span> —
            <a
              v-if="award.issuerUrl"
              :href="award.issuerUrl"
              target="_blank"
              rel="noopener"
              class="award-issuer text-primary"
            >
              {{ award.issuer }}
            </a>
            <span v-else class="card-subtitle">{{ award.issuer }}</span>
          </div>

          <div v-if="item" class="card-caption">{{ item }}</div>

          <div class="card-meta text-right">
            <span v-if="award.period">{{ award.period }}</span>
            <span v-if="award.period && award.location"> | </span>
            <span v-if="award.location">{{ award.location }}</span>
          </div>

          <hr class="separator" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>
