import { defineStore } from "pinia";

export const useSearchStore = defineStore("search", {
	state: () => ({
		origin_opacity: 0.3,
		focus_opacity: 1,
		placeholder: "搜索",
		engine: {
			current: "baidu",
			options: [
				{
					name: "baidu",
					display_name: "百度",
					url: "https://www.baidu.com/s?wd="
				}
			]
		}
	}),
	persist: {
		storage: localStorage,
		key: "search"
	}
});
