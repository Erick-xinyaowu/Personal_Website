<template>
  <p class="project-desc">{{ desc }}</p>
</template>

<script setup>
defineProps({
  desc: String
})
</script>

<style scoped>
.project-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-family: var(--ew-font-sans);
}
</style>
