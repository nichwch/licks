<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseSelector from './BaseSelectorPopup.svelte';
	export let label: string;
	export let options: string[];
	export let selection: string | undefined | null = undefined;

	export let _class: string | undefined = undefined;
	export let addLabelClasses: string | undefined = undefined;
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses: string = '!p-0';
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string = 'w-full border-b border-b-black bg-red-200 hover:bg-red-300';
	export let selectedOptionClasses: string | undefined = undefined;
	export let showChoiceInLabel: boolean = true;

	let isShowing = false;
	$: selectedOptions = selection ? new Set([selection]) : (new Set() as Set<string>);
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
		if (selectedOptions.has(option)) {
			selection = null;
			dispatch('selectionChanged', { selectedOption: null });
		} else {
			selection = option;
			selectedOptions = new Set([option]);
			dispatch('selectionChanged', { selectedOption: option });
		}
		isShowing = false;
	}}
/>
