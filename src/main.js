import { createApp } from "vue";
import App from "./app/index.vue";
import { createPinia } from "pinia";

const pinia = createPinia();

createApp(App).use(pinia).mount("#app");
