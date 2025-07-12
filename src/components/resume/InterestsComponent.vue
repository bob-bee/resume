<template>
  <div class="section">
    <h5 class="section-title">Interests</h5>
    <div class="card">
      ">

      <div v-for="interest in store.interests" :key="interest.title" class="card-section">
        <div class="card-title">
          <div class="card-title-noun">{{ interest.title }}</div>
          <div class="card-meta">{{ interest.goal }}</div>
        </div>

        <hr class="separator" />

        <div v-if="interest.notes && interest.notes.length">
          <ul class="card-body">
            <li v-for="note in interest.notes" :key="note">{{ note }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useResumeStore } from 'src/stores/useResumeStore';

const store = useResumeStore();
</script>

<style scoped lang="scss">
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.card-left {
  display: flex;
  flex-direction: column;
}
.caption {
  font-size: 0.875rem;
  color: #666;
}
</style>
