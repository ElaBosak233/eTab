<template>
	<div id="search" class="flex rounded-xl bg-white items-center justify-center shadow-xl">
		<img alt="icon" src="https://www.baidu.com/favicon.ico" class="mx-2 w-5 h-5" draggable="false" />
		<input
			type="text"
			:placeholder="useSearchStore()['placeholder']"
			v-model="ctx"
			v-on:keyup.enter="search()"
			class="w-full text-base outline-none text-gray-700 py-1 leading-8 mr-4"
		/>
		<button class="text-gray-500 hover:text-gray-700 mr-2" v-show="ctx.length" @click="clear()">
			<Icon icon="solar:close-circle-bold" class="h-4 w-4" />
		</button>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { ref } from "vue";
let ctx = ref("");

function search() {
	if (useSearchStore()["blank"] == "true") {
		open(useSearchStore()["engine"]["options"][0]["url"] + ctx);
	} else {
		location.href = useSearchStore()["engine"]["options"][0]["url"] + ctx;
	}
}

function clear() {
	ctx.value = "";
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
