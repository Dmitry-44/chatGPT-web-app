import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
export const Tg = window.Telegram.WebApp||{}
app.mount('#app')
