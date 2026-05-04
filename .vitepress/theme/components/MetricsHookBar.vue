<template>
  <div class="metrics-hook-bar">
    <div class="metric">
      <span class="value">Full-Stack</span>
      <span class="label">Architecture</span>
    </div>
    <div class="divider"></div>
    <div class="metric">
      <span class="value">Data-Driven</span>
      <span class="label">Visual Insights</span>
    </div>
    <div class="divider"></div>
    <div class="metric">
      <span class="value">100%</span>
      <span class="label">Design Oriented</span>
    </div>
  </div>
</template>

<style scoped>
.metrics-hook-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--space-8);
  margin: var(--space-12) auto;
  padding: var(--space-6) var(--space-8);
  max-width: 800px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: var(--ew-radius-xl);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.05);
  animation: slideUp 0.8s var(--ew-spring-bouncy) forwards;
  animation-delay: 0.3s;
  opacity: 0;
  transform: translateY(20px);
}

.dark .metrics-hook-bar {
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.metric {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
}

.value {
  font-family: var(--ew-font-serif);
  font-size: var(--ew-text-xl);
  font-weight: 700;
  background: var(--ew-brand-gradient);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.label {
  font-family: var(--ew-font-sans);
  font-size: var(--ew-text-sm);
  color: var(--vp-c-text-2);
  font-weight: 500;
  letter-spacing: 0.02em;
}

.divider {
  width: 1px;
  height: 40px;
  background: linear-gradient(to bottom, transparent, var(--vp-c-divider), transparent);
}

@keyframes slideUp {
  0% { opacity: 0; transform: translateY(20px) scale(0.95); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}

@media (max-width: 640px) {
  .metrics-hook-bar {
    flex-direction: column;
    gap: var(--space-5);
    margin: var(--space-8) var(--space-4);
    padding: var(--space-5) 0;
    border-radius: var(--ew-radius-lg);
  }
  
  .divider {
    width: 60px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--vp-c-divider), transparent);
  }
}
</style>
