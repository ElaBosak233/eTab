<template>
	<div v-if="usePanelStore()['open']" class="bg-white shadow-lg">111</div>
</template>

<script setup lang="ts">
import { usePanelStore } from "@/stores/panel";
</script>
