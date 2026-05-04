<template>
  <div class="project-header">
    <h3 class="project-title">
      <a :href="github || demo" target="_blank" class="title-link">{{ title }}</a>
    </h3>
    <span class="public-badge">Public</span>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  github: String,
  demo: String
})
</script>

<style scoped>
.project-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 0.5rem;
}

.project-title {
  margin: 0 !important;
  font-size: 1.25rem;
  border: none !important;
  padding: 0 !important;
  font-family: var(--ew-font-sans);
  font-weight: 600;
}

.title-link {
  color: var(--vp-c-brand-1) !important;
  text-decoration: none !important;
}

.title-link:hover {
  text-decoration: underline !important;
  text-decoration-color: var(--vp-c-brand-1) !important;
  text-underline-offset: 4px;
}

.public-badge {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0 7px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 2rem;
  color: var(--vp-c-text-2);
  line-height: 18px;
  font-family: var(--ew-font-sans);
}
</style>
