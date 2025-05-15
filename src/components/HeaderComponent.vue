<template>
  <q-header elevated class="resume-header">
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="col-5">
        <q-item-section>
          <!-- Name as main title -->
          <q-item-label class="resume-title">{{ name }}</q-item-label>
          <!-- Job title as subtitle -->
          <q-item-label class="resume-subtitle" caption>{{ title }}</q-item-label>
        </q-item-section>
        <q-item-section class="resume-description">
          {{ description }}
        </q-item-section>
      </div>

      <div class="col-3">
        <q-item-section>
          <q-avatar class="profile-photo">
            <img src="/src/assets/picture.jpg" alt="Profile Photo" />
          </q-avatar>
        </q-item-section>
      </div>

      <q-separator vertical />

      <q-item-section>
        <q-list bordered>
          <q-item v-for="contact in contacts" :key="contact.text">
            <q-item-section avatar>
              <q-icon :name="contact.icon" />
            </q-item-section>
            <q-item-section>
              <template v-if="contact.url">
                <a :href="contact.url" class="resume-link">{{ contact.text }}</a>
              </template>
              <template v-else>
                <span class="resume-text-muted">{{ contact.text }}</span>
              </template>
            </q-item-section>
          </q-item>
        </q-list>
      </q-item-section>
    </div>
  </q-header>
</template>

<script setup lang="ts">
const name = 'Bobby Seelam';
const title = 'IT Support Engineer / Analyst';
const description =
  'Seeking a Desktop Support Engineer role to leverage technical expertise and problem-solving skills in delivering IT solutions. Dedicated to optimizing user experience, proactive troubleshooting, and exceptional customer service. Passionate about streamlining IT operations and staying updated with emerging technologies in the dynamic IT field.';

const contacts = [
  { icon: 'email', text: 'bobby.seelam93@gmail.com', url: 'mailto:bobby.seelam93@gmail.com' },
  { icon: 'phone', text: '(+39) 3758327534', url: null },
  { icon: 'place', text: 'Milano, Italy', url: null },
  {
    icon: 'fab fa-linkedin',
    text: 'linkedin.com/in/geniusfaker',
    url: 'https://linkedin.com/in/geniusfaker',
  },
  { icon: 'fab fa-github', text: 'github.com/geniusfaker', url: 'https://github.com/geniusfaker' },
];
</script>

<style lang="scss" scoped>
// Import global resume variables
@import 'src/css/quasar.variables.scss';

.resume-header {
  background-color: $resume-bg-color;
  color: $resume-text-color;
  border-bottom: 1px solid $resume-accent-color;
}

.resume-title {
  @include resume-heading('xxl');
  color: $resume-heading-accent-color;
}

.resume-subtitle {
  @include resume-heading('l');
}

.resume-description {
  font-size: $resume-body-font-size;
  line-height: $resume-body-line-height;
  color: $resume-text-color;
  margin-top: $resume-gutter-sm;
}

.profile-photo {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  border: 2px solid $resume-accent-color;
}

.resume-link {
  @include resume-link;
}

.resume-text-muted {
  color: $resume-muted-color;
}
</style>
