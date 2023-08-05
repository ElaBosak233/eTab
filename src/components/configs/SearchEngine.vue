<template>
	<div>
		<h1 class="bg-gray-200 text-lg rounded-xl px-4 mb-5 text-gray-700">搜索引擎</h1>
		<div
			v-for="(item, index) in useSearchStore()['engine']['options']"
			:key="index"
			class="flex mt-3 mx-2 p-1 rounded-xl space-x-1 items-center hover:bg-gray-100 duration-100"
			@click="openSearchEngineProfile(index.toString(), item['display_name'], item['icon'], item['url'])"
		>
			<img :src="item['icon']" alt="" class="mx-2 h-5 w-5" draggable="false" />
			<span>{{ item["display_name"] }}</span>
		</div>
		<div
			class="flex mt-3 p-1 rounded-xl space-x-2 items-center text-white bg-gray-400 hover:bg-gray-500 duration-100 justify-center"
			@click="openSearchEngineProfile()"
		>
			<Icon icon="solar:cloud-plus-bold-duotone" />
			<span>添加搜索引擎</span>
		</div>
		<button
			class="absolute right-5 bottom-5 bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
			@click="useSearchStore().$reset()"
		>
			重置
		</button>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
import { useCPanelStore } from "@/stores/cpanel";
import { useSearchEngineEditorStore } from "@/stores/search_engine_editor.ts";

function openSearchEngineProfile(name?: string, display_name?: string, icon?: string, url?: string) {
	useSearchEngineEditorStore()["profile"]["name"] = name as string;
	useSearchEngineEditorStore()["profile"]["display_name"] = display_name as string;
	useSearchEngineEditorStore()["profile"]["icon"] = icon as string;
	useSearchEngineEditorStore()["profile"]["url"] = url as string;
	useSearchEngineEditorStore()["open"] = true;
	useCPanelStore()["open"] = false;
}
</script>

<style scoped lang="scss"></style>
