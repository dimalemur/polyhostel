import { createApp } from 'vue'
import App from './App.vue'
import router from "@/client/router";
import {store} from "@/client/store"

createApp(App).use(router).use(store).mount('#app')
