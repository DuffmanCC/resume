import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './index.css'
import VueGtag from "vue-gtag"

createApp(App)
  .use(VueGtag, {config: { id: "G-MJRJC5MREY" }})
  .use(router)
  .mount('#app')
