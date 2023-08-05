<template>
	<div class="col-span-2 row-span-2 flex flex-col justify-center items-center no-select space-y-1.5">
		<button
			class="rounded-3xl h-48 w-48 hover-up grid-item"
			:tabindex="index"
			:style="{
				background: 'image',
				backgroundSize: 'cover',
				backgroundPosition: 'center center',
				backgroundRepeat: 'no-repeat',
				backgroundAttachment: 'fixed',
				backgroundImage: `url(${icon})`
			}"
			@click="jump()"
		/>
		<div class="text-white text-sm shadow">{{ name }}</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	name?: string;
	url?: string;
	icon?: string;
	index?: number;
}>();
function jump() {
	window.open(props.url);
}
</script>
