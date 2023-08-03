<template>
	<div class="h-full flex items-center justify-center">
		<div>
			<div class="flex justify-center h-16">
				<img :src="useMetaStore()['favicon']" alt="" draggable="false" />
			</div>
			<div class="flex justify-center mt-2">
				<h1 class="text-xl font-serif">eTab 新标签页</h1>
			</div>
			<span class="flex flex-1 justify-center font-serif text-sm text-gray-500">
				<span>Powered by </span>
				<a class="underline hover:text-green-500" href="https://github.com/ElaBosak233" target="_blank"
					>@ElaBosak233</a
				>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMetaStore } from "@/stores/meta";
</script>
