import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import router from './router'
import store from '../store'
import axios from 'axios'

axios.defaults.baseURL=import.meta.env.VITE_BASE_API_URL



createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
