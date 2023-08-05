<template>
	<div
		v-if="useSearchEngineEditorStore()['open']"
		class="items-center fixed shadow-xl bg-white p-5 rounded-lg top-1/2 left-1/2 w-96 -translate-x-1/2 -translate-y-1/2 no-select"
	>
		<div class="flex items-center space-x-2 mb-5 w-full bg-gray-200 px-3 rounded-xl">
			<Icon icon="solar:clapperboard-edit-bold-duotone" class="h-5 w-5" />
			<h1 class="text-xl">
				{{
					useSearchStore()["engine"]["options"][useSearchEngineEditorStore()["profile"]["name"]]
						? "编辑"
						: "添加"
				}}搜索引擎
			</h1>
		</div>
		<div class="flex space-x-5">
			<img
				v-if="useSearchEngineEditorStore()['profile']['icon']"
				:src="useSearchEngineEditorStore()['profile']['icon']"
				:alt="useSearchEngineEditorStore()['profile']['name']"
				class="h-16 w-16 rounded-xl"
				draggable="false"
			/>
			<div class="mb-12">
				<div class="flex space-x-2 items-center">
					<span class="text-sm">索引值（英文）</span>
					<input
						type="text"
						v-model="useSearchEngineEditorStore()['profile']['name']"
						class="w-28 text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">显示名称</span>
					<input
						type="text"
						v-model="useSearchEngineEditorStore()['profile']['display_name']"
						class="w-28 text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">图标地址</span>
					<input
						type="text"
						v-model="useSearchEngineEditorStore()['profile']['icon']"
						class="text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">前缀 URL</span>
					<input
						type="text"
						v-model="useSearchEngineEditorStore()['profile']['url']"
						class="text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
			</div>
			<div class="absolute left-0 bottom-5">
				<button
					v-if="useSearchStore()['engine']['options'][useSearchEngineEditorStore()['profile']['name']]"
					class="bg-red-400 hover:bg-red-500 duration-100 rounded-lg text-white h-8 w-16"
					@click="deleteSearchEngineProfile()"
				>
					删除
				</button>
			</div>
			<div class="flex absolute right-5 bottom-5 space-x-2">
				<button
					class="bg-orange-400 hover:bg-orange-500 duration-100 rounded-lg text-white h-8 w-16"
					@click="useSearchEngineEditorStore()['open'] = false"
				>
					取消
				</button>
				<button
					class="bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
					@click="submitSearchEngineProfile()"
				>
					确认
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search.ts";
import { useSearchEngineEditorStore } from "@/stores/search_engine_editor";

function submitSearchEngineProfile() {
	useSearchStore()["engine"]["options"][useSearchEngineEditorStore()["profile"]["name"]] = {
		display_name: useSearchEngineEditorStore()["profile"].display_name,
		icon: useSearchEngineEditorStore()["profile"].icon,
		url: useSearchEngineEditorStore()["profile"].url
	};
	useSearchEngineEditorStore().$reset();
}

function deleteSearchEngineProfile() {
	delete useSearchStore()["engine"]["options"][useSearchEngineEditorStore()["profile"].name];
	useSearchEngineEditorStore().$reset();
}
</script>

<style scoped lang="scss"></style>
