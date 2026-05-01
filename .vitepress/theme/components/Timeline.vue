<template>
  <div class="timeline">
    <slot></slot>
  </div>
</template>

<style scoped>
.timeline {
  border-left: 2px solid var(--vp-c-brand-soft);
  margin: 1.5rem 0 1.5rem 1rem;
  padding-left: 1.5rem;
  font-family: var(--ew-font-sans);
}
</style>
