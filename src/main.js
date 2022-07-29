import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/main.scss'


const app = createApp(App)

// const app = createApp({
//     component: { App, TooltipPlugin }
// })

app.use(createPinia())
app.use(router)

app.mount('#app')

