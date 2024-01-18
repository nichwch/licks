<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import LabelAndPopup from './BaseLabelAndPopup.svelte';

	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;
	export let isShowing: boolean;
	export let _class: string = '';
	export let addLabelClasses = '';
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses = '';
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string =
		'px-1 border border-black bg-red-200 hover:bg-red-300 transition-colors ';
	export let addOptionClasses: string | undefined = undefined;
	export let selectedOptionClasses: string = '!bg-red-400 hover:!bg-red-400';
	const dispatch = createEventDispatcher();
</script>

<LabelAndPopup
	{isShowing}
	{_class}
	{addWindowClasses}
	{windowClasses}
	{addLabelClasses}
	{labelClasses}
	on:click_outside
	on:click
>
	<svelte:fragment slot="buttonContent">
		{label}
	</svelte:fragment>
	<svelte:fragment slot="windowContent">
		{#each options as option}<button
				class="{optionClasses} {addOptionClasses} {selectedOptions.has(option)
					? selectedOptionClasses
					: ''}"
				on:click={() => dispatch('optionClick', { option })}>{option}</button
			>{/each}
	</svelte:fragment>
</LabelAndPopup>
