<template>
  <div class="project-card">
    <div class="project-content">
      <h3 class="project-title">{{ title }}</h3>
      <p class="project-desc">{{ desc }}</p>
      <div class="project-tags">
        <span v-for="tag in tags" :key="tag" class="project-tag">{{ tag }}</span>
      </div>
    </div>
    <div class="project-links">
      <a v-if="github" :href="github" target="_blank" class="project-link">GitHub ↗</a>
      <a v-if="demo" :href="demo" target="_blank" class="project-link brand">Demo ↗</a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  tags: Array,
  github: String,
  demo: String
})
</script>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: var(--ew-radius-md);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  padding: 1.5rem;
  transition: all var(--ew-transition-base);
  height: 100%;
  position: relative;
  overflow: hidden;
}
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--ew-brand-gradient);
  opacity: 0;
  transition: opacity var(--ew-transition-base);
}
.project-card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-4px);
  box-shadow: 0 12px 32px var(--ew-brand-glow);
}
.project-card:hover::before {
  opacity: 1;
}
.project-title {
  margin: 0 0 0.75rem 0 !important;
  font-size: 1.25rem;
  border: none !important;
  padding: 0 !important;
  font-family: var(--ew-font-serif);
}
.project-desc {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1.25rem;
  line-height: 1.6;
  font-family: var(--ew-font-sans);
}
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}
.project-tag {
  font-size: 0.75rem;
  font-family: var(--vp-font-family-mono);
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--vp-c-bg-mute);
  color: var(--vp-c-text-2);
}
.project-links {
  display: flex;
  gap: 1.25rem;
  margin-top: auto;
  font-family: var(--ew-font-sans);
}
.project-link {
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none !important;
  transition: color 0.2s;
  color: var(--vp-c-text-1);
}
.project-link:hover {
  color: var(--vp-c-brand-1);
}
.project-link.brand {
  color: var(--vp-c-brand-1);
}
.project-link.brand:hover {
  color: var(--vp-c-brand-2);
}
</style>
