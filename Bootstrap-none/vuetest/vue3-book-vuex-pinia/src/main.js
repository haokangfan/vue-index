import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import store from './strore'
import {createPinia} from  'pinia'
import piniaPluginPersisterstate from 'pinia-plugin-persistedstate';
const pinia=createPinia()
pinia.use(piniaPluginPersisterstate)
createApp(App)
.use(store)
.use(pinia)
.mount('#app')
