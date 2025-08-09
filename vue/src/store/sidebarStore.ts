import { defineStore } from 'pinia'

export const sidebarStore = defineStore('sidebarStore', {
  state: () => ({ get: true }),
  actions: {
    set() {
      this.get = !this.get
    },
  },
})
