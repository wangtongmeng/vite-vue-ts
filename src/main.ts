import { createApp } from "vue"
import App from "./App.vue"
import "./global.css"
import "@/request"
import { createPinia } from "pinia"
const app = createApp(App)
app.use(createPinia())
app.mount("#app")
