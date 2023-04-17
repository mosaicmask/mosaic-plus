import { createApp } from "vue";
import App from "./app.vue";
import { MIcon } from "@mosaic-plus/components/icon";

const app = createApp(App);
app.use(MIcon)
app.mount("#app");