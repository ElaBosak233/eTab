import { defineStore } from "pinia";

type SearchEngineProfile = {
	name: string;
	display_name: string;
	icon: string;
	url: string;
};

const defaultState = {
	open: false,
	profile: {} as SearchEngineProfile
};
export const useSearchEngineEditorStore = defineStore("search_engine_editor", {
	state: () => ({ ...defaultState }),
	actions: {
		reset() {
			Object.assign(this, defaultState);
		}
	}
});
