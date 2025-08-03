<template>
  <div class="resume-header">
    <!-- Left Section -->
    <div class="left-section">
      <div>
        <label>Name:</label>
        <input type="text" v-model="resume.name" />
      </div>

      <div>
        <label>Title:</label>
        <input type="text" v-model="currentBucket.title" />
      </div>

      <div>
        <label>Summary:</label>
        <textarea v-model="currentBucket.summary"></textarea>
      </div>
    </div>

    <!-- Center Section -->
    <div class="center-section">
      <div class="profile-photo">
        <img src="/src/assets/picture.jpg" alt="Profile Photo" />
      </div>
    </div>

    <!-- Right Section -->
    <div class="right-section">
      <div v-for="(contact, index) in resume.contacts" :key="index" class="contact-block">
        <div>
          <label>Text:</label>
          <input type="text" v-model="contact.text" />
        </div>
        <div>
          <label>URL:</label>
          <input type="text" v-model="contact.url" />
        </div>
        <div>
          <label>Icon:</label>
          <input type="text" v-model="contact.icon" />
        </div>
      </div>

      <button @click="addContact">Add Contact</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useResumeStore } from 'src/stores/useResumeStore';
import type { RoleBucket, Contact } from 'src/models/models';

const resume = useResumeStore();
const selectedKey = ref<string>('itSupport');

const currentBucket = computed<RoleBucket>(() => {
  const bucket = resume.roleBuckets.find((b: RoleBucket) => b.key === selectedKey.value);
  if (!bucket) {
    throw new Error(`Role bucket with key "${selectedKey.value}" not found.`);
  }
  return bucket;
});

function addContact() {
  resume.contacts.push({
    text: '',
    url: '',
    icon: '',
  } as Contact);
}
</script>

<style scoped>
.resume-header {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

.left-section,
.center-section,
.right-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.profile-photo {
  inline-size: 120px;
  block-size: 120px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-photo img {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}

.contact-block {
  border: 1px solid #eee;
  padding: 0.5rem;
  margin-block-end: 0.5rem;
}
</style>
