<template>
  <span class="skill-badge" :class="type">
    <slot></slot>
  </span>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped>
.skill-badge {
  display: inline-block;
  padding: 4px 12px;
  margin: 4px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-family: var(--ew-font-sans);
  font-weight: 500;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  transition: all 0.3s ease;
}
.skill-badge:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px var(--ew-brand-glow);
}
.skill-badge.brand {
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  border-color: transparent;
}
</style>
