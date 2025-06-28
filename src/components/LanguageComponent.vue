<template>
  <div class="q-pa-md">
    <div class="language-wrapper">
      <span v-for="language in store.languages" :key="language" class="language-chip">
        {{ language }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style lang="scss" scoped>
.language-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.language-chip {
  padding: 0.4rem 1rem;
  background-color: #f0f0f5;
  border-radius: 9999px;
  font-weight: 500;
  font-size: 0.95rem;
  color: #333;
  border: 1px solid #d0d0d0;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #e0e0e7;
  }
}
</style>
