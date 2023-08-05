import { defineStore } from "pinia";
import { cloneDeep } from "lodash";

type GridElementProfile = {
	name: string;
	type: string;
	icon: string;
	url: string;
};

const defaultState = {
	open: false,
	editMode: false,
	profile: {
		name: "",
		type: "",
		icon: "",
		url: ""
	} as GridElementProfile
};
export const useGridElementEditorStore = defineStore("grid_element_editor", {
	state: () => cloneDeep(defaultState)
});
