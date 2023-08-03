import { defineStore } from "pinia";

const defaultState = {
	origin_opacity: 0.3,
	focus_opacity: 0.8,
	placeholder: "搜索",
	blank: "true",
	bottom: 0.8,
	left: 0.5,
	height: 48,
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
};
export const useSearchStore = defineStore("search", {
	state: () => ({ ...defaultState }),
	actions: {
		reset() {
			Object.assign(this, defaultState);
		}
	},
	persist: {
		storage: localStorage,
		key: "search"
	}
});
