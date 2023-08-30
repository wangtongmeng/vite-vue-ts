// export function render() {
//   document.getElementById("app")!.innerHTML = 'main';
// }

import { createApp } from "vue"
import App from "./App.vue"

// render()

// if (import.meta.hot) {
//   import.meta.hot.accept((updatedModule) => updatedModule?.render());
// }

const app = createApp(App)
app.mount("#app")
