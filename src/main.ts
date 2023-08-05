import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/assets/css/main.scss";
import "@/assets/css/transistion.scss";
import "@/assets/css/move.scss";
import "@imengyu/vue3-context-menu/lib/vue3-context-menu.css";
import App from "./App.vue";
import ContextMenu from "@imengyu/vue3-context-menu";
import { Icon } from "@iconify/vue";
import welcome from "@/utils/welcome";
import listeners from "@/utils/listeners";

welcome();

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.use(ContextMenu);
app.component("Icon", Icon);
app.mount("#app");

listeners();
