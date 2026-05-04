<template>
  <div class="project-tags" v-if="tags && tags.length > 1">
    <span v-for="tag in tags.slice(1)" :key="tag" class="project-tag">{{ tag }}</span>
  </div>
</template>

<script setup>
defineProps({
  tags: Array
})
</script>

<style scoped>
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.project-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 2px 10px;
  border-radius: 2rem;
  color: var(--vp-c-brand-2);
  background-color: var(--vp-c-brand-soft);
  font-family: var(--ew-font-sans);
  transition: all var(--ew-transition-fast);
  cursor: pointer;
  border: 1px solid transparent;
}

.project-tag:hover {
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  transform: translateY(-1px);
}
</style>
