<template>
  <div class="breakout-full">
    <slot></slot>
  </div>
</template>

<style scoped>
.breakout-full {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  padding: var(--space-8) 0;
  overflow: hidden;
}
</style>
