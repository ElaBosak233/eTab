import { defineStore } from "pinia";
import defaultConfig from "@/default.config.json";

export const useBackgroundStore = defineStore("background", {
	state: () => ({
		type: defaultConfig["background"]["type"],
		value: defaultConfig["background"]["value"]
	}),
	persist: {
		storage: localStorage,
		key: "background"
	}
});
