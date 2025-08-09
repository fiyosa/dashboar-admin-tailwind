import { defineStore } from 'pinia'

type IGet = 'light' | 'dark'

const applyTheme = (e: IGet) => {
  if (e === 'dark') {
    document.documentElement.classList.add('my-app-dark')
  } else {
    document.documentElement.classList.remove('my-app-dark')
  }
}

export const themeStore = defineStore('themeStore', {
  state: () => ({ get: 'light' as IGet }),
  actions: {
    set(e: IGet) {
      localStorage.setItem('theme', e)
      this.get = e
      applyTheme(e)
    },
    toggle() {
      const theme = this.get === 'light' ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
      this.get = theme
      applyTheme(theme)
    },
  },
})
