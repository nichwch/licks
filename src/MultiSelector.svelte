<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseSelector from './BaseSelector.svelte';
	export let label: string;
	export let options: string[];
	export let initiallySelected: string[] = [];

	export let _class: string | undefined = undefined;
	export let addLabelClasses: string | undefined = undefined;
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses: string | undefined = undefined;
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string | undefined = undefined;
	export let selectedOptionClasses: string | undefined = undefined;

	let isShowing = false;
	let selectedOptions = new Set(initiallySelected);
	const dispatch = createEventDispatcher();
</script>

<BaseSelector
	{label}
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
		console.log(event.detail);
		if (selectedOptions.has(option)) selectedOptions.delete(option);
		else selectedOptions.add(option);
		selectedOptions = selectedOptions;
		dispatch('selectionChanged', { selectedOptions });
	}}
/>
