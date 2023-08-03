<template>
	<div>
		<div id="searchArea" class="w-80 sm:w-1/2 lg:w-1/3">
			<Search />
		</div>
		<div id="panelArea">
			<button
				id="settingButton"
				class="fixed bottom-5 left-5 rounded-lg z-10 p-1 hover:bg-gray-600 text-gray-400 hover:text-gray-200"
				@click="usePanelStore()['open'] = !usePanelStore()['open']"
			>
				<Icon icon="solar:settings-bold-duotone" width="25" />
			</button>
			<Transition name="fade">
				<CPanel class="rounded-xl fixed bottom-16 sm:bottom-16 sm:left-14 mr-5 p-2 z-10" />
			</Transition>
			<Transition name="fade">
				<div
					id="overlay"
					class="fixed top-0 right-0 left-0 bottom-0 opacity-60 bg-gray-700 z-0"
					v-if="usePanelStore()['open']"
					@click="usePanelStore()['open'] = false"
				></div>
			</Transition>
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePanelStore } from "@/stores/panel";
import Search from "@/components/Search.vue";
import CPanel from "@/components/CPanel.vue";
</script>
