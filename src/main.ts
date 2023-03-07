import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'

import naive from 'naive-ui/es/preset'
import 'vfonts/Lato.css'
import 'vfonts/FiraCode.css'

const app = createApp(App)

app.use(naive)
app.use(createPinia())
app.use(router)

app.mount('#app')
