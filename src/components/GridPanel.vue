<template>
	<div>
		<draggable
			class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 grid-flow-row gap-4"
			:list="useGridsStore()['elements']"
			v-bind="dragOptions"
			ghost-class="ghost"
			@start="drag = true"
			@end="drag = false"
			:item-key="getCounter().toString()"
		>
			<template #item="{ element, index }">
				<component
					:is="getComponentName(element['type'])"
					:name="element['name']"
					:icon="element['icon']"
					:url="element['url']"
					:index="index"
				></component>
			</template>
		</draggable>
	</div>
</template>

<script setup lang="ts">
import draggable from "vuedraggable";
import GridEle_1x1 from "@/components/grids/elements/GridEle_1x1.vue";
import GridEle_2x2 from "@/components/grids/elements/GridEle_2x2.vue";
import GridEle_1x2 from "@/components/grids/elements/GridEle_1x2.vue";
import GridEle_2x1 from "@/components/grids/elements/GridEle_2x1.vue";
import { useGridsStore } from "@/stores/grids";
import { useGridElementEditorStore } from "@/stores/grid_element_editor";
import { computed, h, ref } from "vue";
import ContextMenu from "@imengyu/vue3-context-menu";
import { Icon } from "@iconify/vue";
let counter = 0;
function getCounter() {
	counter++;
	return counter;
}
const drag = ref(false);
const dragOptions = computed(() => ({
	animation: 200,
	disabled: false
}));
function getComponentName(type: string) {
	switch (type) {
		case "1x2":
			return GridEle_1x2;
		case "2x1":
			return GridEle_2x1;
		case "2x2":
			return GridEle_2x2;
		default:
			return GridEle_1x1;
	}
}

function deleteElement(index: number) {
	useGridsStore()["elements"].splice(index, 1);
}

// 右键菜单
oncontextmenu = function (e: MouseEvent) {
	const eventTarget = e.target as HTMLElement;
	if (eventTarget.classList.contains("grid-item")) {
		e.preventDefault();
		ContextMenu.showContextMenu({
			x: e.x,
			y: e.y,
			items: [
				{
					label: "编辑元素",
					icon: h(Icon, {
						icon: "solar:gallery-edit-bold-duotone",
						style: {
							width: "20px",
							height: "20px"
						}
					}),
					onClick: () => {
						useGridElementEditorStore().$reset();
						useGridElementEditorStore()["profile"] = useGridsStore()["elements"][eventTarget.tabIndex];
						useGridElementEditorStore()["open"] = true;
						useGridElementEditorStore()["editMode"] = true;
					}
				},
				{
					label: "删除元素",
					icon: h(Icon, {
						icon: "solar:close-square-bold-duotone",
						style: {
							width: "20px",
							height: "20px"
						}
					}),
					onClick: () => {
						useGridElementEditorStore().$reset();
						deleteElement(eventTarget.tabIndex);
					}
				}
			]
		});
	}
	if (eventTarget.classList.contains("grid")) {
		e.preventDefault();
		ContextMenu.showContextMenu({
			x: e.x,
			y: e.y,
			items: [
				{
					label: "新建元素",
					icon: h(Icon, {
						icon: "solar:pen-new-square-bold-duotone",
						style: {
							width: "20px",
							height: "20px"
						}
					}),
					onClick: () => {
						useGridElementEditorStore().$reset();
						useGridElementEditorStore()["open"] = true;
						useGridElementEditorStore()["editMode"] = false;
					}
				}
			]
		});
	}
};
</script>

<style lang="scss">
.ghost {
	opacity: 0.5;
}
</style>
