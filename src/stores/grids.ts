import { defineStore } from "pinia";

type Element = {
	name: string;
	type: string;
	url: string;
	icon: string;
};

const defaultState = {
	elements: [
		{
			name: "力扣",
			type: "2x2",
			url: "https://leetcode.cn",
			icon: "https://s1.ax1x.com/2023/08/05/pPk4Vr6.png"
		},
		{
			name: "GitHub",
			type: "1x2",
			url: "https://github.com",
			icon: "https://s1.ax1x.com/2023/08/05/pPk4mVO.png"
		},
		{
			name: "哔哩哔哩",
			type: "1x1",
			url: "https://www.bilibili.com",
			icon: "https://s1.ax1x.com/2023/08/05/pPkhoVS.png"
		}
	] as Element[]
};
export const useGridsStore = defineStore("grids", {
	state: () => ({ ...defaultState }),
	actions: {
		reset() {
			Object.assign(this, defaultState);
		}
	},
	persist: {
		storage: localStorage,
		key: "grids"
	}
});
