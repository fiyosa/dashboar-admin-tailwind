import { createApp } from 'vue'
import './main.css'
import App from './App.vue'
import router from './pages/router'
import { createPinia } from 'pinia'

const newApp = createApp(App)

newApp.use(router)
newApp.use(createPinia())

newApp.mount('#app')
