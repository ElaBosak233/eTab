<template>
	<div v-if="usePanelStore()['open']" class="flex bg-white shadow-lg no-select">
		<div class="mr-2">
			<aside
				class="flex flex-col items-center w-12 py-8 overflow-y-auto bg-white border-r rtl:border-l rtl:border-r-0"
			>
				<nav class="flex flex-col flex-1 space-y-5">
					<button class="p-1.5" @click="usePanelStore().current = 'about'">
						<img class="w-auto h-6" :src="useMetaStore().favicon" alt="" draggable="false" />
					</button>
					<button
						class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="usePanelStore().current == 'search' ? 'bg-gray-100' : ''"
						@click="usePanelStore().current = 'search'"
					>
						<Icon icon="solar:card-search-bold-duotone" class="w-6 h-6" />
					</button>
					<button
						class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="usePanelStore().current == 'background' ? 'bg-gray-100' : ''"
						@click="usePanelStore().current = 'background'"
					>
						<Icon icon="solar:album-bold-duotone" class="w-6 h-6" />
					</button>

					<button
						class="p-1.5 text-gray-700 focus:outline-nones transition-colors duration-200 rounded-lg hover:bg-gray-100"
						:class="usePanelStore().current == 'meta' ? 'bg-gray-100' : ''"
						@click="usePanelStore().current = 'meta'"
					>
						<Icon icon="solar:wireless-charge-bold-duotone" class="w-6 h-6" />
					</button>
				</nav>
				<!--				<div class="flex flex-col mt-7">-->
				<!--				</div>-->
			</aside>
		</div>
		<div class="w-80 p-5">
			<About v-if="usePanelStore().current == 'about'" />
			<Background v-if="usePanelStore().current == 'background'" />
			<Search v-if="usePanelStore().current == 'search'" />
			<Meta v-if="usePanelStore().current == 'meta'" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { usePanelStore } from "@/stores/panel";
import { useMetaStore } from "@/stores/meta";
import Background from "@/components/configs/Background.vue";
import Search from "@/components/configs/Search.vue";
import Meta from "@/components/configs/Meta.vue";
import About from "@/components/About.vue";
</script>
