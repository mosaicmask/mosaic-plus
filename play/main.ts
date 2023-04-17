import { createApp } from "vue";
import App from "./app.vue";
import { MIcon } from "@mosaic-plus/components/icon";
import '@mosaic-plus/theme-chalk/src/index.scss';

const app = createApp(App);
app.use(MIcon)
app.mount("#app");