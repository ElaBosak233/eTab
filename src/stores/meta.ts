import { defineStore } from "pinia";

const defaultState = {
	title: "eTab 新标签页",
	favicon: "https://vitejs.dev/logo.svg"
};
export const useMetaStore = defineStore("meta", {
	state: () => ({ ...defaultState }),
	actions: {
		reset() {
			Object.assign(this, defaultState);
		}
	},
	persist: {
		storage: localStorage,
		key: "meta"
	}
});
