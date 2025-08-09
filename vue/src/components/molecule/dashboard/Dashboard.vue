<script setup lang="ts">
  import { onMounted } from 'vue'
  import ContentByDashboard from './ContentByDashboard.vue'
  import HeaderByDashboard from './HeaderByDashboard.vue'
  import SidebarByDashboard from './SidebarByDashboard.vue'
  import store from '../../../store'

  const sidebarStore = store.sidebarStore()
  const _themeStore = store.themeStore()

  onMounted(() => {
    if (window.innerWidth <= 640 && sidebarStore.get) {
      sidebarStore.set()
    }
  })
</script>

<template>
  <div
    :class="
      _themeStore.get === 'light'
        ? 'bg-[var(--background-color-light)] text-[var(--text-color-light)]'
        : 'bg-[var(--background-color-dark)] text-[var(--text-color-dark)]'
    "
    class="relative flex h-screen overflow-hidden"
  >
    <!-- Sidebar -->
    <div
      class="fixed top-0 left-0 z-3 h-full w-[230px] transform transition-transform duration-300 ease-in-out"
      :class="sidebarStore.get ? 'translate-x-0' : '-translate-x-full'"
    >
      <SidebarByDashboard />
    </div>

    <!-- Overlay -->
    <div
      v-if="sidebarStore.get"
      class="fixed inset-0 z-2 bg-black opacity-50 sm:hidden"
      @click="sidebarStore.set()"
    ></div>

    <!-- Main Content -->
    <div
      class="flex h-full flex-1 flex-col transition-all duration-300 ease-in-out"
      :class="sidebarStore.get ? 'sm:ml-[230px]' : 'sm:ml-0'"
    >
      <HeaderByDashboard />
      <div class="flex-1 overflow-y-auto">
        <ContentByDashboard>
          <RouterView />
        </ContentByDashboard>
      </div>
    </div>
  </div>
</template>
