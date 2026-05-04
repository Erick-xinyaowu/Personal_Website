<template>
  <article class="project-card" ref="cardRef" role="region">
    <div class="project-main">
      <ProjectCardHeader :title="title" :github="github" :demo="demo" />
      <ProjectCardBody :desc="desc" />
      <ProjectCardTags :tags="tags" />
      <ProjectCardMetrics :tags="tags" :demo="demo" :updated="updated" />
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
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import ProjectCardHeader from './ProjectCardHeader.vue'
import ProjectCardBody from './ProjectCardBody.vue'
import ProjectCardTags from './ProjectCardTags.vue'
import ProjectCardMetrics from './ProjectCardMetrics.vue'

defineProps({
  title: String,
  desc: String,
  tags: Array,
  github: String,
  demo: String,
  updated: String
})

const cardRef = ref(null)

onMounted(() => {
  // IntersectionObserver for Scroll Reveal Effect
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-enter')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })

  if (cardRef.value) observer.observe(cardRef.value)
})
</script>

<style scoped>
.project-card {
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
  transition: transform 400ms var(--ew-spring-bouncy), background-color 200ms var(--ew-spring-snappy);
  position: relative;
  z-index: 1;
  opacity: 0;
  transform: translateY(30px);
}

.project-card.reveal-enter {
  animation: slideUpSpring 800ms var(--ew-spring-bouncy) forwards;
}

@keyframes slideUpSpring {
  0% { opacity: 0; transform: translateY(30px) scale(0.98); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

.project-card::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: var(--ew-radius-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  opacity: 0;
  transition: opacity 300ms ease-out;
  z-index: -1;
  pointer-events: none;
}

.dark .project-card::after {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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
  transform: translateY(-4px);
}

.project-card:hover::after {
  opacity: 1;
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
