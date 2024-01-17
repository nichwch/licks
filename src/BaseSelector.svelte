<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LabelAndPopup from './BaseLabelAndPopup.svelte';
	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;
	export let isShowing: boolean;
	export let _class: string = '';
	export let labelClasses: string = 'bg-red-300 hover:bg-red-400 transition-colors';
	export let windowClasses: string = 'block w-72  border border-black bg-white p-3 shadow';
	export let optionClasses: string =
		'px-1 mb-2 border border-black bg-red-200 hover:bg-red-300 transition-colors mr-3';
	const dispatch = createEventDispatcher();
</script>

<LabelAndPopup {isShowing} {_class} {windowClasses} {labelClasses} on:click_outside on:click>
	<svelte:fragment slot="buttonContent">
		{label}
	</svelte:fragment>
	<svelte:fragment slot="windowContent">
		{#each options as option}<button
				class:underline={selectedOptions.has(option)}
				class={optionClasses}
				on:click={() => dispatch('optionClick', { option })}>{option}</button
			>{/each}
	</svelte:fragment>
</LabelAndPopup>
