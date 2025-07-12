<template>
  <div class="section">
    <h5 class="section-title">Academia</h5>
    <div>
      <div v-for="edu in store.education" :key="edu.degree" class="card-section">
        <!-- Degree & Institution -->
        <div>
          <div class="card-title row">
            <div class="card-title-noun col">
              <a
                v-if="edu.institutionUrl"
                :href="edu.institutionUrl"
                target="_blank"
                rel="noopener"
              >
                {{ edu.institution }}
              </a>
              <span v-else>{{ edu.institution }}</span>
            </div>
            <!-- Period & Location -->

            <div class="card-meta text-right col">
              <div>{{ edu.period }}</div>
              <div>{{ edu.location }}</div>
            </div>
          </div>
        </div>

        <!-- Separator -->
        <hr class="separator" />
        <div class="card-title-verb">
          {{ edu.degree }}
        </div>
        <!-- Highlights -->
        <div>
          <ul class="card-body">
            <li v-for="item in edu.highlights" :key="item">
              {{ item }}
            </li>
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

<style scoped lang="scss"></style>
