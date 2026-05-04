<template>
  <div class="project-meta">
    <div class="meta-item language" v-if="tags && tags.length > 0">
      <span class="lang-color" :style="{ backgroundColor: getLangColor(tags[0]) }"></span>
      <span>{{ tags[0] }}</span>
    </div>
    <a v-if="demo" :href="demo" target="_blank" class="meta-item demo-link">
      <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon-link">
         <path d="m7.775 3.275 1.25-1.25a3.5 3.5 0 1 1 4.95 4.95l-2.5 2.5a3.5 3.5 0 0 1-4.95 0 .751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018 1.998 1.998 0 0 0 2.83 0l2.5-2.5a2.002 2.002 0 0 0-2.83-2.83l-1.25 1.25a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042Zm-4.69 9.64a1.998 1.998 0 0 0 2.83 0l1.25-1.25a.751.751 0 0 1 1.042.018.751.751 0 0 1 .018 1.042l-1.25 1.25a3.5 3.5 0 1 1-4.95-4.95l2.5-2.5a3.5 3.5 0 0 1 4.95 0 .751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018 1.998 1.998 0 0 0-2.83 0l-2.5 2.5a1.998 1.998 0 0 0 0 2.83Z"></path>
      </svg>
      Live Demo
    </a>
    <div class="meta-item updated" v-if="updated">
      Updated {{ updated }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  tags: Array,
  demo: String,
  updated: String
})

const getLangColor = (lang) => {
  const colors = {
    'Python': '#3572A5',
    'Vue.js': '#41b883',
    'JavaScript': '#f1e05a',
    'Jupyter Notebook': '#DA5B0B',
    'Java': '#b07219',
    'HTML': '#e34c26'
  }
  return colors[lang] || '#8b5cf6'
}
</script>

<style scoped>
.project-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.25rem;
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
  font-family: var(--ew-font-sans);
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.lang-color {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
  border: 1px solid rgba(128, 128, 128, 0.2);
}

.octicon {
  fill: currentColor;
}

.demo-link {
  color: var(--vp-c-text-2);
  text-decoration: none !important;
  transition: color 0.2s;
}

.demo-link:hover {
  color: var(--vp-c-brand-1);
}
</style>
