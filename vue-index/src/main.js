import { createApp } from 'vue'
import Vant from 'vant'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from 'pinia'
import piniaPluginPersisterstate from 'pinia-plugin-persistedstate';

import 'vant/lib/index.css';
const pinia=createPinia()
pinia.use(piniaPluginPersisterstate)
createApp(App)
.use(router)
.use(pinia)
.use(Vant)
.mount('#app')
