<template>
	<div>
		<h1 class="bg-gray-200 text-lg rounded-xl px-4 text-gray-700">同步</h1>
		<div class="flex bg-orange-400 p-2 rounded-xl text-white mt-5 text-sm justify-center items-center space-x-2">
			<Icon icon="solar:shield-warning-bold-duotone" class="h-10 w-10" />
			<span> eTab 不会以任何形式索要你的数据，eTab 不会提供任何云同步服务。 </span>
		</div>
		<div class="flex mt-5 mx-2 space-x-3 items-center justify-center">
			<button
				class="flex w-20 h-10 bg-blue-500 rounded-xl text-white shadow-lg items-center justify-center space-x-1 opacity-90 hover:opacity-100 duration-100"
			>
				<Icon icon="solar:archive-up-bold-duotone" />
				<span class="text-sm">导入</span>
			</button>
			<button
				class="flex w-20 h-10 bg-green-500 rounded-xl text-white shadow-lg items-center justify-center space-x-1 opacity-90 hover:opacity-100 duration-100"
			>
				<Icon icon="solar:archive-down-bold-duotone" />
				<span class="text-sm">导出</span>
			</button>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
