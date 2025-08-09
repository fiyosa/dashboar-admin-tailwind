<script setup lang="ts">
  import store from '../../../store'
  const _themeStore = store.themeStore()
</script>

<template>
  <div
    class="p-3"
    :class="
      _themeStore.get === 'light'
        ? 'bg-[var(--background-color-light)] text-[var(--text-color-light)]'
        : 'bg-[var(--background-color-dark)] text-[var(--text-color-dark)]'
    "
  >
    <slot />
  </div>
</template>
