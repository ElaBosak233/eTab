<template>
	<div>
		<h1 class="bg-gray-200 text-lg rounded-xl px-4 text-gray-700">背景</h1>
		<div class="flex mt-5 mx-2 space-x-3 items-center">
			<span>背景类型</span>
			<select
				class="block px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md w-32 focus:outline-none focus:ring-primary-500 focus:border-primary-500"
				v-model="useBackgroundStore()['type']"
			>
				<option value="color">纯色</option>
				<option value="image">图片链接</option>
			</select>
		</div>
		<div class="flex mt-2 mx-2 space-x-3 items-center">
			<span v-if="useBackgroundStore()['type'] == 'color'">颜色代码</span>
			<span v-if="useBackgroundStore()['type'] == 'image'">图片 URL</span>
			<input
				type="text"
				v-model="useBackgroundStore()['value']"
				class="text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
			/>
		</div>
		<button
			class="absolute right-5 bottom-5 bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
			@click="useBackgroundStore().reset()"
		>
			重置
		</button>
	</div>
</template>

<script setup lang="ts">
import { useBackgroundStore } from "@/stores/background";
</script>

<style scoped lang="scss"></style>
