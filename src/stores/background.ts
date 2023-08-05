import { defineStore } from "pinia";

const defaultState = {
	type: "color",
	value: "#0F172A"
};

export const useBackgroundStore = defineStore("background", {
	state: () => ({ ...defaultState }),
	persist: {
		storage: localStorage,
		key: "background"
	}
});
