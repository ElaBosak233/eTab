<template>
	<div id="search" class="flex rounded-xl bg-white items-center justify-center shadow-xl duration-200">
		<button
			class="flex justify-center items-center rounded-lg mx-3 hover:bg-gray-200 duration-200 h-8 w-8"
			@click="!engineChangePanel ? engineChange() : null"
		>
			<img
				alt="icon"
				:src="useSearchStore()['engine']['options'][useSearchStore()['engine']['current']]['icon']"
				class="h-5"
				draggable="false"
			/>
		</button>
		<input
			type="text"
			:placeholder="useSearchStore()['placeholder']"
			v-model="ctx"
			v-on:keyup.enter="search()"
			class="w-full text-base outline-none text-gray-700 py-1 leading-8 mr-2"
		/>
		<button class="text-gray-500 hover:text-gray-700 mr-2" v-show="ctx.length" @click="clear()">
			<Icon icon="solar:close-circle-bold" class="h-4 w-4" />
		</button>
	</div>
	<div
		ref="engineChangePanelTarget"
		class="absolute -bottom-[115px] left-1 rounded-xl bg-white"
		v-if="engineChangePanel"
	>
		<div class="flex m-3 space-x-2">
			<div v-for="(item, index) in useSearchStore()['engine']['options']" :key="index" class="justify-center">
				<button
					class="flex-col flex items-center rounded-lg hover:bg-gray-300 duration-200 p-2"
					@click="
						useSearchStore()['engine']['current'] = index as string;
						engineChangePanel = false;
					"
				>
					<img :src="item['icon']" alt="" class="h-8 w-8" draggable="false" />
					<span class="text-sm">{{ item["display_name"] }}</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
const ctx = ref("");
const engineChangePanel = ref(false);
const engineChangePanelTarget = ref(null);

function search() {
	if (useSearchStore()["blank"] == "true") {
		open(useSearchStore()["engine"]["options"][useSearchStore()["engine"]["current"]]["url"] + ctx.value);
	} else {
		location.href = useSearchStore()["engine"]["options"][useSearchStore()["engine"]["current"]]["url"] + ctx.value;
	}
}

function clear() {
	ctx.value = "";
}

function engineChange() {
	engineChangePanel.value = !engineChangePanel.value;
}

onClickOutside(engineChangePanelTarget, () => {
	engineChangePanel.value = false;
});
</script>

<style lang="scss">
#search {
	opacity: v-bind("useSearchStore()['origin_opacity']");
}
#search:focus-within {
	opacity: v-bind("useSearchStore()['focus_opacity']");
}
</style>
