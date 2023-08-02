import { defineStore } from "pinia";

export const useMetaStore = defineStore("meta", {
	state: () => ({
		title: "eTab 新标签页",
		favicon: "https://vitejs.dev/logo.svg"
	}),
	persist: {
		storage: localStorage,
		key: "title"
	}
});
