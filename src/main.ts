import { createApp, watch } from "vue";
import { createPinia, storeToRefs } from "pinia";
import { useBackgroundStore } from "@/stores/background";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "@/assets/css/main.scss";
import App from "./App.vue";
import welcome from "@/utils/welcome";
import { useMetaStore } from "@/stores/meta";

welcome();

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.use(pinia);
app.mount("#app");

const backgroundStore = useBackgroundStore();
if (backgroundStore["type"] == "color") {
	document.body.classList.add(backgroundStore["value"]);
} else if (backgroundStore["type"] == "image") {
	document.body.style.backgroundImage = backgroundStore["value"];
}

const metaStore = useMetaStore();

// 标题监测器
const { title } = storeToRefs(metaStore);
document.title = title.value;
watch(title, () => {
	document.title = title.value;
});

// Favicon 监测器
const { favicon } = storeToRefs(metaStore);
(document.querySelector("link[rel='icon']") as HTMLLinkElement).href = favicon.value;
watch(favicon, () => {
	(document.querySelector("link[rel='icon']") as HTMLLinkElement).href = favicon.value;
});
