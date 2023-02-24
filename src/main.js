import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)

// vue routing
import router from './router'
app.use(router)

//tailwind css
import './assets/tailwind.css';

//element plus for vue 3
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

// render app
app.mount('#app')
