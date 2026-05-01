<template>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-date">{{ date }}</div>
    <h3 class="timeline-title">{{ title }}</h3>
    <div class="timeline-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  date: String,
  title: String
})
</script>

<style scoped>
.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}
.timeline-dot {
  position: absolute;
  left: -1.5rem;
  transform: translateX(-50%);
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--vp-c-brand-1);
  border: 2px solid var(--vp-c-bg);
  box-shadow: 0 0 0 2px var(--vp-c-brand-soft);
  top: 6px;
  transition: transform 0.3s;
}
.timeline-item:hover .timeline-dot {
  transform: translateX(-50%) scale(1.2);
}
.timeline-date {
  font-size: 0.85rem;
  color: var(--vp-c-brand-1);
  margin-bottom: 0.25rem;
  font-family: var(--vp-font-family-mono);
  font-weight: 500;
}
.timeline-title {
  margin: 0 0 0.5rem 0 !important;
  font-size: 1.1rem;
  color: var(--vp-c-text-1);
  border: none !important;
  padding: 0 !important;
  font-family: var(--ew-font-sans);
}
.timeline-content {
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>
