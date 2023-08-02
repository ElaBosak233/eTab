<template>
	<div>
		<div class="fixed left-1/2 -translate-x-1/2 top-24 w-96">
			<Search />
		</div>
		<div>
			<button
				id="settingButton"
				class="fixed bottom-5 left-5 rounded-lg z-10 p-1 hover:bg-gray-600 text-gray-400 hover:text-gray-200"
				@click="usePanelStore()['open'] = !usePanelStore()['open']"
			>
				<Icon icon="solar:settings-bold-duotone" width="25" />
			</button>
			<Transition name="fade">
				<SettingPanel class="rounded-xl fixed bottom-16 left-14 mr-5 p-5 z-10" />
			</Transition>
			<Transition name="fade">
				<div
					id="overlay"
					class="fixed top-0 right-0 left-0 bottom-0 opacity-60 bg-gray-600 z-0"
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
import SettingPanel from "@/components/settings/Panel.vue";
import { Icon } from "@iconify/vue";
</script>
