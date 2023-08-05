<template>
	<div v-if="useCPanelStore()['open']" class="flex bg-white shadow-lg no-select">
		<div class="mr-2">
			<aside
				class="flex flex-col items-center w-12 py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0"
			>
				<nav class="flex flex-col flex-1 space-y-5">
					<button class="p-1" @click="useCPanelStore().current = 'about'">
						<img class="w-auto h-6" :src="useMetaStore().favicon" alt="" draggable="false" />
					</button>
					<button
						class="p-1 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="useCPanelStore().current == 'search' ? 'bg-gray-100' : ''"
						@click="useCPanelStore().current = 'search'"
					>
						<Icon icon="solar:card-search-bold-duotone" class="w-6 h-6" />
					</button>
					<button
						class="p-1 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="useCPanelStore().current == 'searchEngine' ? 'bg-gray-100' : ''"
						@click="useCPanelStore().current = 'searchEngine'"
					>
						<Icon icon="solar:battery-charge-minimalistic-bold-duotone" class="w-6 h-6" />
					</button>
					<button
						class="p-1 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="useCPanelStore().current == 'background' ? 'bg-gray-100' : ''"
						@click="useCPanelStore().current = 'background'"
					>
						<Icon icon="solar:album-bold-duotone" class="w-6 h-6" />
					</button>
					<button
						class="p-1 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="useCPanelStore().current == 'meta' ? 'bg-gray-100' : ''"
						@click="useCPanelStore().current = 'meta'"
					>
						<Icon icon="solar:wireless-charge-bold-duotone" class="w-6 h-6" />
					</button>
					<button
						class="p-1 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="useCPanelStore().current == 'sync' ? 'bg-gray-100' : ''"
						@click="useCPanelStore().current = 'sync'"
					>
						<Icon icon="solar:programming-bold-duotone" class="w-6 h-6" />
					</button>
				</nav>
			</aside>
		</div>
		<div class="w-80 p-5">
			<About v-if="useCPanelStore().current == 'about'" />
			<Background v-if="useCPanelStore().current == 'background'" />
			<Search v-if="useCPanelStore().current == 'search'" />
			<SearchEngine v-if="useCPanelStore().current == 'searchEngine'" />
			<Meta v-if="useCPanelStore().current == 'meta'" />
			<Sync v-if="useCPanelStore().current == 'sync'" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useCPanelStore } from "@/stores/cpanel.ts";
import { useMetaStore } from "@/stores/meta";
import Background from "@/components/configs/Background.vue";
import Search from "@/components/configs/Search.vue";
import Meta from "@/components/configs/Meta.vue";
import About from "@/components/About.vue";
import Sync from "@/components/configs/Sync.vue";
import SearchEngine from "@/components/configs/SearchEngine.vue";
</script>
