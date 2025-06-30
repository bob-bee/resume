<template>
  <div class="resume-header">
    <div class="left-section">
      <div class="resume-title">{{ resume.name }}</div>
      <div class="card-subtitle">{{ currentBucket.title }}</div>
      <div class="card-body">{{ currentBucket.summary }}</div>
    </div>

    <div class="center-section">
      <q-avatar class="profile-photo">
        <img src="/src/assets/picture.jpg" alt="Profile Photo" />
      </q-avatar>
    </div>

    <div class="right-section">
      <q-list>
        <q-item v-for="contact in resume.contacts" :key="contact.text" class="contact-item">
          <q-item-section class="contact-info">
            <template v-if="contact.url">
              <a :href="contact.url" class="resume-link">{{ contact.text }}</a>
            </template>
            <template v-else>
              <span class="resume-text-muted">{{ contact.text }}</span>
            </template>
          </q-item-section>

          <q-item-section avatar class="contact-icon">
            <q-icon :name="contact.icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';
import type { RoleBucket } from 'src/models/models';

const resume = useResumeStore();

const selectedKey = ref<string>('itSupport');

const currentBucket = computed<RoleBucket>(() => {
  const bucket = resume.roleBuckets.find((b: RoleBucket) => b.key === selectedKey.value);
  if (!bucket) {
    throw new Error(`Role bucket with key "${selectedKey.value}" not found.`);
  }
  return bucket;
});
</script>

<style scoped lang="scss">
.resume-header {
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  margin: 0 auto;
  padding: 1rem;
  gap: 1rem;
  border: 0.1rem solid rgb(12, 12, 10);
  border-radius: 0.25rem;
}

.left-section {
  max-inline-size: 60%;
  flex: 1 1 55%;
  display: flex;
  flex-direction: column;
}
.resume-title {
  font-size: $font-size-xl;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.center-section {
  flex: 0 0 20%;
  inline-size: 20%;
  display: flex;
  justify-content: center;
  align-items: center;

  .profile-photo {
    inline-size: 100%;
    block-size: auto;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;

    img {
      inline-size: 100%;
      block-size: auto;
      display: block;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}
</style>
