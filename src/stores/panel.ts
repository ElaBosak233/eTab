import { defineStore } from "pinia";

export const usePanelStore = defineStore("panel", {
	state: () => ({
		open: false,
		current: "search"
	})
});
