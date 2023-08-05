<template>
	<div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 grid-flow-row gap-4">
		<template v-for="(item, index) in elements" :key="index">
			<GridEle_1x2
				v-if="item['type'] == '1x2'"
				:name="item['name']"
				:icon="item['icon']"
				:url="item['url']"
				draggable="true"
				@dragstart="dragStart(index, $event)"
				@dragover.prevent
				@drop="drop(index, $event)"
			/>
			<GridEle_2x1
				v-if="item['type'] == '2x1'"
				:name="item['name']"
				:icon="item['icon']"
				:url="item['url']"
				draggable="true"
				@dragstart="dragStart(index, $event)"
				@dragover.prevent
				@drop="drop(index, $event)"
			/>
			<GridEle_2x2
				v-if="item['type'] == '2x2'"
				:name="item['name']"
				:icon="item['icon']"
				:url="item['url']"
				draggable="true"
				@dragstart="dragStart(index, $event)"
				@dragover.prevent
				@drop="drop(index, $event)"
			/>
			<GridEle_1x1
				v-if="item['type'] == '1x1'"
				:name="item['name']"
				:icon="item['icon']"
				:url="item['url']"
				draggable="true"
				@dragstart="dragStart(index, $event)"
				@dragover.prevent
				@drop="drop(index, $event)"
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
import GridEle_1x1 from "@/components/grids/elements/GridEle_1x1.vue";
import GridEle_2x2 from "@/components/grids/elements/GridEle_2x2.vue";
import GridEle_1x2 from "@/components/grids/elements/GridEle_1x2.vue";
import GridEle_2x1 from "@/components/grids/elements/GridEle_2x1.vue";
import { useGridsStore } from "@/stores/grids";
import { computed } from "vue";
const elements = computed(() => useGridsStore()["elements"]);
const dragStart = (index: any, event: any) => {
	event.dataTransfer.setData("text/plain", index.toString());
};

const drop = (targetIndex: any, event: any) => {
	const sourceIndex = parseInt(event.dataTransfer.getData("text/plain"));
	const draggedApp = elements.value[sourceIndex];

	elements.value.splice(sourceIndex, 1);
	elements.value.splice(targetIndex, 0, draggedApp);
};
</script>
