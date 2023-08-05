import { defineStore } from "pinia";
import { cloneDeep } from "lodash";

type SearchEngineProfile = {
	name: string;
	display_name: string;
	icon: string;
	url: string;
};

const defaultState = {
	open: false,
	profile: {
		name: "",
		display_name: "",
		icon: "",
		url: ""
	} as SearchEngineProfile
};
export const useSearchEngineEditorStore = defineStore("search_engine_editor", {
	state: () => cloneDeep(defaultState)
});
