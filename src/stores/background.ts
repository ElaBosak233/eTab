import { defineStore } from "pinia";

const defaultState = {
	type: "color",
	value: "#0F172A"
};

export const useBackgroundStore = defineStore("background", {
	state: () => ({ ...defaultState }),
	actions: {
		reset() {
			Object.assign(this, defaultState);
		}
	},
	persist: {
		storage: localStorage,
		key: "background"
	}
});
