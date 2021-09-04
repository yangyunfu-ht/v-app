import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import ElementPlus from 'element-plus'

import './index.css'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(store).use(ElementPlus).mount('#app')


