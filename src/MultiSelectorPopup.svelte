<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import BaseSelectorPopup from './BaseSelectorPopup.svelte';
	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;
	export let _class: string | undefined = undefined;
	export let addLabelClasses: string | undefined = undefined;
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses: string = '!w-72 flex flex-wrap gap-3';
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string | undefined = undefined;
	export let selectedOptionClasses: string | undefined = undefined;

	let isShowing = false;
	const dispatch = createEventDispatcher();
</script>

<BaseSelectorPopup
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
