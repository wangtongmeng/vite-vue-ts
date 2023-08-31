import { createApp } from "vue"
import App from "./App.vue"
import "./global.css"
import "@/request"
import { createPinia } from "pinia"
import router from "./router"
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount("#app")

console.log("env", import.meta.env)
