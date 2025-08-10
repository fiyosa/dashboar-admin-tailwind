<script setup lang="ts">
  import { ref } from 'vue'
  import { useRoute } from 'vue-router'
  import menu from '../../../config/menu'
  import store from '../../../store'

  const menus = ref(menu)
  const sidebarStore = store.sidebarStore()
  const _themeStore = store.themeStore()

  const openedMenu = ref<string[]>([])

  const toggleMenu = (name: string) => {
    if (openedMenu.value.includes(name)) {
      openedMenu.value = openedMenu.value.filter((m) => m !== name)
    } else {
      openedMenu.value.push(name)
    }
  }

  const handleCloseSidebar = () => {
    if (window.innerWidth <= 640) {
      sidebarStore.set()
    }
  }
</script>

<template>
  <div
    :class="
      _themeStore.get === 'light'
        ? 'bg-gray-100 text-[var(--text-color-light)]'
        : 'bg-gray-900 text-[var(--text-color-dark)]'
    "
    class="flex h-full w-full flex-col"
  >
    <!-- Sidebar Header (Logo) -->
    <div
      :class="_themeStore.get === 'light' ? 'border-gray-200 bg-gray-100' : 'border-gray-700 bg-gray-900'"
      class="flex h-16 w-full flex-shrink-0 items-center justify-center border-b"
    >
      <h1 class="text-2xl font-bold">LOGO</h1>
    </div>
    <!-- Sidebar Navigation (Scrollable) -->
    <div class="scrollbar-hide flex-grow overflow-y-auto p-3">
      <nav>
        <ul>
          <li v-for="item in menus" :key="item.name" class="mb-2">
            <!-- Parent Menu -->
            <router-link
              v-if="!item.children"
              :to="item.path"
              :class="
                useRoute().path === item.path
                  ? _themeStore.get === 'light'
                    ? 'bg-gray-200 font-semibold text-[var(--text-color-light)]'
                    : 'bg-gray-700 font-semibold text-[var(--text-color-dark)]'
                  : _themeStore.get === 'light'
                    ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                    : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
              "
              class="block rounded-md px-4 py-2"
              @click="handleCloseSidebar"
            >
              {{ item.name }}
            </router-link>

            <!-- Child Menu -->
            <div v-else>
              <div
                :class="
                  _themeStore.get === 'light'
                    ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                    : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
                "
                class="flex cursor-pointer items-center justify-between rounded-md px-4 py-2"
                @click="toggleMenu(String(item.name))"
              >
                <span>{{ item.name }}</span>
                <svg
                  class="h-5 w-5 transform fill-current transition-transform"
                  :class="{ 'rotate-180': openedMenu.includes(String(item.name)) }"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <ul
                v-if="openedMenu.includes(String(item.name))"
                :class="_themeStore.get === 'light' ? 'border-gray-300' : 'border-gray-600'"
                class="mt-1 ml-4 border-l"
              >
                <li v-for="(child, index) in item.children" :key="index" class="mb-1">
                  <router-link
                    :to="child.path"
                    :class="
                      useRoute().path === child.path
                        ? _themeStore.get === 'light'
                          ? 'bg-gray-200 font-semibold text-[var(--text-color-light)]'
                          : 'bg-gray-700 font-semibold text-[var(--text-color-dark)]'
                        : _themeStore.get === 'light'
                          ? 'text-[var(--text-color-light)] hover:bg-gray-300'
                          : 'hover:bg-gray-200 hover:text-[var(--text-color-light)]'
                    "
                    class="block rounded-md px-3 py-2"
                    @click="handleCloseSidebar"
                  >
                    {{ child.name }}
                  </router-link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
