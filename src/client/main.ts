import { createApp } from 'vue'
import App from './App.vue'
import router from "@/client/src/router";
import {store} from "@/client/src/store"

createApp(App).use(router).use(store).mount('#app')
