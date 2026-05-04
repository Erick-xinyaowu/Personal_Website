<template>
  <div class="project-desc" v-html="desc"></div>
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
  line-height: 1.6;
  font-family: var(--ew-font-sans);
}

/* 允许内部强调词渲染 */
.project-desc :deep(strong) {
  color: var(--vp-c-text-1);
  font-weight: 600;
}
.project-desc :deep(br) {
  content: "";
  display: block;
  margin-top: 0.5rem;
}
</style>
