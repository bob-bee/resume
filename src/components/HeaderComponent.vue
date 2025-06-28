<script setup lang="ts">
import { computed, ref } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';
import type { RoleBucket } from 'src/models/models';

const resume = useResumeStore();

// reactive key to select the current bucket
const selectedKey = ref<string>('itSupport');

// Compute the current bucket, asserting that it exists
const currentBucket = computed<RoleBucket>(() => {
  const bucket = resume.roleBuckets.find((b: RoleBucket) => b.key === selectedKey.value);
  if (!bucket) {
    throw new Error(`Role bucket with key "${selectedKey.value}" not found.`);
  }
  return bucket;
});
</script>

<template>
  <div class="resume-header">
    <div class="left-section">
      <div class="resume-title">{{ resume.name }}</div>
      <div class="resume-subtitle">{{ currentBucket.title }}</div>
      <div class="resume-summary">{{ currentBucket.summary }}</div>
    </div>

    <div class="center-section">
      <q-avatar class="profile-photo">
        <img src="/src/assets/picture.jpg" alt="Profile Photo" />
      </q-avatar>
    </div>

    <div class="right-section">
      <q-list>
        <q-item v-for="contact in resume.contacts" :key="contact.text">
          <!-- TEXT/LINK on the left aligned right -->
          <q-item-section class="text-left">
            <template v-if="contact.url">
              <a :href="contact.url" class="resume-link">{{ contact.text }}</a>
            </template>
            <template v-else>
              <span class="resume-text-muted">{{ contact.text }}</span>
            </template>
          </q-item-section>

          <!-- ICON on the right aligned left -->
          <q-item-section avatar>
            <q-icon :name="contact.icon" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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

  .resume-title {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: bold;
    line-height: 1.2;
    flex-grow: 1;
  }

  .resume-subtitle {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    line-height: 1.3;
    flex-grow: 1;
  }

  .resume-summary {
    font-size: 1rem;
    line-height: 1.5;
    flex-grow: 2;
    text-align: unset;
  }
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

.right-section {
  .q-list {
    margin: 0;
    padding: 0;
  }

  .q-item {
    padding-block: 0.25rem; /* compact top/bottom spacing */
    gap: 0.5rem; /* space between icon & text */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  /* icon container: no extra padding */
  .q-item-section[avatar] {
    flex: 0 0 auto;
    padding: 0; /* removed padding between icon and text */
    display: flex;
    justify-content: flex-start;
    align-items: center;

    .q-icon {
      font-size: clamp(2rem, 3vw, 2.75rem); /* increased icon size */
    }
  }

  /* text section: increased by 10% without colliding */
  .q-item-section:not([avatar]) {
    flex: 1;
    padding: 0;
    margin: 0;

    .resume-link,
    .resume-text-muted {
      font-size: 0.9625rem; /* ~10% increase from 0.875rem */
      line-height: 1.2;
      text-align: end;
    }
  }
}
</style>
