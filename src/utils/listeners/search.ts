import { watch } from "vue";
import { storeToRefs } from "pinia";
import { useSearchStore } from "@/stores/search";

export default function () {
	const searchStoreRefs = storeToRefs(useSearchStore());
	(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.position = "fixed";
	(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.transform = `translate(-50%, -50%)`;
	(document.querySelector("div[id='search']") as HTMLDivElement).style.height = `${searchStoreRefs.height.value}px`;
	(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.bottom = `${
		searchStoreRefs.bottom.value * 100
	}%`;
	(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.left = `${
		searchStoreRefs.left.value * 100
	}%`;
	// Y 轴
	watch(searchStoreRefs.bottom, () => {
		(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.bottom = `${
			searchStoreRefs.bottom.value * 100
		}%`;
	});
	// X 轴
	watch(searchStoreRefs.left, () => {
		(document.querySelector("div[id='searchArea']") as HTMLDivElement).style.left = `${
			searchStoreRefs.left.value * 100
		}%`;
	});
	// 高度
	watch(searchStoreRefs.height, () => {
		(
			document.querySelector("div[id='search']") as HTMLDivElement
		).style.height = `${searchStoreRefs.height.value}px`;
	});
}
