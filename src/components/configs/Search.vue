<template>
	<div>
		<h1 class="bg-gray-200 text-lg rounded-xl px-4 text-gray-700">搜索框</h1>
		<div class="flex mt-5 space-x-3 items-center">
			<span class="text-sm">跳转方式</span>
			<select
				class="block px-2 py-1 text-gray-700 bg-white border border-gray-300 rounded-md w-32 focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm"
				v-model="useSearchStore()['blank']"
			>
				<option value="false">本页面</option>
				<option value="true">新页面</option>
			</select>
		</div>
		<div class="flex mt-2 space-x-3 items-center">
			<span class="text-sm">占位符</span>
			<input
				type="text"
				v-model="useSearchStore()['placeholder']"
				class="text-sm block rounded-lg border border-gray-200 bg-white px-2 py-1 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
			/>
		</div>
		<div class="flex mt-3">
			<span class="text-sm">搜索框透明度（常态）</span>
			<input type="range" min="0" max="1" step="0.01" v-model="useSearchStore()['origin_opacity']" />
		</div>
		<div class="flex mt-3">
			<span class="text-sm">搜索框透明度（关注）</span>
			<input type="range" min="0" max="1" step="0.01" v-model="useSearchStore()['focus_opacity']" />
		</div>
		<div class="flex mt-3 space-x-2">
			<span class="text-sm">搜索框 Y 轴位置</span>
			<input type="range" min="0" max="1" step="0.01" v-model="useSearchStore()['bottom']" />
		</div>
		<div class="flex mt-3 space-x-2">
			<span class="text-sm">搜索框 X 轴位置</span>
			<input type="range" min="0" max="1" step="0.01" v-model="useSearchStore()['left']" />
		</div>
		<div class="flex mt-3 space-x-2">
			<span class="text-sm">搜索框高度</span>
			<input type="range" min="48" max="128" step="1" v-model="useSearchStore()['height']" />
		</div>
		<button
			class="absolute right-5 bottom-5 bg-blue-400 hover:bg-blue-500 duration-100 rounded-lg text-white h-8 w-16"
			@click="useSearchStore().reset()"
		>
			重置
		</button>
	</div>
</template>

<script setup lang="ts">
import { useSearchStore } from "@/stores/search";
</script>
