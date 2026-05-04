<template>
  <div class="project-card">
    <div class="project-main">
      <div class="project-header">
        <h3 class="project-title">
          <a :href="github || demo" target="_blank" class="title-link">{{ title }}</a>
        </h3>
        <span class="public-badge">Public</span>
      </div>
      <p class="project-desc">{{ desc }}</p>
      
      <div class="project-tags" v-if="tags && tags.length > 1">
        <span v-for="tag in tags.slice(1)" :key="tag" class="project-tag">{{ tag }}</span>
      </div>

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
    </div>
    
    <div class="project-actions" v-if="github">
      <div class="star-btn-group">
        <a :href="github" target="_blank" class="btn star-btn">
          <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" class="octicon octicon-star">
            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path>
          </svg>
          Star
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  desc: String,
  tags: Array,
  github: String,
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
.project-card {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: all var(--ew-transition-base);
  position: relative;
}

.project-card:last-child {
  border-bottom: none;
}

.project-card:hover {
  background-color: var(--vp-c-bg-soft);
  border-radius: var(--ew-radius-md);
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
  border-bottom-color: transparent;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
}

.dark .project-card:hover {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

/* Gradient line on left when hovered */
.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: -1.25rem;
  width: 3px;
  background: var(--ew-brand-gradient);
  border-radius: 4px 0 0 4px;
  opacity: 0;
  transition: opacity var(--ew-transition-base);
}

.project-card:hover::before {
  opacity: 1;
}

.project-main {
  flex: 1;
  min-width: 0;
  padding-right: 2rem;
}

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

.project-desc {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin-bottom: 1rem;
  line-height: 1.5;
  font-family: var(--ew-font-sans);
}

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

.project-actions {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding-top: 0.25rem;
}

.star-btn {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  padding: 4px 12px;
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  text-decoration: none !important;
  font-family: var(--ew-font-sans);
  transition: all 0.2s;
  box-shadow: 0 1px 0 rgba(27,31,36,0.04);
}

.star-btn:hover {
  background-color: var(--vp-c-default-soft);
  border-color: var(--vp-c-text-3);
}

/* Mobile responsive */
@media (max-width: 640px) {
  .project-card {
    flex-direction: column;
    gap: 1rem;
  }
  
  .project-main {
    padding-right: 0;
  }
  
  .project-actions {
    align-items: flex-start;
  }
  
  .project-card:hover {
    padding-left: 0;
    padding-right: 0;
    margin-left: 0;
    margin-right: 0;
    background-color: transparent;
    box-shadow: none;
  }
  
  .project-card::before {
    display: none;
  }
}
</style>
