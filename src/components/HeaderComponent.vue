<template>
  <div class="resume-header">
    <div class="left-section">
      <div class="resume-title">{{ resume.name }}</div>
      <div class="card-subtitle">{{ currentBucket.title }}</div>
      <div class="card-body">{{ currentBucket.summary }}</div>
    </div>

    <div class="center-section">
      <div class="profile-photo">
        <img src="/src/assets/picture.jpg" alt="Profile Photo" />
      </div>
    </div>

    <div class="right-section">
      <ul class="contact-list">
        <li v-for="contact in resume.contacts" :key="contact.text" class="contact-item">
          <div class="contact-info">
            <template v-if="contact.url">
              <a :href="contact.url" class="resume-link">{{ contact.text }}</a>
            </template>
            <template v-else>
              <span class="resume-text-muted">{{ contact.text }}</span>
            </template>
          </div>
          <div class="contact-icon">
            <q-icon :name="contact.icon" />
          </div>
        </li>
      </ul>
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
  flex-direction: row;
  inline-size: 100%;
  block-size: auto;
  padding-block: 1rem;
  padding-inline: 1rem;
  gap: 1rem;
  border: 0.1rem solid rgb(12, 12, 10);
  border-radius: 0.25rem;
  box-sizing: border-box;
}

.left-section,
.center-section,
.right-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
}

.left-section {
  flex: 1 1 55%;
  max-inline-size: 60%;
}

.center-section {
  flex: 0 0 20%;
  align-items: center;

  .profile-photo {
    inline-size: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);

    img {
      inline-size: 100%;
      block-size: 100%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
}

.right-section {
  flex: 1 1 25%;
}

.contact-list {
  list-style: none;
  margin: 0;
  padding: 0;

  .contact-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 0.5rem;

    .contact-info {
      inline-size: 75%;
      text-align: end;
    }

    .contact-icon {
      inline-size: 2rem;
      display: flex;
      align-items: start;
    }

    .resume-link {
      text-decoration: none;
      color: inherit;
    }

    .resume-text-muted {
      color: gray;
    }
  }
}

.resume-title {
  font-size: $font-size-xl;
  font-weight: 800;
  margin-block-end: 0.5rem;
}

.card-subtitle {
  font-size: $font-size-md;
  font-weight: 600;
  margin-block-end: 0.25rem;
}

.card-body {
  font-size: $font-size-base;
}
</style>
