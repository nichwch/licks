<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let options: string[];
	export let selectedOptions: Set<string>;
	export let optionClasses: string =
		'px-1 border border-black bg-red-200 hover:bg-red-300 transition-colors';
	export let selectedOptionClasses: string = '!bg-red-400 hover:!bg-red-400';
	const dispatch = createEventDispatcher();
</script>

<div class="flex flex-wrap gap-2">
	{#each options as option}<button
			class="{optionClasses} {selectedOptions.has(option) ? selectedOptionClasses : ''}"
			on:click={() => {
				if (selectedOptions.has(option)) {
					selectedOptions.delete(option);
				} else {
					selectedOptions.add(option);
				}
				selectedOptions = selectedOptions;
				dispatch('selectionChanged', { selectedOptions });
			}}>{option}</button
		>{/each}
</div>
