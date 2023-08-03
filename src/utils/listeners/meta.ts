import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useMetaStore } from "@/stores/meta";

export default function () {
	// 标题监测器
	const metaStoreRefs = storeToRefs(useMetaStore());
	document.title = metaStoreRefs.title.value;
	watch(metaStoreRefs.title, () => {
		document.title = metaStoreRefs.title.value;
	});

	// Favicon 监测器
	(document.querySelector("link[rel='icon']") as HTMLLinkElement).href = metaStoreRefs.favicon.value;
	watch(metaStoreRefs.favicon, () => {
		(document.querySelector("link[rel='icon']") as HTMLLinkElement).href = metaStoreRefs.favicon.value;
	});
}
