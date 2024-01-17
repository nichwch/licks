<script lang="ts">
	import BaseSelector from './BaseSelector.svelte';
	export let label: string;
	export let options: string[];
	export let selectedOptions: Set<string>;

	export let _class: string | undefined = undefined;
	export let addLabelClasses: string | undefined = undefined;
	export let labelClasses: string | undefined = undefined;
	export let addWindowClasses: string | undefined = undefined;
	export let windowClasses: string | undefined = undefined;
	export let optionClasses: string | undefined = undefined;
	export let selectedOptionClasses: string | undefined = undefined;

	let isShowing = false;
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
	on:optionClick
/>
