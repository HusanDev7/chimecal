
import { createApp } from 'vue'
import { createPinia } from 'pinia'

// main styles code
import "@/assets/scss/main.scss";
// main styles code

import App from './App.vue'
import router from './router'
const app = createApp(App)

// aos import here
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
// aos import here

app.use(createPinia())
app.use(router)

app.mount('#app')
