<template>
	<div>
		<div class="flex justify-center h-16">
			<img :src="useMetaStore()['favicon']" alt="" draggable="false" />
		</div>
		<div class="flex justify-center mt-2">
			<h1 class="text-xl font-serif">eTab 新标签页</h1>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useMetaStore } from "@/stores/meta";
</script>
