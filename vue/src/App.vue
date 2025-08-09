<script setup lang="ts">
  import { onBeforeMount } from 'vue'
  import store from './store'

  const _themeStore = store.themeStore()

  onBeforeMount(() => {
    const getTheme = localStorage.getItem('theme')
    const theme = !getTheme || getTheme !== 'dark' ? 'light' : 'dark'
    _themeStore.set(theme)
    localStorage.setItem('theme', theme)
  })
</script>

<template>
  <RouterView />
</template>
