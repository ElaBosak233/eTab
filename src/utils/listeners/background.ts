import { useBackgroundStore } from "@/stores/background";
import { storeToRefs } from "pinia";
import { watch } from "vue";

export default function () {
	// 背景监测器
	const backgroundStoreRefs = storeToRefs(useBackgroundStore());
	document.body.style.backgroundSize = "cover";
	document.body.style.backgroundAttachment = "fixed";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundPosition = "center center";
	if (useBackgroundStore()["type"] == "color") {
		document.body.style.backgroundColor = backgroundStoreRefs.value.value;
	} else if (useBackgroundStore()["type"] == "image") {
		document.body.style.backgroundImage = `url(${backgroundStoreRefs.value.value})`;
	}
	watch(backgroundStoreRefs.value, () => {
		if (useBackgroundStore()["type"] == "color") {
			document.body.style.backgroundImage = "";
			document.body.style.backgroundColor = backgroundStoreRefs.value.value;
		} else if (useBackgroundStore()["type"] == "image") {
			document.body.style.backgroundImage = `url(${backgroundStoreRefs.value.value})`;
		}
	});
}
