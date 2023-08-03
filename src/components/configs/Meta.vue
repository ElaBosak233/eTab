<template>
	<div>
		<h1 class="bg-gray-200 text-lg rounded-xl px-4 text-gray-700">元</h1>
		<div class="flex mt-5 mx-2 space-x-3 items-center">
			<span>标题</span>
			<input
				type="text"
				v-model="useMetaStore()['title']"
				class="text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
			/>
		</div>
		<div class="flex mt-2 mx-2 space-x-2 items-center">
			<span>图标</span>
			<input
				type="text"
				v-model="useMetaStore()['favicon']"
				class="text-sm w-56 block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
			/>
		</div>
		<button
			class="absolute right-5 bottom-5 bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
			@click="useMetaStore().reset()"
		>
			重置
		</button>
	</div>
</template>

<script setup lang="ts">
import { useMetaStore } from "@/stores/meta";
</script>

<style scoped lang="scss"></style>
