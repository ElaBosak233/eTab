<template>
	<div>
		<div id="searchArea" class="w-80 sm:w-1/2 lg:w-1/3 -z-10">
			<Search />
		</div>
		<div id="gridsArea" class="w-80 sm:w-1/2 -z-20">
			<GridPanel />
		</div>
		<div id="cpanelArea">
			<button
				id="settingButton"
				class="fixed bottom-5 left-5 rounded-lg z-10 p-1 hover:bg-gray-600 text-gray-400 hover:text-gray-200 duration-200"
				@click="useCPanelStore()['open'] = !useCPanelStore()['open']"
			>
				<Icon icon="solar:settings-bold-duotone" width="25" />
			</button>
			<Transition name="fade">
				<CPanel class="rounded-xl fixed bottom-16 sm:bottom-16 sm:left-14 mr-5 p-2 z-10" />
			</Transition>
			<Transition name="fade">
				<SearchEngineEditor class="z-10" />
			</Transition>
			<Transition name="fade">
				<GridElementEditor class="z-10" />
			</Transition>
			<Transition name="fade">
				<div
					id="overlay"
					class="fixed top-0 right-0 left-0 bottom-0 opacity-60 bg-gray-700 z-0"
					v-if="
						useCPanelStore()['open'] ||
						useSearchEngineEditorStore()['open'] ||
						useGridElementEditorStore()['open']
					"
					@click="
						useCPanelStore()['open'] = false;
						useSearchEngineEditorStore()['open'] = false;
						useGridElementEditorStore()['open'] = false;
					"
				></div>
			</Transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCPanelStore } from "@/stores/cpanel.ts";
import Search from "@/components/Search.vue";
import CPanel from "@/components/CPanel.vue";
import SearchEngineEditor from "@/components/modals/SearchEngineEditor.vue";
import GridPanel from "@/components/GridPanel.vue";
import { useSearchEngineEditorStore } from "@/stores/search_engine_editor.ts";
import GridElementEditor from "@/components/modals/GridElementEditor.vue";
import { useGridElementEditorStore } from "@/stores/grid_element_editor.ts";
</script>
