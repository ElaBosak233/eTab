<template>
	<div
		id="search"
		class="flex rounded-xl bg-white border border-gray-300 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-200 transition-colors items-center justify-center"
	>
		<img alt="icon" src="https://www.baidu.com/favicon.ico" class="mx-2 w-5 h-5" draggable="false" />
		<input
			id="search"
			type="text"
			:placeholder="store['placeholder']"
			v-model="ctx"
			v-on:keyup.enter="search()"
			class="w-full rounded-xl text-base outline-none text-gray-700 py-1 leading-8"
		/>
		<input type="range" min="0" max="1" step="0.01" v-model="store['focus_opacity']" />
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
const store = useSearchStore();
let ctx = "";

function search() {
	location.href = store["engine"]["options"][0]["url"] + ctx;
}
</script>

<style lang="scss">
#search {
	opacity: v-bind("useSearchStore()['origin_opacity']");
}
#search:focus-within {
	opacity: v-bind("useSearchStore()['focus_opacity']");
}
</style>
