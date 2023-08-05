import { defineStore } from "pinia";

type EngineOptions = {
	[name: string]: {
		display_name: string;
		icon: string;
		url: string;
	};
};

type Engine = {
	current: string;
	options: EngineOptions;
};

const defaultState = {
	origin_opacity: 0.3,
	focus_opacity: 0.8,
	placeholder: "搜索",
	blank: "true",
	bottom: 0.8,
	left: 0.5,
	height: 48,
	engine: {
		current: "google",
		options: {
			google: {
				display_name: "谷歌",
				icon: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/google.png",
				url: "https://www.google.com/search?q="
			},
			bing: {
				display_name: "必应",
				icon: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/bing_new.png",
				url: "https://www.bing.com/search?q="
			},
			baidu: {
				display_name: "百度",
				icon: "https://infinity-permanent.infinitynewtab.com/infinity/search-add/baidu.png",
				url: "https://www.baidu.com/s?wd="
			}
		} as EngineOptions
	} as Engine
};
export const useSearchStore = defineStore("search", {
	state: () => ({ ...defaultState }),
	persist: {
		storage: localStorage,
		key: "search"
	}
});
