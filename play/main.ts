import { createApp } from "vue";
import App from "./app.vue";
import { XbbIcon } from "@mosaic-plus/components/icon";

const app = createApp(App);
app.use(XbbIcon)
app.mount("#app");