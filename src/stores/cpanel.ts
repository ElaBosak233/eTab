import { defineStore } from "pinia";

export const useCPanelStore = defineStore("cpanel", {
	state: () => ({
		open: false,
		current: "search"
	})
});
