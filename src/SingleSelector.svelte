<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseSelector from './BaseSelector.svelte';
	export let label: string;
	export let options: string[];
	export let initialSelection: string | undefined = undefined;

	export let _class: string | undefined = undefined;
	export let addLabelClasses: string | undefined = undefined;
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses: string = 'p-0';
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string = 'w-full border-b border-b-black bg-red-200 hover:bg-red-300';
	export let selectedOptionClasses: string | undefined = undefined;
	export let showChoiceInLabel: boolean = true;

	let isShowing = false;
	let selectedOptions: Set<string> = initialSelection ? new Set([initialSelection]) : new Set();
	$: computedLabel = showChoiceInLabel
		? selectedOptions.size > 0
			? `selected: ${Array.from(selectedOptions)[0]}`
			: label
		: label;
	const dispatch = createEventDispatcher();
</script>

<BaseSelector
	label={computedLabel}
	{isShowing}
	{options}
	{selectedOptions}
	{_class}
	{addLabelClasses}
	{labelClasses}
	{addWindowClasses}
	{windowClasses}
	{optionClasses}
	{selectedOptionClasses}
	on:click={() => (isShowing = !isShowing)}
	on:click_outside={() => (isShowing = false)}
	on:optionClick={(event) => {
		const { option } = event.detail;
		if (selectedOptions.has(option)) selectedOptions = new Set();
		else selectedOptions = new Set([option]);
		isShowing = false;
		dispatch('selectionChanged', { selectedOption: option });
	}}
/>
