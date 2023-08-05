<template>
	<div class="col-span-1 row-span-1 flex flex-col justify-center items-center no-select space-y-1.5">
		<button
			class="rounded-3xl h-20 w-20 hover-up grid-item"
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
