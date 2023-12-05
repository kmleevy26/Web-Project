import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

import App from './App.vue'
import router from './router'

const app = createApp(App).use(bootstrap).mount('#app')

app.use(createPinia())
app.use(router)

app.mount('#app')
