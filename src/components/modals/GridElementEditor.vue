<template>
	<div
		v-if="useGridElementEditorStore()['open']"
		class="items-center fixed shadow-xl bg-white p-5 rounded-lg top-1/2 left-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 no-select"
	>
		<div class="flex items-center space-x-2 mb-5 w-full bg-gray-200 px-3 rounded-xl">
			<Icon icon="solar:clapperboard-edit-bold-duotone" class="h-5 w-5" />
			<h1 class="text-xl">{{ useGridElementEditorStore()["editMode"] ? "编辑" : "新建" }}元素</h1>
		</div>
		<div class="flex space-x-5">
			<div
				v-if="useGridElementEditorStore()['profile']['icon']"
				:class="getSuitableImgClass(useGridElementEditorStore()['profile']['type'])"
				:style="{
					background: 'image',
					backgroundSize: 'cover',
					backgroundPosition: 'center center',
					backgroundRepeat: 'no-repeat',
					backgroundAttachment: 'fixed',
					backgroundImage: `url(${useGridElementEditorStore()['profile']['icon']})`
				}"
			/>
			<div class="mb-12">
				<div class="flex space-x-2 items-center">
					<span class="text-sm">名称</span>
					<input
						type="text"
						v-model="useGridElementEditorStore()['profile']['name']"
						class="w-28 text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">图标类型</span>
					<select
						class="block px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md w-32 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
						v-model="useGridElementEditorStore()['profile']['type']"
					>
						<option value="1x1">1x1</option>
						<option value="1x2">1x2</option>
						<option value="2x1">2x1</option>
						<option value="2x2">2x2</option>
					</select>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">图标地址</span>
					<input
						type="text"
						v-model="useGridElementEditorStore()['profile']['icon']"
						class="text-sm block w-auto rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
				<div class="flex space-x-2 items-center mt-2">
					<span class="text-sm">URL</span>
					<input
						type="text"
						v-model="useGridElementEditorStore()['profile']['url']"
						class="text-sm block w-auto rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
					/>
				</div>
			</div>
			<div class="flex absolute right-5 bottom-5 space-x-2" v-if="!useGridElementEditorStore()['editMode']">
				<button
					class="bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
					@click="submitGridElementProfile()"
				>
					确认
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useGridsStore } from "@/stores/grids";
import { useGridElementEditorStore } from "@/stores/grid_element_editor";

function getSuitableImgClass(type: string) {
	if (type == "1x1") {
		return "h-16 w-16 rounded-3xl";
	} else if (type == "2x2") {
		return "h-16 w-16 rounded-3xl";
	} else if (type == "1x2") {
		return "h-32 w-16 rounded-full";
	} else if (type == "2x1") {
		return "h-16 w-32 rounded-full";
	}
}

function submitGridElementProfile() {
	useGridsStore()["elements"].push({
		name: useGridElementEditorStore()["profile"].name,
		type: useGridElementEditorStore()["profile"].type,
		icon: useGridElementEditorStore()["profile"].icon,
		url: useGridElementEditorStore()["profile"].url
	});
	useGridElementEditorStore().reset();
}
</script>

<style scoped lang="scss"></style>
